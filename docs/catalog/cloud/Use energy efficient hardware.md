---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- cloud
- compute
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Use cloud native processors VMs

## Description

Cloud virtual machines are offered with different capabilities based on different hardware processors.

Hence using virtual machines based on efficient processors would impact hardware efficiency and reduce carbon emissions.


## Solution

Use new cloud virtual machines that have been engineered with [cloud native processors](https://www.forbes.com/sites/davealtavilla/2022/10/13/amperes-efficient-128-core-cloud-native-processor-builds-momentum-in-sustainable-data-centers/) to efficiently run scale-out, cloud-native workloads and consume energy efficiently.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, using energy efficient hardware will impact:

- `E`: By using energy efficient hardware, we reduce the total embodied carbon emissions.
- `M`: By using energy efficient hardware, we reduce also the embodied emissions.

## Assumptions

The cloud provider offers VM SKUs based on efficient hardware.


## Considerations

Energy efficient VMs tend to be cost effective as well, you should however consider also SKU availability in the region you choose for deployment.
Azure: https://azure.microsoft.com/en-us/blog/azure-virtual-machines-with-ampere-altra-arm-based-processors-generally-available/
Google: https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip

