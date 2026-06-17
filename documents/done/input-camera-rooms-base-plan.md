# Input abstractions + camera controller + rooms/base port

## Context

We want to port the Rust `rooms/base` sketch
(`trivalibs/documents/rust-painter/repomix-sketches.xml`) to the Scala painter.
The Rust sketch is a first-person walkable 3D room: a cuboid rendered
inside-out, walls/floor/ceiling textured by a two-pass procedural-noise
pre-render, navigated with WASD + mouse-drag look.

The painter already has everything for the _rendering_
(render-to-texture-as-input, depth test, multisample, mips, Box geometry,
simplex noise lib, `PerspectiveCamera.move` FPS primitive — see
Feature Parity below). **The only real gaps are an input system and a camera
controller.** This plan builds those as reusable library code, wires them to
`PerspectiveCamera`, then ports the sketch.

## Stage 1 — Input abstractions (library)

Layered design, mirroring the TS references (`pointer.ts`, `keyboard.ts`):

**Layer A — shared constants** (`opaque type = String`, `val` constants, per the
no-`enum` rule; see `src/graphics/painter/enums.scala` for the pattern):

- `Key` (from `KeyboardEvent.code`): full set — letters `KeyA`..`KeyZ`, digits
  `Digit0`..`Digit9`, `F1`..`F12`, numpad, arrows, `Space`, modifiers
  (`ShiftLeft/Right`, `ControlLeft/Right`, `AltLeft/Right`), `Escape`, `Enter`,
  `Tab`, symbols, etc.
- `PointerButton`: `Primary`, `Secondary`, `Middle` (maps `MouseEvent.button`
  0/2/1).
- `PointerGesture`: `Down`, `Up`, `Move`, `Drag`, `Hold`.

**Layer B — raw relays** (thin `addEventListener` wrappers, callback per event,
return a teardown `() => Unit`):

- `keyboardRelay(el, onDown: Key => Unit, onUp: Key => Unit)` —
  `keydown`/`keyup`, dedupe auto-repeat, Tab keeps default.
- `pointerRelay(el, callbacks…)` — `pointerdown/move/up/leave/cancel`;
  distinguishes primary/secondary via `button` + `isPrimary`; optional
  `contextmenu` suppression. Emits down/up + per-move dX/dY.

**Layer C — drag/hold detection** inside the pointer relay (ported thresholds):
on primary down start a `holdDelay` (400 ms) timer; `holding` fires if movement
stays within `holdRadius` (5 px); `dragging` is true between down and up once
moved. Track origin `(oX,oY)`, current `(x,y)`, per-frame delta `(dX,dY)`,
accumulated max displacement.

**Layer D — pollable `InputState`** built on top of the relays — the abstraction
the render loop queries:

