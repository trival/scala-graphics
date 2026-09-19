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
        val x = ctx.in.uv.x
        val col = LetVec3("col")
        val gradientSegment = VarInt("gradientSegment")
        val t = VarFloat("t")

        Block(
          gradientSegment := 0,
          loop(1, count.toI32): i =>
            Block(
              gradientSegment := i,
              breakIf(x < stops(i).w),
            ),

          t := ((x - stops(gradientSegment - 1).w) / (stops(
            gradientSegment,
          ).w - stops(gradientSegment - 1).w)).clamp01,
          t := t.pow(curves(gradientSegment - 1)),

          // col := stops(gradientSegment - 1).rgb.lerp(
          //   stops(gradientSegment).rgb,
          //   t.pow(curves(gradientSegment - 1)),
          // ),
          col := t.lerpIn(
            vec3(0),
            vec3(1),
          ),
          ctx.out.color := vec4(col, 1.0),
        )

    // alternative implementation of the shader, using a more functional style

    // val shade = p.layerShade[U]: program =>
    //   program.frag: ctx =>
    //     val stops = ctx.bindings.stops
    //     val curves = ctx.bindings.curves
    //     val count = ctx.bindings.count
    //     val x = ctx.in.uv.x
    //     val col = VarVec3("col")

    //     Block(
    //       // col := stops(0).rgb,
    //       col := vec3(0),
    //       loop(1, count.toI32): i =>
    //         val prev = LetVec4("prev")
    //         val cur = LetVec4("cur")
    //         val t = VarFloat("t")
    //         Block(
    //           prev := stops(i - 1),
    //           cur := stops(i),
    //           t := ((x - prev.w) / (cur.w - prev.w)).clamp01,
    //           t := t.pow(curves(i - 1)),
    //           // col := col.lerp(cur.rgb, t),
    //           col := (t === 0.0).select(col, t.lerpIn(vec3(0), vec3(1))),
    //         )
    //       ,
    //       ctx.out.color := vec4(col, 1.0),
    //     )

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
      for _ <- 0 until count do out.push(2.0.pow(randInRange(-3.0, 3.0)))
      out

    // val stopCount = randIntInRange(2, MaxStops + 1)
    val stopCount = 5

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
