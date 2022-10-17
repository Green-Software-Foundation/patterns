---
version: 1.0
submitted_by: greenhsu123
published_date: TBD
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:small
---

# Queuing non-urgent processing requests

## Description

All systems have periods of peak and low load. From a hardware-efficiency perspective, we are more efficient with hardware if we minimise the impact of requests spikes with an implementation that allows an even utilisation of components. From an energy-efficiency perspective, we are more efficient with energy if we ensure that idle resources are kept to a minimum. 

## Solution

Utilise a message queue, so requests that do not require immediate processing are queued. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, queuing non-urgent requests will impact two parts:

- `M`: By reducing the total number of computing equipment required, we reduce the total embodied carbon.
- `E`: By reducing the total number of idle resources, we reduce the total electricity required.

## Assumptions
- There is an assumption that the components in your system can communicate with a message queue asynchronously. If your component is the producer, it can add requests to the queue without waiting for the previous sent to be processed. If your component is the consumer, it will only process requests when they are available. We assume that no components in the system ever stalled while waiting for another. 


## Considerations
- Decoupling components of your system can introduce unnecessary complexity as well as managing a message queue for your system can introduce unnecessary overhead, so careful consideration should be taken to evaluate if a message queue is suited for your system


## References
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)
- [Message Queue](https://aws.amazon.com/message-queue/)
- [Optimise software and architecture for asynchronous and scheduled jobs](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/optimize-software-and-architecture-for-asynchronous-and-scheduled-jobs.html)
