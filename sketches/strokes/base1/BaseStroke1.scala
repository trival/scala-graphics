package sketches.strokes.base1

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.color.*
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given
import trivalibs.utils.random.rand
import trivalibs.utils.random.randNormal01
import trivalibs.utils.random.randNormal11
import trivalibs.utils.random.randVec2

import scala.scalajs.js.annotation.JSExportTopLevel

@JSExportTopLevel("sketch")
def baseStroke1(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val col1hsv =
      Vec3(rand(), 0.2 * randNormal01(), 0.5 + 0.5 * randNormal01())
    val col2hsv = Vec3(
      col1hsv.x + randNormal11() * 0.35,
      col1hsv.y + randNormal01() * 0.14,
      col1hsv.z - randNormal01() * 0.12,
    )
    val col1 = col1hsv.hsv2rgbSmooth
    val col2 = col2hsv.hsv2rgbSmooth

    type U = (res: Vec2, noiseOffset: Vec2)

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val color = LetFloat("color")
        val canvasTexture = LetFloat("canvasTexture")
        val edge = LetFloat("edge")
        val hash = Hash.hash21((ctx.fragCoord.xy).bitsToU32)
        def canvasMesh(x: FloatExpr) =
          (x * 0.85).sin.fit1101
        val col2hsvExpr = LetVec3("col2hsvExpr")
        Block(
          canvasTexture := ((hash + canvasMesh(ctx.fragCoord.x) * canvasMesh(
            ctx.fragCoord.y,
          ) * 0.6) / 1.6)
            .lerpIn(0.81, 1.0),
          color :=
            Simplex
              .fbmSimplex2d(
                (ctx.fragCoord.xy + ctx.bindings.noiseOffset) * 0.001,
                4.i,
                3.5,
                0.22,
              )
              .fit1101,
          edge := color * canvasTexture,
          col2hsvExpr := col2.toExpr.rgb2hsv,
          ctx.out.color := vec4(
            col1.toExpr.lerp(
              vec3(
                col2hsvExpr.x,
                col2hsvExpr.y + 0.8 * edge.smoothstep(0.30, 0.62),
                col2hsvExpr.z * edge.smoothstep(0.68, 0.29),
              ).hsv2rgb,
              edge.smoothstep(0.4, 0.32),
            )
              * (canvasTexture * 0.7 + 0.3),
            1.0,
          ),
        )

    val uRes = p.binding[Vec2]

    val panel = p.panel(
      layer =
        p.layer(shade).bind("res" := uRes, "noiseOffset" := randVec2() * 10000),
    )

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))
      p.paintAndShow(panel)
