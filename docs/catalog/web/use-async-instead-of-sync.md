---
version: 1.0
submitted_by: srini1978, markus-ntt-seidl
published_date: TBD
category: web
tags: 
 - web
---

# Use Asynchronous network calls instead of synchronous

## Description

When making calls across process boundaries to either databases or file systems or REST APIs, use asynchronous calling patterns compared to synchronous calls. 

## Solution

Using asynchronous patterns frees the calling thread from being blocked on the response and hence additional work is achieved without CPU cycles being consumed. Therefore this pattern drives optimal utilization of the CPU and Memory cycles contributing to lesser energy consumed.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

This pattern affects the SCI as follows:

- `E`: This pattern drives optimal utilization of the CPU, hence energy consumed is reduced
- `M`: Optimized average CPU utilization can reduce the amount of resources needed which will decrease the amount of embodied carbon required to support 

## Assumptions

- The specific library for making asynchronous calls is available in the language being used for web development. E.g Task parallel library in C#

## Considerations

[PATTERN_CONSIDERATIONS]

## References

- Async/Await (https://en.wikipedia.org/wiki/Async/await)
- Optimize Peak and Average CPU utilization (https://patterns.greensoftware.foundation/catalog/cloud/optimize-avg-cpu-utilization)
