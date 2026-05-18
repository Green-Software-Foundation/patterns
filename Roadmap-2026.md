# Green Software Patterns — 2026 Roadmap

> **Purpose:** Consolidated view of what was planned for v2.0, what shipped, what was closed, and what remains open for team discussion. Source pages: _Patterns 2.0 — Roadmap_, _Patterns 2.0 — Basic Structure_, _Patterns 2.0 — Backlog Review — During_, _Patterns 2.0 — Backlog Review — After_, _Patterns 2.0 — Backlog Review — Close_ (all updated May 2026).

---

## What v2.0 Set Out to Solve

The _Basic Structure_ page defined three problem statements that drove the v2.0 work:

1. **Adoption effort** — organisations like AVEVA had to build their own scoring systems to use the catalogue internally; this should be built in.
2. **Discoverability** — the old AI / Cloud / Web grouping made it hard for users to find patterns relevant to their situation.
3. **Technical complexity** — the catalogue was too developer-centric for non-technical stakeholders.

### Goals set for v2

| Goal | Shipped in v2.0? |
|---|---|
| Persona-based navigation | ✅ Yes |
| Lifecycle-based catalogue structure (replacing AI/Cloud/Web) | ✅ Yes |
| Clearer contribution process with stage timelines | ✅ Yes |
| Graduate v1 | ✅ Yes (completed before v2 work began) |
| Built-in scoring system (impact / adaptability) | ❌ Not shipped |
| Filtering by project type (new, enhancement, extending) | ❌ Not shipped |
| Behaviour-based patterns linked to SCI | ❌ Not shipped |
| Automation for initial review (Stage 3 — bonus) | ❌ Not shipped |

---

## Backlog Status — As of May 2026

### Confirmed Closed

All five issues identified as directly closeable are done (confirmed May 2026 in _Backlog Review — Close_):

