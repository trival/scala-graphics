package sketches.textures.pool_tiles

import org.scalajs.dom.HTMLCanvasElement
import sketchlib.shaders.Uv
import trivalibs.graphics.shader.lib.color.*
import trivalibs.graphics.shader.lib.coords.*
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel

// ============================================================================
// Reference: original Rust shader (pool_tiles.rs) — kept for comparison.
// ============================================================================
//
// pub fn shader(uv: Vec2, size: UVec2, t: f32) -> Vec4 {
//     let uv = aspect_preserving_uv(uv, size);
//
//     let drop_center = vec2(-1.2, -1.3);
//     let mut pc = PolarCoord::from_2d(uv - drop_center);
//     pc.radius = pc.radius + (pc.radius * 10.1 - t * 3.).sin().powf(6.) * 0.003;
//     let uv = pc.to_2d() + drop_center;
//
//     let drop_center = vec2(2.2, 0.3);
//     let mut pc = PolarCoord::from_2d(uv - drop_center);
//     pc.radius = pc.radius + (pc.radius * 8.5 - t * 1.8).sin().powf(8.) * 0.0055;
//     let uv = pc.to_2d() + drop_center;
//
//     let uv = uv - 0.5;
//
//     let tile_scale = 50. * 1.0.lerp(0.6, uv.y) * 1.0.lerp(0.85, uv.x);
//     let uv = uv * tile_scale;
//
//     let n = simplex_noise_2d(Vec2::splat(t * 0.006)) * 2.;
//     let mat = Mat2::from_angle(n);
//     let uv = mat * uv;
//
//     let nx = simplex_noise_2d(Vec2::splat(t * 0.01 - 100.));
//     let ny = simplex_noise_2d(Vec2::splat(t * 0.01 - 200.));
//     let offset = vec2(nx, ny) * 33.;
//     let uv = uv + offset;
//
//     let idx = uv.floor();
//
//     let rnd = hash21(idx.to_bits());
//     let n = simplex_noise_2d(idx * 0.2).fit1101();
//
//     let test = n * 0.7 + rnd * 0.3;
//     let val = ((rnd.fit0111() * 0.7).round() + idx.x + 50. * idx.y).rem(3.);
//     let tile_rnd = hash(val as u32 + 345);
//
//     let color = if test > 0.5 {
//         hsv2rgb(vec3(0.6, 0.1, val / 2.5 + tile_rnd * 0.3))
//     } else {
//         hsv2rgb(vec3(tile_rnd * 0.5 + 0.15, 0.3 - tile_rnd * 0.1, 0.7))
//     };
//
//     color.powf(2.2).extend(1.0)
// }
//
// ============================================================================

// Port of the Rust `pool_tiles` texture shader. Two animated ripple "drops"
// warp a rotating, drifting tile grid; each cell picks one of two HSV palettes
// from hashed / noise-driven values.

@JSExportTopLevel("sketch")
def poolTiles(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    type U = (res: Vec2, time: Float)

    // Rotate a Vec2 by `angle` — inlines `Mat2::from_angle(angle) * v`.
    def rotate(v: Vec2Expr, angle: FloatExpr): Vec2Expr =
      val c = angle.cos
      val s = angle.sin
      vec2(v.x * c - v.y * s, v.x * s + v.y * c)

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val t = ctx.bindings.time
        val uv = VarVec2("uv")
        val pc = VarVec2("pc")
        val idx = LetVec2("idx")
        val rnd = LetFloat("rnd")
        val nz = LetFloat("nz")
        val test = LetFloat("test")
        val tileVal = LetFloat("tileVal")
        val tileRnd = LetFloat("tileRnd")
        val angle = LetFloat("angle")
        val col = LetVec3("col")

        val drop1 = vec2(-1.2, -1.3)
        val drop2 = vec2(2.2, 0.3)

        Block(
          uv := Uv.aspectPreserving(ctx.in.uv, ctx.bindings.res),

          // ripple drop 1
          pc := (uv - drop1).cartToPolar,
          pc := vec2(pc.x + (pc.x * 10.1 - t * 3.0).sin.pow(6.0) * 0.003, pc.y),
          uv := pc.polarToCart + drop1,

          // ripple drop 2
          pc := (uv - drop2).cartToPolar,
          pc := vec2(pc.x + (pc.x * 8.5 - t * 1.8).sin.pow(8.0) * 0.0055, pc.y),
          uv := pc.polarToCart + drop2,

          uv := uv - 0.5,
          uv := uv * (50.0 * mix(1.0, 0.6, uv.y) * mix(1.0, 0.85, uv.x)),

          // slow rotation + noise drift
          angle := Simplex.simplexNoise2d(vec2(t * 0.006)) * 2.0,
          uv := rotate(uv, angle),
          uv := uv + vec2(
            Simplex.simplexNoise2d(vec2(t * 0.01 - 100.0)),
            Simplex.simplexNoise2d(vec2(t * 0.01 - 200.0)),
          ) * 33.0,

          idx := uv.floor,
          rnd := Hash.hash21(idx.bitsToU32),
          nz := Simplex.simplexNoise2d(idx * 0.2).fit1101,
          test := nz * 0.7 + rnd * 0.3,
          tileVal := ((rnd.fit0111 * 0.7).round + idx.x + idx.y * 50.0)
            .rem(3.0),
          tileRnd := Hash.hash1(tileVal.toU32 + 345.u),

          col := (test > 0.5).select(
            vec3(0.6, 0.1, tileVal / 2.5 + tileRnd * 0.3).hsv2rgb,
            vec3(tileRnd * 0.5 + 0.15, 0.3 - tileRnd * 0.1, 0.7).hsv2rgb,
          ),

          ctx.out.color := vec4(col, 1.0),
        )

    val uRes = p.binding[Vec2]
    val uTime = p.binding(0.0)

    val panel = p.panel(
      layer = p.layer(shade).bind("res" := uRes, "time" := uTime),
    )

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))

    var time = 0.0
    animate: tpf =>
      time += tpf * 0.001
      uTime.set(time)
      p.paintAndShow(panel)
