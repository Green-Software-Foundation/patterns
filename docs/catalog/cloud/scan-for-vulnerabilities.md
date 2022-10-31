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
- role:cloud-engineer
- size:medium
---

# Scan for vulnerabilities

## Description
Many attacks on cloud infrastructure seek to misuse deployed resources for the attacker's direct gain leading to an unnecessary spike in usage and cost. 

[Vulnerability scanning](https://en.wikipedia.org/wiki/Vulnerability_scanner) and [Endpoint detection and response](https://fr.wikipedia.org/wiki/Endpoint_detection_and_response) tools help minimize the window of opportunity for attackers and mitigate any potential malicious usage of resources.

## Solution
The EDR capabilities provide advanced attack detections and are able to take response actions to remediate those threats. The unnecessary resource usage created by these common attacks can quickly be discovered and remediated, often without the intervention of a security analyst.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, scanning for vulnerabilities will impact:

- `M`: By preventing heavy misusage of resources, we reduce unnecesseary embodied carbon emissions.

## Assumptions
Zero Trust security policy is implemented, which covers security controls for infrastructure, applications, data, networking, [Role-based access control](https://en.wikipedia.org/wiki/Role-based_access_control) and devices. 

## Considerations
Leverage cloud native EDR and scanning services, as they scale based on demand, to keep aware of the carbon impact of the security tooling as well.
