package sketches.gradients

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
// Narrow, tall canvases on a free-standing wall in open space, each a
// black-to-white gradient (black at the top) under its own interpolation
// function — a side-by-side comparison rig. All of them start linear.
//
// Adding or removing an entry in `Gradients` is the whole edit: the canvas
// positions and the wall's length follow from it.
// ---------------------------------------------------------------------------

// ===========================================================================
// THE GRADIENTS
// ===========================================================================

/** `t` runs 0 at the TOP of a canvas to 1 at its bottom. */
type Interp = FloatExpr => FloatExpr

val Gradients: Arr[Interp] = Arr(
  t => t,
  t => (t * Pi * 0.5).sin,
  t => t.smoothstep01,
  t => t.smoothstep(0.6, 0.8),
  t => t.step(0.7),
  t => t.pow(2.0),
  t => t.pow(0.5),
  t => t.pow(8.0),
  t => t.pow(0.2),
  t => (t * Tau).sin.fit1101,
  t => (t * Pi).sin,
  t => (t * Tau * 6).sin.fit1101,
)

val GradientBlack = 0.0
// 1.0 is true white; Bloom's tone knee softens the last few percent of it.
val GradientWhite = 1.0

val GradientTexWidth = 4
val GradientTexHeight = 1024

// ---- The canvases, and the wall they size -----------------------------------

val CanvasWidth = 0.85
val CanvasHeight = 3.0
val CanvasCenterHeight = 2.0
val CanvasDepth = 0.06
val CanvasShadowDim = 0.7

/** Clear wall between neighbors, and beyond the outer two. */
val CanvasGap = 1.15
val WallEndMargin = 1.6

def canvasFromLeft(i: Int): Double =
  WallEndMargin + CanvasWidth / 2.0 + i * (CanvasWidth + CanvasGap)

// ===========================================================================
// TUNABLES
// ===========================================================================

// ---- The space -------------------------------------------------------------

val EyeHeight = 1.7
val WallClearance = 0.5
val PlateHalfExtent = 200.0

val FadeStart = 25.0
val FadeEnd = 150.0

val EnvColor = Vec3(1.05, 1.04, 1.14)

val FarPlane = FadeEnd * 1.3

// ---- The wall ---------------------------------------------------------------

val WallThickness = 0.4
val WallHeight = 4.5

val WallLength =
  Gradients.length * CanvasWidth
    + (Gradients.length - 1) * CanvasGap
    + 2.0 * WallEndMargin

// ---- The shared noise volume ------------------------------------------------

val TileWorld = 32.0
val GroundTexScale = 48.0
val AmbienceTexScale = 64.0

def snapScale(wanted: Double): (scale: Double, period: Int) =
  val period = (TileWorld * wanted).round.toInt.max(1)
  (scale = period.toDouble / TileWorld, period = period)

val WorldField = snapScale(0.10)
val OrientField = snapScale(0.15)
val CreepField = snapScale(0.9)
val PatchField = snapScale(2.07)

def warp(wp: Vec3Expr): Vec3Expr =
  vec3(wp.x + wp.y * 0.2, wp.y * 0.3, wp.z + wp.y * 0.25)

def worldNoise(wp: Vec3Expr): FloatExpr =
  Noise.tilingFbm3(
    warp(wp) * WorldField.scale,
    WorldField.period,
    octaves = 4,
    ampMul = 0.28,
    seed = vec3(120),
  )

val OrientSlice = 1.7

def orientNoise(wp: Vec3Expr, normal: Vec3Expr): FloatExpr =
  Noise.tilingFbm3(
    warp(wp) * OrientField.scale + normal * OrientSlice,
    OrientField.period,
    octaves = 3,
    ampMul = 0.3,
    seed = vec3(70),
  )

val AmbienceLow = 0.80
val OrientWeight = 0.3

def ambience(world: FloatExpr, orient: FloatExpr, edge: FloatExpr): FloatExpr =
  lerp(
    AmbienceLow,
    1.0,
    ((world + orient * OrientWeight * edge) / (1.0 + OrientWeight)).fit1101,
  )

val Fades: EdgeFades = (
  plane = 0.08,
  top = 0.03,
  corner = 0.08,
  arris = 0.03,
)

// ---- The grime line ---------------------------------------------------------

val GrimeWidth = 0.06
val GrimeDarken = 0.85
val GrimeCreep = 0.02
val GrimePatchiness = 0.3

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

def grime(dist: FloatExpr, creep: FloatExpr, patch: FloatExpr): FloatExpr =
  val darkest = lerp(GrimeDarken, 1.0, patch * GrimePatchiness)
  lerp(
    darkest,
    1.0,
    (dist + creep.fit0111 * GrimeCreep).smoothstep(0.0, GrimeWidth),
  )

// ---- Surface tints ----------------------------------------------------------

val GroundTint = Vec3(0.82, 0.81, 0.79)
val WallTint = Vec3(0.92, 0.92, 0.91)

// ---- The mirror ground ------------------------------------------------------

val ReflStrength = 0.3

// ---- Drop shadows for hung pieces -------------------------------------------

val ShadowFadeWorld = 0.10
val ShadowStrength = 0.40
val ShadowDropMul = 0.25
val ShadowBotFadeMul = 2.7

// ---- Bloom ------------------------------------------------------------------

val BloomIntensity = 0.004

// ===========================================================================
// STRUCTURAL — `sketchlib.utils.room`, `sketchlib.shaders.Noise`.
// See `sketches/templates/open-space/` for what each piece does and why.
// ===========================================================================

