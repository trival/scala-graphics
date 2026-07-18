# Mirror reflection blur — design plan

Working design doc for the mirror reflection blur utilities. We keep two
parallel implementations to compare and iterate on. Refine this file as we go.

## Context / the problem

`MirrorReflection.scala` blurs a planar reflection with a **mip-LOD pyramid**:
the resolve pass reads a sharp per-pixel plane-distance and picks a blur LOD
from it (`lod = log2(1 + t*blurStrength)`), then trilinearly samples the
pyramid. This is cheap and works for _uniform_ blur, but the blur amount is
driven by world-space distance, whose **screen-space gradient spikes under
steep/grazing perspective**. Neighbouring pixels then land on opposite sides of
a mip boundary; because each mip is an independently-blurred, coarser image,
crossing that boundary blends fundamentally different content — a visible edge
in _blurriness_ (LOD banding).

Pre-blurring the distance before LOD selection (the commented-out attempt at
`MirrorReflection.scala:303-305`) does not help: smoothing the scalar input does
not remove the discontinuity in how mips interpolate. The mip-sampling blur is a
good fit for _uniform_ blur, but when the blur shifts with distance it is a
structural blocker.

We are in an experimentation phase and want a **parallel implementation** to
compare, not a replacement.

## Approach A — mip-LOD pyramid (`MirrorReflection.scala`, existing)

- Mirror render (mip 0) → bake plane-distance into alpha → tent-blur mip pyramid
  (color + distance together) → resolve picks a per-pixel LOD from the sharp
  distance and trilinearly samples.
- **Strengths**: cheap; distance and color blur together so a blurred silhouette
  isn't re-sharpened by a crisp falloff mask.
- **Failure mode**: LOD banding under steep distance gradients (above).
- Keep intact — as the cheap uniform-blur baseline and the comparison point for
  Approach B. But it needs the milestone below to be artifact-free enough to be
  usable at all.

### Milestone A1 — ATTEMPTED AND FAILED (2026-07-19)

**Status: parked. Three fixes tried, none changed the artifact.** Approach A is
not usable as-is and is not the production surface. What follows is the record
of what was tried and what the bisection proved, so none of it gets retried.

#### Attempt 1 — dithered LOD (IGN). Failed, and the premise was wrong.

The plan assumed the banding was a contour where `lod` crosses **quantized** mip
boundaries, fixable by scattering the crossing stochastically. It isn't
quantized: the resolve samples with `p.samplerLinear`, which sets
`mipmapFilter = FilterMode.Linear` (`trivalibs/.../painter.scala:179-183`), so
`sampleLevel` already blends mip `k`/`k+1` **continuously** in `lod`. There is
no snap to dither away — the jitter just resampled the same continuous blend at
noisy positions. Result: pure added grain (IGN's raw cross-hatch weave, clearly
visible at ±0.5 and ±2.0 LOD), artifact untouched. Reverted, along with the
`Noise.ign` helper it needed.

**Lesson: dither only fixes quantized selections.** Check the sampler's
`mipmapFilter` before reaching for it.

#### Attempt 2 — smoothstepped LOD fraction (C1 ramp). Failed.

Second theory: trilinear cross-fades linearly, so apparent blurriness is C0 but
C1-discontinuous — its slope resets at each integer level, and the eye reads a
slope kink as a hard line (Mach banding). Fix was to feed the hardware a
smoothstepped fraction, `lod := l.floor + l.fract.smoothstep(0.0, 1.0)`, making
the blend derivative vanish at every boundary. One line, no extra samples.
Artifact **unchanged**. Reverted.

#### Attempt 3 — bisection by diagnostic flags. This is what we actually learned.

Temporary build-time flags in `MirrorReflection.scala` pinned the LOD and dumped
the distance channel. Three facts, all reproduced:

| Test                                       | Result                     | Conclusion                                        |
| ------------------------------------------ | -------------------------- | ------------------------------------------------- |
| Fixed `lod = 3.0` (no per-pixel variation) | artifact **still visible** | LOD selection exonerated                          |
| Fixed `lod = 0.0` (unblurred bake)         | artifact **absent**        | bake / depth→world→`t` exonerated                 |
| Alpha channel as greyscale                 | smooth gradient, no fringe | distance field is correct; defect is in **color** |

