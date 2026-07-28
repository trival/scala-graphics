# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

This repo is the **sketch / experiment playground**. It is a consumer of the
`trivalibs` library (included as a git submodule under `trivalibs/`). The
graphics / math / shader-DSL / painter code lives in trivalibs. When an
experiment evolves into a feature-documenting example, it migrates over to
`trivalibs/examples/`.

For library development, optimization, and the full architecture reference, see
`trivalibs/CLAUDE.md`.

## Build & Dev Commands

```bash
bun run sketch <path>        # Build one sketch → sketches/<path>/main.js
bun run sketch:watch <path>  # Incremental build of one sketch with file watching
bun run dev                  # Vite dev server (root: sketches/, port 3000)
bun run build                # Vite static build → dist/
```

Each sketch builds in isolation via `scripts/sketch.ts`, which passes only that
sketch dir + `trivalibs/src` + `project.scala` to scala-cli — never a bare `.`.
Never use sbt.

Assume the Vite dev server (`bun run dev`, port 3000) is **already running** —
don't launch it yourself as part of a checkpoint/verification. Rebuilding a
sketch (`bun run sketch <path>`) is fine and produces the `main.js` the running
server hot-reloads; if the server isn't up, ask to have it started rather than
starting it.

## Sketches

Sketches live under `sketches/` — each is a self-contained directory. They can
be nested in arbitrary category folders (e.g. `sketches/geometry/voronoi/`);
`<path>` arguments to the scripts are relative to `sketches/`.

```
sketches/<path>/
├── <Name>.scala     # the sketch source
├── index.html       # loads ./main.js
└── main.js          # scala-cli output (checked into git, for now)
```

`sketches/base-triangle/` is the minimal starter — `cp -r` it to seed a new
sketch. The Scala `package` should mirror the path (e.g.
`package sketches.geometry.voronoi`).

### Kinds of sketch

Three folders are reserved by purpose; everything else keeps a domain folder.

| Kind             | Where                                                | What it is                                                                                                                                                                 |
| ---------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Template**     | `sketches/templates/`                                | Documented starting point. Enables a whole situation, meant to be read and copied.                                                                                         |
| **Test**         | `sketches/tests/`                                    | Single-feature check of a `src/` util that has real machinery and renders something on its own — `bloom`, `texture-bake`. Minimal and focused, like `trivalibs/examples/`. |
| **Experiment**   | `sketches/experiments/`                              | Unfinished or failed attempt at an idea, effect or scene. Kept as proof of concept, **not** intended to be continued.                                                      |
| _Regular sketch_ | domain folder (`rooms/`, `textures/`, `strokes/`, …) | Everything else — finished results and work in progress alike.                                                                                                             |

A regular sketch is **finished** (`rooms/canvases`, `rooms/base`, the
`textures/` and `strokes/` sketches) or **in progress** (`rooms/columns`). One
that turns out to be a tried-but-incomplete attempt moves to `experiments/`
rather than being deleted or left to look unfinished — individual aspects of it
stay extractable later.

Add a test sketch whenever a `src/` util grows past a small function into
something with its own rendering behavior; that is what makes it checkable at
all.

**Only templates carry documentation.** The shared baseline in this repo is
carried mostly by a few readable template sketches that get copied and tuned,
not by a framework — shared utilities under `src/` are a thin layer for the
parts nobody wants to re-read or re-derive.

- **Templates** live under **`sketches/templates/`** and are meant to be opened
  cold, by humans and by AI agents, and copied. They explain non-obvious
  decisions in comments beside the code, make clear which constants are tunable
  and which are structural, and record deliberate _non_-decisions — why an
  effect was left out — where an editor will hit them. The longer "why" goes in
  a sibling `PLAN.md`. Say so in the file header too.

  They work like `trivalibs/examples/` one scale up: an example exercises a
  single library feature, a template enables a whole **situation** and shows the
  relevant features in idiomatic interconnection, each with an account of what
  it tunes. As with examples, **templates are additive** — a variant setup
  (different structure, an extra effect) becomes a **new template kept
  alongside**, not a flag on an existing one, and existing templates keep
  working. `sketches/base-triangle/` is the trivial one; a room-template family
  is being built deliberately (see `documents/grid-ceiling-rooms-plan.md`).

