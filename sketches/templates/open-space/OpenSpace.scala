package sketches.templates.openspace

import org.scalajs.dom.HTMLCanvasElement
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.GaussianMirrorReflection
import sketchlib.utils.room.*
import trivalibs.dev.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel

// ---------------------------------------------------------------------------
// TEMPLATE — a free-standing wall in an open, endless, luminous space.
//
// Open it, read it, copy it, tune it. A sketch copied from it is an OUTCOME
// and should be lean and sparsely commented; the explanatory weight stays here.
//
// It enables one situation: NO ROOM. A single reflecting ground plate that
// reads as endless, an environment brighter than white that the whole scene
// dissolves into, and one wall standing in it with pieces hung on it. There is
// no ceiling, no shell, no confinement to a floor plan — walk where you like,
// including off the plate.
//
// It is a sibling of `templates/rooms/`, not a room: it shares their plan
// types, their wall derivation, their hanging kit and their ambience field, and
// differs in the one thing a room provides and this does not — an enclosure.
// That difference propagates further than it looks, and the five places it
// lands are what this template is for:
//
//   TILING ......... a room bakes every surface uniquely, because a room is
//                    small. A 400 m plate cannot be baked; it repeats ONE
//                    period of a periodic noise volume, and the wall reads the
//                    same volume so the two agree at the junction for free.
//   THE HORIZON .... with no far wall to stop the eye, the ground has to
//                    dissolve. It fades to the environment color with distance,
//                    in its own shade — there is no fog pass in this sketch.
//   THE LIGHT ...... a room lights itself from a luminous ceiling. Here the
//                    ENVIRONMENT ITSELF is the emitter: the clear color sits
//                    just above the bloom threshold, so the empty background
//                    blooms and every silhouette gets a halo carrying its tint.
//   NO SHELL ....... `confine` keeps a camera inside a plan; there is no plan
//                    to be inside. `clearOf` is its complement and keeps the
//                    camera out of the wall, and out of nothing else.
//   EVERY EDGE ..... a room's corners wrap toward the visitor and want a broad
//                    blend between the two faces you see meeting. Every corner
//                    this wall has turns away instead, seen one face at a time,
//                    and wants a rounding — while its ground line still wants
//                    the broad one. Hence `Fades`, one radius per kind.
//
// WHERE TO TOUCH
//   the wall ......... the single `Ring.rect` in `main`. Move it, resize it,
//                      add a second one — everything downstream follows.
//   any look value ... the TUNABLES block below. Nothing tunable lives lower
//                      down; if you had to hunt for a knob, it belongs up there.
//   the environment .. `EnvColor`, and read its comment first: it is one value
//                      wearing three hats (clear color, fade target, emitter).
//   what hangs ....... the CURATION block above `main`, and `curate` inside it.
//                      Delete both and write your own.
//
// THE FILE IN ORDER
//   TUNABLES ......... look decisions, including the noise fields and the grime
//                      line, which are functions rather than constants because
//                      every number in them is a look decision and none means
//                      anything alone.
//   STRUCTURAL ....... a pointer. The plan types, the wall geometry, the camera
//                      clamp, the distance fields and the hanging mechanism all
//                      live in `sketchlib.utils.room` (`src/utils/room/`), and
//                      the periodic FBM in `sketchlib.shaders.Noise`.
//   CURATION ......... crude stand-in content. Not a layout to imitate.
//   `main` ........... bakes, shades, scene assembly, camera.
//
// The unit is the METER everywhere. `u`/`v`/`uv` mean normalized [0,1] texture
// coordinates and nothing else — anything carrying meters is named for what it
// measures from (`centerFromLeft`, `centerHeight`, `fromLeft`).
//
// NOTHING DARKENS AT AN EDGE, as in the room templates. The one darkening is
// the grime line where the wall meets the ground, and it is dirt, not light.
//
// See PLAN.md for the longer why, the tiling contract in full, and the list of
// things that are load-bearing.
// ---------------------------------------------------------------------------

// ===========================================================================
// TUNABLES — everything an exhibition re-tunes lives in this block.
// Nothing tunable should hide further down the file.
// ===========================================================================

// ---- The space -------------------------------------------------------------

/** The walking plane. `y` is locked to this — see the confinement section. */
val EyeHeight = 1.7

/** How close the visitor may get to the wall, on any of its four faces. */
val WallClearance = 0.5

/** Half-extent of the ground plate. It is FINITE and its edge is reachable:
  * walk far enough and the ground simply stops, with the environment behind it.
  * That is accepted, not fixed — the plate is sized so the edge is past where
  * the fade has already turned it into environment, and a visitor who walks out
  * to find it has left the piece behind anyway.
  */
val PlateHalfExtent = 200.0

/** Where the ground starts and finishes dissolving into `EnvColor`, in meters
  * from the eye. `FadeStart` is how much sharp ground you stand in; `FadeEnd`
  * is the visible radius of the world, and everything past it is environment.
  *
  * These are the illusion. Too near and the space feels like a small foggy
  * room; too far and the plate's own edge comes into view.
  */
val FadeStart = 25.0
val FadeEnd = 150.0

