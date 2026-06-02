package sketches.rooms.base

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import playground.bloom.Bloom
import playground.mirror.MirrorReflection
import trivalibs.dev.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Port of the Rust `rooms/base` sketch: a first-person walkable room. An
// inside-out cuboid (floor / ceiling / four walls) is textured with three
// procedurally pre-rendered noise textures (one per material), sampled with
// mipmaps. Move with WASD / arrows + Space / Shift, look around by dragging.
//
// The blurred floor reflection is DEPTH-DRIVEN (see the mirror section): the
// walls/ceiling render once as a shared shape set, reused in both the scene
// pass and a mirror pass (only the panel-level `vp` differs), and the blur
// amount per reflected fragment is reconstructed from the mirror render's depth
// buffer rather than written by the shade. This exercises the library's depth-
// texture sampling + `Plane` reflection helpers end-to-end.
// ---------------------------------------------------------------------------

private val RoomWidth = 6.5
private val RoomHeight = 5.5
private val RoomDepth = 10.0

// The four walls are baked into a single texture, their UVs laid out end to
// end around the room perimeter (front, right, back, left).
private val WallLength = RoomDepth * 2.0 + RoomWidth * 2.0

// Baked texels per world metre. Texture sizes are derived from the actual
// geometry dimensions × this factor, so texel density is uniform in space.
private val TexScale = 48.0

