---
name: green-software-pattern
description: "Create Green Software Patterns following the GSF template and review standards.  Use this skill whenever the user wants to write, draft, or propose a new green software pattern, or when they describe a software optimization that reduces emissions and want it formatted as a GSF pattern. Also trigger when the user mentions \"green software pattern\", \"SCI impact\", \"emission reduction pattern\", or wants to contribute a pattern to the GSF catalog."
---
 
# Green Software Pattern Creator
 
Create properly structured Green Software Patterns that follow the Green Software Foundation's
template, naming conventions, review standards, and quality principles. The output is a
downloadable `.md` file ready for submission as a pull request to the GSF patterns repository.
 
## What is a Green Software Pattern?
 
A green software pattern, if applied correctly, will reduce the emissions of software. Patterns
are practical, well-rounded recommendations: a clear **Action** taken on a clear **Resource**.
 
The GSF catalog aims to be a curated collection of **fewer, better, broader** patterns rather
than an exhaustive list of narrow, atomic micro-patterns. A good pattern should be comprehensive
enough to be genuinely useful to a practitioner on its own, while still being focused on a
coherent theme. Think "a chapter in a guidebook" not "a single footnote."
 
## Core Quality Principles
 
Every pattern must meet these eleven principles to be publication-ready. These principles ensure that patterns help practitioners take confident action.
 
### 1. Fewer, Better, Broader Patterns
The catalogue values quality over quantity. Patterns should be comprehensive enough to be genuinely useful on their own, focused on coherent themes.
 
### 2. Patterns, Not Practices
A pattern describes *what* to do and *why* it reduces emissions, not *how* to implement it in specific frameworks or languages.
 
### 3. Honour the Submitter's Framing
If a submission signals a particular lifecycle phase or audience (design decision, procurement question, end-user behaviour), anchor the pattern there — even if you could write more confidently about downstream effects.
 
### 4. Action on Resource Format
Titles describe a clear action on a clear resource: "Cache static data," "Reduce database queries." Not vague language like "Write efficient code" or "Better software."
 
### 5. Complete Required Sections
Every pattern must include: Description, Solution, SCI Impact (E→I→M→R order), Cost Impact, Assumptions, Considerations, References.
 
### 6. Conciseness Matters
Focus on highest-impact points, not exhaustive coverage. Three strong techniques concisely beat six with diminishing returns.
 
### 7. Decision Confidence
A practitioner must finish reading confident to either implement the pattern knowing it will deliver benefits in their context, or confidently decide it doesn't apply to them. If a practitioner finishes uncertain ("Does this apply to me?"), the pattern has failed.
 
### 8. Specific, Testable Assumptions
State concrete prerequisites practitioners can check against their situation. No vague conditionals like "if needed," "when appropriate," "if feasible." Assumptions must be concrete and testable.
 
**Bad example:**
"The application does not have compliance requirements"
 
**Good example:**
"Smaller models can meet the functional requirements. Carbon intensity data is available and reliable. Some workloads can tolerate flexible scheduling."
 
### 9. Real Complications in Considerations
Address actual friction points practitioners will hit, not theoretical edge cases. Help practitioners adapt when their situation doesn't perfectly match the pattern.
 
Considerations should:
- Name complications practitioners will actually encounter
- Suggest how to adapt the pattern when context varies
- Signal when the pattern may not work well
### 10. Complete Trade-off Visibility
Both SCI Impact and Cost Impact are required. Practitioners need the full picture to decide whether benefits justify costs.
 
When a pattern affects cost, quantify the impact where data exists (magnitude, percentage, or data source). Trade-offs between cost and emissions should be explicit.
 
### 11. No Significant Duplication
A pattern must not substantially duplicate or overlap with existing patterns. Consolidation is preferred to proliferation. Assess: Is this genuinely new, or should it be merged with an existing pattern?
 
---
 
## Workflow
 
1. **Understand the idea** — Ask the user what emission-reducing technique they want to capture.
   Get enough detail to write the Description and Solution sections.
   **Honour the submitter's framing.** If the submission signals a particular lifecycle phase or
   audience (e.g. a design decision, a procurement question, an end-user behaviour), anchor the
   pattern there — even if you could write more confidently about the engineering downstream
   effects. Your job is to articulate the *submitter's insight*, not translate it into the domain
   you know best. If a submission categorised as Design is thin on design rationale, ask
   clarifying questions rather than back-filling with engineering content.
