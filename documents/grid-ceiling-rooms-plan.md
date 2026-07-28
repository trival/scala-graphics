# Grid-ceiling rooms on a general floor-plan footprint

## Context

`sketches/rooms/canvases/` established the look we want for an art space: baked
noise surfaces, soft edge treatment in the corners, a darkened contact line at
the floor, hung canvases with multiplicative drop shadows, a blurred floor
mirror and bloom. It stays untouched — and later gets **rewritten on the
extracted utils without changing how it looks**, which is what keeps those utils
honest (**Part 6**).

The goal is not one better room. It is a **stage for many exhibitions**, each
hung with its own procedurally generated content and each re-tuned around that
content — see _What this is actually for_ below, which is the frame the rest of
this plan should be read in.

Two things should now grow out of it, in one new sketch:

1. **A grid ceiling.** Instead of the current flat ceiling with baked HDR halo
   strips, the light becomes a recessed luminous plane sitting _above_ the
   ceiling line, hidden behind a raster of crossing bulks. Because the light
   plane is further away it moves more slowly under camera translation than the
   raster — you only see the light itself, and get the bloom, when you look
   close to straight up.
2. **A room shape that is no longer a box** — and, with it, a raster that is not
   locked to the world axes. Later sketches want L-shaped, hexagonal, O-shaped
   (a box wall standing inside the room, hung with canvases on all four of its
   sides) and H-shaped (two rooms joined by a tunnel) plans. In every one of
   those, the floor contact line must still be darkened and the normal-dependent
   noise must still fade out at every geometry edge, including the concave inner
   corners that a box simply doesn't have.

3. **Camera confinement.** The same floor plan should keep the walker inside the
   room — no walking through walls, stopping ~0.5 m short of every surface,
   including the outer faces of an O-shape's inner box. This falls out of the
   footprint for free and is a third consumer of the same data.

Plus one thing explicitly _not_ built now but designed for: **free-standing
walls** — partitions that stop below the ceiling, so they take floor contact
shading and block the camera, but the ceiling grid runs straight over them.
Nothing in step 1 needs them; the point is that the data model should make them
an addition rather than a restructuring. **Part 4** states the three hooks this
costs and what they buy.

**Conventions for all room sketches** (worth stating once, and worth promoting
to `CLAUDE.md` if it holds up): the unit is the **metre** throughout — every
dimension, offset, fade width and margin in these sketches is metres, no
normalized or arbitrary scales. Default **eye height is 1.7 m**, and the default
**wall clearance is 0.5 m**.

Because metres and normalized coordinates coexist in the same file, **`u` / `v`
/ `uv` are reserved for normalized `[0,1]` texture coordinates and nothing
else.** Anything carrying metres gets an explicit name saying what it measures
from — `centerHeight`, `centerFromLeft`, `heightAboveFloor`. `canvases` violates
this in `hang(wall, spec, u, v)` (`Canvases.scala:446`), where `u` and `v` are
metres along the wall and up from the floor while the very same function
computes a genuinely normalized `baseRect` right below them. That is a trap, not
a style quibble: the two conventions meet inside one body.

**`canvases` is not retro-fixed for this.** It stays exactly as it is until it
is rewritten on the shared utils (**Part 6**), at which point the rename comes
along with everything else. Consistency is not worth an ad-hoc edit to a sketch
whose entire present value is being an unchanged visual reference.

The blocker for (2) is `Canvases.scala:192-197`:

```scala
def edgeDist(wp: Vec3Expr, normal: Vec3Expr): FloatExpr =
  val Far = 1000.0
  val dx = (RoomWidth / 2.0 - wp.x.abs) + normal.x.abs * Far
  val dy = wp.y.min(RoomHeight - wp.y) + normal.y.abs * Far
  val dz = (RoomDepth / 2.0 - wp.z.abs) + normal.z.abs * Far
  dx.min(dy).min(dz)
```

That is half-extent arithmetic on an axis-aligned box. On an L or an O it
reports the distance to the _bounding box_, so both the edge fade and the
contact darkening break exactly at the interesting corners. Replacing it with a
distance function over an arbitrary floor-plan polygon is the single change that
unlocks all four shapes — and it is also what makes the grid ceiling integrate
softly, since the strips need the same wall-junction treatment.

**Decisions taken** (from the clarifying round): all new code stays
self-contained inside the new sketch, no `src/utils/room/` module yet — the
canvases PLAN.md records that an earlier `Wall.scala` kit was deliberately
dropped, and we only promote to `src/` once two shape sketches actually share
it. The ceiling is a **full luminous coffer behind a full-footprint raster**.
The raster crosses in **two directions**. Step 1 ships a **rectangular** room so
the refactor and the ceiling can be judged against `canvases` before any odd
shape exists.

---

## New sketch

`sketches/rooms/grid-canvases/` — `cp -r sketches/rooms/canvases` as the seed,
package `sketches.rooms.gridcanvases`, `@main def roomsGridCanvases()`. Delete
the copied `main.js` and rebuild. Carry a fresh `PLAN.md` (this document,
trimmed) into the sketch dir per the repo convention.

**The sketch starts as the room shell only — no canvases, no shadows, no
animation.** The subject here is the space: footprint, surfaces, edge treatment,
the grid ceiling and the light. Paintings are a proven, finished feature of
`canvases`; carrying them along from the start would only add moving parts to
every A/B comparison while the parts that are actually new are being judged.

Carried over from `Canvases.scala`: `texturedShade`, `roomNoise`, `contact`,
`TextureBaker` usage, the mirror, bloom, the camera and `devPreserve`.

**Deliberately left out of the initial implementation**, to be added back once
the space reads right:

| Left out                                                     | Note on re-adding                                              |
| ------------------------------------------------------------ | -------------------------------------------------------------- |
| `PaintingSpec` / `Painting` / `paintingForm` / `hang`        | verbatim from `canvases`; the stage-side hanging affordance    |
| `shadowMask`, `shadowShade`, `copyShade`, `compositeWallTex` | the whole composite path; see below                            |
| `Sway` + the sway loop, animated walls                       | returns at the shared-utility stage, as one of two equal cases |
| `imgShade` / `patternPanel` / the palette                    | sketch-owned image content                                     |

This drops a real amount of machinery, not just call sites. With no shadows a
wall texture _is_ the baked noise panel — there is no copy layer, no
`Multiply`-blended shadow instances and no composite panel, so `CopyU/CopyP`,
`ShadowU` and `compositeWallTex` all disappear from step 1. To keep re-adding
them cheap, have each wall shape bind **a `Panel`, whatever produced it**; going
from `wallBaker(wall.form, w, h)` to `compositeWallTex(wall)` is then a one-line
change at the producer and nothing at the shade.

Animation does not "come back as an opt-in" — it does not come back in this
sketch at all. It returns when the hanging machinery is iterated into a
**reusable shared utility**, and at that point **both static and animated
shadows are first-class cases**, neither one the default. Which an exhibition
uses is curation, so the utility has to support both equally.

That is less work than it sounds, because `canvases` already built the
capability in the right shape: one unified `compositeWallTex` path where a
static wall paints once and an animated wall re-paints each frame after moving
its shadow rects (`PLAN.md:106-110`). There are not two implementations to
reconcile — only a choice to expose properly, in place of the index-based
`isAnimated(i) = i >= 2` that `canvases` uses to make it for you.

---

## What this is actually for — the stage and the exhibition

None of this work is one room. It is the **stage** for numerous rooms, each
showing unique procedurally generated content — the kind of thing
`sketches/textures/*` produces in-shader, or `sketches/strokes/tile-strokes/`
builds on the CPU (`Painting.scala`: a recursive tiling, a hue palette, per-tile
Bézier brush strokes). Each such exhibition gets its own room, and its walls,
lights, tints and dimensions get **retuned for that content** — against the
images' palette, their aspect, their density, how much light they can take.

Two consequences worth designing for now.

### 1. The room look is a parameter set, not a constant

