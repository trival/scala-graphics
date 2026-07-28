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
to `CLAUDE.md` if it holds up): the unit is the **meter** throughout — every
dimension, offset, fade width and margin in these sketches is meters, no
normalized or arbitrary scales. Default **eye height is 1.7 m**, and the default
**wall clearance is 0.5 m**.

Because meters and normalized coordinates coexist in the same file, **`u` / `v`
/ `uv` are reserved for normalized `[0,1]` texture coordinates and nothing
else.** Anything carrying meters gets an explicit name saying what it measures
from — `centerHeight`, `centerFromLeft`, `heightAboveFloor`. `canvases` violates
this in `hang(wall, spec, u, v)` (`Canvases.scala:446`), where `u` and `v` are
meters along the wall and up from the floor while the very same function
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

`sketches/templates/rooms/grid-canvases/` — `cp -r sketches/rooms/canvases` as
the seed, package `sketches.templates.rooms.gridcanvases`,
`@main def roomsGridCanvases()`. Delete the copied `main.js` and rebuild. Carry
a fresh `PLAN.md` (this document, trimmed) into the sketch dir per the repo
convention.

Write it as a **template meant to be read and copied**, not just as a sketch
that runs — see _The deliverable is a readable template_. Decisions get their
rationale in comments beside the code; the `PLAN.md` carries the longer why; the
file header says it is a template. The exhibition sketches later copied from it
are outcomes, not templates, and stay lean.

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
`EdgeFadeWorld` (corner rounding) and `GrimeWidth` / `GrimeDarken` (the floor
line — separate constants, see Part 1), the wall tint gradient (`TopFadeDepth`),
and the bloom constants.

**These are set by looking, not by deriving — and the method is imitation, not
simulation.** Nothing in this room is a light model. The wall gradient, the
floor grime and the world-space noise are all **shader tricks that reproduce an
observed impression**, tuned by eye until they convince. The noise is the
clearest case, and the most important one: a world-space FBM modulating surface
brightness, plus a second noise slightly varied by surface normal, has no
physical justification whatever and is precisely what makes `canvases` read as a
real space rather than a rendering.

### No ambient occlusion by default. Deliberately.

Stated plainly because it is easy to reintroduce by accident, under other names,
while believing you are being physical:

**Do not darken edges, corners, or junctions.** Not where walls meet, not where
the grid meets a wall, not where beams cross, not under the raster. A real
exhibition space is lit by a huge diffuse source — clouded sky, or broad uniform
area lights — and bounced around a white interior until light reaches
essentially everywhere equally. Corners do not go dark. Adding occlusion there
produces the recognisable look of a game engine, and against this subject it
reads as **artificial, not more realistic**.

The realism comes from the opposite direction: near-uniform brightness with a
slight world-space noise, varied slightly by normal. That is the whole effect.

**The one darkening that stays is `contact` at the floor line, and it is dirt,
not light.** It imitates grime accumulating where the wall meets the floor. That
is why it belongs only there, and why it does not generalize to any other edge
in the room. Worth naming it accordingly (`grime` / `GrimeWidth` /
`GrimeDarken`) in the new sketch, since calling it `contact` is what invited the
mistake — and worth giving it its own width, since `canvases` shares
`EdgeFadeWorld` between grime and corner rounding only by coincidence (Part 1).

#### AO as an available module, off by default

The objection above is to AO being **on by default and arrived at by accident**,
not to having it. It is a good tool, and this design is unusually well placed to
offer it cheaply: the geometry is static and the surfaces are already baked, so
an occlusion term is **another contribution in the ambience stack** (Part 6),
paid once at init and free at runtime. That is a better fit here than a
real-time post-process over a position/normal target — which stays the right
answer for dynamic scenes, and is what the painter's multi-render-target support
is for, but is the expensive way to solve a problem that bakes away.

And it is barely a module at all: **AO here is the same edge-distance field,
applied to brightness instead of to the noise.** `edgeDist` / `cornerDist` are
already computed and already correct at concave corners; an occlusion term is a
second consumer of them.

What it does **not** share is the constant. `EdgeFadeWorld` is tuned for a
different job entirely — making corners read as slightly **rounded**, one noise
blending into the other over a short distance. It models a material and a
softness, not light absorption, and an occlusion falloff would want its own
radius, almost certainly a larger one. Give AO its own tunable rather than
reusing `EdgeFadeWorld`; per _Do not derive a constant that could be a
constant_, two terms with different jobs get different knobs even when they read
the same field.

So a prebaked AO term is a legitimate future module (listed under _Deferred and
open_), and the work is a new constant plus one wire, not new machinery. It is
still not part of the initial implementation, and nothing should darken an edge
until a room asks for it by name.

Two further consequences worth holding onto:

- **Do not derive a constant that could be a constant.** A value computed from
  two others looks principled, hides an assumption nobody can see, and couples
  things that want to be adjusted independently. Physical reasoning in this
  document is only ever explaining what _shape_ a term should have — never what
  number belongs in it.
- **Keep the raw shader composable.** The ambience texture is built by stacking
  small shader-level terms, and that composition has to stay open and editable —
  reachable building blocks, not a sealed `bakeAmbience(style)` that only
  accepts parameters. Being able to reach into a shader and add a term that is
  wrong everywhere except where you are looking is the point; it is why
  `trivalibs` puts shader code and CPU geometry logic side by side in the first
  place, and the extracted utils must not close that door (see **Part 6**,
  _Ambience as a stack of modules_).

Do **not** wrap it in a `RoomStyle` case class. Grouping named constants is not
an abstraction, and a parameter object is the wrong end to pull on here: the set
of things rooms want to vary is not enumerable, so a config type either grows
without bound or blocks the next variation (see **Part 6**, _Granularity matters
more than layering_). Shared functions should take the few values they actually
use, and a sketch that needs different behavior should be able to substitute its
own code rather than ask for a new field.

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
`patternPanel` / 4-color palette — none of it is a template to generalize. **It
is one room's curation**, made when there was no real content to curate. Read as
stage requirements these are actively misleading, and none of them should be
ported back as if they were room infrastructure.

What the stage owes the curator is an **affordance**, not a policy:

| The stage provides                                                   | The exhibition decides                     |
| -------------------------------------------------------------------- | ------------------------------------------ |
| a wall's frame — `center`, `width`, `height`, `rotY`, `inwardNormal` | how many pieces, and where                 |
| its usable span and `WallTopY` (what is actually hangable)           | size, aspect, physical dimensions          |
| `hang(wall, spec, centerFromLeft, centerHeight)` — place a piece     | content panels, and how they are generated |
| the shadow compositing path a hung piece needs                       | whether anything is animated               |
| lighting the pieces will be seen under                               | which walls are used at all                |

So `hang` stays exactly as general as it is now — a wall-local position in
meters plus an arbitrary `PaintingSpec` — but with its parameters **renamed off
`u` / `v`**, per the convention above:

```scala
def hang(
    wall: Wall,
    spec: PaintingSpec,
    centerFromLeft: Double, // meters along the wall from its left edge,
                            // "left" as seen standing in the room facing it
    centerHeight: Double,   // meters up from the floor
): Painting
```

Both name the **piece's center**, which is what they always located — `canvases`
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
one stage, reuse is coming **by construction** — the second exhibition triggers
it, not some speculative third shape sketch.

What gets extracted is narrower than "the stage", though: a **modular set of
functions**, mostly geometry and behavior, not a room builder. Part 6's _What to
extract first_ lists the candidates and the bar they have to clear.

---

## The deliverable is a readable template

Worth stating plainly, because it changes what "finished" means: the shared
baseline we actually want is **not primarily a library**. It is a small set of
**template sketches that read well** — that say what they do, and why each
decision went the way it did — which someone starts from by copying and tuning.
The utility functions are the thin layer underneath, carrying only the parts
nobody wants to re-read.

No such template exists yet. `sketches/rooms/*` are proofs of concept and
experiments; **this plan is the work of turning that into a template family**,
starting with `grid-canvases`.

That split explains why the extraction stays so small. **The library carries
what you do not want to read again; the template carries what you do.** Camera
confinement is library because nobody wants to re-derive a point-in-polygon
clamp. The noise tuning, the tint composition and the raster shading are
template, because they are exactly what a new room wants to open up and change.

