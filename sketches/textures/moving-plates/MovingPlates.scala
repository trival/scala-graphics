package sketches.textures.moving_plates

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import sketchlib.shaders.{Shapes, Uv}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.color.Color
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ============================================================================
// Reference: original Rust shader (moving_plates.rs) — kept for comparison.
// ============================================================================
//
// const NUM_TILES: f32 = 15.;
//
// #[derive(Copy, Clone)]
// struct Tile {
//     hue: f32,
//     lightness: f32,
//     height: f32,
// }
//
// fn tile(idx: Vec2, time: f32) -> Tile {
//     let r = hash2d((idx * 17.123411).to_bits());
//     let hue = (r.x + time * 0.01).frct();
//     let height = (time * (r.x + 0.2) + r.y).cos().fit1101();
//     let l = r.y * r.x * 0.4;
//     let lightness = if r.y > 0.5 { 1.0 - l } else { l };
//     Tile { hue, height, lightness }
// }
//
// pub fn shader(uv: Vec2, size: UVec2, t: f32) -> Vec4 {
//     let uv = aspect_preserving_uv(uv, size);
//     let uv_scaled = uv * NUM_TILES;
//     let uv_tile = uv_scaled.frct() - 0.5;
//     let idx = uv_scaled.floor() + 11.;
//
//     let dir_tr = vec2(1.0, -1.0);
//     let dir_tc = vec2(0.0, -1.0);
//     let dir_tl = vec2(-1.0, -1.0);
//     let dir_cr = vec2(1.0, 0.0);
//     let dir_cl = vec2(-1.0, 0.0);
//     let dir_br = vec2(1.0, 1.0);
//     let dir_bc = vec2(0.0, 1.0);
//     let dir_bl = vec2(-1.0, 1.0);
//
//     let cc = tile(idx, t);
//     let tr = tile(idx + dir_tr, t);
//     let tc = tile(idx + dir_tc, t);
//     let tl = tile(idx + dir_tl, t);
//     let cr = tile(idx + dir_cr, t);
//     let cl = tile(idx + dir_cl, t);
//     let br = tile(idx + dir_br, t);
//     let bc = tile(idx + dir_bc, t);
//     let bl = tile(idx + dir_bl, t);
//
//     let quadrant_color = |t1: Tile, t2: Tile, t3: Tile, dir1: Vec2, dir2: Vec2, dir3: Vec2| {
//         let uv0 = uv_tile * (1. - cc.height * 0.14);
//         let uv1 = (uv_tile - dir1) * (1. - t1.height * 0.14);
//         let uv2 = (uv_tile - dir2) * (1. - t2.height * 0.14);
//         let uv3 = (uv_tile - dir3) * (1. - t3.height * 0.14);
//
//         let tiles = [cc, t1, t2, t3];
//         let uvs = [uv0, uv1, uv2, uv3];
//
//         let mut ground_i = 0;
//         let mut miss = true;
//
//         // DEVIATION FROM RUST (for later review): the port seeds the height
//         // threshold to -1.0 instead of the center tile (ground_i = 0) here, to
//         // avoid the black corner notches this center-seed produces. See the
//         // "Ground = tallest tile" block in the Scala port below.
//         for i in 0..4 {
//             if tiles[i].height >= tiles[ground_i].height {
//                 let uv = uvs[i];
//                 let square = rounded_rect(uv, Vec2::ZERO, Vec2::splat(1.0), 0.2);
//                 if square > 0.5 {
//                     ground_i = i;
//                     miss = false;
//                 }
//             }
//         }
//
//         let ground = tiles[ground_i];
//
//         let mut shadow = 0.;
//
//         for i in 0..4 {
//             let tile = tiles[i];
//             let height = tile.height;
//             if height > ground.height {
//                 let uv = uvs[i];
//                 let smoothness = (height - ground.height) * 0.7;
//                 let rect = rounded_rect_smooth(uv, Vec2::ZERO, Vec2::ONE, 0.2, smoothness);
//                 shadow += rect.powf(0.9);
//             }
//         }
//
//         if miss {
//             Vec3::ZERO
//         } else {
//             hsv2rgb_smooth(vec3(
//                 ground.hue,
//                 0.7 + ground.height * 0.15,
//                 (ground.height * 0.45 + 0.55) * (ground.lightness * 0.9 + 0.1),
//             ))
//             .lerp(Vec3::ZERO, (shadow * 0.7).clamp01())
//         }
//     };
//
//     let color;
//
//     if uv_tile.y < 0. && uv_tile.x < 0. {
//         // top left
//         color = quadrant_color(tl, tc, cl, dir_tl, dir_tc, dir_cl);
//     } else if uv_tile.y < 0. && uv_tile.x >= 0. {
//         // top right
//         color = quadrant_color(tr, tc, cr, dir_tr, dir_tc, dir_cr);
//     } else if uv_tile.x < 0. {
//         // bottom left
//         color = quadrant_color(bl, bc, cl, dir_bl, dir_bc, dir_cl);
//     } else {
//         // bottom right
//         color = quadrant_color(br, bc, cr, dir_br, dir_bc, dir_cr);
//     }
//
//     color.powf(1.2).extend(1.)
// }
//
// ============================================================================

