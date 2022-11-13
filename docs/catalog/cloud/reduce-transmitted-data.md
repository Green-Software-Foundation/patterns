---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: cloud
description: From an energy-efficiency perspective, it's better to minimize the size of the data transmitted so that less energy is required because the network traffic is reduced. 
tags: 
 - networking
 - role:cloud-engineer
 - size:small
---

# Reduce transmitted data

## Description
From an energy-efficiency perspective, it's better to minimize the size of the data transmitted so that less energy is required because the network traffic is reduced. 

## Solution
Minimize the size of data transmitted by only sending properties or values deemed necessary. 

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Reducing the size of data will impact SCI as follows:

- `E`: We reduce the total electricity required by reducing network traffic. 
- `M`: By reducing the total size of data stored, the total embodied carbon is lower.

## Assumptions
- Suppose we choose to transfer data (e.g. payloads) to the client side as it is because some properties or values may be needed later. A better solution would be to consider curating the data set, ensuring only necessary properties are sent across the network so the overall network traffic is reduced. In many use cases, certain properties or values can be correlated later. 

- Another consideration is that different data formats will affect the overall network traffic depending on their size. For example, Protobuf is much more compact than XML. 

## Considerations
- It may reduce cloud bills because minimising the size of the data transmitted will cost less. 
- If we minimize the data set by taking away properties or values, there may be overhead to corelate the missing properties or values.

## References
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
