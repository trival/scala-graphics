# Repo reorg: promote the Scala line

Status: **draft, iterating.** Nothing gets executed until this doc is approved.

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

Current state (verified):

- `trivial-space/playground` has already been renamed to `trivial-space/sketches`
  (the local remote still says playground; GitHub redirects it).
- `trivial-space/libs-wasm` has already been renamed to `trivial-space/trivalibs`.
- Old sketches: CF **Pages** project `trivialspace-sketches` (git-connected).
  Domains: `trivialspace-sketches.pages.dev`, `sketches.trivialspace.net`.
- Scala sketches: CF **Worker** `scala-sketches` (`wrangler.jsonc`, assets
  only, no routes). Its domain `sketches-scala.trivialspace.net` was set in the
  dashboard.
- Website: CF Pages `trivialspace-website` (git-connected). 6 hrefs in
  `trivialspace/website/src/data/data.ts` point to
  `sketches.trivialspace.net/...`, and all of them are old-repo sketches.
- trivalibs docs on GitHub Pages: `trival.github.io/scala-trivalibs/`. No repo
  links to it were found.
- Local clones that need remote updates:
  - `trivialspace/trivalibs` (Rust, current main, has painter + native).
  - `trivialspace/playground/projects/libs-wasm`: a submodule of the same repo,
    pinned to an old Feb 2024 commit (the wasm-only libs era).
  - `scala/trivalibs`: a standalone clone of scala-trivalibs.
  - `scala/graphics/trivalibs`: the submodule.

Decisions:

- Only rename `sketches-old`, don't archive it. We retire it because it is
  built on the old Rust libs (`projects/libs-wasm`, the 2024 wasm-only version)
  and the old TS painter. But its sketches stay live at
  `sketches-old.trivialspace.net`, and the website keeps linking a selection of
  them. The results are still relevant, so the repo and its Pages deploy stay
  working.
- `trivalibs-rs` stays active (rename only).
- Drop the `sketches-scala.trivialspace.net` domain completely (no alias).
- Keep the CF project and worker names (`trivialspace-sketches`,
  `scala-sketches`).
- Keep the local dir names (`playground/projects/libs-wasm`, `scala/graphics`).

## Steps

The order matters: the website iframes must never point at a domain that has
stopped serving the old sketches.

### 1. GitHub renames/transfers

Each one gets confirmed before it runs.

- [ ] `gh repo rename sketches-old -R trivial-space/sketches`
- [ ] `gh repo rename trivalibs-rs -R trivial-space/trivalibs`
- [ ] `gh api -X POST repos/trival/scala-trivalibs/transfer -f new_owner=trivial-space -f new_name=trivalibs-scala`
- [ ] `gh api -X POST repos/trival/scala-graphics/transfer -f new_owner=trivial-space -f new_name=sketches-scala`
- [ ] trivalibs-scala: check that GitHub Pages is still enabled (source =
      Actions), then rerun `deploy-docs.yml`.
- [ ] Update the local remotes (`git remote set-url origin …`) in playground,
      `playground/projects/libs-wasm`, `trivialspace/trivalibs`,
      `scala/graphics`, `scala/graphics/trivalibs` and `scala/trivalibs`.

### 2. Code edits

`trivialspace/playground`:

- [ ] `.gitmodules`: change the libs-wasm url to
      `git@github.com:trivial-space/trivalibs-rs.git`, then run
      `git submodule sync`.
- [ ] `package.json`: point the repository and bugs urls to
      `trivial-space/sketches-old`.
- [ ] `README.md`:
  - Add a **Discontinued** note at the top. It says that no new development
    happens here (the repo is built on the old Rust libs and the TS painter),
    but the sketches stay live at `sketches-old.trivialspace.net` and some are
    featured on trivialspace.net. It links the active repos
    `trivial-space/sketches-scala` and `trivial-space/trivalibs-scala`, plus
    the live site `sketches.trivialspace.net`.
  - Change the libs-wasm link to trivalibs-rs.
  - Change the published URL to `sketches-old.trivialspace.net`.
