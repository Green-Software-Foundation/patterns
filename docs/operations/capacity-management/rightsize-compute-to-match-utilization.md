---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: Operations
description: Compute capacity that is provisioned well above what a workload actually uses wastes energy and embodied carbon. Rightsizing matches allocated compute to measured utilization, either by resizing a VM's resources or by moving to a better-fitting pre-configured instance type.
tags: 
 - compute
 - monitoring
 - size:small
 - persona:infrastructure-engineer
 - persona:devops-engineer
personas: Infrastructure Engineer, DevOps Engineer
---

# Rightsize compute to match utilization

## Description

Compute is routinely provisioned for a worst case that rarely happens. A VM or server running at low utilization still draws a large share of its peak power, so energy use is not proportional to the work done. Two lightly loaded servers consume more energy than one running at a higher utilization, and each additional server carries its own embodied carbon. The unused capacity on an underutilized machine could be used for other work instead of provisioning more hardware.

Oversizing is usually a default rather than a decision: capacity is chosen at launch, never revisited, and carried forward as workloads change.

## Solution

Measure actual utilization (CPU, memory, and where relevant network and disk) over a period long enough to include normal peaks, then match allocated compute to what the workload needs. Two techniques achieve this:

- **Resize the VM.** Change the resources allocated to an existing VM to fit its measured demand, for example removing memory the workload never touches, or adding a vCPU where it is consistently saturated.
- **Select a better-fitting pre-configured instance type.** Where resources are only available in fixed sizes, move the workload to the instance type (SKU) whose CPU, memory and ratio most closely match the measured requirement, rather than the nearest size up.

Repeat the review on a regular cadence and after significant changes in workload, as a one-off exercise decays as demand shifts. Where load is spiky, combine rightsizing with scaling that adds and removes instances with demand, so that the baseline is sized for typical load rather than peak.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

- `E`: Decreases. Rightsizing raises the utilization of the remaining capacity, and the more a server is utilized, the more efficiently it turns energy into useful work. Removing idle resources also removes their baseline power draw.
- `M`: Decreases. Fewer or smaller servers are needed to run the same workload, so less embodied carbon is attributed to it. The effect is largest in shared infrastructure where freed capacity avoids new hardware purchases.

## Cost Impact

- **Compute costs decrease.** Smaller or better-matched instances are billed at a lower rate. Savings scale with how far the current allocation exceeds measured demand.
- **Committed-spend discounts may limit savings.** Reserved instances or savings plans tied to a specific instance family or size can offset or delay savings until the commitment is renewed or exchanged.
- **Monitoring and review effort adds a small cost.** Collecting utilization data and running regular reviews takes engineering time, though most cloud providers offer rightsizing recommendations at no additional charge.
- **Under-sizing can increase cost.** Degraded performance or incidents caused by too little headroom can cost more than the capacity saved.

## Assumptions

- Utilization metrics are available for the workload and cover at least one full business cycle, including known peaks.
- The workload's resource needs are stable enough that a sized allocation remains valid between reviews, or scaling is in place to absorb variation.
- Resources can be resized or the workload migrated to a different instance type without breaching availability requirements.
- Any burst of peak load can be absorbed by scaling out, or by headroom that is deliberately kept and documented.

## Considerations

- **Peaks versus averages.** Sizing to average utilization removes the margin needed for bursts. If the workload has occasional peaks and no scaling architecture, retain explicit headroom or add scaling rather than sizing tightly.
- **Resizing can cause disruption.** Some platforms need a restart to change VM size. Schedule changes in maintenance windows and test on non-production first.
- **Fixed instance shapes limit fit.** Pre-configured types may not match the ratio of CPU to memory you need, so the closest SKU may still leave one resource underused. Compare several families before choosing.
- **Memory and I/O are easy to miss.** CPU alone is a poor guide; sizing on CPU can under-provision memory-bound or I/O-bound workloads.
- **Not every workload is a candidate.** Latency-critical or licence-bound workloads may have sizing constraints that outweigh the benefit.

## References

- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- Related patterns: [Optimize average CPU utilization](/operations/capacity-management/optimize-avg-cpu-utilization), [Scale infrastructure with user load](/operations/capacity-management/scale-infrastructure-with-user-load)