/** ONE COLOR WEARING THREE HATS, which is the whole point of it and the reason
  * it is a single constant rather than three.
  *
  *   1. the scene's CLEAR COLOR — what is behind everything,
  *   2. what the ground FADES INTO with distance,
  *   3. an EMITTER: it is above the bloom threshold of 1.0, so the empty
  *      background blooms.
  *
  * The room templates put their emitter in the ceiling and let the room catch
  * its light. Here there is no ceiling and the emitter is the whole environment
  * — so a surface is not lit by a source in the scene, it is silhouetted
  * against one. That reads as an overcast sky or a lightbox, and it is what
  * makes a plain white space feel infinite rather than empty.
  *
  * **The tint is only visible through the bloom.** Tone-mapped for display (see
  * `Bloom`'s shoulder) 1.05 and 1.14 land within a hundredth of each other, so
  * the background itself reads as flat near-white however it is tinted. What
  * survives is the HALO: bloom carries the color out over the darker things in
  * front of it, so the tint shows up as a colored bleed around the wall's
  * silhouette and nowhere else. Push the channels apart to make that halo more
  * obviously colored; keep every channel just above 1.0 or the background stops
  * blooming and the effect goes with it.
  */
val EnvColor = Vec3(1.05, 1.04, 1.14)

/** The far plane, and it is deliberately CLOSER than the plate's far corner.
  *
  * DERIVED, not eyeballed: past `FadeEnd` the ground has already reached
  * `EnvColor` exactly, and clipping a surface away shows the clear color, which
  * IS `EnvColor`. So the two are pixel-identical out there and the far plane
  * can sit just past the fade instead of 570 m out at the plate's diagonal,
  * which is a straight gain in depth precision. Move it with `FadeEnd`, never
  * below it — a far plane inside the fade cuts a visible hard circle in the
  * ground.
  */
val FarPlane = FadeEnd * 1.3

// ---- The wall ---------------------------------------------------------------
//
// A free-standing wall is a CLOSED, thin, `Facing.Outward` ring — the same
// thing the room templates hang partitions on, standing alone. Closed rather
// than a single-sided plane so that all four faces, the two ends included, are
// ordinary walls: they bake through one pipeline, take the grime line, and can
// have pieces hung on them.
val WallLength = 12.0
val WallThickness = 0.4
val WallHeight = 4.5

// ---- The shared noise volume ------------------------------------------------
//
// EVERY surface samples ONE periodic 3D field at world position, so the ground
// and the wall are slices of the same volume and agree wherever they meet.
//
// The plate is 400 m across and cannot be baked; it repeats one `TileWorld`
// square of that field. The wall is 12 m and bakes its own unique patch of it —
// TILING IS A RESPONSE TO SIZE, NOT A STYLE, and mixing the two costs nothing
// because both read the same function of world position.
//
// The tile has to be repeatable, which is what forces the periodic FBM
// (`Noise.tilingFbm3`) instead of the room templates' `Noise.fbm3`, and imposes
// the three rules in its scaladoc — integer domain periods, lacunarity fixed at
// 2, and only Y may shear into X or Z. `warp` below is written to that last
// rule; read it before changing it.

/** The shared world period. Bigger ⇒ less obvious repetition and a bigger bake.
  * At 32 m and 48 texels/m the tile is 1536², and about a dozen periods span
  * the plate — of which the fade and the mip chain hide all but the nearest two
  * or three.
  */
val TileWorld = 32.0

/** Texels per world meter in the ground tile.
  *
  * Its floor is set by the GRIME LINE, not by the ambience: the ambience is
  * smooth enough for anything, but the wall computes the grime fields
  * analytically while the ground reads them out of this tile, and the two have
  * to agree along a shared 6 cm band. At 48 that is a texel every 2 cm against
  * fields whose features run about a meter, so the interpolated and the exact
  * value differ by far less than the band is wide.
  */
val GroundTexScale = 48.0

/** Texels per world meter for the wall's own bakes. Its faces are baked
  * uniquely and carry the same smooth field, so this is the room templates'
  * ambience resolution and is deliberately cheap.
  */
val AmbienceTexScale = 64.0

/** Snap a wanted feature scale so `TileWorld` is a WHOLE number of noise
  * periods, and hand back both halves of the result.
  *
  * The scale MOVES so that the tiling stays exact — that is the trade, and it
  * is why these are derived rather than authored. Ask for the feature size you
  * want and read what you got; at `TileWorld = 32` a wanted 0.10 lands on
  * 0.09375, which is a 6 % error in something set by eye anyway.
  */
def snapScale(wanted: Double): (scale: Double, period: Int) =
  val period = (TileWorld * wanted).round.toInt.max(1)
  (scale = period.toDouble / TileWorld, period = period)

/** The broad, low-frequency field: the one that gives the space its tone. */
val WorldField = snapScale(0.10)

/** The orientation-varied field — finer, and only ever a fraction of the sum.
  */
val OrientField = snapScale(0.15)

/** The two grime fields. See `grime`; the second is deliberately unrelated to
  * the first in frequency so the two do not move together.
  */
val CreepField = snapScale(0.9)
val PatchField = snapScale(2.07)

/** World space, sheared before it is sampled, so the field does not read as an
  * isotropic blob field pinned to the world axes.
  *
  * **Only Y shears.** World X and Z reach their own domain axes with a
  * coefficient of exactly 1, because the field's period is expressed in those
  * axes: scaling Z by 0.8 on its way in, as the room templates do, would mean
  * the tile no longer holds a whole number of periods along Z and the plate
  * would seam every 32 m. Y is free — the volume does not tile vertically —
  * which is why all the anisotropy is bought there.
  *
  * The Y terms also vanish at `y = 0`, so the wall and the ground read exactly
  * the same field where they meet. That is not a coincidence to preserve by
  * luck: keep the shear terms proportional to `wp.y` and it holds for free.
  */
