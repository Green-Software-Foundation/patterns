---
version: 1.0
submitted_by: yelghali, markus-ntt-seidl
published_date: 2023-12-14
category: cloud
description: Applications consume CPU even when they are not actively in use. For example, background timers, garbage collection, health checks, etc. Even when the application is shut down, the underlying hardware is consuming idle power.
tags: 
 - cloud
 - size:small
---

# Scale down applications when not in use

## Description

Applications consume CPU even when they are not actively in use. For example, background timers, garbage collection, health checks, etc. Even when the application is shut down, the underlying hardware is consuming idle power.
This can also happen with development and test applications or hardware in out-of-office hours.


## Solution

The best way to mitigate this is to scale down applications and hardware that are not in use on a schedule. Cloud vendors and software solutions (e.g. Kubernetes) provide various efficient ways of achieving this.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling down the pods to zero will impact SCI as follows:

- `E`: Energy consumption is reduced in the hours when the application and hardware are shut down or switched off.

## Assumptions

- Assumes that the application has predictable traffic or usage patterns, which should be known in advance.

## Considerations

- Consider moving to a serverless architecture

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
