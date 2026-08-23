# hex-partitions — a hexagonal room with things standing in it

**This is a template.** It is meant to be opened cold, read, copied and tuned —
not maintained as a finished scene.

It is `grid-canvases` with a plan that **cannot snap to the lattice** and with
**rings the room is outside of**. Read `../grid-canvases/PLAN.md` first: it
carries the account of the room, the raster, the coffer light, the hang and
everything load-bearing about them, and all of it applies here unchanged.

Two independent features land in one template because each is small. They share
nothing but this file.

## 1. A plan that cannot snap

Every axis-aligned room derives itself **from** the lattice: beam centerlines at
`k · GridSpacing`, each wall plane flush with the outer face of the nearest
beam, and the beam against each wall then _is_ the perimeter beam. No generator,
no special-cased geometry, and light openings inset by one beam width at every
wall rather than dying into a corner.

**A hexagon cannot do that.** Its six walls sit on three axes; each beam family
is parallel to exactly one opposite pair, so no single lattice offset can put a
beam face on all six planes at once. The plan is authored directly in meters and
the perimeter is generated:

```scala
perimeterBeams(ceilBnd, StripWidth, StripHeight, soffitY)
```

**The inset is the whole trick.** Each beam is offset inward by `width/2`, so its
soffit spans `0 … StripWidth` from the wall — exactly what a snapped plan's
perimeter beam does. Every downstream term therefore transfers with no change:
the `atWall` blend keyed on distance-to-boundary, the cull of faces pointing out
of the plan, the inset openings. Put the centerline _on_ the boundary instead
and half the soffit hangs outside the plan while every distance-keyed term reads
one strip width out.

The offset line is **clipped against the plan** rather than run corner to
corner, which mitres the corners for free: at each corner the two offset lines
run onto the neighbouring wall and the beams overlap slightly instead of leaving
a notch.

It is **another producer into the same `Arr[Beam]`**, not a second kind of
thing. Nothing downstream — the face layout, the atlas row, the bake — knows a
perimeter beam from a field beam.

### The triangular raster is data

Three `familyBeams` calls at 0°, 60° and 120° instead of two at 90°. Same
generator, same clip, same atlas, same bake. `phase = 0` puts one centerline of
each family through the origin, so the pattern is symmetric about the center.

**The atlas band order did not need redoing**, which is worth recording because
the build plan expected it to. The concern was that `Quad.fromDimensions`
derives `v` from `-(n × tangent)`, so the two side faces run opposite ways in
`v`. That is true, and the row is laid out as the cross-section in order to
handle it — but the argument is **angle-independent**: `perp` is `dir` rotated
90°, so `perp × dir` is `+Y` whichever way the beam runs. A beam at 60° lays out
exactly like one at 0°. `test/room/Raster.test.scala` asserts this at 0°, 30°,
60°, 90° and 120°.

### Watch the beam count

The atlas is one row per beam and is deliberately **not** clamped against
`maxTextureDimension2D`. Three families over a hexagon give roughly
`3 · √3 · HexRadius / GridSpacing` beams plus six perimeter ones, so the count
grows with radius _and_ with grid fineness. At the shipped values that is about
60 rows against a limit near 86.

Over the limit, WebGPU does not throw: the texture is invalid, the console fills
with validation errors, and **the raster simply does not draw**. If it vanishes
after a grid tweak, look there first. `test/room/Raster.test.scala` pins the
headroom.

## 2. Free-standing partitions

A partition is an `Outward` ring whose `height` is below the room's. **It is not
a new concept** — an O-shape's inner box is the same object at full height — and
that collapse is the point: one code path covers both, and every consumer gets
the behavior it should by filtering the same ring list two ways.

| Consumer                 | Boundary          | Result                            |
| ------------------------ | ----------------- | --------------------------------- |
| Floor grime + noise fade | `floorBoundary`   | wraps all four faces              |
| Camera confinement       | `floorBoundary`   | 0.5 m clearance, walk around it   |
| Walls + hanging          | its own ring      | both faces hangable               |
| Raster clipping, light   | `ceilingBoundary` | the grid runs straight over it    |
| Noise edge fade          | its own `topY`    | rounds off against its open rim   |
| Wall tint gradient       | the room's ceiling| stays low — it never reaches it   |

### The one thing a partition got wrong at first

Two things in the wall bake key on a height, and **they key on different ones.**
This is invisible in a room where every wall shares a top and glaring the moment
something shorter stands in it:

- **The tint gradient is anchored to `WallTopY` — the room's ceiling line,
  always.** It is a broad settling of tone approaching the _ceiling_, and it
  depicts proximity to the ceiling, not anything about the wall carrying it. A
  partition stopping at 2.5 m never reaches that zone and stays at `WallTintLow`
  the whole way up, which is correct. Anchoring it to the wall's own top instead
  — which is what this shipped with first — gives a short partition its own
  private ceiling-settling at its rim, and it reads as a shadow that nothing
  casts.

- **The noise edge fade stays per-surface, on `topY`.** An open top rim really
  is a geometry edge, and rounding the material off there is exactly what
  `edgeFade`'s vertical term is for. That is the whole reason `topY` is a
  per-bake uniform rather than a constant.

- **`topFade` rides along beside it, and answers a question the ring cannot.** A
  hexagon wall's top is not an edge at all — the perimeter beam continues the
  plane above it — while a partition's is an open rim, an arris seen one face at
  a time. Those want opposite widths (see `../grid-canvases/PLAN.md`), and
  nothing in the plan data distinguishes them, so the caller says which. Height
  is the stand-in it says it with, the same stand-in `ceilingBoundary` uses; if
  a room ever needs the real predicate, both move to a flag on `Ring` together.