- `keysDown: Dict[Double]` — code → timestamp pressed (so we can ask "how long
  held").
- `pointersDown: Arr/Dict` of active buttons; flags `dragging`, `holding`;
  current pointer pos + accumulated drag delta since last poll.
- Methods: `isKeyDown(Key): Boolean`, `keyHeldMs(Key, now): Double`,
  `consumeDragDelta(): (dx, dy)` (reads and zeroes the accumulator —
  frame-rate-independent), `isDown(PointerButton)`, `dragging`, `holding`.
- `InputState(canvas)` constructor wires the relays; `dispose()` tears them
  down.

Supports **both use cases**: relays expose raw callbacks
(schedule-render-on-event), `InputState` exposes poll-on-frame.

**Placement:** `trivalibs/src/utils/events/` — `keys.scala` (constants),
`keyboard.scala`, `pointer.scala`, `input_state.scala`. Library code → strict
bundle rules (`Arr`/`Dict`/`Opt`, `while` loops, no stdlib). Add tests under
`trivalibs/test/utils/` for drag/hold state transitions (the math/state machine
is unit-testable without DOM).

## Stage 2 — Camera controller (library)

`BasicFirstPersonCameraController`
(`trivalibs/src/graphics/scene/camera_controller.scala`), porting the Rust
`BasicFirstPersonCameraController::new(sensitivity, speed)`:

- Ctor: `(sensitivity: Double = 1.0, speed: Double = 3.0)`.
- `updateCamera(cam: PerspectiveCamera, input: InputState, tpf: Double): Unit`:
  - WASD → `forward`/`left` amounts = `speed * tpf/1000` (handle Q/E or
    Shift/Space for up/down optional).
  - mouse drag delta (`input.consumeDragDelta()`) × sensitivity →
    `deltaH`/`deltaV`.
  - calls existing `cam.move(forward, left, up, deltaH, deltaV)`
    (`trivalibs/src/graphics/scene/camera.scala:45`).

This reuses the existing FPS primitive; the controller is just the input→params
mapping.

## Stage 3 — Port rooms/base sketch

New sketch `sketches/rooms/base/Base.scala` (+ `index.html`, `main.js`), seeded
from `sketches/base-triangle/`. Structure follows
`trivalibs/examples/panel_tex/PanelTex.scala` (two-pass) +
`trivalibs/examples/geometry3d_scene/Geometry3dScene.scala` (Box faces, depth):

1. **Geometry:** `Box(center=(0,h/2,0), w=6.5, h=5.5, d=10)`; build a
   `Mesh[Vec3]` from `box.faces`, add per-face normals, compute continuous wall
   UVs in sketch code, `toBufferedGeometry(..., FaceVerticesWithFaceNormal)`.
   Attribs `(position, uv, normal)`.
2. **Pre-render pass:** three panels (floor/wall/ceiling) sized by
   `dim * TEX_SCALE`, `mipLevels` set, noise frag shader using
   `shader/lib/random/simplex` (`fit0111`/`fit1101`/`clamp01`/gamma `pow(2.2)`
   available via NumExt + GPU equivalents).
3. **Main pass:**
   `panel(depthTest=true, multisample=true, shapes=[floor,wall,ceil])`; bind
   each pre-render panel as `FragmentPanel` texture + a linear sampler
   (`p.samplerLinear`); frag tiles UV ×40 + gamma. MVP from
   `cam.viewProjMat * model`.
4. **Camera + input:** `PerspectiveCamera(fov=0.6, pos=(0,1.7,0))`;
   `InputState(canvas)`; `BasicFirstPersonCameraController(1.0, 3.0)`; in
   `animate(tpf)`: `controller.updateCamera(cam, input, tpf)` → update vp
   binding → `p.paint(...); p.show(canvas)`.

## Feature parity — gaps assessment

Already present, **no library work needed**:

- Render-to-texture as sampled input: `FragmentPanel` +
  `ctx.textures.x(uv, sampler)`, bind panel as texture —
  `trivalibs/examples/panel_tex/PanelTex.scala`.
- Depth test / multisample / mips — `panel(depthTest, multisample, mipLevels)`.
- Box geometry w/ face normals — `Box` + `box.faces`, `geometry3d_scene`.
- Simplex noise — `trivalibs/src/graphics/shader/lib/random/simplex.scala`.
- FPS camera primitive — `PerspectiveCamera.move`.
- `fit0111`/`fit1101`/`clamp01` — `NumExt`.

**Real gaps (this plan):** (1) input system, (2) camera controller. **Minor
sketch-local work:** continuous wall-UV computation (done in sketch, not a
library feature). No other gaps block a full port.

## Verification

- `cd trivalibs && bun run check` (type-check), `bun run test` (input-state unit
  tests).
- Sketch: `bun run sketch rooms/base` then `bun run dev` (port 3001) — confirm
  in browser: WASD walks, mouse-drag looks around, textured room renders with
  depth, no console errors.

## Critical files

- New: `trivalibs/src/utils/events/{keys,keyboard,pointer,input_state}.scala`,
  `trivalibs/src/graphics/scene/camera_controller.scala`,
  `sketches/rooms/base/{Base.scala,index.html,main.js}`.
- Reuse: `trivalibs/src/graphics/scene/camera.scala:45`,
  `trivalibs/examples/panel_tex/PanelTex.scala`,
  `trivalibs/examples/geometry3d_scene/Geometry3dScene.scala`,
  `trivalibs/src/graphics/geometry/shapes.scala` (Box).
