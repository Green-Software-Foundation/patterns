---
version: 1.0
submitted_by: Naveen Balani
submitted_by_linkedin: https://www.linkedin.com/in/naveenbalani/
published_date:
category: Architecture
tags: edge-computing, deployment, latency, carbon-intensity, ai-ml
personas: Infrastructure Engineer, Solution Architect, AI/ML Engineer
description: Deploy AI inference on edge devices or local infrastructure to reduce data transfer, network energy use, and reliance on centralised cloud compute.
---

# Run AI models at the edge

**Applicable Role:** Provider and Consumer

## Description

AI and ML workloads often rely on centralized cloud infrastructure for training and inference. This requires data to be transferred from source systems to the cloud, increasing network usage, latency, and energy consumption.

Running AI models closer to where data is generated or consumed, such as on edge devices or local infrastructure, reduces data movement and enables more efficient processing. This is especially relevant for real-time, high-frequency, or latency-sensitive inference workloads.

Providers also deploy edge inference capabilities through on-device ML SDKs and embedded models, making this pattern applicable to both roles.

## Solution

- Deploy models on edge devices or local infrastructure to reduce data transfer to centralized systems
- Perform data preprocessing tasks such as filtering, cleansing, and feature generation locally
- Use edge inference for real-time or latency-sensitive applications
- Limit transmission of raw data by sending only necessary or aggregated results to the cloud
- Evaluate hybrid architectures that combine edge and cloud processing based on workload requirements
- For applications using external AI services, consider on-device or local inference options to reduce repeated remote calls

## SCI Impact

**SCI = (E × I) + M per R**

**E (Energy):** Reduced data transfer and localized processing lower energy consumption associated with network and centralized compute.

**I (Carbon Intensity):** Edge devices run on local power grids which may have different carbon intensity than centralized data center regions. This should be measured and factored into the SCI calculation.

**M (Embodied Carbon):** Edge deployments may increase device footprint, but can reduce reliance on large centralized infrastructure.

## Cost Impact

- **Cloud compute costs:** Reduced by moving inference to edge devices
- **Network costs:** Lower data transfer to centralized systems
- **Edge device costs:** Increased due to deploying hardware at the edge
- **Model management costs:** Higher due to complexity of distributed model updates
- **Trade-off:** Cloud cost savings offset by edge device and management overhead

## Assumptions

- Edge or local devices have sufficient memory, compute capacity, and power to run the target model without requiring additional optimization
- Workloads can be partitioned effectively between edge and cloud

## Considerations

- Embodied emissions of edge devices must be accounted for
- Edge environments may have limited compute and storage capacity
- Model updates and lifecycle management can be more complex in distributed systems
- Not all workloads are suitable for edge deployment
- Carbon intensity of edge locations versus cloud regions should be compared
- Trade-offs between latency, cost, and carbon should be evaluated

## References

- [TensorFlow Lite — On-device ML Framework](https://www.tensorflow.org/lite)
- [ONNX Runtime — Cross-platform Inference Engine](https://onnxruntime.ai/)
- [NVIDIA Jetson Platform — Edge AI Computing](https://developer.nvidia.com/embedded-computing)
- [Green AI for IIoT: Energy Efficient Intelligent Edge Computing](https://arxiv.org/abs/2205.02343)
- [SCI-AI Specification — Green Software Foundation](https://github.com/Green-Software-Foundation/sci-ai/blob/dev/SPEC.md)