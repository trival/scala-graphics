package sketchlib.shaders

import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.shader.dsl.{*, given}

// ---------------------------------------------------------------------------
// Reusable UV helpers for the shader DSL (sketchlib.shaders).
//
// Build-time expression emitters (no runtime cost beyond the emitted WGSL),
// shared across sketches, so they follow the library's bundle-size discipline.
// ---------------------------------------------------------------------------

object Uv:

  /** Aspect-preserving UV remap. Scales `uv` so the shorter screen axis keeps
    * the full `[0, 1]` range and the longer axis is compressed by the aspect
    * ratio — the direct port of the Rust `aspect_preserving_uv(uv, size)`.
    *
    * @param uv
    *   screen UV in `[0, 1]` (e.g. `ctx.in.uv` in a `layerShade`).
    * @param size
    *   render-target resolution in pixels (bind a `res: Vec2` uniform).
    */
  def aspectPreserving(uv: Vec2Expr, size: Vec2Expr): Vec2Expr =
    val aspect = size.x / size.y
    (aspect > 1.0).select(
      uv * vec2(1.0, 1.0 / aspect),
      uv * vec2(aspect, 1.0),
    )
