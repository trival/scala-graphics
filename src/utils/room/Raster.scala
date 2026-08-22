package sketchlib.utils.room

import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// The ceiling raster's GEOMETRY — where the beams are. Not what they look like.
//
// A FLAT LIST OF BEAM SEGMENTS, not a pair of axis-aligned grids. That is the
// structural choice everything else rests on: a hexagonal room wants a
// TRIANGULAR raster — three families each parallel to one opposite wall pair —
// and a non-snappable plan additionally wants an explicit perimeter beam along
// each wall. Both are just another producer pushing into the same `Arr[Beam]`.
//
// Which is also why `Arr[Beam]` is the seam. A room with a raster no generator
// here describes builds its own array inline and keeps every downstream step —
// the face layout, the atlas bake, the shading. Nothing below this module asks
// where a beam came from.
//
// The FACE and ATLAS layout is deliberately NOT here. Sizing the atlas row,
// ordering the bands across the cross-section and choosing which faces to build
// are entangled with how the beams are shaded, and that is a look decision that
// stays in the sketch. See the templates' beam-face block, which carries the
// reasoning about band order.
// ---------------------------------------------------------------------------

/** One beam: an oriented segment in the grid plane. `soffitY` is its underside
  * — carried per beam rather than taken from a room constant so families can be
  * staggered against each other, which is what keeps their soffits from being
  * coplanar where they cross.
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

/** One beam along every boundary edge, inset so its OUTER FACE is flush with
  * the wall plane.
  *
  * The fallback where snapping does not apply. An axis-aligned plan gets its
  * perimeter beams for free by deriving the room from the lattice — each wall
  * plane flush with the outer face of the nearest field beam — and needs none
  * of this. A hexagon cannot do that, because its walls are not parallel to any
  * two of the three beam families at once, so the perimeter has to be
  * generated.
  *
  * **The inset is what makes the shading work unchanged.** With the beam's
  * centerline on the boundary, half its soffit would hang outside the plan and
  * every term keyed on distance-to-boundary would read one strip width out.
  * Inset by `width/2` the soffit spans `0 … width` from the wall, exactly as a
  * snapped plan's perimeter beam does, so a template's `atWall` term and its
  * cull-the-outward-face test both transfer with no change.
  *
  * The offset line is CLIPPED against the plan rather than run corner to
  * corner, which mitres the corners for free: at a convex corner the two offset
  * lines each stop on the neighbouring wall, so the beams overlap slightly
  * instead of leaving a notch. It also does the right thing on a concave plan,
  * where an offset line can return more than one interval.
  */
def perimeterBeams(
    bnd: Boundary,
    width: Double,
    height: Double,
    soffitY: Double,
): Arr[Beam] =
  val edges = bnd.edges
  val out = Arr[Beam]()
  var i = 0
  while i < edges.length do
    val e = edges(i)
    val dx = e.b.x - e.a.x
    val dz = e.b.y - e.a.y
    val len = (dx * dx + dz * dz).sqrt
    val dir = Vec2(dx / len, dz / len)
    val origin = Vec2(
      (e.a.x + e.b.x) / 2.0 + e.inwardNormal.x * width / 2.0,
      (e.a.y + e.b.y) / 2.0 + e.inwardNormal.y * width / 2.0,
    )
    val spans = bnd.clipLine(origin, dir)
    var s = 0
    while s < spans.length do
      val sp = spans(s)
      out.push(
        Beam(
          a = Vec2(origin.x + dir.x * sp.from, origin.y + dir.y * sp.from),
          b = Vec2(origin.x + dir.x * sp.to, origin.y + dir.y * sp.to),
          width = width,
          height = height,
          soffitY = soffitY,
        ),
      )
      s += 1
    i += 1
  out

