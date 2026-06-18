#!/usr/bin/env bun
// Build every sketch, each in isolation (only its own dir + shared src +
// trivalibs/src contribute to its bundle). Walks sketches/ for any directory
// holding a .scala file and compiles them one by one.
// Usage: bun scripts/sketches.ts [path/from/sketches] [--continue|-k]
//   optional path scopes the walk to a subtree (e.g. "rooms")
//   --continue / -k keeps going after a failure instead of stopping

import { readdirSync, existsSync } from "node:fs"
import { join, normalize, relative } from "node:path"
import { sketchPackageArgs } from "./build.ts"

const argv = process.argv.slice(2)
const keepGoing = argv.includes("--continue") || argv.includes("-k")
const rawRoot = argv.find(a => !a.startsWith("-"))

const root = rawRoot
	? join("sketches", normalize(rawRoot).replace(/^sketches[\/\\]/, "").replace(/[\/\\]$/, ""))
	: "sketches"
if (!existsSync(root)) {
	console.error(`path not found: ${root}`)
	process.exit(1)
}

// A sketch dir is the first directory (descending from the root) that holds
// .scala code — that's the sketch root (its @main / index.html). A sketch may
// have multiple .scala files and nested subfolders of helpers, so once a dir
// has .scala we take it and stop descending; deeper folders belong to that
// sketch, they are not separate sketches.
const findSketchDirs = (dir: string, acc: string[] = []): string[] => {
	const entries = readdirSync(dir, { withFileTypes: true })
	if (entries.some(e => e.isFile() && e.name.endsWith(".scala"))) {
		acc.push(dir)
		return acc
	}
	for (const e of entries) {
		if (e.isDirectory()) findSketchDirs(join(dir, e.name), acc)
	}
	return acc
}

const sketchDirs = findSketchDirs(root).sort()
if (sketchDirs.length === 0) {
	console.error(`no sketches found under ${root}`)
	process.exit(1)
}

const formatMs = (ms: number) =>
	ms < 1000 ? `${ms.toFixed(0)}ms` : `${(ms / 1000).toFixed(2)}s`

const build = async (sketchDir: string): Promise<boolean> => {
	const start = performance.now()
	const proc = Bun.spawn(["scala-cli", ...sketchPackageArgs(sketchDir)], {
		stdout: "inherit",
		stderr: "inherit",
		stdin: "inherit",
	})
	const code = await proc.exited
	const ms = formatMs(performance.now() - start)
	const name = relative("sketches", sketchDir)
	if (code === 0) console.log(`✓ ${name} [${ms}]`)
	else console.error(`✗ ${name} [failed after ${ms}]`)
	return code === 0
}

console.log(`Building ${sketchDirs.length} sketches…\n`)

const failed: string[] = []
for (const dir of sketchDirs) {
	const ok = await build(dir)
	if (!ok) {
		failed.push(relative("sketches", dir))
		if (!keepGoing) break
	}
}

console.log("")
if (failed.length === 0) {
	console.log(`All ${sketchDirs.length} sketches built.`)
	process.exit(0)
} else {
	console.error(`${failed.length} failed: ${failed.join(", ")}`)
	process.exit(1)
}
