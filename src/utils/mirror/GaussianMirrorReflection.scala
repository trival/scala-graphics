package sketchlib.utils.mirror

import trivalibs.graphics.geometry.Plane
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.blur.Blur
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

/** Blurred planar mirror reflection with a **per-pixel Gaussian** blur radius
  * (e.g. a glossy floor). Approach B — see `design-plan.md`.
  *
  * Same idea as [[MirrorReflection]]: `shapes` are rendered a second time from
  * a camera reflected across a mirror `plane`, and a bake pass reconstructs
  * each fragment's distance from the plane out of that render's **depth
  * buffer** into alpha. The difference is *how the blur happens*.
  *
  * [[MirrorReflection]] blurs into a mip pyramid and picks a discrete LOD per
  * pixel. Here a **separable Gaussian cascade** runs at one resolution, and
  * each pass reads the per-pixel distance from alpha and scales its own step
  * size by it. The blur radius is therefore a *continuous* function of distance
  * — there is no pyramid, no LOD, and no mip content to interpolate between,
  * which is what makes this immune to the artifact class that parked Approach A
  * (the defect there was created by the tent downsample chain itself; see
  * `design-plan.md` § Milestone A1).
  *
  * Alpha rides through the same kernel as color, so the distance mask softens
  * in lockstep with the reflection and a blurred silhouette is never
  * re-sharpened by a crisp falloff.
  *
  * Vertical passes scale their step by [[setBlurRatioVertical]], giving the
  * symmetric vertical-stronger anisotropy of a glossy floor smear.
  *
  * The shapes need **no mirror-specific code** — they read the view-projection
  * from a panel-level uniform named `vpName` (left unbound on the shape), which
  * this util drives. (Reflection flips winding, so shared shapes want
  * `CullMode.None`.)
  *
  * All internal panels run at `resolutionScale` × canvas size, so
  * [[resultPanel]] is generally **smaller than the consuming surface** —
  * consumers must UV-`sample` it, not `load` it at their own `fragCoord`. That
  * sizing is driven by [[resize]], which the consumer calls from its own
  * `p.onResize`; this util registers no resize callback of its own.
  *
  * Per frame call [[paint]] (after setting the scene VP, before painting the
  * scene that samples `resultPanel`).
  */
trait GaussianMirrorReflection:
  /** The raw reflected render (sharp), with a sampleable depth attachment.
    * [[resultPanel]] is what consumers normally read; this is exposed for
    * raw/advanced use (e.g. a sharp reflection).
    */
  def mirrorScenePanel: Panel

  /** Resolved reflection: blurred color (rgb) + blurred normalized distance
    * from the mirror plane (alpha), at `resolutionScale` × canvas size.
    * **Sample this by UV** — it does not match the consumer's pixel grid.
    *
    * Already cropped back to the visible frame, so its uv space is the
    * consumer's screen uv regardless of the `overscan` guard band.
    */
  def resultPanel: Panel

  /** Reflect the camera across the mirror plane and render + blur. Pass an
    * explicit `vp` to override the construction-time camera (required if none
    * was given).
    */
  def paint(vp: Maybe[Mat4] = Maybe.Not): Unit

  /** Size the internal panels to `resolutionScale × (w, h)` and re-derive the
    * blur cascade for that size. **Must be called before the first [[paint]]**
    * — the panel has no layers until it is — and on every canvas resize; drive
    * it from the sketch's own `p.onResize`, which fires immediately on
    * registration and so covers the initial sizing too.
    */
  def resize(w: Double, h: Double): Unit

  /** Maximum **horizontal** blur — the Gaussian spread (σ) as a **percentage of
    * canvas height**, reached at `alphaScale` and held beyond it, ramping
    * linearly from 0 at the mirror plane. Being a share of the image rather
    * than a pixel count, it keeps the same perceived blur relative to the
    * objects in the scene on any display; and being σ, the same value gives the
    * same spread in [[sketchlib.utils.mirror.MirrorReflection]]. The useful
    * band is roughly `1`–`5`. The vertical spread is this times
    * [[setBlurRatioVertical]]. Changing it re-derives the pass count, so a
    * larger value genuinely reaches further rather than clipping.
    */
  def setBlurStrength(v: Double): Unit

  /** Vertical:horizontal blur ratio, applied on top of `blurStrength`: the
    * vertical radius is `blurStrength × ratio` while the horizontal stays at
    * `blurStrength`. `1` = isotropic; `>1` smears the reflection away from the
    * plane for a glossy "wet floor" look. Scaled per-pixel by distance, so the
    * contact line stays sharp. Like [[setBlurStrength]], this re-derives the
    * pass count for the wider axis.
    */
  def setBlurRatioVertical(v: Double): Unit

  /** Constant step added to every pass's radius, in pixels, *before* the
    * distance scaling. Lifts the blur floor so even the contact line is not
    * perfectly sharp; `0` keeps it crisp.
    */
  def setStrengthOffset(v: Double): Unit

