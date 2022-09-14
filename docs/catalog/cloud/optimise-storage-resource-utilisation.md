---
version: 1.0
submitted_by: greenhsu123
published_date: tbd
category: cloud
tags: 
 - storage
 - role:cloud-engineer
 - role:software-engineer
 - size:small
---

# Optimize Storage Utilization

## Description
From both an embodied carbon angle and an energy proportionality angle, it's better to maximise storage utilisation so the storage layer is optimised for the task. 

From the embodied carbon angle, the unused capacity of underutilised storage could be more efficiently used by another task or process. From the energy proportionality angle, two storage running at low utilisation rates will consume more energy than one storage running at a high utilisation rate.

## Solution
Move storage resources away from underutilised storage resources. 

## SCI Impact
`SCI = (E * I) + M per R`

Concerning the SCI equation. Moving storage resources will impact two parts:

- `M`: By reducing the total number of storage volumes required, we reduce the total embodied carbon.
- `E`: Moving storage resources away from underutilised storage will **increase** the total storage utilisation. The more storage is utilised, the more efficient it becomes at turning energy into useful operations, as per the energy proportionality. Therefore rightsizing storage volumes should reduce the energy consumption of processes, and consequently, the `E` number should decrease.

## Assumptions
If we choose oversized storage resources *occasionally* because there may be a burst of workload, then undersized them will reduce the headroom available to handle the peak. A better solution would be to consider an auto-scaling architecture that automatically scales the number of storage resources.


## Considerations
- It may reduce cloud bills, as using less storage volumes will cost less. 
- If auto-scaling architecture is absent, there is more overhead for handling spikes in load.

## References
