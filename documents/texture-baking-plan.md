# Texture baking helper — generalize prebaking a texture from geometry

## Implementation status — ✅ done

Implemented and verified. The plan below is kept as the design record; it
predates a `src/` restructure, so file paths / namespaces in it are stale. What
actually shipped:

- **Helper:** [src/utils/bake/Bake.scala](../src/utils/bake/Bake.scala), package
  **`sketchlib.utils.bake`** — _not_ the planned `src/playground/bake/` /
  `playground.bake`. The shared-sketch-utility tree was restructured to `src/`
  under the **`sketchlib.*`** namespace (`sketchlib.utils.*` for painter-level
  helpers, `sketchlib.shaders.*` for shader-DSL blocks); `bloom` / `mirror` moved
  alongside as `sketchlib.utils.bloom` / `sketchlib.utils.mirror`.
- **Two fragment forms split by name, not overload:** as the plan's fallback
  anticipated (both erase to `(Painter)(Function)`), the factory is
  `TextureBaker.apply` (expression form) + **`TextureBaker.block`** (block form).
  The block form's `color` handle is typed **`AssignTarget`** (assigned via
  `:=`).
- **One-shot convenience split likewise:** `TextureBaker.bake` (expression) +
  **`TextureBaker.bakeBlock`** (block) — two helpers, not the single `.bake` the
  plan sketched.
- **Schemas, vertex stage, transform/normal handling, `apply` signature** match
  the design (incl. the uniform-scaling-only constraint, documented in scaladoc).
- **Verification lives in the `sketches/tests/` folder** as planned:
  [sketches/tests/texture-bake/TextureBake.scala](../sketches/tests/texture-bake/TextureBake.scala)
  (rotating box, one baker reused across all six faces, FBM noise + normal tint)
  and the moved [sketches/tests/bloom/](../sketches/tests/bloom/). The old
  `sketches/post/bloom/` is gone.
- **Known limitation (transient resources not freed)** stands — the general fix
  is parked in
  [trivalibs/documents/independent-todos.md](../trivalibs/documents/independent-todos.md);
  prebaking will not free its binding for now.
- **Not done (optional, by design):** the rooms-sketch migration
  (`rooms/canvases` → baker) under _Optional follow-up_ remains a separate,
  unstarted task.

## Context

Three sketches (`rooms/canvases`, `rooms/base`, `rooms/grid-ceiling`, plus
`rooms/canvases/Wall.scala`) all hand-roll the same "bake a procedural texture
from a face's geometry" pipeline:

- a **vertex shader** that lays each face out flat by its UV
  (`out.position := vec4(vec2(uv.x, 1.0 - uv.y).fit0111, 0, 1)`) while passing
  the real **world position** through to the fragment stage;
- a **fragment shader** that computes color from that world position;
- `p.shape(form, shade, cullMode = CullMode.None)` +
  `p.panel(width, height, mips, format, shape)` to render it once into an
  offscreen texture.

We want a reusable helper that removes this boilerplate, and — as a **new
capability** none of the sketches have yet — also passes the **surface normal**
to the fragment, so prebaked light/texture maps can shade by orientation. This
will be used heavily going forward, so a clean shorthand matters.

This is **not** a core-library rendering feature — it only removes boilerplate
over existing painter primitives. So it lives **sketch-side** in
`src/playground/` (package `playground.bake`), alongside the other reusable
sketch utilities (`playground.bloom`, `playground.mirror`). `src/` is already a
build input for every sketch (`scripts/sketch.ts:34`), so any sketch can import
it with no build change.

Although it lives outside `trivalibs/`, this is **shared infrastructure** used
across several sketches, not one-off sketch logic. So the internals should
follow the library's **bundle-size discipline** (per `trivalibs/CLAUDE.md`):
prefer `Arr`/`Dict`/`Maybe`/`Opt` and native JS over Scala stdlib, `while` loops
over `for`-comprehensions, no `enum`/`Option`/collection traits in any runtime
path, etc. Keep it lightweight and performant like `Bloom`/`MirrorReflection`
already are.

## Purpose (what a prebaked texture is for)

A prebaked texture **caches a compute-intensive per-pixel result** that would be
wasteful to recompute every frame — today FBM 3D noise lightmaps, later other
expensive algorithms. **Cheap** per-material parameters (tint, simple
modulation) do _not_ belong in the bake: they go into the **runtime** shader
that samples the baked texture. So the baker only needs the expensive
geometry-space computation and has no use for general per-bake uniforms.

## Decisions taken with the user

- **Fragment API: explicit params, no general uniforms.** The fragment is a
  Scala function of `(worldPos, normal, uv)` only — it bakes one expensive
  result. Any cheap tinting/modulation is applied later in the runtime shader,
  not here. Tunables internal to the algorithm are closed-over Scala constants
  baked into the WGSL. (A uniform schema could be added later if ever needed —
  the design leaves room — but it is explicitly out of scope now.)
