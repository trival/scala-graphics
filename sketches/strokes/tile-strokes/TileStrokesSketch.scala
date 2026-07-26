package sketches.strokes.tile_strokes

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.graphics.geometry.*
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.random.*

// ---------------------------------------------------------------------------
// Generative brush painting — a subdivided canvas where every tile is filled
// with zig-zag brush strokes in one colour. Port of the Rust sketch
// `sketches/strokes/1`, minus the gallery room it hung in.
//
// PIPELINE. Four panels:
//
//   bgPanel       2x2, one flat colour picked from the palette. Sampled up to
//                 full size by the canvas layer; the painting's undercoat.
//   strokePanel   painting-sized, cleared to transparent on every paint. Holds
//                 exactly ONE tile's stroke — during the animation, the part of
//                 it the brush has reached so far.
//   canvasPanel   painting-sized, NEVER cleared (no clearColor => loadOp
//                 "load"), so it accumulates. Its layer alpha-blends whatever
//                 panel is bound to its first texture slot on top of what is
//                 already there. This is the painting proper.
//   displayPanel  painting-sized, repainted every frame: canvasPanel with
//                 strokePanel composited over it. What the viewer sees, so the
//                 in-progress stroke shows without touching the painting.
//
// The canvas layer's source is rebound once: first it composites bgPanel (the
// undercoat), then it switches to strokePanel. Because the binding is explicit
// the layer is not auto-pong — see `trivalibs/docs/guide/gotchas.md`, "a
// layer's first texture slot is auto-injected".
//
// ANIMATION — a brush travelling along its path. `PrepaintPasses` complete
// passes run during init, so the first frame already shows a finished painting.
// From then on one tile is picked at a time and its stroke is drawn along its
// path at `BrushPointsPerSecond`: every frame `strokePanel` is redrawn with the
// stroke *as far as the brush has got*, and `displayPanel` shows it riding over
// the painting. The tip is interpolated between curve points, so brush speed is
// independent of frame rate — slowing the brush lengthens the stroke rather
// than making it step. Only when the stroke finishes is it merged into
// `canvasPanel` — one `p.paint(canvasPanel)` — after which strokePanel is
// cleared, the brush rests for `TilePauseMs`, and the next tile begins.
//
// Every `TilesPerRecolor` finished tiles, one tile is moved onto a different
// colour from the painting's palette, so the composition itself drifts over a
// long run instead of only its brushwork.
//
// A partial stroke has to be told the lengths it will *finish* at, in two
// places, or anything keyed on a uv renormalises every frame as the brush
// advances: `toBufferedGeometries(totalLength = …)` pins `uv.x` to the whole
// stroke's final length, and `Line.plannedLength` (set in `linesUpTo`) pins
// each fragment's `localUv.x` to its own. Without the first the bristle texture
// crawls backwards; without the second the per-fragment end fade stretches and
// slides along the growing fragment.
// ---------------------------------------------------------------------------

type Attribs = LineAttribs
type Varyings = (uv: Vec2, localUv: Vec2)
type LineUniforms = (
    size: VertexUniform[Vec2],
    color: FragmentUniform[Vec3],
    randOffset: FragmentUniform[Vec2],
    // (how far the brush has got, how long its taper is) — both as fractions of
    // the finished stroke, i.e. in the same units as `uv.x`
    brushTip: FragmentUniform[Vec2],
)

type BgUniforms = (color: Vec3)

type CanvasUniforms = (samp: Sampler)
type CanvasPanels = (src: FragmentPanel)

type DisplayUniforms = (samp: Sampler)
type DisplayPanels = (canvasTex: FragmentPanel, strokeTex: FragmentPanel)

/** Number of hues in the painting's palette. */
val ColorCount = 5

/** Complete passes over the tile set painted before the first frame. Each pass
  * re-randomises stroke paths and per-tile shades, so the paint builds up
  * depth.
  */
val PrepaintPasses = 3

