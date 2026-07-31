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
reader of *this sketch* needs.

## Status

Being built. Done: **A0** (scaffold), **A1** (footprint replaces the box),
**A2** (camera confinement), **A3** (library prerequisites), **A4** (coffer
light), **A5** (raster geometry) and **A6** (raster shading).

The room is now derived end to end from one `Ring` of four XZ points: walls from
its edges, floor and ceiling from its bounding box, the grime line and noise
fade from `edgeSetDist` against those edges. Paintings, shadows, the composite
path and animation are stripped — the subject at this stage is the space.

The same rings confine the walker: `confine` clamps the camera 0.5 m short of
every surface after the controller moves it, and `y` is locked to eye height
with free-fly surviving as a `devMode`-gated inspection tool.

The wall baker takes `topY` as a **per-bake uniform**, so one pipeline bakes
every wall in the room whatever its height. Nothing varies yet — every wall
shares a top — which is exactly why it is worth doing now rather than after
partitions and pillars have each accumulated a specialized shade.

The room is now **derived from the ceiling beam lattice** rather than authored:
`snapHalfExtent` puts each wall plane flush with the outer face of the nearest
beam, so every wall gets its perimeter beam for free once the raster exists
(6.5 → 6.70 m, 10.0 → 10.00 m). Walls stop at `WallTopY`, and an HDR light plane
sits `CofferDepth` above the ceiling line, overhanging the plan.

The raster is **a flat list of beam segments**, not a pair of axis-aligned
grids — two `BeamFamily` calls at 90°, clipped to the plan by `clipLine`. A
hexagon calls it three times at 60°; that is data, not new code. 32 beams here,
and the outermost of each family sits flush with its wall, so every wall has its
perimeter beam and the light openings are inset all round.

The beams are **the same material as the walls** — same `roomNoise` at world
position, same fade of the normal-varied term at every geometry edge, `CeilTint`
on the soffits because the underside of the raster is the ceiling plane as far
as the eye is concerned. Nothing darkens at a junction.

The beams supply their own edge distance rather than going through `edgeDist`,
whose vertical term assumes a surface spanning `0 … topY` — true of a wall,
false of a beam at 5.25–5.50 m. The atlas row is the beam's unrolled
cross-section, so `v` within a row locates you across it and the band boundaries
are exactly the arrises. That is why one expression serves every beam at any
angle with no per-beam frame.

**Next: A7, the tuning pass** — `CofferDepth`, `GridSpacing`, `StripWidth`,
`StripHeight`, `LightColor`, `TopFadeDepth` and bloom, all by eye. Then the
hanging affordance (A8) and the template pass (A9).

Two constants are **derived rather than tuned**, and should stay that way:
`RoomWidth`/`RoomDepth` come from `snapHalfExtent` so every wall gets its
perimeter beam, and `LightOverhang` comes from room span, coffer depth and eye
height so no sightline can see past the light plane. Both are correctness
bounds, not look decisions — change the wanted extents and the coffer depth, not
these.

Three fixes worth not undoing while tuning: the per-family soffit stagger
(coplanar soffits z-fight), the beam atlas clearing to the material color rather
than black (uncovered atlas texels otherwise bleed out as dark seams), and the
`Bloom` soft clip (a hard clamp at 1.0 destroys MSAA on the beam silhouettes).
See `documents/room-templates-implementation.md` for the full account.

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

## Two things deliberately *not* here

**No ambient occlusion.** Nothing darkens an edge, corner or junction — not
where walls meet, not where the grid meets a wall, not where beams cross. A real
exhibition space is lit by a huge diffuse source and bounced around a white
interior until light reaches everywhere nearly equally; corners do not go dark.
Adding occlusion produces a recognisable game-engine look that reads as
*artificial* against this subject. The realism comes from the opposite
direction: near-uniform brightness with slight world-space noise, varied by
normal.

The one darkening that stays is the **grime line** where wall meets floor, and
it is *dirt, not light* — which is why it belongs only there and generalizes to
no other edge. If you want occlusion, it is a deliberate module with its own
falloff radius, never a reuse of `EdgeFadeWorld` (which is tuned to round
corners off, not to absorb light).

**No curation.** The room provides walls, not a hang. How many pieces, where,
what size, whether they move and what is on them are the exhibition's decisions,
made in the sketch that copies this one. Any fixed pieces here exist only to
prove the affordance works — they are not a layout to imitate.

## Conventions

- **Meters throughout.** Every dimension, offset, fade width and margin is in
  meters. Eye height 1.7, wall clearance 0.5.
- **`u` / `v` / `uv` mean normalized `[0,1]` texture coordinates and nothing
  else.** Anything carrying meters gets a name saying what it measures from —
  `centerFromLeft`, `centerHeight`, `heightAboveFloor`. The two conventions meet
  inside single function bodies here, which is how it becomes a bug rather than
  a style quibble.
- **Every surface's *look* is yours.** The room owns the geometry, the ambience
  field and the compositing mechanism; what a surface *shows* is supplied as its
  own panel, at its own resolution, sampled by a shade this sketch writes. That
  holds for walls, the light plane and the floor alike — more inputs to a shade
  you write, never more parameters on a shade you are handed.
