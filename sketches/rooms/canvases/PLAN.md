# Plan: `rooms/canvases` — walls with hanging paintings

## Context

`sketches/rooms/canvases/` is a fresh copy of `rooms/base` (plain pre-rendered
noise walls, no debug grid; bloom + floor reflection retained). We now want
**paintings hanging on the walls** and, in the process, to establish a reusable
abstraction — a **Wall that owns one or more Paintings** — designed so it can
later be lifted into `src/playground/` next to `MirrorReflection` / `Bloom`.

Goals, per the user:

- A **Painting** = a flat box. Primary size `width × height`, plus a small
  `depth`. Front face carries most of the UV; the four thin sides take the outer
  UV margin, **stretched ~1:3**, so the panel image appears wrapped around the
  frame like a stretched canvas. The back face uses the full (mirrored) UV. The
  painting renders an **arbitrary `Panel`** onto its surface.
- Optional **frame**: own width, gap from the canvas, color; when present it
  also adds a **back plane** in the frame color hiding the canvas back.
- Position paintings in **wall-local coordinates measured in world units**
  (metres along the wall width `u`, height `v`) — the wall converts to a world
  transform.
- The wall must render a **soft shadow** (a darkening box with smoothstep-faded
  edges) where each painting hangs.
- We deliberately want **both shadow mechanisms** in one sketch:
  - **static** paintings → shadow **baked** into the pre-rendered wall texture,
  - **moving** paintings → shadow computed **live in the wall scene shader**, so
    we can verify the shadow tracks the canvas as it moves.
- Paintings get **random sizes**; their image panels are **monochrome colors**
  for now.
- Split the four walls into **separate shapes**, each with its **own per-wall
  baked texture** and **local UV [0,1]** (chosen over the shared perimeter
  texture).
- **Research** whether to add **array uniforms** to the shader DSL and what it
  would take (the shadow data is naturally an array of rects).

Floor, ceiling (HDR halos), bloom, and the depth-driven floor reflection stay as
in `base`.

---

## Key library facts established during research

- **No array-uniform type exists.** `WGSLType`
  (`trivalibs/src/graphics/shader/types.scala`) covers
  scalars/vecs/mats/textures/sampler only. Uniform fields are emitted as
  `var<uniform> name: <wgslName>` one per binding
  (`derive.generateUniformGroupFromLists`). So passing N painting rects today
  means **N discrete `vec4` fields** unless we add an array type (see research).
- **Shadow math can live in one shared WGSL helper** used by _both_ the bake
  (noise) shade and the scene wall shade — static shadows baked, moving shadows
  live, identical falloff. A `WgslFn.dsl` helper auto-registers
  (`shader-dsl-guide.md`).
- **Shapes support `blendState`** (`Painter.shape(... blendState=)`) and
  **instances** (`shape.instances.add(...)`) — but we will _not_ need blended
  shadow quads; baking via the bake-shade uniform path is simpler.
- **Geometry**: `Box` (`trivalibs/src/graphics/geometry/shapes.scala`) gives
  per-face callbacks `face((corner, uvw) => vertex)` with box-local
  `uvw ∈ [0,1]³`; `Quad.fromCorners` / `Quad.apply(tl,bl,br,tr)` build custom
  quads. `Mesh(faces)` → `toBufferedGeometry(_, MeshBufferType.FaceVertices)` →
  `Form`.
- **Transforms**:
  `Mat4.fromTranslationRotationScale(t, Quat.fromRotationY(a), s)`; walls are
  axis-aligned so each painting's orientation is a single Y rotation (`rotY`).
- **Monochrome image panel**: a tiny panel cleared to the color
  (`p.panel(width=8, height=8, clearColor=(r,g,b,1))`, painted once). Fallback
  if an empty-shape panel doesn't clear as expected: a one-line `layerShade`
  outputting a constant color. At M1b the sketch builds these panels from a
  small procedural `layerShade` (base color + black diagonal/grid lines from
  `ctx.in.uv`) — needs a larger panel (e.g. 256²) for crisp lines. Either way
  the panel is created **in the sketch** and handed to the painting.
