# MirrorReflection — depth-driven blurred mirror reflection util

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
ready-made `scene` panel handed in. MirrorReflection's `mirrorScenePanel`
renders the mirror shapes itself (mip 0 is a _scene render of the mirror
shapes_; the higher mips blur it), so on top of owning the panels the util also
**drives the mirror view-projection** each frame: it reflects the camera's
view-projection across the mirror plane and feeds it to that render. The name is
`MirrorReflection` because a flat ground is only the default case — the mirror
mirror plane is a parameter (`mirror: Plane`), so an arbitrary plane works too.

**Core algorithm change vs. the current hand-rolled sketch: distance comes from
the depth buffer, not from a shade-written alpha.** The blur amount per
reflected fragment is driven by that fragment's distance from the mirror plane
(blurrier the further away). The current sketch makes the mirror shapes' shade
_write that distance into alpha_ (`worldY`), which forces a mirror-specific
shade (a `mirrorMode` flag, a distinct alpha write) and couples the util to the
user's shade. Instead we **sample the mirror render's depth buffer and
reconstruct the distance** in the resolve pass (depth + inverse view-projection
→ world position → analytic plane distance). The user's shade then only has to
produce color — the _same_ scene shade can render into the mirror panel
unmodified — and the whole `mirrorMode` / alpha-write contract disappears.

This also exercises the library's **depth-texture sampling** feature for the
first time end-to-end. The CPU/painter side is already prepared
(`panel.binding(depth = true)`, `depthSamplingView`); the shader-DSL side does
not exist yet. We have many more depth-dependent effects planned (shadow maps,
focus blur, artistic texture projection, …), so this is the case that drives the
DSL feature in and tests it.

## Strategy — three phases

Build and validate bottom-up:

1. **Library prerequisites** — add depth-texture sampling to the shader DSL
   (§Phase 1a) and the 2D blur kernels to `blur.scala` (§Phase 1b). Type-check
   the lib in isolation.
2. **Prove it in the room sketch** — rewrite `Base.scala`'s hand-rolled mirror
   to the depth-reconstruction algorithm (§Phase 2). Still hand-rolled, no util
   yet. This validates the new DSL feature _and_ the reconstruction algorithm in
   a concrete, visually-verifiable setting before generalizing.
3. **Extract the generic util** — once the algorithm is known-good in the
   sketch, lift it into `MirrorReflection` (§Phase 3) and migrate `Base.scala`
   onto the util.

## Implementation status

- ✅ **Phase 1a — depth-texture DSL** (done). `DepthTexture2D` opaque type
  (`math/gpu/expr.scala`) → `texture_depth_2d`, with `.load(coord, level=0)` (no
  sampler) and `.sample(uv, samp)`. (No `sampleLevel` for depth — the attachment
  is single-level; the mip pyramid lives on the color texture.)
  `WGSLType.isDepthTexture` marker + `WGSLType[DepthTexture2D]`; depth panel
  markers `FragmentDepthPanel`/`VertexDepthPanel`/`SharedDepthPanel`
  (`shader/types.scala`); `PanelToTexture` maps them to `DepthTexture2D`
  (`shader/dsl/context.scala`); `generatePanelDeclsImpl` (`derive.scala`) and
  `panelBindGroupEntriesImpl` (`layouts.scala`) are now type-aware
  (`texture_depth_2d` / `sampleType: "depth"`). **`load` was added across all
  textures** (`Texture2D.load` returning `Vec4`, depth returning `Float`, both
  with a `level = 0` arity overload), plus `.dimensions` (`textureDimensions`)
  and `ivec2(Vec2Expr)` (truncating float→int coord). GPU-free unit test:
  `test/shader/DepthTexture.test.scala`.
- ✅ **Phase 1b — 2D blur kernels** (done). `Blur.boxBlur2d` + `Blur.tentBlur2d`
  in `shader/lib/blur.scala` with the separable-vs-2D group comment.
