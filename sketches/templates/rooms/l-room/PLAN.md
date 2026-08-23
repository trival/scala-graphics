# l-room — a room template on a concave plan

**This is a template.** It is meant to be opened cold, read, copied and tuned —
not maintained as a finished scene.

It is `grid-canvases` **with six points instead of four**. Read
`../grid-canvases/PLAN.md` first: it carries the account of the room, the grid
raster, the coffer light, the hang and everything that is load-bearing about
them, and every bit of it applies here unchanged.

This file records only what B adds — which is deliberately almost nothing, and
that is the finding.

## What an L costs

**Geometrically, nothing.** The roadmap's claim was that shapes are "nothing but
ring data". For the geometry that is exactly true: walls, floor, ceiling, the
raster's clip, the grime line and the camera clamp all come out of the six
points with no code aware that the plan is concave. The notch's inner wedge —
where two walls meet at 90° as they do in any box — needed no treatment at all.

Three things are **not** free, and all three are worth knowing before copying
this to another odd plan.

### 1. Snapping has to say which side the room is on

`grid-canvases` snaps by _half-extent_, which works because a rectangle centered
on the origin has mirrored wall pairs — one number does both sides. An L's six
walls face four different ways, two of them at the notch, so each plane snaps on
its own and the direction the room lies in has to be stated:

```scala
def snapWall(wanted: Double, inwardSign: Double): Double
```

Get the sign wrong and the wall lands on the wrong side of its beam, so the
perimeter beam ends up _outside_ the room. That shows immediately as a light
opening running into a corner instead of being inset by a beam width — which is
also the check to run after changing the plan.

### 2. The light layout has to be metric, and here you can see why

**On a rectangle, UV and meters differ only by a constant.** Same uniform
spacing, different arithmetic to reach it — so `grid-canvases`' metric sine is
defensible but proves nothing.

**On an L they diverge, because the bounding box is not a room.** A UV layout
says "N features across the plane", and the plane is the plan's bounding box: a
rectangle that neither leg fills and no visitor can perceive. The count is
anchored to a frame that is not there, so the spacing comes out different in the
two legs and drifts against the raster overhead.

So this template's light is **discrete pools on the beam lattice** — a pool every
_k_ cells, landing on cell centers. The plan is already snapped to
`GridSpacing`, so the light lattice and the raster above it agree, and that
agreement is only expressible in world meters. It reads as deliberate
architectural alignment rather than as a texture, and it carries continuously
through the notch.

It also needs no boundary treatment: discrete pools do not fade at the plan
edge, and a pool falling outside is occluded by a wall like everything else out
there.

**Worth doing once and throwing away:** re-express the same layout in the
plane's `uv` and walk from one leg to the other. The spacing changes between the
legs and the pools slide out of step with the beams. That is the demonstration.

This is not an argument against UV. UV means "N features spanning the plane" and
is right when the count is the point — six halos stay six in any room. It is
wrong here because the count would be counting a box.

### 3. The protruding corner is a different edge, and the noise fade has to know

The L has **one vertex the box never had**: the corner at the notch that sticks
out into the room. Its two faces turn away from each other, so you see one at a
time against a silhouette — where a box's corners all wrap toward you and show
both faces meeting.

`grid-canvases` faded the normal-varied noise over a single radius at every
vertex, tuned for the wrapping case, where the wide blend is what stops the
corner reading as a seam. At the protruding one the same fade has nothing to
blend with and reads as **a broad soft band running down the wall** near its
edge. It wants a rounding, on the scale of a broken edge, not a blend — so
`Fades` carries a radius per kind and this vertex takes `arris`.

**Nothing in this sketch names it.** The build plan expected a per-wall CPU flag
here; it turned out to be derivable. `Boundary.ringEdges` classifies every
vertex with one dot product against the previous edge's direction, and
`edgeFade` reads it off the boundary — so the six points stay the only place the
shape is decided, and any plan gets it for free. The mechanism is in
`../grid-canvases/PLAN.md`; the L is simply the first plan where it fires.

## What an L does _not_ exercise, contrary to the build plan

The implementation plan expected this template to be where `clipLine` starts
returning **more than one interval**. It does not, and the reason is worth
recording so nobody goes looking for a bug:

> **An axis-aligned L is monotone in both axes.** Any line parallel to X or Z
> enters the plan once and leaves once. Splitting needs a plan that a straight
> line can leave and re-enter — a U, a T, an O — or a beam family running
> diagonally across the notch.

The split path is real and is exercised, just not here: `test/room/Plan.test.scala`
and `test/room/Raster.test.scala` both cover it with a U. If you copy this
template to a U-shaped or O-shaped plan, that path switches on with no code
change.

## The phantom floor

The floor and the light plane both span the plan's **bounding box**, so on an L
roughly a quarter of each sits behind walls. That is correct and needs no
change: every ring edge carries an opaque full-height wall, so the region
outside the plan is never visible, and the camera cannot reach it.

This template is where that invariant is first actually tested rather than
argued. Fly in dev mode (Space / Shift, dev server only) to see the phantom
floor and confirm it is only reachable from there.

## Conventions

Unchanged from `grid-canvases`: meters throughout, `u`/`v`/`uv` strictly
normalized texture coordinates, no ambient occlusion anywhere, no curation in
the room.