/** How fast the brush travels, in stroke points per second. A tile's stroke is
  * a couple of hundred points, so this sets the pace of the whole piece.
  *
  * Free to tune: the tip is interpolated between points, so slowing this down
  * lengthens the stroke without costing smoothness — the brush still moves
  * every frame, just less far.
  */
val BrushPointsPerSecond = 25.0

/** How long the brush rests after finishing a tile, before starting the next.
  */
val TilePauseMs = 400.0

/** How far the brush tip tapers off, in brush half-widths. An absolute
  * distance, so the tip keeps the same softness however far along the stroke it
  * is; the geometry's end cap alone is a sharp point and reads as a hard cut.
  */
val TipFadeBrushWidths = 2.0

/** Tiles painted between one tile being moved onto a different palette colour.
  *
  * A fixed count rather than a fraction of the tiling on purpose: a coarse
  * painting holds its base colours for many passes, while a heavily subdivided
  * one — where any single tile matters less — keeps visibly shifting.
  */
val TilesPerRecolor = 15

/** Ceiling on brush steps advanced in a single frame — keeps a long stall (a
  * backgrounded tab) from turning into one enormous catch-up frame.
  */
val MaxBrushStepsPerFrame = 12

@main def tileStrokes(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    val painting = createPainting(p.width, p.height, ColorCount)

    // ---- shades ----------------------------------------------------------

    // Flat undercoat. 2x2 pixels — it is only ever sampled stretched.
    val bgShade = p.layerShade[BgUniforms]: program =>
      program.frag: ctx =>
        ctx.out.color := vec4(ctx.bindings.color, 1.0)

    // One brush stroke fragment. Positions arrive in painting pixels with y
    // growing downwards, hence the divide-then-fit and the flipped y.
    val lineShade = p.shade[Attribs, Varyings, LineUniforms]: program =>
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
        val tipFade = LetFloat("tipFade")
        val alpha = LetFloat("alpha")
        Block(
          // The bristle texture: fbm simplex over the stroke's own uv, offset
          // per tile so no two strokes share a pattern. /4 keeps it well under
          // the +0.3 base, so it modulates coverage rather than driving it.
          base := Simplex.fbmSimplex2d(
            ctx.in.uv * 2.0 + ctx.bindings.randOffset,
            4.i,
            2.0,
            0.7,
          ) / 4.0,
          // base := base.pow(2.0),

          // Two falloffs, both biting only right at the rim thanks to the 10th
          // power: localUv.x fades this fragment's two ends — one zig-zag
          // traverse, so those are the tile's left and right edges — and uv.y
          // fades the stroke's two long sides across its width.
          //
          // Both are normalised, and both are stable even mid-animation: uv.y
          // spans the brush width, which never grows, and localUv.x is
          // normalised against `Line.plannedLength`, the fragment's *finished*
          // length (see linesUpTo). Without that the growing fragment would
          // renormalise every frame and its end fade would visibly slide.
          edgeFade :=
            ctx.in.localUv.x.fit0111.abs.pow(20.0) +
              ctx.in.uv.y.fit0111.abs.pow(10.0),
          // Taper off at the brush tip, so the moving end reads as bristles
          // lifting rather than a cut. Measured backwards from where the brush
          // has got to, so it rides along with it and leaves everything further
          // back untouched — including every already-finished fragment, which
          // sits far behind and lands on 1.
          tipFade := (ctx.bindings.brushTip.x - ctx.in.uv.x)
            .smoothstep(0.0, ctx.bindings.brushTip.y),
          // uv.x spans the whole stroke against its finished length, so this
          // only bites once the brush actually nears the end.
          alpha := (base - edgeFade + 0.3).clamp01 *
            ctx.in.uv.x.smoothstep(1.0, 0.90) * tipFade,
          ctx.out.color := vec4(ctx.bindings.color, alpha),
        )

    // Composites the bound source panel onto the accumulating canvas.
    val canvasShade = p.layerShade[CanvasUniforms, CanvasPanels]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.src(ctx.in.uv, ctx.bindings.samp)

    // What the viewer sees: the painting, with the in-progress stroke laid over
    // it. Compositing here rather than blending into the painting is what keeps
    // a half-drawn stroke out of the permanent canvas.
    val displayShade = p.layerShade[DisplayUniforms, DisplayPanels]: program =>
      program.frag: ctx =>
        val canvasCol = LetVec4("canvasCol")
        val strokeCol = LetVec4("strokeCol")
        Block(
          canvasCol := ctx.textures.canvasTex(ctx.in.uv, ctx.bindings.samp),
          strokeCol := ctx.textures.strokeTex(ctx.in.uv, ctx.bindings.samp),
          ctx.out.color :=
            vec4(canvasCol.xyz.mix(strokeCol.xyz, strokeCol.w), 1.0),
        )

    // ---- bindings --------------------------------------------------------

    val size = p.binding(Vec2(painting.width, painting.height))
    val color = p.binding[Vec3]
    val randOffset = p.binding[Vec2]
    val brushTip = p.binding[Vec2]
    val bgColor = p.binding(calculateColor(painting.tiles.pick().color))

    // ---- panels ----------------------------------------------------------

    val bgPanel = p.panel(
      width = 2,
      height = 2,
      layer = p.layer(bgShade).bind("color" := bgColor),
    )

    // One form, refilled per tile — its buffers are reused whenever the next
    // tile's geometry fits, which is what makes hundreds of uploads cheap.
    val form = p.form(topology = PrimitiveTopology.TriangleStrip)

    val lineShape = p
      .shape(
        form,
        lineShade,
        // Strokes overwrite colour outright but keep the highest alpha seen —
        // so overlapping strokes inside one batch don't darken each other.
        blendState = BlendState(
          color = BlendFn(BlendFactor.One, BlendFactor.Zero, BlendOp.Add),
          alpha = BlendFn(BlendFactor.One, BlendFactor.One, BlendOp.Max),
        ),
      )
      .bind(
        "size" := size,
        "color" := color,
        "randOffset" := randOffset,
        "brushTip" := brushTip,
      )

    val strokePanel = p.panel(
      width = painting.width.toInt,
      height = painting.height.toInt,
      clearColor = (0.0, 0.0, 0.0, 0.0),
      shape = lineShape,
    )

    // No clearColor => the panel loads its previous contents, so each paint
    // adds to what is already there.
    val canvasLayer = p
      .layer(canvasShade, blendState = BlendState.Alpha)
      .bind("src" := bgPanel, "samp" := p.samplerLinear)

    val canvasPanel = p.panel(
      width = painting.width.toInt,
      height = painting.height.toInt,
      layer = canvasLayer,
    )

    val displayPanel = p.panel(
      width = painting.width.toInt,
      height = painting.height.toInt,
      layer = p
        .layer(displayShade)
        .bind(
          "canvasTex" := canvasPanel,
          "strokeTex" := strokePanel,
          "samp" := p.samplerLinear,
        ),
    )

    // ---- painting operations ---------------------------------------------

    val NoGeometry = Arr[BufferedGeometry[LineAttribsBuffer]]()

    /** Draw `stroke` into strokePanel, up to point `ptIdx` of segment `segIdx`
      * plus `frac` of the way to the next point. The panel clears first, so
      * this replaces whatever was there.
      */
    def drawStroke(
        stroke: TileStroke,
        segIdx: Int,
        ptIdx: Int,
        frac: Double = 0.0,
    ): Unit =
      val lines = stroke.linesUpTo(segIdx, ptIdx, frac)
      // Where the brush has got to: the last fragment's start plus however much
      // of it is drawn. Expressed as a fraction of the finished stroke so the
      // shader can compare it against uv.x directly.
      val tip =
        if lines.length == 0 then 0.0
        else
          val last = lines(lines.length - 1)
          (last.lenOffset + last.totalLength) / stroke.totalLength
      brushTip.set(
        Vec2(tip, stroke.brushSize * TipFadeBrushWidths / stroke.totalLength),
      )
      form.set(geometries =
        lines.toBufferedGeometries(totalLength = stroke.totalLength),
      )
      p.paint(strokePanel)

    /** Blot strokePanel into the painting — the one irreversible step. */
    def mergeStroke(): Unit = p.paint(canvasPanel)

    /** Wipe strokePanel, so a finished stroke isn't shown twice (once in the
      * canvas it was just merged into, once still sitting here).
      */
    def clearStroke(): Unit =
      form.set(geometries = NoGeometry)
      p.paint(strokePanel)

    /** The uniforms a stroke is painted with. Set once when a tile starts, so
      * the bristle pattern stays put while the brush travels over it.
      */
    def useStroke(stroke: TileStroke): Unit =
      color.set(stroke.color)
      randOffset.set(randVec2())

    // ---- initial build-up ------------------------------------------------

    p.paint(bgPanel)
    p.paint(canvasPanel) // lay the undercoat
    canvasLayer.bind("src" := strokePanel) // from here on: strokes

    // A few complete passes, so the first frame already shows a finished
    // painting rather than an empty canvas filling in one tile at a time.
    for _ <- 0 until PrepaintPasses do
      for stroke <- generateTileStrokes(painting) do
        useStroke(stroke)
        drawStroke(stroke, Int.MaxValue, Int.MaxValue)
        mergeStroke()

    // ---- animate ---------------------------------------------------------

    var order = painting.tiles.shuffled()
    var next = 0

    // The brush's current work: a tile's stroke, and how far along it the brush
    // has got. `startTile` below advances `next` and resets the rest.
    var stroke = strokeForTile(painting, order(next))
    var segIdx = 0
    var ptIdx = 0
    var advance = 0.0 // how far past `ptIdx` the tip currently sits, in [0, 1)
    var pauseLeft = 0.0
    var sinceRecolor = 0
    next += 1
    useStroke(stroke)

    /** Pick the next tile and reset the brush to the start of its stroke. */
    def startTile(): Unit =
      if next >= order.length then
        order = painting.tiles.shuffled()
        next = 0
      stroke = strokeForTile(painting, order(next))
      next += 1
      segIdx = 0
      ptIdx = 0
      advance = 0.0
      useStroke(stroke)

    /** Move the brush on by one point. Returns true once the stroke is done.
      * Segments meet at a shared endpoint, so restarting the next one at point
      * 0 keeps the tip's position continuous across a corner.
      */
    def stepBrush(): Boolean =
      ptIdx += 1
      if ptIdx >= stroke.segments(segIdx).length then
        segIdx += 1
        ptIdx = 0
      segIdx >= stroke.segments.length

    animate: tpf =>
      if pauseLeft > 0.0 then
        pauseLeft -= tpf
        if pauseLeft <= 0.0 then
          startTile()
          drawStroke(stroke, segIdx, ptIdx, advance)
      else
        advance += tpf * BrushPointsPerSecond / 1000.0
        var done = false
        var steps = 0
        while advance >= 1.0 && !done && steps < MaxBrushStepsPerFrame do
          advance -= 1.0
          done = stepBrush()
          steps += 1
        // A backgrounded tab hands back one enormous tpf; drop the backlog
        // rather than fast-forwarding the whole stroke in one frame.
        if steps == MaxBrushStepsPerFrame then advance = 0.0

        if done then
          // stepBrush ran off the end — redraw the stroke whole, blot it into
          // the painting, and let the brush rest before the next tile.
          drawStroke(stroke, Int.MaxValue, Int.MaxValue)
          mergeStroke()
          clearStroke()
          pauseLeft = TilePauseMs

          // Every so often, nudge the composition: one tile takes a different
          // colour from the palette, which shows next time its turn comes up.
          sinceRecolor += 1
          if sinceRecolor >= TilesPerRecolor then
            sinceRecolor = 0
            painting.recolorRandomTile()
        else drawStroke(stroke, segIdx, ptIdx, advance)

      p.paintAndShow(displayPanel)
