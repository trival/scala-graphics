package sketches.rooms.gridceiling

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.dev.*
import trivalibs.graphics.buffers.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.blur.Blur
import trivalibs.graphics.shader.lib.random.Psrdnoise
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Open endless "indirect light" space (see PLAN.md). No walls — a floor and a
// ceiling that appear to extend endlessly, with two crossing grids of strips
// suspended just below the ceiling, and a centre box (item-display stand-in).
//
// SHARED NOISE VOLUME. Every surface samples ONE conceptual 3D noise volume —
// `fbm(tilingNoise3d(worldPos · NoiseScale, noisePeriod))` — at world position,
// so floor / ceiling / grid / box are all slices or patches of the same field
// and stay mutually aligned. Surfaces that cover huge areas bake a small slice
// and repeat it (AddressMode.Repeat); the box bakes a unique patch (clamp):
//   - ground / ceiling: flat 2D square tile, sampled by world XZ.
//   - each grid direction (rows / cols): a FOLDED 2D surface — strip faces
//     unwrap into a UV atlas; bake `TileCells` strips (one period), and let the
//     render UV run past 1 so the Repeat sampler wraps it over the whole grid.
//   - box: 5 faces unwrapped into a 5-band atlas; same volume, no repeat.
//
// TWEAKABLES (all in the `Painter.init` body; the rest derive from these):
//   Space:   fogEnd (visible radius → extent), ceilingY.
//   Grid:    rowSpacing / colSpacing (strip spacing), stripWidth, stripHeight,
//            gridY (height of the grid plane).
//   Noise:   displayArea (shared tiling period in world units — bigger = less
//            repetition but larger grid atlas), targetNoiseScale (feature size;
//            snapped to keep tiling exact), NoiseContrast (high for now; Step 5
//            dampens it), FbmOctaves, FbmGain.
//   Box:     boxSize, boxHeight.
//   Bake res: gridTexPx, planeTilePx factor, boxTilePx.
// Note: psrdnoise tiles only at INTEGER domain periods, so targetNoiseScale is
// snapped (noisePeriod = round(tileWorld · targetNoiseScale)); FBM lacunarity is
// fixed at 2 so every octave period stays integer ⇒ the sum still tiles.
//
// STATUS: Steps 1–3 done (open geometry, shared tiling-FBM noise, centre box).
// Pending: Step 4 fog/DOF, Step 5 lights + bloom + reflection.
// ---------------------------------------------------------------------------

type GridVertex = (position: Vec3, uv: Vec2)

def gvert(c: Vec3, u: Double, v: Double): GridVertex =
  (position = c, uv = Vec2(u, v))

// Row strips run along X (length), repeat along Z. Each strip contributes a
// `front / back / bottom` band to the UV atlas; V is normalized over
// `vTileCount` strips so a full grid's V runs past 1 and the Repeat sampler
// wraps it. `u` tracks world X (÷ tileWorld) so it tiles along the strip too.
def rowStrips(
    n: Int,
    length: Double,
    xCenter: Double,
    startZ: Double,
    step: Double,
    gridY: Double,
    sw: Double,
    sh: Double,
    tileWorld: Double,
    vTileCount: Int,
): Arr[Quad[GridVertex]] =
  val perStripV = 2.0 * sh + sw
  val vFull = vTileCount * perStripV
  val vH = sh / vFull
  val vB = sw / vFull
  val perStripVn = perStripV / vFull
  val faces = Arr[Quad[GridVertex]]()
  var i = 0
  while i < n do
    val box = Box(Vec3(xCenter, gridY, startZ + i * step), length, sh, sw)
    val vb = i * perStripVn
    faces.push(
      box.frontFace((c, uvw) => gvert(c, c.x / tileWorld, vb + uvw.y * vH)),
    )
    faces.push(
      box.backFace((c, uvw) => gvert(c, c.x / tileWorld, vb + vH + uvw.y * vH)),
    )
    faces.push(
      box.bottomFace((c, uvw) =>
        gvert(c, c.x / tileWorld, vb + 2.0 * vH + uvw.z * vB),
      ),
    )
    i += 1
  faces

