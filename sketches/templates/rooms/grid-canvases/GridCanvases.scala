package sketches.templates.rooms.gridcanvases

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.GaussianMirrorReflection
import trivalibs.dev.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// TEMPLATE — a walkable exhibition room on an arbitrary floor plan.
//
// Open it, read it, copy it, tune it. It is meant to be read cold and then
// edited, not maintained as a finished scene; a sketch copied from it is an
// OUTCOME and should be lean and sparsely commented, with the explanatory
// weight left behind here.
//
// It enables one situation: a floor plan, an ambient-baked shell, a grid
// ceiling over a recessed light, camera confinement, and walls that accept
// hung pieces.
//
// WHERE TO TOUCH
//   room shape ....... the single `Ring` in `main`. An L is a 6-point ring;
//                      a hexagon is 6 points at 60°. Nothing else changes.
//   room size ........ the wanted extents passed to `snapHalfExtent` — never
//                      `RoomWidth` directly, which is derived from them.
//   any look value ... the TUNABLES block below. Nothing tunable lives lower
//                      down; if you had to hunt for a knob, it belongs up there.
//   the light ........ the fenced light-shader block. That one is yours.
//   what hangs ....... the CURATION block above `main`, and `curate` inside it.
//                      Delete both and write your own.
//   a partition ...... a second `Ring`, `Facing.Outward`, `height` below the
//                      room's. Everything downstream already handles it.
//
// THE FILE IN ORDER
//   TUNABLES ......... look decisions, including `roomNoise` and `grime`, which
//                      are functions rather than constants because every number
//                      in them is a look decision and none means anything alone.
//   STRUCTURAL ....... the plan types and the geometry derived from them.
//                      Written to library discipline — headed for `src/`.
//   CURATION ......... crude stand-in content. Not a layout to imitate.
//   `main` ........... bakes, shades, scene assembly, camera.
//
// The unit is the METER everywhere: every dimension, offset, fade width and
// margin is meters. `u`/`v`/`uv` mean normalized [0,1] texture coordinates and
// nothing else — anything carrying meters is named for what it measures from
// (`centerFromLeft`, `centerHeight`). The two conventions meet inside single
// function bodies here, which is how confusing them becomes a bug rather than a
// style quibble.
//
// NOTHING DARKENS AT AN EDGE. Not where walls meet, not where the raster meets
// a wall, not where beams cross. That is a design decision, not an omission —
// see PLAN.md before adding occlusion. The one darkening is the grime line at
// the floor, and it is dirt, not light.
//
// See PLAN.md for the longer why and the list of things that are load-bearing,
// and `documents/grid-ceiling-rooms-plan.md` for the full design rationale.
// ---------------------------------------------------------------------------

// ===========================================================================
// TUNABLES — everything an exhibition re-tunes lives in this block.
// Nothing tunable should hide further down the file.
// ===========================================================================

// ---- The ceiling beam lattice, and the room derived from it ----------------
//
// For an axis-aligned plan, do NOT snap the grid to the room — derive the room
// from the grid. Beam centerlines sit at k·GridSpacing; each wall plane lands
// flush with the outer face of the beam nearest the wanted extent. The beam
// adjacent to each wall then IS the perimeter beam: no extra generator, no
// special-cased geometry, and the light openings are inset by one beam width at
// every wall rather than dying into the corner. That inset is the intended
// architectural transition, not a side effect.
//
// A plan whose walls are not parallel to a beam family — a hexagon — cannot
// snap, and needs an explicit perimeter-beam generator instead. This is the
// free path where it applies.
val GridSpacing = 0.50
val StripWidth = 0.10
val StripHeight = 0.32

/** Vertical offset between successive beam families, to keep their soffits from
  * being coplanar where they cross. See the family loop for why this is needed
  * and why this size.
  *
  * NUMERICAL HYGIENE, not a look decision — the two soffits meeting at a
  * crossing are shaded identically (see `crossing` in the beam bake), so which
  * one wins is invisible. This only stops the depth buffer from having to
  * choose, which it cannot do for coplanar faces.
  */
val FamilyYStagger = 0.0006

/** How far a beam's soffit/side tint blend reaches either side of an arris.
  *
  * The knob for how soft the beams' edges read. Drawn explicitly rather than
  * left to texture filtering — see `soffitness` in the beam bake for why that
  * matters. It also sets how far before a crossing the edge treatment fades
  * out, which is the same quantity by intent: both are "how gradually does an
  * arris stop being an arris".
  *
  * Bounded by the beam, not by taste: the soffit is `StripWidth` = 0.10 m
  * across, so beyond ~0.05 the blend swallows the soffit entirely and the beams
  * lose their dark underside.
  */
val ArrisSoften = 0.02

/** Snap a wanted half-extent (meters) out to the outer face of the nearest
  * beam.
  */
def snapHalfExtent(wanted: Double): Double =
  val k = Math.round((wanted - StripWidth / 2.0) / GridSpacing).toDouble
  k * GridSpacing + StripWidth / 2.0

// Room extents are DERIVED, not authored — tune the wanted values, read the
// snapped ones — they will not usually be what you asked for, and that is the
// mechanism working. (At the spacing above: 6.5 → 6.50, 10.0 → 9.70.)
val RoomWidth = snapHalfExtent(6.5 / 2.0) * 2.0
val RoomDepth = snapHalfExtent(10.0 / 2.0) * 2.0
val RoomHeight = 5.5

/** How close the visitor may get to any surface, including the outer faces of
  * anything standing in the room and the faces of hung pieces.
  */
val WallClearance = 0.5

/** The walking plane. `y` is locked to this — see the confinement section. */
val EyeHeight = 1.7

/** Ceiling line — the top of the raster, and where the room still reads as
  * having a ceiling from eye height.
  */
val CeilY = RoomHeight

/** Where the *visible* wall ends, and what a wall's shading fades against.
  *
  * The wall stops one beam-height below the ceiling line because the perimeter
  * beam's outer face continues the same plane up to `CeilY` — two surfaces, one
  * continuous plane, no overlap. Capping the geometry here is tidiness rather
  * than a fix (the beam's outer face points out of the room and is never
  * drawn), but it keeps the mesh agreeing with the `topY` the shading uses.
  *
  * Separate from `CeilY` so a flat-ceilinged room asks for `CeilY` instead, and
  * so a partition can carry its own top.
  */
val WallTopY = CeilY - StripHeight

/** Depth of the wall tint gradient below `WallTopY`. A broad settling of tone
  * where wall meets ceiling — NOT an edge effect, and not occlusion.
  */
val TopFadeDepth = 0.6

// ---- The coffer: a luminous plane recessed behind the raster ---------------
//
// The parallax the room is built around is plain perspective, no trick: at 1.7 m
// eye height a 1.0 m coffer gives eye-to-soffit 3.55 m vs eye-to-light 4.80 m,
// so the light plane moves ~26 % slower than the raster under camera
// translation. `CofferDepth` is the knob for how pronounced that reads.
val CofferDepth = 1.0

/** The luminous plane's height. */
val LightY = CeilY + CofferDepth

/** How far the light plane overhangs the plan on every side.
  *
  * The coffer needs no reveal walls — a raster occluding a luminous plane
  * already reads as a recess. The one real risk is seeing PAST the plane's edge
  * on a shallow ray through the gap at a wall, which shows as a strip of
  * background where light should be. The fix is to make the plane wide enough
  * that every reachable sightline still lands on it.
  *
  * DERIVED rather than eyeballed, because the requirement is geometric and
  * changes with the room, the coffer depth and the eye height — three things a
  * copy of this template is likely to change together. The worst case is the
  * shallowest ray a visitor can construct: standing at the far wall (so
  * `WallClearance` from it), eye at `EyeHeight`, looking through the near
  * wall's junction with the raster at `WallTopY`, and continuing to `LightY`.
  *
  * This is the exception to "do not derive a constant that could be a
  * constant": that rule is about LOOK values, which hide an assumption when
  * computed. This one is a correctness bound, and hard-coding it is how it
  * silently goes stale.
  */
val LightOverhang =
  (LightY - WallTopY) * (RoomWidth.max(RoomDepth) - WallClearance)
    / (WallTopY - EyeHeight) * 1.05 // 5 % margin off the exact tangent

/** Baked texels per world meter for the AMBIENCE field only. It is smooth,
  * low-frequency noise, so this is deliberately cheap — a 6.5 m wall bakes to
  * ~312 px. A wall or floor carrying its own artwork gets its own, much higher
  * resolution as a separate panel; do NOT raise this to sharpen artwork.
  */
val AmbienceTexScale = 64.0

/** How far from a geometry edge the normal-dependent noise term is fully faded
  * out. This makes corners read as slightly ROUNDED — one noise blending into
  * the other. It is a material property, not light absorption.
  */
val EdgeFadeWorld = 0.08

/** The floor grime line: dirt collecting where wall meets floor. Its own width,
  * deliberately separate from `EdgeFadeWorld` — they are unrelated quantities
  * that `canvases` happened to give the same number.
  */
val GrimeWidth = 0.06
val GrimeDarken = 0.91 // brightness multiplier right at the junction

/** How far the grime line wanders in and out along the junction, in meters, and
  * how much its darkness varies independently of that (0 = none, 1 = it fades
  * out entirely in the lightest patches).
  *
  * The creep is the one that matters: a band of constant width reads as painted
  * on, an irregular one reads as accumulated. The patchiness stops the result
  * looking like a single wobbly stroke.
  *
  * **Bounded by the bake resolution, not by taste.** Floor and walls bake at
  * `AmbienceTexScale` texels per meter, so at 64 that is 1.56 cm per texel and
  * `GrimeWidth` is about 5 texels across. A creep much beyond ~0.02 m has
  * nothing to land on, and detail finer than the scale below will crawl rather
  * than resolve. Wanting genuinely fine speckle means a separate,
  * higher-resolution grime input — not raising the ambience scale, which is
  * deliberately cheap.
  */
val GrimeCreep = 0.03
val GrimePatchiness = 0.3

/** Feature size of the grime noise, as an inverse scale on world position —
  * lower is larger. At 0.9 the features run roughly half a meter, which is
  * about how dirt actually pools and is also all the bake can resolve.
  */
val GrimeNoiseScale = 0.9

// Surface tints. Authored as CPU vectors, lifted with `vec3(…)` in the bakers.
val FloorTint = Vec3(0.80, 0.78, 0.75)
val CeilTint = Vec3(0.87, 0.87, 0.86)
val WallTintLow = Vec3(0.97, 0.97, 0.96)
val WallTintHigh = Vec3(0.88, 0.88, 0.87)

/** What a beam's side face lifts TOWARD at the ceiling line. Its bottom stays
  * at `WallTintLow`, so this is only the top of a gradient.
  *
  * The beams' sides are the only surfaces in the room open to the coffer
  * directly above them, so they catch more of the light plane the higher they
  * go. Reading as light spilling down into the recess is the point; reading as
  * "the beams are painted a lighter color" is not — which is why this is a
  * gradient rather than a flat tint one step above the wall.
  *
  * **Capped at 1.0 by the bloom threshold, not by taste.** With `BeamTopGlow`
  * at 1.0 the ambience reaches 1.0 at the top of a side, so this tint IS the
  * rendered value there. Any channel above 1.0 puts the tops of the beams over
  * the scene panel's threshold and they start to glare as if they were
  * emitters. The slight warm tilt follows `LightColor`.
  */
val BeamSideTopTint = Vec3(1.0, 0.99, 0.97)

