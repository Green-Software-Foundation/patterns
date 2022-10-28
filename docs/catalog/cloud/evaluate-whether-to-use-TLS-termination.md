---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- security
- compute
- kubernetes
- role:software-engineer
- size:medium
---

# Evaluate whether to use TLS termination

## Description
Transport Layer Security (TLS) ensures that all data passed between the web server and web browsers remain private and encrypted. However, terminating and re-establishing TLS increases CPU utilization and might be unnecessary in certain architectures. 

A balanced level of security can offer a more sustainable and energy efficient applications, while a higher level of security may increase the compute resource requirements.

## Solution
Consider if you can terminate TLS at your border gateway and continue with non-TLS to your application load balancer and onwards to your workload.



## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, implementing non-TLS communication will impact:

- `E`: By reducing CPU utilization, we reduce the amount of energy needed to support the communication transport.
- `M`: By reducing the compute resource requirements, we reduce the total embodied carbon emissions.

## Assumptions
The application does not have compliance requirements for using end to end TLS. 

## Considerations
A balanced level of security can offer a more sustainable and energy efficient workload while a higher level of security may increase the requirements on compute resources.
