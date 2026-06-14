package sketchlib.shaders

import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Simplex

// ---------------------------------------------------------------------------
// Reusable noise blocks for the shader DSL (sketchlib.shaders).
//
// Build-time helpers that assemble WGSL expressions from trivalibs' noise
// primitives. They generate shader code (no runtime cost beyond the emitted
// WGSL), and are shared across many sketches, so they follow the library's
// bundle-size discipline: native `while` loops, no Scala stdlib in any path.
// ---------------------------------------------------------------------------

object Noise:

  /** Fractal Brownian motion over 3D simplex noise, normalized to `[0, 1]`.
    *
    * Sums `octaves` layers of [[Simplex.simplexNoise3d]], each at `freqMul`×
    * the previous frequency and `ampMul`× the amplitude, then rescales the
    * amplitude-weighted average from `[-1, 1]` to `[0, 1]`. Sampling in world
    * space makes the field continuous across adjacent surfaces.
    *
    * The loop is unrolled into the generated WGSL, so `octaves` / `freqMul` /
    * `ampMul` are baked compile-time constants — vary them per call site, not at
    * runtime.
    *
    * @param pos
    *   sample position (pre-scale it to set the base feature size).
    * @param octaves
    *   number of noise layers summed (more ⇒ more fine detail).
    * @param freqMul
    *   per-octave frequency multiplier (lacunarity).
    * @param ampMul
    *   per-octave amplitude multiplier (gain / persistence).
    * @param seed
    *   constant offset added to every octave's sample position.
    */
  def fbm3(
      pos: Vec3Expr,
      octaves: Int = 3,
      freqMul: Double = 2.0,
      ampMul: Double = 0.5,
      seed: Vec3Expr = vec3(0.0),
  ): FloatExpr =
    var acc: FloatExpr = 0.0
    var freq = 1.0
    var amp = 1.0
    var total = 0.0
    var i = 0
    while i < octaves do
      acc = acc + Simplex.simplexNoise3d(pos * freq + seed) * amp
      total += amp
      freq *= freqMul
      amp *= ampMul
      i += 1
    (acc / total).fit1101.clamp01
