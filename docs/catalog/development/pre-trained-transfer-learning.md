---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: As part of your AI/ML process, you should evaluate using a pre-trained model and use transfer learning to avoid training a new model from scratch.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Leverage pre-trained models and transfer learning for AI/ML development

## Description
Training an AI model has a significant carbon footprint. As part of your AI/ML process, you should evaluate using a pre-trained model and use transfer learning to avoid training a new model from scratch. 


## Solution
Evaluate and select pre-trained models and use transfer learning to avoid training a new model from scratch. 

## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Leveraging a pre-trained model would impact SCI as follows:
- `E`: Having a pre-trained model reduces energy consumption for your AI/ML development as you don’t need to train the entire model from scratch.
- `M`: Transfer learning does not require as many servers as you don’t need to train the entire model from scratch. By reducing the total number of servers required to run a process, the total embodied carbon is lower.

## Assumptions
None 

## Considerations
None

## References
- [Transfer learning and fine-tuning](https://www.tensorflow.org/tutorials/images/transfer_learning)
