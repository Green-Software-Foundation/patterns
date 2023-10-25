---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2023-10-25
category: cloud
description: Applications are built with a software architecture that best fits the business need they are serving. Cloud providers make it easy to evaluate other CPU types
tags: 
 - cloud
 - size:small
---

# Evaluate other CPU architectures

## Description

Applications are built with a software architecture that best fits the business need they are serving. Cloud providers make it easy to evaluate other CPU types, such as x86-64, which can be included in the evaluation along with many cost effective alternatives that feature good performance per watt.


## Solution

Other CPU architectures besides x86_64 should be evaluated for the application with energy efficiency and execution performance in mind.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Evaluating other CPU architectures can impact SCI as follows:

- `E`: Other CPU architectures may provide better energy efficiency for the application use case and, as such, reduce the overall energy consumption

## Assumptions

- Assumes that the framework can be executed on other CPU architectures as well and is optimized for it

## Considerations

- Also consider specialized accelerators for workloads that cloud providers might offer

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)

