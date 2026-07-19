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
  * consumers must UV-`sample` it, not `load` it at their own `fragCoord`.
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
    */
  def resultPanel: Panel

  /** Reflect the camera across the mirror plane and render + blur. Pass an
    * explicit `vp` to override the construction-time camera (required if none
    * was given).
    */
  def paint(vp: Maybe[Mat4] = Maybe.Not): Unit

  /** Global multiplier on every pass's step size — how fast blur ramps with
    * distance from the plane. Rescales within the pass budget fixed at
    * construction; pushing far beyond the construction-time `blurStrength` just
    * clips the maximum radius rather than adding passes.
    */
  def setBlurStrength(v: Double): Unit

  /** Vertical:horizontal blur ratio. `1` = isotropic; `>1` makes the vertical
    * blur wider than the horizontal, smearing the reflection away from the
    * plane for a glossy "wet floor" look. Scaled per-pixel by distance, so the
    * contact line stays sharp.
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
    *                                       blurStrength = 62.0)
    * floor.bind("reflTex" := mirror.resultPanel, "reflSamp" := p.samplerLinear)
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
    *   Initial blur-ramp coefficient **and the pass budget**: the number of H/V
    *   pass pairs is derived from it at construction (bigger ⇒ more passes).
    *   Runtime-tunable within that budget via [[setBlurStrength]].
    * @param blurRatioVertical
    *   Initial vertical:horizontal blur ratio (anisotropy). Runtime-tunable via
    *   [[setBlurRatioVertical]].
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
      scaleFactor: Double = 0.5,
      resolutionScale: Double = 0.5,
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

    val reflMat = mirror.reflectionMat
    // Mirror plane baked into the bake shade: distance = n·worldPos - d.
    val pn = mirror.normal
    val pd = mirror.d

    val uVp = p.binding[Mat4]
    val uInvVp = p.binding[Mat4]
    val uBlurStrength = p.binding(blurStrength)
    val uRatioVertical = p.binding(blurRatioVertical)
    val uStrengthOffset = p.binding(strengthOffset)
    // Sub-resolution pixel size of the internal panels — `gaussianBlur9` needs
    // it to turn pixel offsets into uv steps. Kept current by `onResize` below.
    val uRes = p.binding[Vec2]
    val sampler = p.samplerLinear

    // Pass budget: keep halving (by `scaleFactor`) until a pass's step drops
    // below one pixel, since a sub-pixel Gaussian step is a no-op. Capped.
    var passPairs = 1
    var reach =
      blurStrength.max(blurStrength * blurRatioVertical) // * scaleFactor
    while reach > 1.0 do
      reach *= scaleFactor
      passPairs += 1

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
            vec4(ctx.textures.col.load(ivec2(ctx.fragCoord.xy)).xyz, t),
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
          dist := a * ctx.bindings.blurStrength * ctx.bindings.passScale
            + ctx.bindings.strengthOffset,
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
    val blurLayers = Arr[AnyLayer]()
    blurLayers.push(
      p.layer(bakeShade)
        .bind(
          "col" := mirrorPanel,
          "depth" := mirrorPanel.binding(depth = true),
          "invVp" := uInvVp,
        ),
    )

    def blurLayer(shade: Shade[BlurU, BlurP], passScale: Double): AnyLayer =
      p.layer(shade)
        .bind(
          "blurStrength" := uBlurStrength,
          "ratioVertical" := uRatioVertical,
          "strengthOffset" := uStrengthOffset,
          "passScale" := passScale,
          "res" := uRes,
          "samp" := sampler,
        )

    // Large-to-small cascade: pass pair k steps by `scaleFactor^k`.
    var k = 0
    var passScale = 1.0
    while k < passPairs do
      blurLayers.push(blurLayer(blurShadeH, passScale))
      blurLayers.push(blurLayer(blurShadeV, passScale))
      passScale *= scaleFactor
      k += 1

    val blurPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      layers = blurLayers,
    )

    // ----- sub-resolution sizing ------------------------------------------
    // `panel(...)` has no scale option, so wire the size by hand. `onResize`
    // fires immediately on registration, which also sets the initial size.
    p.onResize: (w, h) =>
      val sw = (w * resolutionScale).toInt.max(1)
      val sh = (h * resolutionScale).toInt.max(1)
      mirrorPanel.set(width = sw, height = sh)
      blurPanel.set(width = sw, height = sh)
      uRes.set(Vec2(sw.toDouble, sh.toDouble))

    new GaussianMirrorReflection:
      val mirrorScenePanel = mirrorPanel
      val resultPanel = blurPanel
      def setBlurStrength(v: Double): Unit = uBlurStrength.set(v)
      def setBlurRatioVertical(v: Double): Unit = uRatioVertical.set(v)
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
        val m = cameraVP * reflMat
        uVp.set(m)
        uInvVp.set(m.inverse)
        p.paint(mirrorPanel, blurPanel)