**This applies to templates only, and there are none yet.** The distinction
matters and is easy to blur:

- **`canvases` is not a template.** It is a proof of concept and a play with
  animated canvases — an outcome that happens to be well commented in places.
  Its `Canvases.scala:188-191` note on the `+ normal.abs * Far` trick is a good
  model for the _style_ of a template comment, but the sketch itself is not one
  and should not be maintained as one.
- **This plan is what creates the templates.** `grid-canvases` is the first:
  built to be read and copied, explaining non-obvious decisions in comments
  beside the code, with the longer "why" in its `PLAN.md`. Deliberate
  _non_-decisions belong there too, especially _No ambient occlusion by default_
  — without it stated where someone edits the shading, the next reader adds
  corner darkening believing they are improving realism.
- **The exhibition sketches built from it are outcomes, and stay lean.** A
  finetuned scene should not be commented like a template. Explaining code that
  is obvious to its author is precisely the noise `trivalibs` exists to
  eliminate, and tuned constants move constantly, so comments about them are
  stale on arrival.

Mark templates as such in the file header; leave outcomes unmarked and quiet. If
an outcome later proves worth reusing, promoting it to a template is a
deliberate act, not something that happens by accumulating comments.

### Templates are a family, like `trivalibs/examples/`

The closest existing model is the library's own examples: each one exercises a
distinct feature, stays scoped, proves it works, and shows idiomatic usage.
Previous examples are never deleted and must keep compiling
(`trivalibs/CLAUDE.md`).

Room templates follow that pattern with one difference in scope: an example
demonstrates **a feature**, a template enables **a situation** — virtual
exhibitions of images in virtual spaces. So a template is broader by design, and
its job is to show the pieces this document has identified **working together
idiomatically**, each with a clear account of what it tunes:

| Piece                                   | What it tunes                                          |
| --------------------------------------- | ------------------------------------------------------ |
| Footprint rings                         | the room's shape, and everything derived from it       |
| World-space noise + normal-varied noise | the material read; the core of the illusion            |
| Edge fade                               | how rounded corners appear where materials meet        |
| Grime line                              | dirt at the floor junction, not light                  |
| Tints per surface                       | wall / soffit / floor material color                   |
| Prebaking                               | what is cached at init vs computed per frame           |
| Grid raster + light plane               | the ceiling, the light, and the bloom it drives        |
| Walls as hangable surfaces              | where canvases can go, and how their shadows composite |
| Camera confinement                      | where the visitor can stand                            |

**Variants become new templates, not new options.** Adding AO prebaking, or a
different grid structure, means a **new template with that setup** — kept
alongside, kept compiling — rather than a flag on an existing one. This is the
same conclusion _Granularity matters more than layering_ reaches from the code
side: the space of wanted variations is not enumerable, so it is expressed by
having several worked examples rather than one configurable thing.

**They need their own folder.** Kinds of sketch should not be intermixed — the
distinction is the point, and it has to be visible in the tree. The repo-wide
taxonomy now lives in `graphics/CLAUDE.md`:

```
sketches/templates/rooms/grid-canvases/   ← template  (this plan's output)
sketches/tests/bloom/                     ← single-feature util check
sketches/experiments/grid-ceiling/        ← tried, not continued
sketches/rooms/canvases/                  ← regular sketch, finished
sketches/rooms/columns/                   ← regular sketch, in progress
```

Arbitrary nesting under `sketches/` is already supported by the build
(`graphics/CLAUDE.md`), so this needs no tooling change —
`bun run sketch templates/rooms/grid-canvases` and
`/templates/rooms/grid-canvases/` in the dev server work as-is.

**Copy-first is the design, not a compromise.** The repo already treats
`sketches/base-triangle/` as a starter template (`graphics/CLAUDE.md`); the room
templates are a second, richer family of the same thing. Duplication between
rooms is expected — what must not duplicate is the fiddly geometry and behavior,
which is precisely the extraction list.

So the bar for `grid-canvases` is not only that it looks right, but that someone
— human or agent — can open it cold, understand why it is built this way, and
change one thing confidently.

---

## The discipline boundary inside the sketch

`graphics/CLAUDE.md` gives sketch code latitude for Scala conveniences. Very
little of this sketch qualifies for it.

The section above and **Part 6** establish that a good part of this sketch is
headed for `src/utils/room/` as shared functions — and that `canvases` gets
rewritten on top of them as the acceptance test. Not all of it moves (Part 6,
_What to extract first_), but enough does, and it is not knowable in advance
exactly which lines. So write to library discipline anything that is geometry,
maths or behavior, and keep the latitude for the parts that carry a look
decision:

| Written to library discipline                                             | Sketch-convenient                                    |
| ------------------------------------------------------------------------- | ---------------------------------------------------- |
| `Ring` / `Footprint`, `edgeSetDist`, `cornerDist`, `edgeDist`, `clipLine` | the tunable constant block                           |
| `confine` / `nearestBoundary` / `isInside`                                | `roomNoise` tuning, tint composition, raster shading |
| wall / floor / ceiling builders, `mkWall`                                 | curation — the hang list, positions, sizes           |
| beam construction and clipping                                            | content generation (`imgShade`-equivalents)          |
| `hang` and the shadow path                                                | the `@main` wiring itself                            |

The discipline that applies:

- `Arr` / `Dict` / `Maybe` / `Opt`, no Scala collections;
- `while` over `for`-comprehensions **on per-frame paths** — `confine` /
  `nearestBoundary` / `isInside` (Part 3), and any per-frame re-composite. Not
  the build-time shader emitters and mesh builders, which run once at init and
  may stay readable;
- no `enum` — use the opaque-type pattern, aliasing whatever type the value is
  actually _used_ as (`Facing` in Part 1 is the worked example). Same for any
  other small closed set this design grows later — a beam-family role, a wall
  kind.

This is a smaller imposition than the table makes it look: most of the
room-construction path is **build-time**, so only the first and third rules
really bite there. The per-frame rule applies to a handful of functions.

The boundary is **per region, not per file**: the convenient region is the thin
outer shell — constants, curation, wiring. The cost of misplacing it is
asymmetric: writing it this way up front is free, retrofitting at extraction
time is a rewrite.

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
    height: Double,      // == roomHeight ⇒ reaches the ceiling
)

case class Footprint(
    rings: Arr[Ring], // rings(0) = the Inward outer boundary
)
```

**The floor and ceiling are the bounding-box quad, not the plan polygon.** There
is no triangulation and no hand-authored face decomposition anywhere in this
design — an L-shaped room's floor is a plain rectangle covering the whole
bounding box, cut-out included.

This works because everything that would care is handled elsewhere:

- The region outside the plan is **never visible**. Every ring edge carries an
  opaque full-height wall, so the cut-out is occluded from every point the
  camera can reach — and the camera cannot reach it, because `confine` (Part 3)
  keeps it inside the rings.
- The **grime line does not come from the mesh**. It is
  `contact(edgeSetDist(pxz, floorEdges))`, evaluated per fragment against the
  ring edges, so it darkens along the true plan boundary regardless of how far
  the quad extends past it. Same for the noise edge fade.
- The **UV was already bounding-box-parameterized** — texel density comes from
  `texSize(bbW, bbD)` at a uniform `TexScale`. Matching the geometry to that
  frame makes the quad's UV simply its own `[0,1]²`, instead of a polygon mesh
  sampling a frame it does not fill.

The costs are a rectangle's worth of overdraw (~25% wasted fill for an L, never
shaded to anything anyone sees) and one weakened invariant worth noting:
`edgeSetDist` is unsigned on the argument that all baked geometry lies inside
the plan, which is no longer strictly true. It stays correct anyway — outside
the boundary the unsigned distance simply mirrors, darkening a band on the far
side of a wall that nothing can look at.

**When this would stop working:** an opening in the outer boundary that reveals
space outside the plan — a window, or a doorway into an unmodelled area. Then
the phantom floor becomes visible through the gap and the polygon geometry has
to come back. Nothing in the planned shapes does that; an H-shape's tunnel is
inside its own rings, so it is fine.

The floor stays whole **underneath** every `Outward` ring too, for the same
reason: the geometry standing there covers it, so an O-shape's inner box and a
partition both sit on unbroken floor. No hole to cut, and nothing to re-cut when
a partition moves.

**On the name.** "Footprint" is borrowed from architecture, where a building's
footprint is the area it occupies on the ground — the outline of its plan at
ground level. (CAD/PCB work uses it the same way: a component's footprint is the
land pattern it covers.) It is meant here as _the shape the room occupies in
XZ_, which everything else is derived from — walls from its edges, floor and
ceiling from its area, the raster clipped to it, the camera confined by it.

The word carries one hard constraint: **a footprint is two-dimensional**, so it
holds no `height`. Putting one on it would be a 2D concept carrying a 3D fact.
Room height belongs to the room being built and is passed where it is needed:

```scala
def ceilingEdges(fp: Footprint, roomHeight: Double) =
  fp.rings.filter(_.height >= roomHeight).flatMap(_.edges)
