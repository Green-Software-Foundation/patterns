---
version: 1.0
submitted_by: yelghali
published_date: tbd
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
A service mesh deploys additional containers for communication, typically in a sidecar pattern, to provide more operational capabilities leading to an increase in CPU usage and network traffic. 

Nevertheless, it allows you to decouple your application from these capabilities as it moves them out from the application layer, and down to the infrastructure layer.

## Solution
- Use a service mesh if your application lacks features that can be added by one, such as distributed tracing or traffic encryption.
- A service mesh can typically be enabled only for some resources, which allows you to use it for required applications only, and not the entire platform.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, not using a service mesh will impact:

- `E`: By reducing CPU usage and network traffic, we reduce the amount of energy required.
- `M`: reducing CPU usage and network data reduces the amount of resources required, which decreases the embodied carbon emissions.

## Assumptions
The application does not have compliance requirements for using a service mesh. 

## Considerations
Should you use a service mesh ? The answer depends on your requirements. 
Typically you would use a service mesh where there is a corporate policy that traffic on the network must be encrypted for all applications. 
Other scenarios might include distributed tracing and traffic splitting for A/B testing.
