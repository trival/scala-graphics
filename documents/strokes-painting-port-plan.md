# Strokes Painting Port — 2D lines, multi-buffer forms, brush painting

Roadmap for porting the Rust sketch `sketches/strokes/1` — a generative brush
painting built from thousands of variable-width polyline strokes.

Companion documents:

- [trivalibs/documents/done/line2d-plan.md](../trivalibs/documents/done/line2d-plan.md)
  — the library-side `line_2d` port (phase 2 here, in detail).
- [trivalibs/documents/independent-todos.md](../trivalibs/documents/independent-todos.md)
  — the `Form.set()` buffer-reuse and random-helper TODOs, both absorbed by
  phases 1 and 3 here.

Rust reference bundles:

- `documents/old-sketches/repomix-rust-sketches.xml` — the sketch itself:
  `sketches/strokes/1/src/main.rs` (L5460–5605),
  `sketches/strokes/1/src/painting.rs` (L2434–2721),
  `sketches/strokes/1/shader/src/lib.rs` (L3873–3955).
- `trivalibs/documents/rust-painter/repomix-trivalibs-core.xml` — `line_2d`:
  `mod.rs` L3462–3849, `buffered_geometry.rs` L3136–3459, tests L3851–3946,
  `rand_utils.rs` L6227–6345, interpolation (bezier) L1888–1946.
- `trivalibs/documents/rust-painter/repomix-painter.xml` — the painter:
  `form.rs` L6932–7228, the draw loop L8838–8852, the `random_lines` example
  L3325–3478.
- `/home/trival/code/personal/trivialspace/playground/src/public/tests/shapes/bevel-lines-2d-wasm`
  — the original TypeScript/wasm test bed for the line implementation
  (`crate/src/lib.rs`), the model for phase 2a.

---

## 1. Why this needs a roadmap

The sketch cannot be ported directly; three prerequisites are missing.

**A `Form` holds exactly one vertex buffer.** `Line.splitAtAngle` splits a
stroke at sharp corners into _several_ line fragments, and the Rust painter grew
`Form::update_all` plus a draw loop over `currently_active_buffers` precisely
for that: N geometry buffers per form, drawn in sequence with the same pipeline,
bind groups, topology and front face. Scala's `Form`
(`trivalibs/src/graphics/painter/form.scala`) has a single
`vertexBuffer`/`indexBuffer` pair, and `renderShapeOnPass`
(`trivalibs/src/graphics/painter/painter.scala:1601`) issues one draw. `Form`
also reallocates a fresh GPU buffer on every `set`, while the painting sketch
re-uploads a form once per tile per pass (hundreds of times) — so it needs
Rust's grow-only reuse too.

**`line_2d` is not ported.** The whole stroke pipeline routes through
`trivalibs_core::rendering::line_2d`. A design exists
([line2d-plan.md](../trivalibs/documents/done/line2d-plan.md)) but was never
implemented.

**CPU helpers don't exist**: normal-distribution random + `pick` / `shuffle`,
CPU `hsv2rgb`, `Vec2.cubicBezier`.

Order of work: **multi-buffer form → line2d → CPU helpers → painting sketch.**
The form work goes first because it is self-contained, has its own Rust example
to verify against, and is the thing the line example then draws through — so
each phase lands on already-verified ground.

---

## 2. Phase 1 — Multiple geometry buffers per `Form` ✅ done

**Edit:** `trivalibs/src/graphics/painter/form.scala`,
`trivalibs/src/graphics/painter/painter.scala`

Restructure `Form` to mirror Rust `FormStorage` (`repomix-painter.xml`
L6951–6967) — a per-buffer record holding the GPU buffer plus its allocated and
in-use sizes:

```scala
private[painter] class FormBuffers:
  var vertexBuffer: Opt[GPUBuffer]
  var vertexBufferMaxSize: Int      // allocated (padded) bytes
  var vertexBufferCurrentSize: Int  // bytes actually in use
  var vertexCount: Int
  var indexBuffer: Opt[GPUBuffer]
  var indexBufferMaxSize: Int
  var indexBufferCurrentSize: Int
  var indexCount: Int
  var indexFormat: String
```