@JSExportTopLevel("sketch")
def gradientWall(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val sampler = p.samplerLinear
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
    // The plan
    // -----------------------------------------------------------------------

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

    val plate = (
      minX = -PlateHalfExtent,
      minZ = -PlateHalfExtent,
      maxX = PlateHalfExtent,
      maxZ = PlateHalfExtent,
    )
    val groundForm = form(Arr(planeQuad(plate, 0.0, faceUp = false)))

    val tileBounds =
      (minX = 0.0, minZ = 0.0, maxX = TileWorld, maxZ = TileWorld)
    val tileForm = form(Arr(planeQuad(tileBounds, 0.0, faceUp = false)))

    // -----------------------------------------------------------------------
    // Bakes
    // -----------------------------------------------------------------------

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * AmbienceTexScale).toInt, (h * AmbienceTexScale).toInt)

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

    val wallBaker = TextureBaker(p): (wp, normal, _, out) =>
      val amb = LetFloat("amb")
      Block(
        amb := ambience(
          worldNoise(wp),
          orientNoise(wp, normal),
          edgeFade(wp, normal, wallBnd, WallHeight, Fades),
        ),
        out := vec4(
          vec3(WallTint)
            * amb
            * grime(wp.y, creepField(wp.xz), patchField(wp.xz)),
          1.0,
        ),
      )

    // -----------------------------------------------------------------------
    // Shades
    // -----------------------------------------------------------------------

    def fadeToEnv(color: Vec3Expr, wp: Vec3Expr, eye: Vec3Expr): Vec3Expr =
      color.lerp(
        vec3(EnvColor),
        (wp - eye).length.smoothstep(FadeStart, FadeEnd),
      )

    val eyePos = p.binding[Vec3]

    type SurfaceUniforms = (
        vp: VertexUniform[Mat4],
        eye: FragmentUniform[Vec3],
        samp: FragmentUniform[Sampler],
    )
    type SurfacePanels = (tex: FragmentPanel)

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

    val canvasRes = p.binding[Vec2]

    type GroundUniforms = (
        vp: VertexUniform[Mat4],
        eye: FragmentUniform[Vec3],
        res: FragmentUniform[Vec2],
        tileSamp: FragmentUniform[Sampler],
        samp: FragmentUniform[Sampler],
    )
    type GroundPanels = (tile: FragmentPanel, reflTex: FragmentPanel)

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
          val reflMix = LetFloat("reflMix")
          Block(
            f := ctx.textures.tile(
              vec2(wp.x, -wp.z) * (1.0 / TileWorld),
              ctx.bindings.tileSamp,
            ),
            dEdge := edgeSetDist(wp.xz, wallBnd),
            base := vec3(GroundTint)
              * lerp(f.y, f.x, dEdge.smoothstep(0.0, Fades.plane))
              * grime(dEdge, f.z, f.w),
            refl := ctx.textures.reflTex(
              ctx.fragCoord.xy / ctx.bindings.res,
              ctx.bindings.samp,
            ),
            reflMix := (1.0 - refl.a * 0.4) * ReflStrength,
            ctx.out.color := vec4(
              fadeToEnv(
                base * (1.0 - reflMix) + refl.rgb * reflMix,
                wp,
                ctx.bindings.eye,
              ),
              1.0,
            ),
          )

    val hanging = Hanging(
      p,
      fadeWorld = ShadowFadeWorld,
      strength = ShadowStrength,
      dropMul = ShadowDropMul,
      botFadeMul = ShadowBotFadeMul,
    )

    def wallTex(wallForm: Form, wall: Wall, pieces: Arr[Painting]): Panel =
      val (w, h) = texSize(wall.width, wall.height)
      hanging.composite(wallBaker(wallForm, w, h), w, h, pieces)

    // -----------------------------------------------------------------------
    // Curation — one gradient canvas per interpolation function
    // -----------------------------------------------------------------------

    // One shade per entry: the function bakes into WGSL, nothing switches at
    // runtime.
    def gradientPanel(interp: Interp): Panel =
      val shade = p.layerShade[EmptyTuple]: program =>
        program.frag: ctx =>
          ctx.out.color := vec4(
            vec3(
              lerp(GradientBlack, GradientWhite, interp(ctx.in.uv.y).clamp01),
            ),
            1.0,
          )
      val panel = p.panel(
        width = GradientTexWidth,
        height = GradientTexHeight,
        layer = p.layer(shade),
      )
      p.paint(panel)
      panel

    val gradientImages = Gradients.map(gradientPanel)

    def curate(wall: Wall): Arr[Painting] =
      val out = Arr[Painting]()
      if isHangingFace(wall) then
        for i <- 0 until Gradients.length do
          out.push(
            hanging.hang(
              wall,
              PaintingSpec(
                width = CanvasWidth,
                height = CanvasHeight,
                depth = CanvasDepth,
                image = gradientImages(i),
              ),
              centerFromLeft = canvasFromLeft(i),
              centerHeight = CanvasCenterHeight,
              shadowDim = CanvasShadowDim,
            ),
          )
      out

    // -----------------------------------------------------------------------
    // Scene assembly
    // -----------------------------------------------------------------------

    val aboveGround = Arr[AnyShape]()
    for i <- 0 until walls.length do
      val wall = walls(i)
      val wallForm = form(Arr(wall.quad))
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

    val mirror = GaussianMirrorReflection(
      p,
      cam,
      shapes = aboveGround,
      vpName = "vp",
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

    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
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
      toneKnee = 0.94,
      toneWhite = 1.2,
    )

    // -----------------------------------------------------------------------
    // Input, controller
    // -----------------------------------------------------------------------

    val input = p.input(dragGlideHalfLife = 90.0, dragGlideMinSpeed = 50.0)
    val controller =
      BasicFirstPersonCameraController(
        cam,
        input,
        sensitivity = 2.5,
        speed = 2.0,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)
      canvasRes.set(Vec2(w, h))
      mirror.resize(w, h)

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
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
