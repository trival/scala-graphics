package sketchlib.utils.room

import munit.FunSuite
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

class RasterTest extends FunSuite:

  val Spacing = 0.5
  val Strip = 0.10
  val StripH = 0.32
  val SoffitY = 5.18

  def box(half: Double): Boundary = Ring(
    Arr(
      Vec2(-half, -half),
      Vec2(half, -half),
      Vec2(half, half),
      Vec2(-half, half),
    ),
    Facing.Inward,
    5.5,
  ).boundary

  /** A regular hexagon of circumradius `r`, flat plan — the case that cannot
    * snap to a lattice and therefore needs explicit perimeter beams.
    */
  def hexagon(r: Double): Boundary =
    val ps = Arr[Vec2]()
    var i = 0
    while i < 6 do
      val a = i.toDouble / 6.0 * Math.PI * 2.0
      ps.push(Vec2(r * Math.cos(a), r * Math.sin(a)))
      i += 1
    Ring(ps, Facing.Inward, 5.5).boundary

  // ---------------------------------------------------------------------------
  // familyBeams
  // ---------------------------------------------------------------------------

  test("every beam lies inside the plan it was clipped to"):
    val bnd = box(3.0)
    val beams =
      familyBeams(BeamFamily(Vec2(1, 0), Spacing, 0.0, Strip), bnd, StripH, SoffitY)
    assert(beams.length > 0)
    var i = 0
    while i < beams.length do
      val b = beams(i)
      val mid = Vec2((b.a.x + b.b.x) / 2.0, (b.a.y + b.b.y) / 2.0)
      assert(bnd.contains(mid), s"beam $i midpoint is outside the plan")
      assert((b.b - b.a).length > 1e-6, s"beam $i is degenerate")
      i += 1

  test("an L's notch splits a family's lines into separate beams"):
    // A U, so a single line genuinely re-enters the plan.
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
      5.5,
    ).boundary
    val beams =
      familyBeams(BeamFamily(Vec2(1, 0), 1.0, 0.5, Strip), u, StripH, SoffitY)
    // Lines at z = 4.5 and 5.5 cross the notch and yield two beams each;
    // lines below z = 2 yield one. So there are more beams than lines.
    val lines = beams.length
    assert(lines > 6, s"expected split intervals, got $lines beams")
    var i = 0
    while i < beams.length do
      val b = beams(i)
      assert(u.contains(Vec2((b.a.x + b.b.x) / 2.0, (b.a.y + b.b.y) / 2.0)))
      i += 1

  test("a family at 60° works exactly like one at 90°"):
    val bnd = hexagon(4.0)
    val dir = Vec2(Math.cos(Math.PI / 3.0), Math.sin(Math.PI / 3.0))
    val beams = familyBeams(BeamFamily(dir, Spacing, 0.0, Strip), bnd, StripH, SoffitY)
    assert(beams.length > 5)
    var i = 0
    while i < beams.length do
      val b = beams(i)
      assert(bnd.contains(Vec2((b.a.x + b.b.x) / 2.0, (b.a.y + b.b.y) / 2.0)))
      // Every beam runs parallel to the family direction.
      val d = (b.b - b.a).normalize
      assertEqualsDouble(d.x.abs, dir.x.abs, 1e-9)
      i += 1

  // ---------------------------------------------------------------------------
  // perimeterBeams — the inset is the whole point
  // ---------------------------------------------------------------------------

  test("one perimeter beam per wall edge"):
    val bnd = hexagon(4.0)
    val beams = perimeterBeams(bnd, Strip, StripH, SoffitY)
    assertEquals(beams.length, 6)

  test("a perimeter beam's OUTER FACE is flush with the wall"):
    // Inset by width/2 means the centerline sits width/2 from the boundary, so
    // the soffit spans 0 … width from it — exactly what a snapped plan's
    // perimeter beam does, and what the templates' `atWall` term assumes.
    val bnd = hexagon(4.0)
    val beams = perimeterBeams(bnd, Strip, StripH, SoffitY)
    var i = 0
    while i < beams.length do
      val b = beams(i)
      val mid = Vec2((b.a.x + b.b.x) / 2.0, (b.a.y + b.b.y) / 2.0)
      assertEqualsDouble(bnd.nearest(mid).dist, Strip / 2.0, 1e-9)
      assert(bnd.contains(mid), s"perimeter beam $i is outside the plan")
      i += 1

  test("perimeter beams mitre rather than leaving a gap at a corner"):
    // Clipping the offset line against the plan runs it onto the neighbouring
    // wall, so consecutive beams overlap near a corner instead of stopping
    // short of it. Check that every plan vertex is covered by some beam.
    val bnd = hexagon(4.0)
    val beams = perimeterBeams(bnd, Strip, StripH, SoffitY)
    var v = 0
    while v < bnd.edges.length do
      val corner = bnd.edges(v).a
      var covered = false
      var i = 0
      while i < beams.length do
        val b = beams(i)
        val d = b.b - b.a
        val t = ((corner - b.a).dot(d) / d.dot(d)).clamp(0.0, 1.0)
        val q = b.a + d * t
        // Within one strip width of the beam's axis counts as covered.
        if (corner - q).length <= Strip then covered = true
        i += 1
      assert(covered, s"corner $v is not covered by any perimeter beam")
      v += 1

  // ---------------------------------------------------------------------------
  // BeamAtlas — THE BAND ORDER. The subtle one, and the one a new raster
  // shape would otherwise rediscover the hard way.
  // ---------------------------------------------------------------------------

  /** One beam, far from any wall so no face is culled. */
  def soloAtlas(dir: Vec2): BeamAtlas =
    val bnd = box(10.0)
    val beam = Beam(
      a = Vec2(-dir.x * 2.0, -dir.y * 2.0),
      b = Vec2(dir.x * 2.0, dir.y * 2.0),
      width = Strip,
      height = StripH,
      soffitY = SoffitY,
    )
    BeamAtlas(Arr(beam), bnd)

  test("a beam clear of every wall keeps all three faces"):
    assertEquals(soloAtlas(Vec2(1, 0)).faces.length, 3)

  test("atlas metrics come from the beam profile"):
    val a = soloAtlas(Vec2(1, 0))
    assertEquals(a.rows, 1)
    assertEqualsDouble(a.width, Strip, 1e-12)
    assertEqualsDouble(a.height, StripH, 1e-12)
    assertEqualsDouble(a.bandWorld, Strip + 2.0 * StripH, 1e-12)
    assertEqualsDouble(a.maxLen, 4.0, 1e-9)

  test("texSize gives every row a whole number of texels"):
    val bnd = box(3.0)
    val beams =
      familyBeams(BeamFamily(Vec2(1, 0), Spacing, 0.0, Strip), bnd, StripH, SoffitY)
    val a = BeamAtlas(beams, bnd)
    val (_, h) = a.texSize(64.0, 128.0)
    assertEquals(h % a.rows, 0, "atlas height is not a whole number of rows")

  /** The CPU-side mirror of the shader's `across`: where a point at this `uv`
    * sits across the unrolled cross-section, in meters.
    *
    * Takes the row explicitly rather than using `fract` as the shader does. A
    * MESH VERTEX can sit exactly on a row boundary, where `fract` is ambiguous —
    * `fract(1.0) = 0`, so the last row's far edge reads as the first row's near
    * edge. Fragments never hit that: they sample texel CENTERS, which are
    * strictly inside. Subtracting the known row is exact and tests the layout
    * rather than the wrap.
    */
  def across(a: BeamAtlas, uv: Vec2, row: Int = 0): Double =
    (uv.y * a.rows - row) * a.bandWorld

  test("THE ROW IS THE CROSS-SECTION IN ORDER, at every beam angle"):
    // `Quad.fromDimensions` sets `v` from `-(n × tangent)`, and the two sides
    // have opposite normals, so they run OPPOSITE ways in `v`. Laid out as
    // `soffit, sideA, sideB` both side tops land against the soffit and the
    // beams render inside out. This asserts the layout that fixes it:
    //
    //   across = 0 ....... sideA top      (highest y on sideA)
    //   across = height .. the arris      (soffit plane, on both sides)
    //   across = h + w ... the arris again
    //   across = band .... sideB top      (highest y on sideB)
    val angles = Arr(0.0, Math.PI / 6.0, Math.PI / 3.0, Math.PI / 2.0, 2.1)
    var k = 0
    while k < angles.length do
      val a = angles(k)
      val atlas = soloAtlas(Vec2(Math.cos(a), Math.sin(a)))
      val sideA = atlas.faces(0)
      val soffit = atlas.faces(1)
      val sideB = atlas.faces(2)

      // The soffit is flat at the beam's underside and occupies the MIDDLE
      // band.
      var i = 0
      while i < soffit.length do
        assertEqualsDouble(soffit(i).position.y, SoffitY, 1e-9)
        val x = across(atlas, soffit(i).uv)
        assert(
          x >= atlas.height - 1e-6 && x <= atlas.height + atlas.width + 1e-6,
          s"angle $a: soffit at across=$x is outside its band",
        )
        i += 1

      // sideA: HIGHER is EARLIER in the row. Its top is across = 0, its arris
      // is across = height.
      i = 0
      while i < sideA.length do
        val v = sideA(i)
        val expected = (SoffitY + StripH) - v.position.y
        assertEqualsDouble(
          across(atlas, v.uv),
          expected,
          1e-6,
        )
        i += 1

      // sideB: HIGHER is LATER. Its arris is across = height + width, its top
      // is across = bandWorld.
      i = 0
      while i < sideB.length do
        val v = sideB(i)
        val expected = (atlas.height + atlas.width) + (v.position.y - SoffitY)
        assertEqualsDouble(across(atlas, v.uv), expected, 1e-6)
        i += 1
      k += 1

  test("a face pointing out of the plan is dropped"):
    // A perimeter beam against a wall: its outward side is coplanar with the
    // wall, so only two faces survive.
    val bnd = box(3.0)
    val beams = perimeterBeams(bnd, Strip, StripH, SoffitY)
    val atlas = BeamAtlas(beams, bnd)
    assertEquals(atlas.faces.length, beams.length * 2)

  test("a triangular raster over a hexagon stays under the atlas ceiling"):
    // The atlas is one row per beam and is deliberately NOT clamped against
    // `maxTextureDimension2D` (8192 on essentially everything) — clamping would
    // silently trade away the cross-section resolution the scale exists to
    // provide. The failure is loud but only in the console: the beams simply do
    // not draw. `hex-partitions` is the template that gets closest, so pin the
    // headroom it actually has at its shipped parameters.
    val R = 5.5
    val G = 0.55
    val bnd = hexagon(R)
    val beams = Arr[Beam]()
    var f = 0
    while f < 3 do
      val a = f.toDouble / 3.0 * Math.PI
      val bs = familyBeams(
        BeamFamily(Vec2(Math.cos(a), Math.sin(a)), G, 0.0, Strip),
        bnd,
        StripH,
        SoffitY - f * 0.0006,
      )
      var j = 0
      while j < bs.length do
        beams.push(bs(j))
        j += 1
      f += 1
    val perim = perimeterBeams(bnd, Strip, StripH, SoffitY - 3 * 0.0006)
    var j = 0
    while j < perim.length do
      beams.push(perim(j))
      j += 1
    val atlas = BeamAtlas(beams, bnd)
    val (w, h) = atlas.texSize(64.0, 128.0)
    assert(
      h <= 8192,
      s"atlas is ${atlas.rows} rows = $h texels tall — over the 8192 limit",
    )
    assert(w <= 8192, s"atlas is $w texels wide")
    // If this number moves a lot, the room got much bigger or the grid much
    // finer, and the headroom above is worth re-reading.
    assert(atlas.rows > 40 && atlas.rows < 80, s"unexpectedly ${atlas.rows} beams")

  test("u never exceeds 1 — the atlas does not tile"):
    val bnd = box(3.0)
    val beams =
      familyBeams(BeamFamily(Vec2(1, 0), Spacing, 0.0, Strip), bnd, StripH, SoffitY)
    val atlas = BeamAtlas(beams, bnd)
    var i = 0
    while i < atlas.faces.length do
      val f = atlas.faces(i)
      var j = 0
      while j < f.length do
        assert(f(j).uv.x >= -1e-9 && f(j).uv.x <= 1.0 + 1e-9, s"u = ${f(j).uv.x}")
        assert(f(j).uv.y >= -1e-9 && f(j).uv.y <= 1.0 + 1e-9, s"v = ${f(j).uv.y}")
        j += 1
      i += 1
