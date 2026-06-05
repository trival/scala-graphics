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
import trivalibs.graphics.shader.lib.random.Psrdnoise
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Open endless "indirect light" space (see PLAN.md). No walls — a floor and a
// ceiling that appear to extend endlessly, with two crossing grids of strips
// suspended just below the ceiling.
//
// STEP 2: shared world-space tiling noise. Every bake samples ONE conceptual
// 3D noise volume — `tilingNoise3d(worldPos · NoiseScale, period)` — at world
// position. The pieces that must cover huge surfaces only bake a small slice
// and repeat it via a Repeat sampler:
//   - ground / ceiling are flat 2D surfaces → a square tile sampled by world XZ.
//   - each grid direction (rows / cols) is a FOLDED 2D surface: its strip faces
//     unwrap into a UV atlas. We bake only `TileCells` strips' worth (period in
//     world Z for rows / X for cols) and, in the render mesh, let the UV run
//     past 1 so the Repeat sampler wraps it back over the whole grid.
// Non-tiling objects (the future centre box / display items) will bake a unique
// patch of the SAME volume at their world position, so they stay continuous
// with the tiling surfaces without repeating themselves.
//
// Step 2a here = a single noise octave, HIGH CONTRAST for easy verification;
// FBM + contrast dampening come later.
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

    // ------ shared tiling-noise parameters ------
    val TileCells = 4
    val NoiseContrast = 4.0 // global, baked into the shader (Step 5 dampens it)
    // Grid noise repeats every TileCells strips → its world tiling period.
    val gridTileWorld = TileCells * gridStep // ~8
    // Ground / ceiling tile covers the central display area; kept an INTEGER
    // multiple of the grid period so both stay seamless under one shared scale.
    val planeTileMul = 6
    val planeTileWorld = planeTileMul * gridTileWorld // ~48
    // Feature-size knob. psrdnoise only tiles cleanly when the DOMAIN period
    // (tileWorld · NoiseScale) is an integer, so we snap: pick a target scale,
    // round the grid's domain period to an int, then derive the real NoiseScale
    // from it. Lower scale = bigger features; the biggest (period = 1) span a
    // whole tile — for still-bigger features, raise TileCells (grows the tile).
    val targetNoiseScale = 0.125
    val gridNoisePeriod = (gridTileWorld * targetNoiseScale).round.toInt.max(1)
    val NoiseScale = gridNoisePeriod.toDouble / gridTileWorld // snapped
    val planeNoisePeriod = gridNoisePeriod * planeTileMul // stays integer
    // FBM: each octave doubles the frequency AND its domain period (lacunarity
    // must be the integer 2 so every octave period stays integer ⇒ the sum still
    // tiles). `FbmGain` weights successive octaves (lower = subtler detail).
    val FbmOctaves = 4
    val FbmGain = 0.4

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

    val gridBakeShade = bakeShade(gridNoisePeriod)
    val planeBakeShade = bakeShade(planeNoisePeriod)

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

    // --- bake the four tiles (atlas slices of the shared noise volume) ---
    val gridTexPx = 64.0
    val gridTileU = (gridTileWorld * gridTexPx).toInt
    val gridTileV =
      (TileCells * (2.0 * stripHeight + stripWidth) * gridTexPx).toInt
    val planeTilePx = (planeTileWorld * 24.0).toInt

    // Grid bake meshes: only TileCells strips, length = one tile period,
    // positioned at the same world start as the render mesh so the noise aligns.
    val rowTile = bakeTile(
      gridTileU,
      gridTileV,
      rowStrips(
        TileCells,
        gridTileWorld,
        gridTileWorld / 2.0,
        gridStart,
        gridStep,
        gridY,
        stripWidth,
        stripHeight,
        gridTileWorld,
        TileCells,
      ),
      gridBakeShade,
    )
    val colTile = bakeTile(
      gridTileU,
      gridTileV,
      colStrips(
        TileCells,
        gridTileWorld,
        gridTileWorld / 2.0,
        gridStart,
        gridStep,
        gridY,
        stripWidth,
        stripHeight,
        gridTileWorld,
        TileCells,
      ),
      gridBakeShade,
    )
    val groundTile = bakeTile(
      planeTilePx,
      planeTilePx,
      planeQuad(
        planeTileWorld,
        planeTileWorld / 2.0,
        0.0,
        Vec3.Y,
        planeTileWorld,
      ),
      planeBakeShade,
    )
    val ceilTile = bakeTile(
      planeTilePx,
      planeTilePx,
      planeQuad(
        planeTileWorld,
        planeTileWorld / 2.0,
        ceilingY,
        -Vec3.Y,
        planeTileWorld,
      ),
      planeBakeShade,
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
        gridTileWorld,
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
        gridTileWorld,
        TileCells,
      ),
    )
    val groundForm =
      meshForm(planeQuad(extent, 0.0, 0.0, Vec3.Y, planeTileWorld))
    val ceilForm =
      meshForm(planeQuad(extent, 0.0, ceilingY, -Vec3.Y, planeTileWorld))

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

    val canvasPanel = p
      .panel(
        clearColor = (0.08, 0.10, 0.13, 1.0),
        depthTest = true,
        multisample = true,
        shapes = Arr(groundShape, ceilShape, rowShape, colShape),
      )
      .bind("mvp" := mvp, "samp" := samp)

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
    p.paint(rowTile, colTile, groundTile, ceilTile)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      mvp.set(cam.viewProjMat)
      p.paint(canvasPanel)
      p.show(canvasPanel)
