---
version: 1.0
submitted_by: danielmeixner
published_date: TBD
category: cloud
tags: 
 - [PATTERN_TAGS]
---

# Match your service level

## Description

If service downtimes are acceptable it's better to not strive for 100% uptime to design the solution according to real business needs. Lower uptime guarantees can help reduced energy consumption by using less infrastructure components.

## Solution

Adjust your solution design to the service level your actual end users require.

## SCI Impact

`SCI = (E * I) + M per R`  

- `E`: We reduce the total electricity required by reducing the number of infrastructure components running.
- `M`: Depending on the solution used it might also reduce the number of physical infrastructure components used.


[Sofware Carbon Intensity Spec](https://github.com/Green-Software-Foundation/software_carbon_intensity)

[PATTERN_SCI_IMPACT]

- `E`: [PATTERN_ENERGY_SCI_IMPACT]
- `I`: [PATTERN_INTENSITY_SCI_IMPACT]
- `M`: [PATTERN_EMBODIED_SCI_IMPACT]
- `R`: [PATTERN_RATE_SCI_IMPACT]

## Assumptions

Suppose you offer an service level objective (SLO) for avaialbility for your serivce. Engineering teams target to fulfill this objective and will try to exceed this service level objective. In some cases engineering teams tend to strive for very sophisticated solutions to not run into any danger of falling below the SLO.
High uptime comes often for the cost of additional resources used, in the case of hot stand-by desings even with full duplication of infrastructure where half of the infrastructur is not even used.
Ideally you validate the business reason for a specific SLO target and use it to design a solution that matches business requirements with a reasonable design for reliabilty & availability.

## Considerations
- This can impact the end user experience negativly because you are working towards a specifc SLO instead of 100% uptime.
- This can reduce overall cloud cost because you will use less resources.
[PATTERN_CONSIDERATIONS]

## References

[PATTERN_REFERENCES]