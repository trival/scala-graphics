package sketches.strokes.base1

import org.scalajs.dom.HTMLCanvasElement
import scala.scalajs.js.annotation.JSExportTopLevel
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

@JSExportTopLevel("sketch")
def baseStroke1(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    type U = (res: Vec2)

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        ctx.out.color := vec4(
          Simplex.simplexNoise2d(ctx.fragCoord.xy * 0.01),
          Simplex.simplexNoise2d(ctx.fragCoord.xy * 0.02),
          Simplex.simplexNoise2d(ctx.fragCoord.xy * 0.03),
          1.0,
        )

    val uRes = p.binding[Vec2]

    val panel = p.panel(
      layer = p.layer(shade).bind("res" := uRes),
    )

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))
      p.paintAndShow(panel)
