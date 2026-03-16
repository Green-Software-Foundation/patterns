---
version: 1.0
submitted_by: yelghali
published_date: 2022-11-10
category: cloud
description: By default, Kubernetes scales workloads based on CPU and RAM utilization. In practice, however, it's difficult to correlate your application's demand drivers with CPU and RAM utilization. Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce resource utilization, and therefore also your carbon emissions.
tags: 
- cloud
- serverless
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Scale Kubernetes workloads based on relevant demand metrics

## Description
By default, Kubernetes scales workloads based on CPU and RAM utilization. In practice, however, it's difficult to correlate your application's demand drivers with CPU and RAM utilization.

Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce resource utilization, and therefore also your carbon emissions.

## Solution

Implement a custom scaler for your application, or use [KEDA](https://keda.sh) to help you build event-driven Kubernetes applications, to allow scaling down to zero when there is no demand.

In addition to scaling Kubernetes applications based on relevent scaling metrics (or events), cluster auto-scaling and bursting capabilities are also used to scale infrastructure based on demand.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling based on events will impact SCI as follows:

- `M`: By scaling the workloads based on demand and reducing resource utilization, the total embodied carbon emissions by the Kubernetes cluster is lower.

## Assumptions

The metrics that drive application demand and scaling needs are known.

## Considerations
If your workloads have predictable usage patterns, you could implement scaling based on time as an alternative to optimize utilization and reduce carbon emissions.
