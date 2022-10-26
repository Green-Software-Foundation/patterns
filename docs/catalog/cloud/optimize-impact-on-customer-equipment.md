---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:small
---

# Optimize impact on customer devices and equipment

## Description

Applications run on customer hardware or are displayed on it. The hardware used by the customer has a carbon footprint embodied through the production and electricity required while running. Optimising your software design and architecture to extend the life of the customer devices reduces the carbon intensity of the application.
Ideally the customer can use the hardware until it's failure or until it becomes obsolete.


## Solution

Understand the devices and equipment your customers use to consume your services. Implement software patterns and architectures to minimize the need for customers to replace devices and upgrade equipment. For example, implement new features using code that is backwards compatible with older hardware and operating system versions, or manage the size of payloads so they don’t exceed the storage capacity of the target device.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, queuing non-urgent requests will impact two parts:

- `E`: [PATTERN_ENERGY_SCI_IMPACT]
- `I`: [PATTERN_INTENSITY_SCI_IMPACT]
- `M`: [PATTERN_EMBODIED_SCI_IMPACT]
- `R`: [PATTERN_RATE_SCI_IMPACT]

## Assumptions

- This pattern assumes that the team does have sufficient resources to implement backwards compatibility and optimize the application

## Considerations

- Consider the other cloud patterns to optimize the application itself inside the cloud environment

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_software_a6.html)
