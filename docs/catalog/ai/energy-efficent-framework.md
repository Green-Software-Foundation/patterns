---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Training an AI model implies a significant carbon footprint. The underlying framework used for the development, training, and deployment of AI/ML needs to be evaluated and considered to ensure the process is as energy efficient as possible.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Select a more energy efficient AI/ML framework

## Description
Training an AI model implies a significant carbon footprint. The underlying framework used for the development, training, and deployment of AI/ML needs to be evaluated and considered to ensure the process is as energy efficient as possible.

Typically, AI/ML frameworks built on languages like C/C++ are more energy efficient than those built on other programming languages.

Following provides an interesting view on a [normalized analysis regarding languages and their energy footprint(https://sites.google.com/view/energy-efficiency-languages/results?authuser=0)].

Take into accoutn that in the Cloud for example the processing time of non CPU intensive applications is mostly spent idling because of the strong interservice dependencies that are network related (In other words a request through the network is typically 10000+ times slower than a CPU operation). 

Libraries like TensorFlow or PyTorch allow to leverage GPUs easily that would have a different consumption scheme compared to CPUs, TPU for TensorFlow typically outperform as well CPUs: All these points need to be properly analyzed before selecting a language that might bring drawbacks in terms of staffing skilled people.


## Solution
Evaluate and select an energy-efficient framework/module for AI/ML development, training and inference. 

## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Selecting an energy-efficient AI/ML would impact SCI as follows:
- `E`: Having an energy-efficient framework reduces energy consumption for AI/ML training and inference and consequently.

## Assumptions
None 

## Considerations
None

## References
[Green AI: Do Deep Learning Frameworks Have Different Costs?](https://stefanos1316.github.io/my_curriculum_vitae/GKSSZ22.pdf)
