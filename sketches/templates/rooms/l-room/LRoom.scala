package sketches.templates.rooms.lroom

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
// TEMPLATE — a walkable exhibition room on a CONCAVE floor plan.
//
// Open it, read it, copy it, tune it. It is meant to be read cold and then
// edited, not maintained as a finished scene; a sketch copied from it is an
// OUTCOME and should be lean and sparsely commented, with the explanatory
// weight left behind here.
//
// THIS IS `grid-canvases` WITH SIX POINTS INSTEAD OF FOUR. Read that one first
// — it carries the full account of the room, the raster, the coffer and the
// hang. Only two things here are genuinely its own:
//
//   1. `snapWall`, which generalizes `grid-canvases`' `snapHalfExtent`. A
//      rectangle centered on the origin can snap by half-extent because its
//      walls come in mirrored pairs; an L has walls facing both ways on both
//      axes, so each plane snaps on its own, and the direction the room lies in
//      has to be said out loud.
//
//   2. **The light shader is anchored in world METERS, and this is the template
//      where that stops being arbitrary.** On a rectangle, UV and meters differ
//      only by a constant. On an L they diverge for a reason you can see: the
//      bounding box is not a room. See the fenced light block.
//
// It enables one situation: a floor plan, an ambient-baked shell, a grid
// ceiling over a recessed light, camera confinement, and walls that accept
// hung pieces.
//
// WHERE TO TOUCH
//   room shape ....... the single `Ring` in `main`. Six points here; a hexagon
//                      is six at 60° (see `hex-partitions`). Nothing else
//                      changes.
//   room size ........ the wanted coordinates passed to `snapWall` — never the
//                      snapped values, which are derived from them.
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
//   STRUCTURAL ....... a pointer. The plan types, the wall and beam geometry,
//                      the camera clamp, the distance fields and the hanging
//                      mechanism all live in `sketchlib.utils.room`
//                      (`src/utils/room/`), shared by every room template —
//                      because none of them makes a look decision.
//   CURATION ......... crude stand-in content. Not a layout to imitate.
//   `main` ........... bakes, shades, scene assembly, camera.
//
// SO WHAT IS LEFT IN THIS FILE IS THE LOOK, and that is the seam worth knowing
// before you edit either side of it. Geometry and behavior are shared because
// they are either right or wrong; the ambience field, the tints, the raster's
// shading, the grime line and the beam profile stay here — duplicated between
// templates on purpose, because each room re-tunes them.
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

/** Snap one wall plane (a signed X or Z coordinate, meters) out to the outer
  * face of the nearest beam. `inwardSign` is +1 if the room lies toward LARGER
  * coordinates from this wall, -1 if toward smaller.
  *
  * `grid-canvases` gets away with a half-extent form because a rectangle
  * centered on the origin has mirrored wall pairs, so one number does both
  * sides. **An L does not.** Its six walls face four different ways, two of
  * them at the notch, and each plane has to land on the correct SIDE of its
  * beam — put a wall on the wrong side and its perimeter beam ends up outside
  * the room, which shows immediately as an opening running into a corner.
  *
  * Beam centerlines sit at `k · GridSpacing`. A wall plane goes half a strip
  * beyond the nearest centerline, on the far side from the room, so the beam at
  * `k · GridSpacing` is the one inside — and that beam IS the perimeter beam.
  * No extra generator, no special-cased geometry. (`hex-partitions` cannot do
  * this and has to generate them; snapping is the free path where it applies.)
  */
def snapWall(wanted: Double, inwardSign: Double): Double =
  val k = Math
    .round((wanted + inwardSign * StripWidth / 2.0) / GridSpacing)
    .toDouble
  k * GridSpacing - inwardSign * StripWidth / 2.0

