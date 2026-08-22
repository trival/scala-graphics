package sketchlib.utils.room

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
// Hanging — the affordance a wall offers an exhibition, and the shadow
// compositing that makes a hung piece sit on the wall rather than float in
// front of it.
//
// WHAT HANGS AND WHERE IS NOT THIS MODULE'S BUSINESS. It provides a frame, a
// span and a compositing mechanism; how many pieces, at what sizes, in what
// arrangement, and what is on them are curation and live in the sketch.
//
// The shadows are SHAPED, NOT SIMULATED. The shadow box matches the piece's
// footprint exactly and all of the look is in the falloff: tight above, broad
// below, nudged down so the light reads as coming from slightly above. There is
// no light position in this model, and hanging something does not introduce
// one — which is what lets it sit inside a room that deliberately has no
// lighting model at all.
//
// The falloff's four numbers ARE look decisions, so they are constructor
// parameters rather than constants: they belong to the room that instantiates
// this, and the defaults are the values the templates were tuned to.
// ---------------------------------------------------------------------------

/** Something to hang. `image` is any `Panel` — what is in it is the
  * exhibition's concern, and the stage never looks. `sideStretch` is the
  * front:side texel-density ratio; a thin UV margin wraps each side.
  */
case class PaintingSpec(
    width: Double,
    height: Double,
    depth: Double,
    image: Panel,
    sideStretch: Double = 3.0,
)

/** A piece hung on a wall: the shape to draw, and the wall-local rect its
  * shadow needs.
  *
  * **STATIC AND ANIMATED ARE THE SAME CASE**, which is the whole reason this
  * type looks the way it does. `model` and `shadowRect` are mutable bindings,
  * and `basePos` / `baseRect` are the resting values an offset is measured
  * from; a piece that never moves simply never writes them, and costs one small
  * uniform buffer for the privilege. The alternative — a static `Painting` and
  * an animated one — buys back that buffer and pays for it with two types, two
  * `hang`s and a shadow composite that has to know which it is holding.
  *
  * Move one with [[moveBy]], never by writing `model` alone: the piece and its
  * shadow have to travel together, and the conversion between them (world
  * meters → wall UV, with `v` running down) is exactly the fiddly bit worth not
  * re-deriving.
  *
  * The RHYTHM of an animation is not here. Amplitude, speed and phase are look
  * decisions and belong to the sketch; this provides the coupling, and the
  * sketch drives it per frame.
  */
case class Painting(
    wall: Wall,
    shape: AnyShape,
    model: BufferBinding[Mat4, ?],
    shadowRect: BufferBinding[Vec4, ?], // UV (centerU, centerV, halfU, halfV)
    shadowFade: Vec2, // per-axis penumbra width, in UV
    shadowStrength: Double, // center darkening, already dimmed for this piece
    basePos: Vec3, // resting world position
    baseRect: Vec4, // resting shadow rect
)

extension (pt: Painting)
  /** Displace the piece from where it was hung, in WALL-LOCAL METERS —
    * `alongWall` rightward as seen from inside, `up` toward the ceiling — and
    * move its shadow with it.
    *
    * Absolute, not incremental: it is always measured from the resting pose, so
    * a per-frame driver writes `moveBy(0.0, amp * (t * speed + phase).sin)` and
    * never accumulates drift.
    *
    * The wall's own texture has to be re-`paint`ed after this for the moved
    * shadow to show — see [[Hanging.composite]].
    *
    * No outward axis and no rotation: the shadow is a flat shaped mask with no
    * depth or angle term, so moving a piece off the wall or turning it would
    * silently leave its shadow behind. Those want a shadow model this one is
    * deliberately not.
    */
  def moveBy(alongWall: Double, up: Double): Unit =
    val w = pt.wall
    val right = Vec3.Y.cross(w.inwardNormal)
    pt.model.set(
      Mat4.fromTranslationRotationScale(
        pt.basePos + right * alongWall + Vec3.Y * up,
        Quat.fromRotationY(w.rotY),
        Vec3(1.0, 1.0, 1.0),
      ),
    )
    pt.shadowRect.set(
      Vec4(
        pt.baseRect.x + alongWall / w.width,
        // Wall `v` runs DOWN, so a piece moving up lowers its rect's center.
        pt.baseRect.y - up / w.height,
        pt.baseRect.z,
        pt.baseRect.w,
      ),
    )