- [#96 — Automatically scale down K8s clusters](https://github.com/Green-Software-Foundation/patterns/issues/96)
- [#164 — "Right-sizing" Kubernetes Instances](https://github.com/Green-Software-Foundation/patterns/issues/164)
- [#184 — Add additional description field](https://github.com/Green-Software-Foundation/patterns/issues/184)
- [#195 — Add emissions reporting / offset button in header](https://github.com/Green-Software-Foundation/patterns/issues/195)
- [#214 — Implement efficient indexing](https://github.com/Green-Software-Foundation/patterns/issues/214)

Closed as part of restructuring (_Backlog Review — During_, updated May 2026):

- [#215 — Add BI / Data Visualisation / Reporting tag](https://github.com/Green-Software-Foundation/patterns/issues/215)
- [#244 — The Green Web Dev Book](https://github.com/Green-Software-Foundation/patterns/issues/244)
- [#247 — AVEVA adopter](https://github.com/Green-Software-Foundation/patterns/issues/247)
- [#263 — Graduation of Patterns v1](https://github.com/Green-Software-Foundation/patterns/issues/263)
- [#265 — Mastercard adopter](https://github.com/Green-Software-Foundation/patterns/issues/265)
- [#302 — Green Software Design Resource](https://github.com/Green-Software-Foundation/patterns/issues/302)

Closed after restructuring (_Backlog Review — After_, updated May 2026):

- [#91 — Design category for coding patterns](https://github.com/Green-Software-Foundation/patterns/issues/91)
- [#132 — Using compiled vs interpreted languages](https://github.com/Green-Software-Foundation/patterns/issues/132)
- [#193 — Patterns Party & Speaker Deck](https://github.com/Green-Software-Foundation/patterns/issues/193)
- [#235 — Improve deprecated GIFs for animated image pattern](https://github.com/Green-Software-Foundation/patterns/issues/235)

---

### Open — Carry Forward for Discussion

#### From the "During Restructuring" backlog (_Backlog Review — During_)

| Issue | Notes |
|---|---|
| [#108 — Azure Well-Architected Framework patterns](https://github.com/Green-Software-Foundation/patterns/issues/108) | Needs vendor-neutral framing to map across lifecycle categories |
| [#122 — Specify Pattern Reading Persona(s)](https://github.com/Green-Software-Foundation/patterns/issues/122) | Persona navigation shipped in v2.0 — does this need a formal close or is there follow-up work? |
| [#126 — Collaboration with W3C web patterns](https://github.com/Green-Software-Foundation/patterns/issues/126) | Partnership / content uplift — no progress recorded |
| [#127 — Integrate energy-efficient ML patterns from academia](https://github.com/Green-Software-Foundation/patterns/issues/127) | Needs SCI linkage review before any patterns are added |
| [#213 — Tie patterns to use cases](https://github.com/Green-Software-Foundation/patterns/issues/213) | Broader question about use case integration — related to #257 and #297 |
| [#217 — Make patterns more abstract and not so fine-grained](https://github.com/Green-Software-Foundation/patterns/issues/217) | Partially addressed in restructuring; needs a review pass to confirm |
| [#254 — Green Software Architecture Patterns](https://github.com/Green-Software-Foundation/patterns/issues/254) | Architecture category shipped in v2.0 — does this need a formal close or further content work? |
| [#257 — Example architectures](https://github.com/Green-Software-Foundation/patterns/issues/257) | Needs concept agreement before implementation |
| [#296 — Multi-level caching in Web](https://github.com/Green-Software-Foundation/patterns/issues/296) | Review against the restructured Development category |
| [#297 — Patterns Use Case: Microsoft & DOW](https://github.com/Green-Software-Foundation/patterns/issues/297) | Needs team decision on how use cases are presented on the site |

#### From the "After Restructuring" backlog (_Backlog Review — After_)

| Issue | Notes |
|---|---|
| [#162 — Use ZSTD instead of gzip for data compression](https://github.com/Green-Software-Foundation/patterns/issues/162) | Could be absorbed into the existing compress-stored-data pattern |
| [#211 — Resource Management for Pods & Containers](https://github.com/Green-Software-Foundation/patterns/issues/211) | Good fit for Operations category |
| [#225 — Green DevOps: Sustainable CI/CD](https://github.com/Green-Software-Foundation/patterns/issues/225) | Strong candidate for Operations category |
| [#226 — Autonomous Optimization of Compute & Storage Resources](https://github.com/Green-Software-Foundation/patterns/issues/226) | Review scope and SCI linkage |
| [#323 — Add uglify / minify pattern](https://github.com/Green-Software-Foundation/patterns/issues/323) | Needs evidence of real SCI impact before adding |

---

## Questions for Team Discussion

### 1. Close or continue? (#122 and #254)
Persona navigation and the Architecture category both shipped in v2.0, but issues [#122](https://github.com/Green-Software-Foundation/patterns/issues/122) and [#254](https://github.com/Green-Software-Foundation/patterns/issues/254) remain open in the backlog. Are these fully resolved and ready to close, or is there follow-up content work still needed?

### 2. Scoring system
The original v2 goal of a built-in scoring system (impact / adaptability / SCI linkage) was not shipped. AVEVA and Mastercard both solved this externally. Do we prioritise this for the next milestone? If so, what does the scoring metadata look like in pattern frontmatter, and who defines the methodology?

### 3. Use cases and example architectures (#213, #257, #297)
Three open issues point to the same gap: patterns exist in isolation, but real adoption means assembling them into scenarios. Do we create a Use Cases or Example Architectures section on the site? What is the difference between a use case and a pattern?

### 4. New patterns — Operations priority
The Operations category has the strongest set of ready candidates: CI/CD (#225) and Pod resource management (#211). Should these be the first post-v2.0 pattern additions?

### 5. External content pipeline (#108, #126, #127)
Patterns from Azure WAF, W3C, and academic ML research have been open for a long time. What is the actual process for reviewing and ingesting external patterns — who does the SCI mapping and vendor-neutral framing?

### 6. Unshipped v2 goals
Filtering by project type, behaviour-based patterns, and review automation were all scoped for v2 but not delivered. Do any of these move into the next milestone, or are they deprioritised?
