# rooms/grid-ceiling → open endless "indirect light" space

## Context

`sketches/rooms/grid-ceiling/GridCeiling.scala` is today a _closed_ room: a back
wall, a 100×100 ground/roof, and two crossing grids of noise-baked strips under
the ceiling, each grid baked **whole** into one texture. It clears to a flat
blue and the camera `far` is 100.

We want to turn it into the **open-space counterpart of `rooms/base`**: no
surrounding walls, just a floor and a ceiling that _appear to extend endlessly_,
with the suspended grid in front of an HDR light-plate ceiling (imitating
gallery indirect lighting). Distant space should fade away so the ground and
ceiling blend smoothly into the void — achieved with a **new fog + focus-blur
(depth-of-field) post-process** combined with **ground reflection** and
**bloom**. Later this space will host _3D objects_ (no walls needed to "hang"
anything), unlike `rooms/base` which heads toward 2D images on walls.

Confirmed design decisions:

1. **Fog + DOF** = one new shared `playground` util (`DistanceFade`) that reads
   the HDR scene **and its depth**, reconstructs view distance, and does _both_
   the fog-colour mix and a distance-driven focus-blur LOD in a single resolve
   pass over a blur mip pyramid (mirrors `MirrorReflection`'s depth pattern). →
   the scene panel must be **non-MSAA** so its depth is cleanly sampleable.
2. **Pass order**: `scene → fog/DOF → bloom → show`. Fog stays HDR so bloom
   still trips on the (now distance-faded) ceiling lights — distant glow
   dissolves into the fog naturally.
3. **Grid/ground noise** = a small **repeating tile** spanning an adjustable
   block of cells (e.g. `4×4`, a constant). All geometries bake their **own**
   tiling texture but through **one shared world-space sampling distribution**
   (a single domain transform `noiseDomain(worldPos)` + a single tiling
   `period`) using `Psrdnoise.tilingRotNoise3d` — so every tile is mutually
   seamless across geometries _and_ seamless when repeat-sampled.
4. **Endless extent** = **static** geometry, built once, sized so its edges sit
   beyond the fog far distance (`extent ≈ 2·fogEnd + margin`). No per-frame
   geometry work. (Camera-following recenter is a future enhancement.)

### Future direction (informs the extent decision, not built now)

The space will eventually hold a **fixed item-display area** (3D objects placed
at the centre). The "endless" illusion only has to hold while the first-person
camera roams _near_ that area: ground/ceiling continue outward until the camera
has moved far enough that the **fog fully swallows the display area** — past
that point the geometry can be **clipped / ended** (nothing visible to anchor
to). So the static extent should be sized from `fogEnd` **plus the intended
roaming radius around the display area**, and the build should keep `extent`,
`fogEnd`, and that roaming radius as related constants so this clip-out
behaviour can be added later without reshaping the pipeline.

## Repo additions

- `src/playground/distancefade/DistanceFade.scala` _(new)_ — the fog+DOF util
  (package `playground.distancefade`). `scripts/sketch.ts` already passes `src`
  to scala-cli (added during the `rooms/base` work), so no build-script change.

## Critical files

- `sketches/rooms/grid-ceiling/GridCeiling.scala` — all sketch changes.
- `src/playground/distancefade/DistanceFade.scala` _(new)_.
- Reference (read-only):
  - `src/playground/mirror/MirrorReflection.scala` — depth→distance→LOD resolve
    pattern (lines 179–253) to clone; floor reflection wiring.
  - `src/playground/bloom/Bloom.scala` — bloom util API + blur-pyramid layers.
  - `sketches/rooms/base/Base.scala` — HDR ceiling halo strips, mirror+bloom
    wiring, camera/input loop.
  - `trivalibs/src/graphics/shader/lib/blur.scala` — `boxBlur2dAuto` /
    `tentBlur2dAuto`.
  - `trivalibs/src/graphics/shader/lib/random/psrdnoise.scala` —
    `tilingRotNoise3d(pos, period, normRot)` / `tilingNoise3d(pos, period)`.

---

## Step 1 — new util `playground.distancefade.DistanceFade`

A fullscreen fog + focus-blur resolve, structured exactly like
`MirrorReflection` (build a blur mip pyramid of the source, then a depth-driven
resolve picks per-pixel LOD), but the source is the **scene itself** and the
resolve also mixes toward a fog colour.

### Trait / factory (mirror `MirrorReflection`'s shape)

```scala
trait DistanceFade:
  def blurPanel: Panel       // scene copy at mip0 + blur pyramid (raw)
  def resultPanel: Panel     // HDR faded image → feed to Bloom; p.show its bloom
  def paint(vp: Maybe[Mat4] = Maybe.Not): Unit
  def setFog(start: Double, end: Double): Unit
  def setBlurStrength(v: Double): Unit

object DistanceFade:
  def apply(
      p: Painter,
      scene: Panel,                 // Rgba16Float, depthTest=true, NON-multisample
      camera: Opt[PerspectiveCamera] = null,  // for camPos + vp (like mirror)
      fogColor: Vec3,
      fogStart: Double,
      fogEnd: Double,               // = visible radius; geometry sized from this
      blurStrength: Double = 8.0,
      mipLevels: Int = 6,
  ): DistanceFade
```

### Internals

1. **Blur pyramid** (`blurPanel`, `Rgba16Float`, `mipLevels`): a first layer
   blits `scene` → mip 0 (a trivial `sample`/`load` shade with `scene` bound as
   an external panel), then `mipLevels-1` downsample layers
   (`p.layer(downBlurShade, mipSource=i, mipTarget=i+1)`) using
   `Blur.tentBlur2dAuto(...)` — copy the loop from `MirrorReflection` lines
   180–207, just swap the mip-0 source from "rendered shapes" to "blit of
   scene".
2. **Resolve** (`resultPanel`, `Rgba16Float`): clone `MirrorReflection`'s
   resolve shade (lines 213–253):
   - `d := depth.load(ivec2(fragCoord.xy))`, reconstruct `worldPos` via
     `invVp * ndc`.
   - `dist := (worldPos - camPos).length` (radial distance from camera).
   - `f := dist.smoothstep(fogStart, fogEnd)` — fog factor (0 near → 1 far).
   - `lod := (1.0 + f * blurStrength).log2.min(mipLevels-1)` — focus blur ramps
     with the same normalized distance (distant = blurrier).
   - `col := blurTex.sampleLevel(uv, samp, lod).xyz`
   - `out.color := vec4(col.mix(fogColor, f), 1.0)` (or
     `col*(1-f) + fogColor*f`).
   - Bindings: `invVp: Mat4`, `camPos: Vec3`, fog start/end, blurStrength,
     trilinear `samp`; panels `col := blurPanel`,
     `depth := scene.binding(depth = true)`.
3. **paint(vp)**: pull `vp`/`camPos` from `camera` (or explicit `vp`), set
   `invVp := vp.inverse`, `camPos := camera.pos`, then
   `p.paint(blurPanel, resultPanel)`.

> Depth note: reads `scene.binding(depth = true)` 1:1 via `load` — same as the
> mirror resolve. This is why the scene panel must be non-MSAA (`panel.scala`
> `depthSamplingView` allocates a 4×-sample depth when `multisample` is on,
> which a plain `texture_depth_2d` load can't read).

---

## Step 2 — shared world-space tiling noise (replaces whole-grid bake)

Introduce **one** sampling distribution reused by every bake so all tiles stay
seamless in world space:

```scala
val TileCells = 4                       // tile spans 4×4 grid cells (tunable)
val NoiseScale = 0.15                   // shared domain scale
def noiseDomain(wp: Vec3Expr): Vec3Expr // shared world→noise transform
// period = TileCells * cellStep along the relevant axes, in domain units
```

Each bake fragment computes
`Psrdnoise.tilingRotNoise3d(noiseDomain(worldPos), period, 0.0)` (the existing
`preRenderShade` already feeds `worldPos`; swap `rotNoise3d` →
`tilingRotNoise3d` with the shared `period`). Because the field is periodic with
`period`, strip `i` and strip `i + TileCells` carry identical noise.

### Grid tiles (rows + cols)

- Bake only **`TileCells` strips' worth** of each grid into its tile texture
  (V-extent = `TileCells·(2·stripHeight + stripWidth)`), not the whole grid.
- Build the **full** row/col meshes at the fog-radius extent (Step 3) but make
  each face's baked V map to its `(stripIndex mod TileCells)` slice, so the
  render repeat-samples the tile. (Adjust the `vStart` accumulation in
  `gridRows`/`gridCols` to wrap modulo `TileCells`.)
- `renderShade` keeps its grid-cell border pattern; it now samples the small
  tiled texture instead of a per-grid giant one.

### Ground tile

- A `TileCells×TileCells`-cell square tile, baked with the same
  `tilingNoise3d(noiseDomain(worldPos), period)`; the ground form repeat-samples
  it via `(worldXZ / tilePeriodWorld).fract` UVs so the floor noise is spatially
  locked and seamless.

---

## Step 3 — open geometry sized to the fog radius

Remove the **wall** entirely. Rebuild ground + ceiling + grids at the fog
extent:

```scala
val fogEnd   = 60.0
val extent   = 2.0 * fogEnd + 20.0     // margin past the fog edge
val ceilingY = 20.0
```

- **Ground**: one quad `extent × extent` centered at origin
  (`Quad.fromDimensionsCenter`, `Vec3.Y`), repeat-sampling the ground tile.
- **Ceiling light plate**: a quad `extent × extent` at `y = ceilingY`,
  `-Vec3.Y`, textured with an **HDR halo-strip light texture** ported from
  `rooms/base`'s `ceilTex` (the `haloCount`/`haloStrength` strips in
  `noiseShade`, lines 196–209 of `Base.scala`). Strips are periodic in UV, so
  they tile across the big plate; bake as `Rgba16Float` so bloom trips on them.
- **Grids (rows/cols)**: rebuild with `gridSize ≈ extent` and counts scaled to
  keep `stripWidth/stripHeight` spacing, `gridCenter.y` just below `ceilingY`
  (the grid sits _in front of_ the ceiling plate). Use the tiled grid textures
  from Step 2.
- Camera `far` bumped to comfortably exceed `extent` (e.g. `far = extent`).

---

## Step 3b — center reference box (item-display stand-in)

Place a single **box at the origin** to imitate the future item-display scenario
and to serve as a fixed visual anchor. Concretely it lets us:

- validate the **ground reflection** against a solid, recognizable object (the
  box and its mirror image should meet cleanly at the ground plane);
- judge **fog + focus-blur** while walking away — a known shape is the clearest
  way to read how distance dissolves it into the void.

Details:

- A `Box` standing **on** the ground (`y` from `0` to `boxHeight`), **not**
  touching the ceiling (`boxHeight ≪ ceilingY`, e.g. `boxHeight = 3.0`,
  footprint ~`2×2`). Keep its size/position as named constants so the later
  item-display work can swap real content in.
- Mesh: `Box(...)` per-face quads carrying **world position** (like the grid /
  ground verts) → `toBufferedGeometry`. Each face also lays out a UV so its
  surface fills a slice of the box's own baked tile (analogous to how the grid
  strips pack into their tile).