- **World/model matrix: always an internal vertex-stage uniform** (one shade =
  one pipeline, cached and reused across baker calls). Each baker _call_ gets
  its own `Mat4` buffer binding, defaulting to identity; an optional `transform`
  argument sits alongside geometry + size in the baker call. The matrix is
  internal — it is _not_ exposed to the fragment, so "no uniforms" still holds.
- **Attribute layout fixed by the factory:** `(position, uv, normal)`. Normals
  are cheap to attach via `toBufferedGeometry(..., MeshBufferType.*WithNormal)`,
  so requiring them is fine.

## Design

New file: `src/playground/bake/Bake.scala` (package `playground.bake`),
following the `Bloom` / `MirrorReflection` playground style — a small class
constructed from the `Painter`.

### Fixed schemas

```scala
type BakeVertex   = (position: Vec3, uv: Vec2, normal: Vec3)
type BakeVaryings = (worldPos: Vec3, normal: Vec3, uv: Vec2)
type BakeUniforms = (model: VertexUniform[Mat4])   // internal, vertex-only
```

### Factory → curried baker

A `TextureBaker` is constructed from the `Painter` plus the fragment function;
it builds the shade once (one pipeline) in its constructor and its `apply`
renders any geometry to a `Panel`. Two factory overloads on the `TextureBaker`
companion cover the two fragment return styles requested:

```scala
object TextureBaker:
  // expression form — single Vec4 result:
  def apply(p: Painter)(
      frag: (worldPos: Vec3Expr, normal: Vec3Expr, uv: Vec2Expr) => Vec4Expr
  ): TextureBaker

  // block form — multi-statement bodies (FBM noise, etc.); `color` is the
  // fragment-output handle the user assigns as the last statement:
  def apply(p: Painter)(
      frag: (worldPos: Vec3Expr, normal: Vec3Expr, uv: Vec2Expr, color: <out.color>) => Block
  ): TextureBaker
```

(Both overloads have the same erased shape `(Painter)(Function)`, so if Scala
overload resolution can't separate them by the function arity, split the names —
e.g. `TextureBaker.expr` / `TextureBaker.block` — rather than forcing an
annotation.)

Internally the constructor calls
`p.shade[BakeVertex, BakeVaryings, BakeUniforms]`:

- **vert** (generated, identical for both forms):
  - `out.worldPos := (model * vec4(in.position, 1.0)).xyz`
  - `out.normal := (model * vec4(in.normal, 0.0)).xyz.normalize` — transforms
    the normal by the model's 3×3 (w = 0 drops translation), then renormalizes.
    **Constraint: `transform` must use uniform scaling only** (rotation,
    translation, uniform scale). Non-uniform scale / shear would mis-transform
    normals — that needs an inverse-transpose normal matrix, which we do **not**
    build. This constraint must be **called out prominently in the scaladoc** of
    `transform` / the factory.
  - `out.uv := in.uv`
  - `out.position := vec4(vec2(in.uv.x, 1.0 - in.uv.y).fit0111, 0.0, 1.0)`
- **frag**: expression form →
  `Block(out.color := frag(in.worldPos, in.normal, in.uv))`; block form → return
  `frag(in.worldPos, in.normal, in.uv, out.color)` directly (the user's `Block`
  already assigns `color`).

The `out.color` handle passed to the block form is `ctx.out.color`
(`TypedAssignAccessor` field, `program.scala:103`); `:=` on it emits the output
write.

### The baker

```scala
class TextureBaker private (p: Painter, shade: Shade[BakeUniforms, EmptyTuple]):
  def apply(
      form: Form,
      width: Int,
      height: Int,
      transform: Maybe[Mat4] = Maybe.Not,             // CPU Mat4, default identity; UNIFORM scaling only
      format: Maybe[TextureFormat] = Maybe.Not,        // default Rgba8Unorm
      mips: Boolean = true,
  ): Panel =
    val model = p.binding(transform.orElse(Mat4.identity))
    val shape = p.shape(form, shade, cullMode = CullMode.None).bind("model" := model)
    val panel = p.panel(width = width, height = height, mips = mips,
            format = format.orElse(TextureFormat.Rgba8Unorm), shape = shape)
    p.paint(panel)   // bake once, here — caller gets a ready-to-sample texture
    panel
```

Notes:

- Each call makes its **own** `model` buffer binding (set once, static) so
  shapes keep distinct transforms while sharing the one shade/pipeline.
- The baker **paints the panel itself** and returns the ready-to-sample texture
  — one less thing for the caller to remember. (The bake is a one-time static
  render; the small cost of a paint call per bake vs. batching several into one
  `p.paint(a, b, …)` is negligible for startup-time texture baking.)
