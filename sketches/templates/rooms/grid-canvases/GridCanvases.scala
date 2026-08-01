package sketches.templates.rooms.gridcanvases

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.GaussianMirrorReflection
import trivalibs.dev.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// TEMPLATE — a walkable exhibition room on an arbitrary floor plan.
//
// Open it, read it, copy it, tune it. See PLAN.md for the longer why, and
// `documents/grid-ceiling-rooms-plan.md` for the full design rationale.
//
// The unit is the METER everywhere: every dimension, offset, fade width and
// margin below is meters. `u`/`v`/`uv` mean normalized [0,1] texture
// coordinates and nothing else.
// ---------------------------------------------------------------------------

// ===========================================================================
// TUNABLES — everything an exhibition re-tunes lives in this block.
// Nothing tunable should hide further down the file.
// ===========================================================================

// ---- The ceiling beam lattice, and the room derived from it ----------------
//
// For an axis-aligned plan, do NOT snap the grid to the room — derive the room
// from the grid. Beam centerlines sit at k·GridSpacing; each wall plane lands
// flush with the outer face of the beam nearest the wanted extent. The beam
// adjacent to each wall then IS the perimeter beam: no extra generator, no
// special-cased geometry, and the light openings are inset by one beam width at
// every wall rather than dying into the corner. That inset is the intended
// architectural transition, not a side effect.
//
// A plan whose walls are not parallel to a beam family — a hexagon — cannot
// snap, and needs an explicit perimeter-beam generator instead. This is the
// free path where it applies.
val GridSpacing = 0.45
val StripWidth = 0.10
val StripHeight = 0.35

/** Vertical offset between successive beam families, to keep their soffits from
  * being coplanar where they cross. See the family loop for why this is needed
  * and why this size.
  */
val FamilyYStagger = 0.0006

/** Snap a wanted half-extent (meters) out to the outer face of the nearest
  * beam.
  */
def snapHalfExtent(wanted: Double): Double =
  val k = Math.round((wanted - StripWidth / 2.0) / GridSpacing).toDouble
  k * GridSpacing + StripWidth / 2.0

// Room extents are DERIVED, not authored — tune the wanted values, read the
// snapped ones. (6.5 → 6.70, 10.0 → 10.00 at the spacing above.)
val RoomWidth = snapHalfExtent(6.5 / 2.0) * 2.0
val RoomDepth = snapHalfExtent(10.0 / 2.0) * 2.0
val RoomHeight = 5.5

/** How close the visitor may get to any surface, including the outer faces of
  * anything standing in the room and the faces of hung pieces.
  */
val WallClearance = 0.5

/** The walking plane. `y` is locked to this — see the confinement section. */
val EyeHeight = 1.7

/** Ceiling line — the top of the raster, and where the room still reads as
  * having a ceiling from eye height.
  */
val CeilY = RoomHeight

/** Where the *visible* wall ends, and what a wall's shading fades against.
  *
  * The wall stops one beam-height below the ceiling line because the perimeter
  * beam's outer face continues the same plane up to `CeilY` — two surfaces, one
  * continuous plane, no overlap. Capping the geometry here is tidiness rather
  * than a fix (the beam's outer face points out of the room and is never
  * drawn), but it keeps the mesh agreeing with the `topY` the shading uses.
  *
  * Separate from `CeilY` so a flat-ceilinged room asks for `CeilY` instead, and
  * so a partition can carry its own top.
  */
val WallTopY = CeilY - StripHeight

/** Depth of the wall tint gradient below `WallTopY`. A broad settling of tone
  * where wall meets ceiling — NOT an edge effect, and not occlusion.
  */
val TopFadeDepth = 0.4

// ---- The coffer: a luminous plane recessed behind the raster ---------------
//
// The parallax the room is built around is plain perspective, no trick: at 1.7 m
// eye height a 1.0 m coffer gives eye-to-soffit 3.55 m vs eye-to-light 4.80 m,
// so the light plane moves ~26 % slower than the raster under camera
// translation. `CofferDepth` is the knob for how pronounced that reads.
val CofferDepth = 1.0

/** The luminous plane's height. */
val LightY = CeilY + CofferDepth

/** How far the light plane overhangs the plan on every side.
  *
  * The coffer needs no reveal walls — a raster occluding a luminous plane
  * already reads as a recess. The one real risk is seeing PAST the plane's edge
  * on a shallow ray through the gap at a wall, which shows as a strip of
  * background where light should be. The fix is to make the plane wide enough
  * that every reachable sightline still lands on it.
  *
  * DERIVED rather than eyeballed, because the requirement is geometric and
  * changes with the room, the coffer depth and the eye height — three things a
  * copy of this template is likely to change together. The worst case is the
  * shallowest ray a visitor can construct: standing at the far wall (so
  * `WallClearance` from it), eye at `EyeHeight`, looking through the near
  * wall's junction with the raster at `WallTopY`, and continuing to `LightY`.
  *
  * This is the exception to "do not derive a constant that could be a
  * constant": that rule is about LOOK values, which hide an assumption when
  * computed. This one is a correctness bound, and hard-coding it is how it
  * silently goes stale.
  */
val LightOverhang =
  (LightY - WallTopY) * (RoomWidth.max(RoomDepth) - WallClearance)
    / (WallTopY - EyeHeight) * 1.05 // 5 % margin off the exact tangent

/** Baked texels per world meter for the AMBIENCE field only. It is smooth,
  * low-frequency noise, so this is deliberately cheap — a 6.5 m wall bakes to
  * ~312 px. A wall or floor carrying its own artwork gets its own, much higher
  * resolution as a separate panel; do NOT raise this to sharpen artwork.
  */
val AmbienceTexScale = 48.0

/** How far from a geometry edge the normal-dependent noise term is fully faded
  * out. This makes corners read as slightly ROUNDED — one noise blending into
  * the other. It is a material property, not light absorption.
  */
val EdgeFadeWorld = 0.08

/** The floor grime line: dirt collecting where wall meets floor. Its own width,
  * deliberately separate from `EdgeFadeWorld` — they are unrelated quantities
  * that `canvases` happened to give the same number.
  */
