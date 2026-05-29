package sketches.post.bloom

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.KeyboardEvent
import org.scalajs.dom.console
import org.scalajs.dom.document
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// Bloom post-processing — Scala port of the Rust `bloom` test sketch.
//
// Pipeline:
//   scenePanel  : HDR scene of bright/dim SDF circles            (rgba16float)
//   bloomPanel  : 5-level mip chain, built by hand               (rgba16float)
//     - threshold : extract bright pixels  → mip 0
//     - downsample: blur mip i → mip i+1   (i = 0..3)
//     - upsample  : blur mip i+1 → mip i   (i = 3..0, additive)
//   canvasPanel : composite = scene + bloom * intensity          (screen)
//
// The bloom panel uses mip-target layers, so the painter skips auto mipmap
// generation.

@main def bloom(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Tunables — constants tweakable in one place (inlined into binds / the
    // render loop; not uniforms, since they never change at runtime).
    // -----------------------------------------------------------------------

    val bloomThreshold = 1.0 // luminance cutoff for what blooms
    val fixedBloomRadius = 4.0 // blur radius held in "intensity only" mode
    val fixedBloomIntensity = 0.015 // intensity held in "radius only" mode
    val maxBloomRadius = 8.0 // blur radius at peak of the oscillation
    val maxBloomIntensity = 0.05 // intensity at peak of the oscillation

    // -----------------------------------------------------------------------
    // Bindings
    // -----------------------------------------------------------------------

    val uTime = p.binding(0.0)
    val uBloomIntensity = p.binding(fixedBloomIntensity)
    val uBlurRadius = p.binding(fixedBloomRadius)

    val uRes = p.binding[Vec2]
    val uResMip1 = p.binding[Vec2]
    val uResMip2 = p.binding[Vec2]
    val uResMip3 = p.binding[Vec2]
    val uResMip4 = p.binding[Vec2]

    val sampler = p.samplerLinear

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

        // A soft circle of `brightness`, in aspect-corrected UV space.
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
          // aspect-correct x by scaling about the center (0.5) rather than 0,
          // so the 0..1 layout stays centered for any aspect (landscape adds
          // equal margins L/R, portrait trims equally) and circles stay round.
          uvC := vec2((uv.x - 0.5) * aspect + 0.5, uv.y),
          t := ctx.bindings.time * 0.5,
          col := vec3(0.1, 0.1, 0.1),
          // bright circles — will bloom
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
          // dim circles — below threshold, no bloom
          col += circle(vec2(0.25, 0.75), 0.08, vec3(0.6, 0.6, 0.8)),
          col += circle(vec2(0.75, 0.75), 0.08, vec3(0.8, 0.6, 0.6)),
          col += circle(vec2(0.5, 0.7), 0.06, vec3(0.7, 0.7, 0.5)),
          // gamma to push the bright cores into HDR range
          // ctx.out.color := vec4(col.pow(2.3), 1.0),
          ctx.out.color := vec4(col, 1.0),
        )

    val scenePanel = p.panel(
      format = TextureFormat.Rgba16Float,
      layer = p.layer(sceneShade).bind("res" := uRes, "time" := uTime),
    )

    // -----------------------------------------------------------------------
    // Threshold shade — keep pixels brighter than the threshold, else black
    // -----------------------------------------------------------------------

    type ThresholdU = (res: Vec2, threshold: Float, samp: Sampler)
    type ScenePanels = (scene: FragmentPanel)

    val thresholdShade = p.layerShade[ThresholdU, ScenePanels]: program =>
      program.frag: ctx =>
        val color = LetVec4("color")
        val brightness = LetFloat("brightness")
        Block(
          color := ctx.textures.scene.sample(ctx.in.uv, ctx.bindings.samp),
          brightness := color.x * 0.2126 + color.y * 0.7152 + color.z * 0.0722,
          ctx.out.color := select(
            vec4(0.0, 0.0, 0.0, 1.0),
            color,
            brightness > ctx.bindings.threshold,
          ),
        )

    // -----------------------------------------------------------------------
    // Downsample shade — 4-tap box blur, mip i → mip i+1
    // -----------------------------------------------------------------------

    type BlurU = (res: Vec2, blurRadius: Float, samp: Sampler)
    type BloomPanels = (tex: FragmentPanel)

    val downsampleShade = p.layerShade[BlurU, BloomPanels]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val o = LetVec2("o")
        val s = ctx.bindings.samp
        val tex = ctx.textures.tex
        Block(
          o := vec2(0.5, 0.5) * ctx.bindings.blurRadius / ctx.bindings.res,
          ctx.out.color := (
            tex.sample(uv - o, s)
              + tex.sample(uv + vec2(o.x, -o.y), s)
              + tex.sample(uv + vec2(-o.x, o.y), s)
              + tex.sample(uv + o, s)
          ) * 0.25,
        )

    // -----------------------------------------------------------------------
    // Upsample shade — 9-tap tent filter, mip i+1 → mip i (additive blend)
    // -----------------------------------------------------------------------

    val upsampleShade = p.layerShade[BlurU, BloomPanels]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val o = LetVec2("o")
        val s = ctx.bindings.samp
        val tex = ctx.textures.tex
        Block(
          o := vec2(1.0, 1.0) * ctx.bindings.blurRadius / ctx.bindings.res,
          ctx.out.color :=
            tex.sample(uv, s) * 0.25
              + (
                tex.sample(uv + vec2(0.0, o.y), s)
                  + tex.sample(uv + vec2(0.0, -o.y), s)
                  + tex.sample(uv + vec2(o.x, 0.0), s)
                  + tex.sample(uv + vec2(-o.x, 0.0), s)
              ) * 0.125
              + (
                tex.sample(uv + o, s)
                  + tex.sample(uv + vec2(-o.x, o.y), s)
                  + tex.sample(uv + vec2(o.x, -o.y), s)
                  + tex.sample(uv - o, s)
              ) * 0.0625,
        )

    // -----------------------------------------------------------------------
    // Bloom panel — 5-level mip chain built by threshold + down/upsample layers
    // -----------------------------------------------------------------------

    val mipRes = Arr(uRes, uResMip1, uResMip2, uResMip3, uResMip4)

    val bloomLayers = Arr[AnyLayer]()
    // threshold → mip 0 (regular layer, reads the external scene panel)
    bloomLayers.push(
      p.layer(thresholdShade)
        .bind(
          "scene" := scenePanel,
          "res" := uRes,
          "threshold" := bloomThreshold, // constant — auto-boxed by bind()
          "samp" := sampler,
        ),
    )
    // downsample mip i → mip i+1
    var i = 0
    while i < 4 do
      bloomLayers.push(
        p.layer(downsampleShade, mipSource = i, mipTarget = i + 1)
          .bind(
            "res" := mipRes(i + 1),
            "blurRadius" := uBlurRadius,
            "samp" := sampler,
          ),
      )
      i += 1
    // upsample mip i+1 → mip i (additive accumulation)
    i = 3
    while i >= 0 do
      bloomLayers.push(
        p.layer(
          upsampleShade,
          blendState = BlendState.Additive,
          mipSource = i + 1,
          mipTarget = i,
        ).bind(
          "res" := mipRes(i),
          "blurRadius" := uBlurRadius,
          "samp" := sampler,
        ),
      )
      i -= 1

    val bloomPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      mipLevels = 5,
      layers = bloomLayers,
    )

    // -----------------------------------------------------------------------
    // Composite shade — scene + bloom * intensity → screen
    // -----------------------------------------------------------------------

    type CompositeU = (intensity: Float, samp: Sampler)
    type CompositePanels = (scene: FragmentPanel, bloom: FragmentPanel)

    val compositeShade = p.layerShade[CompositeU, CompositePanels]: program =>
      program.frag: ctx =>
        Block(
          ctx.out.color :=
            ctx.textures.scene.sample(ctx.in.uv, ctx.bindings.samp)
              + ctx.textures.bloom.sample(ctx.in.uv, ctx.bindings.samp)
              * ctx.bindings.intensity,
        )

    val canvasPanel = p.panel(
      layer = p
        .layer(compositeShade)
        .bind(
          "scene" := scenePanel,
          "bloom" := bloomPanel,
          "intensity" := uBloomIntensity,
          "samp" := sampler,
        ),
    )

    // -----------------------------------------------------------------------
    // Resolution uniforms (per mip level) — recomputed on resize
    // -----------------------------------------------------------------------

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))
      uResMip1.set(Vec2(w / 2.0, h / 2.0))
      uResMip2.set(Vec2(w / 4.0, h / 4.0))
      uResMip3.set(Vec2(w / 8.0, h / 8.0))
      uResMip4.set(Vec2(w / 16.0, h / 16.0))

    // -----------------------------------------------------------------------
    // Animation mode — press Space to cycle. Both knobs oscillate from the same
    // phase, so in "both" they grow/shrink in sync. The un-animated knob is held
    // at a moderate fixed value so each effect can be studied in isolation:
    //   blur radius : how far bright pixels spread     (0 → maxBloomRadius px)
    //   intensity   : how strongly bloom adds to scene (0 → maxBloomIntensity)
    // -----------------------------------------------------------------------

    val modeNames = Arr("radius only", "intensity only", "both")
    var mode = 2 // start with both

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
      time += tpf * 0.001 // tpf is ms; bloom params think in seconds
      uTime.set(time)

      val phase = time.sin.fit1101 // [0, 1]
      val radius =
        if mode == 1 then fixedBloomRadius else maxBloomRadius * phase
      val intensity =
        if mode == 0 then fixedBloomIntensity else maxBloomIntensity * phase
      uBlurRadius.set(radius)
      uBloomIntensity.set(intensity)

      p.paint(scenePanel, bloomPanel, canvasPanel)
      p.show(canvasPanel)
