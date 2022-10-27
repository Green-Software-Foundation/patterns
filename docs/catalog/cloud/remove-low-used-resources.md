---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:small
---

# Remove or refactor workload components with low usage

## Description

Monitor and analyze the application usage patterns and activity to identify components that underutilized the hardware resources they are running on. 

## Solution

Monitor and analyze the application usage patterns and activity to identify components that underutilized the hardware resources they are running on. 
Underutilized Virtual Machines, for example, can be easily identified by inspecting the CPU load over time. 
Underutilized resources can be consolidated, shut down on a schedule and/or removed.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, removing low utilized resources  will impact as follows:

- `E`: Removing or consolidating workloads frees resources and therefore reduces the embodied emissions
- `I`: Resources that are underutilized are running idle and consuming electricity. Removing these reduces the carbon intensity

## Assumptions

- Assumes that monitoring and analyzing the application is possible

## Considerations

- Consider scaling the resources used by the application dynamically

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_software_a3.html)
