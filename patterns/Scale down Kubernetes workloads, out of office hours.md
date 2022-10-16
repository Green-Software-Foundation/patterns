---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
 - kubernetes
 - role:cloud-engineer
 - size:small
---

# Scale down Kubernetes applications, out of office hours

## Description
In order to reduce carbon emissions (and costs), Dev&Test environments (Kubernetes clusters) can turn off nodes (VMs) out of office hours (e.g at night & during weekends). --> thereby, optimization is implemented at the cluster level.


For production clusters, where nodes need to stay up and running: optimization needs to be implemented at the application level (Deployment, StatefulSet).

## Solution
 Scale down Kubernetes applications (Deployments, StatefulSets) based on time (out of office hours). Turning off an application means scaling its pods to zero.

The scaled down Kubernetes resources can be selected using Labels & Annotations. 

## SCI Impact
`SCI = (E * I) + M per R`

Regarding the SCI equation. Reducing the distance will impact:

- `E`: The goal is to "reduce demand", aka the number of pods running out of office hours, which reduces overall application consumed Power.


## Assumptions
The Business Application has predictible traffic (usage), which allows to scale up & down based on Time. 

## Considerations
- **PRO**: Reduces Carbon emissions & Costs, without requiring application code change.
- **CON**: Requires an understanding of the applications usage patterns (Technical Governance & Inventory management).

## References
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
