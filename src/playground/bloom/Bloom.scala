package playground.bloom

import trivalibs.graphics.buffers.*
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*

/** Bloom post-processing pyramid + final composite.
  *
  * Internals:
  *   - [[bloomPanel]] (Rgba16Float, mip-chained) holds the bloom-only colour.
  *     Threshold layer writes mip 0; downsample/upsample layers build the
  *     pyramid by hand.
  *   - [[resultPanel]] (screen panel) composites `scene + bloomPanel * intensity`
  *     in a single fullscreen pass. Use this as the panel to `p.show` at the
  *     end of the frame.
  *
  * Per frame call [[paint]] to refresh both panels; from the painter's resize
  * hook call [[onResize]] to update per-mip resolution uniforms.
  */
trait Bloom:
  def bloomPanel: Panel
  def resultPanel: Panel
  def paint(): Unit
  def setBlurRadius(v: Double): Unit
  def setIntensity(v: Double): Unit
  def onResize(w: Double, h: Double): Unit

object Bloom:

  /** Build a bloom pipeline for `scene`.
    *
    * @param p
    *   The painter.
    * @param scene
    *   HDR scene panel (typically Rgba16Float). The threshold layer reads
    *   from this; the composite layer reads from it as well.
    * @param intensity
    *   How strongly bloom is added to the scene in the composite. Tunable at
    *   runtime via [[Bloom.setIntensity]].
    * @param threshold
    *   Rec.709 luminance cutoff: pixels brighter than this contribute to the
    *   bloom; below stays black. Constant after construction.
    * @param blurRadius
    *   Initial kernel radius (in destination-mip texels) for the down/upsample
    *   kernels. Tweak at runtime via [[Bloom.setBlurRadius]].
    * @param mipLevels
    *   Pyramid depth. `N` levels = 1 threshold + `(N-1)` downsamples +
    *   `(N-1)` upsamples. 5 is the canonical bloom-sketch value; 4–6 covers
    *   most needs.
    */
  def apply(
      p: Painter,
      scene: Panel,
      intensity: Double = 0.05,
      threshold: Double = 1.0,
      blurRadius: Double = 4.0,
      mipLevels: Int = 5,
  ): Bloom =
    require(
      mipLevels >= 2,
      s"bloom mipLevels must be >= 2 (got $mipLevels)",
    )

    // ----- bindings --------------------------------------------------------
    val uBlurRadius = p.binding(blurRadius)
    val uIntensity = p.binding(intensity)
    val mipResBindings = Arr[BufferBinding[Vec2, ?]]()
    var i = 0
    while i < mipLevels do
      mipResBindings.push(p.binding[Vec2])
      i += 1

    val sampler = p.samplerLinear

    // ----- threshold shade -------------------------------------------------
    // Rec.709 luma. Below threshold → black; otherwise pass through.
    type ThresholdU = (threshold: Float, samp: Sampler)
    type ScenePanels = (scene: FragmentPanel)
    val thresholdShade = p.layerShade[ThresholdU, ScenePanels]: program =>
      program.frag: ctx =>
        val color = LetVec4("color")
        val brightness = LetFloat("brightness")
        Block(
          color := ctx.textures.scene.sample(ctx.in.uv, ctx.bindings.samp),
          brightness :=
            color.x * 0.2126 + color.y * 0.7152 + color.z * 0.0722,
          ctx.out.color := select(
            vec4(0.0, 0.0, 0.0, 1.0),
            color,
            brightness > ctx.bindings.threshold,
          ),
        )

    // ----- down- and upsample shades --------------------------------------
    type BlurU = (res: Vec2, blurRadius: Float, samp: Sampler)
    type BloomPanels = (tex: FragmentPanel)

    // 4-tap box at ±0.5 dst-texels × blurRadius.
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

    // 9-tap tent at ±1 dst-texel × blurRadius.
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

    // ----- bloom panel layers ---------------------------------------------
    val layers = Arr[AnyLayer]()
    // Threshold → mip 0. External-panel binding ⟹ "else" branch reads scene.
    layers.push(
      p.layer(thresholdShade)
        .bind(
          "scene" := scene,
          "threshold" := threshold,
          "samp" := sampler,
        ),
    )
    // Downsample mip i → mip i+1.
    var di = 0
    while di < mipLevels - 1 do
      layers.push(
        p.layer(downsampleShade, mipSource = di, mipTarget = di + 1)
          .bind(
            "res" := mipResBindings(di + 1),
            "blurRadius" := uBlurRadius,
            "samp" := sampler,
          ),
      )
      di += 1
    // Upsample mip i+1 → mip i (additive).
    var ui = mipLevels - 2
    while ui >= 0 do
      layers.push(
        p.layer(
          upsampleShade,
          blendState = BlendState.Additive,
          mipSource = ui + 1,
          mipTarget = ui,
        ).bind(
          "res" := mipResBindings(ui),
          "blurRadius" := uBlurRadius,
          "samp" := sampler,
        ),
      )
      ui -= 1

    val bloomP = p.panel(
      format = TextureFormat.Rgba16Float,
      mipLevels = mipLevels,
      layers = layers,
    )

    // ----- composite — scene + bloom * intensity → screen -----------------
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

    val resultP = p.panel(
      layer = p
        .layer(compositeShade)
        .bind(
          "scene" := scene,
          "bloom" := bloomP,
          "intensity" := uIntensity,
          "samp" := sampler,
        ),
    )

    new Bloom:
      val bloomPanel = bloomP
      val resultPanel = resultP
      def paint(): Unit = p.paint(bloomP, resultP)
      def setBlurRadius(v: Double): Unit = uBlurRadius.set(v)
      def setIntensity(v: Double): Unit = uIntensity.set(v)
      def onResize(w: Double, h: Double): Unit =
        var i = 0
        var d = 1.0
        while i < mipResBindings.length do
          mipResBindings(i).set(Vec2(w / d, h / d))
          d *= 2.0
          i += 1
