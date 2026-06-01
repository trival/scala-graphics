# MirrorReflection — reusable blurred mirror floor reflection util

## Context

`sketches/rooms/base/Base.scala` contains a hand-rolled blurred mirror-floor
reflection: a Y-flipped mirror render → a 6-level box-blur mip pyramid →
per-fragment LOD selection in the floor shader (blurrier the further the
reflected surface is above the ground). We want this reflection often in future
sketches, so it should become a shared util living next to `Bloom`
(`src/playground/bloom/Bloom.scala`, package `playground.bloom`).

We just extracted `Bloom` the same way (commit 92ea5ac). The reflection follows
the same trait + factory pattern. Like Bloom it owns its result + intermediate
panels; the difference is only the **render input**. Bloom's first panel is a
ready-made `scene` panel handed in. MirrorReflection's `blurPanel` renders the
mirror shapes itself (mip 0 is a _scene render of the mirror shapes_; the higher
mips blur it), so on top of owning the panels the util also **drives the mirror
view-projection** each frame: it reflects the camera's view-projection across
the mirror plane and feeds it to that render. The name is `MirrorReflection`
because a flat ground is only the default case — the mirror plane is a parameter
(`mirrorMat`), so an arbitrary plane works too.

Goal: the consuming floor shader shrinks to "sample base mip, drive contribution
by alpha"; all blur tuning lives in the util.

## Design decisions (confirmed with user)

- **Util owns the mirror render + the mirrored view-projection.** `apply` takes
  the shapes to mirror and builds the output panels. The uniform contract splits
  the classic MVP: the per-shape **model** (`m`) stays the shape's business
  (set, with all its other bindings, before being handed in), but the shared
  **view-projection** (`vp`) — one viewpoint for the whole render — is owned and
  driven by the util.
  - The shapes' shade reads `vp` from a **panel-level** uniform (set on
    `blurPanel` via `panel.bind`, shared by all its shapes). Panel bindings are
    string-keyed/untyped (unlike shape bindings, which infer from the shade), so
    the factory takes the uniform's **name** (`vpName`) to know where to write.
  - The util holds its own `BufferBinding[Mat4, ?]` for `vp`, binds it on
    `blurPanel` under `vpName`, and each `paint` writes `cameraVP * mirrorMat`
    into it (mirror applied in world space, matching today's
    `cam.viewProjMat * mirrorMat`).
  - **Viewpoint source:** pass a `PerspectiveCamera` at construction (the util
    pulls `camera.viewProjMat` each `paint`) and/or a raw `vp: Mat4` to `paint`
    that overrides it. The raw arg is required when no camera is supplied (e.g.
    no camera object is queryable). `PerspectiveCamera` is concrete for now; a
    generic camera trait can replace it later.
  - `mirrorMat` defaults to the ground Y-flip (`Mat4.fromScale(1, -1, 1)`).
  - **Why panel-level vp (not per-shape mvp): shape reuse across passes.**
    Because `vp` is a panel binding, the painter fills it per-render from
    whichever panel is drawing the shape — a shape that doesn't bind `vp` itself
    inherits the scene panel's vp in the normal pass and the mirror panel's
    (reflected) vp in the mirror pass (`applyPanelRuntimeBindings`,
    `painter.scala` 1323–1351: panel bindings only fill slots the shape left
    null). So the *same* shape instance can sit in both panels with no per-frame
    juggling — `m` is identical in both, reflection lives entirely in the util's
    panel vp. The old per-shape-`mvp` model couldn't do this: it forced either a
    second `mirrorMvp` binding + duplicate shapes (what `Base.scala` does), or a
    set→render→reset→render dance every frame.
  - **Closing the "needs a distinct mirror shade" caveat — `extraBindings`.**
    The room's mirror pass differs from the normal pass only by writing
    `alpha = distance` (for the blur LOD). Rather than a separate shade, write
    *one* shade that gates this on a `mirrorMode` flag uniform: `mirrorMode == 1`
    ⇒ `alpha = worldY`, else `alpha = 1`. The flag is a **panel-level** uniform,
    so the same shape — binding neither `vp` nor `mirrorMode` — reads `0` from the
    scene panel and `1` from the mirror panel. To let the util supply such
    per-mirror-render uniforms, `apply` takes `extraBindings` (name → value/binding
    pairs) and writes them onto `blurPanel` alongside `vp`. **Override direction
    matters:** panel bindings only fill slots the shape left null, so a
    per-panel-varying uniform must be unbound on the shape and supplied by *both*
    panels (scene panel sets `mirrorMode = 0`, util sets `1`); a shape-level
    default would *block* the override.
  - **Residual non-uniform difference — cull winding.** A reflection has negative
    determinant, so it flips triangle winding: the normal shapes cull
    `CullMode.Front`, the mirror needs `CullMode.Back` (`Base.scala` 510 vs 337).
    `cullMode` is baked into the shape's pipeline (not a uniform), so one shape
    can't cull both ways. True single-shape reuse therefore also needs the shared
    shapes on `CullMode.None` (draw both faces, depth resolves — minor overdraw).
    If a sketch keeps distinct cull modes it keeps distinct shapes regardless of
    the flag — but they can still share the *shade*. **The room sketch goes for
    full reuse** (`CullMode.None` on the shared walls/ceiling) to exercise and
    verify the whole contract — see the Base.scala migration below.