**Therefore: the artifact is created by the tent downsample/blur chain itself,
in the color channel, and grows with mip level.** It is not LOD banding at all —
the name in the original problem statement was a misdiagnosis, which is why two
fixes aimed at the LOD path did nothing.

#### Remaining candidates (untested — we stopped here and moved to B)

- **(a) Bleed against absent content.** The tent blur pulls in texels the
  reflected render never drew (clear color = transparent black), or duplicated
  border texels via clamp-to-edge. Blurring color toward black across a
  silhouette gives a rim that compounds per level. Would be fixable: clear to a
  plausible color, render wider than the visible frame, or use a
  coverage-weighted blur.
- **(b) Bilinear upsample of a low-res mip.** Mip 3 is ⅛ resolution; resolving
  it to full res bilinearly turns a high-contrast diagonal edge into an ~8px
  staircase. **Not fixable within a mip pyramid.**

**Decisive test if A is ever revisited**: set `clearColor` to bright magenta at
the constructor call. Magenta rim ⇒ (a), proven. Unchanged rim ⇒ (a) ruled out,
(b) by elimination, and the approach is structurally dead.

**Honest expectation** (unchanged, now with evidence behind it): the tent
pyramid's power-of-two levels give a chunkier large-blur character than a true
Gaussian, and max blur is capped at the top mip. Approach B blurs at full
resolution with a continuously-varying radius, which sidesteps **both**
remaining candidates — it is the likely quality winner and is now the active
path.

## Approach B — per-pixel Gaussian (`GaussianMirrorReflection.scala`, new)

Insight from the prior working WebGL ground-reflection
(`trivialspace/.../blur_with_alpha.glsl`): a **separable Gaussian whose
per-pixel radius is a smooth function of the distance stored in alpha** has _no_
discrete LOD to band on. Radius varies continuously per pixel, so steep distance
gradients produce a smooth blur gradient. It also gives clean control over
vertical-vs-horizontal blur size (anisotropy) and distance scaling — the glossy
floor effect we pursue. The WebGL original was never a rendering bottleneck.

New file `src/utils/mirror/GaussianMirrorReflection.scala`, package
`sketchlib.utils.mirror`, mirroring `MirrorReflection`'s public trait surface so
the two are swappable in `Canvases.scala`. Follows the shared-`src/` bundle-size
discipline: `Arr`, `while` loops, `Maybe`/`Opt`, no stdlib.

Pipeline — all internal panels at **sub-resolution**, factor `resolutionScale`
default `0.5`, adjustable:

1. **Mirror render** — as current: `mirrorPanel` renders `shapes` with the
   reflected VP (`uVp` under `vpName`), depth attachment on. Sub-res. MSAA off
   (blurred anyway; saves cost).
2. **Bake distance → alpha** — reuse the current bake shade almost verbatim
   (`MirrorReflection.scala:226-250`): reconstruct world pos from reflected
   depth via `uInvVp`, compute normalized signed plane distance
   `t = clamp01((n·worldPos - d)/alphaScale)`, write `vec4(colorRgb, t)`. First
   layer of the blur panel. Reads its own depth at 1:1 `fragCoord` (target ==
   mirror size — holds).
