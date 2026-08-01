# Room templates — step-by-step implementation

Implementation sequencing for the first three room templates, derived from
`grid-ceiling-rooms-plan.md`. That document is the _why_; this one is the order
of work, and every step ends in something you can look at in the browser.

| #     | Template                         | What it proves                                                |
| ----- | -------------------------------- | ------------------------------------------------------------- |
| **A** | `templates/rooms/grid-canvases`  | box plan, grid ceiling, coffer light, confinement, hanging    |
| **B** | `templates/rooms/l-room`         | concave plan — the footprint generalization actually holds    |
| **C** | `templates/rooms/hex-partitions` | non-axis-aligned plan, triangular raster, free-standing walls |

Two naming/ordering calls made here rather than asked:

- **B and C are named for their shape, not their content.** `grid-canvases`
  keeps the name the roadmap fixed; `l-room` and `hex-partitions` follow the
  same "what situation does this template enable" rule.
- **The `src/utils/room/` extraction happens between B and C**, not after C. The
  roadmap triggers it on "the second exhibition or the second shape, whichever
  comes first" — B is that second shape, and doing it before C means the hexagon
  is written against the extracted functions rather than being a third copy that
  then has to be unpicked.

Throughout: the Vite dev server is assumed running on port 3000 — do not start
it. Each step's check is `bun run sketch <path>` followed by a look at
`http://localhost:3000/<path>/`. Use `bun run sketch:watch` while tuning.

---

## STATUS — as of 2026-07-31

**Template A is built through A6.** Next action is **A7**, the tuning pass,
which the author is doing by eye before A8 starts.

| Step                        | State                                                  |
| --------------------------- | ------------------------------------------------------ |
| A0 scaffold + taxonomy move | ✅ verified in browser                                 |
| A1 footprint replaces box   | ✅ verified identical to `canvases`                    |
| A2 camera confinement       | ✅ verified, incl. the devMode gate in `bun run build` |
| A3 library prerequisites    | ✅ verified via `tests/texture-bake`                   |
| A4 coffer light             | ✅ verified                                            |
| A5 raster geometry          | ✅ verified                                            |
| A6 raster shading           | ✅ verified, after four artifact fixes below           |
| **A7 tuning pass**          | **next — author tuning by eye**                        |
| A8 hanging affordance       | not started                                            |
| A9 template pass            | not started                                            |

### Library changes that landed alongside

All additive; every existing sketch and the trivalibs test suite still pass.

| Where                | What                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `trivalibs` math     | `.xz` swizzle on `Vec3`/`Vec4`, CPU and GPU — it was missing while `xy`/`yz` existed                                |
| `trivalibs` dev      | `devMode` made public (was `private`), for dev-only affordances that must not ship                                  |
| `trivalibs` geometry | `Quad.fromDimensions` with an explicit tangent, plus `fromDimensionsCenter`; the inferring form now delegates to it |
| `src/utils/bake`     | `TextureBaker[U]` per-bake uniforms; `clearColor` on `prepare`/`apply`/`bake`/`bakeBlock`                           |
| `src/utils/bloom`    | opt-in soft-clip tonemapping (`toneKnee`/`toneWhite`), default reproduces the old hard clamp exactly                |

Unifying `Quad.fromDimensions` exposed a **real bug**: the inferring form used
`up.cross(n)` unnormalized as its `u` direction, and `|up × n|` is 1 only when
the two are perpendicular — so a 45°-tilted normal shrank the quad to 0.71× in
both axes. Every call site passed an axis-aligned normal, so it never showed.
Fixed, with two regression tests in `test/geometry/Shapes.test.scala`.

### Artifacts found at A5/A6, and their causes

Recorded because none was obvious from the symptom, and C will meet the same
geometry.