- **Randomness**: `trivalibs.utils.random.randInRange(min, max)`.
- Reusable-block reference shape: `src/playground/mirror/MirrorReflection.scala`
  — `trait` (public surface) + `object apply(...)` factory; panel-level `vp`
  left unbound on shapes so the same shape renders in scene + mirror.

---

## Design

### File layout

- `sketches/rooms/canvases/Canvases.scala` — the sketch (assembles the room,
  spawns paintings, wires shadows + reflection).
- `sketches/rooms/canvases/Wall.scala` — the reusable block
  (`package sketches.rooms.canvases`), self-contained for later extraction to
  `src/playground/paintings/`. Holds `PaintingSpec`, `FrameSpec`, `Wall`, the
  shared shadow `WgslFn`, the painting + frame geometry/shade builders.

Build still compiles only the sketch dir + `trivalibs/src` + `project.scala`, so
a second file in the package is fine.

### Painting geometry & UV (flat box)

Local space centred at origin: `width` along X, `height` along Y, `depth` along
Z; front = `+Z`. Let `mu`, `mv` be the UV margins reserved for the side wrap.
**1:3 stretch**: the side strip is a thin texture band of width `mu` (resp.
`mv`) mapped across the geometric `depth`, so the side carries _little_ image
spread over its depth (stretched), while most image content stays on the front.
For a front:side texel-density ratio of `stretch` (default `3`):
`mu = clamp(depth / (stretch * width), …)` (and
`mv = depth / (stretch * height)`). A small `mu` ⇒ small margin removed from the
front, side image stretched `stretch`× relative to the front. `stretch` is a
`PaintingSpec` tunable.

- **Front** (`+Z`): corners map to UV rect `[mu, 1-mu] × [mv, 1-mv]`.
- **Sides** (4 thin faces): each maps the band between the front-edge UV and the
  texture edge (0 or 1) across the depth — e.g. right side: U `1-mu → 1.0`, V
  spanning `[mv, 1-mv]`; top side: V `mv → 0.0`, U `[mu, 1-mu]`; etc.
- **Back** (`-Z`): **continuous with the sides' back edges**, so a free-standing
  canvas looks seamless when walked around. The sides run to the texture
  extremes at the back (left→`U=0`, right→`U=1`, top→`V=0`, bottom→`V=1`), so
  the back spans full `[0,1]` with the **same world-axis→UV mapping as the
  front** (geometric `+X`→`U=1`, top→`V=0`). No UV flip in the mapping:
  top/bottom stay, and the apparent **left/right swap is just the viewing
  direction** (the back is seen from the opposite side).
  - _Optimization (when a frame is present):_ the canvas back face is
    **skipped** — the frame's opaque back quad (same color) covers it. This also
    avoids z-fighting: two coplanar back quads at the same depth would shine
    through randomly, and a depth offset would be fragile — skipping is cleaner.
    So the back face is only built for frameless paintings.

Built as explicit `Quad`s (6 faces) via `Box(...)` face callbacks computing the
UVs above → `Mesh` → `Form`.

### Painting shade

`p.shade[(position: Vec3, uv: Vec2), (uv: Vec2), U, P]` where
`U = (vp: VertexUniform[Mat4], model: VertexUniform[Mat4], samp: FragmentUniform[Sampler])`,
`P = (img: FragmentPanel)`. Vert: `vp * model * vec4(pos,1)`. Frag:
`img.sample(uv, samp)`. `cullMode = None` (so it also renders in the mirror).
`vp` left **unbound** on the shape (panel supplies it: scene `vp` in scene
panel, reflected `vp` in mirror) — same trick as the walls.

### Frame (optional)

`FrameSpec(width, gap, depth, color)`. Geometry = 4 thin bars (flat `Box`es)
forming a rectangle around the canvas, offset outward by `gap`, plus a single
**back plane** quad — all in `color`. One flat-color shade
(`U = (vp, model, color)`), `vp` panel-level. Built relative to the painting's
own model matrix so frame + canvas move together. When a frame is present the
canvas geometry **omits its own back face** (the frame back quad covers it).

