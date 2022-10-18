---
version: 1.0
submitted_by: @camcash17
published_date: TBD
category: cloud
tags: 
 - cloud
 - environments
 - production
 - development
 - performance
 - qa
---

# Minimising the total number of deployed environments

## Description

From an energy-efficiency perspective, it's better to minimise the amount of deployed environments for an application so that less energy is required because there is less resources provisioned.

## Solution

Minimise the amount of deployed environments, perhaps considering the necessity of a QA or Performance testing environment.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation. Reducing the amount of deployed environments will impact two parts:

- `E`: We reduce the total electricity required by reducing provisioned resources.
- `M`: By reducing the amount of nodes running on underlying machines, we reduce the total embodied carbon.

## Assumptions

Suppose we choose to remove a deployed Performance environment for an application. Another existing environment like `QA` could be repurposed for both Quality Assurance and Performance testing to save and optimize existing resources.

## Considerations

It may reduce cloud bills because minimising the total amount of provisioned resources will cost less. It may also create a bottle-neck in the application life cycle, losing an environment created for the sole purpose of performance or QA testing.

## References

- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)