```

`Ring.height` **stays** — a ring genuinely does extrude to a height, and that is
the whole free-standing-wall mechanism (Part 4). It is the aggregate that has no
business having one.

`FloorPlan` / `RoomPlan` is arguably the more precise architectural term — a
plan is a horizontal section showing walls and subdivisions, which is closer to
what the rings describe than a building's outer extent is. It loses to
`Footprint` only because "plan" is already this document's own word. See
_Deferred and open_ for revisiting it.

**Why `facing` and `height` are on `Ring` from day one.** Everything that stands
in a room — an O-shape's inner box, a free-standing partition wall, a plinth —
is the same object: a closed loop the room is _outside_ of. The only thing that
distinguishes a free-standing wall from an O-shape's inner box is that its
`height` is less than the room's, so it stops before the ceiling. Carrying both
fields now means free-standing walls are a filtering question later, not a
restructuring one (see **Part 4**). For step 1 every `Ring` is `Facing.Inward` /
`height = roomHeight`, so `facing` is a multiply by 1.0 and `height` never
differs.

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

- **Floor / ceiling forms.** One quad each, spanning the rings' bounding box, at
  `y = 0` and `y = CeilY`, with UV its own `[0,1]²`. Sized `texSize(bbW, bbD)`
  so the uniform `TexScale = 48` texels/m holds. The light plane (Part 2) is a
  third copy at `y = lightY`.

- **Wall paintings — not a stage concern at all.** `canvases`' positional
  `counts = Arr(3, 3, 4, 4)` / `isAnimated(i) = i >= 2`
  (`Canvases.scala:576-578`) break once the wall count varies — but the fix is
  not a better formula on this side. Counts, positions and sizes are
  **curation** (see _Curation is user space_), so the stage should not own them
  in any form.

  What the footprint owes the curator is the wall's frame and its usable span,
  which `Wall` already carries. `Wall` needs no `paintings` and no `animated`
  field; whoever hangs an exhibition keeps its own list and calls `hang`.

- **Re-anchor the wall tint gradient. Keep its values.** (The hang height
  `v = 1.75`, `Canvases.scala:598`, is curation — it leaves with the paintings
  and gets no stage-side name.) `canvases` lerps `WallTintLow` (0.97) →
  `WallTintHigh` (0.88) over `wp.y.smoothstep(4.6, 5.5)` — a wall that is
  uniformly bright with a **modest darkening in the top 0.9 m**. That reads
  right and stays exactly as it is.

  It also matches what gallery rooms actually look like: six strong halos in a
  white room throw so much bounce off the floor and walls — including back up
  onto the ceiling — that no strong vertical gradient survives. The only thing
  left is a slight settling where wall meets ceiling. Nothing here is computed
  from a light model, and nothing should be.

  The one change is the **anchor**. `4.6 … 5.5` is `WallTopY - 0.9 … WallTopY`
  spelled in absolute room coordinates, so write it that way:

  ```scala
  (WallTopY - wp.y).smoothstep(TopFadeDepth, 0.0)   // TopFadeDepth ≈ 0.9
  ```

  One tunable, same curve, and a 2.5 m partition's own top rim now gets the same
  treatment with no extra code.

  Note this is a **broad tint gradient over ~0.9 m, not an edge effect**. There
  is no darkening where the wall meets the beam above it; see _No ambient
  occlusion by default_.

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
def floorEdges(fp: Footprint) =
  fp.rings.flatMap(_.edges)                        // everything meets the floor
def ceilingEdges(fp: Footprint, roomHeight: Double) =
  fp.rings.filter(_.height >= roomHeight).flatMap(_.edges) // only what reaches up
```

For step 1 the two sets are identical, so this costs nothing now and is the
whole of the free-standing-wall change later.

**Height is a stand-in for the real predicate, and it does not hold forever.**
`ceilingEdges` wants to know what **bounds the ceiling surface**, which is not
the same as what reaches it. A column reaches the ceiling and must _not_ clip
the raster — the beams rest on it, they do not stop at it — whereas an O-shape's
inner box both reaches and interrupts. Height cannot tell those apart.

The fix, when a room needs it, is an explicit `boundsCeiling: Boolean` on `Ring`
instead of the height comparison; note it also drops the `roomHeight` parameter,
since the predicate stops being derived. Every shape in steps 1–6 has
`boundsCeiling == (height >= roomHeight)`, so the substitution is invisible
until columns arrive (see _Deferred and open_).

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

`topY` varying per surface is what makes **per-bake uniforms on `TextureBaker` a
prerequisite rather than a nicety** (Part 5.1). `wallBaker` today is a single
shared baker (`Canvases.scala:273`) with the height baked into its expression,
and `TextureBaker` exposes no per-bake uniforms (`Bake.scala:20-23`) — so a
scalar that varies per wall can only vary by **specializing the shade**, i.e.
one shade, one pipeline, per distinct value.

That is the wrong default, and it scales badly in exactly the direction this
design is heading: pillars, many-sided round polygons, several free-standing
objects inside one complex room. Pass `topY` (and tints, fade widths,
per-surface term selectors) as **uniforms**, and one pipeline bakes every wall
in the room regardless of shape or height.

Note what does _not_ move: the **edge set stays unrolled** into the shader as
build-time constants. It is structure, not a scalar, and turning it into a
uniform is the separate array-uniform question that Part 5.2 declines. So the
rule is: scalars and vectors that vary per surface → uniforms; the plan's
geometry → constants.

For a rectangular plan this reduces exactly to the current box behavior, which
is the check for step 1: the new sketch's floor and walls should look
indistinguishable from `canvases`.

`contact` and `roomNoise` (`Canvases.scala:201-231`) are then unchanged —
`roomNoise`'s `scaledWp` is already world-space and shape-agnostic, and the
`edge` fade factor picks up the new `edgeDist` automatically.

**`edgeDist` feeds the noise fade, and nothing else.** The whole point of
generalizing it to arbitrary plans is that the normal-dependent noise term keeps
fading out cleanly at every geometry edge — including the concave corners a box
does not have. It is not an occlusion distance: no corner, junction or edge in
this room gets darkened for it (see _No ambient occlusion by default_).

`contact` stays exactly where `canvases` has it, on `wp.y` alone — the floor
grime line. `cornerDist` exists only to keep the noise fade correct in vertical
corners.

**Split `EdgeFadeWorld` in two while porting.** `canvases` uses the one constant
for both jobs — `contact` is `dist.smoothstep(0.0, EdgeFadeWorld)` and the noise
fade is `edgeDist(…).smoothstep(0.0, EdgeFadeWorld)` — but they are unrelated
quantities that happen to have been given the same number. One is how far a
corner reads as **rounded**, blending one noise into the other; the other is how
wide a band of **grime** collects at the floor. Give them separate tunables
(`EdgeFadeWorld` and, say, `GrimeWidth`) so neither drags the other when tuned.
Start both at 0.08 to keep step 1 pixel-identical, then let them diverge.

---

## Part 2 — The grid ceiling

### Vertical layout

