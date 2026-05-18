---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2022-11-22
category: cloud
tags: 
 - cloud
 - size:small
 - persona:devops-engineer
 - persona:software-engineer
description: Unused cloud resources such as databases, storage buckets, and compute instances continue to consume energy and generate embodied carbon; identifying and decommissioning them eliminates unnecessary waste.
---

# Remove unused assets

## Description

Monitor and analyze the application and the cloud bill to identify resources that are no longer used or can be reduced.

## Solution

Decommission unused assets to free consumed resources. Consolidate resources, for example different database instances with a only a few tables could be moved into one instance. Review generated assets if they contain redundant content and handle them accordingly. 
Inspect storage buckets if unused assets can be removed.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

With respect to the SCI equation, remove unused assets will impact one part:

- `E`: Reduces the electricity by not using resources
- `M`: Removing unused resources also reduces the embodied emissions, for example by reducing the storage or CPUs needed

## Assumptions

- Assumes that resources can be decommissioned

## Considerations

- Consider creating monitoring to more easily identify resources that are no longer needed

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a4.html)
