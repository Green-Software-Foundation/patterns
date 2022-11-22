---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
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

Adapt serverless services for the application.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation. using serverless cloud services will impact:

- `E`: Serverless architectures share resources and only use resources when needed, this reduces the embodied carbon.
- `I`: Resources are only running when in use and shared over many applications, the carbon intensity will decrease. There is a slight increase in provisioning serverless structures (for example AWS Lambda cold starts), overall the carbon intensity still decreases.

## Assumptions

- The cloud provider provides serverless services for the technologies the application uses
- There is an assumption that the application can benefit from serverless architectures

## Considerations

- Using serverless cloud services can lead involve a complete reevaluation of the architecture of the application, which might not be feasible. Evaluate the benefits beforehand

## References

- [Azure Dev Blog](https://devblogs.microsoft.com/sustainable-software/adopting-azure-serverless-architectures-to-help-reduce-co2-emissions-part-1/)
