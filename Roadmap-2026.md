# Green Software Patterns — 2026 Roadmap

> **Purpose:** This page consolidates all prior roadmap and backlog wiki pages into a single reference for team discussion on what comes next after the v2.0 launch. It replaces: _Patterns 2.0 Restructuring Roadmap_, _Patterns Backlog Review — November 2024_, _Patterns Backlog Review — During Restructuring_, _Patterns Backlog Review — After Restructuring_, _Patterns Backlog Review — Close_, _DRAFT — Restructuring Patterns Project_, _Plan 2025_, and _Patterns — Basic Structure for Restructuring_.

---

## What We Set Out to Do (2024–2025 Goals)

From the _Plan 2025_ and _DRAFT — Restructuring Patterns Project_ wiki pages, the high-level goals were:

1. Restructure the patterns catalogue
2. Clear up the whole backlog
3. Revive the project board
4. Find owners of issues
5. Edit the GSF homepage (Tip of the Day, link to patterns)
6. Add case studies of adoption from companies
7. Graduate the project to v1

---

## What v2.0 Delivered ✅

Released **2026-05-18**, v2.0 addressed the core goals from the restructuring plan:

| Goal | Status |
|---|---|
| Restructure catalogue away from AI/Cloud/Web into lifecycle stages (Requirements, Architecture, Development, Operations) | ✅ Done |
| Persona-based navigation (issue [#122](https://github.com/Green-Software-Foundation/patterns/issues/122)) | ✅ Done — 7+ roles including Software Engineer, DevOps, Front-End, Solution Architect |
| Architecture category (issue [#254](https://github.com/Green-Software-Foundation/patterns/issues/254)) | ✅ Done |
| Clearer contribution process with stage timelines | ✅ Done (~5 weeks submission to publication) |
| Graduate v1 (issue [#263](https://github.com/Green-Software-Foundation/patterns/issues/263)) | ✅ Done — v1 graduated before v2 work began |
| Platform upgrade (Docusaurus v2 → v3.9.2) | ✅ Done |
| Resolve npm security vulnerabilities | ✅ Done |
| Licence update to CC BY 4.0 | ✅ Done |
| New core contributors (AVEVA, Schneider Electric) | ✅ Done — Paula de Matos (AVEVA), Juan Rubio (Schneider Electric) |

### What Was Planned for v2 But Not Delivered

These goals from the _DRAFT — Restructuring Patterns Project_ page were scoped for v2 but have not shipped:

| Goal | Notes |
|---|---|
| Built-in scoring system (impact / complexity) | AVEVA and Mastercard both built their own scoring externally — this was a core v2 goal |
| Filtering by project type (new project, enhancement, extending) | Discussed in UX planning, not implemented |
| Behaviour-based patterns linked to SCI | Flagged as "if feasible" — still unresolved |
| Automation for initial review (Stage 3) | Was explicitly a "bonus" stage — still open |

---

## Backlog: Consolidated Issue Status

### Close — No Action Needed

These were identified as closeable during restructuring reviews:

| Issue | Reason |
|---|---|
| [#96 — Automatically scale down K8s clusters](https://github.com/Green-Software-Foundation/patterns/issues/96) | Overlaps with existing patterns |
| [#164 — "Right-sizing" Kubernetes Instances](https://github.com/Green-Software-Foundation/patterns/issues/164) | Can be absorbed into existing pattern |
| [#184 — Add additional description field](https://github.com/Green-Software-Foundation/patterns/issues/184) | Appears complete |
| [#195 — Add emissions reporting / offset button in header](https://github.com/Green-Software-Foundation/patterns/issues/195) | Interesting idea but out of scope; move to future ideas |
| [#214 — Implement efficient indexing](https://github.com/Green-Software-Foundation/patterns/issues/214) | Identified for closure in backlog review |

### Done — Delivered in v2.0

| Issue | How |
|---|---|
| [#122 — Specify Pattern Reading Persona(s)](https://github.com/Green-Software-Foundation/patterns/issues/122) | Personas section |
| [#254 — Green Software Architecture Patterns](https://github.com/Green-Software-Foundation/patterns/issues/254) | Architecture lifecycle category |
| [#263 — Graduation of Patterns v1](https://github.com/Green-Software-Foundation/patterns/issues/263) | Completed before v2 restructuring |
| [#217 — Make patterns more abstract](https://github.com/Green-Software-Foundation/patterns/issues/217) | Addressed during restructuring |
| [#215 — Add BI/Data Visualisation/Reporting tag](https://github.com/Green-Software-Foundation/patterns/issues/215) | Tags section restructured |
| [#302 — Green Software Design Resource](https://github.com/Green-Software-Foundation/patterns/issues/302) | Addressed in restructuring |

### Carry Forward — For Discussion

These were explicitly flagged as "take after restructuring" or remain open:

#### New Patterns
| Issue | Notes |
|---|---|
| [#323 — Add uglify/minify pattern](https://github.com/Green-Software-Foundation/patterns/issues/323) | Needs evidence of real SCI impact before adding |
| [#162 — Use ZSTD instead of gzip for data compression](https://github.com/Green-Software-Foundation/patterns/issues/162) | Could be absorbed into existing compress-stored-data pattern |
| [#226 — Autonomous Optimization of Compute & Storage Resources](https://github.com/Green-Software-Foundation/patterns/issues/226) | Relevant post-restructuring |
| [#225 — Green DevOps: Sustainable CI/CD](https://github.com/Green-Software-Foundation/patterns/issues/225) | Strong candidate for Operations category |
| [#211 — Resource Management for Pods & Containers](https://github.com/Green-Software-Foundation/patterns/issues/211) | Good fit for Operations category |
| [#235 — Improve deprecated GIFs for animated image pattern](https://github.com/Green-Software-Foundation/patterns/issues/235) | Pattern content improvement |
| [#127 — Integrate energy-efficient ML patterns from academia](https://github.com/Green-Software-Foundation/patterns/issues/127) | Needs SCI linkage review |
| [#132 — Using compiled vs interpreted languages](https://github.com/Green-Software-Foundation/patterns/issues/132) | Compiler-specific; needs SCI correlation work |
| [#91 — Design category for coding patterns](https://github.com/Green-Software-Foundation/patterns/issues/91) | Related to #132 |

#### Partnerships & External Content
| Issue | Notes |
|---|---|
| [#126 — Collaboration with W3C web patterns](https://github.com/Green-Software-Foundation/patterns/issues/126) | Uplifted check — still open |
| [#108 — Azure Well-Architected Framework patterns](https://github.com/Green-Software-Foundation/patterns/issues/108) | Can map across lifecycle categories; vendor-agnostic framing needed |
| [#244 — The Green Web Dev Book](https://github.com/Green-Software-Foundation/patterns/issues/244) | Source material to mine for new patterns |

#### Use Cases & Adoption
| Issue | Notes |
|---|---|
| [#297 — Patterns Use Case: Microsoft & DOW](https://github.com/Green-Software-Foundation/patterns/issues/297) | Need team decision on how to present use cases on the site |
| [#257 — Example architectures](https://github.com/Green-Software-Foundation/patterns/issues/257) | Needs concept agreement before implementation |
| [#213 — Tie patterns to use cases](https://github.com/Green-Software-Foundation/patterns/issues/213) | Related to #297 — broader question about use case integration |
| [#247 — AVEVA adoption story](https://github.com/Green-Software-Foundation/patterns/issues/247) | Adoption Stories wiki page exists; surface this on the website? |
| [#265 — Mastercard adopter](https://github.com/Green-Software-Foundation/patterns/issues/265) | Same as above |

#### Community & Outreach
| Issue | Notes |
|---|---|
| [#193 — Patterns Party & Speaker Deck](https://github.com/Green-Software-Foundation/patterns/issues/193) | Review what assets currently exist; plan event or deck |

---

## Open Questions for Team Discussion

These are the strategic questions that were raised across the roadmap pages but never fully resolved. They should drive the team's prioritisation for post-v2.0 releases.

### 1. Scoring / Impact Metadata
The original v2 goal of a **built-in scoring system** (impact level, complexity, SCI linkage) was not shipped. AVEVA and Mastercard both solved this themselves externally.
- Do we add impact/complexity metadata to pattern frontmatter?
- Do we surface it as a filter or sort option in the UI?
- How do we define and validate the scoring consistently?

### 2. Use Cases and Example Architectures
Multiple issues ([#213](https://github.com/Green-Software-Foundation/patterns/issues/213), [#257](https://github.com/Green-Software-Foundation/patterns/issues/257), [#297](https://github.com/Green-Software-Foundation/patterns/issues/297)) point to the same gap: patterns exist in isolation, but real-world adoption requires assembling them into coherent scenarios.
- Do we create a new "Use Cases" or "Examples" section on the site?
- How do we distinguish a use case from a pattern?
- Can we use the AVEVA / Mastercard adoption stories as the first examples?

### 3. Adoption Stories on the Website
The Adoption Stories wiki page documents AVEVA, Mastercard, and EPAM. This content lives only in the wiki.
- Should adoption stories have a dedicated section on the public site?
- Paula de Matos (AVEVA) is now a core contributor — good time to formalise this.

### 4. Expanding the Personas
The Personas section shipped with 7+ roles. Now it's live, we can see what's missing.
- Are there roles not yet represented (e.g., Data Engineer, Product Manager, Security Engineer)?
- How do we keep persona-pattern mappings maintained as new patterns are added?

### 5. Patterns from External Sources
Several issues flag external sources of patterns (Google Green Guides, W3C, Azure WAF, academic ML research, The Green Web Dev Book) that were never fully integrated.
- What is our process for reviewing and ingesting patterns from external sources?
- Who owns the mapping work (SCI linkage, abstraction, vendor-neutral framing)?

### 6. Patterns Quality: Abstract vs. Fine-Grained
Issue [#217](https://github.com/Green-Software-Foundation/patterns/issues/217) raised whether patterns were too fine-grained. The restructuring addressed this partially.
- With the new structure in place, are there patterns that should be merged or split?
- Should we do a post-v2 quality review pass?

### 7. Automation for Initial Review (Stage 3)
This was always a "bonus" goal. The contribution process is now clearer, so automation has more value.
- What could be automated? (Format validation, frontmatter checks, CI linting)
- Is the team bandwidth ready to build and maintain this?

### 8. Community & Outreach
Issue [#193](https://github.com/Green-Software-Foundation/patterns/issues/193) proposed a Patterns Party event and a speaker deck.
- Has the v2 launch created a natural opportunity to run an event or publish a deck?
- What assets do we currently have?

---

## Suggested Next Steps

1. **Team review meeting** — Walk through the open questions above and vote on priorities for the first post-v2 milestone.
2. **Close confirmed issues** — Action the five issues in the "Close" table above.
3. **Decide on use cases / adoption stories** — Agree on whether these belong on the public site before any implementation begins.
4. **Scoring system spike** — Time-box a small investigation into what scoring metadata would look like in the frontmatter and whether it's feasible to maintain.
5. **New patterns sprint** — The Operations category in particular has strong candidates ready: CI/CD (#225), Pod resource management (#211).

---

*Consolidates: Patterns 2.0 Restructuring Roadmap · Patterns Backlog Review (November 2024, During Restructuring, After Restructuring, Close) · DRAFT — Restructuring Patterns Project · Plan 2025 · Patterns — Basic Structure for Restructuring*