2. **Collect author details** — Ask for the author's name and LinkedIn profile URL.
3. **Check scope** — Assess whether the pattern is well-scoped. If it's trying to cover
   completely unrelated concerns, suggest splitting. But prefer comprehensive patterns over
   narrow ones (see Scope Philosophy below).
4. **Select category, tags, and personas** — Based on the content, suggest the most appropriate
   category, relevant tags, and applicable personas. Confirm with the user.
5. **Draft the pattern** — Write all sections following the template and quality rules below.
6. **Self-review** — Before presenting, run through the Initial Review checklist and SME Review
   checklist (see `references/review-checklists.md`). Fix any issues.
7. **Output** — Save the pattern as a `.md` file and present it to the user.
## Pattern Template
 
Every pattern MUST contain these sections in this order:
 
```markdown
---
version: 1.0
submitted_by: [Author name]
submitted_by_linkedin: [LinkedIn profile URL]
published_date: [Leave blank — assigned on approval]
category: [One of the 8 categories]
tags: [Comma-separated list of relevant tags — suggest freely, no fixed list]
personas: [Comma-separated list from the defined persona list]
---
 
# [Title — Action on Resource, sentence casing]
 
## Description
[What problem does this pattern solve? Full description of the context and issue.]
 
## Solution
[How does this pattern solve the problem? Keep guidance high-level and directional — describe
approaches, not implementation details. Multiple complementary techniques under a coherent
theme are welcome, but keep them concise. The practitioner determines how to implement within
their own context.]
 
## SCI Impact
`SCI = (E * I) + M per R`
[Explain how this pattern affects the SCI score. Address components in E → I → M → R order.
Only include components that are actually affected. Use bullet points for each component.]
 
## Cost Impact
[Explain how this pattern affects operational costs. Be specific about which cost lines are
affected (e.g., compute, storage, network egress, licensing) and the direction of impact.
Be honest about any cost increases that may accompany the savings.]
 
## Assumptions
[What assumptions underpin this pattern? What context must be true for it to apply?]
 
## Considerations
[What trade-offs, risks, or side effects should implementers be aware of?]
 
## References
[Relevant links — GSF principles, external research, related patterns.]
```
 
## Title Rules
 
The title must describe a clear **Action on a Resource**.
 
**Good titles:**
- "Cache static data" *(Development)*
- "Compress transmitted data" *(Development)*
- "Reduce database queries" *(Development)*
- "Time-shift batch jobs to low-carbon periods" *(Operations)*
- "Optimise container image sizes" *(Operations)*
- "Choose typefaces to minimise font payload" *(Design)*
- "Define performance budgets at requirements stage" *(Requirements)*
- "Prefer dark mode on OLED devices" *(End User)*
Note that good titles exist across all lifecycle phases. Design, Requirements, and End User
patterns are as valid as Development and Operations ones — they just describe decisions made
earlier in the lifecycle or by non-engineering personas.
 
**Bad titles** (too vague):
- "Write efficient code" — no specific action or resource
- "Reduce energy" — no specific resource
- "Better software" — neither specific action nor resource
Titles use **sentence casing**: "Cache static data" not "Cache Static Data". The first word and
proper nouns are capitalised; everything else is lowercase.
 
## Categories
 
Select exactly ONE category per pattern. Choose the phase of the software lifecycle where the
pattern is most naturally applied:
 
| Category | Lifecycle Phase | When to Use |
|----------|----------------|-------------|
| **Requirements** | Define | Defining the problem, scoping what "good enough" looks like |
| **Architecture** | Architect | Structural decisions — where it runs, how components communicate |
| **Design** | Design | User experience, information architecture, detailed specifications |
| **Development** | Build | Writing code, choosing languages/frameworks, optimising data handling |
| **Testing** | Test | Test strategy, test data, test environments, execution optimisation |
| **Operations** | Operate | Scaling, infrastructure, idle resources, runtime automation |
| **Decommissioning** | End of life | Retiring systems, migrating data, cleaning up resources |
| **End User** | Usage | Application choices, device configuration, usage habits |
 