/** How much of the ambience field's darkening is lifted off a beam's side face
  * by the time it reaches the ceiling line. 1.0 removes it entirely.
  *
  * Without this the tint above cannot be reached, and the reason is arithmetic
  * rather than aesthetic: `roomNoise` is `lerp(0.68, 1.0, …)` over a normalized
  * FBM that sits near the middle of its range, so it AVERAGES about 0.84 and
  * seldom clears 0.93. Multiplying by it, an almost-white tint renders as
  * mid-grey — which against a light plane at 2.0 reads as a much bigger
  * contrast step than intended.
  *
  * It is also the right shape physically: the ambience field stands in for
  * soft, indirect variation, and a surface this close to a large source is lit
  * directly enough that such variation would wash out. Lower it to put material
  * back into the beam tops.
  */
val BeamTopGlow = 0.7

/** Texels per meter ACROSS a beam's cross-section — its own number, much finer
  * than `AmbienceTexScale`.
  *
  * The beam atlas is the one bake with real STRUCTURE in it rather than smooth
  * noise: the band boundaries are the arrises, and the soffit is only
  * `StripWidth` = 0.10 m wide. At the ambience scale that band is ~5 texels, so
  * a single texel of bilinear bleed from the bright side bands is a fifth of
  * the soffit's width — which is what shows as a light line down every beam.
  * Along the RUN the content really is low-frequency, so that axis keeps
  * `AmbienceTexScale`; only the section needs resolving.
  *
  * **KNOWN CEILING, not guarded.** The atlas is one row per beam, so its height
  * is `beams.length × round(beamBandWorld × BeamCrossTexScale)` and it runs
  * into the GPU's `maxTextureDimension2D` — 8192 on essentially everything. At
  * the values here that is a row of 95 texels and a limit of ~86 beams, which
  * this room reaches at a `GridSpacing` of about 0.19 m. Raising `StripHeight`
  * lowers the beam count it breaks at, since `beamBandWorld` grows with it.
  *
  * It is left unclamped on purpose: clamping would silently trade the
  * resolution this constant exists to provide for a coarser atlas, and quietly
  * getting the artifact back is worse than a loud failure while tuning. WebGPU
  * does not throw — an over-large `createTexture` is a VALIDATION error, so the
  * call returns an invalid texture, the console fills with errors, and the
  * beams simply do not draw. Loud, but only in the console: if the raster
  * vanishes after a grid tweak, look there first.
  */
val BeamCrossTexScale = 128.0

// ---- The ambience field — the core of the illusion -------------------------
//
// Nothing here is a light model. A world-space FBM modulating surface
// brightness, plus a second noise varied by surface normal, has no physical
// justification whatever and is precisely what makes the room read as a real
// space rather than a rendering. It is set by LOOKING, not deriving.
//
// IT LIVES IN THE TUNABLES BECAUSE ALL OF IT IS ONE. Every number below is a
// look decision, and none of them means anything on its own — a frequency is
// only right relative to the amplitude beside it and the range it lands in. So
// this is written out as a block to be read and edited in place, rather than
// dissolved into a dozen named constants that would have to be reassembled in
// your head before you could change anything. Floor, walls and beams all bake
// against it, so a change here re-tones the whole room at once.

/** Dirt collecting where wall meets floor — darkest at the junction, back to
  * full brightness `GrimeWidth` away. This is the ONE darkening in the room,
  * and it is grime, not light: that is why it belongs only at the floor line
  * and generalizes to no other edge.
  *
  * `dist` is measured differently by each caller — the floor's distance to the
  * plan boundary, a wall's height above it — because the junction is the same
  * line reached from two directions.
  *
  * **`wp` IS WORLD POSITION, AND THAT IS THE WHOLE TRICK.** The junction is
  * shared by surfaces that are baked separately, at different resolutions, with
  * no coordinate in common: the floor and every wall, and any two walls meeting
  * at a room corner. Perturbing the line with a surface-local noise would make
  * each of them wander independently and the dirt would visibly jump at every
  * corner. Sampled in world space they all read out of one field and agree for
  * free — the same reason `roomNoise` is world-space, and it keeps holding when
  * a partition or an L's notch arrives.
  *
  * At `GrimeNoiseScale` the field barely changes across the 8 cm band, so it
  * effectively varies only ALONG the junction. That is what is wanted, and it
  * is why this needs no per-edge tangent to work at any wall angle.
  */
def grime(dist: FloatExpr, wp: Vec3Expr): FloatExpr =
  val p = wp * GrimeNoiseScale
  // How far the dirt creeps up, varying along the line.
  val creep = Noise.fbm3(p, seed = vec3(41)) * GrimeCreep
  // How dark it gets where it does creep up — varied on its own, and at a
  // different frequency, so the two do not move together and read as one
  // stroke that merely got wider.
  val darkest = lerp(
    GrimeDarken,
    1.0,
    Noise.fbm3(p * 2.3, seed = vec3(9)).fit1101 * GrimePatchiness,
  )
  lerp(darkest, 1.0, (dist + creep).smoothstep(0.0, GrimeWidth))

/** The ambience field, given the distance to the nearest geometry edge.
  *
  * Takes that distance rather than deriving it, because what counts as an edge
  * is the caller's business: `edgeDist`'s vertical term assumes a surface
  * spanning `0 … topY`, true of a wall and false of a ceiling beam hanging in
  * the middle of the room. The beams pass their own and reuse everything else.
  */
def roomNoise(
    wp: Vec3Expr,
    normal: Vec3Expr,
    edgeDistance: FloatExpr,
): FloatExpr =
  // Anisotropic world space: the field is stretched and sheared before it is
  // sampled, so it does not read as an isotropic blob field pinned to the room
  // axes. `y` is compressed hardest, which is what makes it drift vertically.
  val scaledWp = vec3(
    wp.x + wp.y * 0.2,
    wp.y * 0.3,
    wp.z * 0.8 + wp.y * 0.2,
  )
  // The normal-dependent term gives each orientation its own look, which would
  // otherwise meet as a hard seam in the corners. Fade it out over
  // `EdgeFadeWorld` so the edge itself is uniform across all surfaces — this is
  // what makes corners read as slightly rounded.
  val edge = edgeDistance.smoothstep(0.0, EdgeFadeWorld)
  // Not a free knob, unlike everything else here: it weights the second term
  // AND normalizes the sum, so the two uses have to move together or the
  // field's range drifts. Written once for that reason.
  val normalWeight = 0.3
  lerp(
    0.74, // how dark the field is allowed to get; 1.0 is untouched
    1.0,
    ((Noise
      .fbm3(
        scaledWp * 0.10,
        freqMul = 3.6,
        ampMul = 0.12,
        seed = vec3(120),
      ) +
      Noise.fbm3(
        scaledWp.cross(normal) * 0.15,
        freqMul = 2.1,
        ampMul = 0.25,
        seed = vec3(70),
      ) * normalWeight * edge)
      / (1.0 + normalWeight)).fit1101,
  )

// ---- Drop shadows for hung pieces ------------------------------------------
//
// Shaped, not simulated. The shadow box matches the piece's footprint exactly
// and every bit of the look is in the falloff: tight above, broad below, nudged
// down so the light reads as coming from slightly above. There is no light
// position anywhere in this room, and this does not introduce one.
val ShadowFadeWorld = 0.10 // penumbra width, meters
val ShadowStrength = 0.44 // darkening at the center of the shadow
val ShadowDropMul = 0.25 // downward offset, in penumbra widths
val ShadowBotFadeMul = 2.7 // how much broader the lower falloff is

/** Soft, directional drop shadow for one rect, in wall-local UV.
  * `rect = (centerU, centerV, halfU, halfV)`; `fade = (fadeU, fadeV)` is the
  * soft-edge width per axis **in UV** — pass `worldFade / wallWidth` and
  * `worldFade / wallHeight` so the penumbra stays isotropic in world space
  * whatever the wall's aspect. Uniform in strength inside the box; only the
  * edge falloff varies.
  */
def shadowMask(uv: Vec2Expr, rect: Vec4Expr, fade: Vec2Expr): FloatExpr =
  val hx = rect.z
  val hy = rect.w
  val dx = uv.x - rect.x
  // +V is down; the box is nudged down so the top edge stays lit and the cast
  // shadow is exposed below.
  val dy = uv.y - rect.y - fade.y * ShadowDropMul
  // Edge-CENTERED falloff: half the penumbra falls on the wall beyond the
  // piece, half stays hidden behind it — light leaking in around a canvas that
  // stands slightly off the wall.
  val hMask = dx.abs.smoothstep(hx + fade.x * 0.5, hx - fade.x * 0.5)
  val upperFade = fade.x
  val lowerFade = fade.y * ShadowBotFadeMul
  val upper = dy.smoothstep(-hy - upperFade * 0.5, -hy + upperFade * 0.5)
  val lower = dy.smoothstep(hy + lowerFade * 0.5, hy - lowerFade * 0.5)
  hMask * upper * lower

// ---- The light shader's own tunables --------------------------------------
//
// WHAT THE LIGHT PLANE EMITS IS YOURS. The room owns the plane's position,
// extent and HDR format, and wires bloom to it; what fills it is a shader this
// sketch supplies, exactly like canvas content. Keep the halo strips, make it
// bulbs behind diffuse glass, make it read as sky, give it a color cast —
// all legitimate, none of them the room's business.
//
// Four things any replacement must respect, all technical rather than
// aesthetic: stay above the bloom threshold where it should bloom; keep the
// MIRRORED copy below threshold after `reflStrength` or the floor re-blooms;
// cover the overhang, so a shallow ray never finds an unlit edge; and express
// structure in WORLD METERS, not the plane's UV, if the plan is not a rectangle
// (see below).
/** HDR emission, above the bloom threshold of 1.0.
  *
  * **This value is capped by the MIRROR, not by taste.** The floor composites
  * `base·(1−mix) + reflection·mix`, and at the light plane's height
  * `mix = 0.6 · reflStrength = 0.15`. With the floor's brightest base around
  * 0.80 that leaves `1.0 − 0.80·0.85 = 0.32` of headroom, so anything above
  * `0.32 / 0.15 ≈ 2.1` pushes the REFLECTION over the threshold and the floor
  * blooms as a second light source instead of reading as a soft blur.
  *
  * `canvases`' 8.0 does not transfer: there it lit thin halo strips covering a
  * few percent of the ceiling, here it lights the whole plane. Same number,
  * vastly more above-threshold area.
  *
  * To make the glow stronger or weaker, move `Bloom(intensity)` below — that
  * knob is free. This one is not.
  */
val LightColor = Vec3(2.0, 1.9, 1.7)

// A slow undulation in strength, so the plane is not a flat field. Deliberately
// minimal: this is the shader you are meant to replace.
//
// Meters rather than UV here because the blob size should not stretch when the
// room's aspect changes — NOT because UV is discouraged. The two say different
// things and both are right sometimes: UV means "N features spanning the plane"
// (six halos stay six in any room), meters means "features every N m" (spacing
// stays put, count grows). A halo shader in this slot would rightly use UV.
val LightWaveMetersX = 5.0 // period along X
val LightWaveMetersZ = 3.7 // along Z — deliberately not a multiple of X, so the
// two never line up into a visible grid
val LightWaveAmount = 0.52 // ±12 % on strength; stays well above threshold

// ===========================================================================
// STRUCTURAL — the floor plan and everything derived from it.
//
// Written to library discipline (Arr, while, no Scala collections, no `enum`):
// this cluster is headed for `src/utils/room/` once a second room shape exists,
// so it is written as library code that has not moved yet.
// ===========================================================================

val Up = Vec3.Y
val Tau = 2.0 * math.Pi

