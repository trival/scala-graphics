# Bloom sketch — Scala port

## Context

Port the manually-designed Rust bloom test sketch
(`/home/trival/code/rust-graphics/sketches/tests/bloom/`) to the Scala WebGPU
painter in this repo, as a new sketch under `sketches/`.

Bloom = render HDR scene → threshold bright pixels → progressive downsample-blur
down a 5-level mip chain → progressive upsample-blur back up with additive
accumulation → composite scene + bloom. The Rust version builds the bloom
pyramid by hand using effects that render into specific mip levels
(`with_mip_source`/`with_mip_target`) on a single mip-chained layer, and relies
on the painter **not** auto-regenerating those mips.

Two trivalibs divergences (identified by comparing the Rust painter source
against the Scala port) block a faithful port and must be fixed first:

1. **Scala always auto-regenerates the full mip chain.** `paintPanel` runs
   `generateMipmaps` unconditionally for any panel with `mipLevelCount > 1`
   ([painter.scala:810](../trivalibs/src/graphics/painter/painter.scala#L810)),
   which would overwrite the hand-built bloom pyramid. Rust suppresses this via
   an `update_mips` flag whenever any effect has a mip target.
2. **`generateMipmaps` hardcodes the swapchain format.** It uses
   `getMipBlitPipeline(preferredFormat)`
   ([painter.scala:1101](../trivalibs/src/graphics/painter/painter.scala#L1101)),
   so auto-gen is wrong for `rgba16float` (HDR) panels.

Naming flip (Rust→Scala): Rust `Layer` = Scala `Panel`; Rust `Effect` = Scala
`Layer`. Rust `shade_effect()` = Scala `layerShade`.

## Prerequisite trivalibs changes

### Change 1 — gate auto mip-gen (match Rust `update_mips`)

In `trivalibs/src/graphics/painter/painter.scala`, in `paintPanel` around line
810, replace the unconditional call with a guard that skips generation when any
layer renders into a mip target (gated on `mipTarget`, mirroring Rust's
`dst_mip_level`-only check):

```scala
var hasMipTargetLayers = false
var mi = 0
while mi < panel.layers.length do
  if panel.layers(mi).mipTarget >= 0 then hasMipTargetLayers = true
  mi += 1
if panel.mipLevelCount > 1 && !hasMipTargetLayers then generateMipmaps(panel)
```

Zero new public API. The existing `examples/mipmaps` panel (shapes only, no
mip-target layers) is unaffected and keeps auto-generating.

### Change 2 — correct mip-gen format

In `generateMipmaps` (painter.scala:1098), derive the format from the panel
instead of `preferredFormat`:

```scala
val fmt = if panel.formats.length > 0 then panel.formats(0) else preferredFormat
val pipeline = getMipBlitPipeline(fmt)
```

`mipBlitPipelines` is already keyed/cached by format, so this is self-contained.
Independent latent-bug fix for all HDR panels (not strictly exercised by bloom,
since Change 1 means the bloom panel never calls `generateMipmaps`).

## Sketch

Location: **`sketches/post/bloom/`** (new `post` / post-processing category).
Files: `Bloom.scala`, `index.html` (copy/adapt from
`sketches/base-triangle/index.html`), `main.js` (build output). Package:
`package sketches.post.bloom`. Entry: `@main def bloom(): Unit`.

All five Rust SPIR-V fragment effects become Scala `layerShade` programs (DSL,
not raw WGSL, per conventions). HDR throughout via `rgba16float`.

### Bindings (all created with `p.binding[...]`)

- `uTime: Float`, `uThreshold: Float` (≈1.0), `uBloomIntensity: Float` (≈0.05),
  `uBlurRadius: Float` (animated `4 + 4*sin(t)`).
- Five resolution `Vec2` bindings: `uRes`, `uResMip1..4` (= res / 2^level).
- `samplerLinear` (`p.samplerLinear`).

### Panels & layers (render order matters)

1. **`scenePanel`** — `rgba16float`, full canvas size, `clearColor` dark. One
   layer = `sceneShade` (`layerShade[SceneU]`, no panel input) drawing the 6
   animated SDF circles from `uRes` + `uTime`, gamma `pow(2.3)` as in Rust
   `test_scene_fs`. Pure generator → no source injection (matches Rust
   `skip_source`).

2. **`bloomPanel`** — `rgba16float`, full canvas size, `mipLevels = 5` (Rust
   `with_mips_max(5)`). Layers in order:
   - **threshold** — `layerShade[ThresholdU, (scene: FragmentPanel)]`, manual
     bind `"scene" := scenePanel`, `uRes`, `uThreshold`, sampler. **Not**
     mip-targeted: a regular layer renders to `panel.textureView` =
     `_textureViews(0)` = mip 0 (verified
     [panel.scala:64](../trivalibs/src/graphics/painter/panel.scala#L64),
     [panel.scala:414](../trivalibs/src/graphics/painter/panel.scala#L414)).
     Manual slot-0 binding ⟹ no ping-pong ⟹ "else" branch reads the external
     scene panel correctly
     ([painter.scala:710-797](../trivalibs/src/graphics/painter/painter.scala#L710-L797)).
     Rec.709 luma threshold; below → black.
   - **downsample ×4** (i = 0..3) —
     `p.layer(downsampleShade, mipSource = i, mipTarget = i+1)`, bind
     `uResMip{i+1}`, `uBlurRadius`, sampler. Panel type `(tex: FragmentPanel)`;
     source mip auto-injected at slot 0 by the mip-target branch
     ([painter.scala:715-747](../trivalibs/src/graphics/painter/painter.scala#L715-L747)).
     4-tap box blur (`ctx.textures.tex(uv ± offset, sampler)`, ×0.25).
   - **upsample ×4** (i = 3..0, reverse) —
     `p.layer(upsampleShade, blendState = BlendState.Additive, mipSource = i+1, mipTarget = i)`,
     bind `uResMip{i}` (i=0 → `uRes`), `uBlurRadius`, sampler. 9-tap tent filter
     (center .25, cardinals .125, diagonals .0625).
   - Net: with Change 1, no auto mip-gen — the hand-built pyramid survives.

3. **`canvasPanel`** — screen panel. One layer = `compositeShade`
   `layerShade[CompositeU, (scene: FragmentPanel, bloom: FragmentPanel)]`,
   manual bind `"scene" := scenePanel`, `"bloom" := bloomPanel`, `uRes`,
   `uBloomIntensity`, sampler. Two manual panel bindings ⟹ "else" branch reads
   both. `out = scene + bloom * intensity`. Reads bloom mip 0 (default
   `mipLevel = -1` sampling view).

### Frame loop

```scala
p.onResize: (w, h) =>
  uRes.set(Vec2(w, h)); uResMip1.set(Vec2(w/2, h/2)); ... uResMip4 ...
animate: tpf =>
  time += tpf
  uTime.set(time)
  uBlurRadius.set(4.0 + 4.0 * (time * something).sin)
  p.paint(scenePanel, bloomPanel, canvasPanel)
  p.show(canvasPanel)
```

(`tpf` is ms in Scala vs s in Rust — scale time accordingly.) Threshold and
intensity are constant; set once.

## Critical files

- `trivalibs/src/graphics/painter/painter.scala` — Changes 1 & 2.
- `sketches/post/bloom/Bloom.scala` — new sketch.
- `sketches/post/bloom/index.html`, `main.js` — new (adapt from base-triangle).

## Reuse / reference

- DSL sampling + `sampleLevel` patterns:
  `trivalibs/examples/mipmaps/Mipmaps.scala`.
- `WgslFn.raw` blur kernels exist (`trivalibs/examples/blur/Blur.scala`,
  `shader/lib/blur`) but the bloom kernels are tiny (4-tap / 9-tap) — inline
  them in the DSL with `ctx.textures.tex(uv + offset, sampler)`; no lib needed.
- External-panel-read layer pattern (manual bindings, "else" branch):
  `trivalibs/examples/deferred/Deferred.scala`.
- `BlendState.Additive` from `trivalibs/src/graphics/painter/enums.scala`.
- Sketch skeleton / `index.html` / package convention:
  `sketches/base-triangle/`.

## Verification

1. Build the sketch: `bun run sketch post/bloom`. Confirm it compiles (the
   trivalibs edits compile within the sketch build, which pulls
   `trivalibs/src`).
2. Regression: in `trivalibs/`, `bun run examples:build` and confirm
   `examples/mipmaps` still builds with unchanged output (Change 1 leaves
   shape-only panels alone; Change 2 only changes the format arg, identical for
   preferred-format panels).
3. Visual: `bun run dev`, open `post/bloom`. Expect the 3 bright circles to glow
   with a soft halo while the 3 dim circles stay crisp; the halo should pulse
   with `uBlurRadius`. If the whole frame is a flat uniform blur, Change 1
   didn't take (chain is being clobbered).
4. Tweak `uThreshold` / `uBloomIntensity` constants to sanity-check ranges.
