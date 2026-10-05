# Repo reorg: promote the Scala line

Status: **executed 2026-10-05.** Open: deleting the old Pages project
`trivialspace-sketches`, and the local DNS check for `sketches.trivialspace.net`
(see phases 6–7).

## Context

The Scala port is now the main line of work. The old Rust/TS playground is
retired as `sketches-old`. The Scala sketches take over
`sketches.trivialspace.net`. Both Scala repos move to the `trivial-space` org
and keep a `-scala` suffix, which leaves room for other language lines later
(`-rs`, maybe moonbit or TS). For now and the foreseeable future, the Scala
line is the one under active development.

This reorg is also groundwork for the next milestone: adding works from the
Scala sketches to the trivialspace.net gallery once the URLs are final (see
Follow-up).

### Language lines

- **trivalibs-rs** was the model for the Scala painter. The Scala painter is a
  port with a similar API, extended with ergonomics that Scala allows and Rust
  doesn't.
- **trivalibs-scala** deliberately targets Scala.js and WebGPU in the browser
  only.
- **trivalibs-rs** can target several platforms and run as fast native code. It
  stays alive as an option, and may evolve in parallel if a native app is ever
  needed.
- **Rule:** prefer the Scala libs for anything that targets the web.

Target names:

| Now                                      | Target                          | Domain                                                          |
| ---------------------------------------- | ------------------------------- | --------------------------------------------------------------- |
| `trivial-space/sketches` (ex playground) | `trivial-space/sketches-old`    | `sketches.trivialspace.net` → `sketches-old.trivialspace.net`   |
| `trivial-space/trivalibs` (ex libs-wasm) | `trivial-space/trivalibs-rs`    | –                                                               |
| `trival/scala-trivalibs`                 | `trivial-space/trivalibs-scala` | GH Pages docs → `trivial-space.github.io/trivalibs-scala/`      |
| `trival/scala-graphics`                  | `trivial-space/sketches-scala`  | `sketches-scala.trivialspace.net` → `sketches.trivialspace.net` |