```
  y = lightY   = CeilY + CofferDepth  ── luminous plane, HDR, faces down,
       ↑ CofferDepth (≈ 1.0–1.5 m)    ──   overhanging the plan; open at the sides
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
beam's outer face continues the same plane up to `CeilY`, and above that the
coffer is simply open — two surfaces, one continuous plane, no overlap.

The substantive half of this is that `WallTopY` is where the **visible** wall
ends, so it is the `topY` Part 1's `edgeDist` takes for room walls and the
height canvases hang against. That holds however the geometry is built: the band
above it is behind the beam either way.

Capping the geometry there too is tidiness rather than a fix. A full-height wall
would be coplanar with the perimeter beam's outer face, but that face points out
of the room and is not among the three emitted per beam, so nothing would
actually z-fight from anywhere the camera can go. Still worth capping — it keeps
the geometry from carrying a hidden sliver, and makes the mesh agree with the
`topY` the shading already uses.

**The coffer needs no reveal walls.** The raster occluding a luminous plane
already reads as a recess; nothing has to be built to close its sides. The only
real risk is seeing _past_ the light plane's edge on a shallow ray through a gap
near a wall, and the fix for that is to **make the light plane wider than the
plan** — overhang it by a margin so every ray through the raster lands on it.
How much is a look decision; a deeper `CofferDepth` lets shallower rays through
and wants more overhang.

Note that every consumer in Part 2 reads `ceilingEdges`, never `floorEdges`: the
ceiling assembly is bounded only by what actually reaches it.

### Snapping the plan to the grid — perimeter beams for free

For an **axis-aligned** plan, do not snap the grid to the room; **derive the
room from the grid**. Place beam centerlines at `k · GridSpacing`, then put each
wall plane flush with the outer face of the beam nearest the wanted extent:

```scala
// wanted ≈ half-extent in meters; the result is the snapped half-extent
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
`Box`, which is what makes an odd-angle beam no different from an axis-aligned
one. Each face takes a band in a UV atlas as in `GridCeiling.scala:71-143`.

**Use the existing helper, with one caveat.**
`Quad.fromDimensions(width, height, normal, pivot, uvAtPivot)`
(`trivalibs/src/graphics/geometry/polygon.scala:63`) already builds exactly this
— an oriented quad from a center, two dimensions and a normal, with UV — and
`Columns.scala:52` and `GridCeiling.scala:157` both use it. For **walls** it is
a drop-in: it derives `uDir = up.cross(n)` (line 72), the identical frame
`mkWall` computes by hand as `right = Up.cross(inwardNormal)`
(`Canvases.scala:418-441`), so `mkWall` can just call it.

The caveat is that **the in-plane orientation is inferred, not given**. For a
near-vertical normal it swaps its reference to `-Z` (line 71). That is a sane
default and fine for a floor or ceiling quad, but wrong for a **beam soffit**:
its normal is `-Y`, so every soffit would get `u` running along world `-Z`
regardless of which way its beam points, and the atlas band would not run along
the beam.

So the beam builder needs a variant taking an **explicit tangent** —
`fromDimensions(width, height, normal, tangent, pivot, …)` — rather than
inferring one. That is a small additive overload in `polygon.scala` next to the
existing one, and it is the right place for it: this is generic quad
construction, not room logic. Noted in _Deferred and open_.

Uniform texel density across beams of differing length is a **budget** question,
not a coordinate one. Size the atlas for the longest beam and give each beam
`u ∈ [0, beamLength / maxBeamLength]`: normalized, clamp-safe, proportional so
texel density is uniform, and shorter beams simply use less of their row. That
is also what lets variable-length perimeter beams share the atlas later.

Do **not** scale `u` by world distance along the beam to get that density. This
atlas does not tile, so any beam longer than one unit runs `u` past 1 and the
clamp sampler silently pins it at the edge — the exact failure the `u`/`v`
convention above exists to catch.

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
millimeters.

### Raster shading

The beams are **the same material as the walls** — white concrete — so they get
the same treatment, not a special one. Bake the atlas with `TextureBaker`
(`src/utils/bake/Bake.scala`) sampling the same `roomNoise` at world position,
with the same `edgeDist`-driven fade of the normal-dependent term at every
geometry edge. That is the whole integration story: one material, one noise
field, continuous across the room, its orientation-varying component fading out
wherever surfaces meet.

**No junction darkening.** Beam crossings, the beam/wall meeting, the pockets
between beams — none of them darken. Under a large diffuse source above the grid
the light reaches into all of it near-equally, and adding occlusion there is the
game-engine look this design is explicitly avoiding (see _No ambient occlusion
by default_). The beams read as sitting in the ceiling because they are lit like
the ceiling and share its noise field, not because their corners are shaded.

That reasoning is specific to a **perpendicular** grid, and worth revisiting for
the hexagon's triangular raster. Three families at 60° meet in far sharper
wedges than two at 90°, and a narrow wedge admits much less of the hemisphere —
so those junctions plausibly _do_ sit darker, and the triple points most of all.
Revisit it there on its own merits rather than inheriting this decision; it is
the one place in the design where junction darkening might earn its keep.

This removes an apparatus rather than adding one: there is no per-family
distance field, no `occ` product over families, and no radial `crossDist` closed
form. `edgeSetDist` remains, feeding the noise fade.

Two things do vary per face, and neither is an edge effect:

1. **Soffit tint.** Downward faces — all that is seen from eye height — take
   `CeilTint` (`Canvases.scala:56`, `Vec3(0.86, 0.86, 0.85)`) rather than the
   wall tint. The underside of the raster _is_ the ceiling plane as far as the
   eye is concerned, so it takes the ceiling's color. The old `ceilTex` is
   deleted; its tint survives here.
2. **The normal-varied noise term.** Kept, not suppressed. It is the thing that
   makes surfaces at different orientations read as the same material lit from
   the same room, and `roomNoise` already fades it toward edges, so the many
   hard 90° corners on a thin beam stay seam-free without special-casing them.

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

The same bounding-box quad at `lightY`, normal down, baked with
`TextureBaker.bakeBlock(…, format = TextureFormat.Rgba16Float)` exactly as the
current ceiling is (`Canvases.scala:248-270`):

```
HDR base (≈ 4.0–8.0, above the bloom threshold of 1.0)
  × roomNoise(wp, normal)                  // subtle, keeps it from reading flat
  // no vignette toward the walls — the light plane is uniform
```

Uniform rather than striped — the raster already supplies all the structure, and
the existing `s := (uv.x * 6.0 + 0.5).fract` strip layout is expressed in
_ceiling UV_, which on an L or H would run its end-caps through mid-air over the
cut-out. If bands are wanted later, express them in world meters
(`(wp.x * StripsPerMetre).fract`) and cap them with `edgeSetDist`, not UV.

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

- **Wall tint gradient.** Unchanged from `canvases` in values and curve, just
  re-anchored to `(WallTopY - wp.y).smoothstep(TopFadeDepth, 0.0)` per Part 1.
- **No darkening where the wall meets the grid.** `contact` stays on the floor
  line only, as grime. The wall/beam junction gets the noise fade and nothing
  else (see _No ambient occlusion by default_).