- ✅ **Phase 1c — `Plane`** (done). `Plane.reflectionMat` (column-major,
  verified against `Mat4`'s `m<col><row>` layout) + `Plane.fromPointNormal` /
  `Plane.fromPoints` / `Plane.ground` in `geometry/package.scala`.
- ✅ **Phase 2 — room sketch** (done, **visually verified**).
  `sketches/rooms/base/Base.scala` rewritten to depth-reconstructed distance:
  one shared `wallShade` (walls + ceiling, `CullMode.None`) used unmodified in
  both passes via panel-level `vp`; `mirrorScenePanel` (reflected render +
  `tentBlur2d` pyramid + sampleable depth); a resolve pass that reconstructs
  distance from depth + `invVp` and writes pre-blurred color + normalized
  distance; floor samples `resultPanel` in screen space. `mirrorMode` flag /
  alpha-distance write / separate mirror shade all removed. Reflection looks
  identical to the pre-change sketch.
  - **Deviations from the plan as written**, all deliberate:
    - **No empty-texel `keep` term** — the room is closed, so the mirror view
      has no far-plane gaps (matches the original, which also didn't guard).
    - **Plane distance uses `worldPos.y` directly** (ground plane) rather than a
      baked `n·p - d`; the util (Phase 3) will bake `mirror.normal`/`d` for the
      general case.
  - **Runtime note (not a bug):** the mirror panel's depth attachment is lazily
    recreated as sampleable on first use, so frame 1 samples an empty depth
    (one-frame startup glitch, invisible in the animation). `paint(…)` submits
    per panel, so this is between submissions — no validation error, no warmup
    needed.
- ✅ **Follow-up DSL extensions (done, sketch updated + still visually
  verified).** Two items originally listed as findings were implemented and
  folded into the sketch:
  - **`ctx.fragCoord`** (`@builtin(position)`) now exposed on `FragmentCtx` for
    both shape and layer frags (`shader/dsl/context.scala`). The resolve pass
    reads depth via `depth.load(ivec2(ctx.fragCoord.xy))`, and the **floor now
    uses `resultPanel.load(ivec2(ctx.fragCoord.xy))`** — dropping the `clipPos`
    varying, the ndc→uv math, and `reflSamp`.
  - **Res-free blur** — added `Blur.boxBlur2dAuto` / `Blur.tentBlur2dAuto`
    (resolution from `textureDimensions(tex)`), plus `tex.dimensions` and a
    `vec2(UVec2Expr)` conversion. The downsample chain now uses
    `tentBlur2dAuto`, so **all `mipRes` bindings and their `onResize`
    bookkeeping are gone**.
- ✅ **Side fix:** `test/geometry/Grid.test.scala` updated to expect
  `js.JavaScriptException` (the `jsError` policy) — was a stale
  `IllegalArgumentException` expectation.
- ✅ **Phase 3 — `MirrorReflection` util** (done, builds clean). New
  `src/playground/mirror/MirrorReflection.scala` (package `playground.mirror`),
  mirroring the updated `Bloom` structure: trait + factory, **no `onResize`**
  (res-free — `tentBlur2dAuto` + `fragCoord`/`load`), with a left-in TODO for an
  optional custom-panel-size API. The util owns `vp`/`invVp`/`blurStrength`
  bindings + the reflection matrix; takes `mirror: Plane = Plane.ground` (bakes
  `normal`/`d` into the resolve shade's distance), `vpName` (writes the
  reflected VP onto `mirrorScenePanel.runtimeBindings`), `alphaScale`,
  `mipLevels` (→ `maxBlur = mipLevels-1`), and an optional `camera` (else pass
  `vp` to `paint`). Exposes `mirrorScenePanel` + `resultPanel`. `Base.scala`
  migrated onto it: the whole mirror-panel + resolve + blur block (~95 lines)
  collapsed to one `MirrorReflection(...)` call; the floor binds
  `mirror.resultPanel`; `animate` is
  `sceneVp.set(vp); mirror.paint(vp); p.paint(scenePanel)`. (Sketch feeds `vp`
  per frame rather than `camera = cam`, noted inline; both paths are supported.)

## Why depth-reconstructed distance (rationale + tradeoffs)

- **Depth alone is camera distance, but reconstruction gives plane distance.**
  The depth buffer stores camera-space depth, not distance from the mirror
  plane. With the inverse view-projection (which the util computes anyway) we
  recover the full world position and then the _analytic_ perpendicular distance
  to the plane — in the resolve pass that already exists, **no extra geometry
  pass**:
  ```wgsl
  // resolve-pass WGSL (planeN/planeD baked as literals; signedDist done by hand)
  let ndc       = vec3(uv.x*2-1, 1-uv.y*2, depth);  // screen uv + sampled depth → NDC
  let worldH    = invVP * vec4(ndc, 1.0);
  let worldPos  = worldH.xyz / worldH.w;
  let planeDist = dot(planeN, worldPos) - planeD;   // n·p - d; ground: worldPos.y
  ```
  Because the mirror render's clip pos is `VP * reflMat * pOrig`, multiplying
  back by `inverse(VP * reflMat)` yields the _original_ world position, and
  `n·p - d` is exactly the perpendicular distance — for the ground plane that is
  `worldPos.y`, reproducing today's `worldY`. (A reflection also preserves
  perpendicular distance to its own plane, so the value is robust either way.)
  **The mirror plane parameterizes both sides on the CPU:** the util derives the
  reflection matrix `reflMat` from it (for the render's VP) _and_ bakes its
  normal/offset into the resolve shade for the distance — no matrix→plane
  reverse-derivation. **Note `Plane` is CPU-only — there is no GPU/DSL `Plane`,
  so the shader computes `n·p - d` manually** (the `signedDist` formula); the
  class is a construction-time convenience, not a shader value.
- **What it deletes:** the `mirrorMode` flag uniform, the shade's
  `alpha = distance` write, and the "merge `roomShade` + `mirrorShade`" step.
  The _unmodified_ scene shade renders into the mirror panel (we read its `.xyz`
  for color and get distance from depth). The only panel-level uniform left is
  `vp`, which is the legitimate mechanism for shape reuse across passes — not a
  "dance."
- **Empty texels handled cleanly.** Where no mirror shape drew, depth is the far
  plane (`1.0`); detect that → zero reflection. This is _cleaner_ than today's
  `alpha = 0`, which conflates "distance 0" with "nothing here."
- **Tradeoff — geometry only, no artistic blur map.** A shade-written alpha
  could encode arbitrary per-fragment blur (a roughness/gloss map); depth gives
  only geometric plane distance. That is exactly this util's purpose, so it is
  acceptable; an optional alpha-override mode is noted in Future work.
- **Tradeoff — depth precision.** Perspective depth is non-linear (precision
  concentrated near the camera), so reconstructed distance is not bit-exact to
  the shade's `worldY`. For a smooth blur LOD this is immaterial.
- **Unaffected — cull winding.** A reflection flips triangle winding regardless
  of how distance is sourced. Single-shape reuse still needs `CullMode.None` (or
  distinct pipelines per pass sharing the shade). See the cull note in Phase 2.

## Other design decisions (carried over)

- **Util owns the mirror render + the mirrored view-projection.** `apply` takes
  the shapes to mirror and builds the output panels. The uniform contract splits
  the classic MVP: the per-shape **model** (`m`) stays the shape's business
  (set, with all its other bindings, before being handed in), but the shared
  **view-projection** (`vp`) — one viewpoint for the whole render — is owned and
  driven by the util.
  - The shapes' shade reads `vp` from a **panel-level** uniform (set on
    `mirrorScenePanel` via `panel.bind`, shared by all its shapes). Panel
    bindings are string-keyed/untyped (unlike shape bindings, which infer from
    the shade), so the factory takes the uniform's **name** (`vpName`) to know
    where to write.
  - The util holds its own `BufferBinding[Mat4, ?]` for `vp`, binds it on
    `mirrorScenePanel` under `vpName`, and each `paint` writes
    `cameraVP * reflMat` into it (reflection applied in world space). It also
    holds a second matrix binding for **`invVP = inverse(cameraVP * reflMat)`**
    (used by the resolve pass for distance reconstruction). `reflMat` is derived
    once from the mirror `plane` (see below).
  - **Viewpoint source:** pass a `PerspectiveCamera` at construction (the util
    pulls `camera.viewProjMat` each `paint`) and/or a raw `vp: Mat4` to `paint`
    that overrides it. The raw arg is required when no camera is supplied.
    `PerspectiveCamera` is concrete for now; a generic camera trait can replace
    it later.
  - **Mirror plane is a `Plane`, not a matrix.** `apply` takes
    `mirror: Plane = Plane.ground` (the `y = 0` plane, normal `(0,1,0)`). The
    util derives `reflMat = mirror.reflectionMat` once at construction
    (reflection across the plane; reduces to `Mat4.fromScale(1,-1,1)` for
    ground) and bakes `mirror.normal`/`mirror.d` into the resolve shade, which
    computes the blur distance `n·p - d` by hand — `Plane` is **CPU-only**,
    there is no DSL `Plane`, so it is a construction-time convenience, not a
    shader value. Still one source of truth for both the render and the
    distance. (`Plane.reflectionMat`
    - convenience constructors are a small geometry-lib prerequisite, §Phase
      1c.)
  - **Why panel-level vp (not per-shape mvp): shape reuse across passes.**
    Because `vp` is a panel binding, the painter fills it per-render from
    whichever panel is drawing the shape — a shape that doesn't bind `vp` itself
    inherits the scene panel's vp in the normal pass and the mirror panel's
    (reflected) vp in the mirror pass (`applyPanelRuntimeBindings`,
    `painter.scala` 1323–1351: panel bindings only fill slots the shape left
    null). So the _same_ shape instance can sit in both panels with no per-frame
    juggling — `m` is identical in both, reflection lives entirely in the util's
    panel vp. With depth-driven distance the shade no longer differs between
    passes _at all_ (no `mirrorMode`), so reuse is total: same shape, same
    shade, only the panel-level `vp` differs.
  - **Residual non-uniform difference — cull winding.** A reflection has
    negative determinant, so it flips triangle winding: the normal shapes cull
    `CullMode.Front`, the mirror needs `CullMode.Back`. `cullMode` is baked into
    the shape's pipeline (not a uniform), so one shape can't cull both ways.
    True single-shape reuse therefore needs the shared shapes on `CullMode.None`
    (draw both faces, depth resolves — minor overdraw). If a sketch keeps
    distinct cull modes it keeps distinct shapes regardless — but they can still
    share the _shade_. **The room sketch goes for full reuse** (`CullMode.None`
    on the shared walls/ceiling) to exercise and verify the whole contract.
- **Mirror render and blur pyramid share one panel.** The panel renders its
  shapes into mip 0 _first_ (depth + clearColor), then runs its layers — so the
  mirror shapes draw straight into `mirrorScenePanel` mip 0 and the downsample
  layers build mips 1..N. This drops both a separate mirror panel _and_ any
  mip-0 blit (mip 0 _is_ the mirror render) — one fewer panel and one fewer
  fullscreen pass per frame. Verified safe: layers run "no depth, no msaa" so
  depth only affects the shape pass; mip-target layers already gate off
  auto-mipgen; `multisample = false` keeps mip 0 directly sampleable **and keeps
  the depth attachment directly sampleable** (no MSAA depth-resolve needed).
- **Two output panels exposed:**
  1. `mirrorScenePanel` — the shared mirror-render + box-blur mip pyramid (mip 0
     = raw mirror render, mips 1..N = progressive downsample) **plus the depth
     attachment** of the mirror render. The raw sharp reflection is
     `mirrorScenePanel.binding(mipLevel = 0)`; its depth is
     `mirrorScenePanel.binding(depth = true)`.
  2. `resultPanel` — full-res panel from one extra pass that, per texel,
     reconstructs distance from depth, picks the mip-LOD from it, and writes the
     pre-blurred color + normalized distance. This is the panel sketches
     normally sample (named `resultPanel` to match Bloom's final-output panel).
- **Composition stays in user land.** Floor shader samples `resultPanel` base
  mip and computes its own mix/falloff from the normalized distance and a
  user-side `reflStrength`. Util provides `uvFromClipSpace` to remove the
  clip→screen-UV boilerplate.
- **Blur kernel: keep the 9-tap tent + `res` bindings + `onResize`** (preserves
  current look). The bespoke kernel is promoted into the trivalibs blur lib as a
  reusable **2D single-pass** blur (Phase 1b) rather than living inline in the
  util. Res-free bilinear downsample noted as future exploration only.

---

## Phase 1a — Depth-texture sampling in the shader DSL

The painter already supports binding a panel's depth texture as a sampleable
input — `panel.binding(depth = true)` builds a `PanelBinding(..., depth = true)`
(`panel.scala` 137–144); at bind time the painter resolves it to
`pb.panel.depthSamplingView` (`painter.scala` 1414), and `depthSamplingView`
(`panel.scala` 118–133) lazily recreates the depth texture with
`TEXTURE_BINDING` usage and flags `_depthSamplable` so subsequent (re)creations
include the usage (`panel.scala` 495–509). **Missing is the DSL side** — a depth
texture must be declared `texture_depth_2d` in WGSL with a `sampleType: "depth"`
layout entry, but today both generators hardcode the float form:

- `generatePanelDeclsImpl` (`derive.scala` 361–372) emits
  `var $name: texture_2d<f32>` for _every_ panel field, ignoring its type.
- `panelBindGroupEntriesImpl` (`layouts.scala` 226–237) emits
  `texture = Obj.literal()` (defaults to `sampleType: "float"`) for every entry.

Work items:

1. **New DSL resource type `DepthTexture2D`** in `math/gpu/expr.scala`, an
   opaque `<: Expr` exactly like `Texture2D` (`expr.scala` 105–106), with a
   companion `apply(s: String)`. Add it to the exported resource-type list
   alongside `Texture2D`/`Sampler` (`expr.scala` 286–287).
2. **`WGSLType[DepthTexture2D]`** in `types.scala` next to `WGSLType[Texture2D]`
   (152–158): `wgslName = "texture_depth_2d"`, zero sizes, and a new marker
   `override def isDepthTexture = true` (add
   `def isDepthTexture: Boolean = false` to the `WGSLType` trait, mirroring the
   existing `isSampler` flag).
3. **Type-aware panel WGSL decl** — `generatePanelDeclsImpl` must pick
   `texture_depth_2d` vs `texture_2d<f32>` from the field's `WGSLType` (summon
   `WGSLType[head]`, read `isDepthTexture`/`wgslName`). Use `wgslName` directly
   rather than the hardcoded string.
4. **Type-aware bind-group layout** — `panelBindGroupEntriesImpl` must emit
   `texture = Obj.literal(sampleType = "depth")` for a depth field (else the
   current float default). Same `WGSLType[head].isDepthTexture` branch.
5. **Depth read ops** — extension(s) on `Expr.DepthTexture2D` returning a
   **scalar** `FloatExpr` (depth yields a single channel). WGSL has three read
   families with _different_ sampler needs (see the sampler note):
   - `def load(coord: IVec2Expr, level): FloatExpr` →
     `textureLoad(tex, coord, level)` — **no sampler**, exact texel fetch; pairs
     with `BuiltinFragCoord` (`builtins.scala` 45–49) for pixel coords.
     **Primary path for the resolve pass** (full-res 1:1, point-exact, zero
     sampler boilerplate).
   - `def sampleLevel(uv, sampler, level): FloatExpr` →
     `textureSampleLevel(tex, samp, uv, level)` (returns `f32`) — needs a
     _non-comparison_ sampler. For filtered / downscaled depth reads.
   - (later) `def sampleCompare(uv, ref, sampler): FloatExpr` →
     `textureSampleCompare(tex, samp_cmp, uv, ref)` — needs a _comparison_
     sampler (`sampler_comparison`). For shadow-map PCF; out of scope here.

**Sampler note — depth has two sampler families, not one.** Regular reads
(`textureSample*`) take a normal sampler (layout `sampler` type
`filtering`/`non-filtering`); comparison reads (`textureSampleCompare`, shadow
PCF) take a `sampler_comparison` (layout type `comparison`). So there is no
single "depth sampler" to standardize on. **This util sidesteps it entirely: the
resolve pass uses `load`, which needs no sampler.** (If a filtered `sampleLevel`
is ever needed, confirm WebGPU accepts the default filtering sampler entry —
`layouts.scala` 133–149 — against a `depth` sampleType; `non-filtering` is the
safe fallback.) See Future work for auto-supplying the sampler.

6. **Generalize `load` across texture types (not just depth).** `textureLoad` is
   a general primitive — integer texel coords, no sampler, point read, explicit
   level — useful for fullscreen post-processing and layer passes
   (fragment-only) that read 1:1 with their target, where a sampler was always
   slightly superfluous. Add `load` to `Texture2D` too (returns `Vec4Expr`)
   alongside the depth variant (returns `FloatExpr`); the depth resolve read is
   just one instance. The coord/level types already exist (`IVec2Expr`,
   `IntExpr` — `int_expr.scala` 31–44); the op block is `expr.scala` 250–270.
   Signature `def load(coord: IVec2Expr, level: IntExpr): <Vec4Expr|FloatExpr>`
   → `textureLoad(tex, coord, level)`; consider a `level = 0` default overload.
   **Gotchas to document:** coords are texel indices (not UV), out-of-bounds
   returns `0` (not clamped), and the level arg is mandatory (pass `0` for
   non-mipmapped).
7. **Companion `textureDimensions` op (optional, recommended).** WGSL
   `textureDimensions(t, level) -> vec2<u32>` lets a shader convert UV→texel
   (`ivec2(uv * vec2(textureDimensions(t)))`) without a `res` binding. The DSL
   currently has no such op (only `textureNumLevels` via `numLevels`). Adding it
   pairs naturally with `load` and would also unblock the res-free blur
   downsample (see Future work). Small, self-contained; do it here or defer.

**Minimal DSL test** before touching the sketch: a tiny example/test that
declares a `DepthTexture2D` panel field, reads it (`load`), and renders — verify
the WGSL validates and the bind group builds. Cover a `Texture2D.load` too. (Add
under `examples/` or a focused playground sketch; the room sketch in Phase 2 is
the real end-to-end test.)

## Phase 1b — 2D blur category in `blur.scala`

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

## Phase 1c — `Plane` enhancements in `geometry/package.scala`

`Plane(normal, d)` already exists with `signedDist(p) = normal·p - d` and `flip`
(`geometry/package.scala` 73–75). The util consumes a `Plane` directly (mirror
plane = single source of truth for both the reflection matrix and the blur
distance). Add:

1. **`def reflectionMat: Mat4`** — reflection across the plane (assumes a unit
   `normal`). For unit `n = (a,b,c)` and `n·x = d`:
   ```
   [1-2a²  -2ab   -2ac    2ad]
   [ -2ab 1-2b²   -2bc    2bd]
   [ -2ac  -2bc  1-2c²    2cd]
   [   0     0      0      1 ]
   ```
   Reduces to `Mat4.fromScale(1,-1,1)` for the ground plane `n=(0,1,0), d=0`.
2. **Convenience constructors** (the current ctor takes `normal, d` raw, which
   requires a unit normal and pre-computed `d`):
   - `Plane.fromPointNormal(p: Vec3, n: Vec3)` →
     `Plane(n.normalize, n.normalize·p)`.
   - `Plane.fromPoints(a, b, c: Vec3)` → normal `(b-a)×(c-a)` normalized,
     `d = normal·a`.
   - `Plane.ground` (or a `val`) = `Plane(Vec3(0,1,0), 0)` — the util's default.
     Normalizing in these ctors keeps `signedDist` a true distance and
     `reflectionMat` correct. (The existing raw ctor stays for the clip/split
     callers that already pass normalized planes.)

Small, self-contained; needed before the resolve pass and the util can take a
`Plane`. Verify `Vec3` has `normalize` / `cross` / `dot` in `graphics/math`
(used elsewhere, should be present).

**CPU-only — no DSL `Plane`.** These are all CPU-side geometry helpers; there is
no GPU equivalent of `Plane`. The resolve shade does not call `signedDist` — the
util reads `mirror.normal`/`mirror.d` on the CPU and bakes them as WGSL literals
(the plane is fixed at construction), and the shader computes
`dot(planeN, worldPos) - planeD` by hand. (A future GPU `Plane`/`signedDist` DSL
op could replace the hand-written line, but is not needed here.)

---

## Phase 2 — Prove the algorithm in `sketches/rooms/base/Base.scala`

Rewrite the existing hand-rolled mirror to depth-reconstructed distance. **Still
hand-rolled** — no util — so the DSL feature and the reconstruction math get
validated visually in a real scene first. This is the smaller, reversible step;
Phase 3 only generalizes what works here.

**1. One shade for the walls/ceiling, used in both passes unmodified.** Today's
`roomShade` and `mirrorShade` (Base.scala ~281–331) differ only by the alpha
write and the `worldY` varying. With depth-driven distance, **neither is
needed** — collapse to one `wallShade`:

- Uniforms `(samp: FragmentUniform[Sampler], vp: VertexUniform[Mat4])` — `vp`
  panel-level, read but never bound on the shape. World-space geometry, so vert
  is `ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0)`.
- Varyings `(uv: Vec2)` only — no `worldY`.
- Frag: the V-flipped tex lookup, `out.color := vec4(c.xyz, 1.0)`. No flag, no
  distance write.
- Delete `mvp`/`mirrorMvp` bindings, the standalone `mirrorShade`/`mirrorShape`,
  and the `worldY` plumbing.

**2. One shared wall/ceiling shape set, `CullMode.None`** (reflection flips
winding; `None` draws both faces, depth resolves — visually identical from
inside the room):

```scala
def wallShape(form: Form, tex: Panel) =
  p.shape(form, wallShade, cullMode = CullMode.None)
    .bind("samp" := texSampler, "tex" := tex)   // NOT vp
val ceilShape  = wallShape(ceilForm, ceilTex)
val wallShapeW = wallShape(wallForm, wallTex)
```

Both instances go into **both** panels.

**3. Scene panel supplies `vp`** (literal name, typed `.bind` sugar):

```scala
val sceneVp = p.binding[Mat4]
scenePanel.bind("vp" := sceneVp)
```

(`scenePanel` lists `Arr(floorShape, wallShapeW, ceilShape)`. The floor keeps
its own scene-only `floorShade` but also reads `vp` from the panel — rename its
`mvp` uniform to `vp` and stop binding it per-shape.)

**4. Mirror scene panel = mirror render + blur pyramid, with a sampleable depth
attachment.**

```scala
val mirror    = Plane.ground            // y = 0; reflMat reduces to scale(1,-1,1)
val reflMat   = mirror.reflectionMat
val mirrorVp  = p.binding[Mat4]         // cam.viewProjMat * reflMat
val mirrorScenePanel = p.panel(
  format = Rgba16Float, clearColor, depthTest = true, mipLevels = 6,
  shapes = Arr(wallShapeW, ceilShape), layers = downsampleLayers)
mirrorScenePanel.bind("vp" := mirrorVp)   // panel-level mirror view-projection
```

- `depthTest = true` produces the depth buffer we sample; `multisample = false`
  keeps both color mip 0 and depth directly sampleable.
- `downBlurShade` calls the lib kernel
  `Blur.tentBlur2d(ctx.textures.tex, ctx.bindings.samp, ctx.in.uv, ctx.bindings.res, 2.0)`;
  `mipLevels-1` downsample layers
  `p.layer(downBlurShade, mipSource = i, mipTarget = i+1)` each bound to its
  per-mip `res` binding (loop).

**5. Resolve pass → `resultPanel`** (full-res, `Rgba16Float` for HDR halo):
binds the mirror panel's **color pyramid** _and_ its **depth**, plus the
util-side `invVP` matrix. Per texel:

```scala
// reconstruct world position from depth + inverse mirror view-projection
d        := mirrorDepth.load(ivec2(ctx.in.fragCoord.xy), 0) // f32 depth, no sampler
ndc      := vec3(uv.x*2.0 - 1.0, 1.0 - uv.y*2.0, d)
worldH   := invVP * vec4(ndc, 1.0)
worldPos := worldH.xyz / worldH.w
dist     := dot(planeN, worldPos) - planeD                   // = plane.signedDist; ground: worldPos.y
t        := (dist / alphaScale).clamp01                      // normalized
// far-plane texels (nothing rendered) → no reflection
keep     := step(d, 0.9999)                                  // 1 if geometry, else 0
lod      := (1.0 + t * uBlurStrength * maxBlur).log2.min(maxBlur)
out.color := vec4(colorPyramid.sampleLevel(uv, samp, lod).xyz, t * keep)
```

(`alphaScale = RoomHeight`, `maxBlur = 5.0`, `blurStrength = 62.0` to match the
current look; `blurStrength` a runtime binding. `planeN`/`planeD` are the mirror
plane's normal/offset, baked as WGSL literals when the shade is built — known at
construction.) Bind invVP = `(cam.viewProjMat * reflMat).inverse` each frame.

**6. floorShade** (~449–500): drop the old LOD math **and the screen-UV
reconstruction**. The reflection is a screen-space image at the same resolution
as the floor's render target, so the floor fragment reads `resultPanel` at its
_own_ pixel via `load(fragCoord)` — no `uvFromClipSpace`, no sampler, no
`clipPos` varying, no Y-flip:

```scala
refl    := reflTex.load(ivec2(ctx.in.fragCoord.xy), 0)   // base mip, same pixel
falloff := (1.0 - refl.w).max(0.1)
mix     := reflStrength * falloff
ctx.out.color := vec4(base * (1.0 - mix) + refl.xyz * mix, 1.0)
```

(`fragCoord` = `@builtin(position)` in the fragment, i.e. the framebuffer pixel
coord; texel `(0,0)` is top-left in both the floor target and `resultPanel`, so
they align 1:1 with no flip. This holds because both are full canvas res — a
half-res reflection would need UV scaling, see the `uvFromClipSpace` fallback in
Phase 3.)

**7. Per-frame** (animate ~581–587):

```scala
sceneVp.set(cam.viewProjMat)
mirrorVp.set(cam.viewProjMat * reflMat)
invVp.set((cam.viewProjMat * reflMat).inverse)
p.paint(mirrorScenePanel)   // mirror render → mip0, blur pyramid, then resolve
p.paint(resolvePanel)       // (or include in one paint call, mirror first)
p.paint(scenePanel)         // floor samples resultPanel
```

**8. onResize** — update the per-mip `res` bindings (loop).

**Verification (Phase 2):**

1. `bun run sketch rooms/base` compiles (includes `trivalibs/src`, so it
   exercises the new DSL depth type + blur kernels).
2. `bun run dev`, open `rooms/base`: the blurred floor reflection should look
   **identical to the pre-change sketch** — sharp near the floor, blurrier
   toward the ceiling, halo strips still bloom on the floor. This is the key
   check that depth-reconstructed distance reproduces the old `worldY` alpha.
3. Walk around (WASD + drag): the depth reconstruction must track correctly from
   all angles (it depends on `invVP`, refreshed per frame). No blur "swimming"
   or distance banding.
4. `CullMode.None` introduced no z-fighting / see-through faces.
5. Resize — reflection stays correct.
6. **Empty-texel check:** if any view angle leaves mirror-panel texels with no
   geometry (far depth), confirm they contribute no reflection (the `keep`
   term).

---

## Phase 3 — Extract the generic `MirrorReflection` util

Once Phase 2 looks right, lift it into a util. The algorithm is unchanged; this
step is about ownership and a clean API.

### New: `src/playground/mirror/MirrorReflection.scala` (package `playground.mirror`)

```scala
trait MirrorReflection:
  // The panel the mirror scene renders into: mip 0 = raw mirror render of the
  // shapes, mips 1..N = box-blur pyramid; plus a sampleable depth attachment.
  // Bind only your shade's shared/panel-level uniforms here (the util binds `vp`
  // itself, see vpName). The mirror shade needs NO mirror-specific uniforms.
  def mirrorScenePanel: Panel
  def resultPanel: Panel     // pre-blurred, depth-driven LOD resolved (sample this)
  def paint(vp: Maybe[Mat4] = Maybe.Not): Unit  // raw vp overrides the camera
  def setBlurStrength(v: Double): Unit
  def onResize(w: Double, h: Double): Unit

object MirrorReflection:
  // Generic over S <: AnyShape: `Arr` (js.Array) is invariant, so a concrete
  // `Arr[Shape[U,P]]` would not conform to `Arr[AnyShape]`. p.panel is itself
  // `[S <: AnyShape, L <: AnyLayer]`, so S threads straight through.
  def apply[S <: AnyShape](
      p: Painter,
      shapes: Arr[S],            // mirrored shapes; produce color only
      vpName: String,            // panel-uniform name the util writes the
                                 //   mirrored view-projection into (shapes read it)
      alphaScale: Double,        // plane distance mapping to normalized 1.0
      camera: Opt[PerspectiveCamera] = null, // viewpoint source; null ⇒ paint(vp) required
      mirror: Plane = Plane.ground, // mirror plane (CPU-only); util derives reflMat + bakes normal/d into the resolve shade
      blurStrength: Double = 2.0,// how fast blur ramps with distance (log2 coef)
      maxBlur: Double = 5.0,     // max LOD / top mip index (== mipLevels-1)
      mipLevels: Int = 6,        // pyramid depth
      clearColor: (Double,Double,Double,Double) = (0.0,0.0,0.0,0.0),
  ): MirrorReflection

  /** Clip-space position → screen UV in [0,1] (Y flipped). DSL expression
    * helper for consumers that *sample* the result (filtered, or at a different
    * resolution than the floor target). The default floor path instead uses
    * `resultPanel.load(ivec2(fragCoord.xy), 0)` (1:1, no UV needed) — keep this
    * only for the off-res / filtered case. */
  def uvFromClipSpace(clipPos: Vec4Expr): Vec2Expr =
    val ndc = clipPos.xy / clipPos.w
    ndc * vec2(0.5, -0.5) + vec2(0.5, 0.5)
```

Internals (lift from the proven Phase-2 sketch, generalize constants):

1. **vp + invVP bindings** — `val vp = p.binding[Mat4]`,
   `val invVp = p.binding[Mat4]`, both util-owned. `vp` is bound on
   `mirrorScenePanel` under the runtime `vpName`: `panel.bind` needs a _literal_
   name, so write the public `runtimeBindings` Dict directly —
   `mirrorScenePanel.runtimeBindings.set(vpName, vp)`. `invVp` is bound on the
   resolve layer by the util (literal name there, so typed `.bind`).
   `reflMat = mirror.reflectionMat` is computed once at construction; the
   resolve shade bakes `mirror.normal`/`mirror.d` as WGSL literals for
   `signedDist`.
2. **mirrorScenePanel** —
   `p.panel(format = Rgba16Float, clearColor, depthTest = true, mipLevels, shapes, layers = downsampleLayers)`;
   no multisample. mip 0 is the mirror render; depth attachment is sampled by
   the resolve pass via `mirrorScenePanel.binding(depth = true)`. Per-mip `Vec2`
   res bindings built in a loop (`Arr[BufferBinding[Vec2, ?]]`, like Bloom).
3. **resultPanel** — the resolve layer pass from Phase 2 step 5, reading the
   color pyramid + depth + `invVp`. `alphaScale`/`maxBlur` compile-time consts;
   `blurStrength` runtime (`setBlurStrength`).
4. **onResize** — set each mip res binding to `(w/2^i, h/2^i)` (loop).
5. **paint(vp)** — resolve the view-projection (raw arg, else camera, else
   error); `val m = resolvedVP * reflMat`; `vp.set(m)`, `invVp.set(m.inverse)`;
   `p.paint(mirrorScenePanel, resultPanel)`.

### Edit: `sketches/rooms/base/Base.scala` (migrate onto the util)

Replace the hand-built mirror block (Phase 2 steps 4–5, 7–8) with:

```scala
val mirror = MirrorReflection(
  p,
  shapes = Arr(wallShapeW, ceilShape),  // same instances as in scenePanel
  vpName = "vp",
  alphaScale = RoomHeight,
  camera = cam,
  blurStrength = 62.0,
  maxBlur = 5.0,
  mipLevels = 6,
)
// floor binds the result; no mirror-specific shape/shade uniforms anywhere
floorShape.bind("reflTex" := mirror.resultPanel)
```

Per frame: `sceneVp.set(cam.viewProjMat)`, then `mirror.paint()` (reflects
internally), then `p.paint(scenePanel)`. onResize: `mirror.onResize(w, h)`.

**Reuse check (what full use proves):** `wallShapeW`/`ceilShape` are single
instances in two panels; neither binds any mirror-specific uniform. The scene
pass fills `vp` from `scenePanel`, the mirror pass from `mirrorScenePanel`
(reflected) — no per-frame rebinding, no duplicate shapes/shades, no
`mirrorMode` flag. Reflection lives entirely in the util's `vp`/`invVp` + the
depth resolve.

---

## Verified API facts (resolved during planning)

- **Depth-as-input plumbing already exists (CPU side).**
  `panel.binding(depth = true)` (`panel.scala` 137–144) → `painter.scala` 1414
  resolves to `panel.depthSamplingView` → `panel.scala` 118–133 lazily recreates
  the depth texture with `TEXTURE_BINDING` usage and flags `_depthSamplable`
  (creation honours it at `panel.scala` 495–509). **DSL side is missing** — see
  Phase 1a.
- **Panel WGSL decls + layout entries currently hardcode float textures.**
  `generatePanelDeclsImpl` (`derive.scala` 361–372) emits `texture_2d<f32>` for
  every field; `panelBindGroupEntriesImpl` (`layouts.scala` 226–237) emits a
  default (`float`) `texture` entry. Both must branch on
  `WGSLType.isDepthTexture` (Phase 1a).
- **`WGSLType` already carries resource markers.** `WGSLType[Texture2D]`
  (`types.scala` 152) = `texture_2d<f32>`; `WGSLType[Sampler]` sets
  `override def isSampler = true`. Add an analogous `isDepthTexture`.
- **`BuiltinFragCoord`** (`builtins.scala` 45–49, `@builtin(position)` frag
  input) gives pixel coords for a `textureLoad` depth fetch.
- **Panel-level bindings are name-keyed.** `panel.bind("name" := v)` stores into
  the public `runtimeBindings: Dict` (`panel.scala` 48); a literal name
  auto-boxes raw values via `processPanelEntry` (`panel.scala` 197–210). For the
  runtime `vpName` the util writes `runtimeBindings.set(vpName, vp)` directly.
- **`PerspectiveCamera.viewProjMat`** (`scene/camera.scala:73`,
  `projectionMat * viewMat`) is the matrix the util reflects each frame. Confirm
  a `Mat4.inverse` (or equivalent) exists in `graphics/math` for `invVP`.
- **Shapes param is generic** `[S <: AnyShape]`. `Shape.bind` returns
  `this.type`, so `Arr(wallShape(...), wallShape(...))` conforms to `Arr[S]`.
  (`AnyShape = Shape[?, ?]`; `AnyLayer = Layer[?, ?]`.)
- **No `textureLoad` wrapper exists anywhere in the DSL yet.** The texture op
  block (`expr.scala` 250–270) has only `sample` / `apply` / `sampleLevel` /
  `numLevels` (all sampler-based); `load` is net-new and must be added for _all_
  texture types as part of Phase 1a, not just depth. Integer coord/level exprs
  (`IVec2Expr`, `IntExpr`, `UIntExpr`) already exist (`int_expr.scala` 31–44).
- **`Blur.*` WgslFns** take the panel texture directly as the `Texture2D` arg
  (`examples/blur/Blur.scala`). A plain `2.0` literal is fine for
  `radius: Float`.
- **`.log2` / `.clamp01` / `.min(<double>)`** are already used in the current
  `Base.scala` floor shader.
- Metals MCP is configured in `.mcp.json` as `graphics-metals` but is **not**
  wired into the agent session — used grep/read of `trivalibs/src` instead.

## Open details to verify during implementation

- ~~**`BuiltinFragCoord` in a layer shade.**~~ **Resolved:** `ctx.fragCoord`
  (`@builtin(position)` = `in.position`) works in both shape and layer frags and
  is now exposed on `FragmentCtx`. Both the resolve pass and the floor read
  `load(ivec2(ctx.fragCoord.xy))` 1:1; no res binding or sampler needed.
- **`Mat4.inverse` availability and numerical quality** for `invVP`. Confirm the
  math lib has it; perspective inverse is standard but verify reconstruction
  precision is adequate for the blur LOD (it should be — LOD is smooth).
- **NDC depth range & y-flip** in the reconstruction (`ndc.y = 1 - uv.y*2`,
  `ndc.z = depth ∈ [0,1]`). Validate against WebGPU conventions in Phase 2 — a
  sign error shows immediately as wrong/striped blur.
- **First-frame depth-texture recreation.** `depthSamplingView`
  destroys+recreates the depth texture the first time it's sampled; confirm this
  upgrade doesn't disturb the frame (it flags `_depthSamplable` so resizes
  recreate correctly).
