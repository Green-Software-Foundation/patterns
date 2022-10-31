---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- cloud
- serverless
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Scale Kubernetes workloads based on relevent demand metrics

## Description
By default, Kubernetes scales workloads based on CPU and RAM utilization, in practice however, it is difficult to correlate your application's demand drivers with CPU and RAM utilization.

Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce its resource utilization, hence its carbon emissions.

## Solution

Implement a custom scaler for your application, or use [KEDA](https://keda.sh) to help you build event-driven kubernetes applications, to allow scaling down to zero when there is no demand.

In addition to scaling kubernetes applications based on relevent scaling metrics (or events), cluster auto-scaling and bursting capabilities are used to scale infrastructure based on demand as well.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, scaling based on events will impact:

- `M`: By scaling the workloads based on demand and reducing resource utilization, we reduce the total embodied carbon emissions by the kubernetes cluster.

## Assumptions

The metrics that drive application demand, and scaling needs, are known

## Considerations
If your workloads have predictable usage patterns, you could implement scaling based on time as an alternative to optimize utilization and reduce carbon emissions.