`canvases/PLAN.md:9-13` describes its appearance as "finetuned and **locked**".
That framing does not survive this reframe: nothing about the stage is locked,
because every exhibition re-tunes it. What is locked is the _vocabulary_ — the
noise field, the contact treatment, the coffer/raster construction — not its
values.

Practically: keep every exhibition-tunable in **one clearly demarcated block at
the head of the file**, the way `canvases` already does with its tints and
`Shadow*` constants (`Canvases.scala:29-59`), and make sure nothing tunable
hides further down. The block is at least: room dimensions, `GridSpacing` /
`StripWidth` / `StripHeight` / `CofferDepth`, `LightColor`, all surface tints,
`EdgeFadeWorld` / `ContactDarken`, and the bloom constants.

Do **not** wrap it in a `RoomStyle` case class yet. Grouping named constants is
not an abstraction; a parameter object only earns its keep once the room
_builder_ moves to `src/utils/room/` and needs an argument. At that point this
block becomes that argument almost verbatim — which is a reason to keep it
cohesive now, not a reason to formalize it now.

### 2. Curation is user space — the stage provides walls, not a hang

This is the boundary that matters most, and it is **wider than image content**.

`canvases/PLAN.md:154-160, 235-237` draws the seam at content: "image content is
the consumer's concern", the painting shade displays whatever `Panel` it is
handed. That is the right _kind_ of seam and it holds — but it is drawn too
narrowly, and taking it as the whole boundary is the mistake this section exists
to prevent. **Everything about the exhibition is the curator's call**: how many
pieces hang on a wall, where, how big, in what proportions, whether they move,
and what is on them. Content is one item on that list, not the list.

Which reclassifies most of what `canvases` does with its paintings. Its
randomized sizes (`randInRange(0.9, 1.7)` by `randInRange(0.7, 1.4)`,
`Canvases.scala:592-593`), its even `count`-per-wall spacing, its 1.75 m hang
height, its sway on the wide walls, and its diagonal-grid `imgShade` /
`patternPanel` / 4-colour palette — none of it is a template to generalize. **It
is one room's curation**, made when there was no real content to curate. Read as
stage requirements these are actively misleading, and none of them should be
ported back as if they were room infrastructure.

What the stage owes the curator is an **affordance**, not a policy:

| The stage provides                                                   | The exhibition decides                     |
| -------------------------------------------------------------------- | ------------------------------------------ |
| a wall's frame — `center`, `width`, `height`, `rotY`, `inwardNormal` | how many pieces, and where                 |
| its usable span and `WallTopY` (what is actually hangable)           | size, aspect, physical dimensions          |
| `hang(wall, spec, centerFromLeft, centerHeight)` — place a piece      | content panels, and how they are generated |
| the shadow compositing path a hung piece needs                       | whether anything is animated               |
| lighting the pieces will be seen under                               | which walls are used at all                |

So `hang` stays exactly as general as it is now — a wall-local position in
metres plus an arbitrary `PaintingSpec` — but with its parameters **renamed off
`u` / `v`**, per the convention above:

```scala
def hang(
    wall: Wall,
    spec: PaintingSpec,
    centerFromLeft: Double, // metres along the wall from its left edge,
                            // "left" as seen standing in the room facing it
    centerHeight: Double,   // metres up from the floor
): Painting
```

Both name the **piece's centre**, which is what they always located — `canvases`
just never said so. What does **not** carry over is any rule about what to pass
them.

The content half of the seam is unchanged and still exactly right: an exhibition
supplies panels, and the room knows nothing about how they were made — a shader
layer, a CPU-built stroke pipeline, a loaded image. The widening adds placement,
sizing and animation to the curator's side; it takes nothing off it.

One practical note for whoever curates first: real content has real aspect
ratios (`tile-strokes` already builds to an explicit
`createPainting(width, height, colorCount)`), so sizes will tend to come from
content aspect and a hang scale. That is an observation about content, not a
constraint the stage should encode — the stage's only obligation is not to
obstruct it.

### What this does to the extraction question

It shortens the fuse considerably. If every exhibition is its own sketch sharing
one stage, the stage is shared code **by construction** — the second exhibition
triggers the extraction, not some speculative third shape sketch. That
strengthens the call in _A discipline boundary inside the sketch_ below, and
widens it: not just `Footprint`, but the whole room-construction path (walls,
bakers, raster, coffer) is headed for `src/utils/room/`. Write it accordingly —
the exhibition-specific parts are the content panels and the tunable block, and
everything between them should be clean enough to move.

---

## Part 1 — The footprint

### CPU side

The footprint has **three consumers**: the geometry builders, the bakers (via a
build-time shader expression) and the camera (via a per-frame CPU query). Same
ring data, three different shapes of code — the shader version unrolls into WGSL
at build time and cannot be reused at runtime, so a small CPU implementation
lives alongside it. Keep the ring data the single source of truth for both.

Replace `RoomWidth / RoomHeight / RoomDepth` + `Box` with a floor plan described
as closed rings in XZ:

```scala
/** Which side of a ring the room is on. Follows the codebase's opaque-type
  * enum pattern (`graphics/painter/enums.scala:56-79`) — a Scala `enum` compiles
  * to a class hierarchy plus `$values`/`ordinal`/`fromOrdinal` machinery, which
  * is exactly the JS-bundle weight `trivalibs/CLAUDE.md` rules out.
  *
  * The library's opaque enums alias `String` because their values cross into
  * WebGPU. This one never leaves Scala and is only ever used to flip an edge
  * normal, so it aliases `Double` and *is* that sign — no branch anywhere.
  */
opaque type Facing = Double
object Facing:
  val Inward: Facing = 1.0   // the room is inside this loop — the outer boundary
  val Outward: Facing = -1.0 // the room is outside it — anything standing in it
  extension (f: Facing) inline def sign: Double = f

case class Ring(
    points: Arr[Vec2],   // closed loop, no repeated last point
    facing: Facing,
    height: Double,      // == footprint.height ⇒ reaches the ceiling
)

case class Footprint(
    rings: Arr[Ring],            // rings(0) = the Inward outer boundary
    floorFaces: Arr[Quad[Vec2]], // explicit convex decomposition of the plan
    height: Double,
)
```

**Why `facing` and `height` are on `Ring` from day one.** Everything that stands
in a room — an O-shape's inner box, a free-standing partition wall, a plinth —
is the same object: a closed loop the room is _outside_ of. The only thing that
distinguishes a free-standing wall from an O-shape's inner box is that its
`height` is less than the room's, so it stops before the ceiling. Carrying both
fields now means free-standing walls are a filtering question later, not a
restructuring one (see **Part 4**). For step 1 every `Ring` is `Facing.Inward` /
`height = footprint.height`, so `facing` is a multiply by 1.0 and `height` never
differs.

#### A discipline boundary inside the sketch

`graphics/CLAUDE.md` gives sketch code latitude for Scala conveniences, and most
of this sketch should use it. The `Footprint` cluster is the exception, and the
reason is worth being explicit about.

We are _deliberately planning a generalization refactor_ — Parts 1, 4 and 5 are
all about making L / hex / O / H / partitions additive, and _What this is
actually for_ establishes that the whole stage is shared code by construction,
since every exhibition is a sketch reusing it. The first thing that will move to
`src/utils/room/` is exactly `Ring` / `Footprint` / `edgeSetDist` / `cornerDist`
/ `clipLine` / `confine`, and the room-construction path follows it. That is not
a guess, it is the stated plan. So this cluster is **library code that has not
moved yet**, and should be written to library discipline now:

- `Arr` / `Dict` / `Maybe` / `Opt`, no Scala collections;
- `while` over `for`-comprehensions in anything on a per-frame path — which
  `confine` / `nearestBoundary` / `isInside` are (Part 3), unlike the build-time
  shader emitters, which run once;
- no `enum` — the opaque-type pattern above, aliasing whatever type the value is
  actually _used_ as. Same for any other small closed set this design grows
  later (a beam-family role, a wall kind).

