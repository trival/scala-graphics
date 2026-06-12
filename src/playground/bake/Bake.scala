package playground.bake

import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.FragOut
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*

// ---------------------------------------------------------------------------
// Texture baking helper — prebake a procedural texture from a face's geometry.
//
// Removes the hand-rolled "lay each face out flat by its UV, shade by world
// position, render once into an offscreen panel" boilerplate that several room
// sketches share. As a new capability it also passes the surface NORMAL to the
// fragment, so prebaked light/texture maps can shade by orientation.
//
// A prebaked texture caches a compute-intensive per-pixel result (FBM noise
// lightmaps, etc.) that is wasteful to recompute every frame. Cheap per-material
// params (tint, simple modulation) do NOT belong here — apply those in the
// runtime shader that samples the baked texture. So the baker only takes the
// expensive geometry-space computation and has no general per-bake uniforms.
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

/** Baker uniforms — internal only. The per-call model matrix lives in the
  * vertex stage; it is never exposed to the fragment, so "no fragment uniforms"
  * still holds.
  */
type BakeUniforms = (model: VertexUniform[Mat4])

/** A reusable texture baker built around one shade / pipeline.
  *
  * Construct one with [[TextureBaker.apply]] (expression-form fragment) or
  * [[TextureBaker.block]] (multi-statement fragment); the shade is built once in
  * the factory. Each [[apply]] call bakes a geometry into its own [[Panel]] and
  * returns it ready to sample — so the same baker shades many geometries through
  * one pipeline (e.g. the six faces of a box).
  */
class TextureBaker private (
    p: Painter,
    shade: Shade[BakeUniforms, EmptyTuple],
):
  /** Bake `form` into a fresh `width`×`height` panel and return it (already
    * painted, ready to sample).
    *
    * @param transform
    *   CPU model matrix applied in the vertex stage (default identity). The
    *   fragment receives the transformed world position + normal.
    *   '''Uniform scaling only''' — rotation, translation, and uniform scale are
    *   safe. Non-uniform scale or shear would mis-transform the normal (it is
    *   transformed by the model's 3×3 with `w = 0`, then renormalized — there is
    *   no inverse-transpose normal matrix), so avoid those.
    * @param format
    *   Output texture format (default `Rgba8Unorm`; use a float format for HDR
    *   bakes such as light maps).
    * @param mips
    *   Allocate + auto-generate a mip chain (default `true`).
    */
  def apply(
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
  ): Panel =
    // Own model binding per call (set once, static) so geometries keep distinct
    // transforms while sharing the one shade / pipeline.
    val model = p.binding(transform.orElse(Mat4.identity))
    val shape = p
      .shape(form, shade, cullMode = CullMode.None)
      .bind("model" := model)
    val panel = p.panel(
      width = width,
      height = height,
      mips = mips,
      format = format.orElse(TextureFormat.Rgba8Unorm),
      shape = shape,
    )
    // Bake once, here — caller gets a ready-to-sample texture. The transient
    // `model` binding + `shape` stay resident (BufferBinding has no public
    // destroy yet); negligible for a handful of bakes.
    p.paint(panel)
    panel

/** Factory for [[TextureBaker]]. Two fragment forms:
  *   - [[apply]] — expression form, the fragment returns a single `Vec4Expr`.
  *   - [[block]] — block form, the fragment writes `color` as the last statement
  *     of a multi-statement `Block` (FBM noise and other expensive bodies).
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
  private def buildVert(
      program: Program[BakeVertex, BakeVaryings, BakeUniforms, EmptyTuple, FragOut],
  ): Unit =
    program.vert: ctx =>
      val uv = ctx.in.uv
      Block(
        ctx.out.worldPos := (ctx.bindings.model * vec4(ctx.in.position, 1.0)).xyz,
        // Transform the normal by the model's 3×3 (w = 0 drops translation),
        // then renormalize. Correct for uniform scaling only (see `apply`).
        ctx.out.normal :=
          (ctx.bindings.model * vec4(ctx.in.normal, 0.0)).xyz.normalize,
        ctx.out.uv := uv,
        ctx.out.position :=
          vec4(vec2(uv.x, 1.0 - uv.y).fit0111, 0.0, 1.0),
      )

  /** Build a baker whose fragment is an expression of `(worldPos, normal, uv)`
    * returning the baked color. See [[TextureBaker.apply]] for the per-bake
    * call and its uniform-scaling constraint on `transform`.
    */
  def apply(p: Painter)(
      frag: (worldPos: Vec3Expr, normal: Vec3Expr, uv: Vec2Expr) => Vec4Expr,
  ): TextureBaker =
    val shade = p.shade[BakeVertex, BakeVaryings, BakeUniforms]: program =>
      buildVert(program)
      program.frag: ctx =>
        Block(
          ctx.out.color := frag(ctx.in.worldPos, ctx.in.normal, ctx.in.uv),
        )
    new TextureBaker(p, shade)

  /** Build a baker whose fragment is a multi-statement `Block`. The body gets
    * `(worldPos, normal, uv)` plus the `color` output handle to assign as its
    * last statement (`color := …`). Use this for FBM noise and other expensive
    * bodies. See [[TextureBaker.apply]] for the per-bake call.
    */
  def block(p: Painter)(
      frag: (
          worldPos: Vec3Expr,
          normal: Vec3Expr,
          uv: Vec2Expr,
          color: AssignTarget,
      ) => Block,
  ): TextureBaker =
    val shade = p.shade[BakeVertex, BakeVaryings, BakeUniforms]: program =>
      buildVert(program)
      program.frag: ctx =>
        frag(ctx.in.worldPos, ctx.in.normal, ctx.in.uv, ctx.out.color)
    new TextureBaker(p, shade)

  /** One-shot: build an expression-form baker and bake `form` immediately. */
  def bake(
      p: Painter,
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
  )(
      frag: (worldPos: Vec3Expr, normal: Vec3Expr, uv: Vec2Expr) => Vec4Expr,
  ): Panel =
    TextureBaker(p)(frag).apply(form, width, height, transform, format, mips)

  /** One-shot: build a block-form baker and bake `form` immediately. */
  def bakeBlock(
      p: Painter,
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,
      format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true,
  )(
      frag: (
          worldPos: Vec3Expr,
          normal: Vec3Expr,
          uv: Vec2Expr,
          color: AssignTarget,
      ) => Block,
  ): Panel =
    TextureBaker.block(p)(frag).apply(form, width, height, transform, format, mips)
