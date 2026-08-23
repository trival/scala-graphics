# open-space — a free-standing wall in an endless luminous space

**This is a template.** It is meant to be opened cold, read, copied and tuned —
not maintained as a finished scene.

It is a **sibling of `templates/rooms/`, not a room.** Read
`../rooms/grid-canvases/PLAN.md` first: it carries the account of the plan
types, the wall derivation, the ambience field, the grime line, the hang and the
no-occlusion rule, and all of that applies here unchanged. This file records
only what removing the room costs and buys.

## What this template enables

A single reflecting ground plate that reads as endless, an environment brighter
than white that everything dissolves into, and one wall standing in it with
three pieces hung on it. No ceiling, no shell, no floor plan to be confined
inside — walk where you like, including off the plate.

It is the `grid-ceiling` experiment's open space with the ceiling, the raster,
the centre box and the fog/DOF pass taken out, rebuilt on the room family's
shared code and its material.

## Five things follow from having no enclosure

Everything below is downstream of one deletion. It is worth knowing which of
them are forced and which were choices.

### 1. Tiling — forced

A room bakes every surface uniquely because a room is small. A 400 m plate
cannot be baked at any resolution that would also resolve a grime line, so it
**repeats one period of a periodic noise volume**, exactly as `grid-ceiling`
does. The wall does not: at 12 m it bakes its own unique patch of the same
volume, and the two agree wherever they meet because both are the same function
of world position.

**Tiling is a response to size, not a style.** Mixing a tiled surface and a
uniquely-baked one in the same scene costs nothing, and a copy of this template
that adds a small object should bake it uniquely rather than tiling it out of
consistency.

The mechanism is `Noise.tilingFbm3` (`src/shaders/Noise.scala`, added for this
template), which is `Noise.fbm3`'s periodic twin over psrdnoise. Its three rules
are in its scaladoc and all three are live in this sketch:

- **integer domain periods** — hence `snapScale`, which moves the feature size
  so the tiling stays exact and hands back both halves;
- **lacunarity fixed at 2** — so the room templates' `freqMul = 3.6` has no
  equivalent, and the fields here are re-tuned with more octaves instead;
- **only Y may shear into X or Z** — hence `warp`, which is the room templates'
  anisotropic warp with the `wp.z * 0.8` term removed. Scaling Z on its way in
  would mean the tile no longer holds a whole number of periods along Z, and the
  plate would seam every 32 m.

A fourth consequence is not a rule but is just as load-bearing: the warp's Y
terms **vanish at `y = 0`**, so the wall and the ground read exactly the same
field where they meet. Keep the shear terms proportional to `wp.y` and that
holds for free.

#### The orientation term had to change, and this is the interesting part

The room templates vary noise by surface normal with
`fbm3(scaledWp.cross(normal) * k)`. A cross product **can** survive tiling — for
an axis-aligned normal it reduces to a permutation of world XZ — but only if its
coefficients are snapped as well, which is a third condition to keep in your
head and one that breaks silently for a wall at an angle.

A **normal-driven offset into the same volume**,
`tilingFbm3(warp(wp) * k + normal * OrientSlice)`, survives it unconditionally:
shifting a periodic field leaves it periodic. Each orientation gets an unrelated
slice, which is all the term was ever asking for. `OrientSlice` is deliberately
not a whole number of periods, or opposite faces of the wall would land on the
same slice.

#### A tile may only carry what is PERIODIC

This is the constraint that shapes the ground bake, and it is the thing to
understand before editing it. Anything anchored to where the wall actually
stands — the grime line, the edge fade around its footprint — would repeat with
the tile and appear a dozen times across the plate.

So **the tile carries fields and the runtime shade does the anchoring**:

|     | channel                                    |
| --- | ------------------------------------------ |
| r   | ambience WITH the orientation term         |
| g   | ambience WITHOUT it                        |
| b   | the grime creep field                      |
| a   | the grime patchiness field                 |

Two ambience channels because `edgeFade` cannot be baked either — and because it
does not have to be: `ambience` is **affine in its edge factor**, so
interpolating between the two ends reproduces it exactly, at the cost of one
`lerp`. If you edit `ambience`, keep it affine in `edge` or that identity
quietly stops holding.

The split is free at runtime. What is expensive is the noise — thirteen
psrdnoise evaluations per texel, which is why it is baked at all — and what is
left for the shade is four segment distances and a handful of interpolations. The tint is
applied in the shade too, for the same reason: it is cheap, and keeping it out
of the tile means re-tinting the ground does not mean re-baking it.