### Wall block

```
class Wall(
  p, center: Vec3, width, height,
  rotY: Double,                // axis-aligned wall orientation about Y
  inwardNormal: Vec3,
  tint: Vec3, texScale: Double,
  noiseShade, ...
)
```

Responsibilities:

- Build its own face `Form` (local UV `[0,1]`) + bake its own noise texture
  `Panel` via the (extended) `noiseShade`.
- `hang(spec, u, v, moving=false)` — record a painting; compute its world model
  matrix:
  `center + rightAxis*(u - width/2) + upAxis*(v - height/2) + inwardNormal*offset`,
  oriented by `Quat.fromRotationY(rotY)`. Returns a handle whose model
  `BufferBinding` can be updated each frame (for moving ones).
- Produce: the wall **scene shape** (reads baked tex + applies _moving_ shadows
  live), the painting + frame shapes, and the list of shapes to feed the mirror.
- Convert each painting to a **shadow rect** in wall-local UV
  `(cx, cy, halfW, halfH)` (slightly larger than the canvas, optionally offset
  down) for the shadow helper.

### Shadow: one helper, two consumers

Shared `shadowDarken(uv, rects, count) → Float` (smoothstep box falloff,
multiplied darkening). Implemented once and used by:

1. **Bake (noise) shade** — extend the existing `noiseShade` with the wall's
   **static** painting rects; their shadows are baked into the per-wall texture
   during the existing pre-render `p.paint(...)`.
2. **Scene wall shade** — a new wall scene shade samples the baked texture and
   applies the **moving** painting rects live (updated per frame). This is the
   literal "wall shader renders the shadow that tracks the canvas".

The **baked** consumer (1) appears at M1; the **live** scene-shade consumer (2)
first appears at M4 (animation). Rect array passing per the roadmap:

- **Plan A (no lib change):** fixed `MaxShadows` discrete `vec4` uniform fields
  per consumer (`1` at M1, `4` from M2), unrolled with a Scala `while` loop;
  unused slots have `halfSize = 0` (no contribution). The path through M1–M2
  (and M4 unless M3 lands first).
- **Plan B (deferred, M3/after M4):** a single `UniformArray[Vec4, MaxShadows]`
  field — far cleaner, used by both shades. See research.

### Sketch composition (`Canvases.scala`)

- Replace the single perimeter `wallForm`/`wallTex`/`wallShape` with **four
  `Wall` instances** (front/back/left/right) from the room `Box`, each with its
  own baked texture + local UV. Floor + ceiling unchanged.
- Hang several paintings per wall with `randInRange` sizes, monochrome image
  panels (cleared to random tints). Mark **some `moving = true`** (slow `u`
  drift or vertical sway) and the rest static.
- Feed all wall + painting + frame shapes into the existing `scenePanel`
  (panel-level `vp`) and into `MirrorReflection` so paintings reflect in the
  floor (they already read `vp` panel-level; `CullMode.None`).
- Per frame: update moving paintings' model matrices **and** their wall's live
  shadow-rect uniforms; everything else (mirror, bloom, show) unchanged.
- Keep/adjust the canvases card in `sketches/index.html`.

---

## Research: adding array uniforms to the shader DSL

**Verdict: feasible, moderate scope; uniform fixed-size `array<vec4, N>` is the
right first step.** Required changes (all in `trivalibs/src`):

1. **Type + WGSL name** (`graphics/shader/types.scala`): a marker, e.g.
   `sealed trait UniformArray[T, N <: Int]`, with a `given WGSLType` that emits
   `array<${WGSLType[T].wgslName}, ${constValue[N]}>`, `alignment = 16`,
   `byteSize = stride(T) * N` where std140 **stride is rounded up to 16** (so
   `vec4` is natural; `f32`/`vec2`/`vec3` waste space — recommend `vec4`
   elements, which fits our `(cx,cy,halfW,halfH)` rect exactly). Visibility
   wrappers already forward `WGSLType`, so `VertexUniform[UniformArray[...]]`
   works. `derive.uniformFieldTypes` already calls `WGSLType[_].wgslName`, so
   the WGSL `var<uniform>` declaration needs no change.

