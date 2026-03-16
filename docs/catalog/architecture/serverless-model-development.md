---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Building an ML model takes significant computing resources that need to be optimized for efficient utilization.
tags:
  - ai
  - machine-learning
  - serverless
  - role:data-scientist
  - size:small
---

# Adopt serverless architecture for AI/ML workload processes

## Description

Building an ML model requires a series of steps, such as building a data pipeline for data capture, data cleansing, feature generation, and running multiple training iterations and experiments to get the desired accuracy. All of these steps take significant computing resources that need to be optimized for efficient utilization.

## Solution
Adopt a serverless architecture for maximum resource utilization for your entire AI/ML model development process like data pipeline, training and experiments. Going serverless ensures the resources are launched only when required. 

## SCI Impact

`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

For the SCI equation, adopting serverless architecture for AI/ML workload process would impact the following:

- `E`:  A serverless architecture for the AI/ML development process provides efficient resource utilization and reduces the energy consumption of the compute resources.
- `M`:  A serverless architecture for the AI/ML development process would lead to effective hardware utilization as the resources would be provisioned only when required.

## Assumptions

None

## Considerations

Evaluate and consider what AI/ML workloads can be moved to serverless. Consider if your application can afford cold start during serverless resource initialization.

## References

- [Serverless Pipeline on Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/serverless-machine-learning-pipelines-on-google-cloud)
- [Machine learning inference at scale using AWS serverless](https://aws.amazon.com/blogs/machine-learning/machine-learning-inference-at-scale-using-aws-serverless/)