- **Known limitation — transient GPU resources are not freed.** After the
  one-time paint, the per-bake `model` `BufferBinding` (a 64-byte Mat4 buffer)
  and the `Shape` are never used again, yet they stay resident. `GPUBuffer`/
  `GPUTexture` have `.destroy()` at the WebGPU facade (`webgpu.scala`) and
  `Form` destroys its own buffers on re-set, but **`BufferBinding` exposes no
  public destroy**, so we can't release the model buffer today. Negligible for a
  handful of bakes — **fine for now**, and prebaking will not free its binding
  for the foreseeable future. The general fix (explicit GPU resource freeing
  across the painter) is parked in
  [trivalibs/documents/independent-todos.md](../trivalibs/documents/independent-todos.md);
  if it ever lands the baker could free the transient `model` binding after
  `p.paint`. (The baked `Panel` texture itself must persist — it's the result.)

### One-shot convenience

For a single-use bake, a companion helper builds the baker and immediately
applies it:

```scala
object TextureBaker:
  def bake(p: Painter, form: Form, width: Int, height: Int,
      transform: Maybe[Mat4] = Maybe.Not, format: Maybe[TextureFormat] = Maybe.Not,
      mips: Boolean = true)(frag): Panel =
    TextureBaker(p)(frag).apply(form, width, height, transform, format, mips)
```

(Naming `TextureBaker` / `.bake` is a proposal — easy to rename; the factory
genuinely returns a reusable baker, as requested.)

## Critical files

- **New:** `src/playground/bake/Bake.scala` (package `playground.bake`) — the
  fixed schemas, the `TextureBaker` class, the two factory overloads, and the
  `.bake` one-shot. Pure sketch-side code; mirror the structure of
  `src/playground/bloom/Bloom.scala` /
  `src/playground/mirror/MirrorReflection.scala` (class constructed from
  `Painter`, builds its shade in the constructor).
- **Reference (trivalibs, consumed — do not edit):**
  `trivalibs/src/graphics/painter/painter.scala` — `shade` (`:204`), `shape`
  (`:675`), `panel` (`:730`), `binding` (`:655`), `form` (`:638`);
  `program.scala:42` (frag ctx wiring, `out.color` at `:103`); `shape.scala:34`
  (`Bindable.bind`).
- **New verification sketch:** `sketches/tests/texture-bake/` — the standalone
  demo described below. Imports `playground.bake.*`.

## Verification sketches (`sketches/tests/`)

Introduce a `sketches/tests/` folder as the home for sketches that **verify a
shared `playground.*` utility** (as opposed to creative/experiment sketches).
Each is a normal sketch (own `index.html` + `main.js`), discovered by Vite like
any other; add its link to `sketches/index.html`.

**Move the existing bloom demo in:** `sketches/post/bloom/` →
`sketches/tests/bloom/` (it already exists to exercise the `playground.bloom`
helper). Steps: move the dir; rename its package `sketches.post.bloom` →
`sketches.tests.bloom`; update the `/post/bloom/` link in `sketches/index.html`
to `/tests/bloom/`; remove the now-empty `sketches/post/`; rebuild
(`bun run sketch tests/bloom`).

**New baker demo — `sketches/tests/texture-bake/`** (package
`sketches.tests.texture_bake`): render a **rotating box in a normal 3D scene**
(camera + MVP) whose face textures are produced by the baker.

- Build the box mesh with `(position, uv, normal)` attribs
  (`toBufferedGeometry(..., MeshBufferType.FaceVertices…WithNormal)`).
- One `TextureBaker` whose fragment computes **3D noise sampled at `worldPos`**
  and **tints by `normal`**, reused across the **6 faces** → 6 baked panels
  (this also exercises the curried "one shade, many geometries" path).
- The box's runtime shade samples each face's baked panel by `uv`.
- **What it verifies:** (a) **spatial continuity** — because the noise is
  sampled in world space, the pattern lines up **seamlessly across adjacent
  faces** with no edge discontinuity; (b) **normal-based tint** — the new normal
  input visibly tints each face by its orientation; (c) the curried baker reused
  across several geometries.

## Optional follow-up: adopt in the rooms sketches

Separately (not part of verification), migrate
`sketches/rooms/canvases/Canvases.scala` to the baker to confirm it fits a real
sketch. Under the purpose decision the expensive FBM noise is what gets baked;
cheap tint/halo/shadow modulation moves to the runtime shader that samples the
baked map. This surfaces whether the split is comfortable before rolling it out
to `rooms/base` and `rooms/grid-ceiling`.

## Verification

1. `bun run sketch tests/texture-bake` from the repo root — confirms
   `src/playground/bake/` type-checks and compiles as part of a real sketch
   build (there is no isolated check for `src/` alone; building a consuming
   sketch is the check). Also `bun run sketch tests/bloom` to confirm the move
   compiles.
2. In the already-running `bun run dev`, open `tests/texture-bake` — confirm the
   noise is **continuous across the box's face edges** (spatial continuity) and
   each face is **tinted by its normal**; check `tests/bloom` still renders.

## Open questions / iteration notes

- Naming: `TextureBaker` (class/factory) / `.bake` (one-shot) — bikeshed freely.
- Should the baker also accept a `Mesh` directly (auto-buffering with a
  normal-generating `MeshBufferType`) as a convenience, or always a prebuilt
  `Form`? Current plan: `Form` only, keep it explicit.
- **Transforms are restricted to uniform scaling** (rotation + translation +
  uniform scale). Non-uniform scale / shear would mis-transform normals (no
  inverse-transpose normal matrix is built). Highlight this in the scaladoc.
  Revisit only if a real bake needs non-uniform scale.