- **Same indirect baked noise** as the rest of the space — this is the point of
  the box: it must read as part of the same lit volume so we can verify the
  shared lighting blends. So the box gets its **own baked tile texture**
  produced through the **shared `noiseDomain(worldPos)` + `period`** (Step 2),
  `tilingRotNoise3d` at its world positions — identical sampling distribution to
  ground/grid, so the box noise is continuous with the ground noise where they
  meet. Bake it alongside the other tiles before the loop.
- Box render shade: a textured shade like the ground's — sample the box's baked
  noise tile by the face UV, reading the panel-level `vp` (same `vpName` as the
  grid/ceiling so it can ride the mirror pass too). Reuse the grid/ground
  textured shade if its signature fits; otherwise a thin variant. No extra
  lighting term is required for the reference block — the baked noise _is_ the
  indirect lighting.
- The box is **reflective-relevant**: include its shape in the
  `MirrorReflection` shape set (Step 4) so it appears in the floor reflection.
  Because the mirror flips winding, use `CullMode.None` for the shared box shape
  (matching the grid/ceiling convention).
- The box is opaque solid geometry, so the scene-pass box shape can keep normal
  back-face culling **only if** it is a _separate_ shape from the mirrored one;
  simplest is one `CullMode.None` box shape reused in both passes (consistent
  with how the grid shapes are shared).

