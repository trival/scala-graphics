# Plan: `rooms/canvases` — walls with hanging paintings

## Context

`sketches/rooms/canvases/` is a first-person walkable museum room: four
separately-textured walls (pre-baked noise), floor with depth-driven reflection,
ceiling with HDR halo strips + bloom, and **paintings hanging on the walls**.

**The visual appearance is finetuned and locked to our liking** — surface tints,
noise fields, halo strips, bloom, floor reflection, and the painting drop-shadow
are all dialled in. The look is good enough that we intend to **reuse this
museum as a template for further sketches** where only the painting _content_
changes (see “Reuse strategy” below).

**Current state (M1 → M2a + live-shadow animation done):** multiple paintings
per wall — 3 on each narrow wall (front/back), 4 on each wide wall (left/right),
random sizes, evenly spaced within an inset span (`WallSideMargin`), same
image/color per wall. Each painting casts a directional drop-shadow composited
into the wall texture. The **wide walls animate**: their paintings sway
vertically in a sine rhythm (distinct phase + slightly varying speed each) and
their **shadows track them live**. Everything reflects in the floor.

Shadows are drawn with **instanced multiplicative blending** (one shadow
instance per painting, `BlendState.Multiply`) over a **once-baked noise texture**
— one unified path for both static and animated walls (see architecture below).
The earlier ping-pong-layer approach and the deferred `UniformArray` plan were
both superseded by this.

**Next goals:** per-wall static/realtime is already effectively in place (the
wide walls animate + re-composite each frame; the narrow ones bake once). What
remains: optional **frames** on paintings, and tidying/parameterizing the
static-vs-animated choice if we want it configurable per wall rather than by
index.

All of this stays in the **flat, imperative, simplified code style** described
below — no upfront abstraction.

---

## Architecture as built (simplified — abstractions removed)

The plan originally proposed a reusable **`Wall` block** in its own `Wall.scala`
— a class owning its paintings, with `hang`/`bake`/shadow-rect responsibilities,
a `Paintings` kit, `HungPainting`, and a shared shadow `WgslFn`, all shaped for
later extraction to a shared-utils namespace.

**We dropped all of it.** The encapsulation turned out more complex than
helpful. The entire sketch now lives in a single flat file,
[Canvases.scala](Canvases.scala), in a straight-line imperative style:

- **`Wall`, `Painting`, `Sway` are plain data `case class`es** — no behaviour.
  `Wall` holds `(center, width, height, rotY, inwardNormal, form, paintings)`;
  `Painting` holds `(model binding, shape, shadowRect binding, shadowFade,
  basePos, baseRect, rotY, wallHeight)` — the bindings are mutable so a swaying
  painting drives both its transform and its shadow; `Sway` holds
  `(painting, phase, speed, amp)`.
- **Behaviour lives in local `def`s** inside `roomsCanvases`, closing over the
  `Painter`: `mkWall`, `hang`, `paintingForm`, `compositeWallTex`,
  `patternPanel`, plus the noise/contact helpers. No methods on the data types.
- **`shadowMask` is a top-level `def`** (a shader-DSL expression builder), not a
  registered `WgslFn`. It takes `(uv, rect, fade)` and returns a `FloatExpr`.
- **Tunables are top-level `val`s** at the head of the file (`RoomWidth`,
  `TexScale`, `EdgeFadeWorld`, `ContactDarken`, the `Shadow*` shaping constants,
  and the surface tint `Vec3`s). Authored once, used directly in the bakers.
- **Shared infra comes from `sketchlib.utils.*`** (not a local block):
  `TextureBaker` (`utils.bake`), `Bloom` (`utils.bloom`),
  `GaussianMirrorReflection` / `MirrorReflection` (`utils.mirror`), and
  `Noise.fbm3` (`sketchlib.shaders`).

This is deliberate: we keep everything explicit and local until a concrete need
for reuse forces a specific abstraction out (see “Reuse strategy”).