/** Which side of a ring the room is on. An ABSOLUTE claim about the world, not
  * a claim relative to how the ring's points happen to be ordered — see `Ring`
  * for why that distinction is the whole point, and `Boundary.ringEdges` for
  * the two lines that make it true.
  *
  * The codebase's opaque-type enum pattern (`graphics/painter/enums.scala`) — a
  * Scala `enum` compiles to a class hierarchy plus `$values`/`ordinal`
  * machinery, which is JS-bundle weight for something that wants to be a
  * constant. The library's opaque enums alias `String` because their values
  * cross into WebGPU; this one never leaves Scala and is only ever used to flip
  * an edge normal, so it aliases `Double` and *is* that sign — no branch.
  */
opaque type Facing = Double
object Facing:
  /** The room is inside this loop — the outer boundary. */
  val Inward: Facing = 1.0

  /** The room is outside it — anything standing in the room: an O-shape's inner
    * box, a free-standing partition, a column, a plinth.
    */
  val Outward: Facing = -1.0
  extension (f: Facing) inline def sign: Double = f

/** One closed loop of the floor plan, in XZ. No repeated last point.
  *
  * **WINDING DOES NOT MATTER.** Order the points clockwise or counter-clockwise
  * as you please; `facing` says which side the room is on and that is the whole
  * of it. `Boundary.ringEdges` normalizes the winding away (one shoelace pass
  * per ring — see there), so a ring wound "backwards" produces byte-identical
  * geometry, just visited in the other order.
  *
  * That freedom is deliberate and is worth keeping: point order is what fixes
  * EDGE ORDER, and therefore wall index. An O-shaped room whose outer and inner
  * rings are wound the same way has wall `i` of one facing wall `i` of the
  * other, which is what lets curation address opposing walls by index. If
  * winding also decided normal direction, you could not have both.
  *
  * `height` is what makes a free-standing wall a filtering question rather than
  * a restructuring one: a partition is an `Outward` ring that stops below the
  * ceiling, an O-shape's inner box is the same thing at full height. Nothing in
  * this template uses either yet — that is the point of carrying them now.
  */
case class Ring(
    points: Arr[Vec2], // XZ; `.x` is world X, `.y` is world Z
    facing: Facing,
    height: Double,
)

/** The shape the room occupies in XZ — walls come from its edges, floor and
  * ceiling from its area, the camera is confined by it.
  *
  * A footprint is two-dimensional, so it carries no height: room height belongs
  * to the room being built and is passed where it is needed. `Ring.height`
  * stays, because a ring genuinely does extrude to one.
  */
case class Footprint(rings: Arr[Ring]) // rings(0) is the Inward outer boundary

/** One boundary segment `a → b` in XZ, with the room-side normal already
  * resolved from its ring's facing.
  */
case class Edge(a: Vec2, b: Vec2, inwardNormal: Vec2)

/** Rotate a 2D direction 90°. `perp(dir)` points into a counter-clockwise loop
  * and out of a clockwise one, which is exactly the winding dependence that
  * `Boundary.ringEdges` cancels before handing out a normal.
  */
inline def perp(d: Vec2): Vec2 = Vec2(-d.y, d.x)

/** A set of edges forming one or more CLOSED loops — never an arbitrary bag of
  * segments.
  *
  * This earns a type rather than an extension on `Arr[Edge]` because two of the
  * queries below depend on the invariant SILENTLY. `contains` counts ray
  * crossings, so an unclosed loop gives an arbitrary answer and a duplicated
  * edge flips the parity twice and inverts it; `cornerDist` reads only each
  * edge's `a`, and only finds every vertex because the edges are loops. Order,
  * by contrast, is irrelevant to all of them — so this is a SET of loops, not a
  * path, and the concatenation of two boundaries is again a boundary. That is
  * what lets an inner ring join the outer one with no special casing anywhere.
  *
  * A wrapper class with a PRIVATE constructor, not an opaque type over
  * `Arr[Edge]`: an opaque alias is transparent inside its own file, so here —
  * where the whole room is one file — it would enforce nothing at all. The cost
  * is one allocation per boundary at build time, and `.edges` is a field read.
  *
  * Rings are the ONLY source of edges, so there is no way to reach a loose
  * `Arr[Edge]` except by taking `.edges` off something already valid.
  */
class Boundary private (val edges: Arr[Edge])

object Boundary:
  /** One ring is one closed loop, so it is a boundary on its own. */
  def apply(r: Ring): Boundary = new Boundary(ringEdges(r))

  /** Many rings — the concatenation of boundaries is again a boundary. */
  def apply(rings: Arr[Ring]): Boundary =
    val out = Arr[Edge]()
    var i = 0
    while i < rings.length do
      val es = ringEdges(rings(i))
      var j = 0
      while j < es.length do
        out.push(es(j))
        j += 1
      i += 1
    new Boundary(out)

  /** Twice the SIGNED area of the loop — the shoelace formula, `Σ pᵢ × pᵢ₊₁`.
    * Positive when the points wind counter-clockwise in (x, z), negative when
    * clockwise. Only the sign is used, so the `/2` is skipped.
    *
    * Each term is twice the signed area of the triangle `(origin, pᵢ, pᵢ₊₁)`;
    * summed around the loop the wedges outside the polygon cancel and the
    * polygon's own area is left. Correct for concave plans (an L, a notch) as
    * well as convex ones. Undefined only for a self-intersecting loop, which
    * has no inside to speak of either.
    */
  private def signedArea2(ps: Arr[Vec2]): Double =
    val n = ps.length
    var acc = 0.0
    var i = 0
    while i < n do
      val a = ps(i)
      val b = ps(if i + 1 == n then 0 else i + 1)
      acc += a.x * b.y - b.x * a.y
      i += 1
    acc

  /** The ring's segments, each with its room-side normal already resolved.
    *
    * **This is where winding stops mattering.** `perp(dir)` alone points into a
    * counter-clockwise loop and out of a clockwise one, so on its own it would
    * make `Facing` a claim about point order rather than about the room.
    * Multiplying by the sign of the loop's signed area cancels that: reversing
    * the points flips `perp(dir)` AND flips the area sign, so their product is
    * invariant and `facing` alone decides the direction.
    *
    * One shoelace pass per ring, at build time — four multiply-subtract-adds
    * for the rectangle below.
    */
  private def ringEdges(r: Ring): Arr[Edge] =
    val n = r.points.length
    val s =
      r.facing.sign * (if signedArea2(r.points) < 0.0 then -1.0 else 1.0)
    val out = Arr[Edge]()
    var i = 0
    while i < n do
      val a = r.points(i)
      val b = r.points(if i + 1 == n then 0 else i + 1)
      val dx = b.x - a.x
      val dz = b.y - a.y
      val len = (dx * dx + dz * dz).sqrt
      out.push(Edge(a, b, Vec2(-dz / len * s, dx / len * s)))
      i += 1
    out

extension (r: Ring)
  /** The ring as its own boundary — walls, and anything else that treats one
    * loop in isolation.
    */
  def boundary: Boundary = Boundary(r)

extension (fp: Footprint)
  /** Everything meets the floor — full-height walls and partitions alike. */
  def floorBoundary: Boundary = Boundary(fp.rings)

  /** Only what reaches the ceiling bounds it. A partition is filtered out here,
    * which is the whole of why the grid runs over it uninterrupted.
    *
    * Height is a stand-in for the real predicate — what BOUNDS the ceiling is
    * not the same as what reaches it, and a column reaches it without
    * interrupting the raster. When a room needs that distinction, replace this
    * with an explicit `boundsCeiling` flag on `Ring`.
    */
  def ceilingBoundary(roomHeight: Double): Boundary =
    val rs = Arr[Ring]()
    var i = 0
    while i < fp.rings.length do
      val r = fp.rings(i)
      if r.height >= roomHeight then rs.push(r)
      i += 1
    Boundary(rs)

  /** Axis-aligned bounds of the whole plan: `(minX, minZ, maxX, maxZ)`. */
  def bounds: (minX: Double, minZ: Double, maxX: Double, maxZ: Double) =
    var minX = Double.PositiveInfinity
    var minZ = Double.PositiveInfinity
    var maxX = Double.NegativeInfinity
    var maxZ = Double.NegativeInfinity
    var i = 0
    while i < fp.rings.length do
      val ps = fp.rings(i).points
      var j = 0
      while j < ps.length do
        val p = ps(j)
        if p.x < minX then minX = p.x
        if p.x > maxX then maxX = p.x
        if p.y < minZ then minZ = p.y
        if p.y > maxZ then maxZ = p.y
        j += 1
      i += 1
    (minX = minX, minZ = minZ, maxX = maxX, maxZ = maxZ)

// ---------------------------------------------------------------------------
// Camera confinement — CPU queries over the same ring data.
//
// These run PER FRAME, which is why they are `while` loops over `Arr` with no
// allocation in the hot path, unlike the build-time shader emitters above that
// may stay readable. The shader version unrolls into WGSL at build time and
// cannot be reused at runtime, so this small CPU implementation lives beside
// it — same ring data, two shapes of code.
// ---------------------------------------------------------------------------

extension (bnd: Boundary)
  /** Closest point on any edge to `pxz`, its distance, and the inward normal of
    * the edge it landed on. Same segment projection as the shader's `segDist`,
    * but returning the point.
    */
  def nearest(pxz: Vec2): (point: Vec2, dist: Double, inward: Vec2) =
    val edges = bnd.edges
    var bestD = Double.PositiveInfinity
    var qx = 0.0
    var qz = 0.0
    var nx = 0.0
    var nz = 0.0
    var i = 0
    while i < edges.length do
      val e = edges(i)
      val ex = e.b.x - e.a.x
      val ez = e.b.y - e.a.y
      var t =
        ((pxz.x - e.a.x) * ex + (pxz.y - e.a.y) * ez) / (ex * ex + ez * ez)
      if t < 0.0 then t = 0.0
      else if t > 1.0 then t = 1.0
      val cx = e.a.x + ex * t
      val cz = e.a.y + ez * t
      val dx = pxz.x - cx
      val dz = pxz.y - cz
      val d = (dx * dx + dz * dz).sqrt
      if d < bestD then
        bestD = d
        qx = cx
        qz = cz
        nx = e.inwardNormal.x
        nz = e.inwardNormal.y
      i += 1
    (point = Vec2(qx, qz), dist = bestD, inward = Vec2(nx, nz))

  /** Even-odd ray crossing over every edge — hence the closed-loop invariant.
    * Inner rings need no special casing: their edges flip the parity, so the
    * interior of an O-shape's inner box, or of a partition, correctly counts as
    * OUTSIDE the room.
    */
  def contains(pxz: Vec2): Boolean =
    val edges = bnd.edges
    var inside = false
    var i = 0
    while i < edges.length do
      val a = edges(i).a
      val b = edges(i).b
      if (a.y > pxz.y) != (b.y > pxz.y) then
        val t = (pxz.y - a.y) / (b.y - a.y)
        if pxz.x < a.x + t * (b.x - a.x) then inside = !inside
      i += 1
    inside

  /** One clamp pass: push `pxz` to `margin` from the single NEAREST edge.
    *
    * A POSITION clamp, not a movement veto — and that is what makes walking
    * diagonally into a wall *slide* along it rather than stick: pushing out
    * along `pxz - q` is a projection onto the margin offset curve, so the
    * component of motion parallel to the wall survives untouched.
    */
  private def confinePass(pxz: Vec2, margin: Double): Vec2 =
    val nb = bnd.nearest(pxz)
    // Recovery path, not the normal one: at 1 m/s and 60 fps a frame moves
    // ~1.7 cm, so with a 0.5 m margin the camera cannot tunnel through in one
    // step. This only matters if it is spawned outside the plan or teleported.
    // The same branch covers landing exactly ON an edge, where the push-out
    // direction below would be a zero vector.
    if !bnd.contains(pxz) || nb.dist < 1e-9 then
      Vec2(nb.point.x + nb.inward.x * margin, nb.point.y + nb.inward.y * margin)
    else if nb.dist < margin then
      val s = margin / nb.dist
      Vec2(
        nb.point.x + (pxz.x - nb.point.x) * s,
        nb.point.y + (pxz.y - nb.point.y) * s,
      )
    else pxz

  /** Clamp a camera position to `margin` meters inside the plan, then pin `y`.
    * Pass `pos.y` as `eyeY` to leave height free.
    *
    * **Two passes, not one.** A single nearest-edge clamp satisfies only the
    * wall it picked, so in a corner where two walls both push, the camera
    * creeps into the wedge — measured at 0.01 m from a wall in the worst case,
    * well inside the 0.1 m near plane. Note this is not an odd-shape problem
    * waiting for an L: a rectangle's four INNER corners are already concave, so
    * the box needs this too.
    *
    * Two passes clear every case and a third changes nothing — it converges for
    * any convex-angle pair. Do not reach for general multi-constraint
    * resolution. (A convex corner, such as the outer face of an O-shape's inner
    * box, needs only one pass: its margin curve is a rounded arc that a single
    * nearest-point clamp already produces correctly.)
    */
  def confine(pos: Vec3, margin: Double, eyeY: Double): Vec3 =
    val once = bnd.confinePass(Vec2(pos.x, pos.z), margin)
    val twice = bnd.confinePass(once, margin)
    Vec3(twice.x, eyeY, twice.y)