- **Mirror.** `aboveGround` must gain the raster shapes and the light plane.
  `alphaScale` (`Canvases.scala:655`) becomes `lightY`, not `RoomHeight`. The
  raster reflected in the floor is a large part of the payoff here — check it
  early.
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
// `eyeY` pins the walking plane; pass `pos.y` instead to leave height free
// (the dev-mode fly-around, see below).
def confine(pos: Vec3, margin: Double, eyeY: Double): Vec3 =
  val pxz = Vec2(pos.x, pos.z)
  val (q, d) = nearestBoundary(pxz)
  val inside = isInside(pxz)
  val fixed =
    if !inside then q + inwardAt(q) * margin      // recover: push back in
    else if d < margin then q + (pxz - q) / d * margin
    else pxz
  Vec3(fixed.x, eyeY, fixed.y)
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
val WallClearance = 0.5   // meters from any wall, including canvas faces
val EyeHeight     = 1.7   // fixed; the camera walks on this plane
```

`PerspectiveCamera(… pos = Vec3(0, 1.7, 0))` at `Canvases.scala:736-752` already
uses 1.7; this just names it. Note `WallClearance = 0.5` also keeps the camera
clear of the hung canvases, which stand `depth/2 + 0.02` off the wall
(`Canvases.scala:446-456`) — at most ~0.05 m, well inside the margin.

### The eye height is locked; free vertical is a dev tool

`y` is pinned to `EyeHeight`. Space / Shift free movement stays, but **only as a
development and debugging affordance** — a way to fly around and inspect the
room, not something a visitor gets. The shipped experience is a walk on one
plane.

`trivalibs.dev` already computes exactly the right gate: `devMode` is
`import.meta.hot.isDefined`, true under the Vite dev server and false in a built
sketch (`trivalibs/src/dev/dev.scala:43`). It is currently `private`, so
**exposing it is a small additive trivalibs change** and better than a
hand-rolled constant a sketch can ship in the wrong state.

```scala
cam.pos = footprint.confine(
  cam.pos,
  WallClearance,
  eyeY = if devMode then cam.pos.y else EyeHeight,
)
```

**This is a geometry decision as much as a camera one.** With `y` fixed, nothing
above eye height is ever visible from below — and the floor mirror only shows
undersides, never tops. So **author for the locked eye plane**: top caps on
free-standing walls (Part 4) are unnecessary, and so is any other upward-facing
surface the room might otherwise need. Flying in dev will reveal those gaps;
that is expected, the same way noclip reveals a level's backstage, and not a
defect to fix.

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

| Consumer                   | Edge set               | Result                                                       |
| -------------------------- | ---------------------- | ------------------------------------------------------------ |
| Floor contact + noise fade | `floorEdges`           | darkened contact line around the partition, same as any wall |
| Camera confinement         | `floorEdges`           | 0.5 m clearance, walk around it                              |
| Wall geometry + canvases   | all rings              | both faces hangable via `facing`                             |
| Ceiling / light plane      | `ceilingEdges`         | unaffected, no contact line                                  |
| Raster clipping            | `ceilingEdges`         | grid runs over it uninterrupted                              |
| Wall lighting profile      | absolute `topY - wp.y` | its own top rim grazes and shadows just like a full wall's   |
| Wall noise edge fade       | per-surface `topY`     | fades against its own open top rim                           |

What genuinely remains to add, and it is small:

1. **No top cap.** With `y` locked to `EyeHeight` (Part 3), the top of a
   partition taller than 1.7 m is never visible: the camera cannot rise above
   it, and the floor mirror reflects to below the floor, so it sees undersides
   and an upward-facing cap is back-facing from there. Omit it.

   Flying in dev mode will show the open top. That is expected and is not worth
   geometry. A partition **shorter** than eye height is a different case — a
   plinth or a low divider does need its top, and gets it because it is
   genuinely in view.

2. **Nothing for the baker** — `topY` is already a per-bake uniform (Part 5.1),
   so a partition of any height reuses the same pipeline as every wall.
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

### 1. Per-bake uniforms on `TextureBaker` — **yes, and early**

`Bake.scala:20-23` currently argues against them: _"Cheap per-material params
(tint, simple modulation) do NOT belong here — apply those in the runtime shader
that samples the baked texture."_ The distinction it draws is
cheap-vs-expensive; the useful one is:

> Does this parameter participate in the **geometry-space computation being
> cached**, or is it applied to the result?

`topY` (Part 1) and the per-strip grid origin/step change the distance field
itself, which is the entire thing the bake exists to cache. No runtime shader
could apply them afterwards. A tint arguably could — but see below, it should
come along anyway.

**The real argument is pipeline count.** Without uniforms, a scalar that varies
per surface can only vary by specializing the shade: one shade, one pipeline,
per distinct value. For `canvases` that is one pipeline and invisible. For where
this design is going — partitions at assorted heights, pillars, many-sided round
polygons, several free-standing objects in one room — it means a pipeline per
distinct parameter value, each its own WGSL compile at init and its own entry in
the painter's cache, to express what is properly a uniform buffer write.
Specialization is the wrong default for a scalar.

Two honest qualifications, so the argument is not overstated:

- **Bakes run once at init**, so extra pipelines do not cost per-frame time
  directly. The costs are shader compilation at startup, cache footprint, and
  re-bake time when a tunable changes live or a sketch hot-reloads.
- **This does not make everything a uniform.** The plan's edge set stays
  unrolled as build-time constants — it is structure, not a scalar, and moving
  it is the array-uniform question declined in 5.2. Scalars and vectors that
  vary per surface become uniforms; geometry does not.

Given that, take the tint too. Once a uniform block exists, keeping tint out on
the "applied to the result" principle buys nothing and costs a second mechanism.

Scope: one type parameter, `TextureBaker[U]`, with `U` concatenated onto the
existing `BakeUniforms`. There are two sides to it, and they are easy to
conflate:

**Reading the values, shader side.** The fragment needs `ctx.bindings.<name>`,
and the current factories hide `ctx` entirely by destructuring it into
`(worldPos, normal, uv)`. Selection between the expression and block forms is by
**lambda arity** (3-arg vs 4-arg, `Bake.scala:168-196`), so adding a `bindings`
argument to the existing shapes would put the uniform-carrying expression form
at 4 args, colliding with the block form — and Scala will not resolve that on
the lambda's return type.

The way out is to go **down** in arity rather than up: hand the uniform-carrying
form the whole context instead of pieces of it.

| Arity | Form                                     | For                                       |
| ----- | ---------------------------------------- | ----------------------------------------- |
| 1     | `ctx => Block`                           | full access — uniforms, and anything else |
| 3     | `(worldPos, normal, uv) => Vec4Expr`     | existing shorthand                        |
| 4     | `(worldPos, normal, uv, color) => Block` | existing shorthand                        |

**One new form, not two.** With the whole `ctx` in hand `ctx.out.color` is
reachable, so a separate `color` parameter is redundant — and there is no reason
to add an expression variant either, since `ctx.out.color := …` is already the
one line an expression form would have saved. Shorthands earn their place for
the common destructured case; a shorthand for something the full context hands
you anyway is just another overload to disambiguate.

No collision, no new factory names, and nothing existing moves. Better still,
`ctx => Block` **is `program.frag`'s own signature**, so the 1-arg form is a
straight pass-through to it — the escape hatch is not a new concept but the
underlying DSL surfacing when a bake needs it. The generated vertex stage still
does its work; only the fragment body is written by hand.

**Setting the values, CPU side.** This should be **`.bind` with exactly the
semantics it has everywhere else** — `shape.bind`, `panel.bind`, `layer.bind`,
`instances.add` (`painter/shape.scala:47`, `painter/panel.scala:313`): named
`BindPair`s via `:=`, accepting a raw value or a `BufferBinding`, arity
overloads, returning `this.type` so calls chain.

```scala
baker.prepare(form, w, h).bind("topY" := 4.5, "tint" := WallTintLow)
```

`prepare` already returns an unpainted `Panel` (`Bake.scala:68-88`), which is
exactly the seam this needs — bind, then `p.paint`.

**`apply` stays uniform-free.** It paints immediately, so supporting uniforms
there would mean taking bind pairs in the call and inventing a parameter shape
that exists nowhere else in the painter. Not worth it: `apply` (and the one-shot
`bake` / `bakeBlock` helpers, `Bake.scala:199,213`) remain the convenience for
the no-uniform case, and anything with uniforms routes through `prepare` →
`.bind` → `p.paint`. The gate is explicit, reads clearly, and adds no API — and
it makes baking with unset uniforms structurally impossible rather than merely
discouraged.

**Bind at shape level, because only that is typechecked.** The two `bind`s are
not equivalent:

- `Bindable.bind` — used by `Shape`, `Layer`, `Instance` — runs `processEntry`
  (`painter/shape.scala:228-253`), which is `inline` and does
  `derive.containsName[N, U]` and `derive.checkUniformFieldType[N, V, U]`. A
  wrong name or a wrong value type is a **compile error**.
- `Panel.bind` runs `processPanelEntry` (`painter/panel.scala:280-298`), which
  just writes into a string-keyed `runtimeBindings` dict. **No name check, no
  type check** — the caller is responsible for getting both right.

Since the whole point of `TextureBaker[U]` is a typed uniform schema, routing
its bindings through the unchecked path would throw away most of what the type
parameter buys. So shape level, and the cost is that `prepare` currently builds
the shape internally and hands back only the `Panel` (`Bake.scala:68-88`) — the
typed `bind` is not reachable from what it returns.

Surfacing it is the remaining design question, and the options are all small:
return a named tuple `(panel, shape)` and bind on `.shape`; return a thin handle
whose `bind` delegates to the shape and which knows how to paint; or have
`prepare` take the pairs and forward them. **This is what `TextureBaker`'s short
planning pass at step 3 is for** — the direction is settled, the ergonomics are
not.

**When:** at step 3, when the bakers are first written against varying `topY` —
not deferred to Part 4. Step 1 alone would survive without it, but every step
after introduces another per-surface scalar, and the alternative is accumulating
specialized pipelines and then unpicking them. It is the one library change this
design genuinely pulls on, and the cheapest moment to make it is before there is
anything to migrate.

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

| Layer           | Contents                                                                             | `canvases` | grid rooms         |
| --------------- | ------------------------------------------------------------------------------------ | ---------- | ------------------ |
| 1. Plan         | `Ring` / `Footprint`, `edgeSetDist`, `cornerDist`, `edgeDist`, `clipLine`, `confine` | ✓          | ✓                  |
| 2. Surfaces     | floor + wall forms from the footprint; a plain ceiling plane                         | ✓          | floor + walls only |
| 3. Shading kit  | `roomNoise`, `contact`, the bakers, the surface-contribution stack, `hang` + shadows | ✓          | ✓                  |
| 4a. Beam raster | `BeamFamily` / `Beam`, generators, `clipLine`                                        | —          | ✓                  |
| 4b. Coffer      | the overhanging HDR light plane                                                      | —          | ✓                  |

Layer 4 is additive and opt-in, and **4a and 4b are separable**. Grid rooms take
both; a courtyard under open sky takes the raster with no ceiling behind it at
all (see the `rooms/columns` entry in _Deferred and open_ — that case is what
argues for the split). A consumer that wants something else again — a flat
ceiling, a vault, a skylight — takes layers 1–3 and writes its own ceiling
geometry and bake. Even **"the builder gives you floor and walls, you write the
rest yourself" is an acceptable outcome**, so a plain ceiling plane in layer 2
is a convenience, not a required abstraction.

Explicitly **do not** introduce a `Ceiling` trait with two implementations.
There are two cases, they share nothing but a height, and a polymorphic seam
here would cost more than the ten lines of quad it replaces — the same judgement
that killed the original `Wall` kit (`canvases/PLAN.md:40-71`).

### Granularity matters more than layering

Layers are the coarse story. The finer one matters more, and it is the actual
lesson of the abandoned `Wall` kit (`canvases/PLAN.md:40-71`): **there are too
many knobs here for an off-the-shelf solution, and the knobs are set by eye.**

A configuration surface only works when the space of wanted variations is known
and enumerable. It is not, here. Every room is re-tuned against its content,
most decisions are visual rather than derived, and the interesting ones are the
details — which is exactly the regime where a parameter object grows without
bound and still cannot express the next thing someone wants.

So the target is not "a builder with enough options". It is:

> **Any single step must be replaceable by hand-written sketch code, without
> giving up the rest.**

Which means the shared code is **small free functions over plain data**, and
every intermediate value is something a sketch can construct itself:

- `Arr[Beam]` is plain data → a hexagonal room can hand-build its raster inline
  and still use the shared atlas layout, bake and clip.
- `Arr[Ring]` is plain data → a room with an odd plan can construct rings
  directly rather than going through a generator.
- The bake terms are shader expressions → a room can drop one, add one, or
  rewrite the composition entirely while keeping `roomNoise` and the distance
  fields.

The test to apply at extraction time is not "can this be configured?" but **"can
a sketch replace this one step inline and keep everything downstream?"** If a
variation requires a new flag on a shared type, that is a signal the seam is in
the wrong place — the sketch should have been able to substitute its own code
there instead.

This is also the answer to most of the open questions in _Deferred and open_.
Junction darkening in a triangular raster, a different beam profile, a room that
wants its ceiling built by hand: none of these need to be anticipated, because
none of them require permission from the shared code.

### What to extract first — and the bar it has to clear

**A modular collection of functions, not a rooms engine.** The baseline to beat
is already decent: `canvases` builds everything by hand — geometry, shaders,
compositing — in under 800 lines, because `trivalibs` is built so that raw code
stays concise. So the bar for a helper is not "this could be shared", it is
**"this removes real bulk or real fiddliness from a sketch"**. Everything else
stays hand-written, and that is a fine outcome — the reuse mechanism for it is
copying a documented template (see _The deliverable is a readable template_),
not calling a function.

The useful sorting rule: **extract what contains no look decision.** Geometry
and behavior are shareable because they are either right or wrong; taste is not,
because it is re-tuned per room and per exhibition.

Clear candidates, roughly in order of how obviously they pay:

| Candidate                                           | Why                                                                                                                                         |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `confine` / `nearestBoundary` / `isInside`          | Pure behavior, no look decision at all. Should never be a manual section in a sketch file — this is the strongest case in the whole design. |
| `Ring` / `Footprint`, `floorEdges` / `ceilingEdges` | Plain data plus derivation. Every room needs it; none of it is a taste call.                                                                |
| Wall derivation from a ring edge                    | The `(center, width, height, rotY, inwardNormal)` frame, currently hand-written per wall. Mechanical.                                       |
| `clipLine(edges, origin, dir)`                      | Self-contained 2D geometry, fiddly to get right, identical everywhere.                                                                      |
| `edgeSetDist` / `cornerDist` shader emitters        | Build-time WGSL assembly over ring data. Bulky to write inline, no taste in it.                                                             |

Deliberately **not** extracted, because they are where the look lives:
`roomNoise`'s tuning, the tint composition, the raster shading, beam profiles,
the grime line. These stay in the sketch even when the same lines appear twice —
duplication is cheaper here than a shared function that has to be
re-parameterized every time a room is re-tuned.

If boilerplate still accumulates once these exist, that is the moment to look at
the patterns and add a further simplification **on top of the function library**
— not to design that layer now. Identify the minimal pieces first; go further
after more sketches have been built.

### Open rooms and the sky

Taking 4a without 4b means the room is **no longer enclosed**, and that opens a
part of the design space worth enabling deliberately: what sits above the beams
can be a rendered **sky** — a gradient, a cloud shader, whatever — drawn as if
infinitely distant, so it rotates with the camera but does not translate with
it. The far-parallax read that gives is the outdoor counterpart of the coffer's
slow-moving light plane.

**The sky itself is user space.** What it looks like is an artistic decision per
sketch, exactly like canvas content: the stage does not own a sky shader and
should not ship one. What the stage owes is not getting in the way, which comes
down to two things it must not assume:

1. **The background is visible.** Every enclosed-room assumption — that geometry
   covers the frame and `clearColor` never shows — has to go. An open room needs
   a background pass the consumer supplies, drawn behind the scene, and the
   infinite-distance trick needs the **inverse** view-projection to turn a
   fullscreen fragment into a view ray. `grid-ceiling` already computes exactly
   that for its fog resolve, so the pattern is in hand.

2. **The mirror pass needs the same background.** This is the one that breaks
   quietly. `GaussianMirrorReflection` renders the reflected scene against its
   own `clearColor` (`Canvases.scala:658`); with an open room and a mirrored
   ground, the reflection would show flat clear color exactly where the sky
   belongs — a mirror that reflects everything but the thing most visible in it.
   The background pass has to run in the reflection too, or its clear color has
   to be driven from the sky.

Two things fall out for free, worth knowing before anyone rebuilds them:

- **The wall tint gradient generalizes.** It is anchored to meters below the
  ceiling line and mentions no coffer, so an open room keeps it unchanged — the
  sky is just a different bright thing above the same beams.
- **Beam shadows on the ground are a separate, optional decision.** A courtyard
  under a _clouded_ sky has none, for the same reason its corners do not darken.
  One under a _directional_ sun does — but that is a real shadow with a
  direction, not the vertical projection this plan once carried, and it should
  be built deliberately if a sketch wants it.
- **Bloom carries over unchanged.** It thresholds scene luminance and does not
  care what produced it, so an HDR sky trips it exactly as the light plane does
  — the scene panel is already `Rgba16Float`. The whole "look up and it blooms"
  behavior transfers too, and for the same reason it needs no view-direction
  gate: in a grid room the raster occludes the light plane, in a courtyard it
  occludes the sky, and either way the bright surface is only on screen when you
  look up through the gaps.

  One caveat: the tuning that keeps the _mirrored_ copy below threshold after
  `reflStrength` (`GridCeiling.scala:218-220`) gets harder, not easier. A
  reflected sky is a large region of near-threshold luminance rather than a few
  thin strips, so a floor that re-blooms is a more likely failure here.

### The two couplings that would leak the grid into shared code

Both are live in this plan as written, and both need breaking at extraction
time:

1. **Wall top height.** Part 2 sets `WallTopY = CeilY − StripHeight` because a
   perimeter beam takes over the wall plane above it. That is a _grid_ fact.
   With a flat ceiling, walls run to `CeilY`. So the wall builder must **take**
   its top height as a parameter — the grid ceiling asks for
   `CeilY − StripHeight`, a flat ceiling asks for `CeilY`. It must not derive it
   from a beam constant. (`edgeDist` already takes `topY` per surface, so that
   half is done.)

2. **Which wall shading terms apply.** The tint gradient is shared with
   `canvases` but anchored differently, and a grid room's `topY` is not its room
   height. So the wall bake must be a **composition of independent terms the
   room selects** — floor contact, corner contact, ceiling contact, a lighting
   gradient — not one fixed `wallBaker` formula with the grid's choices
   hardcoded.

Neither is a large change; both are much cheaper to keep in mind now than to
untangle from a working grid room later.

### Ambience as a stack of modules

Coupling 2 generalizes into the thing actually worth aiming at: a room's
ambience is an **ordered stack of independent contributions to a surface**, and
which ones are in the stack is the room's choice.

The mechanism already exists and is proven — `compositeWallTex`
(`Canvases.scala:486-508`) is exactly that stack today, just hardcoded to two
entries: a copy of the baked noise, then one `Multiply`-blended shadow instance
per painting. Opening it up means letting a room supply the list, not inventing
a new pipeline.

The motivating case, and a good stress test of the idea: **dim the walls right
down** — the ceiling grid giving only a low ambient wash — **and add prebaked
spot lights where pieces hang.** A gallery lit that way looks completely
different from the current evenly-bright room, and it is the strongest lever on
mood available without a real lighting model.

Its stack would be:

| Order | Contribution                                           | Blend    |
| ----- | ------------------------------------------------------ | -------- |
| 1     | base noise + tint, dimmed                              | write    |
| 2     | wall tint gradient (`topY − wp.y`)                     | multiply |
| 3     | **one spot per hung piece**, from curation's positions | additive |
| 4     | floor grime line                                       | multiply |
| 5     | one drop shadow per hung piece                         | multiply |

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
Nothing new is conceded; a spot is just a second per-piece contribution
alongside the shadow that is already there.

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
`sketches/templates/rooms/grid-canvases/GridCanvases.scala`, plus `index.html`,
`PLAN.md` and the generated `main.js`.

Read-and-port references (all existing, all reused rather than reinvented):

| Source                                                       | What to take                                                                                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `sketches/rooms/canvases/Canvases.scala`                     | the entire sketch as the base; `mkWall`, `hang`, `shadowMask`, `compositeWallTex`, `roomNoise`, `contact`, mirror/bloom/camera wiring |
| `sketches/experiments/grid-ceiling/GridCeiling.scala:71-143` | `rowStrips` / `colStrips` UV-atlas strip construction (an experiment — see below)                                                     |
| `src/utils/bake/Bake.scala`                                  | `TextureBaker` / `TextureBaker.bakeBlock`, `BakeVertex`                                                                               |
| `src/utils/bloom/Bloom.scala`                                | unchanged                                                                                                                             |
| `src/utils/mirror/GaussianMirrorReflection.scala`            | unchanged                                                                                                                             |
| `src/shaders/Noise.scala`                                    | `Noise.fbm3`                                                                                                                          |
| `trivalibs/src/graphics/geometry/shapes.scala`               | `Box`, `Mesh`, face helpers                                                                                                           |
| `trivalibs/src/graphics/geometry/polygon.scala`              | `Quad.fromDimensions` / `fromDimensionsCenter` — oriented quads from center + dimensions + normal                                     |

Two library changes, both at step 3 and both additive: **per-bake uniforms on
`TextureBaker`** in `src/utils/bake/` (Part 5.1), and an **explicit-tangent
overload of `Quad.fromDimensions`** in `trivalibs/src/graphics/geometry/`
(_Raster geometry_). Part 5 covers why the other library additions that looked
implied are not needed.

**`grid-ceiling` is an experiment, and the port respects that.** It tried tiled
grids, a tiled ground texture, fog and DOF, and was judged not generally usable
and visually unconvincing; it is kept as proof of concept, not continued. What
this plan takes from it is one specific mechanism — the UV-atlas strip
construction — and explicitly _not_ its tiling machinery, its fog/DOF resolve or
its overall structure. Its move to `sketches/experiments/grid-ceiling/` is
pending; the line references above stay valid either way.

A subset is nonetheless headed for `src/utils/room/` as free functions — see
Part 6, _What to extract first_ — triggered by the second exhibition or the
second shape. Those parts are written to library discipline from the start (see
_The discipline boundary inside the sketch_), so that extraction is a move
rather than a rewrite. What carries a look decision stays in the sketch, even
when it repeats.

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
   named meter defaults. Independent of everything else and makes every later
   shape immediately walkable, so it is worth having before the ceiling work
   rather than after.
3. **Grid ceiling.** Snap the plan to the lattice, drop the wall top to
   `WallTopY`, raise the light plane, add the raster, re-tune the wall gradient
   and bloom. This is the step with taste in it — expect to iterate on
   `CofferDepth`, `GridSpacing`, `StripHeight`, `LightColor` and the light
   plane's overhang, and expect the room to be judged here. It is also where
   **per-bake uniforms land in `TextureBaker`** (Part 5.1) — `topY` starts
   varying here, and adding them now is cheaper than migrating specialized
   bakers later.
4. **Restore the hanging affordance** — `paintingForm` / `hang` / `shadowMask` /
   `compositeWallTex` verbatim from `canvases`. This is stage work: it makes
   walls hangable, and stops there. Prove it with the crudest possible curation:
   a couple of fixed-size pieces at fixed positions, flat color, not moving.
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
6. **Shapes** (separate sketches, later): with 1–3 in place these are **nothing
   but ring data** — L (6-point ring), hexagon (6-point ring), O (outer ring +
   one full-height `Outward` ring, whose four walls take canvases like any
   other), H (12-point ring). No geometry authoring at all: floor and ceiling
   stay the bounding-box quad. The O-shape is the one that exercises `facing`,
   so do it before step 8. The hexagon is where a **triangular raster** (three
   `BeamFamily` at 60°) becomes the interesting choice — data, not new code.
7. **Shared room functions** — the extraction to `src/utils/room/`, triggered by
   the second exhibition or the second shape, whichever comes first. Start from
   Part 6's _What to extract first_ list — camera confinement, rings/footprint,
   wall derivation, `clipLine`, the two shader distance emitters — and stop
   there. Keep them as free functions over plain data so any step can be
   replaced inline (_Granularity matters more than layering_), break the two
   couplings listed there, and **rewrite `canvases` on top of them as the
   acceptance test** — same look, flat ceiling, `u`/`v` renamed in passing. This
   is also where the hanging machinery becomes a real utility and **both static
   and animated shadows land as first-class cases**, replacing `canvases`'
   index-based `isAnimated(i)`. `Sway` returns here, as one option among two,
   not as a default.
8. **Free-standing walls** (Part 4): an `Outward` ring at partial height, plus
   the top cap. Should be additive — the baker already takes `topY` as a uniform
   from step 3, so no new pipelines.

---

## Verification

The Vite dev server is assumed already running on port 3000 — do not start it.

```bash
bun run sketch templates/rooms/grid-canvases   # → …/grid-canvases/main.js
```

Then at `http://localhost:3000/templates/rooms/grid-canvases/`, walk the room
with the first-person controller and check:

