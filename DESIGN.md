# Design System: Light Modern Tech & Dual Theme

<!-- impeccable:design-schema 1 -->

## Design Philosophy & Identity

A crisp, high-credibility Swiss-tech editorial aesthetic engineered for an Applied AI Engineer. The visual language balances precision engineering and human authenticity: off-white architectural canvases, high-contrast Slate typography, vibrant Cobalt accents, and physical photographic evidence of hackathon podium finishes and research achievements.

## Color Tokens & Dual Theme Architecture

The system operates on an automated dual-theme engine (Light by default, Dark toggleable, persisted via `localStorage`):

### Light Mode (Default)
- **Base Canvas (`--bg-base`):** `#F8FAFC` (Slate-50) with ambient radial illumination.
- **Surface / Card (`--bg-surface` / `--card-bg`):** `#FFFFFF` (Pure White).
- **Subtle / Inset (`--bg-subtle`):** `#F1F5F9` (Slate-100).
- **Primary Text (`--text-base`):** `#0F172A` (Slate-900), ratio > 12:1 against canvas.
- **Secondary Text (`--text-muted`):** `#475569` (Slate-600), ratio > 5.5:1.
- **Brand Primary (`--brand-300`, `--brand-500`):** `#0284C7` (Sky-600) / `#0369A1` (Sky-700).
- **Border Subtle (`--border-subtle`):** `rgba(15, 23, 42, 0.08)`.
- **Card Hover Border (`--card-hover-border`):** `rgba(2, 132, 199, 0.40)`.

### Dark Mode (Refined Alternative)
- **Base Canvas (`--bg-base`):** `#06080A` (Deep Obsidian).
- **Surface / Card (`--bg-surface` / `--card-bg`):** `rgba(255, 255, 255, 0.045)` / `#10151A`.
- **Subtle / Inset (`--bg-subtle`):** `#161E27`.
- **Primary Text (`--text-base`):** `#EDF4F8` (Off-white), ratio > 14:1.
- **Secondary Text (`--text-muted`):** `#9BA8B3` (Slate-400), ratio > 4.8:1.
- **Brand Primary (`--brand-300`, `--brand-500`):** `#8FD3FF` / `#2298D7`.
- **Border Subtle (`--border-subtle`):** `rgba(255, 255, 255, 0.10)`.
- **Card Hover Border (`--card-hover-border`):** `rgba(79, 183, 236, 0.40)`.

## Typography & Hierarchy

- **Font Family Sans:** `"Geist", "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif`.
- **Font Family Mono:** `"Geist Mono", "SFMono-Regular", Consolas, ui-monospace, monospace`.
- **Hero Title:** `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-wrap: balance`.
- **Section Headings:** `text-3xl md:text-5xl font-semibold text-wrap: balance`.
- **Card Titles:** `text-2xl font-bold leading-tight`.
- **Body & Captions:** `text-sm md:text-base leading-relaxed text-wrap: pretty`.
- **Meta Chips / Tags:** `font-mono text-xs font-semibold`.

## Elevation & Depth

- Elevation is declared once through clean 1px structural borders and soft multi-layered ambient blur:
  `box-shadow: 0 1px 3px rgba(var(--shadow-color) / 0.04), 0 4px 12px rgba(var(--shadow-color) / 0.03)`
- Hover elevation smoothly translates up by 2px with enhanced border focus:
  `transform: translateY(-2px); border-color: var(--card-hover-border); box-shadow: 0 8px 24px rgba(var(--shadow-color) / 0.08)`

## Component Systems

1. **Header & Navigation:**
   - Sticky blur bar with `backdrop-blur-xl bg-[var(--nav-bg)]`.
   - Dedicated navigation: `Overview · Projects · Honors · Experience · Skills · CV`.
   - Accessible Theme Switcher (Sun/Moon icons) with instant response and zero page reload.
2. **Honors & Recognition Bento:**
   - Flagship Bento layout featuring high-resolution photography (`ivs-hackthon-2nd.jpg`, `presenting.jpg`, `second-prize-award-wide.webp`).
   - Integrated zero-dependency Lightbox Modal with keyboard (Esc) and touch dismiss.
   - Traceable linkages to technical case studies ([Omni-Agent](file:///home/truong51972/projects/about-me/src/pages/projects/omni-agent.astro) and [Self-Driving Car](file:///home/truong51972/projects/about-me/src/pages/projects/self-driving-car.astro)).
3. **Project Cards:**
   - Responsive multi-tier grid with visual previews, category pills, technical outcome badges, and tagged skill stacks.
4. **Browser Polish:**
   - Custom selection styling, focus rings, smooth scroll behavior, and reduced-motion fallbacks.