/** Uniforms a hung piece's shade takes. `vp` is bound at PANEL level, so it
  * must be named `vp` to match the scene panel's binding (and
  * `GaussianMirrorReflection`'s `vpName` default). The named-tuple schema fixes
  * that name at compile time; a room using a different one writes its own
  * shade.
  */
type PaintingUniforms = (
    vp: VertexUniform[Mat4],
    model: VertexUniform[Mat4],
    samp: FragmentUniform[Sampler],
)
type PaintingPanels = (img: FragmentPanel)

/** Soft, directional drop shadow for one rect, in wall-local UV.
  * `rect = (centerU, centerV, halfU, halfV)`; `fade = (fadeU, fadeV)` is the
  * soft-edge width per axis **in UV** — pass `worldFade / wallWidth` and
  * `worldFade / wallHeight` so the penumbra stays isotropic in world space
  * whatever the wall's aspect. Uniform in strength inside the box; only the
  * edge falloff varies.
  *
  * Free-standing so a room can compose it into a bake of its own rather than
  * going through [[Hanging.composite]] — the same reason every other piece of
  * this library is a function over plain data.
  */
def shadowMask(
    uv: Vec2Expr,
    rect: Vec4Expr,
    fade: Vec2Expr,
    dropMul: Double,
    botFadeMul: Double,
): FloatExpr =
  val hx = rect.z
  val hy = rect.w
  val dx = uv.x - rect.x
  // +V is down; the box is nudged down so the top edge stays lit and the cast
  // shadow is exposed below.
  val dy = uv.y - rect.y - fade.y * dropMul
  // Edge-CENTERED falloff: half the penumbra falls on the wall beyond the
  // piece, half stays hidden behind it — light leaking in around a canvas that
  // stands slightly off the wall.
  val hMask = dx.abs.smoothstep(hx + fade.x * 0.5, hx - fade.x * 0.5)
  val upperFade = fade.x
  val lowerFade = fade.y * botFadeMul
  val upper = dy.smoothstep(-hy - upperFade * 0.5, -hy + upperFade * 0.5)
  val lower = dy.smoothstep(hy + lowerFade * 0.5, hy - lowerFade * 0.5)
  hMask * upper * lower

extension (spec: PaintingSpec)
  /** Flat-box geometry for one piece, centered on the local origin, front on
    * `+Z`. The front fills an inset UV rect and the four thin sides wrap the
    * outer margin, so a single image covers the whole box without a second
    * texture or a second draw.
    *
    * Takes the painter rather than closing over one: everything the shape
    * depends on is in the spec, so this stays readable and movable — the only
    * reason it is not pure is that a `Form` is a GPU buffer.
    */
  def form(p: Painter): Form =
    val hw = spec.width / 2.0
    val hh = spec.height / 2.0
    val hd = spec.depth / 2.0
    val mu = (spec.depth / (spec.sideStretch * spec.width)).clamp(0.0, 0.45)
    val mv = (spec.depth / (spec.sideStretch * spec.height)).clamp(0.0, 0.45)

    def v(x: Double, y: Double, z: Double, u: Double, w: Double): RoomVertex =
      (position = Vec3(x, y, z), uv = Vec2(u, w))

    p.form(geometry =
      toBufferedGeometry(
        Mesh(
          Arr(
            // Front (+Z): the inset rect.
            Quad(
              v(-hw, hh, hd, mu, mv),
              v(-hw, -hh, hd, mu, 1.0 - mv),
              v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
              v(hw, hh, hd, 1.0 - mu, mv),
            ),
            // Right (+X): u runs 1-mu → 1.
            Quad(
              v(hw, hh, hd, 1.0 - mu, mv),
              v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
              v(hw, -hh, -hd, 1.0, 1.0 - mv),
              v(hw, hh, -hd, 1.0, mv),
            ),
            // Left (-X): u runs mu → 0.
            Quad(
              v(-hw, hh, hd, mu, mv),
              v(-hw, -hh, hd, mu, 1.0 - mv),
              v(-hw, -hh, -hd, 0.0, 1.0 - mv),
              v(-hw, hh, -hd, 0.0, mv),
            ),
            // Top (+Y): v runs mv → 0.
            Quad(
              v(-hw, hh, hd, mu, mv),
              v(hw, hh, hd, 1.0 - mu, mv),
              v(hw, hh, -hd, 1.0 - mu, 0.0),
              v(-hw, hh, -hd, mu, 0.0),
            ),
            // Bottom (-Y): v runs 1-mv → 1.
            Quad(
              v(-hw, -hh, hd, mu, 1.0 - mv),
              v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
              v(hw, -hh, -hd, 1.0 - mu, 1.0),
              v(-hw, -hh, -hd, mu, 1.0),
            ),
            // Back (-Z): continuous with the side back edges.
            Quad(
              v(-hw, hh, -hd, 0.0, 0.0),
              v(-hw, -hh, -hd, 0.0, 1.0),
              v(hw, -hh, -hd, 1.0, 1.0),
              v(hw, hh, -hd, 1.0, 0.0),
            ),
          ),
        ),
        MeshBufferType.FaceVertices,
      ),
    )

