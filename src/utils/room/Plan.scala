package sketchlib.utils.room

import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// The floor plan — rings, the boundary derived from them, and the 2D queries
// every room asks of it.
//
// Plain data and free functions over it. There is no room object, no builder
// and no configuration surface: a sketch that wants something else here
// constructs `Arr[Ring]` or `Arr[Edge]` itself and everything downstream still
// works. That property is the point of this module — see
// `documents/grid-ceiling-rooms-plan.md`, _Granularity matters more than
// layering_.
//
// NOTHING HERE MAKES A LOOK DECISION, which is exactly why it is shared. Tints,
// noise fields, fade widths, the grime line and the raster's shading stay in
// the sketch that owns them, duplicated between templates rather than
// parameterized here.
//
// Shared infrastructure compiled into many sketches, so it follows the
// trivalibs bundle-size discipline: `Arr`, `while`, no Scala collections, no
// `enum`, no allocation in anything a frame calls.
// ---------------------------------------------------------------------------

/** Which side of a ring the room is on. An ABSOLUTE claim about the world, not
  * a claim relative to how the ring's points happen to be ordered — see
  * [[Ring]] for why that distinction is the whole point, and
  * [[Boundary.ringEdges]] for the two lines that make it true.
  *
  * The codebase's opaque-type enum pattern
  * (`trivalibs/src/graphics/painter/enums.scala`) — a Scala `enum` compiles to
  * a class hierarchy plus `$values`/`ordinal` machinery, which is JS-bundle
  * weight for something that wants to be a constant. The library's opaque enums
  * alias `String` because their values cross into WebGPU; this one never leaves
  * Scala and is only ever used to flip an edge normal, so it aliases `Double`
  * and *is* that sign — no branch.
  */
opaque type Facing = Double
object Facing:
  /** The room is inside this loop — the outer boundary. */
  val Inward: Facing = 1.0

  /** The room is outside it — anything standing in the room: an O-shape's inner
    * box, a free-standing partition, a column, a plinth.
    */
  val Outward: Facing = -1.0
  extension (f: Facing) inline def sign: Double = f

/** One closed loop of the floor plan, in XZ. No repeated last point.
  *
  * **WINDING DOES NOT MATTER.** Order the points clockwise or counter-clockwise
  * as you please; `facing` says which side the room is on and that is the whole
  * of it. [[Boundary.ringEdges]] normalizes the winding away (one shoelace pass
  * per ring — see there), so a ring wound "backwards" produces byte-identical
  * geometry, just visited in the other order.
  *
  * That freedom is deliberate and is worth keeping: point order is what fixes
  * EDGE ORDER, and therefore wall index. An O-shaped room whose outer and inner
  * rings are wound the same way has wall `i` of one facing wall `i` of the
  * other, which is what lets curation address opposing walls by index. If
  * winding also decided normal direction, you could not have both.
  *
  * `height` is what makes a free-standing wall a filtering question rather than
  * a restructuring one: a partition is an `Outward` ring that stops below the
  * ceiling, an O-shape's inner box is the same thing at full height.
  */
case class Ring(
    points: Arr[Vec2], // XZ; `.x` is world X, `.y` is world Z
    facing: Facing,
    height: Double,
)

object Ring:
  /** A thin closed rectangle: a free-standing partition, a plinth, an O-shape's
    * inner box.
    *
    * A CLOSED LOOP, not a polyline, and that is what makes it cost nothing
    * elsewhere: the even-odd `contains` test, the `Outward` normals and the
    * wall derivation all work on it unchanged, so a partition is a filtering
    * question rather than a new concept. A genuinely single-sided wall would be
    * an open polyline and IS the one case that needs new code — reach for it
    * only if a room really wants one.
    *
    * `dir` need not be normalized. `Facing.Outward` is the normal case here:
    * the room is outside a partition.
    */
  def rect(
      center: Vec2,
      dir: Vec2,
      length: Double,
      thickness: Double,
      facing: Facing,
      height: Double,
  ): Ring =
    val len = (dir.x * dir.x + dir.y * dir.y).sqrt
    val d = Vec2(dir.x / len * length / 2.0, dir.y / len * length / 2.0)
    val n = Vec2(-d.y / length * thickness, d.x / length * thickness)
    Ring(
      points = Arr(
        Vec2(center.x + d.x + n.x, center.y + d.y + n.y),
        Vec2(center.x + d.x - n.x, center.y + d.y - n.y),
        Vec2(center.x - d.x - n.x, center.y - d.y - n.y),
        Vec2(center.x - d.x + n.x, center.y - d.y + n.y),
      ),
      facing = facing,
      height = height,
    )

