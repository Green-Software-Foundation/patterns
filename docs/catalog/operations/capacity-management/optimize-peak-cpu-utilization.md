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

# Optimize peak CPU utilization

## Description

CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic. 

## Solution

Optimizing peak CPU utilization can take many different forms but the key is to understand the processes utilizing your CPU and what actions drive increases and decreases. For example, loading a user's full profile could potentially require dozens of database queries, data processing threads and UI rendering that can drive CPU usage up. Adding caching layers, reducing the amount of data being transmitted and rendered, or queuing non-urgent requests up for later processing are good examples of ways to optimize CPU utilization and flatten out some of the spikes your system may see.  

From an energy efficiency perspective, optimizing and reducing the peak CPU utilization values for your system reduces the overall energy required to support traffic and can make your system hardware requirements more predictable overall. 

From a hardware efficiency perspective, optimizing and reducing the peak CPU utilization values for your system reduces the amount of resources needed to support traffic. If the traffic in your system spikes quickly, that typically requires resources to be on stand-by and under utilized. This pattern would reduce the amount of resources required to support traffic. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing peak CPU utilization impacts SCI as follows:

- `E`: Reduced peak CPU utilization will reduce the amount of energy needed to support the systems traffic from the reduced CPU requirements.
- `M`: Reduced peak CPU utilization will reduce the amount of resources needed which will decrease the amount of embodied carbon required to support the system.

## Assumptions
- There is an assumption that traffic is expected to fluctuate during normal production usage because of external natural changes in how users consume. If there are other reasons for the CPU utilization spikes caused by the system itself, these should be addressed separately. 

## Considerations
- There is no optimal CPU utilization value provided in this pattern, that should be determined from the system and its specific requirements.
- Reducing spikes in CPU utilization could be achieved by adding more hardware to better load balance. The software practioner should try to find efficiencies within the system that don't involve introducing more hardware and therefore additional embodied carbon.
 
## References