/** The raster's drawable faces and the atlas frame they are addressed in.
  *
  * **The layout and the expressions that read it live together on purpose.**
  * The atlas row IS the beam's unrolled cross-section, so the shader's "how far
  * across the beam am I" is a fact about how the faces were laid out — and when
  * the two are written apart, they drift. They drifted once already: laid out
  * naively the gradient landed on the wrong edges and the beams rendered inside
  * out. [[across]] and its derived distances are provided here so a bake cannot
  * disagree with the geometry it is baking.
  *
  * What is NOT here is every look decision that reads these: how softly an
  * arris blends, what a soffit is tinted, whether a crossing is treated at all.
  * Those stay in the sketch, which is why this hands out DISTANCES IN METERS
  * rather than finished masks.
  *
  * THE ROW IS THE CROSS-SECTION, UNROLLED IN ORDER:
  * {{{
  *   0 ─────── height ──── +width ───────────── bandWorld
  *   sideA top   arris      soffit     arris     sideB top
  * }}}
  *
  * Getting that order right is not cosmetic. `Quad.fromDimensions` sets `v`
  * from `-(n × tangent)`, and the two side faces have opposite normals — so
  * `perp × dir = +Y` puts sideA's TOP at `uv.y = 0`, while `-perp × dir = -Y`
  * puts sideB's BOTTOM there. **The two sides run opposite ways in `v`.** Laid
  * out as `soffit, sideA, sideB` both side TOPS end up against the soffit's
  * ends and both arrises land mid-row, so anything measuring position across
  * the section reads the beam inside out.
  *
  * In this order every atlas adjacency is a real geometric adjacency: the two
  * internal boundaries are the two arrises, and the row's outer ends are the
  * two open top edges, which neighbour the next beam's open top edge and share
  * its tint. Nothing bleeds across a seam that is not there. The argument holds
  * at any beam angle — `perp` is `dir` rotated 90°, so `perp × dir` is `+Y`
  * whichever way the beam runs — so a triangular raster needs no rework.
  *
  * `u` runs `[0, length/maxLen]`: normalized, clamp-safe, proportional, and
  * shorter beams simply use less of their row. Do NOT scale `u` by world
  * distance to get uniform density — this atlas does not tile, so a beam longer
  * than one unit would run `u` past 1 and a clamping sampler would silently pin
  * it at the edge.
  *
  * **One profile for the whole raster.** Every row is the same size, so the
  * band layout is taken from `beams(0)`. A raster mixing beam profiles needs
  * its own layout; it is not a case this handles quietly.
  *
  * @param clip
  *   the boundary a face is tested against before being built — the ceiling
  *   boundary, normally. A face pointing out of the plan is dropped, which is
  *   what removes the perimeter beams' outer sides.
  */
