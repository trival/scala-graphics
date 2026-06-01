# MirrorReflection — reusable blurred mirror floor reflection util

## Context

`sketches/rooms/base/Base.scala` contains a hand-rolled blurred mirror-floor
reflection: a Y-flipped mirror render → a 6-level box-blur mip pyramid →
per-fragment LOD selection in the floor shader (blurrier the further the
reflected surface is above the ground). We want this reflection often in future
sketches, so it should become a shared util living next to `Bloom`
(`src/playground/bloom/Bloom.scala`, package `playground.bloom`).

We just extracted `Bloom` the same way (commit 92ea5ac). The reflection follows
the same trait + factory pattern, but unlike Bloom (which post-processes a
ready-made `scene` panel) the reflection util also **owns the mirror render**:
it takes the shapes to mirror and produces the panels. The name is
`MirrorReflection` because a flat ground is only the default case — an arbitrary
mirror plane may be added later.

Goal: the consuming floor shader shrinks to "sample base mip, drive contribution
by alpha"; all blur tuning lives in the util.

## Design decisions (confirmed with user)

- **Util owns the mirror render.** `apply` takes the shapes to mirror (each
  already bound to its own shade + mirror-MVP binding) and builds the output
  panels. No camera param needed — shapes carry their own MVP binding, which the
  sketch sets to `viewProj * mirrorMat` per frame.
- **Alpha = raw distance from the mirror plane.** The mirrored shapes' shades
  write `rgb = reflected colour`, `alpha = raw distance from mirror plane`
  (world units). The util normalizes via `alphaScale` (the distance that maps to
  alpha 1.0). This replaces today's pre-normalized `worldY/RoomHeight`.
