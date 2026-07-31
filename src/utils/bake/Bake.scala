package sketchlib.utils.bake

import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.FragOut
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*

import scala.NamedTuple

// ---------------------------------------------------------------------------
// Texture baking helper — prebake a procedural texture from a face's geometry.
//
// Removes the hand-rolled "lay each face out flat by its UV, shade by world
// position, render once into an offscreen panel" boilerplate that several room
// sketches share. As a new capability it also passes the surface NORMAL to the
// fragment, so prebaked light/texture maps can shade by orientation.
//
// A prebaked texture caches a compute-intensive per-pixel result (FBM noise
// lightmaps, etc.) that is wasteful to recompute every frame.
//
// PER-BAKE UNIFORMS. The useful question is not cheap-vs-expensive, it is:
// does this parameter participate in the geometry-space computation being
// CACHED, or is it applied to the result? A wall's top height changes the
// distance field itself — no runtime shader could apply it afterwards. Without
// uniforms, a scalar that varies per surface can only vary by specializing the
// shade: one shade, one pipeline, per distinct value. For a room of partitions
// at assorted heights, pillars and many-sided plans, that is a WGSL compile per
// value to express what is properly a uniform buffer write. Specialization is
// the wrong default for a scalar.
//
// So `TextureBaker[U]` concatenates a per-bake schema `U` onto its internal
// uniforms. Tint comes along too: once a uniform block exists, keeping it out
// on the "applied to the result" principle buys nothing and costs a second
// mechanism. What does NOT move is structure — an unrolled edge set stays a
// build-time constant. Scalars and vectors that vary per surface → uniforms;
// geometry → constants.
//
// Lives sketch-side (not in trivalibs) because it only removes boilerplate over
// existing painter primitives. But it is shared infrastructure compiled into
// many sketches, so it follows the library's bundle-size discipline (Arr/Maybe,
// while loops, no Scala stdlib in any runtime path).
// ---------------------------------------------------------------------------

/** Vertex attributes the baker requires: `(position, uv, normal)`. Build a
  * `Form` for it with `toBufferedGeometry(mesh, MeshBufferType.*WithNormal)`.
  */
type BakeVertex = (position: Vec3, uv: Vec2, normal: Vec3)

/** Vertex → fragment varyings: the model-transformed world position + normal,
  * plus the raw UV. These are exactly the fragment's inputs.
  */
type BakeVaryings = (worldPos: Vec3, normal: Vec3, uv: Vec2)

/** Baker uniforms — internal. The per-call model matrix lives in the vertex
  * stage and is never exposed to the fragment.
  */
type BakeUniforms = (model: VertexUniform[Mat4])

/** The baker's internal uniforms plus a per-bake schema `U`, which is what a
  * bound bake reads via `ctx.bindings.<name>`. `U = EmptyTuple` for the
  * uniform-free bakers.
  */
type BakeBindings[U <: NamedTuple.AnyNamedTuple] =
  NamedTuple.Concat[BakeUniforms, U]

/** The empty per-bake schema, for bakers that take no uniforms. Not
  * `EmptyTuple`: `AnyNamedTuple` is opaque, so a plain tuple does not conform
  * to it — this is the empty NAMED tuple.
  */
type NoUniforms = NamedTuple.NamedTuple[EmptyTuple, EmptyTuple]

/** A reusable texture baker built around one shade / pipeline.
  *
  * Construct one with [[TextureBaker.apply]] — expression-form fragment (3-arg
  * lambda) or block-form fragment (4-arg lambda), picked by arity; the shade is
  * built once in the factory. Each [[apply]] call bakes a geometry into its own
  * [[Panel]] and returns it ready to sample — so the same baker shades many
  * geometries through one pipeline (e.g. the six faces of a box).
  */
class TextureBaker[
    U <: NamedTuple.AnyNamedTuple,
] @annotation.publicInBinary private (
    val painter: Painter,
    shade: Shade[BakeBindings[U], EmptyTuple],
):
  /** Build the bake panel for `form` (own model binding, the shared shade
    * attached as its sole shape) WITHOUT painting it, and hand back the shape
    * alongside it.
    *
    * Two uses: stacking additional layers on top of the bake (the layer
    * pong-reads its output), and — the reason the shape comes back — binding
    * per-bake uniforms before painting:
    *
    * ```scala
    * val b = wallBaker.prepare(wall.form, ww, wh)
    * b.shape.bind("topY" := WallTopY, "tint" := WallTintLow)
    * p.paint(b.panel)
    * ```
    *
    * The shape, not the panel, is what carries the bindings: `Shape.bind` is
    * the typechecked one (a wrong name or value type is a COMPILE error via
    * `derive.containsName` / `checkUniformFieldType`), whereas `Panel.bind`
    * writes into a string-keyed dict with no checks at all. Routing a typed
    * uniform schema through the unchecked path would throw away most of what
    * the `U` parameter buys.
    *
    * Painting is the caller's job here, as it always was for `prepare` — a
    * uniform-free bake that wants it done for it uses [[apply]] instead.
    *
    * Parameters mirror [[apply]] — see there for the uniform-scaling constraint
    * on `transform`.
    */
  inline def prepare(
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
      clearColor: Maybe[Opt[ClearColor]] = Maybe.Not,
  ): (panel: Panel, shape: Shape[BakeBindings[U], EmptyTuple]) =
    // Own model binding per call (set once, static) so geometries keep distinct
    // transforms while sharing the one shade / pipeline.
    val model = painter.binding(transform.orElse(Mat4.identity))
    val shape = painter
      .shape(form, shade, cullMode = CullMode.None)
      .bind("model" := model)
    val panel = painter.panel(
      width = width,
      height = height,
      mips = mips,
      format = format.orElse(TextureFormat.Rgba8Unorm),
      clearColor = clearColor,
      shape = shape,
    )
    (panel = panel, shape = shape)

