package sketches.tests.line2d_debug2

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.geometry.*
import trivalibs.graphics.shader.lib.line.*
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel

type Varyings = (uv: Vec2, cross: Vec2)
type Uniforms = (aspect: VertexUniform[Float])

/** One corner, drawn on its own, with everything about it under a constant.
  *
  * `line2d-debug` generates twenty random points and every artifact at once,
  * which is what found them and what makes any of them hard to reason about.
  * This draws a single symmetric V, so a corner can be varied one property at a
  * time and the geometry read directly.
  *
  * The case it exists for: a turn whose apex is narrow while both arms are
  * wide. The arms thicken away from the corner and run into each other, which
  * is **not** the inner outline folding on itself — every vertex along an arm
  * is straight, so no curvature test has anything to say about it. It is the
  * other half of the local feature size: another part of the line passing close
  * by in space while far away along it.
  *
  * So this is the proximity limit's test render, and it is left switched on
  * here because the library leaves it off. Turn `Proximity` off and the arms
  * run through each other again; set `ApexWidth` equal to `ArmWidth` and the
  * case disappears at the same `TurnAngle`, which is what identifies the width
  * gradient rather than the corner as the cause.
  */

/** Deviation at the apex: `0` straight, `Pi` a full reversal. Above
  * `SplitAngle` the corner is split into two fragments instead.
  */
val TurnAngle = Pi * 0.73

/** Arm length from the apex, in canvas units. */
val ArmLength = 0.42

/** Width at the apex, and at the far end of each arm. The interesting case is
  * `ApexWidth` well below `ArmWidth`.
  */
val ApexWidth = 0.04
val ArmWidth = 0.34

/** Vertices along each arm. More of them means the width ramps in smaller
  * steps, which is what the real strokes do.
  */
val PointsPerArm = 8

/** How the width ramps from apex to arm end. `1.0` is linear; above that it
  * stays narrow longer and thickens late, which is the shape that produces the
  * effect most strongly.
  */
val WidthRamp = 1.0

val SplitAngle = Pi * 3.0 / 4.0
val SmoothDepth = 4
val SmoothAngleThreshold = 0.001
val SmoothMinLength = 0.006

/** `0.0` disables `narrowAtTightTurns`; otherwise its headroom factor. */
val NarrowFactor = 1.0

/** The proximity limit, which is what this sketch exists to exercise — it is
  * off by default in the library, and a narrow V is the case that needs it.
  * Turn it off and the arms run through each other again.
  */
val Proximity = true

/** `Leave` emits the fold, `ClampInner` pulls the inner outline in. */
val Fold = FoldTreatment.Leave

/** Flat ink, so overlaps compound and every extra covered layer is visible.
  * Nothing is keyed on `v`, so no shading effect can hide or invent a sliver.
  */
val InkAlpha = 0.35
val InkColor = Vec3(0.1, 0.25, 0.85)
val Ground = 0.97

/** A symmetric V centred in the canvas, apex pointing left, opening right. */
def cornerGeometry(aspect: Double): Arr[BufferedGeometry[LineAttribsBuffer]] =
  val apex = Vec2(aspect * 0.5 - ArmLength * 0.45, 0.5)
  // `TurnAngle` is a deviation, as `splitAtAngle` takes it: the arms sit at
  // half the interior angle either side of the axis
  val half = (Pi - TurnAngle) * 0.5
  val line = Line(ApexWidth)

  def widthAt(t: Double): Double =
    ApexWidth + (ArmWidth - ApexWidth) * t.pow(WidthRamp)

  // down one arm to the apex, then out along the other
  for i <- PointsPerArm to 1 by -1 do
    val t = i.toDouble / PointsPerArm
    val d = ArmLength * t
    line.add(apex + Vec2(d * half.cos, -d * half.sin), widthAt(t))

  line.add(apex, ApexWidth)

  for i <- 1 to PointsPerArm do
    val t = i.toDouble / PointsPerArm
    val d = ArmLength * t
    line.add(apex + Vec2(d * half.cos, d * half.sin), widthAt(t))

  val fragments = Arr[Line[Unit]]()
  for f <- line.splitAtAngle(SplitAngle) do
    fragments += (
      if NarrowFactor > 0.0 then
        f.narrowAtTightTurns(NarrowFactor, proximity = Proximity)
      else f
    )

  fragments.toBufferedGeometries(
    smoothDepth = SmoothDepth,
    smoothAngleThreshold = SmoothAngleThreshold,
    smoothMinLength = SmoothMinLength,
    foldTreatment = Fold,
  )

@JSExportTopLevel("sketch")
def line2dDebug2(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val shade = p.shade[LineAttribs, Varyings, Uniforms]: program =>
      program.vert: ctx =>
        val pos = LetVec2("pos")
        Block(
          pos := vec2(
            ctx.in.position.x / ctx.bindings.aspect,
            ctx.in.position.y,
          ).fit0111,
          ctx.out.uv := ctx.in.uv,
          ctx.out.cross := lineCross(ctx.in.uv.y, ctx.in.width),
          ctx.out.position := vec4(pos.x, -pos.y, 0.0, 1.0),
        )
      program.frag: ctx =>
        ctx.out.color := vec4(InkColor.toExpr, InkAlpha)

    val uAspect = p.binding[Float]

    val form = p.form(
      geometries = cornerGeometry(p.width.toDouble / p.height),
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