val GrimeWidth = 0.08
val GrimeDarken = 0.93 // brightness multiplier right at the junction

// Surface tints. Authored as CPU vectors, lifted with `vec3(…)` in the bakers.
val FloorTint = Vec3(0.80, 0.78, 0.75)
val CeilTint = Vec3(0.86, 0.86, 0.85)
val WallTintLow = Vec3(0.97, 0.97, 0.96)
val WallTintHigh = Vec3(0.88, 0.88, 0.87)

// ---- The light shader's own tunables --------------------------------------
//
// WHAT THE LIGHT PLANE EMITS IS YOURS. The room owns the plane's position,
// extent and HDR format, and wires bloom to it; what fills it is a shader this
// sketch supplies, exactly like canvas content. Keep the halo strips, make it
// bulbs behind diffuse glass, make it read as sky, give it a color cast —
// all legitimate, none of them the room's business.
//
// Four things any replacement must respect, all technical rather than
// aesthetic: stay above the bloom threshold where it should bloom; keep the
// MIRRORED copy below threshold after `reflStrength` or the floor re-blooms;
// cover the overhang, so a shallow ray never finds an unlit edge; and express
// structure in WORLD METERS, not the plane's UV, if the plan is not a rectangle
// (see below).
/** HDR emission, above the bloom threshold of 1.0.
  *
  * **This value is capped by the MIRROR, not by taste.** The floor composites
  * `base·(1−mix) + reflection·mix`, and at the light plane's height
  * `mix = 0.6 · reflStrength = 0.15`. With the floor's brightest base around
  * 0.80 that leaves `1.0 − 0.80·0.85 = 0.32` of headroom, so anything above
  * `0.32 / 0.15 ≈ 2.1` pushes the REFLECTION over the threshold and the floor
  * blooms as a second light source instead of reading as a soft blur.
  *
  * `canvases`' 8.0 does not transfer: there it lit thin halo strips covering a
  * few percent of the ceiling, here it lights the whole plane. Same number,
  * vastly more above-threshold area.
  *
  * To make the glow stronger or weaker, move `Bloom(intensity)` below — that
  * knob is free. This one is not.
  */
val LightColor = Vec3(2.0, 1.9, 1.7)

// A slow undulation in strength, so the plane is not a flat field. Deliberately
// minimal: this is the shader you are meant to replace.
//
// Meters rather than UV here because the blob size should not stretch when the
// room's aspect changes — NOT because UV is discouraged. The two say different
// things and both are right sometimes: UV means "N features spanning the plane"
// (six halos stay six in any room), meters means "features every N m" (spacing
// stays put, count grows). A halo shader in this slot would rightly use UV.
val LightWaveMetersX = 5.0 // period along X
val LightWaveMetersZ = 3.7 // along Z — deliberately not a multiple of X, so the
// two never line up into a visible grid
val LightWaveAmount = 0.12 // ±12 % on strength; stays well above threshold

// ===========================================================================
// STRUCTURAL — the floor plan and everything derived from it.
//
// Written to library discipline (Arr, while, no Scala collections, no `enum`):
// this cluster is headed for `src/utils/room/` once a second room shape exists,
// so it is written as library code that has not moved yet.
// ===========================================================================

val Up = Vec3.Y
val Tau = 2.0 * math.Pi

/** Which side of a ring the room is on.
  *
  * The codebase's opaque-type enum pattern (`graphics/painter/enums.scala`) — a
  * Scala `enum` compiles to a class hierarchy plus `$values`/`ordinal`
  * machinery, which is JS-bundle weight for something that wants to be a
  * constant. The library's opaque enums alias `String` because their values
  * cross into WebGPU; this one never leaves Scala and is only ever used to flip
  * an edge normal, so it aliases `Double` and *is* that sign — no branch.
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
  * `height` is what makes a free-standing wall a filtering question rather than
  * a restructuring one: a partition is an `Outward` ring that stops below the
  * ceiling, an O-shape's inner box is the same thing at full height. Nothing in
  * this template uses either yet — that is the point of carrying them now.
  */
case class Ring(
    points: Arr[Vec2], // XZ; `.x` is world X, `.y` is world Z
    facing: Facing,
    height: Double,
)

/** The shape the room occupies in XZ — walls come from its edges, floor and
  * ceiling from its area, the camera is confined by it.
  *
  * A footprint is two-dimensional, so it carries no height: room height belongs
  * to the room being built and is passed where it is needed. `Ring.height`
  * stays, because a ring genuinely does extrude to one.
  */
case class Footprint(rings: Arr[Ring]) // rings(0) is the Inward outer boundary

/** One boundary segment `a → b` in XZ, with the room-side normal already
  * resolved from its ring's facing.
  */
case class Edge(a: Vec2, b: Vec2, inwardNormal: Vec2)

/** Rotate a 2D direction 90°. With rings wound so that this points into the
  * room for an `Inward` ring, `perp(dir) * facing.sign` is the inward normal
  * for any ring — which is what gives an O-shape's inner box, and later a
  * partition, hangable faces on every side.
  */
inline def perp(d: Vec2): Vec2 = Vec2(-d.y, d.x)

/** A set of edges forming one or more CLOSED loops — never an arbitrary bag of
  * segments.
  *
  * This earns a type rather than an extension on `Arr[Edge]` because two of the
  * queries below depend on the invariant SILENTLY. `contains` counts ray
  * crossings, so an unclosed loop gives an arbitrary answer and a duplicated
  * edge flips the parity twice and inverts it; `cornerDist` reads only each
  * edge's `a`, and only finds every vertex because the edges are loops. Order,
  * by contrast, is irrelevant to all of them — so this is a SET of loops, not a
  * path, and the concatenation of two boundaries is again a boundary. That is
  * what lets an inner ring join the outer one with no special casing anywhere.
  *
  * A wrapper class with a PRIVATE constructor, not an opaque type over
  * `Arr[Edge]`: an opaque alias is transparent inside its own file, so here —
  * where the whole room is one file — it would enforce nothing at all. The cost
  * is one allocation per boundary at build time, and `.edges` is a field read.
  *
  * Rings are the ONLY source of edges, so there is no way to reach a loose
  * `Arr[Edge]` except by taking `.edges` off something already valid.
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

  /** The ring's segments, each with its room-side normal already resolved. */
  private def ringEdges(r: Ring): Arr[Edge] =
    val n = r.points.length
    val out = Arr[Edge]()
    var i = 0
    while i < n do
      val a = r.points(i)
      val b = r.points(if i + 1 == n then 0 else i + 1)
      val dx = b.x - a.x
      val dz = b.y - a.y
      val len = (dx * dx + dz * dz).sqrt
      val s = r.facing.sign
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
    * which is the whole of why the grid runs over it uninterrupted.
    *
    * Height is a stand-in for the real predicate — what BOUNDS the ceiling is
    * not the same as what reaches it, and a column reaches it without
    * interrupting the raster. When a room needs that distinction, replace this
    * with an explicit `boundsCeiling` flag on `Ring`.
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