`Form` keeps `buffers: Arr[FormBuffers]`, `activeBuffers: Int`, plus the
existing `topology` / `frontFace`.

- `set(...)` keeps its current signature and writes buffer 0 with
  `activeBuffers = 1` — **no call-site changes** in existing sketches.
- New `setAll[F](geometries: Arr[BufferedGeometry[F]])` (and a
  `vertices: Arr[StructArray[F]]` sibling): grows `buffers` as needed, uploads
  each, sets `activeBuffers = geometries.length`.
- New `Painter.form(geometries = …)` overload beside the existing
  `form(geometry = …)` (`painter.scala:637`).
- Upload is **grow-only**: reuse the existing `GPUBuffer` when
  `maxSize >= newPaddedSize`, otherwise `destroy()` + `createBuffer`. Sizes are
  padded to 4 bytes (Rust `get_padded_size`).
- Draws bind only the live slice — `setVertexBuffer(0, buf, 0, currentSize)`
  (the 4-arg overload already exists, `webgpu.scala:103`) — so a
  smaller-than-capacity upload can't leak stale vertices from a previous frame.
- `renderShapeOnPass` (`painter.scala:1580–1644`): the `setVertexBuffer` /
  `setIndexBuffer` / draw trio moves **inside** `drawCall` under a
  `while i < form.activeBuffers` loop. Pipeline, bind groups, topology and front
  face are still set once, exactly as Rust does — so instancing and
  panel-binding paths are untouched.

Library code ⇒ bundle discipline: `Arr`, `while`, no varargs on the hot path.

This supersedes the `Form.set()` destroy-always TODO in
[independent-todos.md](../trivalibs/documents/independent-todos.md).

**As implemented**, deviating from the sketch above in three places:

- No separate `setAll` — `set` (and `painter.form`) gained the plural params
  `geometries` / `verticesAll` beside `geometry` / `vertices`, matching the
  singular/plural sugar `Panel.set` already uses. Plural wins when both are
  given. Existing call sites are untouched.
- The draw loop lives inside `drawCall` in `renderShapeOnPass` and skips buffers
  with `vertexCount == 0`; index binding is keyed on `indexCount > 0` (a form
  buffer whose geometry carries no indices reports 0 rather than keeping a stale
  index buffer).
- `setIndexBuffer(buffer, format, offset, size)` had to be added to the WebGPU
  facade for the live-slice bind. Writes are padded to 4 bytes as well as
  allocations: an odd `uint16` index count makes `writeBuffer` reject the write,
  which the old single-buffer path would also have hit as soon as `line2d`
  produced odd-length triangle-strip indices.

Not ported: Rust's `new_with_sizes` / `with_size` capacity pre-allocation. The
grow-only path reaches the same high-water mark after the first few uploads.

### 1a. `trivalibs/examples/random_lines/`

The Rust painter has a dedicated example for exactly this feature
(`repomix-painter.xml` L3325–3478). Port it, so the multi-buffer + grow/reuse
path is verified in the library itself before anything depends on it:

- `generateAllLines()` — 1–20 lines, each 1–20 quad segments (six vertices per
  segment, triangle list), random start/end in NDC, width `0.06` (bumped from
  the Rust original's 1–10 range once running, to stress the buffer-count churn
  harder).
- One form created with all buffers up front; every second the whole set is
  regenerated with a **different line count and different vertex counts** and
  pushed via `form.set(verticesAll = ...)`, plus a new random color. That
  fluctuation is the actual test: buffers must be added, reused when the data
  fits, and reallocated when it grows.
- Single `Shape`, `Attribs = (position: Vec2)`,
  `Uniforms = (color: FragmentUniform[Vec3])`, white clear, multisampled,
  `paintAndShow` in `animate`.