- **Alpha = raw distance from the mirror plane.** The mirrored shapes' shades
  write `rgb = reflected colour`, `alpha = raw distance from mirror plane`
  (world units). The util normalizes via `alphaScale` (the distance that maps to
  alpha 1.0). This replaces today's pre-normalized `worldY/RoomHeight`.
- **Mirror render and blur pyramid share one panel.** The panel renders its
  shapes into mip 0 _first_ (depth + clearColor), then runs its layers — so the
  mirror shapes draw straight into `blurPanel` mip 0 and the downsample layers
  build mips 1..N. This drops both the separate `mirrorPanel` _and_ the old
  `blitShade` mip-0 copy (mip 0 was only ever a blit of the mirror render) — one
  fewer panel and one fewer fullscreen pass per frame. Verified safe: layers run
  "no depth, no msaa" so depth only affects the shape pass; mip-target layers
  already gate off auto-mipgen; `multisample = false` keeps mip 0 directly
  sampleable.
- **Two output panels exposed:**
  1. `blurPanel` — the shared mirror-render + box-blur mip pyramid (mip 0 = raw
     mirror render, mips 1..N = progressive downsample). The raw sharp
     reflection is `blurPanel.binding(mipLevel = 0)` for advanced/raw use.
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
1D** blurs (`gaussianBlur5/9/13`, `boxBlur`): a full 2D blur needs two passes (H
`dir=(1,0)` + V `dir=(0,1)`) and they use the linear-sampling trick (adjacent
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
  def blurPanel: Panel       // mip pyramid: mip 0 = raw mirror render, mips 1..N = box-blur
  def resultPanel: Panel     // pre-blurred, alpha-driven LOD resolved (sample this)
  def paint(vp: Maybe[Mat4] = Maybe.Not): Unit  // raw vp overrides the camera
  def setBlurStrength(v: Double): Unit
  def onResize(w: Double, h: Double): Unit

object MirrorReflection:
  // Generic over S <: AnyShape: `Arr` (js.Array) is invariant, so a concrete
  // `Arr[Shape[U,P]]` would not conform to `Arr[AnyShape]`. p.panel is itself
  // `[S <: AnyShape, L <: AnyLayer]`, so S threads straight through.
  def apply[S <: AnyShape](
      p: Painter,
      shapes: Arr[S],            // mirrored shapes; write rgb + raw-dist alpha
      vpName: String,            // panel-uniform name the util writes the
                                 //   mirrored view-projection into (shapes read it)
      alphaScale: Double,        // distance mapping to normalized alpha 1.0
      camera: Opt[PerspectiveCamera] = null, // viewpoint source; null ⇒ paint(vp) required
      mirrorMat: Mat4 = Mat4.fromScale(Vec3(1.0, -1.0, 1.0)), // reflection plane; default = ground Y-flip
      extraBindings: Arr[(String, PanelBindingValue)] = Arr(), // extra panel-level uniforms for the mirror render (e.g. a "mirrorMode" flag); name → BufferBinding/Sampler/Panel
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

1. **vp binding** — `val vp = p.binding[Mat4]`, owned by the util, bound on
   `blurPanel` by name (panel-level, shared by all the panel's shapes).
   `panel.bind` can't be used: its `BindPair[N <: String & Singleton, V]`
   requires a _literal_ name, but `vpName` is a runtime `String`. Instead set
   the panel's public `runtimeBindings` Dict directly:
   `blurPanel.runtimeBindings.set(vpName, vp)`. (Same effect `.bind` has — it
   ultimately writes `runtimeBindings` — just with a dynamic key. No library
   change needed; a typed `panel.bindDynamic(name, value)` helper would be a
   nice future tidy-up.) Each `extraBindings` pair is written the same way —
   `blurPanel.runtimeBindings.set(name, value)` — so mirror-only uniforms (e.g.
   `mirrorMode = 1`) ride along on the same panel as `vp`.
2. **blurPanel** (mirror render + blur pyramid, one panel) —
   `p.panel(format = Rgba16Float, clearColor, depthTest = true, mipLevels, shapes = shapes, layers = downsampleLayers)`,
   then set the `vp` binding (1). No multisample (blur masks aliasing; keeps mip
   0 directly sampleable). The shape pass fills mip 0 (the old `mirrorPanel`
   render); **no `blitShade`** — mip 0 _is_ the mirror render, not a copy.
   - `downBlurShade` just calls the lib kernel —
     `Blur.tentBlur2d(ctx.textures.tex, ctx.bindings.samp, ctx.in.uv, ctx.bindings.res, 2.0)`
     (radius 2.0 = old `o = 2/res`). `mipLevels-1` downsample layers, each
     `p.layer(downBlurShade, mipSource = i, mipTarget = i+1)` for `i` in
     `0 .. mipLevels-2`, bound to its per-mip `res` binding (loop, cf. 419–425).
     Note mip0→mip1 now downsamples the _shape render_ directly (previously the
     blit output — identical pixels).
   - Per-mip `Vec2` res bindings built in a loop sized to `mipLevels` (replaces
     the hand-listed `mirrorRes…Mip5`, 399–418), stored in
     `Arr[BufferBinding[Vec2, ?]]` like `Bloom`.
3. **resultPanel** — NEW full-res layer pass reading `blurPanel`. **Format
   `Rgba16Float`** (HDR: the ceiling halo strips exceed 1.0 and must survive
   into the floor so they still bloom):
   - `t := (sampleLevel(uv,s,0).w / alphaScale).clamp01` (sharp normalized dist)
   - `lod := (1.0 + t * uBlurStrength * maxBlur).log2.min(maxBlur)` (generalizes
     today's `(1 + a*2*reflMaxLod).log2.min(5)`, `Base.scala` 489–494)
   - `out.color := vec4(sampleLevel(uv,s,lod).xyz, t)` — pre-blurred colour +
     preserved normalized alpha.
   - `alphaScale`/`maxBlur` are compile-time consts in the shade; `blurStrength`
     is a runtime binding (`setBlurStrength`).
4. **onResize** — set each mip res binding to `(w/2^i, h/2^i)` (loop, like
   `Bloom.onResize`).
5. **paint(vp)** — resolve the view-projection: use the raw `vp` arg if given,
   else `camera.viewProjMat`, else error (no viewpoint). Write
   `vp.set(resolvedVP * mirrorMat)` into the owned binding, then
   `p.paint(blurPanel, resultPanel)` (two panels — mirror render is mip 0 of
   `blurPanel`).

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

This is the **full-reuse** migration: the walls + ceiling become *one shared
shape set* that lives in both the scene panel and the mirror panel, driven by
panel-level `vp` + `mirrorMode`. It exercises every part of the util and the
uniform contract.

**1. Merge `roomShade` + `mirrorShade` into one `wallShade`.** Today (281–292 and
310–331) they differ only by (a) the alpha write and (b) the `worldY` varying.
Unify:
- Uniforms `(samp: FragmentUniform[Sampler], vp: VertexUniform[Mat4],
  mirrorMode: VertexUniform[Float])` — **`vp` and `mirrorMode` are panel-level,
  read but never bound on the shape.** Room geometry is world-space (today's
  `mvp` carries no model term), so the vert is
  `ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0)` plus
  `ctx.out.worldY := ctx.in.position.y`.
- Varyings `(uv: Vec2, worldY: Float)`.
- Frag: same V-flipped tex lookup; alpha selects on the flag —
  `vec4(c.xyz, mix(1.0, ctx.in.worldY, mirrorMode))` (raw `worldY`; the util
  normalizes via `alphaScale`). `mirrorMode = 0` ⇒ opaque scene fragment,
  `= 1` ⇒ raw-distance alpha for the blur LOD.
- Delete the old `mvp` and `mirrorMvp` bindings (294, 333) and the standalone
  `mirrorShade`/`mirrorShape` (310–338).

**2. One shared wall/ceiling shape set, `CullMode.None`.** The reflection flips
winding, so the shared shapes can't keep `CullMode.Front`; use `None` (both
faces, depth resolves — minor overdraw, visually identical from inside the room):
```scala
def wallShape(form: Form, tex: Panel) =
  p.shape(form, wallShade, cullMode = CullMode.None)
    .bind("samp" := texSampler, "tex" := tex)   // NOT vp, NOT mirrorMode
val ceilShape = wallShape(ceilForm, ceilTex)
val wallShapeW = wallShape(wallForm, wallTex)
```
These two instances go into **both** panels.

**3. Scene panel supplies `vp` + `mirrorMode = 0`.** Replace the per-shape `mvp`
with a panel-level `vp` (literal names here, so the typed `.bind` sugar works):
```scala
val vp = p.binding[Mat4]                       // scene view-projection
scenePanel.bind("vp" := vp, "mirrorMode" := 0.0)
```
(`scenePanel` still lists `Arr(floorShape, wallShapeW, ceilShape)`. The floor
keeps its own `floorShade` — scene-only, never mirrored — but also reads `vp`
from the panel: rename its `mvp` uniform to `vp` and stop binding it. `mirrorMode`
on the panel is ignored by `floorShade`, which has no such uniform.)

**4. Delete the hand-built mirror blur block** (344–431): the `mirrorPanel`
literal, `blitShade`, `downBlurShade`, the six `mirrorRes*` bindings,
`mirrorBlurLayers`, `mipResArr`, the while loop, `mirrorBlurPanel`, and the
`mirrorMat` val (579). The util owns all of these.

**5. Construct the util** with the shared shapes + the `mirrorMode = 1` flag:
```scala
val mirror = MirrorReflection(
  p,
  shapes = Arr(wallShapeW, ceilShape),  // same instances as in scenePanel
  vpName = "vp",
  alphaScale = RoomHeight,
  camera = cam,                          // util pulls cam.viewProjMat each paint
  extraBindings = Arr("mirrorMode" -> p.binding(1.0)),
  blurStrength = 62.0,  // == old 2 * reflMaxLod(31), preserves current look
  maxBlur = 5.0,
  mipLevels = 6,
)
```
(`mirrorMat` left at its ground-Y-flip default. The util writes `vp` =
`cam.viewProjMat * mirrorMat` and `mirrorMode = 1` onto `blurPanel`; the scene
panel's `vp`/`mirrorMode = 0` drive the same shapes in the scene pass.)

**6. floorShade** (449–500): drop `reflSamp`/`reflMaxLod` LOD math. Replace the
`ndc`/`sUv`/`sampleLevel`-twice block with:
```scala
sUv  := uvFromClipSpace(ctx.in.clipPos)
refl := reflTex.sample(sUv, reflSamp)        // base mip of resultPanel
// refl.w = normalized distance; falloff + mix unchanged, user-side:
falloff := (1.0 - refl.w).max(0.1)
mix     := reflStrength * falloff
ctx.out.color := vec4(base * (1.0 - mix) + refl.xyz * mix, 1.0)
```
Floor binds `"reflTex" := mirror.resultPanel`. Keep `reflStrength` user-side;
remove `reflMaxLod`.

**7. onResize** (566–574): replace the six `mirrorResMip*.set(...)` lines with
`mirror.onResize(w, h)`.

**8. animate** (581–587): drop `mirrorMvp.set(...)`. Set the scene `vp` once
(`vp.set(cam.viewProjMat)` — replaces `mvp.set(...)`). Replace
`p.paint(mirrorPanel, mirrorBlurPanel, scenePanel)` with `mirror.paint()` then
`p.paint(scenePanel)` — paint mirror first (scene's floor samples
`mirror.resultPanel`). The util reflects `cam.viewProjMat` internally.

**Reuse check (what full use proves):** `wallShapeW`/`ceilShape` are single
instances in two panels; neither binds `vp` or `mirrorMode`. The scene pass fills
them from `scenePanel` (`vp = cam.viewProjMat`, `mirrorMode = 0`), the mirror pass
from `blurPanel` (`vp = cam.viewProjMat * mirrorMat`, `mirrorMode = 1`) — no
per-frame rebinding, no duplicate shapes/shades. This is exactly the
shape-reuse-across-passes the panel-level-`vp` contract was designed for.

## Verified API facts (resolved during planning)

- **Shapes param is generic** `[S <: AnyShape]` — see signature note above.
  `Shape.bind` returns `this.type`, so `Arr(wallShape(...), wallShape(...))`
  is `Arr[Shape[WallU, WallP]]` and conforms to `Arr[S]`.
  (`AnyShape = Shape[?, ?]` in `painter/shape.scala`; `AnyLayer = Layer[?, ?]`
  in `painter/layer.scala`.)
- **Panel-level bindings exist and are name-keyed.** `panel.bind("name" := v)`
  (panel.scala 212–217) supplies a uniform shared by all the panel's shapes,
  stored in the public `runtimeBindings: Dict` (48). The shapes' shade reads it
  like any uniform. `bind`'s `BindPair[N <: String & Singleton, V]` needs a
  _literal_ name, so for the runtime `vpName` the util writes
  `blurPanel.runtimeBindings.set(vpName, vp)` directly instead.
- `PerspectiveCamera.viewProjMat` (scene/camera.scala:73,
  `projectionMat * viewMat`) is the matrix the util reflects each frame — same
  value the sketch fed `mirrorMvp` before.
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
- **`extraBindings` value type.** `PanelBindingValue` is
  `BufferBinding | GPUSampler | Panel | PanelBinding` — *not* raw scalars, so the
  flag is passed as `p.binding(1.0)`, not `1.0`. (Raw values only auto-box inside
  `panel.bind`'s inline `processPanelEntry`; the util's direct
  `runtimeBindings.set` doesn't.) Confirm `p.binding(1.0): BufferBinding[Float,?]`
  conforms. See [Future work] — we want `"mirrorMode" := 1.0` here eventually.
- **`mirrorMode` selects in the vert vs frag.** The flag is a `VertexUniform` but
  `worldY` is a varying used in the frag; confirm reading `mirrorMode` in the frag
  is allowed, else make it a `FragmentUniform` (or duplicate). `mix(1.0, worldY,
  flag)` over a 0/1 float is exact; `select` is the alternative.
- **`CullMode.None` on shared walls/ceiling** must look identical to today's
  `Front` from inside the room (depth resolves the extra back faces). Watch for
  z-fighting / visible far-side faces; if any, the fallback is to keep distinct
  shapes per pass (sharing only the shade) — see the cull caveat in design
  decisions.

## Future work

- **Unify `extraBindings` with the `:=` bind API.** Goal: write
  `extraBindings = Arr("mirrorMode" := 1.0)` — same `name := value` syntax and
  raw-value auto-boxing as `shape.bind` / `panel.bind`, so there is *one* binding
  concept across shapes, panels, and the util. Blocked today by two things: (a)
  `BindPair[N <: String & Singleton, V]` needs a literal name, and (b) raw-scalar
  auto-boxing lives in `panel.bind`'s inline `processPanelEntry`, not on the
  dynamic-name path. The likely fix is the **`panel.bindDynamic(name, value)`**
  helper noted in internals step 1 (a runtime-name sibling of `bind` that reuses
  the same boxing), and having the util route `extraBindings` + `vpName` through
  it. Until then the util takes pre-built `PanelBindingValue`s
  (`p.binding(1.0)`).
- **Allow a non-literal binding name in `bind` itself (at least `panel.bind`).**
  Rather than a separate `bindDynamic`, explore relaxing `bind` to accept a
  runtime `String` name — e.g. a sibling overload where `N` is plain `String`
  (no `& Singleton`) for the panel case, since panel bindings are name-keyed at
  runtime anyway and don't need the literal type for shade-side inference. That
  would let the util write `blurPanel.bind(vpName := vp, "mirrorMode" := 1.0)`
  with the *same* `bind`, collapsing the dynamic path into the one API (subsumes
  the `bindDynamic` helper above). Needs care that the typed shape-side `bind`
  (which *does* rely on the singleton name for inference) is unaffected.
- **Res-free bilinear box downsample** (drops the `res` bindings + `onResize`
  from both this util and `Bloom`) — noted in the blur-kernel decision.
- **Generic camera trait** to replace the concrete `PerspectiveCamera` param.

## Verification

1. `bun run sketch rooms/base` — must compile cleanly (this build includes
   `trivalibs/src`, so it also covers the new `blur.scala` kernels; optionally
   `bun run check` inside `trivalibs/` to type-check the lib in isolation
   first).
2. `bun run dev`, open `rooms/base`: the blurred floor reflection should look
   identical to before — sharp near the floor, blurrier toward the ceiling, halo
   strips still bloom on the floor. Walk around (WASD + drag) to confirm the
   screen-space lookup tracks correctly and there's no regression in
   alpha-driven blur falloff or reflection strength.
3. **Shared-shape correctness** — the walls/ceiling now render in both passes
   from one instance. Confirm: the *scene* walls/ceiling are unchanged (opaque,
   no distance-alpha leaking in) and the *reflection* still carries the
   height-driven blur. Check `CullMode.None` introduced no z-fighting or
   see-through faces from any camera angle inside the room.
4. Resize the window — reflection stays correct (per-mip res bindings update via
   `mirror.onResize`).
