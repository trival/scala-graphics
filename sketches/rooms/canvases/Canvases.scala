package sketches.rooms.canvases

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.GaussianMirrorReflection
import trivalibs.dev.*
import trivalibs.graphics.buffers.BufferBinding
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
// A first-person walkable room with paintings hanging on the walls.
// ---------------------------------------------------------------------------

val RoomWidth = 6.5
val RoomHeight = 5.5
val RoomDepth = 10.0

// Baked texels per world metre. Texture sizes are derived from the actual
// geometry dimensions × this factor, so texel density is uniform in space.
val TexScale = 48.0

val Up = Vec3(0.0, 1.0, 0.0)

// Painting drop-shadow shaping. The shadow box matches the canvas footprint
// exactly; the soft edge + downward bias are shaped by `shadowMask`.
val ShadowTopFadeMul = 0.5
val ShadowBotFadeMul = 2.5
val ShadowGradTop = 0.28 // strength fraction at the canvas top edge
val ShadowFadeWorld = 0.06 // penumbra width in world metres
val ShadowStrength = 0.2

/** Soft, directional painting drop-shadow for one rect, in wall-local UV.
  * `rect = (centerX, centerY, halfW, halfH)`, `fade = (fadeU, fadeV)` is the
  * soft-edge width per axis **in UV** — pass `worldFade / wallWidth` and
  * `worldFade / wallHeight` so the penumbra is isotropic in world space
  * regardless of wall aspect. Returns ~0 above the canvas, rising to 1 under
  * it.
  */
def shadowMask(uv: Vec2Expr, rect: Vec4Expr, fade: Vec2Expr): FloatExpr =
  val hx = rect.z
  val hy = rect.w
  val dx = uv.x - rect.x
  val dy = uv.y - rect.y // +Y is down
  // Horizontal containment — symmetric soft edge.
  val hMask = dx.abs.smoothstep(hx + fade.x, hx)
  // Vertical containment — tight fade above the top edge, broad below the
  // bottom edge (the cast shadow pools under the canvas).
  val upper = dy.smoothstep(-hy - fade.y * ShadowTopFadeMul, -hy)
  val lower = dy.smoothstep(hy + fade.y * ShadowBotFadeMul, hy)
  // Top→bottom gradient inside the box: ShadowGradTop at top → 1 at bottom.
  val grad = ((dy + hy) / (2.0 * hy + 0.0001)).clamp01
  val vert = grad * (1.0 - ShadowGradTop) + ShadowGradTop
  hMask * upper * lower * vert

/** A painting to hang on a wall. `image` is any `Panel` (its content is the
  * consumer's concern). `sideStretch` is the front:side texel-density ratio — a
  * thin UV margin `depth / (sideStretch * size)` wraps each side.
  */
case class PaintingSpec(
    width: Double,
    height: Double,
    depth: Double,
    image: Panel,
    sideStretch: Double = 3.0,
)

/** A painting hung on a wall: its scene shape, its per-painting `model` matrix
  * binding (mutable, for animation in a later milestone) and the wall-local UV
  * data its baked shadow needs.
  */
case class Painting(
    model: BufferBinding[Mat4, ?],
    shape: AnyShape,
    shadowRect: Vec4, // UV-space (centerX, centerY, halfW, halfH)
    shadowFade: Vec2, // per-axis penumbra width in UV
)

/** One wall side: its quad geometry (local UV [0,1], v down) and the paintings
  * hung on it.
  */
case class Wall(
    center: Vec3,
    width: Double,
    height: Double,
    rotY: Double,
    inwardNormal: Vec3,
    form: Form,
    paintings: Arr[Painting] = Arr(),
)

type RoomVertex = (position: Vec3, uv: Vec2)

// Wall + ceiling: both are quads textured with a pre-baked panel.
type TexturedUniforms = (
    vp: VertexUniform[Mat4],
    samp: FragmentUniform[Sampler],
)
type TexturedPanels = (tex: FragmentPanel)

type PaintingUniforms = (
    vp: VertexUniform[Mat4],
    model: VertexUniform[Mat4],
    samp: FragmentUniform[Sampler],
)
type PaintingPanels = (img: FragmentPanel)

