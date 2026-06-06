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

1. **Fog + DOF** = a fog + focus-blur post-process **kept inline in the sketch**
   for this first iteration (no util extraction yet — if another sketch needs it
   later, extract a `playground` util then). It reads the HDR scene **and its
   depth**, reconstructs view distance, and does _both_ the fog-colour mix and a
   distance-driven focus-blur LOD in a single resolve pass over a blur mip
   pyramid (mirrors `MirrorReflection`'s depth pattern). → the scene panel must
   be **non-MSAA** so its depth is cleanly sampleable.
   - **Threshold start**: both fog and blur stay **off** until a near
     `fadeStart` distance, so close-by geometry (the nearby ceiling, grid, box)
     renders **sharp and unmodified**; the effect ramps in only beyond it. The
     `smoothstep(fadeStart, fadeEnd, dist)` factor gives this for free (factor
     `0` ⇒ `lod = 0` and no fog mix below `fadeStart`).
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

None for this iteration — fog + DOF lives **inline** in the sketch. (The
existing `playground` utils `Bloom` and `MirrorReflection` are still consumed
via `import playground.*`; `scripts/sketch.ts` already passes `src` to
scala-cli.) Extract a fog/DOF util only once a second sketch needs it.

## Critical files

- `sketches/rooms/grid-ceiling/GridCeiling.scala` — all sketch changes
  (geometry, tiling noise, the inline fog/DOF passes, post wiring).
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

## Staged execution order (verify-as-you-go)

Build and visually verify each stage before starting the next — each ends with a
`bun run sketch rooms/grid-ceiling` rebuild, then view in the **already-running
dev server** (assume `bun run dev` is up; ask the user to start it if it isn't —
don't launch it as part of a checkpoint).

1. **Geometry** — grid, ceiling, ground at target shapes/sizes (no walls).
2. **Baked tiling noise** — grid + ceiling + floor, shared world-space sampling.
3. **Item box** — center reference box with its own baked noise tile.
4. **Fog/DOF pass** — inline depth-driven fade; verify distant space
   blends/fades.
5. **Lights + bloom + reflection** — HDR ceiling light strips, then wire bloom +
   ground reflection together.

> Note: the grid texture baking was just fixed (inverting Y in the baking
> shader's output position), so the existing bake orientation is correct to
> build the tiling-noise stage on.

---

## Implementation status

- ✅ **Step 1 — open geometry** (done). Walls removed; ground + ceiling are
  `extent × extent` plates (`extent = 2·fogEnd + 20`, `ceilingY = 20`); grid
  driven by `rowSpacing`/`colSpacing` with counts derived from `extent`; camera
  `far = extent`.
- ✅ **Step 2 — shared tiling noise** (done), incl. **2a single octave** and
  **2b tiling FBM**. Notes on how it landed vs. the original Step 2 text below:
  - **No 3D textures** (out of scope — panel is the only texture abstraction).
    Instead: every bake samples one conceptual 3D volume
    `tilingNoise3d(worldPos · NoiseScale, period)` at the surface's **true world
    position**; ground/ceiling are flat square tiles sampled by world XZ, each
    grid direction is a **folded 2D surface** baked as a UV atlas.
  - **Repeat-sampler wrap instead of explicit `mod`**: the render grid mesh lets
    `u` (= worldLen ÷ tileWorld) and `v` (strip index ÷ `TileCells`) run past 1;
    a **`AddressMode.Repeat`** sampler wraps them. (Required a small library add:
    `AddressMode` enum + `addressMode`/`addressModeU`/`addressModeV` on
    `p.sampler` in `trivalibs`.)
  - **Integer-period constraint**: psrdnoise only tiles when the *domain* period
    (`tileWorld · NoiseScale`) is an integer, so `NoiseScale` is **snapped** via
    `noisePeriod = round(tileWorld · targetNoiseScale)`. See memory
    `psrdnoise-integer-period`.
  - **Tiling FBM**: lacunarity fixed at **2** (integer) so every octave period
    stays integer ⇒ the sum still tiles; `FbmOctaves`, `FbmGain` tunable.
  - **Contrast** is a global `val` (`NoiseContrast`, high for now) baked into the
    render shade — Step 5 dampens it.
  - The render shade just samples the baked tile (no grid-cell border pattern;
    that was dropped as debug-only).
- ✅ **Step 3 — center box** (done). 5-face UV atlas (`boxFaces`), baked from the
  **same noise volume** and rendered with a **clamp** sampler (its own
  non-tiling patch). Sits on the ground; blends with the floor at the base.
  (`boxSize`/`boxHeight` are tweakable — currently set tall to intersect all
  geometries as a noise-volume-alignment check.)
- ✅ **Noise volume unified to ONE shared period** (during Step 3). The grid and
  the planes originally used different periods (`gridNoisePeriod` vs
  `planeNoisePeriod`) → different fields, so the box aligned with floor/ceiling
  but **not** the grid. Now a single `tileWorld` + `noisePeriod` + `NoiseScale` +
  `noiseBakeShade` is shared by grid, planes and box; the grid bakes
  `TileCells = displayArea / gridStep` strips to span that one period. Trade-off:
  bigger shared period (`displayArea`) = less repetition but larger grid atlas
  (compensated by lower `gridTexPx`).
- ✅ **Step 4 — inline fog + focus-blur (DOF)** (done). A depth-driven resolve:
  reconstruct world position from the scene depth + `invVp`, take camera
  distance, and `smoothstep(fadeStart, fadeEnd, dist)` ramps **both** a fog mix
  toward `fogColor` and a blur LOD. Within `fadeStart` everything is sharp;
  beyond it surfaces blur and dissolve into the fog. Notes on how it landed:
  - **Blur source = a TENT-blur pyramid** (`fadeBlurPanel`: mip 0 a sharp copy
    of the scene, mips 1.. `tentBlur2dAuto` downsamples), sampled with trilinear.
    The first attempt used the painter's **box auto-mips**, which produced
    crawling staircase steps on aliased diagonal edges at mid LOD — the tent
    pyramid fixed that.
  - **Sampler must be bare** (`samp: Sampler`) in the `layerShade` resolve U, not
    `FragmentUniform[Sampler]` (the wrapper shifted the bind-group layout → a
    WebGPU "group 1 binding 0 missing" error).
  - Knobs (sketch): `fadeStart`, `fadeEnd` (= `fogEnd`), `blurStrength` (now 4),
    `fadeMips`, `fogColor`.
  - Pass order per frame: `scene → fadeBlurPanel (pyramid) → fadePanel (resolve)`,
    then `show(fadePanel)`. Bloom slots in front of `fadePanel` in Step 5.
- ✅ **Library: MSAA depth sampling** (added during Step 4 to keep MSAA AA). A
  multisample depth attachment can't be sampled as `texture_depth_2d`, and WebGPU
  has no auto depth-resolve. The painter now does it transparently:
  `panel(multisample = true)` + `binding(depth = true)` allocates a single-sample
  resolve texture and runs an internal depth-resolve pass (subsample 0 →
  `frag_depth`) after the shape pass — so the depth API stays uniform
  (`FragmentDepthPanel`) and the scene keeps MSAA. Touch points:
  `painter/panel.scala` (`allocDepth`, `depthSamplingView`, `needsDepthResolve`,
  `resolvedDepthTarget`), `painter/painter.scala` (`DEPTH_RESOLVE_WGSL`,
  `depthResolvePipeline`, `resolvePanelDepth`, call in `paintPanel`). Also added a
  `// TODO(perf)` note on `Painter.show` re: a possible 1:1 blit fast path. (No
  automated test — the render path needs a real GPU device the munit suite lacks;
  verified via this sketch.)
  - Footgun caveat noted: edge depth uses subsample 0 (cheap, fine for DOF); if a
    future effect needs averaged/MSAA-accurate depth, revisit the resolve shader.
- ⏳ **Step 5 — lights + bloom + reflection**: pending.

---

## Step 1 — open geometry at target shapes/sizes

Remove the **wall** entirely; rebuild ground + ceiling + grids open, sized to
the eventual fog radius. Plain/temporary shading (flat tint or current noise) is
fine here — the goal is to lock in dimensions and layout first.

```scala
val fogEnd   = 60.0
val extent   = 2.0 * fogEnd + 20.0     // margin past the fog edge
val ceilingY = 20.0

// Grid layout — drive spacing explicitly; derive counts from extent.
val rowSpacing  = 2.0                   // world distance between row strips (Z)
val colSpacing  = 2.0                   // world distance between col strips (X)
val stripWidth  = 0.15
val stripHeight = 0.8
val rowCount = (extent / rowSpacing).floor.toInt
val colCount = (extent / colSpacing).floor.toInt
```

- **Ground**: one quad `extent × extent` centered at origin
  (`Quad.fromDimensionsCenter`, `Vec3.Y`).
- **Ceiling**: a quad `extent × extent` at `y = ceilingY`, `-Vec3.Y`. At this
  stage just a plate (lights come in Step 5).
- **Grids (rows/cols)**: span `extent`, with strips placed every `rowSpacing` /
  `colSpacing` world units (`rowCount`/`colCount` derived as above — easier to
  tweak spacing than to back-solve a count). `gridCenter.y` just below
  `ceilingY` (the grid sits _in front of_ the ceiling plate).
- Camera `far` bumped to comfortably exceed `extent` (e.g. `far = extent`).

**Checkpoint**: walk the open space — no walls, floor/ceiling/grid at the right
scale and spacing, grid suspended just under the ceiling.

---

## Step 2 — shared world-space tiling noise (grid + ceiling + floor)

Replace the whole-grid bake with a small **repeating tile** per geometry, all
driven by **one** sampling distribution so every tile stays seamless in world
space (mutually across geometries _and_ when repeat-sampled):

```scala
val TileCells = 4                       // tile spans 4×4 grid cells (tunable)
val NoiseScale = 0.15                   // shared domain scale
def noiseDomain(wp: Vec3Expr): Vec3Expr // shared world→noise transform
// World tile span = TileCells * spacing (rowSpacing along Z, colSpacing along X
// from Step 1); period is that span mapped through noiseDomain.
```

Each bake fragment computes
`Psrdnoise.tilingRotNoise3d(noiseDomain(worldPos), period, 0.0)` (the existing
`preRenderShade` already feeds `worldPos`; swap `rotNoise3d` →
`tilingRotNoise3d` with the shared `period`). Because the field is periodic with
`period`, strip `i` and strip `i + TileCells` carry identical noise.

> **Contrast (debug vs final)**: through Steps 2–4 keep the noise **high
> contrast** (e.g. map noise to a wide value range like `[0.05, 1.0]`) so
> geometry is highly visible and every effect (tiling seams, box blend, fog/DOF
> fade) is easy to read. Drive the contrast (e.g. the remap band) from a plain
> global Scala `val` used **directly inside the shader body** — no uniform
> needed (a shader-DSL advantage: compile-time constants bake straight in). A
> binding is only warranted later if we want to vary contrast per shape/panel;
> start global. Step 5 just edits that `val` to **dampen to a subtle detail**.

### Grid tiles (rows + cols)

- Bake only **`TileCells` strips' worth** of each grid into its tile texture
  (V-extent = `TileCells·(2·stripHeight + stripWidth)`), not the whole grid.
- The **full** row/col meshes map each face's baked V to its
  `(stripIndex mod TileCells)` slice, so the render repeat-samples the tile.
  (Adjust the `vStart` accumulation in `gridRows`/`gridCols` to wrap modulo
  `TileCells`.)
- `renderShade` keeps its grid-cell border pattern; it samples the small tiled
  texture instead of a per-grid giant one.

### Ceiling + ground tiles

- A `TileCells×TileCells`-cell square tile each, baked with the same
  `tilingNoise3d(noiseDomain(worldPos), period)`. Ground **and ceiling** forms
  repeat-sample via `(worldXZ / tilePeriodWorld).fract` UVs so their noise is
  spatially locked and seamless — and continuous with the grid (shared domain).

**Checkpoint**: pan along a grid line and across the floor/ceiling — no visible
tile seams or per-geometry discontinuities; the noise reads as one continuous
field across grid, floor and ceiling.

---

## Step 3 — center reference box (item-display stand-in)

Place a single **box at the origin** to imitate the future item-display scenario
and to serve as a fixed visual anchor for the later fog/blur + reflection
checks.

- A `Box` standing **on** the ground (`y` from `0` to `boxHeight`), **not**
  touching the ceiling (`boxHeight ≪ ceilingY`, e.g. `boxHeight = 3.0`,
  footprint ~`2×2`). Keep size/position as named constants so the later
  item-display work can swap real content in.
- Mesh: `Box(...)` per-face quads carrying **world position** (like the grid /
  ground verts) → `toBufferedGeometry`. Each face lays out a UV so its surface
  fills a slice of the box's own baked tile (like the grid strips pack into
  theirs).
- **Same indirect baked noise** as the rest of the space — the point of the box
  is to read as part of the same lit volume so we can verify the shared lighting
  blends. So it gets its **own baked tile texture** produced through the
  **shared `noiseDomain(worldPos)` + `period`** (Step 2), `tilingRotNoise3d` at
  its world positions — so the box noise is continuous with the ground noise
  where they meet. Bake alongside the other tiles before the loop.
- Box render shade: a textured shade like the ground's — sample the box's baked
  noise tile by the face UV, reading the panel-level `vp` (same `vpName` as the
  grid/ceiling so it can ride the mirror pass later). Reuse the grid/ground
  textured shade if its signature fits; otherwise a thin variant. The baked
  noise _is_ the indirect lighting — no extra lighting term needed.
- Use `CullMode.None` for the box shape (so the same shape can be reused in the
  Step 5 mirror pass, where reflection flips winding — matching the grid/ceiling
  convention).

**Checkpoint**: the box stands on the ground (not touching the ceiling) and its
baked noise **blends continuously** with the ground noise at its base.

---

## Step 4 — inline fog + focus-blur (DOF) pass

A fullscreen fog + focus-blur resolve built **inline in the sketch**, structured
like `MirrorReflection` (build a blur mip pyramid of the source, then a
depth-driven resolve picks per-pixel LOD), but the source is the **scene
itself** and the resolve also mixes toward a fog colour. Two panels + a couple
bindings declared right in the `Painter.init` body — no util, no trait.

For this to read depth cleanly the scene must render into an HDR, **non-MSAA**
panel:

- `scenePanel`: `Rgba16Float`, `depthTest = true`, **`multisample = false`**,
  `clearColor = fogColor` (same colour the fog mixes to → seamless void).
  Shapes: ground, grid rows, grid cols, ceiling, box. Supplies a panel-level
  `vp` to its shapes (so they're reusable in the mirror pass in Step 5).

### Constants / bindings (in the sketch)

```scala
val fadeStart = 18.0      // sharp & unmodified within this radius
val fadeEnd   = fogEnd    // fully fogged/blurred at the visible edge
val blurStrength = 8.0
val fadeMips  = 6
val fogColor  = Vec3(...) // == scenePanel clearColor

val invVp  = p.binding[Mat4]
val camPos = p.binding[Vec3]
```

### Passes

1. **Blur pyramid** — a `fadeBlurPanel` (`Rgba16Float`, `mipLevels = fadeMips`):
   a first layer blits `scenePanel` → mip 0 (trivial `sample`/`load` shade with
   `scenePanel` bound as an external panel), then `fadeMips-1` downsample layers
   (`p.layer(downBlurShade, mipSource=i, mipTarget=i+1)`) using
   `Blur.tentBlur2dAuto(...)`. Copy the loop from `MirrorReflection` lines
   180–207, swapping the mip-0 source from "rendered shapes" to a blit of the
   scene.
2. **Resolve** — a `fadePanel` (`Rgba16Float`), one layer cloning
   `MirrorReflection`'s resolve shade (lines 213–253):
   - `d := depth.load(ivec2(fragCoord.xy))`, reconstruct `worldPos` via
     `invVp * ndc`.
   - `dist := (worldPos - camPos).length` (radial distance from camera).
   - `f := dist.smoothstep(fadeStart, fadeEnd)` — **0 within `fadeStart`**
     (sharp, unmodified), ramping to 1 at `fadeEnd`.
   - `lod := (1.0 + f * blurStrength).log2.min(fadeMips-1)` — focus blur ramps
     with the same factor, so it's also `0` (sharp) below `fadeStart`.
   - `col := fadeBlurTex.sampleLevel(uv, samp, lod).xyz`
   - `out.color := vec4(col.mix(fogColor, f), 1.0)`
   - Bindings: `invVp`, `camPos`, trilinear `samp`; panels
     `col := fadeBlurPanel`, `depth := scenePanel.binding(depth = true)`.

Per frame (after the scene is painted): `invVp.set(vp.inverse)`,
`camPos.set(cam.pos)`, then `p.paint(fadeBlurPanel, fadePanel)`. Show
`fadePanel` directly at this stage (Bloom slots in front of it in Step 5).

> Depth note: reads `scenePanel.binding(depth = true)` 1:1 via `load` — same as
> the mirror resolve. This is why the scene panel must be non-MSAA
> (`panel.scala` `depthSamplingView` allocates a 4×-sample depth when
> `multisample` is on, which a plain `texture_depth_2d` load can't read).

**Checkpoint**: geometry **within `fadeStart`** stays sharp and un-fogged;
beyond it, the box / grid / floor / ceiling progressively **blur and fade into
the fog colour**, distant space dissolving into the void. Tune
`fadeStart`/`fadeEnd`/`blurStrength`.

---

## Step 5 — lights + bloom + ground reflection (wire everything)

Now layer the lighting + remaining post on top of the verified base.

- **Dampen noise contrast**: drop the debug high-contrast noise (Step 2) to a
  **subtle detail** — a narrow value band that just adds texture to the
  near-uniform surfaces (cf. `rooms/base`'s tight `[0.68, 1.0]` remap). Just edit
  the global contrast `val` (baked into the shader, no uniform) so the lighting +
  reflection + bloom read as the primary effects and the noise only enriches
  them.
- **Ceiling lights**: upgrade the ceiling plate to an **HDR halo-strip light
  texture** ported from `rooms/base`'s `ceilTex` (the `haloCount`/`haloStrength`
  strips in `noiseShade`, lines 196–209 of `Base.scala`), composited over /
  alongside the ceiling's baked noise. Strips are periodic in UV so they tile
  across the big plate; bake as `Rgba16Float` so they trip bloom.
- **Ground reflection** via
  `MirrorReflection(p, Arr(rowShape, colShape, ceilShape, boxShape), vpName = "vp", alphaScale = ceilingY, blurStrength ≈ 60, mipLevels = 6)`
  reflecting grid + ceiling + box across `Plane.ground`. The ground shade mixes
  in `mirror.resultPanel` exactly like `Base.scala`'s `floorShade` (lines
  334–369). Shared shapes use `CullMode.None`.
- **Bloom**:
  `val bloom = Bloom(p, fadePanel, intensity ≈ 0.002, threshold = 1.0, mipLevels = 5)`
  — bloom's `scene` is the **faded** panel (`fadePanel`), not the raw scene, so
  distant lights bloom progressively less and dissolve into the fog.

### Frame loop

```scala
animate: tpf =>
  controller.updateCamera(cam, input, tpf)
  val vp = cam.viewProjMat
  sceneVp.set(vp)
  mirror.paint(vp)                  // reflect grid+ceiling+box across ground
  p.paint(scenePanel)               // ground samples mirror.resultPanel
  invVp.set(vp.inverse)             // inline fog/DOF inputs
  camPos.set(cam.pos)
  p.paint(fadeBlurPanel, fadePanel) // fog + focus blur (reads scene + depth)
  bloom.paint()                     // bloom on the faded HDR result
  p.show(bloom.resultPanel)
```

Bake the grid tiles + ground tile + ceiling (noise + light) + box tile once
before the loop (`p.paint(rowTile, colTile, groundTile, ceilTex, boxTile)`).

**Checkpoint (full scene)**:

- Ceiling halo strips **glow** (bloom) and their **blurred reflection** rides on
  the floor, fading with distance.
- The center box casts a clean **reflection** meeting it at the ground plane and
  still blends/fades correctly with distance.
- Walking forward, the pattern stays locked in world space and the fog edge
  keeps hiding the geometry boundary.

---

## Pipeline overview (final)

`scene (HDR, non-MSAA) → fog/DOF → bloom → show`, with the ground reflection fed
in during the scene pass:

- Decisions recap: fog+DOF stays **inline** this iteration (extract a util only
  if a second sketch needs it); fog/blur gated by a near `fadeStart` threshold;
  one shared world-space `noiseDomain` + `period` for all tiles; static geometry
  sized to the fog radius (later clip-out tied to the item-display roaming
  radius — see Future direction).
