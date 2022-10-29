---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- compute
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Design for independent scaling of logical components

## Description
A microservice architecture may reduce the compute resources required, as it allows for independent scaling of its logical components and ensures they are scaled according to the demand.

## Solution

Use [Dapr](https://dapr.io) Framework or other cloud native projects to help you separate your application functionality into different microservices, to allow independent scaling of its logical components.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, designing for independent scaling of logical components will impact:

- `E`: By optimizing the most consuming application components, we reduce the amount of energy consumed by the application globally.
- `M`: By scaling the components based on demand and maximizing resource utilization, we reduce the total embodied carbon emissions.

## Assumptions

The application logical components are deployed on platforms with auto-scaling capabilities, such as Kubernetes.

## Considerations
Microservice frameworks use additional components or resources in order to provide additional capabilities (messaging, secure traffic, tracing, etc.). This may result in a increase in carbon emissions.

In practice, use only the frameworks capabilities that are necessary.
