---
version: 1.0
submitted_by: yelghali
published_date: tbd
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

However, for business critical workloads, you need to ensure your workload is spread across multiple availability-zones, which may result in more network traversal and increase in your carbon footprint.

## Solution
Consider using VM-Host affinitry rules (also called proximity placement groups) to reduce the network traversal by ensuring your VM resources are physically located close to each other. 

For critical workloads, configure VM-Host affinitry rules with availability zones, to align high availability with performance.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, reducing network traversal between VMs will impact:

- `E`: By reducing network travel distance, we reduce the amount of energy consumed.
- `M`: By reducing the total number of computing equipment traversed, we reduce the total embodied carbon.

## Assumptions
VM-Host affinitry rules are applicable for workloads running on IaaS or Kubernetes.

## Considerations
Consider using VM-Host affinitry rules for hosting applications like gaming, engineering simulations, and high-frequency trading (HFT) that require low latency.
