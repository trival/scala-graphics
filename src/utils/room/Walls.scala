package sketchlib.utils.room

import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Wall derivation — the mechanical part of turning a boundary edge into a
// surface something can be hung on.
// ---------------------------------------------------------------------------

/** The vertex layout every room surface is built with: position plus the UV
  * that its baked panel is addressed by.
  */
type RoomVertex = (position: Vec3, uv: Vec2)

/** One wall side: where it sits in the plan, and the frame an exhibition needs
  * in order to hang something on it.
  *
  * Note what is NOT here: no painting list, no `animated` flag, no count. How
  * many pieces hang and where is curation, and lives in the sketch — the stage
  * owes a frame and a usable span, not a policy.
  *
  * Note also what is not here: no `Form`. A wall is PLAN DATA, and a `Form` is
  * a GPU resource that only a `Painter` can make — carrying one would mean this
  * whole derivation could not run without a painter, and could not be inspected
  * or tested apart from one. [[Beam]] is pure the same way; the form is built
  * at the use site from [[quad]].
  */
case class Wall(
    center: Vec3,
    width: Double,
    height: Double,
    inwardNormal: Vec3,
)

extension (w: Wall)
  /** The wall's orientation about Y, for anything that needs an angle rather
    * than a normal — a hung piece's model matrix, in practice.
    *
    * Derived, not stored: `inwardNormal` is the one representation of a wall's
    * orientation, and a second copy of the same fact is a thing that can drift
    * out of step with it. Costs one `atan2` per hung piece, at build time.
    */
  def rotY: Double = Math.atan2(w.inwardNormal.x, w.inwardNormal.z)

  /** The wall's quad in world space, UV [0,1] (tl = (0,0), `v` down). */
  def quad: Quad[RoomVertex] =
    // Wall-local horizontal axis (UV.x runs along it); UV.y runs down.
    val right = Vec3.Y.cross(w.inwardNormal)
    def corner(su: Double, sv: Double, u: Double, v: Double): RoomVertex =
      val pos =
        w.center + right * (su * w.width / 2.0) + Vec3.Y * (sv * w.height / 2.0)
      (position = pos, uv = Vec2(u, v))
    Quad(
      corner(-1.0, 1.0, 0.0, 0.0),
      corner(-1.0, -1.0, 0.0, 1.0),
      corner(1.0, -1.0, 1.0, 1.0),
      corner(1.0, 1.0, 1.0, 0.0),
    )

  /** Where a point sits on this wall, as `(centerFromLeft, centerHeight)` would
    * place it: world position of a wall-local point, `fromLeft` running along
    * the wall from its left edge as seen from inside and `height` up from the
    * floor. Both are WORLD METERS, not UV.
    */
  def pointAt(fromLeft: Double, height: Double): Vec3 =
    val right = Vec3.Y.cross(w.inwardNormal)
    w.center
      + right * (fromLeft - w.width / 2.0)
      + Vec3.Y * (height - w.height / 2.0)

/** One wall per boundary edge.
  *
  * The wall's top is `topY`, not the room height: with a grid ceiling the
  * perimeter beam takes over the wall plane above it, and a partition stops at
  * its own ring height. The caller decides — a flat-ceilinged room passes
  * `CeilY`, a grid room passes `CeilY - StripHeight`.
  *
  * Orientation is carried ONCE, as `inwardNormal`. Anything wanting it as an
  * angle takes [[rotY]] where it needs it, rather than the wall storing a
  * second copy of the same fact that can drift out of step with the first.
  *
  * LATENT ASSUMPTION: `center.y = topY/2` and `height = topY` put the floor at
  * `y = 0`. The representation supports a raised wall fine — only those two
  * lines do not. Add a `bottomY` parameter when something needs it.
  */
def wallsFrom(bnd: Boundary, topY: Double): Arr[Wall] =
  val edges = bnd.edges
  val out = Arr[Wall]()
  var i = 0
  while i < edges.length do
    val e = edges(i)
    val dx = e.b.x - e.a.x
    val dz = e.b.y - e.a.y
    out.push(
      Wall(
        center = Vec3((e.a.x + e.b.x) / 2.0, topY / 2.0, (e.a.y + e.b.y) / 2.0),
        width = (dx * dx + dz * dz).sqrt,
        height = topY,
        inwardNormal = Vec3(e.inwardNormal.x, 0.0, e.inwardNormal.y),
      ),
    )
    i += 1
  out
