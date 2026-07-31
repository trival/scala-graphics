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

Being built. Current step: **A0 — scaffold**, an unmodified copy of
`sketches/rooms/canvases`, repackaged. Everything below describes where it is
going, not what it does yet.

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
