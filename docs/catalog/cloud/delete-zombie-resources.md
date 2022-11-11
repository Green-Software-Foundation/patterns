---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld
published_date: TBD
category: cloud
tags: 
 - compute
 - cloud
 - role:cloud-engineer
 - size:medium
---

# Delete zombie resources for VMs and Kubernetes

## Description

Remove long forgotten resources (zombie resources) that are not longer doing useful work.

## Solution

Scan for and remove any unused snoozing or "Zombie" VM resources or cluster instances.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, remove zombie resources will impact two parts:

- `E`: The deletion of unused resources will lead to less electricity consumed over time
- `M`: It reduce the embodied emissions after deletion, because it uses less hardware overall

## Assumptions


## Considerations

- Consider starting with the easiest optimizations first (low hanging fruits)

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a2.html)
