package sketches.rooms.canvases

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.GaussianMirrorReflection
import sketchlib.utils.mirror.MirrorReflection
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

// How far from a room edge the normal-dependent noise term is fully faded
// out, in world metres — keeps corners seam-free.
val EdgeFadeWorld = 0.08

// Contact darkening in the floor/wall junction, over the same distance.
val ContactDarken = 0.93 // brightness multiplier right at the edge

// Painting drop-shadow shaping. The shadow box matches the canvas footprint
// exactly; the soft edge + downward bias are shaped by `shadowMask`.
val ShadowBotFadeMul = 3.0
val ShadowDropMul = 0.25 // downward shadow offset, in penumbra widths
val ShadowFadeWorld = 0.10 // penumbra width in world metres
val ShadowStrength = 0.38

// Surface tints. Authored once as CPU vectors and used directly in the shader
// bakers below — `vec3(…)` lifts them into the GPU domain.
val FloorTint = Vec3(0.80, 0.78, 0.75)
val CeilTint = Vec3(0.86, 0.86, 0.85)
val WallTintLow = Vec3(0.97, 0.97, 0.96)
val WallTintHigh = Vec3(0.88, 0.88, 0.87)
val HaloColor = Vec3(8.0, 7.6, 6.8) // HDR — drives the ceiling strip bloom

/** Soft, directional painting drop-shadow for one rect, in wall-local UV.
  * `rect = (centerX, centerY, halfW, halfH)`, `fade = (fadeU, fadeV)` is the
  * soft-edge width per axis **in UV** — pass `worldFade / wallWidth` and
  * `worldFade / wallHeight` so the penumbra is isotropic in world space
  * regardless of wall aspect. The shadow is uniform in strength inside the box;
  * only the edge falloff varies (tight above, broad below).
  */
def shadowMask(uv: Vec2Expr, rect: Vec4Expr, fade: Vec2Expr): FloatExpr =
  val hx = rect.z
  val hy = rect.w
  val dx = uv.x - rect.x
  // +Y is down; the vertical box is nudged down so the light comes from
  // slightly above — the top edge stays lit, the bottom shadow is exposed.
  val dy = uv.y - rect.y - fade.y * ShadowDropMul
  // Horizontal containment — symmetric soft edge, centred *on* the canvas
  // edge: half the penumbra falls on the wall beyond the canvas, half stays
  // hidden behind it (light leaking in around the slightly offset canvas).
  val hMask = dx.abs.smoothstep(hx + fade.x * 0.5, hx - fade.x * 0.5)
  // Vertical containment — same edge-centred falloff, tight above the top
  // edge, broad below the bottom one (the cast shadow pools under the canvas).
  val upperFade = fade.x
  val lowerFade = fade.y * ShadowBotFadeMul
  val upper = dy.smoothstep(-hy - upperFade * 0.5, -hy + upperFade * 0.5)
  val lower = dy.smoothstep(hy + lowerFade * 0.5, hy - lowerFade * 0.5)
  hMask * upper * lower

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
  * binding, and the wall-local UV data its shadow instance needs. Both `model`
  * and `shadowRect` are mutable bindings so a swaying painting can drive its
  * own model matrix and move its shadow with it each frame. `basePos` /
  * `baseRect` are the resting values the sway offsets from.
  */
case class Painting(
    model: BufferBinding[Mat4, ?],
    shape: AnyShape,
    shadowRect: BufferBinding[Vec4, ?], // UV (centerX, centerY, halfW, halfH)
    shadowFade: Vec2, // per-axis penumbra width in UV
    basePos: Vec3, // resting world position (sway offsets Y from here)
    baseRect: Vec4, // resting shadow rect (sway moves centerY)
    rotY: Double, // wall orientation about Y
    wallHeight: Double, // for mapping a world Y offset → UV shadow move
)

/** A painting animated in a vertical sine rhythm: distinct `phase` and a
  * slightly varying `speed` per painting, `amp` metres of travel.
  */