| Symptom                                              | Cause                                                                                                                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dashed shimmer along every beam crossing             | Both families' soffits at the same height are **coplanar**; a depth buffer resolves interpenetrating volumes, not coplanar faces. Fixed with a 0.6 mm per-family stagger — 80× depth precision at eye distance, 0.28 px subtended.                           |
| Dark line at beam edges, from every camera position  | **Atlas texels no face covers** — partial coverage at band edges, bands whose face was culled, and the `u` tail of every beam shorter than the longest — were black, and filtering/mips bled them back in. Fixed by clearing the bake to the material color. |
| Staircase on beam silhouettes despite 4× MSAA        | **No tonemap.** A hard clamp at 1.0 sent every edge sample above ~26 % coverage to pure white, collapsing 4 of MSAA's 5 gradations. Fixed by the soft clip in `Bloom`.                                                                                       |
| Background visible in a thin strip near wall/ceiling | Shallow sightlines cleared the raster and **missed the light plane**. `LightOverhang` is now derived from room span, coffer depth and eye height rather than guessed (1.5 m → 3.51 m).                                                                       |

Two of these were misdiagnosed first, and the record matters more than the fix:
culling the perimeter beams' outer side faces made the dark line _worse_,
because it left their atlas bands unwritten — which is what identified the real
cause. And the background strip was initially blamed for the dark line; it is a
genuine but separate defect.

### Open items to pick up

- **Beam ends get no edge fade.** Only the cross-section is faded; a shared
  atlas cannot recover each beam's far end, because every beam's `u` range
  differs. Watch for a seam where beams meet the walls.
- **The background strip may not be fully understood.** It was reported as
  appearing equally on the X and Z axes, which does _not_ fit the model used to
  derive the overhang — that predicts Z failing across a much wider band, since
  the requirement scales with the room's span. The derived overhang covers the
  worst case on both axes, so if it still shows, the mechanism is a different
  one and deserves a fresh look rather than a wider plane.
- **`CeilTint` is currently used for both the soffits and the atlas clear
  color.** Fine while they agree; if the soffit tint is re-tuned in A7, the
  clear color should follow it.

---

## Template A — box room with grid ceiling

Roadmap steps 1–4, split so each has its own visual gate. A is where all the
machinery gets built; B and C are then mostly data.

### A0 — Scaffold and taxonomy

Create `sketches/templates/rooms/grid-canvases/` from
`cp -r sketches/rooms/canvases`, package
`sketches.templates.rooms.gridcanvases`, `@main def roomsGridCanvases()`. Delete
the copied `main.js`. Move `sketches/rooms/grid-ceiling/` →
`sketches/experiments/grid-ceiling/` (it is the experiment the raster mechanism
is ported from; the taxonomy in `CLAUDE.md` already says so). Carry a trimmed
`PLAN.md` into the sketch dir.

Register both in `sketches/index.html` in this same step, per `CLAUDE.md`: a new
`templates` category with the `grid-canvases` entry, and a new `experiments`
category the moved `grid-ceiling` entry relocates into — its old `/rooms/`
`href` is dead the moment the directory moves.

**Check:** `bun run sketch templates/rooms/grid-canvases` builds, and
`/templates/rooms/grid-canvases/` is pixel-identical to `/rooms/canvases/`.
Nothing has changed yet — this only proves the new path, package and build work.
Also rebuild the moved `experiments/grid-ceiling` so the tree stays green, and
click through every link on `/` — all four rooms plus the two touched entries.

### A1 — Footprint replaces the box

Introduce `Facing` / `Ring` / `Footprint`, `floorEdges` / `ceilingEdges`, the
shader emitters `edgeSetDist` / `cornerDist`, and the generalized
`edgeDist(wp, normal, edges, topY)`. Derive walls from ring edges via `mkWall`
with computed `rotY`; floor and ceiling become bounding-box quads. Split
`EdgeFadeWorld` into `EdgeFadeWorld` + `GrimeWidth`, both starting at 0.08.
Re-anchor the wall tint gradient to
`(WallTopY - wp.y).smoothstep(TopFadeDepth, 0.0)`.

**Strip the sketch here, not at A0:** delete paintings, shadows, the composite
path, sway, `imgShade`/`patternPanel`. Keep the halo-strip ceiling for now — it
is the A/B reference. Keep the Part 4 hooks (`facing`, `Ring.height`, explicit
edge sets, per-surface `topY`) even though a box exercises none of them.

