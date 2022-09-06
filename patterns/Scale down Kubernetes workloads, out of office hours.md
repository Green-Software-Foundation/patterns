# Time based scale down: Scale down Kubernetes workloads out of office hours
## Version
1.0

## Submitted By
Yassine El Ghali (@yelghali)

## Published Date
TBD

## Intent
For Business Applications running on Kubernetes (Deployments, StatefulSets): Scale down (to Zero or a minimum value), out of office hours (night & weekends), to reduce  their carbon emissions

## Tags
Cloud, Deployment, Kubernetes ; for Cloud Engineers; Medium complexity 

## Problem
In order to reduce carbon emissions (and costs), Dev&Test environments (Kubernetes clusters) can shut down node(VMs) out of office hours (e.g at night & during weekends). --> thereby, optimization is implemented at the cluster level.


For production clusters, where nodes need to stay up and running: optimization needs to be implemented at the application level (Deployment, StatefulSet)

## Solution
 Scale down Kubernetes workloads (Deployments, StatefulSets) based on time (out of office hours)

## SCI Impact
`SCI = (E * I) + M per R`

Regarding the SCI equation. Reducing the distance will impact:

- `E`: The goal is to "reduce demand", aka the number of pods running out of office hours, which reduces overall application consumed Power.



## Assumptions
The Business Application has predictible traffic (usage), which allows to scale up & down based on Time. 

## Pros & Cons
- **PRO**: Reduces Carbon emissions & Costs
- **CON**: Requires an understanding of the applications usage patterns;  
