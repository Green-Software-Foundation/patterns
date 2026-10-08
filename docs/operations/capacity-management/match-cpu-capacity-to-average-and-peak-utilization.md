---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: Operations
description: Provisioned CPU capacity has to cover peak demand, so the gap between average and peak utilization determines how much hardware sits idle. Matching CPU capacity to both average and peak utilization reduces idle resources while protecting performance at peak load.
tags: 
 - compute
 - monitoring
 - size:medium
 - persona:devops-engineer
 - persona:infrastructure-engineer
 - persona:solution-architect
personas: DevOps Engineer, Infrastructure Engineer, Solution Architect
---

# Match CPU capacity to average and peak utilization

## Description

CPU demand varies through the day, sometimes sharply. Capacity must be available to absorb the highest spikes, so the larger the gap between average and peak CPU utilization, the more resources are held in stand-by and sit underused for most of the day. Idle servers still draw a large share of their peak power and carry embodied carbon, so a wide gap between average and peak means energy and hardware spent on capacity that does little useful work.

The gap can be narrowed from both ends: by running typical load at a more efficient utilization level, and by flattening the spikes that force capacity to be provisioned.

## Solution

Start by measuring CPU utilization over a window that includes normal peaks, and record both the average and the peak. Then work on each end of the gap.

**Raise average utilization to an efficient level.** Choose a target based on how quickly your system can add capacity. If it scales out in seconds or minutes, a higher average target is appropriate because spikes can be absorbed on demand. If scaling is slow or manual, a lower target is needed to keep a buffer. Consolidate or resize workloads so typical utilization sits near that target rather than far below it.

**Reduce and flatten peaks.** Identify which processes and actions drive CPU spikes, for example a request that triggers many database queries, data processing and rendering, and reduce their cost. Typical techniques include adding caching, reducing the volume of data processed or transmitted, and deferring non-urgent work to quieter periods. Where demand itself exceeds capacity, shed or queue lower-priority work rather than provisioning for it.

Use more hardware to spread load only when software-level efficiencies have been exhausted, since each additional server adds embodied carbon.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

- `E`: Decreases. Higher average utilization makes better use of the energy that idle capacity would otherwise draw, and lower peaks reduce the CPU work needed to serve the same traffic.
- `M`: Decreases. A smaller gap between average and peak means less stand-by hardware is provisioned, so less embodied carbon is attributed to the workload. This holds only if the work is not offset by adding extra servers to reduce load.

## Cost Impact

- **Compute costs decrease.** Fewer or smaller instances are needed when average utilization is higher and peaks are lower. Savings grow with the size of the average-to-peak gap.
- **Engineering and monitoring effort increases.** Profiling CPU hotspots, tuning scaling policies and maintaining utilization dashboards take ongoing effort.
- **Supporting infrastructure may add cost.** Caching layers and queues used to flatten peaks carry their own running costs, which should be weighed against the compute saved.
- **Poorly set targets can cost more than they save.** Too little headroom risks performance incidents and emergency over-provisioning.

## Assumptions

- Traffic fluctuates through normal production use, so average and peak utilization differ meaningfully.
- CPU utilization is monitored at a granularity and over a time window (for example, several weeks at one-minute resolution) that captures peaks as well as averages.
- The time your system takes to add capacity is known, so a utilization target can be set against it.
- Spikes caused by the system itself, such as runaway processes or inefficient jobs, are diagnosed and fixed separately rather than treated as demand.

## Considerations

- **Higher average utilization leaves less headroom.** Without fast scaling, raising the average increases the risk of degraded performance during unexpected spikes. Raise the target gradually and validate against real traffic.
- **No universal target exists.** The right utilization level depends on workload, scaling speed and latency requirements, so set it from your own measurements.
- **Shedding and queuing can degrade user experience.** Reducing peaks by delaying or dropping lower-priority requests means some users wait longer or are turned away. Apply it only to work that tolerates it.
- **CPU is not the only constraint.** Memory or I/O may limit consolidation before CPU does, so check them before raising targets.
- **Adding servers can defeat the purpose.** Spreading load across more hardware lowers per-server utilization and adds embodied carbon.

## References

- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- Related patterns: [Shed lower-priority traffic](/requirements/shed-lower-priority-traffic), [Queue non-urgent requests](/architecture/system-topology/queue-non-urgent-requests), [Scale infrastructure with user load](/operations/capacity-management/scale-infrastructure-with-user-load), [Use a circuit breaker](/operations/capacity-management/use-circuit-breaker)
