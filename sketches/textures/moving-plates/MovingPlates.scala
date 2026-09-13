package sketches.textures.moving_plates

import org.scalajs.dom.HTMLCanvasElement
import sketchlib.shaders.Shapes
import sketchlib.shaders.Uv
import trivalibs.graphics.shader.lib.color.*
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel

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

// Port of the Rust `moving_plates` texture shader.

@JSExportTopLevel("sketch")
def movingPlates(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    type U = (res: Vec2, time: Float)

    val NumTiles = 15.0

    val shade = p.layerShade[U]: program =>
      program.frag: ctx =>
        val t = ctx.bindings.time

        def hue(tile: Vec3Expr): FloatExpr = tile.x
        def height(tile: Vec3Expr): FloatExpr = tile.y
        def lightness(tile: Vec3Expr): FloatExpr = tile.z

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

        // ---- tiles ----

        type Tile = (r: LetVec2, v: LetVec3, dir: Vec2Expr)

        def tile(name: String, dir: Vec2Expr): Tile =
          (r = LetVec2(s"r_$name"), v = LetVec3(s"t_$name"), dir = dir)

        val cc = tile("cc", vec2(0.0, 0.0))
        val tr = tile("tr", vec2(1.0, -1.0))
        val tc = tile("tc", vec2(0.0, -1.0))
        val tl = tile("tl", vec2(-1.0, -1.0))
        val cr = tile("cr", vec2(1.0, 0.0))
        val cl = tile("cl", vec2(-1.0, 0.0))
        val br = tile("br", vec2(1.0, 1.0))
        val bc = tile("bc", vec2(0.0, 1.0))
        val bl = tile("bl", vec2(-1.0, 1.0))

        val AllTiles = Arr(cc, tr, tc, tl, cr, cl, br, bc, bl)

        // ---- quadrant ----

        val n1 = VarVec3("n1")
        val n2 = VarVec3("n2")
        val n3 = VarVec3("n3")
        val d1 = VarVec2("d1")
        val d2 = VarVec2("d2")
        val d3 = VarVec2("d3")

        // Seeded at top level so the first `:=` puts the `var` declaration in
        // the function scope rather than inside a branch.
        def seedQuadrant: Block =
          Block(
            n1 := cc.v,
            n2 := cc.v,
            n3 := cc.v,
            d1 := vec2(0.0),
            d2 := vec2(0.0),
            d3 := vec2(0.0),
          )

        def useQuadrant(a: Tile, b: Tile, c: Tile): Block =
          Block(
            n1 := a.v,
            n2 := b.v,
            n3 := c.v,
            d1 := a.dir,
            d2 := b.dir,
            d3 := c.dir,
          )

        // ---- ground & shadow ----

        val tiles = Arr[Vec3Expr](cc.v, n1, n2, n3)
        val dirs = Arr[Vec2Expr](vec2(0.0), d1, d2, d3)
        val uvs = Arr(
          LetVec2("quv0"),
          LetVec2("quv1"),
          LetVec2("quv2"),
          LetVec2("quv3"),
        )

        val gHue = VarFloat("gHue")
        val gHeight = VarFloat("gHeight")
        val gLight = VarFloat("gLight")
        val miss = VarFloat("miss")
        val shadow = VarFloat("shadow")

        // Deviation from the Rust original, which seeds the height threshold
        // from the center tile and so culls shorter neighbors at cell corners
        // (black notches). Seeding below every height — they are
        // `cos(...).fit1101()` ∈ [0, 1] — makes selection depend only on which
        // tiles the pixel is inside.
        def seedGround: Block =
          Block(
            gHue := 0.0,
            gHeight := -1.0,
            gLight := 0.0,
            miss := 1.0,
          )

        def takeGroundIfTallerHit(i: Int): Block =
          when(
            (height(tiles(i)) >= gHeight) &&
              (Shapes.roundedRect(uvs(i), vec2(0.0), vec2(1.0), 0.2) > 0.5),
          ):
            Block(
              gHue := hue(tiles(i)),
              gHeight := height(tiles(i)),
              gLight := lightness(tiles(i)),
              miss := 0.0,
            )

        def addShadowIfTaller(i: Int): Block =
          when(height(tiles(i)) > gHeight):
            shadow := shadow + Shapes
              .roundedRectSmooth(
                uvs(i),
                vec2(0.0),
                vec2(1.0),
                0.2,
                (height(tiles(i)) - gHeight) * 0.7,
              )
              .pow(0.9)

        val ground = vec3(
          gHue,
          0.7 + gHeight * 0.15,
          (gHeight * 0.45 + 0.55) * (gLight * 0.9 + 0.1),
        ).hsv2rgbSmooth

        Block(
          uv := Uv.aspectPreserving(ctx.in.uv, ctx.bindings.res),
          uvScaled := uv * NumTiles,
          uvTile := uvScaled.fract - 0.5,
          idx := uvScaled.floor + 11.0,
          AllTiles.unroll: tile =>
            Block(
              tile.r := Hash.hash2(((idx + tile.dir) * 17.123411).bitsToU32),
              tile.v := tileVec(tile.r),
            ),
          seedQuadrant,
          when((uvTile.y < 0.0) && (uvTile.x < 0.0)):
            useQuadrant(tl, tc, cl)
          .elseIf((uvTile.y < 0.0) && (uvTile.x >= 0.0)):
            useQuadrant(tr, tc, cr)
          .elseIf(uvTile.x < 0.0):
            useQuadrant(bl, bc, cl)
          .elseDo:
            useQuadrant(br, bc, cr)
          ,
          unroll(4): i =>
            uvs(i) := (uvTile - dirs(i)) * (1.0 - height(tiles(i)) * 0.14),
          seedGround,
          unroll(4)(takeGroundIfTallerHit),
          shadow := 0.0,
          unroll(4)(addShadowIfTaller),
          col := (miss > 0.5).select(
            vec3(0.0),
            ground.mix(vec3(0.0), (shadow * 0.7).clamp01),
          ),
          ctx.out.color := vec4(col.pow(0.5), 1.0),
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