---

## Step 4 — wire reflection + fog/DOF + bloom

Adopt the `rooms/base` post chain, inserting `DistanceFade` between scene and
bloom.

- `scenePanel`: `Rgba16Float`, `depthTest = true`, **`multisample = false`**,
  `clearColor = fogColor` (same colour the fog mixes to → seamless void).
  Shapes: ground (reflective), grid rows, grid cols, ceiling plate, center box
  (Step 3b). Supplies a panel-level `vp` to its shapes (so they're reusable in
  the mirror pass).
- **Ground reflection** via
  `MirrorReflection(p, Arr(rowShape, colShape, ceilShape, boxShape), vpName = "vp", alphaScale = ceilingY, blurStrength ≈ 60, mipLevels = 6)`
  reflecting the grid + ceiling + box across `Plane.ground`. The ground shade
  mixes in `mirror.resultPanel` exactly like `Base.scala`'s `floorShade` (lines
  334–369). Shared shapes use `CullMode.None`.
- **Fog/DOF**:
  `val fade = DistanceFade(p, scenePanel, camera = cam, fogColor = Vec3(...), fogStart = fogEnd*0.35, fogEnd = fogEnd)`.
- **Bloom**:
  `val bloom = Bloom(p, fade.resultPanel, intensity ≈ 0.002, threshold = 1.0, mipLevels = 5)`
  — note bloom's `scene` is the **faded** panel, not the raw scene.