- **The partitions' eight end corners are arrises, and that IS derivable.**
  Unlike the top, which vertex turns away from the visitor follows from the ring
  itself, so `edgeFade` classifies them off the boundary and nothing here names
  them. This room has more of them than any other — six wrapping corners on the
  hexagon against eight turning ones on the partitions — which is what makes it
  the template where the split is most visible.

This is what the four hooks carried since A1 were carried **for** — `Facing`,
`Ring.height`, explicit boundaries per consumer, and per-surface `topY`. None of
them earned its keep until now.

**One pipeline still bakes every wall in the room**, partitions included,
because `topY` is a per-bake uniform rather than a constant closed over by the
shade. If a partition at a third height ever seems to need its own shade, that
uniform is not wired through.

**No top caps, and none needed.** `y` is locked to `EyeHeight`, so the top of
anything taller than 1.7 m is never in view, and the floor mirror reflects to
below the floor and sees undersides. Flying in dev mode shows the open tops the
way noclip shows a level's backstage — expected, not a defect. A partition
_shorter_ than eye height is a different case and does need its top.

Leave room to walk: a visitor needs `WallClearance` from each face plus their
own width, so a partition wants ~1.5 m of clear floor around it. Too little and
the camera does not get stuck, it simply cannot reach the gap — which looks like
an invisible wall.

## 3. Junction darkening — the one place this family darkens an edge

`grid-canvases` rules out junction darkening with an argument about geometry
rather than taste: a 90° wedge admits most of the hemisphere, so under a large
diffuse source the light reaches into all of it near-equally, and adding
occlusion produces a game-engine look.

**That argument does not carry at 60°.** Three families meeting at sixty degrees
close far tighter wedges, and at a triple point three close at once around a
small triangular pocket. There is materially less open sky there, and the wedges
read implausibly flat without it — **decided by looking, which is the only way
this could have been decided.**

So this raster asks for occlusion **by name**, with its own constants. Nothing
in the shared code accommodates it and nothing needed to.

### Every junction here is a triple point

Worth knowing before you go looking for the two-family crossings and fail to
find any. Three families of parallel lines at 60°, equally spaced, all at
`phase = 0` is the standard triangular lattice: **all three lines meet at every
vertex.** Verified numerically — along any beam, the distance to family B and to
family C are equal everywhere, so a two-family crossing never occurs.

The term still counts families rather than saturating, so a triple point scores
twice a plain crossing. That scaling contrasts nothing here; it is there so the
term stays correct if a family's `phase` or `spacing` is ever changed to break
the coincidence. **It is also what made the first attempt twice as strong as
intended** — it was tuned as though a typical junction scored 1, and every
junction scores 2.

### What keeps it from being the thing the rule was guarding against

- **Side faces only.** Gated by `1 - s`, so it is zero across every soffit and
  every arris. That is the model, not a saving: a soffit faces straight down
  into the open room and sees exactly what any other soffit sees, junction or
  not. The occluded surfaces are the vertical ones forming the wedge. Reusing
  `s` also means the term inherits the widening `crossing` and `atWall` already
  do, so it cannot reintroduce a step where those deliberately flattened one.

- **Expressed as a fraction of the gap to the soffit, so the bound is
  structural.** `JunctionDarken` is dimensionless in `[0,1)`; `1` would take a
  wedge exactly as dark as the ceiling. A side face that reached the soffit tint
  would read as the beam turned inside out — the whole raster depends on
  downward faces being the dark ones and vertical faces catching more light. As
  an absolute multiplier that is a discipline you have to remember; this way it
  is arithmetic, and it tracks if the tints are re-tuned. The gap is only about
  10 %, so at `0.5` a junction loses roughly 5 %.

- **Its own radius, an order of magnitude wider than `ArrisSoften`.** That one
  is a material transition a couple of centimeters across, landing exactly on an
  arris. This is a lighting falloff and wants to be on the order of the pocket —
  roughly half `GridSpacing`. Narrower and it reads as a drawn line at each
  junction rather than as shading. It also has to ramp in **before** the
  junction: inside the overlap a side face is buried in the perpendicular beam
  and invisible, so the wedge you actually see is the run leading up to it.

- **Applied after `BeamTopGlow`.** The glow says "this face is close to the
  light plane and sees a lot of it", and a junction is exactly what takes some
  of that view away. Darkening the ambience alone would be erased at the top of
  every side, where the wedge is tightest.

Do not reuse `Fades` or `BeamEdgeFade` for any of this — they are tuned to round
edges off, not to absorb light.

### It stays off at the walls

Deliberately. `nearFamily` counts only the three field families, so the
generated perimeter beams contribute nothing and a field beam running into one
gets no darkening from it. The house rule that the raster does not darken where
it meets a wall is left standing; the decision made here is about 60° wedges and
triple points, and it is kept that narrow.

## The light shader is `grid-canvases`', not `l-room`'s

Deliberately. `l-room` puts discrete pools on cell centers so the light lattice
and the raster agree — and that move **does not port to a hexagon**, whose cells
are triangles rather than squares, so "every _k_ cells" has no square lattice to
land on. The analogous shader here would place pools on the triangular lattice's
centroids, which is a real piece of work and not what this template is about.

The slow metric undulation carried over from `grid-canvases` is shape-agnostic
and stays out of the way. As always, it is the block you are meant to replace.

## Conventions

Unchanged from `grid-canvases`: meters throughout, `u`/`v`/`uv` strictly
normalized texture coordinates, no ambient occlusion anywhere (pending the
question above), no curation in the room.
