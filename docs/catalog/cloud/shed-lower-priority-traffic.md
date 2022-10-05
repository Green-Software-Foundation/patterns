---
version: 1.0
submitted_by: dubrie
published_date: TBD
category: cloud
tags: 
 - compute
 - monitoring
 - reliability-availability
 - role:cloud-engineer
 - role:software-engineer
 - role:reliability-engineer
 - size:large
---

# Shed Lower Priority Traffic

## Description

When resources are constrained during high traffic events or when carbon intensity is high, more carbon emissions will be generated from your system. Adding more resources to support increased traffic requirements introduces more embodied carbon and more demand for electricity. Continuing to handle all requests during high carbon intensity will increase overall emissions for your system. Shedding traffic that is lower priority during these scenarios will save on resources and carbon emissions. This approach would require an understanding of your traffic and which calls requests are critical and which requests can best withstand retry attempts and failures.    


## Solution

From an energy efficiency perspective, shedding lower priority traffic during high traffic and high carbon intensity periods will reduce the overall energy required to support traffic. 

From a hardware efficiency perspective, shedding lower priority traffic during high traffic and high carbon intensity periods will reduce the total number of hardware resources needed to support traffic. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Sofware Carbon Intensity Spec](https://github.com/Green-Software-Foundation/software_carbon_intensity)

Concerning the SCI equation, optimizing peak CPU utilization will impact two parts:

- `E`: Shedding traffic will reduce the number of requests your system handles which will result in reduced energy required from the system overall. 
- `M`: Shedding traffic will reduce the number of hardware resources your system needs to handle traffic which will reduce the amount of embodied carbon required to support the system.

## Assumptions
- There is an assumption that your traffic is prioritized and identified so that you can programmatically determine which traffic can be shed and which traffic is critical for system functionality. 

## Considerations
- Consider having an exponential shedding policy that increases shedding exponentially as traffic climbs. This will help reduce the impact of traffic with high variance "spikes".


## References
- [https://github.com/Green-Software-Foundation/green-software-patterns/issues/43](https://github.com/Green-Software-Foundation/green-software-patterns/issues/43)
- [Using load shedding to avoid overload](https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/)
