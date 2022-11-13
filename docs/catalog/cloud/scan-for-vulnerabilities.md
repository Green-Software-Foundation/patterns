---
version: 1.0
submitted_by: yelghali
published_date: 2022-11-10
category: cloud
description: Many attacks on cloud infrastructure seek to misuse deployed resources, which leads to an unnecessary spike in usage and cost. 
tags: 
- cloud
- security
- compute
- kubernetes
- role:cloud-engineer
- size:medium
---

# Scan for vulnerabilities

## Description
Many attacks on cloud infrastructure seek to misuse deployed resources, which leads to an unnecessary spike in usage and cost. 

[Vulnerability scanning](https://en.wikipedia.org/wiki/Vulnerability_scanner) and [endpoint detection and response](https://en.wikipedia.org/wiki/Endpoint_detection_and_response) (EDR) tools help minimize the window of opportunity for attackers and mitigate any potential malicious usage of resources.

## Solution
The EDR capabilities provide advanced attack detections and are able to take response actions to remediate those threats. The unnecessary resource usage created by these common attacks can quickly be discovered and remediated, often without the intervention of a security analyst.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scanning for vulnerabilities will impact SCI as follows:

- `M`: By preventing heavy misusage of resources, unnecesseary embodied carbon emissions are avoided.

## Assumptions
A zero trust security policy is implemented, which covers security controls for infrastructure, applications, data, networking, [role-based access control](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC), and devices. 

## Considerations
Leverage cloud native EDR and scanning services, which scale based on demand, to maintain awareness of the carbon impact of the security tooling.

## References
[Microsoft Azure well architected framework sustainability patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-security)

