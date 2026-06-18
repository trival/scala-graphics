package sketches.rooms.base

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.MirrorReflection
import trivalibs.dev.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// A first-person walkable room. Utilizing some indirect light approximation,
// bloom and a blured reflection on the floor for more realism.
// Move with WASD / arrows + Space / Shift, look around by dragging.
// ---------------------------------------------------------------------------

val RoomWidth = 6.5
val RoomHeight = 5.5
val RoomDepth = 10.0

// The four walls are baked into a single texture, their UVs laid out end to
// end around the room perimeter (front, right, back, left).
val WallLength = RoomDepth * 2.0 + RoomWidth * 2.0

// Baked texels per world metre. Texture sizes are derived from the actual
// geometry dimensions × this factor, so texel density is uniform in space.
val TexScale = 164.0

@main def roomsBase(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Room geometry — box face quads → Mesh → triangulated, indexed buffers
    // -----------------------------------------------------------------------
    type RoomVertex = (position: Vec3, uv: Vec2)

    val box =
      Box(Vec3(0.0, RoomHeight / 2.0, 0.0), RoomWidth, RoomHeight, RoomDepth)

    def vert(c: Vec3, u: Double, v: Double): RoomVertex =
      (position = c, uv = Vec2(u, v))

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
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
    // Pre-render: bake some approximate indirect lighting into textures.
    // -----------------------------------------------------------------------

    // Shared noise field (same frequency + seed across all three bakers) →
    // spatial continuity across faces.
    def roomNoise(wp: Vec3Expr, normal: Vec3Expr) =
      val scaledWp = vec3(
        wp.x + wp.y * 0.2,
        wp.y * 0.3,
        wp.z * 0.8 + wp.y * 0.2,
      )

      lerp(
        0.68,
        1.0,
        ((Noise
          .fbm3(
            scaledWp * 0.15,
            freqMul = 3.6,
            ampMul = 0.12,
            seed = vec3(140),
          ) +
          Noise.fbm3(
            scaledWp.cross(normal) * 0.2,
            freqMul = 2.1,
            ampMul = 0.25,
            seed = vec3(70),
          ) * 0.3)
          / 1.3).fit1101,
      )

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * TexScale).toInt, (h * TexScale).toInt)

    // Floor — plain tinted noise.
    val floorBaker = TextureBaker(p): (wp, normal, uv) =>
      vec4(vec3(0.80, 0.78, 0.75) * roomNoise(wp, normal), 1.0)

    // Walls — tinted noise + debug grid darkening.
    val wallBaker = TextureBaker.block(p): (wp, normal, uv, color) =>
      val col = VarVec3("col")
      val g = LetVec2("g")
      val gridLine = LetFloat("gridLine")
      Block(
        col := vec3(0.96, 0.96, 0.95).lerp(
          vec3(0.86, 0.86, 0.85),
          wp.y.smoothstep(4.9, 5.5),
        ) * roomNoise(wp, normal),
        // Debug grid: ~1 cell per meter across the perimeter, scaled 2× to read
        // clearly at this TexScale.
        g := (uv * vec2(WallLength * 2.0, RoomHeight * 2.0)).fract - 0.5,
        gridLine := g.x.abs.max(g.y.abs).gt(0.45),
        col *= 1.0 - 0.23 * gridLine,
        color := vec4(col, 1.0),
      )

    // Ceiling — tinted noise + HDR halo light strips. Strips run along the V
    // axis of the baked UV; 6 strips across U.
    val ceilBaker = TextureBaker.block(p): (wp, normal, uv, color) =>
      val col = VarVec3("col")
      val s = LetFloat("s")
      val band = VarFloat("band")
      val lf = LetFloat("lf")
      val halo = LetVec3("halo")
      Block(
        col := vec3(0.85, 0.85, 0.84) * roomNoise(wp, normal),
        // `s` cycles 0..1 across each strip period along U; `s.abs` measures
        // distance from a strip's centre line. smoothstep(0.05, 0.02, d) gives a
        // soft 1-at-center band ~0.04 wide. `lf` fades the strips toward V-axis
        // ends so they read as recessed gallery lights.
        s := (uv.x * 6.0 + 0.5).fract,
        band := s.abs.smoothstep(0.05, 0.02),
        lf := uv.y.smoothstep(0.05, 0.15)
          * (1.0 - uv.y).smoothstep(0.05, 0.15),
        band *= lf,
        // HDR halo brightness. >> 1.0 so it trips bloom in both direct view and
        // reflection (where the mip blur averages bright halo with dark surroundings)
        halo := band * vec3(8.0, 7.6, 6.8),
        col += halo,
        color := vec4(col, 1.0),
      )

    // Bake each material once into its own panel (the baker paints immediately
    // and returns a ready-to-sample, mipped texture).
    val (w, h) = texSize(RoomWidth, RoomDepth)
    val floorTex = floorBaker(floorForm, w, h)
    // Ceiling tex is HDR so the halo light strips can encode brightness > 1 and
    // survive the trip through the mirror render + bloom threshold.
    val ceilTex =
      ceilBaker(ceilForm, w, h, format = TextureFormat.Rgba16Float)
    val (ww, wh) = texSize(WallLength, RoomHeight)
    val wallTex = wallBaker(wallForm, ww, wh)

    // -----------------------------------------------------------------------
    // Scene rendering, actual shapes reading the prerendered baked textures
    // -----------------------------------------------------------------------

    val texSampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    type WallUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type WallPanels = (tex: FragmentPanel)

    val wallShade = p.shade[BakeVertex, (uv: Vec2), WallUniforms, WallPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    // The reflection flips triangle winding, so the shared shapes can't keep
    // `CullMode.Front`; draw both faces (`None`). Bind only `samp` +
    // `tex`; `vp` is supplied per-panel.
    def wallShape(form: Form, tex: Panel) =
      p.shape(form, wallShade, cullMode = CullMode.None)
        .bind("samp" := texSampler, "tex" := tex)

    val ceilShape = wallShape(ceilForm, ceilTex)
    val wallShapeW = wallShape(wallForm, wallTex)

    val mirror = MirrorReflection(
      p,
      shapes = Arr(wallShapeW, ceilShape),
      vpName = "vp",
      alphaScale = RoomHeight,
      blurStrength = 62.0,
      mipLevels = 6,
    )

    type FloorUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        reflStrength: FragmentUniform[Float],
    )
    type FloorPanels = (tex: FragmentPanel, reflTex: FragmentPanel)

    val floorShade =
      p.shade[BakeVertex, (uv: Vec2), FloorUniforms, FloorPanels]: program =>
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
            // Baked floor noise.
            base := ctx.textures
              .tex(ctx.in.uv, ctx.bindings.samp)
              .xyz,
            // Resolved reflection at this fragment's own pixel (1:1, no sampler).
            refl := ctx.textures.reflTex.load(ivec2(ctx.fragCoord.xy)),
            // refl.a = normalized distance; nearer ⇒ stronger reflection.
            falloff := (1.0 - refl.a).max(0.1),
            mix := ctx.bindings.reflStrength * falloff,
            ctx.out.color := vec4(base * (1.0 - mix) + refl.rgb * mix, 1.0),
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

    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (0.5, 0.6, 0.7, 1.0),
        depthTest = true,
        multisample = true,
        shapes = Arr(floorShape, wallShapeW, ceilShape),
      )
      .bind("vp" := sceneVp)

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
    // Camera, input, controller, resize handling, animation loop.
    // -----------------------------------------------------------------------
    val cam = PerspectiveCamera(
      fov = 0.9,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 1.7, 0.0),
    )

    // Preserve camera pose across live-coding reloads (dev only).
    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(sensitivity = 2.0, speed = 1.0)

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