/** The shape the room occupies in XZ — walls come from its edges, floor and
  * ceiling from its area, the camera is confined by it.
  *
  * A footprint is two-dimensional, so it carries no height: room height belongs
  * to the room being built and is passed where it is needed. [[Ring.height]]
  * stays, because a ring genuinely does extrude to one.
  */
case class Footprint(rings: Arr[Ring]) // rings(0) is the Inward outer boundary

/** One boundary segment `a → b` in XZ, with the room-side normal already
  * resolved from its ring's facing.
  */
case class Edge(a: Vec2, b: Vec2, inwardNormal: Vec2)

/** Rotate a 2D direction 90°. `perp(dir)` points into a counter-clockwise loop
  * and out of a clockwise one, which is exactly the winding dependence that
  * [[Boundary.ringEdges]] cancels before handing out a normal.
  */
inline def perp(d: Vec2): Vec2 = Vec2(-d.y, d.x)

/** A set of edges forming one or more CLOSED loops — never an arbitrary bag of
  * segments.
  *
  * This earns a type rather than an extension on `Arr[Edge]` because two of the
  * queries depend on the invariant SILENTLY. [[contains]] counts ray crossings,
  * so an unclosed loop gives an arbitrary answer and a duplicated edge flips
  * the parity twice and inverts it; [[cornerDist]] reads only each edge's `a`,
  * and only finds every vertex because the edges are loops. Order, by contrast,
  * is irrelevant to all of them — so this is a SET of loops, not a path, and
  * the concatenation of two boundaries is again a boundary. That is what lets
  * an inner ring join the outer one with no special casing anywhere.
  *
  * Rings are the ONLY source of edges: `ringEdges` is private to the companion,
  * so there is no way to reach a loose `Arr[Edge]` except by taking `.edges`
  * off something already valid.
  *
  * A class rather than an opaque alias over `Arr[Edge]`. Both would enforce the
  * invariant now that this lives in its own file (an opaque alias is
  * transparent only within its defining scope — in the sketch, where the whole
  * room was one file, it would have enforced nothing at all). The class is kept
  * because it costs one allocation per boundary at build time, `.edges` is a
  * field read, and the name appears in signatures and error messages.
  */
class Boundary private (val edges: Arr[Edge])

object Boundary:
  /** One ring is one closed loop, so it is a boundary on its own. */
  def apply(r: Ring): Boundary = new Boundary(ringEdges(r))

  /** Many rings — the concatenation of boundaries is again a boundary. */
  def apply(rings: Arr[Ring]): Boundary =
    val out = Arr[Edge]()
    var i = 0
    while i < rings.length do
      val es = ringEdges(rings(i))
      var j = 0
      while j < es.length do
        out.push(es(j))
        j += 1
      i += 1
    new Boundary(out)

  /** Twice the SIGNED area of the loop — the shoelace formula, `Σ pᵢ × pᵢ₊₁`.
    * Positive when the points wind counter-clockwise in (x, z), negative when
    * clockwise. Only the sign is used, so the `/2` is skipped.
    *
    * Each term is twice the signed area of the triangle `(origin, pᵢ, pᵢ₊₁)`;
    * summed around the loop the wedges outside the polygon cancel and the
    * polygon's own area is left. Correct for concave plans (an L, a notch) as
    * well as convex ones. Undefined only for a self-intersecting loop, which
    * has no inside to speak of either.
    */
  def signedArea2(ps: Arr[Vec2]): Double =
    val n = ps.length
    var acc = 0.0
    var i = 0
    while i < n do
      val a = ps(i)
      val b = ps(if i + 1 == n then 0 else i + 1)
      acc += a.x * b.y - b.x * a.y
      i += 1
    acc

  /** The ring's segments, each with its room-side normal already resolved.
    *
    * **This is where winding stops mattering.** `perp(dir)` alone points into a
    * counter-clockwise loop and out of a clockwise one, so on its own it would
    * make [[Facing]] a claim about point order rather than about the room.
    * Multiplying by the sign of the loop's signed area cancels that: reversing
    * the points flips `perp(dir)` AND flips the area sign, so their product is
    * invariant and `facing` alone decides the direction.
    *
    * One shoelace pass per ring, at build time — four multiply-subtract-adds
    * for a rectangle.
    */
  private def ringEdges(r: Ring): Arr[Edge] =
    val n = r.points.length
    val s =
      r.facing.sign * (if signedArea2(r.points) < 0.0 then -1.0 else 1.0)
    val out = Arr[Edge]()
    var i = 0
    while i < n do
      val a = r.points(i)
      val b = r.points(if i + 1 == n then 0 else i + 1)
      val dx = b.x - a.x
      val dz = b.y - a.y
      val len = (dx * dx + dz * dz).sqrt
      out.push(Edge(a, b, Vec2(-dz / len * s, dx / len * s)))
      i += 1
    out

