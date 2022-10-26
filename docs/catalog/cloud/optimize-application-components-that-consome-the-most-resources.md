---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:medium
---

# Optimize application components that consume the most resources

## Description

Monitor the application to identify components that consume the most time or resources. Optimize the code or architecture so, that these component minimize the resource usage while maximising performance.

## Solution

Cloud providers support monitoring by providing logs and other methods to inspect the performance of the application additionally to tools to inspect the resource usage. Utilize these tools to identify application components that use the most resources and optimize these.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, optimize application components, will impact two parts:

- `E`: If memory, amount of used CPUs or storage can be decreased, then the embodied emissions will be decreased as well
- `I`: If CPU usage can be decreased the software intensity will be decreased as well

## Assumptions

- Optimization needs proficency in the tools and time to be implemented.

## Considerations

- Consider the other cloud patterns in this category

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_software_a4.html)