/** One-call baking, available only on a baker with NO per-bake uniforms.
  *
  * The restriction is the point: `apply` paints immediately, so on a baker
  * carrying uniforms it would bake before anything could bind them. Scoping it
  * to `EmptyTuple` makes that structurally impossible rather than merely
  * discouraged — a baker with uniforms has only [[TextureBaker.prepare]], and
  * the bind step cannot be skipped by accident.
  */
extension (baker: TextureBaker[NoUniforms])
  /** Bake `form` into a fresh `width`×`height` panel and return it (already
    * painted, ready to sample). Equivalent to `prepare` + `p.paint(panel)`.
    *
    * @param transform
    *   CPU model matrix applied in the vertex stage (default identity). The
    *   fragment receives the transformed world position + normal. '''Uniform
    *   scaling only''' — rotation, translation, and uniform scale are safe.
    *   Non-uniform scale or shear would mis-transform the normal (it is
    *   transformed by the model's 3×3 with `w = 0`, then renormalized — there
    *   is no inverse-transpose normal matrix), so avoid those.
    *
    * A `Mat4` rather than a `Transform`: a bake runs once at init with a static
    * transform, so none of `Transform`'s runtime-motion affordances apply, and
    * its `Vec3` scale would make the non-uniform case above easier to express
    * rather than harder. A caller holding one passes `t.matrix`.
    * @param format
    *   Output texture format (default `Rgba8Unorm`; use a float format for HDR
    *   bakes such as light maps).
    * @param mips
    *   Allocate + auto-generate a mip chain (default `true`).
    * @param clearColor
    *   What the panel holds where no face covers it.
    *
    * '''Matters far more for an ATLAS than it looks.''' Any texel the geometry
    * does not write keeps this value, and linear filtering and mip generation
    * then pull it back into the faces that do. Three kinds of texel are always
    * uncovered: partially-covered ones along every band edge, whole bands whose
    * face was skipped, and the tail of any row whose `u` range stops short of
    * 1. Left at the default those read as BLACK, and bleed out as dark seams
    * along the edges of every band — worst where a band is only a few texels
    * thick, which is exactly what a thin strip in an atlas is.
    *
    * So for an atlas bake, pass the material's own average color. The bleed
    * still happens; it just becomes invisible.
    */
  def apply(
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
      clearColor: Maybe[Opt[ClearColor]] = Maybe.Not,
  ): Panel =
    val r =
      baker.prepare(form, width, height, transform, format, mips, clearColor)
    // Bake once, here — caller gets a ready-to-sample texture. The transient
    // `model` binding + `shape` stay resident (BufferBinding has no public
    // destroy yet); negligible for a handful of bakes.
    baker.painter.paint(r.panel)
    r.panel

/** Factory for [[TextureBaker]]. Two fragment forms:
  *   - [[apply]] — expression form, the fragment returns a single `Vec4Expr`.
  *   - [[block]] — block form, the fragment writes `color` as the last
  *     statement of a multi-statement `Block` (FBM noise and other expensive
  *     bodies).
  *
  * Both vertex stages are identical (generated): they lay each face out flat by
  * its UV for the offscreen render while passing the model-transformed world
  * position + normal through to the fragment.
  *
  * `bake` / `bakeBlock` are one-shot convenience helpers that build a baker and
  * immediately apply it to one geometry.
  */