#### The grime fields are 2D on purpose

Both are functions of **world XZ only**, where the room templates sample in 3D.
World space is load-bearing for the same reason it is there — two surfaces baked
separately with no coordinate in common have to agree along the junction — but
flattening to the plane is new, and it removes the second source of drift: the
wall's copy of the field would otherwise be read a few centimeters higher up
than the ground's. The room templates get away with 3D because their band is
narrow relative to the feature size; here one side is baked into a tile and the
other computed exactly, so the two are already as different as they should ever
be.

That also sets the floor on `GroundTexScale`. It is not the ambience that needs
48 texels/m — the ambience would be happy at 16 — it is the grime line agreeing
with the wall's analytic copy across a 6 cm band.

### 2. The horizon — forced

With no far wall to stop the eye, the ground has to dissolve, or the plate's
edge is the end of the world. It fades to `EnvColor` with distance **in its own
shade**. There is no fog pass in this sketch and no post-process at all except
bloom.

That was the brief, and it is also the right call at this scene's complexity: a
full-screen depth resolve fades everything at once and would win in a scene full
of objects, but here there are two surfaces and one pass is one pass.

**The far plane is derived from the fade, and is closer than the plate.** Past
`FadeEnd` the ground has already reached `EnvColor` exactly, and clipping a
surface away shows the clear color, which _is_ `EnvColor` — so the two are
pixel-identical out there and the far plane can sit at `FadeEnd * 1.3` instead
of 570 m out at the plate's diagonal. That is a straight gain in depth
precision. Never move it below `FadeEnd`: a far plane inside the fade cuts a
visible hard circle in the ground.

### 3. The environment is the emitter — a choice, and the one that makes it

A room lights itself from a luminous ceiling and catches the light on its
surfaces. Here `EnvColor` is **one value wearing three hats** — the clear color,
the fade target, and an emitter above the bloom threshold — so a surface is not
lit by a source in the scene, it is **silhouetted against one**. That is what
makes a plain white space feel infinite rather than empty.

**The tint is only visible through the bloom.** Tone-mapped for display, 1.05
and 1.14 land within a hundredth of each other, so the background reads as flat
near-white however it is tinted. What survives is the halo: bloom carries the
color out over the darker things in front of it, so the tint shows up as a
colored bleed around the wall's silhouette and nowhere else.

Two numbers are capped by mechanism rather than by taste, and both are marked in
the file: `EnvColor` by the ground re-bloom check (raise the reflection strength
far enough and the ground itself crosses the threshold and blooms as a second
sky), and `BloomIntensity` is the free knob instead. Note it is an order of
magnitude larger than a room's — `Bloom`'s threshold pass passes the bright
pixel **through** rather than its excess, so what is blurred here is the whole
of `EnvColor` over the whole background rather than a small bright patch.

**The wall carries NO vertical tint gradient, where a room's walls do.** A
room's is a broad settling of tone approaching the ceiling — it depicts
proximity to the surface above. Under an open sky the ambient illumination is
**uniform**: every part of the wall sees essentially the same hemisphere, so
there is no height-dependent lighting effect to depict, and a gradient reads as
a painted stripe or as light from a source that is not there.

This shipped first with the room gradient _inverted_ — lifting toward the rim,
on the argument that the top is most exposed to the sky. The direction of the
mistake is worth recording, because the inverted version looked plausible in the
file and only failed by eye: the premise was that a wall's exposure varies with
height, and in a uniform environment it does not. What varies across this wall
is the ambience field and the grime line, and that is enough.

### 4. `clearOf` — one of two things shared code had to grow

`confine` keeps a camera inside a plan. There is no plan to be inside, and it
cannot be made to serve: it reads `contains` as "in the room", and with only
`Facing.Outward` rings present that parity is inverted, so every point in the
open space looks like an escape and takes the recovery branch — the camera would
be teleported onto the wall every frame.

`Boundary.clearOf` (`src/utils/room/Confine.scala`) is the same clamp with the
containment test inverted: same edges, same margin, opposite sense. It is a
second function rather than a flag on the first because the two are complements,
not modes. It needs no matching `Facing` — `contains` is pure even-odd parity
and never reads one — and it keeps `confine`'s two passes, for the same reason:
one pass satisfies only the nearest edge, so a camera in the wedge between two
solids would settle inside the margin of one of them.

