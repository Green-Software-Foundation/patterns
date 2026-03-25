---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: cloud
description: It's better to have one VM running at a higher utilization than two running at low utilization rates, not only in terms of energy proportionality but also in terms of embodied carbon. Two servers running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilized server could be more efficiently used for another task or process.
tags: 
 - compute
 - role:cloud-engineer
 - size:small
---

# Match utilization requirements of virtual machines (VMs)

## Description

It's better to have one VM running at a higher utilization than two running at low utilization rates, not only in terms of energy proportionality but also in terms of embodied carbon.

Two servers running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilized server could be more efficiently used for another task or process.

## Solution

Rightsize your VMs by changing the number of resources allocated to a VM to match the utilization requirements of the VM. For example, adding a vCPU if the VM is running high CPU utilization or removing memory if the server is not using all of its allocated memory.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Rightsizing oversized VMs will impact SCI as follows:

- `E`: Rightsizing oversized VMs will *increase* the total server utilization. The more a server is utilized, the more efficient it becomes at turning energy into useful operations. Therefore rightsizing VMs should reduce the energy consumption of your processes.
- `M`: By reducing the total number of servers required to run a process, the total embodied carbon is lower.

## Assumptions

If we choose an oversized VM because *occasionally* there is a burst of work (peak load) then undersizing them will reduce the margin available to handle the peak traffic. A better solution would be to consider an auto-scaling architecture that would automatically scale the number of VMs.

## Considerations
- It may reduce your cloud bill as reducing the spec of your VMs will cost less.
- If you do not have an auto-scaling architecture, there is less overhead for handling spikes in load.

## References
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
