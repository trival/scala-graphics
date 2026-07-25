package sketchlib.shaders

import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}

// ---------------------------------------------------------------------------
// Reusable 2D SDF-ish shape masks for the shader DSL (sketchlib.shaders).
//
// Build-time expression emitters (no runtime cost beyond the emitted WGSL),
// shared across sketches, so they follow the library's bundle-size discipline.
// Ports of the Rust `shared_nostd::shapes` helpers.
// ---------------------------------------------------------------------------

object Shapes:

  // Distance from `st` to the rounded-rect's straight edge region — the shared
  // core of both masks below.
  private def roundedRectDist(
      st: Vec2Expr,
      center: Vec2Expr,
      size: Vec2Expr,
      radius: FloatExpr,
  ): FloatExpr =
    val offset = size / 2.0 - radius
    ((st - center).abs - offset).max(vec2(0.0)).length

  /** Hard rounded-rectangle mask: `1.0` inside (distance ≤ `radius`), `0.0`
    * outside. `size` is the full extent, `radius` the corner radius. Port of
    * Rust `rounded_rect`.
    */
  def roundedRect(
      st: Vec2Expr,
      center: Vec2Expr,
      size: Vec2Expr,
      radius: FloatExpr,
  ): FloatExpr =
    radius.gte(roundedRectDist(st, center, size, radius))

  /** Smoothed rounded-rectangle mask: smoothsteps across a `smoothness`-wide
    * band centered on the edge — `1.0` inside, `0.0` outside, soft in between.
    * Port of Rust `rounded_rect_smooth` (note the inverted edges: inside → 1).
    */
  def roundedRectSmooth(
      st: Vec2Expr,
      center: Vec2Expr,
      size: Vec2Expr,
      radius: FloatExpr,
      smoothness: FloatExpr,
  ): FloatExpr =
    val d = roundedRectDist(st, center, size, radius)
    val s = smoothness / 2.0
    d.smoothstep(radius + s, radius - s)
