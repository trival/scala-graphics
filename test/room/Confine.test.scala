package sketchlib.utils.room

import munit.FunSuite
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*

class ConfineTest extends FunSuite:

  val Margin = 0.5

  val box: Boundary = Ring(
    Arr(Vec2(0, 0), Vec2(10, 0), Vec2(10, 10), Vec2(0, 10)),
    Facing.Inward,
    3.0,
  ).boundary

  // A concave corner that is not a right angle, so convergence is not being
  // tested on the easy case only.
  val l: Boundary = Ring(
    Arr(
      Vec2(0, 0),
      Vec2(10, 0),
      Vec2(10, 4),
      Vec2(4, 4),
      Vec2(4, 10),
      Vec2(0, 10),
    ),
    Facing.Inward,
    3.0,
  ).boundary

  def clearance(bnd: Boundary, p: Vec3): Double =
    bnd.nearest(Vec2(p.x, p.z)).dist

  // ---------------------------------------------------------------------------

  test("a point well inside is untouched"):
    // `Vec3` is JS-backed and has no structural equality, so compare
    // components rather than instances.
    val out = box.confine(Vec3(5, 1.7, 5), Margin, 1.7)
    assertEqualsDouble(out.x, 5.0, 1e-12)
    assertEqualsDouble(out.y, 1.7, 1e-12)
    assertEqualsDouble(out.z, 5.0, 1e-12)

  test("y is pinned to the given eye height"):
    assertEqualsDouble(box.confine(Vec3(5, 99, 5), Margin, 1.7).y, 1.7, 1e-12)

  test("pressing into a wall stops exactly at the margin"):
    val out = box.confine(Vec3(0.1, 1.7, 5), Margin, 1.7)
    assertEqualsDouble(out.x, Margin, 1e-9)
    assertEqualsDouble(out.z, 5.0, 1e-9)

  test("a diagonal approach SLIDES — the along-wall component survives"):
    // Walking into the x = 0 wall while also moving in +z: z must not be
    // clamped back, or the camera would stick instead of sliding.
    val out = box.confine(Vec3(0.2, 1.7, 6.3), Margin, 1.7)
    assertEqualsDouble(out.x, Margin, 1e-9)
    assertEqualsDouble(out.z, 6.3, 1e-9)

  // ---------------------------------------------------------------------------
  // Two passes, and why
  // ---------------------------------------------------------------------------

  test("a box's own inner corner needs the second pass"):
    // ONE pass satisfies only the nearest wall and leaves the camera inside the
    // other's margin — which is why this is not an L-shaped-room problem.
    val corner = Vec3(0.05, 1.7, 0.05)
    val once = box.nearest(Vec2(corner.x, corner.z))
    assert(once.dist < Margin, "precondition: the raw point is too close")
    val out = box.confine(corner, Margin, 1.7)
    assert(
      clearance(box, out) >= Margin - 1e-9,
      s"corner clearance ${clearance(box, out)} < $Margin",
    )

  test("a third pass changes nothing — two converge"):
    val out = box.confine(Vec3(0.05, 1.7, 0.05), Margin, 1.7)
    val again = box.confine(out, Margin, 1.7)
    assertEqualsDouble(again.x, out.x, 1e-12)
    assertEqualsDouble(again.z, out.z, 1e-12)

  test("the L's concave notch corner holds the margin from every approach"):
    val approaches = Arr(
      Vec3(4.05, 1.7, 4.05),
      Vec3(4.2, 1.7, 4.1),
      Vec3(4.1, 1.7, 4.2),
      Vec3(4.4, 1.7, 4.4),
      Vec3(3.9, 1.7, 3.9), // just outside the wedge
    )
    var i = 0
    while i < approaches.length do
      val out = l.confine(approaches(i), Margin, 1.7)
      assert(l.contains(Vec2(out.x, out.z)), s"approach $i left the plan")
      assert(
        clearance(l, out) >= Margin - 1e-9,
        s"approach $i: clearance ${clearance(l, out)} < $Margin",
      )
      i += 1

  test("a point spawned outside is pulled back in"):
    val out = box.confine(Vec3(-5, 1.7, 5), Margin, 1.7)
    assert(box.contains(Vec2(out.x, out.z)))
    assertEqualsDouble(out.x, Margin, 1e-9)

  test("a point exactly ON an edge is recovered, not divided by zero"):
    val out = box.confine(Vec3(0, 1.7, 5), Margin, 1.7)
    assert(out.x.isFinite && out.z.isFinite)
    assertEqualsDouble(out.x, Margin, 1e-9)

  test("walking the whole boundary keeps the margin all the way round"):
    // A lap 1 cm from every wall of the L, including through both corners.
    var t = 0.0
    while t < 1.0 do
      val bnd = l
      val e = bnd.edges((t * bnd.edges.length).toInt.min(bnd.edges.length - 1))
      val f = (t * bnd.edges.length) % 1.0
      val on = Vec2(e.a.x + (e.b.x - e.a.x) * f, e.a.y + (e.b.y - e.a.y) * f)
      val probe =
        Vec3(
          on.x + e.inwardNormal.x * 0.01,
          1.7,
          on.y + e.inwardNormal.y * 0.01,
        )
      val out = l.confine(probe, Margin, 1.7)
      assert(l.contains(Vec2(out.x, out.z)), s"t=$t left the plan")
      assert(
        clearance(l, out) >= Margin - 1e-9,
        s"t=$t: clearance ${clearance(l, out)} < $Margin",
      )
      t += 0.013

  // ---------------------------------------------------------------------------
  // A partition is an Outward ring, and the camera must walk AROUND it
  // ---------------------------------------------------------------------------

  test("the interior of a free-standing partition is outside the room"):
    val room = Ring(
      Arr(Vec2(0, 0), Vec2(10, 0), Vec2(10, 10), Vec2(0, 10)),
      Facing.Inward,
      3.0,
    )
    val partition = Ring(
      Arr(Vec2(4, 4.9), Vec2(6, 4.9), Vec2(6, 5.1), Vec2(4, 5.1)),
      Facing.Outward,
      2.5,
    )
    val bnd = Footprint(Arr(room, partition)).floorBoundary
    assert(!bnd.contains(Vec2(5, 5)), "inside the partition is not the room")
    // A convex corner needs only one pass, so the clamp holds there too.
    val out = bnd.confine(Vec3(5, 1.7, 5.05), Margin, 1.7)
    assert(bnd.contains(Vec2(out.x, out.z)))
    assert(clearance(bnd, out) >= Margin - 1e-9)

  // ---------------------------------------------------------------------------
  // `clearOf` — the same clamp with no room around it
  // ---------------------------------------------------------------------------

  // A free-standing wall in an open space: one Outward ring and nothing else.
  val slab: Boundary = Ring(
    Arr(Vec2(-6, -0.2), Vec2(6, -0.2), Vec2(6, 0.2), Vec2(-6, 0.2)),
    Facing.Outward,
    4.5,
  ).boundary

  test("open space is left alone — `confine` could not do this"):
    // The precondition is the whole reason `clearOf` exists: with only an
    // Outward ring present, every point in the open space fails `contains`, so
    // `confine` would take its recovery branch and teleport the camera.
    assert(!slab.contains(Vec2(0, 30)), "precondition: parity is inverted")
    val out = slab.clearOf(Vec3(0, 1.7, 30), Margin, 1.7)
    assertEqualsDouble(out.x, 0.0, 1e-12)
    assertEqualsDouble(out.z, 30.0, 1e-12)
    assertEqualsDouble(out.y, 1.7, 1e-12)

  test("pressing into a face stops exactly at the margin, on both sides"):
    val front = slab.clearOf(Vec3(0, 1.7, 0.25), Margin, 1.7)
    assertEqualsDouble(front.z, 0.2 + Margin, 1e-9)
    assertEqualsDouble(front.x, 0.0, 1e-9)
    val back = slab.clearOf(Vec3(0, 1.7, -0.25), Margin, 1.7)
    assertEqualsDouble(back.z, -(0.2 + Margin), 1e-9)

  test("a diagonal approach slides along the face"):
    val out = slab.clearOf(Vec3(2.4, 1.7, 0.3), Margin, 1.7)
    assertEqualsDouble(out.z, 0.2 + Margin, 1e-9)
    assertEqualsDouble(out.x, 2.4, 1e-9)

  test("a point inside the solid is pushed out, not trapped"):
    val out = slab.clearOf(Vec3(0, 1.7, 0.0), Margin, 1.7)
    assert(!slab.contains(Vec2(out.x, out.z)))
    assert(
      clearance(slab, out) >= Margin - 1e-9,
      s"clearance ${clearance(slab, out)} < $Margin",
    )

  test("a lap around the wall keeps the margin, corners included"):
    // A lap 5 cm off every face, which passes through all four corners — the
    // convex ones a single nearest-point clamp has to round correctly.
    var t = 0.0
    while t < 1.0 do
      val e =
        slab.edges((t * slab.edges.length).toInt.min(slab.edges.length - 1))
      val f = (t * slab.edges.length) % 1.0
      val on = Vec2(e.a.x + (e.b.x - e.a.x) * f, e.a.y + (e.b.y - e.a.y) * f)
      val probe =
        Vec3(
          on.x + e.inwardNormal.x * 0.05,
          1.7,
          on.y + e.inwardNormal.y * 0.05,
        )
      val out = slab.clearOf(probe, Margin, 1.7)
      assert(
        clearance(slab, out) >= Margin - 1e-9,
        s"t=$t: clearance ${clearance(slab, out)} < $Margin",
      )
      t += 0.013

  test("the wedge between two solids needs the second pass"):
    // Two slabs meeting in an L. Seen from the open side its inner corner is a
    // CONCAVE wedge, which is the case one pass cannot clear: the first push
    // clears the slab it picked and leaves the camera 5 cm off the other.
    val ell = Boundary(
      Arr(
        Ring(
          Arr(Vec2(0, 0), Vec2(4, 0), Vec2(4, 1), Vec2(0, 1)),
          Facing.Outward,
          3.0,
        ),
        Ring(
          Arr(Vec2(0, 0), Vec2(1, 0), Vec2(1, 4), Vec2(0, 4)),
          Facing.Outward,
          3.0,
        ),
      ),
    )
    val out = ell.clearOf(Vec3(1.05, 1.7, 1.05), Margin, 1.7)
    assert(
      clearance(ell, out) >= Margin - 1e-9,
      s"clearance ${clearance(ell, out)} < $Margin",
    )