Local paths (relative to this repo's root):

| Path                                                | Repo                                          |
| --------------------------------------------------- | --------------------------------------------- |
| `.`                                                 | sketches-scala (this repo)                    |
| `trivalibs/`                                        | trivalibs-scala (submodule)                   |
| `../trivalibs/`                                     | trivalibs-scala (standalone clone)            |
| `../../trivialspace/playground/`                    | sketches-old                                  |
| `../../trivialspace/playground/projects/libs-wasm/` | trivalibs-rs (submodule, old Feb 2024 commit) |
| `../../trivialspace/trivalibs/`                     | trivalibs-rs (standalone clone, current main) |
| `../../rust/graphics/`                              | `trival/rust-graphics` (wgpu sketches)        |
| `../../rust/graphics/trivalibs/`                    | trivalibs-rs (submodule, current main)        |
| `../../trivialspace/website/`                       | website                                       |

Current state (verified):

- `trivial-space/playground` has already been renamed to `trivial-space/sketches`
  (the local remote still says playground; GitHub redirects it).
- `trivial-space/libs-wasm` has already been renamed to `trivial-space/trivalibs`.
- Old sketches: CF **Pages** project `trivialspace-sketches` (git-connected).
  Domains: `trivialspace-sketches.pages.dev`, `sketches.trivialspace.net`.
- Scala sketches: CF **Worker** `scala-sketches` (`wrangler.jsonc`, assets
  only, no routes). Its domain `sketches-scala.trivialspace.net` was set in the
  dashboard. It is deployed by **Workers Builds** on every push to
  `trival/scala-graphics` main (deploy times match the last pushes). So every
  push here is a deploy, and the `wrangler.jsonc` `name` must match the
  connected worker or the build fails.
- Website: CF Pages `trivialspace-website` (git-connected). 6 hrefs in
  `../../trivialspace/website/src/data/data.ts` point to
  `sketches.trivialspace.net/...`, and all of them are old-repo sketches.
- trivalibs docs on GitHub Pages: `trival.github.io/scala-trivalibs/`. No repo
  links to it were found.
- Rust sketches (`../../rust/graphics/`, `trival/rust-graphics`): wgpu +
  Rust-GPU sketches that took trivalibs-rs beyond the TS playground (painter,
  nostd shader utils). The Scala port was modelled on this state. It
  references trivalibs-rs in `.gitmodules` and in a `README.md` link
  (`trivial-space/trivalibs/tree/main/crates/trivalibs_painter`). It is not
  deployed.
- Every local clone in the paths table needs a remote update. The trivalibs-rs
  submodule (`../../trivialspace/playground/projects/libs-wasm/`) is pinned to
  the wasm-only libs era. The standalone clone has the painter and native
  support.
- The standalone `../trivalibs/` clone is stale (at its 2nd commit). It gets
  pulled when its remote is updated.
- `../../trivialspace/playground/` also has a `dokku` remote. It stays
  untouched.
- `gh` is logged in as `trival`, which is an admin of `trivial-space`, so the
  transfers complete immediately (no acceptance step).

Decisions:

- Only rename `sketches-old`, don't archive it. We retire it because it is
  built on the old Rust libs (`projects/libs-wasm`, the 2024 wasm-only version)
  and the old TS painter. But its sketches stay live at
  `sketches-old.trivialspace.net`, and the website keeps linking a selection of
  them. The results are still relevant, so the repo and its Pages deploy stay
  working.
- `trivalibs-rs` stays active (rename only).
- **Submodule rule (all repos):** point submodule urls to the new repo names,
  but keep every pinned commit as it is, so nothing that builds today breaks.
  Changing `.gitmodules` and running `git submodule sync` only changes the
  url. The pinned commit lives in the parent tree and stays. Check it with
  `git ls-tree HEAD <path>` before and after.
- sketches-old is frozen in its current state: its libs-wasm submodule stays
  at `544953b` (now via the `trivalibs-rs` url). No code changes there, only
  docs and urls.
- Drop the `sketches-scala.trivialspace.net` domain completely (no alias).
- CF Pages project `trivialspace-sketches` becomes `sketches-old`. The old
  name sounds too official for the aged project. Pages projects can't be
  renamed, so this means a new git-connected project plus deleting the old one
  after the domain swap.
- CF Worker `scala-sketches` becomes `sketches-scala`, consistent with the repo
  names. Done as a new worker (change `name` in `wrangler.jsonc`, connect it
  to Workers Builds) instead of a dashboard rename: it is assets only and gets
  new routes anyway. The old worker gets deleted after the swap.
- Keep the local dir names (see the paths table).
- `trival/rust-graphics` stays where it is, in the `trival` namespace. Only
  its trivalibs-rs references get updated. Most of its sketches were ported
  to Scala as verification while the libs were being ported, so none of them
  are relevant on their own anymore. That is unlike the TS playground
  (sketches-old), whose sketches are still live and used.

## Steps

Seven small phases. Each phase ends in a checked, working state, so an
interruption between phases leaves nothing broken. Each phase gets one go-ahead
before it starts, and every push is announced before it runs.

- **[me]**: Claude runs it (`gh`, `git`, file edits, `curl`, `wrangler`).
- **[you]**: Cloudflare dashboard.

Invariants:

- The website iframes never point at a domain that doesn't serve the old
  sketches.
- A push to this repo is a deploy (Workers Builds), so the `wrangler.jsonc`
  `name` and `routes` only change in the phase that matches them.

Phases 1 and 2 come first because they secure www.trivialspace.net, the main
public artifact. Everything after them is barely visible from outside.

### Phase 1: sketches-old repo + new Pages project

- [x] [me] `gh repo rename sketches-old -R trivial-space/sketches`, then
      `git remote set-url origin` in `../../trivialspace/playground/`. Leave
      the `dokku` remote as it is.
- [x] [me] `../../trivialspace/playground/` edits:
  - `package.json`: point the repository and bugs urls to
    `trivial-space/sketches-old`.
  - `README.md` has no playground link, only the word in prose. Nothing to
    change.
  - `projects/painter/` is the separate repo `trivial-space/painter`
    (submodule). Its readme link to `trivial-space/playground` is left as it
    is, since GitHub redirects it.
  - The libs-wasm submodule url stays as it is for now: GitHub redirects it.
    It is changed in phase 3.
- [x] [me] Commit and push (`9ae576c`). The old Pages project may rebuild. If
      the build fails, its last deployment keeps serving.
- [x] [you] Create the Pages project `sketches-old`, git-connected to
      `trivial-space/sketches-old`. Copy the build command, output dir, root
      dir and env vars from `trivialspace-sketches`. Check that the first
      build succeeds, including the libs-wasm submodule clone. It must be a
      **Pages** project, not a Worker: `functions/assets/[[args]].ts` is a
      Pages Function that proxies `/assets/*` to the `REMOTE_ASSETS_URL` env
      var, so that var must be copied too. In the "Workers & Pages" dashboard,
      Pages is reached via Create application → the Pages option/link.
- [x] [you] Pages `sketches-old`: add the custom domain
      `sketches-old.trivialspace.net`.
- [x] [me] Check: `curl` the 6 sketch URLs on `sketches-old.trivialspace.net`
      and on `sketches-old.pages.dev`. All return 200, all 101 referenced
      assets return 200, and `/assets/videos/tworooms.webm` is forwarded
      (206, `video/webm`) on both.

Done when: the old sketches are served on both `sketches.` and `sketches-old.`,
and the website is unchanged.

### Phase 2: website points to sketches-old

- [x] [me] `../../trivialspace/website/src/data/data.ts`: change the 6 hrefs
      from `sketches.` to `sketches-old.`.
- [x] [me] Commit and push (`55402b6`). Pages deploys it automatically.
- [x] [me] Check: the live JS bundle (the hrefs are in `/assets/index-*.js`,
      not the HTML) has all 6 `sketches-old.` hrefs and no `sketches.` ones.
- [x] [you] Check: the iframes on www.trivialspace.net render.

Done when: the website no longer depends on `sketches.trivialspace.net`. From
here on, nothing public is at risk.

### Phase 3: trivalibs-rs rename

- [x] [me] `gh repo rename trivalibs-rs -R trivial-space/trivalibs`
- [x] [me] `../../trivialspace/trivalibs/`: `git remote set-url origin`, then
      fast-forward (it was 172 commits behind).
- [x] [me] `../../rust/graphics/`: in `.gitmodules`, change the url to
      `git@github.com:trivial-space/trivalibs-rs.git`, then run
      `git submodule sync`. In `README.md`, change the trivalibs_painter link
      to `trivial-space/trivalibs-rs/...`, plus a short note that
      trivalibs-scala / sketches-scala is the active web line.
- [x] [me] `../../trivialspace/trivalibs/` `README.md`: rename the title to
      trivalibs-rs. Add a short "Language lines" note: this is the
      multi-target/native line and the model for trivalibs-scala, but web work
      prefers trivalibs-scala. Link to trivalibs-scala (via its current URL,
      `trival/scala-trivalibs`; GitHub redirects it after phase 4).
- [x] [me] `../../trivialspace/playground/`:
  - `.gitmodules`: change the libs-wasm url to
    `git@github.com:trivial-space/trivalibs-rs.git`, then run
    `git submodule sync`. The pinned commit stays at `544953b` (2024-02-24),
    verified with `git ls-tree`.
  - `.devcontainer/devcontainer.json`: change `trivial-space/libs-wasm` to
    `trivial-space/trivalibs-rs`.
  - `README.md`: change the libs-wasm link to trivalibs-rs.
- [x] [me] Commit and push trivalibs-rs (`79375a7`), rust-graphics (`bb1817c`)
      and sketches-old (`47e8564`). Only sketches-old deploys (Pages
      `sketches-old`): the build succeeded, and all 6 sketches return 200.
- [x] [me] Check: in fresh clones, `git submodule update --init` fetches the
      pinned `924de38` (rust-graphics) and `544953b` (playground) from the
      `trivalibs-rs` url.

Done when: the old names redirect, the pinned commits are unchanged, and every
deploy still builds.

### Phase 4: trivalibs-scala transfer

- [x] [me]
      `gh api -X POST repos/trival/scala-trivalibs/transfer -f new_owner=trivial-space -f new_name=trivalibs-scala`
- [x] [me] `git remote set-url origin` in `trivalibs/` and `../trivalibs/`,
      then pull the stale `../trivalibs/` (standalone clone, 169 behind).
- [x] [me] Check that GitHub Pages is still enabled (source = Actions), then
      run `gh workflow run deploy-docs.yml`. Check that
      `trivial-space.github.io/trivalibs-scala/` serves. It returns 200; the
      old `trival.github.io/scala-trivalibs/` returns 404 (not redirected).
- [x] [me] `trivalibs/README.md` (`effc267`): rename the title to trivalibs-scala. Add a
      short lineage note: a port of the trivalibs-rs painter with extra Scala
      ergonomics, Scala.js + browser WebGPU only, and the active line for web.
      Link to trivalibs-rs. Leave `documents/done/*` as historical. Commit and
      push. The docs workflow only triggers on `src/**`.
- [x] [me] This repo (`59673c6`): in `.gitmodules`, change the url to
      `https://github.com/trivial-space/trivalibs-scala.git`, run
      `git submodule sync`, and bump the submodule (`4b3558d` → `effc267`,
      README-only diff). Commit and push. Workers Builds deploys
      `scala-sketches` as usual, because this repo hasn't moved yet.
- [x] [me] Check: `sketches-scala.trivialspace.net` still serves (deployed
      13:12 UTC, 200).

Done when: everything works, and only scala-graphics is left to move.

### Phase 5: sketches-scala transfer + new worker

The old worker keeps serving its last deployment throughout.

- [x] [me]
      `gh api -X POST repos/trival/scala-graphics/transfer -f new_owner=trivial-space -f new_name=sketches-scala`,
      then `git remote set-url origin`.
- [x] [me] This repo (`a289e64`):
  - `wrangler.jsonc`: change `name` to `sketches-scala`. No routes yet.
  - `package.json`: change `name` to `sketches-scala`.
  - `README.md`: change the title/repo to `sketches-scala`.
- [x] [me] Commit and push. The old `scala-sketches` build either doesn't
      trigger (lost repo link) or fails on the name mismatch. Either way it
      keeps serving.
- [x] [me] Create the worker `sketches-scala` with `bun run build` and
      `npx wrangler deploy`. It serves at
      `sketches-scala.thomas-gorny.workers.dev` (200, checked).
- [x] [you] Worker `sketches-scala` → Settings → Build → connect Git to
      `trivial-space/sketches-scala` (branch `main`, build command
      `bun run build`, deploy `npx wrangler deploy`; copy them from
      `scala-sketches`). The CF GitHub app needs access to that repo in the
      `trivial-space` org. Then disconnect Git from `scala-sketches` if it is
      still attached.
- [x] [me] Check: a push to `main` deploys `sketches-scala`. The route push
      `c846467` attached `sketches.trivialspace.net` with no manual deploy.

Done when: two workers exist. The old one is live on
`sketches-scala.trivialspace.net`, and the new one deploys on push.

### Phase 6: domain swap

This is the only window where `sketches.trivialspace.net` is briefly down.
Nothing links to it anymore after phase 2. If work stops between the two steps,
finish the push: that is the way back to a working state.

- [x] [you] Removed the custom domain `sketches.trivialspace.net` from
      `trivialspace-sketches`. Deleting the project failed ("too many
      deployments"), so the full delete moved to phase 7.
- [ ] (moved to phase 7) Delete the Pages project `trivialspace-sketches` entirely. This
      drops its domains `sketches.trivialspace.net` and
      `trivialspace-sketches.pages.dev`. Nothing links to the `pages.dev` one
      (grepped all repos, 2026-10-05). If the dashboard asks for the custom
      domain to be removed first, do that. Then check that the `sketches` DNS
      record (CNAME → `trivialspace-sketches.pages.dev`) is gone, and delete it
      if not: the worker's custom domain can't claim an existing record.
- [x] [me] (`c846467`) `wrangler.jsonc`: add
      `routes: [{ pattern: "sketches.trivialspace.net", custom_domain: true }]`,
      the same pattern as `trivalibs/wrangler.jsonc`. `README.md`: mention the
      deploy at sketches.trivialspace.net. Commit and push. Workers Builds
      attaches the domain.
- [x] [me] Check: `https://sketches.trivialspace.net/` serves the Scala index
      (check the body). Confirmed through Cloudflare's resolver (1.1.1.1). Local
      resolvers may still have "doesn't exist" cached for up to 30 min (SOA
      minimum 1800 s), from the time the record was gone.
- [ ] [you] Check: the domain resolves locally too.

### Phase 7: cleanup

- [x] [me] `../../trivialspace/playground/README.md` (`23e0670`):
  - Add a **Discontinued** note at the top. It says that no new development
    happens here (the repo is built on the old Rust libs and the TS painter),
    but the sketches stay live at `sketches-old.trivialspace.net` and some are
    featured on trivialspace.net. It links the active repos
    `trivial-space/sketches-scala` and `trivial-space/trivalibs-scala`, plus
    the live site `sketches.trivialspace.net`.
  - Change the published URL to `sketches-old.trivialspace.net`.
  - Commit and push.
- [x] [you] Delete the worker `scala-sketches`. This also drops
      `sketches-scala.trivialspace.net` (no longer resolves, checked).
- [ ] [you] Delete the old Pages deployments (the `!` wrangler loop, or the
      Cloudflare script from https://cfl.re/3CXesln), then delete the Pages
      project `trivialspace-sketches`.

## Verification

Results of the run on 2026-10-05:

- [x] `gh repo view trivial-space/{sketches-old,trivalibs-rs,trivalibs-scala,sketches-scala}`
      resolves for all four. All old names redirect: `trivial-space/{sketches,
      playground,trivalibs,libs-wasm}` and `trival/{scala-trivalibs,
      scala-graphics}`.
- [x] `git submodule update --init` works on fresh clones of the playground
      (`544953b`), rust-graphics (`924de38`) and sketches-scala (`effc267`).
- [x] Every local clone in the paths table has `origin` on the new name.
- [x] `https://sketches-old.trivialspace.net/works/homage/` returns 200.
- [ ] Pages project `sketches-old` deploys on push (yes); `trivialspace-sketches`
      is gone (pending).
- [x] `https://sketches.trivialspace.net/` serves the Scala index (via
      1.1.1.1). `sketches-scala.trivialspace.net` no longer resolves.
- [x] Worker `sketches-scala` serves it; `scala-sketches` is gone.
- [x] On www.trivialspace.net, every gallery iframe renders (checked by you).
- [x] The trivalibs docs are reachable at
      `trivial-space.github.io/trivalibs-scala/` (200).
- [x] `trivalibs-examples.trivialspace.net` is unaffected (200).

## Follow-up (not in this pass)

- Next milestone: add new works from the scala sketches to the trivialspace.net
  gallery (pointing to `sketches.trivialspace.net`). This is one of the reasons
  for this plan. It deliberately waits until all the repo and domain changes
  are done, so the new entries get final, stable URLs from the start.
- The Scala trivalibs examples deployment (worker `trivalibs-examples` at
  `trivalibs-examples.trivialspace.net`) stays as it is. It has its own domain
  and is deployed by hand (`bun run deploy`, not git-connected), so moving the
  repo doesn't affect it.