// ---------------------------------------------------------------------------
// The ceiling raster.
//
// A FLAT LIST OF BEAM SEGMENTS, not a pair of axis-aligned grids. That is the
// one structural choice here that has to be right up front: a hexagonal room
// wants a TRIANGULAR raster — three families each parallel to one opposite wall
// pair — and a non-snappable plan additionally wants an explicit perimeter beam
// along each wall. Neither is built here, but both must be additive, and both
// are just another producer pushing into the same `Arr[Beam]`.
// ---------------------------------------------------------------------------

/** One beam: an oriented segment in the grid plane. `soffitY` is its underside
  * — carried per beam rather than taken from a room constant so families can be
  * staggered against each other (see `FamilyYStagger`).
  */
case class Beam(
    a: Vec2,
    b: Vec2,
    width: Double,
    height: Double,
    soffitY: Double,
)

/** A family of parallel beams covering the plan. `dir` is the direction the
  * beams run; the family's lines are spaced along its perpendicular, offset by
  * `phase`.
  */
case class BeamFamily(
    dir: Vec2,
    spacing: Double,
    phase: Double,
    width: Double,
)

/** Intersect the infinite line `origin + t·dir` with every edge, sort the hits
  * by `t`, and keep the intervals whose midpoint is inside the plan.
  *
  * Parameterized by a LINE rather than an axis, so it serves field beams at any
  * angle and, later, perimeter beams. Called on an explicit boundary because
  * the raster is bounded only by what reaches the ceiling — using
  * `ceilingBoundary` is what lets the grid run over a free-standing partition
  * uninterrupted, which is the correct read: the grid is a ceiling feature and
  * does not know the partition is there.
  *
  * On a convex plan this returns one interval; on an L, lines crossing the
  * notch return two.
  */
extension (bnd: Boundary)
  def clipLine(origin: Vec2, dir: Vec2): Arr[(from: Double, to: Double)] =
    // Solve `origin + t·dir = a + s·e` per edge, keeping hits with 0 ≤ s ≤ 1.
    //   [dir.x  -e.x] [t]   [a.x - origin.x]
    //   [dir.z  -e.z] [s] = [a.z - origin.z]
    val edges = bnd.edges
    val ts = Arr[Double]()
    var i = 0
    while i < edges.length do
      val e = edges(i)
      val ex = e.b.x - e.a.x
      val ez = e.b.y - e.a.y
      val det = ex * dir.y - ez * dir.x
      // |det| ~ 0 means the line is parallel to this edge: no crossing, and a
      // collinear edge would contribute a degenerate interval either way.
      if det.abs > 1e-12 then
        val rx = e.a.x - origin.x
        val rz = e.a.y - origin.y
        val s = (dir.x * rz - dir.y * rx) / det
        if s >= 0.0 && s <= 1.0 then ts.push((ex * rz - ez * rx) / det)
      i += 1
    val out = Arr[(from: Double, to: Double)]()
    if ts.length < 2 then return out
    // Insertion sort: a handful of hits, and it keeps this free of any Scala
    // collection or comparator plumbing.
    var m = 1
    while m < ts.length do
      val v = ts(m)
      var q = m - 1
      while q >= 0 && ts(q) > v do
        ts(q + 1) = ts(q)
        q -= 1
      ts(q + 1) = v
      m += 1
    var j = 0
    while j < ts.length - 1 do
      val t0 = ts(j)
      val t1 = ts(j + 1)
      val mid = (t0 + t1) * 0.5
      if t1 - t0 > 1e-9
        && bnd.contains(Vec2(origin.x + dir.x * mid, origin.y + dir.y * mid))
      then out.push((from = t0, to = t1))
      j += 1
    out

/** The field raster for one family, clipped to the plan.
  *
  * The offset range is found by projecting every plan vertex onto the family's
  * normal, which works for any direction and any plan — unlike "extent /
  * spacing over the bounding box", which only works for an axis-aligned family.
  */
def familyBeams(
    f: BeamFamily,
    bnd: Boundary,
    height: Double,
    soffitY: Double,
): Arr[Beam] =
  val edges = bnd.edges
  val nx = -f.dir.y
  val nz = f.dir.x
  var minO = Double.PositiveInfinity
  var maxO = Double.NegativeInfinity
  var i = 0
  while i < edges.length do
    val o = edges(i).a.x * nx + edges(i).a.y * nz
    if o < minO then minO = o
    if o > maxO then maxO = o
    i += 1
  val out = Arr[Beam]()
  var k = Math.ceil((minO - f.phase) / f.spacing).toDouble
  val kMax = Math.floor((maxO - f.phase) / f.spacing).toDouble
  while k <= kMax do
    val off = f.phase + k * f.spacing
    val origin = Vec2(nx * off, nz * off)
    val spans = bnd.clipLine(origin, f.dir)
    var s = 0
    while s < spans.length do
      val sp = spans(s)
      out.push(
        Beam(
          a = Vec2(origin.x + f.dir.x * sp.from, origin.y + f.dir.y * sp.from),
          b = Vec2(origin.x + f.dir.x * sp.to, origin.y + f.dir.y * sp.to),
          width = f.width,
          height = height,
          soffitY = soffitY,
        ),
      )
      s += 1
    k += 1.0
  out

/** One wall side: where it sits in the plan, and the frame an exhibition needs
  * in order to hang something on it.
  *
  * Note what is NOT here: no painting list, no `animated` flag, no count. How
  * many pieces hang and where is curation, and lives in the sketch that copies
  * this one — the stage owes a frame and a usable span, not a policy.
  *
  * Note also what is not here: no `Form`. A wall is PLAN DATA, and a `Form` is
  * a GPU resource that only a `Painter` can make — carrying one would mean this
  * whole derivation could not run without a painter, and could not be inspected
  * or tested apart from one. `Beam` above is pure the same way; the form is
  * built at the use site from `wall.quad`.
  */
case class Wall(
    center: Vec3,
    width: Double,
    height: Double,
    inwardNormal: Vec3,
)

type RoomVertex = (position: Vec3, uv: Vec2)

/** Something to hang. `image` is any `Panel` — what is in it is the
  * exhibition's concern, and the stage never looks. `sideStretch` is the
  * front:side texel-density ratio; a thin UV margin wraps each side.
  */
case class PaintingSpec(
    width: Double,
    height: Double,
    depth: Double,
    image: Panel,
    sideStretch: Double = 3.0,
)

/** A piece hung on a wall: the shape to draw, and the wall-local rect its
  * shadow needs.
  *
  * STATIC, deliberately. `canvases` carries `model` / `basePos` / `baseRect` /
  * `rotY` as mutable bindings because its paintings sway; nothing here moves,
  * so nothing here is a binding. Animation comes back when hanging becomes a
  * shared utility with static and animated as two equal cases — see _What this
  * sequence deliberately leaves out_ in the implementation plan.
  */
case class Painting(
    shape: AnyShape,
    shadowRect: Vec4, // UV (centerU, centerV, halfU, halfV)
    shadowFade: Vec2, // per-axis penumbra width, in UV
)

/** The shade a hung piece draws with — one image panel through a model matrix.
  * Built once in `main` (see `paintingShade`) and handed to every `hang`: a
  * shade is a compiled pipeline, so it is created per scene, not per piece.
  */
type PaintingUniforms = (
    vp: VertexUniform[Mat4],
    model: VertexUniform[Mat4],
    samp: FragmentUniform[Sampler],
)
type PaintingPanels = (img: FragmentPanel)
type PaintingShade = Shade[PaintingUniforms, PaintingPanels]

extension (spec: PaintingSpec)
  /** Flat-box geometry for one piece, centered on the local origin, front on
    * `+Z`. The front fills an inset UV rect and the four thin sides wrap the
    * outer margin, so a single image covers the whole box without a second
    * texture or a second draw.
    *
    * Takes the painter rather than closing over one: everything the shape
    * depends on is in the spec, so this stays readable and movable — the only
    * reason it is not pure is that a `Form` is a GPU buffer.
    */
  def form(p: Painter): Form =
    val hw = spec.width / 2.0
    val hh = spec.height / 2.0
    val hd = spec.depth / 2.0
    val mu = (spec.depth / (spec.sideStretch * spec.width)).clamp(0.0, 0.45)
    val mv = (spec.depth / (spec.sideStretch * spec.height)).clamp(0.0, 0.45)

    def v(x: Double, y: Double, z: Double, u: Double, w: Double): RoomVertex =
      (position = Vec3(x, y, z), uv = Vec2(u, w))

    p.form(geometry =
      toBufferedGeometry(
        Mesh(
          Arr(
            // Front (+Z): the inset rect.
            Quad(
              v(-hw, hh, hd, mu, mv),
              v(-hw, -hh, hd, mu, 1.0 - mv),
              v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
              v(hw, hh, hd, 1.0 - mu, mv),
            ),
            // Right (+X): u runs 1-mu → 1.
            Quad(
              v(hw, hh, hd, 1.0 - mu, mv),
              v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
              v(hw, -hh, -hd, 1.0, 1.0 - mv),
              v(hw, hh, -hd, 1.0, mv),
            ),
            // Left (-X): u runs mu → 0.
            Quad(
              v(-hw, hh, hd, mu, mv),
              v(-hw, -hh, hd, mu, 1.0 - mv),
              v(-hw, -hh, -hd, 0.0, 1.0 - mv),
              v(-hw, hh, -hd, 0.0, mv),
            ),
            // Top (+Y): v runs mv → 0.
            Quad(
              v(-hw, hh, hd, mu, mv),
              v(hw, hh, hd, 1.0 - mu, mv),
              v(hw, hh, -hd, 1.0 - mu, 0.0),
              v(-hw, hh, -hd, mu, 0.0),
            ),
            // Bottom (-Y): v runs 1-mv → 1.
            Quad(
              v(-hw, -hh, hd, mu, 1.0 - mv),
              v(hw, -hh, hd, 1.0 - mu, 1.0 - mv),
              v(hw, -hh, -hd, 1.0 - mu, 1.0),
              v(-hw, -hh, -hd, mu, 1.0),
            ),
            // Back (-Z): continuous with the side back edges.
            Quad(
              v(-hw, hh, -hd, 0.0, 0.0),
              v(-hw, -hh, -hd, 0.0, 1.0),
              v(hw, -hh, -hd, 1.0, 1.0),
              v(hw, hh, -hd, 1.0, 0.0),
            ),
          ),
        ),
        MeshBufferType.FaceVertices,
      ),
    )

