---
version: 1.0
submitted_by: greenhsu123
published_date: tbd
category: cloud
tags: 
 - networking
 - role:cloud-engineer
 - size:small
---

# Reduce Transmitted Data

## Description
From an energy-efficiency perspective, it's better to minimise the size of the data transmitted so that less energy is required because the network traffic is reduced. 

## Solution
Minimise the size of data transmitted by only sending properties or values deemed necessary. 

## SCI Impact
`SCI = (E * I) + M per R`
[Sofware Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation. Reducing the size of data will impact one part:

- `E`: We reduce the total electricity required by reducing network traffic. 
- `M`: By reducing the total size of data stored, we reduce the total embodied carbon.

## Assumptions
Suppose we choose to transfer data  (e.g. payloads) to the client side as it is because some properties or values may be needed later. A better solution would be to consider curating the data set, ensuring only necessary properties are sent across the network so the overall network traffic is reduced. And in many use cases, certain properties or values can be correlated later. 

Another consideration worth noting is the choice between different data formats, e.g. XML v.s. Protobuf, where the latter is much more compact, will affect the overall network traffic. 

## Considerations
- It may reduce cloud bills because minimising the size of the data transmitted will cost less. 
- If we minimise the dataset by taking away properties or values, there may be overhead to corelate the missing properties or values.s

## References
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)