- **Everything else** — regular sketches, experiments, tests — does **not**.
  This is most of `sketches/`, including `rooms/canvases/`. Comment them
  normally and sparsely. A multi-line prose justification attached to code that
  is obvious to its author is exactly the noise trivalibs is designed to
  eliminate: the whole library exists to keep the signal-to-noise ratio of
  graphics prototyping high, and explanatory ballast works directly against
  that. Their constants also change constantly while tuning, so prose about them
  goes stale quickly.

Do not turn a regular sketch into a template by commenting it. If it turns out
to be worth reusing, that is the moment to make a deliberate template out of it,
with all sketch specific details removed.

Sketches are **user code**: Scala convenience shorthands (`for`-comprehensions,
string interpolation, etc.) are fine in one-off sketch code under `sketches/` —
readability wins, and the bundle cost is local to one sketch. The strict
bundle-size discipline applies to library code in `trivalibs/` (see
`trivalibs/CLAUDE.md`) — and to shared sketch utilities under `src/` (see
below), but not to individual sketches.

Two qualifications to that latitude:

- **No `enum`, even in sketch code.** A Scala `enum` compiles to a class
  hierarchy plus `$values` / `ordinal` / `fromOrdinal` machinery — that is
  runtime weight for something that wants to be a constant, not a readability
  convenience. Use the opaque-type pattern instead
  (`trivalibs/src/graphics/painter/enums.scala`), aliasing whatever type the
  value is actually _used_ as: `String` when it crosses into WebGPU, `Double`
  when it is arithmetic, `Int` when it indexes.

  ```scala
  opaque type Facing = Double
  object Facing:
    val Inward: Facing = 1.0
    val Outward: Facing = -1.0
    extension (f: Facing) inline def sign: Double = f
  ```

- **Code you already know is headed for `src/` should be written to library
  discipline from the start**, even while it still lives in a sketch. Sketch
  latitude is for one-off code; when a plan explicitly names a cluster as a
  future extraction candidate, that cluster is library code that has not moved
  yet. Applying the discipline up front costs nothing and avoids a rewrite at
  extraction time. This is a per-region judgement, not a per-file one — the same
  sketch can hold a disciplined core and convenient one-off code around it.

## Shared sketch utilities (`src/`)

Reusable helpers shared across multiple sketches live under `src/` in the
`sketchlib.*` namespace (the package mirrors the path below `src/`). `src/` is a
scala-cli build input for every sketch (`scripts/sketch.ts`), so any sketch can
import `sketchlib.*` with no build change. Two subnamespaces:

- `sketchlib.utils.*` (`src/utils/`) — larger painter-level building blocks,
  each a small class/trait constructed from the `Painter` (e.g.
  `src/utils/bloom/Bloom.scala` → `sketchlib.utils.bloom`, `src/utils/mirror/`,
  `src/utils/bake/`).
- `sketchlib.shaders.*` (`src/shaders/`) — reusable shader-DSL blocks:
  build-time helpers that assemble WGSL expressions from trivalibs primitives
  (e.g. `Noise.fbm3`).

Unlike one-off sketch code, these are **shared infrastructure compiled into many
sketches**, so they follow the same **bundle-size discipline as the trivalibs
library** (see `trivalibs/CLAUDE.md`): prefer `Arr`/`Dict`/`Maybe`/`Opt` and
native JS over the Scala stdlib, `while` over `for`-comprehensions, and avoid
`enum`/`Option`/collection traits in any runtime path. Keep them lightweight and
performant.

## Using trivalibs

Sketches import from the `trivalibs.*` namespace:

- `trivalibs.graphics.math` — Vec2–4, Mat2–4
- `trivalibs.graphics.shader` / `.shader.dsl` / `.shader.lib.*` — shader DSL
- `trivalibs.graphics.buffers` — typed buffer bindings
- `trivalibs.graphics.geometry` / `.scene` — geometry + scene graph
- `trivalibs.graphics.painter` — the Painter abstraction (incl. WebGPU facades)
- `trivalibs.utils.*` — JS helpers, numeric extensions, `animate`, bufferdata
- `trivalibs.preact` — type-safe Preact bindings for the interactive DOM layer

