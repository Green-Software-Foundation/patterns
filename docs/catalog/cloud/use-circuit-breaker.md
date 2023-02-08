---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
description: [PATTERN_DESCRIPTION_METADATA]
tags: 
 - compute
 - size:medium
---

# Use circuit breaker patterns

## Description

Modern applications need to communicate with other applications on a regular basis. These other applications have their own deployment schedule, downtimes and availability or the network connection to these application might have problems.
If the other application becomes unavailable all network requests against this other application will fail and future network requests are futile.

## Solution

Circuit breaker patterns reject the request to the other application if health checks against the other application have failed to complete successfully. In this case a lot of network requests can be saved. 
The circuit breaker will reset itself automatically, if health checks against the other application are successful.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

The circuit breaker pattern reduces the following aspect:

- `E`: Reduces the energy consumed, as requests are not executed if the other system is known to be not available

## Assumptions

- Assumes that the communication target can be checked for availability

## Considerations

- Consider implementing an back-off strategy to automatically re-enable the requests if the resource becomes available again

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)