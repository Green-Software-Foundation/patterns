---
version: 1.0
submitted_by: camcash17
published_date: 2022-11-10
category: cloud
description: In a given application, there may be a need to utilize multiple environments in the application workflow. Typically, a development environment is used for regular updates, while staging or testing enviroments are used to make sure there are no issues before code reaches a production environment where users may have access. Each added environment has an increasing energy impact, which in turn creates more emissions. As such, it is important to understand the necessity of each enviroment and it's environmental impact.
tags: 
 - cloud
 - deployment
---

# Minimize the total number of deployed environments

## Description

In a given application, there may be a need to utilize multiple environments in the application workflow. Typically, a development environment is used for regular updates, while staging or testing environments are used to make sure there are no issues before code reaches a production environment where users may have access.

Each added environment has an increasing energy impact, which in turn creates more emissions. As such, it is important to understand the necessity of each environment and it's environmental impact.

## Solution

From an energy-efficiency perspective, it's better to minimize the amount of deployed environments for an application so that less resources are provisioned and less energy is required.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Reducing the amount of deployed environments will impact SCI as follows:

- `E`: We reduce the total electricity required by reducing provisioned resources.
- `M`: By reducing the amount of nodes running on underlying machines, the total embodied carbon is lower.

## Assumptions

Suppose we choose to remove a deployed performance environment for an application. Another existing environment like `QA` could be repurposed for both quality assurance and performance testing to save and optimize existing resources.

## Considerations

It may reduce cloud bills because minimising the total amount of provisioned resources will cost less. It may also create a bottleneck in the application life cycle, losing an environment created for the sole purpose of performance or QA testing.

## References

- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)