Prefer the trivalibs helpers (`Arr`, `Dict`, `Opt`, `Obj.literal`, `maybe()`)
over raw `js.*` / Scala stdlib even in sketch code — they keep the API
consistent and they compile to native JS.

When writing new shader code, prefer the Scala shader DSL over raw WGSL strings.

If a sketch needs a trivalibs feature that doesn't exist yet, add it in the
`trivalibs/` submodule (see `trivalibs/CLAUDE.md`).

## project.scala

`project.scala` is this repo's only scala-cli config. It pulls in
`trivalibs/src` and excludes the submodule's own standalone-workspace files so
Metals only loads one config:

```scala
//> using exclude trivalibs/project.scala
//> using exclude trivalibs/test/**
//> using exclude trivalibs/examples/**
```

## Scala Conventions

- make use of named tuples @trivalibs/documents/scala-reference/named-tuples.md
- use new given syntax: @trivalibs/documents/scala-reference/given-syntax.md
- never put multiple statements on the same line, even if they are short. We
  don't want semicolons anywhere in Scala.
- the same one-statement-per-line rule applies to WGSL bodies in shader strings
  (`WgslFn.raw` bodies, `ShaderDef` bodies, etc.). Each statement gets its own
  line — no collapsing pairs of statements onto a single line.
- when working with typeclasses, use [T: Typeclass] notation instead of
  [T](using Typeclass[T]) where possible
- When doing floating point math, prefer trivalibs NumExt extensions instead of
  math library methods if possible. I.e. `x.sin` instead of `math.sin(x)`,
  `x.sqrt` instead of `math.sqrt(x)`, etc.
- **`u` / `v` / `uv` mean normalized `[0,1]` texture coordinates — nothing
  else.** A parameter carrying world units (meters) gets an explicit name saying
  what it measures and from where: `centerHeight`, `centerFromLeft`,
  `heightAboveFloor`. The two conventions routinely meet inside one function
  body — a hang position in meters next to a genuinely normalized rect — and
  reusing `u`/`v` for both is how that becomes a bug rather than a style
  quibble. The same rule catches texture coordinates scaled by world distance:
  if `u` can exceed 1, it is not a UV.
- in sketches and shader dsl, don't use Float type, literals with `f` suffix or
  .toFloat conversions. Just use Double and let the shader DSL and painter lib
  handle the conversions. In JS context all numbers are doubles, and all
  trivalibs maths/graphics APIs are optimized for that.
- **Shader DSL: never reach for type-ascription casts as a first move.** Write
  expressions naturally — `0.5`, `(1.0 - uv.y)`, `band * vec3(...)` — without
  `: FloatExpr` or `: Vec3Expr` annotations. If a natural-looking expression
  doesn't compile, treat that as a missing library overload / conversion in
  `trivalibs/` and check with me before settling for the annotation. Adding the
  overload library-side is preferred; the annotation is the fallback.
- **Always use US spelling "color", never "colour"** — everywhere in the project
  (Scala identifiers, comments, scaladoc, markdown docs, plan files, commit
  messages, PRs). Both `graphics/` and the `trivalibs/` submodule. The codebase
  has been swept; any new "colour" is a regression and should be rewritten in
  the same touch. The same goes for other US/UK spelling pairs: "center" not
  "centre", "meter" not "metre", "gray" not "grey", etc. Prefer US spelling in
  prose too, for consistency with the codebase.
- **Per-frame `update` methods take `tpf`** (milliseconds since the last frame,
  as `animate` provides) — not an absolute timestamp. E.g. `input.update(tpf)`,
  `controller.update(tpf)`. This keeps stepping consistent, pauses/resumes
  cleanly with the render loop, and avoids wall-clock coupling. Time-since-event
  _queries_ are the exception (e.g. `keyHeldMs`, `pointerDownMs`): they take an
  optional `now = js.Date.now()` because they measure real elapsed time. animate
  should pause increating
