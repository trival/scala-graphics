# Grid-ceiling rooms on a general floor-plan footprint

## Context

`sketches/rooms/canvases/` established the look we want for an art space: baked
noise surfaces, soft edge treatment in the corners, a darkened contact line at
the floor, hung canvases with multiplicative drop shadows, a blurred floor
mirror and bloom. It stays untouched.

Two things should now grow out of it, in one new sketch:

1. **A grid ceiling.** Instead of the current flat ceiling with baked HDR halo
   strips, the light becomes a recessed luminous plane sitting _above_ the
   ceiling line, hidden behind a raster of crossing bulks. Because the light
   plane is further away it moves more slowly under camera translation than the
   raster — you only see the light itself, and get the bloom, when you look
   close to straight up.
2. **A room shape that is no longer a box.** Later sketches want L-shaped,
   hexagonal, O-shaped (a box wall standing inside the room, hung with canvases
   on all four of its sides) and H-shaped (two rooms joined by a tunnel) plans.
   In every one of those, the floor contact line must still be darkened and the
   normal-dependent noise must still fade out at every geometry edge, including
   the concave inner corners that a box simply doesn't have.

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

Everything in `Canvases.scala` that is already shape-independent — `shadowMask`,
`PaintingSpec` / `Painting` / `Sway`, `paintingForm`, `hang`,
`compositeWallTex`, `copyShade`, `shadowShade`, `texturedShade`, the mirror,
bloom, camera and sway loop — carries over unchanged.

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
enum Facing:
  case Inward   // the room is inside this loop — the outer boundary
  case Outward  // the room is outside it — anything standing in the room

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
`height = footprint.height` and neither field does anything.

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
  `inwardNormal` is the edge direction rotated 90°, with the sign taken from
  `ring.facing` (which is what gives an O-shape's inner box — and later a
  partition — hangable faces on every side); and `rotY` is _derived_ rather than
  hand-authored:

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

- **Wall paintings.** `counts = Arr(3, 3, 4, 4)` and `isAnimated(i) = i >= 2`
  (`Canvases.scala:576-578`) are positional and break as soon as the wall count
  varies. Derive instead:

  ```scala
  val count = ((wall.width - 2.0 * WallSideMargin) / DesiredSpacing).round.toInt.max(1)
  ```

  and make `animated: Boolean` a field on `Wall`. Index the image palette with
  `palette(i % palette.length)`.

- **Re-anchor the absolute-metre constants — but not all to the same thing.**
  The hang height `v = 1.75` (`Canvases.scala:598`) becomes a named
  `HangHeight`, measured up from the floor. The wall tint gradient
  `wp.y.smoothstep(4.6, 5.5)` (line 278) looks like `height - 0.9 … height`, but
  a fraction of the room height is the _wrong_ re-anchoring: it is a lighting
  falloff, so it should be expressed as **absolute distance below the light
  plane**, `(lightY - wp.y).smoothstep(…)`. That is both more physical and the
  thing that makes a shorter free-standing wall shade correctly with no extra
  code — a 2.5 m partition is simply further from the light than the top of a
  5.5 m wall, and reads that way automatically.

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
  y = lightY = Height + CofferDepth   ── luminous plane, HDR, faces down
       ↑ CofferDepth (≈ 1.0–1.5 m)    ── coffer reveal walls, one per ring edge
  y = Height                          ── wall top / raster top, flush
       ↓ StripHeight (≈ 0.25 m)       ── the bulks hang down from here