### Wall texture compositing — noise once + instanced blended shadows

Each wall's display texture is a composite panel built by `compositeWallTex`:

1. **`wallBaker` (`TextureBaker`)** bakes the expensive tinted 3D-noise wall
   surface + contact darkening **once** into `noiseTex`.
2. **`copyShade` (a `layerShade`)** lays that `noiseTex` into the composite
   target (first, non-blended layer).
3. **`shadowShade` (a `layerShade`, no panel input)** outputs a per-pixel
   darkening factor `vec3(1 - strength·shadowMask(uv, rect, fade))` and is drawn
   under **`BlendState.Multiply`** (`color = dst·src`), **one instance per
   painting** (`shadow.instances.add("rect" := …, "fade" := …)`). Each instance
   multiplies the target, so overlapping shadows compound exactly.

`shadowMask` is a **directional drop-shadow**: box footprint matching the
canvas, aspect-correct penumbra (`ShadowFadeWorld` metres → per-axis UV), nudged
down so light reads as coming from slightly above (tight edge on top, broad pool
below), uniform strength inside the box. `ShadowStrength = 0.38`.

**Why instanced blending (chosen over ping-pong layers).** We evaluated two
ways to draw N shadows per wall:

- _Ping-pong_ — one shadow `layerShade` per painting, each `.load()`ing the
  previous pass. That's N+1 sequential full-panel passes, each a full-texture
  read+write, with a target swap and a per-frame bind-group rebuild between
  them.
- _Instanced + blend_ (**chosen**) — a single shadow layer with N instanced
  draws accumulating into one target via the ROP. One pass, no intermediate
  texture reads, no swaps. In this library a layer instance is always a
  full-panel draw (no sub-rect scissoring), so fragment ALU is a wash between
  the two — but instancing wins on passes, bandwidth, and per-pixel work (the
  multiply happens in the blend, not the shader). Identical math to the chain.

**One unified path for static and animated walls.** Because the noise is baked
once into `noiseTex` and only _sampled_ by the copy layer, re-compositing a wall
is cheap. So static and animated walls use the **same** `compositeWallTex`:
static walls paint it once; animated walls re-`p.paint` it every frame after
moving their paintings' shadow-rect bindings. No second implementation.