**Check:** side by side with `/rooms/canvases/`, mentally subtracting the
paintings. Floor grime line, corner noise fade, wall gradient, ceiling halos and
floor reflection identical. Any visible difference is a port bug, not a design
choice. Sanity-check the derived `rotY` against the four hand-written values at
`Canvases.scala:533-560` before trusting it.

### A2 — Camera confinement

`nearestBoundary` / `isInside` / `confine` on the CPU side of the same ring data
(`Arr`, `while`, no Scala collections — per-frame path). Named defaults
`WallClearance = 0.5`, `EyeHeight = 1.7`. Expose `devMode` from `trivalibs.dev`
(currently `private` at `dev/dev.scala:43`) and gate free vertical on it.

`confine` runs **two passes**, because a rectangle's four inner corners are
concave and one pass leaves the camera 0.01 m from a wall there.

**Check:** hold forward into each wall — camera stops 0.5 m short, view never
clips through. Walk diagonally into a wall — it _slides_, does not stick. Press
into each of the four corners, which is the case one pass fails. Hold
Space/Shift: flies under the dev server. `bun run build` and confirm it does not
fly in the built sketch.

### A3 — Library prerequisites

Two additive changes, both needed by A5/A6 and cheapest before there is anything
to migrate:

1. **Per-bake uniforms on `TextureBaker`** (`src/utils/bake/`) — `ctx => Block`
   1-arg form, `apply` left uniform-free, binding at **shape** level so it is
   typechecked, surfaced through `prepare`. Roadmap Part 5.1 settles the
   direction; the ergonomics were settled here:
   - **`prepare` returns a named tuple `(panel, shape)`.** No new type; bind on
     `.shape`, paint the `.panel`. A wrapper re-declaring `bind` was rejected
     because `Bindable.bind` is `inline` with **eight arity overloads** doing
     the compile-time name/type checks — any wrapper would have to duplicate all
     eight to stay typed, which also rules out the "have `prepare` take the
     pairs" option.
   - **`apply` is an extension on `TextureBaker[NoUniforms]`**, not a method.
     That is what makes baking with unset uniforms _structurally_ impossible
     rather than discouraged: a baker carrying uniforms simply has no `apply`.
   - **`NoUniforms`, not `EmptyTuple`** — `AnyNamedTuple` is opaque, so a plain
     tuple does not conform to it; the empty schema is
     `NamedTuple[EmptyTuple, EmptyTuple]`.
   - Everything touching `BakeBindings[U] = Concat[BakeUniforms, U]` must be
     `inline` (the factories) or take `U` **explicitly** (`buildVert[U]`) —
     match types are not invertible, so inference cannot recover `U` from an
     argument typed `BakeBindings[U]`. The generated vertex stage names its
     `model` uniform directly as WGSL rather than through `ctx.bindings.model`,
     since the typed accessor would need `BakeBindings[U]` to reduce while `U`
     is still abstract.

2. **`Quad.fromDimensions` with an explicit tangent**
   (`trivalibs/src/graphics/geometry/polygon.scala`) — beam soffits have a `-Y`
   normal, so the inferred in-plane orientation would run their atlas `u` along
   world `-Z` instead of along the beam.

**Check:** `sketches/tests/texture-bake` still renders unchanged, and
`grid-canvases` re-baked with `topY` passed as a uniform instead of a baked-in
constant is pixel-identical to A1. Pipeline count, not looks, is what changed.

### A4 — Coffer light, no raster yet

Snap the plan to the lattice (`snapHalfExtent`), drop the wall top to
`WallTopY = CeilY - StripHeight`, delete `ceilTex`/`ceilForm`/the halo block,
and put the HDR light plane at `lightY = CeilY + CofferDepth`, overhanging the
plan. `HaloColor` → `LightColor`. Mirror `aboveGround` gains the light plane and
`alphaScale` becomes `lightY`.

**What the plane emits is curation** (roadmap, _The light plane_) — halos, bulbs
behind diffuse glass, sky, a color cast. The stage's side is only the quad, the
`Rgba16Float` target, the `aboveGround` entry and bloom at `threshold = 1.0`.

