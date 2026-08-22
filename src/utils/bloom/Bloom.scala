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
    * normally sample [[resultPanel]] instead; this is exposed for debugging or
    * a custom composite (read the accumulated glow at `bloomPanel.binding()`).
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

  /** Set the down/upsample kernel tap offset (in source-mip texels) at runtime
    * — larger ⇒ wider, softer bloom. Defaults to `apply`'s `blurRadius`.
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
    *   Rec.709 luminance cutoff (`0.2126·r + 0.7152·g + 0.0722·b`): pixels at
    *   or below it contribute nothing, brighter pixels bloom. `~1.0` blooms
    *   only HDR highlights. Fixed after construction.
    * @param blurRadius
    *   Down/upsample kernel tap offset in source-mip texels — larger ⇒ wider,
    *   softer glow. Runtime-tunable via [[Bloom.setBlurRadius]].
    * @param mipLevels
    *   Pyramid depth (must be `>= 2`). `N` levels = 1 threshold + `(N-1)` box
    *   downsamples + `(N-1)` additive tent upsamples; deeper ⇒ wider glow. 5 is
    *   the canonical value; 4–6 covers most needs.
    * @param toneKnee
    *   Where the display shoulder starts. Everything below passes through
    *   untouched, so set it at or just above the brightest NON-emitting surface
    *   in the scene and its tones will not shift. The default `1.0` disables
    *   the shoulder entirely, giving the plain hard clamp.
    * @param toneWhite
    *   Length of the shoulder above the knee, in scene units — roughly "the HDR
    *   value that should read as near-white". It does not clip there: the curve
    *   approaches 1.0 asymptotically, which is what keeps a strong bloom from
    *   flattening into a plateau. Larger ⇒ gentler compression, so a wider HDR
    *   range stays distinguishable and the emitter reads dimmer.
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
      toneKnee: Double = 1.0,
      toneWhite: Double = 2.0,
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
    //
    // SOFT SHOULDER.
    //
    // ANTIALIASING IS NOT SMOOTHING — it encodes coverage as brightness. The
    // jagged pixel-grid boundary is always there; what hides it is that edge
    // pixels hold values between the two sides. So ANY mapping that sends a
    // range of inputs to one output strips the disguise off and the grid
    // reappears exactly as it was. Shown directly, an HDR scene clamps
    // everything above 1.0: with a 2.0 emitter behind a 0.85 surface every
    // sample past ~13 % coverage displays as pure white, 4 of MSAA's 5
    // gradations collapse, and the edge is a staircase however many samples
    // were taken. Nothing drew a step — the clamp revealed one.
    //
    // Hence the shoulder, which keeps those intermediate values distinct:
    //
    //   f(c) = c                                          for c <= knee
    //   f(c) = 1 - (1 - knee)·exp(-(c - knee)/shoulder)    above it
    //
    // ASYMPTOTIC, NOT TERMINATING, and that is the whole point of its shape. A
    // piecewise-linear ramp that maps `toneWhite` to exactly 1.0 still clips
    // everything brighter, which matters here more than anywhere else in a
    // frame: bloom ADDS to the scene, so a strong glow lifts a whole
    // neighbourhood past `toneWhite` at once. That region goes flat white with
    // no gradient in it, and its outline — the contour where
    // `scene + bloom·intensity = toneWhite` — is itself a hard aliased edge.
    // The staircase moves from the emitter's silhouette out into the glow, and
    // `intensity` stops being a free knob because turning it up brings the
    // artifact back. Approaching 1.0 without reaching it, no plateau can form
    // at any intensity.
    //
    // It is also C¹ at the knee: the initial slope is `(1-knee)/shoulder`,
    // identical to the linear version's, so an existing tuning is preserved and
    // the falloff has no visible corner where it starts.
    //
    // The default `toneKnee = 1.0` zeroes `lift`, leaving `min(c, knee)` —
    // exactly the plain hard clamp, so a caller that does not ask for a
    // shoulder gets none.
    val toneOn = toneWhite > toneKnee
    val toneLift = if toneOn then 1.0 - toneKnee else 0.0
    // Negated reciprocal so the shader needs one multiply and no division.
    val toneFalloff = if toneOn then -1.0 / (toneWhite - toneKnee) else -1.0
    type CompositeU =
      (intensity: Float, knee: Float, lift: Float, falloff: Float)
    type CompositePanels = (scene: FragmentPanel, bloom: FragmentPanel)
    val compositeShade = p.layerShade[CompositeU, CompositePanels]: program =>
      program.frag: ctx =>
        val coord = ivec2(ctx.fragCoord.xy)
        val c = LetVec3("c")
        val low = LetVec3("low")
        val over = LetVec3("over")
        Block(
          c := (ctx.textures.scene.load(coord)
            + ctx.textures.bloom.load(coord) * ctx.bindings.intensity).xyz,
          // Below the knee `low` is `c` itself and `over` is zero, so the
          // shoulder term vanishes and the value passes through untouched.
          low := c.min(vec3(ctx.bindings.knee)),
          over := c - low,
          ctx.out.color := vec4(
            low
              + (vec3(1.0) - (over * ctx.bindings.falloff).exp)
              * ctx.bindings.lift,
            1.0,
          ),
        )

    val resultP = p.panel(
      layer = p
        .layer(compositeShade)
        .bind(
          "scene" := scene,
          "bloom" := bloomP,
          "intensity" := uIntensity,
          "knee" := toneKnee,
          "lift" := toneLift,
          "falloff" := toneFalloff,
        ),
    )

    new Bloom:
      val bloomPanel = bloomP
      val resultPanel = resultP
      def paint(): Unit = p.paint(bloomP, resultP)
      def setBlurRadius(v: Double): Unit = uBlurRadius.set(v)
      def setIntensity(v: Double): Unit = uIntensity.set(v)
