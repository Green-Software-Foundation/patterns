# Choosing a region that is the closest to users when transferring data

## Version
1.0

## Submitted By
Sarah Hsu

## Published Date
TBD

## Intent
Choosing a region that is the closest to users when transferring data

## Tags
Cloud, Networking, Cloud Engineer, Small

## Problem
From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware. 

## Solution
Choose a region that is the closest to the majority of where the network packets are going. 

## SCI Impact
`SCI = (E * I) + M per R`

Concerning the SCI equation. Reducing the distance will impact two parts:

- `M`: By reducing the total number of computing equipment traversed, we reduce the total embodied carbon.
- `E`: By reducing the distance a packet travels, we reduce the total electricity required. 


## Assumptions
Suppose we choose a region that is further away from our users to deploy our applications because the region is more popular and may be first in line to receive new features or updates. A better solution would be to consider choosing a region closer to our users, so the data we transmit doesn't need to travel as far. 

## Pros & Cons
- **PRO**: It may reduce cloud bills because shortening the path that a network packet travel will cost less. 
- **CON**: If the closer region to your users is missing some features, there may be an overhead to finding a workaround in the meantime. 