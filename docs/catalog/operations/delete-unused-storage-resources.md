---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: cloud
description: From an embodied carbon perspective, it's better to delete unused storage resources so we are efficient with hardware and so that the storage layer is optimised for the task. 
tags: 
 - storage
 - role:cloud-engineer
 - size:small
---

# Delete unused storage resources

## Description
From an embodied carbon perspective, it's better to delete unused storage resources so we are efficient with hardware and so that the storage layer is optimised for the task. 

## Solution
Delete any unused storage resource.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Deleting storage volumes will impact SCI as follows:
- `M`: By reducing the total number of storage volumes required, the total embodied carbon is lower.

## Assumptions
If we choose not to delete *all* storage resources because they might be needed in the future, then storing them permanently will take up a lot of unnecessary storage resources. A better solution would be to remove idle resources so that no hardware is wasted. 

## Considerations
- It may reduce cloud bills, as reducing idle storage resources will cost less. 
- We may lose access to data that might be needed in the future

## References
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
