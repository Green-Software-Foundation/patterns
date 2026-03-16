---
version: 1.0
submitted_by: srini1978, markus-ntt-seidl
published_date: 2023-10-25
category: cloud
description: When making calls across process boundaries to either databases or file systems or REST APIs, relying on synchronous calls can cause the calling thread to become blocked, putting additional load on the CPU
tags: 
 - cloud
 - size:medium
---

# Use Asynchronous network calls instead of synchronous

## Description

When making calls across process boundaries to either databases or file systems or REST APIs, relying on synchronous calls can cause the calling thread to become blocked, putting additional load on the CPU. 

## Solution

Using asynchronous patterns frees the calling thread from being blocked on the response and, as such, additional work can be achieved without CPU cycles being consumed. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using asyncronous calling patterns impacts SCI as follows:

- `E`: Optimal utilization of the CPU leads to reduced energy consumption
- `M`: Optimized average CPU utilization can reduce the amount of resources needed which will decrease the amount of embodied carbon required to support them

## Assumptions

- The specific library for making asynchronous calls is available in the language being used for web development e.g. Task parallel library in C#.

## Considerations

- Consider higher level patterns for asynchronous communication as well e.g. Queues, Topics and Streams

## References

- Async/Await (https://en.wikipedia.org/wiki/Async/await)
- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