- [ ] `.devcontainer/devcontainer.json`: change `trivial-space/libs-wasm` to
      `trivial-space/trivalibs-rs`.

`scala/graphics`:

- [ ] `.gitmodules`: change the url to
      `https://github.com/trivial-space/trivalibs-scala.git`, then run
      `git submodule sync`.
- [ ] `wrangler.jsonc`: add
      `routes: [{ pattern: "sketches.trivialspace.net", custom_domain: true }]`.
      This is the same pattern as `trivalibs/wrangler.jsonc`.
- [ ] `README.md`: rename the title/repo to `sketches-scala` and mention the
      deploy at sketches.trivialspace.net.
- [ ] `package.json`: rename to `sketches-scala` (optional, cosmetic).

`trivialspace/trivalibs` (Rust):

- [ ] `README.md`: rename the title to trivalibs-rs. Add a short "Language
      lines" note: this is the multi-target/native line and the model for
      trivalibs-scala, but web work prefers trivalibs-scala. Link to
      trivalibs-scala.

`scala/graphics/trivalibs` (Scala):

- [ ] `README.md`: rename the title to trivalibs-scala. Add a short lineage
      note: a port of the trivalibs-rs painter with extra Scala ergonomics,
      Scala.js + browser WebGPU only, and the active line for web. Link to
      trivalibs-rs.
- [ ] Leave `documents/done/*` as historical.

`trivialspace/website`:

- [ ] `src/data/data.ts`: change the 6 hrefs from `sketches.` to
      `sketches-old.`.

### 3. Cloudflare domain swap

These are done in the dashboard or via the API, and each one gets confirmed.

1. [ ] Pages `trivialspace-sketches`: add the custom domain
       `sketches-old.trivialspace.net`. Wait until it is active, then check
       that the 6 sketch URLs load there.
2. [ ] Pages git integration: check that it still tracks the renamed repo
       `sketches-old`, and reconnect it if it doesn't.
3. [ ] Commit and push the website change so it deploys automatically. Check
       that the iframes on www.trivialspace.net load from sketches-old.
4. [ ] Pages `trivialspace-sketches`: remove the custom domain
       `sketches.trivialspace.net`. This frees the DNS record.
5. [ ] Scala worker: commit the wrangler route, then run
       `bun run build && npx wrangler deploy`. If the worker uses Workers
       Builds (git-connected), reconnect it to `trivial-space/sketches-scala`
       instead. The CF GitHub app needs access to the `trivial-space` org.
6. [ ] Remove the custom domain `sketches-scala.trivialspace.net` from the
       worker `scala-sketches` (Domains & Routes), and remove any leftover DNS
       record.

### 4. Commits

- [ ] One commit per repo: playground, trivalibs-rs (README), trivalibs-scala
      (README), scala/graphics (submodule url + bump, wrangler, README),
      website. Push only after approval.

## Verification

- `gh repo view trivial-space/{sketches-old,trivalibs-rs,trivalibs-scala,sketches-scala}`
  resolves for all four.
- `git submodule update --init` works in playground and scala/graphics
  (ideally on a fresh clone).
- `curl -sI https://sketches-old.trivialspace.net/works/homage/` returns 200.
- `https://sketches.trivialspace.net/` serves the scala index (check the body).
  `sketches-scala.trivialspace.net` no longer resolves.
- On www.trivialspace.net, every gallery iframe renders.
- The trivalibs docs are reachable at the new GitHub Pages URL.

## Follow-up (not in this pass)

- Next milestone: add new works from the scala sketches to the trivialspace.net
  gallery (pointing to `sketches.trivialspace.net`). This is one of the reasons
  for this plan. It deliberately waits until all the repo and domain changes
  are done, so the new entries get final, stable URLs from the start.
- The Scala trivalibs examples deployment (worker `trivalibs-examples` at
  `trivalibs-examples.trivialspace.net`) stays as it is. It has its own domain
  and is deployed by hand (`bun run deploy`, not git-connected), so moving the
  repo doesn't affect it.
