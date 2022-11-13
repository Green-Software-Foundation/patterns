---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Depending on the model parameters and training iterations, training an AI/ML model consumes a lot of power and requires many servers which contribute to embodied emissions.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Use sustainable regions for AI/ML training

## Description
Training an AI model has a significant carbon footprint. Depending on the model parameters and training iterations, training an AI/ML model consumes a lot of power and requires many servers which contribute to embodied emissions.


## Solution
Use a cloud region which has a lower carbon intensity value for running your AI/ML training workloads.


## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using a lower carbon intensity region for AI/ML training impacts SCI as follows:
- `E`: Using a lower carbon intensity region for ML training would reduce the carbon emissions of ML applications, therefore decreasing the amount of energy consumed.

## Assumptions
The migration of workloads to other regions assumes you have taken into consideration privacy, security, or data sovereignty based on your application requirements. 

## Considerations
Consider the trade-offs between carbon footprint, cost, and latency when selecting a region. 

## References
- [Faster, cheaper, greener? Pick the Google Cloud region that’s right for you](https://cloud.google.com/blog/topics/sustainability/google-cloud-region-picker-helps-you-make-the-green-choice)
- [Amazon’s sustainability regions](https://sustainability.aboutamazon.com/around-the-globe?energyType=true)
- [Azure sustainability](https://azure.microsoft.com/en-us/explore/global-infrastructure/sustainability/)
- [Google Cloud sustainability regions](https://cloud.google.com/sustainability/region-carbon)
