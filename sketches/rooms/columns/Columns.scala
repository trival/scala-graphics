package sketches.rooms.columns

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
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Port of the Rust `rooms/columns` sketch: a first-person outdoor courtyard
// of repeated stone columns and crossing beams ("balks") between perimeter
// walls, drawn on a flat ground. One shade is shared by all geometry —
// per-instance model + normal matrix, panel-level viewProj. The fragment
// shows a per-face grid pattern: cells with `uv < 0.2` reveal the normal
// (remapped to [0,1]), other cells take the raw UV with B = 0.5.
// ---------------------------------------------------------------------------

private val ColSpace = 12.0
private val ColHeight = 40.0
private val ColWidth = 2.0
private val BalkHeight = ColWidth * 3.4
private val ColsZHalf = 8
private val ColsXHalf = 4

@main def roomsColumns(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    type CV = (position: Vec3, uv: Vec2)

    def vert(c: Vec3, u: Double, v: Double): CV =
      (position = c, uv = Vec2(u, v))

    // -----------------------------------------------------------------------
    // Geometry — each builder returns the faces as quads in a CV named tuple
    // (position + uv). `meshForm` runs them through `toBufferedGeometry` with
    // `FaceVerticesWithFaceNormal`, which appends a per-face normal vertex
    // attribute → the shader schema is `WithNormal[CV]`.
    // -----------------------------------------------------------------------

    // XZ plane facing +Y, centered at origin.
    val groundFaces = Arr(
      Quad.fromDimensionsCenter[CV](200.0, 200.0, Vec3.Y, Vec3.zero):
        (pos, uv) => vert(pos, uv.x, uv.y),
    )

    // XY plane facing +Z, centered at (0, ColHeight/2, 0).
    val wallFaces = Arr(
      Quad.fromDimensionsCenter[CV](
        ColSpace,
        ColHeight,
        Vec3.Z,
        Vec3(0.0, ColHeight / 2.0, 0.0),
      ): (pos, uv) =>
        vert(pos, uv.x, uv.y),
    )

    // Column: box (front/back/left/right faces only — top hidden by balks,
    // bottom hidden by ground). UVs unwrap each face into [0,1]².
    def columnFaces: Arr[Quad[CV]] =
      val box = Box(Vec3.zero, ColWidth, ColHeight, ColWidth)
      Arr(
        box.frontFace((c, uvw) => vert(c, uvw.x, uvw.y)),
        box.backFace((c, uvw) => vert(c, 1.0 - uvw.x, uvw.y)),
        box.leftFace((c, uvw) => vert(c, 1.0 - uvw.z, uvw.y)),
        box.rightFace((c, uvw) => vert(c, uvw.z, uvw.y)),
      )

    // Balk (horizontal beam): only left/right/bottom — top is hidden, ends
    // butt against adjacent balks.
    def balkFaces: Arr[Quad[CV]] =
      val box = Box(Vec3.zero, ColWidth, BalkHeight, ColSpace)
      Arr(
        box.leftFace((c, uvw) => vert(c, 1.0 - uvw.z, uvw.y)),
        box.rightFace((c, uvw) => vert(c, uvw.z, uvw.y)),
        box.bottomFace((c, uvw) => vert(c, uvw.x, uvw.z)),
      )

    def meshForm(faces: Arr[Quad[CV]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    val groundForm = meshForm(groundFaces)
    val wallForm = meshForm(wallFaces)
    val columnForm = meshForm(columnFaces)
    val balkForm = meshForm(balkFaces)

    // -----------------------------------------------------------------------
    // Shade — per-vertex (position, uv, normal). Per-instance model +
    // normalMat, panel-shared viewProj. Frag draws a 40-cell grid per UV-unit:
    // inside the grid borders, paint the normal (fit1101); otherwise paint
    // the raw UV with B = 0.5. Gamma-corrected at the end.
    // -----------------------------------------------------------------------

    type Attribs = WithNormal[CV]
    type Varyings = (uv: Vec2, normal: Vec3)
    type Uniforms = (
        model: VertexUniform[Mat4],
        normalMat: VertexUniform[Mat3],
        viewProj: VertexUniform[Mat4],
    )

    val shade = p.shade[Attribs, Varyings, Uniforms]: program =>
      program.vert: ctx =>
        Block(
          ctx.out.position :=
            ctx.bindings.viewProj * ctx.bindings.model
              * vec4(ctx.in.position, 1.0),
          ctx.out.normal := ctx.bindings.normalMat * ctx.in.normal,
          ctx.out.uv := ctx.in.uv,
        )
      program.frag: ctx =>
        val uv = LetVec2("uv")
        val col = LetVec3("col")
        Block(
          uv := (ctx.in.uv * 40.0).fract,
          col := select(
            vec3(ctx.in.uv.x, ctx.in.uv.y, 0.5),
            ctx.in.normal.fit1101,
            (uv.x < 0.2) || (uv.y < 0.2),
          ),
          ctx.out.color := vec4(col.pow(2.2), 1.0),
        )

    // -----------------------------------------------------------------------
    // Shapes — ground binds model/normalMat once; the rest are instanced.
    // viewProj is bound on the canvas panel, shared across every shape.
    // -----------------------------------------------------------------------

    val identityMat = Mat4.identity
    val identityN = normalMat(identityMat)

    val groundShape = p
      .shape(groundForm, shade)
      .bind("model" := identityMat, "normalMat" := identityN)

    val columnShape = p.shape(columnForm, shade)
    val balkShape = p.shape(balkForm, shade)
    val wallShape = p.shape(wallForm, shade)

    // Columns — two parallel rings around the +X / -X edges, and along the
    // +Z / -Z edges, doubled (inner & outer column line).
    val colY = ColHeight / 2.0
    inline def colInst(x: Double, z: Double): Unit =
      val m = Mat4.fromTranslation(x, colY, z)
      columnShape.instances.add("model" := m, "normalMat" := normalMat(m))

    var iz = -ColsZHalf
    while iz <= ColsZHalf do
      val z = iz * ColSpace
      colInst(-ColsXHalf * ColSpace, z)
      colInst(ColsXHalf * ColSpace, z)
      colInst(-(ColsXHalf - 1) * ColSpace, z)
      colInst((ColsXHalf - 1) * ColSpace, z)
      iz += 1

    var ix = -ColsXHalf
    while ix <= ColsXHalf do
      val x = ix * ColSpace
      colInst(x, -ColsZHalf * ColSpace)
      colInst(x, ColsZHalf * ColSpace)
      colInst(x, -(ColsZHalf - 1) * ColSpace)
      colInst(x, (ColsZHalf - 1) * ColSpace)
      ix += 1

    // Balks — long beams across the top. One per column-X row spans Z; one
    // per column-Z row spans X (rotated 90° around Y).
    val balkY = ColHeight - BalkHeight / 2.0

    inline def balkInst(t: Transform): Unit =
      val m = t.matrix
      balkShape.instances.add("model" := m, "normalMat" := normalMat(m))

    ix = -ColsXHalf
    while ix <= ColsXHalf do
      balkInst(
        Transform(
          translation = Vec3(ix * ColSpace, balkY, 0.0),
          scale = Vec3(1.0, 1.0, ColsZHalf * 2.0),
        ),
      )
      ix += 1

    iz = -ColsZHalf
    while iz <= ColsZHalf do
      balkInst(
        Transform(
          translation = Vec3(0.0, balkY, iz * ColSpace),
          rotation = Quat.fromRotationY(math.Pi / 2.0),
          scale = Vec3(1.0, 1.0, ColsXHalf * 2.0),
        ),
      )
      iz += 1

    // Walls — 4 around the perimeter, each rotated to face inward and
    // stretched along its local X to span the courtyard side.
    val Tau = 2.0 * math.Pi
    inline def wallInst(t: Transform): Unit =
      val m = t.matrix
      wallShape.instances.add("model" := m, "normalMat" := normalMat(m))

    wallInst(
      Transform(
        translation = Vec3(0.0, 0.0, -ColsZHalf * ColSpace),
        scale = Vec3(ColsXHalf * 2.0 + 2.0, 1.0, 1.0),
      ),
    )
    wallInst(
      Transform(
        translation = Vec3(-ColsXHalf * ColSpace, 0.0, 0.0),
        rotation = Quat.fromRotationY(Tau * 0.25),
        scale = Vec3(ColsZHalf * 2.0 + 2.0, 1.0, 1.0),
      ),
    )
    wallInst(
      Transform(
        translation = Vec3(0.0, 0.0, ColsZHalf * ColSpace),
        rotation = Quat.fromRotationY(Tau * 0.5),
        scale = Vec3(ColsXHalf * 2.0 + 2.0, 1.0, 1.0),
      ),
    )
    wallInst(
      Transform(
        translation = Vec3(ColsXHalf * ColSpace, 0.0, 0.0),
        rotation = Quat.fromRotationY(Tau * 0.75),
        scale = Vec3(ColsZHalf * 2.0 + 2.0, 1.0, 1.0),
      ),
    )

    // -----------------------------------------------------------------------
    // Canvas, camera, input
    // -----------------------------------------------------------------------

    val viewProj = p.binding[Mat4]

    val canvasPanel = p
      .panel(
        clearColor = (0.9, 0.95, 0.99, 1.0),
        depthTest = true,
        multisample = true,
        shapes = Arr(groundShape, columnShape, balkShape, wallShape),
      )
      .bind("viewProj" := viewProj)

    val cam = PerspectiveCamera(
      fov = 0.6,
      aspect = canvas.width.toDouble / canvas.height.toDouble,
      near = 0.1,
      far = 200.0,
      pos = Vec3(0.0, 3.0, 15.0),
    )
    devPreserve(cam)

    val input = p.input()
    val controller =
      BasicFirstPersonCameraController(sensitivity = 3.0, speed = 4.0)

    p.onResize: (cw, ch) =>
      cam(aspect = cw.toDouble / ch)

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      viewProj.set(cam.viewProjMat)
      p.paint(canvasPanel)
      p.show(canvasPanel)
