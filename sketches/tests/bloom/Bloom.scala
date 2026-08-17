package sketches.tests.bloom

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.KeyboardEvent
import org.scalajs.dom.console
import org.scalajs.dom.document
import scala.scalajs.js.annotation.JSExportTopLevel
import sketchlib.utils.bloom.Bloom
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// Bloom post-processing demo. Drives the shared `sketchlib.utils.bloom.Bloom`
// pyramid with an HDR test scene of bright + dim SDF circles.

@JSExportTopLevel("sketch")
def bloom(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Tunables
    // -----------------------------------------------------------------------

    val bloomThreshold = 1.0
    val fixedBloomRadius = 4.0
    val fixedBloomIntensity = 0.015
    val maxBloomRadius = 8.0
    val maxBloomIntensity = 0.05

    // -----------------------------------------------------------------------
    // Bindings
    // -----------------------------------------------------------------------

    val uTime = p.binding(0.0)
    val uRes = p.binding[Vec2]

    // -----------------------------------------------------------------------
    // Scene shade — animated bright/dim circles via distance fields
    // -----------------------------------------------------------------------

    type SceneU = (res: Vec2, time: Float)

    val sceneShade = p.layerShade[SceneU]: program =>
      program.frag: ctx =>
        val aspect = LetFloat("aspect")
        val uvC = LetVec2("uvC")
        val t = LetFloat("t")
        val col = VarVec3("col")
        val uv = ctx.in.uv
        val res = ctx.bindings.res

        def circle(
            center: Vec2Expr,
            radius: FloatExpr,
            brightness: Vec3Expr,
        ): Vec3Expr =
          val dist = (uvC - center).length
          val alpha = 1.0 - ((dist - radius) / (radius * 0.05)).clamp01
          brightness * alpha

        Block(
          aspect := res.x / res.y,
          uvC := vec2((uv.x - 0.5) * aspect + 0.5, uv.y),
          t := ctx.bindings.time * 0.5,
          col := vec3(0.1, 0.1, 0.1),
          // hdr high value circles — these will trigger bloom
          col += circle(
            vec2(t.sin * 0.1 + 0.3, 0.5),
            0.15,
            vec3(3.0, 3.0, 2.5),
          ),
          col += circle(
            vec2(0.7, t.cos * 0.1 + 0.5),
            0.12,
            vec3(1.5, 2.5, 4.0),
          ),
          col += circle(vec2(0.5, 0.3), 0.1, vec3(1.7, 0.9, 0.5)),
          // dim low value circles — these won't bloom
          col += circle(vec2(0.25, 0.75), 0.08, vec3(0.6, 0.6, 0.8)),
          col += circle(vec2(0.75, 0.75), 0.08, vec3(0.8, 0.6, 0.6)),
          col += circle(vec2(0.5, 0.7), 0.06, vec3(0.7, 0.7, 0.5)),
          ctx.out.color := vec4(col, 1.0),
        )

    val scenePanel = p.panel(
      format = TextureFormat.Rgba16Float,
      layer = p.layer(sceneShade).bind("res" := uRes, "time" := uTime),
    )

    // -----------------------------------------------------------------------
    // Shared bloom util — owns the threshold + down/upsample pyramid + intensity based composite.
    // -----------------------------------------------------------------------

    val bloom = Bloom(
      p,
      scenePanel,
      intensity = fixedBloomIntensity,
      threshold = bloomThreshold,
      blurRadius = fixedBloomRadius,
      mipLevels = 5,
    )

    // -----------------------------------------------------------------------
    // Resize — only this sketch's own resolution uniform; the bloom util is
    // resolution-free (panels auto-scale, blur derives size from the texture).
    // -----------------------------------------------------------------------

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))

    // -----------------------------------------------------------------------
    // Animation mode — press Space to cycle (radius only / intensity only / both).
    // -----------------------------------------------------------------------

    val modeNames = Arr("radius only", "intensity only", "both")
    var mode = 2

    def logMode(): Unit = console.log(s"bloom mode: ${modeNames(mode)}")
    logMode()

    document.addEventListener[KeyboardEvent](
      "keydown",
      e =>
        if e.code == "Space" then
          e.preventDefault()
          mode = (mode + 1) % 3
          logMode(),
    )

    // -----------------------------------------------------------------------
    // Render loop
    // -----------------------------------------------------------------------

    var time = 0.0
    animate: tpf =>
      time += tpf * 0.001
      uTime.set(time)

      val phase = time.sin.fit1101
      val radius =
        if mode == 1 then fixedBloomRadius else maxBloomRadius * phase
      val intensity =
        if mode == 0 then fixedBloomIntensity else maxBloomIntensity * phase
      bloom.setBlurRadius(radius)
      bloom.setIntensity(intensity)

      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
