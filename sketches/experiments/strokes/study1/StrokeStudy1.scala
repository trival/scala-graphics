package sketches.experiments.strokes.study1

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.geometry.*
import trivalibs.graphics.shader.lib.random.Hash
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel

// ---------------------------------------------------------------------------
// Stroke study 1
//
// A gray canvas weave, one stroke pass. The geometry is a polyline through
// wildly varying widths, subdivided, cleaned up, split at its sharp corners
// and smoothed — the line pipeline at its extremes.
//
// Everything — geometry and weave alike — is measured in canvas units: `y`
// spans 0..1 over the canvas height, `x` spans 0..aspect. Nothing is in
// pixels, so resolution changes the look by nothing at all and a resize is a
// uniform zoom. The grain is read off a lattice with linear interpolation for
// the same reason: it stays a fixed feature of the picture and softens as the
// canvas grows, instead of breaking into pixel squares.
//
// The constants below are the knobs this study exists to turn.
// ---------------------------------------------------------------------------

type LineVaryings = (uv: Vec2, localUv: Vec2, canvasPos: Vec2)
type LineUniforms = (size: VertexUniform[Vec2])

type BgUniforms = (size: Vec2)

type CanvasUniforms = (samp: Sampler)
type CanvasPanels = (src: FragmentPanel)

/** Ground lightness before the weave darkens it. */
val BgGray = 0.84

/** Corners of the polyline. */
val PointCount = 20

/** How much of the canvas edge the polyline's corners stay clear of, as a
  * fraction of canvas size. The stroke still spills over the edge — half a
  * width at the widest — but its turning points stay on screen.
  */
val PointInset = 0.0

/** Stroke width range in canvas units. Deliberately extreme: the point is to
  * see how the bevels and uvs hold up.
  */
val WidthMin = 1.0 / 50.0
val WidthMax = 1.0 / 4.0

/** Extra vertices inserted per segment, each with a fresh width — a jittery
  * ribbon that `cleanup` then has to thin back out.
  */
val SubdivPerSegment = 2

/** `Line.cleanup` — min length / width ratio, width threshold, angle threshold.
  * The length floor has to come down from its pixel-sized default, or a line
  * measured in canvas units is thinned away to nothing.
  */
val CleanupMinLenWidRatio = 0.5
val CleanupWidthThreshold = 0.1
val CleanupAngleThreshold = 0.1
val CleanupMinLenFloor = 0.0

/** Turn beyond which the line is split into a fresh fragment instead of mitred.
  */
val SplitAngle = Pi * 3.0 / 4.0

/** `toBufferedGeometries` corner smoothing. */
val SmoothDepth = 4
val SmoothAngleThreshold = 0.001
val SmoothMinLength = 0.006

/** Thread crossings over the canvas height. */
val WeaveThreads = 120.0

/** Grain cells per thread — the grain rides the thread grid, so the whole
  * fabric scales as one.
  */
val WeaveGrainPerThread = 8.0

/** How hard the canvas weave eats into stroke coverage, and (much lighter) how
  * hard it shades the stroke's color.
  */
val StrokeWeaveBite = 0.35
val StrokeWeaveShade = 0.78

/** Hash noise on a unit lattice, read with linear interpolation — a sampled
  * noise texture without the texture.
  */
val grain: WgslFn[(pos: Vec2), Float] =
  WgslFn.dsl("grain"): (p, ret) =>
    val cell = LetVec2("cell")
    val t = LetVec2("t")
    Block(
      cell := p.pos.floor,
      t := p.pos.fract,
      ret(
        Hash
          .hash21(cell.bitsToU32)
          .mix(Hash.hash21((cell + vec2(1.0, 0.0)).bitsToU32), t.x)
          .mix(
            Hash
              .hash21((cell + vec2(0.0, 1.0)).bitsToU32)
              .mix(Hash.hash21((cell + vec2(1.0, 1.0)).bitsToU32), t.x),
            t.y,
          ),
      ),
    )

/** The canvas surface: grain crossed with a thread pattern, in `[0, 1]`. Takes
  * a position in canvas units, so ground and stroke agree on one fabric.
  */
def canvasWeave(pos: Vec2Expr): FloatExpr =
  val threadFreq = Tau * WeaveThreads
  val threads =
    (pos.x * threadFreq).sin.fit1101 * (pos.y * threadFreq).sin.fit1101
  (grain(pos * (WeaveThreads * WeaveGrainPerThread)) + threads * 0.6) / 1.6