object TextureBaker:

  // Shared, generated vertex stage. Lays the face out flat by its UV (so the
  // panel render covers the whole [0,1]² target), and passes the
  // model-transformed world position + normal to the fragment.
  // The model uniform is referenced by its WGSL name rather than through
  // `ctx.bindings.model`. The typed accessor would need `BakeBindings[U]` to
  // reduce, which it cannot while `U` is still abstract here — and this stage is
  // generated, internal, and never sees the user's schema, so naming the
  // uniform directly costs nothing and keeps one vertex stage for every `U`.
  private val ModelMat = Mat4Expr("model")

  private def buildVert[U <: NamedTuple.AnyNamedTuple](
      program: Program[
        BakeVertex,
        BakeVaryings,
        BakeBindings[U],
        EmptyTuple,
        FragOut,
      ],
  ): Unit =
    program.vert: ctx =>
      val uv = ctx.in.uv
      Block(
        ctx.out.worldPos := (ModelMat * vec4(
          ctx.in.position,
          1.0,
        )).xyz,
        // Transform the normal by the model's 3×3 (w = 0 drops translation),
        // then renormalize. Correct for uniform scaling only (see `apply`).
        ctx.out.normal :=
          (ModelMat * vec4(ctx.in.normal, 0.0)).xyz.normalize,
        ctx.out.uv := uv,
        ctx.out.position :=
          vec4(vec2(uv.x, 1.0 - uv.y).fit0111, 0.0, 1.0),
      )

  /** Build a baker whose fragment is an expression of `(worldPos, normal, uv)`
    * returning the baked color. See [[TextureBaker.apply]] for the per-bake
    * call and its uniform-scaling constraint on `transform`.
    */
  inline def apply(p: Painter)(
      frag: (worldPos: Vec3Expr, normal: Vec3Expr, uv: Vec2Expr) => Vec4Expr,
  ): TextureBaker[NoUniforms] =
    val shade =
      p.shade[BakeVertex, BakeVaryings, BakeBindings[NoUniforms]]: program =>
        buildVert[NoUniforms](program)
        program.frag: ctx =>
          Block(
            ctx.out.color := frag(ctx.in.worldPos, ctx.in.normal, ctx.in.uv),
          )
    new TextureBaker[NoUniforms](p, shade)

  /** Uniform-carrying form: the fragment gets the WHOLE context, so it can read
    * `ctx.bindings.<name>` for the per-bake schema `U` as well as
    * `ctx.in.worldPos` / `.normal` / `.uv`, and writes `ctx.out.color`.
    *
    * ```scala
    * type WallU = (topY: FragmentUniform[Float], tint: FragmentUniform[Vec3])
    * val wallBaker = TextureBaker[WallU](p): ctx =>
    *   Block(ctx.out.color := shade(ctx.in.worldPos, ctx.bindings.topY))
    * ```
    *
    * Arity is what selects between the three forms, so this one goes DOWN to a
    * single argument rather than adding a fourth: a 4-arg uniform-carrying
    * expression form would collide with the existing 4-arg block form, and
    * Scala will not resolve that on a lambda's return type.
    *
    * One new form, not two — with the whole context in hand `ctx.out.color` is
    * reachable, so a separate `color` parameter would be redundant and an
    * expression variant would save exactly the one line `ctx.out.color := …`.
    * Note this signature IS `program.frag`'s own, so the form is not a new
    * concept but the underlying DSL surfacing when a bake needs it; the
    * generated vertex stage still does its work.
    *
    * `U` must be given explicitly — it cannot be inferred, since it appears
    * only under a match type in the context's uniform parameter.
    */
  inline def apply[U <: NamedTuple.AnyNamedTuple](p: Painter)(
      frag: FragmentCtx[
        BakeVaryings,
        BakeBindings[U],
        EmptyTuple,
        EmptyTuple,
        FragOut,
      ] => Block,
  ): TextureBaker[U] =
    val shade = p.shade[BakeVertex, BakeVaryings, BakeBindings[U]]: program =>
      buildVert[U](program)
      program.frag(frag)
    new TextureBaker[U](p, shade)

  /** Block-form overload: the fragment is a multi-statement `Block` and gets a
    * fourth `color` output handle to assign as its last statement (`color :=
    * …`). Use this for FBM noise and other expensive bodies. Picked over the
    * expression-form [[apply]] by lambda arity (4 vs 3 args).
    */
  inline def apply(p: Painter)(
      frag: (
          worldPos: Vec3Expr,
          normal: Vec3Expr,
          uv: Vec2Expr,
          color: AssignTarget,
      ) => Block,
  ): TextureBaker[NoUniforms] =
    val shade =
      p.shade[BakeVertex, BakeVaryings, BakeBindings[NoUniforms]]: program =>
        buildVert[NoUniforms](program)
        program.frag: ctx =>
          frag(ctx.in.worldPos, ctx.in.normal, ctx.in.uv, ctx.out.color)
    new TextureBaker[NoUniforms](p, shade)

  /** One-shot: build an expression-form baker and bake `form` immediately. */
  inline def bake(
      p: Painter,
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
      clearColor: Maybe[Opt[ClearColor]] = Maybe.Not,
  )(
      frag: (worldPos: Vec3Expr, normal: Vec3Expr, uv: Vec2Expr) => Vec4Expr,
  ): Panel =
    TextureBaker(p)(frag)
      .apply(form, width, height, transform, format, mips, clearColor)

  /** One-shot: build a block-form baker and bake `form` immediately. */
  inline def bakeBlock(
      p: Painter,
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
      clearColor: Maybe[Opt[ClearColor]] = Maybe.Not,
  )(
      frag: (
          worldPos: Vec3Expr,
          normal: Vec3Expr,
          uv: Vec2Expr,
          color: AssignTarget,
      ) => Block,
  ): Panel =
    TextureBaker(p)(frag)
      .apply(form, width, height, transform, format, mips, clearColor)