- **Two output panels exposed:**
  1. `blurPanel` — raw box-blur mip pyramid (mip 0 = blit of mirror, mips 1..N =
     progressive downsample). Kept for advanced/raw use.
  2. `resultPanel` — full-res panel from one extra pass that, per texel, picks
     the mip-LOD from the (normalized) alpha and writes the pre-blurred colour +
     preserved normalized alpha. This is the panel sketches normally sample
     (named `resultPanel` to match Bloom's final-output panel).
- **Composition stays in user land.** Floor shader samples `resultPanel` base
  mip and computes its own mix/falloff from alpha and a user-side
  `reflStrength`. Util provides `uvFromClipSpace` to remove the clip→screen-UV
  boilerplate.
- **Blur kernel: keep the 9-tap tent + `res` bindings + `onResize`** (preserves
  current look). The bespoke kernel is promoted into the trivalibs blur lib as a
  reusable **2D single-pass** blur (see prerequisite below) rather than living
  inline in the util. Res-free bilinear downsample noted as future exploration
  only.

## Prerequisite trivalibs change — 2D blur category in `blur.scala`

`trivalibs/src/graphics/shader/lib/blur.scala` currently holds only **separable
1D** blurs (`gaussianBlur5/9/13`, `boxBlur`): a full 2D blur needs two passes
(H `dir=(1,0)` + V `dir=(0,1)`) and they use the linear-sampling trick (adjacent
texel pairs collapse into one bilinear fetch) for a wide blur at a single
resolution. The mirror/bloom pyramid kernel is a different family — a
**non-separable 2D kernel, one pass**, with a tiny footprint per mip level; the
mip chain itself does the spreading (effective radius ≈ doubles per level), so
per-level work is cheap because each level is half-resolution.

Add a new documented section to `object Blur` with two 2D pyramid kernels. The
group comment must spell out the 1D-separable vs 2D-single-pass distinction and
when to use each (separable = wide blur at one resolution; 2D = fill a mip
chain). `radius` is the tap offset in destination-mip texels.

```scala
/** 2D 4-tap box downsample (single pass) — four corners at ±radius, averaged.
  * Classic bloom mip-downsample step. @param radius offset in dst-mip texels. */
val boxBlur2d: WgslFn[
  (tex: Texture2D, s: Sampler, uv: Vec2, res: Vec2, radius: Float), Vec4] =
  WgslFn.raw("box_blur_2d"):
    """  let o = vec2<f32>(radius) / res;
  var color = textureSample(tex, s, uv - o);
  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));
  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));
  color += textureSample(tex, s, uv + o);
  return color * 0.25;"""

/** 2D 9-tap tent / 3×3 binomial blur (single pass). Weights [1 2 1;2 4 2;1 2 1]
  * /16 (center .25, edges .125, corners .0625) on a 3×3 lattice spaced `radius`
  * texels. Softer than boxBlur2d; the per-level downsample of the reflection
  * blur pyramid (and the bloom upsample step). @param radius offset in texels. */
val tentBlur2d: WgslFn[
  (tex: Texture2D, s: Sampler, uv: Vec2, res: Vec2, radius: Float), Vec4] =
  WgslFn.raw("tent_blur_2d"):
    """  let o = vec2<f32>(radius) / res;
  var color = textureSample(tex, s, uv) * 0.25;
  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;
  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;
  return color;"""
```

These reproduce, respectively, Bloom's 4-tap downsample and the mirror's 9-tap
tent (`Base.scala` 369–397, where `o = 2/res` ⇒ `radius = 2.0`). Bloom can be
refactored onto these later (out of scope here). Verified call style: `Blur.*`
takes the panel texture directly as the `Texture2D` arg — e.g.
`Blur.gaussianBlur9(ctx.textures.source, …)` in `examples/blur/Blur.scala:77`.

## Files

### New: `src/playground/mirror/MirrorReflection.scala` (package `playground.mirror`)

Trait + factory mirroring `Bloom`'s shape:

```scala
trait MirrorReflection:
  def mirrorPanel: Panel     // raw Y-flipped scene render (rgb + raw-dist alpha)
  def blurPanel: Panel       // box-blur mip pyramid (raw)
  def resultPanel: Panel     // pre-blurred, alpha-driven LOD resolved (sample this)
  def paint(): Unit
  def setBlurStrength(v: Double): Unit
  def onResize(w: Double, h: Double): Unit

object MirrorReflection:
  // Generic over S <: AnyShape: `Arr` (js.Array) is invariant, so a concrete
  // `Arr[Shape[U,P]]` would not conform to `Arr[AnyShape]`. p.panel is itself
  // `[S <: AnyShape, L <: AnyLayer]`, so S threads straight through.
  def apply[S <: AnyShape](
      p: Painter,
      shapes: Arr[S],            // mirrored shapes; write rgb + raw-dist alpha
      alphaScale: Double,        // distance mapping to normalized alpha 1.0
      blurStrength: Double = 2.0,// how fast blur ramps with distance (log2 coef)
      maxBlur: Double = 5.0,     // max LOD / top mip index (== mipLevels-1)
      mipLevels: Int = 6,        // pyramid depth (matches current sketch)
      clearColor: (Double,Double,Double,Double) = (0.0,0.0,0.0,0.0),
  ): MirrorReflection

  /** Clip-space position → screen UV in [0,1] (Y flipped). DSL expression
    * helper, used in the consuming floor fragment. */
  def uvFromClipSpace(clipPos: Vec4Expr): Vec2Expr =
    val ndc = clipPos.xy / clipPos.w
    ndc * vec2(0.5, -0.5) + vec2(0.5, 0.5)
```

Internals (lift verbatim from `Base.scala` 344–431, generalize the constants):

1. **mirrorPanel** —
   `p.panel(format = Rgba16Float, clearColor, depthTest = true, shapes = shapes)`.
   No multisample (blur masks aliasing; avoids resolve for texture input
   downstream) — same as current.
2. **blurPanel** — `p.panel(format = Rgba16Float, mipLevels, layers = …)`:
   - `blitShade` (layerShade) → mip 0 from mirrorPanel (verbatim, `Base.scala`
     362–367).
   - `downBlurShade` now just calls the lib kernel —
     `Blur.tentBlur2d(ctx.textures.tex, ctx.bindings.samp, ctx.in.uv,
     ctx.bindings.res, 2.0)` (radius 2.0 = old `o = 2/res`). `mipLevels-1`
     downsample layers, each `p.layer(downBlurShade, mipSource = i,
     mipTarget = i+1)` bound to its per-mip `res` binding (loop, cf. 419–425).
   - Per-mip `Vec2` res bindings built in a loop sized to `mipLevels` (replaces
     the hand-listed `mirrorRes…Mip5`, 399–418), stored in
     `Arr[BufferBinding[Vec2, ?]]` like `Bloom`.
3. **resultPanel** — NEW full-res layer pass reading `blurPanel`. **Format
   `Rgba16Float`** (HDR: the ceiling halo strips exceed 1.0 and must survive into
   the floor so they still bloom):
   - `t := (sampleLevel(uv,s,0).w / alphaScale).clamp01` (sharp normalized dist)
   - `lod := (1.0 + t * uBlurStrength * maxBlur).log2.min(maxBlur)` (generalizes
     today's `(1 + a*2*reflMaxLod).log2.min(5)`, `Base.scala` 489–494)
   - `out.color := vec4(sampleLevel(uv,s,lod).xyz, t)` — pre-blurred colour +
     preserved normalized alpha.
   - `alphaScale`/`maxBlur` are compile-time consts in the shade; `blurStrength`
     is a runtime binding (`setBlurStrength`).
4. **onResize** — set each mip res binding to `(w/2^i, h/2^i)` (loop, like
   `Bloom.onResize`).
5. **paint()** — `p.paint(mirrorPanel, blurPanel, resultPanel)`.

**Resolution handling (why `onResize` is kept):** Panels auto-scale to canvas
(painter ResizeObserver) — only the blur's `res` bindings need updating. The
9-tap tent divides by `res` (`2.0 / res`) and the DSL exposes no
`textureDimensions` op (confirmed: nothing in `src/graphics/shader`), so the
resolution must come from bindings → `onResize` is required, exactly like Bloom.
The resolve pass and mirror render need no `res`. Future exploration (out of
scope here): a res-free bilinear box downsample would drop the `res` bindings +
`onResize` entirely; user wants to evaluate that for both this util and Bloom
later.

### Edit: `sketches/rooms/base/Base.scala`

- Import `playground.mirror.{MirrorReflection, given}` (or `.uvFromClipSpace`).
- **mirrorShade** (310–331): change alpha write from
  `(worldY / RoomHeight.toFloat).clamp01` to raw `worldY` (util normalizes).
- **Delete** the hand-built mirror blur block (352–431): `blitShade`,
  `downBlurShade`, the six `mirrorRes*` bindings, `mirrorBlurLayers`,
  `mipResArr`, the while loop, `mirrorBlurPanel`.
- Construct the util after the mirror shapes exist:
  ```scala
  val mirror = MirrorReflection(
    p,
    shapes = Arr(mirrorShape(wallForm, wallTex), mirrorShape(ceilForm, ceilTex)),
    alphaScale = RoomHeight,
    blurStrength = 62.0,   // == old 2 * reflMaxLod(31), preserves current look
    maxBlur = 5.0,
    mipLevels = 6,
  )
  ```
  (Replaces the separate `mirrorPanel` literal at 344–350 too — the util owns
  it.)
- **floorShade** (449–500): drop `reflSamp`/`reflMaxLod` LOD math. Replace the
  `ndc`/`sUv`/`sampleLevel`-twice block with:
  ```scala
  sUv  := uvFromClipSpace(ctx.in.clipPos)
  refl := reflTex.sample(sUv, reflSamp)        // base mip of resultPanel
  // refl.w = normalized distance; falloff + mix unchanged, user-side:
  falloff := (1.0 - refl.w).max(0.1)
  mix     := reflStrength * falloff
  ctx.out.color := vec4(base * (1.0 - mix) + refl.xyz * mix, 1.0)
  ```
  Floor binds `"reflTex" := mirror.resultPanel`. Keep `reflStrength`
  user-side; remove `reflMaxLod`.
- **onResize** (566–574): replace the six `mirrorResMip*.set(...)` lines with
  `mirror.onResize(w, h)`.
- **animate** (581–587): replace
  `p.paint(mirrorPanel, mirrorBlurPanel, scenePanel)` with `mirror.paint()` then
  `p.paint(scenePanel)` (scene reads `mirror.resultPanel` via the floor shape,
  so paint mirror first).

## Verified API facts (resolved during planning)

- **Shapes param is generic** `[S <: AnyShape]` — see signature note above.
  `Shape.bind` returns `this.type`, so `Arr(mirrorShape(...), mirrorShape(...))`
  is `Arr[Shape[MirrorU, MirrorP]]` and conforms to `Arr[S]`. (`AnyShape =
  Shape[?, ?]` in `painter/shape.scala`; `AnyLayer = Layer[?, ?]` in
  `painter/layer.scala`.)
- `Blur.*` WgslFns take the panel texture directly as the `Texture2D` arg
  (confirmed in `examples/blur/Blur.scala`). A plain `2.0` literal is fine for
  the `radius: Float` arg (DSL Double→FloatExpr conversion).
- `.log2` / `.clamp01` / `.min(<double>)` are all already used in the current
  `Base.scala` floor shader, so the resolve-pass expressions compile as written.
- Metals MCP is configured in `.mcp.json` as `graphics-metals` but is **not**
  wired into the agent session — used grep/read of `trivalibs/src` instead.

## Open detail to verify during implementation

- `uvFromClipSpace` returning a composed `Vec2Expr` (no `WgslFn`) should inline
  fine; if the DSL needs a `let`, fall back to a `WgslFn.dsl`. Could later
  migrate to `trivalibs.graphics.shader.lib.coords` if broadly useful.

## Verification

1. `bun run sketch rooms/base` — must compile cleanly (this build includes
   `trivalibs/src`, so it also covers the new `blur.scala` kernels; optionally
   `bun run check` inside `trivalibs/` to type-check the lib in isolation first).
2. `bun run dev`, open `rooms/base`: the blurred floor reflection should look
   identical to before — sharp near the floor, blurrier toward the ceiling, halo
   strips still bloom on the floor. Walk around (WASD + drag) to confirm the
   screen-space lookup tracks correctly and there's no regression in
   alpha-driven blur falloff or reflection strength.
3. Resize the window — reflection stays correct (per-mip res bindings update via
   `mirror.onResize`).
