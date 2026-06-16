---
version: 1.0
submitted_by: Naveen Balani
submitted_by_linkedin: https://www.linkedin.com/in/naveenbalani/
published_date:
category: Operations
tags: carbon-intensity, scheduling, cloud-regions, renewable-energy, ai-ml
personas: DevOps Engineer, Infrastructure Engineer, Solution Architect
description: Reduce the carbon impact of AI workloads by running them in cloud regions with lower grid carbon intensity and scheduling deferrable jobs during periods of high renewable energy availability.
---

# Use carbon-aware scheduling and region selection for AI workloads

**Applicable Role:** Provider and Consumer

## Description

AI workloads such as training, fine-tuning, and inference consume significant amounts of energy. The carbon impact of this energy depends on two factors: where the workload is executed (spatial) and when it is executed (temporal).

Different cloud regions and data centers operate on energy grids with varying carbon intensity. Within any single region, carbon intensity also fluctuates by time of day and season as the share of renewable energy on the grid changes.

By selecting low-carbon regions and scheduling deferrable workloads during periods of high renewable energy availability, organizations can significantly reduce emissions without changing the workload itself. Combining spatial and temporal shifting maximizes the carbon reduction effect on the I factor in the SCI equation.

## Solution

- Choose cloud regions that use a higher proportion of renewable or low-carbon energy
- Evaluate carbon intensity as a factor alongside cost, latency, and availability when selecting regions
- Run training, fine-tuning, and batch workloads in low-carbon regions where latency is less critical
- For inference workloads, balance user proximity with carbon-efficient regions
- Use carbon-aware scheduling tools to shift deferrable workloads to low-carbon time windows within a region
- Schedule training, fine-tuning, and batch processing during periods of high renewable energy availability
- Integrate carbon intensity signals from grid APIs into job scheduling and orchestration systems
- Pause and resume long-running training jobs based on carbon intensity thresholds where feasible
- Design pipelines to support flexible execution windows for non-time-critical workloads
- Re-evaluate region and scheduling choices periodically as energy mixes and cloud offerings evolve

## SCI Impact

**SCI = (E × I) + M per R**

**I (Carbon Intensity):** Both spatial and temporal shifting directly reduce the carbon intensity factor in the SCI equation. This is the primary lever in this pattern.

**E (Energy):** Energy consumption remains largely unchanged for the same workload, though pausing and resuming may introduce minor checkpoint overhead.

## Cost Impact

- **Compute costs:** May decrease in low-cost regions; varies by cloud provider pricing
- **Data transfer costs:** May increase due to cross-region data movement
- **Monitoring costs:** Carbon-aware scheduling tools add operational cost
- **SLA costs:** Potential cost increases if scheduling flexibility impacts performance SLAs
- **Trade-off:** Regional cost arbitrage may offset environmental gains; evaluate full cost picture

## Assumptions

- Workloads can be executed in alternative regions without violating data sovereignty or compliance constraints
- Carbon intensity data for regions and time periods is available and reliable
- Some workloads are deferrable and can tolerate flexible scheduling windows

## Considerations

- Trade-offs between carbon, latency, cost, and data sovereignty must be evaluated
- Moving workloads across regions may introduce data transfer overhead
- Some services or hardware may not be available in all regions
- Regulatory and compliance requirements may restrict region selection
- Not all workloads can be deferred; latency-sensitive inference requires immediate execution
- Pausing and resuming training may introduce checkpoint overhead and minor efficiency loss
- Carbon intensity data quality and granularity vary by region and provider
- Organizational SLAs and deadlines may constrain scheduling flexibility

## References

- [Google Cloud Sustainability Regions](https://cloud.google.com/sustainability/region-carbon)
- [AWS Customer Carbon Footprint Tool](https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/)
- [Azure Emissions Impact Dashboard](https://www.microsoft.com/en-us/sustainability/emissions-impact-dashboard)
- [Electricity Maps — Real-time Carbon Intensity Data](https://www.electricitymaps.com/)
- [WattTime — Automated Emissions Reduction](https://watttime.org/)
- [Carbon Aware SDK — Green Software Foundation](https://github.com/Green-Software-Foundation/carbon-aware-sdk)
- [Google Carbon-Intelligent Computing](https://blog.google/outreach-initiatives/sustainability/carbon-intelligent-computing/)
- [Carbon-Aware Computing (Radovanovic et al., 2022)](https://arxiv.org/abs/2106.11750)