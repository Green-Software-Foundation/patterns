---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: cloud
description: CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic. 
tags: 
 - compute
 - monitoring
 - role:cloud-engineer
 - role:software-engineer
 - role:reliability-engineer
 - size:medium
---

# Optimize average CPU utilization

## Description

CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic. 

## Solution

Optimizing average CPU utilization means driving the average utilization value to an optimal level. To find that optimal level, you must understand how your system reacts to traffic and scale issues. If you system can scale quickly, a higher average CPU is ideal. If you system cannot scale quickly, lower average CPU values are generally better to provide additional buffer to support the longer scale times. 

From an energy efficiency perspective, optimizing and reducing the average CPU utilization values for your system reduces the overall energy required to support traffic and can make your system hardware requirements more predictable overall. 

From a hardware efficiency perspective, optimizing and reducing the average CPU utilization values for your system reduces the amount of resources needed to support traffic. If the traffic in your system spikes quickly, that typically requires resources to be on stand-by and under utilized. This pattern would reduce the amount of resources required to support traffic. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing average CPU utilization will impact SCI as follows:

- `E`: Optimized average CPU utilization can reduce the amount of energy needed to support the systems traffic from the reduced CPU requirements.
- `M`: Optimized average CPU utilization can reduce the amount of resources needed which will decrease the amount of embodied carbon required to support the system.

## Assumptions
- There is an assumption that traffic is expected to fluctuate during normal production usage because of external natural changes in how users consume. Monitoring the average CPU utilization helps to normalize these fluctuations and give a better overall sense of the system CPU utilization.

## Considerations
- There is no optimal CPU utilization value provided in this pattern, that should be determined from the system and its specific requirements.
- Reducing average CPU utilization could be achieved by adding more hardware to better load balance. The software practioner should try to find efficiencies within the system that don't involve introducing more hardware and therefore additional embodied carbon.
 
## References
