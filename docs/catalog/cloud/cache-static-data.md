---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: cloud
description: From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally through a cache rather than accessing it remotely over the network. Shortening the distance a network packet travels means that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment. 
tags: 
 - networking
 - role:cloud-engineer
 - size:small
---

# Cache static data

<PatternComponent></PatternComponent>

## Description
From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally through a cache rather than accessing it remotely over the network. 

Shortening the distance a network packet travels means that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment. 

## Solution
Caching static data, such as images or audio, instead of transferring it over the network. 

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Reducing the distance travelled will impact SCI as follows:

- `E`: By reducing the distance a packet travels, less total electricity is required. 
- `M`: By reducing the total amount of computing equipment traversed, the total embodied carbon is lower.

## Assumptions
Suppose we transfer all the data of an application across the network as often as needed because some of the data may require a regular update. A better solution would be to consider a caching mechanism for static data that doesn't require frequent updates. This will reduce network traffic because we are doing local readings of the static data. 


## Considerations
- It may reduce cloud bills because shortening the path that a network packet travels will cost less. 
- If data is not static anymore, there is more overhead to re-architect the application to deal with the new data requirement.
- It is assumed that a local in-memory cache of the server(s) is used to implement this pattern. If any external cache infrastructure is leveraged, then SCI score may not reduce considerably as we have to account for the E and M values of the external infrastructure in the equation. 

## References
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)

