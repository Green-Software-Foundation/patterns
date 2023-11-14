---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
description: [PATTERN_DESCRIPTION_METADATA]
tags: 
 - cloud
 - size:small
---

# Use DDoS protection

## Description

Distributed Denial of Service (DDoS) is used to increase the load of server in a way, that they are unable to respond to any legitimate requests. This is mostly done to harm the owner of the service or hardware. 
Due to the nature of attack, a lot of environmental resources are used up by nonsensical requests.

## Solution

All cloud providers provide some form of DDoS protection (AWS Shield, Azure DDoS Protection, GCP DDoS Protection, CloudFlare, ...) that can prevent those attacks.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

This pattern affects the SCI as follows:

- `R`: The amount of requests will be reduced, due to not fulfilling DDoS requests

## Assumptions

- Assumes that the budget of the project can afford the costs for the DDoS protection service

## Considerations

- Consider purchasing the advanced protection tiers of the cloud providers to be fully protected against similar DDoS attack patterns

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