Everything else — painting distribution, the sway loop, palette setup, beam
authoring — stays sketch-convenient. The boundary is **per region, not per
file**, and the cost of misplacing it is asymmetric: writing the core this way
up front is free, retrofitting it at extraction time is a rewrite.

`floorFaces` is authored, not triangulated. This keeps a real triangulator out
of the sketch: a rectangle is one quad, an L is two, an O is four, an H is
three, a hexagon is three. That is a trivial amount of hand-authoring per shape
and it is completely explicit. If authoring ever becomes painful, ear-clipping
can be added later — it does not change any other part of the design.

Note the floor stays **continuous underneath** every `Outward` ring. There is no
hole to cut: the geometry standing there covers it, and leaving it whole means
`floorFaces` never has to be re-decomposed when a partition is added or moved.

Derived, in this order:

- **Walls.** One per ring edge. `mkWall` (`Canvases.scala:418-441`) is already
  fully general — it takes `(center, width, height, rotY, inwardNormal)` and
  builds its own frame via `right = Up.cross(inwardNormal)`. Three things
  change: the wall's height is `ring.height` rather than the room's;
  `inwardNormal` is the edge direction rotated 90° and multiplied by the facing
  sign — `perp(edgeDir) * ring.facing.sign` — which is what gives an O-shape's
  inner box, and later a partition, hangable faces on every side; and `rotY` is
  _derived_ rather than hand-authored:

  ```scala
  val rotY = Math.atan2(inwardNormal.x, inwardNormal.z)
  ```

  Sanity-check this against the four hand-written values at
  `Canvases.scala:533-560` before trusting it.

- **Floor / ceiling forms.** From `floorFaces`, lifted to `y = 0` and
  `y = height`, with UV taken from the plan's **bounding box**:
  `uv = ((x - bbMinX) / bbW, (z - bbMinZ) / bbD)`. Keeping the bounding box as
  the UV frame means `texSize(bbW, bbD)` and the uniform `TexScale = 48`
  texels/m still hold, at the cost of some wasted texture over the cut-out
  region (~25% for an L). Acceptable, and much simpler than packing.

- **Wall paintings — not a stage concern at all.** An earlier draft of this plan
  had the footprint _derive_ a painting count per wall, on the grounds that
  `canvases`' positional `counts = Arr(3, 3, 4, 4)` / `isAnimated(i) = i >= 2`
  (`Canvases.scala:576-578`) break once the wall count varies. They do break —
  but the fix is not a better formula here. Counts, positions and sizes are
  **curation** (see _Curation is user space_), so the stage should not own them
  in any form.

  What the footprint owes the curator is the wall's frame and its usable span,
  which `Wall` already carries. `Wall` needs no `paintings` and no `animated`
  field; whoever hangs an exhibition keeps its own list and calls `hang`.

- **Re-anchor the wall tint gradient.** (The hang height `v = 1.75`,
  `Canvases.scala:598`, is curation — it leaves with the paintings and gets no
  stage-side name.) The gradient `wp.y.smoothstep(4.6, 5.5)` (line 278) looks
  like `height - 0.9 … height`, but a fraction of the room height is the _wrong_
  re-anchoring: it is a lighting falloff, so it should be expressed as
  **absolute distance below the light plane**, `(lightY - wp.y).smoothstep(…)`.
  That is both more physical and the thing that makes a shorter free-standing
  wall shade correctly with no extra code — a 2.5 m partition is simply further
  from the light than the top of a 5.5 m wall, and reads that way automatically.

### Shader side

Two build-time expression emitters, in the sketch file next to `contact`. Both
unroll over the CPU-known ring data — a handful of edges, and this only ever
runs inside a bake, so the unrolled `min` chain is free.

Both take an explicit **edge set** rather than reaching for the whole footprint.
This is the second architectural hook for Part 4: not every surface is bounded
by every ring, and passing the set in makes that a call-site decision instead of
a rewrite.

```scala
/** Unsigned distance from an XZ point to the nearest edge in `edges`. All baked
  * geometry lies inside the plan by construction, so no sign is needed — which
  * keeps the winding/crossing machinery of a real polygon SDF out of this
  * entirely.
  */
def edgeSetDist(pxz: Vec2Expr, edges: Arr[Edge]): FloatExpr

/** Unsigned distance from an XZ point to the nearest *vertex* in `edges` — the
  * corner columns where two walls meet. This is what a wall surface fades
  * against; the boundary itself is zero everywhere on a wall.
  */
def cornerDist(pxz: Vec2Expr, edges: Arr[Edge]): FloatExpr
```

with two named sets derived from the footprint:

```scala
def floorEdges   = rings.flatMap(_.edges)                        // everything meets the floor
def ceilingEdges = rings.filter(_.height >= height).flatMap(_.edges) // only what reaches up
```

For step 1 the two sets are identical, so this costs nothing now and is the
whole of the free-standing-wall change later.

`edgeSetDist` folds `segDist(p, a, b)` over every edge in the set, with `a`, `b`
and `dot(e, e)` as CPU constants:

```scala
// per edge, a/b/e/eLenSq known at build time
val w = pxz - vec2(a)
(w - vec2(e) * (w.dot(vec2(e)) / eLenSq).clamp01).length
```

Note this handles concave corners and hole rings uniformly and for free — the
inner box of an O-shape is just another ring contributing edges.

`edgeDist` then generalizes with the same "add `Far` on the surface's own axis"
trick that the box version uses, now split by whether the surface is horizontal,
and parameterized by the edge set and the **surface's own top height**:

```scala
def edgeDist(
    wp: Vec3Expr, normal: Vec3Expr,
    edges: Arr[Edge], topY: Double,   // per-surface, CPU constants at bake time
): FloatExpr =
  val Far = 1000.0
  val isHoriz = normal.y.abs                                  // 1 floor/ceiling, 0 walls
  val plan = edgeSetDist(wp.xz, edges) + (1.0 - isHoriz) * Far // floors: distance to walls
  val vert = wp.y.min(topY - wp.y) + isHoriz * Far             // walls: floor + top rim
  val corner = cornerDist(wp.xz, edges) + isHoriz * Far        // walls: corner columns
  plan.min(vert).min(corner)
```

`topY` rather than a global room height is the third hook: a wall fades against
_its own_ top rim. For a full-height wall that rim is the ceiling junction; for
a free-standing one it is the open top edge — same expression, different
constant.

One consequence to design around now: `wallBaker` is currently a **single shared
baker** (`Canvases.scala:273`) whose shade has the height baked into its
expression, and `TextureBaker` deliberately exposes no per-bake uniforms
(`Bake.scala:20-23`). So walls of differing height need **one baker per distinct
height**, keyed in a small `Dict`. Bakers are build-time objects and rooms have
one or two distinct heights, so this is cheap — but it does mean
`compositeWallTex` should look its baker up by `wall.height` rather than closing
over one. Doing that now is a two-line difference; retrofitting it is not.

For a rectangular plan this reduces exactly to the current box behaviour, which
is the check for step 1: the new sketch's floor and walls should look
indistinguishable from `canvases`.

`contact` and `roomNoise` (`Canvases.scala:201-231`) are then unchanged —
`roomNoise`'s `scaledWp` is already world-space and shape-agnostic, and the
`edge` fade factor picks up the new `edgeDist` automatically.