Ship a **minimal custom light shader**, not a uniform field: HDR base modulated
by a low-frequency sine along each plan axis, periods in world meters and
deliberately not multiples of each other. Roughly six lines, written as an
obviously separate and swappable block rather than folded into the room
construction. A flat plane would be simpler but reads as a stage decision — the
slight undulation is what tells a reader the shader is theirs to replace.

Meters rather than UV here because the blob size should not stretch when the
room's aspect changes — **not** because UV is discouraged. A halo shader in the
same slot would rightly use UV, since "six halos across" is a count, not a
spacing (roadmap, _The light plane_). Say so in the comment, so the next reader
picks by intent rather than by imitation.

**Check (in addition to the below):** the undulation is visible but slight, and
`LightWaveAmount` is the only knob that moves it. Set it to `0.0` and the plane
goes flat — that is the "did I wire the right thing" test, not a mode to keep.

This is deliberately a step with a wrong-looking result: an open glowing ceiling
recess with nothing in front of it. That is what makes A5's occlusion legible.

**Check:** the ceiling is one uniform bright plane, clearly _above_ the wall
line, and it blooms hard. Walls end at `WallTopY` with the band above them open.
Floor mirror shows the recess.

### A5 — Raster geometry

`Beam` / `BeamFamily`, `familyBeams(f, edges)` projecting footprint vertices
onto the family normal, `clipLine(edges, origin, dir)`, three visible faces per
beam built in the beam's own frame with atlas bands. Two families at
`dir = (1,0)` and `(0,1)`. Shade the beams with a flat placeholder tint for this
step — geometry is what is being judged.

**Check:** the four payoffs, all at eye height and above:

- Looking forward, the light plane is hidden behind the raster; no bloom.
- Tilting up, light opens through the gaps and bloom ramps in.
- Walking sideways, the light plane visibly lags the raster (~26 % slower at
  `CofferDepth = 1.0`).
- Every wall is bordered by a beam flush with its plane, and the light openings
  are inset by one beam width all round — no opening runs into a corner. This is
  the lattice snapping paying off; if a wall has no beam against it, the snap is
  wrong.

Also confirm the mirror shows the raster, and that the reflected light does not
itself bloom after `reflStrength`.

### A6 — Raster shading

Bake the beam atlas with `TextureBaker` against the same `roomNoise` at world
position, the same `edgeDist`-driven fade of the normal-varied term, `CeilTint`
on the soffits. **No junction darkening anywhere** — not at crossings, not where
the raster meets a wall, not in the pockets.

**Check:**

- No hard seam where the raster meets the walls — and no dark line there either.
- Beam crossings are **not** darker than the beam runs. If they are, an
  occlusion term has crept back in.
- At `WallTopY` the value is continuous; a visible jump means the tint gradient
  and the beam shading disagree about where the wall ends.
- Soffits read as the same color as the `canvases` ceiling.

### A7 — Tuning pass

`CofferDepth`, `GridSpacing`, `StripWidth`, `StripHeight`, `LightColor`, the
light plane overhang, `TopFadeDepth`, bloom. Expect to iterate; this is the step
with taste in it. Confirm every knob you reach for is in the tunable block at
the head of the file — anything you had to hunt for further down belongs up
there.

**Check:** walk the room and look up from several positions. Nowhere can you see
_past_ the light plane's edge through a gap near a wall; if you can, widen the
overhang.

### A8 — Hanging affordance

`paintingForm` / `hang` / `shadowMask` / `shadowShade` / `copyShade` /
`compositeWallTex` back from `canvases`, with `hang`'s parameters renamed to
`centerFromLeft` / `centerHeight`. Each wall binds **a `Panel`, whatever
produced it**, so switching a wall from `wallBaker(...)` to
`compositeWallTex(wall)` is a one-line change at the producer.

**Two things are no longer verbatim, because `Wall` shed both fields during A7's
refactor.** Neither is a design change to make here — just do not reintroduce
the fields by reflex when porting:

