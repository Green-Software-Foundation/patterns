---
version: 1.0
submitted_by: yelghali
published_date: 2022-11-10
category: cloud
description: Transport Layer Security (TLS) ensures that all data passed between the web server and web browsers remain private and encrypted. However, terminating and re-establishing TLS increases CPU usage and might be unnecessary in certain architectures.
tags: 
- cloud
- security
- compute
- kubernetes
- role:software-engineer
- size:medium
---

# Terminate TLS at border gateway

## Description
Transport Layer Security (TLS) ensures that all data passed between the web server and web browsers remain private and encrypted. However, terminating and re-establishing TLS increases CPU usage and might be unnecessary in certain architectures. 


## Solution
Terminate TLS at your border gateway and continue with non-TLS to your application load balancer and onwards to your workload.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Implementing non-TLS communication will impact SCI as follows:

- `E`: By reducing CPU, the amount of energy needed to support the communication transport is reduced.
- `M`: By reducing the compute resource requirements, the total embodied carbon emissions are reduced.

## Assumptions
The application does not have compliance requirements for using end-to-end TLS. 

## Considerations
A balanced level of security can offer a more sustainable and energy efficient workload while a higher level of security may increase the requirements on compute resources.

Consider applying the *Just Enough Security* (JES) model and terminate TLS at your border gateway for most standard applications that do not have strict compliance requirements.


## References
[Microsoft Azure Well-Architected Framework Sustainability Patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-security)