// ---------------------------------------------------------------------------
// Camera confinement — CPU queries over the same ring data.
//
// These run PER FRAME, which is why they are `while` loops over `Arr` with no
// allocation in the hot path, unlike the build-time shader emitters above that
// may stay readable. The shader version unrolls into WGSL at build time and
// cannot be reused at runtime, so this small CPU implementation lives beside
// it — same ring data, two shapes of code.
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
    * well inside the 0.1 m near plane. Note this is not an odd-shape problem
    * waiting for an L: a rectangle's four INNER corners are already concave, so
    * the box needs this too.
    *
    * Two passes clear every case and a third changes nothing — it converges for
    * any convex-angle pair. Do not reach for general multi-constraint
    * resolution. (A convex corner, such as the outer face of an O-shape's inner
    * box, needs only one pass: its margin curve is a rounded arc that a single
    * nearest-point clamp already produces correctly.)
    */
  def confine(pos: Vec3, margin: Double, eyeY: Double): Vec3 =
    val once = bnd.confinePass(Vec2(pos.x, pos.z), margin)
    val twice = bnd.confinePass(once, margin)
    Vec3(twice.x, eyeY, twice.y)

// ---------------------------------------------------------------------------
// The ceiling raster.
//
// A FLAT LIST OF BEAM SEGMENTS, not a pair of axis-aligned grids. That is the
// one structural choice here that has to be right up front: a hexagonal room
// wants a TRIANGULAR raster — three families each parallel to one opposite wall
// pair — and a non-snappable plan additionally wants an explicit perimeter beam
// along each wall. Neither is built here, but both must be additive, and both
// are just another producer pushing into the same `Arr[Beam]`.
// ---------------------------------------------------------------------------

/** One beam: an oriented segment in the grid plane. `soffitY` is its underside
  * — carried per beam rather than taken from a room constant so families can be
  * staggered against each other (see `FamilyYStagger`).
  */
case class Beam(
    a: Vec2,
    b: Vec2,
    width: Double,
    height: Double,
    soffitY: Double,
)

/** A family of parallel beams covering the plan. `dir` is the direction the
  * beams run; the family's lines are spaced along its perpendicular, offset by
  * `phase`.
  */
case class BeamFamily(
    dir: Vec2,
    spacing: Double,
    phase: Double,
    width: Double,
)

/** Intersect the infinite line `origin + t·dir` with every edge, sort the hits
  * by `t`, and keep the intervals whose midpoint is inside the plan.
  *
  * Parameterized by a LINE rather than an axis, so it serves field beams at any
  * angle and, later, perimeter beams. Called on an explicit boundary because
  * the raster is bounded only by what reaches the ceiling — using
  * `ceilingBoundary` is what lets the grid run over a free-standing partition
  * uninterrupted, which is the correct read: the grid is a ceiling feature and
  * does not know the partition is there.
  *
  * On a convex plan this returns one interval; on an L, lines crossing the
  * notch return two.
  */
extension (bnd: Boundary)
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

/** The field raster for one family, clipped to the plan.
  *
  * The offset range is found by projecting every plan vertex onto the family's
  * normal, which works for any direction and any plan — unlike "extent /
  * spacing over the bounding box", which only works for an axis-aligned family.
  */
def familyBeams(
    f: BeamFamily,
    bnd: Boundary,
    height: Double,
    soffitY: Double,
): Arr[Beam] =
  val edges = bnd.edges
  val nx = -f.dir.y
  val nz = f.dir.x
  var minO = Double.PositiveInfinity
  var maxO = Double.NegativeInfinity
  var i = 0
  while i < edges.length do
    val o = edges(i).a.x * nx + edges(i).a.y * nz
    if o < minO then minO = o
    if o > maxO then maxO = o
    i += 1
  val out = Arr[Beam]()
  var k = Math.ceil((minO - f.phase) / f.spacing).toDouble
  val kMax = Math.floor((maxO - f.phase) / f.spacing).toDouble
  while k <= kMax do
    val off = f.phase + k * f.spacing
    val origin = Vec2(nx * off, nz * off)
    val spans = bnd.clipLine(origin, f.dir)
    var s = 0
    while s < spans.length do
      val sp = spans(s)
      out.push(
        Beam(
          a = Vec2(origin.x + f.dir.x * sp.from, origin.y + f.dir.y * sp.from),
          b = Vec2(origin.x + f.dir.x * sp.to, origin.y + f.dir.y * sp.to),
          width = f.width,
          height = height,
          soffitY = soffitY,
        ),
      )
      s += 1
    k += 1.0
  out

/** One wall side: where it sits in the plan, and the frame an exhibition needs
  * in order to hang something on it.
  *
  * Note what is NOT here: no painting list, no `animated` flag, no count. How
  * many pieces hang and where is curation, and lives in the sketch that copies
  * this one — the stage owes a frame and a usable span, not a policy.
  *
  * Note also what is not here: no `Form`. A wall is PLAN DATA, and a `Form` is
  * a GPU resource that only a `Painter` can make — carrying one would mean this
  * whole derivation could not run without a painter, and could not be inspected
  * or tested apart from one. `Beam` above is pure the same way; the form is
  * built at the use site from `wall.quad`.
  */