One deliberate addition: walls currently take `contact(wp.y)` only, so they
darken at the floor but not in the vertical corners. With `cornerDist` available
this becomes `contact(wp.y.min(cornerDist(wp.xz)))` — concave corners (an L's
inner corner, an O's outer corners) get the same soft darkening as the floor
line, which is exactly the "contact line as in canvases, everywhere" ask. Convex
corners get it too; if that reads wrong on the L, gate it by a per-wall CPU flag
rather than by shader math.

---

## Part 2 — The grid ceiling

### Vertical layout

```
  y = lightY   = CeilY + CofferDepth  ── luminous plane, HDR, faces down
       ↑ CofferDepth (≈ 1.0–1.5 m)    ── coffer reveal walls, one per ring edge
  y = CeilY    = Height               ── raster top
       ↓ StripHeight (≈ 0.25 m)       ── the beams; at a wall, the perimeter
  y = WallTopY = CeilY − StripHeight  ──   beam's outer face IS the wall plane
       ↓                              ── the room wall proper, canvases hang here
  y = 0
```

The raster sits in the ceiling plane, so from eye height the room still reads as
having a ceiling at `CeilY`. Behind it is a `CofferDepth`-deep glowing recess.
The parallax the brief asks for is plain perspective — at 1.7 m eye height,
`CofferDepth = 1.0` gives eye-to-raster 3.8 m vs eye-to-light 4.8 m, ≈ 26 %
slower apparent motion on the light. No trick needed; `CofferDepth` is the knob.
The `grid-ceiling` sketch works the same way (`GridCeiling.scala:201`).

**The room wall stops at `WallTopY`, not at `CeilY`.** Above that the perimeter
beam's outer face continues the same plane up to `CeilY`, and the coffer reveal
wall continues it to `lightY`. Three surfaces, one continuous plane, no overlap.
Letting the wall run the full height instead would put it coplanar with the
perimeter beam's outer face and z-fight. `WallTopY` is therefore the `topY` that
Part 1's `edgeDist` takes for room walls, and it is the height canvases hang
against.

The **coffer reveal walls** are short quads from `CeilY` to `lightY`, one per
edge in `ceilingEdges` — literally
`mkWall(center = at (CeilY + CofferDepth/2), width = edge length, height = CofferDepth, …)`,
reusing the same function. Without them you see void through the raster at
grazing angles. Note this and every other consumer in Part 2 reads
`ceilingEdges`, never `floorEdges`: the ceiling assembly is bounded only by what
actually reaches it.

### Snapping the plan to the grid — perimeter beams for free

For an **axis-aligned** plan, do not snap the grid to the room; **derive the
room from the grid**. Place beam centerlines at `k · GridSpacing`, then put each
wall plane flush with the outer face of the beam nearest the wanted extent:

```scala
// wanted ≈ half-extent in metres; the result is the snapped half-extent
def snapHalfExtent(wanted: Double): Double =
  val k = ((wanted - StripWidth / 2.0) / GridSpacing).round
  k * GridSpacing + StripWidth / 2.0
```

`RoomWidth` / `RoomDepth` become _derived_ rather than authored, and the beam
adjacent to each wall **is** the perimeter beam — no extra generator, no
special-cased geometry. The light openings shrink by one beam width at each
wall, which is the intended architectural transition: the luminous field is
inset from the room boundary rather than dying into the corner.

This means footprint rings for the axis-aligned shapes (rect, L, O, H) should be
authored in **lattice units** — integer multiples of `GridSpacing`, offset by
`StripWidth/2` — so every ring vertex lands on a beam edge and every wall gets
its perimeter beam for free.

A hexagon cannot snap: its walls are not parallel to any two of the three beam
families at once. There, perimeter beams have to be generated explicitly, which
is what `perimeterBeams(edges)` in _Raster geometry_ is for. Snapping is the
free path where it applies; the generator is the fallback where it does not.

### Raster geometry

**The raster is a flat list of beam segments, not a pair of axis-aligned
grids.** This is the one structural choice in Part 2 that has to be right up
front, because a hexagonal room wants a _triangular_ raster — three families of
beams, each parallel to one of the three opposite wall pairs — and later every
room wants a **perimeter beam** running along each wall so the light openings
are inset from the walls rather than dying into them. Neither is built now (step
2 is two perpendicular families, and the grid simply runs into the walls with no
offset), but both must be additive.

So:

```scala
/** One beam: an oriented segment in the grid plane. */
case class Beam(a: Vec2, b: Vec2, width: Double, height: Double)

/** A family of parallel beams covering the plan. `dir` is the direction the
  * beams run; the family's lines are spaced along its perpendicular.
  */
case class BeamFamily(dir: Vec2, spacing: Double, phase: Double, width: Double)
```

`Beam` is the currency. **Generators** produce beams into one list:

- `familyBeams(f, edges)` — the field raster. Project every footprint vertex
  onto the family normal to get the offset range to cover (works for any
  direction and any plan, replacing "extent / spacing over the bounding box"),
  then clip each line to the plan.
- `perimeterBeams(edges)` — _later_: one beam per wall edge, collinear with it.
  Nothing but another producer into the same list.

Step 2 calls `familyBeams` twice, with `dir = (1,0)` and `(0,1)`. A hexagon
calls it three times at 60°. That is the whole difference.

Geometry per beam: build the three visible faces directly in the beam's own
frame — `(center, dir, perp = perp(dir), Up)` — rather than from an axis-aligned
`Box`. This is the same "derive a local frame from a direction" move `mkWall`
already makes with `right = Up.cross(inwardNormal)` (`Canvases.scala:418-441`),
and it is what makes an odd-angle beam no different from an axis-aligned one.
Each face takes a band in a UV atlas as in `GridCeiling.scala:71-143`.

A note on that atlas, because an earlier draft of this plan got it wrong in
exactly the way the `u`/`v` convention above is meant to catch: it said to scale
`u` by **world distance along the beam, not normalized**. That is a texture
coordinate carrying metres, and it breaks — beams longer than one unit run `u`
past 1, which a clamp sampler (this atlas does not tile) silently pins at the
edge.

Uniform texel density across beams of differing length is a **budget** question,
not a coordinate one. Size the atlas for the longest beam and give each beam
`u ∈ [0, beamLength / maxBeamLength]`: still normalized, still clamp-safe,
proportional so texel density is uniform, and shorter beams simply use less of
their row. That is also what lets variable-length perimeter beams share the
atlas later.

Two further differences from `grid-ceiling`:

- **No tiling.** A room is small, so bake the whole atlas once and use a clamp
  sampler. Drop the `tileWorld` / `TileCells` / psrdnoise-period machinery
  entirely — `roomNoise`'s non-tiling `Noise.fbm3` is what we want here, since
  the strips must match the walls' noise field, not a tiling one.
- **Clipped to the footprint**, by a routine parameterized by a **line**, not an
  axis — so it serves field beams at any angle and, later, perimeter beams:

  ```scala
  /** Intersect the line (origin + t·dir) with every edge in `ceilingEdges`,
    * sort the hits by t, and keep the intervals whose midpoint is inside.
    */
  def clipLine(edges: Arr[Edge], origin: Vec2, dir: Vec2): Arr[(Double, Double)]
  ```

  Taking `ceilingEdges` is what lets the raster run _over_ a free-standing wall
  uninterrupted, which is the correct read: the grid is a ceiling feature and
  does not know the partition exists.

  For the rectangular step-1 plan this returns a single full-span interval, so
  it is exercised trivially but is in place.

Suggested tunables (room-scale, much finer than `grid-ceiling`'s 1.5 m):
`GridSpacing = 0.55`, `StripWidth = 0.10`, `StripHeight = 0.25`. Snap spacing to
an integer count across the family's offset range so the raster is symmetric.

Beams **interpenetrate at crossings** — two families already share volume where
they cross, and a third makes triple points. This is accepted, not a bug;
`grid-ceiling` does the same and the depth buffer resolves it. If three
coincident families read badly, stagger each family's `gridY` by a few
millimetres.

### Raster shading

This is where "soft-edged and integrated" is won or lost. Bake the atlas with
`TextureBaker` (`src/utils/bake/Bake.scala`), sampling the **same** `roomNoise`
at world position so the strips belong to the same field as the walls.

**The raster has its own edge collection.** A 12 × 18 raster has ~200 beam
crossings, and every crossing is a junction of exactly the kind the floor/wall
contact line handles. A grid with no darkening at its intersections reads as
pasted-on; a real coffered ceiling has visible occlusion in the pockets and at
the beam joins. So the crossings are a first-class input to the bake, not
something to ignore.

They do **not** need an edge list. Each family is uniformly spaced, so its
distance field is one `fract` expression — measured along the family's
perpendicular, which is what makes it angle-agnostic:

```scala
/** Distance from an XZ point to the nearest beam centerline of family `f`.
  * `n = perp(f.dir)` and `f.spacing` are CPU constants.
  */
def familyDist(pxz: Vec2Expr, f: BeamFamily): FloatExpr =
  val t = pxz.dot(vec2(perp(f.dir))) - f.phase
  ((t + f.spacing / 2.0).mod(f.spacing) - f.spacing / 2.0).abs
```

For `dir = (1,0)` this is exactly the axis-aligned form; for a hexagon's 60°
family it is the same expression with a different constant.

**Occlusion compounds multiplicatively, per occluder — there is no "crossing
distance" term.** An earlier draft of this plan used
`crossDist = length(vec2(dCol, dRow))`, the exact distance to a lattice point.
That is wrong to build on: it is only correct for **two perpendicular**
families, and it silently breaks for a hexagon's three families at 60° (skewed
metric, and triple points rather than pair crossings). Use instead:

```scala
var occ = contact(edgeSetDist(pxz, ceilingEdges))   // the wall junction
families.foreach: f =>
  occ *= contact(familyDist(pxz, f))
```

On a beam run one factor applies; at a crossing two multiply and it goes darker;
at a hexagon's triple point three do. No metric assumption, no lattice
assumption, any number of families at any angles. It is also the same
compounding trick the painting shadows already use under `BlendState.Multiply`
(`canvases/PLAN.md:92-104`) — occlusion from independent occluders multiplies.

Note what the first line already is: a **perimeter beam sits exactly on the wall
line**, so its occlusion term _is_ `contact(edgeSetDist(pxz, ceilingEdges))`,
which the design needs anyway for the wall junction. With the plan snapped to
the grid there is no separate perimeter beam to account for — the outermost
family beam already lands there, and both terms describe the same occluder. The
snap is what makes these two agree instead of double-darkening.

Three terms then build the strip surface:

1. **Junction darkening** — the `occ` product above, reusing the existing
   `contact` unchanged, at a slightly wider fade than the floor's
   `EdgeFadeWorld` since these pockets are the strongest occlusion in the room.
   This is the term that makes the raster sit _in_ the ceiling.
2. **No normal-dependent noise.** The strips are 0.10 × 0.25 m; the orientation
   term would seam at every one of the many hard 90° edges and read as dirt at
   that scale. Pass `edge = 0` for strip surfaces so only the continuous
   positional FBM survives — automatically seam-free against each other, the
   coffer, and the walls. Term 1 now supplies the structure that this gives up,
   which is why dropping it is safe here and was not obviously safe before.
3. **Per-face orientation, analytically — and anchored to concrete values.**
   Hard geometric edges _want_ a real shading break; it is the noise, not the
   shading, that must stay continuous. Two faces, two opposite treatments:
   - **Downward faces** (the beam soffits, all that is seen from eye height)
     take `CeilTint` — literally the canvases ceiling colour
     (`Canvases.scala:56`, `Vec3(0.86, 0.86, 0.85)`), flat. This is the point:
     the underside of the raster _is_ the ceiling plane as far as the eye is
     concerned, so it should be the ceiling's colour, not a variant of the wall.
     The old `ceilTex` is deleted, but its tint survives here.
   - **Inner side faces** get the **inverse** of the wall's top fade —
     brightening upward toward the light, `(wp.y - WallTopY) / StripHeight`
     driving a lerp from the wall's darkest value up to a lighter value at
     `CeilY`.

   The two meet exactly at `WallTopY`: the wall arrives at its darkest there,
   the beam's side face starts at that same value and brightens upward into the
   pocket. Continuous in value, opposite in gradient — which is what reads as
   light spilling down from the coffer rather than as two surfaces that happen
   to touch. Both fades are anchored to `WallTopY` / `StripHeight`, so retuning
   `StripHeight` keeps them locked together.

The same `occ` product also darkens the **light plane** and the **coffer
walls**, not just the strips — that is what puts the raster's shadow into the
luminous recess behind it, and it is why the term is defined over XZ rather than
per surface.

### Raster: what is deliberately deferred

Not built in step 2, but the shape above is chosen so each is additive:

| Later                                                  | What it costs                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Triangular raster over a hexagon                       | three `familyBeams` calls at 60° instead of two at 90°; shading unchanged |
| Explicit perimeter beams (non-axis-aligned plans only) | one more generator into the `Beam` list; shading term already present     |
| Per-family beam profiles                               | `width` / `height` already live on `BeamFamily` and `Beam`                |
| Non-square cell aspect                                 | two different `spacing` values; already supported                         |

Perimeter beams are **not** deferred for the axis-aligned plans — snapping the
plan to the lattice gives them in step 2 for free, and the inset light openings
that come with them are wanted, not a side effect. Only a hexagon (or any plan
whose walls are not parallel to a beam family) needs the explicit generator.

### The light plane

A copy of the floor mesh at `lightY`, normal down, baked with
`TextureBaker.bakeBlock(…, format = TextureFormat.Rgba16Float)` exactly as the
current ceiling is (`Canvases.scala:248-270`):

```
HDR base (≈ 4.0–8.0, above the bloom threshold of 1.0)
  × roomNoise(wp, normal)                  // subtle, keeps it from reading flat
  × contact(footprintDist(wp.xz))          // soft vignette into the coffer corner
```

Uniform rather than striped — the raster already supplies all the structure, and
the existing `s := (uv.x * 6.0 + 0.5).fract` strip layout is expressed in
_ceiling UV_, which on an L or H would run its end-caps through mid-air over the
cut-out. If bands are wanted later, express them in world metres
(`(wp.x * StripsPerMetre).fract`) and cap them with `footprintDist`, not UV.

The `HaloColor` constant (`Canvases.scala:59`) becomes `LightColor`, and the
existing `ceilTex` / `ceilForm` / halo block is deleted.

**Bloom needs no view-direction gate.** As in `grid-ceiling`, the light plane is
the only above-threshold surface in the scene; the raster occludes it
geometrically from low angles, so bloom emerges as you look up. Reuse the
existing `Bloom(p, scenePanel, intensity = 0.002, threshold = 1.0, …)` at
`Canvases.scala:724-731` unchanged and tune `LightColor` against it. Watch that
the mirrored copy stays _below_ threshold after `reflStrength` so the floor
reflection reads as a soft blur rather than a second bloom —
`GridCeiling.scala:218-220` documents that exact tuning.

### Knock-on effects

- **Wall lighting.** The light source is now a bright ceiling, so invert the
  `WallTintLow → WallTintHigh` gradient (brightest toward the top, falling off
  downward) and drive it by **absolute distance below the light plane**,
  `lightY - wp.y`, per Part 1.
- **The wall's top darkening ends exactly at the grid contact.** The darkening
  band under the raster is `contact(WallTopY - wp.y)` — darkest where the wall
  meets the perimeter beam's bottom edge, faded out `EdgeFadeWorld` below it.
  Not `CeilY`: the wall does not reach `CeilY`, and anchoring the fade there
  would leave a visible discontinuity at the beam's edge. This is the term the
  beam's inner side face mirrors (see _Raster shading_ term 3). Walls therefore
  end up with contact darkening at floor, grid, and corners.
- **Mirror.** `aboveGround` must gain the raster shapes, the coffer walls and
  the light plane. `alphaScale` (`Canvases.scala:655`) becomes `lightY`, not
  `RoomHeight`. The raster reflected in the floor is a large part of the payoff
  here — check it early.
- **Scene panel** is already `Rgba16Float` (`Canvases.scala:711-722`); no
  change.

---

## Part 3 — Camera confinement

`BasicFirstPersonCameraController` moves the camera freely and `cam.pos` is a
plain `var Vec3` (`trivalibs/src/graphics/scene/camera.scala:18`,
`camera_controller.scala:43-72`). So confinement is a **post-move clamp in the
sketch's animate loop** — no library change, and no need to teach the controller
about geometry:

```scala
controller.update(tpf)
cam.pos = footprint.confine(cam.pos, margin = WallClearance)
```

### CPU footprint queries

Two small runtime routines beside the shader emitters, sharing the ring data.
These sit in a per-frame path, so they follow the sketch-shared discipline —
`Arr`, `while`, no Scala collections:

```scala
/** Closest point on any ring edge to `pxz`, and its distance. One pass over
  * every edge of every ring, same segment-projection math as the shader's
  * `segDist` but returning the point.
  */
def nearestBoundary(pxz: Vec2): (point: Vec2, dist: Double)

/** Even-odd ray crossing count over every edge of every ring. Hole rings need
  * no special casing — their edges flip the parity, so the interior of an
  * O-shape's inner box correctly counts as outside.
  */
def isInside(pxz: Vec2): Boolean
```

### The clamp

```scala
def confine(pos: Vec3, margin: Double): Vec3 =
  val pxz = Vec2(pos.x, pos.z)
  val (q, d) = nearestBoundary(pxz)
  val inside = isInside(pxz)
  val fixed =
    if !inside then q + inwardAt(q) * margin      // recover: push back in
    else if d < margin then q + (pxz - q) / d * margin
    else pxz
  Vec3(fixed.x, pos.y.clamp(MinEye, Height - HeadRoom), fixed.y)
```

Two things worth noting about this shape:

- **Sliding along walls is automatic.** Pushing out along `pxz - q` is a
  projection onto the margin offset curve, so the component of motion parallel
  to the wall survives untouched. Walking diagonally into a wall slides along it
  rather than sticking — which is the feel you want and is why this is a
  position clamp rather than a movement veto.
- **The `!inside` branch is a recovery path, not the normal one.** At 1 m/s and
  60 fps a frame moves ~1.7 cm, so with a 0.5 m margin the camera can never
  tunnel through in one step. The branch only matters if the camera is spawned
  outside the plan or teleported; `inwardAt(q)` is the inward normal of the edge
  `q` landed on, which the ring already carries per edge from the wall
  derivation.

Corners need one caveat: at a **convex** corner (the outside of an O-shape's
inner box, or an L's protruding corner) the margin curve is a rounded arc, which
the single-nearest-point clamp produces correctly. At a **concave** corner two
walls both push, and a single-nearest-point clamp can let the camera creep into
the wedge. If that shows up, run the clamp twice per frame — cheap, and it
converges for any convex-angle pair. Do not reach for full multi-constraint
resolution here.

### Defaults

```scala
val WallClearance = 0.5   // metres from any wall, including canvas faces
val EyeHeight     = 1.7   // camera spawn height
val MinEye        = 0.4
val HeadRoom      = 0.4   // clamps below the raster, not into it
```

`PerspectiveCamera(… pos = Vec3(0, 1.7, 0))` at `Canvases.scala:736-752` already
uses 1.7; this just names it. Note `WallClearance = 0.5` also keeps the camera
clear of the hung canvases, which stand `depth/2 + 0.02` off the wall
(`Canvases.scala:446-456`) — at most ~0.05 m, well inside the margin.

Vertical freedom (Space / Shift) stays, just bounded. Locking `y` to `EyeHeight`
outright would be the more disciplined gallery-walk feel; it is a one-line
change if the free vertical turns out to be more distracting than useful.

---

## Part 4 — Designed-for: free-standing walls

Not built in this sketch. Listed here because the three hooks above
(`Ring.facing` + `Ring.height`, explicit edge sets, per-surface `topY`) exist
_only_ to make this a filtering change rather than a restructuring one, and they
should not be simplified away during step 1 on the grounds that step 1 does not
use them.

A free-standing wall is a partition standing in the room, hung with canvases on
both faces, that stops below the ceiling. It participates in floor contact
shading and camera confinement, but not in anything the ceiling does.

In the model it is **not a new concept**: it is an `Outward` ring whose `height`
is less than the room's. An O-shape's inner box is the same object with full
height. That collapse is the point — one code path covers both.

What then falls out with no further work:

| Consumer                             | Edge set                 | Result                                                       |
| ------------------------------------ | ------------------------ | ------------------------------------------------------------ |
| Floor contact + noise fade           | `floorEdges`             | darkened contact line around the partition, same as any wall |
| Camera confinement                   | `floorEdges`             | 0.5 m clearance, walk around it                              |
| Wall geometry + canvases             | all rings                | both faces hangable via `facing`                             |
| Ceiling / coffer walls / light plane | `ceilingEdges`           | unaffected, no contact line                                  |
| Raster clipping                      | `ceilingEdges`           | grid runs over it uninterrupted                              |
| Wall lighting gradient               | absolute `lightY - wp.y` | shorter wall reads as further from the light                 |
| Wall noise edge fade                 | per-surface `topY`       | fades against its own open top rim                           |

What genuinely remains to add, and it is small:

1. **A top cap.** One quad strip along the ring at `y = ring.height`, baked with
   the same noise. At eye height 1.7 you do not see the top of a 2.5 m partition
   — but you see it in the floor mirror, so it cannot be omitted.
2. **A baker per distinct height**, per the `Dict` note in Part 1.
3. **A decision about the free vertical ends** if a partition is an open
   polyline rather than a closed loop. Simplest is to keep partitions closed
   loops (a thin rectangle), which is what makes the even-odd camera test and
   the `Outward` normals work unchanged. Only reach for open polylines if a
   genuinely single-sided wall is wanted, and expect that to be the one piece
   that does need new code.

The one thing worth _checking_ rather than assuming: whether the floor's contact
darkening around a partition reads convincingly without any corresponding
occlusion on the partition itself from above. If it looks like the wall is
floating, the fix is a soft downward-cast darkening on the floor keyed off
`edgeSetDist(pxz, partitionEdges)` — a variant of the existing painting shadow
idea, not a lighting model.

---

## Part 5 — Library additions: what this design actually pulls on

Four candidates were raised. They do not have the same answer, and three of the
four are worth _not_ doing. Verified against the current source: `trivalibs/src`
has no `UniformArray` and no storage-buffer support at all, so 2 and 4 would be
from-scratch additions.

### 1. Per-bake uniforms on `TextureBaker` — **yes, narrowly**

`Bake.scala:20-23` currently argues against them: _"Cheap per-material params
(tint, simple modulation) do NOT belong here — apply those in the runtime shader
that samples the baked texture."_ That rationale is right but the boundary is
drawn in the wrong place. The real distinction is not cheap-vs-expensive, it is:

> Does this parameter participate in the **geometry-space computation being
> cached**, or is it applied to the result?

A tint is applied to the result — it stays out. `topY` (Part 1) and the
per-strip grid origin/step **change the distance field itself**, which is the
entire thing the bake exists to cache. There is no runtime shader that could
apply them afterwards.

Without this, Part 1's fallback is one baker — one shade, one pipeline — per
distinct wall height. That works, and for a room with two heights it is nearly
free, but it is a pipeline duplicated for a scalar, and it gets worse the moment
partitions of differing heights appear.

Scope: one type parameter, `TextureBaker[U]`, with `U` concatenated onto the
existing `BakeUniforms`, and a per-call `bind` alongside the existing `model`
binding in `prepare` (`Bake.scala:68-88`). **One real snag**: the existing
expression-vs-block selection is by _lambda arity_ (3-arg vs 4-arg,
`Bake.scala:168-196`). Adding a `bindings` argument makes the two forms 4-arg
and 5-arg, so the uniform-carrying expression form collides with the current
block form. Scala will not resolve that on the lambda's return type. Give the
uniform variants **distinct factory names** (`TextureBaker.withUniforms` /
`bakeWith`) rather than trying to overload through it. That keeps the change
additive — nothing existing moves.

This is the smallest of the four wins but the only one this design genuinely
pulls on. Do it when Part 4 lands, not before: step 1 has exactly one wall
height, so the `Dict` fallback costs nothing and the need stays hypothetical
until a partition exists.

### 2. Array uniforms — **no; the earlier deferral still holds**

`canvases/PLAN.md:209-217` deferred `UniformArray[Vec4, N]` after instancing
made it unnecessary. Nothing here revives it.

The obvious candidate is `edgeSetDist` — pass the ring edges as `array<vec4, N>`
and loop, instead of unrolling. But **unrolling is the better implementation
here**, not merely the cheaper one to build:

- The footprint is fixed at build time. The unrolled form constant-folds every
  `a`, `b` and `dot(e, e)`; the array form recomputes them per fragment.
- It runs in a **bake**, once, so neither shader size nor a couple hundred ALU
  ops matter.
- No `N` cap, no uniform buffer, no padding rules.
- One shader per room is fine — each sketch builds one room.

An array would only win if the footprint had to change **at runtime** (morphing
rooms, live-tuned plans). That is not in scope, and it is the condition to
revisit under. Note the raster crossings — the other place a large edge
collection seemed to be implied — dissolve into two `fract` expressions instead
(see _Raster shading_), so they do not pull on arrays either.

### 3. Storage buffers — **no**

Nothing in this design wants variable-length or large per-fragment data. Both
places that looked like they might (2 and 3 above) resolve to constant-folded
unrolling and closed-form analytic fields respectively. A storage-buffer binding
is a substantial addition — buffer type, bind-group layout, DSL access,
`var<storage>` emission — and adding it speculatively runs against both the
repo's copy-first/extract-later stance and the bundle-size discipline in
`trivalibs/CLAUDE.md`.

The condition to revisit: a bake that needs genuinely **per-instance
variable-length** input — e.g. scattered furniture or an arbitrary set of
occluders casting into a lightmap. Then it is the right tool, and it should be
designed for that case rather than retrofitted from this one.

### 4. The general shape of the answer

Two of these were reached for because a _collection_ seemed to be implied — 200
raster crossings, N footprint edges. In both cases the collection has structure
(uniform spacing; build-time-fixed) that collapses it to something smaller than
the general mechanism. Worth checking for that collapse before adding a general
mechanism; it is why only the scalar-parameter case survives.

---

## Part 6 — Designed-for: the extraction must reproduce `canvases`

Not built in this sketch, but it constrains what gets written here, so it is
worth stating before the code exists.

When the room machinery moves to `src/utils/room/` (step 7), **`canvases` gets
rewritten on top of it, keeping the look it has today, pixel for pixel.** That
rewrite is the extraction's acceptance test, and it is a good one precisely
because `canvases` has a **plain flat ceiling with baked halo strips** — no
coffer, no raster, no light plane. If the shared utils cannot express that, they
are over-fitted to the grid room and the extraction has failed regardless of how
well the grid rooms work.

So: **the grid ceiling is optional, not the room's definition.**

### Layering

Four layers, each usable without the ones above it:

| Layer           | Contents                                                                            | `canvases` | grid rooms         |
| --------------- | ----------------------------------------------------------------------------------- | ---------- | ------------------ |
| 1. Plan         | `Ring` / `Footprint`, `edgeSetDist`, `cornerDist`, `edgeDist`, `clipLine`, `confine` | ✓          | ✓                  |
| 2. Surfaces     | floor + wall forms from the footprint; a plain ceiling plane                        | ✓          | floor + walls only |
| 3. Shading kit  | `roomNoise`, `contact`, the bakers, the surface-contribution stack, `hang` + shadows | ✓          | ✓                  |
| 4. Grid ceiling | coffer walls, `BeamFamily` / `Beam` / raster, light plane                           | —          | ✓                  |

Layer 4 is additive and opt-in. A consumer that wants something else — a flat
ceiling, a vault, a skylight — takes layers 1–3 and writes its own ceiling
geometry and bake. Even **"the builder gives you floor and walls, you write the
rest yourself" is an acceptable outcome**, so a plain ceiling plane in layer 2 is
a convenience, not a required abstraction.

Explicitly **do not** introduce a `Ceiling` trait with two implementations.
There are two cases, they share nothing but a height, and a polymorphic seam here
would cost more than the ten lines of quad it replaces — the same judgement that
killed the original `Wall` kit (`canvases/PLAN.md:40-71`).

### The two couplings that would leak the grid into shared code

Both are live in this plan as written, and both need breaking at extraction time:

1. **Wall top height.** Part 2 sets `WallTopY = CeilY − StripHeight` because a
   perimeter beam takes over the wall plane above it. That is a _grid_ fact. With
   a flat ceiling, walls run to `CeilY`. So the wall builder must **take** its
   top height as a parameter — the grid ceiling asks for `CeilY − StripHeight`, a
   flat ceiling asks for `CeilY`. It must not derive it from a beam constant.
   (`edgeDist` already takes `topY` per surface, so that half is done.)

2. **Which wall shading terms apply.** Part 2 adds `contact(WallTopY − wp.y)` and
   inverts the tint gradient to run off `lightY − wp.y`. Both are consequences of
   a luminous ceiling. `canvases` has neither: it darkens only at the floor and
   runs its gradient over a fixed metre range. So the wall bake must be a
   **composition of independent terms the room selects** — floor contact, corner
   contact, ceiling contact, a lighting gradient — not one fixed `wallBaker`
   formula with the grid's choices hardcoded.

Neither is a large change; both are much cheaper to keep in mind now than to
untangle from a working grid room later.

### Ambience as a stack of modules

Coupling 2 generalizes into the thing actually worth aiming at: a room's ambience
is an **ordered stack of independent contributions to a surface**, and which ones
are in the stack is the room's choice.

The mechanism already exists and is proven — `compositeWallTex`
(`Canvases.scala:486-508`) is exactly that stack today, just hardcoded to two
entries: a copy of the baked noise, then one `Multiply`-blended shadow instance
per painting. Opening it up means letting a room supply the list, not inventing a
new pipeline.

The motivating case, and a good stress test of the idea: **dim the walls right
down** — the ceiling grid giving only a low ambient wash — **and add prebaked
spot lights where pieces hang.** A gallery lit that way looks completely
different from the current evenly-bright room, and it is the strongest lever on
mood available without a real lighting model.

Its stack would be:

| Order | Contribution                                          | Blend    |
| ----- | ----------------------------------------------------- | -------- |
| 1     | base noise + tint, dimmed                             | write    |
| 2     | ceiling ambient gradient (`lightY − wp.y`)            | multiply |
| 3     | **one spot per hung piece**, from curation's positions | additive |
| 4     | contact terms — floor, corners, grid                  | multiply |
| 5     | one drop shadow per hung piece                        | multiply |

Two things to note. **The order is load-bearing**: the spot has to precede the
shadow, because physically the piece occludes the light the spot represents —
brightening after the shadow would light the very region the canvas is blocking.
And a **spot mask is the same family as `shadowMask`** (`Canvases.scala:68-85`):
a soft-edged footprint in wall-local UV driven by a per-instance rect. The
existing instanced-layer machinery carries it unchanged.

**Does this break the stage/curation boundary?** It looks like it — lighting is
stage, hang positions are curation — but no: it _inverts a dependency_ without
crossing the line. The stage still owns the mechanism (what a spot is, how it
composites, in what order); curation still owns placement. The wall-texture
builder simply consumes the hang list, which it **already does** for shadows.
Nothing new is conceded; a spot is just a second per-piece contribution alongside
the shadow that is already there.

That is the whole reason to note this now: it costs nothing today, and it is the
concrete case that says the wall bake wants to be an open stack rather than a
formula with two more terms bolted on. Build it only if a room ever wants it.

### What it means for this sketch

Nothing changes in steps 1–6 — build the grid ceiling directly, no seams, no
optionality. The value of Part 6 is knowing which lines are grid-specific when
the time comes to draw the layer boundary, and that is what the two couplings
above record.

---

## Files

Everything lands in **one new file**,
`sketches/rooms/grid-canvases/GridCanvases.scala`, plus `index.html`, `PLAN.md`
and the generated `main.js`.

Read-and-port references (all existing, all reused rather than reinvented):

| Source                                                 | What to take                                                                                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `sketches/rooms/canvases/Canvases.scala`               | the entire sketch as the base; `mkWall`, `hang`, `shadowMask`, `compositeWallTex`, `roomNoise`, `contact`, mirror/bloom/camera wiring |
| `sketches/rooms/grid-ceiling/GridCeiling.scala:71-143` | `rowStrips` / `colStrips` UV-atlas strip construction                                                                                 |
| `src/utils/bake/Bake.scala`                            | `TextureBaker` / `TextureBaker.bakeBlock`, `BakeVertex`                                                                               |
| `src/utils/bloom/Bloom.scala`                          | unchanged                                                                                                                             |
| `src/utils/mirror/GaussianMirrorReflection.scala`      | unchanged                                                                                                                             |
| `src/shaders/Noise.scala`                              | `Noise.fbm3`                                                                                                                          |
| `trivalibs/src/graphics/geometry/shapes.scala`         | `Box`, `Quad`, `Mesh`, face helpers                                                                                                   |

No changes to `trivalibs/`, and none to `src/` for steps 1–3 — see **Part 5**
for why the library additions that looked implied mostly aren't.

The `Footprint` cluster is the expected **first extraction** to
`src/utils/room/`, triggered by the second shape sketch copy-pasting it
unchanged. It is written to library discipline from the start (see _A discipline
boundary inside the sketch_), so that extraction should be a move, not a
rewrite. Everything else follows the repo's copy-first / extract-later default.

---

## Order of work

1. **Bare room shell on the footprint.** A single `Inward` full-height 4-point
   ring, the derived walls, `edgeSetDist` / `cornerDist` / the new `edgeDist`.
   Keep the old halo-strip ceiling. **No paintings, no shadows, no animation** —
   floor, walls, ceiling and their edge treatment only. **Success criterion: the
   room surfaces look the same as `canvases`** with its paintings mentally
   subtracted — same floor contact line, same corner fade, same wall gradient.
   Carry the Part 4 hooks (`facing`, `Ring.height`, edge sets, `topY`) even
   though nothing exercises them yet.
2. **Camera confinement.** `nearestBoundary` / `isInside` / `confine` plus the
   named metre defaults. Independent of everything else and makes every later
   shape immediately walkable, so it is worth having before the ceiling work
   rather than after.
3. **Grid ceiling.** Snap the plan to the lattice, drop the wall top to
   `WallTopY`, raise the light plane, add coffer walls and the raster, re-tune
   the wall gradient and bloom. This is the step with taste in it — expect to
   iterate on `CofferDepth`, `GridSpacing`, `StripHeight` and `LightColor`, and
   expect the room to be judged here.
4. **Restore the hanging affordance** — `paintingForm` / `hang` / `shadowMask` /
   `compositeWallTex` verbatim from `canvases`. This is stage work: it makes
   walls hangable, and stops there. Prove it with the crudest possible curation:
   a couple of fixed-size pieces at fixed positions, flat colour, not moving.
   Deliberately _not_ `canvases`' randomized sizes, even spacing or sway — those
   are that room's curation and reproducing them here would encode one
   exhibition's taste into the stage. Nothing moving at this step is crudeness,
   not a stance: animation is neither enabled nor ruled out, it is simply out of
   scope until the shared utility exists (step 7).
5. **First real exhibition** (arguably a separate sketch). Curate: choose
   counts, positions, sizes and content — `tile-strokes`-style CPU strokes, or a
   `textures/*` shader — and re-tune the room's tunable block around it. This is
   the step that proves the stage is a stage. Expect it to send step 3's
   constants back for another pass, and expect that to be **normal and
   recurring**, not a sign something was wrong.
6. **Shapes** (separate sketches, later): with 1–3 in place these are
   `Footprint` data plus a hand-written `floorFaces` decomposition — L (2 quads,
   6-point ring), hexagon (3 quads, 6-point ring), O (4 quads, outer ring + one
   full-height `Outward` ring, whose four walls take canvases like any other), H
   (3 quads, 12-point ring). The O-shape is the one that exercises `facing`, so
   do it before step 8. The hexagon is where a **triangular raster** (three
   `BeamFamily` at 60°) becomes the interesting choice — data, not new code.
7. **Shared room utilities** — the extraction to `src/utils/room/`, triggered by
   the second exhibition or the second shape, whichever comes first. Layer it
   per **Part 6** so the grid ceiling is opt-in, break the two couplings listed
   there, and **rewrite `canvases` on top of it as the acceptance test** — same
   look, flat ceiling, `u`/`v` renamed in passing. This is also where the
   hanging machinery becomes a real utility and **both static and animated
   shadows land as first-class cases**, replacing `canvases`' index-based
   `isAnimated(i)`. `Sway` returns here, as one option among two, not as a
   default.
8. **Free-standing walls** (Part 4): an `Outward` ring at partial height, plus
   the top cap and the per-height baker. Should be additive. This is also the
   point to add per-bake uniforms to `TextureBaker` (Part 5.1) if the
   baker-per-height `Dict` has started to chafe — not before.

---

## Verification

The Vite dev server is assumed already running on port 3000 — do not start it.

```bash
bun run sketch rooms/grid-canvases        # → sketches/rooms/grid-canvases/main.js
```

Then at `http://localhost:3000/rooms/grid-canvases/`, walk the room with the
first-person controller and check:

- **After step 1:** side-by-side with `http://localhost:3000/rooms/canvases/` —
  floor contact line, corner noise fade, wall gradient, ceiling halos and floor
  reflection should be visually identical, ignoring the paintings that are only
  in the reference. Any difference here is a bug in the footprint port, not a
  design choice. Bare walls make this comparison _easier_, not weaker: nothing
  is hanging in front of the surfaces being judged.
- **Confinement (step 2):** hold forward into each wall — the camera stops 0.5 m
  short and the view never clips through. Walk diagonally into a wall and
  confirm it _slides_ rather than sticking. Hold Space / Shift and confirm the
  vertical bounds. Later, in the O-shape, walk a full lap around the inner box
  and confirm the clearance holds on its outer faces too.
- **After step 3:**
  - Looking forward at eye height, the light plane is hidden behind the raster
    and there is no bloom.
  - Tilting up, the light opens through the raster gaps and bloom ramps in.
  - Walking sideways, the light plane visibly lags the raster.
  - No hard seam where the raster meets the walls; the strips darken into the
    junction.
  - The beam crossings are visibly darker than the beam runs, so the raster sits
    _in_ the ceiling rather than floating in front of it. This is the term most
    likely to need its fade width retuned away from `EdgeFadeWorld`.
  - Every wall is bordered by a beam flush with its plane, and the light
    openings are inset by one beam width all round — no opening runs into a
    corner.
  - At the wall/beam junction the value is continuous: the wall arrives at its
    darkest, the beam's side face starts there and brightens upward. Look for a
    seam or a value jump at `WallTopY` — that is the failure mode, and it means
    the two fades are anchored to different heights.
  - The beam soffits read as the same colour as the `canvases` ceiling.
  - The floor mirror shows the raster and the recessed light, and the reflected
    light does not itself bloom.
- **After step 4 (hanging affordance):** shadows land as they do in `canvases`,
  and the pieces read well under the new ceiling light rather than the old halo
  strips — the first point at which the lighting change is judged against a
  subject at all. Also check the seam holds in the other direction: moving,
  resizing or removing a piece should touch only the curation code, never the
  room construction.
- **After step 5 (first real exhibition):** the check is no longer "does it
  match `canvases`" but "does this content look good in this room" — and the
  answer is allowed to be "after re-tuning the tunable block". The thing to
  verify is that re-tuning is confined to that block: if making an exhibition
  look right requires edits scattered through the room construction, the
  parameter set is in the wrong place and should be gathered before going
  further.
- **Later, per shape:** stand in every concave corner and confirm the contact
  darkening and noise fade wrap it as cleanly as a box corner; confirm the
  raster is cut to the plan with no strips floating outside it.

Use `bun run sketch:watch rooms/grid-canvases` while iterating on step 3's
constants. There are no tests in this repo — the sketch running correctly in the
browser is the check.
