# trivial space sketches

The experimental studio of [trivial space](https://www.trivialspace.net) —
generative art and virtual art spaces for the web, written in Scala.js on
WebGPU.

Live at [sketches.trivialspace.net](https://sketches.trivialspace.net).

> **Work in progress** — everything here, the sketches as much as the libraries
> beneath them, is in active development.

## Background

Trivial space started in 2012 as an art project exploring current web
technologies as a presentation platform for **virtual art spaces**. After a
first prototype and exhibition in 2013, the focus shifted to the tooling needed
to create such spaces by code: a long research period produced a series of
interconnected libraries for real-time graphics on the web.

This repo is the current generation of that work. Its predecessor,
[sketches-old](https://github.com/trivial-space/sketches-old) (WebGL, a
TypeScript painter and Rust/wasm libs), is frozen and stays live at
[sketches-old.trivialspace.net](https://sketches-old.trivialspace.net). Work now
continues here, on
[trivalibs-scala](https://github.com/trivial-space/trivalibs-scala): a
type-safe Scala.js toolkit for WebGPU, with a Scala shader DSL, included as the
`trivalibs/` submodule.

## What happens here

This repo is the place where the trivial space project itself is
developed, along three lines:

1. **Tooling.** New library features get their first real use here, and every
   non-trivial piece of shared machinery gets a test sketch that renders it in
   isolation. Proven building blocks move down into `src/` or into trivalibs
   itself.
2. **Generative art.** Shader art, procedural textures and — one main focus —
   **paint stroke simulation**, built on the custom line geometry from
   trivalibs: brush strokes with varying width, bevels and painterly shading,
   composed into generative paintings.
3. **Virtual art spaces.** Walkable rooms and open spaces with baked surfaces,
   light, reflections and bloom — a stage being built up step by step towards a
   **virtual gallery** in which these generative works, or any other kind of
   art, can be exhibited.

The pillars feed each other: the spaces need content to show, the artworks need
a place to be shown, and both drive what the libraries have to learn next.

### Current focus: exhibition spaces as templates

The rooms are not built as one gallery but as a **stage for many exhibitions**:
each show of procedurally generated work gets its own room, re-tuned around its
content — palette, proportions, light. What stays fixed is the vocabulary
(baked world-space noise surfaces, soft corner fades, contact grime, hung pieces
with shadows, floor mirror, bloom), not its values, and what hangs where is left
entirely to the curation of each show.

To make that cheap, the room is being turned into a family of readable
**templates** in `sketches/templates/rooms/`, built on any floor plan rather
than a box: a recessed light plane behind a grid ceiling, camera confinement
from the same plan data, and free-standing partitions. So far: `grid-canvases`
(box room), `l-room` (concave plan) and `hex-partitions` (hexagon, triangular
raster, partitions). The shared plan geometry has moved into `src/utils/room/`,
with unit tests. The first real exhibition is the next step. Design and progress
are recorded in
[grid-ceiling-rooms-plan.md](documents/grid-ceiling-rooms-plan.md) and
[room-templates-implementation.md](documents/room-templates-implementation.md).

## Contents

Each sketch is a self-contained directory under `sketches/`, linked from the
nav page at [sketches/index.html](sketches/index.html).

| Folder                   | What is in it                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `strokes/`               | Generative brush paintings from trivalibs line geometry                                                        |
| `textures/`, `gradients` | Procedural shader surfaces — tile grids, line bands, plates, gradients                                         |
| `rooms/`                 | Walkable art spaces — the base room, hung canvases, columns                                                    |
| `templates/`             | Documented starting points meant to be read and copied: room templates on arbitrary floor plans, an open space |
| `experiments/`           | Attempts kept as proof of concept, not continued                                                               |
| `tests/`                 | Single-feature renders of shared machinery — bloom, texture baking, line geometry debugging                    |
| `base-triangle/`         | The minimal starter sketch                                                                                     |

Shared building blocks used by several sketches live in `src/` (namespace
`sketchlib.*`): painter-level utilities like bloom, mirror reflections, texture
baking and room geometry (`src/utils/`), and reusable shader-DSL blocks
(`src/shaders/`). Longer design notes and plans are in `documents/`.

## Contributing & reuse

This is the working studio of a personal art project, not a community library —
its direction follows the trivial space work, so it isn't set up for outside
contributions. The library is the place for that:
[trivalibs-scala](https://github.com/trivial-space/trivalibs-scala).

It is, however, meant to work as a **template** for your own trivalibs
experiments. Fork or copy the repo, keep the build setup, `base-triangle/` and
the `templates/`, and clear out the rest. The sections below cover everything
needed to get going.

## Setup

Prerequisites:

- [Bun](https://bun.sh)
- [Scala CLI](https://scala-cli.virtuslab.org)
- A WebGPU-capable browser (recent Chrome/Edge, or Firefox with the flag
  enabled)

```bash
git clone --recurse-submodules https://github.com/trivial-space/sketches-scala.git
cd sketches-scala
bun install
```

(In an existing clone: `git submodule update --init`.)

### The trivalibs submodule

trivalibs is not published as a package; sketches compile directly against its
sources in `trivalibs/src`. That keeps the library editable alongside the
sketches — a missing feature is added in the submodule, not worked around in a
sketch. If you plan to change the library, point the submodule at your own fork.

The submodule is registered with an **HTTPS** URL in [.gitmodules](.gitmodules)
so that anonymous/token-based clients (Cloudflare Workers Builds, CI) can check
it out without an SSH key. To still push over SSH with your key, add this
one-time global rewrite — fetches stay on HTTPS, pushes silently use SSH:

```bash
git config --global url."git@github.com:".pushInsteadOf "https://github.com/"
```

After that, commit and push inside `trivalibs/` as usual. Verify with
`git -C trivalibs remote -v` — fetch should show `https://`, push `git@`.

## Workflow

A sketch is compiled in isolation — the only inputs are its own sources,
`src/`, `trivalibs/src/` and the root `project.scala`. The output lands in
`<sketch-dir>/main.js` (checked into git for now) and is loaded by the sketch's
`index.html` as an ES module.

### Build and serve

```bash
bun run sketch <path>          # build one sketch
bun run sketch:watch <path>    # rebuild on change
bun run sketches [path] [-k]   # build all sketches (optionally a subtree; -k keeps going on failure)
bun run dev                    # vite dev server, http://localhost:3000
bun run build                  # static build → dist/
bun run test                   # munit tests for shared utils
```

`<path>` is the sketch directory, with or without a leading `sketches/` (so tab
completion from the project root works), e.g. `bun run sketch:watch
base-triangle` or `bun run sketch:watch sketches/rooms/canvases/`.

Run `sketch:watch` and `dev` side by side to iterate: Vite serves `sketches/` as
its root, so each sketch is reachable at its relative path (`/base-triangle/`,
`/rooms/canvases/`) and reloads whenever its `main.js` is rewritten. For
`bun run build`, [vite.config.ts](vite.config.ts) collects every nested
`index.html` as an input.

### Add a sketch

1. Create `sketches/<category>/my-sketch/` (the category folder is optional),
   or `cp -r sketches/base-triangle` as a seed.
2. Add `MySketch.scala` with a package matching the path (e.g.
   `package sketches.category.my_sketch`) and an entry point that takes the
   canvas:

   ```scala
   @JSExportTopLevel("sketch")
   def mySketch(canvas: HTMLCanvasElement): Unit = ...
   ```

3. Add `index.html` with a `<canvas id="canvas">` and the glue script:

   ```html
   <script type="module">
     import { sketch } from './main.js'
     sketch(document.getElementById('canvas'))
   </script>
   ```

4. Link it from `sketches/index.html` under the matching category.
5. `bun run sketch <category>/my-sketch`.

The sketch never looks up its canvas or runs on import. Keeping the DOM out of
sketch code means the same bundle can be driven by a non-browser host such as
[NativeScript Canvas](https://canvas.nativescript.org/canvas/installation),
which supplies a canvas object but no `document`.

`project.scala` gives Metals one workspace covering all sketches plus the library
sources, so the IDE type-checks everything together while each sketch still
builds on its own.

### Deployment

[sketches.trivialspace.net](https://sketches.trivialspace.net) is the Cloudflare
Worker `sketches-scala` (static assets, [wrangler.jsonc](wrangler.jsonc)),
rebuilt from the Vite build on every push to `main`. Any static host serving
`dist/` works the same way.

## Learning & API reference

How to write sketches without reading library source:

- **Guides** — [trivalibs/docs/guide/](trivalibs/docs/guide/): start with the
  [sketch authoring guide](trivalibs/docs/guide/sketch-authoring-guide.md), then
  the [shader DSL guide](trivalibs/docs/guide/shader-dsl-guide.md) and
  [gotchas](trivalibs/docs/guide/gotchas.md).
- **Examples** — [trivalibs/examples/](trivalibs/examples/): reduced renderings,
  one painter feature each.
- **Templates** — [sketches/templates/](sketches/templates/): whole situations
  (a room, an open space) with commented decisions and a `PLAN.md` each.
- **API reference** — public doc comments across the painter/shader/math
  surface; generate the browsable site with `cd trivalibs && bun run docs` (also
  published to GitHub Pages by CI).
- **`write-sketch` skill** —
  [trivalibs/docs/skills/write-sketch/](trivalibs/docs/skills/write-sketch/): a
  Claude Code skill encoding the authoring procedure and gotchas.
- **[CLAUDE.md](CLAUDE.md)** — the conventions this repo is written in, for
  humans and AI agents alike.

### Metals MCP for editors & AI agents

The Metals language server exposes an MCP server so the IDE _and_ an AI agent
(Claude Code) can query the library's signatures and doc comments live —
`get-docs`, `inspect`, `get-source`, `glob-search` — instead of reading source.
Enable it per machine (in the gitignored `.vscode/settings.json`):

```jsonc
// .vscode/settings.json
{ "metals.startMcpServer": true, "metals.mcpClient": "claude" }
```

Metals then writes `.mcp.json` at the repo root — gitignored, because it carries
a **dynamic port**:

```jsonc
// .mcp.json  (generated by Metals; do not edit or commit)
{
  "mcpServers": {
    "metals": { "type": "http", "url": "http://localhost:<port>/mcp" },
  },
}
```

**Connect a Claude session**

1. Open the repo in an editor running Metals (VS Code + the Metals extension)
   and let it finish importing the build — that starts the MCP server and writes
   `.mcp.json`.
2. Start the Claude session **after** `.mcp.json` exists (CLI `claude` in the
   repo root, or the VS Code Claude extension).
3. **Activate the server with `/mcp`** → select `metals` → connect. `/mcp`
   should then list it as **connected**; ask Claude to run a Metals tool to
   confirm (e.g. _“inspect `trivalibs.graphics.painter.Painter`”_).

**Pre-approve it.** Repo-scoped servers from `.mcp.json` need a one-time
approval. The terminal CLI prompts on first run; the **VS Code extension does
not surface that prompt** and silently skips the server. Enable it once in your
local, gitignored Claude settings so fresh sessions pick it up without `/mcp`:

```jsonc
// .claude/settings.local.json
{ "enabledMcpjsonServers": ["metals"] }
```

**Dynamic-port gotcha.** Every Metals restart (build re-import, editor reopen,
crash) picks a new port and rewrites `.mcp.json`. Sessions started earlier keep
pointing at the old port and silently lose the Metals tools — run `/mcp` to
reconnect, or restart the session.

**Outside VS Code.** The MCP server lives only as long as a Metals instance, and
Metals is normally launched by an editor. For a terminal Claude session keep an
editor with Metals open in the background so the server stays up and
`.mcp.json` stays current.

See
[trivalibs/README.md](trivalibs/README.md#metals-mcp-live-api-for-editors--ai-agents)
for the library-side notes.

## Layout

```
.
├── project.scala       # single scala-cli / Metals config
├── package.json        # bun scripts
├── vite.config.ts      # dev server + build config (root: sketches/)
├── wrangler.jsonc      # Cloudflare Worker deployment
├── scripts/            # sketch build scripts
├── sketches/
│   ├── index.html                # nav page
│   └── <category>/<name>/        # one sketch (nesting depth is free)
│       ├── <Name>.scala
│       ├── index.html
│       └── main.js               # scala-cli output (in git, for now)
├── src/                # shared sketch utilities (sketchlib.*)
├── test/               # munit tests for src/
├── documents/          # plans and design notes
└── trivalibs/          # submodule — the library, its examples and tests
```

## License

[MIT](LICENSE)
