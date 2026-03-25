---
version: 1.0
submitted_by: yelghali
published_date: 2024-03-14
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
Containers allow resources to be used more flexibly, as workloads can be easily moved between machines. Containers allow for bin packing and require less compute resources than virtual machines, meaning a reduction in unnecessary resource allocation and an increase in utilization of the compute resources.

## Solution
Containerize your applications with their minimal dependencies. This can be done using tools for generating Dockerfiles and Kubernetes manifests.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Containerizing workloads impacts SCI as follows:

- `E`: By reducing CPU and RAM usage, we reduce the amount of energy required.
- `M`: Reducing compute resources decreases the embodied carbon emissions.

## Assumptions
- The application supports containerization.

## Considerations
- Using containers may not be enough to reduce the carbon impact of a large monolith application.
- Consider modernizing your applications into micro-service architectures that allow independent sizing and scaling of their logical components.
- You may use a container orchestration system for automating software deployment, scaling, and management.

## References
Microsoft Azure Well Architected Framework [sustainability patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-platform)