/** Factory for [[GaussianMirrorReflection]] — the trait carries the overview,
  * [[apply]] documents every constructor parameter.
  */
object GaussianMirrorReflection:

  /** Build a depth-driven, per-pixel-Gaussian blurred planar reflection.
    *
    * Wiring is the same as [[MirrorReflection]] except that the floor
    * **samples** `resultPanel` by UV instead of loading it at `fragCoord`:
    * {{{
    * val sceneVp = p.binding[Mat4]
    * scenePanel.bind("vp" := sceneVp)
    * val mirror = GaussianMirrorReflection(p, Arr(wall, ceil), vpName = "vp",
    *                                       alphaScale = RoomHeight,
    *                                       blurStrength = 2.0)
    * floor.bind("reflTex" := mirror.resultPanel, "reflSamp" := p.samplerLinear)
    *
    * p.onResize: (w, h) =>
    *   cam.set(aspect = w / h)
    *   mirror.resize(w, h)      // required — the util registers no callback
    *
    * animate: _ =>
    *   val vp = cam.viewProjMat
    *   sceneVp.set(vp)
    *   mirror.paint(vp)
    *   p.paint(scenePanel)
    * }}}
    *
    * Generic over `S <: AnyShape` because `Arr` is invariant — a concrete
    * `Arr[Shape[U, P]]` would not conform to `Arr[AnyShape]`.
    *
    * @param p
    *   The painter that owns the GPU device and frame loop.
    * @param shapes
    *   The shapes to reflect. Their shade produces color only (distance comes
    *   from depth) and reads its view-projection from the panel-level `vpName`
    *   uniform — leave that uniform **unbound** on the shape.
    * @param vpName
    *   The shade's view-projection uniform field name. The util writes the
    *   reflected `cameraVP × reflectionMat` into it each [[paint]].
    * @param alphaScale
    *   The plane-distance (world units) mapping to normalized alpha `1.0` — the
    *   distance at which the reflection reaches full blur / falloff. For a room
    *   floor, the room height works well.
    * @param camera
    *   Optional viewpoint source: when set, [[paint]] with no argument pulls
    *   `camera.viewProjMat`. When `null` (default), every [[paint]] needs an
    *   explicit `vp`.
    * @param mirror
    *   The mirror plane (CPU-only `Plane`; default the ground plane `y = 0`).
    * @param blurStrength
    *   Initial maximum **horizontal** blur, as the Gaussian spread (σ) in
    *   **percent of canvas height** (useful band roughly `1`–`10`), reached at
    *   `alphaScale` and ramping linearly from 0 at the plane. Relative to the
    *   image rather than in pixels, so the perceived blur holds constant
    *   against object size across resolutions and device pixel ratios; and
    *   denominated in σ, so the same value means the same spread in
    *   [[MirrorReflection]]. Together with `blurRatioVertical` and the panel
    *   height it also determines **the pass count**, re-derived on every
    *   [[resize]] and on either strength setter. Runtime-tunable via
    *   [[setBlurStrength]].
    * @param blurRatioVertical
    *   Initial vertical:horizontal blur ratio (anisotropy), multiplied on top
    *   of `blurStrength` — `2` gives a vertical radius of `2 × blurStrength`.
    *   Runtime-tunable via [[setBlurRatioVertical]].
    * @param strengthOffset
    *   Initial constant radius floor in pixels. Runtime-tunable via
    *   [[setStrengthOffset]].
    * @param scaleFactor
    *   Geometric decay of the step size across the cascade: pass pair `k` steps
    *   by `scaleFactor^k`. Large-to-small, like a standard blur cascade. Lower
    *   ⇒ faster decay ⇒ fewer passes for the same reach, but a coarser
    *   approximation of a true Gaussian.
    * @param resolutionScale
    *   Internal panel size as a fraction of the canvas. The reflection is
    *   blurred anyway, so `0.5` (default) costs a quarter of the fill for
    *   virtually no visible loss.
    * @param overscan
    *   Width of the guard band around the reflected render, in multiples of
    *   the blur's σ. The mirror scene is rendered through a correspondingly
    *   widened frustum and cropped back afterwards, so that pixels near the
    *   frame edge blur against real geometry instead of the clamped-to-edge
    *   border — without it, a large `blurStrength` smears the border inward.
    *   `3` (default) covers ~99.7% of the kernel; `0` disables the band and
    *   the crop pass entirely. Costs `((v + 2·overscan·σ) / v)²` in fill (~1.3×
    *   at the defaults), capped at 2× per axis.
    * @param clearColor
    *   RGBA the mirror render clears to where no shape draws.
    * @return
    *   a [[GaussianMirrorReflection]] exposing `resultPanel` (sample this by
    *   UV) and `mirrorScenePanel` (raw), plus `paint` and the runtime setters.
    * @throws scala.scalajs.js.JavaScriptException
    *   if `scaleFactor` is not in `(0, 1)` or `resolutionScale <= 0`.
    */
  def apply[S <: AnyShape](
      p: Painter,
      shapes: Arr[S],
      vpName: String,
      alphaScale: Double,
      camera: Opt[PerspectiveCamera] = null,
      mirror: Plane = Plane.ground,
      blurStrength: Double = 2.0,
      blurRatioVertical: Double = 1.0,
      strengthOffset: Double = 0.0,
      scaleFactor: Double = 0.6,
      resolutionScale: Double = 0.5,
      overscan: Double = 3.0,
      clearColor: (Double, Double, Double, Double) = (0.0, 0.0, 0.0, 0.0),
  ): GaussianMirrorReflection =
    if scaleFactor <= 0.0 || scaleFactor >= 1.0 then
      throw jsError(
        s"GaussianMirrorReflection scaleFactor must be in (0, 1) " +
          s"(got $scaleFactor)",
      )
    if resolutionScale <= 0.0 then
      throw jsError(
        s"GaussianMirrorReflection resolutionScale must be > 0 " +
          s"(got $resolutionScale)",
      )
    if overscan < 0.0 then
      throw jsError(
        s"GaussianMirrorReflection overscan must be >= 0 (got $overscan)",
      )

    // `blurStrength` is a percentage of canvas height. The shade multiplies by
    // `res.y` to get the target blur in panel pixels; what is left is the
    // conversion from that to a first-pass `gaussianBlur9` direction.
    //
    // Note this is NOT a divide by the kernel's nominal radius (4.5px, the
    // "9px diameter" at `dir = 1`). That names where the outermost tap sits, and
    // the taps are weighted, so the actual spread is much narrower — converting
    // through the nominal radius under-blurs by ~2.5×. Deriving it instead:
    //
    //   one pass at `dir = D`, from the tap offsets and weights:
    //     σ² = 2(0.3162·1.3846² + 0.0703·3.2308²)·D² = 2.68·D²  ⇒  σ = 1.64·D
    //   the cascade sums variance geometrically:
    //     σ = 1.64·D₀·√(Σ scaleFactor^2k) = 1.64·D₀·√(1/(1−scaleFactor²))
    val SigmaPerDirSinglePass = 1.64
    val cascadeGain = (1.0 / (1.0 - scaleFactor * scaleFactor)).sqrt
    val sigmaPerDir = SigmaPerDirSinglePass * cascadeGain
    //
    // So `blurStrength` denotes σ directly — the same physical spread that
    // `MirrorReflection` derives its mip radius from, which is what makes the
    // two swappable at equal values without either referring to the other.
    //
    // A percentage is scale-free, so `resolutionScale` does not appear here: x%
    // of the sub-resolution height is the same share of the image as x% of the
    // canvas height.
    val strengthScale = 0.01 / sigmaPerDir

    val reflMat = mirror.reflectionMat
    // Mirror plane baked into the bake shade: distance = n·worldPos - d.
    val pn = mirror.normal
    val pd = mirror.d

    val uVp = p.binding[Mat4]
    val uInvVp = p.binding[Mat4]
    val uBlurStrength = p.binding(blurStrength * strengthScale)
    val uRatioVertical = p.binding(blurRatioVertical)
    val uStrengthOffset = p.binding(strengthOffset)
    // Sub-resolution pixel size of the internal panels — `gaussianBlur9` needs
    // it to turn pixel offsets into uv steps. This is the *overscanned* size,
    // margins included, since that is the grid the taps step across. Kept
    // current by `applySizing`.
    val uRes = p.binding[Vec2]
    // Height of the *visible* frame in panel pixels — `uRes.y` minus the guard
    // band. The blur radius is a share of the visible image, not of the panel,
    // so the two must not be conflated (see `applySizing`).
    val uVisHeight = p.binding(0.0)
    // Visible frame → overscanned panel uv: `uv * crop.xy + crop.zw`. Identity
    // `(1, 1, 0, 0)` when there is no guard band.
    val uCrop = p.binding(Vec4(1.0, 1.0, 0.0, 0.0))
    val sampler = p.samplerLinear

    // Pass budget: shrink the step by `scaleFactor` until it reaches the native
    // kernel width (`dir = 1`, the 9px-diameter blur). That last pass is not
    // optional — the wide passes leave sampling gaps between their five taps,
    // and each following pass closes the gaps of the one before it, so the
    // cascade is only artifact-free if it *ends* at the native width. Going
    // finer than that adds nothing, hence `> 1.0` rather than a fixed count.
    // Depends on resolution and on both runtime strength knobs, so it is
    // recomputed by `rebuildLayers` rather than fixed at construction.
    def neededPairs(
        subResHeight: Double,
        strength: Double,
        ratio: Double,
    ): Int =
      var pairs = 1
      var reach = strength * strengthScale * subResHeight * ratio.max(1.0)
      while reach > 1.0 do
        reach *= scaleFactor
        pairs += 1
      pairs

    // ----- mirror render --------------------------------------------------
    // MSAA off: the result is blurred, so anti-aliasing the source is moot.
    val mirrorPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      clearColor = clearColor,
      depthTest = true,
      shapes = shapes,
      multisample = true,
    )
    // Panel-level VP under the runtime field name. `panel.bind` needs a literal
    // name, so write the public runtime-bindings dict directly.
    mirrorPanel.runtimeBindings.set(vpName, uVp)

    // ----- bake distance into alpha ---------------------------------------
    // Identical in spirit to Approach A's bake (and proven correct there by the
    // A1 bisection): reconstruct world position from the reflected depth buffer
    // and write the normalized signed plane distance into alpha next to color.
    type BakeU = (invVp: Mat4)
    type BakeP = (col: FragmentPanel, depth: FragmentDepthPanel)
    val bakeShade = p.layerShade[BakeU, BakeP]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val d = LetFloat("d")
        val ndc = LetVec3("ndc")
        val worldH = LetVec4("worldH")
        val worldPos = LetVec3("worldPos")
        val t = LetFloat("t")
        Block(
          // Depth at this pixel (1:1 point read — the bake target and the mirror
          // render are both at sub-resolution, so the grids match).
          d := ctx.textures.depth.load(ivec2(ctx.fragCoord.xy)),
          ndc := vec3(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d),
          worldH := ctx.bindings.invVp * vec4(ndc, 1.0),
          worldPos := worldH.xyz / worldH.w,
          t := ((vec3(pn.x, pn.y, pn.z)
            .dot(worldPos) - pd) / alphaScale).clamp01,
          ctx.out.color :=
            vec4(ctx.textures.col.load(ivec2(ctx.fragCoord.xy)).rgb, t),
        )

    // ----- separable Gaussian pass ----------------------------------------
    // The core of Approach B. Each pass reads the *current* per-pixel distance
    // from alpha and scales its own step by it, so the blur radius varies
    // continuously across the image instead of snapping to a pyramid level.
    // `gaussianBlur9` has no diameter parameter — the step magnitude rides in
    // the direction vector (the same trick the blur example uses).
    type BlurU = (
        blurStrength: Float,
        ratioVertical: Float,
        strengthOffset: Float,
        passScale: Float,
        res: Vec2,
        visHeight: Float,
        samp: Sampler,
    )
    type BlurP = (tex: FragmentPanel)

    def blurShade(vertical: Boolean) = p.layerShade[BlurU, BlurP]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val a = LetFloat("a")
        val dist = LetFloat("dist")
        Block(
          // Per-pixel plane distance, co-blurred by every previous pass — so the
          // radius field softens along with the color it gates.
          a := ctx.textures.tex.sample(uv, ctx.bindings.samp).a,
          // `blurStrength` is the horizontal radius as a share of the *visible*
          // frame's height — hence `visHeight` rather than `res.y`, which
          // includes the guard band — so the blur covers the same fraction of
          // the image, and of any object in it, at every resolution and at any
          // overscan. The vertical pass scales it by `ratioVertical` on top
          // (see the pass budget).
          dist := a * ctx.bindings.blurStrength * ctx.bindings.visHeight
            * ctx.bindings.passScale + ctx.bindings.strengthOffset,
          ctx.out.color := Blur.gaussianBlur9(
            ctx.textures.tex,
            ctx.bindings.samp,
            uv,
            ctx.bindings.res,
            if vertical then vec2(0.0, dist * ctx.bindings.ratioVertical)
            else vec2(dist, 0.0),
          ),
        )

    val blurShadeH = blurShade(false)
    val blurShadeV = blurShade(true)

    // Layer 0 bakes from the mirror render; the rest ping-pong on this panel
    // (an unbound `tex` input resolves to the panel's own previous contents).
    val bakeLayer = p
      .layer(bakeShade)
      .bind(
        "col" := mirrorPanel,
        "depth" := mirrorPanel.binding(depth = true),
        "invVp" := uInvVp,
      )

    def blurLayer(shade: Shade[BlurU, BlurP], passScale: Double): AnyLayer =
      p.layer(shade)
        .bind(
          "blurStrength" := uBlurStrength,
          "ratioVertical" := uRatioVertical,
          "strengthOffset" := uStrengthOffset,
          "passScale" := passScale,
          "res" := uRes,
          "visHeight" := uVisHeight,
          "samp" := sampler,
        )

    // Cache of H/V pass pairs, flat: pair `k` is at `2k`, `2k+1`, and steps by
    // `scaleFactor^k`. The pair count depends on resolution and on both strength
    // knobs, so the panel's layer list is rebuilt whenever those change — but
    // each pair's bindings (and its literal `passScale`) only depend on `k`, so
    // the layers themselves are built once and reused. Shrinking just takes
    // fewer from the front; growing appends.
    val pairCache = Arr[AnyLayer]()
    var cachedScale = 1.0

    def ensurePairs(n: Int): Unit =
      while pairCache.length < n * 2 do
        pairCache.push(blurLayer(blurShadeH, cachedScale))
        pairCache.push(blurLayer(blurShadeV, cachedScale))
        cachedScale *= scaleFactor

    val blurPanel = p.panel(format = TextureFormat.Rgba16Float)

    // ----- crop the guard band back off ------------------------------------
    // The blur runs on an overscanned panel so that pixels near the frame edge
    // gather real scene content instead of the clamped-to-edge border. This
    // pass resamples the visible sub-rect back out, which keeps `resultPanel`
    // aligned with the consumer's screen uv exactly as it was before overscan
    // existed — consumers need no knowledge that the guard band is there.
    type CropU = (crop: Vec4, samp: Sampler)
    type CropP = (tex: FragmentPanel)
    val cropShade = p.layerShade[CropU, CropP]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.tex.sample(
          ctx.in.uv * ctx.bindings.crop.xy + ctx.bindings.crop.zw,
          ctx.bindings.samp,
        )

    // At `overscan = 0` there is no band to crop, so the pass would be a plain
    // copy — skip it entirely and hand the blur panel out directly.
    val cropPanel: Opt[Panel] =
      if overscan > 0.0 then
        p.panel(
          format = TextureFormat.Rgba16Float,
          layers = Arr(
            p
              .layer(cropShade)
              .bind("tex" := blurPanel, "crop" := uCrop, "samp" := sampler),
          ),
        )
      else null

    new GaussianMirrorReflection:
      val mirrorScenePanel = mirrorPanel
      val resultPanel = cropPanel.getOr(blurPanel)
      // Current strength knobs — together with the visible height below, the
      // three inputs to both the pass budget and the guard-band width. Kept
      // here so any of them changing can re-derive them.
      private var curStrength = blurStrength
      private var curRatio = blurRatioVertical
      // Visible sub-resolution frame, and the NDC scale that widens the
      // reflected frustum to cover the overscanned panel. Both re-derived by
      // `applySizing`.
      private var visW = 0.0
      private var visH = 0.0
      private var frustumScaleX = 1.0
      private var frustumScaleY = 1.0

      /** Re-derive the pass count and hand the panel its layer list. Cheap: the
        * layers are cached, so this only builds an `Arr` of existing references
        * (and constructs pairs the first time a deeper cascade is needed).
        */
      private def rebuildLayers(): Unit =
        if visH > 0.0 then
          val pairs = neededPairs(visH, curStrength, curRatio)
          ensurePairs(pairs)
          val layers = Arr[AnyLayer](bakeLayer)
          var i = 0
          while i < pairs * 2 do
            layers.push(pairCache(i))
            i += 1
          blurPanel.set(layers = layers)

      /** Size the render + blur panels to the visible frame *plus a guard band*
        * wide enough to hold the blur's reach, widen the reflected frustum to
        * match, and re-derive the crop that takes the band back off.
        *
        * The band exists because the blur samples with `ClampToEdge` (WebGPU
        * has no border mode): without it, every tap that falls outside the
        * panel returns the border texel, so the frame edges smear inward — and
        * worse as the radius grows. Rendering a wider frustum fills that
        * margin with real geometry instead.
        *
        * `overscan` σ of margin covers the kernel's reach (3σ ≈ 99.7% of the
        * Gaussian). The half-dimension cap bounds the cost at extreme blur
        * settings — past it the band is partial and some edge bleed returns,
        * which still beats a panel growing without bound.
        *
        * Depends on both strength knobs, so the setters re-run it.
        */
      private def applySizing(): Unit =
        if visH > 0.0 then
          // σ in panel pixels. `curStrength` is a percentage of the visible
          // height (the `0.01`), matching what the blur shade reconstructs
          // from `visHeight`.
          val sigma = curStrength * 0.01 * visH
          val mx = (overscan * sigma).ceil.min(visW * 0.5)
          val my = (overscan * sigma * curRatio.max(1.0)).ceil.min(visH * 0.5)
          val pw = (visW + mx * 2.0).toInt
          val ph = (visH + my * 2.0).toInt
          mirrorPanel.set(width = pw, height = ph)
          blurPanel.set(width = pw, height = ph)
          uRes.set(Vec2(pw.toDouble, ph.toDouble))
          uVisHeight.set(visH)
          // Widening the frustum is a plain NDC scale on the reflected VP —
          // shrinking clip x/y by exactly the panel's growth factor puts the
          // original view back in the centre at unchanged texel density. It
          // leaves z alone, so the bake pass's `invVp` reconstruction stays
          // exact.
          frustumScaleX = visW / pw
          frustumScaleY = visH / ph
          uCrop.set(
            Vec4(frustumScaleX, frustumScaleY, mx / pw, my / ph),
          )
          rebuildLayers()

      // `panel(...)` has no scale option, so the sub-resolution size is wired by
      // hand. Driven by the consumer rather than a `p.onResize` registration of
      // our own, so resize ownership stays in one visible place in the sketch.
      def resize(w: Double, h: Double): Unit =
        val sw = (w * resolutionScale).toInt.max(1)
        val sh = (h * resolutionScale).toInt.max(1)
        visW = sw.toDouble
        visH = sh.toDouble
        // The crop target is the visible frame — the guard band lives only on
        // the panels feeding it.
        if cropPanel.notNull then cropPanel.get.set(width = sw, height = sh)
        applySizing()
      def setBlurStrength(v: Double): Unit =
        uBlurStrength.set(v * strengthScale)
        curStrength = v
        applySizing()
      def setBlurRatioVertical(v: Double): Unit =
        uRatioVertical.set(v)
        curRatio = v
        applySizing()
      def setStrengthOffset(v: Double): Unit = uStrengthOffset.set(v)
      def paint(vp: Maybe[Mat4]): Unit =
        val cameraVP = vp.orElse(
          camera
            .getOr(
              throw jsError(
                "GaussianMirrorReflection.paint needs a camera (construct " +
                  "with `camera = …`) or an explicit `vp` argument",
              ),
            )
            .viewProjMat,
        )
        // Pre-multiply in NDC to widen the frustum onto the overscanned panel
        // (identity when there is no guard band).
        val m = Mat4.fromScale(frustumScaleX, frustumScaleY, 1.0) *
          (cameraVP * reflMat)
        uVp.set(m)
        uInvVp.set(m.inverse)
        if cropPanel.notNull then p.paint(mirrorPanel, blurPanel, cropPanel.get)
        else p.paint(mirrorPanel, blurPanel)