If a pattern spans multiple phases, place it in the phase where the **decision** is made, not
where the effect is felt.
 
**What Design patterns look like in practice.** Design patterns describe decisions made *before*
code is written — about what to include, what to default to, what to avoid. Their Solution
sections should read as guidance for a designer or UX practitioner: what to consider, what
questions to ask, what trade-offs to evaluate. They typically involve human judgement about user
needs, brand, accessibility, and context — not engineering implementation. If you find a Design
pattern's Solution reading like a developer task list, that is a signal to step back and
reframe from the designer's perspective.
 
**What End User and Requirements patterns look like in practice.** End User patterns describe
choices available to non-technical users — device settings, application preferences, usage
habits. Requirements patterns describe decisions made during project scoping — what performance
targets to set, what functionality to include or exclude, what constraints to define. Neither
category should default to engineering language.
 
## Personas
 
Each pattern must specify which personas it is most relevant to. Select one or more from this
list. These are used for navigation and filtering in the catalog.
 
| Persona | Description |
|---------|-------------|
| AI/ML Engineer | Optimizes ML models for energy efficiency and implements sustainable AI practices |
| Data Engineer | Builds efficient data pipelines, storage solutions, and processing workflows |
| DevOps Engineer | Builds green CI/CD pipelines and manages infrastructure automation |
| End-User | Non-technical users whose choices and habits affect software emissions |
| Enterprise Architect | Designs organization-wide architectures prioritising sustainability at scale |
| Forward Deployed Engineer (FDE) | Engineers embedded with customers implementing solutions |
| Front End Engineer | Develops lightweight, optimised client-side code |
| Full Stack Engineer | Works across the stack on energy-efficient implementations |
| Infrastructure Engineer | Manages and optimises servers, cloud resources, and networking |
| Product Designer | Creates design systems that reduce computational complexity |
| Product Manager | Incorporates sustainability metrics into product roadmaps |
| Software Engineer | Writes energy-efficient code and optimises algorithms |
| Solution Architect | Creates technical solution designs minimising energy consumption |
| UX Designer | Designs interfaces that promote energy-efficient behaviours |
 
Choose personas based on **who would make the decision** to implement this pattern, not everyone
who might be affected by it.
 
## Tags
 
There is no fixed tag list — suggest tags that are relevant to the pattern content. Tags should
be lowercase, specific, and useful for filtering. Examples: `databases`, `networking`,
`caching`, `machine-learning`, `containerisation`, `frontend`, `api-design`, `cloud`,
`media-assets`, `logging`.
 
## SCI Impact Rules
 
The SCI equation is: `SCI = (E * I) + M per R`
 
- **E** = Energy consumed by the software
- **I** = Location-based marginal carbon emissions (carbon intensity of electricity)
- **M** = Embodied emissions of hardware
- **R** = Functional unit (e.g., per user, per transaction, per device)
When writing the SCI Impact section:
 
1. Always show the full equation first: `` `SCI = (E * I) + M per R` ``
2. List affected components in **E → I → M → R order** (skip components not affected)
3. For each component, explain the direction of impact (increase/decrease) and **why**
4. Be honest about trade-offs — if reducing E slightly increases M, say so
5. Use bullet points with the component letter in backticks: `` `E`: ... ``
## Cost Impact Rules
 
The Cost Impact section demonstrates how the pattern affects operational spend. This is
important because it makes the business case for adoption alongside the environmental case.
 
When writing the Cost Impact section:
 
1. Be specific about which cost lines are affected (compute, storage, network egress, database
   instance hours, licensing, etc.)
2. Explain the direction of impact (increase/decrease) and why
3. Be honest about trade-offs — if the pattern saves on one cost line but adds another (e.g.,
   adding a cache layer saves database costs but introduces caching infrastructure costs), say so
4. Keep it concise — focus on the most significant cost impacts, not every possible line item
5. Use bullet points for each cost area affected
## Scope Philosophy values **fewer, better, broader patterns** over a large number of narrow ones.
A pattern should be broad enough to be genuinely useful on its own, while still being focused
on a coherent theme.
 
**Patterns, not practices.** A pattern describes *what* to do and *why* it reduces emissions,
not *how* to implement it in a specific framework or language. Keep solutions high-level and
directional. Name approaches (e.g., "use eager loading to eliminate N+1 queries") but don't
include framework-specific code, tool names, or step-by-step instructions. The practitioner
determines how to implement within their own context.
 
