package sketches.rooms.canvases

import trivalibs.graphics.buffers.BufferBinding
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Reusable building block (M1): a Wall that owns one or more Paintings.
//
// A Painting is a flat box: the front face carries most of the image UV, the
// four thin sides take the outer UV margin (stretched, so the image wraps the
// edges like a canvas on a frame), and the back face is continuous with the
// sides. The painting renders an arbitrary `Panel` onto its surface — image
// CONTENT is always the consumer's concern, never this block.
//
// A Wall builds its own quad geometry (local UV [0,1]) and bakes its own
// texture (via a consumer-supplied `mkTexPanel`, so the room's look stays in
// the sketch). Static painting shadows are baked into that texture; the shared
// `shadowMask` helper below is what the sketch's bake shade calls.
//
// Designed to later lift into `src/playground/paintings/` unchanged.
// ---------------------------------------------------------------------------

/** A painting to hang on a wall. `image` is any `Panel` (its content is the
  * consumer's concern). `stretch` is the front:side texel-density ratio — a
  * thin UV margin `depth / (stretch * size)` wraps each side.
  */
final case class PaintingSpec(
    width: Double,
    height: Double,
    depth: Double,
    image: Panel,
    stretch: Double = 3.0,
)

// Painting / wall shader schemas. `vp` is left UNBOUND on every shape so each
// panel supplies its own (scene VP in the scene panel, reflected VP in the
// mirror) — the same trick the room walls use.
type PaintingVertex = (position: Vec3, uv: Vec2)
type PaintingUniforms = (
    vp: VertexUniform[Mat4],
    model: VertexUniform[Mat4],
    samp: FragmentUniform[Sampler],
)
type PaintingPanels = (img: FragmentPanel)

type WallUniforms = (
    vp: VertexUniform[Mat4],
    samp: FragmentUniform[Sampler],
)
type WallPanels = (tex: FragmentPanel)

// Directional drop-shadow shaping (fractions of the per-axis world fade /
// of full strength). Light & short above the canvas, broad below, medium sides;
// plus a top→bottom gradient so most of the darkening sits under the canvas.
private val ShadowTopFadeMul = 0.5
private val ShadowBotFadeMul = 2.5
private val ShadowGradTop = 0.28 // strength fraction at the canvas top edge

/** Soft, directional painting drop-shadow for one rect, in wall-local UV.
  * `rect = (centerX, centerY, halfW, halfH)`, `fade = (fadeU, fadeV)` is the
  * soft-edge width per axis **in UV** — pass `worldFade / wallWidth` and
  * `worldFade / wallHeight` so the penumbra is isotropic in world space
  * regardless of wall aspect. Returns ~0 above the canvas, rising to 1 under
  * it. Shared by the bake shade (static, baked) and — from M4 — the live wall
  * shade.
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

/** A painting hung on a wall: its scene shape plus a per-painting `model`
  * matrix binding (mutable, for animation in a later milestone) and its
  * wall-local shadow rect.
  */
final class HungPainting private[canvases] (
    private val modelBinding: BufferBinding[Mat4, ?],
    val shape: AnyShape,
    val shadowRect: Vec4,
    val shadowFade: Vec2,
):
  /** Re-place the painting (used by moving paintings from M4 on). */
  def setModel(m: Mat4): Unit = modelBinding.set(m)

/** Factory + shared resources for paintings/walls. Build one per painter; it
  * holds the shared shades + sampler and stamps out [[Wall]]s.
  */
