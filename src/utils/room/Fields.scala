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
// All three take an explicit BOUNDARY rather than reaching for the whole
// footprint: not every surface is bounded by every ring, and passing the set in
// makes that a call-site decision instead of a rewrite. A ceiling is bounded by
// what reaches it, a floor by everything that touches it, a wall by neither.
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
  * corner columns where two walls meet. This is what a wall surface fades
  * against; the boundary itself is zero everywhere on a wall.
  *
  * Reads only each edge's `a`, and finds every vertex only because the edges
  * form closed loops — one of the two invariants [[Boundary]] exists to carry.
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

/** Distance from `wp` to the nearest geometry edge, ignoring the boundary the
  * surface itself lies in (a wall never "approaches" its own plane). Adding a
  * large constant on the surface's own axis takes it out of the `min` — split
  * by whether the surface is horizontal.
  *
  * `topY` is per-surface, so a wall fades against ITS OWN top rim — the ceiling
  * junction for a full-height wall, the open top edge for a partition. Same
  * expression, different constant. Pass it as a bake uniform to keep one
  * pipeline for walls of assorted heights.
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
