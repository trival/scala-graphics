package sketchlib.utils.room

import munit.FunSuite
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*

/** These invariants used to be verified by eye and by argument in comments,
  * because a sketch has no test setup. Extraction is what stops that being an
  * excuse: nothing here touches a `Painter`, so it runs headless.
  */
class PlanTest extends FunSuite:

  // An L: a 6-point concave plan. A rectangle would not exercise anything
  // interesting — the whole point of testing on this shape is the notch.
  //
  //   (0,0) ────────────── (4,0)
  //     │                    │
  //     │            (4,2) ──┘
  //     │              │
  //   (0,4) ── (2,4) ──┘
  //
  val lPoints: Arr[Vec2] = Arr(
    Vec2(0, 0),
    Vec2(4, 0),
    Vec2(4, 2),
    Vec2(2, 2),
    Vec2(2, 4),
    Vec2(0, 4),
  )

  def lRing(reversed: Boolean = false): Ring =
    val ps = Arr[Vec2]()
    var i = 0
    while i < lPoints.length do
      ps.push(lPoints(if reversed then lPoints.length - 1 - i else i))
      i += 1
    Ring(points = ps, facing = Facing.Inward, height = 3.0)

  /** An edge, identified by geometry rather than by index — order around the
    * loop is what reversing changes, and what must NOT change is the set.
    */
  /** `+ 0.0` normalizes negative zero. `-0.0 == 0.0` is true, so the normals
    * really are equal; only the formatted string would differ.
    */
  def key(e: Edge): String =
    f"${e.a.x + 0.0}%.4f,${e.a.y + 0.0}%.4f→${e.b.x + 0.0}%.4f,${e.b.y + 0.0}%.4f " +
      f"n=${e.inwardNormal.x + 0.0}%.4f,${e.inwardNormal.y + 0.0}%.4f"

  def keys(b: Boundary): Set[String] =
    var s = Set.empty[String]
    var i = 0
    while i < b.edges.length do
      val e = b.edges(i)
      // A reversed ring visits the same segments as b→a, so normalize the
      // endpoints; the NORMAL is the thing under test and is left alone.
      val fwd = e.a.x < e.b.x || (e.a.x == e.b.x && e.a.y <= e.b.y)
      val n = if fwd then e else Edge(e.b, e.a, e.inwardNormal)
      s = s + key(n)
      i += 1
    s

  // ---------------------------------------------------------------------------
  // Winding independence — `Facing` is an absolute claim about the world
  // ---------------------------------------------------------------------------

  test("reversing a ring's points yields the identical set of edge normals"):
    assertEquals(keys(lRing().boundary), keys(lRing(reversed = true).boundary))

  test("every Inward normal steps into the plan"):
    val bnd = lRing().boundary
    var i = 0
    while i < bnd.edges.length do
      val e = bnd.edges(i)
      val mid = Vec2((e.a.x + e.b.x) / 2.0, (e.a.y + e.b.y) / 2.0)
      val inside =
        Vec2(mid.x + e.inwardNormal.x * 0.01, mid.y + e.inwardNormal.y * 0.01)
      val outside =
        Vec2(mid.x - e.inwardNormal.x * 0.01, mid.y - e.inwardNormal.y * 0.01)
      assert(bnd.contains(inside), s"edge $i: inward normal points out")
      assert(!bnd.contains(outside), s"edge $i: outward side counts as inside")
      i += 1

  test("Outward flips every normal"):
    val in = lRing().boundary
    val out = Ring(lRing().points, Facing.Outward, 3.0).boundary
    var i = 0
    while i < in.edges.length do
      val a = in.edges(i).inwardNormal
      val b = out.edges(i).inwardNormal
      assertEqualsDouble(a.x, -b.x, 1e-12)
      assertEqualsDouble(a.y, -b.y, 1e-12)
      i += 1

  test("signedArea2 flips sign with winding, keeps magnitude"):
    val fwd = Boundary.signedArea2(lRing().points)
    val rev = Boundary.signedArea2(lRing(reversed = true).points)
    assertEqualsDouble(fwd, -rev, 1e-12)
    // The L is 4×4 minus a 2×2 notch = 12; twice that is 24.
    assertEqualsDouble(fwd.abs, 24.0, 1e-12)

  // ---------------------------------------------------------------------------
  // The Boundary invariant itself
  // ---------------------------------------------------------------------------

  test("an O-shape's interior ring counts as OUTSIDE the room"):
    val outer = Ring(
      Arr(Vec2(0, 0), Vec2(10, 0), Vec2(10, 10), Vec2(0, 10)),
      Facing.Inward,
      3.0,
    )
    val inner = Ring(
      Arr(Vec2(4, 4), Vec2(6, 4), Vec2(6, 6), Vec2(4, 6)),
      Facing.Outward,
      3.0,
    )
    val bnd = Footprint(Arr(outer, inner)).floorBoundary
    assert(bnd.contains(Vec2(2, 2)), "the room proper is inside")
    assert(!bnd.contains(Vec2(5, 5)), "the inner box's interior is not")
    assert(!bnd.contains(Vec2(-1, 5)), "outside is outside")

  test("concatenating boundaries is again a boundary"):
    val a = Ring(
      Arr(Vec2(0, 0), Vec2(10, 0), Vec2(10, 10), Vec2(0, 10)),
      Facing.Inward,
      3.0,
    )
    val b = Ring(
      Arr(Vec2(4, 4), Vec2(6, 4), Vec2(6, 6), Vec2(4, 6)),
      Facing.Outward,
      3.0,
    )
    val joined = Footprint(Arr(a, b)).floorBoundary
    assertEquals(joined.edges.length, a.boundary.edges.length + 4)

  test("ceilingBoundary drops rings below the room height"):
    val room = Ring(
      Arr(Vec2(0, 0), Vec2(10, 0), Vec2(10, 10), Vec2(0, 10)),
      Facing.Inward,
      3.0,
    )
    val partition = Ring(
      Arr(Vec2(4, 4), Vec2(6, 4), Vec2(6, 4.2), Vec2(4, 4.2)),
      Facing.Outward,
      2.5,
    )
    val fp = Footprint(Arr(room, partition))
    assertEquals(fp.floorBoundary.edges.length, 8)
    assertEquals(fp.ceilingBoundary(3.0).edges.length, 4)

  test("bounds spans every ring"):
    val bb = Footprint(Arr(lRing())).bounds
    assertEqualsDouble(bb.minX, 0.0, 1e-12)
    assertEqualsDouble(bb.minZ, 0.0, 1e-12)
    assertEqualsDouble(bb.maxX, 4.0, 1e-12)
    assertEqualsDouble(bb.maxZ, 4.0, 1e-12)

  // ---------------------------------------------------------------------------
  // clipLine — the notch is what makes this more than a rectangle test
  // ---------------------------------------------------------------------------

  test("a line crossing the L's notch returns two intervals"):
    val bnd = lRing().boundary
    // Horizontal at z = 3: crosses the leg (x 0→2), then leaves the plan.
    // Shift to a line that re-enters: the L has no such horizontal, so use a
    // U instead — the L's own split case is a line through the notch corner.
    val u = Ring(
      Arr(
        Vec2(0, 0),
        Vec2(6, 0),
        Vec2(6, 6),
        Vec2(4, 6),
        Vec2(4, 2),
        Vec2(2, 2),
        Vec2(2, 6),
        Vec2(0, 6),
      ),
      Facing.Inward,
      3.0,
    ).boundary
    val spans = u.clipLine(Vec2(0, 4), Vec2(1, 0))
    assertEquals(spans.length, 2)
    // Both intervals' midpoints must be inside the plan.
    var i = 0
    while i < spans.length do
      val mid = (spans(i).from + spans(i).to) * 0.5
      assert(u.contains(Vec2(mid, 4.0)), s"interval $i midpoint is outside")
      i += 1
    // Left leg 0→2 and right leg 4→6.
    assertEqualsDouble(spans(0).from, 0.0, 1e-9)
    assertEqualsDouble(spans(0).to, 2.0, 1e-9)
    assertEqualsDouble(spans(1).from, 4.0, 1e-9)
    assertEqualsDouble(spans(1).to, 6.0, 1e-9)
    // The L itself gives one interval on the same ray.
    assertEquals(bnd.clipLine(Vec2(0, 3), Vec2(1, 0)).length, 1)

  test("an edge parallel to the line contributes no hit of its own"):
    // A ray just inside the z = 0 wall. That wall is parallel, so it must be
    // skipped rather than producing a degenerate collinear interval; the span
    // comes from the two side walls alone and runs the full width.
    val spans = lRing().boundary.clipLine(Vec2(0, 0.001), Vec2(1, 0))
    assertEquals(spans.length, 1)
    assertEqualsDouble(spans(0).from, 0.0, 1e-9)
    assertEqualsDouble(spans(0).to, 4.0, 1e-9)

  test("no interval is ever degenerate or outside the plan"):
    // Sweep the L with parallel rays in both axes — every interval returned
    // must have real length and a midpoint inside.
    val bnd = lRing().boundary
    var off = 0.05
    while off < 4.0 do
      val rays = Arr(
        (o = Vec2(0, off), d = Vec2(1, 0)),
        (o = Vec2(off, 0), d = Vec2(0, 1)),
      )
      var r = 0
      while r < rays.length do
        val spans = bnd.clipLine(rays(r).o, rays(r).d)
        var i = 0
        while i < spans.length do
          assert(spans(i).to - spans(i).from > 1e-9, s"degenerate at $off")
          val m = (spans(i).from + spans(i).to) * 0.5
          val d = rays(r).d
          val o = rays(r).o
          assert(
            bnd.contains(Vec2(o.x + d.x * m, o.y + d.y * m)),
            s"midpoint outside at $off",
          )
          i += 1
        r += 1
      off += 0.05

  test("a line missing the plan entirely returns nothing"):
    assertEquals(lRing().boundary.clipLine(Vec2(0, 9), Vec2(1, 0)).length, 0)
