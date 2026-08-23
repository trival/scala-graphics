package sketchlib.utils.room

import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Camera confinement — CPU queries over the same ring data the shader emitters
// unroll over.
//
// These run PER FRAME, which is why they are `while` loops over `Arr` with no
// allocation in the hot path, unlike the build-time shader emitters in
// `Fields.scala` that may stay readable. The shader version unrolls into WGSL
// at build time and cannot be reused at runtime, so this small CPU
// implementation lives beside it — same ring data, two shapes of code.
//
// Pure behavior with no look decision in it at all: this is the strongest case
// in the whole design for being shared rather than hand-written per sketch.
// ---------------------------------------------------------------------------

extension (bnd: Boundary)
  /** Closest point on any edge to `pxz`, its distance, and the inward normal of
    * the edge it landed on. Same segment projection as the shader's `segDist`,
    * but returning the point.
    */
  def nearest(pxz: Vec2): (point: Vec2, dist: Double, inward: Vec2) =
    val edges = bnd.edges
    var bestD = Double.PositiveInfinity
    var qx = 0.0
    var qz = 0.0
    var nx = 0.0
    var nz = 0.0
    var i = 0
    while i < edges.length do
      val e = edges(i)
      val ex = e.b.x - e.a.x
      val ez = e.b.y - e.a.y
      var t =
        ((pxz.x - e.a.x) * ex + (pxz.y - e.a.y) * ez) / (ex * ex + ez * ez)
      if t < 0.0 then t = 0.0
      else if t > 1.0 then t = 1.0
      val cx = e.a.x + ex * t
      val cz = e.a.y + ez * t
      val dx = pxz.x - cx
      val dz = pxz.y - cz
      val d = (dx * dx + dz * dz).sqrt
      if d < bestD then
        bestD = d
        qx = cx
        qz = cz
        nx = e.inwardNormal.x
        nz = e.inwardNormal.y
      i += 1
    (point = Vec2(qx, qz), dist = bestD, inward = Vec2(nx, nz))

  /** Even-odd ray crossing over every edge — hence the closed-loop invariant.
    * Inner rings need no special casing: their edges flip the parity, so the
    * interior of an O-shape's inner box, or of a partition, correctly counts as
    * OUTSIDE the room.
    */
  def contains(pxz: Vec2): Boolean =
    val edges = bnd.edges
    var inside = false
    var i = 0
    while i < edges.length do
      val a = edges(i).a
      val b = edges(i).b
      if (a.y > pxz.y) != (b.y > pxz.y) then
        val t = (pxz.y - a.y) / (b.y - a.y)
        if pxz.x < a.x + t * (b.x - a.x) then inside = !inside
      i += 1
    inside

  /** One clamp pass: push `pxz` to `margin` from the single NEAREST edge.
    *
    * A POSITION clamp, not a movement veto — and that is what makes walking
    * diagonally into a wall *slide* along it rather than stick: pushing out
    * along `pxz - q` is a projection onto the margin offset curve, so the
    * component of motion parallel to the wall survives untouched.
    */
  private def confinePass(pxz: Vec2, margin: Double): Vec2 =
    val nb = bnd.nearest(pxz)
    // Recovery path, not the normal one: at 1 m/s and 60 fps a frame moves
    // ~1.7 cm, so with a 0.5 m margin the camera cannot tunnel through in one
    // step. This only matters if it is spawned outside the plan or teleported.
    // The same branch covers landing exactly ON an edge, where the push-out
    // direction below would be a zero vector.
    if !bnd.contains(pxz) || nb.dist < 1e-9 then
      Vec2(nb.point.x + nb.inward.x * margin, nb.point.y + nb.inward.y * margin)
    else if nb.dist < margin then
      val s = margin / nb.dist
      Vec2(
        nb.point.x + (pxz.x - nb.point.x) * s,
        nb.point.y + (pxz.y - nb.point.y) * s,
      )
    else pxz

  /** Clamp a camera position to `margin` meters inside the plan, then pin `y`.
    * Pass `pos.y` as `eyeY` to leave height free.
    *
    * **Two passes, not one.** A single nearest-edge clamp satisfies only the
    * wall it picked, so in a corner where two walls both push, the camera
    * creeps into the wedge — measured at 0.01 m from a wall in the worst case,
    * well inside a 0.1 m near plane. Note this is not an odd-shape problem
    * waiting for an L: a rectangle's four INNER corners are already concave, so
    * a box needs this too.
    *
    * Two passes clear every case and a third changes nothing — it converges for
    * any convex-angle pair. Do not reach for general multi-constraint
    * resolution. (A convex corner, such as the outer face of an O-shape's inner
    * box, needs only one pass: its margin curve is a rounded arc that a single
    * nearest-point clamp already produces correctly.)
    */
  def confine(pos: Vec3, margin: Double, eyeY: Double): Vec3 =
    val once = bnd.confinePass(pos.xz, margin)
    val twice = bnd.confinePass(once, margin)
    Vec3(twice.x, eyeY, twice.y)

  /** One clearance pass — [[confinePass]] with the containment test inverted.
    */
  private def clearPass(pxz: Vec2, margin: Double): Vec2 =
    val nb = bnd.nearest(pxz)
    if bnd.contains(pxz) || nb.dist < 1e-9 then
      Vec2(nb.point.x + nb.inward.x * margin, nb.point.y + nb.inward.y * margin)
    else if nb.dist < margin then
      val s = margin / nb.dist
      Vec2(
        nb.point.x + (pxz.x - nb.point.x) * s,
        nb.point.y + (pxz.y - nb.point.y) * s,
      )
    else pxz

  /** [[confine]]'s complement: keep the camera `margin` meters OUTSIDE every
    * loop in `bnd`, then pin `y`. Pass `pos.y` as `eyeY` to leave height free.
    *
    * For a space that has no outer boundary at all — a free-standing wall on an
    * open plate, a cluster of objects standing in the open — where the only
    * thing to clamp against is the solid the camera must not walk into.
    * [[confine]] cannot express that: it reads `contains` as "in the room", and
    * with only `Facing.Outward` rings present that parity is inverted, so every
    * point in the open space looks like an escape and takes the recovery
    * branch. Same edges, same margin, opposite sense — hence a second function
    * rather than a flag.
    *
    * It needs no matching `Facing`: `contains` is pure even-odd parity over the
    * loops and never reads one, and the push-out direction comes from the
    * edges' own normals — which for the `Facing.Outward` rings these loops
    * normally are, already point away from the solid.
    *
    * Two passes, like [[confine]], and for the same reason — one pass satisfies
    * only the nearest edge, so a camera squeezed between two separate solids
    * would settle inside the margin of one of them. A single convex solid
    * converges in one, since its margin curve is a rounded arc that a
    * nearest-point clamp already produces correctly.
    */
  def clearOf(pos: Vec3, margin: Double, eyeY: Double): Vec3 =
    val once = bnd.clearPass(pos.xz, margin)
    val twice = bnd.clearPass(once, margin)
    Vec3(twice.x, eyeY, twice.y)