2. **DSL access** (`graphics/shader/dsl/types.scala` + `context.scala`): add a
   `UniformToExpr` case mapping `UniformArray[T, N]` to a new `ArrayExpr[T]`
   whose `.apply(i)` yields `Expr.raw(s"$name[$i]")` typed as `ToExpr[T]`.
   `TypedExprAccessor.selectDynamic` already returns the field name; the array
   wrapper just adds indexing.

3. **CPU buffer side** (`graphics/buffers/binding.scala`): a `UniformValue` /
   `UniformLayout` for the array → an N-row `StructArray` of the element's
   padded buffer (`StructArray.allocate[ElemBuffer](N)`), uploaded whole. Add a
   `BufferBinding`-style setter `setAt(i, value)` / `set(Arr[T])`. `gpuBuffer`
   sizing already uses `dataView.byteLength`.

4. **Painter + bind check**: a `binding[UniformArray[...]]` constructor overload
   (`painter.scala`) and extend `derive.checkUniformFieldType` to accept the
   array element/binding type.

**Scope:** ~4 small, localized additions; no change to existing call sites
(purely additive). Bundle-size safe (compile-time type + a thin runtime setter).
Tight runtime-sized arrays would instead need **storage buffers**
(`var<storage>`, a new bind-group path) — out of scope; the fixed-size uniform
array covers the painting-shadow use case.

**Recommendation:** **deferred** (roadmap M3 / after M4). M1–M2 ship on **Plan
A** (discrete `vec4` fields). Revisit `UniformArray[Vec4, N]` once the sketch
works statically — it's bounded, removes the N-field unrolling, and is reused by
both shadow consumers plus future sketches.

---

## Staged implementation roadmap

Each milestone is independently verifiable (`bun run sketch rooms/canvases` +
`bun run dev`).

### M1 — Wall + Painting data structures, first static render ✅ DONE

- `Wall` + `PaintingSpec` (**no frames yet**), per-wall `Form` + baked texture
  (local UV), painting flat-box geometry + shade rendering a monochrome image
  panel.
- **One painting per wall**, static (no animation).
- Shadow: **baked only**, `MaxShadows = 1` (single static rect baked into each
  wall texture via the noise/bake shade). No live shadow in the scene shade yet.
- All above-ground objects already feed the floor reflection (see below).
- _Checkpoint:_ four walls each with one centred painting + its baked shadow,
  reflected in the floor.

**Status:** implemented & rendering. Built [Wall.scala](Wall.scala)
(`PaintingSpec`, `HungPainting`, `Paintings` kit, `Wall`, top-level
`shadowMask`) and reworked [Canvases.scala](Canvases.scala) (4 walls, 1 random
monochrome painting each, extended `noiseShade`, mirror + scene wiring). Notes
from implementation:

- A clearColor-only image panel must be **painted once** before it can be
  sampled (else `createBindGroup` fails with an undefined resource) — image
  panels are pre-rendered with the bakes.
- Shadow refined past the original plan into a **directional drop shadow**
  (tunables atop `Wall.scala`): aspect-correct penumbra (`ShadowFadeWorld` in
  metres → per-axis UV), tight/short above, broad pooling below, medium sides,
  plus a top→bottom gradient (`ShadowGradTop`) so most darkening sits under the
  canvas. `ShadowStrength = 0.6`.
- `p.paint` has no `Arr` overload — pass panels as explicit args (or loop
  single-arg); the 6 static bakes are passed explicitly.

### M1b — UV test pattern on the canvas image ✅ DONE

