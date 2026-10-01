package sketchlib.shaders.room

import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}

// ---------------------------------------------------------------------------
// The grime line where a wall meets the floor (sketchlib.shaders.room).
//
// Build-time expression emitters (no runtime cost beyond the emitted WGSL),
// shared across sketches, so they follow the library's bundle-size discipline.
//
// Two falloff shapes with identical signatures, so a sketch swaps one for the
// other by name: `grimeExp` (the default look) and `grimeSmooth`.
// ---------------------------------------------------------------------------

private def grimeDarkest(
    patch: FloatExpr,
    darken: Double,
    patchiness: Double,
): FloatExpr =
  lerp(darken, 1.0, patch * patchiness)

/** Brightness multiplier for dirt collecting at a junction: `darken` right at
  * it, decaying exponentially to ~1 at `width` meters away.
  *
  * Densest in the junction with a long thinning tail. Decay length is
  * `width / 3`, leaving ~5 % of the darkening at `width`. See [[grimeSmooth]]
  * for the band-shaped alternative.
  *
  * The noise fields are the caller's — sample them in WORLD space so
  * separately baked surfaces meeting at the junction agree.
  *
  * @param dist
  *   meters from the junction, measured however the surface reaches it (a
  *   floor's distance to the plan boundary, a wall's height above the floor).
  * @param creep
  *   noise in `[-1, 1]`; shifts the line in and out by up to `creepAmount`
  *   meters. Distances pushed below 0 clamp to the junction.
  * @param patch
  *   noise in `[0, 1]`; lightens the darkest value by up to `patchiness`.
  * @param width
  *   meters from the junction to where ~5 % of the darkening is left; the decay
  *   length is a third of it.
  * @param darken
  *   brightness multiplier right at the junction (1 = no grime).
  * @param creepAmount
  *   meters the line shifts at `creep = ±1`.
  * @param patchiness
  *   how much `patch` lifts the darkest value toward 1 (0 = none, 1 = fades
  *   out entirely in the lightest patches).
  */
def grimeExp(
    dist: FloatExpr,
    creep: FloatExpr,
    patch: FloatExpr,
    width: Double,
    darken: Double,
    creepAmount: Double,
    patchiness: Double,
): FloatExpr =
  val buildup = (-(dist + creep * creepAmount).max(0.0) / (width / 3.0)).exp
  lerp(1.0, grimeDarkest(patch, darken, patchiness), buildup)

/** Like [[grimeExp]], but a smoothstep from `darken` at the junction back to
  * exactly 1 at `width`. Holds flat near the junction, so it reads more as a
  * painted band than as accumulated dirt.
  *
  * @param dist
  *   meters from the junction, measured however the surface reaches it (a
  *   floor's distance to the plan boundary, a wall's height above the floor).
  * @param creep
  *   noise in `[-1, 1]`; shifts the line in and out by up to `creepAmount`
  *   meters.
  * @param patch
  *   noise in `[0, 1]`; lightens the darkest value by up to `patchiness`.
  * @param width
  *   meters from the junction to full brightness.
  * @param darken
  *   brightness multiplier right at the junction (1 = no grime).
  * @param creepAmount
  *   meters the line shifts at `creep = ±1`.
  * @param patchiness
  *   how much `patch` lifts the darkest value toward 1 (0 = none, 1 = fades
  *   out entirely in the lightest patches).
  */
def grimeSmooth(
    dist: FloatExpr,
    creep: FloatExpr,
    patch: FloatExpr,
    width: Double,
    darken: Double,
    creepAmount: Double,
    patchiness: Double,
): FloatExpr =
  lerp(
    grimeDarkest(patch, darken, patchiness),
    1.0,
    (dist + creep * creepAmount).smoothstep(0.0, width),
  )