@main def roomsCanvases(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    val sampler = p.samplerLinear

    // -----------------------------------------------------------------------
    // Floor / ceiling geometry — box face quads → Mesh → buffered geometry
    // -----------------------------------------------------------------------
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
    // Pre-render: Simulate ambient lighting 3D-noise fields and generated halo light strips.
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
        col := vec3(0.88, 0.88, 0.87) * roomNoise(wp, normal),
        s := (uv.x * 6.0 + 0.5).fract,
        band := s.abs.smoothstep(0.05, 0.02),
        lf := uv.y.smoothstep(0.05, 0.15)
          * (1.0 - uv.y).smoothstep(0.05, 0.15),
        band *= lf,
        halo := band * vec3(8.0, 7.6, 6.8),
        col += halo,
        color := vec4(col, 1.0),
      )

    // Single wall noise baker - shadows go on top in a separate layer.
    val wallBaker = TextureBaker(p): (wp, normal, _) =>
      vec4(
        vec3(0.96, 0.96, 0.95).lerp(
          vec3(0.89, 0.89, 0.88),
          wp.y.smoothstep(4.7, 5.5),
        ) * roomNoise(wp, normal),
        1.0,
      )

    // Shadow layer — draw a shadow on top of the sampled texture.
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

    // -----------------------------------------------------------------------
    // Scene shades — a textured quad (walls, ceiling) and a painting box.
    // -----------------------------------------------------------------------
    val texturedShade =
      p.shade[BakeVertex, (uv: Vec2), TexturedUniforms, TexturedPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    val paintingShade =
      p.shade[RoomVertex, (uv: Vec2), PaintingUniforms, PaintingPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.position :=
                ctx.bindings.vp * ctx.bindings.model * vec4(
                  ctx.in.position,
                  1.0,
                ),
            )
          program.frag: ctx =>
            ctx.out.color := ctx.textures.img(ctx.in.uv, ctx.bindings.samp)

    // -----------------------------------------------------------------------
    // Walls + paintings (the M1 feature)
    // -----------------------------------------------------------------------

    /** Flat-box geometry for one painting, centred at the local origin, front
      * on `+Z`. Front fills the inset UV rect; the four thin sides wrap the
      * outer margin (stretched across the depth); the back is continuous with
      * the side back edges. (M1: always includes the back face — no frames
      * yet.)
      */
    def paintingForm(spec: PaintingSpec): Form =
      val hw = spec.width / 2.0
      val hh = spec.height / 2.0
      val hd = spec.depth / 2.0
      val mu = (spec.depth / (spec.sideStretch * spec.width)).clamp(0.0, 0.45)
      val mv =
        (spec.depth / (spec.sideStretch * spec.height)).clamp(0.0, 0.45)

      def v(
          x: Double,
          y: Double,
          z: Double,
          u: Double,
          w: Double,
      ): RoomVertex =
        (position = Vec3(x, y, z), uv = Vec2(u, w))

      val faces = Arr(
        // Front (+Z): inset rect.
        Quad(
          v(-hw, hh, hd, mu, mv),
          v(-hw, -hh, hd, mu, 1.0 - mv),
          v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
          v(hw, hh, hd, 1.0 - mu, mv),
        ),
        // Right side (+X): U 1-mu → 1.
        Quad(
          v(hw, hh, hd, 1.0 - mu, mv),
          v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
          v(hw, -hh, -hd, 1.0, 1.0 - mv),
          v(hw, hh, -hd, 1.0, mv),
        ),
        // Left side (-X): U mu → 0.
        Quad(
          v(-hw, hh, hd, mu, mv),
          v(-hw, -hh, hd, mu, 1.0 - mv),
          v(-hw, -hh, -hd, 0.0, 1.0 - mv),
          v(-hw, hh, -hd, 0.0, mv),
        ),
        // Top side (+Y): V mv → 0.
        Quad(
          v(-hw, hh, hd, mu, mv),
          v(hw, hh, hd, 1.0 - mu, mv),
          v(hw, hh, -hd, 1.0 - mu, 0.0),
          v(-hw, hh, -hd, mu, 0.0),
        ),
        // Bottom side (-Y): V 1-mv → 1.
        Quad(
          v(-hw, -hh, hd, mu, 1.0 - mv),
          v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
          v(hw, -hh, -hd, 1.0 - mu, 1.0),
          v(-hw, -hh, -hd, mu, 1.0),
        ),
        // Back (-Z): continuous with side back edges, same world-X→U as front.
        Quad(
          v(-hw, hh, -hd, 0.0, 0.0),
          v(-hw, -hh, -hd, 0.0, 1.0),
          v(hw, -hh, -hd, 1.0, 1.0),
          v(hw, hh, -hd, 1.0, 0.0),
        ),
      )

      p.form(geometry =
        toBufferedGeometry(Mesh(faces), MeshBufferType.FaceVertices),
      )

    /** A wall quad in world space, UV [0,1] (tl=(0,0), v down). Its `form` goes
      * to the wall baker; paintings are hung on it afterwards.
      */
    def mkWall(
        center: Vec3,
        width: Double,
        height: Double,
        rotY: Double,
        inwardNormal: Vec3,
    ): Wall =
      // Wall-local horizontal axis (UV.x runs along it); UV.y runs down.
      val right = Up.cross(inwardNormal)
      def corner(su: Double, sv: Double, u: Double, w: Double): RoomVertex =
        val pos =
          center + right * (su * width / 2.0) + Up * (sv * height / 2.0)
        (position = pos, uv = Vec2(u, w))
      val wallForm = form(
        Arr(
          Quad(
            corner(-1.0, 1.0, 0.0, 0.0),
            corner(-1.0, -1.0, 0.0, 1.0),
            corner(1.0, -1.0, 1.0, 1.0),
            corner(1.0, 1.0, 1.0, 0.0),
          ),
        ),
      )
      Wall(center, width, height, rotY, inwardNormal, wallForm)

    /** Hang a painting at wall-local `(u, v)` in world units (`u` along the
      * wall width from its left edge, `v` height from the floor edge).
      */
    def hang(wall: Wall, spec: PaintingSpec, u: Double, v: Double): Painting =
      val right = Up.cross(wall.inwardNormal)
      val hd = spec.depth / 2.0
      val pos = wall.center +
        right * (u - wall.width / 2.0) +
        Up * (v - wall.height / 2.0) +
        wall.inwardNormal * (hd + 0.02)
      val m = Mat4.fromTranslationRotationScale(
        pos,
        Quat.fromRotationY(wall.rotY),
        Vec3(1.0, 1.0, 1.0),
      )
      val model = p.binding(m)
      val shape = p
        .shape(paintingForm(spec), paintingShade, cullMode = CullMode.None)
        .bind("model" := model, "samp" := sampler, "img" := spec.image)
      val painting = Painting(
        model,
        shape,
        Vec4(
          u / wall.width,
          1.0 - v / wall.height,
          (spec.width / 2.0) / wall.width,
          (spec.height / 2.0) / wall.height,
        ),
        Vec2(ShadowFadeWorld / wall.width, ShadowFadeWorld / wall.height),
      )
      wall.paintings.push(painting)
      painting

    // Bake one wall texture: noise prepared by the shared baker, painting
    // shadow drawn on top by the shadow layer. Call after the paintings are up.
    def bakeWallTex(wall: Wall): Panel =
      val (ww, wh) = texSize(wall.width, wall.height)
      val panel = wallBaker.prepare(wall.form, ww, wh)
      val painting = wall.paintings(0)
      val shadow = p
        .layer(shadowLayerShade)
        .bind(
          "rect" := painting.shadowRect,
          "fade" := painting.shadowFade,
          "strength" := ShadowStrength,
        )
      panel.set(layer = shadow)
      p.paint(panel)
      panel

    // Image panels projected onto the canvases.
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

    val palette = Arr(
      Vec3(0.78, 0.30, 0.28),
      Vec3(0.30, 0.45, 0.70),
      Vec3(0.40, 0.62, 0.42),
      Vec3(0.82, 0.70, 0.34),
    )
    val imagePanels = palette.map(patternPanel)
    // Pre-render the painting image panels once.
    imagePanels.foreach(p.paint(_))

    for i <- 0 until walls.length do
      val wall = walls(i)
      val img = imagePanels(i)
      val pw = randInRange(0.9, 1.7)
      val ph = randInRange(0.7, 1.4)
      hang(
        wall,
        PaintingSpec(width = pw, height = ph, depth = 0.05, image = img),
        u = wall.width / 2.0,
        v = 1.7,
      )

    // -----------------------------------------------------------------------
    // Scene rendering
    // -----------------------------------------------------------------------

    val ceilShape = p
      .shape(ceilForm, texturedShade, cullMode = CullMode.None)
      .bind("samp" := sampler, "tex" := ceilTex)

    // All above-ground scene shapes (ceiling + walls + paintings) — these also
    // feed the floor mirror.
    val aboveGround = Arr[AnyShape](ceilShape)
    for wall <- walls do
      val wallTex = bakeWallTex(wall)
      aboveGround.push(
        p.shape(wall.form, texturedShade, cullMode = CullMode.None)
          .bind("samp" := sampler, "tex" := wallTex),
      )
      for painting <- wall.paintings do aboveGround.push(painting.shape)

    // Approach B — per-pixel Gaussian. Swap back to `MirrorReflection(...)`
    // for the mip-pyramid baseline (see src/utils/mirror/design-plan.md).
    val mirror = GaussianMirrorReflection(
      p,
      shapes = aboveGround,
      vpName = "vp",
      alphaScale = RoomHeight,
      blurStrength = 16.0,
      blurRatioVertical = 2.0,
    )

    // Canvas size in physical pixels — the floor turns its `fragCoord` into a
    // screen uv with it, because the reflection panel is sub-resolution and no
    // longer matches the scene's pixel grid 1:1.
    val canvasRes = p.binding[Vec2]

    val reflStrength = 0.45

    type FloorUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        res: FragmentUniform[Vec2],
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
            // UV sample, not a 1:1 load: the reflection panel runs at a
            // fraction of the canvas resolution.
            refl := ctx.textures.reflTex(
              ctx.fragCoord.xy / ctx.bindings.res,
              ctx.bindings.samp,
            ),
            falloff := (1.0 - refl.a).max(0.1),
            mix := falloff * reflStrength,
            ctx.out.color := vec4(base * (1.0 - mix) + refl.rgb * mix, 1.0),
          )

    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "samp" := sampler,
        "tex" := floorTex,
        "reflTex" := mirror.resultPanel,
        "res" := canvasRes,
      )

    // HDR scene panel — supplies the scene `vp` to all its shapes.
    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (0.5, 0.6, 0.7, 1.0),
        depthTest = true,
        multisample = true,
        shapes = aboveGround :+ floorShape,
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
        speed = 1.0,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)
      canvasRes.set(Vec2(w, h))

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      // p.show(mirror.resultPanel)
      p.show(bloom.resultPanel)
