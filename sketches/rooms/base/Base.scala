package sketches.rooms.base

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.dev.*
import trivalibs.graphics.buffers.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
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

// The four walls are baked into a single texture, their UVs laid out end to
// end around the room perimeter (front, right, back, left).
private val WallLength = RoomDepth * 2.0 + RoomWidth * 2.0

// Baked texels per world metre. Texture sizes are derived from the actual
// geometry dimensions × this factor, so texel density is uniform in space.
private val TexScale = 24.0

@main def roomsBase(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // -----------------------------------------------------------------------
    // Room geometry — box face quads → Mesh → triangulated, indexed buffers
    // -----------------------------------------------------------------------
    type RoomVertex = (position: Vec3, uv: Vec2)

    val box =
      Box(Vec3(0.0, RoomHeight / 2.0, 0.0), RoomWidth, RoomHeight, RoomDepth)

    // Each vertex carries its world position (for noise lookup at bake time)
    // and a UV that lays the face out flat within its baked texture. `uvw` is
    // the box-local normalized coordinate in [0,1]^3.
    def vert(c: Vec3, u: Double, v: Double): RoomVertex =
      (position = c, uv = Vec2(u, v))

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(Mesh(faces), MeshBufferType.FaceVertices),
      )

    // Floor / ceiling map directly onto the box's XZ extent.
    val floorForm =
      form(Arr(box.bottomFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    val ceilForm =
      form(Arr(box.topFace((c, uvw) => vert(c, uvw.x, uvw.z))))

    // Walls share one texture: u runs continuously around the perimeter.
    val wallForm = form(
      Arr(
        box.frontFace((c, uvw) =>
          vert(c, uvw.x * RoomWidth / WallLength, uvw.y),
        ),
        box.rightFace((c, uvw) =>
          vert(c, (RoomWidth + uvw.z * RoomDepth) / WallLength, uvw.y),
        ),
        box.backFace((c, uvw) =>
          vert(
            c,
            (RoomWidth + RoomDepth + (1.0 - uvw.x) * RoomWidth) / WallLength,
            uvw.y,
          ),
        ),
        box.leftFace((c, uvw) =>
          vert(
            c,
            (RoomWidth + RoomDepth + RoomWidth + (1.0 - uvw.z) * RoomDepth)
              / WallLength,
            uvw.y,
          ),
        ),
      ),
    )

    // -----------------------------------------------------------------------
    // Pre-render: bake one 3D-noise field across the room geometry. The vertex
    // shader lays each face out flat by its UV (so the result fills the
    // texture), while the fragment samples noise at the real world position —
    // the baked textures therefore look like a single noise volume filling the
    // room. A per-material tint keeps the floor / walls / ceiling identifiable.
    // -----------------------------------------------------------------------

    type NoiseUniforms = (
        scale: Float,
        seed: Vec3,
        tint: Vec3,
        // TEMP debug grid — gridStrength = 0 (floor/ceiling) disables it.
        // Remove together with the grid block in the frag shader once the
        // reflection is dialled in.
        gridCells: Vec2,
        gridStrength: Float,
    )

    val noiseShade =
      p.shade[RoomVertex, (worldPos: Vec3, uv: Vec2), NoiseUniforms]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.worldPos := ctx.in.position,
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := vec4(ctx.in.uv.fit0111, 0.0, 1.0),
          )
        program.frag: ctx =>
          val n = VarFloat("n")
          val col = VarVec3("col")
          val g = LetVec2("g")
          val line = LetFloat("line")
          Block(
            n := Simplex
              .simplexNoise3d(
                ctx.in.worldPos * ctx.bindings.scale + ctx.bindings.seed,
              )
              .fit1101
              .clamp01,
            // Remap noise into a tight near-white band [0.78, 1.0] so the
            // room reads as a gallery space rather than mottled artwork.
            n := 0.78 + n * 0.22,
            col := vec3(n) * ctx.bindings.tint,
            // TEMP debug grid (zero contribution when gridStrength == 0).
            g := (ctx.in.uv * ctx.bindings.gridCells).fract - 0.5,
            line := g.x.abs
              .max(g.y.abs)
              .smoothstep(0.46: FloatExpr, 0.5: FloatExpr),
            col := col * (1.0 - ctx.bindings.gridStrength * line),
            ctx.out.color := vec4(col, 1.0),
          )

    def texSize(w: Double, h: Double): (Int, Int) =
      ((w * TexScale).toInt, (h * TexScale).toInt)

    // Single shared noise field (same frequency + seed) → spatial continuity
    // across faces; only the tint distinguishes the materials.
    val NoiseScale = 0.5f
    val NoiseSeed = Vec3(140, 140, 140)
    val NoGrid = Vec2(1.0, 1.0)

    def noiseTex(
        form: Form,
        size: (Int, Int),
        tint: Vec3,
        gridCells: Vec2 = NoGrid,
        gridStrength: Double = 0.0,
    ): Panel =
      val shape = p
        .shape(form, noiseShade, cullMode = CullMode.None)
        .bind(
          "scale" := NoiseScale,
          "seed" := NoiseSeed,
          "tint" := tint,
          "gridCells" := gridCells,
          "gridStrength" := gridStrength,
        )
      p.panel(width = size._1, height = size._2, mips = true, shape = shape)

    // Gallery tints: walls brightest (lights bounce off them), ceiling darkest
    // (shaded side of the spotlights mounted just below it), floor in between
    // with a slight warm cream.
    val floorTex =
      noiseTex(floorForm, texSize(RoomWidth, RoomDepth), Vec3(0.90, 0.88, 0.85))
    val wallTex =
      noiseTex(
        wallForm,
        texSize(WallLength, RoomHeight),
        Vec3(0.96, 0.96, 0.95),
        // TEMP debug grid on walls: ~1 cell per meter across the perimeter,
        // ~RoomHeight cells vertically. Lets us read perspective/reflection.
        gridCells = Vec2(WallLength, RoomHeight),
        gridStrength = 0.35,
      )
    val ceilTex =
      noiseTex(ceilForm, texSize(RoomWidth, RoomDepth), Vec3(0.78, 0.78, 0.77))

    // -----------------------------------------------------------------------
    // Main shade — sample the baked texture directly (V flipped to undo the
    // render-target → texture orientation, so a fragment reads back its own
    // baked texel).
    // -----------------------------------------------------------------------
    type RoomUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type RoomPanels = (tex: FragmentPanel)

    val roomShade = p.shade[RoomVertex, (uv: Vec2), RoomUniforms, RoomPanels]:
      program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex(
            vec2(ctx.in.uv.x, (1.0: FloatExpr) - ctx.in.uv.y),
            ctx.bindings.samp,
          )

    val mvp = p.binding[Mat4]
    val texSampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    // Inside-out room → culling for inward-facing triangles.
    def roomShape(form: Form, tex: Panel) =
      p.shape(form, roomShade, cullMode = CullMode.Front)
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
      fov = 0.9,
      aspect = canvas.width.toDouble / canvas.height.toDouble,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 1.7, 0.0),
    )

    // Preserve camera pose across live-coding reloads (dev only).
    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(sensitivity = 2.0, speed = 3.0)

    p.onResize: (w, h) =>
      cam(aspect = w.toDouble / h)

    // Pre-render the static material textures once (with mip chains).
    p.paint(floorTex, wallTex, ceilTex)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      mvp.set(cam.viewProjMat)
      p.paint(canvasPanel)
      p.show(canvasPanel)