- **In the sketch** (not the block): build the image panels from a small
  **procedural `layerShade`** — monochrome base color overlaid with **black
  lines edge-to-edge** (a diagonal, or a diagonal grid) driven by `ctx.in.uv`,
  so the canvas UV projection (front rect, side wrap ratio, back continuity) is
  **visually verifiable**. The `Painting` is unchanged — it just displays the
  `Panel` it's handed; color/line params and the generator live entirely in the
  sketch. (This is the ownership split we keep for extraction: image **content**
  is the consumer's concern, never `PaintingSpec`/`Wall`.)
- _Checkpoint:_ lines run corner-to-corner on the front face and wrap straight
  across the sides without kinks; back continuous.

**Status:** done. Sketch-side `imgShade` (`layerShade[(color: Vec3)]`) draws a
diagonal grid (`lineMask` on `uv.x±uv.y`, smoothstep-AA) over the base color;
`patternPanel(c)` builds a 256² panel per painting. Block unchanged.

### M2 — Multiple paintings per wall (Plan A) ← NEXT

- Up to **4 paintings per wall**, random sizes/positions, still static.
- Shadow still baked; `MaxShadows = 4` via **Plan A** (discrete `vec4` uniform
  fields, unrolled `while` loop) in the bake shade.
- _Checkpoint:_ several paintings per wall, each with a correct baked shadow.

### M3 — (optional) Upgrade to `UniformArray`

- Add `UniformArray[Vec4, N]` to the library (see research) and rewrite the
  shadow consumers to use it instead of discrete fields. **May be deferred past
  M4 — decided later.**

### M4 — Details: frames, animation, live shadows

- Optional `FrameSpec` (4 bars + back plane).
- **Moving** paintings: per-frame model update **and** a live shadow in the
  **scene wall shade** that tracks the canvas (Plan A discrete fields, or
  `UniformArray` if M3 landed). This is where the live shadow consumer first
  appears.
- _Checkpoint:_ frames render; moving paintings' shadows track them.

### Locked decisions

- **Floor reflection:** **all above-ground objects** — walls, paintings, frames
  — contribute to the floor reflection (added to the `MirrorReflection` shape
  set; floor itself is the mirror plane, so excluded).
- `MaxShadows`: **1** at M1, **4** from M2 on.
- `UniformArray` (Plan B) timing: **deferred**, revisit at M3/after M4.

---

## Files to change

- **New** `sketches/rooms/canvases/Wall.scala` — block: `PaintingSpec`,
  `FrameSpec`, `Wall`, shadow `WgslFn`, painting/frame geometry + shades.
- **Edit** `sketches/rooms/canvases/Canvases.scala` — four `Wall`s + per-wall
  textures, hang paintings (random sizes, monochrome panels, some moving),
  shadow wiring, reflection, per-frame updates.
- **Edit** `sketches/index.html` — keep/adjust the canvases card.
- _(Plan B only)_ `trivalibs/src/graphics/shader/types.scala`,
  `…/shader/dsl/types.scala`, `…/shader/dsl/context.scala`,
  `…/buffers/binding.scala`, `…/painter/painter.scala`, `…/shader/derive.scala`
  — `UniformArray[T, N]` support, plus a test under `trivalibs/test/shader/`.

---

## Verification

Every milestone: `bun run sketch rooms/canvases` compiles clean, then
`bun run dev` → open `/rooms/canvases/` (walk WASD/arrows + Space/Shift, drag to
look). Per milestone:

- **M1:** each of the four walls shows one centred painting (image wraps the
  sides; back continuous) with a single baked shadow; painting reflects in the
  floor; bloom (ceiling halos) unaffected.
- **M2:** up to 4 paintings per wall, each with a correct baked shadow.
- **M3 (if taken):** `bun run test` + `bun run check` (trivalibs) incl. a new
  `UniformArray` WGSL-gen test; sketch renders identically after the rewrite.
- **M4:** frames render (bars + hidden back); **moving** paintings' live wall
  shadow **tracks** the canvas as it drifts/sways (shadow-sync target); all
  above-ground objects reflect in the floor.