class BeamAtlas(val beams: Arr[Beam], clip: Boundary):
  /** One row per beam. */
  val rows: Int = beams.length

  /** The uniform beam profile the rows are sized to. */
  val width: Double = beams(0).width
  val height: Double = beams(0).height

  /** The cross-section's total unrolled width in meters: soffit plus both
    * sides.
    */
  val bandWorld: Double = width + 2.0 * height

  /** The longest beam, which `u` is normalized against. */
  val maxLen: Double =
    var m = 0.0
    var i = 0
    while i < beams.length do
      val l = (beams(i).b - beams(i).a).length
      if l > m then m = l
      i += 1
    m

  /** Three visible faces per beam — soffit and both sides, minus any face
    * pointing out of the plan. No top: with the eye locked to a walking plane
    * nothing above the raster is ever seen from below, and a floor mirror
    * reflects to below the floor, so it sees undersides too.
    *
    * Built in each beam's OWN frame `(center, dir, perp, Y)` rather than from
    * an axis-aligned box, which is what makes an odd-angle beam no different
    * from an axis-aligned one.
    */
  val faces: Arr[Quad[RoomVertex]] =
    val out = Arr[Quad[RoomVertex]]()
    var i = 0
    while i < beams.length do
      val b = beams(i)
      val dx = b.b.x - b.a.x
      val dz = b.b.y - b.a.y
      val len = (dx * dx + dz * dz).sqrt
      val dir = Vec3(dx / len, 0.0, dz / len)
      val perp = Vec3(-dir.z, 0.0, dir.x)
      val cx = (b.a.x + b.b.x) / 2.0
      val cz = (b.a.y + b.b.y) / 2.0
      val u1 = len / maxLen
      val rowV0 = i.toDouble / rows
      val rowH = 1.0 / rows

      def band(fromWorld: Double, thickWorld: Double) =
        (
          v0 = rowV0 + rowH * (fromWorld / bandWorld),
          v1 = rowV0 + rowH * ((fromWorld + thickWorld) / bandWorld),
        )

      def face(
          w: Double,
          h: Double,
          n: Vec3,
          center: Vec3,
          vb: (v0: Double, v1: Double),
      ): Quad[RoomVertex] =
        // Explicit tangent, not inferred: a soffit's normal is -Y, so the
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
        !clip.contains(Vec2(centerXZ.x + n.x * 0.01, centerXZ.y + n.z * 0.01))

      val sideA = Vec2(cx + perp.x * b.width / 2.0, cz + perp.z * b.width / 2.0)
      if !facesOutOfPlan(sideA, perp) then
        out.push(
          face(
            len,
            b.height,
            perp,
            Vec3(sideA.x, midY, sideA.y),
            band(0.0, height),
          ),
        )
      out.push(
        face(
          len,
          b.width,
          -Vec3.Y,
          Vec3(cx, b.soffitY, cz),
          band(height, width),
        ),
      )
      val sideB = Vec2(cx - perp.x * b.width / 2.0, cz - perp.z * b.width / 2.0)
      if !facesOutOfPlan(sideB, -perp) then
        out.push(
          face(
            len,
            b.height,
            -perp,
            Vec3(sideB.x, midY, sideB.y),
            band(height + width, height),
          ),
        )
      i += 1
    out

  /** Atlas dimensions in texels.
    *
    * **`height` must be a whole number of rows.** Sizing it as
    * `(rows × bandWorld × scale).toInt` — the obvious way — leaves a fractional
    * row height, and then each beam's bands sit at a different sub-texel phase.
    * Identical geometry bleeds differently beam by beam, and because beams
    * arrive family by family the phase splits along family lines: one wall pair
    * shows a line at the junction and the other does not. It also reshuffles
    * whenever a grid constant changes the beam count, which is what makes it
    * look intermittent rather than systematic.
    *
    * Two scales, because the two axes carry different content. ACROSS the
    * section the atlas has real structure — the band boundaries are the
    * arrises, and a soffit only `width` meters wide is a handful of texels, so
    * one texel of bilinear bleed from a bright side band is a large fraction of
    * it. ALONG the run the content genuinely is low-frequency and can share the
    * room's ambience scale.
    *
    * **NOT CLAMPED against `maxTextureDimension2D`, deliberately.** Clamping
    * would silently trade away the resolution `crossScale` exists to provide,
    * and quietly getting the artifact back is worse than a loud failure while
    * tuning. WebGPU does not throw — an over-large `createTexture` is a
    * validation error, so the console fills with errors and the beams simply do
    * not draw. If a raster vanishes after a grid tweak, look there first.
    */
  def texSize(
      alongScale: Double,
      crossScale: Double,
  ): (width: Int, height: Int) =
    val rowTexels =
      Math.max(1.0, Math.round(bandWorld * crossScale).toDouble).toInt
    (width = (maxLen * alongScale).toInt, height = rows * rowTexels)

  /** Position across the unrolled cross-section, in METERS, from a fragment's
    * atlas `uv`. `0` and [[bandWorld]] are the two open top edges; the arrises
    * sit at [[height]] and `height + width`.
    *
    * Needs no per-beam frame — one expression serves every beam at any angle,
    * which a world-space formulation could not do without per-beam uniforms,
    * and a single shared atlas bake has none.
    */
  def across(uv: Vec2Expr): FloatExpr = (uv.y * rows.toDouble).fract * bandWorld

  /** Distance in meters to the nearest edge of the face this point is on,
    * measured across the section only.
    *
    * The run is NOT faded: beam ends abut walls or other beams, and `u` cannot
    * recover the far end because each beam's `u` range differs and the bake is
    * shared.
    */
  def crossEdgeDist(uv: Vec2Expr): FloatExpr =
    val a = across(uv)
    a.min((a - height).abs)
      .min((a - (height + width)).abs)
      .min(bandWorld - a)

  /** Distance in meters from the soffit's centerline, across the section. The
    * soffit sits in the MIDDLE of the row, so this is a plain distance — the
    * row is a cross-section laid out in order, not a wrapped loop.
    *
    * What a sketch builds its soffit/side blend out of. The blend's WIDTH is
    * the sketch's to choose, which is why this stops at a distance.
    */
  def soffitCenterDist(uv: Vec2Expr): FloatExpr =
    (across(uv) - (height + width / 2.0)).abs
