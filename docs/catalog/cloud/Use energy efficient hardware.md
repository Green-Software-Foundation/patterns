---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- compute
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Use energy efficient hardware

## Description

Cloud virtual machines are offered with different capabilties, based different hardware processors.

Hence using virtual machines based on efficient processors would impact hardware efficiency and reduce carbon emissions.


## Solution

Use new cloud virtual machines that have been engineered with "cloud native processors" to efficiently run scale-out, cloud-native workloads and consume energy efficiently.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, using energy efficient hardware will impact:

- `M`: By using energy efficient hardware, we reduce the total embodied carbon emissions.

## Assumptions

The cloud provider offers VM Skus hosted based efficient hardware.

## Considerations

Energy efficient VMs tend to be cost effective as well, you should however consider also SKU availability in the region you choose for deployment.
