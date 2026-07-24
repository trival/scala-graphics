# Porting the Rust `textures/` shaders to Scala DSL sketches

Status: **planning** · Scope: 3 new sketches under `sketches/textures/`

## Context

The old Rust painter repo had a `sketches/textures/` group of procedural,
full-screen texture shaders. We want three of them recreated as trivalibs
sketches under a new `sketches/textures/` parent folder: **lines_1**,
**moving_plates**, **pool_tiles**. Each is a single panel with a single
full-screen `layerShade` (fragment-only) — no geometry. The bulk of the work is
translating each Rust `shader(uv, size, time) -> Vec4` into the Scala shader
DSL, faithfully (same hashes, noise, constants, and sort/loop logic) so the
visuals match the originals.

Rust source (reference only, in this repo):
`trivalibs/documents/rust-painter/repomix-sketches.xml`

- `lines_1` → lines 1074–1161
- `moving_plates` → lines 1247–1379
- `pool_tiles` → lines 1382–1438
- shared helpers `aspect_preserving_uv` (2066), `rounded_rect`/`_smooth`
  (2126–2147)

## What already exists (reuse, don't rewrite)

All math/primitive helpers already exist in the trivalibs shader lib:

- **Hashing** `trivalibs.graphics.shader.lib.random.Hash` — `hash1(UInt)`,
  `hash2(UVec2)`, `hash21(UVec2)`. Rust `x as u32` (numeric truncation) →
  `.toU32`; Rust `.to_bits()` (bit reinterpret) → `.bitsToU32` (both on
  `FloatExpr`/`Vec2Expr`, from `graphics/math/gpu/int_expr.scala`). There is no
  `hash21f`; call `Hash.hash21(v.bitsToU32)` directly — **no library change
  needed**.
- **Noise** `...lib.random.Simplex` — `simplexNoise2d(Vec2)`,
  `simplexNoise3d(Vec3)`.
- **Color** `...lib.color.Color` — `hsv2rgb`, `hsv2rgbSmooth`.
- **Polar** `...lib.coords.Polar` — `cartToPolar` (→ `(radius, angle)`),
  `polarToCart`.
- **FloatExpr/Vec ops** (`graphics/math/gpu/float_expr.scala`): `fract`,
  `round`, `floor`, `abs`, `sin`, `cos`, `pow`, `min`, `max`, `clamp01`, `mix`,
  `step`, `smoothstep`, `fit0111`, `fit1101`, `mat2x2` constructor +
  `Mat2Expr * Vec2Expr`.
- **Control flow** (`graphics/math/gpu/expr.scala`): `when`, `ifElse`,
  `ifChain(..).elseIf(..).elseDo(..)`, and branchless select. Prefer the
  **extension form `cond.select(onTrue, onFalse)`** (expr.scala:489) — it reads
  clearer and matches Rust's `if cond { onTrue } else { onFalse }` arg order (the
  free `select(onFalse, onTrue, cond)` is the same thing, reversed).

### Loops: Scala-level, unrolled at build time

The DSL is expression/AST-based (each op emits WGSL), so a **Scala-level
`for`/`while` loop at build time generates (unrolls) the WGSL** — exactly how
`Noise.fbm3` (`src/shaders/Noise.scala`) folds octaves with a Scala `while`
accumulating into a `var acc: FloatExpr`. Every Rust `for i in 0..n` /
fixed-size array becomes a Scala loop over a build-time `Array`/`Arr` of
exprs/locals that emits statements into the `Block`; nothing is hand-copied per
iteration. `Block(stmts*)` accepts a splatted build-time `Seq[Stmt]`.

Gotcha: when a Scala loop emits statements that reassign a `Var*` local inside a
`when`, declare that local's first `:=` at the function/block top level (before
the loop) so the emitted WGSL `var` isn't scoped inside the `if`.

### Helpers are inline Scala `def`s (like Rust closures)

Because the DSL is AST/expr-based, a plain local Scala `def` that returns an
`Expr` inlines its body at each call site — the same role Rust's local closures
play in these shaders. So the Rust closures (`color`, `compute_line`,
`quadrant_color`, `tile`, …) map directly to local Scala `def`s returning
`Vec3Expr`/`FloatExpr` (see `Noise.fbm3`, and `circle` in `Bloom.scala:56`).
Default to these. Reserve `WgslFn.dsl` (an actual emitted WGSL function) for the
cases where it earns its keep: a value that must be computed **once** as a `let`
and reused, or a body called from **several branches** where inlining would
duplicate a lot of WGSL — e.g. moving_plates' `quadrantColor` (called from 4
`ifChain` arms). When an inline `def` needs a compute-once value, bind it to a
`Let*` in the emitting loop and pass the expr into the `def`.

## Canonical patterns to follow

- `layerShade` + `res: Vec2` / `time: Float` uniforms + `onResize` + `animate`:
  `sketches/tests/bloom/Bloom.scala:38-92,112-153`.
