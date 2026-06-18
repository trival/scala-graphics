// Shared sketch-compiling configuration. Both scripts/sketch.ts (single sketch,
// with watch + annotated output) and scripts/sketches.ts (all sketches) build
// through this so the scala-cli inputs/flags stay identical.
//
// Each sketch builds in isolation: only its own dir + the shared src + the
// trivalibs submodule src + project.scala contribute to its bundle — never a
// bare ".", which would pull in unrelated sources.

import { join } from "node:path"

export const sketchPackageArgs = (
	sketchDir: string,
	opts: { watch?: boolean } = {},
): string[] => [
	"--power", "package",
	sketchDir,
	"src",
	"trivalibs/src",
	"project.scala",
	"--js",
	"-o", join(sketchDir, "main.js"),
	"-f",
	...(opts.watch ? ["-w"] : []),
]
