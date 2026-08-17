package sketches.strokes.base1

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

import scala.scalajs.js.annotation.JSExportTopLevel

@JSExportTopLevel("sketch")
def baseStroke1(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val col1 = Vec3(0.8, 0.75, 0.7)
    val col2 = Vec3(0.6, 0.82, 0.7)

    type U = (res: Vec2)

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val color = LetFloat("color")
        val canvasTexture = LetFloat("canvasTexture")
        val edge = LetFloat("edge")
        val hash = Hash.hash21((ctx.fragCoord.xy).bitsToU32)
        def canvasMesh(x: FloatExpr) =
          (x * 0.85).sin.fit1101
        Block(
          canvasTexture := ((hash + canvasMesh(ctx.fragCoord.x) * canvasMesh(
            ctx.fragCoord.y,
          ) * 0.6) / 1.6)
            .lerpIn(0.81, 1.0),
          color :=
            Simplex
              .fbmSimplex2d(
                ctx.fragCoord.xy * 0.001,
                4.i,
                4.5,
                0.22,
              )
              .fit1101,
          edge := color * canvasTexture,
          ctx.out.color := vec4(
            col1.toExpr.lerp(
              col2.toExpr * edge.smoothstep(0.62, 0.32),
              edge.smoothstep(0.4, 0.35),
            )
              * (canvasTexture * 0.7 + 0.3),
            1.0,
          ),
        )

    val uRes = p.binding[Vec2]

    val panel = p.panel(
      layer = p.layer(shade).bind("res" := uRes),
    )

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))
      p.paintAndShow(panel)