extension (w: Wall)
  /** The wall's orientation about Y, for anything that needs an angle rather
    * than a normal — a hung piece's model matrix, in practice.
    *
    * Derived, not stored: `inwardNormal` is the one representation of a wall's
    * orientation, and a second copy of the same fact is a thing that can drift
    * out of step with it. Costs one `atan2` per hung piece, at build time.
    */
  def rotY: Double = Math.atan2(w.inwardNormal.x, w.inwardNormal.z)

  /** The wall's quad in world space, UV [0,1] (tl = (0,0), `v` down). */
  def quad: Quad[RoomVertex] =
    // Wall-local horizontal axis (UV.x runs along it); UV.y runs down.
    val right = Up.cross(w.inwardNormal)
    def corner(su: Double, sv: Double, u: Double, v: Double): RoomVertex =
      val pos =
        w.center + right * (su * w.width / 2.0) + Up * (sv * w.height / 2.0)
      (position = pos, uv = Vec2(u, v))
    Quad(
      corner(-1.0, 1.0, 0.0, 0.0),
      corner(-1.0, -1.0, 0.0, 1.0),
      corner(1.0, -1.0, 1.0, 1.0),
      corner(1.0, 1.0, 1.0, 0.0),
    )

/** Hanging is a SEPARATE extension block on `Wall`, deliberately not part of
  * the wall's own block above. A wall knows nothing about paintings; a painting
  * needs a wall. When this cluster is extracted, `hang` goes with the painting
  * module and the wall module stays independent of it — the dependency runs one
  * way, and splitting the blocks here is what keeps it that way.
  */
extension (w: Wall)
  /** Hang a piece on this wall. Both positions are WORLD METERS, not UV:
    * `centerFromLeft` runs along the wall from its left edge as seen from
    * inside, `centerHeight` up from the floor.
    *
    * `shade` is passed in rather than built here because it is a compiled
    * pipeline shared by every piece in the scene; the sampler comes off the
    * painter, which caches it.
    *
    * That parameter is a wart, not a design: the shade is fully generic — it
    * maps the spec's image panel onto the box and nothing else — so a copying
    * sketch has to construct something it should never have to think about. It
    * stays a parameter only because there is nowhere to cache it per painter
    * yet. See _What this sequence deliberately leaves out_ in the plan.
    */
  def hang(
      p: Painter,
      shade: PaintingShade,
      spec: PaintingSpec,
      centerFromLeft: Double,
      centerHeight: Double,
  ): Painting =
    val right = Up.cross(w.inwardNormal)
    val pos = w.center
      + right * (centerFromLeft - w.width / 2.0)
      + Up * (centerHeight - w.height / 2.0)
      // Stand it off the wall by its own half-depth plus a couple of
      // centimeters, so the box never z-fights the wall it hangs on and the
      // shadow has something to be cast by.
      + w.inwardNormal * (spec.depth / 2.0 + 0.02)
    val shape = p
      .shape(spec.form(p), shade, cullMode = CullMode.None)
      .bind(
        "model" := Mat4.fromTranslationRotationScale(
          pos,
          Quat.fromRotationY(w.rotY),
          Vec3(1.0, 1.0, 1.0),
        ),
        "samp" := p.samplerLinear,
        "img" := spec.image,
      )
    Painting(
      shape = shape,
      shadowRect = Vec4(
        centerFromLeft / w.width,
        1.0 - centerHeight / w.height, // wall v runs down
        (spec.width / 2.0) / w.width,
        (spec.height / 2.0) / w.height,
      ),
      // Divided by the wall's own extents so the penumbra is isotropic in
      // WORLD space however wide or tall the wall happens to be.
      shadowFade = Vec2(
        ShadowFadeWorld / w.width,
        ShadowFadeWorld / w.height,
      ),
    )

/** One wall per boundary edge.
  *
  * The wall's top is `topY`, not the room height: with a grid ceiling the
  * perimeter beam takes over the wall plane above `WallTopY`, and a partition
  * stops at its own ring height.
  *
  * Orientation is carried ONCE, as `inwardNormal`. Anything wanting it as an
  * angle — a painting's model matrix, say — takes `atan2(n.x, n.z)` where it
  * needs it, rather than the wall storing a second copy of the same fact that
  * can drift out of step with the first.
  */
def wallsFrom(bnd: Boundary, topY: Double): Arr[Wall] =
  val edges = bnd.edges
  val out = Arr[Wall]()
  var i = 0
  while i < edges.length do
    val e = edges(i)
    val dx = e.b.x - e.a.x
    val dz = e.b.y - e.a.y
    out.push(
      Wall(
        center = Vec3((e.a.x + e.b.x) / 2.0, topY / 2.0, (e.a.y + e.b.y) / 2.0),
        width = (dx * dx + dz * dz).sqrt,
        height = topY,
        inwardNormal = Vec3(e.inwardNormal.x, 0.0, e.inwardNormal.y),
      ),
    )
    i += 1
  out

// ===========================================================================
// CURATION — WHAT HANGS AND WHERE IS NOT THE STAGE'S BUSINESS.
//
// This block and the `curate` call it feeds belong to the sketch that copies
// this template, and are meant to be deleted and rewritten. It is deliberately
// crude: fixed sizes, fixed positions, flat colors. A real exhibition varies
// all of it — and none of that variation needs anything from the room, which is
// the property being demonstrated.
//
// The seam runs both ways, and both are worth re-testing after a change: moving,
// resizing or removing a piece touches only curation, and changing the room's
// shape or grid touches no curation at all.
// ===========================================================================
val PieceWidth = 1.0
val PieceHeight = 1.30
val PieceDepth = 0.08

/** Center height above the floor. One number rather than a per-piece one — a
  * real hang would vary it.
  */
val PieceCenterHeight = 1.55

/** Where pieces sit, as a fraction of the wall's width from its left edge. Two
  * per wall at thirds — the minimal curatorial decision, and one a copying
  * sketch changes by editing this one line. Being relative, it holds on walls
  * of any length; the overhang check in `curate` still applies for walls too
  * short to take a piece at all.
  */
val PieceSpotFractions = Arr(1.0 / 3.0, 2.0 / 3.0)

/** Flat fills standing in for artwork — one per piece, in hang order, so the
  * hue wheel circles the room once. Deliberately crude RGB (0, 0.5, 1): these
  * stand in for images, and nothing here should read as a chosen palette.
  */
val PieceColors = Arr(
  Vec3(0.4, 0.0, 0.0),
  Vec3(0.95, 0.45, 0.95),
  Vec3(0.0, 0.0, 0.4),
  Vec3(0.45, 0.95, 0.95),
  Vec3(0.0, 0.4, 0.0),
  Vec3(0.95, 0.95, 0.45),
  Vec3(0.97, 0.97, 0.97),
  Vec3(0.03, 0.03, 0.03),
)

