# Design System: anes.devv

## 1. Visual Theme & Atmosphere
A high-performance, clinical yet luxurious developer cockpit. The layout leverages asymmetry, terminal-style console detailing, and custom bento-grid modules. The atmosphere is that of a sleek, dark-tech hardware-level system—dark slate surfaces highlighted by precise, pulsing emerald and teal laser lines. Spacing is extremely tight and deliberate, avoiding empty padding while preserving readability.

## 2. Color Palette & Roles
- **Deep Canvas Slate** (`#020617`) — Primary locked background surface
- **Console Glass** (`rgba(15, 23, 42, 0.45)`) — Card/container background with `backdrop-filter: blur(12px)`
- **Tech Border** (`rgba(30, 41, 59, 0.8)`) — Default card and division border lines (Slate-800)
- **Active Glow Border** (`rgba(16, 185, 129, 0.2)`) — Highlighting borders on hover (Emerald-500)
- **Primary Ink** (`#f8fafc`) — High-contrast title and body text (Slate-50)
- **Subtext Ink** (`#94a3b8`) — Secondary text, metadata, descriptions (Slate-400)
- **Laser Emerald** (`#34d399`) — Primary accent, terminal checklist checks, active CTAs (Emerald-400)
- **Laser Teal** (`#2dd4bf`) — Secondary tech accents, engineering items (Teal-400)

## 3. Typography Rules
- **Display/Headlines:** `Inter` — Ultra-heavy weights (800/ExtraBold), letter-spacing clamp floor (`-0.03em`), line-height tight (`1.15`). Utilizing modern inline visual punctuations.
- **Body:** `Inter` — Balanced weight (400), line-length capped at `75ch` for perfect readability.
- **Mono:** `Fira Code` — Code compiler details, terminal lines, numbers, and navigation labels (`01.skills`).
- **Banned:** Generic system serifs, flat hierarchy scales, oversized default body weights.

## 4. Component Stylings
* **Interactive Terminal Window:** Custom compiler window mock with circular windows header controls (Red, Yellow, Green), monospace fonts, active status indicator pulsing.
* **Glass Bento Cards:** Spans 1 or 2 columns, low-opacity glass borders, floating radial gradients underneath.
* **Pill Badges:** Small uppercase tags using monospace, thin Slate-800 borders, low-opacity background color matching the language classification.
* **CTAs/Buttons:** Tactile `-1px translate-y` active scaling. High-contrast emerald fills for primary, hollow slate borders for secondary.

## 5. Layout Principles
- **Asymmetric Grid System:** Balanced 3-column desktop layout that collapses to modular single-column cards on smaller screens (< 768px).
- **Spatial Separation:** All elements occupy a strict, dedicated grid space. No overlapping headers.
- **Max-width Constraints:** Content wrapper constrained to a standard `max-w-6xl` (1152px) for premium readability on widescreen monitors.

## 6. Motion & Interaction
- **Perpetual Micro-Loops:** Pulse glow indicators on compiler states.
- **Tactile Active Scaling:** All buttons contract and scale slightly on pointer down (`transform: scale(0.98) translateY(1px)`).
- **Staggered Orchestration:** Dynamic GitHub repository cards cascade using delay triggers (`idx * 75ms`) to compile into the DOM gracefully.

## 7. Anti-Patterns (Banned)
- No emojis inside text elements.
- No pure black background (`#000000`).
- No neon/outer glow drop shadows (only solid thin borders and radial background blurs).
- No generic, repeated 3-column equal card layouts.
- No centered hero layout (variance must remain offset and highly dynamic).