def warp(wp: Vec3Expr): Vec3Expr =
  vec3(wp.x + wp.y * 0.2, wp.y * 0.3, wp.z + wp.y * 0.25)

/** The broad field, `[-1, 1]`. */
def worldNoise(wp: Vec3Expr): FloatExpr =
  Noise.tilingFbm3(
    warp(wp) * WorldField.scale,
    WorldField.period,
    octaves = 4,
    ampMul = 0.28,
    seed = vec3(120),
  )

/** The orientation-varied field, `[-1, 1]` — what gives each face its own look,
  * so that surfaces at different angles do not meet as a hard seam.
  *
  * A NORMAL-DRIVEN OFFSET INTO THE SAME VOLUME, where the room templates cross
  * the position with the normal. The cross product survives tiling only for
  * axis-aligned normals and only if its coefficients are snapped too, which is
  * three conditions to keep in your head; a constant offset survives it
  * unconditionally, because shifting a periodic field leaves it periodic. Each
  * orientation gets an unrelated slice of the volume, which is all this term
  * was ever asking for.
  *
  * `OrientSlice` is deliberately not a whole number of periods, or opposite
  * faces would land on the same slice.
  */
val OrientSlice = 1.7
def orientNoise(wp: Vec3Expr, normal: Vec3Expr): FloatExpr =
  Noise.tilingFbm3(
    warp(wp) * OrientField.scale + normal * OrientSlice,
    OrientField.period,
    octaves = 3,
    ampMul = 0.3,
    seed = vec3(70),
  )

/** How dark the ambience field is allowed to get; 1.0 is untouched. Tighter
  * than a room's, because an open sky reaches every surface from every angle
  * and a deep field would read as dirt rather than as light.
  */
val AmbienceLow = 0.80

/** How much of the sum the orientation-varied term is worth. Not a free knob:
  * it weights that term AND normalizes the sum, so the two uses have to move
  * together or the field's range drifts.
  */
val OrientWeight = 0.3

/** The ambience field, from the two noise values and an edge factor.
  *
  * Takes `world` and `orient` already sampled, rather than sampling them, for
  * one specific reason: the ground reads them out of a repeated tile, so it
  * never has them as numbers at all — see the ground tile's bake, which stores
  * this function evaluated at both ends of `edge` and lets the runtime shade
  * interpolate. That works because this is AFFINE in `edge`, which is worth
  * keeping if you edit it.
  *
  * `edge` is 1 in the open middle of a face and 0 at a geometry edge, already
  * smoothstepped. Fading the orientation term out there is what makes corners
  * read as slightly ROUNDED — one noise blending into the other. It is a
  * material property, not light absorption, and nothing darkens.
  */
def ambience(world: FloatExpr, orient: FloatExpr, edge: FloatExpr): FloatExpr =
  lerp(
    AmbienceLow,
    1.0,
    ((world + orient * OrientWeight * edge) / (1.0 + OrientWeight)).fit1101,
  )

/** How far from a geometry edge the orientation-varied term is fully faded out
  * — one radius per KIND of edge, because they are not the same edge.
  *
  * **This wall is the case that separates them.** Its ground line is a junction
  * that wraps toward the viewer, exactly like a room's, and wants the broad
  * rounding: it is half of what makes the wall look like it is standing on the
  * ground rather than in front of it. Every OTHER edge it has — the four
  * vertical corners and the top rim — turns away from the viewer, is seen one
  * face at a time against a silhouette, and wants a rounding rather than a
  * blend. At the room templates' 0.08 the same fade reads there as a broad soft
  * band running down the corner, which is the defect this splits apart.
  *
  * The `corner` radius is unused here — this plan has no vertex whose faces
  * wrap toward the viewer — and is left at the room templates' value so the
  * number means something if a second, enclosing ring is added.
  *
  * See `EdgeFades` in `sketchlib.utils.room` for which edge is which and for
  * the resolution floor under `arris`.
  */
val Fades: EdgeFades = (
  plane = 0.08,
  top = 0.03,
  corner = 0.08,
  arris = 0.03,
)

// ---- The grime line ---------------------------------------------------------

/** The dirt collecting where the wall meets the ground: darkest at the
  * junction, back to full brightness `GrimeWidth` away. THE ONE DARKENING in
  * the scene, and it is grime, not light — which is why it belongs only at the
  * ground line and generalizes to no other edge.
  *
  * It is also the only contact cue the wall has. Standing on a mirror under an
  * even sky, an object with no contact darkening floats; if this wall ever
  * looks like it is hovering, this is the knob, not a shadow.
  */
val GrimeWidth = 0.06
val GrimeDarken = 0.90 // brightness multiplier right at the junction

/** How far the line wanders in and out along the junction, in meters, and how
  * much its darkness varies independently of that (0 = none, 1 = it fades out
  * entirely in the lightest patches).
  *
  * The creep is the one that matters: a band of constant width reads as painted
  * on, an irregular one reads as accumulated. The patchiness stops the result
  * looking like a single wobbly stroke.
  */
val GrimeCreep = 0.03
val GrimePatchiness = 0.3