// The L, in WANTED coordinates. These are what you tune; the snapped values in
// `main` are derived from them and will not usually be what you asked for —
// that is the mechanism working, not a rounding bug.
//
//        WantX0                     WantX1
//   WantZ0 ┌──────────────────────────┐
//          │                          │
//          │                          │
//   WantZm │            WantXm ┌──────┘
//          │                   │
//   WantZ1 └───────────────────┘
//
// The notch is the region beyond `WantXm` and `WantZm`. The concave corner
// where those two walls meet is what this template exists to exercise.
val WantX0 = -5.0 // left wall; the room is to its right
val WantX1 = 5.0 // right wall of the wide leg; the room is to its left
val WantXm = 0.5 // the notch's vertical wall; the room is to its left
val WantZ0 = -5.0 // near wall; the room is beyond it
val WantZm = 0.5 // the notch's horizontal wall; the room is before it
val WantZ1 = 5.0 // far wall of the narrow leg; the room is before it

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
  *
  * On a concave plan the SPAN is the bounding box's, not a leg's, because the
  * bound has to cover the longest sightline that exists — which on an L runs
  * corner to corner across the whole box even though no single leg is that
  * long. Being generous here is free; being short shows as a strip of
  * background at a wall top.
  */
val RoomSpan = (WantX1 - WantX0).max(WantZ1 - WantZ0)

val LightOverhang =
  (LightY - WallTopY) * (RoomSpan - WallClearance)
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
  *
  * ONE RADIUS PER KIND OF EDGE, and **the L is the plan that first needs them
  * apart.** Five of its six vertices wrap toward the visitor and take `corner`,
  * where a wide blend is what stops two walls meeting as a seam. The sixth —
  * the notch's protruding corner — turns away, is seen one face at a time
  * against a silhouette, and takes `arris`: at the `corner` width the same fade
  * reads there as a broad soft band running down the wall instead of a rounded
  * edge. Nothing in the sketch names that vertex; `edgeFade` reads the
  * classification off the boundary (see `EdgeFades` in `sketchlib.utils.room`).
  *
  * `top` is `corner`-wide because a wall stops at `WallTopY` where the
  * perimeter beam continues the plane — its top is not an edge at all, and the
  * wide fade is what hands the term to the raster at zero.
  */
val Fades: EdgeFades = (
  plane = 0.08,
  top = 0.08,
  corner = 0.08,
  arris = 0.03,
)

/** How far the SAME term is faded across a beam's cross-section, which the
  * atlas measures for itself rather than from the plan. Its own constant
  * because the beam is a different scale of object: `Fades.arris` is a rounding
  * on a wall metres across, while a beam's side face is 0.32 m tall.
  */
val BeamEdgeFade = 0.08

/** The floor grime line: dirt collecting where wall meets floor. Its own width,
  * deliberately separate from the fades above — they are unrelated quantities
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

/** The ambience field, given how far the point is from being ON a geometry
  * edge: 0 at an edge, 1 well clear of every one, smooth between.
  *
  * Takes that FACTOR rather than a distance, and derives neither, because what
  * counts as an edge is the caller's business and so is how wide each kind of
  * edge rounds off. `edgeFade`'s vertical term assumes a surface spanning
  * `0 … topY`, true of a wall and false of a ceiling beam hanging in the middle
  * of the room; the beams measure their own cross-section and fade it over
  * `BeamEdgeFade`, reusing everything else here.
  */
