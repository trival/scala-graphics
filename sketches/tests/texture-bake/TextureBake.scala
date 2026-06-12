package sketches.tests.texture_bake

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import playground.bake.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.math.cpu.{*, given}
import trivalibs.graphics.math.gpu.{*, given}
import trivalibs.graphics.painter.*
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.graphics.shader.dsl.{*, given}
import trivalibs.graphics.shader.lib.random.Simplex
import trivalibs.graphics.shader.{*, given}
import trivalibs.utils.animation.animate
import trivalibs.utils.js.*
import trivalibs.utils.numbers.NumExt.given

// ---------------------------------------------------------------------------
// Verification sketch for `playground.bake.TextureBaker`.
//
// A rotating box in a normal 3D scene (camera + MVP). One TextureBaker is reused
// across all six faces: its fragment samples 3D noise at the world position and
// tints by the surface normal, so each face's texture is baked once into its own
// panel; the box's runtime shade then samples each face panel by UV.
//
// What it verifies:
//   (a) spatial continuity — the noise is sampled in box-local world space, so
//       the pattern lines up seamlessly across adjacent face edges;
//   (b) normal-based tint — the new normal fragment input visibly tints each
//       face by its orientation;
//   (c) the curried baker reused across several geometries (one shade, six bakes).
// ---------------------------------------------------------------------------

val BoxSize = 2.0
val TexSize = 256
val NoiseScale = 1.4

@main def textureBake(): Unit =
  val canvas = document.getElementById("canvas").asInstanceOf[HTMLCanvasElement]

  Painter.init(canvas): p =>
    // Per-face geometry: a single quad, UV [0,1] by corner order (the box face
    // accessors return corners as TL, BL, BR, TR). A generated face normal is
    // appended (WithNormal) so the buffer matches `BakeVertex`.
    type FaceVertex = (position: Vec3, uv: Vec2)

    def faceForm(q: Quad[Vec3]): Form =
      def v(pos: Vec3, u: Double, w: Double): FaceVertex =
        (position = pos, uv = Vec2(u, w))
      val face = Quad(
        v(q(0), 0.0, 0.0),
        v(q(1), 0.0, 1.0),
        v(q(2), 1.0, 1.0),
        v(q(3), 1.0, 0.0),
      )
      p.form(geometry =
        toBufferedGeometry(
          Mesh(Arr(face)),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    // ----- the baker: 3D noise sampled in world space, tinted by normal -------
    val baker = TextureBaker.block(p): (worldPos, normal, uv, color) =>
      // FBM (3 octaves) — the expensive per-pixel result worth caching.
      val FbmFreqMul = 2.0
      val FbmAmpMul = 0.5
      val Seed = vec3(70)

      def fbm3(pos: Vec3Expr): FloatExpr =
        var acc: FloatExpr = 0.0
        var freq = 1.0
        var amp = 1.0
        var total = 0.0
        var i = 0
        while i < 3 do
          acc = acc + Simplex.simplexNoise3d(pos * freq + Seed) * amp
          total += amp
          freq *= FbmFreqMul
          amp *= FbmAmpMul
          i += 1
        (acc / total).fit1101.clamp01

      val n = LetFloat("n")
      Block(
        n := fbm3(worldPos * NoiseScale),
        // Tighten the noise into a visible band so the pattern reads clearly.
        // Tint each face by its orientation: normal (-1..1) → color (0..1).
        color := vec4(normal.fit1101 * lerp(0.45, 1.0, n), 1.0),
      )

    // ----- runtime box shade: sample each face's baked panel by UV ------------
    type SceneUniforms =
      (mvp: VertexUniform[Mat4], samp: FragmentUniform[Sampler])
    type ScenePanels = (tex: FragmentPanel)

    val sceneShade =
      p.shade[BakeVertex, (uv: Vec2), SceneUniforms, ScenePanels]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex.sample(ctx.in.uv, ctx.bindings.samp)

    val mvp = p.binding[Mat4]
    val sampler =
      p.sampler(FilterMode.Linear, FilterMode.Linear, FilterMode.Linear)

    // One form + one baked panel + one scene shape per face.
    val box = Box(Vec3.zero, BoxSize, BoxSize, BoxSize)
    val faces = box.faces
    val shapes = Arr[AnyShape]()
    var fi = 0
    while fi < faces.length do
      val form = faceForm(faces(fi)._1)
      val tex = baker(form, TexSize, TexSize)
      shapes.push(
        p.shape(form, sceneShade, cullMode = CullMode.Back)
          .bind("mvp" := mvp, "samp" := sampler, "tex" := tex),
      )
      fi += 1

    val scenePanel = p.panel(
      clearColor = (0.05, 0.06, 0.1, 1.0),
      depthTest = true,
      multisample = true,
      shapes = shapes,
    )

    // ----- camera + animation -------------------------------------------------
    val cam = PerspectiveCamera(
      fov = 0.9,
      near = 0.1,
      far = 100.0,
      pos = Vec3(0.0, 0.0, 6.0),
    )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)

    var t = 0.0
    animate: tpf =>
      t += tpf * 0.001
      val rot = Quat.fromRotationY(t) * Quat.fromRotationX(t * 0.5)
      val model =
        Mat4.fromTranslationRotationScale(Vec3.zero, rot, Vec3(1.0, 1.0, 1.0))
      mvp.set(cam.viewProjMat * model)
      p.paint(scenePanel)
      p.show(scenePanel)
