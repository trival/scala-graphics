# Rooms/base → gallery room enhancement

## Context

`sketches/rooms/base/Base.scala` is currently a colorful walkable inside-out
cuboid with three baked simplex-noise textures (floor / walls / ceiling). We
want to turn it into a **near-white art gallery room** where art pieces can
later be placed:

1. A **mirror-style ground reflection** of the room that blurs more as the
   reflected pixel sits farther from the ground plane (polished gallery
   floor). Per-fragment blur amount is driven by reflected-pixel height.
2. **Parallel HDR halo light strips** baked into the ceiling texture that
   drive a bloom post-effect.
3. Re-tuned baked noise reading as decent ambient gallery light — a tight
   spectrum between bright off-white and light gray.
4. The bloom pipeline (currently inlined in `sketches/post/bloom/Bloom.scala`)
   gets extracted into a **shared playground util** so other sketches can
   reuse it.

Execution order: prep the noise/tints + a temporary debug grid on the walls
first (so we have stable, easy-to-read references), then tackle the reflection
(the biggest unknown). Bloom extraction + halo strips come after.

## Repo additions

A new `src/` folder at the repo root holds shared **playground** utilities
(not part of `trivalibs`). Package root: `playground.*`. Update:

- `scripts/sketch.ts`: pass `"src"` to scala-cli alongside `sketchDir`,
  `trivalibs/src`, and `project.scala`. (Single edit to the `args` array.)

Sketch code references the utilities via `import playground.<…>`.

## Critical files

- `sketches/rooms/base/Base.scala` — all sketch changes.
- `scripts/sketch.ts` — add `src` to scala-cli inputs.
- `src/playground/bloom/Bloom.scala` *(new)* — shared bloom util (Step 2).
- Reference (read-only): `sketches/post/bloom/Bloom.scala`,
  `trivalibs/examples/blur/Blur.scala`,
  `trivalibs/src/graphics/shader/lib/blur.scala`.

---

## Step 1 — desaturate noise tints + temporary debug wall grid

Done first so the room reads cleanly and the reflection (Step 2) has obvious
landmarks to verify against.

### 1a. Desaturate the baked noise

- Drop the `pow(2.2)` and tighten the noise contrast, e.g.
  `n := simplex(...).fit1101.clamp01.fit01(0.78, 1.0)` so values stay in the
  near-white band.
- New tints (walls brightest — lights bounce off walls; ceiling darkest —
  shaded side of the spotlights):
  - walls   `Vec3(0.96, 0.96, 0.95)`
  - floor   `Vec3(0.90, 0.88, 0.85)` (slight warm cream)
  - ceiling `Vec3(0.78, 0.78, 0.77)`

### 1b. Temporary debug grid on walls

Drawn during the wall texture bake (extend the `noiseShade` used for the wall
tex only, or fork a `wallNoiseShade`). After the tinted noise is computed,
overlay a faint dark grid so we can read perspective and reflection mapping at
a glance.

```scala
// uv = ctx.in.uv  → already laid flat in the wall texture during bake
let g = abs(fract(uv * vec2(20.0, 10.0)) - 0.5)
let line = smoothstep(0.5, 0.48, max(g.x, g.y))     // 1.0 on line, 0 elsewhere
color := color * (1.0 - 0.35 * line)                // 35% darker on grid lines
```

(Cell counts tuned to the wall aspect; the wall tex is `WallLength × RoomHeight`
in world meters, so `vec2(20, 10)` gives roughly square cells.)

This whole block is marked `// TEMP debug grid — remove once reflection looks
right.` and torn down once Step 3 (halo strips) makes the scene visually rich
enough on its own.

---

## Step 2 — mirrored ground reflection with per-fragment distance-driven blur

Biggest unknown → do this without bloom or HDR, so it can be validated in
isolation. We render the room as it is today (LDR `scenePanel` still goes
straight to the screen via a simple composite) and add the reflection on top.

### 2a. Mirror scene render → `mirrorPanel`