- **`rotY` is derived, not stored.** `canvases`' `hang`
  (`Canvases.scala:446-478`) reads `wall.rotY` for
  `Quat.fromRotationY(wall.rotY)`, then copies it onto `Painting.rotY` for the
  sway loop. A wall now carries its orientation once, as `inwardNormal`. Add

  ```scala
  extension (w: Wall) def rotY: Double = Math.atan2(w.inwardNormal.x, w.inwardNormal.z)
  ```

  and every call site reads unchanged. `Painting` may keep storing `rotY`, since
  there it is a captured animation constant rather than a duplicate of live
  geometry.

- **`Wall` carries no `Form`.** A wall is plan data; the form is built at the
  use site with `form(Arr(wall.quad))`. So `compositeWallTex(wall)` takes the
  wall's form (or panel) as an argument rather than reaching through the wall
  for it.

Rename `TexScale` → `AmbienceTexScale` while porting, and keep the wall shade's
inputs separable: the ambience panel is one input, and a wall's own artwork
texture is a **second input at its own resolution**, not another entry in the
composite (roadmap, _The wall surface is curation too_). No template here
carries wall artwork, so nothing is built for it — the point is only that the
shade is not written in a shape that forecloses it. Shadows stay in the
composite at ambience resolution, where they belong.

Curation for this step is deliberately crude: two or three fixed-size flat-color
pieces at fixed positions. No randomized sizes, no even `count`-per-wall
spacing, no sway — those are `canvases`' curation, not stage infrastructure.

**Check:** shadows land as they do in `canvases`, and the pieces read under the
coffer light rather than the old halo strips — the first point at which the
lighting change is judged against a subject. Then check the seam in the other
direction: moving, resizing or removing a piece touches only the curation code,
never the room construction.

### A9 — Make it a template

File header saying it is a template. Non-obvious decisions explained beside the
code. Clear separation of tunable vs structural constants. `PLAN.md` carries the
longer why, including **No ambient occlusion by default** stated where someone
would edit the shading.

**Check (not visual):** read the file cold, as someone who has not seen the
roadmap. Would they know where to touch to change the room shape, or to add a
partition? A template that only makes sense next to the plan document has not
met the bar.

---

## Template B — L-shaped room

The roadmap says shapes are "nothing but ring data". That is true of the
_geometry_, and B exists to find out where it is not true of everything else.
Three things get exercised for the first time: concave corners, `clipLine`
returning more than one interval, and a bounding-box floor that extends past the
plan.

### B1 — The ring

`cp -r` template A to `sketches/templates/rooms/l-room`. Replace the 4-point
ring with a 6-point one, authored in lattice units (integer multiples of
`GridSpacing`, offset by `StripWidth/2`) so every vertex lands on a beam edge.
Nothing else changes. Add its `sketches/index.html` entry under `templates`,
directly below `grid-canvases`.

**Check:** the room is L-shaped. Every wall including the two at the concave
corner has a perimeter beam flush with it. The raster is cut to the plan — no
beams floating over the cut-out, and `clipLine` is now genuinely returning split
intervals for the lines that cross the notch.

### B2 — Concave corner treatment

**Check, standing in the inner corner:** the grime line wraps it as cleanly as
it wraps a box corner, and the noise fade meets there without a seam. This is
the single thing `Canvases.scala:192-197` could not do, so it is the payoff for
the whole footprint rewrite.