- Inline Scala-`def` expression helpers + unrolled `while` in
  `sketchlib.shaders`: `src/shaders/Noise.scala` (`Noise.fbm3`).
- Sketch skeleton + `index.html`: `sketches/base-triangle/`.
- `WgslFn.dsl[params, Ret]("name"): (a, ret) => Block(...)` with `Let*`/`Var*`
  locals, auto-registers callees:
  `trivalibs/src/graphics/shader/dsl/fn.scala:99-127`.

## Decisions

- **Fidelity:** faithful match to the Rust output.
- **Shared helpers live in `sketchlib.shaders` (`src/shaders/`)**, following
  bundle discipline (build-time expression emitters, like `Noise.fbm3`).
- Rust `frame` is seconds; feed `time += tpf * 0.001` in `animate`.

## Library addition: `.rem` (floored / euclidean remainder)

WGSL's `%` is the **truncated** remainder — its sign follows the dividend, so
`(-1.0) % 3.0 == -1.0`. There is **no builtin euclidean modulo**. Rust's
`NumExt::rem` is euclidean: always in `[0, |b|)` for any sign of `a`/`b`, which is
what these shaders rely on. It's a genuinely useful, reusable op, so add it to the
library as the generic euclidean form (`abs` on the divisor, so it holds for
negative divisors too — not just the positive constants used here):

- **gpu `FloatExpr.rem(other)`** in `trivalibs/src/graphics/math/gpu/float_expr.scala`
  (alongside `fit1101`/`clamp01`), emitting
  `${a} - floor(${a} / abs(${b})) * abs(${b})`. This is what pool_tiles calls:
  `(…).rem(3.0)`.
- **CPU `NumExt.rem`** in `trivalibs/src/utils/numbers.scala` (the trait at
  ~L79 + its Double/Float impls) for CPU parity, body
  `a - (a / b.abs).floor * b.abs`.

(Both live in the `trivalibs/` submodule — the one library change this task
makes, justified per "add the feature to trivalibs" convention.)

## Files to create

### 1. Shared shader helpers (`src/shaders/`, package `sketchlib.shaders`)

- `src/shaders/Uv.scala` — `object Uv`:
  - `def aspectPreserving(uv: Vec2Expr, size: Vec2Expr): Vec2Expr` — emits
    `aspect = size.x/size.y; (aspect > 1).select(uv*vec2(1,1/aspect), uv*vec2(aspect,1))`.
    Used by all 3 sketches; `size` comes from a `res: Vec2` uniform.
- `src/shaders/Shapes.scala` — `object Shapes` (used by moving_plates):
  - `def roundedRect(st, center, size, radius): FloatExpr` —
    `offset = size/2 - radius; d = max(abs(st-center)-offset, vec2(0)).length; radius.step(d)`.
  - `def roundedRectSmooth(st, center, size, radius, smoothness): FloatExpr` —
    same `d`, then `d.smoothstep(radius + smoothness/2, radius - smoothness/2)`
    (edges inverted, matching Rust: inside → 1).

### 2. Three sketches under `sketches/textures/`

Each dir gets `<Name>.scala` + `index.html` (copy `base-triangle/index.html`,
update `<title>`; `main.js` is build output). Common shape:

```scala
package sketches.textures.<name>
// imports as in base-triangle, plus lib.random/color/coords + sketchlib.shaders
@main def <name>(): Unit =
  Painter.init(canvas): p =>
    type U = (res: Vec2, time: Float)
    val uRes = p.binding[Vec2]; val uTime = p.binding(0.0)
    val shade = p.layerShade[U]: program => program.frag: ctx => Block( ... )
    val panel = p.panel(layer = p.layer(shade).bind("res" := uRes, "time" := uTime))
    p.onResize: (w, h) => uRes.set(Vec2(w, h))
    var time = 0.0
    animate: tpf => time += tpf * 0.001; uTime.set(time); p.paintAndShow(panel)
```

**`sketches/textures/pool-tiles/PoolTiles.scala`** (`@main def poolTiles`) — no
loops, direct translation of `pool_tiles.rs`:

- two ripple "drops" via `Polar.cartToPolar`/`polarToCart` (radius perturbed by
  `sin(radius*k - t*s).pow(n) * amp`), then `uv - 0.5`, per-axis `mix`
  tile-scale, `mat2` rotation by `simplexNoise2d(vec2(t*0.006))*2`, simplex xy
  offset `*33`, `idx = floor(uv)`.
- `rnd = Hash.hash21(idx.bitsToU32)`; `n = simplexNoise2d(idx*0.2).fit1101`;
  `test = n*0.7 + rnd*0.3`;
  `val = ((rnd.fit0111*0.7).round + idx.x + 50*idx.y).rem(3.0)` (new `.rem`);
  `tileRnd = Hash.hash1(val.toU32 + 345.u)`.
- `(test > 0.5).select(hsv2rgb(warm), hsv2rgb(cool))`, output
  `vec4(color.pow(2.2), 1)`.

