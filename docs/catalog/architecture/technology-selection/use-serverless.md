---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2023-01-17
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:small
 - serverless
---

# Use serverless cloud services

## Description

Serverless cloud services are services that the cloud provider manages for the application. These scale dynamically with the workload needed to fulfill the service task and apply best practices to keep resource usage minimal.

## Solution

Evaluate serverless based on your application requirements.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation. using serverless cloud services will impact:

- `I`: Resources are only running when in use and shared over many applications, the carbon intensity will decrease. There is a slight increase in provisioning serverless structures (for example AWS Lambda cold starts), overall the carbon intensity still decreases.
- `M`: Serverless architectures share resources and only use resources when needed, this reduces the embodied carbon.

## Assumptions

- The cloud provider provides serverless services for the technologies the application uses
- There is an assumption that the application can benefit from serverless architectures

## Considerations

- Evaluate and consider what workloads can be moved to serverless. Using serverless patterns can involve a complete redesign of the application architecture.
- Consider if your application can afford a cold start during serverless resource initialization. 

## References

- [Azure Dev Blog](https://devblogs.microsoft.com/sustainable-software/adopting-azure-serverless-architectures-to-help-reduce-co2-emissions-part-1/)