// Column strips run along Z (length), repeat along X; visible faces are
// left / right / bottom. `u` tracks world Z (÷ tileWorld).
def colStrips(
    n: Int,
    length: Double,
    zCenter: Double,
    startX: Double,
    step: Double,
    gridY: Double,
    sw: Double,
    sh: Double,
    tileWorld: Double,
    vTileCount: Int,
): Arr[Quad[GridVertex]] =
  val perStripV = 2.0 * sh + sw
  val vFull = vTileCount * perStripV
  val vH = sh / vFull
  val vB = sw / vFull
  val perStripVn = perStripV / vFull
  val faces = Arr[Quad[GridVertex]]()
  var i = 0
  while i < n do
    val box = Box(Vec3(startX + i * step, gridY, zCenter), sw, sh, length)
    val vb = i * perStripVn
    faces.push(
      box.leftFace((c, uvw) => gvert(c, c.z / tileWorld, vb + uvw.y * vH)),
    )
    faces.push(
      box.rightFace((c, uvw) => gvert(c, c.z / tileWorld, vb + vH + uvw.y * vH)),
    )
    faces.push(
      box.bottomFace((c, uvw) =>
        gvert(c, c.z / tileWorld, vb + 2.0 * vH + uvw.x * vB),
      ),
    )
    i += 1
  faces

// A flat plane quad whose UV maps world XZ → tile (÷ tileWorld), so it
// repeat-samples a square tile of the noise volume. `centerXZ` shifts the quad:
// the render quad is origin-centred (UV ranges freely, Repeat sampler tiles it);
// the bake quad is centred at `tileWorld/2` so its UV fills [0,1].
def planeQuad(
    size: Double,
    centerXZ: Double,
    y: Double,
    normal: Vec3,
    tileWorld: Double,
): Arr[Quad[GridVertex]] =
  Arr(
    Quad.fromDimensionsCenter[GridVertex](
      size,
      size,
      normal,
      Vec3(centerXZ, y, centerXZ),
    ): (pos, _) =>
      gvert(pos, pos.x / tileWorld, pos.z / tileWorld),
  )

// Centre reference box (item-display stand-in): stands on the ground, well
// below the ceiling. Its 5 visible faces (top + 4 sides; bottom hidden on the
// ground) unwrap into a 5-band UV atlas — each face fills U and a 1/5 V band.
// Baked with the SAME (periodic) noise volume as everything else, so its patch
// is continuous with the ground; it doesn't tile (UV stays in [0,1]).
def boxFaces(size: Double, height: Double): Arr[Quad[GridVertex]] =
  val box = Box(Vec3(0.0, height / 2.0, 0.0), size, height, size)
  val vb = 1.0 / 5.0
  Arr(
    box.topFace((c, uvw) => gvert(c, uvw.x, 0.0 * vb + uvw.z * vb)),
    box.frontFace((c, uvw) => gvert(c, uvw.x, 1.0 * vb + uvw.y * vb)),
    box.backFace((c, uvw) => gvert(c, uvw.x, 2.0 * vb + uvw.y * vb)),
    box.leftFace((c, uvw) => gvert(c, uvw.z, 3.0 * vb + uvw.y * vb)),
    box.rightFace((c, uvw) => gvert(c, uvw.z, 4.0 * vb + uvw.y * vb)),
  )

