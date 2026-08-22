package sketches.tests.texture_bake

import org.scalajs.dom.HTMLCanvasElement
import sketchlib.shaders.Noise
import sketchlib.utils.bake.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.randInRange

import scala.scalajs.js.annotation.JSExportTopLevel

// ---------------------------------------------------------------------------
// Verification sketch for `sketchlib.utils.bake.TextureBaker`.
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
//   (c) the curried baker reused across several geometries (one shade, six bakes);
//   (d) PER-BAKE UNIFORMS — each face bakes a filled disc whose radius and color
//       come from its own bound values, through the one shared pipeline. This is
//       the capability that lets a scalar vary per surface without specializing
//       the shade into one WGSL compile per distinct value.
//
// What a failure looks like: (d) fails LOUDLY — if the uniforms do not reach the
// bake, every face gets an identical disc (or none) instead of six visibly
// different ones. That is why the radius is randomized rather than derived from
// the face index: two faces can coincide by chance, six cannot.
// ---------------------------------------------------------------------------

val BoxSize = 2.0
val TexSize = 256
val NoiseScale = 1.4

// Disc radius range, in UV — comfortably inside the face at the top end.
val RadiusMin = 0.18
val RadiusMax = 0.42
// Soft edge width, in UV. Wide enough to read as deliberate at 256 px.
val DiscSoftness = 0.02

@JSExportTopLevel("sketch")
def textureBake(canvas: HTMLCanvasElement): Unit =
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

    // ----- the baker: 3D noise + normal tint, plus a per-bake disc ------------
    //
    // Two uniform fields, deliberately of different types: a scalar that
    // participates in the baked computation (the disc's distance threshold) and
    // a vector applied to the result. Both go through the one typed schema —
    // binding a wrong name or a wrong value type is a compile error.
    //
    // This form takes the WHOLE fragment context (`ctx => Block`) rather than
    // destructured `(worldPos, normal, uv, color)`, because that is what makes
    // `ctx.bindings` reachable. Arity selects between the forms, so the
    // uniform-carrying one goes DOWN to one argument rather than adding a fifth.
    type FaceU = (
        radius: FragmentUniform[Float],
        discColor: FragmentUniform[Vec3],
    )

    val baker = TextureBaker[FaceU](p): ctx =>
      val n = LetFloat("n")
      val base = LetVec3("base")
      val d = LetFloat("d")
      val disc = LetFloat("disc")
      val r = ctx.bindings.radius
      Block(
        // FBM 3D noise — the expensive per-pixel result worth caching.
        n := Noise.fbm3(ctx.in.worldPos * NoiseScale, seed = vec3(70)),
        // Tighten the noise into a visible band so the pattern reads clearly.
        // Tint each face by its orientation: normal (-1..1) → color (0..1).
        base := ctx.in.normal.fit1101 * lerp(0.45, 1.0, n.fit1101),
        // Distance from the face center, in UV — a genuinely normalized use:
        // the disc spans a fraction of the face, whatever the face measures.
        d := (ctx.in.uv - vec2(0.5, 0.5)).length,
        // Filled, soft-edged disc: 1 inside `radius`, 0 outside.
        disc := d.smoothstep(r, r - DiscSoftness),
        ctx.out.color := vec4(base.lerp(ctx.bindings.discColor, disc), 1.0),
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
    for face <- faces do
      val form = faceForm(face._1)
      // A baker carrying uniforms has no one-call `apply` — deliberately, since
      // `apply` paints immediately and would bake before anything could bind.
      // So: prepare, bind, paint. Binding is on the SHAPE, which is the
      // typechecked one; `Panel.bind` is an unchecked string-keyed dict.
      val bake = baker.prepare(form, TexSize, TexSize)
      bake.shape.bind(
        "radius" := randInRange(RadiusMin, RadiusMax),
        "discColor" := Vec3(
          randInRange(0.1, 1.0),
          randInRange(0.1, 1.0),
          randInRange(0.1, 1.0),
        ),
      )
      p.paint(bake.panel)
      shapes.push(
        p.shape(form, sceneShade, cullMode = CullMode.Back)
          .bind("mvp" := mvp, "samp" := sampler, "tex" := bake.panel),
      )

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
