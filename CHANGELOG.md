# Changelog

## [Unreleased] — 2026-03-16

### Changed

#### Catalog restructure — new top-level categories
Patterns have been reorganised from technology-based folders (`ai/`, `cloud/`, `web/`) into lifecycle-stage categories aligned with the GSF Patterns 2.0 taxonomy:

| New folder | Patterns | Previous locations |
|---|---|---|
| `docs/catalog/requirements/` | 4 | `cloud/` |
| `docs/catalog/architecture/` | 17 | `ai/`, `cloud/` |
| `docs/catalog/development/` | 23 | `ai/`, `cloud/`, `web/` |
| `docs/catalog/operations/` | 17 | `cloud/` |

The new categories are drawn from the SDLC-aligned framework defined in `data/GSF Patterns 2.0 - Categories.csv`:
- **1 Requirements** (Define) — 4 patterns
- **2 Architecture** (Architect) — 17 patterns
- **4 Development** (Build) — 23 patterns
- **6 Operations** (Operate) — 17 patterns

Categories 3 (Design), 5 (Testing), 7 (Decommissioning), and 8 (End User) are defined in the taxonomy but have no patterns yet.

#### Styling — aligned with GSF microsite design system
`src/css/custom.css` rewritten to match the design system used across GSF microsites (e.g. `soft.greensoftware.foundation`):

- **Primary colour** updated from `#003734` to `#006d69` across the Infima palette
- **Accent palette** added — lime green (`#aecc53` family, `--gsf-accent-*`) used for active sidebar items, tag badges, and heading underlines
- **Navbar** — white background with `#bfdbd9` bottom border; nav links use `font-weight: 800` with pill-shaped hover state (`#ebf2d4` background)
- **Footer** — `#003734` background, `#bfdbd9` link colour with white on hover, uppercase extrabold section titles
- **Sidebar** — active items use `#ebf2d4` background; hover uses `#f2f8f7`
- **Tags** — restyled as lime green pill badges
- **Typography** — Nunito Sans now loads full weight range (200–900)

#### Docusaurus upgrade — v2.0.1 → v3.9.2
- `@docusaurus/core`, `@docusaurus/preset-classic`, `@docusaurus/plugin-ideal-image`, `@docusaurus/module-type-aliases` upgraded to `^3.9.2`
- `react` / `react-dom` upgraded from `^17` to `^18`
- `@mdx-js/react` upgraded from `^1.6.22` to `^3.0.0` (MDX v3)
- `prism-react-renderer` upgraded from `^1.3.5` to `^2.3.0`
- `clsx` upgraded from `^1.2.0` to `^2.0.0`
- `typescript` upgraded from `^4.7.4` to `^5.0.0`
- `@tsconfig/docusaurus` upgraded from `^1.0.5` to `^2.0.0`
- `@docusaurus/types` added as a dev dependency
- Node.js engine requirement raised from `>=16.14` to `>=18.0`
- `prism-react-renderer` import updated to v2 API (`themes.github`)
- `onBrokenMarkdownLinks` migrated to `markdown.hooks.onBrokenMarkdownLinks` (deprecation fix)

### Fixed
- Removed undefined `<PatternComponent>` from `docs/catalog/development/cache-static-data.md` — MDX v3 throws on unknown components where MDX v1 silently ignored them