/** The two grime FIELDS, in `[0, 1]`. Both are functions of WORLD XZ ONLY, and
  * that is load-bearing twice over.
  *
  * **World**, because the junction is shared by two surfaces baked separately
  * at different resolutions with no coordinate in common — the ground's
  * repeating tile and the wall's own patch. A surface-local noise would make
  * each wander independently and the dirt would jump where they meet.
  *
  * **XZ only**, because the junction is a LINE IN THE GROUND PLANE. Sampled in
  * 3D, the wall's copy of the field would be read a few centimeters higher up
  * than the ground's and the two would disagree by that much — the room
  * templates get away with it because their band is narrow relative to the
  * feature size, but here the ground's copy is baked into a tile and the wall's
  * is computed exactly, so the two are already as different as they should ever
  * be. Flattening the field to the plane removes the second source of drift.
  */
def creepField(xz: Vec2Expr): FloatExpr =
  Noise
    .tilingFbm3(
      vec3(xz.x, 0.0, xz.y) * CreepField.scale,
      CreepField.period,
      seed = vec3(41),
    )
    .fit1101

def patchField(xz: Vec2Expr): FloatExpr =
  Noise
    .tilingFbm3(
      vec3(xz.x, 0.0, xz.y) * PatchField.scale,
      PatchField.period,
      seed = vec3(9),
    )
    .fit1101

/** The grime line itself, given a distance to the junction and the two fields
  * sampled there. `dist` is measured differently by each caller — the ground's
  * distance to the wall's footprint, the wall's height above the ground —
  * because the junction is the same line reached from two directions.
  */
def grime(dist: FloatExpr, creep: FloatExpr, patch: FloatExpr): FloatExpr =
  val darkest = lerp(GrimeDarken, 1.0, patch * GrimePatchiness)
  // `fit0111` re-centers the creep field so the line wanders BOTH ways: a
  // one-sided creep only ever widens the band, which reads as a thicker stroke
  // rather than an irregular one.
  lerp(
    darkest,
    1.0,
    (dist + creep.fit0111 * GrimeCreep).smoothstep(0.0, GrimeWidth),
  )

// ---- Surface tints ----------------------------------------------------------

/** The ground. Slightly warm against a cool environment, which is most of what
  * keeps a near-white space from reading as one flat value.
  */
val GroundTint = Vec3(0.82, 0.81, 0.79)

/** The wall's gradient, and it runs the OPPOSITE way to a room's.
  *
  * A room's walls settle toward a darker tone as they approach the ceiling,
  * because a ceiling is what is above them. Here the whole upper hemisphere is
  * the emitter, so a wall is most exposed at its top and its rim is the
  * brightest thing on it — which is also what makes the silhouette against the
  * sky read as an edge rather than a cut-out.
  *
  * Inverting it is a two-line change (the pair below and the `smoothstep` in
  * the wall bake), and it is the single most legible sign that this is not a
  * room. Keep the top under 1.0 or the wall's rim starts blooming as if it were
  * an emitter itself.
  */
val WallTintBase = Vec3(0.84, 0.84, 0.83)
val WallTintTop = Vec3(0.97, 0.97, 0.98)

/** Over how many meters below the rim the wall lifts to `WallTintTop`. A broad
  * settling of tone, NOT an edge effect — keep it a large fraction of the
  * wall's height or it reads as a painted stripe.
  */
val TopLiftDepth = 1.8

// ---- The mirror ground ------------------------------------------------------

/** How much of the ground is reflection. Higher than a room's, because the
  * reflected environment IS the light in this space and a dull ground makes the
  * whole thing look like a photograph of a wall.
  *
  * **Capped by the bloom threshold, not by taste.** The ground composites
  * `base·(1−mix) + reflection·mix`, and where nothing is reflected the
  * reflection is `EnvColor`, above 1.0. At a base of 0.82 and this mix the
  * result is about 0.87, comfortably under — but raise this much further and
  * the GROUND crosses the threshold and blooms as a second sky.
  */
val ReflStrength = 0.3

// ---- Drop shadows for hung pieces -------------------------------------------
//
// Shaped, not simulated — the same model as the room templates, and for the
// same reason: there is no light position in this space either. The MECHANISM
// is `sketchlib.utils.room.Hanging`; these four numbers are the look.
val ShadowFadeWorld = 0.10 // penumbra width, meters
val ShadowStrength = 0.40 // maximum darkening, scaled per piece by `shadowDim`
val ShadowDropMul = 0.25 // downward offset, in penumbra widths
val ShadowBotFadeMul = 2.7 // how much broader the lower falloff is

// ---- Bloom ------------------------------------------------------------------

/** How strongly the environment glows over what stands in front of it.
  *
  * Far larger than a room's, and the reason is in `Bloom`'s threshold pass: it
  * passes the bright pixel THROUGH rather than passing its excess, so what gets
  * blurred here is the whole `EnvColor`, ~1.05, over the whole background. A
  * room's emitter is a small bright patch; this one is everything, so a
  * fraction this size still reads.
  *
  * This is the free knob for how much the space glows. `EnvColor` is not — it
  * is capped by the ground re-bloom check above.
  */
val BloomIntensity = 0.005

// ===========================================================================
// STRUCTURAL — the plan and everything derived from it.
//
// All of it lives in `src/utils/room/` (`sketchlib.utils.room`), shared with
// the room templates, plus the periodic FBM in `src/shaders/Noise.scala`. It is
// there rather than here because none of it makes a LOOK decision.
//
//   Plan.scala      Facing / Ring / Footprint / Edge / Boundary
//   Confine.scala   nearest / contains / confine / clearOf — the camera clamp
//   Walls.scala     Wall, wallsFrom, wall.quad / rotY / pointAt
//   Surfaces.scala  planeQuad — the ground plate, and the tile bake's own quad
//   Fields.scala    edgeSetDist / cornerDist / edgeFade shader emitters
//   Hanging.scala   PaintingSpec / Painting / Hanging — hang + shadow composite
//   Noise.scala     fbm3 and its tiling twin tilingFbm3
//
// `Raster.scala` is the one room module this template does not touch: there is
// no ceiling to put a beam raster on.
//
// **Every one of them is a free function over plain data**, which is what lets
// this template diverge from the room family as far as it does while still
// sharing all of it. Nothing here needed a flag or a subclass on the shared
// code; two things were ADDED to it, both of which the room templates use too:
// `Boundary.clearOf`, which is `confine` with its containment test inverted,
// and the per-vertex edge classification `edgeFade` reads. See PLAN.md.
// ===========================================================================

