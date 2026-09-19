package sketches.textures.stepped_gradient

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel

type MaxStops = 8
val MaxStops: Int = valueOf[MaxStops]

@JSExportTopLevel("sketch")
def steppedGradient(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    type U = (
        stops: UniformArray[Vec4, MaxStops],
        curves: UniformArray[Double, MaxStops],
        count: Double,
    )

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val stops = ctx.bindings.stops
        val curves = ctx.bindings.curves
        val count = ctx.bindings.count
        val uv = VarVec2("uv")
        val col = VarVec3("col")
        val gradientSegment = VarInt("gradientSegment")
        val t = VarFloat("t")
        val stopPrev = LetFloat("stopPrev")
        val stopNext = LetFloat("stopNext")
        val yBorder = LetFloat("yBorder")
        val bgCol = VarVec3("bgColor")
        val cell = VarVec2("cell")
        val y = LetFloat("y")
        val cross = LetVec2("cross")

        Block(
          uv := ctx.in.uv - 0.5,
          uv *= Mat2.fromRotation(-0.16).toExpr,
          uv *= 1.25,
          uv += 0.5,

          gradientSegment := 0,
          loop(1, count.toI32): i =>
            Block(
              gradientSegment := i,
              breakIf(uv.x < stops(i).w),
            ),

          stopPrev := stops(gradientSegment - 1).w,
          stopNext := stops(gradientSegment).w,

          t := ((uv.x - stopPrev) / (stopNext - stopPrev)).clamp01,
          t := t.pow(curves(gradientSegment - 1)),

          col := t
            .lerpIn(
              stops(gradientSegment - 1).rgb * 0.5,
              stops(gradientSegment).rgb,
            ),

          yBorder := t.lerpIn(stopPrev, stopNext) * 0.6 - 0.2,
          y := uv.y,

          uv := ctx.in.uv - 0.5,
          uv *= Mat2.fromRotation(Pi / 3).toExpr,
          uv += 0.5,

          cell := uv * 26.0,
          uv := cell.fract,
          cell := cell.floor,

          bgCol := vec3(0.2), // + (cell.x + cell.y).rem(2.0) * 0.05,
          cross := (uv > 0.4) * (uv < 0.6),
          bgCol := cross.y.max(cross.x).lerpIn(bgCol, vec3(0.8, 0.2, 0.8)),

          col := (y > yBorder).select(
            col,
            bgCol,
          ),

          ctx.out.color := vec4(col, 1.0),
        )

    // ---- random gradient, rolled once per page load ----

    val foo = 0.5.lerpIn(Vec3(0), Vec3(1))

    def stopPositions(count: Int): Arr[Double] =
      val spacing = 1.0 / (count - 1)
      val out = Arr[Double]()
      for i <- 0 until count do
        val even = i * spacing
        val jitter =
          if i == 0 || i == count - 1 then 0.0
          else randInRange(-0.4, 0.4) * spacing
        out.push(even + jitter)
      out

    def randomStops(count: Int): Arr[Vec4] =
      val positions = stopPositions(count)
      val out = Arr[Vec4]()
      for i <- 0 until count do
        val c =
          Vec3(rand(), randInRange(0.45, 0.95), randInRange(0.35, 1.0)).hsv2rgb
        out.push(Vec4(c.x, c.y, c.z, positions(i)))
      out

    def randomCurves(count: Int): Arr[Double] =
      val out = Arr[Double]()
      for _ <- 0 until count do out.push(2.0.pow(randInRange(-3.0, -0.1)))
      out

    val stopCount = randIntInRange(3, MaxStops + 1)
    // val stopCount = 5

    val panel = p.panel(
      layer = p
        .layer(shade)
        .bind(
          "stops" := randomStops(stopCount),
          "curves" := randomCurves(stopCount),
          "count" := stopCount.toDouble,
        ),
    )

    p.onResize: (_, _) =>
      p.paintAndShow(panel)