- **After step 1:** side-by-side with `http://localhost:3000/rooms/canvases/` —
  floor contact line, corner noise fade, wall gradient, ceiling halos and floor
  reflection should be visually identical, ignoring the paintings that are only
  in the reference. Any difference here is a bug in the footprint port, not a
  design choice. Bare walls make this comparison _easier_, not weaker: nothing
  is hanging in front of the surfaces being judged.
- **Confinement (step 2):** hold forward into each wall — the camera stops 0.5 m
  short and the view never clips through. Walk diagonally into a wall and
  confirm it _slides_ rather than sticking. Hold Space / Shift: under the dev
  server it flies, and in a built sketch it does nothing. Later, in the O-shape,
  walk a full lap around the inner box and confirm the clearance holds on its
  outer faces too.
- **After step 3:**
  - Looking forward at eye height, the light plane is hidden behind the raster
    and there is no bloom.
  - Tilting up, the light opens through the raster gaps and bloom ramps in.
  - Walking sideways, the light plane visibly lags the raster.
  - No hard seam where the raster meets the walls — and no dark line there
    either. The beams read as the same material as the walls, continuously lit,
    with only the noise varying.
  - Beam crossings are **not** darker than the beam runs. If they are, an
    occlusion term has crept back in.
  - Every wall is bordered by a beam flush with its plane, and the light
    openings are inset by one beam width all round — no opening runs into a
    corner.
  - At the wall/beam junction the value is continuous — same material, same
    lighting, only the noise differing. A visible value jump at `WallTopY` means
    the tint gradient and the beam shading disagree about where the wall ends.
  - The wall reads as `canvases` does — broadly even, settling slightly darker
    in the top band — with that band now sitting against `WallTopY` rather than
    the old absolute `4.6 … 5.5`. How deep and how dark is a look decision;
    expect to move `TopFadeDepth` by eye rather than check it against a number.
  - The beam soffits read as the same color as the `canvases` ceiling.
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

