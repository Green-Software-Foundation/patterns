---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld, yelghali
submitted_by_linkedin:
published_date:
category: Operations
tags: compute, cloud, auto-scaling, kubernetes, event-driven, right-sizing
personas: Infrastructure Engineer, DevOps Engineer, Software Engineer
---

# Scale infrastructure with demand

## Description

Most applications are provisioned for their anticipated peak load and left running at that capacity regardless of actual demand. User traffic is rarely constant — it follows daily, weekly, and seasonal patterns, with long periods of low or no activity between peaks. Infrastructure that does not respond to these patterns runs with significant idle capacity most of the time, consuming energy and embodying carbon in hardware that is not performing useful work.

Scaling infrastructure dynamically to match actual demand eliminates this idle overhead. When fewer resources are needed, fewer should be running. When demand returns, capacity should grow to meet it. The closer the match between supply and demand, the more efficiently each unit of hardware and energy is used.

## Solution

**Identify scaling opportunities through utilisation analysis.** Review workloads for predictable patterns of high and low activity. CPU utilisation over time, HTTP request rates, queue depths, and other demand signals reveal when resources are underused. Start with workloads that have the clearest patterns and the largest gap between provisioned capacity and actual utilisation — these offer the most immediate gains.

**Scale on demand signals, not just CPU and RAM.** Default autoscaling configurations use CPU and RAM as proxies for demand, but these metrics often lag behind actual load or fail to reflect the real drivers of your application's resource needs. Scaling based on metrics that directly represent demand — HTTP request rate, message queue length, event stream throughput — produces a tighter, more responsive match between capacity and need, and enables scaling down to zero when there is genuinely no demand to serve.

**Apply time-based scaling for predictable patterns.** Where workload patterns are well understood and consistent — overnight lows, weekend drops, end-of-month peaks — schedule scaling actions in advance rather than waiting for reactive autoscaling to catch up. Time-based scaling reduces the lag between demand change and capacity adjustment, and can be combined with reactive scaling to handle unexpected variation.

**Scale down to zero for intermittent workloads.** Workloads that are inactive for meaningful periods — batch jobs, event-driven processors, background services with irregular demand — should be capable of scaling to zero instances when idle. A workload consuming no resources has no operational energy or embodied carbon footprint during that period.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Scaling capacity down during low-demand periods reduces the energy consumed by idle resources. The closer infrastructure tracks actual demand, the less energy is spent maintaining unused capacity.
- `M`: Running fewer instances during low-demand periods reduces the total active hardware footprint. At the limit — scaling to zero — embodied carbon attributable to those resources drops to zero during idle periods. Over time, better demand matching can also reduce the total number of instances required to serve peak load, lowering the overall hardware footprint.

## Cost Impact

- **Compute costs**: Scaling down during low-utilisation periods directly reduces instance-hour spend. Scaling to zero eliminates compute cost entirely during idle periods — the most impactful outcome for intermittent workloads.
- **Autoscaling infrastructure**: Implementing event-driven or scheduled scaling requires tooling and configuration investment. For most environments this is a one-time cost that pays back quickly through reduced idle compute spend.
- **Over-provisioning risk**: Aggressive scale-down without well-tuned scaling triggers can lead to under-provisioning during demand spikes, causing degraded performance and potentially impacting revenue. Tuning scaling behaviour requires careful testing.

## Assumptions

- The metrics that drive application demand are known and measurable — either through cloud provider monitoring or application-level instrumentation.
- Workloads can tolerate the latency of scaling up when demand returns. Workloads with strict cold-start constraints may require a minimum instance floor rather than scaling to zero.
- Scaling configuration can be applied to the infrastructure without requiring significant application changes.

## Considerations

- Scaling to zero introduces cold-start latency when demand resumes. For user-facing workloads where response time is critical, evaluate whether the energy savings justify a minimum floor of warm instances.
- Time-based and event-driven scaling work best in combination: time-based scaling handles predictable patterns efficiently, while event-driven scaling catches unexpected demand variation that scheduled rules miss.
- Cluster-level autoscaling (scaling the number of nodes) and workload-level autoscaling (scaling the number of pods or instances) address different layers of the stack and should be configured together for maximum effect in containerised environments.

## References

- [Energy Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/energy-efficiency)
- [Hardware Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/hardware-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)
- [AWS Sustainability Pillar — Scale infrastructure with user load](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a2.html)