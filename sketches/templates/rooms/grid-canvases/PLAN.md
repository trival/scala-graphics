# grid-canvases — a room template

**This is a template.** It is meant to be opened cold, read, copied and tuned —
not maintained as a finished scene. Regular sketches copied from it are
_outcomes_ and should stay lean and sparsely commented; the explanatory weight
lives here and in the comments beside the code.

It enables one situation: **a walkable exhibition room** — a floor plan, an
ambient-baked shell, a grid ceiling with a recessed light, camera confinement,
and walls that accept hung pieces.

The full design rationale is `documents/grid-ceiling-rooms-plan.md`; the build
order and its visual checkpoints are
`documents/room-templates-implementation.md`. This file carries the part a
reader of _this sketch_ needs.

## Where to touch

The one-screen answer, before any of the reasoning below.

| To change…                     | Go to                                                                       |
| ------------------------------ | --------------------------------------------------------------------------- |
| the room's **shape**           | the single `Ring` in `main`. An L is a 6-point ring, a hexagon 6 at 60°     |
| the room's **size**            | the wanted extents passed to `snapHalfExtent` — not `RoomWidth` itself      |
| the **look** of any surface    | the TUNABLES block at the head of the file. Nothing tunable lives lower     |
| the **ambience field**         | `roomNoise`, in TUNABLES. All of it is one decision; edit it in place       |
| what the **light plane** emits | the fenced light-shader block. It is yours; four technical limits are noted |
| **what hangs and where**       | the CURATION block, and `curate` in `main`. Delete both and write your own  |
| **add a partition**            | a second `Ring` with `Facing.Outward` and a `height` below the room's       |

Everything else derives. Nothing in the list needs a change anywhere else in the
file — that is the property the template exists to provide, and it is worth
re-testing after any edit.

## What is settled, and what it costs to undo

Built and tuned through the implementation plan's step A9. The room derives end
to end from ring data: walls from ring edges, floor and ceiling from the
bounding box, the grime line and noise fade from `edgeSetDist` against those
edges, the raster clipped to them, and the walker confined by them.

**Two constants are derived, not tuned**, and should stay that way.
`RoomWidth`/`RoomDepth` come from `snapHalfExtent`, which puts each wall plane
flush with the outer face of the nearest beam so every wall gets a perimeter
beam for free. `LightOverhang` comes from room span, coffer depth and eye height
so no reachable sightline can see past the light plane's edge. Both are
correctness bounds, not look decisions — change the _wanted_ extents and the
coffer depth, and read these.

**Winding is free; point order is not.** `Facing` is an absolute claim about
which side the room is on, and `Boundary` cancels a ring's winding so it stays
true either way. What point order _does_ fix is edge order, and therefore wall
index — so an O-shaped room can wind its outer and inner rings alike and have
wall `i` face wall `i`, which is how curation addresses opposing walls.

**A wall is plan data.** No `Form`, no `rotY` — a GPU resource would force the
whole derivation to run inside `Painter.init`, and a stored angle is a second
copy of `inwardNormal` that can drift. Forms are built at the use site from
`wall.quad`; the angle is an extension.

Six things are load-bearing and easy to undo by accident while tuning. Each has
its reasoning beside the code; `documents/room-templates-implementation.md` has
the full account of how each was found.

| Do not undo                              | What comes back                                                      |
| ---------------------------------------- | -------------------------------------------------------------------- |
| per-family soffit stagger                | coplanar soffits z-fight into a dashed shimmer at every crossing     |
| beam atlas cleared to the material color | uncovered atlas texels bleed out as dark seams along every beam      |
| the atlas row's **band order**           | the soffit/side gradient lands on the wrong edges — beams inside out |
| `bah` an exact multiple of the row       | per-beam sub-texel phase; lines at some walls and not others         |
| `crossing` / `atWall`                    | bright lines across every junction, a light slot along every wall    |
| `Bloom`'s asymptotic shoulder            | a flat glare plateau whose outline is a hard aliased edge            |

