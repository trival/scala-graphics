package sketches.rooms.gridceiling

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import trivalibs.dev.*
import trivalibs.graphics.buffers.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.*
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Psrdnoise
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Port of the Rust `rooms/grid_ceiling` sketch: a walkable room enclosed by
// ground, ceiling, and a back wall, with two crossing "grids" of strips
// suspended below the ceiling — rows running along X, columns running along
// Z. Each grid's strips share one baked noise texture: the strips are laid
// out vertically in UV space so a single 3D-noise field covers all of their
// faces continuously. The render pass samples that texture with a grid
// border, exposing the UV inside cells and the texture along the borders.
// ---------------------------------------------------------------------------

private case class GridProps(
    gridWidth: Double,
    gridHeight: Double,
    count: Int,
    stripWidth: Double,
    stripHeight: Double,
    center: Vec3,
)

private case class GridData(faces: Arr[Quad[GridVertex]], texSize: (Double, Double))

private type GridVertex = (position: Vec3, uv: Vec2)

private def gvert(c: Vec3, u: Double, v: Double): GridVertex =
  (position = c, uv = Vec2(u, v))

// Lay strips out vertically into one texture. `vFull` is the total v-extent
// (sum of two strip-side bands + one strip-bottom band per strip), so each
// face writes into its own contiguous v-slice.
private def gridRows(props: GridProps): GridData =
  val step = props.gridHeight / props.count
  val hHalf = props.gridHeight / 2.0 - step
  val count = props.count - 1
  val vFull = count * (props.stripHeight * 2.0 + props.stripWidth)
  val vH = props.stripHeight / vFull
  val vB = props.stripWidth / vFull
  val startPos = props.center - Vec3(0.0, 0.0, hHalf)
  val faces = Arr[Quad[GridVertex]]()
  var vStart = 0.0
  var i = 0
  while i < count do
    val box = Box(
      startPos + Vec3(0.0, 0.0, i * step),
      props.gridWidth,
      props.stripHeight,
      props.stripWidth,
    )
    val s1 = vStart
    faces.push(box.frontFace((c, uvw) => gvert(c, uvw.x, uvw.y * vH + s1)))
    vStart += vH
    val s2 = vStart
    faces.push(box.backFace((c, uvw) => gvert(c, 1.0 - uvw.x, uvw.y * vH + s2)))
    vStart += vH
    val s3 = vStart
    faces.push(box.bottomFace((c, uvw) => gvert(c, uvw.x, uvw.z * vB + s3)))
    vStart += vB
    i += 1
  GridData(faces, (props.gridWidth, vFull))

// Columns run along the X axis (perpendicular to rows). Strip width is along
// X, length along Z; visible faces are left / right / bottom.
private def gridCols(props: GridProps): GridData =
  val step = props.gridWidth / props.count
  val wHalf = props.gridWidth / 2.0 - step
  val count = props.count - 1
  val vFull = count * (props.stripHeight * 2.0 + props.stripWidth)
  val vH = props.stripHeight / vFull
  val vB = props.stripWidth / vFull
  val startPos = props.center - Vec3(wHalf, 0.0, 0.0)
  val faces = Arr[Quad[GridVertex]]()
  var vStart = 0.0
  var i = 0
  while i < count do
    val box = Box(
      startPos + Vec3(i * step, 0.0, 0.0),
      props.stripWidth,
      props.stripHeight,
      props.gridHeight,
    )
    val s1 = vStart
    faces.push(box.leftFace((c, uvw) => gvert(c, 1.0 - uvw.z, uvw.y * vH + s1)))
    vStart += vH
    val s2 = vStart
    faces.push(box.rightFace((c, uvw) => gvert(c, uvw.z, uvw.y * vH + s2)))
    vStart += vH
    val s3 = vStart
    faces.push(box.bottomFace((c, uvw) => gvert(c, uvw.z, uvw.x * vB + s3)))
    vStart += vB
    i += 1
  GridData(faces, (props.gridHeight, vFull))

