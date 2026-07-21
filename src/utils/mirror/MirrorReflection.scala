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

/** Blurred planar mirror reflection (e.g. a glossy floor).
  *
  * The given `shapes` are rendered a second time from a camera reflected across
  * a mirror `plane`, into [[mirrorScenePanel]] (mip 0 = the reflected render).
  * A bake pass then reconstructs each fragment's distance from the mirror plane
  * from that render's **depth buffer** (no shade cooperation needed) and writes
  * it into alpha next to the color; an internal mip pyramid (shared `Blur` 2D
  * kernels) blurs color *and* distance together — so the distance-driven
  * falloff softens in lockstep with the color and a blurred silhouette is not
  * re-sharpened at its edge. [[resultPanel]] picks a blur mip per pixel from
  * the distance (further ⇒ blurrier) and writes the pre-blurred color + the
  * (blurred) normalized distance in alpha. A consumer (the floor) samples
  * `resultPanel` and mixes it in.
  *
  * The shapes need **no mirror-specific code**: they read the view-projection
  * from a panel-level uniform named `vpName` (left unbound on the shape), which
  * this util drives — the scene VP in the consumer's normal pass, the reflected
  * VP here. So one shape instance can live in both the scene panel and this
  * mirror panel unchanged. (Reflection flips winding, so shared shapes want
  * `CullMode.None`, or keep distinct cull-mode shapes that share the shade.)
  *
  * Per frame call [[paint]] (after setting the scene VP, before painting the
  * scene that samples `resultPanel`).
  *
  * Construct via `MirrorReflection(...)` — see the companion object / [[apply]]
  * for the constructor parameters.
  */
trait MirrorReflection:
  /** The raw reflected render (sharp, mip 0), with a sampleable depth
    * attachment. `resultPanel` is what consumers normally read; this is exposed
    * for raw/advanced use (e.g. the sharp reflection). The color+distance blur
    * pyramid lives in a separate internal panel.
    */
  def mirrorScenePanel: Panel

  /** Resolved reflection: pre-blurred color (rgb) + blurred normalized distance
    * from the mirror plane (alpha). Sample/​`load` this from the consuming
    * surface.
    */
  def resultPanel: Panel

  /** Reflect the camera across the mirror plane and render + resolve. Pass an
    * explicit `vp` to override the construction-time camera (required if none
    * was given).
    */
  def paint(vp: Maybe[Mat4] = Maybe.Not): Unit

  /** Maximum blur — the Gaussian spread (σ) as a **percentage of canvas
    * height**, reached at `alphaScale` and held beyond it, ramping linearly
    * from sharp at the mirror plane. Being a share of the image rather than a
    * pixel count, it keeps the same perceived blur relative to the objects in
    * the scene on any display; and being σ, the same value gives the same
    * spread in [[sketchlib.utils.mirror.GaussianMirrorReflection]]. `1` is
    * already a strong blur and the useful band is roughly `1`–`5`. Clips at
    * what the pyramid can reach (`2^(mipLevels-1) - 1` pixels of mip radius),
    * so a big enough canvas needs a deeper one.
    */
  def setBlurStrength(v: Double): Unit

  /** Vertical stretch of the reflection (anisotropy), as a **0..1 fraction of
    * the maximum artifact-free stretch**. `0` = isotropic; `1` smears the
    * reflection downward (away from the plane) as far as the blur can hide the
    * gaps between the taps, giving a glossy "wet floor" elongation. The smear
    * is measured against each pixel's own blur radius, so it grows with plane
    * distance for free and the contact line stays sharp. Values above `1` keep
    * working but the four taps start separating into visible ghosts.
    */
  def setStretch(v: Double): Unit

  // temporary debug props
  def blurPanel: Panel

