package sketches.tests.line2d_debug

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.geometry.*
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel

type DebugVaryings =
  (uv: Vec2, localUv: Vec2, vNum: Double, vDen: Double)
type DebugUniforms = (aspect: VertexUniform[Float])

opaque type DebugMode = Int
object DebugMode:
  val Across: DebugMode = 0
  val AcrossRawV: DebugMode = 1
  val Along: DebugMode = 2
  val Grid: DebugMode = 3
  val Coverage: DebugMode = 4
  extension (m: DebugMode) inline def id: Int = m

/** Which debug view is drawn. Every mode is one flat color whose **alpha** is
  * modulated, composited src-over, so overlapping geometry compounds and the
  * fold-back and needle slivers show as denser patches — the same mechanism
  * that makes them visible in a real stroke shade, but with nothing else in the
  * picture.
  *
  *   - `Across` — sine stripes across the stroke off the corrected `v`. A
  *     cross-stroke kink bends a stripe.
  *   - `AcrossRawV` — the same off raw `uv.y`, as the before/after control.
  *   - `Along` — sine stripes along the stroke, off `uv.x`.
  *   - `Grid` — both at once.
  *   - `Coverage` — flat alpha, no stripes: pure overlap density.
  */
val Mode = DebugMode.Across

/** Stripe cycles across the stroke and along it. */
val StripesAcross = 10.0
val StripesAlong = 120.0

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

val SmoothDepth = 4
val SmoothAngleThreshold = 0.001
val SmoothMinLength = 0.006

def stripePattern(v: FloatExpr, u: FloatExpr): FloatExpr =
  if Mode.id == DebugMode.Coverage.id then 1.0
  else
    val across = (v * Tau * StripesAcross).sin.fit1101
    val along = (u * Tau * StripesAlong).sin.fit1101
    if Mode.id == DebugMode.Along.id then along
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

  subdivided
    .cleanup(
      CleanupMinLenWidRatio,
      CleanupWidthThreshold,
      CleanupAngleThreshold,
      CleanupMinLenFloor,
    )
    .splitAtAngle(SplitAngle)
    .toBufferedGeometries(
      smoothDepth = SmoothDepth,
      smoothAngleThreshold = SmoothAngleThreshold,
      smoothMinLength = SmoothMinLength,
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
          ctx.out.vNum := ctx.in.uv.y * ctx.in.width,
          ctx.out.vDen := ctx.in.width,
          ctx.out.position := vec4(pos.x, -pos.y, 0.0, 1.0),
        )
      program.frag: ctx =>
        val v = LetFloat("v")
        val alpha = LetFloat("alpha")
        Block(
          v :=
            (if Mode.id == DebugMode.AcrossRawV.id then ctx.in.uv.y
             else ctx.in.vNum / ctx.in.vDen),
          alpha := stripePattern(v, ctx.in.uv.x).pow(StripeContrast) * InkAlpha,
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
