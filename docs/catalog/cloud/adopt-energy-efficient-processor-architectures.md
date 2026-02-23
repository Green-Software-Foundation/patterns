---
version: 1.0
submitted_by:
submitted_by_linkedin:
published_date:
category: Architecture
tags: cloud, compute, cpu, arm, hardware-efficiency, virtual-machines
personas: Solution Architect, Infrastructure Engineer, Enterprise Architect
---

# Adopt energy-efficient processor architectures

## Description

Software workloads running on traditional x86-64 virtual machines may be consuming more energy than necessary. Cloud providers now offer virtual machines built on processor architectures — particularly ARM-based designs — that are engineered specifically for cloud-native workloads and deliver significantly better performance per watt. Choosing the right processor architecture at the point of architectural decision can materially reduce the energy footprint of an application without changing a line of application code.

## Solution

When defining your compute architecture, evaluate processor options beyond the default x86-64:

**ARM-based cloud instances** are available from all major cloud providers and typically offer better energy efficiency per core, competitive or lower pricing, and high core counts suited to parallel, scale-out workloads. These are well-suited to web servers, microservices, containerised applications, and API workloads. Validate compatibility with your application's runtime, container images, and third-party dependencies before committing.

**Specialised accelerators** — including GPUs, FPGAs, and ASICs — can provide significant efficiency gains for specific workload types such as ML inference, data processing, or signal processing. Where the workload pattern is well-defined and repetitive, a purpose-built accelerator may outperform a general-purpose CPU on both performance and energy per operation.

**Evaluate empirically.** Benchmark your actual workload on candidate architectures before committing. Theoretical efficiency gains vary with workload type — some applications benefit substantially from ARM; others with x86-64 dependencies or instruction-set requirements may not.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Energy-efficient processor architectures reduce total electricity consumption for the same computational output, directly lowering the energy component of SCI.
- `M`: If better performance-per-watt means fewer total instances are required to serve the same load, embodied carbon from hardware manufacture and disposal is also reduced. This benefit applies when the migration results in a lower instance count, not when replacing like-for-like.

## Cost Impact

- **Compute costs**: ARM-based instances are typically priced lower than equivalent x86-64 instances while delivering comparable or better performance for cloud-native workloads, reducing instance spend directly.
- **Instance count**: Where higher efficiency enables consolidation onto fewer instances, further savings on compute, licensing, and management overhead are possible.
- **Migration cost**: There is a one-time cost to validate and adapt application dependencies for a new architecture, particularly for ARM where some native libraries or container base images may require rebuilding. Weigh this against the ongoing savings.

## Assumptions

- The application and its dependencies (runtime environments, container images, third-party libraries) are compatible with the target architecture, or can be made compatible with reasonable effort.
- The cloud provider offers suitable instance types in the deployment region.
- Performance requirements can be validated through benchmarking prior to production migration.

## Considerations

- Not all workloads benefit equally from ARM: web servers, microservices, and containerised apps tend to see strong gains; workloads with hard x86-64 dependencies may require compatibility work or may not be suitable candidates.
- Instance type availability varies by cloud region — confirm your target SKU is available where you deploy.
- Specialised accelerators introduce architectural complexity and are most cost-effective when workload patterns are consistent and well-defined; variable or unpredictable workloads may not justify the overhead.
- Performance testing under realistic load is essential before committing to a new architecture in production.

## References

- [Hardware Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/hardware-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)
- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/)