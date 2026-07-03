package sketchlib.utils.bloom

import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.blur.Blur
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*

/** Bloom post-processing pyramid + final composite.
  *
  * Internals:
  *   - [[bloomPanel]] (Rgba16Float, mip-chained) holds the bloom-only color.
  *     The threshold layer writes mip 0; downsample/upsample layers build the
  *     pyramid with the shared `Blur` 2D kernels (resolution derived from
  *     `textureDimensions`, so no per-mip `res` uniforms).
  *   - [[resultPanel]] (screen panel) composites
  *     `scene + bloomPanel * intensity` in a single fullscreen pass. Use this
  *     as the panel to `p.show` at the end of the frame.
  *
  * Per frame call [[paint]] to refresh both panels.
  */
trait Bloom:
  /** The bloom-only HDR panel: mip 0 is the thresholded scene, mips 1..N the
    * blurred pyramid, with the upsample chain accumulated back into mip 0. You
    * normally sample [[resultPanel]] instead; this is exposed for debugging or a
    * custom composite (read the accumulated glow at `bloomPanel.binding()`).
    */
  def bloomPanel: Panel

  /** The final composite — `scene + bloomPanel * intensity` in a screen-format
    * panel. This is the panel to `p.show(...)` at the end of the frame.
    */
  def resultPanel: Panel

  /** Refresh both panels for the current frame: rebuild the bloom pyramid from
    * `scene`, then re-composite. Call once per frame **after** the scene panel
    * has been painted (the threshold + composite passes read `scene`).
    */
  def paint(): Unit

  /** Set the down/upsample kernel tap offset (in source-mip texels) at runtime —
    * larger ⇒ wider, softer bloom. Defaults to `apply`'s `blurRadius`.
    */
  def setBlurRadius(v: Double): Unit

  /** Set how strongly bloom is added to the scene in the composite, at runtime.
    * `0` disables bloom (composite = scene). Defaults to `apply`'s `intensity`.
    */
  def setIntensity(v: Double): Unit

// TODO — dedicated panel-size API (future enhancement)
// ----------------------------------------------------
// The bloom panels currently auto-scale to the canvas (every consumer runs at
// full canvas size). A common optimisation is to run bloom at a *fraction* of
// canvas resolution (e.g. half-res), independent of the canvas. To support it:
//   - optional initial-size params on `apply` (a `scale: Double = 1.0` factor,
//     or explicit `width`/`height`) that size `bloomPanel` explicitly instead
//     of tracking the canvas; and
//   - a runtime `resize(w, h)` / `setScale(s)` on the trait that re-sizes the
//     panels on demand, decoupled from canvas resizes.
// The blur kernels need no changes — they're already resolution-free
// (textureDimensions-derived). The one catch: the threshold + composite passes
// currently read 1:1 via `load(ivec2(ctx.fragCoord.xy))`, which assumes the
// bloom panel matches the scene/result size. For a sub-resolution bloom those
// two passes must switch back to UV `sample` (threshold reads the full-res
// scene; composite upsamples the smaller bloom into the full-res result).

