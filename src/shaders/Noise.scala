package sketchlib.shaders

import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Psrdnoise
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

  /** Fractal Brownian motion over 3D simplex noise, in the `[-1, 1]` range.
    *
    * Sums `octaves` layers of [[Simplex.simplexNoise3d]], each at `freqMul`×
    * the previous frequency and `ampMul`× the amplitude, then returns the
    * amplitude-weighted average, which stays in simplex noise's natural
    * `[-1, 1]` range. Sampling in world space makes the field continuous across
    * adjacent surfaces. Use `.fit1101` at the call site to remap to `[0, 1]`
    * where needed.
    *
    * The loop is unrolled into the generated WGSL, so `octaves` / `freqMul` /
    * `ampMul` are baked compile-time constants — vary them per call site, not
    * at runtime.
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
    acc / total

  /** [[fbm3]]'s tiling twin: fractal Brownian motion over psrdnoise's PERIODIC
    * 3D simplex noise, in the `[-1, 1]` range. The field repeats exactly every
    * `period` units of `pos` in X and Z, and is unbounded in Y.
    *
    * For surfaces too large to bake a unique texture for. Bake one `period`
    * square and repeat it with an `AddressMode.Repeat` sampler; anything else
    * sampling the same field at world position — a wall standing on that
    * ground, an object placed on it — reads out of one continuous volume and
    * agrees with the tile for free, whether or not it tiles itself.
    *
    * ==Three rules the caller has to keep==
    *
    *   1. **`period` is a DOMAIN period, and it must be a whole number.**
    *      psrdnoise wraps its lattice at integer coordinates, so a fractional
    *      period wraps mid-cell and the seam is visible. A caller usually wants
    *      a world period `T` and a wanted feature scale `s`; it gets there by
    *      snapping — `period = round(T · s)`, then `scale = period / T` — and
    *      sampling at `pos = worldPos · scale`. The scale moves, the tiling
    *      stays exact.
    *   2. **Lacunarity is fixed at 2**, unlike [[fbm3]]'s free `freqMul`. Each
    *      octave samples at `2^o` and carries the period `period · 2^o`, which
    *      stays a whole number only for an integer multiplier — and 2 is the
    *      only one that keeps the octaves close enough together to read as one
    *      field. Vary `octaves` and `ampMul` instead.
    *   3. **Only Y may shear into X or Z.** The field repeats in `pos.x` and
    *      `pos.z`, so a caller warping world space before sampling (`pos.x +
    *      k·wp.y` and the like) keeps the tiling as long as world X and Z reach
    *      their own axes with a unit coefficient. `wp.z · 0.8` in `pos.x` does
    *      not tile unless `0.8 · T · scale` happens to be a whole number too.
    *
    * A constant `seed` offset is safe: it shifts the field without changing its
    * period.
    *
    * @param pos
    *   sample position, already scaled (see rule 1).
    * @param period
    *   the field's repeat distance in `pos` units — a whole number.
    * @param octaves
    *   number of noise layers summed (more ⇒ more fine detail).
    * @param ampMul
    *   per-octave amplitude multiplier (gain / persistence).
    * @param seed
    *   constant offset added to every octave's sample position.
    */
  def tilingFbm3(
      pos: Vec3Expr,
      period: Int,
      octaves: Int = 3,
      ampMul: Double = 0.5,
      seed: Vec3Expr = vec3(0.0),
  ): FloatExpr =
    var acc: FloatExpr = 0.0
    var freq = 1
    var amp = 1.0
    var total = 0.0
    var i = 0
    while i < octaves do
      // A zero period leaves that axis unwrapped, which is what keeps Y free.
      val p = (period * freq).toDouble
      acc = acc + Psrdnoise
        .tilingNoise3d(pos * freq.toDouble + seed, vec3(p, 0.0, p))
        .x * amp
      total += amp
      freq *= 2
      amp *= ampMul
      i += 1
    acc / total
