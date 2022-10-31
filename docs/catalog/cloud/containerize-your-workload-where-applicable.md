---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- cloud
- compute
- kubernetes
- role:cloud-engineer
- size:medium
---

# Containerize your workloads

## Description
Containers may reduce unnecessary resource allocation and increase utilization of the compute resources, as they allow for bin packing and require less compute resources than virtual machines.

## Solution
Use [Draft](https://github.com/Azure/draft) tool to simplify application containerization by generating Dockerfiles and Kubernetes manifests.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, containerizing workloads will impact:

- `E`: By reducing CPU and RAM usage, we reduce the amount of energy required.
- `M`: Reducing compute resources decreases the embodied carbon emissions.

## Assumptions
The application supports containerization.

## Considerations
Using containers may not be enough to reduce carbon impact of a large monolith application. 

Consider modernizing your applications into micro-services architectures, that allow independent sizing and scaling of their logical components.

## References
Microsoft Azure Well Architected Framework [sustainability patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-platform)