**`sketches/textures/lines/Lines.scala`** (`@main def lines`) — port
`lines_1.rs`, `LINE_COUNT = 20`:

- `lineSegment = floor(uv.x*20)`, `lineX = fract(uv.x*20).fit0111`.
- Scala-`def` expression helpers closing over `uv`/`time`:
  `lineColor(seg) = vec3(hash1((seg*3*20).toU32), hash1((seg*7*20).toU32), hash1((seg*11*20).toU32))`;
  `lineHeight(seg) = hash1((seg*20).toU32)`;
  `lineIntensity(seg, x) = (x + simplexNoise3d(vec3(seg, uv.y + time*0.1, time*0.07))*1.3).abs.smoothstep(0.7, 0.6)`.
- Represent each line as `VarVec4` = `(intensity, colorR, colorG, colorB)` + a
  `VarFloat` height, held in a Scala `Array` of `(VarVec4, VarFloat)` slots. A
  **pass** builds 3 lines (curr/prev/next with Rust's segment & lineX offsets),
  then bubble-sorts by height with branchless compare-swaps: a Scala loop over
  the pair sequence `(0,1),(1,2),(0,1)` emits each compare-swap (temp `Let`s via
  `(h_a > h_b).select(..)` → reassign both slots); then a Scala loop blends onto
  the running
  color with `col := col.mix(line.color, line.intensity)` in sorted order. A
  Scala loop over the **3 pass offsets** (0, 100, 200) emits all three passes,
  starting from `col := vec3(1)`.
- Output `vec4(col.pow(2.2), 1)`.

**`sketches/textures/moving-plates/MovingPlates.scala`**
(`@main def movingPlates`) — port `moving_plates.rs`, `NUM_TILES = 15`. The hard
one. `tile` is a plain inline Scala `def`; `quadrantColor` is a `WgslFn.dsl`
(called from 4 `ifChain` arms, so a real WGSL fn avoids 4× duplication):

- `def tile(r: Vec2Expr, t): Vec3Expr` packs `(hue, height, lightness)` from an
  already-bound `r` — `hue = fract(r.x + t*0.01)`,
  `height = cos(t*(r.x+0.2) + r.y).fit1101`, `l = r.y*r.x*0.4`,
  `lightness = (r.y > 0.5).select(1-l, l)`. The neighbor-building loop emits a
  `LetVec2 r_i := Hash.hash2((idx_i*17.123411).bitsToU32)` per tile so each hash
  is computed **once**, then calls `tile(r_i, t)`.
- `quadrantColor(uvTile, cc, t1, t2, t3, dir1, dir2, dir3) -> Vec3` (all
  `Vec3`/`Vec2` params): hold the 4 tiles + 4 scaled uvs
  `(uvTile - dir_i) * (1 - height_i*0.14)` in a Scala `Array`; `Var` locals
  `gHeight`/`gHue`/`gLight`/`miss` declared at function top (init to `cc` /
  `miss=1`). A **Scala loop over the 4 slots** emits each ground-pick step
  `when(height_i >= gHeight && Shapes.roundedRect(uv_i, 0, 1, 0.2) > 0.5, { update ground; miss:=0 })`;
  a **second Scala loop** emits shadow accumulation into `shadow` (`VarFloat`)
  via
  `when(height_i > gHeight, shadow += Shapes.roundedRectSmooth(uv_i, 0, 1, 0.2, (height_i-gHeight)*0.7).pow(0.9))`;
  return
  `(miss > 0.5).select(vec3(0), hsv2rgbSmooth(vec3(gHue, 0.7+gHeight*0.15, (gHeight*0.45+0.55)*(gLight*0.9+0.1))).mix(vec3(0), (shadow*0.7).clamp01))`.
- Frag body: `uv = Uv.aspectPreserving(...)`, `uvScaled = uv*15`,
  `uvTile = fract(uvScaled)-0.5`, `idx = floor(uvScaled)+11`; compute `cc` + 8
  neighbor tiles as `LetVec3`; pick the quadrant with `ifChain` on
  `uvTile.x`/`.y` signs, each calling `quadrantColor` with the Rust-specified
  neighbor/dir triples into a `VarVec3 col`; output `vec4(col.pow(1.2), 1)`.

## Verification

- Build each (dev server on :3000 assumed running, hot-reloads `main.js`):
  `bun run sketch textures/pool-tiles`, `bun run sketch textures/lines`,
  `bun run sketch textures/moving-plates`. All must compile cleanly.
- Visually confirm each against the Rust reference in the browser: pool-tiles =
  animated rippled tile grid; lines = 20 wavy colored vertical line bands on
  white; moving-plates = animated plate quadrant field with shadows.
- Watch the console for WGSL validation (naga) errors — usual failure mode if an
  unrolled `Var` was first-assigned inside a `when`, or a value category
  mismatches.
- Per project convention: prefer natural DSL expressions; if any needs a
  `: FloatExpr`/`: Vec3Expr` ascription to compile, treat it as a possible
  library-API gap and flag it before settling for the annotation.
