---
version: 1.0
submitted_by: Naveen Balani
submitted_by_linkedin: https://www.linkedin.com/in/naveenbalani/
published_date: 
category: Development
tags: 
 - ai
 - machine-learning
 - compute
 - persona:ai-ml-engineer
 - persona:software-engineer
 - persona:solution-architect
 - size:medium
personas: AI/ML Engineer, Software Engineer, Solution Architect
description: Select and optimize AI models that are appropriately sized for the task to reduce compute, memory, and energy consumption during training and inference.
---

# Use right-sized and energy-efficient AI models

**Applicable Role:** Provider and Consumer

## Description

AI and ML models vary significantly in size, architecture, complexity, and resource requirements. Larger models typically require more compute, memory, and storage, leading to higher energy consumption during both training and inference.

Using models that are appropriately sized and architecturally efficient for the task avoids unnecessary resource usage. This includes selecting smaller or task-specific models, choosing energy-efficient architectures at equivalent capability levels, and applying optimization techniques to reduce model footprint without sacrificing required performance.

## Solution

- Select smaller or task-specific models where they provide sufficient performance
- Choose base models that provide the required capability with lower compute requirements
- Prefer optimized or distilled versions of larger models for fine-tuning and inference
- Apply model compression techniques such as quantization, pruning, and knowledge distillation
- Remove redundant or inactive parameters where possible
- Evaluate model options based on both performance and energy efficiency before selection
- Continuously evaluate newer model variants that offer improved efficiency
- Avoid defaulting to the largest available model when simpler alternatives can achieve similar outcomes

## SCI Impact

**SCI = (E × I) + M per R**

**E (Energy):** Smaller or optimized models reduce compute requirements, memory usage, and data movement during training and inference.

**M (Embodied Carbon):** Reduced infrastructure and storage needs lower embodied emissions over time.

**R (Functional Unit):** When the functional unit is per inference or per token, right-sizing a model reduces the energy cost per functional unit, directly lowering the SCI score. However, if optimization reduces output quality and more functional units are needed to achieve the same outcome, the net effect on SCI should be evaluated.

## Cost Impact

- **Compute costs:** Reduced due to smaller model sizes and faster inference
- **Infrastructure costs:** Lower due to reduced memory and storage requirements
- **Benchmarking overhead:** May add cost for performance testing across model variants
- **Trade-off:** Optimization for efficiency may require initial investment in model compression tooling

## Assumptions

- Smaller or optimized models can meet the functional requirements of the application
- Model performance can be validated against acceptable thresholds
- Efficiency improvements do not significantly degrade output quality

## Considerations

- There is a trade-off between model size, accuracy, and efficiency
- Some complex tasks may require larger models
- Over-optimization can degrade performance
- Fine-tuning larger models may be necessary for complex domain-specific tasks
- Periodic re-evaluation is needed as workloads and models evolve
- Benchmarking should include both performance and resource usage

## References

- [Quantization and Pruning Techniques — Hugging Face Optimum](https://huggingface.co/docs/optimum)
- [Knowledge Distillation — DistilBERT (Sanh et al., 2019)](https://arxiv.org/abs/1910.01108)
- [ML CO2 Impact — Estimate carbon emissions from ML compute](https://mlco2.github.io/impact/)
- [Green AI (Schwartz et al., 2020) — Efficiency in AI Research](https://arxiv.org/abs/1907.10597)
- [Efficient Transformers: A Survey (Tay et al., 2022)](https://arxiv.org/abs/2009.06732)
- [ISO/IEC 21031:2024 — Software Carbon Intensity (SCI) Specification](https://www.iso.org/standard/86612.html)