// ===========================================================================
// CURATION — WHAT HANGS AND WHERE IS NOT THE STAGE'S BUSINESS.
//
// This block and the `curate` call it feeds belong to the sketch that copies
// this template, and are meant to be deleted and rewritten. It is deliberately
// crude: three fixed pieces at fixed positions, flat colors standing in for
// images. A real exhibition varies all of it — and none of that variation needs
// anything from the space, which is the property being demonstrated.
//
// The seam runs both ways, and both are worth re-testing after a change: moving
// or resizing a piece touches only curation, and moving the WALL touches no
// curation at all — the positions are wall-local meters.
// ===========================================================================

/** One hung piece. `fromLeft` and the sizes are METERS, `fromLeft` measured
  * from the wall's left edge as seen from in front of it.
  */
type Piece = (
    fromLeft: Double,
    width: Double,
    height: Double,
    color: Vec3,
    shadowDim: Double,
)

/** Three pieces on one face, at a gallery's eye line. `shadowDim` is a
  * perceptual correction, not a physical one: the eye reads the shadow beside a
  * light piece as far stronger than the same shadow beside a dark one, so
  * making them LOOK equal means making them mathematically unequal.
  */
val Pieces: Arr[Piece] = Arr(
  (
    fromLeft = 2.6,
    width = 1.15,
    height = 1.45,
    color = Vec3(0.05, 0.05, 0.06),
    shadowDim = 1.0,
  ),
  (
    fromLeft = 6.0,
    width = 1.60,
    height = 1.05,
    color = Vec3(0.93, 0.35, 0.20),
    shadowDim = 0.65,
  ),
  (
    fromLeft = 9.4,
    width = 0.95,
    height = 1.35,
    color = Vec3(0.90, 0.90, 0.88),
    shadowDim = 0.4,
  ),
)

/** Center height above the ground, shared by all three — the one curatorial
  * convention worth keeping when everything else varies.
  */
val PieceCenterHeight = 1.55

/** How far a piece stands off the wall. Thin: it is a canvas, and the shadow it
  * casts is sized off this.
  */
val PieceDepth = 0.06

