---
version: 1.0
submitted_by: yelghali
published_date: 2024-03-14
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
A microservice architecture may reduce the amount of compute resources required as it allows each independent component to be scaled according to its own demand.

## Solution

Using cloud native projects can help you separate your application functionality into different microservices. This kind of microservice architecture allows for independent scaling of the application's logical components.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling logical components independently will impact SCI as follows:

- `E`: By optimizing the scaling of the most consuming application components, we reduce the amount of energy consumed by the application globally.
- `M`: By scaling each component independently, we can right-size its resources to maximize their utilization, thereby reducing the application's total embodied carbon emissions.

## Assumptions

- The application's logical components are deployed on platforms with auto-scaling capabilities, such as Kubernetes.

## Considerations
- Microservice frameworks use additional components or resources in order to provide additional capabilities (messaging, secure traffic, tracing, etc.). This may result in an increase in carbon emissions. As such, only the necessary framework capabilities should be used.
- Communication incurs overheads, which also have a carbon impact. As such, microservices should not be made too small. Alternatively, communication tools other than http/s should be considered, such as GPRC.