@main def roomsGridCeiling(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // ------ space dimensions ------
    val fogEnd = 160.0
    val extent = 2.0 * fogEnd + 20.0 // open space reaches past the fog edge
    val ceilingY = 20.0

    // ------ grid layout ------
    val rowSpacing = 2.0 // target strip spacing along Z (rows)
    val colSpacing = 2.0 // target strip spacing along X (cols)
    val stripWidth = 0.15
    val stripHeight = 0.8
    val rowCount = (extent / rowSpacing).floor.toInt
    val colCount = (extent / colSpacing).floor.toInt
    val gridStep =
      extent / rowCount // actual strip spacing (== extent/colCount)
    val gridY = ceilingY - 1.0 // grid hangs just below the ceiling
    // Strips centred on the extent.
    val gridStart = -extent / 2.0 + gridStep / 2.0

    // ------ shared tiling-noise volume ------
    // ONE noise volume for EVERY surface: a single world period + scale, sampled
    // at world position. So floor, ceiling, grid and box are all slices/patches
    // of the same field and stay mutually aligned (same period everywhere — a
    // different period would be a different field).
    val NoiseContrast = 1.0 // global, baked into the shader (Step 5 dampens it)
    // `tileWorld` is the shared world period; it covers the central display area
    // (bigger ⇒ less repetition but larger grid atlas). Aligned to the grid strip
    // spacing so the grid tiles cleanly — the grid bakes `TileCells` strips per
    // period.
    val displayArea = 28.0
    val TileCells = (displayArea / gridStep).round.toInt.max(1)
    val tileWorld = TileCells * gridStep // shared period, strip-aligned (~48)
    // Feature-size knob. psrdnoise only tiles cleanly when the DOMAIN period
    // (tileWorld · NoiseScale) is an integer, so snap: round it, derive the real
    // NoiseScale. Lower scale = bigger features (biggest = period 1 spans a tile).
    val targetNoiseScale = 0.125
    val noisePeriod = (tileWorld * targetNoiseScale).round.toInt.max(1)
    val NoiseScale = noisePeriod.toDouble / tileWorld // snapped
    // FBM: each octave doubles the frequency AND its domain period (lacunarity
    // must be the integer 2 so every octave period stays integer ⇒ the sum still
    // tiles). `FbmGain` weights successive octaves (lower = subtler detail).
    val FbmOctaves = 4
    val FbmGain = 0.3

    // --- bake shade: lay the UV atlas flat, sample the noise volume at the
    //     surface's true world position with a tiling FBM. Parameterized by the
    //     base integer domain period (plain Scala vals baked in — no uniform). ---
    def bakeShade(domainPeriod: Int): Shade[EmptyTuple, EmptyTuple] =
      // Tiling FBM: octave o samples at frequency 2^o with period base·2^o, so
      // every octave (and the sum) tiles at the same world period.
      def fbm(domainPos: Vec3Expr): FloatExpr =
        var acc: FloatExpr = (0.0: FloatExpr)
        var freq = 1
        var amp = 1.0
        var totalAmp = 0.0
        var o = 0
        while o < FbmOctaves do
          val pd = (domainPeriod * freq).toDouble
          acc = acc + Psrdnoise
            .tilingNoise3d(domainPos * freq.toDouble, vec3(pd, 0.0, pd))
            .x * amp
          totalAmp += amp
          freq *= 2
          amp *= FbmGain
          o += 1
        (acc / totalAmp).fit1101.clamp01
      p.shade[GridVertex, (worldPos: Vec3), EmptyTuple]: program =>
        program.vert: ctx =>
          val uv = ctx.in.uv
          Block(
            ctx.out.worldPos := ctx.in.position,
            ctx.out.position := vec4(
              uv.x.fit0111,
              (1.0 - uv.y).fit0111,
              0.0,
              1.0,
            ),
          )
        program.frag: ctx =>
          val n = LetFloat("n")
          Block(
            n := fbm(ctx.in.worldPos * NoiseScale),
            ctx.out.color := vec4(vec3(n), 1.0),
          )

    // One shade for the one shared noise volume — used by grid, plane and box.
    val noiseBakeShade = bakeShade(noisePeriod)

    def meshForm(faces: Arr[Quad[GridVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(Mesh(faces), MeshBufferType.FaceVertices),
      )

    def bakeTile(
        w: Int,
        h: Int,
        faces: Arr[Quad[GridVertex]],
        shade: Shade[EmptyTuple, EmptyTuple],
    ): Panel =
      p.panel(
        width = w,
        height = h,
        mips = true,
        shape = p.shape(meshForm(faces), shade, cullMode = CullMode.None),
      )

    // --- bake the tiles (atlas slices of the one shared noise volume) ---
    val gridTexPx = 24.0
    val gridTileU = (tileWorld * gridTexPx).toInt
    val gridTileV =
      (TileCells * (2.0 * stripHeight + stripWidth) * gridTexPx).toInt
    val planeTilePx = (tileWorld * 24.0).toInt

    // Grid bake meshes: only TileCells strips, length = one tile period,
    // positioned at the same world start as the render mesh so the noise aligns.
    val rowTile = bakeTile(
      gridTileU,
      gridTileV,
      rowStrips(
        TileCells,
        tileWorld,
        tileWorld / 2.0,
        gridStart,
        gridStep,
        gridY,
        stripWidth,
        stripHeight,
        tileWorld,
        TileCells,
      ),
      noiseBakeShade,
    )
    val colTile = bakeTile(
      gridTileU,
      gridTileV,
      colStrips(
        TileCells,
        tileWorld,
        tileWorld / 2.0,
        gridStart,
        gridStep,
        gridY,
        stripWidth,
        stripHeight,
        tileWorld,
        TileCells,
      ),
      noiseBakeShade,
    )
    val groundTile = bakeTile(
      planeTilePx,
      planeTilePx,
      planeQuad(tileWorld, tileWorld / 2.0, 0.0, Vec3.Y, tileWorld),
      noiseBakeShade,
    )
    val ceilTile = bakeTile(
      planeTilePx,
      planeTilePx,
      planeQuad(tileWorld, tileWorld / 2.0, ceilingY, -Vec3.Y, tileWorld),
      noiseBakeShade,
    )
    // Centre box: own non-tiling tile, baked from the same noise volume (it is
    // periodic ⇒ the box's patch matches the ground/grid at the same world XZ).
    val boxSize = 7.0
    val boxHeight = 20.5
    val boxTilePx = 1024
    val boxTile = bakeTile(
      boxTilePx,
      boxTilePx,
      boxFaces(boxSize, boxHeight),
      noiseBakeShade,
    )

    // ------ render geometry ------
    val rowForm = meshForm(
      rowStrips(
        rowCount,
        extent,
        0.0,
        gridStart,
        gridStep,
        gridY,
        stripWidth,
        stripHeight,
        tileWorld,
        TileCells,
      ),
    )
    val colForm = meshForm(
      colStrips(
        colCount,
        extent,
        0.0,
        gridStart,
        gridStep,
        gridY,
        stripWidth,
        stripHeight,
        tileWorld,
        TileCells,
      ),
    )
    val groundForm =
      meshForm(planeQuad(extent, 0.0, 0.0, Vec3.Y, tileWorld))
    val ceilForm =
      meshForm(planeQuad(extent, 0.0, ceilingY, -Vec3.Y, tileWorld))
    val boxForm = meshForm(boxFaces(boxSize, boxHeight))

    // ------ render shade: sample the baked tile (Repeat sampler tiles it),
    //        stretch contrast (global val, baked in). ------
    type RUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type RVaryings = (uv: Vec2)
    type RPanels = (tex: FragmentPanel)

    val renderShade = p.shade[GridVertex, RVaryings, RUniforms, RPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
            ctx.out.uv := ctx.in.uv,
          )
        program.frag: ctx =>
          val n = LetFloat("n")
          val c = LetFloat("c")
          Block(
            n := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp).x,
            c := ((n - 0.5) * NoiseContrast + 0.5).clamp01,
            ctx.out.color := vec4(vec3(c), 1.0),
          )

    val mvp = p.binding[Mat4]
    val samp = p.sampler(
      FilterMode.Linear,
      FilterMode.Linear,
      FilterMode.Linear,
      AddressMode.Repeat,
    )
    // Non-tiling surfaces (the box) clamp instead of repeat.
    val clampSamp =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    val groundShape = p
      .shape(groundForm, renderShade, cullMode = CullMode.None)
      .bind("tex" := groundTile)
    val ceilShape = p
      .shape(ceilForm, renderShade, cullMode = CullMode.None)
      .bind("tex" := ceilTile)
    val rowShape = p
      .shape(rowForm, renderShade, cullMode = CullMode.None)
      .bind("tex" := rowTile)
    val colShape = p
      .shape(colForm, renderShade, cullMode = CullMode.None)
      .bind("tex" := colTile)
    val boxShape = p
      .shape(boxForm, renderShade, cullMode = CullMode.None)
      .bind("tex" := boxTile, "samp" := clampSamp)

    // ------ fog + focus-blur (DOF) post-process (inline) ------
    // Distant space progressively blurs and fades into `fogColor`. Driven by the
    // scene's depth: reconstruct each pixel's world position, take its distance
    // from the camera, and ramp both a blur LOD and a fog mix from `fadeStart`
    // (sharp/unmodified) to `fadeEnd`.
    val fadeStart = 18.0 // sharp within this radius
    val fadeEnd = fogEnd // fully fogged/blurred at the visible edge
    val blurStrength = 4.0
    val fadeMips = 6

    val invVp = p.binding[Mat4]
    val camPos = p.binding[Vec3]

    // Scene panel (HDR + MSAA). The painter resolves its multisample depth to a
    // sampleable single-sample texture automatically (binding(depth = true)).
    val fogColor = Vec3(0.08, 0.10, 0.13)
    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (fogColor.x, fogColor.y, fogColor.z, 1.0),
        depthTest = true,
        multisample = true,
        shapes = Arr(groundShape, ceilShape, rowShape, colShape, boxShape),
      )
      .bind("mvp" := mvp, "samp" := samp)

    // Blur pyramid of the scene with a smooth TENT filter (not box auto-mips —
    // those step/crawl on aliased diagonal edges at mid LOD). mip 0 = a sharp
    // copy of the scene; mips 1.. = tent downsamples. Trilinear over this gives a
    // smooth blur ramp.
    type CopyU = (samp: Sampler)
    type CopyP = (src: FragmentPanel)
    val copyShade = p.layerShade[CopyU, CopyP]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.src(ctx.in.uv, ctx.bindings.samp)

    type DownU = (samp: Sampler)
    type DownP = (tex: FragmentPanel)
    val downBlurShade = p.layerShade[DownU, DownP]: program =>
      program.frag: ctx =>
        ctx.out.color := Blur.tentBlur2dAuto(
          ctx.textures.tex,
          ctx.bindings.samp,
          ctx.in.uv,
          4.0,
        )

    val fadeLayers = Arr[AnyLayer]()
    fadeLayers.push(
      p.layer(copyShade).bind("src" := scenePanel, "samp" := clampSamp),
    )
    var fm = 0
    while fm < fadeMips - 1 do
      fadeLayers.push(
        p.layer(downBlurShade, mipSource = fm, mipTarget = fm + 1)
          .bind("samp" := clampSamp),
      )
      fm += 1

    // A SEPARATE pyramid panel (+ the copy into mip 0 above) rather than just
    // mip-chaining `scenePanel` and downsampling in place. The in-place version
    // is leaner (mip 0 is already the scene; no copy), but it couples the scene
    // panel's config to the DOF effect. Keeping the pyramid self-contained means
    // a future fog/DOF helper can own it and take any scene panel as input
    // without mutating it (cf. Bloom / MirrorReflection). The copy pass is the
    // small cost of that decoupling.
    val fadeBlurPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      mipLevels = fadeMips,
      layers = fadeLayers,
    )

    // Resolve: depth → world distance → fog mix + blur LOD (sample the pyramid).
    type ResolveU = (invVp: Mat4, camPos: Vec3, samp: Sampler)
    type ResolveP = (col: FragmentPanel, depth: FragmentDepthPanel)
    val resolveShade = p.layerShade[ResolveU, ResolveP]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val d = LetFloat("d")
        val ndc = LetVec3("ndc")
        val worldH = LetVec4("worldH")
        val worldPos = LetVec3("worldPos")
        val dist = LetFloat("dist")
        val f = LetFloat("f")
        val lod = LetFloat("lod")
        val col = LetVec3("col")
        Block(
          d := ctx.textures.depth.load(ivec2(ctx.fragCoord.xy)),
          ndc := vec3(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d),
          worldH := ctx.bindings.invVp * vec4(ndc, 1),
          worldPos := worldH.xyz / worldH.w,
          dist := (worldPos - ctx.bindings.camPos).length,
          f := dist.smoothstep(fadeStart, fadeEnd),
          lod := (1 + f * blurStrength).log2.min(fadeMips - 1),
          col := ctx.textures.col.sampleLevel(uv, ctx.bindings.samp, lod).xyz,
          ctx.out.color := vec4(
            col.mix(vec3(fogColor.x, fogColor.y, fogColor.z), f),
            1.0,
          ),
        )

    val fadePanel = p.panel(
      format = TextureFormat.Rgba16Float,
      layer = p
        .layer(resolveShade)
        .bind(
          "col" := fadeBlurPanel,
          "depth" := scenePanel.binding(depth = true),
          "invVp" := invVp,
          "camPos" := camPos,
          "samp" := clampSamp,
        ),
    )

    // ------ camera + input ------

    val cam = PerspectiveCamera(
      fov = 0.6,
      aspect = canvas.width.toDouble / canvas.height.toDouble,
      near = 0.1,
      far = extent,
      pos = Vec3(0.0, 3.0, 15.0),
    )
    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(sensitivity = 1.0, speed = 3.0)

    p.onResize: (cw, ch) =>
      cam(aspect = cw.toDouble / ch)

    // Bake the (static) noise tiles once, with mip chains.
    p.paint(rowTile, colTile, groundTile, ceilTile, boxTile)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      val vp = cam.viewProjMat
      mvp.set(vp)
      invVp.set(vp.inverse)
      camPos.set(cam.pos)
      // scene → tent blur pyramid → fog/DOF resolve; show the faded result.
      p.paint(scenePanel, fadeBlurPanel, fadePanel)
      p.show(fadePanel)