**Conciseness matters.** Focus on the highest-impact points rather than trying to be exhaustive.
A pattern that covers three strong techniques concisely is better than one that covers six with
diminishing returns. Considerations should highlight the most important trade-offs, not every
possible edge case.
 
It's fine for a Solution section to mention multiple complementary approaches, as long as they
all serve the same coherent goal stated in the title. For example, "Reduce database queries"
can mention caching, batching, and N+1 elimination because they all serve the same purpose.
 
**When to suggest splitting:** Only flag scope concerns if the pattern is trying to address
genuinely unrelated problems (e.g., a pattern that covers both database optimisation and image
compression). If the techniques are related facets of the same goal, keep them together.
 
## Formatting Rules
 
- Sentence casing on titles
- Each section ends with appropriate punctuation
- SCI Impact entries follow E → I → M → R order
- Use standard markdown formatting
- Front matter uses YAML format with `---` delimiters
## Self-Review Before Output
 
Before presenting a new pattern, run through the Decision Confidence check against the core principles:
 
1. **Clarity of applicability (Principle 8):** Can a practitioner tell if this applies to them? Are Assumptions specific and testable, not vague ("only if needed")?
2. **Clarity of action (Principle 7):** Does the practitioner know what to do — implement confidently or rule it out confidently?
3. **Trade-offs visible (Principle 10):** Are both SCI Impact and Cost Impact explained? Are costs quantified when data exists?
4. **Completeness (Principles 9 & 8):** Are Assumptions concrete? Are Considerations about real complications, not edge cases?
If the pattern passes all four checks, it's ready. If not, revise before output.
 
---
 
## Pattern Assessment Output Framework
 
When assessing an **existing** pattern (for publication review, catalogue decisions, or team alignment), use this structured framework to show your reasoning:
 
### Assessment Template
 
```
## Pattern Assessment: [Pattern Title]
 
**Overall Assessment:** [Publication Ready / Needs Revision / Not Suitable]
 
**Passes on:**
- Principle 7 (Decision Confidence): ✓ PASS — [Summary of why it passes]
- Principle 10 (Trade-off Visibility): ✓ PASS — [Summary of why it passes]
- [List all 11 principles...]
 
**Fails on:**
- Principle 8 (Specific Assumptions): ✗ FAIL — Assumptions are vague ("only if needed")
  Evidence: [Quote from pattern showing the problem]
- Principle 9 (Real Complications): ✗ FAIL — Considerations don't help practitioners choose alternatives
  Issue: [Specific gap]
 
**To publish, requires:**
1. [Specific revision with rationale]
2. [Specific revision with rationale]
3. [Specific revision with rationale]
 
**Recommendation:**
- Revision needed (with timeline) / Consolidate with [pattern name] / Delete (with rationale)
```
 
### Key Sections Explained
 
**Passes On:**
List which principles the pattern naturally meets. Helps authors understand what's working.
 
**Fails On:**
List specific principles violated with evidence. Be precise: "Violates Principle 8 — quote from Assumptions" not "Violates Principle 8 — unclear."
 
**To Publish, Requires:**
Concrete revision points. "Define triggering conditions: e.g., 'Adopt when you have 10+ services AND need cross-service encryption OR distributed tracing.'" not just "Improve Assumptions."
 
**Recommendation:**
Clear action: revision (with timeline), consolidation (with target pattern name), or deletion (with rationale).
 
### When to Use This Framework
 
- Evaluating new pattern submissions before merge
- Reviewing existing patterns during catalogue cleanup
- Making borderline decisions where team consensus is unclear
- Providing structured feedback instead of circular debate
- Documenting why a pattern was accepted, rejected, or revised
---
 
## Output
 
Save the completed pattern as a `.md` file to `/home/claude/[pattern-title-slug].md`, copy to
`/mnt/user-data/outputs/`, and present to the user.
 
---
 
**Last Updated:** 30 July 2026
**Status:** Active - 11 Core Quality Principles integrated and approved by team
**Key Updates:** Added Core Quality Principles section, Decision Confidence check, and Pattern Assessment Output Framework for evaluating existing patterns
