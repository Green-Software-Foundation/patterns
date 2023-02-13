---
version: 1.0
submitted_by: yelghali, markus-ntt-seidl
published_date: TBD
category: cloud
description: [PATTERN_DESCRIPTION_METADATA]
tags: 
 - cloud
 - size:small
---

# Scale down applications when not in use

## Description

Applications tend to consume CPU even when they are not actively used. This includes background timers, garbage collection, health checks among others. Even when the application is shut down, the underlying Hardware consumes idle power.
This hold also true for Development and Test applications and hardware in out-of-office hours.


## Solution

Scale down applications and hardware that are not in use on a schedule. Cloud vendors and software solutions (ex. Kubernetes) provide various ways on how to achieve this efficiently.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation. Scaling down the pods to zero will impact:

- `E`: Reduces energy consumption in hours when the application and hardware can be shut down or switched off.

## Assumptions

- Assumes that the Application has predictable traffic or usage patterns, which need to be known in advance.

## Considerations

- Consider moving to a Serverless Architecture

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