class Paintings(p: Painter):
  // Shadow box matches the canvas footprint exactly; the soft edge + downward
  // bias are shaped by `shadowMask`. `ShadowFadeWorld` is the penumbra width in
  // world metres (converted to per-axis UV fade so it's aspect-correct).
  private val ShadowFadeWorld = 0.16
  private val ShadowStrength = 0.2

  val sampler =
    p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

  // Wall scene shade — samples the baked wall texture. (M1: no live shadow.)
  // Public so consumers can reuse it for other textured quads (e.g. ceiling).
  val wallSceneShade =
    p.shade[PaintingVertex, (uv: Vec2), WallUniforms, WallPanels]: program =>
      program.vert: ctx =>
        Block(
          ctx.out.uv := ctx.in.uv,
          ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
        )
      program.frag: ctx =>
        ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

  // Painting shade — samples the supplied image panel across the flat box.
  private val paintingShade =
    p.shade[PaintingVertex, (uv: Vec2), PaintingUniforms, PaintingPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position :=
              ctx.bindings.vp * ctx.bindings.model * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.img(ctx.in.uv, ctx.bindings.samp)

  /** Flat-box geometry for one painting, centred at the local origin, front on
    * `+Z`. Front fills the inset UV rect; the four thin sides wrap the outer
    * margin (stretched across the depth); the back is continuous with the side
    * back edges. (M1: always includes the back face — no frames yet.)
    */
  private def paintingForm(spec: PaintingSpec): Form =
    val hw = spec.width / 2.0
    val hh = spec.height / 2.0
    val hd = spec.depth / 2.0
    val mu = (spec.depth / (spec.stretch * spec.width)).clamp(0.0, 0.45)
    val mv = (spec.depth / (spec.stretch * spec.height)).clamp(0.0, 0.45)

    def v(
        x: Double,
        y: Double,
        z: Double,
        u: Double,
        w: Double,
    ): PaintingVertex =
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

  /** Build a wall. `mkTexPanel(form, shadowRect, shadowStrength)` is the
    * consumer's per-wall texture bake (room look + baked shadow); the wall
    * calls it once its paintings are hung.
    */
  def wall(
      center: Vec3,
      width: Double,
      height: Double,
      rotY: Double,
      inwardNormal: Vec3,
      mkTexPanel: (Form, Vec4, Vec2, Double) => Panel,
  ): Wall =
    Wall(center, width, height, rotY, inwardNormal, mkTexPanel)

  /** One wall side: own quad geometry (local UV [0,1]) + own baked texture,
    * with any hung paintings. Hang paintings, then read [[bakePanel]] /
    * [[sceneShapes]] (both lazy — built after the hangs).
    */
  final class Wall private[Paintings] (
      val center: Vec3,
      val width: Double,
      val height: Double,
      rotY: Double,
      inwardNormal: Vec3,
      mkTexPanel: (Form, Vec4, Vec2, Double) => Panel,
  ):
    private val up = Vec3(0.0, 1.0, 0.0)
    // Wall-local horizontal axis (UV.x runs along it); UV.y runs down.
    private val right = up.cross(inwardNormal)
    private val rot = Quat.fromRotationY(rotY)
    private val hung = Arr[HungPainting]()

    // Wall quad in world space, UV [0,1] (tl=(0,0), v down).
    private val wallForm: Form =
      def corner(su: Double, sv: Double, u: Double, w: Double): PaintingVertex =
        val pos = center + right * (su * width / 2.0) + up * (sv * height / 2.0)
        (position = pos, uv = Vec2(u, w))
      val face = Quad(
        corner(-1.0, 1.0, 0.0, 0.0),
        corner(-1.0, -1.0, 0.0, 1.0),
        corner(1.0, -1.0, 1.0, 1.0),
        corner(1.0, 1.0, 1.0, 0.0),
      )
      p.form(geometry =
        toBufferedGeometry(Mesh(Arr(face)), MeshBufferType.FaceVertices),
      )

    /** Hang a painting at wall-local `(u, v)` in world units (`u` along the
      * wall width from its left edge, `v` height from the floor edge).
      */
    def hang(spec: PaintingSpec, u: Double, v: Double): HungPainting =
      val hd = spec.depth / 2.0
      val pos = center +
        right * (u - width / 2.0) +
        up * (v - height / 2.0) +
        inwardNormal * (hd + 0.02)
      val m = Mat4.fromTranslationRotationScale(pos, rot, Vec3(1.0, 1.0, 1.0))
      val model = p.binding(m)
      val shape = p
        .shape(paintingForm(spec), paintingShade, cullMode = CullMode.None)
        .bind("model" := model, "samp" := sampler, "img" := spec.image)
      val rect = Vec4(
        u / width,
        1.0 - v / height,
        (spec.width / 2.0) / width,
        (spec.height / 2.0) / height,
      )
      val fade = Vec2(ShadowFadeWorld / width, ShadowFadeWorld / height)
      val h = HungPainting(model, shape, rect, fade)
      hung.push(h)
      h

    /** The baked wall texture (room noise + baked static-painting shadows). */
    lazy val texPanel: Panel =
      val has = hung.length > 0
      val rect = if has then hung(0).shadowRect else Vec4(0.0, 0.0, 0.0, 0.0)
      val fade = if has then hung(0).shadowFade else Vec2(0.01, 0.01)
      val strength = if has then ShadowStrength else 0.0
      mkTexPanel(wallForm, rect, fade, strength)

    private lazy val sceneShape: AnyShape =
      p.shape(wallForm, wallSceneShade, cullMode = CullMode.None)
        .bind("samp" := sampler, "tex" := texPanel)

    /** Panels to pre-render before the scene (the wall texture). */
    def bakePanels: Arr[Panel] = Arr(texPanel)

    /** Wall + painting shapes for the scene panel and the floor mirror. */
    def sceneShapes: Arr[AnyShape] =
      val out = Arr[AnyShape](sceneShape)
      var i = 0
      while i < hung.length do
        out.push(hung(i).shape)
        i += 1
      out
