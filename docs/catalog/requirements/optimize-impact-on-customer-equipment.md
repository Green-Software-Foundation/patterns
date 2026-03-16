---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2022-11-09
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

Understand the devices and equipment your customers use to consume your services. Implement software patterns and architectures to minimize the need for customers to replace devices and upgrade equipment. 
A few examples on how this could be achieved:
* Implement new features using code that is backwards compatible with older hardware and operating system versions or disable them on older hardware only so the application can still be used
* Support older browser versions and optimize the UX for an older tier of CPUs
* Optimize network bandwidth for older devices or customers that have limited connectivity

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, optimize impact on customer devices  will impact two parts:

- `I`: Optimizing for older hardware might reduce the carbon intensity if it also runs more efficiently in general
- `M`: Using older devices allows hardware to be used longer and therefore reduces the embodied carbon impact

## Assumptions

- This pattern assumes that the team does have sufficient time and resources to implement backwards compatibility and optimize the application

## Considerations

- Consider the other cloud patterns to optimize the application itself inside the cloud environment

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_software_a6.html)