**Gate: passed.** Deployed to
[trivalibs-examples.trivialspace.net/random_lines](https://trivalibs-examples.trivialspace.net/random_lines/)
and visually confirmed — line count and color visibly change every second, no
validation errors, no stale geometry from a previous (larger) frame leaking into
the draw.

Regression: all 10 sketches rebuild (`bun run sketches`), all trivalibs examples
rebuild (`bun run examples:build`), and `bun run test` is green — the
single-buffer `set` path is unchanged for existing call sites. Also manually
checked live (all examples + all sketches) after deploying — no regressions
found.

Side effect of this phase: trivalibs examples now have a manual deploy path
(`trivalibs/build-dist.ts` + `wrangler.jsonc` + `bun run deploy`), unlike the
sketch repo's Cloudflare-automatic Vite build — see `trivalibs/README.md`
"Development". Future example additions (phase 2a, etc.) just need
`bun run deploy` run once after landing.

---

## 3. Phase 2 — `line2d` in trivalibs ✅ done

Full detail in [line2d-plan.md](../trivalibs/documents/done/line2d-plan.md) §2,
including an "As implemented" section for the API deviations. Summary of the
deliverable:

- **New** `trivalibs/src/graphics/geometry/line2d.scala` — `LineVertex[T]`,
  `Line[T]`, inlined neighbour iterators, `smoothEdges` / `cleanup` /
  `splitAtAngle`, `toBufferedGeometry(…)` and
  `Arr[Line[T]].toBufferedGeometries(…)`.
- **New** `trivalibs/test/geometry/Line2d.test.scala` — parity with the Rust
  tests plus `splitAtAngle` and buffer-shape cases.
- `Lerp[Unit]` added to `trivalibs/src/graphics/geometry/package.scala` — since
  moved with the rest of `Lerp` to `trivalibs/src/graphics/math/interpolation.scala`
  (phase 3).

`toBufferedGeometries` is the API the multi-buffer form consumes: it threads
`totalLength`, `prevDirection` / `nextDirection` and alternates
`swapTextureOrientation` across fragments, so a split stroke still reads as one
continuous brush mark.

**Gate: passed.** `bun run check` + `bun run test` in `trivalibs/` — 20 line2d
tests, whole suite green.

**As implemented**, deviating from the sketch above:

- **No props class.** Rust's `LineGeometryProps` becomes plain default
  parameters on `toBufferedGeometry` (`smoothDepth`, `smoothAngleThreshold`,
  `smoothMinLength`, `totalLength`, `prevDirection`, `nextDirection`,
  `swapTextureOrientation`). `toBufferedGeometries` exposes only the three
  `smooth*` ones and derives the rest per fragment. Rust's unused
  `cap_width_length_ratio` is dropped.
- `Line[T]` carries a `defaultData: T` in place of Rust's `T: Default` bound;
  `Line(20.0)` builds a `Line[Unit]`.
- The public neighbour combinator is
  `flatMapWithNeighbours((prev, curr, next) => …)`; the extension methods live
  in `object Line` (the package's top-level `toBufferedGeometry` name is taken
  by the mesh one).
- `Lerp[Unit]` was added, and all `Lerp` givens moved into an `object Lerp`
  companion so implicit search finds them without a `given` import.
- **Painter fix**: a strip-topology pipeline needs `primitive.stripIndexFormat`
  to be drawn indexed, and phase 1 never hit it (every indexed form so far was a
  triangle list). `Form` now tracks its index format and `getPipeline` sets
  `stripIndexFormat` for strip topologies, keyed into the pipeline cache; a form
  with mixed 16/32-bit index buffers widens them all to 32 bit.

### 2a. `trivalibs/examples/bevel_lines_2d/`

Port of the old `bevel-lines-2d-wasm` test. It lives in the **library**
examples, not in this repo's `sketches/` — it tests trivalibs functionality
(line geometry + multi-buffer form), nothing sketch-specific, and
`trivalibs/CLAUDE.md` wants an example per implementation step. Detail in
[line2d-plan.md §3](../trivalibs/documents/done/line2d-plan.md).

**Geometry** (CPU, rebuilt on resize):

1. `Line(20.0)`, ~20 random points over 1.5× the canvas, random widths in
   `[20, 300]`.
2. `flatMapWithNeighbours` inserting two extra vertices at `lerp 0.333 / 0.666`
   with fresh random widths.
3. `cleanup(0.5, 0.1, 0.1)`.
4. `splitAtAngle(Pi * 3 / 4)`.
5. `toBufferedGeometries(smoothDepth = 4, smoothAngleThreshold = 0.001, smoothMinLength = 5.0)`.

**One form, N buffers** —
`p.form(geometries = …, topology = PrimitiveTopology.TriangleStrip)`, one
`Shape`, one draw sequence, on the phase-1 machinery.

**Shade** — `Attribs = LineAttribs`, `Varyings = (uv: Vec2, localUv: Vec2)`,
`Uniforms = (size: VertexUniform[Vec2])`. Vert: `pos = position / size`, output
`vec4(pos.x, -pos.y, 0, 1)`. Frag: `vec4(uv, 1, 1)` — the old test's uv debug
color, which makes mitre and uv errors visually obvious.

`onResize` regenerates geometry and updates `size`; white clear color.

**Gate: passed.** Clean mitre joins, no gaps at the split corners, uv gradient
continuous across fragments — served at `examples:dev` → `/bevel_lines_2d/`,
geometry regenerated on every resize.

One deviation: the vert is `pos = position / size` (no `.fit0111`) — the points
are generated centred on the origin like the original wasm test, so they are
already in NDC after the divide.

---

## 4. Phase 3 — CPU helper gaps (trivalibs) ✅ done

Ported from the Rust originals; needed by phase 4.

- `trivalibs/src/utils/random.scala` — currently only `rand()` / `randInRange`.
  Add `randInt(max)`, `randBool()`, `randSign()`, `randNormal01()` /
  `randNormal11()` (`rand_utils.rs` L6316–6326), and `Arr` extensions `.pick` /
  `.shuffle` (Fisher–Yates, in place). Folds in the "Random helpers" TODO from
  [independent-todos.md](../trivalibs/documents/independent-todos.md) — add the
  `randVec2/3/4` variants listed there in the same touch.
- **New** `trivalibs/src/graphics/math/cpu/color.scala` — CPU `hsv2rgb` /
  `rgb2hsv` mirroring the WGSL versions in
  `trivalibs/src/graphics/shader/lib/color.scala` (same IQ formulation), so
  CPU-computed colors match shader-side conversions.
- `Vec2` / `Vec3` immutable ops — `quadraticBezier` / `cubicBezier`
  (`repomix-trivalibs-core.xml` L1888–1946).

**Gate: passed.** `bun run check` + `bun run test` in `trivalibs/` (whole suite
green, 16 new tests across `test/math/Bezier.test.scala`,
`test/math/CpuColorCoords.test.scala`, `test/utils/Random.test.scala`), all
trivalibs examples rebuild, all 10 sketches rebuild.

**As implemented**, deviating from the sketch above:

- **CPU/GPU helper naming settled as a library-wide convention** (now in
  `trivalibs/CLAUDE.md`): a helper with both a CPU and a shader form gets **one
  name, dispatched by receiver type**, never two namespaces. So the CPU color
  conversions are extensions on `Vec3` (`c.hsv2rgb`), and
  `shader/lib/color.scala` gained matching `Vec3Expr` extensions —
  `Color.hsv2rgb(c)` becomes `c.hsv2rgb` in shader bodies. The `WgslFn` objects
  stay the definition site; the extensions are `inline` and erase to identical
  WGSL (verified by diffing the built `main.js`). This mirrors how `NumExt` and
  `Vec*ImmutableOpsG` already unify CPU and GPU math.
- **Full parity, not just the two conversions the plan listed.** CPU side has
  `hsv2rgb` + `Smooth` / `Smoother`, `hsl2rgb`, `rgb2hsv`,
  `rgb2hsl` — every WGSL variant. Coords got the same treatment in the same
  touch (**new** `math/cpu/coords.scala`: `polarToCart` / `cartToPolar`).
- Existing call sites converted to the extension form as idiomatic examples:
  `sketches/textures/pool-tiles/PoolTiles.scala` (4 `Polar.*`, 2 `Color.*`) and
  `sketches/textures/moving-plates/MovingPlates.scala` (1 `Color.*`).
- The color / coords extensions are generic over any `Vec3`/`Vec2` with the
  `*Base` + `*ImmutableOps` givens, so they work on the mutable classes and the
  `*Tuple` variants alike (tuples need `import …math.cpu.given`, having no
  companion implicit scope).
- Random helpers landed in `utils/random.scala` as planned, plus
  `randIntInRange`. `shuffle()` mutates in place and `shuffled()` returns a
  copy — a single method that did both would have been a footgun. `pick()`
  throws `jsError` on an empty array.
- Bezier landed as statics on the immutable-ops traits, matching Rust's argument
  order: `Vec2.cubicBezier(t, a, c1, c2, b)`. Control points are named `c1`/`c2`
  rather than Rust's `u`/`v` — they are control points, not tangents.
- CPU noise is **not** part of this phase (nothing needs it), but the API surface
  is recorded in
  [independent-todos.md](../trivalibs/documents/independent-todos.md) so it lands
  under the same mirroring rule when it does.
- **`Lerp` moved to `trivalibs/src/graphics/math/interpolation.scala`** (**new**)
  out of `graphics/geometry/package.scala`. It is a math primitive that geometry
  happens to be the main consumer of; with `mix`/`lerp` on the vec ops traits and
  the Bézier statics beside them, interpolation now has one home. Only
  `geometry/grid.scala` needed a new import — every other consumer already
  imports `graphics.math.*` — so no re-export shim was left behind.
- **Bézier deliberately *not* folded into a `Lerp`/`Interpolate` type class.**
  `Lerp` exists because it is abstracted over (`Line[T]`, `Quad.subdivide`,
  `Grid.subdivide`, `splitByPlane` are generic in the vertex type). Bézier has no
  polymorphic consumer — every call site knows it holds a `Vec2` — and the
  statics compile to plain arithmetic where a derived given would cost a summon
  plus a virtual call per point. `interpolation.scala` carries a note on when to
  revisit: the day a generic curve/spline builder appears, add
  `Interpolate[T] extends Lerp[T]` there with the vector instances delegating to
  the existing statics.

---

## 5. Phase 4 — The painting sketch `sketches/strokes/tile-strokes`

**Scope: the painting itself, nothing around it.** One painting, rendered into
one panel, shown full-screen — the same thing `strokes/1` does, minus the room.
Rendering several paintings (several panels, or one panel of instances) is a
natural extension of the same code and can follow once one looks right, but it
is not required by this phase.

**Explicitly deferred: the gallery space.** Hanging these paintings as canvases
on walls is separate future work, not part of this plan — see §6.

Two sub-phases, each independently viewable.

### 4a — Tiling + strokes, flat color ✅ done

Port `painting.rs` (L2434–2721) into a `Painting.scala` beside the sketch:

- `Tile(top, left, width, height, color)`, `Color(hue, lightness)`.
- `subdivideTile` — random split; direction chosen from aspect ratio + variance;
  `splitRatios` walked pairwise.
- `createPainting(w, h, colorCount)` — hue palette from repeated `randomSplit`
  of `[0, 1]`, `brushSize = h / 50`, 1–4 subdivision rounds.
- `getLineEdges` — zig-zag point list alternating between the tile's left and
  right edges.
- `makeCurve` — cubic bezier between consecutive edge points with a random
  normal offset (new `Vec2.cubicBezier`).
- `generateTileStrokes` — shuffled tiles → per tile an `Arr[Line[Unit]]` with
  `lenOffset` threaded so `uv.x` runs continuously across the whole stroke, plus
  a per-tile color from `calculateColor` (new CPU `hsv2rgb`).

Rendering, mapped from `main.rs` (Rust `Layer` → Scala `Panel`, Rust `Effect` →
Scala `Layer`):

- `bgPanel` — 2×2 `layerShade` filling the background color.
- `paintingPanel` — canvas-sized, `clearColor` transparent, one line `Shape`
  over the multi-buffer `Form`, blend `color = (One, Zero, Add)` /
  `alpha = (One, One, Max)` (built from `BlendFn` / `BlendState` in
  `painter/enums.scala`).
- `canvasPanel` — **no** `clearColor` (⇒ `loadOp = "load"`, accumulates), one
  layer sampling a panel bound explicitly to its first slot (see
  `trivalibs/docs/guide/gotchas.md`, "a layer's first texture slot is
  auto-injected"), blend `BlendState.Alpha`. The first paint composites
  `bgPanel`; then the binding switches to `paintingPanel` and each stroke batch
  composites on top.
- Paint loop runs in `init`, not `animate`: per tile — `form.setAll(...)`,
  update the `randOffset` and `color` bindings,
  `p.paint(paintingPanel, canvasPanel)`. Repeated 3× over all tiles, matching
  Rust. `animate` only calls `p.show(canvasPanel)`.

Frag shader at this stage: flat `color` with the two edge falloffs, no noise.

**As implemented.** Two files under `sketches/strokes/tile-strokes/`:
`Painting.scala` (the CPU model — tiles, palette, strokes; no GPU types) and
`TileStrokesSketch.scala` (shades, panels, paint loop). Package
`sketches.strokes.tile_strokes`, entry point `@main def tileStrokes()`.
Deviations from the sketch above:

- **`randomSplit` inserts one value, not `idx + 1`.** The Rust original pushes
  an interpolated value after _every_ element up to the chosen index — a bug
  that makes the palette grow unpredictably and strips `colorCount` of its
  meaning. With a single insertion, `createPainting(w, h, n)` yields exactly `n`
  hues, which is plainly what the code intends (`hues.pop()` at the end only
  makes sense against that reading).
- **No `pow(2.2)` on the output color.** The Rust frag gamma-corrects; this repo
  removed that everywhere (commits `2d3062c`, `1a616d9` — `vec4(col.pow(2.2),
  1.0)` → `vec4(col, 1.0)`), so it is dropped here too, as the plan asked to
  check.
- **`form.set(geometries = …)`**, not `setAll` — phase 1 landed the plural
  parameter on `set` instead of a separate method.
- **`randOffset` is bound and updated but unread** by the 4a shader; it exists
  so 4b is a shader-body edit with no plumbing change. Likewise the frag body
  starts from an explicit `base := 0.0` that 4b replaces with the fbm term.
- **The painting is fixed at the canvas size it saw at init.** Both painting
  panels are sized explicitly, so a window resize rescales the shown image
  rather than repainting — same as Rust, and repainting hundreds of tiles per
  resize event would be far too costly.

**Gate: passed.** Visually confirmed at `:3000/strokes/tile-strokes/` — tiled
color fields with visible stroke structure.

### 4b — Brush shader ✅ done

Port `line_vert` / `line_frag` (L3886–3934) to the shader DSL:

- vert as in phase 2a, plus `uv` / `localUv` passthrough.
- frag: `alpha = fbmSimplex2d(uv * 2 + randOffset, 4, 2.0, 0.7) / 4.0`
  (`trivalibs/src/graphics/shader/lib/random/simplex.scala:226` — already
  ported), minus the `localUv.x.fit0111.abs.pow(10)` and
  `uv.y.fit0111.abs.pow(10)` edge falloffs, `+ 0.3` clamped, times
  `uv.x.smoothstep(1.0, 0.90)` end fade; output `vec4(color.pow(2.2), alpha)`.
- The Rust `pow(2.2)` is a gamma correction — check it against this repo's
  current convention (commits `2d3062c`, `1a616d9` removed unnecessary gamma
  correction) before keeping it.

**As implemented.** The frag body is the Rust one line for line, with two
deviations: **no `pow(2.2)`** (checked as the plan asked — this repo strips
gamma correction, see 4a), and the octave count is written `4.i`, the library's
own literal-to-`IntExpr` idiom (`examples/noise_tests` uses `5.i`) rather than a
type ascription. Everything else — the `/4.0`, both `pow(10)` edge falloffs, the
`+0.3` clamp, the `smoothstep(1.0, 0.90)` end fade — is unchanged.

### 4c — Animation: the travelling brush

Not in `strokes/1`'s `main.rs`, which only prepaints and then shows a still
image. The behaviour comes from the earlier
`sketches/strokes/1/old_code/tile-fields/` version —
`get_painting_animated_layer` (`repomix-rust-sketches.xml` L813–878), whose
`TileData.line_geometries: Vec<Vec<BufferedGeometry>>` is **one geometry per
added point**:

```rust
l.add(points[0]);
for i in 1..points.len() {
    l.add(points[i]);
    line_frames.push(l.clone());   // a frame per point
}
```

each frame emitted with `total_length: Some(total_length)` — the *finished*
stroke's length, not the partial one's.

Ported as a brush that travels along its path, drawn on a panel of its own and
only committed to the painting once the tile is finished:

- **A fourth panel.** `strokePanel` (was `paintingPanel`) holds only the part of
  the current stroke the brush has reached; `canvasPanel` is the painting;
  **`displayPanel`** is new and is what gets shown — one layer sampling both and
  compositing `mix(canvas.rgb, stroke.rgb, stroke.a)`. That is what lets a
  half-drawn stroke be visible without entering the permanent canvas.
- **Per frame:** advance the brush by `tpf · BrushPointsPerSecond / 1000`
  points, redraw `strokePanel` from `stroke.linesUpTo(segIdx, ptIdx)`, and
  `p.paintAndShow(displayPanel)`. `canvasPanel` is untouched.
- **On completion:** redraw the stroke whole, `p.paint(canvasPanel)` to blot it
  in, wipe `strokePanel`, and rest `TilePauseMs` before the next tile.
- `MaxBrushStepsPerFrame = 12` caps per-frame catch-up, and hitting the cap
  drops the backlog — a backgrounded tab hands back one enormous `tpf`, which
  would otherwise fast-forward a whole stroke in one frame.
- `PrepaintPasses = 3` complete passes still run during `init`, so the first
  frame shows a finished painting rather than a canvas filling in one tile at a
  time.

Two supporting changes:

- **Library:** `Arr[Line[T]].toBufferedGeometries` gained
  **`totalLength: Opt[Double] = null`**. It otherwise derives the length `uv.x`
  is normalised against by summing the lines it is given — which for a *partial*
  stroke renormalises over the growing prefix every frame, so the bristle
  texture visibly crawls backwards as the brush advances. Passing the finished
  stroke's length pins it, exactly as the Rust props struct did.
- **Sketch:** `TileStrokes` (finished `Line`s) became **`TileStroke`**, which
  keeps the raw per-segment curve points plus the finished `totalLength`, and
  builds `Line` fragments on demand via `linesUpTo(segIdx, ptIdx)` — chaining
  `lenOffset` across completed segments so `uv.x` stays continuous. Rendering
  the whole stroke is the same call with the indices saturated.

---

## 6. Future work — the gallery installation (not in this plan)

The Rust original hung these paintings in a hexagonal room. We will do something
equivalent eventually, but deliberately **not here**, because the room work has
moved on independently of the painting content:

`sketches/rooms/canvases/` is a first-person walkable museum room whose look is
finetuned and locked (see its [PLAN.md](../sketches/rooms/canvases/PLAN.md)) —
pre-baked wall noise, depth-driven floor reflection, HDR ceiling halos + bloom,
instanced multiplicative drop-shadows, swaying paintings. That is a
substantially better result than the old Rust room, and it is the aesthetic the
exhibition should adopt.

What blocks a direct merge: those shaders and strategies are built around **four
rectangular walls**. The wall texture compositing, shadow rects, and reflection
all assume that geometry, and none of it translates to a hexagonal room as-is.
Working that out is its own design problem.

So the split is: **this plan produces a painting** (a panel of brush strokes
that any consumer can sample); a **later plan installs it in a space**, deciding
then how the `rooms/canvases` aesthetic generalises to a non-rectangular room.
Keeping the painting's output a plain panel texture is what keeps that door open
— no coupling to how it is eventually displayed.

---

## 7. Critical files

| File                                              | Action                                                              |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| `trivalibs/src/graphics/painter/form.scala`       | multi-buffer + grow-only reuse                                      |
| `trivalibs/src/graphics/painter/painter.scala`    | `form(geometries = …)`; draw loop at L1601–1611                     |
| `trivalibs/examples/random_lines/`                | **new** — port of the Rust multi-buffer form example                |
| `trivalibs/src/graphics/geometry/line2d.scala`    | **new** — `Line`, `LineVertex`, `toBufferedGeometry`                |
| `trivalibs/test/geometry/Line2d.test.scala`       | **new** — Rust test parity                                          |
| `trivalibs/src/graphics/geometry/package.scala`   | add `Lerp[Unit]` (later moved out, see below)                       |
| `trivalibs/examples/bevel_lines_2d/`              | **new** — bevel-lines port (line geometry verification)             |
| `trivalibs/src/utils/random.scala`                | `randInt`, `randBool`, `randNormal*`, `pick`, `shuffle`, `randVec*` |
| `trivalibs/src/graphics/math/cpu/color.scala`     | **new** — CPU color conversions (receiver extensions)               |
| `trivalibs/src/graphics/math/cpu/coords.scala`    | **new** — CPU `polarToCart` / `cartToPolar`                         |
| `trivalibs/src/graphics/shader/lib/color.scala`   | `Vec3Expr` extensions mirroring the CPU names                       |
| `trivalibs/src/graphics/shader/lib/coords.scala`  | `Vec2Expr` extensions mirroring the CPU names                       |
| `trivalibs/src/graphics/math/vec2.scala` (+ vec3) | `cubicBezier` / `quadraticBezier`                                   |
| `trivalibs/src/graphics/math/interpolation.scala` | **new** — `Lerp` moved out of the geometry package                  |
| `sketches/strokes/tile-strokes/`                  | **new** — painting sketch + `Painting.scala`                        |
| `trivalibs/src/graphics/geometry/line2d.scala`    | `toBufferedGeometries(totalLength = …)` for partial strokes (4c)    |

## 8. Verification

```bash
cd trivalibs && bun run check          # library type-checks in isolation
cd trivalibs && bun run test           # Line2d.test.scala green
cd trivalibs && bun run examples:build # then examples:dev → random_lines,
                                       #                    bevel_lines_2d
bun run sketch strokes/tile-strokes    # then open :3000/strokes/tile-strokes
```

The Vite dev server on :3000 is assumed to be already running.

Visual gates: phase 1a — line count changes each second, no stale geometry;
phase 2a — continuous uv gradient, clean mitres, no gaps at `splitAtAngle`
corners; phase 4a — tiled color fields with visible stroke structure; phase 4b —
brush texture matching the Rust original.

---

## 9. Progress

- [x] Phase 0 — plan docs (this file + dependent updates)
- [x] Phase 1 — multi-buffer `Form` + `examples/random_lines`
- [x] Phase 2 — `line2d.scala` + tests + `examples/bevel_lines_2d`
- [x] Phase 3 — CPU helpers (random, color, coords, bezier)
- [x] Phase 4a — tiling + strokes, flat color
- [x] Phase 4b — brush shader
- [x] Phase 4c — animation (travelling brush, merged per completed tile)
