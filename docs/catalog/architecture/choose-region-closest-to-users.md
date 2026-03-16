---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: cloud
description: From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware. 
tags: 
 - networking
 - role:cloud-engineer
 - size:small
---

# Choose the region that is closest to users

## Description
From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware. 

## Solution
Choose a region that is the closest to the majority of where the network packets are going. 

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Reducing the distance will impact SCI as follows:

- `E`: By reducing the distance a packet travels, less total electricity is required. 
- `M`: By reducing the total number of computing equipment traversed, the total embodied carbon is lower.

## Assumptions
Suppose we choose a region that is further away from our users to deploy our applications because the region is more popular and may be first in line to receive new features or updates. A better solution would be to consider choosing a region closer to our users, so the data we transmit doesn't need to travel as far. 

## Considerations
- It may reduce cloud bills because shortening the path that a network packet travel will cost less. 
- If the closer region to your users is missing some features, there may be an overhead to finding a workaround in the meantime. 

## References
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