- New panel `mirrorPanel` (`Rgba8Unorm` for now, full canvas size,
  `depthTest = true`, `multisample = true`, `clearColor = (0, 0, 0, 0)`).
  Format upgrades to `Rgba16Float` in Step 3 when bloom + HDR halo arrive.
- New binding `mirrorMvp : Mat4` =
  `cam.viewProjMat * Mat4.scale(Vec3(1, -1, 1))` per frame. Y-flip reverses
  winding → mirror shapes invert `cullMode` (`Front` → `Back`).
- New `mirrorShade` — same `RoomVertex` attribs as `roomShade`, plus a
  varying `worldY: Float = position.y`. Fragment samples its baked texture
  (forks per material, or carries the tex binding the same way `roomShade`
  does) and outputs `vec4(color.rgb, (worldY / RoomHeight).clamp01)`.
  Alpha = 0 at floor plane, 1 at ceiling.
- Three mirror shapes: walls + ceiling. **Floor is skipped** (mirroring the
  floor onto itself is degenerate).
- Render order: `p.paint(mirrorPanel, mirrorBlurPanel, scenePanel)` then
  `p.show(scenePanel)`.

### 2b. Mirror mip-chain blur → `mirrorBlurPanel`

- New panel `mirrorBlurPanel` (`Rgba8Unorm` initially, full canvas size,
  `mipLevels = 5`, no multisample, layers only).
- Layer 0 (regular, no mipTarget): blit `mirrorPanel` → mip 0 with a simple
  `textureSample` shade.
- Layers 1..4: `p.layer(downBlurShade, mipSource = i, mipTarget = i+1)` for
  `i = 0..3`. Reuse the 4-tap box downsample from `sketches/post/bloom`
  (kernel scaled by per-mip resolution). Alpha is averaged through the
  kernel naturally.
- Auto mipgen is already gated off whenever any layer uses `mipTarget`, so
  the hand-built chain survives.

### 2c. Floor shader composites baked noise + reflection

- Fork `floorShade` from `roomShade`. Extra bindings:
  - `reflTex : FragmentPanel` ← `mirrorBlurPanel`.
  - `reflSamp : Sampler` (linear / linear / linear).
  - `reflStrength : Float` (~0.35, tunable).
