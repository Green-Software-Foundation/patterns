---
version: 1.0
submitted_by: yelghali
published_date: 2024-07-30
category: cloud
tags: 
- cloud
- network
- compute
- kubernetes
- role:cloud-engineer
- size:medium
---

# Reduce network traversal between VMs

## Description
Placing VMs in a single region or a single availability zone reduces the physical distance between the instances. 

## Solution
Choose the VM placement that is best for your workload. 

Most cloud providers provide various options, like
- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html
- https://cloud.google.com/compute/docs/instances/define-instance-placement
- https://learn.microsoft.com/en-us/azure-stack/hci/manage/vm-affinity

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, reducing network traversal between VMs will impact:

- `E`: By reducing network travel distance, we reduce the amount of energy consumed.

## Assumptions
- VM placement options provided by cloud providers are adequate for this workload,

## Considerations
- For business critical workloads, you need to ensure your workload is spread across multiple availability-zones, which may result in more network traversal and increase in your carbon footprint.