// TODO — dedicated panel-size API (future enhancement)
// ----------------------------------------------------
// The mirror panels currently auto-scale to the canvas. Rendering the mirror at
// a fraction of canvas resolution would cut cost (the reflection is blurred
// anyway). As with `Bloom`, this would add an optional `scale`/`width`,`height`
// on `apply` plus a runtime resize, decoupled from the canvas. The blur is
// already resolution-free (textureDimensions-derived). The catch is the 1:1
// `load(ivec2(fragCoord.xy))` reads: the resolve pass reads the mirror depth at
// its own pixel (assumes resolve target == mirror render size), and consumers
// read `resultPanel` at their own pixel (assumes resultPanel == their target
// size). A sub-resolution mirror would make `resultPanel` smaller than the
// scene, so the floor would need to UV-`sample` it instead of `load`.

/** Factory for [[MirrorReflection]] — the trait carries the full overview, and
  * [[apply]] documents every constructor parameter (surfaced at the call site
  * via "Trigger Parameter Hints" / signature help). Build with
  * `MirrorReflection(...)`.
  */
object MirrorReflection:

  /** Tap spacing at `stretch = 1`, as a multiple of that pixel's own blur
    * radius. The stretch is four taps at `0, s, 2s, 3s`, each read at the
    * pixel's blur LOD — so as long as `s` stays within a couple of radii the
    * footprints overlap and read as one smear. Push past that and they separate
    * into visible ghosts, which is why `stretch` maps `0..1` onto `0..this`.
    */
  private val MaxStretchSpacing = 2.0

  /** Height of `tex`'s mip 0 in pixels. Derived from `textureDimensions` rather
    * than a `res` uniform so the blur and stretch stay resolution-free — same
    * reasoning as `Blur`'s `*Auto` kernels, and it keeps this util free of any
    * resize bookkeeping.
    */
  private val texHeight: WgslFn[(tex: Texture2D), Float] =
    WgslFn.raw("mirror_tex_height"):
      """  return f32(textureDimensions(tex).y);"""

  /** Build a depth-driven blurred planar reflection for `shapes`.
    *
    * Each frame, the shapes are re-rendered from the camera reflected across
    * the mirror `plane`; the result is blurred into a mip pyramid, and a
    * resolve pass reconstructs every reflected fragment's distance from the
    * plane (from the render's depth buffer) to pick a per-pixel blur LOD. The
    * consumer then samples [[resultPanel]] (rgb = pre-blurred reflection, alpha =
    * normalized distance) and mixes it in.
    *
    * The shapes need no mirror-specific code — they read their view-projection
    * from a panel-level uniform named `vpName` (left unbound on the shape)
    * which this util drives. So the *same* shape instances can live in the
    * consumer's scene panel (reading the scene VP) and here (reading the
    * reflected VP). Because a reflection flips winding, shared shapes should
    * use `CullMode.None` (or keep distinct cull-mode shapes that share the
    * shade).
    *
    * Typical wiring (ground-plane floor reflection):
    * {{{
    * val sceneVp = p.binding[Mat4]
    * scenePanel.bind("vp" := sceneVp)          // shapes read "vp" panel-level
    * val mirror = MirrorReflection(p, Arr(wall, ceil), vpName = "vp",
    *                               alphaScale = RoomHeight, blurStrength = 2.0)
    * floor.bind("reflTex" := mirror.resultPanel)
    * animate: _ =>
    *   val vp = cam.viewProjMat
    *   sceneVp.set(vp)
    *   mirror.paint(vp)        // or construct with `camera = cam` and call paint()
    *   p.paint(scenePanel)
    * }}}
    *
    * No resize handling is needed — panels auto-scale to the canvas and the
    * blur is resolution-free.
    *
    * Generic over `S <: AnyShape` because `Arr` is invariant — a concrete
    * `Arr[Shape[U, P]]` would not conform to `Arr[AnyShape]`, so `S` threads
    * the concrete shape type straight through.
    *
    * @param p
    *   The painter that owns the GPU device and frame loop.
    * @param shapes
    *   The shapes to reflect. Their shade produces color only (distance comes
    *   from depth, not a shade-written value) and reads its view-projection
    *   from the panel-level `vpName` uniform — leave that uniform **unbound**
    *   on the shape so each panel can supply its own.
    * @param vpName
    *   The shade's view-projection uniform field name. The util writes the
    *   reflected `cameraVP × reflectionMat` into it on [[mirrorScenePanel]]
    *   each `paint`; the consumer's scene panel supplies the un-reflected VP.
    * @param alphaScale
    *   The plane-distance (world units) that maps to normalized alpha `1.0` —
    *   the distance at which the reflection reaches full blur / falloff. For a
    *   room floor, the room height works well.
    * @param camera
    *   Optional viewpoint source: when set, [[paint]] with no argument pulls
    *   `camera.viewProjMat`. When `null` (default), every [[paint]] call must
    *   be given an explicit `vp`.
    * @param mirror
    *   The mirror plane (CPU-only `Plane`; default the ground plane `y = 0`).
    *   The util derives the reflection matrix from it and bakes its
    *   `normal`/`d` into the resolve shade's distance, so any plane works.
    * @param blurStrength
    *   Initial maximum blur, as the Gaussian spread (σ) in **percent of canvas
    *   height** — useful band roughly `1`–`5`. It ramps linearly from sharp at
    *   the mirror plane to `blurStrength%` at `alphaScale`, then stays flat —
    *   so this sets *how blurry* the far end gets while `alphaScale` sets
    *   *where* it gets there. Relative to the image rather than in pixels, so
    *   the perceived blur holds constant against object size across resolutions
    *   and device pixel ratios; and denominated in σ, so the same value means
    *   the same spread in [[GaussianMirrorReflection]]. Clips at the pyramid's
    *   reach, `2^(mipLevels-1) - 1` pixels of mip radius, which is what
    *   `mipLevels` must be sized for. Runtime-tunable via [[setBlurStrength]].
    * @param stretch
    *   Initial vertical stretch (anisotropy), as a **0..1 fraction of the
    *   maximum artifact-free stretch** — `0` is isotropic, `1` is as far as the
    *   blur can smear without the taps separating into ghosts. Resolution- and
    *   scene-scale-independent: the smear is measured against each pixel's own
    *   blur radius, so it also ramps with plane distance for free and the
    *   contact line stays sharp. Runtime-tunable via [[setStretch]].
    * @param mipLevels
    *   Blur-pyramid depth (must be `>= 2`); it caps the blur radius at
    *   `2^(mipLevels-1) - 1` pixels. Since `blurStrength` is relative to canvas
    *   height, size this for the *largest* canvas you target — each level
    *   doubles the reach, so 6 levels (31px) suit ~1080p at `blurStrength =
    *   2` and 4K wants 7. Construction logs a warning if the current canvas
    *   already exceeds it.
    * @param clearColor
    *   RGBA the mirror render clears to where no shape draws (matters only if
    *   the reflected view has gaps; default transparent black).
    * @return
    *   a [[MirrorReflection]] exposing `resultPanel` (sample this) and
    *   `mirrorScenePanel` (raw), plus `paint` / `setBlurStrength`.
    * @throws scala.scalajs.js.JavaScriptException
    *   if `mipLevels < 2`.
    */
  def apply[S <: AnyShape](
      p: Painter,
      shapes: Arr[S],
      vpName: String,
      alphaScale: Double,
      camera: Opt[PerspectiveCamera] = null,
      mirror: Plane = Plane.ground,
      blurStrength: Double = 2.0,
      stretch: Double = 0.0,
      mipLevels: Int = 6,
      clearColor: (Double, Double, Double, Double) = (0.0, 0.0, 0.0, 0.0),
  ): MirrorReflection =
    if mipLevels < 2 then
      throw jsError(s"MirrorReflection mipLevels must be >= 2 (got $mipLevels)")

    val reflMat = mirror.reflectionMat
    // Max blur radius the pyramid can reach, in mip-0 pixels: each mip level
    // doubles it, and the top level is `mipLevels - 1`. The resolve ramps the
    // radius from 1 at the plane to `blurStrength × canvasHeight` at
    // `alphaScale`; beyond `maxRadius` it clips, saturating the blur *before*
    // `alphaScale`. Since the requested radius now scales with resolution, the
    // pyramid has to be deep enough for the largest canvas in play — warn if the
    // current one already outruns it (each extra mip level doubles the reach).
    val maxRadius = (mipLevels - 1).toDouble.exp2 - 1.0
    // `blurStrength` is the *perceived* blur (σ) as a percentage of canvas
    // height; the shade wants a nominal mip radius. The tent chain blurs wider
    // than the radius it is asked for — each `tentBlur2dAuto` step taps ±4
    // source texels, so the levels accumulate to roughly 1.6× the nominal radius
    // — hence the divide. With it, `blurStrength` denotes the same physical
    // spread here as in `GaussianMirrorReflection`, so the two are swappable at
    // equal values. Percent keeps the useful band at readable 1..5.
    val TentChainGain = 1.6
    val strengthScale = 0.01 / TentChainGain
    if blurStrength * strengthScale * p.height > maxRadius then
      log(
        s"MirrorReflection: blurStrength $blurStrength% of height ${p.height} " +
          s"needs a ${(blurStrength * strengthScale * p.height).round} px mip " +
          s"radius, beyond the reach of $mipLevels mip levels ($maxRadius px) " +
          s"— the blur will saturate before alphaScale. Raise mipLevels.",
      )
    // Mirror plane baked into the resolve shade: distance = n·worldPos - d.
    val pn = mirror.normal
    val pd = mirror.d

    val uVp = p.binding[Mat4]
    val uInvVp = p.binding[Mat4]
    val uBlurStrength = p.binding(blurStrength * strengthScale)
    val uStretch = p.binding(stretch)
    // Trilinear (mipmapFilter = Linear) so the resolve's fractional-LOD color
    // sample interpolates smoothly across the blur pyramid.
    val sampler = p.samplerLinear

    // ----- mirror render (mip 0, no pyramid) ------------------------------
    // Always non-MSAA: the reflection is blurred (AA moot). The shapes write
    // color only; the plane-distance lands in alpha during the bake below, so
    // they stay mirror-agnostic.
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

    // ----- bake distance into alpha, then blur color + distance together --
    // The reflection is blurred, but the plane-distance falloff that gates it
    // (consumer: `mix ∝ 1 - alpha`) must blur *with* the color — otherwise a
    // blurred silhouette gets re-sharpened by a crisp falloff mask at its edge.
    // So mip 0 of the blur pyramid reconstructs each fragment's distance from
    // the depth buffer and writes it to alpha alongside the color; the same
    // tent pyramid then blurs both. The resolve reads a *blurred* distance.
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
          // Depth at this pixel (1:1 point read), then reconstruct the original
          // world position via the inverse reflected view-projection.
          d := ctx.textures.depth.load(ivec2(ctx.fragCoord.xy)),
          ndc := vec3(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d),
          worldH := ctx.bindings.invVp * vec4(ndc, 1.0),
          worldPos := worldH.xyz / worldH.w,
          // Signed distance from the (baked) mirror plane, normalized.
          t := ((vec3(pn.x, pn.y, pn.z)
            .dot(worldPos) - pd) / alphaScale).clamp01,
          ctx.out.color :=
            vec4(ctx.textures.col.load(ivec2(ctx.fragCoord.xy)).xyz, t),
          // vec4(vec3(t), 1),
          // vec4(vec3((1.0 - d) * 10), 1),
        )

    type DownU = (samp: Sampler)
    type DownP = (tex: FragmentPanel)
    val downBlurShade = p.layerShade[DownU, DownP]: program =>
      program.frag: ctx =>
        ctx.out.color := Blur.tentBlur2dAuto(
          ctx.textures.tex,
          ctx.bindings.samp,
          ctx.in.uv,
          4.0,
        )

    // mip 0 = bake (color + distance); mips 1.. = tent downsamples of both.
    val blurLayers = Arr[AnyLayer]()
    blurLayers.push(
      p.layer(bakeShade)
        .bind(
          "col" := mirrorPanel,
          "depth" := mirrorPanel.binding(depth = true),
          "invVp" := uInvVp,
        ),
    )
    var mi = 0
    while mi < mipLevels - 1 do
      blurLayers.push(
        p.layer(downBlurShade, mipSource = mi, mipTarget = mi + 1)
          .bind("samp" := sampler),
      )
      mi += 1

    val _blurPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      mipLevels = mipLevels,
      layers = blurLayers,
    )

    // ----- resolve: distance → blur LOD, sample blurred color + distance --
    type ResolveU = (blurStrength: Float, stretch: Float, samp: Sampler)
    type ResolveP = (col: FragmentPanel)
    val resolveShade = p.layerShade[ResolveU, ResolveP]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val t = LetFloat("t")
        val h = LetFloat("h")
        val radius = LetFloat("radius")
        val lod = LetFloat("lod")
        val s = LetFloat("s")
        Block(
          h := texHeight(ctx.textures.col),
          // Sharp (mip-0) distance at this pixel drives the LOD; the color and
          // the falloff distance are then both read pre-blurred at that LOD, so
          // the falloff edge softens in lockstep with the color.
          t := ctx.textures.col.load(ivec2(ctx.fragCoord.xy)).a,
          // Blur radius ramps linearly with distance — 1 pixel at the plane,
          // `blurStrength × height` at `alphaScale` (where `t` clamps) and flat
          // beyond. `blurStrength` is a *fraction of canvas height*, so the blur
          // covers the same share of the image — and so of any object in it — at
          // every resolution. `.log2` converts the radius into a mip LOD; the
          // clamp catches a resolution whose radius outruns the pyramid (see the
          // construction-time warning).
          radius := (1.0 + t * ctx.bindings.blurStrength * h).min(maxRadius),
          lod := radius.log2,
          // Vertical stretch (anisotropy): a few extra taps that smear the
          // reflection away from the plane. The spacing is measured in *this
          // pixel's blur
          // radius*, so `stretch` is a plain 0..1 dial: the taps always stay in
          // the same proportion to the blur that hides the seams between them,
          // and the ramp with distance comes for free (radius is 1 texel at the
          // contact line, so `t≈0` stays sharp whatever `stretch` is).
          s := ctx.bindings.stretch * MaxStretchSpacing * radius / h,
          // Gather *upward* (−v, toward the plane) so the content smears
          // *downward*, away from it: a pixel takes color from what sits above
          // it, which is what drags the reflection down into its own tail. The
          // taps and the visible smear point in opposite directions — sampling
          // +v here would bleed the reflection up into the empty background
          // above it instead.
          ctx.out.color :=
            ctx.textures.col.sampleLevel(uv, ctx.bindings.samp, lod) * 0.4
              + ctx.textures.col
                .sampleLevel(uv - vec2(0.0, s), ctx.bindings.samp, lod) * 0.3
              + ctx.textures.col
                .sampleLevel(
                  uv - vec2(0.0, s * 2.0),
                  ctx.bindings.samp,
                  lod,
                ) * 0.2
              + ctx.textures.col
                .sampleLevel(
                  uv - vec2(0.0, s * 3.0),
                  ctx.bindings.samp,
                  lod,
                ) * 0.1,
        )

    val resolvePanel = p.panel(
      format = TextureFormat.Rgba16Float,
      layers = Arr(
        p.layer(resolveShade)
          .bind(
            "col" := _blurPanel,
            "blurStrength" := uBlurStrength,
            "stretch" := uStretch,
            "samp" := sampler,
          ),
      ),
    )

    new MirrorReflection:
      val mirrorScenePanel = mirrorPanel
      val resultPanel = resolvePanel
      def setBlurStrength(v: Double): Unit =
        uBlurStrength.set(v * strengthScale)
      def setStretch(v: Double): Unit = uStretch.set(v)
      def paint(vp: Maybe[Mat4]): Unit =
        val cameraVP = vp.orElse(
          camera
            .getOr(
              throw jsError(
                "MirrorReflection.paint needs a camera (construct with " +
                  "`camera = …`) or an explicit `vp` argument",
              ),
            )
            .viewProjMat,
        )
        val m = cameraVP * reflMat
        uVp.set(m)
        uInvVp.set(m.inverse)
        p.paint(mirrorPanel, _blurPanel, resolvePanel)

      def blurPanel: Panel = _blurPanel