@main def roomsGridCanvases(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    val sampler = p.samplerLinear

    val cam = PerspectiveCamera(
      fov = 0.9,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, EyeHeight, 0.0),
    )
    devPreserve(cam)

    // -----------------------------------------------------------------------
    // The floor plan
    // -----------------------------------------------------------------------

    // A rectangle: (-x,-z) → (+x,-z) → (+x,+z) → (-x,+z). The order is free —
    // `Facing.Inward` says the room is inside the loop and that settles the
    // normals whichever way round the points run (see `Ring`). What the order
    // DOES fix is which wall is wall 0, 1, 2, 3.
    //
    // THIS IS THE ONLY PLACE THE ROOM SHAPE IS DECIDED. An L is a 6-point ring
    // here and nothing else; a hexagon is a 6-point ring at 60°. Everything
    // below derives from these points.
    val hw = RoomWidth / 2.0
    val hd = RoomDepth / 2.0
    val footprint = Footprint(
      Arr(
        Ring(
          points = Arr(
            Vec2(-hw, -hd),
            Vec2(hw, -hd),
            Vec2(hw, hd),
            Vec2(-hw, hd),
          ),
          facing = Facing.Inward,
          height = RoomHeight,
        ),
      ),
    )

    val floorBnd = footprint.floorBoundary
    val ceilBnd = footprint.ceilingBoundary(RoomHeight)
    val bb = footprint.bounds
    val bbW = bb.maxX - bb.minX
    val bbD = bb.maxZ - bb.minZ

    // -----------------------------------------------------------------------
    // Geometry
    // -----------------------------------------------------------------------

    def vert(c: Vec3, u: Double, v: Double): RoomVertex =
      (position = c, uv = Vec2(u, v))

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    /** Floor and ceiling are the plan's BOUNDING-BOX quad, not the plan polygon
      * — there is no triangulation anywhere in this design. On an L-shaped plan
      * the floor is still a plain rectangle covering the cut-out too, and that
      * is fine: every ring edge carries an opaque full-height wall, so the
      * region outside the plan is never visible, and the camera cannot reach
      * it. The grime line and the noise fade come from `edgeSetDist` against
      * the ring edges, not from the mesh, so they follow the true plan boundary
      * regardless of how far the quad extends past it.
      *
      * UV is the quad's own [0,1]²: `u` along +X, `v` along -Z. This matches
      * the frame the texture size is derived from, so texel density is uniform.
      */
    def planeQuad(
        y: Double,
        faceUp: Boolean,
        margin: Double = 0.0,
    ): Quad[RoomVertex] =
      val x0 = bb.minX - margin
      val x1 = bb.maxX + margin
      val z0 = bb.minZ - margin
      val z1 = bb.maxZ + margin
      val w = x1 - x0
      val d = z1 - z0
      def c(x: Double, z: Double): RoomVertex =
        vert(Vec3(x, y, z), (x - x0) / w, (z1 - z) / d)
      if faceUp then Quad(c(x0, z0), c(x0, z1), c(x1, z1), c(x1, z0))
      else Quad(c(x0, z1), c(x0, z0), c(x1, z0), c(x1, z1))

    val floorForm = form(Arr(planeQuad(0.0, faceUp = false)))

    // The luminous plane, overhanging the plan on every side. There is no
    // ceiling surface at `CeilY` any more — the raster (A5) will occupy that
    // line, and until it exists the coffer is simply open. Expect this step to
    // look wrong; that is what makes the occlusion legible when it lands.
    val lightForm =
      form(Arr(planeQuad(LightY, faceUp = true, margin = LightOverhang)))

    val walls = wallsFrom(floorBnd, WallTopY)

    // ----- The raster ------------------------------------------------------
    //
    // Two families at 90°. A hexagon calls this three times at 60° — that is
    // the whole difference, data rather than new code.
    //
    // `phase = 0` with the lattice-derived room puts the outermost centerline
    // at k·GridSpacing and its outer face exactly on the wall plane, so each
    // wall's perimeter beam falls out for free.
    val families = Arr(
      BeamFamily(Vec2(1.0, 0.0), GridSpacing, 0.0, StripWidth),
      BeamFamily(Vec2(0.0, 1.0), GridSpacing, 0.0, StripWidth),
    )
    val beams = Arr[Beam]()
    for i <- 0 until families.length do
      // Each family's soffit is dropped a hair below the previous one. Beams
      // INTERPENETRATING at a crossing is fine — the depth buffer resolves
      // overlapping volumes — but their SOFFITS are coplanar there, and a depth
      // buffer cannot resolve coplanar faces: they z-fight. So separate them.
      //
      // 0.6 mm is ~0.2 px at eye distance, far below what is visible, while
      // being ~80× the depth buffer's resolution at that range (~7.5 µm at
      // 3.5 m with near = 0.1, far = 100). The lowest family wins at every
      // crossing, consistently.
      //
      // WHICH family wins is invisible: the bake shades a crossing identically
      // from either side (see `crossing` there). Do not read this as choosing a
      // look — it only spares the depth buffer a decision it cannot make. The
      // two are near-identical rather than identical, though, because they
      // sample different atlas rows, and z-fighting would re-roll that
      // difference per pixel per frame. That is why it stays.
      val bs = familyBeams(
        families(i),
        ceilBnd,
        StripHeight,
        WallTopY - i * FamilyYStagger,
      )
      var j = 0
      while j < bs.length do
        beams.push(bs(j))
        j += 1

    /** Three visible faces per beam — soffit and both sides. No top: with `y`
      * locked to eye height nothing above the raster is ever seen from below,
      * and the floor mirror reflects to below the floor, so it sees undersides
      * too.
      *
      * Built in the beam's OWN frame `(center, dir, perp, Up)` rather than from
      * an axis-aligned box, which is what makes an odd-angle beam no different
      * from an axis-aligned one.
      *
      * UV is one atlas: each beam takes a horizontal row, split into three
      * bands sized in PROPORTION to each face's world width, so texel density
      * is uniform across soffit and sides. `u` runs `[0, length/maxLength]` —
      * normalized, clamp-safe, proportional, and shorter beams simply use less
      * of their row. Do NOT scale `u` by world distance to get that density:
      * this atlas does not tile, so any beam longer than one unit would run `u`
      * past 1 and the clamp sampler would silently pin it at the edge.
      */
    val beamBandWorld = StripWidth + 2.0 * StripHeight
    var maxBeamLen = 0.0
    for b <- beams do
      val l = (b.b - b.a).length
      if l > maxBeamLen then maxBeamLen = l

    val beamFaces = Arr[Quad[RoomVertex]]()
    for i <- 0 until beams.length do
      val b = beams(i)
      val dx = b.b.x - b.a.x
      val dz = b.b.y - b.a.y
      val len = (dx * dx + dz * dz).sqrt
      val dir = Vec3(dx / len, 0.0, dz / len)
      val perp = Vec3(-dir.z, 0.0, dir.x)
      val cx = (b.a.x + b.b.x) / 2.0
      val cz = (b.a.y + b.b.y) / 2.0
      val u1 = len / maxBeamLen
      val rowV0 = i.toDouble / beams.length
      val rowH = 1.0 / beams.length

      def band(fromWorld: Double, thickWorld: Double) =
        (
          v0 = rowV0 + rowH * (fromWorld / beamBandWorld),
          v1 = rowV0 + rowH * ((fromWorld + thickWorld) / beamBandWorld),
        )

      def face(
          w: Double,
          h: Double,
          n: Vec3,
          center: Vec3,
          vb: (v0: Double, v1: Double),
      ): Quad[RoomVertex] =
        // Explicit tangent, not inferred: the soffit's normal is -Y, so the
        // inferring overload would run `u` along world -Z whichever way the
        // beam points, and the atlas band would not run along the beam.
        Quad.fromDimensionsCenter[RoomVertex](w, h, n, dir, center):
          (pos, uv) =>
            (
              position = pos,
              uv = Vec2(uv.x * u1, vb.v0 + uv.y * (vb.v1 - vb.v0)),
            )

      val midY = b.soffitY + b.height / 2.0

      /** A perimeter beam's outer side face is coplanar with the wall and
        * points out of the room, so from inside you only ever see its back at
        * grazing incidence — a thin sliver that samples a high mip level of its
        * atlas row and reads as a dark line along the wall junction. Drop it.
        *
        * The test is general rather than "is this the outermost beam": step a
        * centimeter along the face's outward normal and ask whether that point
        * is still in the plan. Works unchanged for an L's notch walls, a
        * hexagon, and the outer faces of anything standing in the room.
        */
      def facesOutOfPlan(centerXZ: Vec2, n: Vec3): Boolean =
        !ceilBnd.contains(
          Vec2(centerXZ.x + n.x * 0.01, centerXZ.y + n.z * 0.01),
        )

      // THE ROW IS THE CROSS-SECTION, UNROLLED IN ORDER:
      //
      //   0 ─────── StripHeight ── +StripWidth ────────── beamBandWorld
      //   sideA top   arris        soffit      arris       sideB top
      //
      // Getting this order right is not cosmetic. `Quad.fromDimensions` sets
      // `v` from `-(n × tangent)`, and the two side faces have opposite normals
      // — so `perp × dir = +Y` puts sideA's TOP at `uv.y = 0`, while
      // `-perp × dir = -Y` puts sideB's BOTTOM there. The two sides run
      // opposite ways in `v`. Laid out naively as `soffit, sideA, sideB`, both
      // side TOPS end up against the soffit's ends and both arrises land in the
      // middle of the row, so anything measuring position across the section
      // reads the beam inside out — which is exactly what happened.
      //
      // In this order every atlas adjacency is a real geometric adjacency: the
      // two internal boundaries are the two arrises, and the row's outer ends
      // are the two open top edges, which neighbour the next beam's open top
      // edge and share its tint. Nothing bleeds across a seam that isn't there.
      val sideA = Vec2(cx + perp.x * b.width / 2.0, cz + perp.z * b.width / 2.0)
      if !facesOutOfPlan(sideA, perp) then
        beamFaces.push(
          face(
            len,
            b.height,
            perp,
            Vec3(sideA.x, midY, sideA.y),
            band(0.0, StripHeight),
          ),
        )
      beamFaces.push(
        face(
          len,
          b.width,
          -Up,
          Vec3(cx, b.soffitY, cz),
          band(StripHeight, StripWidth),
        ),
      )
      val sideB = Vec2(cx - perp.x * b.width / 2.0, cz - perp.z * b.width / 2.0)
      if !facesOutOfPlan(sideB, -perp) then
        beamFaces.push(
          face(
            len,
            b.height,
            -perp,
            Vec3(sideB.x, midY, sideB.y),
            band(StripHeight + StripWidth, StripHeight),
          ),
        )

    val beamForm = form(beamFaces)

    // -----------------------------------------------------------------------
    // Distance fields over the floor plan — build-time shader expressions.
    //
    // Both unroll over the CPU-known ring data. This only ever runs inside a
    // bake, so the unrolled `min` chain is free and every `a`/`b`/`dot(e,e)`
    // constant-folds. That is why the edge set stays a build-time constant
    // rather than becoming an array uniform.
    //
    // Both take an explicit EDGE SET rather than reaching for the whole
    // footprint: not every surface is bounded by every ring, and passing the
    // set in makes that a call-site decision instead of a rewrite.
    // -----------------------------------------------------------------------

    /** Unsigned distance from an XZ point to the nearest edge in `edges`. All
      * baked geometry lies inside the plan by construction, so no sign is
      * needed — which keeps the winding/crossing machinery of a real polygon
      * SDF out of this entirely. Handles concave corners and inner rings
      * uniformly and for free.
      */
    def edgeSetDist(pxz: Vec2Expr, bnd: Boundary): FloatExpr =
      val edges = bnd.edges
      def segDist(e: Edge): FloatExpr =
        val ex = e.b.x - e.a.x
        val ez = e.b.y - e.a.y
        val eLenSq = ex * ex + ez * ez
        val ev = vec2(Vec2(ex, ez))
        val w = pxz - vec2(e.a)
        val t = (w.dot(ev) / eLenSq).clamp01
        (w - ev * t).length
      var acc = segDist(edges(0))
      var i = 1
      while i < edges.length do
        acc = acc.min(segDist(edges(i)))
        i += 1
      acc

    /** Unsigned distance from an XZ point to the nearest VERTEX in `edges` —
      * the corner columns where two walls meet. This is what a wall surface
      * fades against; the boundary itself is zero everywhere on a wall.
      */
    def cornerDist(pxz: Vec2Expr, bnd: Boundary): FloatExpr =
      val edges = bnd.edges
      def vDist(e: Edge): FloatExpr = (pxz - vec2(e.a)).length
      var acc = vDist(edges(0))
      var i = 1
      while i < edges.length do
        acc = acc.min(vDist(edges(i)))
        i += 1
      acc

    /** Distance from `wp` to the nearest geometry edge, ignoring the boundary
      * the surface itself lies in (a wall never "approaches" its own plane).
      * Adding a large constant on the surface's own axis takes it out of the
      * `min` — the same trick the box version used, now split by whether the
      * surface is horizontal.
      *
      * This feeds the NOISE FADE and nothing else. It is not an occlusion
      * distance: nothing in this room darkens at an edge (see PLAN.md).
      *
      * `topY` is per-surface, so a wall fades against ITS OWN top rim — the
      * ceiling junction for a full-height wall, the open top edge for a
      * partition. Same expression, different constant.
      */
    def edgeDist(
        wp: Vec3Expr,
        normal: Vec3Expr,
        bnd: Boundary,
        topY: FloatExpr,
    ): FloatExpr =
      val Far = 1000.0
      val isHoriz = normal.y.abs // 1 for floor/ceiling, 0 for walls
      val plan = edgeSetDist(wp.xz, bnd) + (1.0 - isHoriz) * Far
      val vert = wp.y.min(topY - wp.y) + isHoriz * Far
      val corner = cornerDist(wp.xz, bnd) + isHoriz * Far
      plan.min(vert).min(corner)

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * AmbienceTexScale).toInt, (h * AmbienceTexScale).toInt)

    val (rfw, rfh) = texSize(bbW, bbD)

    // Floor — tinted noise, with the grime line around the plan boundary.
    val floorTex = TextureBaker.bake(p, floorForm, rfw, rfh): (wp, normal, _) =>
      vec4(
        vec3(FloorTint)
          * roomNoise(wp, normal, edgeDist(wp, normal, floorBnd, CeilY))
          * grime(edgeSetDist(wp.xz, floorBnd), wp),
        1.0,
      )

    // =======================================================================
    // THE LIGHT SHADER — swap this out. Everything else in the ceiling is the
    // room's; this is the exhibition's.
    //
    // An HDR base with a slow undulation in strength. Multiplicative on the
    // base and bounded, so it cannot dip below the bloom threshold or fade
    // toward the overhang however the periods are tuned — the amplitude is the
    // knob, the base is not. It needs no boundary treatment at all because it
    // never fades, which is what keeps it this short.
    //
    // Structure in world meters, not the plane's UV. On a rectangle the two
    // differ only by a constant, so this choice proves nothing here; on an L it
    // does, because the bounding box is not a room. Anything anchored to the
    // plan boundary — an end-cap, a vignette — must use
    // `edgeSetDist(pxz, ceilBnd)` rather than the UV rectangle.
    // =======================================================================
    val (lw, lh) = texSize(bbW + 2.0 * LightOverhang, bbD + 2.0 * LightOverhang)
    val lightTex = TextureBaker.bakeBlock(
      p,
      lightForm,
      lw,
      lh,
      format = TextureFormat.Rgba16Float,
    ): (wp, _, _, color) =>
      val wave = LetFloat("wave")
      Block(
        wave := 1.0 + LightWaveAmount * 0.5 * (
          (wp.x * Tau / LightWaveMetersX).sin
            + (wp.z * Tau / LightWaveMetersZ).sin
        ),
        color := vec4(vec3(LightColor) * wave, 1.0),
      )

    // Raster atlas — THE SAME MATERIAL AS THE WALLS, so it gets the same
    // treatment and not a special one: the same `roomNoise` at world position,
    // the same fade of the normal-varied term at every geometry edge. That is
    // the whole integration story. The beams read as sitting in the ceiling
    // because they are lit like the ceiling and share its noise field.
    //
    // NO JUNCTION DARKENING. Not at beam crossings, not where the raster meets
    // a wall, not in the pockets between beams. Under a large diffuse source
    // above the grid the light reaches into all of it near-equally, and adding
    // occlusion there is the game-engine look this room avoids. (A 60° raster
    // in a hexagon meets in far sharper wedges and might genuinely want it —
    // decide that there, on its own merits, not by inheriting this.)
    //
    // Two things vary across the beam, and neither is an edge effect. Both are
    // driven by one value, `soffitness` below — read that first.
    //   * SOFFIT TINT — downward faces are all you see from eye height, so the
    //     underside of the raster IS the ceiling plane as far as the eye is
    //     concerned and takes `CeilTint`. The sides are vertical like walls and
    //     take the wall tint. The blend between them is drawn, with its own
    //     width (`ArrisSoften`), rather than left to texture filtering.
    //   * the normal-varied noise term is kept on the SIDES and dropped
    //     entirely on the soffits. On the sides it is what makes surfaces at
    //     different orientations read as one material lit from one room, and
    //     fading it at the arrises keeps the thin beam's many hard 90° corners
    //     seam-free. On the soffits it is dropped to continue the wall's own
    //     fade — see the comment at the bottom of the bake.
    // EVERY ROW GETS THE SAME WHOLE NUMBER OF TEXELS. Sizing the atlas as
    // `(rows × bandWorld × scale).toInt` — the obvious way, and what this used
    // to do — leaves a fractional row height, and then each beam's bands sit at
    // a different sub-texel phase. Identical geometry then bleeds differently
    // beam by beam, and because the beams are ordered family by family, the
    // phase splits along family lines: one wall pair shows a line at the
    // junction and the other does not. It also reshuffles whenever a grid
    // constant changes `beams.length`, which is what made it look intermittent.
    //
    // NOT CLAMPED, deliberately — see `BeamCrossTexScale` for the ceiling this
    // can run into and what it looks like when it does.
    val beamRowTexels =
      Math
        .max(1.0, Math.round(beamBandWorld * BeamCrossTexScale).toDouble)
        .toInt
    val baw = (maxBeamLen * AmbienceTexScale).toInt
    val bah = beams.length * beamRowTexels
    // CLEAR TO THE MATERIAL, not to black. An atlas always has texels no face
    // covers — partially-covered ones along every band edge, whole bands whose
    // face was skipped (the perimeter beams' outer sides), and the `u` tail of
    // every beam shorter than the longest. Linear filtering and mip generation
    // pull those back into the faces that DO cover their texels, so at black
    // they bleed out as dark seams along beam edges, worst where a band is only
    // a few texels thick — a soffit here is ~5. Clearing to the material makes
    // the bleed material-colored, and therefore invisible.
    val beamTex = TextureBaker.bake(
      p,
      beamForm,
      baw,
      bah,
      clearColor = (CeilTint.x, CeilTint.y, CeilTint.z, 1.0),
    ): (wp, normal, uv) =>
      // Distance to the nearest edge of the face we are on, in meters.
      //
      // The atlas row IS the beam's unrolled cross-section, so `v` within a row
      // gives the position across it and the band boundaries are exactly the
      // beam's arrises and open top edges. That is why this needs no per-beam
      // frame — one expression serves every beam at any angle, which a
      // world-space formulation could not do without per-beam uniforms, and a
      // single shared atlas bake has none.
      //
      // Only the CROSS-SECTION is faded, not the run: the beam ends abut walls
      // or other beams, and `u` cannot recover the far end because each beam's
      // `u` range differs and the bake is shared. Revisit if ends show a seam.
      //
      // Position across the unrolled cross-section, in meters — see the band
      // layout diagram where the faces are built. The two arrises sit at
      // `StripHeight` and `StripHeight + StripWidth`; `0` and `beamBandWorld`
      // are the two open top edges.
      val across = (uv.y * beams.length).fract * beamBandWorld
      val dEdge = across
        .min((across - StripHeight).abs)
        .min((across - (StripHeight + StripWidth)).abs)
        .min(beamBandWorld - across)

      /** How much of a SOFFIT this point is: 1 across the middle of the soffit
        * band, 0 on the sides, ramping over `ArrisSoften` either side of each
        * arris. This is the one value the whole beam material turns on — it
        * picks the tint AND gates the normal-varied noise.
        *
        * **This blend used to be an accident.** The tint was a hard step
        * (`normal.y.abs`) between two adjacent atlas bands, and what softened
        * it was bilinear filtering bleeding the bright side band into the dark
        * soffit — a soffit is only ~5 texels wide, magnified to ~30 screen px,
        * so one texel of bleed read as a bright line down every beam. That
        * looked good and was worth keeping, but it was uncontrollable: its
        * width was set by texel size, view distance and mip level, so it
        * breathed as you walked. Drawn explicitly it is stable, tunable, and —
        * because the tint is now continuous across the band boundary — there is
        * no step left for the filter to bleed in the first place.
        *
        * The soffit sits in the MIDDLE of the row, so this is a plain distance
        * from its centerline — the row is a cross-section laid out in order,
        * not a wrapped loop.
        */
      val dFromSoffitCenter =
        (across - (StripHeight + StripWidth / 2.0)).abs
      val soffitness = 1.0 - dFromSoffitCenter.smoothstep(
        StripWidth / 2.0 - ArrisSoften,
        StripWidth / 2.0 + ArrisSoften,
      )

      /** The same shape with the ramp moved OUTSIDE the soffit: 1 across the
        * whole soffit band, falling to 0 by `ArrisSoften` up each side.
        *
        * This is what a crossing pulls toward, rather than pulling the entire
        * cross-section. Using `soffitness` alone there would drive the sides —
        * INCLUDING their top edges — to the dark soffit tint, and since the
        * crossing term ramps in over the last `ArrisSoften` of run before a
        * junction, that darkening would show on side faces that are plainly
        * visible. Only the soffit and the arrises immediately beside it need to
        * agree at a crossing; everything further up the side keeps its own
        * tint.
        */
      val nearSoffit = 1.0 - dFromSoffitCenter.smoothstep(
        StripWidth / 2.0,
        StripWidth / 2.0 + ArrisSoften,
      )

      /** 1 where this point lies inside ANOTHER family's beam — i.e. a crossing
        * — 0 along a plain run, smooth between.
        *
        * A point is always inside its own family's strip, so "inside two or
        * more" is exactly "at a crossing", and the test needs no idea which
        * family the fragment belongs to. Each family is a regular set of
        * parallel lines with a known normal, spacing and phase, so the distance
        * to its nearest centerline is one `fract`. Build-time data, so this
        * unrolls to one term per family and constant-folds.
        *
        * The ramp runs from the strip's EDGE outward, not inward. Inward is the
        * obvious-looking choice and is wrong: a point on its own strip's edge
        * would then score 0 for its own family, the sum would never reach 2 at
        * a crossing's corners, and the junction would keep bright edges exactly
        * where they are least wanted. Ramping outward also puts the fade where
        * it belongs — in the last `ArrisSoften` of run before a crossing, so an
        * arris stops being an arris just before it stops existing.
        */
      def insideFamily(f: BeamFamily): FloatExpr =
        val o = wp.x * -f.dir.y + wp.z * f.dir.x
        val d = (((o - f.phase) / f.spacing + 0.5).fract - 0.5).abs * f.spacing
        1.0 - d.smoothstep(f.width / 2.0, f.width / 2.0 + ArrisSoften)
      var overlap = insideFamily(families(0))
      var fi = 1
      while fi < families.length do
        overlap = overlap + insideFamily(families(fi))
        fi += 1
      val crossing = (overlap - 1.0).clamp01

      /** 1 where a beam's outer face is the WALL PLANE rather than open air —
        * the perimeter beams, along their whole length.
        *
        * The same "there is no arris here" case as a crossing, for the same
        * reason: a perimeter beam's outer side face is coplanar with the wall
        * and gets culled, so there is no lighter side face to blend toward.
        * Blending toward one anyway paints a light slot along every wall,
        * exactly where the grid's openings fall everywhere else — so it reads
        * as an opening where the room is solid.
        *
        * It also double-counts a transition that is already handled from the
        * other side: the wall's own bake fades `WallTintLow` → `WallTintHigh`
        * (0.97 → 0.88) over `TopFadeDepth` on its way up, so the wall arrives
        * at `WallTopY` already within 0.02 of `CeilTint`. The two surfaces meet
        * near-continuously on their own; the beam lightening back up to meet
        * the wall undoes that.
        *
        * Keyed on distance to the plan boundary rather than on "is this the
        * outermost beam", for the same reason `facesOutOfPlan` is: it holds
        * unchanged for an L's notch walls, a hexagon, and anything standing in
        * the room. The soffit spans 0 → `StripWidth` from the wall, so this
        * reaches 1 at the outer arris and exactly 0 at the inner one, which
        * keeps its fade — that side really does meet an open face.
        */
      val atWall =
        1.0 - edgeSetDist(wp.xz, ceilBnd).smoothstep(0.0, StripWidth)

      // AT A CROSSING THERE IS NO ARRIS. The perpendicular beam's material sits
      // right where the soffit's edge would be, so an edge transition there
      // depicts an edge that does not exist — and, drawn into the atlas, it is
      // what put two bright lines across every junction. So at a crossing the
      // soffit widens its own treatment out to its full width — uniform tint,
      // no normal-varied noise — and the arrises beside it follow, leaving no
      // step for the filter to find. The junction reads as one flat block,
      // which is what it is. Side faces above the arris are untouched: they are
      // buried inside the crossing anyway, and the term's run-in would
      // otherwise darken them where they ARE visible.
      //
      // A wall does the same thing to a perimeter beam's outer arris, and for
      // the same reason — hence one `max`, not two mechanisms.
      val s = soffitness + (nearSoffit - soffitness) * crossing.max(atWall)

      // The DOWNWARD faces take no normal-varied noise at all — `1 - s` is zero
      // across the soffit. That is a deliberate join with the walls, not a
      // saving: a wall's own `edgeDist` fades this same term to nothing exactly
      // at `WallTopY`, which is the soffit plane, so the term arrives at the
      // ceiling already at zero and stays there across every soffit. One
      // continuous unvaried band from the top of the wall through the raster —
      // the softest available landing for the densest part of the room. The
      // sides keep their character and fade it out at the arris, meeting the
      // soffit's permanent zero from the other direction.
      //
      // Soffits are therefore pure low-frequency world noise. Looking up, bloom
      // off the light plane supplies the variation instead.
      // A side face lifts toward `BeamSideTopTint` as it rises. Keyed on world
      // height rather than on `across`, because that is the quantity that
      // actually means anything here — proximity to the light plane — and it
      // costs nothing: a soffit sits at `WallTopY`, so this is exactly 0 there
      // and the lift touches only the sides. The arris blend is unaffected for
      // the same reason, since it happens where the lift is still ~0.
      val sideLift = ((wp.y - WallTopY) / StripHeight).clamp01
      val sideTint = vec3(WallTintLow).lerp(vec3(BeamSideTopTint), sideLift)
      val tint = sideTint.lerp(vec3(CeilTint), s)

      // The ambience DARKENS — it averages ~0.84 — so the tint above is not the
      // rendered color unless the darkening is lifted with it. Lift it by the
      // same `sideLift`, so a side face arrives at the ceiling line as its tint
      // and nothing less. Zero on the soffit, which keeps its full ambience.
      val ambience = roomNoise(wp, normal, dEdge * (1.0 - s))
      val lit = ambience + (1.0 - ambience) * (sideLift * BeamTopGlow)
      vec4(tint * lit, 1.0)

    /** Wall ambience. ONE baker — and therefore one pipeline — for every wall
      * in the room, whatever its height.
      *
      * `topY` is a per-bake uniform rather than a constant closed over by the
      * shade. Every wall happens to share a top right now, so this changes
      * nothing visually; it matters the moment one does not. A partition
      * stopping below the ceiling, a plinth, a room of pillars at assorted
      * heights would each otherwise need a specialized shade and its own WGSL
      * compile, to express what is properly a uniform buffer write.
      *
      * `topY` cannot be applied afterwards by the runtime shader, either: it
      * changes the distance field itself, which is the entire thing the bake
      * caches. A per-wall TINT would join this same schema — that one could go
      * either way, but once a uniform block exists there is no reason to keep
      * it out and run a second mechanism.
      */
    type WallU = (topY: FragmentUniform[Float])

    val wallBaker = TextureBaker[WallU](p): ctx =>
      val wp = ctx.in.worldPos
      val normal = ctx.in.normal
      val topY = ctx.bindings.topY
      // A broad settling of tone in the top ~0.9 m, anchored to the wall's own
      // top rather than to absolute room coordinates — so a partition's top rim
      // gets the same treatment with no extra code. NOT an edge effect: there
      // is no darkening where the wall meets the ceiling.
      Block(
        ctx.out.color := vec4(
          vec3(WallTintLow).lerp(
            vec3(WallTintHigh),
            (topY - wp.y).smoothstep(TopFadeDepth, 0.0),
          ) * roomNoise(wp, normal, edgeDist(wp, normal, floorBnd, topY))
            * grime(wp.y, wp),
          1.0,
        ),
      )

    // -----------------------------------------------------------------------
    // Scene shades
    // -----------------------------------------------------------------------

    // Wall + ceiling: both are quads textured with a pre-baked panel. Five lines of
    // pass-through — every look decision is on the other side of it, in the panel.
    // A room wanting its own wall artwork writes its own shade sampling two panels
    // at their own resolutions, rather than this one growing a parameter.
    type TexturedUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type TexturedPanels = (tex: FragmentPanel)

    val texturedShade =
      p.shade[BakeVertex, (uv: Vec2), TexturedUniforms, TexturedPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    val paintingShade =
      p.shade[RoomVertex, (uv: Vec2), PaintingUniforms, PaintingPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.position := ctx.bindings.vp * ctx.bindings.model
                * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            ctx.out.color := ctx.textures.img(ctx.in.uv, ctx.bindings.samp)

    // -----------------------------------------------------------------------
    // Hanging — the wall composite, and the pieces themselves.
    //
    // The wall texture is built in ONE panel: a copy layer lays down the
    // ambience bake, then one multiplicatively-blended shadow instance per
    // piece darkens its rect on top. Overlapping shadows compound exactly as a
    // stacked chain would, via fixed-function blending — no ping-pong, no
    // per-pass full-texture read/write, and no cap on how many hang.
    // -----------------------------------------------------------------------

    // Copy layer — write the pre-baked ambience into the composite target.
    type CopyU = (samp: Sampler)
    type CopyP = (tex: FragmentPanel)
    val copyShade = p.layerShade[CopyU, CopyP]: program =>
      program.frag: ctx =>
        ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    // One shadow — a per-pixel darkening factor. Under `BlendState.Multiply`
    // (color = dst·src) each instance multiplies what is already there.
    type ShadowU = (rect: Vec4, fade: Vec2, strength: Float)
    val shadowShade = p.layerShade[ShadowU]: program =>
      program.frag: ctx =>
        val sm = LetFloat("sm")
        Block(
          sm := shadowMask(ctx.in.uv, ctx.bindings.rect, ctx.bindings.fade),
          ctx.out.color :=
            vec4(vec3(1.0 - ctx.bindings.strength * sm), 1.0),
        )

    /** The ambience bake for one wall. Split out from the composite because a
      * wall with nothing on it wants exactly this and no second panel.
      */
    def wallAmbience(wallForm: Form, wall: Wall, w: Int, h: Int): Panel =
      val bake = wallBaker.prepare(wallForm, w, h)
      bake.shape.bind("topY" := wall.height)
      p.paint(bake.panel)
      bake.panel

    /** Ambience with every piece's shadow composited over it.
      *
      * A wall binds A PANEL, whatever produced it — which is the whole seam.
      * Going from the bare bake to this one is a change at the producer and
      * nothing at all at the shade, and a wall with no pieces skips the second
      * panel entirely rather than paying for an empty pass.
      */
    def compositeWallTex(
        wallForm: Form,
        wall: Wall,
        pieces: Arr[Painting],
    ): Panel =
      val (w, h) = texSize(wall.width, wall.height)
      val ambience = wallAmbience(wallForm, wall, w, h)
      if pieces.length == 0 then ambience
      else
        val copy = p
          .layer(copyShade)
          .bind("samp" := sampler, "tex" := ambience)
        val shadow = p
          .layer(shadowShade, blendState = BlendState.Multiply)
          .bind("strength" := ShadowStrength)
        for piece <- pieces do
          shadow.instances.add(
            "rect" := piece.shadowRect,
            "fade" := piece.shadowFade,
          )
        val panel =
          p.panel(
            width = w,
            height = h,
            mips = true,
            layers = Arr(copy, shadow),
          )
        p.paint(panel)
        panel

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

    val pieceImages = PieceColors.map(flatPanel)

    def curate(wall: Wall, wallIndex: Int): Arr[Painting] =
      val out = Arr[Painting]()
      for i <- 0 until PieceSpotFractions.length do
        val at = wall.width * PieceSpotFractions(i)
        // Skip rather than squeeze: a spot that would overhang is not a spot.
        if at + PieceWidth / 2.0 <= wall.width then
          out.push(
            wall.hang(
              p,
              paintingShade,
              PaintingSpec(
                width = PieceWidth,
                height = PieceHeight,
                depth = PieceDepth,
                // Walls run around the ring and `centerFromLeft` runs rightward
                // as seen from inside, so this index circles the room.
                image = pieceImages(
                  (wallIndex * PieceSpotFractions.length + i) % pieceImages.length,
                ),
              ),
              centerFromLeft = at,
              centerHeight = PieceCenterHeight,
            ),
          )
      out

    // ----- end of curation -------------------------------------------------

    // -----------------------------------------------------------------------
    // Scene assembly
    // -----------------------------------------------------------------------

    val lightShape = p
      .shape(lightForm, texturedShade, cullMode = CullMode.None)
      .bind("samp" := sampler, "tex" := lightTex)

    val beamShape = p
      .shape(beamForm, texturedShade, cullMode = CullMode.None)
      .bind("samp" := sampler, "tex" := beamTex)

    // All above-ground scene shapes — these also feed the floor mirror. The
    // raster reflected in the floor is a large part of the payoff, so both it
    // and the light plane belong in here from the start.
    val aboveGround = Arr[AnyShape](lightShape, beamShape)
    for i <- 0 until walls.length do
      val wall = walls(i)
      val wallForm = form(Arr(wall.quad))
      // Curation decides what hangs; the wall only needs to know the rects, and
      // only so it can darken under them. Swap `curate` for anything at all and
      // nothing below this line changes.
      val pieces = curate(wall, i)
      aboveGround.push(
        p.shape(wallForm, texturedShade, cullMode = CullMode.None)
          .bind(
            "samp" := sampler,
            "tex" := compositeWallTex(wallForm, wall, pieces),
          ),
      )
      // The pieces go into `aboveGround` too, so the floor mirror reflects them
      // along with everything else. Nothing about them is special-cased there.
      for piece <- pieces do aboveGround.push(piece.shape)

    val wallColor = Vec4(0.90, 0.90, 0.90, 0.0)

    val mirror = GaussianMirrorReflection(
      p,
      cam,
      shapes = aboveGround,
      vpName = "vp",
      // The tallest thing the mirror reflects is now the light plane, not the
      // ceiling line — the alpha ramp has to reach that far or the reflection
      // saturates before it gets there.
      alphaScale = LightY,
      blurStrength = 5.0,
      blurRatioVertical = 3.0,
      clearColor = wallColor,
    )

    // Canvas size in physical pixels — the floor turns its `fragCoord` into a
    // screen uv with it, because the reflection panel is sub-resolution and no
    // longer matches the scene's pixel grid 1:1.
    val canvasRes = p.binding[Vec2]

    val reflStrength = 0.25

    type FloorUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        res: FragmentUniform[Vec2],
    )
    type FloorPanels = (tex: FragmentPanel, reflTex: FragmentPanel)

    // The floor already samples two panels at different resolutions and
    // combines them here — the ambience bake and the sub-resolution mirror.
    // A floor material (tiles, marble, wood, an artwork) is a third input to
    // this shade, at its own resolution. Note it would compete with the
    // reflection for the same budget: `reflStrength` is taken directly out of
    // whatever the floor otherwise shows.
    val floorShade =
      p.shade[BakeVertex, (uv: Vec2), FloorUniforms, FloorPanels]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          val base = LetVec3("base")
          val refl = LetVec4("refl")
          val mix = LetFloat("mix")
          val falloff = LetFloat("falloff")
          Block(
            base := ctx.textures
              .tex(ctx.in.uv, ctx.bindings.samp)
              .xyz,
            // UV sample, not a 1:1 load: the reflection panel runs at a
            // fraction of the canvas resolution.
            refl := ctx.textures.reflTex(
              ctx.fragCoord.xy / ctx.bindings.res,
              ctx.bindings.samp,
            ),
            falloff := (1.0 - refl.a * 0.4),
            mix := falloff * reflStrength,
            ctx.out.color := vec4(base * (1.0 - mix) + refl.rgb * mix, 1.0),
          )

    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "samp" := sampler,
        "tex" := floorTex,
        "reflTex" := mirror.resultPanel,
        "res" := canvasRes,
      )

    // HDR scene panel — supplies the scene `vp` to all its shapes.
    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (0.5, 0.6, 0.7, 1.0),
        depthTest = true,
        multisample = true,
        shapes = aboveGround :+ floorShape,
      )
      .bind("vp" := sceneVp)

    // Bloom needs no view-direction gate: the light plane is the only
    // above-threshold surface, and the raster occludes it geometrically from
    // low angles, so the glare emerges as you look up. That stays true whatever
    // the light shader is — it is the geometry doing the gating.
    //
    // `intensity` is the free knob for how strong the glare reads. `LightColor`
    // is NOT: it is capped by the floor re-bloom check (see above). Raised from
    // `canvases`' 0.002 because the emitter dropped from 8.0 to 2.0, cutting
    // the above-threshold excess from 7.0 to 1.0 — tune it by eye from here.
    val bloom = Bloom(
      p,
      scenePanel,
      intensity = 0.0035,
      threshold = 1.0,
      blurRadius = 3.0,
      mipLevels = 5,
      // Soft-clip the HDR before display. Without it the beam silhouettes
      // against the light plane read as a staircase no matter how many MSAA
      // samples are taken: a hard clamp at 1.0 sends every edge sample above
      // ~26 % coverage to pure white, collapsing 4 of MSAA's 5 gradations. The
      // knee sits just above the room's own brightest surface, so nothing in
      // the room shifts; only the emitter and its edges are compressed.
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
        sensitivity = 2.0,
        speed = 1.0,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)
      canvasRes.set(Vec2(w, h))
      mirror.resize(w, h)

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
      // Confinement is a post-move clamp, so the controller needs to know
      // nothing about geometry and no library change is required.
      //
      // `y` is LOCKED to eye height: the shipped experience is a walk on one
      // plane. Space / Shift free-fly survives only as a dev inspection tool,
      // gated on `devMode` (true under the Vite dev server, false in a built
      // sketch) so it cannot ship by accident.
      //
      // This is a geometry decision as much as a camera one — with `y` fixed,
      // nothing above eye height is ever seen from below, and the floor mirror
      // only shows undersides. So AUTHOR FOR THE LOCKED EYE PLANE: a partition
      // taller than 1.7 m needs no top cap. Flying in dev will reveal those
      // gaps, the way noclip reveals a level's backstage. That is expected.
      cam.pos = floorBnd.confine(
        cam.pos,
        margin = WallClearance,
        eyeY = if devMode then cam.pos.y else EyeHeight,
      )
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
