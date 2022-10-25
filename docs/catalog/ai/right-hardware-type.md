---
version: 1.0
submitted_by: navveenb
published_date: tbd
category: ai
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Select the right hardware/VM instance types for training and inference of AI/ML process

## Description
Training an AI model has a significant carbon footprint. Selecting the right hardware/VM instance types for training the AI model is one of the choices you should make as part of your energy-efficient AI/ML process. For instance, custom application-specific integrated circuits (ASICs) and Field-programmable gate arrays (FPGAs) are provided or supported by cloud vendors which provide better energy efficiency and inference for AI models than conventional chips. 


## Solution
Evaluate and leverage the right hardware/VM instance types for training and inference of AI/ML development.  

## SCI Impact
`SCI = (E * I) + M per R`

For the SCI equation, the right hardware/VM types will impact the following:
- 'E': Right hardware/VM type would provide better energy efficiency and inference for AI models. This should reduce the energy consumption of your AI/ML processes, and consequently, the E number should decrease.
- 'M': By reducing the total number of servers required to run a process, we reduce the total embodied carbon, the M of the equation.

## Assumptions
None 

## Considerations
None

## References
- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/pdf/1906.02243.pdf)
- [Deploy ML models to field-programmable gate arrays (FPGAs) with Azure Machine Learning](https://learn.microsoft.com/en-us/azure/machine-learning/v1/how-to-deploy-fpga-web-service)
- [Quantifying the performance of the TPU, our first machine learning chip](https://cloud.google.com/blog/products/gcp/quantifying-the-performance-of-the-tpu-our-first-machine-learning-chip)
