---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld
published_date: TBD
category: cloud
tags: 
 - compute
 - role:cloud-engineer
 - size:medium
---

# Scale infrastructure with user load #

## Description

This pattern involves reviewing workloads for predictable patterns and identifying periods of low or no activity where resources can be scaled back.

## Solution

Scaling back resources during periods of low utilisation eliminates excess capacity and improves efficiency because a unit running at a high utilisation produces energy more efficiently. In addition, reducing the total number of resources used also reduces the amount of embodied carbon.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, scale infrastructure with user laod, will impact two parts:

- `M`: Can reduce the embodied emissions if the application after the optimization uses less hardware overall
- `E`: Optimizing the application will lead to less electricity consumed over time

## Assumptions

- Optimization needs proficiency in the tools and time to be implemented.

## Considerations

- Consider starting with the easiest optimizations first (low hanging fruits)

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_software_a6.html)