def roomNoise(
    wp: Vec3Expr,
    normal: Vec3Expr,
    edge: FloatExpr,
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
  // otherwise meet as a hard seam in the corners. `edge` fades it out at every
  // geometry edge so the edge itself is uniform across all surfaces — this is
  // what makes corners read as slightly rounded.
  //
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
//
// The MECHANISM is `sketchlib.utils.room.Hanging`; these four numbers are the
// look, and they are passed to it in `main`. Reach for them here, not there.
val ShadowFadeWorld = 0.10 // penumbra width, meters
// The MAXIMUM darkening at the center of a shadow. Each piece scales it by its
// own `shadowDim` (see `Hanging.hang`), so this is the ceiling, not a fixed
// value.
val ShadowStrength = 0.44
val ShadowDropMul = 0.25 // downward offset, in penumbra widths
val ShadowBotFadeMul = 2.7 // how much broader the lower falloff is

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

// DISCRETE POOLS OF LIGHT ON THE BEAM LATTICE — and the reason this template
// has a different light shader from `grid-canvases` at all.
//
// **On a concave plan, UV and meters stop being interchangeable.** A UV layout
// says "N features across the plane", and the plane is the plan's BOUNDING BOX
// — a rectangle neither leg of the L fills and no visitor can perceive. The
// count is anchored to a frame that is not there, so the spacing comes out
// different in the two legs and drifts against the raster overhead. A metric
// layout is perceptible everywhere and carries CONTINUOUSLY through the notch.
//
// Worth doing once as a negative control, then throwing away: re-express this
// same layout in `uv` and walk from one leg to the other. The spacing changes
// between the legs and the pools slide out of step with the beams. That is the
// demonstration; on a rectangle it is invisible, which is why A's shader proves
// nothing either way.
//
// This is not an argument against UV. UV means "N features spanning the plane"
// and is right when the count is the point — six halos stay six in any room. It
// is wrong here because the count would be counting a box.
//
// The plan is already snapped to `GridSpacing`, so putting a pool every _k_
// cells makes the light lattice and the raster above it AGREE. That agreement
// is only expressible in world meters, and it reads as deliberate architectural
// alignment rather than as a texture.
//
// It also needs no boundary treatment: discrete pools do not fade at the plan
// edge, and a pool falling outside is occluded by a wall like everything else
// out there.

/** Cells between pools. The pools land on cell CENTERS —
  * `(n·k + ½)·GridSpacing` — which is what puts each one squarely inside a grid
  * opening rather than behind a beam.
  */
val LightPoolEvery = 3

/** Radius of a pool's full-strength core, and the meters of falloff around it.
  * The core stays at `LightColor` and so stays above the bloom threshold; the
  * falloff carries it down to `LightPoolFloor`.
  */
val LightPoolRadius = 0.55
val LightPoolSoften = 0.5

/** What the plane emits BETWEEN pools, as a fraction of `LightColor`.
  *
  * Deliberately below the bloom threshold — `2.0 × 0.42 = 0.84` — so only the
  * pools glare and the field between them reads as a dim luminous ceiling. Do
  * not take it to zero: the plane still has to cover the overhang with
  * something that is plainly not the background, or a shallow sightline at a
  * wall top finds a dark strip and the coffer stops reading as a recess.
  */
val LightPoolFloor = 0.42

// ===========================================================================
// STRUCTURAL — the floor plan and everything derived from it.
//
// All of it now lives in `src/utils/room/` (`sketchlib.utils.room`), shared by
// every template. It is there rather than here because none of it makes a LOOK
// decision: rings, boundaries, wall frames, beam segments, the atlas layout,
// the 2D queries and the distance-field emitters are either right or wrong,
// while everything above in TUNABLES is re-tuned per room and per exhibition.
//
//   Plan.scala      Facing / Ring / Footprint / Edge / Boundary, clipLine
//   Confine.scala   nearest / contains / confine — the camera clamp
//   Walls.scala     Wall, wallsFrom, wall.quad / rotY / pointAt
//   Surfaces.scala  planeQuad — the bounding-box floor / ceiling / light plane
//   Raster.scala    Beam / BeamFamily, familyBeams, perimeterBeams, BeamAtlas
//   Fields.scala    edgeSetDist / cornerDist / edgeFade shader emitters
//   Hanging.scala   PaintingSpec / Painting / Hanging — hang + shadow composite
//
// **Every one of them is a free function over plain data**, and that is load
// bearing rather than stylistic: any single step can be replaced by hand-written
// sketch code without giving up the rest. A room with a raster no generator
// describes builds its own `Arr[Beam]` and keeps the atlas, the bake and the
// shading. If a variation ever seems to need a new flag on a shared type, the
// seam is in the wrong place — substitute your own code there instead.
// ===========================================================================

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
  Vec3(0.03, 0.03, 0.03),
  Vec3(0.97, 0.97, 0.97),
)