```

The raster sits in the ceiling plane, so from eye height the room still reads as
having a ceiling at `Height`. Behind it is a `CofferDepth`-deep glowing recess.
The parallax the brief asks for is plain perspective — at 1.7 m eye height,
`CofferDepth = 1.0` gives eye-to-raster 3.8 m vs eye-to-light 4.8 m, ≈ 26 %
slower apparent motion on the light. No trick needed; `CofferDepth` is the knob.
The `grid-ceiling` sketch works the same way (`GridCeiling.scala:201`).

The **coffer reveal walls** are short quads from `Height` to `lightY`, one per
edge in `ceilingEdges` — literally
`mkWall(center = at (Height + CofferDepth/2), width = edge length, height = CofferDepth, …)`,
reusing the same function. Without them you see void through the raster at
grazing angles. Note this and every other consumer in Part 2 reads
`ceilingEdges`, never `floorEdges`: the ceiling assembly is bounded only by what
actually reaches it.

### Raster geometry

Port `rowStrips` / `colStrips` from `GridCeiling.scala:71-143` verbatim in
shape: each strip is a `Box`, only its three visible faces are emitted
(front/back/bottom for rows, left/right/bottom for cols), each face taking a
band in a UV atlas. Differences from `grid-ceiling`:

- **No tiling.** A room is small, so bake the whole atlas once and use a clamp
  sampler. Drop the `tileWorld` / `TileCells` / psrdnoise-period machinery
  entirely — `roomNoise`'s non-tiling `Noise.fbm3` is what we want here, since
  the strips must match the walls' noise field, not a tiling one.
- **Clipped to the footprint.** Strips run across the plan's bounding box and
  must be cut to the actual plan. One small CPU routine, written once now so
  step 3 is data-only:

  ```scala
  /** Intersect the axis-aligned line (x = c, or z = c) with every edge in
    * `ceilingEdges`, sort the hits, and emit the sub-segments whose midpoint is
    * inside. Yields one Box per surviving interval.
    */
  def clipStrip(edges: Arr[Edge], axis: Int, coord: Double): Arr[(Double, Double)]
  ```

  Taking `ceilingEdges` is what lets the raster run _over_ a free-standing wall
  uninterrupted, which is the correct read: the grid is a ceiling feature and
  does not know the partition exists.

  For the rectangular step-1 plan this returns a single full-span interval, so
  it is exercised trivially but is in place.

Suggested tunables (room-scale, much finer than `grid-ceiling`'s 1.5 m):
`GridSpacing = 0.55`, `StripWidth = 0.10`, `StripHeight = 0.25`. Snap spacing to
an integer count over the bounding box in each axis so the raster is symmetric.

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

They do **not** need an edge list. The raster is uniformly spaced, so the whole
field is two `fract` expressions with no uniforms, no arrays and no `Arr` of 200
edges:

```scala
// distance to the nearest beam centerline on each axis
def axisDist(c: FloatExpr, start: Double, step: Double): FloatExpr =
  ((c - start + step / 2.0).mod(step) - step / 2.0).abs