3. **Separable Gaussian cascade** — the core change. A ping-pong chain of H/V
   passes on one sub-res panel, built at construction like the blur example's
   `while d > 1.0` loop (`trivalibs/examples/blur/Blur.scala:131-154`). Each
   pass is a custom `layerShade` that:
   - samples the source **alpha** at `uv` → per-pixel distance `a`,
   - computes a per-pixel step `dist = a * effStrength + strengthOffset`, where
     `effStrength = uBlurStrength * passScale` (`passScale = scaleFactor^k`
     baked per layer; `scaleFactor` default ~0.6 — geometric decay across the
     cascade). Vertical passes multiply by `uBlurRatioVertical` (>1 ⇒ vertical
     blur wider than horizontal — **symmetric** vertical-stronger anisotropy,
     the glossy smear).
   - calls `Blur.gaussianBlur9(source, samp, uv, res, axis * dist)` — reusing
     the library kernel (`trivalibs/src/graphics/shader/lib/blur.scala:99-111`);
     `axis` is `(1,0)` for H, `(0,1)` for V. `gaussianBlur9` has no diameter
     param, so the step magnitude rides entirely in the passed direction vector
     (the same trick the blur example uses: `dir * diameter`).
   - Alpha is co-blurred through the same kernel (full `vec4`), so the distance
     mask softens in lockstep with color — no crisp falloff re-sharpening a
     blurred silhouette (automatic here; the mip impl works to preserve it).

   Pass-pair count is fixed at construction from the constructor `blurStrength`
   (max budget). Runtime `setBlurStrength` rescales within that budget via
   `uBlurStrength` (a global multiplier on every pass's `dist`); growing beyond
   the construction budget just clips the max radius.

4. **resultPanel = final cascade output**, kept at **sub-resolution**. rgb =
   blurred reflection, alpha = blurred normalized distance. Consumers
   **UV-`sample`** it (not `load`).

Runtime setters: `setBlurStrength`, `setBlurRatioVertical`, `setStrengthOffset`.
Same `paint(vp)` / camera handling as current
(`MirrorReflection.scala:346-360`).

**Resolution / resize**: `panel(...)` has no `scale` param — wire it manually.
Register `p.onResize: (w,h) => …` (`trivalibs/.../painter.scala:106`) to
`panel.set(width = (w*resolutionScale).toInt, height = …)` for every internal
panel, and update the `res` uniform (`Vec2` of the sub-res size) that
`gaussianBlur9` needs. Mirrors the blur example's `res.set(...)`
(`examples/blur/Blur.scala:250`) and the fixed-panel resize in
`examples/panel_tex/PanelTex.scala:216`.

## Consumer change — `sketches/rooms/canvases/Canvases.scala`

Switch the floor's reflection read from `load(ivec2(fragCoord.xy))`
(`Canvases.scala:539`) to a **UV `sample`** with a linear sampler, so it works
regardless of whether `reflTex` matches the target size. Same switch for any
`p.show(mirror.resultPanel)` debug path (`Canvases.scala:607`) that assumes 1:1.
This keeps **both** impls drop-in swappable by only changing the constructor
call at `Canvases.scala:505`. Add the linear sampler binding to the floor
shade's panel/uniform types as needed.

## Known shared issue — edge bleed (separate, future work)

Large kernels sample **clamp-to-edge** near screen borders and harden the blur
shape there (both impls). Planned fix: render the reflection into a
texture/viewport **wider than the visible area** so edge sampling has real
neighbours. This is also a reason consumers `sample` rather than `load` — the
reflection texture size may diverge from the target.

## Critical files

- **New**: `src/utils/mirror/GaussianMirrorReflection.scala`
- **This doc**: `src/utils/mirror/design-plan.md`
- **Edit**: `sketches/rooms/canvases/Canvases.scala` (load→sample for `reflTex`;
  constructor swap at line 505; sampler binding)
- **Reuse** (no edits): `Blur.gaussianBlur9`
  (`trivalibs/src/graphics/shader/lib/blur.scala:99`), cascade pattern
  (`trivalibs/examples/blur/Blur.scala:131-154`), bake shade
  (`MirrorReflection.scala:226-250`), `p.onResize` / `panel.set` /
  `p.samplerLinear` / `p.binding[Vec2]`.

## Verification

Assume `bun run dev` (port 3000) is already running.

1. `bun run sketch rooms/canvases` — confirm it compiles (regenerates `main.js`;
   server hot-reloads).
2. Swap the floor to `GaussianMirrorReflection` (or a toggle) and visually
   confirm: **no blurriness banding** under steep grazing angles where the mip
   impl shows hard edges; blur softens continuously with distance; vertical
   smear stronger than horizontal; contact line stays sharp.
3. Toggle back to `MirrorReflection` — both still render (swappable) with the
   `sample`-based floor read.
4. Resize the window — sub-res Gaussian panels resize (no stale size, no crash);
   reflection tracks.
5. Sanity-check cost is acceptable; note edge-bleed as expected/known, not a
   regression.

## Open experiments / iteration notes

- Refine anisotropy toward a directional (downward-only) smear if the symmetric
  vertical-stronger blur isn't glossy enough.
- Tune `scaleFactor`, pass count, `resolutionScale` for the cost/quality knee.
- Once Milestone A1 lands, put A and B side-by-side and decide which is the
  production surface vs. baseline.