case class Sway(
    painting: Painting,
    phase: Double,
    speed: Double,
    amp: Double,
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

    // Distance from `wp` to the nearest room edge, ignoring the boundary
    // planes the surface itself lies in (a wall never "approaches" its own
    // plane). Adding a large constant on the surface's own axis takes it out
    // of the `min`.
    def edgeDist(wp: Vec3Expr, normal: Vec3Expr): FloatExpr =
      val Far = 1000.0
      val dx = (RoomWidth / 2.0 - wp.x.abs) + normal.x.abs * Far
      val dy = wp.y.min(RoomHeight - wp.y) + normal.y.abs * Far
      val dz = (RoomDepth / 2.0 - wp.z.abs) + normal.z.abs * Far
      dx.min(dy).min(dz)

    // Contact shadow as a function of the distance to the junction: darkest at
    // 0, back to full brightness `EdgeFadeWorld` away.
    def contact(dist: FloatExpr): FloatExpr =
      lerp(ContactDarken, 1.0, dist.smoothstep(0.0, EdgeFadeWorld))

    def roomNoise(wp: Vec3Expr, normal: Vec3Expr) =
      val scaledWp = vec3(
        wp.x + wp.y * 0.2,
        wp.y * 0.3,
        wp.z * 0.8 + wp.y * 0.2,
      )
      // The normal-dependent term gives each orientation its own look, which
      // would otherwise meet as a hard seam in the corners. Fade it out over
      // `EdgeFadeWorld` so the edge itself is uniform across all surfaces.
      val edge = edgeDist(wp, normal).smoothstep(0.0, EdgeFadeWorld)
      lerp(
        0.68,
        1.0,
        ((Noise
          .fbm3(
            scaledWp * 0.10,
            freqMul = 3.6,
            ampMul = 0.12,
            seed = vec3(120),
          ) +
          Noise.fbm3(
            scaledWp.cross(normal) * 0.15,
            freqMul = 2.1,
            ampMul = 0.25,
            seed = vec3(70),
          ) * 0.3 * edge)
          / 1.3).fit1101,
      )

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * TexScale).toInt, (h * TexScale).toInt)

    val (rfw, rfh) = texSize(RoomWidth, RoomDepth)

    // Floor — plain tinted noise.
    val floorTex = TextureBaker.bake(p, floorForm, rfw, rfh): (wp, normal, _) =>
      // Contact shadow in the wall junction — distance to the nearest wall.
      vec4(
        vec3(FloorTint) * roomNoise(wp, normal)
          * contact(edgeDist(wp, normal)),
        1.0,
      )

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
        col := vec3(CeilTint) * roomNoise(wp, normal),
        s := (uv.x * 6.0 + 0.5).fract,
        band := s.abs.smoothstep(0.05, 0.02),
        lf := uv.y.smoothstep(0.05, 0.15)
          * (1.0 - uv.y).smoothstep(0.05, 0.15),
        band *= lf,
        halo := band * vec3(HaloColor),
        col += halo,
        color := vec4(col, 1.0),
      )

    // Single wall noise baker - shadows go on top in a separate layer.
    val wallBaker = TextureBaker(p): (wp, normal, _) =>
      // Matching contact shadow along the bottom border — height above floor.
      vec4(
        vec3(WallTintLow).lerp(
          vec3(WallTintHigh),
          wp.y.smoothstep(4.6, 5.5),
        ) * roomNoise(wp, normal) * contact(wp.y),
        1.0,
      )

    // The wall texture is composited each time it is baked: first a copy layer
    // lays the pre-baked noise into the target, then one shadow instance per
    // painting darkens its rect on top via multiplicative blending. One draw per
    // shadow accumulating via fixed-function blending — no ping-pong, no
    // per-pass full-texture read/write — so re-baking a moving wall every frame
    // is cheap.

    // Copy layer — write the pre-baked noise texture into the composite target.
    type CopyU = (samp: Sampler)
    type CopyP = (tex: FragmentPanel)
    val copyShade = p.layerShade[CopyU, CopyP]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    // Shadow instance — outputs a per-pixel darkening factor `1 - strength·mask`.
    // Under `BlendState.Multiply` (color = dst·src) each instance multiplies the
    // target, so overlapping shadows compound exactly as a stacked chain would.
    type ShadowU = (rect: Vec4, fade: Vec2, strength: Float)
    val shadowShade = p.layerShade[ShadowU]: program =>
      program.frag: ctx =>
        val sm = LetFloat("sm")
        Block(
          sm := shadowMask(ctx.in.uv, ctx.bindings.rect, ctx.bindings.fade),
          ctx.out.color :=
            vec4(vec3(1.0 - ctx.bindings.strength * sm), 1.0),
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
      val baseRect = Vec4(
        u / wall.width,
        1.0 - v / wall.height,
        (spec.width / 2.0) / wall.width,
        (spec.height / 2.0) / wall.height,
      )
      val painting = Painting(
        model = model,
        shape = shape,
        shadowRect = p.binding(baseRect),
        shadowFade =
          Vec2(ShadowFadeWorld / wall.width, ShadowFadeWorld / wall.height),
        basePos = pos,
        baseRect = baseRect,
        rotY = wall.rotY,
        wallHeight = wall.height,
      )
      wall.paintings.push(painting)
      painting

    // Composite one wall texture: a copy layer lays the pre-baked noise, then
    // one multiplicatively-blended shadow instance per painting darkens its
    // rect on top. Returns the panel — for animated walls re-`p.paint` it each
    // frame after moving the paintings' shadow rects. No painting cap.
    def compositeWallTex(wall: Wall): Panel =
      val (ww, wh) = texSize(wall.width, wall.height)
      val noiseTex = wallBaker(wall.form, ww, wh)
      val copy = p
        .layer(copyShade)
        .bind("samp" := sampler, "tex" := noiseTex)
      val shadow = p
        .layer(shadowShade, blendState = BlendState.Multiply)
        .bind("strength" := ShadowStrength)
      for painting <- wall.paintings do
        shadow.instances.add(
          "rect" := painting.shadowRect,
          "fade" := painting.shadowFade,
        )
      val panel =
        p.panel(
          width = ww,
          height = wh,
          mips = true,
          layers = Arr(copy, shadow),
        )
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

    // Paintings per wall: the wide walls (left/right, along the room depth)
    // carry 4, the narrow ones (front/back) carry 3. Same image/color per wall;
    // only the size varies per painting.
    val counts = Arr(3, 3, 4, 4) // front, back, left, right
    // The wide walls (indices 2, 3) animate their paintings.
    def isAnimated(wallIndex: Int): Boolean = wallIndex >= 2

    // Paintings on the animated walls, each swaying vertically.
    val sways = Arr[Sway]()

    // Keep paintings this far from each wall's side edges.
    val WallSideMargin = 0.5

    for i <- 0 until walls.length do
      val wall = walls(i)
      val img = imagePanels(i)
      val count = counts(i)
      // Evenly spaced along the wall's inset span, each in its own slot centre,
      // with a slight random horizontal + vertical offset.
      val span = wall.width - 2.0 * WallSideMargin
      for j <- 0 until count do
        val pw = randInRange(0.9, 1.7)
        val ph = randInRange(0.7, 1.4)
        val slot = WallSideMargin + span * (j + 0.5) / count
        val u = slot + randInRange(-0.12, 0.12)
        val v = 1.75 + randInRange(-0.18, 0.18)
        val painting = hang(
          wall,
          PaintingSpec(width = pw, height = ph, depth = 0.05, image = img),
          u = u,
          v = v,
        )
        // Distinct starting phase + a slightly varying speed per painting.
        if isAnimated(i) then
          sways.push(
            Sway(
              painting,
              phase = randInRange(0.0, Tau),
              speed = randInRange(0.6, 1.0),
              amp = randInRange(0.14, 0.22),
            ),
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
    // Composite wall textures that must be re-baked each frame (the animated
    // walls, whose shadows move with their swaying paintings).
    val animatedPanels = Arr[Panel]()
    for i <- 0 until walls.length do
      val wall = walls(i)
      val wallTex = compositeWallTex(wall)
      if isAnimated(i) then animatedPanels.push(wallTex)
      aboveGround.push(
        p.shape(wall.form, texturedShade, cullMode = CullMode.None)
          .bind("samp" := sampler, "tex" := wallTex),
      )
      for painting <- wall.paintings do aboveGround.push(painting.shape)

    val wallColor = Vec4(0.90, 0.90, 0.90, 0.0)

    // val mirror = MirrorReflection(
    //   p,
    //   shapes = aboveGround,
    //   vpName = "vp",
    //   alphaScale = RoomHeight,
    //   blurStrength = 5.0,
    //   stretch = 1.5,
    //   clearColor = wallColor,
    // )
    val mirror = GaussianMirrorReflection(
      p,
      shapes = aboveGround,
      vpName = "vp",
      alphaScale = RoomHeight,
      blurStrength = 5.0,
      blurRatioVertical = 3.0,
      clearColor = wallColor,
    )

    // Canvas size in physical pixels — the floor turns its `fragCoord` into a
    // screen uv with it, because the reflection panel is sub-resolution and no
    // longer matches the scene's pixel grid 1:1.
    val canvasRes = p.binding[Vec2]

    val reflStrength = 0.25

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
            falloff := (1.0 - refl.a * 0.4),
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
      mirror.resize(w, h)

    var time = 0.0

    animate: tpf =>
      time += tpf
      val t = time / 1000.0
      // Sway the animated paintings vertically, moving each one's model matrix
      // and its shadow rect together.
      sways.foreach: sw =>
        val pt = sw.painting
        val s = sw.amp * (t * sw.speed + sw.phase).sin
        pt.model.set(
          Mat4.fromTranslationRotationScale(
            pt.basePos + Up * s,
            Quat.fromRotationY(pt.rotY),
            Vec3(1.0, 1.0, 1.0),
          ),
        )
        // Painting up by `s` metres → v grows → shadow rect centre moves up
        // (v is measured downward, so subtract).
        pt.shadowRect.set(
          Vec4(
            pt.baseRect.x,
            pt.baseRect.y - s / pt.wallHeight,
            pt.baseRect.z,
            pt.baseRect.w,
          ),
        )
      // Re-composite the animated walls (noise copy + moved shadow instances)
      // before the scene samples their textures.
      animatedPanels.foreach(p.paint(_))

      input.update(tpf)
      controller.update(tpf)
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      // p.show(mirror.resultPanel)
      p.show(bloom.resultPanel)
