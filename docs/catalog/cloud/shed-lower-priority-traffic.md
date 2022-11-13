---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: cloud
description: When resources are constrained during high-traffic events or when carbon intensity is high, more carbon emissions will be generated from your system. Adding more resources to support increased traffic requirements introduces more embodied carbon and more demand for electricity. Continuing to handle all requests during high carbon intensity will increase overall emissions for your system. Shedding traffic that is lower priority during these scenarios will save on resources and carbon emissions. This approach requires an understanding of your traffic, including which call requests are critical and which can best withstand retry attempts and failures.
tags: 
 - compute
 - monitoring
 - reliability-availability
 - role:cloud-engineer
 - role:software-engineer
 - role:reliability-engineer
 - size:large
---

# Shed lower priority traffic

## Description

When resources are constrained during high-traffic events or when carbon intensity is high, more carbon emissions will be generated from your system. Adding more resources to support increased traffic requirements introduces more embodied carbon and more demand for electricity. Continuing to handle all requests during high carbon intensity will increase overall emissions for your system. Shedding traffic that is lower priority during these scenarios will save on resources and carbon emissions. This approach requires an understanding of your traffic, including which call requests are critical and which can best withstand retry attempts and failures.


## Solution

From an energy efficiency perspective, shedding lower priority traffic during high traffic and high carbon intensity periods will reduce the overall energy required to support traffic. 

From a hardware efficiency perspective, shedding lower priority traffic during high traffic and high carbon intensity periods will reduce the total number of hardware resources needed to support traffic. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing peak CPU utilization will impact SCI as follows:

- `E`: Shedding traffic means your system is handling fewer requests, resulting in lower energy requirements. 
- `M`: Shedding traffic means fewer hardware resources are needed to handle it, resulting in lower embodied carbon requirements to support the system.

## Assumptions
Your traffic must be prioritized and identified so that you can programmatically determine which can be shed and which is critical for system functionality. 

## Considerations
Consider having an exponential shedding policy that increases shedding exponentially as traffic climbs. This will help reduce the impact of traffic with high variance "spikes".


## References
- [https://github.com/Green-Software-Foundation/green-software-patterns/issues/43](https://github.com/Green-Software-Foundation/green-software-patterns/issues/43)
- [Using load shedding to avoid overload](https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/)
