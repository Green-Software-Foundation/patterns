---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Evaluate and use alternative, more energy efficient, models that provide similar functionality.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Use energy efficient AI/ML models

## Description

Large AI/ML and deep learning network models have a significant carbon footprint. Evaluate and use alternative, more energy efficient, models that provide similar functionality.


## Solution
Evaluate energy efficient AI/ML models for development and inference. For example, DistilBERT provides similar functionality to the BERT model, running 60% faster while preserving 97% of BERT's performance. GPT-Neo 125M provides balanced results for energy consumption and accuracy compared to GPT-J 6B or GPT Neo 2.7B models.


## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using energy efficient AI/ML models impacts SCI as follows:

- `E`:  Having an energy-efficient AI/ML model would provide efficient resource utilization and reduces the energy consumption of the compute resources and consequently, the E number should decrease.

## Assumptions
None 

## Considerations
None

## References
- [DistilBERT](https://blog.tensorflow.org/2020/05/how-hugging-face-achieved-2x-performance-boost-question-answering.html)
- [SCI Foundation Models Results](https://github.com/Green-Software-Foundation/eval_sci_of_foundation_models/blob/main/Report/SCI_Foundation_Models_Preliminary_Results.pdf)