/** Per-piece shadow dimming, parallel to `PieceColors`, `1` = full
  * `ShadowStrength`. Set by eye, per dominant color of the piece: a bright
  * canvas throws its shadow against a rim of high contrast and needs it pulled
  * back, while a near-black canvas barely reads a shadow at full strength. The
  * goal is shadows that LOOK equal across the room, which is why the numbers
  * are not.
  */
val PieceShadowDims = Arr(
  0.85, // dark red
  0.5, // light pink
  0.85, // dark blue
  0.55, // light cyan
  0.85, // dark green
  0.5, // light yellow
  1.0, // near black
  0.4, // near white
)

@JSExportTopLevel("sketch")
def roomsLRoom(canvas: HTMLCanvasElement): Unit =
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

    // THIS IS THE ONLY PLACE THE ROOM SHAPE IS DECIDED, and against
    // `grid-canvases` it is the ONLY difference in the whole file bar the light
    // shader: six points instead of four. Walls, floor, ceiling, the raster's
    // clip, the grime line, the noise fade and the camera clamp all follow.
    //
    // Every coordinate is snapped, so every one of the six walls gets a
    // perimeter beam flush with it — including the two at the notch, which is
    // the thing to check first if the raster looks wrong.
    //
    // The order is free: `Facing.Inward` says the room is inside the loop and
    // that settles the normals whichever way round the points run (see `Ring`).
    // What the order DOES fix is which wall is wall 0…5, which is how `curate`
    // below addresses them.
    val x0 = snapWall(WantX0, inwardSign = 1.0)
    val x1 = snapWall(WantX1, inwardSign = -1.0)
    val xm = snapWall(WantXm, inwardSign = -1.0)
    val z0 = snapWall(WantZ0, inwardSign = 1.0)
    val zm = snapWall(WantZm, inwardSign = -1.0)
    val z1 = snapWall(WantZ1, inwardSign = -1.0)
    val footprint = Footprint(
      Arr(
        Ring(
          points = Arr(
            Vec2(x0, z0), // ┐ the wide leg, running the full width
            Vec2(x1, z0), // ┘
            Vec2(x1, zm), // the wide leg's far wall
            Vec2(xm, zm), // the notch's horizontal wall  ┐ the concave
            Vec2(xm, z1), // the notch's vertical wall    ┘ corner is between
            Vec2(x0, z1), // the narrow leg's far wall
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

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    val floorForm = form(Arr(planeQuad(bb, 0.0, faceUp = false)))

    // The luminous plane, overhanging the plan on every side. There is no
    // ceiling surface at `CeilY` — the raster occupies that line.
    val lightForm =
      form(Arr(planeQuad(bb, LightY, faceUp = true, margin = LightOverhang)))

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

    // The faces and the atlas frame they are addressed in. `BeamAtlas` owns the
    // band layout across the beam's cross-section AND the expressions that read
    // it back in the bake, because those two are one fact and drift apart when
    // written separately — see its scaladoc for the band ORDER, which is the
    // subtle part and the one C would otherwise have to rediscover.
    //
    // `ceilBnd` is what a face is tested against: any face pointing out of the
    // plan is dropped, which is what removes the perimeter beams' outer sides.
    val atlas = BeamAtlas(beams, ceilBnd)
    val beamForm = form(atlas.faces)

    // The distance fields this room's bakes are built on — `edgeSetDist` and
    // `edgeFade` — come from `sketchlib.utils.room`. Each unrolls the CPU-known
    // ring data into a `min` chain at build time, which is free inside a bake
    // and constant-folds away, and each takes an explicit BOUNDARY: not every
    // surface is bounded by every ring, and passing it in makes that a
    // call-site decision rather than a rewrite.
    //
    // `edgeFade` also reads each vertex's KIND off the boundary and gives each
    // its own radius from `Fades`. That is what treats the notch's protruding
    // corner differently from the other five, WITHOUT the plan naming it — the
    // six points stay the only place the shape is decided.
    //
    // None of them is an occlusion distance. What this room does with them is a
    // noise fade and a grime line, and it darkens no edge anywhere — see
    // PLAN.md before adding one.

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * AmbienceTexScale).toInt, (h * AmbienceTexScale).toInt)

    val (rfw, rfh) = texSize(bbW, bbD)

    // Floor — tinted noise, with the grime line around the plan boundary.
    val floorTex = TextureBaker.bake(p, floorForm, rfw, rfh): (wp, normal, _) =>
      vec4(
        vec3(FloorTint)
          * roomNoise(wp, normal, edgeFade(wp, normal, floorBnd, CeilY, Fades))
          * grime(edgeSetDist(wp.xz, floorBnd), wp),
        1.0,
      )

    // =======================================================================
    // THE LIGHT SHADER — swap this out. Everything else in the ceiling is the
    // room's; this is the exhibition's.
    //
    // Discrete pools of light on the beam lattice. See the tunables block for
    // why this template's light is anchored in WORLD METERS and what that buys
    // on a concave plan that it does not buy on a rectangle.
    //
    // Anything anchored to the plan BOUNDARY rather than to the lattice — an
    // end-cap, a vignette — must use `edgeSetDist(pxz, ceilBnd)`, not the UV
    // rectangle, for exactly the same reason. This shader needs neither,
    // because pools do not fade at the edge.
    // =======================================================================
    val (lw, lh) = texSize(bbW + 2.0 * LightOverhang, bbD + 2.0 * LightOverhang)
    val poolSpacing = GridSpacing * LightPoolEvery

    /** Distance from `v` to the nearest pool centerline on this axis, in
      * meters. Pool centers sit at `(n·LightPoolEvery + ½)·GridSpacing`, i.e.
      * on CELL centers — half a cell off the beam centerlines, which is what
      * puts a pool inside an opening rather than behind a beam.
      *
      * One `fract`, and it is periodic over the whole plane rather than
      * anchored to any corner of it — which is exactly the property the notch
      * needs. Nothing here knows where the room is.
      */
    def poolAxisDist(v: FloatExpr): FloatExpr =
      val cellCenter = (v - GridSpacing * 0.5) / poolSpacing
      ((cellCenter + 0.5).fract - 0.5).abs * poolSpacing

    val lightTex = TextureBaker.bakeBlock(
      p,
      lightForm,
      lw,
      lh,
      format = TextureFormat.Rgba16Float,
    ): (wp, _, _, color) =>
      val pool = LetFloat("pool")
      Block(
        // Radial, not the product of two axis falloffs: a product gives square
        // pools with soft corners, which read as a checker rather than as
        // lights.
        pool := 1.0 - vec2(poolAxisDist(wp.x), poolAxisDist(wp.z)).length
          .smoothstep(LightPoolRadius, LightPoolRadius + LightPoolSoften),
        color := vec4(
          vec3(LightColor) * lerp(LightPoolFloor, 1.0, pool),
          1.0,
        ),
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
    // Two scales, and every row an exact whole number of texels — `texSize`
    // carries the reasoning for both, including why it is not clamped against
    // the GPU's maximum texture dimension.
    val (baw, bah) = atlas.texSize(AmbienceTexScale, BeamCrossTexScale)
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
      // Distance to the nearest edge of the face we are on, in meters, measured
      // across the cross-section. `atlas` derives it from the same band layout
      // it built the faces with, so the two cannot disagree — read its scaladoc
      // for why that matters and why only the section, never the run, is faded.
      val dEdge = atlas.crossEdgeDist(uv)

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
        * `ArrisSoften` is the room's number, which is why the atlas hands out a
        * DISTANCE and the blend is drawn here: how softly an arris reads is a
        * look decision, and where the arris is, is not.
        */
      val dFromSoffitCenter = atlas.soffitCenterDist(uv)
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
      // saving: a wall's own `edgeFade` fades this same term to nothing exactly
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
      val sideTint = vec3(WallTintLow).lerp(BeamSideTopTint, sideLift)
      val tint = sideTint.lerp(CeilTint, s)

      // The ambience DARKENS — it averages ~0.84 — so the tint above is not the
      // rendered color unless the darkening is lifted with it. Lift it by the
      // same `sideLift`, so a side face arrives at the ceiling line as its tint
      // and nothing less. Zero on the soffit, which keeps its full ambience.
      // The beam measures its own edges across the atlas row, so it fades them
      // here rather than through `edgeFade` — the plan knows nothing about a
      // beam's cross-section, and `BeamEdgeFade` is its own scale of object.
      val ambience =
        roomNoise(wp, normal, (dEdge * (1.0 - s)).smoothstep(0.0, BeamEdgeFade))
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
      // TWO THINGS KEY ON A HEIGHT HERE, AND THEY KEY ON DIFFERENT ONES. Every
      // wall in THIS room shares a top, so the distinction is invisible here —
      // and glaring the moment something shorter than the room stands in it.
      //
      //   the TINT gradient  → `WallTopY`, the ROOM's ceiling line, always
      //   the NOISE edge fade → `topY`, THIS surface's own top rim
      //
      // The gradient is a broad settling of tone approaching the CEILING — it
      // depicts proximity to the ceiling and nothing about the wall carrying
      // it. So it is anchored in absolute room coordinates, and a partition
      // stopping below the room simply never reaches the zone and stays at
      // `WallTintLow` all the way up. Anchoring it to the wall's own top
      // instead gives a short partition its own private ceiling-settling at its
      // rim, which reads as a shadow that nothing casts.
      //
      // The edge fade is the opposite case and correctly stays per-surface: an
      // open top rim IS a geometry edge, and rounding the material off there is
      // what `edgeFade`'s vertical term does. That is the whole reason `topY`
      // is a per-bake uniform.
      //
      // Every wall here reaches `WallTopY`, where the perimeter beam continues
      // the plane, so no top is an open rim and `Fades.top` is the wide value.
      // A room that mixes full-height walls with partitions makes that radius a
      // uniform too, beside `topY` — see `hex-partitions`.
      //
      // Neither is an edge effect in the occlusion sense: nothing darkens where
      // the wall meets the ceiling.
      Block(
        ctx.out.color := vec4(
          vec3(WallTintLow).lerp(
            WallTintHigh,
            (WallTopY - wp.y).smoothstep(TopFadeDepth, 0.0),
          ) * roomNoise(wp, normal, edgeFade(wp, normal, floorBnd, topY, Fades))
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

    // The hanging kit: the piece shade, the shadow layer and the ambience copy
    // layer, compiled once for this painter. The four numbers are the room's —
    // they are up in TUNABLES; the mechanism is not.
    val hanging = Hanging(
      p,
      fadeWorld = ShadowFadeWorld,
      strength = ShadowStrength,
      dropMul = ShadowDropMul,
      botFadeMul = ShadowBotFadeMul,
    )

    // -----------------------------------------------------------------------
    // Hanging — the wall texture, with or without pieces on it.
    // -----------------------------------------------------------------------

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
      * A wall binds A PANEL, WHATEVER PRODUCED IT — which is the whole seam.
      * Going from the bare bake to the composite is a change at the producer
      * and nothing at all at the shade, and a wall with no pieces gets the bake
      * straight back rather than paying for an empty pass.
      */
    def wallTex(wallForm: Form, wall: Wall, pieces: Arr[Painting]): Panel =
      val (w, h) = texSize(wall.width, wall.height)
      hanging.composite(wallAmbience(wallForm, wall, w, h), w, h, pieces)

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
          // Walls run around the ring and `centerFromLeft` runs rightward as
          // seen from inside, so this index circles the room.
          val pick =
            (wallIndex * PieceSpotFractions.length + i) % pieceImages.length
          out.push(
            hanging.hang(
              wall,
              PaintingSpec(
                width = PieceWidth,
                height = PieceHeight,
                depth = PieceDepth,
                image = pieceImages(pick),
              ),
              centerFromLeft = at,
              centerHeight = PieceCenterHeight,
              shadowDim = PieceShadowDims(pick),
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
          .bind("samp" := sampler, "tex" := wallTex(wallForm, wall, pieces)),
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
        sensitivity = 2.5,
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
