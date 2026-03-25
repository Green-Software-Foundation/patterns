---
version: 1.0
submitted_by: yelghali
published_date: 2024-03-14
category: cloud
tags: 
- cloud
- compute
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Use cloud native processor VMs

## Description

Cloud virtual machines come with different capabilities based on different hardware processors. As such, using virtual machines based on the efficiency of their processors would impact hardware efficiency and reduce carbon emissions.


## Solution

Using new cloud virtual machines that have been engineered with [cloud native processors](https://www.forbes.com/sites/davealtavilla/2022/10/13/amperes-efficient-128-core-cloud-native-processor-builds-momentum-in-sustainable-data-centers/) allows you to efficiently run scale-out, cloud-native workloads and consume energy efficiently.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using energy efficient hardware impacts SCI as follows:

- `E`: By using energy efficient hardware, we reduce the total embodied carbon emissions.
- `M`: By using energy efficient hardware, we also reduce the embodied emissions.

## Assumptions

The cloud provider offers VM SKUs based on efficient hardware.


## Considerations

Energy efficient VMs tend to be cost effective as well. However, you should consider SKU availability in the region you choose for deployment:

- Azure: https://azure.microsoft.com/en-us/blog/azure-virtual-machines-with-ampere-altra-arm-based-processors-generally-available/
- Google: https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip

