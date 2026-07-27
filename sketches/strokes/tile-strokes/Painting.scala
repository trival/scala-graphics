package sketches.strokes.tile_strokes

import trivalibs.graphics.geometry.*
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.utils.js.*
import trivalibs.utils.numbers.IntExt.given
import trivalibs.utils.numbers.NumExt.given
import trivalibs.utils.random.*

// ---------------------------------------------------------------------------
// The CPU side of the painting: a recursive tiling of the canvas, and per tile
// a zig-zag brush stroke built from cubic-Bézier curve segments.
//
// Port of the Rust sketch `sketches/strokes/1/src/painting.rs`. Nothing here
// touches the GPU — `generateTileStrokes` hands back `Line` fragments that
// `Line.toBufferedGeometries` turns into stroke geometry.
// ---------------------------------------------------------------------------

/** A tile's colour intent, resolved to RGB per stroke by [[calculateColor]] (so
  * every stroke in a tile varies slightly around the same hue).
  */
class Color(val hue: Double, val lightness: Double)

/** One rectangle of the subdivided canvas, in pixel coordinates with `top`
  * growing downwards. `color` is a `var` — [[Painting.recolorRandomTile]]
  * reassigns it so the composition drifts over a long run.
  */
class Tile(
    val top: Double,
    val left: Double,
    val width: Double,
    val height: Double,
    var color: Color,
)

/** A finished tiling: the canvas dimensions, the tiles, the base brush width
  * the strokes are drawn with, and the hue palette the tiles were coloured
  * from.
  */
class Painting(
    val width: Double,
    val height: Double,
    val brushSize: Double,
    val tiles: Arr[Tile],
    val palette: Arr[Color],
):
  /** Move one random tile onto a different palette colour.
    *
    * The change only shows once that tile's turn comes round again, so the
    * composition drifts rather than flickering. A single-colour palette has
    * nothing to switch to, so this is a no-op there.
    */
  def recolorRandomTile(): Unit =
    if palette.length > 1 then
      val tile = tiles.pick()
      tile.color = palette.pick()

/** One tile's brush stroke, kept as the raw curve points of each zig-zag
  * segment rather than as finished geometry — so it can be rendered *partially*
  * for the travelling-brush animation as well as whole.
  *
  * @param segments
  *   per zig-zag segment, the sampled Bézier points, in drawing order.
  * @param brushSize
  *   stroke width, already clamped to the tile.
  * @param color
  *   the RGB every fragment of this stroke is painted in.
  */
class TileStroke(
    val segments: Arr[Arr[Vec2]],
    val brushSize: Double,
    val color: Vec3,
):
  /** Each segment's finished length. Handed to `Line.plannedLength` so a
    * half-drawn fragment normalises `localUv.x` against what it *will* measure,
    * not what it measures so far — otherwise its end fade renormalises and
    * slides every frame the brush advances.
    */
  private val segmentLengths: Arr[Double] =
    val lengths = Arr[Double]()
    for seg <- segments do
      var sum = 0.0
      for i <- 0 until seg.length - 1 do sum += seg(i).distance(seg(i + 1))
      lengths += sum
    lengths

  /** Length of the *finished* stroke. Held fixed while the brush is still
    * travelling, so `uv.x` keeps its final scale instead of restretching over
    * the growing prefix every frame.
    */
  val totalLength: Double =
    var sum = 0.0
    for l <- segmentLengths do sum += l
    sum

  /** The stroke as `Line` fragments, drawn only as far as point `ptIdx` of
    * segment `segIdx` — everything before that segment is complete, everything
    * after is absent. `lenOffset` still chains across fragments, so `uv.x` runs
    * continuously and the brush texture reads as one mark.
    *
    * `frac` slides the tip on between point `ptIdx` and the next one, so the
    * brush moves continuously instead of hopping a whole curve point at a time.
    * It is ignored at a segment's final point, where there is nothing left to
    * interpolate towards — the tip rests there for one step while the brush
    * turns the corner.
    *
    * A fragment left with a single vertex (tip exactly on a segment's first
    * point) is dropped rather than emitted degenerate.
    */
  def linesUpTo(segIdx: Int, ptIdx: Int, frac: Double = 0.0): Arr[Line[Unit]] =
    val lines = Arr[Line[Unit]]()
    val lastSeg = segIdx.min(segments.length - 1)
    val partial = segIdx <= lastSeg
    var offset = 0.0

    for s <- 0 to lastSeg do
      val pts = segments(s)
      val line = Line(brushSize, offset)

      if s == lastSeg && partial then
        val upTo = ptIdx.min(pts.length - 1)
        for i <- 0 to upTo do line.add(pts(i))
        if frac > 0.0 && upTo + 1 < pts.length then
          line.add(pts(upTo).lerp(pts(upTo + 1), frac))
      else for pt <- pts do line.add(pt)

      // What this fragment measures when finished — for every fragment but the
      // last that is just its own length, but the last one may still be growing.
      line.plannedLength = segmentLengths(s)

      offset += segmentLengths(s)
      if line.vertCount >= 2 then lines += line

    lines

  /** The finished stroke — every segment, every point. */
  def lines: Arr[Line[Unit]] =
    linesUpTo(Int.MaxValue, Int.MaxValue)

// ---------------------------------------------------------------------------
// Tiling
// ---------------------------------------------------------------------------

/** Split `tile` into 2..`maxSplits` strips along its longer axis, or return it
  * unchanged when it is already at `minSize`.
  *
  * The axis is picked from the aspect ratio nudged by `splitDirectionVariance`,
  * so near-square tiles go either way; the cut positions are evenly spaced then
  * jittered by `splitVariance`.
  */
def subdivideTile(
    tile: Tile,
    minSize: Double,
    maxSplits: Int,
    splitVariance: Double,
    splitDirectionVariance: Double,
    getColor: () => Color,
): Arr[Tile] =
  if tile.width <= minSize || tile.height <= minSize then Arr(tile)
  else
    val divideHorizontally =
      tile.width / tile.height +
        rand().fit0111 * splitDirectionVariance > 1.0

    val tileLength = if divideHorizontally then tile.width else tile.height
    val tileCount = maxSplits.min((tileLength / minSize).floor.toInt)

    if tileCount < 2 then Arr(tile)
    else
      // 0, the jittered interior cuts, 1 — walked pairwise below
      val splitRatios = Arr(0.0)
      for i <- 1 until tileCount do
        splitRatios += (rand().fit0111 * 0.5 * splitVariance + i) / tileCount
      splitRatios += 1.0

      val tiles = Arr[Tile]()
      for i <- 0 until splitRatios.length - 1 do
        val start = splitRatios(i) * tileLength
        val length = (splitRatios(i + 1) - splitRatios(i)) * tileLength
        tiles +=
          (if divideHorizontally then
             Tile(tile.top, start + tile.left, length, tile.height, getColor())
           else
             Tile(start + tile.top, tile.left, tile.width, length, getColor()))
      tiles

// ---------------------------------------------------------------------------
// Palette
// ---------------------------------------------------------------------------

/** Insert one new value at a random position of the ascending sequence `v`,
  * interpolated between its two neighbours. Repeatedly applied to `[0, 1]` it
  * grows a hue palette whose spacing is uneven but never degenerate.
  *
  * Deviation from the Rust original, which pushes an interpolated value after
  * *every* element up to the chosen index — a bug: it makes the palette grow
  * unpredictably and strips `colorCount` of its meaning. With a single
  * insertion, `createPainting(w, h, n)` yields exactly `n` hues.
  */
def randomSplit(v: Arr[Double]): Arr[Double] =
  val idx = randInt(v.length - 1)
  val res = Arr[Double]()
  for i <- 0 to idx do res += v(i)
  res += v(idx).mix(v(idx + 1), rand())
  for i <- (idx + 1) until v.length do res += v(i)
  res

/** Build a painting for a `width` x `height` canvas with a `colorCount`-hue
  * palette: 1–4 rounds of subdivision over the whole canvas, each tile taking a
  * random colour from the palette.
  */
def createPainting(width: Double, height: Double, colorCount: Int): Painting =
  var hues = Arr(0.0, 1.0)
  for _ <- 0 until colorCount - 1 do hues = randomSplit(hues)
  hues.pop() // drop the closing 1.0 — it is the same hue as the opening 0.0

  val hueShift = rand()
  val colors = hues.map: h =>
    val hue = h + hueShift
    Color(hue.fract, (rand() + rand()) * 0.4 + 0.1)

  def getColor(): Color = colors.pick()

  val brushSize = height / 34.0
  var tiles = Arr(Tile(0.0, 0.0, width, height, getColor()))

  for _ <- 0 until randInt(4) + 1 do
    val newTiles = Arr[Tile]()
    for tile <- tiles do
      val maxSplits = randInt(3) + 2
      for t <- subdivideTile(
          tile,
          brushSize * 3.0,
          maxSplits,
          0.5,
          0.5,
          getColor,
        )
      do newTiles += t
    tiles = newTiles

  Painting(width, height, brushSize, tiles, colors)

/** Resolve a tile's [[Color]] to RGB, jittered per call — hue drifts slightly,
  * saturation is biased low, lightness spreads widely. Called once per tile per
  * paint pass, so the three passes lay down three related shades.
  */
def calculateColor(color: Color): Vec3 =
  Vec3(
    (color.hue + randNormal01() * 0.1).fract,
    ((rand() + rand()) * 0.5).pow(1.5),
    (color.lightness + randNormal11() * 0.4).clamp01,
  ).hsv2rgb

// ---------------------------------------------------------------------------
// Strokes
// ---------------------------------------------------------------------------

/** The turning points of a tile's stroke: a zig-zag alternating between the
  * tile's left and right edges, stepping down its height. Points sit slightly
  * *outside* the tile so the stroke's ends are clipped by the neighbours rather
  * than stopping short.
  *
  * Returns the points plus the side the last one landed on, so the caller can
  * keep alternating the curve bulge direction across segments.
  */
def getLineEdges(
    tile: Tile,
    brushSize: Double,
): (points: Arr[Vec2], isLeft: Boolean) =
  val steps =
    ((tile.height * 1.3 * randInRange(0.8, 1.2)) / brushSize).floor.max(4.0)
  val step = tile.height / steps
  val pointWOffset = step * 0.09
  // wide tiles get proportionally more horizontal jitter
  val widthJitter = (tile.width / brushSize.pow(1.4)).max(2.2)

  var isLeft = randBool()
  def delta(): Double = step * 0.29 * ((rand() + rand()) / 2.0).fit0111
  // def delta(): Double = step * 0.25 * rand().fit0111
  def edgeX(): Double =
    (if isLeft then tile.left - pointWOffset
     else tile.left + tile.width + pointWOffset) + delta() * widthJitter

  val points = Arr[Vec2]()

  points += Vec2(edgeX(), tile.top + step * 1.25 + delta())
  isLeft = !isLeft

  for i <- 1 until (steps * 2.0 - 1.0).toInt do
    points += Vec2(edgeX(), tile.top + step * i * 0.49 + step * 0.75 + delta())
    isLeft = !isLeft

  points += Vec2(edgeX(), tile.top + step * (steps - 1.0) + delta())

  (points = points, isLeft = isLeft)

/** Sample a cubic Bézier from `p1` to `p2`, bulging to one side by a random
  * amount so the zig-zag reads as a swept brush rather than straight lines.
  * `reverse` flips which side it bulges to.
  */
def makeCurve(
    width: Double,
    brushSize: Double,
    p1: Vec2,
    p2: Vec2,
    reverse: Boolean,
): Arr[Vec2] =
  val normalScale = (brushSize / 6.0) * (width / brushSize).min(15.0)
  val line = p2 - p1
  val steps = (line.length / 35.0).floor.toInt.max(8)
  val normal =
    (if reverse then Vec2(-line.y, line.x) else Vec2(line.y, -line.x)).normalize

  val mid = p1 + line * 0.5
  val c1 = mid + normal * ((rand() - 0.6) * normalScale)
  val c2 = mid + normal * ((rand() - 0.6) * normalScale)

  val points = Arr[Vec2]()
  for i <- 0 to steps do
    points += Vec2.cubicBezier(i.toDouble / steps, p1, c1, c2, p2)
  points

/** Build one tile's stroke — the unit of work the sketch paints, whole during
  * the initial build-up and point by point during the animation.
  *
  * The tile's zig-zag segments stay separate, so a sharp turn never has to be
  * mitred; [[TileStroke.linesUpTo]] chains their `lenOffset` back together.
  *
  * Fully re-randomised on every call — painting the same tile twice gives two
  * different strokes in two related shades, which is what makes repeated passes
  * build up depth.
  */
def strokeForTile(painting: Painting, tile: Tile): TileStroke =
  // clamp the brush to the tile: never thinner than the painting's base width,
  // never so thick that a short tile gets a single fat smear
  val brushSize = painting.brushSize
    .max((tile.height * 2.0).pow(0.8) / 10.0)
    .min(painting.brushSize * 3.0)

  val edges = getLineEdges(tile, brushSize)
  val points = edges.points
  var isLeft = edges.isLeft

  val segments = Arr[Arr[Vec2]]()
  for i <- 0 until points.length - 1 do
    segments += makeCurve(
      tile.width,
      brushSize,
      points(i),
      points(i + 1),
      isLeft,
    )
    isLeft = !isLeft

  TileStroke(segments, brushSize, calculateColor(tile.color))

/** One full pass over every tile, in random order — used for the initial
  * build-up. The animation walks [[strokeForTile]] tile by tile instead, so it
  * never has to generate a whole pass inside one frame.
  */
def generateTileStrokes(painting: Painting): Arr[TileStroke] =
  val result = Arr[TileStroke]()
  for tile <- painting.tiles.shuffled() do
    result += strokeForTile(painting, tile)
  result
