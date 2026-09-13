package sketches.textures.lines

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel

// ============================================================================
// Reference: original Rust shader (lines_1.rs) — kept for comparison.
// ============================================================================
//
// const LINE_COUNT: f32 = 20.0;
//
// pub fn shader(uv: Vec2, _size: UVec2, time: f32) -> Vec4 {
//     let line_segment = (uv.x * LINE_COUNT).floor();
//     let line_x = (uv.x * LINE_COUNT).frct().fit0111();
//
//     // Color generation closure
//     let color = |segment: f32| {
//         vec3(
//             hash((segment * 3.0 * LINE_COUNT) as u32),
//             hash((segment * 7.0 * LINE_COUNT) as u32),
//             hash((segment * 11.0 * LINE_COUNT) as u32),
//         )
//     };
//
//     // Height/depth calculation closure for z-ordering
//     let compute_height = |segment: f32| -> f32 { hash((segment * LINE_COUNT) as u32) };
//
//     // Complete line computation closure - returns (intensity, color, height)
//     let compute_line = |segment_offset: f32, line_x_offset: f32| -> (f32, Vec3, f32) {
//         let segment = line_segment + segment_offset;
//         let x = line_x + line_x_offset;
//         let noise = simplex_noise_3d(vec3(segment, uv.y + time * 0.1, time * 0.07)) * 1.3;
//         let x_bent = x + noise;
//         let line_intensity = x_bent.abs().smoothstep(0.7, 0.6);
//         let line_color = color(segment);
//         let height = compute_height(segment);
//         (line_intensity, line_color, height)
//     };
//
//     // Pass closure - computes and sorts 3 lines for a given segment offset
//     let compute_pass = |pass_segment_offset: f32| -> [(f32, Vec3, f32); 3] {
//         // Generate all three line variants with pass offset
//         let curr = compute_line(pass_segment_offset + 0.0, 0.0);
//         let prev = compute_line(pass_segment_offset - 1.0, 2.0);
//         let next = compute_line(pass_segment_offset + 1.0, -2.0);
//
//         // Sort by height using manual swapping (bubble sort for 3 elements)
//         let mut lines = [prev, curr, next];
//
//         // Pass 1
//         if lines[0].2 > lines[1].2 {
//             let temp = lines[0];
//             lines[0] = lines[1];
//             lines[1] = temp;
//         }
//         if lines[1].2 > lines[2].2 {
//             let temp = lines[1];
//             lines[1] = lines[2];
//             lines[2] = temp;
//         }
//         // Pass 2
//         if lines[0].2 > lines[1].2 {
//             let temp = lines[0];
//             lines[0] = lines[1];
//             lines[1] = temp;
//         }
//
//         lines
//     };
//
//     // Blend closure - blends 3 sorted lines onto a base color
//     let blend_pass = |base_color: Vec3, lines: [(f32, Vec3, f32); 3]| -> Vec3 {
//         base_color
//             .lerp(lines[0].1, lines[0].0)
//             .lerp(lines[1].1, lines[1].0)
//             .lerp(lines[2].1, lines[2].0)
//     };
//
//     // Execute 3 passes, each layering on top of the previous
//     let col_bg = Vec3::ONE;
//     let col = blend_pass(col_bg, compute_pass(0.0)); // Pass 1: Base layer
//     let col = blend_pass(col, compute_pass(100.0)); // Pass 2: Middle layer
//     let col = blend_pass(col, compute_pass(200.0)); // Pass 3: Top layer
//
//     col.powf(2.2).extend(1.0)
// }
//
// ============================================================================

// Port of the Rust `lines_1` texture shader.

@JSExportTopLevel("sketch")
def lines(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    type U = (res: Vec2, time: Float)

    val LineCount = 20.0

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val uvX = ctx.in.uv.x
        val uvY = ctx.in.uv.y
        val time = ctx.bindings.time

        val lineSeg = LetFloat("lineSeg")
        val lineX = LetFloat("lineX")
        val col = VarVec3("col")
        val lineV = Arr(VarVec4("l0v"), VarVec4("l1v"), VarVec4("l2v"))
        val lineH = Arr(VarFloat("l0h"), VarFloat("l1h"), VarFloat("l2h"))

        val PassOffsets = Arr(0.0, 100.0, 200.0)

        def computeLine(
            segOff: Double,
            lineXOff: Double,
        ): (v: Vec4Expr, h: FloatExpr) =
          val segment = lineSeg + segOff
          val x = lineX + lineXOff
          val noise =
            Simplex.simplexNoise3d(
              vec3(segment, uvY + time * 0.1, time * 0.07),
            ) * 1.3
          val intensity = (x + noise).abs.smoothstep(0.7, 0.6)
          val color = vec3(
            Hash.hash1((segment * 3.0 * LineCount).toU32),
            Hash.hash1((segment * 7.0 * LineCount).toU32),
            Hash.hash1((segment * 11.0 * LineCount).toU32),
          )
          (
            v = vec4(color, intensity),
            h = Hash.hash1((segment * LineCount).toU32),
          )

        def compareSwapByHeight(a: Int, b: Int): Block =
          scope:
            val swap = lineH(a) > lineH(b)
            val av = LetVec4("av")
            val bv = LetVec4("bv")
            val ah = LetFloat("ah")
            val bh = LetFloat("bh")
            Block(
              av := swap.select(lineV(b), lineV(a)),
              bv := swap.select(lineV(a), lineV(b)),
              ah := swap.select(lineH(b), lineH(a)),
              bh := swap.select(lineH(a), lineH(b)),
              lineV(a) := av,
              lineV(b) := bv,
              lineH(a) := ah,
              lineH(b) := bh,
            )

        def blendPass(passOff: Double): Block =
          val prev = computeLine(passOff - 1.0, 2.0)
          val curr = computeLine(passOff + 0.0, 0.0)
          val next = computeLine(passOff + 1.0, -2.0)
          Block(
            Arr(prev, curr, next).unroll: (line, i) =>
              Block(
                lineV(i) := line.v,
                lineH(i) := line.h,
              ),
            compareSwapByHeight(0, 1),
            compareSwapByHeight(1, 2),
            compareSwapByHeight(0, 1),
            unroll(3): j =>
              col := col.mix(lineV(j).xyz, lineV(j).w),
          )

        Block(
          lineSeg := (uvX * LineCount).floor,
          lineX := (uvX * LineCount).fract.fit0111,
          col := vec3(1.0),
          PassOffsets.unroll(blendPass(_)),
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
