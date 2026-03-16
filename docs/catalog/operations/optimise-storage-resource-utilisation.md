---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: cloud
description: It's better to maximise storage utilisation so the storage layer is optimised for the task, not only in terms of energy proportionality but also in terms of embodied carbon. Two storage units running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilised storage unit could be more efficiently used for another task or process.
tags: 
 - storage
 - role:cloud-engineer
 - role:software-engineer
 - size:small
---

# Optimise storage utilization

## Description
It's better to maximise storage utilisation so the storage layer is optimised for the task, not only in terms of energy proportionality but also in terms of embodied carbon. 

Two storage units running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilised storage unit could be more efficiently used for another task or process.

## Solution
Move storage resources away from underutilised storage resources. 

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Moving storage resources will impact SCI as follows:

- `E`: Moving storage resources away from underutilised storage will *increase* the total storage utilisation. The more storage that is utilised, the more efficient it becomes at turning energy into useful operations. Therefore rightsizing storage volumes should reduce the energy consumption of processes.
- `M`: By reducing the total number of storage volumes required, the total embodied carbon is lower.

## Assumptions
If we choose oversized storage resources *occasionally* because there may be a burst of workload, then undersizing them will reduce the margin available to handle the peak load. A better solution would be to consider an auto-scaling architecture that automatically scales the number of storage resources.


## Considerations
- It may reduce cloud bills, as using less storage volumes will cost less. 
- If auto-scaling architecture is absent, there is more overhead for handling spikes in load.

## References
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