- Vertex stage: output `clipPos: Vec4` to a fragment varying (= the
  `out.position` we'd otherwise lose).
- Fragment stage:
  - Screen-UV: `ndc = clipPos.xy / clipPos.w`,
    `uv = ndc * vec2(0.5, -0.5) + 0.5`.
  - Read mip-0 alpha for the height encoding:
    `a = textureSampleLevel(reflTex, reflSamp, uv, 0.0).a`.
  - Sample with LOD driven by alpha:
    `refl = textureSampleLevel(reflTex, reflSamp, uv, a * 4.0).rgb`.
  - Baked floor noise → `base`.
  - Composite:
    `out = base * (1.0 - reflStrength * (1.0 - a)) + refl * reflStrength * (1.0 - a)`.
- Ceiling/walls still use `roomShade`.

### 2d. Visual check

- Walk around: walls + ceiling visible as a mirrored, blurrier-with-height
  smear on the floor. No bloom needed to validate.
- Tune `reflStrength` and the LOD scale (`a * 4.0`) until reflection reads
  natural.

---

## Step 3 — extract bloom into shared playground util

Move the bloom pipeline out of `sketches/post/bloom/Bloom.scala` into a
reusable function under `src/playground/bloom/`. `sketches/post/bloom` is
retrofitted to consume the shared util as a verification that the API works.

### API sketch

```scala
package playground.bloom

case class BloomParams(
    threshold: Double = 1.0,
    intensity: Double = 0.03,
    blurRadius: Double = 4.0,
    mipLevels: Int = 5,
)

trait Bloom:
  val panel: Panel              // resulting HDR-bloom panel (mip-0 is composite-ready)
  def paint(): Unit             // re-runs the threshold + down/upsample chain
  def setIntensity(v: Double): Unit
  def setBlurRadius(v: Double): Unit
  // resize hook called by the host on canvas resize
  def onResize(w: Double, h: Double): Unit

object Bloom:
  def apply(
      p: Painter,
      scene: Panel,
      params: BloomParams = BloomParams(),
  ): Bloom = ???
```

Implementation: lifts the threshold shade, down/upsample shades, mip-res
bindings, layer construction and resize handling straight from
`sketches/post/bloom/Bloom.scala`. The scene panel is bound as
`"scene" := scene` on the threshold layer.

The host sketch calls:

```scala
val bloom = Bloom(p, scenePanel)
// in canvas composite shade, take bloom.panel as second input
p.paint(scenePanel, bloom.panel, canvasPanel)
```

### Migration

- Update `sketches/post/bloom/Bloom.scala` to use `playground.bloom.Bloom`.
  Keep its mode-cycling (radius/intensity/both) by calling `setBlurRadius` /
  `setIntensity` from the animation loop.
- Verify it still looks identical.

---

## Step 4 — HDR scene + halo strips baked into the ceiling tex + bloom

Now Steps 1–3 plug into a full HDR pipeline.

- Convert `scenePanel` to `Rgba16Float`, `mirrorPanel` to `Rgba16Float`,
  `mirrorBlurPanel` to `Rgba16Float`.
- Convert `ceilTex` to `Rgba16Float` (floor + wall textures stay LDR).
- Extend `noiseShade` (or fork `ceilingNoiseShade`) to add procedural
  parallel stripes on top of the noise:
  - Along Z (long axis): `s = (uvw.z * stripeCount).fract`,
    `band = smoothstep(0.48, 0.5, abs(s - 0.5))` (inverted) or a soft pulse.
  - HDR multiplier `vec3(3.5, 3.4, 3.0)` added to the noise output.
  - Length falloff toward strip ends:
    `smoothstep(0.05, 0.12, uvw.x) * smoothstep(0.05, 0.12, 1 - uvw.x)`.
- Instantiate the shared bloom util:
  `val bloom = Bloom(p, scenePanel)`.
- New screen `canvasPanel` runs a tiny composite layer:
  `out = scene + bloom * intensity` reading both `scenePanel` and
  `bloom.panel`.
- Frame: `p.paint(mirrorPanel, mirrorBlurPanel, scenePanel, ...); bloom.paint(); p.show(canvasPanel)`.
  (Or include `bloom.panel` in the `p.paint` chain — depends on how the util
  exposes its underlying panel; if it's just a Panel, including it inline
  works and `bloom.paint()` is a no-op convenience.)

---

## Reuse / reference

- Bloom pipeline & shades (to extract): `sketches/post/bloom/Bloom.scala`.
- Logarithmic blur loop: `trivalibs/examples/blur/Blur.scala:131-154`.
- Blur fn lib: `trivalibs/src/graphics/shader/lib/blur.scala`
  (`gaussianBlur9`).
- Box geometry / face helpers: as already used (`Box`,
  `Quad.fromDimensionsCenter`).
- Mirror-scene strategy (old TS): Y-axis flip matrix + alpha-encodes-distance
  + screen-UV sample in the ground shader; we replace alpha-driven separable
  blur with mip-LOD sampling.

## Verification

1. After Step 1: walls/floor/ceiling read as near-white with subtle ambient
   mottling; ceiling slightly darker than walls; walls show the temporary
   dark debug grid.
2. After Step 2: `bun run sketch rooms/base` compiles; `bun run dev` shows
   walls/ceiling visible as a reflection on the floor (debug grid lines
   mirroring downward), sharpest near the ground plane, blurrier toward the
   room's far end. No bloom yet.
3. After Step 3: `bun run sketch post/bloom` looks identical to before the
   refactor.
4. After Step 4: ceiling shows N parallel bright halo strips visibly glowing
   (bloom halo); their reflection appears blurred on the floor. Debug grid
   on walls is removed.
