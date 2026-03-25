---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2023-09-28
category: cloud
description: Modern applications need to communicate with other applications on a regular basis. Since these other applications have their own deployment schedule, downtimes and availability, the network connection to these application might have problems. If the other application is not reachable, all network requests against this other application will fail and future network requests are futile.
tags: 
 - compute
 - size:medium
---

# Use circuit breaker patterns
 
## Description

Modern applications need to communicate with other applications on a regular basis. Since these other applications have their own deployment schedule, downtimes and availability, the network connection to these application might have problems.
If the other application is not reachable, all network requests against this other application will fail and future network requests are futile.

## Solution

Circuit breaker patterns reject the request to the other application if health checks against the other application have failed to complete successfully. In this case a lot of network requests, and energy, can be saved.
The circuit breaker will reset itself automatically, if health checks against the other application are successful again.

## SCI Impact
 
`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

The circuit breaker pattern reduces the following aspect:

- `E`: Reduces the energy consumed, as requests are not executed if the other system is known to be not available

## Assumptions

- Assumes that the communication target can be checked for availability

## Considerations

- Consider implementing an back-off strategy to automatically re-enable the requests if the resource becomes available again
- Consider handling different errors of the called application differently. For example exceptions that indicate that the called application will not be available for a longer time should be handled differently than exceptions that indicate only a short time in-availability.

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
- [Azure Circuit Breaker Pattern Description](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
