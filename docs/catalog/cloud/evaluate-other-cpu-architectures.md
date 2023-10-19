---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
description: [PATTERN_DESCRIPTION_METADATA]
tags: 
 - cloud
 - size:small
---

# Evaluate other CPU architectures

## Description

Applications are built with software architectures that are the best fit for the business need they are solving. Cloud providers make it easy also to evaluate other CPU types as x86-64 which can be included in the evaluation.

## Solution

Cloud providers provide offerings of cost effective alternatives that feature a good performance per watt alternative.
Evaluate the usage of other CPU architectures besides x86_64 for the application in regards of energy efficiency and execution performance.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, evaluate other CPU architectures can impact:

- `E`: Other CPU architectures can provide better energy efficiency for the application use case and can therefore reduce the energy consumption

## Assumptions

- Assumes that the framework can be executed on other CPU architectures as well and is optimized for it

## Considerations

- Also consider specialized accelerators for workloads cloud providers might offer

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)

