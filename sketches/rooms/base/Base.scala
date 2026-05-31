package sketches.rooms.base

import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.document
import playground.bloom.Bloom
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
private val TexScale = 48.0

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
        // Halo light strips (ceiling only). `haloStrength = 0` zeroes the
        // contribution — walls/floor pass that. Strips run along the V axis
        // of the baked UV; `haloCount` = strips across U. Their HDR amplitude
        // (>1) trips the bloom threshold downstream.
        haloCount: Float,
        haloStrength: Float,
        // Debug grid darkening — `gridStrength = 0` disables it. `gridCells`
        // is the cell count in (U, V) across the baked UV.
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
          val wp = ctx.in.worldPos

          // ----- FBM tunables (3 octaves) -----
          // Each octave: frequency *= FbmFreqMul, amplitude *= FbmAmpMul.
          // FreqMul > 2 makes higher octaves "shrink faster" than a halving
          // (= finer detail); AmpMul < 0.5 keeps those finer octaves subtle
          // so the base shape stays dominant.
          val FbmFreqMul = 3.6
          val FbmAmpMul = 0.12

          // Inline 3-octave fbm of simplexNoise3d. Returns a FloatExpr in
          // [0, 1]. `basePos` already carries the worldPos skew below; this
          // helper just stacks octaves on top of it.
          def fbm3(basePos: Vec3Expr): FloatExpr =
            var acc: FloatExpr = 0.0: FloatExpr
            var freq = 1.0
            var amp = 1.0
            var totalAmp = 0.0
            var i = 0
            while i < 3 do
              acc = acc + Simplex
                .simplexNoise3d(
                  basePos * (ctx.bindings.scale * freq) + ctx.bindings.seed,
                )
                .fit1101 * amp
              totalAmp += amp
              freq *= FbmFreqMul
              amp *= FbmAmpMul
              i += 1
            (acc / totalAmp).clamp01

          val s = LetFloat("s")
          val d = LetFloat("d")
          val band = VarFloat("band")
          val lf = LetFloat("lf")
          val halo = LetVec3("halo")
          val g = LetVec2("g")
          val gridLine = LetFloat("gridLine")
          Block(
            n := fbm3(
              vec3(
                wp.x + wp.y * 0.2,
                wp.y * 0.3,
                wp.z * 0.8 + wp.y * 0.2,
              ) * 0.3,
            ),
            // Remap noise into a tight near-white band [0.78, 1.0] so the
            // room reads as a gallery space rather than mottled artwork.
            n := 0.68 + n * 0.32,
            col := vec3(n) * ctx.bindings.tint,
            // Halo light strips (ceiling only when haloStrength > 0).
            // `s` cycles 0..1 across each strip period along U; `d` measures
            // distance from a strip's centre line. smoothstep(0.05, 0.02, d)
            // gives a soft 1-at-center band ~0.04 wide. `lf` fades the strips
            // toward V-axis ends so they read as recessed gallery lights.
            s := (ctx.in.uv.x * ctx.bindings.haloCount + 0.5).fract + 0.5,
            d := (s - 0.5).abs,
            band := d.smoothstep(0.05, 0.02),
            lf := ctx.in.uv.y.smoothstep(0.05, 0.15)
              * (1.0 - ctx.in.uv.y).smoothstep(0.05, 0.15),
            band *= (ctx.bindings.haloStrength * lf),
            // HDR halo brightness. >> 1.0 so it trips bloom in both direct
            // view and reflection (where the mip blur averages bright halo
            // with dark surroundings → effective peak drops to ~mix * halo /
            // a-few). Tune per taste; expect floor reflection brightness ≈
            // halo × reflStrength × falloff × blur-attenuation.
            halo := band * vec3(8.0, 7.6, 6.8),
            col += halo,
            // Debug grid (zero contribution when gridStrength == 0).
            g := (ctx.in.uv * ctx.bindings.gridCells).fract - 0.5,
            gridLine := g.x.abs.max(g.y.abs).gt(0.45),
            col *= 1.0 - ctx.bindings.gridStrength * gridLine,
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
        haloCount: Double = 1.0,
        haloStrength: Double = 0.0,
        gridCells: Vec2 = NoGrid,
        gridStrength: Double = 0.0,
        format: TextureFormat = TextureFormat.Rgba8Unorm,
    ): Panel =
      val shape = p
        .shape(form, noiseShade, cullMode = CullMode.None)
        .bind(
          "scale" := NoiseScale,
          "seed" := NoiseSeed,
          "tint" := tint,
          "haloCount" := haloCount,
          "haloStrength" := haloStrength,
          "gridCells" := gridCells,
          "gridStrength" := gridStrength,
        )
      p.panel(
        width = size._1,
        height = size._2,
        mips = true,
        format = format,
        shape = shape,
      )

    // Gallery tints: walls brightest (lights bounce off them), ceiling slightly
    // darker (shaded side of the spotlights mounted on it), floor in between.
    val floorTex =
      noiseTex(floorForm, texSize(RoomWidth, RoomDepth), Vec3(0.80, 0.78, 0.75))
    val wallTex =
      noiseTex(
        wallForm,
        texSize(WallLength, RoomHeight),
        Vec3(0.96, 0.96, 0.95),
        // Debug grid on walls: ~1 cell per meter across the perimeter, scaled
        // 2× to read clearly at this TexScale.
        gridCells = Vec2(WallLength, RoomHeight) * 2.0,
        gridStrength = 0.35,
      )
    // Ceiling tex is HDR so the halo light strips can encode brightness > 1
    // and survive the trip through the mirror render + bloom threshold.
    val ceilTex =
      noiseTex(
        ceilForm,
        texSize(RoomWidth, RoomDepth),
        Vec3(0.88, 0.88, 0.87),
        haloCount = 6.0,
        haloStrength = 1.0,
        format = TextureFormat.Rgba16Float,
      )

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

    // -----------------------------------------------------------------------
    // Mirror shade — same baked-tex lookup as roomShade but driven by a
    // Y-flipped MVP, and writes alpha = worldY/RoomHeight so downstream blur +
    // composite know the reflected fragment's height above the ground.
    // -----------------------------------------------------------------------
    type MirrorUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type MirrorPanels = (tex: FragmentPanel)
    type MirrorVaryings = (uv: Vec2, worldY: Float)

    val mirrorShade =
      p.shade[RoomVertex, MirrorVaryings, MirrorUniforms, MirrorPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.worldY := ctx.in.position.y,
              ctx.out.position := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            val c = LetVec4("c")
            Block(
              c := ctx.textures.tex(
                vec2(ctx.in.uv.x, 1.0 - ctx.in.uv.y),
                ctx.bindings.samp,
              ),
              // Alpha = clamped height/RoomHeight; floor = 0, ceiling = 1.
              ctx.out.color := vec4(
                c.xyz,
                (ctx.in.worldY / RoomHeight.toFloat).clamp01,
              ),
            )

    val mirrorMvp = p.binding[Mat4]

    // Y-flip reverses winding, so inside-out culling flips Front → Back.
    def mirrorShape(form: Form, tex: Panel) =
      p.shape(form, mirrorShade, cullMode = CullMode.Back)
        .bind("mvp" := mirrorMvp, "samp" := texSampler, "tex" := tex)

    // Only walls + ceiling reflect; the floor reflecting itself is degenerate.
    // HDR so the ceiling's halo strips (brightness > 1) survive into the
    // reflection and can bloom on the floor. No multisample — the blur masks
    // aliasing and avoids the resolve step for texture inputs downstream.
    val mirrorPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      clearColor = (0.0, 0.0, 0.0, 0.0),
      depthTest = true,
      shapes =
        Arr(mirrorShape(wallForm, wallTex), mirrorShape(ceilForm, ceilTex)),
    )

    // -----------------------------------------------------------------------
    // Mirror blur — build a mip pyramid of progressively-blurred copies of
    // mirrorPanel. The floor shader picks a mip per-fragment via
    // sampleLevel(uv, lod = alpha * MaxMip), so reflected pixels that were
    // higher above the ground get blurrier — purely a function of the alpha
    // channel mirrorShade writes.
    //
    // Mip 0 = blit of mirrorPanel; mips 1..4 = 4-tap box downsample of the
    // prior mip. Auto mipgen is gated off because mip-target layers exist.
    // -----------------------------------------------------------------------
    type BlitU = (samp: FragmentUniform[Sampler])
    type BlitP = (tex: FragmentPanel)
    val blitShade = p.layerShade[BlitU, BlitP]: program =>
      program.frag: ctx =>
        ctx.out.color :=
          ctx.textures.tex.sample(ctx.in.uv, ctx.bindings.samp)

    type DownU = (res: Vec2, samp: FragmentUniform[Sampler])
    type DownP = (tex: FragmentPanel)
    val downBlurShade = p.layerShade[DownU, DownP]: program =>
      program.frag: ctx =>
        val uv = ctx.in.uv
        val o = LetVec2("o")
        val s = ctx.bindings.samp
        val tex = ctx.textures.tex
        Block(
          // 9-tap tent kernel at ±2 texels of the destination mip (~±4 texels
          // of the source). Each downsample step gaussian-blurs by a few
          // source texels, so the cumulative mip 4 has a noticeably softer
          // appearance than just a plain resolution drop would give.
          o := vec2(2.0, 2.0) / ctx.bindings.res,
          ctx.out.color :=
            tex.sample(uv, s) * 0.25
              + (
                tex.sample(uv + vec2(0.0, o.y), s)
                  + tex.sample(uv + vec2(0.0, -o.y), s)
                  + tex.sample(uv + vec2(o.x, 0.0), s)
                  + tex.sample(uv + vec2(-o.x, 0.0), s)
              ) * 0.125
              + (
                tex.sample(uv + o, s)
                  + tex.sample(uv + vec2(-o.x, o.y), s)
                  + tex.sample(uv + vec2(o.x, -o.y), s)
                  + tex.sample(uv - o, s)
              ) * 0.0625,
        )

    val mirrorRes = p.binding[Vec2]
    val mirrorResMip1 = p.binding[Vec2]
    val mirrorResMip2 = p.binding[Vec2]
    val mirrorResMip3 = p.binding[Vec2]
    val mirrorResMip4 = p.binding[Vec2]
    val mirrorResMip5 = p.binding[Vec2]

    val mirrorBlurLayers = Arr[AnyLayer]()
    mirrorBlurLayers.push(
      p.layer(blitShade)
        .bind("tex" := mirrorPanel, "samp" := texSampler),
    )
    val mipResArr = Arr(
      mirrorRes,
      mirrorResMip1,
      mirrorResMip2,
      mirrorResMip3,
      mirrorResMip4,
      mirrorResMip5,
    )
    var mi = 0
    while mi < 5 do
      mirrorBlurLayers.push(
        p.layer(downBlurShade, mipSource = mi, mipTarget = mi + 1)
          .bind("res" := mipResArr(mi + 1), "samp" := texSampler),
      )
      mi += 1

    val mirrorBlurPanel = p.panel(
      format = TextureFormat.Rgba16Float,
      mipLevels = 6,
      layers = mirrorBlurLayers,
    )

    // -----------------------------------------------------------------------
    // Floor shade — like roomShade, but additionally samples mirrorBlurPanel
    // in screen-space and picks a mip-LOD from the reflection's alpha (= the
    // reflected fragment's normalized height above the ground). Close-to-
    // ground reflections stay sharp; ceiling-ward ones smear out.
    // -----------------------------------------------------------------------
    type FloorUniforms = (
        mvp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        reflSamp: FragmentUniform[Sampler],
        reflStrength: FragmentUniform[Float],
        reflMaxLod: FragmentUniform[Float],
    )
    type FloorPanels = (tex: FragmentPanel, reflTex: FragmentPanel)
    type FloorVaryings = (uv: Vec2, clipPos: Vec4)

    val floorShade =
      p.shade[RoomVertex, FloorVaryings, FloorUniforms, FloorPanels]: program =>
        program.vert: ctx =>
          val pos = LetVec4("pos")
          Block(
            ctx.out.uv := ctx.in.uv,
            pos := ctx.bindings.mvp * vec4(ctx.in.position, 1.0),
            ctx.out.clipPos := pos,
            ctx.out.position := pos,
          )
        program.frag: ctx =>
          val base = LetVec3("base")
          val ndc = LetVec2("ndc")
          val sUv = LetVec2("sUv")
          val a = LetFloat("a")
          val refl = LetVec3("refl")
          val mix = LetFloat("mix")
          val falloff = LetFloat("falloff")
          Block(
            // Baked floor noise (same V-flip as roomShade).
            base := ctx.textures
              .tex(
                vec2(ctx.in.uv.x, 1.0 - ctx.in.uv.y),
                ctx.bindings.samp,
              )
              .xyz,
            // Screen-UV from interpolated clip-space position.
            ndc := ctx.in.clipPos.xy / ctx.in.clipPos.w,
            sUv := ndc * vec2(0.5, -0.5) + vec2(0.5, 0.5),
            // Mip-0 alpha = reflected fragment's normalized height (0..1).
            a := ctx.textures.reflTex
              .sampleLevel(sUv, ctx.bindings.reflSamp, 0.0)
              .w,
            // Per-fragment blur via mip-LOD.
            // Each mip-level halves both axes → effective blur radius doubles
            // per LOD step (radius ≈ 2^LOD). Map alpha to LOD via
            // `log2(1 + a * reflMaxLod)` so the *blur radius* is linear in
            // alpha rather than exponential — closer to a real polished-floor
            // reflection. `a = 0` → lod = 0 (sharp); `a = 1` → lod ≈ log2(1+k).
            // Clamp to the top mip (5) so we never read off the chain.
            refl := ctx.textures.reflTex
              .sampleLevel(
                sUv,
                ctx.bindings.reflSamp,
                (1.0 + a * 2.0 * ctx.bindings.reflMaxLod).log2.min(5.0),
              )
              .xyz,
            falloff := (1.0 - a).max(0.1),
            mix := ctx.bindings.reflStrength * falloff,
            ctx.out.color :=
              vec4(base * (1.0 - mix) + refl * mix, 1.0),
          )

    val reflStrength = p.binding(0.35)
    // Linear-blur tuning. Effective blur radius at full alpha ≈ reflMaxLod
    // source texels (since lod = log2(1 + a*reflMaxLod) and radius ≈ 2^lod).
    // reflMaxLod = 31 → a=1 lands at lod=5 (top of the 6-level chain).
    val reflMaxLod = p.binding(31.0)

    // Inside-out room → culling for inward-facing triangles.
    def roomShape(form: Form, tex: Panel) =
      p.shape(form, roomShade, cullMode = CullMode.Front)
        .bind("mvp" := mvp, "samp" := texSampler, "tex" := tex)

    val floorShape = p
      .shape(floorForm, floorShade, cullMode = CullMode.Front)
      .bind(
        "mvp" := mvp,
        "samp" := texSampler,
        "tex" := floorTex,
        "reflSamp" := texSampler,
        "reflStrength" := reflStrength,
        "reflMaxLod" := reflMaxLod,
        "reflTex" := mirrorBlurPanel,
      )
    val ceilShape = roomShape(ceilForm, ceilTex)
    val wallShape = roomShape(wallForm, wallTex)

    // HDR scene panel — feeds the bloom util and the composite below.
    val scenePanel = p.panel(
      format = TextureFormat.Rgba16Float,
      clearColor = (0.5, 0.6, 0.7, 1.0),
      depthTest = true,
      multisample = true,
      shapes = Arr(floorShape, ceilShape, wallShape),
    )

    // Bloom pyramid driven by scenePanel; threshold ≈ 1.0 trips on the
    // ceiling halo strips (vec3(3.5,3.4,3.0) HDR) but not on the near-white
    // baked surfaces (max ~1.0 × tint).
    val bloom = Bloom(
      p,
      scenePanel,
      intensity = 0.002,
      threshold = 1.0,
      blurRadius = 4.0,
      mipLevels = 5,
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
      mirrorRes.set(Vec2(w, h))
      mirrorResMip1.set(Vec2(w / 2.0, h / 2.0))
      mirrorResMip2.set(Vec2(w / 4.0, h / 4.0))
      mirrorResMip3.set(Vec2(w / 8.0, h / 8.0))
      mirrorResMip4.set(Vec2(w / 16.0, h / 16.0))
      mirrorResMip5.set(Vec2(w / 32.0, h / 32.0))
      bloom.onResize(w, h)

    // Pre-render the static material textures once (with mip chains).
    p.paint(floorTex, wallTex, ceilTex)

    val mirrorMat = Mat4.fromScale(Vec3(1.0, -1.0, 1.0))

    animate: tpf =>
      controller.updateCamera(cam, input, tpf)
      mvp.set(cam.viewProjMat)
      mirrorMvp.set(cam.viewProjMat * mirrorMat)
      p.paint(mirrorPanel, mirrorBlurPanel, scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
