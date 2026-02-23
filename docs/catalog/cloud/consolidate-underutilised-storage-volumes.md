---
version: 1.0
submitted_by:
submitted_by_linkedin:
published_date:
category: Operations
tags: storage, cloud, hardware-efficiency, infrastructure, right-sizing
personas: Infrastructure Engineer, DevOps Engineer, Enterprise Architect
---

# Consolidate underutilised storage volumes

## Description

Storage infrastructure is commonly over-provisioned. Volumes are sized to handle anticipated peak load, allocated with generous headroom, or left running after the workloads they served have been decommissioned. The result is a large number of storage volumes operating at low utilisation — each consuming a baseline level of energy regardless of how much data they actually hold or how actively they are accessed.

Storage follows the principle of energy proportionality: a single volume running at high utilisation is more efficient than two volumes running at low utilisation serving the same total data. Beyond energy, each unnecessary volume represents embodied carbon from the manufacturing and operation of physical storage hardware. Reducing the number of active volumes — by consolidating, right-sizing, tiering, and removing orphaned storage — directly reduces both operational and embodied emissions.

## Solution

**Consolidate fragmented volumes.** Where multiple storage volumes are operating below capacity, evaluate whether their data can be served from fewer, fuller volumes. A single well-utilised volume consumes less energy in aggregate than several underutilised ones holding the same data.

**Right-size provisioned storage to actual usage.** Audit provisioned storage capacity against actual utilisation. Where significant headroom exists and usage patterns are stable, reduce provisioned size to match realistic need. For environments where demand varies, use auto-scaling storage configurations that grow and shrink with actual usage rather than provisioning for the maximum anticipated peak.

**Apply storage tiering for infrequently accessed data.** Not all data needs to reside on high-performance, energy-intensive storage. Data that is rarely accessed — archives, logs, historical records, compliance data — can be moved to lower-cost, lower-energy cold or archival storage tiers. Tiering reduces energy consumption on the primary storage layer while retaining data accessibility.

**Identify and delete orphaned volumes.** Storage volumes are frequently left running after the workloads, instances, or services they supported have been shut down. Regularly audit for unattached volumes, unused snapshots, and stale backups. Deleting genuinely unused storage eliminates its energy and embodied carbon contribution entirely.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Storage hardware consumes a baseline level of energy regardless of utilisation. Two volumes at 30% utilisation each consume more energy in aggregate than one volume at 60% utilisation serving the same data — the idle capacity on underutilised volumes is wasted energy. Consolidating and right-sizing storage increases utilisation efficiency, reducing total energy consumed for the same amount of stored data.
- `M`: Reducing the number of active storage volumes directly reduces the total embodied carbon attributable to storage hardware manufacture, operation, and eventual disposal.

## Cost Impact

- **Storage costs**: Cloud storage is charged per volume size and per GB provisioned. Right-sizing and consolidating volumes reduces both the number of volumes and their provisioned capacity, with a direct reduction in storage spend.
- **Snapshot and backup costs**: Orphaned snapshots and unused backups accumulate silently and are often a significant hidden cost. Deleting these reduces storage bills immediately.
- **Tiering savings**: Moving infrequently accessed data to cold or archival storage tiers is typically 60–80% cheaper than primary storage, with proportional cost savings on large datasets.
- **Operational overhead**: Ongoing auditing of storage utilisation requires tooling or process investment, but this is typically offset quickly by cost savings on cloud bills.

## Assumptions

- Storage utilisation data is available to identify underutilised volumes — through cloud provider monitoring, observability tooling, or infrastructure audits.
- Data residency, compliance, or performance requirements do not prevent consolidation or tiering for specific datasets.
- Workload demand patterns are understood well enough to distinguish genuine underutilisation from necessary headroom for predictable peaks.

## Considerations

- For workloads with unpredictable or spiky storage demand, reducing provisioned capacity introduces risk if headroom is eliminated entirely. Prefer auto-scaling storage configurations over static right-sizing in these cases, so capacity adjusts dynamically rather than requiring a fixed safety margin.
- Storage tiering introduces access latency for cold data. Validate that retrieval performance meets requirements before moving data that may be needed quickly.
- Consolidation of volumes may require application changes if services reference specific volume identifiers or mount points. Plan migrations carefully to avoid disruption.
- Regular auditing is more effective than one-time cleanup — orphaned volumes and over-provisioned capacity accumulate continuously as infrastructure evolves.

## References

- [Hardware Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/hardware-efficiency)
- [Energy Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/energy-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)