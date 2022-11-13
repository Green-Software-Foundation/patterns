---
version: 1.0
submitted_by: yelghali
published_date: 2022-11-10
category: cloud
description: In order to reduce carbon emissions and costs, Dev&Test Kubernetes clusters can turn off nodes out of office hours. Thereby, optimization is implemented at the cluster level. For production clusters, where nodes need to stay up and running, optimization needs to be implemented at the application level.
tags: 
 - kubernetes
 - role:cloud-engineer
 - size:small
---

# Scale down kubernetes applications when not in use

## Description
In order to reduce carbon emissions and costs, Dev&Test Kubernetes clusters can turn off nodes (VMs) out of office hours (e.g at night & during weekends). => thereby, optimization is implemented at the cluster level.

For production clusters, where nodes need to stay up and running: optimization needs to be implemented at the application level (Deployment, StatefulSet).

## Solution
Scale down Kubernetes applications (Deployments, StatefulSets) based on time (out of office hours). Turning off an application means scaling its pods to zero.

The scaled down Kubernetes resources can be selected using Labels or Annotations. 

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation. scaling down the pods to zero will impact:

- `E`: The goal is to "reduce demand", aka the number of pods running out of office hours, which reduces overall consumed power by the application.


## Assumptions
The Business Application has predictible traffic (usage), which allows to scale up & down based on Time. 

## Considerations
- This pattern does not require application code changes.
- This pattern requires an understanding of the application usage patterns including technical governance and inventory management.

