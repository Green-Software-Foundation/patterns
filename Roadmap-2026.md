# Green Software Patterns — 2026 Roadmap Discussion

## Where We Are

The v2.0 launch marks a significant step forward. The catalogue has been restructured around the software development lifecycle, a Personas section makes patterns discoverable by role, and the contribution process is clearer than it has ever been. The website is now more accessible and usable.

What v2.0 did not address is the patterns themselves. Many have not been revised in years. The catalogue is more navigable, but the content it surfaces is largely the same content it always has been.

The question for the team is: **what do we focus on next?**

---

## Strategic Themes for Discussion

### 1. Pattern Quality and Modernisation

The catalogue has grown organically over time, with patterns added independently rather than as part of a coherent, reviewed whole. Some reference technologies or approaches that are no longer current. Others are more granular than they need to be, or overlap with each other in ways that create confusion rather than clarity.

Before expanding the catalogue, is there a case for consolidating and modernising what already exists? This would mean revisiting patterns against current practice, merging where there is overlap, retiring where something is outdated, and ensuring every pattern has a credible, up-to-date SCI linkage.

The question is whether a quality-first pass makes the catalogue more valuable than adding new patterns on top of an unreviewed foundation.

### 2. Pattern Expansion

The current catalogue has clear gaps — particularly in the Operations category, where practices around CI/CD, container resource management, and automated infrastructure optimisation are conspicuously absent despite being well-established in the industry.

There are also entirely new areas the catalogue does not yet address: AI and ML workloads beyond what was in the original catalogue, emerging practices around sustainable software architecture, and patterns relevant to roles or contexts not yet well represented.

The question is whether expansion should happen before or after a quality review of existing content, and what criteria govern whether a new pattern is ready to publish.

### 3. Integration with External Resources

Several established bodies of work exist alongside the GSF catalogue — the W3C Sustainability Guidelines, the Google Green Guides, the Azure Well-Architected Framework, and peer-reviewed academic research on energy-efficient ML. These are not competitors; they address different audiences and levels of abstraction. But they do cover similar ground, and there is currently no relationship between them and the GSF catalogue.

Integration could mean several things: formally referencing external resources from within patterns, mapping GSF patterns to equivalent guidance elsewhere, or actively ingesting well-evidenced external patterns (with appropriate SCI linkage) rather than waiting for community submissions.

The question is whether the catalogue should position itself as the definitive cross-reference for green software guidance, and if so, what that relationship-building actually looks like in practice.

### 4. Reducing the Adoption Gap

AVEVA, Mastercard, and EPAM all independently did significant work to make the catalogue usable internally — building scoring systems, compacting the catalogue, adding examples, and reframing patterns as practices. They invested that effort because the catalogue in its current form requires adaptation before organisations can act on it.

This is a signal that there is a gap between a well-curated catalogue and something organisations can adopt directly. Closing that gap might mean built-in impact and complexity scoring, example architectures that show patterns working together, use cases grounded in real adoption stories, or making the adoption stories themselves — currently only in the wiki — part of the public site.

The question is how much of this adaptation work the project should absorb, and whether doing so makes the catalogue more valuable or risks narrowing its scope.

### 5. AI Patterns and the AI Lifecycle

During the v2.0 restructuring conversations, a structural problem emerged with AI patterns: the AI development lifecycle does not map cleanly onto the conventional software development lifecycle that now organises the catalogue. Training, fine-tuning, inference, data pipelines, and model governance are distinct phases with their own sustainability considerations — and they sit awkwardly inside Requirements, Architecture, Development, and Operations.

The current catalogue treats AI as a topic within the SDLC rather than a lifecycle in its own right. This may mean AI patterns are either shoehorned into categories where they don't belong, or simply not submitted because contributors don't know where they fit.

The question is whether AI warrants a separate catalogue structured around its own lifecycle — or whether the current structure can accommodate AI patterns with better subcategorisation. A separate catalogue would be a significant commitment: it needs its own structure, its own reviewer pool with AI expertise, and its own relationship to the SCI framework in contexts (like model training) where carbon attribution is genuinely difficult.

### 6. Depth vs. Breadth

Running through all of these themes is a more fundamental choice about what kind of resource the catalogue should be.

A **broad catalogue** prioritises coverage — adding patterns across as many categories, roles, and technology contexts as possible, and growing through community contribution.

A **deep catalogue** prioritises rigour — fewer patterns, but each one thoroughly reviewed, kept current, grounded in evidence, and connected to real-world adoption.

The two are not mutually exclusive, but they require different processes, different contributor profiles, and different ways of measuring success. The v2.0 restructuring improved the container. The next decision is about what goes inside it.