Use `bun run sketch:watch templates/rooms/grid-canvases` while iterating on step
3's constants. There are no tests in this repo — the sketch running correctly in
the browser is the check.

**One check that is not visual**, and it applies to this sketch because it is a
template. Read the finished file cold, as someone who has not seen this
document: are the non-obvious decisions explained where they are made? Is it
clear which constants are meant to be tuned and which are structural? Would
someone changing the room shape, or adding a partition, know where to touch? A
template that only makes sense next to this plan has not met the bar.

The opposite check applies from step 5 on, once exhibition sketches exist: those
are outcomes, and comments explaining obvious code are a defect there, not a
virtue.

---

## Deferred and open

Decisions this plan does not settle, collected so they are not rediscovered by
accident. None blocks step 1.

**Naming**

- **Rename `Footprint` → `FloorPlan` / `RoomPlan`** at the `src/utils/room/`
  extraction (step 7). It is the better architectural term; it was passed over
  only because "plan" collides with this document's own word for itself, and
  that collision disappears once the code lives outside this document. Cheap
  then, purely mechanical.
- **Rename `hang`'s `u` / `v`** to `centerFromLeft` / `centerHeight` in
  `canvases` — comes along with its rewrite at step 7, not before.

**Decisions waiting on seeing it run**

- **Junction darkening in the hexagon's triangular raster.** Ruled out for
  perpendicular grids on the grounds that a 90° wedge admits most of the
  hemisphere. Three families at 60° meet far more sharply, and the triple points
  more sharply still, so the same argument does not carry — decide it there by
  looking, not by inheritance (Part 2). Note this needs no accommodation in the
  shared code: that sketch can build its raster shading inline and keep
  everything else (see _Granularity matters more than layering_).
