package sketches.strokes.base1

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.geometry.*
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.color.*
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given
import trivalibs.utils.random.rand
import trivalibs.utils.random.randNormal01
import trivalibs.utils.random.randNormal11
import trivalibs.utils.random.randVec2

import scala.scalajs.js.annotation.JSExportTopLevel

// ---------------------------------------------------------------------------
// A painted ground with two brush strokes laid over it, rendered once (no
// animation). Three panels:
//
//   bgPanel      the ground — a noise field over the woven canvas surface.
//   strokePanel  one stroke pass, cleared to transparent before each.
//   canvasPanel  what accumulates: the ground, then each stroke pass composited
//                over it in turn. Shown at the end.
//
// The two passes walk the SAME base Bézier with fresh randomness each time, so
// they read as two goes at one gesture rather than two unrelated marks.
//
// Both the ground and the strokes sample `CanvasTexture.weave` at the same
// pixel coordinates, so the strokes break up over the same fabric the ground
// sits on instead of floating above it.
// ---------------------------------------------------------------------------

type BgUniforms = (res: Vec2, noiseOffset: Vec2)

type LineVaryings = (uv: Vec2, localUv: Vec2)
type LineUniforms = (
    size: VertexUniform[Vec2],
    color: FragmentUniform[Vec3],
    randOffset: FragmentUniform[Vec2],
)

type CanvasUniforms = (samp: Sampler)
type CanvasPanels = (src: FragmentPanel)

/** Stroke passes laid down along the one base curve. */
val StrokePasses = 2

/** Brush width, as a fraction of canvas height. */
val BrushHeightRatio = 1.0 / 14.0

/** How far the walk's turning points may sit off the base curve, as a fraction
  * of canvas height — the wobble that makes a stroke a gesture, not a spline.
  */
val WalkSpreadRatio = 0.035

/** How hard the canvas weave eats into stroke coverage. The weave is `[0, 1]`;
  * this is the floor it is remapped onto, so lower means the fabric shows
  * through the paint more.
  */
val StrokeWeaveBite = 0.35

/** The same, for the stroke's color — a much lighter touch, since this only
  * shades the paint rather than removing it.
  */
val StrokeWeaveShade = 0.78

/** The canvas surface: white-noise grain crossed with a thread pattern, in
  * `[0, 1]`. Keyed on `fragCoord` rather than a uv so it stays pinned to pixels
  * — both shades below call it, and they have to agree on the same fabric. Each
  * call site picks how hard it bites with `.lerpIn(lo, hi)`.
  */
def canvasWeave(fragCoord: Vec2Expr): FloatExpr =
  val threads =
    (fragCoord.x * 0.85).sin.fit1101 * (fragCoord.y * 0.85).sin.fit1101
  (Hash.hash21(fragCoord.bitsToU32) + threads * 0.6) / 1.6

