---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Data computation for ML workloads and ML inference is a significant contributor to the carbon footprint of the ML application. Also, if the ML model is running on the cloud, the data needs to be transferred and processed on the cloud to the required format that can be used by the ML model for inference.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Run AI models at the edge

## Description
Data computation for ML workloads and ML inference is a significant contributor to the carbon footprint of the ML application. Also, if the ML model is running on the cloud, the data needs to be transferred and processed on the cloud to the required format that can be used by the ML model for inference.  



## Solution
Evaluate and run AI models at the edge, based on your application requirements. Also running data and compute processing tasks (i.e. data cleansing, feature generation) directly on the edge resources, ensure better utilization, and low latency and limit the transfer of data over the network to the cloud.


## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Running energy efficient AI at the edge would impact SCI as follows:
- `E`: An energy efficient AI at the edge would reduce energy consumption by providing local computing and storage for data. Running the inference at the edge in this way would reduce the network transfer to the cloud, reducing the overall energy consumed.

## Assumptions
None 

## Considerations
Consider the operational and embodied emissions of the edge devices as part of your overall solution and how it can reduce the carbon impact of your overall application.

## References
- [Green AI for IIoT: Energy Efficient Intelligent Edge Computing for Industrial Internet of Things](https://ieeexplore.ieee.org/document/9520303)
