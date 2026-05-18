# Changelog

## [Unreleased] — 2026-05-18

### Added

#### Persona-based navigation
A new Personas section surfaces patterns by professional role. Ten persona pages have been added under `docs/personas/`:

- AI / ML Engineer, Data Engineer, DevOps Engineer, Front-End Engineer, Infrastructure Engineer, Product Manager, Security Engineer, Software Engineer, Solution Architect, UX Designer

Pattern-to-persona assignments are defined in each pattern's frontmatter (`personas:` field) and compiled at build time by `scripts/generate-persona-data.js` into `src/data/personas.ts`.

#### Client-side redirects
Installed `@docusaurus/plugin-client-redirects` with 70 redirects:
- All 61 old `/catalog/cloud/`, `/catalog/ai/`, and `/catalog/web/` pattern URLs redirect to their new lifecycle-category paths
- Old `/catalog/`, `/catalog/cloud/`, `/catalog/ai/`, `/catalog/web/` landing pages redirect to the homepage
- Five `role:*` tag pages redirect to the corresponding persona pages (`/tags/role-software-engineer` → `/personas/software-engineer`, etc.)

#### Announcement bar
Added a site-wide announcement bar informing visitors of the redesign, with links to the Software Lifecycle and Personas sections. Styled with the GSF accent colour (`#ABCC59`) and dismissible.

#### Contribute page — review process documentation
The Propose a Pattern page now includes a "What happens next" section explaining all three review stages (Initial Review, SME Review, Team Consensus), their expected timelines (~5 weeks total), and what contributors can expect if a pattern is not accepted.

### Changed

#### Catalog restructure — new top-level categories
Patterns have been reorganised from technology-based folders (`ai/`, `cloud/`, `web/`) into four lifecycle-stage categories aligned with the GSF Patterns 2.0 taxonomy:

| New folder | Patterns | Previous locations |
|---|---|---|
| `docs/requirements/` | 4 | `cloud/` |
| `docs/architecture/` | 17 | `ai/`, `cloud/` |
| `docs/development/` | 23 | `ai/`, `cloud/`, `web/` |
| `docs/operations/` | 17 | `cloud/` |

Each category is further divided into subcategories (e.g. `architecture/system-topology/`, `development/web-performance/`). Categories defined in the taxonomy but with no patterns yet — Design, Testing, Decommissioning, End User — are not included.

#### Homepage redesign
- Hero subheading updated to reflect new practitioner-focused positioning
- **Software Lifecycle** section added — browsable grid of the four lifecycle categories
- **Personas** section added — role-based navigation grid
- **Patterns in Use** section (formerly Success Stories) updated with new copy
- **Team** section updated with current project leads and core contributors

#### Site metadata and SEO
- Tagline updated to: *"Practical green software patterns, organised by role and lifecycle stage, to reduce your software emissions."*
- `og:description` and `twitter:description` updated to match new site positioning
- `twitter:card` upgraded from `summary` to `summary_large_image`

#### Styling — aligned with GSF microsite design system
`src/css/custom.css` rewritten to match the design system used across GSF microsites:

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
- Removed undefined `<PatternComponent>` from `docs/development/cache-static-data.md` — MDX v3 throws on unknown components where MDX v1 silently ignored them
- Resolved 35 npm audit vulnerabilities via `npm audit fix` and a `serialize-javascript@^7.0.5` override in `package.json`
