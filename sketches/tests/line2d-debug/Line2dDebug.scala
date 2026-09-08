package sketches.tests.line2d_debug

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.geometry.*
import trivalibs.graphics.shader.lib.line.*
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel

type DebugVaryings = (uv: Vec2, localUv: Vec2, cross: Vec2)
type DebugUniforms = (aspect: VertexUniform[Float])

opaque type DebugMode = Int
object DebugMode:
  val Across: DebugMode = 0
  val AcrossRawV: DebugMode = 1
  val WorldAcross: DebugMode = 2
  val Along: DebugMode = 3
  val Grid: DebugMode = 4
  val Coverage: DebugMode = 5
  extension (m: DebugMode) inline def id: Int = m

/** Which debug view is drawn. Every mode is one flat color whose **alpha** is
  * modulated, composited src-over, so overlapping geometry compounds and the
  * fold-back and needle slivers show as denser patches — the same mechanism
  * that makes them visible in a real stroke shade, but with nothing else in the
  * picture.
  *
  *   - `Across` — sine stripes across the stroke off the corrected `v`. A
  *     cross-stroke kink bends a stripe. Stripes stretch as the stroke widens.
  *   - `AcrossRawV` — the same off raw `uv.y`, as the before/after control.
  *   - `WorldAcross` — stripes off `d`, the signed distance from the centre
  *     line in canvas units. Their physical width stays fixed however wide the
  *     stroke gets, so a wider stroke shows *more* stripes rather than fatter
  *     ones, and they run continuous across a split corner.
  *   - `Along` — sine stripes along the stroke, off `uv.x`.
  *   - `Grid` — both at once.
  *   - `Coverage` — flat alpha, no stripes: pure overlap density.
  */
val Mode = DebugMode.Across

/** Stripe cycles across the stroke and along it. */
val StripesAcross = 10.0
val StripesAlong = 120.0

/** `WorldAcross` stripe cycles per canvas unit — a fixed physical size, unlike
  * `StripesAcross` which divides whatever width the stroke happens to have.
  */
val StripesPerCanvasUnit = 60.0

/** Raises the sine to this power — above 1 narrows the inked bands and widens
  * the gaps, which reads overlaps more clearly.
  */
val StripeContrast = 1.0

/** Flat alpha in `Coverage`, and the ceiling the stripe modes reach. */
val InkAlpha = 0.5

val InkColor = Vec3(0.1, 0.25, 0.85)
val Ground = 0.97

val PointCount = 20
val WidthMin = 1.0 / 25.0
val WidthMax = 1.0 / 2.0
val SubdivPerSegment = 2

val CleanupMinLenWidRatio = 0.25
val CleanupWidthThreshold = 0.1
val CleanupAngleThreshold = 0.1
val CleanupMinLenFloor = 0.0

val SplitAngle = Pi * 3.0 / 4.0

/** `Line.narrowAtTightTurns` — `0.0` disables it, otherwise the headroom
  * factor: below `1.0` narrows harder than the fold needs, above `1.0` allows
  * some folding back.
  */
val NarrowFactor = 0.0

/** `FoldTreatment.ClampInner` pulls the inner outline back where a turn is too
  * tight for the width, keeping the stroke full width and cropping the pattern
  * on the inside. `Leave` emits the fold. Composes with `NarrowFactor`, though
  * narrowing enough leaves the clamp nothing to do.
  */
val Fold = FoldTreatment.ClampInner

val SmoothDepth = 4
val SmoothAngleThreshold = 0.001
val SmoothMinLength = 0.006

def stripePattern(v: FloatExpr, d: FloatExpr, u: FloatExpr): FloatExpr =
  if Mode.id == DebugMode.Coverage.id then 1.0
  else
    val across = (v * Tau * StripesAcross).sin.fit1101
    val along = (u * Tau * StripesAlong).sin.fit1101
    if Mode.id == DebugMode.WorldAcross.id then
      (d * Tau * StripesPerCanvasUnit).sin.fit1101
    else if Mode.id == DebugMode.Along.id then along
    else if Mode.id == DebugMode.Grid.id then across * along
    else across

def strokeGeometry(aspect: Double): Arr[BufferedGeometry[LineAttribsBuffer]] =
  def randWidth(): Double = randInRange(WidthMin, WidthMax)

  val line = Line(WidthMin)
  for _ <- 0 until PointCount do
    line.add(Vec2(rand() * aspect, rand()), randWidth())

  val subdivided = line.flatMapWithNeighbours: (prev, curr, next) =>
    if next.isNull then Arr(curr.copy)
    else
      val n = next.get
      val verts = Arr(LineVertex(curr.pos, curr.width))
      for i <- 1 to SubdivPerSegment do
        val t = i.toDouble / (SubdivPerSegment + 1)
        verts += LineVertex(curr.pos.lerp(n.pos, t), randWidth())
      verts

  val cleaned = subdivided
    .cleanup(
      CleanupMinLenWidRatio,
      CleanupWidthThreshold,
      CleanupAngleThreshold,
      CleanupMinLenFloor,
    )

  // narrowed per fragment, after the split: a reversal is the split's job, and
  // narrowing it beforehand drives the width at that vertex to nothing
  val fragments = Arr[Line[Unit]]()
  for f <- cleaned.splitAtAngle(SplitAngle) do
    fragments += (
      if NarrowFactor > 0.0 then f.narrowAtTightTurns(NarrowFactor) else f
    )

  fragments
    .toBufferedGeometries(
      smoothDepth = SmoothDepth,
      smoothAngleThreshold = SmoothAngleThreshold,
      smoothMinLength = SmoothMinLength,
      foldTreatment = Fold,
    )

@JSExportTopLevel("sketch")
def line2dDebug(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val shade = p.shade[LineAttribs, DebugVaryings, DebugUniforms]: program =>
      program.vert: ctx =>
        val pos = LetVec2("pos")
        Block(
          pos := vec2(
            ctx.in.position.x / ctx.bindings.aspect,
            ctx.in.position.y,
          ).fit0111,
          ctx.out.uv := ctx.in.uv,
          ctx.out.localUv := ctx.in.localUv,
          ctx.out.cross := lineCross(ctx.in.uv.y, ctx.in.width),
          ctx.out.position := vec4(pos.x, -pos.y, 0.0, 1.0),
        )
      program.frag: ctx =>
        val v = LetFloat("v")
        val d = LetFloat("d")
        val alpha = LetFloat("alpha")
        Block(
          v :=
            (if Mode.id == DebugMode.AcrossRawV.id then ctx.in.uv.y
             else ctx.in.cross.lineV),
          d := ctx.in.cross.lineOffset,
          alpha := stripePattern(v, d, ctx.in.uv.x)
            .pow(StripeContrast) * InkAlpha,
          ctx.out.color := vec4(InkColor.toExpr, alpha),
        )

    val uAspect = p.binding[Float]

    val form = p.form(
      geometries = strokeGeometry(p.width.toDouble / p.height),
      topology = PrimitiveTopology.TriangleStrip,
    )

    val shape = p
      .shape(form, shade, blendState = BlendState.Alpha)
      .bind("aspect" := uAspect)

    val panel = p.panel(
      shape = shape,
      clearColor = (Ground, Ground, Ground, 1.0),
      multisample = true,
    )

    p.onResize: (w, h) =>
      uAspect.set(w / h)
      p.paintAndShow(panel)