val dRow = axisDist(wp.z, gridStart, gridStep)   // rows run along X
val dCol = axisDist(wp.x, gridStart, gridStep)
val beamDist  = dRow.min(dCol)                   // distance to nearest beam
val crossDist = vec2(dCol, dRow).length          // distance to nearest crossing
```

Exact, constant-cost, and it composes with the footprint: a beam clipped at a
wall gets `edgeSetDist(wp.xz, ceilingEdges)` folded into the same `min`, so its
cut end fades against the wall the same way its body fades against a crossing.

Three terms then build the strip surface:

1. **Junction darkening** — `contact(crossDist)` and `contact(beamDist)`,
   reusing the existing `contact` unchanged, at a slightly wider fade than the
   floor's `EdgeFadeWorld` since these pockets are the strongest occlusion in
   the room. This is the term that makes the raster sit _in_ the ceiling.
2. **No normal-dependent noise.** The strips are 0.10 × 0.25 m; the orientation
   term would seam at every one of the many hard 90° edges and read as dirt at
   that scale. Pass `edge = 0` for strip surfaces so only the continuous
   positional FBM survives — automatically seam-free against each other, the
   coffer, and the walls. Term 1 now supplies the structure that this gives up,
   which is why dropping it is safe here and was not obviously safe before.
3. **Per-face orientation, analytically.** Bottom face darkest (it faces away
   from the light); side faces gradient-brighten toward `Height`. Hard geometric
   edges _want_ a real shading break — it is the noise, not the shading, that
   must stay continuous.

Plus `contact(edgeSetDist(wp.xz, ceilingEdges))` where a strip runs into a wall,
matching the floor contact line.

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

- **Wall lighting.** The light source is now a bright ceiling, so invert and
  re-anchor the `WallTintLow → WallTintHigh` gradient: brightest near the top,
  falling off downward, with stops as fractions of `Height`. Add a darkening
  band right under the raster — `contact(Height - wp.y)`, i.e. the same contact
  function applied at the ceiling junction, since the bulks shade the wall top.
  Walls therefore end up with contact darkening at floor, ceiling, and corners.
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
for why the library additions that looked implied mostly aren't. If a second
shape sketch ends up copy-pasting `Footprint` + `edgeSetDist` + `clipStrip`
unchanged, _that_ is the moment to promote them to `src/utils/room/`, not
before.

---

## Order of work

1. **Rect footprint, no grid ceiling.** Port `canvases` onto `Footprint` with a
   single `Inward` full-height 4-point ring, the derived walls, `edgeSetDist` /
   `cornerDist` / the new `edgeDist`, and the derived painting counts. Keep the
   old halo-strip ceiling. **Success criterion: it looks the same as
   `canvases`.** This isolates the refactor from the art change. Carry the Part
   4 hooks (`facing`, `Ring.height`, edge sets, `topY`, baker per height) even
   though nothing exercises them yet. 1b. **Camera confinement** (same step — it
   needs nothing but the footprint, and having it in from the start makes every
   later shape immediately walkable). `nearestBoundary` / `isInside` / `confine`
   plus the named metre defaults.
2. **Grid ceiling.** Raise the light plane, add coffer walls, add the raster,
   re-tune the wall gradient and bloom. This is the step with taste in it —
   expect to iterate on `CofferDepth`, `GridSpacing`, `StripHeight` and
   `LightColor`.
3. **Shapes** (separate sketches, later): with 1 and 2 in place these are
   `Footprint` data plus a hand-written `floorFaces` decomposition — L (2 quads,
   6-point ring), hexagon (3 quads, 6-point ring), O (4 quads, outer ring + one
   full-height `Outward` ring, whose four walls take canvases like any other), H
   (3 quads, 12-point ring). The O-shape is the one that exercises `facing`, so
   do it before step 4.
4. **Free-standing walls** (Part 4): an `Outward` ring at partial height, plus
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
  floor contact line, corner noise fade, wall gradient and painting shadows
  should be visually identical. Any difference here is a bug in the footprint
  port, not a design choice.
- **Confinement (step 1b):** hold forward into each wall — the camera stops
  short of it with the canvases still comfortably in front, and the view never
  clips through. Walk diagonally into a wall and confirm it _slides_ rather than
  sticking. Hold Space / Shift and confirm the vertical bounds. Later, in the
  O-shape, walk a full lap around the inner box and confirm the clearance holds
  on its outer faces too.
- **After step 2:**
  - Looking forward at eye height, the light plane is hidden behind the raster
    and there is no bloom.
  - Tilting up, the light opens through the raster gaps and bloom ramps in.
  - Walking sideways, the light plane visibly lags the raster.
  - No hard seam where the raster meets the walls; the strips darken into the
    junction.
  - The beam crossings are visibly darker than the beam runs, so the raster sits
    _in_ the ceiling rather than floating in front of it. This is the term most
    likely to need its fade width retuned away from `EdgeFadeWorld`.
  - The floor mirror shows the raster and the recessed light, and the reflected
    light does not itself bloom.
- **Later, per shape:** stand in every concave corner and confirm the contact
  darkening and noise fade wrap it as cleanly as a box corner; confirm the
  raster is cut to the plan with no strips floating outside it.

Use `bun run sketch:watch rooms/grid-canvases` while iterating on step 2's
constants. There are no tests in this repo — the sketch running correctly in the
browser is the check.