### Frame loop

```scala
animate: tpf =>
  controller.updateCamera(cam, input, tpf)
  val vp = cam.viewProjMat
  sceneVp.set(vp)
  mirror.paint(vp)     // reflect grid+ceiling across ground
  p.paint(scenePanel)  // ground samples mirror.resultPanel
  fade.paint(vp)       // fog + focus blur (reads scene + depth)
  bloom.paint()        // bloom on the faded HDR result
  p.show(bloom.resultPanel)
```

Bake the grid tiles + ground tile + box tile + ceiling light texture once before
the loop (`p.paint(rowTile, colTile, groundTile, boxTile, ceilTex)`).

---

## Verification

1. `bun run sketch rooms/grid-ceiling` compiles (and the new util compiles into
   it via the existing `src` scala-cli input).
2. `bun run dev` → open `rooms/grid-ceiling`:
   - No walls; floor + ceiling stretch out and **fade into the fog colour** at
     distance, ground/ceiling blending into one another far away.
   - Near geometry is sharp; far geometry is increasingly **blurred** (DOF) and
     dissolved into fog.
   - The suspended grid shows seamless tiled noise with **no visible tile seams
     or per-geometry discontinuities** (pan the camera along a grid line to
     confirm the repeat is invisible).
   - Ceiling **halo light strips glow** (bloom) and their **blurred reflection**
     rides on the floor, fading with distance.
   - The **center box** stands on the ground (not touching the ceiling), its
     baked noise **blends continuously** with the ground noise at the base, it
     casts a clean **reflection** meeting it at the ground plane, and it
     dissolves into fog/blur as you walk away — the reference anchor works.
   - Walk forward: the pattern stays locked in world space; the fog edge keeps
     hiding the geometry boundary.
3. Tune knobs and confirm they behave: `fogStart`/`fogEnd`,
   `fade.setBlurStrength`, `mirror.setBlurStrength`, `bloom.setIntensity`,
   `TileCells`.