@main def roomsGridCeiling(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // ------ grid geometry ------

    val gridSize = (20.0, 30.0)
    val gridColCount = 15
    val stripWidth = 0.15
    val stripHeight = 0.8
    val gridCenter = Vec3(0.0, 15.0, 0.0)

    val rowData = gridRows(
      GridProps(
        gridWidth = gridSize._1,
        gridHeight = gridSize._2,
        count = ((gridSize._2 / gridSize._1) * gridColCount).floor.toInt,
        stripWidth = stripWidth,
        stripHeight = stripHeight,
        center = gridCenter,
      ),
    )
    val colData = gridCols(
      GridProps(
        gridWidth = gridSize._1,
        gridHeight = gridSize._2,
        count = gridColCount,
        stripWidth = stripWidth,
        stripHeight = stripHeight,
        center = gridCenter,
      ),
    )

    def meshForm(faces: Arr[Quad[GridVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(Mesh(faces), MeshBufferType.FaceVertices),
      )

    val rowForm = meshForm(rowData.faces)
    val colForm = meshForm(colData.faces)

    // ------ pre-render shade ------
    // Vertex unwraps each face to its baked UV-region; fragment samples a
    // single rotational simplex noise field at the world position, so faces
    // that touch in space stay continuous in the texture.

    val preRenderShade =
      p.shade[GridVertex, (worldPos: Vec3), EmptyTuple]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.worldPos := ctx.in.position,
            ctx.out.position := vec4(ctx.in.uv.fit0111, 0.0, 1.0),
          )
        program.frag: ctx =>
          val n = LetFloat("n")
          Block(
            n := Psrdnoise.rotNoise3d(ctx.in.worldPos, 0.0).x.fit1101 / 2.0,
            ctx.out.color := vec4(vec3(n.pow(2.2)), 1.0),
          )

    val texPxPerUnit = 50.0
    def texSize(d: (Double, Double)): (Int, Int) =
      ((d._1 * texPxPerUnit).toInt, (d._2 * texPxPerUnit).toInt)

    val rowTexSize = texSize(rowData.texSize)
    val colTexSize = texSize(colData.texSize)

    val rowTex = p.panel(
      width = rowTexSize._1,
      height = rowTexSize._2,
      mips = true,
      shape = p.shape(rowForm, preRenderShade, cullMode = CullMode.None),
    )
    val colTex = p.panel(
      width = colTexSize._1,
      height = colTexSize._2,
      mips = true,
      shape = p.shape(colForm, preRenderShade, cullMode = CullMode.None),
    )

    // ------ main render shade ------
    // Standard textured shade: vertex MVP, fragment samples a panel texture
    // with a 40-cell grid pattern. Inside grid cells, paint the raw UV with
    // B = 0.5; on grid borders (uv.x < 0.25 || uv.y < 0.25), paint the
    // baked noise texture sample at the original UV.

    type Attribs = GridVertex
    type Varyings = (uv: Vec2)
    type RUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type RPanels = (tex: FragmentPanel)

    val renderShade = p.shade[Attribs, Varyings, RUniforms, RPanels]: program =>
      program.vert: ctx =>
        Block(
          ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
          ctx.out.uv := ctx.in.uv,
        )
      program.frag: ctx =>
        val uv = LetVec2("uv")
        val col = LetVec3("col")
        Block(
          uv := (ctx.in.uv * 40.0).fract,
          col := select(
            vec3(ctx.in.uv.x, ctx.in.uv.y, 0.5),
            ctx.textures.tex(ctx.in.uv, ctx.bindings.samp).xyz,
            (uv.x < 0.25) || (uv.y < 0.25),
          ),
          ctx.out.color := vec4(col.pow(2.2), 1.0),
        )

    val mvp = p.binding[Mat4]
    val samp =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    // ------ static scene forms (ground / wall / roof) ------

    val groundFaces = Arr(
      Quad.fromDimensionsCenter[GridVertex](100.0, 100.0, Vec3.Y, Vec3.zero):
        (pos, uv) => gvert(pos, uv.x, uv.y),
    )
    val roofFaces = Arr(
      Quad.fromDimensionsCenter[GridVertex](
        100.0,
        100.0,
        -Vec3.Y,
        Vec3(0.0, 20.0, 0.0),
      ): (pos, uv) =>
        gvert(pos, uv.x, uv.y),
    )
    val wallFaces = Arr(
      Quad.fromDimensionsCenter[GridVertex](
        20.5,
        5.0,
        Vec3.Z,
        Vec3(15.0, 3.0, 0.0),
      ): (pos, uv) =>
        gvert(pos, uv.x, uv.y),
    )

    val groundForm = meshForm(groundFaces)
    val roofForm = meshForm(roofFaces)
    val wallForm = meshForm(wallFaces)

    // ------ shapes ------
    // All shapes share mvp+samp via the canvas panel. `tex` defaults to
    // rowTex (panel-level); the column-grid shape overrides it to colTex.

    val groundShape = p.shape(groundForm, renderShade)
    val roofShape = p.shape(roofForm, renderShade)
    val wallShape = p.shape(wallForm, renderShade)
    val rowShape = p.shape(rowForm, renderShade)
    val colShape = p.shape(colForm, renderShade).bind("tex" := colTex)

    val canvasPanel = p
      .panel(
        clearColor = (0.5, 0.6, 0.7, 1.0),
        depthTest = true,
        multisample = true,
        shapes = Arr(groundShape, wallShape, roofShape, rowShape, colShape),
      )
      .bind("mvp" := mvp, "samp" := samp, "tex" := rowTex)

    // ------ camera + input ------

    val cam = PerspectiveCamera(
      fov = 0.6,
      aspect = canvas.width.toDouble / canvas.height.toDouble,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 3.0, 15.0),
    )
    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(sensitivity = 1.0, speed = 3.0)

    p.onResize: (cw, ch) =>
      cam(aspect = cw.toDouble / ch)

    // Bake the two grid textures once with their mip chains.
    p.paint(rowTex, colTex)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      mvp.set(cam.viewProjMat)
      p.paint(canvasPanel)
      p.show(canvasPanel)