- **`uvFromClipSpace`** returning a composed `Vec2Expr` (no `WgslFn`) should
  inline fine; if the DSL needs a `let`, fall back to a `WgslFn.dsl`.
- **`CullMode.None` on shared walls/ceiling** must look identical to today's
  `Front` from inside the room (depth resolves the extra back faces). Watch for
  z-fighting / visible far-side faces; fallback is distinct shapes per pass
  sharing only the shade.

## Future work

- **Optional shade-alpha blur override.** Re-admit a mode where the shade writes
  a per-fragment blur amount (roughness/gloss map) into alpha, overriding the
  geometric depth distance — for material-driven, non-geometric blur. Off by
  default; the depth path stays the norm.
- **Reuse the depth-sampling feature for other effects.** Shadow maps (needs a
  comparison sampler + `texture_depth_2d` already added here), depth-of-field /
  focus blur, artistic depth-based texture projection. Phase 1a is the shared
  foundation; revisit the sampler-type story when shadow maps land.
- **Auto-supplied depth sampler (eliminate sampler boilerplate).** When a
  `sampleLevel`/`sampleCompare` depth read is used (not `load`), the sampler is
  almost always a fixed canonical one — a non-filtering sampler for regular
  reads, a comparison sampler for shadow PCF. Explore having the DSL auto-inject
  an implicit companion sampler binding for a depth-texture field (e.g. declared
  `<name>_sampler`) with the painter auto-supplying the matching default, so the
  user writes `depthTex.sample(uv)` with no sampler arg. Design caveats: (a) it
  shifts panel binding indices, so the index accounting in
  `derive`/`layouts`/runtime resolution must count the hidden binding; (b) the
  injected sampler _type_ must match the read family (regular vs comparison), so
  it likely keys off the op or a separate comparison-texture type. Best
  revisited once shadow maps add the second sampler-carrying depth use and the
  pattern is concrete. Until then: `load` needs no sampler, and regular `sample`
  takes an explicit one (consistent with how `Texture2D` already works).
- ✅ **Res-free downsample (done).** `Blur.tentBlur2dAuto`/`boxBlur2dAuto`
  derive resolution from `textureDimensions(tex)`, dropping the `res` bindings +
  `onResize` bookkeeping (applied in the sketch; `Bloom` could adopt the same).
- **`panel.bindDynamic(name, value)`** — a runtime-name sibling of `bind`
  (reusing `processPanelEntry`'s boxing) so the util writes
  `mirrorScenePanel.bindDynamic(vpName, vp)` instead of poking
  `runtimeBindings`. Minor internal tidy-up.
- **Generic camera trait** to replace the concrete `PerspectiveCamera` param.