- **Corner noise fade on concave plans.** `cornerDist` fades the
  normal-dependent noise at concave and convex corners alike. If the L's convex
  corner reads wrong, gate it with a per-wall CPU flag rather than shader math
  (Part 1). This is a fade, not a darkening.
- **Concave camera creep.** If the single-nearest-point clamp lets the camera
  into a concave wedge, run `confine` twice per frame. Do not reach for general
  multi-constraint resolution (Part 3).
- ~~Free vertical~~ — **decided**: `y` is locked to `EyeHeight`, Space / Shift
  is a dev-only inspection tool (Part 3). Consequence: author for the locked eye
  plane, so no top caps on partitions taller than 1.7 m.
- **Coincident beam families.** If three families at a triple point read badly,
  stagger each family's `gridY` by a few millimeters (Part 2).
- **Perimeter spacing.** Inset light openings shrink by one beam width at every
  wall; `GridSpacing` near the perimeter may want to differ from the field (Part
  2).
- **Floating partitions.** A free-standing wall may need a soft downward-cast
  darkening on the floor to sit convincingly — a shadow-shaped term, not a
  lighting model (Part 4).

**Rebuild `sketches/rooms/columns/` on this machinery**

Started and unfinished: a monumental open courtyard — a double ring of columns
around the perimeter, crossing beams overhead, perimeter walls, flat ground, and
a **pure debug shade** (per-face grid showing normals and raw UV,
`Columns.scala:125-136`). No prebaked ambience, no mirror, no bloom.

It aims at the same visual paradigm as this plan — light from above through a
beam grid, mirrored ground — so it is the strongest reuse candidate after
`canvases`, and unlike `canvases` it exercises parts of the design that grid
rooms do not. Four findings, each already recorded where it applies:

- **Columns are `Outward` rings**, one small square each, at full height. Floor
  contact, camera clearance and hangable faces all fall out for free.
- **They break the `ceilingEdges` height predicate** — a column reaches the
  ceiling but must not clip the raster, because beams rest on it. This is the
  case that forces `boundsCeiling` (Part 1).
- **They want the raster without a ceiling behind it** — open sky, no coffer, no
  light plane. This is the case that splits Part 6's layer 4 into 4a / 4b, and
  the first consumer of _Open rooms and the sky_: a sky or cloud shader above
  the beams, plus the same field reused as beam shadows on the ground.
- **Column placement is another generator**, `columnRings(families, edges)`
  emitting rings at chosen beam intersections, alongside `familyBeams` and
  `perimeterBeams` (Part 2).

Two mismatches to resolve rather than assume:

- **Wall alignment.** `Columns.scala:215-241` puts the walls on the
  **centerline** of the outermost beam; `snapHalfExtent` (Part 2) puts them
  flush with its outer **face**. Both are legitimate; the snap needs an
  alignment parameter rather than one baked-in choice.
- **Scale.** `ColSpace = 12 m`, `ColHeight = 40 m`, ground 200 m — against this
  plan's `GridSpacing = 0.55 m`. Good stress test that nothing is hardcoded to
  room scale, but `TexScale = 48` texels/m does not survive it: a bounding-box
  floor over that courtyard would be ~4600 × 9200 px. Large spaces need a lower
  `TexScale`, or a tiling floor rather than a single baked quad.

**Small trivalibs additions**

- **Expose `devMode` from `trivalibs.dev`.** Already computed correctly from
  `import.meta.hot` (`dev/dev.scala:43`), just `private`. Needed to gate the
  free-vertical camera as a dev-only tool (Part 3), and useful for any other
  "development affordance that must not ship" — better than a hand-rolled
  constant a sketch can leave in the wrong state. Needed at step 2.
- **`Quad.fromDimensions` with an explicit tangent.** The existing overload
  (`polygon.scala:63`) infers the in-plane orientation from world up, flipping
  reference for near-vertical normals. Beam soffits need the tangent given, not
  guessed, or their atlas `u` will not run along the beam. An additive overload
  beside the current one; generic quad construction, so it belongs in
  `trivalibs` rather than the sketch. Needed at step 3.
- **Per-bake uniforms on `TextureBaker`** — `src/utils/bake/`, not `trivalibs`.
  Also step 3; see Part 5.1 for the intended shape: a `ctx => Block` overload,
  `apply` left uniform-free, and binding at **shape** level so it is
  typechecked. **Gets a short planning pass** before it is written; what is open
  is only how to surface the shape's typed `bind` through `prepare`, which today
  returns just a `Panel`.

**Build only if a room wants it**

- **Prebaked ambient occlusion**, as one module in the ambience stack. Off by
  default and deliberately absent from the initial implementation (see _No
  ambient occlusion by default_) — but near-free to add, because it reuses the
  **existing edge-distance field**, applied to brightness rather than to the
  noise. It needs its own falloff radius, not `EdgeFadeWorld`, which is tuned to
  round corners off rather than to absorb light. Static geometry and
  already-baked surfaces mean it costs nothing at runtime; a real-time MRT
  post-process is the fallback for dynamic scenes, not for this one.
- **Ambience module stack** — dimmed walls plus prebaked spots at hang
  positions. The strongest available lever on mood; the mechanism already exists
  in `compositeWallTex` (Part 6).
- **Explicit `perimeterBeams`** — only needed for plans whose walls are not
  parallel to a beam family, i.e. the hexagon (Part 2).
- **Array uniforms / storage buffers** — declined, with the conditions that
  would revive them recorded in Part 5.
