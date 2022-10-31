---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
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
Terminate TLS at your border gateway and continue with non-TLS, to your application load balancer and onwards to your workload.



## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, implementing non-TLS communication will impact:

- `E`: By reducing CPU 
, we reduce the amount of energy needed to support the communication transport.
- `M`: By reducing the compute resource requirements, we reduce the total embodied carbon emissions.

## Assumptions
The application does not have compliance requirements for using end to end TLS. 

## Considerations
A balanced level of security can offer a more sustainable and energy efficient workload while a higher level of security may increase the requirements on compute resources.

Consider applying the principles of "Just Enough Security", and Terminate TLS at your border gateway for most standard applications that do not have strict compliance requirements.
