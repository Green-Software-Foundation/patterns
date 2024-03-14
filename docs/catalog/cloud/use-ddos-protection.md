---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2024-03-14
category: cloud
description: Distributed denial of service (DDoS) attacks are used to increase the server load so that it is unable to respond to any legitimate requests. This is usually done to harm the owner of the service or hardware.
tags: 
 - cloud
 - size:small
---

# Use DDoS protection

## Description

Distributed denial of service (DDoS) attacks are used to increase the server load so that it is unable to respond to any legitimate requests. This is usually done to harm the owner of the service or hardware. 
Due to the nature of attack, a lot of environmental resources are used up by nonsensical requests.

## Solution

All cloud providers have some form of DDoS protection (AWS Shield, Azure DDoS Protection, GCP DDoS Protection, CloudFlare, etc.) that can prevent those attacks.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

DDoS protection impacts the SCI as follows:

- `R`: The functional unit is impacted because the amount of requests will be reduced.

## Assumptions

- There is budget for the DDoS protection service.

## Considerations

- Consider purchasing advanced protection to be fully protected against other attack patterns similar to DDoS attacks.

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
                                                           