/** The stroke line, in canvas units with y down. */
def strokeGeometry(aspect: Double): Arr[BufferedGeometry[LineAttribsBuffer]] =
  def randWidth(): Double = randInRange(WidthMin, WidthMax)

  val line = Line(WidthMin)
  for _ <- 0 until PointCount do
    line.add(
      Vec2(
        randInRange(PointInset, 1.0 - PointInset) * aspect,
        randInRange(PointInset, 1.0 - PointInset),
      ),
      randWidth(),
    )

  val subdivided = line.flatMapWithNeighbours: (prev, curr, next) =>
    if next.isNull then Arr(curr.copy)
    else
      val n = next.get
      val verts = Arr(LineVertex(curr.pos, curr.width))
      for i <- 1 to SubdivPerSegment do
        val t = i.toDouble / (SubdivPerSegment + 1)
        verts += LineVertex(curr.pos.lerp(n.pos, t), randWidth())
      verts

  subdivided
    .cleanup(
      CleanupMinLenWidRatio,
      CleanupWidthThreshold,
      CleanupAngleThreshold,
      CleanupMinLenFloor,
    )
    .splitAtAngle(SplitAngle)
    .toBufferedGeometries(
      smoothDepth = SmoothDepth,
      smoothAngleThreshold = SmoothAngleThreshold,
      smoothMinLength = SmoothMinLength,
    )

@JSExportTopLevel("sketch")
def strokeStudy1(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    // Rolled once and baked into the shader — nothing here varies per frame or
    // per shape, so none of it needs a binding.
    val strokeCol =
      Vec3(rand(), randInRange(0.35, 0.95), randInRange(0.2, 0.7)).hsv2rgbSmooth
    val bristleOffset = randVec2() * 100.0

    // ---- shades ----------------------------------------------------------

    val bgShade = p.layerShade[BgUniforms]: program =>
      program.frag: ctx =>
        val weave = LetFloat("weave")
        Block(
          weave := canvasWeave(ctx.in.uv * ctx.bindings.size).lerpIn(0.81, 1.0),
          ctx.out.color := vec4(vec3(BgGray * (weave * 0.7 + 0.3)), 1.0),
        )

    val lineShade = p.shade[LineAttribs, LineVaryings, LineUniforms]: program =>
      program.vert: ctx =>
        val pos = LetVec2("pos")
        Block(
          pos := (ctx.in.position / ctx.bindings.size).fit0111,
          ctx.out.uv := ctx.in.uv,
          ctx.out.localUv := ctx.in.localUv,
          ctx.out.canvasPos := ctx.in.position,
          ctx.out.position := vec4(pos.x, -pos.y, 0.0, 1.0),
        )
      program.frag: ctx =>
        val base = VarFloat("base")
        val edgeFade = LetFloat("edgeFade")
        val weave = LetFloat("weave")
        val alpha = LetFloat("alpha")
        Block(
          base := Simplex
            .fbmSimplex2d(ctx.in.uv + bristleOffset.toExpr, 4.i, 2.2, 0.8)
            .fit1101 / 4.0 + 0.08,
          base := base.pow(0.9) - 0.04,
          edgeFade :=
            ctx.in.localUv.x.fit0111.abs.pow(13.0) +
              ctx.in.uv.y.fit0111.abs.pow(10.0),
          weave := canvasWeave(ctx.in.canvasPos),
          alpha := (base - edgeFade + 0.3).clamp01 *
            ctx.in.uv.x.smoothstep(1.0, 0.87) *
            weave.lerpIn(StrokeWeaveBite, 1.0),
          ctx.out.color := vec4(
            strokeCol.toExpr * weave.lerpIn(StrokeWeaveShade, 1.0),
            alpha,
          ),
        )

    val canvasShade = p.layerShade[CanvasUniforms, CanvasPanels]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.src(ctx.in.uv, ctx.bindings.samp)

    // ---- panels ----------------------------------------------------------

    // The canvas extent in canvas units — `(aspect, 1)`. Maps canvas units to
    // clip space in the vertex stage and canvas uv to canvas units in the
    // ground.
    val uSize = p.binding[Vec2]

    // Rolled once, not per resize: a resize is meant to rescale this picture,
    // not paint a new one.
    val form = p.form(
      geometries = strokeGeometry(p.width.toDouble / p.height),
      topology = PrimitiveTopology.TriangleStrip,
    )

    val lineShape = p
      .shape(
        form,
        lineShade,
        // The line crosses itself constantly, so overlaps keep the highest
        // alpha seen rather than compounding it.
        blendState = BlendState(
          color = BlendFn(BlendFactor.One, BlendFactor.Zero, BlendOp.Add),
          alpha =
            BlendFn(BlendFactor.One, BlendFactor.OneMinusSrcAlpha, BlendOp.Add),
        ),
      )
      .bind("size" := uSize)

    val strokePanel = p.panel(
      clearColor = (0.0, 0.0, 0.0, 0.0),
      shape = lineShape,
      multisample = true,
    )

    // Ground first, stroke composited over it — a panel draws its layers in
    // order.
    val canvasPanel = p.panel(layers =
      Arr[AnyLayer](
        p.layer(bgShade).bind("size" := uSize),
        p.layer(canvasShade, blendState = BlendState.Alpha)
          .bind("src" := strokePanel, "samp" := p.samplerLinear),
      ),
    )

    p.onResize: (w, h) =>
      uSize.set(Vec2(w / h, 1.0))
      p.paint(strokePanel, canvasPanel)
      p.show(canvasPanel)
