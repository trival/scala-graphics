package sketches.rooms.canvases

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
import trivalibs.utils.random.randInRange

// ---------------------------------------------------------------------------
// A first-person walkable room (forked from rooms/base) with paintings hanging
// on the walls. The four walls are split into separate `Wall` blocks (see
// Wall.scala), each with its own baked noise texture (local UV) and the
// paintings hung on it. Floor / ceiling, the HDR ceiling halos + bloom, and the
// depth-driven blurred floor reflection are unchanged from base.
//
// M1: one painting per wall, static, with a single soft shadow baked into the
// wall texture. All above-ground objects (walls + paintings) contribute to the
// floor reflection.
// ---------------------------------------------------------------------------

val RoomWidth = 6.5
val RoomHeight = 5.5
val RoomDepth = 10.0

// Baked texels per world metre. Texture sizes are derived from the actual
// geometry dimensions × this factor, so texel density is uniform in space.
val TexScale = 48.0

@main def roomsCanvases(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Floor / ceiling geometry — box face quads → Mesh → buffered geometry
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

    val floorForm =
      form(Arr(box.bottomFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    val ceilForm =
      form(Arr(box.topFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    // -----------------------------------------------------------------------
    // Pre-render: bake a 3D-noise field across the room geometry. A shared
    // `roomNoise` shapes the noise so neighbouring faces line up in world
    // space, but a second normal-cross term adds some per-orientation variance
    // (a wall reads slightly differently from the floor). Each surface gets
    // its own dedicated baker so the shaders stay focused: floor is plain
    // tinted noise, ceiling adds HDR halo strips, walls add a vertical
    // darkening toward the top and bake a soft painting shadow.
    // -----------------------------------------------------------------------

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

    val (rfw, rfh) = texSize(RoomWidth, RoomDepth)

    // Floor — plain tinted noise.
    val floorTex = TextureBaker.bake(p, floorForm, rfw, rfh): (wp, normal, _) =>
      vec4(vec3(0.80, 0.78, 0.75) * roomNoise(wp, normal), 1.0)

    // Ceiling — tinted noise + HDR halo light strips along V; 6 strips across U.
    val ceilTex = TextureBaker.bakeBlock(
      p,
      ceilForm,
      rfw,
      rfh,
      format = TextureFormat.Rgba16Float,
    ): (wp, normal, uv, color) =>
      val col = VarVec3("col")
      val s = LetFloat("s")
      val band = VarFloat("band")
      val lf = LetFloat("lf")
      val halo = LetVec3("halo")
      Block(
        col := vec3(0.92, 0.92, 0.90) * roomNoise(wp, normal),
        s := (uv.x * 6.0 + 0.5).fract,
        band := s.abs.smoothstep(0.05, 0.02),
        lf := uv.y.smoothstep(0.05, 0.15)
          * (1.0 - uv.y).smoothstep(0.05, 0.15),
        band *= lf,
        halo := band * vec3(8.0, 7.6, 6.8),
        col += halo,
        color := vec4(col, 1.0),
      )

    // Single wall noise baker — shared by all four walls (one shade, one
    // pipeline). Plain tinted noise darkened toward the ceiling; no shadow,
    // since that's drawn on top per-wall by the shadow layer below.
    val wallBaker = TextureBaker(p): (wp, normal, _) =>
      vec4(
        vec3(0.96, 0.96, 0.95).lerp(
          vec3(0.86, 0.86, 0.85),
          wp.y.smoothstep(4.9, 5.5),
        ) * roomNoise(wp, normal),
        1.0,
      )

    // Shadow layer — reads the bake pong-injected as `prev` and modulates by a
    // soft painting shadow whose rect / fade / strength come in as per-wall
    // uniforms. One shade, one pipeline, four draws.
    type ShadowU = (rect: Vec4, fade: Vec2, strength: Float)
    type ShadowP = (prev: FragmentPanel)
    val shadowLayerShade = p.layerShade[ShadowU, ShadowP]: program =>
      program.frag: ctx =>
        val base = LetVec4("base")
        val sm = LetFloat("sm")
        Block(
          base := ctx.textures.prev.load(ivec2(ctx.fragCoord.xy)),
          sm := shadowMask(ctx.in.uv, ctx.bindings.rect, ctx.bindings.fade),
          ctx.out.color :=
            vec4(base.xyz * (1.0 - ctx.bindings.strength * sm), base.w),
        )

    // Bake one wall texture: noise prepared by the shared baker, painting
    // shadow drawn on top by the shadow layer (auto-pong reads the bake as
    // `prev`; the painter swaps main↔pong after the layer so external
    // samplers see the shadowed result).
    def bakeWallTex(wall: paintings.Wall): Panel =
      val (ww, wh) = texSize(wall.width, wall.height)
      val panel = wallBaker.prepare(wall.form, ww, wh)
      val shadow = p
        .layer(shadowLayerShade)
        .bind(
          "rect" := wall.shadowRect,
          "fade" := wall.shadowFade,
          "strength" := wall.shadowStrength,
        )
      panel.set(layer = shadow)
      p.paint(panel)
      panel

    // -----------------------------------------------------------------------
    // Walls + paintings (the M1 feature)
    // -----------------------------------------------------------------------
    val paintings = Paintings(p)

    // Image panels (content is the sketch's concern, never the block). A
    // procedural diagonal grid over a monochrome base — black lines edge to
    // edge — so the canvas UV projection (front inset, side wrap, back
    // continuity) is visually verifiable.
    val imgShade = p.layerShade[(color: Vec3)]: program =>
      program.frag: ctx =>
        val GridN = 6.0
        val HalfWidth = 0.016
        def lineMask(t: FloatExpr): FloatExpr =
          val f = (t * GridN).fract
          val d = f.min(1.0 - f) // 0 on a grid line
          d.smoothstep(HalfWidth, 0.0) // 1 on the line, 0 away
        val uv = ctx.in.uv
        val m = lineMask(uv.x + uv.y).max(lineMask(uv.x - uv.y))
        ctx.out.color := vec4(ctx.bindings.color * (1.0 - m), 1.0)

    def patternPanel(c: Vec3): Panel =
      p.panel(
        width = 256,
        height = 256,
        layer = p.layer(imgShade).bind("color" := c),
      )

    // Four walls, each from the room box's extent, facing inward.
    def mkWall(
        center: Vec3,
        w: Double,
        h: Double,
        rotY: Double,
        normal: Vec3,
    ): paintings.Wall =
      paintings.wall(center, w, h, rotY, normal)

    val Tau = 2.0 * math.Pi
    val wallFront = mkWall(
      Vec3(0.0, RoomHeight / 2.0, RoomDepth / 2.0),
      RoomWidth,
      RoomHeight,
      Tau * 0.5,
      Vec3(0.0, 0.0, -1.0),
    )
    val wallBack = mkWall(
      Vec3(0.0, RoomHeight / 2.0, -RoomDepth / 2.0),
      RoomWidth,
      RoomHeight,
      0.0,
      Vec3(0.0, 0.0, 1.0),
    )
    val wallLeft = mkWall(
      Vec3(-RoomWidth / 2.0, RoomHeight / 2.0, 0.0),
      RoomDepth,
      RoomHeight,
      Tau * 0.25,
      Vec3(1.0, 0.0, 0.0),
    )
    val wallRight = mkWall(
      Vec3(RoomWidth / 2.0, RoomHeight / 2.0, 0.0),
      RoomDepth,
      RoomHeight,
      -Tau * 0.25,
      Vec3(-1.0, 0.0, 0.0),
    )
    val walls = Arr(wallFront, wallBack, wallLeft, wallRight)

    // Hang one painting per wall, centred horizontally at eye height, random
    // size, monochrome image.
    val palette = Arr(
      (0.78, 0.30, 0.28),
      (0.30, 0.45, 0.70),
      (0.40, 0.62, 0.42),
      (0.82, 0.70, 0.34),
    )
    // Image panels are static — collected here so they get pre-rendered (a
    // clearColor-only panel still needs one paint to allocate + clear its
    // texture before it can be sampled).
    val imagePanels = Arr[Panel]()
    var wi = 0
    while wi < walls.length do
      val wall = walls(wi)
      val pw = randInRange(0.9, 1.7)
      val ph = randInRange(0.7, 1.4)
      val c = palette(wi)
      val img = patternPanel(Vec3(c._1, c._2, c._3))
      imagePanels.push(img)
      wall.hang(
        PaintingSpec(width = pw, height = ph, depth = 0.05, image = img),
        u = wall.width / 2.0,
        v = 1.7,
      )
      wi += 1

    // -----------------------------------------------------------------------
    // Scene rendering
    // -----------------------------------------------------------------------

    val texSampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    val ceilShape = p
      .shape(ceilForm, paintings.wallSceneShade, cullMode = CullMode.None)
      .bind("samp" := texSampler, "tex" := ceilTex)

    // All above-ground scene shapes (ceiling + walls + paintings) — these also
    // feed the floor mirror. Bake each wall's texture here (noise via the
    // shared baker + shadow layer with that wall's bindings), then ask the
    // wall for the scene shape that samples it.
    val aboveGround = Arr[AnyShape](ceilShape)
    wi = 0
    while wi < walls.length do
      val wall = walls(wi)
      val wallTex = bakeWallTex(wall)
      aboveGround.push(wall.createWallShape(wallTex))
      val ps = wall.paintingShapes
      var j = 0
      while j < ps.length do
        aboveGround.push(ps(j))
        j += 1
      wi += 1

    val mirror = MirrorReflection(
      p,
      shapes = aboveGround,
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
            base := ctx.textures
              .tex(ctx.in.uv, ctx.bindings.samp)
              .xyz,
            refl := ctx.textures.reflTex.load(ivec2(ctx.fragCoord.xy)),
            falloff := (1.0 - refl.a).max(0.1),
            mix := ctx.bindings.reflStrength * falloff,
            ctx.out.color := vec4(base * (1.0 - mix) + refl.rgb * mix, 1.0),
          )

    val reflStrength = p.binding(0.35)

    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "samp" := texSampler,
        "reflStrength" := reflStrength,
        "tex" := floorTex,
        "reflTex" := mirror.resultPanel,
      )

    // HDR scene panel — supplies the scene `vp` to all its shapes.
    val sceneVp = p.binding[Mat4]

    val sceneShapes = Arr[AnyShape](floorShape)
    var ai = 0
    while ai < aboveGround.length do
      sceneShapes.push(aboveGround(ai))
      ai += 1

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (0.5, 0.6, 0.7, 1.0),
        depthTest = true,
        multisample = true,
        shapes = sceneShapes,
      )
      .bind("vp" := sceneVp)

    val bloom = Bloom(
      p,
      scenePanel,
      intensity = 0.002,
      threshold = 1.0,
      blurRadius = 4.0,
      mipLevels = 5,
    )

    // -----------------------------------------------------------------------
    // Pre-render the painting image panels once. (Floor / ceiling / wall
    // textures are already painted by their respective `TextureBaker.bake` /
    // `bakeWallTex` calls above.)
    // -----------------------------------------------------------------------
    var pi = 0
    while pi < imagePanels.length do
      p.paint(imagePanels(pi))
      pi += 1

    // -----------------------------------------------------------------------
    // Camera, input, controller
    // -----------------------------------------------------------------------
    val cam = PerspectiveCamera(
      fov = 0.9,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 1.7, 0.0),
    )

    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(
        cam,
        input,
        sensitivity = 2.0,
        speed = 3.0,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
