# Pattern Quality Principles

A pattern is publication-ready when it helps practitioners take confident action. These eleven principles define what that means.

---

## Principle 1: Fewer, Better, Broader Patterns

The catalogue values quality over quantity. Patterns should be comprehensive enough to be genuinely useful on their own, focused on coherent themes.

A pattern is "a chapter in a guidebook, not a footnote." It addresses a complete decision or technique, not a narrow micro-optimization.

---

## Principle 2: Patterns, Not Practices

A pattern describes *what* to do and *why* it reduces emissions, not *how* to implement it.

- ✓ Pattern: "Cache static assets to reduce network requests"
- ✗ Practice: "In React, use `useMemo` to cache..." or "Nginx configuration for caching is..."

Solutions are high-level and directional. The practitioner determines implementation within their own context.

---

## Principle 3: Honour the Submitter's Framing

If a submission signals a particular lifecycle phase or audience, anchor the pattern there — even if you could write more confidently about downstream effects.

Your job is to articulate the submitter's insight, not translate it into your domain.

**Example:** A designer submits a pattern about typography choices. Anchor it in design thinking and user needs, not infrastructure implications.

---

## Principle 4: Action on Resource Format

Titles describe a clear action on a clear resource.

- ✓ "Cache static data"
- ✓ "Reduce database queries"
- ✗ "Write efficient code"
- ✗ "Better software"

---

## Principle 5: Complete Required Sections

Every pattern must include:

1. **Description** — What is the problem? Why does it matter?
2. **Solution** — What should practitioners do?
3. **SCI Impact** — How does this affect the SCI equation? (E→I→M→R)
4. **Cost Impact** — What are the financial costs and savings?
5. **Assumptions** — Under what conditions does this pattern apply?
6. **Considerations** — What trade-offs and complications should practitioners know about?
7. **References** — Where can practitioners learn more?

---

## Principle 6: Conciseness Matters

Focus on highest-impact points, not exhaustive coverage.

Three strong techniques concisely beat six with diminishing returns. Practitioners should be able to read and understand a pattern in 5 minutes.

---

## Principle 7: Decision Confidence

A practitioner must finish reading confident to take one of two actions:

1. **Implement the pattern** knowing it will deliver the stated benefits in their context
2. **Confidently rule it out** and move on, understanding why it doesn't apply to them

If a practitioner finishes uncertain ("Am I sure this applies to me?"), the pattern has failed.

---

## Principle 8: Specific, Testable Assumptions

State concrete prerequisites that practitioners can check against their situation. No vague conditionals.

**Banned language:**
- "if needed"
- "when appropriate"
- "if feasible"
- "only if you think X is necessary"

**Good examples:**

> "Smaller models can meet the functional requirements of the application" (AI models pattern)

> "Workloads can be executed in alternative regions without violating data sovereignty. Carbon intensity data for regions and time periods is available and reliable." (Carbon-aware scheduling pattern)

**Bad example:**

> "The application does not have compliance requirements" (Service mesh pattern)

This states one exception, not the prerequisites for the pattern to work.

---

## Principle 9: Real Complications in Considerations

Address actual friction points practitioners will hit, not theoretical edge cases. Help practitioners adapt when their situation doesn't perfectly match.

**Good Considerations:**
- Name complications practitioners will actually encounter
- Suggest how to adapt the pattern when context varies
- Signal when the pattern may not work well

**Bad Considerations:**
- List hypothetical edge cases
- Mention alternatives without explaining when to choose them
- Abandon practitioners who decide not to use the pattern

**Good example:**

> "System fonts vary across platforms. Custom fonts may be a brand requirement. Aggressive subsetting can cause missing characters. Font caching reduces per-session impact for returning users." (Typography pattern)

---

## Principle 10: Complete Trade-off Visibility

Both SCI Impact and Cost Impact are required. Practitioners need the full picture to decide whether the pattern's benefits justify its costs.

**What this means:**
- Cost Impact section is not optional
- Address what you gain AND what you lose
- When a pattern affects cost, quantify the impact (magnitude, percentage, or data source)
- Trade-offs between cost and emissions should be explicit

**Good example:**

> "Network egress costs decrease... Third-party font service costs may be eliminated... BUT design time increases upfront (one-time cost)." (Typography pattern)

---

## Principle 11: No Significant Duplication

A pattern must not substantially duplicate or overlap with existing patterns. Consolidation is preferred to proliferation.

**Assessment:**
- Is this genuinely new, or does it substantially overlap with an existing pattern?
- Should two similar patterns be consolidated into one broader pattern with contextual guidance?
- Does the new pattern add unique perspective or guidance?

**Example:** "Scale Kubernetes" and "Scale non-Kubernetes" can be consolidated into a broader "Scaling" pattern with architectural context.

---

## How These Principles Work Together

| Principle | Prevents | Ensures |
|-----------|----------|---------|
| Decision Confidence | Uncertain practitioners | Clear self-assessment and confident action |
| Specific Assumptions | Vague conditionals | Practitioners know if it applies to them |
| Real Complications | Abandonment of practitioners | Guidance for adaptation or alternatives |
| Trade-off Visibility | One-sided analysis | Full, informed decision-making |
| No Duplication | Catalogue bloat | Clarity and focused, unique content |

---

## For Pattern Authors

Use these principles as a checklist before submitting:

- [ ] My pattern addresses a complete decision or technique (Principle 1)
- [ ] My title is an action on a resource (Principle 4)
- [ ] I've included all required sections (Principle 5)
- [ ] Practitioners can tell if it applies to them (Principles 7, 8)
- [ ] I've explained real complications, not edge cases (Principle 9)
- [ ] I've addressed both cost and emissions (Principle 10)
- [ ] I've checked for duplication with existing patterns (Principle 11)

---

## For Reviewers

Assess patterns against these principles. When a pattern falls short:

- Identify which principles it violates (be specific)
- Explain what revision would address it
- Recommend: revision, consolidation, or deletion

Example: "This pattern violates Principle 8 (vague assumptions: 'only if needed'). Revision needed: Define specific triggering conditions (scale, prerequisites, context). Timeline: 2 weeks."

---

## Questions?

These principles apply to all patterns regardless of lifecycle phase (Requirements, Design, Development, Testing, Operations, Decommissioning, End User) or domain (AI & ML, Carbon-Aware Computing, etc.).

If a principle feels unclear or in conflict with your pattern, discuss it with the Patterns team.

**Last Updated:** July 2026  
**Status:** Active  
**Owned by:** Patterns Project Team