The **band order** one is the subtle one, and template C will meet it again:
`Quad.fromDimensions` derives `v` from `-(n × tangent)`, so the two side faces —
having opposite normals — run opposite ways in `v`. The row is laid out as the
cross-section in order (`sideA top → arris → soffit → arris → sideB top`) so
every atlas adjacency is a real geometric adjacency. A triangular raster has
three side orientations and needs the same argument redone, not copied.

## What the room is made of

| Piece                                   | What it tunes                                        |
| --------------------------------------- | ---------------------------------------------------- |
| Footprint rings                         | the room's shape, and everything derived from it     |
| World-space noise + normal-varied noise | the material read; the core of the illusion          |
| Edge fade                               | how rounded corners appear where materials meet      |
| Grime line                              | dirt at the floor junction, not light                |
| Tints per surface                       | wall / soffit / floor material color                 |
| Prebaking                               | what is cached at init vs computed per frame         |
| Grid raster + light plane               | the ceiling, the light, and the bloom it drives      |
| Walls as hangable surfaces              | where pieces can go, and how their shadows composite |
| Camera confinement                      | where the visitor can stand                          |

## Two things deliberately _not_ here

**No ambient occlusion.** Nothing darkens an edge, corner or junction — not
where walls meet, not where the grid meets a wall, not where beams cross. A real
exhibition space is lit by a huge diffuse source and bounced around a white
interior until light reaches everywhere nearly equally; corners do not go dark.
Adding occlusion produces a recognisable game-engine look that reads as
_artificial_ against this subject. The realism comes from the opposite
direction: near-uniform brightness with slight world-space noise, varied by
normal.

The one darkening that stays is the **grime line** where wall meets floor, and
it is _dirt, not light_ — which is why it belongs only there and generalizes to
no other edge. If you want occlusion, it is a deliberate module with its own
falloff radius, never a reuse of `EdgeFadeWorld` (which is tuned to round
corners off, not to absorb light).

**No curation.** The room provides walls, not a hang. How many pieces, where,
what size, whether they move and what is on them are the exhibition's decisions,
made in the sketch that copies this one. The pieces here exist only to prove the
affordance works — they are fenced in a CURATION block precisely so they can be
deleted wholesale, and they are not a layout to imitate. Two fixed sizes at two
fixed spots in flat colors: crude on purpose, because anything better-looking
would invite copying.

The affordance itself is the part worth keeping. A wall binds **a `Panel`,
whatever produced it** — the bare ambience bake when nothing hangs, or the
shadow composite when something does — so curation changes the producer and
never the shade. Shadows accumulate as one multiplicatively-blended instance per
piece in a single pass, so there is no cap on how many hang and no per-piece
cost beyond an instance. And they are _shaped, not simulated_: there is no light
position anywhere in this room, and hanging something does not introduce one.

**No animation.** `canvases` sways its paintings and carries mutable bindings
for it; nothing here moves, so `Painting` holds plain values. Animation returns
when hanging becomes a shared utility with static and animated as two equal
cases.

## Conventions

- **Meters throughout.** Every dimension, offset, fade width and margin is in
  meters. Eye height 1.7, wall clearance 0.5.
- **`u` / `v` / `uv` mean normalized `[0,1]` texture coordinates and nothing
  else.** Anything carrying meters gets a name saying what it measures from —
  `centerFromLeft`, `centerHeight`, `heightAboveFloor`. The two conventions meet
  inside single function bodies here, which is how it becomes a bug rather than
  a style quibble.
- **Every surface's _look_ is yours.** The room owns the geometry, the ambience
  field and the compositing mechanism; what a surface _shows_ is supplied as its
  own panel, at its own resolution, sampled by a shade this sketch writes. That
  holds for walls, the light plane and the floor alike — more inputs to a shade
  you write, never more parameters on a shade you are handed.
