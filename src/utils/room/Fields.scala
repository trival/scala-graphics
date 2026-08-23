package sketchlib.utils.room

import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}

// ---------------------------------------------------------------------------
// Distance fields over the floor plan — BUILD-TIME shader expressions.
//
// Each unrolls over the CPU-known ring data into a `min` chain, so every
// `a`/`b`/`dot(e,e)` constant-folds. These only ever run inside a bake, where
// that is free — which is why the edge set stays a build-time constant rather
// than becoming an array uniform.
//
// Each takes an explicit BOUNDARY rather than reaching for the whole
// footprint: not every surface is bounded by every ring, and passing the set in
// makes that a call-site decision instead of a rewrite. A ceiling is bounded by
// what reaches it, a floor by everything that touches it, a wall by neither.
//
// `edgeSetDist` and `cornerDist` return METERS; `edgeFade` returns a [0,1]
// FACTOR, because its terms are each measured against their own fade radius and
// stop being commensurable as distances. That is the one asymmetry here and it
// is deliberate — see `edgeFade`.
//
// NONE OF THESE IS AN OCCLUSION DISTANCE. What a room does with a distance to
// an edge is the room's business — the templates use them to fade a
// normal-varied noise term and to place a grime line, and deliberately darken
// nothing.
// ---------------------------------------------------------------------------

/** Unsigned distance from an XZ point to the nearest edge in `bnd`. Baked
  * geometry lies inside the plan by construction, so no sign is needed — which
  * keeps the winding/crossing machinery of a real polygon SDF out of this
  * entirely. Handles concave corners and inner rings uniformly and for free.
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

/** Unsigned distance from an XZ point to the nearest VERTEX in `bnd` — the
  * corner columns where two walls meet. The boundary itself is zero everywhere
  * on a wall, so this is what a wall surface has to fade against.
  *
  * Reads only each edge's `a`, and finds every vertex only because the edges
  * form closed loops — one of the two invariants [[Boundary]] exists to carry.
  *
  * A wall's noise fade wants [[edgeFade]] rather than this: a corner and an
  * arris round off over very different widths, and a plain distance has thrown
  * away which one it is measuring to. This stays for anything that genuinely
  * wants the metric distance to a corner column and treats them all alike.
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

/** How wide the material rounds off at each KIND of geometry edge, in meters.
  *
  * Four numbers rather than one because they are four different edges, not four
  * tunings of one — see [[Edge.arrisAtA]] for the corner pair, which is the
  * distinction that forced this apart.
  *
  *   - `plane` — where a horizontal surface meets what stands on it, and the
  *     matching junction seen from the wall as a height above the floor. ONE
  *     number for both on purpose: it is the same physical line rounded from
  *     two sides, and two numbers would round it differently on each.
  *   - `top` — a surface's own top rim. A `FloatExpr` rather than a `Double`
  *     because it is the one that genuinely varies per surface: a full-height
  *     wall's top is not an edge at all (whatever continues the plane above it
  *     is), a partition's is an arris. Pass a bake uniform beside `topY` when a
  *     room mixes the two through one pipeline.
  *   - `corner` — vertical corners whose faces wrap toward the room.
  *   - `arris` — vertical corners whose faces turn away from it.
  *
  * **`arris` has a floor set by the bake, not by taste.** The fade is drawn
  * into a texture, so below about two texels it stops resolving and the hard
  * seam it exists to hide comes back. At 64 texels/m that is ~0.03 m. Wanting a
  * genuinely tighter arris means baking that surface finer.
  */
type EdgeFades = (
    plane: Double,
    top: FloatExpr,
    corner: Double,
    arris: Double,
)

extension (f: EdgeFades)
  /** The same radii with a different `top` — for a bake that takes its
    * surface's top rim as a uniform, because one pipeline serves surfaces whose
    * tops are different kinds of edge.
    */
  def withTop(top: FloatExpr): EdgeFades =
    (plane = f.plane, top = top, corner = f.corner, arris = f.arris)

/** Distance from an XZ point to the nearest VERTEX, expressed as a FRACTION OF
  * THAT VERTEX'S OWN fade radius — so a `min` over the chain compares like with
  * like and the caller can fade the result over `[0, 1]`.
  *
  * That normalization is the whole trick, and it is why per-vertex radii cost
  * nothing: each term gains one multiply by a build-time constant, the chain
  * stays a single `min`, and no per-vertex `smoothstep` is needed.
  */
private def cornerFrac(
    pxz: Vec2Expr,
    bnd: Boundary,
    corner: Double,
    arris: Double,
): FloatExpr =
  val edges = bnd.edges
  def vFrac(e: Edge): FloatExpr =
    (pxz - vec2(e.a)).length * (1.0 / (if e.arrisAtA then arris else corner))
  var acc = vFrac(edges(0))
  var i = 1
  while i < edges.length do
    acc = acc.min(vFrac(edges(i)))
    i += 1
  acc

/** How far `wp` is from being ON a geometry edge: 0 at every edge, 1 once clear
  * of all of them, smooth between — each term measured against its own radius
  * from [[EdgeFades]].
  *
  * The boundary the surface itself lies in is ignored (a wall never
  * "approaches" its own plane). Adding a large constant on the surface's own
  * axis takes it out of the `min` — split by whether the surface is horizontal.
  *
  * `topY` is per-surface, so a wall fades against ITS OWN top rim — the ceiling
  * junction for a full-height wall, the open top edge for a partition. Same
  * expression, different constant. Pass it as a bake uniform to keep one
  * pipeline for walls of assorted heights.
  *
  * **This returns a FACTOR, not a distance**, and it replaced an `edgeDist`
  * that returned meters. It had to: with a per-vertex radius the terms are no
  * longer commensurable as distances, and a caller holding metres cannot
  * recover which radius each one should have been measured against. The
  * conversion is not free to leave to the caller — it IS the fix.
  */
def edgeFade(
    wp: Vec3Expr,
    normal: Vec3Expr,
    bnd: Boundary,
    topY: FloatExpr,
    fades: EdgeFades,
): FloatExpr =
  val Far = 1000.0 // in radii now, not meters — still far
  val isHoriz = normal.y.abs // 1 for floor/ceiling, 0 for walls
  val plan = edgeSetDist(wp.xz, bnd) * (1.0 / fades.plane)
    + (1.0 - isHoriz) * Far
  val vert = (wp.y * (1.0 / fades.plane)).min((topY - wp.y) / fades.top)
    + isHoriz * Far
  val corner = cornerFrac(wp.xz, bnd, fades.corner, fades.arris)
    + isHoriz * Far
  plan.min(vert).min(corner).smoothstep(0.0, 1.0)
