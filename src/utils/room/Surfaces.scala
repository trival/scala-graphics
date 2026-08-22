package sketchlib.utils.room

import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}

// ---------------------------------------------------------------------------
// Horizontal surfaces — floor, ceiling, light plane.
//
// There is no `Ceiling` abstraction here and there should not be one. A flat
// ceiling and a coffer behind a beam raster share nothing but a height, and a
// polymorphic seam would cost more than the ten lines of quad it replaced. What
// IS shared is this quad, and only because getting its UV frame to agree with
// the texture size derived from the same bounds is a step worth not repeating.
// ---------------------------------------------------------------------------

/** The plan's BOUNDING-BOX quad at height `y` — not the plan polygon. There is
  * no triangulation anywhere in this design.
  *
  * On an L-shaped plan the floor is still a plain rectangle covering the
  * cut-out too, and that is fine: every ring edge carries an opaque full-height
  * wall, so the region outside the plan is never visible and the camera cannot
  * reach it. The grime line and the noise fade come from [[edgeSetDist]]
  * against the ring edges, not from the mesh, so they follow the true plan
  * boundary regardless of how far the quad extends past it.
  *
  * `margin` widens it on every side — for a light plane that has to overhang
  * far enough that no reachable sightline finds its edge.
  *
  * UV is the quad's own [0,1]²: `u` along +X, `v` along -Z. This matches the
  * frame a texture size is derived from, so texel density stays uniform.
  */
def planeQuad(
    bounds: (minX: Double, minZ: Double, maxX: Double, maxZ: Double),
    y: Double,
    faceUp: Boolean,
    margin: Double = 0.0,
): Quad[RoomVertex] =
  val x0 = bounds.minX - margin
  val x1 = bounds.maxX + margin
  val z0 = bounds.minZ - margin
  val z1 = bounds.maxZ + margin
  val w = x1 - x0
  val d = z1 - z0
  def c(x: Double, z: Double): RoomVertex =
    (position = Vec3(x, y, z), uv = Vec2((x - x0) / w, (z1 - z) / d))
  if faceUp then Quad(c(x0, z0), c(x0, z1), c(x1, z1), c(x1, z0))
  else Quad(c(x0, z1), c(x0, z0), c(x1, z0), c(x1, z1))
