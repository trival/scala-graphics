package sketches.rooms.base

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.dev.*
import trivalibs.graphics.buffers.*
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
// ---------------------------------------------------------------------------

private val RoomWidth = 6.5
private val RoomHeight = 5.5
private val RoomDepth = 10.0

// The four walls are baked into a single texture, their UVs laid out end to
// end around the room perimeter (front, right, back, left).
private val WallLength = RoomDepth * 2.0 + RoomWidth * 2.0

// Baked texels per world metre. Texture sizes are derived from the actual
// geometry dimensions × this factor, so texel density is uniform in space.
private val TexScale = 24.0

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
        // TEMP debug grid — gridStrength = 0 (floor/ceiling) disables it.
        // Remove together with the grid block in the frag shader once the
        // reflection is dialled in.
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
          val g = LetVec2("g")
          val line = LetFloat("line")
          Block(
            n := Simplex
              .simplexNoise3d(
                ctx.in.worldPos * ctx.bindings.scale + ctx.bindings.seed,
              )
              .fit1101
              .clamp01,
            // Remap noise into a tight near-white band [0.78, 1.0] so the
            // room reads as a gallery space rather than mottled artwork.
            n := 0.78 + n * 0.22,
            col := vec3(n) * ctx.bindings.tint,
            // TEMP debug grid (zero contribution when gridStrength == 0).
            g := (ctx.in.uv * ctx.bindings.gridCells).fract - 0.5,
            line := g.x.abs
              .max(g.y.abs)
              .smoothstep(0.46: FloatExpr, 0.5: FloatExpr),
            col := col * (1.0 - ctx.bindings.gridStrength * line),
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
        gridCells: Vec2 = NoGrid,
        gridStrength: Double = 0.0,
    ): Panel =
      val shape = p
        .shape(form, noiseShade, cullMode = CullMode.None)
        .bind(
          "scale" := NoiseScale,
          "seed" := NoiseSeed,
          "tint" := tint,
          "gridCells" := gridCells,
          "gridStrength" := gridStrength,
        )
      p.panel(width = size._1, height = size._2, mips = true, shape = shape)

    // Gallery tints: walls brightest (lights bounce off them), ceiling darkest
    // (shaded side of the spotlights mounted just below it), floor in between
    // with a slight warm cream.
    val floorTex =
      noiseTex(floorForm, texSize(RoomWidth, RoomDepth), Vec3(0.90, 0.88, 0.85))
    val wallTex =
      noiseTex(
        wallForm,
        texSize(WallLength, RoomHeight),
        Vec3(0.96, 0.96, 0.95),
        // TEMP debug grid on walls: ~1 cell per meter across the perimeter,
        // ~RoomHeight cells vertically. Lets us read perspective/reflection.
        gridCells = Vec2(WallLength, RoomHeight),
        gridStrength = 0.35,
      )
    val ceilTex =
      noiseTex(ceilForm, texSize(RoomWidth, RoomDepth), Vec3(0.78, 0.78, 0.77))

    // -----------------------------------------------------------------------
    // Main shade — sample the baked texture directly (V flipped to undo the
    // render-target → texture orientation, so a fragment reads back its own
    // baked texel).
    // -----------------------------------------------------------------------
    type RoomUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type RoomPanels = (tex: FragmentPanel)

    val roomShade = p.shade[RoomVertex, (uv: Vec2), RoomUniforms, RoomPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex(
            vec2(ctx.in.uv.x, (1.0: FloatExpr) - ctx.in.uv.y),
            ctx.bindings.samp,
          )

    val mvp = p.binding[Mat4]
    val texSampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    // -----------------------------------------------------------------------
    // Mirror shade — same baked-tex lookup as roomShade but driven by a
    // Y-flipped MVP, and writes alpha = worldY/RoomHeight so downstream blur +
    // composite know the reflected fragment's height above the ground.
    // -----------------------------------------------------------------------
    type MirrorUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type MirrorPanels = (tex: FragmentPanel)
    type MirrorVaryings = (uv: Vec2, worldY: Float)

    val mirrorShade =
      p.shade[RoomVertex, MirrorVaryings, MirrorUniforms, MirrorPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.worldY := ctx.in.position.y,
              ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            val c = LetVec4("c")
            Block(
              c := ctx.textures.tex(
                vec2(ctx.in.uv.x, (1.0: FloatExpr) - ctx.in.uv.y),
                ctx.bindings.samp,
              ),
              // Alpha = clamped height/RoomHeight; floor = 0, ceiling = 1.
              ctx.out.color := vec4(
                c.xyz,
                (ctx.in.worldY / RoomHeight.toFloat).clamp01,
              ),
            )

    val mirrorMvp = p.binding[Mat4]

    // Y-flip reverses winding, so inside-out culling flips Front → Back.
    def mirrorShape(form: Form, tex: Panel) =
      p.shape(form, mirrorShade, cullMode = CullMode.Back)
        .bind("mvp" := mirrorMvp, "samp" := texSampler, "tex" := tex)

    // Only walls + ceiling reflect; the floor reflecting itself is degenerate.
    // No multisample — the blur smooths out aliasing and avoids the resolve
    // step that texture inputs to follow-up passes would otherwise need.
    val mirrorPanel = p.panel(
      clearColor = (0.0, 0.0, 0.0, 0.0),
      depthTest = true,
      shapes =
        Arr(mirrorShape(wallForm, wallTex), mirrorShape(ceilForm, ceilTex)),
    )

    // -----------------------------------------------------------------------
    // Mirror blur — build a mip pyramid of progressively-blurred copies of
    // mirrorPanel. The floor shader picks a mip per-fragment via
    // sampleLevel(uv, lod = alpha * MaxMip), so reflected pixels that were
    // higher above the ground get blurrier — purely a function of the alpha
    // channel mirrorShade writes.
    //
    // Mip 0 = blit of mirrorPanel; mips 1..4 = 4-tap box downsample of the
    // prior mip. Auto mipgen is gated off because mip-target layers exist.
    // -----------------------------------------------------------------------
    type BlitU = (samp: FragmentUniform[Sampler])
    type BlitP = (tex: FragmentPanel)
    val blitShade = p.layerShade[BlitU, BlitP]: program =>
      program.frag: ctx =>
        ctx.out.color :=
          ctx.textures.tex.sample(ctx.in.uv, ctx.bindings.samp)

    type DownU = (res: Vec2, samp: FragmentUniform[Sampler])
    type DownP = (tex: FragmentPanel)
    val downBlurShade = p.layerShade[DownU, DownP]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val o = LetVec2("o")
        val s = ctx.bindings.samp
        val tex = ctx.textures.tex
        Block(
          // 9-tap tent kernel at ±2 texels of the destination mip (~±4 texels
          // of the source). Each downsample step gaussian-blurs by a few
          // source texels, so the cumulative mip 4 has a noticeably softer
          // appearance than just a plain resolution drop would give.
          o := vec2(2.0, 2.0) / ctx.bindings.res,
          ctx.out.color :=
            tex.sample(uv, s) * 0.25
              + (
                tex.sample(uv + vec2(0.0, o.y), s)
                  + tex.sample(uv + vec2(0.0, -o.y), s)
                  + tex.sample(uv + vec2(o.x, 0.0), s)
                  + tex.sample(uv + vec2(-o.x, 0.0), s)
              ) * 0.125
              + (
                tex.sample(uv + o, s)
                  + tex.sample(uv + vec2(-o.x, o.y), s)
                  + tex.sample(uv + vec2(o.x, -o.y), s)
                  + tex.sample(uv - o, s)
              ) * 0.0625,
        )

    val mirrorRes = p.binding[Vec2]
    val mirrorResMip1 = p.binding[Vec2]
    val mirrorResMip2 = p.binding[Vec2]
    val mirrorResMip3 = p.binding[Vec2]
    val mirrorResMip4 = p.binding[Vec2]

    val mirrorBlurLayers = Arr[AnyLayer]()
    mirrorBlurLayers.push(
      p.layer(blitShade)
        .bind("tex" := mirrorPanel, "samp" := texSampler),
    )
    val mipResArr =
      Arr(mirrorRes, mirrorResMip1, mirrorResMip2, mirrorResMip3, mirrorResMip4)
    var mi = 0
    while mi < 4 do
      mirrorBlurLayers.push(
        p.layer(downBlurShade, mipSource = mi, mipTarget = mi + 1)
          .bind("res" := mipResArr(mi + 1), "samp" := texSampler),
      )
      mi += 1

    val mirrorBlurPanel = p.panel(
      mipLevels = 5,
      layers = mirrorBlurLayers,
    )

    // -----------------------------------------------------------------------
    // Floor shade — like roomShade, but additionally samples mirrorBlurPanel
    // in screen-space and picks a mip-LOD from the reflection's alpha (= the
    // reflected fragment's normalized height above the ground). Close-to-
    // ground reflections stay sharp; ceiling-ward ones smear out.
    // -----------------------------------------------------------------------
    type FloorUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        reflSamp: FragmentUniform[Sampler],
        reflStrength: FragmentUniform[Float],
        reflMaxLod: FragmentUniform[Float],
    )
    type FloorPanels = (tex: FragmentPanel, reflTex: FragmentPanel)
    type FloorVaryings = (uv: Vec2, clipPos: Vec4)

    val floorShade =
      p.shade[RoomVertex, FloorVaryings, FloorUniforms, FloorPanels]: program =>
        program.vert: ctx =>
          val pos = LetVec4("pos")
          Block(
            ctx.out.uv := ctx.in.uv,
            pos := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
            ctx.out.clipPos := pos,
            ctx.out.position := pos,
          )
        program.frag: ctx =>
          val base = LetVec3("base")
          val ndc = LetVec2("ndc")
          val sUv = LetVec2("sUv")
          val a = LetFloat("a")
          val refl = LetVec3("refl")
          val mix = LetFloat("mix")
          Block(
            // Baked floor noise (same V-flip as roomShade).
            base := ctx.textures
              .tex(
                vec2(ctx.in.uv.x, (1.0: FloatExpr) - ctx.in.uv.y),
                ctx.bindings.samp,
              )
              .xyz,
            // Screen-UV from interpolated clip-space position.
            ndc := ctx.in.clipPos.xy / ctx.in.clipPos.w,
            sUv := ndc * vec2(0.5, -0.5) + vec2(0.5, 0.5),
            // Mip-0 alpha = reflected fragment's normalized height (0..1).
            a := ctx.textures.reflTex
              .sampleLevel(sUv, ctx.bindings.reflSamp, 0.0)
              .w,
            // Per-fragment blur via mip-LOD: higher reflected pixels → blurrier.
            refl := ctx.textures.reflTex
              .sampleLevel(
                sUv,
                ctx.bindings.reflSamp,
                a * ctx.bindings.reflMaxLod,
              )
              .xyz,
            // Reflection contribution fades with reflected height.
            mix := ctx.bindings.reflStrength * (1.0 - a),
            ctx.out.color := vec4(base * (1.0 - mix) + refl * mix, 1.0),
          )

    val reflStrength = p.binding(0.35)
    val reflMaxLod = p.binding(4.0)

    // Inside-out room → culling for inward-facing triangles.
    def roomShape(form: Form, tex: Panel) =
      p.shape(form, roomShade, cullMode = CullMode.Front)
        .bind("mvp" := mvp, "samp" := texSampler, "tex" := tex)

    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "mvp" := mvp,
        "samp" := texSampler,
        "tex" := floorTex,
        "reflSamp" := texSampler,
        "reflStrength" := reflStrength,
        "reflMaxLod" := reflMaxLod,
        "reflTex" := mirrorBlurPanel,
      )
    val ceilShape = roomShape(ceilForm, ceilTex)
    val wallShape = roomShape(wallForm, wallTex)

    val canvasPanel = p.panel(
      clearColor = (0.5, 0.6, 0.7, 1.0),
      depthTest = true,
      multisample = true,
      shapes = Arr(floorShape, ceilShape, wallShape),
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
      mirrorRes.set(Vec2(w, h))
      mirrorResMip1.set(Vec2(w / 2.0, h / 2.0))
      mirrorResMip2.set(Vec2(w / 4.0, h / 4.0))
      mirrorResMip3.set(Vec2(w / 8.0, h / 8.0))
      mirrorResMip4.set(Vec2(w / 16.0, h / 16.0))

    // Pre-render the static material textures once (with mip chains).
    p.paint(floorTex, wallTex, ceilTex)

    val mirrorMat = Mat4.fromScale(Vec3(1.0, -1.0, 1.0))

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      mvp.set(cam.viewProjMat)
      mirrorMvp.set(cam.viewProjMat * mirrorMat)
      p.paint(mirrorPanel, mirrorBlurPanel, canvasPanel)
      p.show(canvasPanel)
