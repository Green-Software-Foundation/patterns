---
version: 1.0
submitted_by: danielmeixner
published_date: 2022-11-10
category: cloud
description: If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components.
tags: 
 - Cloud
 - Reliability/Availability
 - Monitoring
---

# Match your service level objectives to business needs

## Description

If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components.

## Solution

Adjust your solution design to the service level your actual end users require.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

- `E`: We reduce the total electricity required by reducing the number of infrastructure components running.
- `M`: Depending on the solution used it might also reduce the number of physical infrastructure components used.

## Assumptions

Suppose you offer a service level objective (SLO) for availability for your service. Engineering teams target to fulfill this objective and will try to exceed this service level objective. In some cases, engineering teams tend to strive for very sophisticated solutions to not run into any danger of falling below the SLO.
High availability comes often for the cost of additional resources used, in the case of hot stand-by designs even with full duplication of infrastructure where half of the infrastructure is not even used.
Ideally you validate the business reason for a specific SLO target and use it to design a solution that matches business requirements with a reasonable design for reliability and availability.

## Considerations
- This can impact the end user experience negatively because you are working towards a specifc SLO instead of highest availability.
- This can reduce overall cloud cost because you will use less resources.

## References
- [Uptime](https://en.wikipedia.org/wiki/Uptime)
- [Availability](https://en.wikipedia.org/wiki/Availability_(system))
- [Service Level Objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency/)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)