object Bloom:

  /** Build a bloom pipeline for an HDR `scene` panel.
    *
    * Bloom isolates the bright parts of the scene (above `threshold`), blurs
    * them into a mip pyramid, and adds that glow back over the scene scaled by
    * `intensity`. Returns a [[Bloom]] whose `resultPanel` is the composited
    * image to present.
    *
    * Wiring per frame:
    * {{{
    * val bloom = Bloom(p, scenePanel, intensity = 0.05, threshold = 1.0)
    * animate: _ =>
    *   p.paint(scenePanel)   // render the scene first
    *   bloom.paint()         // threshold → blur pyramid → composite
    *   p.show(bloom.resultPanel)
    * }}}
    *
    * No resize handling is needed — the panels auto-scale to the canvas and the
    * blur is resolution-free.
    *
    * @param p
    *   The painter that owns the GPU device and frame loop.
    * @param scene
    *   The HDR scene panel to bloom (use `TextureFormat.Rgba16Float` so values
    *   above 1.0 survive to trip the threshold). Read by both the threshold and
    *   the final composite passes — so call [[Bloom.paint]] after this panel is
    *   painted.
    * @param intensity
    *   Composite gain: `result = scene + bloom * intensity`. Small values
    *   (~0.002–0.1) read as a subtle glow; `0` disables bloom. Runtime-tunable
    *   via [[Bloom.setIntensity]].
    * @param threshold
    *   Rec.709 luminance cutoff (`0.2126·r + 0.7152·g + 0.0722·b`): pixels at or
    *   below it contribute nothing, brighter pixels bloom. `~1.0` blooms only
    *   HDR highlights. Fixed after construction.
    * @param blurRadius
    *   Down/upsample kernel tap offset in source-mip texels — larger ⇒ wider,
    *   softer glow. Runtime-tunable via [[Bloom.setBlurRadius]].
    * @param mipLevels
    *   Pyramid depth (must be `>= 2`). `N` levels = 1 threshold + `(N-1)`
    *   box downsamples + `(N-1)` additive tent upsamples; deeper ⇒ wider glow.
    *   5 is the canonical value; 4–6 covers most needs.
    * @return
    *   a [[Bloom]] exposing `resultPanel` (present this) and `bloomPanel` (raw
    *   glow), plus `paint` / `setIntensity` / `setBlurRadius`.
    * @throws scala.scalajs.js.JavaScriptException
    *   if `mipLevels < 2`.
    */
  def apply(
      p: Painter,
      scene: Panel,
      intensity: Double = 0.05,
      threshold: Double = 1.0,
      blurRadius: Double = 4.0,
      mipLevels: Int = 5,
  ): Bloom =
    if mipLevels < 2 then
      throw jsError(s"bloom mipLevels must be >= 2 (got $mipLevels)")

    // ----- bindings --------------------------------------------------------
    val uBlurRadius = p.binding(blurRadius)
    val uIntensity = p.binding(intensity)
    val sampler = p.samplerLinear

    // ----- threshold shade -------------------------------------------------
    // Rec.709 luma. Below threshold → black; otherwise pass through. Reads the
    // scene 1:1 at this fragment's own pixel (no sampler).
    type ThresholdU = (threshold: Float)
    type ScenePanels = (scene: FragmentPanel)
    val thresholdShade = p.layerShade[ThresholdU, ScenePanels]: program =>
      program.frag: ctx =>
        val color = LetVec4("color")
        val brightness = LetFloat("brightness")
        Block(
          color := ctx.textures.scene.load(ivec2(ctx.fragCoord.xy)),
          brightness :=
            color.x * 0.2126 + color.y * 0.7152 + color.z * 0.0722,
          ctx.out.color := select(
            vec4(0.0, 0.0, 0.0, 1.0),
            color,
            brightness > ctx.bindings.threshold,
          ),
        )

    // ----- down- and upsample shades --------------------------------------
    // Shared 2D pyramid kernels: box for downsample, tent for upsample. Both
    // derive their resolution from `textureDimensions(tex)`. Tap offset is in
    // source texels — for the upsample the source mip is half the destination,
    // so halve the radius to match the downsample's spread.
    type BlurU = (blurRadius: Float, samp: Sampler)
    type BloomPanels = (tex: FragmentPanel)

    val downsampleShade = p.layerShade[BlurU, BloomPanels]: program =>
      program.frag: ctx =>
        ctx.out.color := Blur.boxBlur2dAuto(
          ctx.textures.tex,
          ctx.bindings.samp,
          ctx.in.uv,
          ctx.bindings.blurRadius,
        )

    val upsampleShade = p.layerShade[BlurU, BloomPanels]: program =>
      program.frag: ctx =>
        ctx.out.color := Blur.tentBlur2dAuto(
          ctx.textures.tex,
          ctx.bindings.samp,
          ctx.in.uv,
          ctx.bindings.blurRadius * 0.5,
        )

    // ----- bloom panel layers ---------------------------------------------
    val layers = Arr[AnyLayer]()
    // Threshold → mip 0. External-panel binding ⟹ "else" branch reads scene.
    layers.push(
      p.layer(thresholdShade).bind("scene" := scene, "threshold" := threshold),
    )
    // Downsample mip i → mip i+1.
    var di = 0
    while di < mipLevels - 1 do
      layers.push(
        p.layer(downsampleShade, mipSource = di, mipTarget = di + 1)
          .bind("blurRadius" := uBlurRadius, "samp" := sampler),
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
        ).bind("blurRadius" := uBlurRadius, "samp" := sampler),
      )
      ui -= 1

    val bloomP = p.panel(
      format = TextureFormat.Rgba16Float,
      mipLevels = mipLevels,
      layers = layers,
    )

    // ----- composite — scene + bloom * intensity → screen -----------------
    // Both inputs are full-res and screen-aligned, so read them 1:1 by pixel.
    type CompositeU = (intensity: Float)
    type CompositePanels = (scene: FragmentPanel, bloom: FragmentPanel)
    val compositeShade = p.layerShade[CompositeU, CompositePanels]: program =>
      program.frag: ctx =>
        val coord = ivec2(ctx.fragCoord.xy)
        ctx.out.color :=
          ctx.textures.scene.load(coord)
            + ctx.textures.bloom.load(coord) * ctx.bindings.intensity

    val resultP = p.panel(
      layer = p
        .layer(compositeShade)
        .bind("scene" := scene, "bloom" := bloomP, "intensity" := uIntensity),
    )

    new Bloom:
      val bloomPanel = bloomP
      val resultPanel = resultP
      def paint(): Unit = p.paint(bloomP, resultP)
      def setBlurRadius(v: Double): Unit = uBlurRadius.set(v)
      def setIntensity(v: Double): Unit = uIntensity.set(v)