case class Wall(
    center: Vec3,
    width: Double,
    height: Double,
    inwardNormal: Vec3,
)

type RoomVertex = (position: Vec3, uv: Vec2)

extension (w: Wall)
  /** The wall's quad in world space, UV [0,1] (tl = (0,0), `v` down). */
  def quad: Quad[RoomVertex] =
    // Wall-local horizontal axis (UV.x runs along it); UV.y runs down.
    val right = Up.cross(w.inwardNormal)
    def corner(su: Double, sv: Double, u: Double, v: Double): RoomVertex =
      val pos =
        w.center + right * (su * w.width / 2.0) + Up * (sv * w.height / 2.0)
      (position = pos, uv = Vec2(u, v))
    Quad(
      corner(-1.0, 1.0, 0.0, 0.0),
      corner(-1.0, -1.0, 0.0, 1.0),
      corner(1.0, -1.0, 1.0, 1.0),
      corner(1.0, 1.0, 1.0, 0.0),
    )

/** One wall per boundary edge.
  *
  * The wall's top is `topY`, not the room height: with a grid ceiling the
  * perimeter beam takes over the wall plane above `WallTopY`, and a partition
  * stops at its own ring height.
  *
  * Orientation is carried ONCE, as `inwardNormal`. Anything wanting it as an
  * angle — a painting's model matrix, say — takes `atan2(n.x, n.z)` where it
  * needs it, rather than the wall storing a second copy of the same fact that
  * can drift out of step with the first.
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

@main def roomsGridCanvases(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    val sampler = p.samplerLinear

    // -----------------------------------------------------------------------
    // The floor plan
    // -----------------------------------------------------------------------

    // A rectangle, wound so that `perp(edgeDir)` points into the room:
    // (-x,-z) → (+x,-z) → (+x,+z) → (-x,+z).
    //
    // THIS IS THE ONLY PLACE THE ROOM SHAPE IS DECIDED. An L is a 6-point ring
    // here and nothing else; a hexagon is a 6-point ring at 60°. Everything
    // below derives from these points.
    val hw = RoomWidth / 2.0
    val hd = RoomDepth / 2.0
    val footprint = Footprint(
      Arr(
        Ring(
          points = Arr(
            Vec2(-hw, -hd),
            Vec2(hw, -hd),
            Vec2(hw, hd),
            Vec2(-hw, hd),
          ),
          facing = Facing.Inward,
          height = RoomHeight,
        ),
      ),
    )

    val floorBnd = footprint.floorBoundary
    val ceilBnd = footprint.ceilingBoundary(RoomHeight)
    val bb = footprint.bounds
    val bbW = bb.maxX - bb.minX
    val bbD = bb.maxZ - bb.minZ

    // -----------------------------------------------------------------------
    // Geometry
    // -----------------------------------------------------------------------

    def vert(c: Vec3, u: Double, v: Double): RoomVertex =
      (position = c, uv = Vec2(u, v))

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    /** Floor and ceiling are the plan's BOUNDING-BOX quad, not the plan polygon
      * — there is no triangulation anywhere in this design. On an L-shaped plan
      * the floor is still a plain rectangle covering the cut-out too, and that
      * is fine: every ring edge carries an opaque full-height wall, so the
      * region outside the plan is never visible, and the camera cannot reach
      * it. The grime line and the noise fade come from `edgeSetDist` against
      * the ring edges, not from the mesh, so they follow the true plan boundary
      * regardless of how far the quad extends past it.
      *
      * UV is the quad's own [0,1]²: `u` along +X, `v` along -Z. This matches
      * the frame the texture size is derived from, so texel density is uniform.
      */
    def planeQuad(
        y: Double,
        faceUp: Boolean,
        margin: Double = 0.0,
    ): Quad[RoomVertex] =
      val x0 = bb.minX - margin
      val x1 = bb.maxX + margin
      val z0 = bb.minZ - margin
      val z1 = bb.maxZ + margin
      val w = x1 - x0
      val d = z1 - z0
      def c(x: Double, z: Double): RoomVertex =
        vert(Vec3(x, y, z), (x - x0) / w, (z1 - z) / d)
      if faceUp then Quad(c(x0, z0), c(x0, z1), c(x1, z1), c(x1, z0))
      else Quad(c(x0, z1), c(x0, z0), c(x1, z0), c(x1, z1))

    val floorForm = form(Arr(planeQuad(0.0, faceUp = false)))

    // The luminous plane, overhanging the plan on every side. There is no
    // ceiling surface at `CeilY` any more — the raster (A5) will occupy that
    // line, and until it exists the coffer is simply open. Expect this step to
    // look wrong; that is what makes the occlusion legible when it lands.
    val lightForm =
      form(Arr(planeQuad(LightY, faceUp = true, margin = LightOverhang)))

    val walls = wallsFrom(floorBnd, WallTopY)

    // ----- The raster ------------------------------------------------------
    //
    // Two families at 90°. A hexagon calls this three times at 60° — that is
    // the whole difference, data rather than new code.
    //
    // `phase = 0` with the lattice-derived room puts the outermost centerline
    // at k·GridSpacing and its outer face exactly on the wall plane, so each
    // wall's perimeter beam falls out for free.
    val families = Arr(
      BeamFamily(Vec2(1.0, 0.0), GridSpacing, 0.0, StripWidth),
      BeamFamily(Vec2(0.0, 1.0), GridSpacing, 0.0, StripWidth),
    )
    val beams = Arr[Beam]()
    for i <- 0 until families.length do
      // Each family's soffit is dropped a hair below the previous one. Beams
      // INTERPENETRATING at a crossing is fine — the depth buffer resolves
      // overlapping volumes — but their SOFFITS are coplanar there, and a depth
      // buffer cannot resolve coplanar faces: they z-fight. So separate them.
      //
      // 0.6 mm is ~0.2 px at eye distance, far below what is visible, while
      // being ~80× the depth buffer's resolution at that range (~7.5 µm at
      // 3.5 m with near = 0.1, far = 100). The lowest family wins at every
      // crossing, consistently.
      val bs = familyBeams(
        families(i),
        ceilBnd,
        StripHeight,
        WallTopY - i * FamilyYStagger,
      )
      var j = 0
      while j < bs.length do
        beams.push(bs(j))
        j += 1

    /** Three visible faces per beam — soffit and both sides. No top: with `y`
      * locked to eye height nothing above the raster is ever seen from below,
      * and the floor mirror reflects to below the floor, so it sees undersides
      * too.
      *
      * Built in the beam's OWN frame `(center, dir, perp, Up)` rather than from
      * an axis-aligned box, which is what makes an odd-angle beam no different
      * from an axis-aligned one.
      *
      * UV is one atlas: each beam takes a horizontal row, split into three
      * bands sized in PROPORTION to each face's world width, so texel density
      * is uniform across soffit and sides. `u` runs `[0, length/maxLength]` —
      * normalized, clamp-safe, proportional, and shorter beams simply use less
      * of their row. Do NOT scale `u` by world distance to get that density:
      * this atlas does not tile, so any beam longer than one unit would run `u`
      * past 1 and the clamp sampler would silently pin it at the edge.
      */
    val beamBandWorld = StripWidth + 2.0 * StripHeight
    var maxBeamLen = 0.0
    for b <- beams do
      val l = (b.b - b.a).length
      if l > maxBeamLen then maxBeamLen = l

    val beamFaces = Arr[Quad[RoomVertex]]()
    for i <- 0 until beams.length do
      val b = beams(i)
      val dx = b.b.x - b.a.x
      val dz = b.b.y - b.a.y
      val len = (dx * dx + dz * dz).sqrt
      val dir = Vec3(dx / len, 0.0, dz / len)
      val perp = Vec3(-dir.z, 0.0, dir.x)
      val cx = (b.a.x + b.b.x) / 2.0
      val cz = (b.a.y + b.b.y) / 2.0
      val u1 = len / maxBeamLen
      val rowV0 = i.toDouble / beams.length
      val rowH = 1.0 / beams.length

      def band(fromWorld: Double, thickWorld: Double) =
        (
          v0 = rowV0 + rowH * (fromWorld / beamBandWorld),
          v1 = rowV0 + rowH * ((fromWorld + thickWorld) / beamBandWorld),
        )

      def face(
          w: Double,
          h: Double,
          n: Vec3,
          center: Vec3,
          vb: (v0: Double, v1: Double),
      ): Quad[RoomVertex] =
        // Explicit tangent, not inferred: the soffit's normal is -Y, so the
        // inferring overload would run `u` along world -Z whichever way the
        // beam points, and the atlas band would not run along the beam.
        Quad.fromDimensionsCenter[RoomVertex](w, h, n, dir, center):
          (pos, uv) =>
            (
              position = pos,
              uv = Vec2(uv.x * u1, vb.v0 + uv.y * (vb.v1 - vb.v0)),
            )

      val midY = b.soffitY + b.height / 2.0

      /** A perimeter beam's outer side face is coplanar with the wall and
        * points out of the room, so from inside you only ever see its back at
        * grazing incidence — a thin sliver that samples a high mip level of its
        * atlas row and reads as a dark line along the wall junction. Drop it.
        *
        * The test is general rather than "is this the outermost beam": step a
        * centimeter along the face's outward normal and ask whether that point
        * is still in the plan. Works unchanged for an L's notch walls, a
        * hexagon, and the outer faces of anything standing in the room.
        */
      def facesOutOfPlan(centerXZ: Vec2, n: Vec3): Boolean =
        !ceilBnd.contains(
          Vec2(centerXZ.x + n.x * 0.01, centerXZ.y + n.z * 0.01),
        )

      beamFaces.push(
        face(len, b.width, -Up, Vec3(cx, b.soffitY, cz), band(0.0, StripWidth)),
      )
      val sideA = Vec2(cx + perp.x * b.width / 2.0, cz + perp.z * b.width / 2.0)
      if !facesOutOfPlan(sideA, perp) then
        beamFaces.push(
          face(
            len,
            b.height,
            perp,
            Vec3(sideA.x, midY, sideA.y),
            band(StripWidth, StripHeight),
          ),
        )
      val sideB = Vec2(cx - perp.x * b.width / 2.0, cz - perp.z * b.width / 2.0)
      if !facesOutOfPlan(sideB, -perp) then
        beamFaces.push(
          face(
            len,
            b.height,
            -perp,
            Vec3(sideB.x, midY, sideB.y),
            band(StripWidth + StripHeight, StripHeight),
          ),
        )

    val beamForm = form(beamFaces)

    // -----------------------------------------------------------------------
    // Distance fields over the floor plan — build-time shader expressions.
    //
    // Both unroll over the CPU-known ring data. This only ever runs inside a
    // bake, so the unrolled `min` chain is free and every `a`/`b`/`dot(e,e)`
    // constant-folds. That is why the edge set stays a build-time constant
    // rather than becoming an array uniform.
    //
    // Both take an explicit EDGE SET rather than reaching for the whole
    // footprint: not every surface is bounded by every ring, and passing the
    // set in makes that a call-site decision instead of a rewrite.
    // -----------------------------------------------------------------------

    /** Unsigned distance from an XZ point to the nearest edge in `edges`. All
      * baked geometry lies inside the plan by construction, so no sign is
      * needed — which keeps the winding/crossing machinery of a real polygon
      * SDF out of this entirely. Handles concave corners and inner rings
      * uniformly and for free.
      */
    def edgeSetDist(pxz: Vec2Expr, bnd: Boundary): FloatExpr =
      val edges = bnd.edges
      def segDist(e: Edge): FloatExpr =
        val ex = e.b.x - e.a.x
        val ez = e.b.y - e.a.y
        val eLenSq = ex * ex + ez * ez
        val ev = vec2(Vec2(ex, ez))
        val w = pxz - vec2(e.a)
        val t = (w.dot(ev) / eLenSq).clamp01
        (w - ev * t).length
      var acc = segDist(edges(0))
      var i = 1
      while i < edges.length do
        acc = acc.min(segDist(edges(i)))
        i += 1
      acc

    /** Unsigned distance from an XZ point to the nearest VERTEX in `edges` —
      * the corner columns where two walls meet. This is what a wall surface
      * fades against; the boundary itself is zero everywhere on a wall.
      */
    def cornerDist(pxz: Vec2Expr, bnd: Boundary): FloatExpr =
      val edges = bnd.edges
      def vDist(e: Edge): FloatExpr = (pxz - vec2(e.a)).length
      var acc = vDist(edges(0))
      var i = 1
      while i < edges.length do
        acc = acc.min(vDist(edges(i)))
        i += 1
      acc

    /** Distance from `wp` to the nearest geometry edge, ignoring the boundary
      * the surface itself lies in (a wall never "approaches" its own plane).
      * Adding a large constant on the surface's own axis takes it out of the
      * `min` — the same trick the box version used, now split by whether the
      * surface is horizontal.
      *
      * This feeds the NOISE FADE and nothing else. It is not an occlusion
      * distance: nothing in this room darkens at an edge (see PLAN.md).
      *
      * `topY` is per-surface, so a wall fades against ITS OWN top rim — the
      * ceiling junction for a full-height wall, the open top edge for a
      * partition. Same expression, different constant.
      */
    def edgeDist(
        wp: Vec3Expr,
        normal: Vec3Expr,
        bnd: Boundary,
        topY: FloatExpr,
    ): FloatExpr =
      val Far = 1000.0
      val isHoriz = normal.y.abs // 1 for floor/ceiling, 0 for walls
      val plan = edgeSetDist(wp.xz, bnd) + (1.0 - isHoriz) * Far
      val vert = wp.y.min(topY - wp.y) + isHoriz * Far
      val corner = cornerDist(wp.xz, bnd) + isHoriz * Far
      plan.min(vert).min(corner)

    // -----------------------------------------------------------------------
    // The ambience field — the core of the illusion.
    //
    // Nothing here is a light model. A world-space FBM modulating surface
    // brightness, plus a second noise varied by surface normal, has no physical
    // justification whatever and is precisely what makes the room read as a
    // real space rather than a rendering. It is set by LOOKING, not deriving.
    // -----------------------------------------------------------------------

    /** Dirt collecting where wall meets floor — darkest at the junction, back
      * to full brightness `GrimeWidth` away. This is the ONE darkening in the
      * room, and it is grime, not light: that is why it belongs only at the
      * floor line and generalizes to no other edge.
      */
    def grime(dist: FloatExpr): FloatExpr =
      lerp(GrimeDarken, 1.0, dist.smoothstep(0.0, GrimeWidth))

    /** The ambience field, given the distance to the nearest geometry edge.
      *
      * Split out from the footprint-driven overload below because `edgeDist`'s
      * vertical term assumes a surface spanning `0 … topY` — true of a wall,
      * false of a ceiling beam sitting at 5.25–5.50 m. The beams supply their
      * own edge distance and reuse everything else, which is the point of
      * keeping this a small function over plain values rather than one baker
      * that knows about rooms.
      */
    def roomNoise(
        wp: Vec3Expr,
        normal: Vec3Expr,
        edgeDistance: FloatExpr,
    ): FloatExpr =
      val scaledWp = vec3(
        wp.x + wp.y * 0.2,
        wp.y * 0.3,
        wp.z * 0.8 + wp.y * 0.2,
      )
      // The normal-dependent term gives each orientation its own look, which
      // would otherwise meet as a hard seam in the corners. Fade it out over
      // `EdgeFadeWorld` so the edge itself is uniform across all surfaces —
      // this is what makes corners read as slightly rounded.
      val edge = edgeDistance.smoothstep(0.0, EdgeFadeWorld)
      lerp(
        0.68,
        1.0,
        ((Noise
          .fbm3(
            scaledWp * 0.10,
            freqMul = 3.6,
            ampMul = 0.12,
            seed = vec3(120),
          ) +
          Noise.fbm3(
            scaledWp.cross(normal) * 0.15,
            freqMul = 2.1,
            ampMul = 0.25,
            seed = vec3(70),
          ) * 0.3 * edge)
          / 1.3).fit1101,
      )

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * AmbienceTexScale).toInt, (h * AmbienceTexScale).toInt)

    val (rfw, rfh) = texSize(bbW, bbD)

    // Floor — tinted noise, with the grime line around the plan boundary.
    val floorTex = TextureBaker.bake(p, floorForm, rfw, rfh): (wp, normal, _) =>
      vec4(
        vec3(FloorTint)
          * roomNoise(wp, normal, edgeDist(wp, normal, floorBnd, CeilY))
          * grime(edgeSetDist(wp.xz, floorBnd)),
        1.0,
      )

    // =======================================================================
    // THE LIGHT SHADER — swap this out. Everything else in the ceiling is the
    // room's; this is the exhibition's.
    //
    // An HDR base with a slow undulation in strength. Multiplicative on the
    // base and bounded, so it cannot dip below the bloom threshold or fade
    // toward the overhang however the periods are tuned — the amplitude is the
    // knob, the base is not. It needs no boundary treatment at all because it
    // never fades, which is what keeps it this short.
    //
    // Structure in world meters, not the plane's UV. On a rectangle the two
    // differ only by a constant, so this choice proves nothing here; on an L it
    // does, because the bounding box is not a room. Anything anchored to the
    // plan boundary — an end-cap, a vignette — must use
    // `edgeSetDist(pxz, ceilBnd)` rather than the UV rectangle.
    // =======================================================================
    val (lw, lh) = texSize(bbW + 2.0 * LightOverhang, bbD + 2.0 * LightOverhang)
    val lightTex = TextureBaker.bakeBlock(
      p,
      lightForm,
      lw,
      lh,
      format = TextureFormat.Rgba16Float,
    ): (wp, _, _, color) =>
      val wave = LetFloat("wave")
      Block(
        wave := 1.0 + LightWaveAmount * 0.5 * (
          (wp.x * Tau / LightWaveMetersX).sin
            + (wp.z * Tau / LightWaveMetersZ).sin
        ),
        color := vec4(vec3(LightColor) * wave, 1.0),
      )

    // Raster atlas — THE SAME MATERIAL AS THE WALLS, so it gets the same
    // treatment and not a special one: the same `roomNoise` at world position,
    // the same fade of the normal-varied term at every geometry edge. That is
    // the whole integration story. The beams read as sitting in the ceiling
    // because they are lit like the ceiling and share its noise field.
    //
    // NO JUNCTION DARKENING. Not at beam crossings, not where the raster meets
    // a wall, not in the pockets between beams. Under a large diffuse source
    // above the grid the light reaches into all of it near-equally, and adding
    // occlusion there is the game-engine look this room avoids. (A 60° raster
    // in a hexagon meets in far sharper wedges and might genuinely want it —
    // decide that there, on its own merits, not by inheriting this.)
    //
    // Two things vary per face, and neither is an edge effect:
    //   * SOFFIT TINT — downward faces are all you see from eye height, so the
    //     underside of the raster IS the ceiling plane as far as the eye is
    //     concerned and takes `CeilTint`. The sides are vertical like walls and
    //     take the wall tint.
    //   * the normal-varied noise term is KEPT, not suppressed. It is what makes
    //     surfaces at different orientations read as one material lit from one
    //     room; fading it at the arrises keeps the thin beam's many hard 90°
    //     corners seam-free without special-casing them.
    val (baw, bah) = texSize(maxBeamLen, beams.length * beamBandWorld)
    // CLEAR TO THE MATERIAL, not to black. An atlas always has texels no face
    // covers — partially-covered ones along every band edge, whole bands whose
    // face was skipped (the perimeter beams' outer sides), and the `u` tail of
    // every beam shorter than the longest. Linear filtering and mip generation
    // pull those back into the faces that DO cover their texels, so at black
    // they bleed out as dark seams along beam edges, worst where a band is only
    // a few texels thick — a soffit here is ~5. Clearing to the material makes
    // the bleed material-colored, and therefore invisible.
    val beamTex = TextureBaker.bake(
      p,
      beamForm,
      baw,
      bah,
      clearColor = (CeilTint.x, CeilTint.y, CeilTint.z, 1.0),
    ): (wp, normal, uv) =>
      // Distance to the nearest edge of the face we are on, in meters.
      //
      // The atlas row IS the beam's unrolled cross-section, so `v` within a row
      // gives the position across it and the band boundaries are exactly the
      // beam's arrises and open top edges. That is why this needs no per-beam
      // frame — one expression serves every beam at any angle, which a
      // world-space formulation could not do without per-beam uniforms, and a
      // single shared atlas bake has none.
      //
      // Only the CROSS-SECTION is faded, not the run: the beam ends abut walls
      // or other beams, and `u` cannot recover the far end because each beam's
      // `u` range differs and the bake is shared. Revisit if ends show a seam.
      //
      // Note the consequence at these proportions: a soffit is `StripWidth`
      // = 0.10 m across, so its greatest edge distance is 0.05 — below
      // `EdgeFadeWorld` = 0.08. The normal-varied term is therefore almost
      // fully suppressed on soffits and only ~36 % of each side reaches full
      // strength. That is the mechanism working, not a defect: a thin beam has
      // no room to develop its own orientation before the next arris. Widen
      // the beams and the term reappears on its own.
      val across = (uv.y * beams.length).fract * beamBandWorld
      val dEdge = across
        .min((across - StripWidth).abs)
        .min((across - (StripWidth + StripHeight)).abs)
        .min(beamBandWorld - across)
      val tint = vec3(WallTintLow).lerp(vec3(CeilTint), normal.y.abs)
      vec4(tint * roomNoise(wp, normal, dEdge), 1.0)

    /** Wall ambience. ONE baker — and therefore one pipeline — for every wall
      * in the room, whatever its height.
      *
      * `topY` is a per-bake uniform rather than a constant closed over by the
      * shade. Every wall happens to share a top right now, so this changes
      * nothing visually; it matters the moment one does not. A partition
      * stopping below the ceiling, a plinth, a room of pillars at assorted
      * heights would each otherwise need a specialized shade and its own WGSL
      * compile, to express what is properly a uniform buffer write.
      *
      * `topY` cannot be applied afterwards by the runtime shader, either: it
      * changes the distance field itself, which is the entire thing the bake
      * caches. A per-wall TINT would join this same schema — that one could go
      * either way, but once a uniform block exists there is no reason to keep
      * it out and run a second mechanism.
      */
    type WallU = (topY: FragmentUniform[Float])

    val wallBaker = TextureBaker[WallU](p): ctx =>
      val wp = ctx.in.worldPos
      val normal = ctx.in.normal
      val topY = ctx.bindings.topY
      // A broad settling of tone in the top ~0.9 m, anchored to the wall's own
      // top rather than to absolute room coordinates — so a partition's top rim
      // gets the same treatment with no extra code. NOT an edge effect: there
      // is no darkening where the wall meets the ceiling.
      Block(
        ctx.out.color := vec4(
          vec3(WallTintLow).lerp(
            vec3(WallTintHigh),
            (topY - wp.y).smoothstep(TopFadeDepth, 0.0),
          ) * roomNoise(wp, normal, edgeDist(wp, normal, floorBnd, topY))
            * grime(wp.y),
          1.0,
        ),
      )

    // -----------------------------------------------------------------------
    // Scene shades
    // -----------------------------------------------------------------------

    // Wall + ceiling: both are quads textured with a pre-baked panel. Five lines of
    // pass-through — every look decision is on the other side of it, in the panel.
    // A room wanting its own wall artwork writes its own shade sampling two panels
    // at their own resolutions, rather than this one growing a parameter.
    type TexturedUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type TexturedPanels = (tex: FragmentPanel)

    val texturedShade =
      p.shade[BakeVertex, (uv: Vec2), TexturedUniforms, TexturedPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    // -----------------------------------------------------------------------
    // Scene assembly
    // -----------------------------------------------------------------------

    val lightShape = p
      .shape(lightForm, texturedShade, cullMode = CullMode.None)
      .bind("samp" := sampler, "tex" := lightTex)

    val beamShape = p
      .shape(beamForm, texturedShade, cullMode = CullMode.None)
      .bind("samp" := sampler, "tex" := beamTex)

    // All above-ground scene shapes — these also feed the floor mirror. The
    // raster reflected in the floor is a large part of the payoff, so both it
    // and the light plane belong in here from the start.
    val aboveGround = Arr[AnyShape](lightShape, beamShape)
    for wall <- walls do
      // Each wall binds A PANEL, whatever produced it. Going from the plain
      // ambience bake here to a shadow-compositing path (A8) is a one-line
      // change at the producer and nothing at the shade.
      val wallForm = form(Arr(wall.quad))
      val (ww, wh) = texSize(wall.width, wall.height)
      val bake = wallBaker.prepare(wallForm, ww, wh)
      bake.shape.bind("topY" := wall.height)
      p.paint(bake.panel)
      val wallTex = bake.panel
      aboveGround.push(
        p.shape(wallForm, texturedShade, cullMode = CullMode.None)
          .bind("samp" := sampler, "tex" := wallTex),
      )

    val wallColor = Vec4(0.90, 0.90, 0.90, 0.0)

    val mirror = GaussianMirrorReflection(
      p,
      shapes = aboveGround,
      vpName = "vp",
      // The tallest thing the mirror reflects is now the light plane, not the
      // ceiling line — the alpha ramp has to reach that far or the reflection
      // saturates before it gets there.
      alphaScale = LightY,
      blurStrength = 5.0,
      blurRatioVertical = 3.0,
      clearColor = wallColor,
    )

    // Canvas size in physical pixels — the floor turns its `fragCoord` into a
    // screen uv with it, because the reflection panel is sub-resolution and no
    // longer matches the scene's pixel grid 1:1.
    val canvasRes = p.binding[Vec2]

    val reflStrength = 0.25

    type FloorUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        res: FragmentUniform[Vec2],
    )
    type FloorPanels = (tex: FragmentPanel, reflTex: FragmentPanel)

    // The floor already samples two panels at different resolutions and
    // combines them here — the ambience bake and the sub-resolution mirror.
    // A floor material (tiles, marble, wood, an artwork) is a third input to
    // this shade, at its own resolution. Note it would compete with the
    // reflection for the same budget: `reflStrength` is taken directly out of
    // whatever the floor otherwise shows.
    val floorShade =
      p.shade[BakeVertex, (uv: Vec2), FloorUniforms, FloorPanels]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          val base = LetVec3("base")
          val refl = LetVec4("refl")
          val mix = LetFloat("mix")
          val falloff = LetFloat("falloff")
          Block(
            base := ctx.textures
              .tex(ctx.in.uv, ctx.bindings.samp)
              .xyz,
            // UV sample, not a 1:1 load: the reflection panel runs at a
            // fraction of the canvas resolution.
            refl := ctx.textures.reflTex(
              ctx.fragCoord.xy / ctx.bindings.res,
              ctx.bindings.samp,
            ),
            falloff := (1.0 - refl.a * 0.4),
            mix := falloff * reflStrength,
            ctx.out.color := vec4(base * (1.0 - mix) + refl.rgb * mix, 1.0),
          )

    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "samp" := sampler,
        "tex" := floorTex,
        "reflTex" := mirror.resultPanel,
        "res" := canvasRes,
      )

    // HDR scene panel — supplies the scene `vp` to all its shapes.
    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (0.5, 0.6, 0.7, 1.0),
        depthTest = true,
        multisample = true,
        shapes = aboveGround :+ floorShape,
      )
      .bind("vp" := sceneVp)

    // Bloom needs no view-direction gate: the light plane is the only
    // above-threshold surface, and the raster occludes it geometrically from
    // low angles, so the glare emerges as you look up. That stays true whatever
    // the light shader is — it is the geometry doing the gating.
    //
    // `intensity` is the free knob for how strong the glare reads. `LightColor`
    // is NOT: it is capped by the floor re-bloom check (see above). Raised from
    // `canvases`' 0.002 because the emitter dropped from 8.0 to 2.0, cutting
    // the above-threshold excess from 7.0 to 1.0 — tune it by eye from here.
    val bloom = Bloom(
      p,
      scenePanel,
      intensity = 0.004,
      threshold = 1.0,
      blurRadius = 4.0,
      mipLevels = 5,
      // Soft-clip the HDR before display. Without it the beam silhouettes
      // against the light plane read as a staircase no matter how many MSAA
      // samples are taken: a hard clamp at 1.0 sends every edge sample above
      // ~26 % coverage to pure white, collapsing 4 of MSAA's 5 gradations. The
      // knee sits just above the room's own brightest surface, so nothing in
      // the room shifts; only the emitter and its edges are compressed.
      toneKnee = 0.9,
      toneWhite = 2.2,
    )

    // -----------------------------------------------------------------------
    // Camera, input, controller
    // -----------------------------------------------------------------------
    val cam = PerspectiveCamera(
      fov = 0.9,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, EyeHeight, 0.0),
    )

    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(
        cam,
        input,
        sensitivity = 2.0,
        speed = 1.0,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)
      canvasRes.set(Vec2(w, h))
      mirror.resize(w, h)

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
      // Confinement is a post-move clamp, so the controller needs to know
      // nothing about geometry and no library change is required.
      //
      // `y` is LOCKED to eye height: the shipped experience is a walk on one
      // plane. Space / Shift free-fly survives only as a dev inspection tool,
      // gated on `devMode` (true under the Vite dev server, false in a built
      // sketch) so it cannot ship by accident.
      //
      // This is a geometry decision as much as a camera one — with `y` fixed,
      // nothing above eye height is ever seen from below, and the floor mirror
      // only shows undersides. So AUTHOR FOR THE LOCKED EYE PLANE: a partition
      // taller than 1.7 m needs no top cap. Flying in dev will reveal those
      // gaps, the way noclip reveals a level's backstage. That is expected.
      cam.pos = floorBnd.confine(
        cam.pos,
        margin = WallClearance,
        eyeY = if devMode then cam.pos.y else EyeHeight,
      )
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
