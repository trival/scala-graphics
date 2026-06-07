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
  axis-aligned so each painting's orientation is a single yaw.
- **Monochrome image panel**: a tiny panel cleared to the color
  (`p.panel(width=8, height=8, clearColor=(r,g,b,1))`, painted once). Fallback
  if an empty-shape panel doesn't clear as expected: a one-line `layerShade`
  outputting a constant color.
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
**1:3 stretch**: the side strip is a texture band of width `mu` (resp. `mv`)
mapped across the geometric `depth`; pick `mu = clamp(3 * depth / width, …)`
(and `mv` analogously) so a thin band stretches over the side — `sideUvFrac`/the
`3.0` ratio is a `PaintingSpec` tunable with a sensible default.

- **Front** (`+Z`): corners map to UV rect `[mu, 1-mu] × [mv, 1-mv]`.
- **Sides** (4 thin faces): each maps the band between the front-edge UV and the
  texture edge (0 or 1) across the depth — e.g. right side: U `1-mu → 1.0`, V
  spanning `[mv, 1-mv]`; top side: V `mv → 0.0`, U `[mu, 1-mu]`; etc.
- **Back** (`-Z`): full `[0,1]`, mirrored in U so it reads upright from behind.

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
own model matrix so frame + canvas move together.

### Wall block

```
class Wall(
  p, center: Vec3, width, height,
  yaw: Double,                 // axis-aligned wall orientation about Y
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
  oriented by `Quat.fromRotationY(yaw)`. Returns a handle whose model
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

**How the rect array is passed (decision point — see research):**

- **Plan A (no lib change, default-safe):** fixed `MaxShadows` (e.g. 6) discrete
  `vec4` uniform fields per consumer, unrolled with a Scala `while` loop; unused
  slots have `halfSize = 0` (no contribution). Works today.
- **Plan B (preferred if we add the feature):** a single
  `UniformArray[Vec4, MaxShadows]` field — far cleaner, used by both shades.

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

**Recommendation:** implement **Plan B** (`UniformArray[Vec4, N]`) as part of
this work — it's bounded, removes the ugly N-field unrolling, and is reused by
two shades plus future sketches. Ship-safe fallback is **Plan A**.

---

## Open decisions for review

1. **Array uniforms now or later?** Plan B (add `UniformArray[Vec4, N]` to the
   library) vs Plan A (discrete `vec4` fields in the sketch, library untouched).
   Recommended: **Plan B**.
2. **`MaxShadows` cap** per wall/consumer (default proposal: **6**).
3. **Reflect paintings in the floor?** Recommended: **yes** (consistent realism;
   small extra cost).

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

1. `bun run sketch rooms/canvases` compiles clean.
2. _(Plan B)_ `bun run test` (trivalibs) incl. a new `UniformArray` WGSL-gen
   test; `bun run check` type-checks the library in isolation.
3. `bun run dev` → open `/rooms/canvases/`:
   - Paintings hang on all four walls at the given `(u,v)`, correctly oriented,
     with the image wrapping the sides and (where specified) a coloured frame +
     hidden back.
   - **Static** paintings show a soft baked shadow on the wall behind them.
   - **Moving** paintings: the live wall shadow **tracks** the canvas as it
     drifts/sways (the verification target for shadow sync).
   - Paintings appear in the **floor reflection**; **bloom** (ceiling halos)
     unaffected.
   - Walk with WASD/arrows + Space/Shift, drag to look.
