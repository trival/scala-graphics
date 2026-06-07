package sketches.rooms.canvases

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
        toBufferedGeometry(Mesh(faces), MeshBufferType.FaceVertices),
      )

    val floorForm =
      form(Arr(box.bottomFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    val ceilForm =
      form(Arr(box.topFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    // -----------------------------------------------------------------------
    // Pre-render: bake a 3D-noise field across the room geometry. The vertex
    // shader lays each face out flat by its UV; the fragment samples noise at
    // the real world position — so the baked textures look like a single noise
    // volume filling the room. Per-material tint + optional ceiling halos. The
    // walls additionally bake a soft painting shadow (shadowStrength > 0).
    // -----------------------------------------------------------------------

    type NoiseUniforms = (
        tint: Vec3,
        // Halo light strips (ceiling only). `haloStrength = 0` zeroes them.
        haloCount: Float,
        haloStrength: Float,
        // Soft painting shadow (walls only). `shadowStrength = 0` disables it;
        // `shadowRect` = (centerX, centerY, halfW, halfH) in baked-UV space;
        // `shadowFade` = per-axis penumbra width in UV (aspect-correct).
        shadowStrength: Float,
        shadowRect: Vec4,
        shadowFade: Vec2,
    )

    val noiseShade =
      p.shade[RoomVertex, (worldPos: Vec3, uv: Vec2), NoiseUniforms]: program =>
        program.vert: ctx =>
          val uv = ctx.in.uv
          Block(
            ctx.out.worldPos := ctx.in.position,
            ctx.out.uv := uv,
            ctx.out.position := vec4(
              vec2(uv.x, 1.0 - uv.y).fit0111,
              0.0,
              1.0,
            ),
          )
        program.frag: ctx =>
          // ----- FBM tunables (3 octaves) -----
          val FbmFreqMul = 3.6
          val FbmAmpMul = 0.12
          val NoiseSeed = vec3(140)

          def fbm3(basePos: Vec3Expr): FloatExpr =
            var acc: FloatExpr = 0.0: FloatExpr
            var freq = 1.0
            var amp = 1.0
            var totalAmp = 0.0
            var i = 0
            while i < 3 do
              acc = acc + Simplex
                .simplexNoise3d(
                  basePos * freq + NoiseSeed,
                ) * amp
              totalAmp += amp
              freq *= FbmFreqMul
              amp *= FbmAmpMul
              i += 1
            (acc / totalAmp).fit1101.clamp01

          val n = VarFloat("n")
          val col = VarVec3("col")
          val s = LetFloat("s")
          val band = VarFloat("band")
          val lf = LetFloat("lf")
          val halo = LetVec3("halo")
          val sm = LetFloat("sm")

          val wp = ctx.in.worldPos
          val uv = ctx.in.uv

          Block(
            n := fbm3(
              vec3(
                wp.x + wp.y * 0.2,
                wp.y * 0.3,
                wp.z * 0.8 + wp.y * 0.2,
              ) * 0.15,
            ),
            // Remap noise into a tight near-white band [0.68, 1.0].
            n := 0.68 + n * 0.32,
            col := ctx.bindings.tint * n,
            // Halo light strips (ceiling only when haloStrength > 0).
            s := (uv.x * ctx.bindings.haloCount + 0.5).fract,
            band := s.abs.smoothstep(0.05, 0.02),
            lf := uv.y.smoothstep(0.05, 0.15)
              * (1.0 - uv.y).smoothstep(0.05, 0.15),
            band *= (ctx.bindings.haloStrength * lf),
            halo := band * vec3(8.0, 7.6, 6.8),
            col += halo,
            // Baked painting shadow (walls only when shadowStrength > 0).
            sm := shadowMask(uv, ctx.bindings.shadowRect, ctx.bindings.shadowFade),
            col *= 1.0 - ctx.bindings.shadowStrength * sm,
            ctx.out.color := vec4(col, 1.0),
          )

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * TexScale).toInt, (h * TexScale).toInt)

    // Floor / ceiling bake (no shadow).
    def roomTex(
        f: Form,
        size: (Int, Int),
        tint: Vec3,
        haloCount: Double = 1.0,
        haloStrength: Double = 0.0,
        format: TextureFormat = TextureFormat.Rgba8Unorm,
    ): Panel =
      val shape = p
        .shape(f, noiseShade, cullMode = CullMode.None)
        .bind(
          "tint" := tint,
          "haloCount" := haloCount,
          "haloStrength" := haloStrength,
          "shadowStrength" := 0.0,
          "shadowRect" := Vec4(0.0, 0.0, 0.0, 0.0),
          "shadowFade" := Vec2(0.01, 0.01),
        )
      p.panel(
        width = size._1,
        height = size._2,
        mips = true,
        format = format,
        shape = shape,
      )

    // Per-wall bake (room noise + a baked painting shadow). Used by the Wall
    // block via the `mkTexPanel` callback; captures this wall's tint + size.
    def wallTex(
        f: Form,
        w: Double,
        h: Double,
        tint: Vec3,
        shadowRect: Vec4,
        shadowFade: Vec2,
        shadowStrength: Double,
    ): Panel =
      val size = texSize(w, h)
      val shape = p
        .shape(f, noiseShade, cullMode = CullMode.None)
        .bind(
          "tint" := tint,
          "haloCount" := 1.0,
          "haloStrength" := 0.0,
          "shadowStrength" := shadowStrength,
          "shadowRect" := shadowRect,
          "shadowFade" := shadowFade,
        )
      p.panel(
        width = size._1,
        height = size._2,
        mips = true,
        format = TextureFormat.Rgba8Unorm,
        shape = shape,
      )

    val floorTex =
      roomTex(floorForm, texSize(RoomWidth, RoomDepth), Vec3(0.80, 0.78, 0.75))
    val ceilTex =
      roomTex(
        ceilForm,
        texSize(RoomWidth, RoomDepth),
        Vec3(0.88, 0.88, 0.87),
        haloCount = 6.0,
        haloStrength = 1.0,
        format = TextureFormat.Rgba16Float,
      )

    // -----------------------------------------------------------------------
    // Walls + paintings (the M1 feature)
    // -----------------------------------------------------------------------
    val paintings = Paintings(p)
    val WallTint = Vec3(0.96, 0.96, 0.95)

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
      p.panel(width = 256, height = 256, layer = p.layer(imgShade).bind("color" := c))

    // Four walls, each from the room box's extent, facing inward.
    def mkWall(
        center: Vec3,
        w: Double,
        h: Double,
        rotY: Double,
        normal: Vec3,
    ): paintings.Wall =
      paintings.wall(
        center,
        w,
        h,
        rotY,
        normal,
        (f, rect, fade, strength) =>
          wallTex(f, w, h, WallTint, rect, fade, strength),
      )

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

    // All above-ground scene shapes (walls + paintings + ceiling) — these also
    // feed the floor mirror.
    val aboveGround = Arr[AnyShape](ceilShape)
    wi = 0
    while wi < walls.length do
      val ss = walls(wi).sceneShapes
      var j = 0
      while j < ss.length do
        aboveGround.push(ss(j))
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
    // Pre-render the static textures once (wall + floor + ceiling, with mips).
    // -----------------------------------------------------------------------
    var pi = 0
    while pi < imagePanels.length do
      p.paint(imagePanels(pi))
      pi += 1
    p.paint(
      floorTex,
      ceilTex,
      wallFront.texPanel,
      wallBack.texPanel,
      wallLeft.texPanel,
      wallRight.texPanel,
    )

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
      BasicFirstPersonCameraController(sensitivity = 2.0, speed = 3.0)

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
