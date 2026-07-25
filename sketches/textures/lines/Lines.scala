package sketches.textures.lines

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

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

// Port of the Rust `lines_1` texture shader. Wavy vertical colored line bands
// bent by 3D simplex noise, drawn in 3 depth-sorted passes over a white
// background. Each pass builds 3 neighboring lines, sorts them by a hashed
// "height" (z-order), and blends them onto the running color.
//
// The Rust fixed-size arrays + bubble sort are unrolled by *Scala* loops at
// build time: each iteration emits shader statements into the frag `Block`.

@main def lines(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

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
        // Each line is packed as vec4(color.rgb, intensity); height is separate.
        val lineV = Arr(VarVec4("l0v"), VarVec4("l1v"), VarVec4("l2v"))
        val lineH = Arr(VarFloat("l0h"), VarFloat("l1h"), VarFloat("l2h"))

        // One line variant → (vec4(color, intensity), height). Inlines like the
        // Rust `compute_line` closure.
        def computeLine(
            segOff: Double,
            lineXOff: Double,
        ): (Vec4Expr, FloatExpr) =
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
          val height = Hash.hash1((segment * LineCount).toU32)
          (vec4(color, intensity), height)

        val stmts = Arr[Stmt]()
        stmts += (lineSeg := (uvX * LineCount).floor)
        stmts += (lineX := (uvX * LineCount).fract.fit0111)
        stmts += (col := vec3(1.0))

        // Height-index pairs for the 3-element bubble sort: (0,1),(1,2),(0,1).
        val sortPairs = Seq((0, 1), (1, 2), (0, 1))
        val passOffsets = Seq(0.0, 100.0, 200.0)

        var swapId = 0
        for passOff <- passOffsets do
          // Rust order within a pass: [prev, curr, next].
          val lines = Seq(
            computeLine(passOff - 1.0, 2.0),
            computeLine(passOff + 0.0, 0.0),
            computeLine(passOff + 1.0, -2.0),
          )
          for (line, i) <- lines.zipWithIndex do
            stmts += (lineV(i) := line._1)
            stmts += (lineH(i) := line._2)

          // Bubble sort by height, ascending — branchless compare-swaps.
          for (a, b) <- sortPairs do
            val cond = lineH(a) > lineH(b)
            val av = LetVec4(s"sw${swapId}av")
            val bv = LetVec4(s"sw${swapId}bv")
            val ah = LetFloat(s"sw${swapId}ah")
            val bh = LetFloat(s"sw${swapId}bh")
            stmts += (av := cond.select(lineV(b), lineV(a)))
            stmts += (bv := cond.select(lineV(a), lineV(b)))
            stmts += (ah := cond.select(lineH(b), lineH(a)))
            stmts += (bh := cond.select(lineH(a), lineH(b)))
            stmts += (lineV(a) := av)
            stmts += (lineV(b) := bv)
            stmts += (lineH(a) := ah)
            stmts += (lineH(b) := bh)
            swapId += 1

          // Blend the 3 sorted lines onto the running color, low → high.
          for j <- 0 until 3 do
            stmts += (col := col.mix(lineV(j).xyz, lineV(j).w))

        stmts += (ctx.out.color := vec4(col, 1.0))
        Block(stmts)

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
