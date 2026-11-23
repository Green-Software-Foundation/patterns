---
version: 1.0
submitted_by: Houssem Ben Malek
submitted_by_linkedin: https://www.linkedin.com/in/houssem-ben-malek/
published_date: 
category: Architecture
tags: 
 - compute
 - monitoring
 - persona:solution-architect
 - persona:software-engineer
 - persona:data-engineer
 - size:medium
personas: Solution Architect, Software Engineer, Data Engineer
description: Design carbon accounting engines to be deterministic and versioned so previously validated results can be reused when their inputs, emission factors, methodology and engine version are unchanged, avoiding redundant computation while preserving a full audit trail.
---

# Reuse deterministic carbon accounting calculations

## Description
Carbon accounting systems typically recompute emissions calculations on every run, even when the underlying activity data, emission factors, and calculation methodology haven't changed since the last run. This wastes compute cycles on producing identical results, and often leaves no clear link between a reported figure and the exact inputs, factors, and methodology version that produced it. That gap undermines audit confidence and makes it harder to verify compliance with frameworks such as CSRD and the GHG Protocol.

## Solution
Design the calculation engine so that results are deterministic and reproducible, and reuse previously validated results when their underlying inputs haven't changed, rather than recalculating by default.

Bind each cached result to a composite fingerprint covering, at minimum: the input activity data, the emission factor identifiers and versions (including source and reference year), the methodology and calculation rule version, and the calculation engine version. When any of these change, the fingerprint changes, the cache key changes, and the result is recalculated. This keeps invalidation dependency-aware: only calculations affected by a specific revision are recalculated, rather than purging all cached results whenever any one factor changes.

Instrument the calculation and validation pipeline to expose the resource cost of each step. This surfaces which calculations are genuinely being avoided versus which are still running unnecessarily, so optimisation effort can be targeted.

Preserve historical versions of inputs, emission factors, methodology, and the calculation engine so that past reports remain reproducible against the exact versions that originally produced them, and so that a recalculation triggered by a revision retains both the historical and the updated result alongside the revision that caused it.

## SCI Impact
`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

- `E`: Decreases. Reusing previously validated results for calculations whose inputs, emission factors, methodology, and engine version haven't changed avoids unnecessary CPU processing, repeated data transformations, and redundant validation operations, reducing operational energy consumed per accounting run.
- `I`: No direct impact. This pattern does not change the carbon intensity of the electricity consumed.
- `M`: May decrease if the resulting computational efficiency allows infrastructure to be scaled down, but this should not be assumed without separate supporting evidence.
- `R`: Any comparison of SCI before and after applying this pattern must hold the volume and type of accounting operations constant. Without a consistent functional unit, an apparent improvement is not meaningful.

The benefit should be demonstrated, not assumed. Benchmark an implementation before and after applying the pattern using identical workloads, and compare energy consumption per completed accounting operation.

## Cost Impact
- **Compute:** Decreases, from avoiding redundant calculation and validation runs for unchanged inputs.
- **Storage:** Increases, since historical versions of inputs, emission factors, methodology, and results must be retained to support reproducibility and the audit trail.
- **Engineering effort:** One-time increase to design and maintain the fingerprinting and dependency-aware invalidation logic.

Depending on the volume of accounting runs and the retention period chosen, the storage and engineering costs may partially or fully offset the compute savings. This is worth evaluating case by case rather than assuming a net saving.

## Assumptions
- Calculation methodology, emission factor identifiers, and the calculation engine are each explicitly versioned, not implicit or floating.
- The calculation is genuinely deterministic: identical input activity data, emission factor version, methodology version, and calculation engine version always produce the identical result.
- A composite fingerprint covering all of the above can be computed and used as the cache key.
- Historical versions of inputs, emission factors, methodology, and the engine can be preserved rather than overwritten in place.

## Considerations
- If the fingerprint omits a dependency, for example an emission factor source database that isn't itself versioned, cached results can go stale without detection, undermining the audit trust this pattern is meant to provide. The versioning scheme must be complete across every input that can change.
- When a revision triggers recalculation, retain both the historical and the updated result, documenting the triggering revision, so past reports stay reproducible against the versions originally used to produce them.
- Storage overhead grows with how much historical data is retained. Define a retention policy that balances audit requirements against storage cost.
- This pattern does not automatically improve SCI. It provides the architectural means (determinism, explicit versioning, result reuse) to identify and eliminate unnecessary computation; the environmental benefit is only established through measurement.

## References
- [Software Carbon Intensity (SCI) specification](https://sci.greensoftware.foundation/)
- GHG Protocol Corporate Value Chain (Scope 3) Standard
