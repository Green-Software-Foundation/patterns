---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- cloud
- security
- networking
- compute
- kubernetes
- role:software-engineer
- size:medium
---

# Use cloud native network security tools and controls

## Description
Network & Web Application Firewalls provide protection against [most common attacks](https://owasp.org/Top10/) and load shedding bad bots. Using these capabilities helps remove unnecessary data transmission and reduces the burden on the cloud infrastructure, with lower bandwidth and less infrastructure requirements.

## Solution
Filter Ingress and Egress traffic at the source, to block any unauthorized data transmissions.

Use cloud native security tools as they scale based on demand, and use only the necessary infrastructure resources.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, using cloud native security controls and tools will impact:

- `E`: By filtering transmitted data, we reduce the amount of energy consumed by the networking resources.
- `M`: By scaling the tools based on demand and maximizing resource utilization, we reduce the total embodied carbon emissions.

## Assumptions
Deployment and configuration of the security tools is automated.

## Considerations
Consider implementing a Zero Trust Model, where security controls are layered.

## References
Microsoft Azure Well Architected Framework [sustainability patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-security)
