---
version: 1.0
submitted_by: navveenb
published_date: tbd
category: cloud
tags: 
 - serverless
 - cloud
 - role:cloud-engineer
 - size:small
---

# Adopt serverless architecture for workloads

## Description

Not all workloads are required to be running all the time. For instance, development environments may not need dedicated servers. For workloads like event-driven and batch jobs, servers can be provisioned to run based on request.

Running and treating all workloads similarly adds to the carbon footprint of your application, which needs to be optimized for efficient utilization.


## Solution
Adopt a serverless architecture for maximum resource utilization for your workloads. Serverless ensures the resources are launched only when required. 


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

For the SCI equation, adopting serverless architecture for workloads would impact the following:

- 'E':  Having a serverless architecture for the development and production workloads provides efficient resource utilization and reduces the energy consumption of the compute resources and consequently, the E number should decrease.
- 'M':  Having a serverless architecture for the development and production workloads would lead to effective hardware/resource utilization as the resources would be provisioned only when required and consequently, the M number should decrease.

## Assumptions
None

## Considerations
Evaluate and consider what workloads can be moved to serverless. Consider if your application can afford a cold start during serverless resource initialization. 

## References
- [Serverless Pipeline on Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/serverless-machine-learning-pipelines-on-google-cloud)
- [Machine learning inference at scale using AWS serverless](https://aws.amazon.com/blogs/machine-learning/machine-learning-inference-at-scale-using-aws-serverless/)
- [https://devblogs.microsoft.com/sustainable-software/adopting-azure-serverless-architectures-to-help-reduce-co2-emissions-part-1/] (https://devblogs.microsoft.com/sustainable-software/adopting-azure-serverless-architectures-to-help-reduce-co2-emissions-part-1/)