This is one of two additions to the room family's shared code that this template
needed; the other is in the next section. Everything else — the plan types,
`wallsFrom`, `planeQuad`, `edgeSetDist` / `edgeFade`, the whole `Hanging` kit,
`TextureBaker`, `GaussianMirrorReflection`, `Bloom` — is used unchanged, which
is the property worth re-testing after any edit here.

### 5. Every edge it has is the awkward kind

A room's vertical corners wrap toward the visitor: you see both faces meeting,
and the wide blend between their materials is what stops the corner reading as a
seam. **This wall has not one of those.** All four of its vertical corners turn
away from the visitor, seen one face at a time against a silhouette, and so does
its top rim. At the room templates' single radius the fade reads there as a
broad soft band running down each corner rather than a rounded edge.

Its ground line, though, is the wrapping kind — and it is half of what makes the
wall look like it is standing on the ground rather than in front of it. So a
single smaller constant is exactly the wrong fix: `Fades` carries one radius per
kind of edge, wide at the ground line and tight everywhere else.

That split, and the per-vertex classification behind it (`Edge.arrisAtA`,
computed in `Boundary.ringEdges`, read by `edgeFade`), are shared with the room
templates — `../rooms/grid-canvases/PLAN.md` carries the mechanism and the
resolution floor under `arris`. This template is where every vertex lands on the
same side of it; `l-room` has one, `hex-partitions` has eight.

## Load-bearing details, in one list

- **The wall is a CLOSED ring**, not a plane. All four faces, the two ends
  included, are ordinary walls: one bake pipeline, the grime line, and pieces
  can hang on any of them. A genuinely single-sided wall would be an open
  polyline and is the one case that needs new code.
- **The hanging face is chosen by geometry, not by index.** A ring's edge order
  depends on how its points were written, so an index silently picks the wrong
  face the moment the wall is turned.
- **The tile's UV formula and the tile's bake quad are one fact.** The shade
  writes `(x, −z) / TileWorld`, which is `planeQuad`'s own UV modulo 1 — all a
  Repeat sampler reads. Move the bake quad off the origin, or change its
  `faceUp`, and that formula has to move with it.
- **The grime line is the wall's only contact cue.** Standing on a mirror under
  an even sky, an object with no contact darkening floats. If the wall ever
  looks like it is hovering, `GrimeWidth` / `GrimeDarken` are the knobs — not a
  cast shadow, which would introduce the light position this space does not
  have.
- **The dissolve goes last, over the composited ground.** Fading the base alone
  leaves the reflection sharp out to the horizon.
- **No occlusion anywhere**, exactly as in the room templates. Nothing darkens
  where the wall meets the ground except the grime, and it is dirt.

## Known gaps

- **The hung pieces do not fade with distance.** The dissolve lives in the
  surface shades, and `Hanging` owns the piece shade — adding a fade there would
  put a look decision in shared code. It shows only when you walk far enough for
  the wall itself to have visibly faded, at which point the pieces stay at full
  contrast on a half-dissolved wall. Two ways out if a copy needs it: build the
  piece shapes from `PaintingSpec.form` with a shade of your own (keeping the
  rest of `Hanging`), or add a depth-buffer fog resolve and delete the fade from
  the materials entirely.
- **The plate's edge is reachable.** Deliberate: walk far enough and the ground
  simply stops, with environment behind it. The plate is sized so the edge is
  past where the fade has already turned it into environment, and a visitor out
  that far has left the piece behind anyway. An endless-feeling ground that is
  genuinely endless would follow the camera in `TileWorld` steps, which the
  tiling already makes possible and which nothing here needs.
- **The wall has no lid.** With `y` locked to eye height its top is never in
  view and the mirror shows only undersides. Flying in dev mode reveals it, the
  way noclip reveals a level's backstage. That is expected, not a defect —
  author for the locked eye plane.
- **No anisotropic filtering.** `Painter.sampler` exposes no `maxAnisotropy`, so
  the ground at grazing incidence picks its mip from the along-view derivative
  and goes soft earlier than it should. The distance fade hides it here; it is
  the first thing to reach for if the ground ever reads as blurry close in, and
  it would be an additive trivalibs change.
- **Neither the fields nor the tints have had a real tuning pass.** The wall's
  proportions, `TileWorld`, the fade distances and `BloomIntensity` were set by
  reasoning about the mechanism, not by looking.