/** The hanging kit for one painter: the three compiled pipelines a hang needs,
  * plus the shadow falloff's tuning.
  *
  * **This class exists because a shade is a compiled pipeline.** It has to be
  * created once per painter, not once per piece, and before this module existed
  * that forced every `hang` call to take a shade the calling sketch had to
  * build and otherwise never think about. There is now somewhere to cache it,
  * so the parameter is gone.
  *
  * Construct one in `Painter.init` and hang from it. It compiles three
  * pipelines eagerly — the piece shade, the ambience copy layer and the shadow
  * layer — so a room that hangs nothing should not build one.
  *
  * @param fadeWorld
  *   penumbra width in meters, converted per wall so it stays isotropic in
  *   world space whatever the wall's aspect
  * @param strength
  *   the MAXIMUM darkening at the center of a shadow. Each piece scales it by
  *   its own `shadowDim`, so this is the ceiling, not a fixed value
  * @param dropMul
  *   downward offset of the shadow box, in penumbra widths
  * @param botFadeMul
  *   how much broader the lower falloff is than the upper
  */
class Hanging(
    p: Painter,
    val fadeWorld: Double = 0.10,
    val strength: Double = 0.44,
    val dropMul: Double = 0.25,
    val botFadeMul: Double = 2.7,
):
  /** One image panel through a model matrix, and nothing else. Fully generic:
    * every exhibition-specific decision is on the other side of it, in the
    * panel the spec carries.
    */
  private val pieceShade =
    p.shade[RoomVertex, (uv: Vec2), PaintingUniforms, PaintingPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * ctx.bindings.model
              * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.img(ctx.in.uv, ctx.bindings.samp)

  // Copy layer — write a pre-baked ambience panel into the composite target.
  private type CopyU = (samp: Sampler)
  private type CopyP = (tex: FragmentPanel)
  private val copyShade = p.layerShade[CopyU, CopyP]: program =>
    program.frag: ctx =>
      ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

  // One shadow — a per-pixel darkening factor. Under `BlendState.Multiply`
  // (color = dst·src) each instance multiplies what is already there.
  private type ShadowU = (rect: Vec4, fade: Vec2, strength: Float)
  private val shadowShade = p.layerShade[ShadowU]: program =>
    program.frag: ctx =>
      val sm = LetFloat("sm")
      Block(
        sm := shadowMask(
          ctx.in.uv,
          ctx.bindings.rect,
          ctx.bindings.fade,
          dropMul,
          botFadeMul,
        ),
        ctx.out.color := vec4(vec3(1.0 - ctx.bindings.strength * sm), 1.0),
      )

  /** Hang a piece on a wall. Both positions are WORLD METERS, not UV:
    * `centerFromLeft` runs along the wall from its left edge as seen from
    * inside, `centerHeight` up from the floor.
    *
    * `shadowDim` scales [[strength]] for THIS piece, `0` (no shadow) to `1`
    * (the full strength). It is a perceptual correction, not a physical one:
    * the eye reads the shadow beside a light piece as far stronger than the
    * same shadow beside a dark one, so making them LOOK equal means making them
    * mathematically unequal. Dim the light pieces, leave the dark ones at `1`.
    */
  def hang(
      w: Wall,
      spec: PaintingSpec,
      centerFromLeft: Double,
      centerHeight: Double,
      shadowDim: Double = 1.0,
  ): Painting =
    val pos = w.pointAt(centerFromLeft, centerHeight)
      // Stand it off the wall by its own half-depth plus a couple of
      // centimeters, so the box never z-fights the wall it hangs on and the
      // shadow has something to be cast by.
      + w.inwardNormal * (spec.depth / 2.0 + 0.02)
    val model = p.binding(
      Mat4.fromTranslationRotationScale(
        pos,
        Quat.fromRotationY(w.rotY),
        Vec3(1.0, 1.0, 1.0),
      ),
    )
    val shape = p
      .shape(spec.form(p), pieceShade, cullMode = CullMode.None)
      .bind("model" := model, "samp" := p.samplerLinear, "img" := spec.image)
    val baseRect = Vec4(
      centerFromLeft / w.width,
      1.0 - centerHeight / w.height, // wall v runs down
      (spec.width / 2.0) / w.width,
      (spec.height / 2.0) / w.height,
    )
    Painting(
      wall = w,
      shape = shape,
      model = model,
      shadowRect = p.binding(baseRect),
      // Divided by the wall's own extents so the penumbra is isotropic in
      // WORLD space however wide or tall the wall happens to be.
      shadowFade = Vec2(fadeWorld / w.width, fadeWorld / w.height),
      shadowStrength = strength * shadowDim.clamp01,
      basePos = pos,
      baseRect = baseRect,
    )

  /** `base` with every piece's shadow composited over it.
    *
    * **A wall binds A PANEL, whatever produced it** — which is the whole seam.
    * `base` is the room's own ambience bake, or anything else it cares to make;
    * this never looks inside it. Going from the bare bake to this one is a
    * change at the producer and nothing at all at the shade, and a wall with no
    * pieces gets `base` straight back rather than paying for an empty pass.
    *
    * Built in ONE panel: a copy layer lays down `base`, then one
    * multiplicatively-blended shadow instance per piece darkens its rect on
    * top. Overlapping shadows compound exactly as a stacked chain would, via
    * fixed-function blending — no ping-pong, no per-pass full-texture
    * read/write, and no cap on how many hang.
    *
    * Each shadow instance binds the piece's `shadowRect` BINDING, not a value,
    * so a wall carrying pieces that move is re-composited by `p.paint`ing the
    * returned panel each frame after driving them — the copy layer re-lays the
    * unchanged ambience and the instances redraw at their new rects. A wall
    * whose pieces are all static is painted once, here.
    *
    * `width`/`height` are passed rather than read off `base` because a panel
    * does not expose its size; they should be the size `base` was baked at.
    */
  def composite(
      base: Panel,
      width: Int,
      height: Int,
      pieces: Arr[Painting],
  ): Panel =
    if pieces.length == 0 then base
    else
      val copy = p
        .layer(copyShade)
        .bind("samp" := p.samplerLinear, "tex" := base)
      val shadow = p
        .layer(shadowShade, blendState = BlendState.Multiply)
        // Layer-level default; every instance overrides it with its own
        // perceptually dimmed strength.
        .bind("strength" := strength)
      var i = 0
      while i < pieces.length do
        val piece = pieces(i)
        shadow.instances.add(
          "rect" := piece.shadowRect,
          "fade" := piece.shadowFade,
          "strength" := piece.shadowStrength,
        )
        i += 1
      val panel = p.panel(
        width = width,
        height = height,
        mips = true,
        layers = Arr(copy, shadow),
      )
      p.paint(panel)
      panel
