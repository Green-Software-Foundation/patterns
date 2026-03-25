---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: cloud
description: All systems have periods of peak and low load. From a hardware-efficiency perspective, we are more efficient with hardware if we minimise the impact of request spikes with an implementation that allows an even utilization of components. From an energy-efficiency perspective, we are more efficient with energy if we ensure that idle resources are kept to a minimum. 
tags: 
 - cloud
 - role:cloud-engineer
 - size:small
---

# Queue non-urgent processing requests

## Description

All systems have periods of peak and low load. From a hardware-efficiency perspective, we are more efficient with hardware if we minimise the impact of request spikes with an implementation that allows an even utilization of components. From an energy-efficiency perspective, we are more efficient with energy if we ensure that idle resources are kept to a minimum. 

## Solution

Utilize a message queue so requests that do not require immediate processing are queued. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Queuing non-urgent requests will impact SCI as follows:

- `E`: By reducing the total number of idle resources, less total electricity is required.
- `M`: By reducing the total number of computing equipment required, the total embodied carbon is lower.

## Assumptions
There is an assumption that the components in your system can communicate with a message queue asynchronously. If your component is the producer, it can add requests to the queue without waiting for the previous sent to be processed. If your component is the consumer, it will only process requests when they are available. We assume that no components in the system ever stalled while waiting for another. 


## Considerations
Decoupling components of your system can introduce unnecessary complexity and managing a message queue might mean additional overheads. As such, you should give careful consideration as to whether a message queue is appropriate.


## References
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)
- [Message Queue](https://aws.amazon.com/message-queue/)
- [Optimise software and architecture for asynchronous and scheduled jobs](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/optimize-software-and-architecture-for-asynchronous-and-scheduled-jobs.html)
