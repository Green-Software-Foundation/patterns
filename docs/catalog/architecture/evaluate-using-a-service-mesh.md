---
version: 1.0
submitted_by: yelghali
published_date: 2024-03-14
category: cloud
tags: 
- cloud
- security
- network
- kubernetes
- role:cloud-engineer
- size:medium
---

# Use a service mesh only if needed

## Description
A service mesh deploys additional containers for communication, typically in a sidecar pattern, to provide more operational capabilities. This can result in an increase in CPU usage and network traffic but also allows you to decouple your application from these capabilities, moving them out from the application layer and down to the infrastructure layer.

## Solution
Use a service mesh if your application lacks features that can be added one by one, such as distributed tracing or traffic encryption. However, use it for required applications only, and not the entire platform.  

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Not using a service mesh impacts SCI as follows:

- `E`: By reducing CPU usage and network traffic, we reduce the amount of energy required.
- `M`: reducing CPU usage and network data reduces the amount of resources required, which decreases the embodied carbon emissions.

## Assumptions
The application does not have compliance requirements for using a service mesh. 

## Considerations
Consider alternative methods outside of an service mesh to fulfill application requirements, for example custom DNS servers or a configuration that is injected into the application