@main def roomsBase(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Room geometry — box face quads → Mesh → triangulated, indexed buffers
    // -----------------------------------------------------------------------
    type RoomVertex = (position: Vec3, uv: Vec2)

    val box =
      Box(Vec3(0.0, RoomHeight / 2.0, 0.0), RoomWidth, RoomHeight, RoomDepth)

    // Each vertex carries its world position (for noise lookup at bake time)
    // and a UV that lays the face out flat within its baked texture. `uvw` is
    // the box-local normalized coordinate in [0,1]^3.
    def vert(c: Vec3, u: Double, v: Double): RoomVertex =
      (position = c, uv = Vec2(u, v))

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(Mesh(faces), MeshBufferType.FaceVertices),
      )

    // Floor / ceiling map directly onto the box's XZ extent.
    val floorForm =
      form(Arr(box.bottomFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    val ceilForm =
      form(Arr(box.topFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    // Walls share one texture: u runs continuously around the perimeter.
    val wallForm = form(
      Arr(
        box.frontFace((c, uvw) =>
          vert(c, uvw.x * RoomWidth / WallLength, uvw.y),
        ),
        box.rightFace((c, uvw) =>
          vert(c, (RoomWidth + uvw.z * RoomDepth) / WallLength, uvw.y),
        ),
        box.backFace((c, uvw) =>
          vert(
            c,
            (RoomWidth + RoomDepth + (1.0 - uvw.x) * RoomWidth) / WallLength,
            uvw.y,
          ),
        ),
        box.leftFace((c, uvw) =>
          vert(
            c,
            (RoomWidth + RoomDepth + RoomWidth + (1.0 - uvw.z) * RoomDepth)
              / WallLength,
            uvw.y,
          ),
        ),
      ),
    )

    // -----------------------------------------------------------------------
    // Pre-render: bake one 3D-noise field across the room geometry. The vertex
    // shader lays each face out flat by its UV (so the result fills the
    // texture), while the fragment samples noise at the real world position —
    // the baked textures therefore look like a single noise volume filling the
    // room. A per-material tint keeps the floor / walls / ceiling identifiable.
    // -----------------------------------------------------------------------

    type NoiseUniforms = (
        scale: Float,
        seed: Vec3,
        tint: Vec3,
        // Halo light strips (ceiling only). `haloStrength = 0` zeroes the
        // contribution — walls/floor pass that. Strips run along the V axis
        // of the baked UV; `haloCount` = strips across U. Their HDR amplitude
        // (>1) trips the bloom threshold downstream.
        haloCount: Float,
        haloStrength: Float,
        // Debug grid darkening — `gridStrength = 0` disables it. `gridCells`
        // is the cell count in (U, V) across the baked UV.
        gridCells: Vec2,
        gridStrength: Float,
    )

    val noiseShade =
      p.shade[RoomVertex, (worldPos: Vec3, uv: Vec2), NoiseUniforms]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.worldPos := ctx.in.position,
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := vec4(ctx.in.uv.fit0111, 0.0, 1.0),
          )
        program.frag: ctx =>
          val n = VarFloat("n")
          val col = VarVec3("col")
          val wp = ctx.in.worldPos

          // ----- FBM tunables (3 octaves) -----
          // Each octave: frequency *= FbmFreqMul, amplitude *= FbmAmpMul.
          // FreqMul > 2 makes higher octaves "shrink faster" than a halving
          // (= finer detail); AmpMul < 0.5 keeps those finer octaves subtle
          // so the base shape stays dominant.
          val FbmFreqMul = 3.6
          val FbmAmpMul = 0.12

          // Inline 3-octave fbm of simplexNoise3d. Returns a FloatExpr in
          // [0, 1]. `basePos` already carries the worldPos skew below; this
          // helper just stacks octaves on top of it.
          def fbm3(basePos: Vec3Expr): FloatExpr =
            var acc: FloatExpr = 0.0: FloatExpr
            var freq = 1.0
            var amp = 1.0
            var totalAmp = 0.0
            var i = 0
            while i < 3 do
              acc = acc + Simplex
                .simplexNoise3d(
                  basePos * (ctx.bindings.scale * freq) + ctx.bindings.seed,
                )
                .fit1101 * amp
              totalAmp += amp
              freq *= FbmFreqMul
              amp *= FbmAmpMul
              i += 1
            (acc / totalAmp).clamp01

          val s = LetFloat("s")
          val d = LetFloat("d")
          val band = VarFloat("band")
          val lf = LetFloat("lf")
          val halo = LetVec3("halo")
          val g = LetVec2("g")
          val gridLine = LetFloat("gridLine")
          Block(
            n := fbm3(
              vec3(
                wp.x + wp.y * 0.2,
                wp.y * 0.3,
                wp.z * 0.8 + wp.y * 0.2,
              ) * 0.3,
            ),
            // Remap noise into a tight near-white band [0.78, 1.0] so the
            // room reads as a gallery space rather than mottled artwork.
            n := 0.68 + n * 0.32,
            col := vec3(n) * ctx.bindings.tint,
            // Halo light strips (ceiling only when haloStrength > 0).
            // `s` cycles 0..1 across each strip period along U; `d` measures
            // distance from a strip's centre line. smoothstep(0.05, 0.02, d)
            // gives a soft 1-at-center band ~0.04 wide. `lf` fades the strips
            // toward V-axis ends so they read as recessed gallery lights.
            s := (ctx.in.uv.x * ctx.bindings.haloCount + 0.5).fract + 0.5,
            d := (s - 0.5).abs,
            band := d.smoothstep(0.05, 0.02),
            lf := ctx.in.uv.y.smoothstep(0.05, 0.15)
              * (1.0 - ctx.in.uv.y).smoothstep(0.05, 0.15),
            band *= (ctx.bindings.haloStrength * lf),
            // HDR halo brightness. >> 1.0 so it trips bloom in both direct
            // view and reflection (where the mip blur averages bright halo
            // with dark surroundings → effective peak drops to ~mix * halo /
            // a-few). Tune per taste; expect floor reflection brightness ≈
            // halo × reflStrength × falloff × blur-attenuation.
            halo := band * vec3(8.0, 7.6, 6.8),
            col += halo,
            // Debug grid (zero contribution when gridStrength == 0).
            g := (ctx.in.uv * ctx.bindings.gridCells).fract - 0.5,
            gridLine := g.x.abs.max(g.y.abs).gt(0.45),
            col *= 1.0 - ctx.bindings.gridStrength * gridLine,
            ctx.out.color := vec4(col, 1.0),
          )

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * TexScale).toInt, (h * TexScale).toInt)

    // Single shared noise field (same frequency + seed) → spatial continuity
    // across faces; only the tint distinguishes the materials.
    val NoiseScale = 0.5f
    val NoiseSeed = Vec3(140, 140, 140)
    val NoGrid = Vec2(1.0, 1.0)
    def noiseTex(
        form: Form,
        size: (Int, Int),
        tint: Vec3,
        haloCount: Double = 1.0,
        haloStrength: Double = 0.0,
        gridCells: Vec2 = NoGrid,
        gridStrength: Double = 0.0,
        format: TextureFormat = TextureFormat.Rgba8Unorm,
    ): Panel =
      val shape = p
        .shape(form, noiseShade, cullMode = CullMode.None)
        .bind(
          "scale" := NoiseScale,
          "seed" := NoiseSeed,
          "tint" := tint,
          "haloCount" := haloCount,
          "haloStrength" := haloStrength,
          "gridCells" := gridCells,
          "gridStrength" := gridStrength,
        )
      p.panel(
        width = size._1,
        height = size._2,
        mips = true,
        format = format,
        shape = shape,
      )

    // Gallery tints: walls brightest (lights bounce off them), ceiling slightly
    // darker (shaded side of the spotlights mounted on it), floor in between.
    val floorTex =
      noiseTex(floorForm, texSize(RoomWidth, RoomDepth), Vec3(0.80, 0.78, 0.75))
    val wallTex =
      noiseTex(
        wallForm,
        texSize(WallLength, RoomHeight),
        Vec3(0.96, 0.96, 0.95),
        // Debug grid on walls: ~1 cell per meter across the perimeter, scaled
        // 2× to read clearly at this TexScale.
        gridCells = Vec2(WallLength, RoomHeight) * 2.0,
        gridStrength = 0.35,
      )
    // Ceiling tex is HDR so the halo light strips can encode brightness > 1
    // and survive the trip through the mirror render + bloom threshold.
    val ceilTex =
      noiseTex(
        ceilForm,
        texSize(RoomWidth, RoomDepth),
        Vec3(0.88, 0.88, 0.87),
        haloCount = 6.0,
        haloStrength = 1.0,
        format = TextureFormat.Rgba16Float,
      )

    // -----------------------------------------------------------------------
    // Shared scene view-projection. `vp` is a PANEL-LEVEL uniform: the wall /
    // ceiling shapes leave it unbound and read it from whichever panel draws
    // them — the scene VP here, the reflected VP inside the MirrorReflection
    // util — so one shape instance serves both passes with no per-frame juggle.
    // -----------------------------------------------------------------------
    val sceneVp = p.binding[Mat4]

    val texSampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    // -----------------------------------------------------------------------
    // Wall/ceiling shade — used UNMODIFIED in both the scene pass and the
    // mirror pass. Reads `vp` from a panel-level uniform (never bound on the
    // shape) and the baked texture (V flipped to undo the render-target →
    // texture orientation). Outputs colour only; the reflection blur distance
    // comes from the depth buffer, not from this shade.
    // -----------------------------------------------------------------------
    type WallUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type WallPanels = (tex: FragmentPanel)

    val wallShade = p.shade[RoomVertex, (uv: Vec2), WallUniforms, WallPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex(
            vec2(ctx.in.uv.x, 1.0 - ctx.in.uv.y),
            ctx.bindings.samp,
          )

    // The reflection flips triangle winding, so the shared shapes can't keep
    // `CullMode.Front`; draw both faces (`None`) — depth resolves the extra
    // back faces, visually identical from inside the room. Bind only `samp` +
    // `tex`; `vp` is supplied per-panel.
    def wallShape(form: Form, tex: Panel) =
      p.shape(form, wallShade, cullMode = CullMode.None)
        .bind("samp" := texSampler, "tex" := tex)
    val ceilShape = wallShape(ceilForm, ceilTex)
    val wallShapeW = wallShape(wallForm, wallTex)

    // -----------------------------------------------------------------------
    // Blurred floor reflection (depth-driven). Renders the shared walls/ceiling
    // from a camera reflected across the ground plane, reconstructs each
    // reflected fragment's height above the floor from the mirror render's depth
    // buffer, and resolves a per-pixel blur LOD from it. `vpName = "vp"` ties
    // into the panel-level `vp` the wall shade reads; the floor samples
    // `mirror.resultPanel`. (`blurStrength = 62` preserves the original look.)
    // We feed the camera VP per frame via `paint(vp)`; alternatively pass
    // `camera = cam` for arg-less `paint()`.
    // -----------------------------------------------------------------------
    val mirror = MirrorReflection(
      p,
      shapes = Arr(wallShapeW, ceilShape),
      vpName = "vp",
      alphaScale = RoomHeight,
      blurStrength = 62.0,
      mipLevels = 6,
    )

    // -----------------------------------------------------------------------
    // Floor shade — scene-only. Samples its baked noise, then the resolved
    // reflection at its own pixel (resultPanel is full-res and screen-aligned,
    // so a 1:1 `load(fragCoord)` reads the right texel — no screen-UV varying or
    // sampler needed), mixing by a user `reflStrength` and a falloff from the
    // reflection's normalized distance (alpha). Reads `vp` panel-level like the
    // walls.
    // -----------------------------------------------------------------------
    type FloorUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        reflStrength: FragmentUniform[Float],
    )
    type FloorPanels = (tex: FragmentPanel, reflTex: FragmentPanel)

    val floorShade =
      p.shade[RoomVertex, (uv: Vec2), FloorUniforms, FloorPanels]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          val base = LetVec3("base")
          val refl = LetVec4("refl")
          val mix = LetFloat("mix")
          val falloff = LetFloat("falloff")
          Block(
            // Baked floor noise (same V-flip as wallShade).
            base := ctx.textures
              .tex(vec2(ctx.in.uv.x, 1.0 - ctx.in.uv.y), ctx.bindings.samp)
              .xyz,
            // Resolved reflection at this fragment's own pixel (1:1, no sampler).
            refl := ctx.textures.reflTex.load(ivec2(ctx.fragCoord.xy)),
            // refl.w = normalized distance; nearer ⇒ stronger reflection.
            falloff := (1.0 - refl.w).max(0.1),
            mix := ctx.bindings.reflStrength * falloff,
            ctx.out.color := vec4(base * (1.0 - mix) + refl.xyz * mix, 1.0),
          )

    val reflStrength = p.binding(0.35)

    // Floor is scene-only (not mirrored) → keep inside-out front culling.
    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "samp" := texSampler,
        "reflStrength" := reflStrength,
        "tex" := floorTex,
        "reflTex" := mirror.resultPanel,
      )

    // HDR scene panel — supplies the scene `vp` to all its shapes, feeds the
    // bloom util and the composite below.
    val scenePanel = p.panel(
      format = TextureFormat.Rgba16Float,
      clearColor = (0.5, 0.6, 0.7, 1.0),
      depthTest = true,
      multisample = true,
      shapes = Arr(floorShape, wallShapeW, ceilShape),
    )
    scenePanel.bind("vp" := sceneVp)

    // Bloom pyramid driven by scenePanel; threshold ≈ 1.0 trips on the
    // ceiling halo strips (HDR) but not on the near-white baked surfaces.
    val bloom = Bloom(
      p,
      scenePanel,
      intensity = 0.002,
      threshold = 1.0,
      blurRadius = 4.0,
      mipLevels = 5,
    )

    // -----------------------------------------------------------------------
    // Camera, input, controller
    // -----------------------------------------------------------------------
    val cam = PerspectiveCamera(
      fov = 0.9,
      aspect = canvas.width.toDouble / canvas.height.toDouble,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 1.7, 0.0),
    )

    // Preserve camera pose across live-coding reloads (dev only).
    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(sensitivity = 2.0, speed = 3.0)

    p.onResize: (w, h) =>
      cam(aspect = w.toDouble / h)

    // Pre-render the static material textures once (with mip chains).
    p.paint(floorTex, wallTex, ceilTex)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      // Mirror reflects `vp` across the ground plane internally, renders +
      // resolves into `mirror.resultPanel` (which the floor samples).
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
