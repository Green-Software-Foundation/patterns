---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld
published_date: 2023-12-14
category: cloud
description: Demand for resources depends on user load at any given time. However, most applications run without taking this into consideration. As a result,resources are underused and inefficient.

tags: 
 - compute
 - cloud
 - role:cloud-engineer
 - size:medium
---

# Scale infrastructure with user load

## Description

Demand for resources depends on user load at any given time. However, most applications run without taking this into consideration. As a result,resources are underused and inefficient.

## Solution

The solution involves reviewing workloads for predictable patterns and identifying periods of low or no activity where resources can be scaled back. Scaling back resources during periods of low utilisation eliminates excess capacity and improves efficiency. In addition, reducing the total number of resources used also reduces the amount of embodied carbon. Underutilized Virtual Machines, for example, can be easily identified by inspecting the CPU load over time. These resources can be consolidated, shut down on a schedule and/or removed.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling infrastructure with user load impacts the SCI as follows:

- `E`: Optimizing the application will lead to less electricity consumed over time
- `M`: Can reduce the embodied emissions of the application since the optimization uses less hardware overall

## Considerations

- Consider starting with the easiest optimizations first

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a2.html)
