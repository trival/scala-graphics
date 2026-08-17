package sketches.strokes.base1

import trivalibs.graphics.geometry.*
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given
import trivalibs.utils.random.*

// ---------------------------------------------------------------------------
// The CPU side of the brush strokes: a random cubic Bézier across the canvas,
// and a hand that works its way along it — creeping forward, dragging back a
// little, creeping forward again — until it reaches the far end.
//
// Nothing here touches the GPU. `BrushStroke.lines` hands back `Line`
// fragments that `Line.toBufferedGeometries` turns into stroke geometry.
// ---------------------------------------------------------------------------

/** The path every pass follows, as a cubic Bézier in canvas pixels (y down). */
class BaseCurve(val p0: Vec2, val c1: Vec2, val c2: Vec2, val p1: Vec2):
  def at(t: Double): Vec2 = Vec2.cubicBezier(t, p0, c1, c2, p1)

  /** Unit normal at `t`, by central difference — the axis stroke points are
    * jittered along, so the wobble follows the curve instead of the screen.
    */
  def normalAt(t: Double): Vec2 =
    val e = 0.002
    val d = (at((t + e).min(1.0)) - at((t - e).max(0.0))).normalize
    Vec2(d.y, -d.x)

/** A Bézier sweeping across the canvas: start on the left third, end on the
  * right third, with both control points thrown off the connecting line so the
  * path arcs rather than running straight.
  */
def randomBaseCurve(width: Double, height: Double): BaseCurve =
  val p0 = Vec2(width * randInRange(0.2, 0.8), height * randInRange(-0.1, 0.15))
  val p1 = Vec2(width * randInRange(0.2, 0.8), height * randInRange(0.8, 1.1))
  val line = p1 - p0
  val normal = Vec2(line.y, -line.x).normalize
  val bulge = line.length * 0.4
  BaseCurve(
    p0,
    p0 + line * 0.33 + normal * (randNormal11() * bulge),
    p0 + line * 0.66 + normal * (randNormal11() * bulge),
    p1,
  )

// --- the back-and-forth walk ------------------------------------------------

/** How far from `t = 0` / `t = 1` the walk may start and finish. The ends are
  * jittered so two passes over the same curve don't begin and end together.
  */
val StartJitter = 0.06
val EndJitter = 0.05

/** One forward creep, as a fraction of the whole curve. */
val StepMin = 0.36
val StepMax = 0.82

/** How much of a forward creep is given back on the following drag, as a
  * fraction of it. Kept below 1 so every forward/back pair still makes net
  * progress — that is what makes the walk terminate at all, and what keeps a
  * drag from reaching back past the point it set out from.
  */
val DragMin = 0.3
val DragMax = 0.75

/** The curve parameters the brush visits, in drawing order: forward, back a
  * little, forward again, and finally out to the end.
  */
def walkParams(): Arr[Double] =
  val ts = Arr[Double]()
  var t = rand() * StartJitter
  ts += t
  // Every iteration nets at least `StepMin * (1 - DragMax)`, so this always
  // reaches the end — no iteration cap needed.
  while t < 1.0 - StepMax do
    val step = randInRange(StepMin, StepMax)
    t = (t + step).min(1.0)
    ts += t
    t -= step * randInRange(DragMin, DragMax)
    ts += t
  ts += 1.0 - rand() * EndJitter
  ts

/** The walk's turning points, thrown off the curve by up to `spread` pixels
  * along its normal. Re-randomised per pass, which is what keeps two strokes
  * along one curve from landing on top of each other.
  */
def walkPoints(curve: BaseCurve, ts: Arr[Double], spread: Double): Arr[Vec2] =
  ts.map(t => curve.at(t) + curve.normalAt(t) * (randNormal11() * spread))

/** Sample a cubic Bézier from `p1` to `p2`, bulging to one side by a random
  * amount so a leg of the walk reads as a swept brush rather than a straight
  * line. `reverse` flips which side it bulges to.
  */
def legCurve(p1: Vec2, p2: Vec2, reverse: Boolean): Arr[Vec2] =
  val line = p2 - p1
  val steps = (line.length / 14.0).floor.toInt.max(6)
  val normal =
    (if reverse then Vec2(-line.y, line.x) else Vec2(line.y, -line.x)).normalize
  val mid = p1 + line * 0.5
  val bulge = line.length * 0.14
  val c1 = mid + normal * ((rand() - 0.4) * bulge)
  val c2 = mid + normal * ((rand() - 0.4) * bulge)

  val points = Arr[Vec2]()
  for i <- 0 to steps do
    points += Vec2.cubicBezier(i.toDouble / steps, p1, c1, c2, p2)
  points

// --- the finished stroke ----------------------------------------------------

/** One pass of the brush, kept as the raw curve points of each leg of the walk.
  *
  * The legs stay separate so a sharp turn never has to be mitred; [[lines]]
  * chains their `lenOffset` back together, so `uv.x` runs continuously and the
  * bristle texture reads as one mark across the whole stroke.
  */
class BrushStroke(
    val segments: Arr[Arr[Vec2]],
    val brushSize: Double,
    val color: Vec3,
):
  private val segmentLengths: Arr[Double] =
    val lengths = Arr[Double]()
    for seg <- segments do
      var sum = 0.0
      for i <- 0 until seg.length - 1 do sum += seg(i).distance(seg(i + 1))
      lengths += sum
    lengths

  val totalLength: Double =
    var sum = 0.0
    for l <- segmentLengths do sum += l
    sum

  def lines: Arr[Line[Unit]] =
    val lines = Arr[Line[Unit]]()
    var offset = 0.0
    for i <- 0 until segments.length do
      val line = Line(brushSize, offset)
      for pt <- segments(i) do line.add(pt)
      offset += segmentLengths(i)
      if line.vertCount >= 2 then lines += line
    lines

/** Build one pass along `curve`. Fully re-randomised on every call — the walk,
  * the per-point offsets and the per-leg bulges all differ, so painting the
  * same curve twice lays down two related but distinct marks.
  */
def brushStroke(
    curve: BaseCurve,
    brushSize: Double,
    spread: Double,
    color: Vec3,
): BrushStroke =
  val points = walkPoints(curve, walkParams(), spread)
  var reverse = randBool()

  val segments = Arr[Arr[Vec2]]()
  for i <- 0 until points.length - 1 do
    segments += legCurve(points(i), points(i + 1), reverse)
    reverse = !reverse

  BrushStroke(segments, brushSize, color)
