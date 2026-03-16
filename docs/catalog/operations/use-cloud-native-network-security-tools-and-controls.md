---
version: 1.0
submitted_by: yelghali
published_date: 2022-11-10
category: cloud
description: Network and web application firewalls provide protection against most common attacks and load shedding bad bots. These tools help to remove unnecessary data transmission and reduce the burden on the cloud infrastructure, while also using lower bandwidth and less infrastructure.
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
Network & web application firewalls provide protection against [most common attacks](https://owasp.org/Top10/) and load shedding bad bots. These tools help to remove unnecessary data transmission and reduce the burden on the cloud infrastructure, while also using lower bandwidth and less infrastructure.

## Solution
Filter ingress and egress traffic at the source to block any unauthorized data transmissions.

Use cloud native security tools, as they scale based on demand, and only the necessary infrastructure resources.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using cloud native security controls and tools will impact SCI as follows:

- `E`: By filtering transmitted data, less energy is consumed by the networking resources.
- `M`: By scaling the tools based on demand and maximizing resource utilization, the total embodied carbon emissions are lower.

## Assumptions
Deployment and configuration of the security tools is automated.

## Considerations
Consider implementing a zero trust model, where security controls are layered.

## References
[Microsoft Azure well architected framework sustainability patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-security)