Then check the **convex** corner (the L's protruding one) from the room side. If
its noise fade reads wrong, gate `cornerDist` with a per-wall CPU flag rather
than reaching for shader math. It is a fade, not a darkening — do not add
occlusion at either corner.

### B3 — Confinement in the wedge

**Check:** press forward into the concave corner from several angles. The
two-pass `confine` already landed in A2 — a box's own inner corners are concave,
so this was needed there rather than here — meaning B's notch corner should hold
0.5 m with no code change. If it does not, that is a footprint bug, not a
clamping one: check the notch edges' inward normals rather than adding passes.

Then walk the whole boundary with the wall on one side and confirm the slide
holds all the way round, including through both corners.

### B4 — Light plane and phantom floor

The light plane still overhangs the **bounding box**, so it covers the cut-out
too — which is correct and needs no change. The floor quad also spans the
bounding box, so ~25 % of it is behind walls.

**Check:** from every reachable position, nothing of the cut-out region is
visible — no floor, no light, no gap at the corner where two walls meet the
notch. Fly in dev mode to see the phantom floor and confirm it is only reachable
from there. This is the invariant the roadmap's "the region outside the plan is
never visible" argument rests on; B is where it is first actually tested.

### B5 — A metric light shader, where it finally means something

**Swap in a light shader whose layout is anchored in world meters, and make that
the point of this template's light plane.** A is where the choice was invisible;
B is where it can be shown.

On a rectangle, UV and meters differ only by a constant — same uniform spacing,
different arithmetic to reach it — so A's metric sine is defensible but proves
nothing. On an L the two diverge for a reason that is easy to state and easy to
see: **the bounding box is not a room.** "N features across the plane" refers to
a rectangle that neither leg of the L fills and no visitor can perceive, so the
count is anchored to a frame that is not there. A metric spacing is perceptible
everywhere, in both legs and across the notch.

The shader that demonstrates this best: **discrete pools of light on the beam
lattice** — the plan is already snapped to `GridSpacing`, so put an emitter
every _k_ cells and let the light lattice and the raster above it agree. That
agreement is only expressible in world meters, it reads as a deliberate
architectural alignment rather than a texture, and it carries **continuously
through the concave corner**, which is exactly what a bounding-box layout cannot
do.

It also happens to need no boundary treatment: discrete pools do not fade at the
plan edge, and any pool falling outside is occluded by a wall like everything
else out there.

**Check:** stand in each leg in turn and confirm the light spacing reads the
same in both, then stand at the notch and confirm the lattice runs through it
without a seam or a phase jump. Look up and confirm the pools line up with the
raster cells. Then the negative control: temporarily re-express the same layout
in the plane's UV and observe it drift against the beams and change spacing
between the legs — that is the demonstration, and it is worth doing once even
though the result is thrown away.

### B6 — Template pass

Same bar as A9. B's `PLAN.md` should be short and say what B adds over A: an L
is a 6-point ring and nothing else — plus the one thing that is _not_ free, the
light layout, and why it moved to meters here rather than as a general rule.

---

## X — Extraction to `src/utils/room/`

Triggered by B being the second shape. Do it before C so the hexagon is written
against the extracted functions.

Extract exactly the roadmap's list and stop there:

| Extract                                             | Why                                                  |
| --------------------------------------------------- | ---------------------------------------------------- |
| `confine` / `nearestBoundary` / `isInside`          | pure behavior, no look decision — the strongest case |
| `Ring` / `Footprint`, `floorEdges` / `ceilingEdges` | plain data plus derivation                           |
| wall derivation from a ring edge                    | mechanical frame construction                        |
| `clipLine(edges, origin, dir)`                      | fiddly 2D geometry, identical everywhere             |
| `edgeSetDist` / `cornerDist` emitters               | bulky build-time WGSL assembly, no taste in it       |

**Not** extracted: `roomNoise` tuning, tint composition, raster shading, beam
profiles, the grime line. Those stay duplicated in each template.

Break the two couplings while moving: the wall builder must **take** its top
height (grid asks `CeilY - StripHeight`, a flat ceiling asks `CeilY`), and the
wall bake must be a composition of independent terms the room selects, not one
fixed formula with the grid's choices baked in.

**Check:** A and B both rebuild and are pixel-identical to their pre-extraction
selves. Then the real test — **can a sketch replace any single step inline?**
Verify by hand-building B's `Arr[Beam]` inline in one throwaway edit and
confirming everything downstream still works, then revert.

Rewriting `canvases` on the extracted utils is the roadmap's full acceptance
test. It is a **separate follow-up**, not a gate on C — but if the extraction
cannot obviously express a flat halo-strip ceiling, stop and fix the seam before
building C on it.

---

## Template C — hexagon with two free-standing walls

Two independent features that happen to land in one template: a plan that cannot
snap to the lattice, and rings the room is _outside_ of.

### C1 — The hexagon

`cp -r` template B to `sketches/templates/rooms/hex-partitions`, replace the
ring with a regular 6-point hexagon. `snapHalfExtent` does not apply — a
hexagon's walls are not parallel to any two beam families at once — so the plan
is authored directly in meters. Add its `sketches/index.html` entry under
`templates`, completing the family in build order.

**Check:** six walls at 60°, `rotY` derived correctly for every one of them
(this is the first template where no wall is axis-aligned, so a wrong `atan2`
shows immediately as a wall shaded or hung sideways). Confinement holds at all
six corners. The raster is still the two perpendicular families from A and will
look wrong against the walls — expected, C2 fixes it.

### C2 — Triangular raster and explicit perimeter beams

Three `familyBeams` calls at 60°, each family parallel to one opposite wall
pair. Add `perimeterBeams(edges)` — one beam per wall edge, collinear with it —
as another producer into the same `Arr[Beam]`. This is the generator the roadmap
defers precisely until a plan that cannot snap needs it.

**Check:** the raster is symmetric across the hexagon, every wall has a beam
along it, and the light openings are inset all round. Triple points exist where
three families cross; beams interpenetrating there is accepted, not a bug. If
three coincident families read badly, stagger each family's `gridY` by a few
millimeters.

### C3 — Junction darkening, decided by looking

The roadmap rules out junction darkening for perpendicular grids because a 90°
wedge admits most of the hemisphere. Three families at 60° meet far more sharply
and the triple points more sharply still, so **that argument does not carry
here** — decide it in this template on its own merits.

**Check:** look up at a triple point. If the wedges read implausibly flat, add a
darkening term _here only_, in this sketch's raster shading, with its own
constant. It needs no accommodation in the shared code.

### C4 — Free-standing walls

Two `Outward` rings, each a thin closed rectangle, `height` below `roomHeight`
(say 2.5 m). Nothing else should need to change — this is the step that
retroactively justifies carrying `facing`, `Ring.height`, explicit edge sets and
per-surface `topY` since A1.

**Check**, one line per hook:

- Grime line and noise fade wrap both partitions on all four faces (`floorEdges`
  includes them).
- The raster runs straight **over** them, uninterrupted (`ceilingEdges` filters
  them out by height).
- Camera keeps 0.5 m clearance walking a full lap around each one, and the
  even-odd `isInside` test correctly treats the partition interior as outside.
- Each partition's own top rim gets the tint gradient and the noise edge fade,
  anchored to _its_ `topY`, not the room's.
- One pipeline still bakes every wall in the room — partitions at a third height
  did not add a shade. If they did, A3's uniforms are not wired through.
- No top caps, and none needed: with `y` locked to `EyeHeight` the tops are
  never in view and the floor mirror sees only undersides. Flying in dev shows
  the open tops; that is expected, not a defect.

If a partition reads as **floating**, the fix is a soft downward-cast darkening
on the floor keyed off `edgeSetDist(pxz, partitionEdges)` — a shadow-shaped
term, not a lighting model.

### C5 — Curation and template pass

Hang crude fixed pieces on the partition faces as well as the walls — that is
what the partitions are for, and it is the only proof that `facing` gives
hangable faces on both sides.

**Check:** pieces on a partition's two faces both shade and shadow correctly,
and a piece on the far face is not visible through the near one.

Then the A9 bar again. C's `PLAN.md` records the two things it adds — the
explicit perimeter-beam generator, and partitions as `Outward` rings — plus
whatever C3 decided about triple points.

---

## What this sequence deliberately leaves out

- **Animated shadows / `Sway`.** Returns when the hanging machinery becomes a
  real shared utility, with static and animated as two equal cases. Not in any
  of these three templates.
- **Real exhibition content.** Roadmap step 5. All curation here is crude on
  purpose; the first real exhibition is its own sketch and will send A7's
  constants back for another pass, which is normal.
- **Prebaked AO and the ambience stack.** Available modules, off by default.
  Nothing darkens an edge until a room asks for it by name.
- **`boundsCeiling` on `Ring`.** The `height >= roomHeight` predicate holds for
  all three templates. It breaks on columns, which reach the ceiling but must
  not clip the raster — substitute it then, and the change is invisible until
  that point.
- **Array uniforms and storage buffers.** Declined, with revival conditions in
  roadmap Part 5.