@JSExportTopLevel("sketch")
def openSpaceWall(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val sampler = p.samplerLinear
    // The tile is sampled with UV that runs far past 1 — this is the sampler
    // that turns that into repetition rather than a clamped smear.
    val tileSampler = p.sampler(
      FilterMode.Linear,
      FilterMode.Linear,
      FilterMode.Linear,
      AddressMode.Repeat,
    )

    val cam = PerspectiveCamera(
      fov = 0.85,
      near = 0.1,
      far = FarPlane,
      pos = Vec3(0.0, EyeHeight, 9.0),
    )
    devPreserve(cam)

    // -----------------------------------------------------------------------
    // The plan — one free-standing wall, and nothing else
    // -----------------------------------------------------------------------
    //
    // THIS IS THE ONLY PLACE THE WALL IS DECIDED. `Facing.Outward` says the
    // visitor is outside the loop, which is what makes the four faces' normals
    // point out of the slab; `Ring.rect` is the same helper the room templates
    // stand their partitions on.
    //
    // A second wall is a second ring in the same `Boundary` and needs nothing
    // else: the bakes, the grime line, the camera clamp and the hanging all
    // iterate over whatever `wallsFrom` returns.
    val wallRing = Ring.rect(
      center = Vec2(0.0, 0.0),
      dir = Vec2(1.0, 0.0),
      length = WallLength,
      thickness = WallThickness,
      facing = Facing.Outward,
      height = WallHeight,
    )
    val wallBnd = wallRing.boundary
    val walls = wallsFrom(wallBnd, WallHeight)

    /** Which face things hang on. Selected by GEOMETRY, not by index: a ring's
      * edge order depends on how its points were written, so an index would
      * silently pick the wrong face the moment the wall is turned. This picks
      * the long face looking down +Z, which is the one the camera starts in
      * front of.
      */
    def isHangingFace(w: Wall): Boolean =
      w.width > WallThickness * 2.0 && w.inwardNormal.z > 0.5

    // -----------------------------------------------------------------------
    // Geometry
    // -----------------------------------------------------------------------

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    // The plate. One quad, finite, and its edge is reachable — see
    // `PlateHalfExtent`. `faceUp = false` with `CullMode.Front` is the room
    // templates' floor convention; what matters here is that the TILE below is
    // built the same way, so both carry the same normal and read the same
    // slice of the orientation-varied field.
    val plate = (
      minX = -PlateHalfExtent,
      minZ = -PlateHalfExtent,
      maxX = PlateHalfExtent,
      maxZ = PlateHalfExtent,
    )
    val groundForm = form(Arr(planeQuad(plate, 0.0, faceUp = false)))

    // The tile's own quad: ONE PERIOD of the field, anchored at the world
    // origin, with its UV spanning exactly [0,1]. Both of those are what the
    // runtime shade's UV formula below assumes.
    val tileBounds =
      (minX = 0.0, minZ = 0.0, maxX = TileWorld, maxZ = TileWorld)
    val tileForm = form(Arr(planeQuad(tileBounds, 0.0, faceUp = false)))

    // -----------------------------------------------------------------------
    // Bakes
    // -----------------------------------------------------------------------

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * AmbienceTexScale).toInt, (h * AmbienceTexScale).toInt)

    /** The ground tile — FOUR FIELDS, not a color.
      *
      * This is the one real structural difference from a room's floor bake, and
      * it follows from repetition: a tile may only carry what is PERIODIC.
      * Anything anchored to where the wall actually stands — the grime line,
      * the edge fade around its footprint — would repeat with the tile and
      * appear a dozen times over the plate. So the tile carries the fields and
      * the runtime shade does the anchoring, which is also why the tint is
      * applied there rather than baked in here.
      *
      * That split costs nothing at runtime: what is expensive is the noise
      * (thirteen psrdnoise evaluations per texel, which is exactly why it is
      * baked at all), and what is left for the shade is four segment distances
      * and a handful of interpolations.
      *
      * r ambience with the orientation term — the value in the open g ambience
      * without it — the value AT an edge b the grime creep field a the grime
      * patchiness field
      *
      * Two channels for the ambience because `edgeFade` cannot be baked either,
      * and because it does not have to be: `ambience` is affine in its edge
      * factor, so interpolating between the two ends reproduces it exactly.
      */
    val tilePx = (TileWorld * GroundTexScale).toInt
    val groundTile =
      TextureBaker.bakeBlock(p, tileForm, tilePx, tilePx):
        (wp, normal, _, out) =>
          val w = LetFloat("w")
          val o = LetFloat("o")
          Block(
            w := worldNoise(wp),
            o := orientNoise(wp, normal),
            out := vec4(
              ambience(w, o, 1.0),
              ambience(w, o, 0.0),
              creepField(wp.xz),
              patchField(wp.xz),
            ),
          )

    /** Wall ambience. ONE baker — and therefore one pipeline — for all four
      * faces, ends included.
      *
      * Unlike the ground this bakes a finished COLOR, because a wall's patch is
      * unique: everything anchored to the geometry is known here, so there is
      * nothing left for the runtime shade to do but sample and fade.
      *
      * No per-bake uniforms, unlike the room templates' wall baker: every face
      * of one closed ring shares a top. A second wall at a different height is
      * the moment to reach for `TextureBaker[U]` and pass `topY` in — the
      * distance field depends on it, so it cannot be applied afterwards.
      */
    val wallBaker = TextureBaker(p): (wp, normal, _, out) =>
      val amb = LetFloat("amb")
      val tint = LetVec3("tint")
      Block(
        // The edge factor: 0 at the four vertical arrises, at the ground line
        // and at the top rim, 1 in the open middle of a face — each over its
        // own radius from `Fades`, which is where this wall differs from a
        // room's. `edgeFade` drops the plan term for a vertical surface (a wall
        // never approaches its own plane) and takes THIS surface's top, which
        // for an open rim is a real geometry edge the material rounds off at.
        amb := ambience(
          worldNoise(wp),
          orientNoise(wp, normal),
          edgeFade(wp, normal, wallBnd, WallHeight, Fades),
        ),
        // Lifting toward the rim, not settling toward it — see `WallTintTop`.
        tint := vec3(WallTintBase).lerp(
          WallTintTop,
          (WallHeight - wp.y).smoothstep(TopLiftDepth, 0.0),
        ),
        // The wall's distance to the junction is simply its height above it.
        out := vec4(
          tint * amb * grime(wp.y, creepField(wp.xz), patchField(wp.xz)),
          1.0,
        ),
      )

    // -----------------------------------------------------------------------
    // Shades
    // -----------------------------------------------------------------------

    /** The distance dissolve, shared by every surface that uses it.
      *
      * IN THE SURFACE SHADE, not a fog pass over the frame. The alternative — a
      * full-screen resolve reading the depth buffer — fades everything at once
      * and would be the right call in a scene full of objects; here there are
      * two surfaces, one pass is one pass, and keeping it in the material means
      * this sketch has no post-process at all except bloom.
      *
      * The consequence is that anything NOT drawn with a shade that calls this
      * does not fade. See PLAN.md — the hung pieces are exactly that case.
      */
    def fadeToEnv(color: Vec3Expr, wp: Vec3Expr, eye: Vec3Expr): Vec3Expr =
      color.lerp(
        vec3(EnvColor),
        (wp - eye).length.smoothstep(FadeStart, FadeEnd),
      )

    // The eye position, for the fade. A per-frame uniform bound at SHAPE level
    // rather than panel level, deliberately: the mirror pass supplies its own
    // panel and would leave a panel-level binding unbound.
    val eyePos = p.binding[Vec3]

    type SurfaceUniforms = (
        vp: VertexUniform[Mat4],
        eye: FragmentUniform[Vec3],
        samp: FragmentUniform[Sampler],
    )
    type SurfacePanels = (tex: FragmentPanel)

    /** Every baked surface that is not the ground: sample its panel, dissolve
      * it into the environment with distance. Six lines, and every look
      * decision is on the other side of it, in the panel.
      */
    val surfaceShade =
      p.shade[
        BakeVertex,
        (uv: Vec2, worldPos: Vec3),
        SurfaceUniforms,
        SurfacePanels,
      ]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.worldPos := ctx.in.position,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := vec4(
            fadeToEnv(
              ctx.textures.tex(ctx.in.uv, ctx.bindings.samp).xyz,
              ctx.in.worldPos,
              ctx.bindings.eye,
            ),
            1.0,
          )

    // Canvas size in physical pixels — the ground turns its `fragCoord` into a
    // screen uv with it, because the reflection panel is sub-resolution and no
    // longer matches the scene's pixel grid 1:1.
    val canvasRes = p.binding[Vec2]

    type GroundUniforms = (
        vp: VertexUniform[Mat4],
        eye: FragmentUniform[Vec3],
        res: FragmentUniform[Vec2],
        tileSamp: FragmentUniform[Sampler],
        samp: FragmentUniform[Sampler],
    )
    type GroundPanels = (tile: FragmentPanel, reflTex: FragmentPanel)

    /** The ground: the repeated field tile, anchored to the wall, mirrored, and
      * dissolved. The only shade in the sketch with any composition in it.
      */
    val groundShade =
      p.shade[
        BakeVertex,
        (uv: Vec2, worldPos: Vec3),
        GroundUniforms,
        GroundPanels,
      ]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.worldPos := ctx.in.position,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          val wp = ctx.in.worldPos
          val f = LetVec4("f")
          val dEdge = LetFloat("dEdge")
          val base = LetVec3("base")
          val refl = LetVec4("refl")
          // NOT named `mix`: a `Let` becomes a WGSL `let` of that name, and
          // `mix` is WGSL's own lerp — which `fadeToEnv` emits three lines
          // later, at which point the local shadows the builtin and the shader
          // fails to parse. The room templates' floor gets away with the name
          // only because nothing in it lerps afterwards.
          val reflMix = LetFloat("reflMix")
          Block(
            // WORLD POSITION → TILE UV, and it must agree with how the tile was
            // baked: `planeQuad` runs `u` along +X and `v` along −Z over one
            // `TileWorld` square anchored at the origin. Written as
            // `(x, −z) / TileWorld` rather than `(x / T, 1 − z / T)` because
            // the two are equal modulo 1, which is all a Repeat sampler reads.
            //
            // The UV runs to ±6 across the plate. That is the whole tiling
            // mechanism — there is nothing else to it.
            f := ctx.textures.tile(
              vec2(wp.x, -wp.z) * (1.0 / TileWorld),
              ctx.bindings.tileSamp,
            ),
            // Everything anchored to the actual wall happens HERE, not in the
            // tile. For a horizontal surface `edgeFade` reduces to exactly this
            // over `Fades.plane`, so the two surfaces are using one field.
            dEdge := edgeSetDist(wp.xz, wallBnd),
            base := vec3(GroundTint)
              // The tile's two ambience channels, interpolated back into one —
              // see the bake for why this reproduces `ambience` exactly.
              // `Fades.plane` and not one of the corner radii: the ground meets
              // the wall's footprint along a LINE, and rounds off across it
              // exactly as the wall does rising out of it. Which kind of vertex
              // stands where is the wall's business, not the ground's.
              * lerp(f.y, f.x, dEdge.smoothstep(0.0, Fades.plane))
              * grime(dEdge, f.z, f.w),
            // UV sample, not a 1:1 load: the reflection panel runs at a
            // fraction of the canvas resolution.
            refl := ctx.textures.reflTex(
              ctx.fragCoord.xy / ctx.bindings.res,
              ctx.bindings.samp,
            ),
            reflMix := (1.0 - refl.a * 0.4) * ReflStrength,
            // The dissolve goes LAST, over the composited ground. Fading the
            // base alone would leave the reflection sharp out to the horizon.
            ctx.out.color := vec4(
              fadeToEnv(
                base * (1.0 - reflMix) + refl.rgb * reflMix,
                wp,
                ctx.bindings.eye,
              ),
              1.0,
            ),
          )

    // The hanging kit: the piece shade, the shadow layer and the ambience copy
    // layer, compiled once for this painter. The four numbers are this space's
    // — they are up in TUNABLES; the mechanism is not.
    val hanging = Hanging(
      p,
      fadeWorld = ShadowFadeWorld,
      strength = ShadowStrength,
      dropMul = ShadowDropMul,
      botFadeMul = ShadowBotFadeMul,
    )

    /** The bake for one face, with every piece's shadow composited over it.
      *
      * A wall binds A PANEL, WHATEVER PRODUCED IT — which is the seam. A face
      * with nothing on it gets the bare bake straight back rather than paying
      * for an empty pass.
      */
    def wallTex(wallForm: Form, wall: Wall, pieces: Arr[Painting]): Panel =
      val (w, h) = texSize(wall.width, wall.height)
      hanging.composite(wallBaker(wallForm, w, h), w, h, pieces)

    // ----- CURATION --------------------------------------------------------
    // Delete this and write your own. See the curation block at the head of the
    // file for what each constant is standing in for.

    val flatShade = p.layerShade[(color: Vec3)]: program =>
      program.frag: ctx =>
        ctx.out.color := vec4(ctx.bindings.color, 1.0)

    /** A one-color panel standing in for a real image. Tiny on purpose — it has
      * no detail to resolve, and a real piece would supply its own resolution.
      */
    def flatPanel(c: Vec3): Panel =
      val panel = p.panel(
        width = 8,
        height = 8,
        layer = p.layer(flatShade).bind("color" := c),
      )
      p.paint(panel)
      panel

    val pieceImages = Pieces.map(pc => flatPanel(pc.color))

    def curate(wall: Wall): Arr[Painting] =
      val out = Arr[Painting]()
      if isHangingFace(wall) then
        for i <- 0 until Pieces.length do
          val pc = Pieces(i)
          out.push(
            hanging.hang(
              wall,
              PaintingSpec(
                width = pc.width,
                height = pc.height,
                depth = PieceDepth,
                image = pieceImages(i),
              ),
              centerFromLeft = pc.fromLeft,
              centerHeight = PieceCenterHeight,
              shadowDim = pc.shadowDim,
            ),
          )
      out

    // ----- end of curation -------------------------------------------------

    // -----------------------------------------------------------------------
    // Scene assembly
    // -----------------------------------------------------------------------

    // Everything above the ground — which is the wall and what hangs on it, and
    // is also exactly what the mirror reflects.
    val aboveGround = Arr[AnyShape]()
    for i <- 0 until walls.length do
      val wall = walls(i)
      val wallForm = form(Arr(wall.quad))
      // Curation decides what hangs; the face only needs to know the rects, and
      // only so it can darken under them. Swap `curate` for anything at all and
      // nothing below this line changes.
      val pieces = curate(wall)
      aboveGround.push(
        p.shape(wallForm, surfaceShade, cullMode = CullMode.None)
          .bind(
            "samp" := sampler,
            "eye" := eyePos,
            "tex" := wallTex(wallForm, wall, pieces),
          ),
      )
      for piece <- pieces do aboveGround.push(piece.shape)

    // The mirror's clear color is the ENVIRONMENT, so that where the reflection
    // finds nothing it finds sky — which, on a ground this reflective, is most
    // of it. Its alpha is the plane-distance ramp the ground reads back, and 0
    // there means "no falloff", i.e. the sky reflects at full strength.
    val mirror = GaussianMirrorReflection(
      p,
      cam,
      shapes = aboveGround,
      vpName = "vp",
      // The tallest thing reflected is the wall's rim.
      alphaScale = WallHeight,
      blurStrength = 4.0,
      blurRatioVertical = 3.0,
      clearColor = Vec4(EnvColor, 0.0),
    )

    val groundShape = p
      .shape(groundForm, groundShade, cullMode = CullMode.Front)
      .bind(
        "samp" := sampler,
        "tileSamp" := tileSampler,
        "eye" := eyePos,
        "tile" := groundTile,
        "reflTex" := mirror.resultPanel,
        "res" := canvasRes,
      )

    // HDR scene panel — supplies the scene `vp` to all its shapes.
    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        // THE BACKGROUND IS THE EMITTER. Above the bloom threshold, so the
        // empty parts of the frame are what glows — see `EnvColor`.
        clearColor = (EnvColor.x, EnvColor.y, EnvColor.z, 1.0),
        depthTest = true,
        multisample = true,
        shapes = aboveGround :+ groundShape,
      )
      .bind("vp" := sceneVp)

    val bloom = Bloom(
      p,
      scenePanel,
      intensity = BloomIntensity,
      threshold = 1.0,
      blurRadius = 0.6,
      mipLevels = 5,
      // Soft-clip the HDR before display. Load-bearing here rather than
      // optional: the wall's silhouette against a bright sky is the exact case
      // a hard clamp ruins — every edge sample above a fraction of coverage
      // goes to pure white, MSAA's gradations collapse, and the edge reads as a
      // staircase. The knee sits just above the brightest surface in the scene,
      // so nothing material shifts; only the sky and its halo are compressed.
      toneKnee = 0.9,
      toneWhite = 1.5,
    )

    // -----------------------------------------------------------------------
    // Input, controller
    // -----------------------------------------------------------------------
    // The drag glide is opt-in: without `dragGlideHalfLife` the look stops dead
    // on release. Half-life = ms for the coast to halve, min speed = px/s below
    // which a release doesn't coast at all (and a coast ends).
    val input = p.input(dragGlideHalfLife = 90.0, dragGlideMinSpeed = 50.0)
    val controller =
      BasicFirstPersonCameraController(
        cam,
        input,
        sensitivity = 2.5,
        // Faster than a room's: the space is a hundred times bigger, and at a
        // room's walking pace the plate takes minutes to cross.
        speed = 2.0,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)
      canvasRes.set(Vec2(w, h))
      mirror.resize(w, h)

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
      // THE ONLY THING TO WALK INTO IS THE WALL. `clearOf` is `confine`'s
      // complement — it keeps the camera OUTSIDE the loops it is given instead
      // of inside them, which is what an open space needs and what `confine`
      // cannot express (with no room boundary present its inside/outside test
      // is inverted, and every point in the open would read as an escape).
      //
      // Nothing stops the visitor at the plate's edge, deliberately: the ground
      // simply ends, and past it there is environment in every direction.
      //
      // `y` is LOCKED to eye height: the shipped experience is a walk on one
      // plane. Space / Shift free-fly survives only as a dev inspection tool,
      // gated on `devMode` (true under the Vite dev server, false in a built
      // sketch) so it cannot ship by accident. With `y` fixed, the wall's open
      // top is never in view and the mirror only ever shows undersides — so
      // AUTHOR FOR THE LOCKED EYE PLANE, and expect flying in dev to reveal
      // that the wall has no lid.
      cam.pos = wallBnd.clearOf(
        cam.pos,
        margin = WallClearance,
        eyeY = if devMode then cam.pos.y else EyeHeight,
      )
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      eyePos.set(cam.pos)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
