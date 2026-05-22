package sketches.rooms.base

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.bufferdata.*
import trivalibs.graphics.buffers.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.{BasicFirstPersonCameraController, PerspectiveCamera}
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Port of the Rust `rooms/base` sketch: a first-person walkable room. An
// inside-out cuboid (floor / ceiling / four walls) is textured with three
// procedurally pre-rendered noise textures (one per material), sampled with
// mipmaps. Move with WASD / arrows + Space / Shift, look around by dragging.
// ---------------------------------------------------------------------------

private val RoomWidth = 6.5
private val RoomHeight = 5.5
private val RoomDepth = 10.0
private val Tile = 2.5 // metres per texture tile

@main def roomsBase(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Pre-render: fullscreen procedural-noise material textures
    // -----------------------------------------------------------------------
    type NoiseUniforms = (scale: Float, seed: Vec3, tint: Vec3)

    val noiseShade = p.layerShade[NoiseUniforms]: program =>
      program.frag: ctx =>
        val n = LetFloat("n")
        val uv = ctx.in.uv
        Block(
          n := Simplex
            .simplexNoise3d(
              vec3(uv.x * ctx.bindings.scale, uv.y * ctx.bindings.scale, 0.0)
                + ctx.bindings.seed,
            )
            .fit1101,
          ctx.out.color := vec4(vec3(n) * ctx.bindings.tint, 1.0),
        )

    def noiseTex(scale: Float, seed: Vec3, tint: Vec3): Panel =
      val layer = p
        .layer(noiseShade)
        .bind("scale" := scale, "seed" := seed, "tint" := tint)
      p.panel(width = 512, height = 512, mipLevels = 0, layer = layer)

    val floorTex = noiseTex(7.0f, Vec3(11, 23, 5), Vec3(0.55, 0.5, 0.45))
    val wallTex = noiseTex(5.0f, Vec3(40, 7, 19), Vec3(0.6, 0.62, 0.66))
    val ceilTex = noiseTex(6.0f, Vec3(3, 31, 27), Vec3(0.72, 0.74, 0.78))

    // -----------------------------------------------------------------------
    // Room geometry — manual vertex arrays (position + tiled UV per face)
    // -----------------------------------------------------------------------
    type RoomAttribs = (position: Vec3, uv: Vec2)

    val box = Box(Vec3(0.0, RoomHeight / 2.0, 0.0), RoomWidth, RoomHeight, RoomDepth)

    // Triangulate a quad (tl, bl, br, tr) into 6 vertices with a UV per corner.
    // Param typed to the concrete layout `allocateAttribs[RoomAttribs]` yields.
    def writeQuad(
        arr: StructArray[((F32, F32, F32), (F32, F32))],
        off: Int,
        q: Quad[Vec3],
        uvOf: Vec3 => (Double, Double),
    ): Unit =
      val order = Arr(0, 1, 2, 0, 2, 3)
      var k = 0
      while k < 6 do
        val c = q(order(k))
        val uv = uvOf(c)
        arr(off + k).set0(c.x, c.y, c.z)
        arr(off + k).set1(uv._1, uv._2)
        k += 1

    val floorVerts = allocateAttribs[RoomAttribs](6)
    writeQuad(floorVerts, 0, box.bottomFace, c => (c.x / Tile, c.z / Tile))
    val floorForm = p.form(vertices = floorVerts)

    val ceilVerts = allocateAttribs[RoomAttribs](6)
    writeQuad(ceilVerts, 0, box.topFace, c => (c.x / Tile, c.z / Tile))
    val ceilForm = p.form(vertices = ceilVerts)

    val wallVerts = allocateAttribs[RoomAttribs](24)
    writeQuad(wallVerts, 0, box.frontFace, c => (c.x / Tile, c.y / Tile))
    writeQuad(wallVerts, 6, box.backFace, c => (c.x / Tile, c.y / Tile))
    writeQuad(wallVerts, 12, box.leftFace, c => (c.z / Tile, c.y / Tile))
    writeQuad(wallVerts, 18, box.rightFace, c => (c.z / Tile, c.y / Tile))
    val wallForm = p.form(vertices = wallVerts)

    // -----------------------------------------------------------------------
    // Main shade — sample the material texture, tiled (UV wraps via fract)
    // -----------------------------------------------------------------------
    type RoomUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type RoomPanels = (tex: FragmentPanel)

    val roomShade = p.shade[RoomAttribs, (uv: Vec2), RoomUniforms, RoomPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex(ctx.in.uv.fract, ctx.bindings.samp)

    val mvp = p.binding[Mat4]
    val texSampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    // Inside-out room → disable culling so inward-facing triangles are drawn.
    def roomShape(form: Form, tex: Panel) =
      p.shape(form, roomShade, cullMode = CullMode.None)
        .bind("mvp" := mvp, "samp" := texSampler, "tex" := tex)

    val floorShape = roomShape(floorForm, floorTex)
    val ceilShape = roomShape(ceilForm, ceilTex)
    val wallShape = roomShape(wallForm, wallTex)

    val canvasPanel = p.panel(
      clearColor = (0.5, 0.6, 0.7, 1.0),
      depthTest = true,
      multisample = true,
      shapes = Arr(floorShape, ceilShape, wallShape),
    )

    // -----------------------------------------------------------------------
    // Camera, input, controller
    // -----------------------------------------------------------------------
    val cam = PerspectiveCamera(
      fov = 0.6,
      aspect = canvas.width.toDouble / canvas.height.toDouble,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 1.7, 0.0),
    )

    val input = p.input()
    val controller = BasicFirstPersonCameraController(sensitivity = 1.0, speed = 3.0)

    p.onResize: (w, h) =>
      cam(aspect = w.toDouble / h)

    // Pre-render the static material textures once (with mip chains).
    p.paint(floorTex, wallTex, ceilTex)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      mvp.set(cam.viewProjMat)
      p.paint(canvasPanel)
      p.show(canvasPanel)
