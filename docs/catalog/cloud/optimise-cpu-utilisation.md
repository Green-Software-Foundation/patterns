---
version: 1.0
submitted_by: dubrie
submitted_by_linkedin:
published_date:
category: Operations
tags: compute, cpu, monitoring, right-sizing, cloud, auto-scaling
personas: Infrastructure Engineer, DevOps Engineer, Software Engineer
---

# Optimise CPU utilisation

## Description

CPU utilisation varies throughout the day — often significantly — in response to changing user demand and workload patterns. Systems provisioned to handle peak load spend much of their time with spare capacity sitting idle, consuming energy without performing useful work. The wider the gap between average and peak utilisation, the more resources must be held in standby, and the more embodied carbon is tied up in hardware that is underused most of the time.

Optimising CPU utilisation addresses both dimensions of this problem: reducing the height of utilisation spikes so that less standby capacity is needed, and raising the average utilisation of the resources that are running so that each unit of hardware is doing more useful work per unit of energy consumed.

## Solution

**Understand your utilisation profile before optimising.** Instrument your system to observe both average and peak CPU utilisation over time. The right target for each depends on how quickly your infrastructure can scale: if autoscaling is fast and reliable, running at higher average utilisation with tighter headroom is safe; if scaling is slow, more buffer is appropriate to absorb spikes without degradation.

**Flatten utilisation spikes at the application layer.** High peak utilisation is often driven by specific operations — complex queries, data processing bursts, synchronous rendering — that could be restructured. Introducing caching to serve repeated requests without reprocessing, queuing non-urgent work for off-peak processing, and reducing the volume of data fetched and processed per request are all effective approaches to reducing peak demand without adding hardware.

**Raise average utilisation through consolidation and right-sizing.** Where instances are consistently running below efficient utilisation levels, consolidate workloads onto fewer, more fully utilised instances. Right-size instance types to match actual CPU demand rather than provisioning for theoretical maximums. Use autoscaling to match resource allocation dynamically to actual load, avoiding the need to hold idle capacity in reserve.

**Monitor continuously.** Utilisation patterns shift as traffic grows and workloads evolve. Point-in-time optimisation degrades over time without ongoing observation. Establish utilisation monitoring as a routine operational practice, not a one-off exercise.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: CPU utilisation directly drives energy consumption. Reducing peak utilisation lowers the energy required to serve traffic spikes. Raising average utilisation means each unit of energy consumed is doing more useful work — improving energy efficiency without necessarily reducing total energy. Together, these reduce the energy cost per unit of useful output.
- `M`: Reducing peak utilisation decreases the amount of standby hardware needed to absorb spikes. Consolidating underutilised instances reduces the total number of active resources. Both lower the embodied carbon attributable to the system.

## Cost Impact

- **Compute costs**: Right-sizing instances to actual CPU demand and consolidating underutilised resources directly reduces instance-hour spend — often the largest line item in a cloud bill.
- **Autoscaling savings**: Where autoscaling replaces fixed standby capacity, resources are only consumed when needed rather than held idle around the clock.
- **Observability investment**: Implementing utilisation monitoring introduces tooling and operational costs. For most environments these are small relative to the compute savings they enable.

## Assumptions

- CPU utilisation is being measured and is accessible for analysis — either through cloud provider monitoring or third-party observability tooling.
- Utilisation fluctuations are primarily driven by natural variation in user demand. Where spikes are caused by inefficiencies within the system itself (runaway processes, memory leaks, inefficient queries), those root causes should be addressed separately and directly.
- There is no single optimal utilisation target — the right value depends on the system's scaling characteristics and tolerance for performance degradation under load.

## Considerations

- Adding hardware to absorb spikes or raise average utilisation is not a valid optimisation — it increases embodied carbon and energy consumption. Seek efficiencies within the existing system first.
- Aggressive right-sizing without adequate autoscaling introduces risk: if actual demand exceeds provisioned capacity and scaling is slow, performance degrades. Ensure autoscaling is in place before significantly reducing provisioned headroom.
- Caching and queuing — useful for flattening peaks — introduce their own infrastructure and complexity. Weigh the additional components against the utilisation gains they deliver.

## References

- [Energy Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/energy-efficiency)
- [Hardware Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/hardware-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)