This also made the deferred **`UniformArray[Vec4, N]`** work unnecessary for the
shadow use case — instancing already handles arbitrary N. (It remains a
reasonable future library addition for other scenarios, but is no longer on this
sketch's path.)

### Painting geometry & UV (flat box)

Built in `paintingForm(spec)` as an explicit 6-`Quad` `Box`, centred at origin,
front on `+Z`. UV margins `mu = clamp(depth/(sideStretch·width), 0, .45)`,
`mv = clamp(depth/(sideStretch·height), 0, .45)` reserve a thin band that wraps
each of the four thin sides across the depth (front:side texel-density ≈
`sideStretch`, default 3). Front fills the inset rect `[mu,1-mu]×[mv,1-mv]`; the
back spans full `[0,1]` continuous with the side back edges (same world-X→U as
the front). `cullMode = None` so paintings also render in the mirror. **No
frames yet.**

### Painting shade & hanging

`paintingShade`: vert `vp · model · vec4(pos,1)`, frag `img.sample(uv, samp)`.
`vp` is bound **panel-level** (scene panel supplies scene `vp`; the mirror
supplies the reflected `vp`) — same shape renders in both. `model` is a
per-painting `BufferBinding[Mat4]` (mutable, driven by the sway). `hang` computes
the resting world model matrix from wall-local `(u, v)` in metres and the wall’s
`inwardNormal`/`rotY`, and records `basePos`, `baseRect`, `rotY`, `wallHeight`
plus a mutable `shadowRect` binding so the sway can move painting + shadow
together.

### Animation (wide walls) & live shadows

`isAnimated(wallIndex) = wallIndex >= 2` marks the wide walls; each painting on
them gets a `Sway(painting, phase, speed, amp)` with `phase = rand[0, τ)`,
`speed = rand[0.6, 1.0]`, `amp = rand[0.14, 0.22]` m. The render loop accumulates
`time` from `tpf`; per painting `s = amp·sin(t·speed + phase)`:

- `model.set(fromTRS(basePos + Up·s, rotY, 1))` — vertical bob;
- `shadowRect.set(baseRect with centerY − s/wallHeight)` — the shadow moves up
  with it (UV `v` is downward, hence minus).

Then the animated walls' composite panels are re-painted (`animatedPanels.foreach
(p.paint)`) **before** the scene samples them, so the live shadow tracks the
canvas. The narrow walls are composited once at setup.

### Painting image content (sketch-owned)

`imgShade` (a `layerShade[(color: Vec3)]`) draws a procedural diagonal grid over
a base color; `patternPanel(c)` bakes a 256² panel per painting from a 4-color
palette. Image **content is the consumer’s concern** — the painting geometry/
shade just displays whatever `Panel` it’s handed. (This ownership split is the
one thing we keep for eventual reuse.)

### Scene composition

- Ceiling + four walls + paintings are collected into
  `aboveGround: Arr[AnyShape]`.
- `aboveGround` feeds both the **`GaussianMirrorReflection`** (floor reflection)
  and the HDR **`scenePanel`** (which binds scene `vp`).
- Floor shade blends its baked texture with the sub-resolution reflection panel
  (sampled by `fragCoord/res`, `reflStrength = 0.25`).
- `Bloom` over the scene panel picks up the ceiling HDR halos; `p.show(bloom…)`.
- Per frame: `input`/`controller` update, `sceneVp.set(vp)`, `mirror.paint(vp)`,
  `p.paint(scenePanel)`, `bloom.paint()`.

---

## Key library facts (still current)

- **Layer instances + blend** (`Layer.instances.add(...)`, `p.layer(shade,
  blendState = …)`): each instance is a **full-panel** draw with per-instance
  uniform overrides, drawn in order into one target. `BlendState.Multiply =
  BlendFn(Dst, Zero)` gives `result = dst·src` — the shadow accumulation path.
  No sub-rect scissoring of an instanced draw exists.
- **Panel layer pipeline** (`paintPanel`): shapes render first, then layers in
  order; a non-pong blend layer `load`-composes onto the live target in a shared
  pass (so `copyShade` writes noise, then the `Multiply` shadow layer blends on
  top). A layer whose slot-0 panel input is unbound instead auto-ping-pongs.
- **Geometry**: `Box` face callbacks give box-local `uvw ∈ [0,1]³`; `Quad(...)`
  builds custom quads; `Mesh(faces)` → `toBufferedGeometry(_, …)` → `Form`.
- **Transforms**:
  `Mat4.fromTranslationRotationScale(t, Quat.fromRotationY(a), s)`; walls are
  axis-aligned so each painting is a single `rotY`.
- **Randomness**: `trivalibs.utils.random.randInRange(min, max)`.

---

## Remaining work

The multi-painting and animation/live-shadow goals are **done** (see status
below). What's left:

- **Frames (optional):** `FrameSpec` (4 thin bars + a back plane in the frame
  color); when present, the canvas omits its own back face (the frame back quad
  covers it, avoiding coplanar z-fighting).
- **Configurable static/realtime (optional):** today the split is by wall index
  (`isAnimated(i) = i >= 2`). If we want it explicit, add a per-wall flag and
  branch composite-once vs. re-composite-each-frame at setup. The machinery is
  already unified (`compositeWallTex` + `animatedPanels`), so this is cosmetic.

### Deferred/dropped: `UniformArray[Vec4, N]`

Originally planned to pass N shadow rects as one uniform array. **No longer on
this sketch's path** — instanced blending handles arbitrary N without it. It's
still a reasonable future _library_ addition for other scenarios; the earlier
research (a `sealed trait UniformArray[T, N]` with a `WGSLType` emitting
`array<vec4, N>`, DSL indexing, an N-row `StructArray` buffer, and a `binding`
overload — ~4 small additive changes in `trivalibs/src`) stands if we ever want
it, but it is not needed here.

---

## Reuse strategy (copy-first, extract-later)

The museum look is good enough to reuse, but **planning the abstraction upfront
was unsatisfactory** — the encapsulation we designed cost more than it saved.

So the strategy is deliberately bottom-up:

1. **Copy the whole sketch** to seed a new one; change only the painting
   **content** (the `imgShade` / `patternPanel` / image panels).
2. Keep the copies flat and imperative.
3. **Only once a concrete, repeated need appears**, lift the genuinely-shared
   piece into `sketchlib.utils.*` / `sketchlib.shaders.*` — driven by the actual
   duplication, not a predicted API.

The one ownership split we hold from the start: **image content stays the
consumer’s concern**, never baked into the room/painting scaffolding.

---

## Roadmap status

- **M1 — Wall + Painting, first static render ✅ DONE.** Four walls, one random
  monochrome painting each, per-wall baked texture (local UV), flat-box painting
  geometry, single baked directional drop-shadow, all reflected in the floor.
  (Implemented as flat code in `Canvases.scala`, not a `Wall` block.)
- **M1b — UV test pattern on the canvas ✅ DONE.** Sketch-side `imgShade`
  diagonal grid over a palette base color; `patternPanel` builds a 256² panel
  per painting. Verifies the front/side/back UV projection.
- **Visual finetuning ✅ DONE & LOCKED.** Tints, noise, halos, bloom, floor
  reflection (`GaussianMirrorReflection`), and shadow shaping dialled in.
- **M2 — Multiple paintings per wall ✅ DONE.** 3 on each narrow wall, 4 on each
  wide wall, random sizes, inset even spacing (`WallSideMargin`), same color per
  wall. Implemented via **instanced multiplicative-blended shadows** (one
  instance per painting) over a once-baked noise texture — _not_ the stacked-
  layer or `UniformArray` routes originally sketched.
- **M3 — Animation + live shadows ✅ DONE (wide walls).** The wide walls' paintings
  sway vertically (distinct phase, slightly varying speed) with their shadows
  tracking live; animated walls re-composite each frame, narrow walls composite
  once. Unified `compositeWallTex` path for both. **Remaining:** optional frames;
  optional explicit per-wall static/realtime flag (currently by index).

### Locked decisions

- **Simplified flat architecture** — no `Wall` block/kit, no upfront reusable
  abstraction; plain data case classes + local `def`s in one file.
- **Instanced blended shadows over once-baked noise** is the shadow primitive —
  `compositeWallTex` (copy noise + N `Multiply`-blended shadow instances), one
  unified path for static (paint once) and animated (re-paint per frame) walls.
  Chosen over ping-pong stacked layers (fewer passes / less bandwidth) and it
  made `UniformArray` unnecessary here.
- **Floor reflection:** all above-ground objects (walls, paintings, future
  frames) contribute; the floor is the mirror plane.
- **Reuse:** copy-first, extract-later — no abstraction until duplication
  demands it.

---

## Verification

Every milestone: `bun run sketch rooms/canvases` compiles clean, then (assume
`bun run dev` already running) open `/rooms/canvases/` — walk WASD/arrows +
Space/Shift, drag to look.

- **M2 ✅:** several paintings per wall (3 narrow / 4 wide), each with a correct
  shadow; all reflect in the floor; bloom (ceiling halos) unaffected.
- **M3 ✅:** the wide walls' paintings sway and their live shadows track them,
  while the narrow walls stay static. **Remaining:** frames (when added) render
  with hidden backs.