// Port of the Rust `moving_plates` texture shader. A grid of animated raised
// "plates"; each fragment sits in one quadrant of its cell and considers the
// center tile + 3 neighbors, picking the tallest one the pixel lands on and
// darkening it by the shadow cast from taller neighbors.
//
// The Rust fixed-size arrays + 0..4 loops are unrolled by *Scala* loops at
// build time, emitting shader statements into the frag `Block`. The 4-way
// quadrant branch selects the 3 neighbors + dirs into vars, so the ground /
// shadow logic is written once instead of duplicated per branch.

@main def movingPlates(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    type U = (res: Vec2, time: Float)

    val NumTiles = 15.0

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val t = ctx.bindings.time

        // A tile packed as (hue, height, lightness) from its hashed randoms.
        def tileVec(r: Vec2Expr): Vec3Expr =
          val l = r.y * r.x * 0.4
          vec3(
            (r.x + t * 0.01).fract,
            (t * (r.x + 0.2) + r.y).cos.fit1101,
            (r.y > 0.5).select(1.0 - l, l),
          )

        val uv = LetVec2("uv")
        val uvScaled = LetVec2("uvScaled")
        val uvTile = LetVec2("uvTile")
        val idx = LetVec2("idx")
        val col = VarVec3("col")

        val stmts = Arr[Stmt]()
        stmts += (uv := Uv.aspectPreserving(ctx.in.uv, ctx.bindings.res))
        stmts += (uvScaled := uv * NumTiles)
        stmts += (uvTile := uvScaled.fract - 0.5)
        stmts += (idx := uvScaled.floor + 11.0)

        // Emit the let bindings for one tile at `idxExpr`, return its Vec3.
        def emitTile(name: String, idxExpr: Vec2Expr): LetVec3 =
          val r = LetVec2(s"r_$name")
          val tv = LetVec3(s"t_$name")
          stmts += (r := Hash.hash2((idxExpr * 17.123411).bitsToU32))
          stmts += (tv := tileVec(r))
          tv

        val cc = emitTile("cc", idx)
        val tr = emitTile("tr", idx + vec2(1.0, -1.0))
        val tc = emitTile("tc", idx + vec2(0.0, -1.0))
        val tl = emitTile("tl", idx + vec2(-1.0, -1.0))
        val cr = emitTile("cr", idx + vec2(1.0, 0.0))
        val cl = emitTile("cl", idx + vec2(-1.0, 0.0))
        val br = emitTile("br", idx + vec2(1.0, 1.0))
        val bc = emitTile("bc", idx + vec2(0.0, 1.0))
        val bl = emitTile("bl", idx + vec2(-1.0, 1.0))

        val dirTR = vec2(1.0, -1.0)
        val dirTC = vec2(0.0, -1.0)
        val dirTL = vec2(-1.0, -1.0)
        val dirCR = vec2(1.0, 0.0)
        val dirCL = vec2(-1.0, 0.0)
        val dirBR = vec2(1.0, 1.0)
        val dirBC = vec2(0.0, 1.0)
        val dirBL = vec2(-1.0, 1.0)

        // The 3 quadrant neighbors + their dirs. Declared with dummy values
        // first (so they emit top-level `var`s), then set by the quadrant
        // branch below — the ground/shadow logic runs once against these.
        val n1 = VarVec3("n1")
        val n2 = VarVec3("n2")
        val n3 = VarVec3("n3")
        val d1 = VarVec2("d1")
        val d2 = VarVec2("d2")
        val d3 = VarVec2("d3")
        stmts += (n1 := cc)
        stmts += (n2 := cc)
        stmts += (n3 := cc)
        stmts += (d1 := vec2(0.0))
        stmts += (d2 := vec2(0.0))
        stmts += (d3 := vec2(0.0))

        stmts += ifChain(
          (uvTile.y < 0.0) && (uvTile.x < 0.0),
          Block(n1 := tl, n2 := tc, n3 := cl, d1 := dirTL, d2 := dirTC, d3 := dirCL),
        ).elseIf(
          (uvTile.y < 0.0) && (uvTile.x >= 0.0),
          Block(n1 := tr, n2 := tc, n3 := cr, d1 := dirTR, d2 := dirTC, d3 := dirCR),
        ).elseIf(
          uvTile.x < 0.0,
          Block(n1 := bl, n2 := bc, n3 := cl, d1 := dirBL, d2 := dirBC, d3 := dirCL),
        ).elseDo(
          Block(n1 := br, n2 := bc, n3 := cr, d1 := dirBR, d2 := dirBC, d3 := dirCR),
        )

        // tiles[0] = center; tiles[1..3] = the quadrant neighbors.
        val tiles = Arr[Vec3Expr](cc, n1, n2, n3)
        val dirs = Arr[Vec2Expr](vec2(0.0), d1, d2, d3)
        val uvs =
          Arr(LetVec2("quv0"), LetVec2("quv1"), LetVec2("quv2"), LetVec2("quv3"))

        for i <- 0 until 4 do
          stmts += (uvs(i) := (uvTile - dirs(i)) * (1.0 - tiles(i).y * 0.14))

        // Ground = tallest tile the pixel lands on. Unlike the Rust original
        // (which seeds the threshold from the center tile and so culls shorter
        // neighbors at cell corners → black notches), we seed gHeight below all
        // heights — they're `cos(...).fit1101()` ∈ [0, 1] — so selection depends
        // only on which tiles the pixel is inside. gHue/gLight are placeholders:
        // overwritten on the first hit, ignored when miss stays 1.
        val gHue = VarFloat("gHue")
        val gHeight = VarFloat("gHeight")
        val gLight = VarFloat("gLight")
        val miss = VarFloat("miss")
        stmts += (gHue := 0.0)
        stmts += (gHeight := -1.0)
        stmts += (gLight := 0.0)
        stmts += (miss := 1.0)

        for i <- 0 until 4 do
          stmts += when(
            (tiles(i).y >= gHeight) &&
              (Shapes.roundedRect(uvs(i), vec2(0.0), vec2(1.0), 0.2) > 0.5),
            Block(
              gHue := tiles(i).x,
              gHeight := tiles(i).y,
              gLight := tiles(i).z,
              miss := 0.0,
            ),
          )

        // Shadow from taller neighbors, using the final ground height.
        val shadow = VarFloat("shadow")
        stmts += (shadow := 0.0)
        for i <- 0 until 4 do
          stmts += when(
            tiles(i).y > gHeight,
            Block(
              shadow := shadow + Shapes
                .roundedRectSmooth(
                  uvs(i),
                  vec2(0.0),
                  vec2(1.0),
                  0.2,
                  (tiles(i).y - gHeight) * 0.7,
                )
                .pow(0.9),
            ),
          )

        val ground = Color.hsv2rgbSmooth(
          vec3(
            gHue,
            0.7 + gHeight * 0.15,
            (gHeight * 0.45 + 0.55) * (gLight * 0.9 + 0.1),
          ),
        )
        stmts += (col := (miss > 0.5).select(
          vec3(0.0),
          ground.mix(vec3(0.0), (shadow * 0.7).clamp01),
        ))
        stmts += (ctx.out.color := vec4(col.pow(1.2), 1.0))
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
