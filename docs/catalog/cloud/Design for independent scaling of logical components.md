---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- compute
- cloud
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Scale logical components independently

## Description
A microservice architecture may reduce the compute resources required, as it allows each independent component to be scaled according to its own demand.

## Solution

Use cloud native projects help you separate your application functionality into different microservices, to allow independent scaling of its logical components.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, scaling logical components independently will impact:

- `E`: By optimizing the scaling of the most consuming application components, we reduce the amount of energy consumed by the application globally.
- `M`: By scaling each component independently, we can right size its resources to maximize their utilization, thereby reducing the application total embodied carbon emissions.

## Assumptions

- The application logical components are deployed on platforms with auto-scaling capabilities, such as Kubernetes.

## Considerations
- Microservice frameworks use additional components or resources in order to provide additional capabilities (messaging, secure traffic, tracing, etc.). This may result in a increase in carbon emissions. In practice, use only the frameworks capabilities that are necessary.
- Do not make microservices too small as communication incours overhead which has a carbon impact.
- Consider alternatives to http/s for communication, like GPRC and others.