@JSExportTopLevel("sketch")
def baseStroke1(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val col1hsv =
      Vec3(rand(), 0.2 * randNormal01(), 0.5 + 0.5 * randNormal01())
    val col2hsv = Vec3(
      (col1hsv.x + randNormal11() * 0.35).fract,
      col1hsv.y + randNormal01() * 0.14,
      col1hsv.z - randNormal01() * 0.12,
    )
    val col1 = col1hsv.hsv2rgbSmooth
    val col2 = col2hsv.hsv2rgbSmooth

    val colStrokeHsv =
      Vec3(
        (col2hsv.x + randNormal11() * 0.37).fract,
        (col2hsv.y + 0.5 + randNormal11() * 0.25).clamp01,
        rand() * 0.8 + 0.1,
      )

    /** A stroke shade off the ground's second color: same hue family, much more
      * saturated and darker, re-rolled per pass so the two passes differ.
      */
    def strokeColor() =
      Vec3(
        (colStrokeHsv.x + randNormal11() * 0.12).fract,
        (colStrokeHsv.y + 0.4 + randNormal11() * 0.15).clamp01,
        (colStrokeHsv.z - 0.3 + randNormal11() * 0.12).clamp01,
      ).hsv2rgbSmooth

    // ---- shades ----------------------------------------------------------

    val bgShade = p.layerShade[BgUniforms]: program =>
      program.frag: ctx =>
        val color = LetFloat("color")
        val canvasTexture = LetFloat("canvasTexture")
        val edge = LetFloat("edge")
        val col2hsvExpr = LetVec3("col2hsvExpr")
        Block(
          canvasTexture := canvasWeave(ctx.fragCoord.xy).lerpIn(0.81, 1.0),
          color :=
            Simplex
              .fbmSimplex2d(
                (ctx.fragCoord.xy + ctx.bindings.noiseOffset) * 0.001,
                4.i,
                3.5,
                0.22,
              )
              .fit1101,
          edge := color * canvasTexture,
          col2hsvExpr := col2.toExpr.rgb2hsv,
          ctx.out.color := vec4(
            col1.toExpr.lerp(
              vec3(
                col2hsvExpr.x,
                col2hsvExpr.y + 0.8 * edge.smoothstep(0.30, 0.62),
                col2hsvExpr.z * edge.smoothstep(0.68, 0.29),
              ).hsv2rgb,
              edge.smoothstep(0.4, 0.32),
            )
              * (canvasTexture * 0.7 + 0.3),
            1.0,
          ),
        )

    // One brush stroke fragment — the tile-strokes line shade, with the canvas
    // weave folded in. Positions arrive in canvas pixels with y growing
    // downwards, hence the divide-then-fit and the flipped y.
    val lineShade = p.shade[LineAttribs, LineVaryings, LineUniforms]: program =>
      program.vert: ctx =>
        val pos = LetVec2("pos")
        Block(
          pos := (ctx.in.position / ctx.bindings.size).fit0111,
          ctx.out.uv := ctx.in.uv,
          ctx.out.localUv := ctx.in.localUv,
          ctx.out.position := vec4(pos.x, -pos.y, 0.0, 1.0),
        )
      program.frag: ctx =>
        val base = VarFloat("base")
        val edgeFade = LetFloat("edgeFade")
        val weave = LetFloat("weave")
        val alpha = LetFloat("alpha")
        Block(
          // The bristle texture: fbm simplex over the stroke's own uv, offset
          // per pass so the two strokes don't share a pattern. /4 keeps it well
          // under the +0.3 base, so it modulates coverage rather than driving
          // it.
          base := Simplex
            .fbmSimplex2d(ctx.in.uv + ctx.bindings.randOffset, 4.i, 2.2, 0.8)
            .fit1101 / 4.0 + 0.08,
          base := base.pow(0.9) - 0.04,

          // Two falloffs, both biting only right at the rim thanks to the 10th
          // power: localUv.x fades this fragment's two ends — one leg of the
          // walk — and uv.y fades the stroke's two long sides across its width.
          edgeFade :=
            ctx.in.localUv.x.fit0111.abs.pow(13.0) +
              ctx.in.uv.y.fit0111.abs.pow(10.0),

          // Screen-space, so it lines up with the ground's own weave: paint
          // sits in the fabric rather than on it.
          weave := canvasWeave(ctx.fragCoord.xy),

          // uv.x spans the whole stroke, so the smoothstep only bites at its
          // far end — the brush lifting off.
          alpha := (base - edgeFade + 0.3).clamp01 *
            ctx.in.uv.x.smoothstep(1.0, 0.87) *
            weave.lerpIn(StrokeWeaveBite, 1.0),
          ctx.out.color := vec4(
            ctx.bindings.color * weave.lerpIn(StrokeWeaveShade, 1.0),
            alpha,
          ),
        )

    // Composites the bound source panel onto the accumulating canvas.
    val canvasShade = p.layerShade[CanvasUniforms, CanvasPanels]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.src(ctx.in.uv, ctx.bindings.samp)

    // ---- bindings --------------------------------------------------------

    // One binding feeds both the ground's `res` and the line shade's `size` —
    // `bind` matches on field name, so the same Vec2 serves both.
    val uRes = p.binding[Vec2]
    val uColor = p.binding[Vec3]
    val uRandOffset = p.binding[Vec2]

    // ---- panels ----------------------------------------------------------

    val bgPanel = p.panel(
      layer = p
        .layer(bgShade)
        .bind("res" := uRes, "noiseOffset" := randVec2() * 10000),
    )

    // One form, refilled per pass — its buffers are reused whenever the next
    // pass's geometry fits.
    val form = p.form(topology = PrimitiveTopology.TriangleStrip)

    val lineShape = p
      .shape(
        form,
        lineShade,
        // Strokes overwrite color outright but keep the highest alpha seen — so
        // the stroke's own overlaps (the walk crosses itself constantly) don't
        // darken each other. Blending between passes happens in canvasPanel.
        blendState = BlendState(
          color = BlendFn(BlendFactor.One, BlendFactor.Zero, BlendOp.Add),
          alpha =
            BlendFn(BlendFactor.One, BlendFactor.OneMinusSrcAlpha, BlendOp.Add),
        ),
      )
      .bind("size" := uRes, "color" := uColor, "randOffset" := uRandOffset)

    val strokePanel = p.panel(
      clearColor = (0.0, 0.0, 0.0, 0.0),
      shape = lineShape,
    )

    val canvasLayer = p
      .layer(canvasShade, blendState = BlendState.Alpha)
      .bind("src" := bgPanel, "samp" := p.samplerLinear)

    val canvasPanel = p.panel(layer = canvasLayer)

    // ---- painting --------------------------------------------------------

    /** Paint the whole picture from scratch: ground, then one stroke pass at a
      * time composited over it. Re-run on every resize — the curve is laid out
      * in pixels, so a new size wants a new painting rather than a stretched
      * one.
      */
    def repaint(width: Double, height: Double): Unit =
      // Lay the ground. The clear wipes whatever a previous size left behind;
      // it has to go back off again straight away, or the stroke composites
      // below would each wipe the painting they are meant to join.
      canvasPanel.set(clearColor = (0.0, 0.0, 0.0, 1.0))
      canvasLayer.bind("src" := bgPanel)
      p.paint(bgPanel, canvasPanel)
      canvasPanel.set(clearColor = null)
      canvasLayer.bind("src" := strokePanel)

      val curve = randomBaseCurve(width, height)
      val brushSize = height * BrushHeightRatio
      val spread = height * WalkSpreadRatio

      for _ <- 0 until StrokePasses do
        val stroke = brushStroke(curve, brushSize, spread, strokeColor())
        uColor.set(stroke.color)
        uRandOffset.set(randVec2() * 100.0)
        form.set(geometries =
          stroke.lines.toBufferedGeometries(totalLength = stroke.totalLength),
        )
        p.paint(strokePanel, canvasPanel)

      p.show(canvasPanel)

    p.onResize: (w, h) =>
      uRes.set(Vec2(w, h))
      repaint(w, h)