extension (r: Ring)
  /** The ring as its own boundary — walls, and anything else that treats one
    * loop in isolation.
    */
  def boundary: Boundary = Boundary(r)

extension (fp: Footprint)
  /** Everything meets the floor — full-height walls and partitions alike. */
  def floorBoundary: Boundary = Boundary(fp.rings)

  /** Only what reaches the ceiling bounds it. A partition is filtered out here,
    * which is the whole of why a ceiling raster runs over it uninterrupted.
    *
    * Height is a stand-in for the real predicate — what BOUNDS the ceiling is
    * not the same as what reaches it, and a column reaches it without
    * interrupting the raster. When a room needs that distinction, replace this
    * with an explicit `boundsCeiling` flag on [[Ring]].
    */
  def ceilingBoundary(roomHeight: Double): Boundary =
    val rs = Arr[Ring]()
    var i = 0
    while i < fp.rings.length do
      val r = fp.rings(i)
      if r.height >= roomHeight then rs.push(r)
      i += 1
    Boundary(rs)

  /** Axis-aligned bounds of the whole plan: `(minX, minZ, maxX, maxZ)`. */
  def bounds: (minX: Double, minZ: Double, maxX: Double, maxZ: Double) =
    var minX = Double.PositiveInfinity
    var minZ = Double.PositiveInfinity
    var maxX = Double.NegativeInfinity
    var maxZ = Double.NegativeInfinity
    var i = 0
    while i < fp.rings.length do
      val ps = fp.rings(i).points
      var j = 0
      while j < ps.length do
        val p = ps(j)
        if p.x < minX then minX = p.x
        if p.x > maxX then maxX = p.x
        if p.y < minZ then minZ = p.y
        if p.y > maxZ then maxZ = p.y
        j += 1
      i += 1
    (minX = minX, minZ = minZ, maxX = maxX, maxZ = maxZ)

extension (bnd: Boundary)
  /** Intersect the infinite line `origin + t·dir` with every edge, sort the
    * hits by `t`, and keep the intervals whose midpoint is inside the plan.
    *
    * Parameterized by a LINE rather than an axis, so it serves beams at any
    * angle. Called on an explicit boundary because a ceiling raster is bounded
    * only by what reaches the ceiling — using `ceilingBoundary` is what lets
    * the grid run over a free-standing partition uninterrupted, which is the
    * correct read: the grid is a ceiling feature and does not know the
    * partition is there.
    *
    * On a convex plan this returns one interval; on an L, lines crossing the
    * notch return two.
    */
  def clipLine(origin: Vec2, dir: Vec2): Arr[(from: Double, to: Double)] =
    // Solve `origin + t·dir = a + s·e` per edge, keeping hits with 0 ≤ s ≤ 1.
    //   [dir.x  -e.x] [t]   [a.x - origin.x]
    //   [dir.z  -e.z] [s] = [a.z - origin.z]
    val edges = bnd.edges
    val ts = Arr[Double]()
    var i = 0
    while i < edges.length do
      val e = edges(i)
      val ex = e.b.x - e.a.x
      val ez = e.b.y - e.a.y
      val det = ex * dir.y - ez * dir.x
      // |det| ~ 0 means the line is parallel to this edge: no crossing, and a
      // collinear edge would contribute a degenerate interval either way.
      if det.abs > 1e-12 then
        val rx = e.a.x - origin.x
        val rz = e.a.y - origin.y
        val s = (dir.x * rz - dir.y * rx) / det
        if s >= 0.0 && s <= 1.0 then ts.push((ex * rz - ez * rx) / det)
      i += 1
    val out = Arr[(from: Double, to: Double)]()
    if ts.length < 2 then return out
    // Insertion sort: a handful of hits, and it keeps this free of any Scala
    // collection or comparator plumbing.
    var m = 1
    while m < ts.length do
      val v = ts(m)
      var q = m - 1
      while q >= 0 && ts(q) > v do
        ts(q + 1) = ts(q)
        q -= 1
      ts(q + 1) = v
      m += 1
    var j = 0
    while j < ts.length - 1 do
      val t0 = ts(j)
      val t1 = ts(j + 1)
      val mid = (t0 + t1) * 0.5
      if t1 - t0 > 1e-9
        && bnd.contains(Vec2(origin.x + dir.x * mid, origin.y + dir.y * mid))
      then out.push((from = t0, to = t1))
      j += 1
    out
