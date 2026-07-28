# MDS Rive — Interactive Motion

Practice files and lesson projects from the
[Rive: Interactive Motion](https://motiondesign.school/courses/rive-interactive-motion/)
course by Maksym Marakhovskyi / Motion Design School.

## Lessons

| # | Project | Topics |
|---|---------|--------|
| 01 | Jump Ball | Rive basics, state machines, character skin |
| 02 | Water Bubble | Wave & bubble rig, joysticks, sliders |
| 03 | Belly Mixing | Bone rigging, animation blending |
| 04 | Sunny Rock | Advanced rigging, additive blending, 1D blend |
| 05 | Artist Parallax | Constraints, 3D parallax, character animation |
| 06 | Lazer Boy | Multi-layer parallax, nested artboards, particles |
| 07 | Fire 360 | FX sequences, frame-by-frame in state machine |
| 08 | Octopus Echo | Held-input interaction, echo motion |
| 09 | Inner Space | Multi-layer parallax rigs, cursor-tracked particles, nested artboards |
| 10 | Pluto Routine | Interactive planet, follow-pointer movement, mixing & blending |
| 11 | Space Duo | Planet switching, basic rig & state machine, color skins |
| Bonus | Main Menu (hero) | Radial menu, nested artboards, click navigation |

## Preview page

`index.html` — dark-theme portfolio page:

- **Hero** — full-width interactive radial menu (bonus lesson, 2000×1000)
- **Gallery** — masonry grid of lesson cards; hover a card for a description
  and an interaction hint
- Rive runtime: `@rive-app/webgl2` (required — some blend-mode effects are
  ignored by the Canvas2D renderer)

## Stack

- [Rive](https://rive.app) — animation & interactivity
- HTML + CSS + Rive Web Runtime (WebGL2) — lesson preview page
