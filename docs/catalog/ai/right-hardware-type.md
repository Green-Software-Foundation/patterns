---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Selecting the right hardware/VM instance types for training is one of the choices you should make as part of your energy-efficient AI/ML process.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Select the right hardware/VM instance types for AI/ML training

## Description
Training an AI model has a significant carbon footprint. Selecting the right hardware/VM instance types for training is one of the choices you should make as part of your energy-efficient AI/ML process. For instance, custom application-specific integrated circuits (ASICs) and field-programmable gate arrays (FPGAs) are provided or supported by cloud vendors which provide better energy efficiency and inference for AI models than conventional chips. 


## Solution
Evaluate and leverage the right hardware/VM instance types for training and inference of AI/ML development.

## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Selecting the right hardware/VM types impacts SCI as follows:
- `E`: The right hardware/VM type provides better energy efficiency and inference for AI models, reducing the energy consumption of your AI/ML processes overall.
- `M`: By reducing the total number of servers required to run a process, the total embodied carbon is lower.

## Assumptions
None 

## Considerations
None

## References
- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/pdf/1906.02243.pdf)
- [Deploy ML models to field-programmable gate arrays (FPGAs) with Azure Machine Learning](https://learn.microsoft.com/en-us/azure/machine-learning/v1/how-to-deploy-fpga-web-service)
- [Quantifying the performance of the TPU, our first machine learning chip](https://cloud.google.com/blog/products/gcp/quantifying-the-performance-of-the-tpu-our-first-machine-learning-chip)
