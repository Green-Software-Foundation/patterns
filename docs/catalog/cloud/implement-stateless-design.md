---
version: 1.0
submitted_by: yelghali
published_date: 2022-11-10
category: cloud
description: Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. Applications that consume large memory or on-disk data require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks. 
tags: 
- cloud
- compute
- kubernetes
- role:software-engineer
- size:medium
---

# Implement stateless design

## Description
Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. 

Applications that consume large memory or on-disk data require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks. 

## Solution
Remove state from your design to reduce the in-memory or on-disk data required by the workload to function, hence requiring smaller compute sizes for hosting.

State can be either externalized in a noSQL database or an in-memory cache service.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Implementing stateless design will impact SCI as follows:

- `E`: Rightsizing the compute VM increases its utilization and therefore its energy efficiency.
- `M`: Stateless applications require smaller compute VMs, which means lower total embodied carbon emissions.


## Assumptions
The application design supports externalization of state.

## Considerations
Follow the [The 12-factor app methodology](https://12factor.net/) to design stateless applications.
