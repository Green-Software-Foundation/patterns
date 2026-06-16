---
version: 1.0
submitted_by: Naveen Balani
submitted_by_linkedin: https://www.linkedin.com/in/naveenbalani/
published_date: 
category: Architecture
tags: serverless, agents, event-driven, agentic-ai, ai-ml
personas: DevOps Engineer, Software Engineer, AI/ML Engineer
---

# Use on-demand execution for AI and agent workloads

**Applicable Role:** Consumer

## Description

AI systems increasingly operate as dynamic, multi-step workflows, especially in agentic architectures where models interact with tools, data sources, and other models.

Keeping compute resources or agent workflows active when not required leads to unnecessary energy consumption. This includes idle infrastructure, continuously running agents, and long-lived orchestration processes.

Using on-demand execution ensures that compute and workflows are triggered only when needed, reducing idle time and improving overall efficiency.

## Solution

- Use serverless or event-driven platforms to execute workloads only when triggered
- Design agent workflows to run only when required and terminate after task completion
- Avoid long-running or always-on agent processes unless continuously needed
- Trigger model calls and tool usage conditionally rather than continuously
- Use orchestration frameworks that support event-driven execution and efficient workflow management
- Scale resources dynamically based on demand and workload intensity

## SCI Impact

**SCI = (E × I) + M per R**

**E (Energy):** Reduces energy consumption by eliminating idle compute and unnecessary agent execution.

**I (Carbon Intensity):** On-demand execution can be combined with carbon-aware scheduling (Pattern 5) to trigger workloads during low-carbon periods.

**M (Embodied Carbon):** Improved utilization of shared infrastructure reduces overall hardware demand.

## Assumptions

- Workloads and agent workflows can be structured as event-driven processes
- Execution environments support dynamic scaling and orchestration

## Considerations

- Cold start latency may impact responsiveness
- Complex workflows may require careful orchestration design
- Not all workloads are suitable for on-demand execution
- Inefficient agent design can still lead to excessive compute even in serverless environments
- Trade-offs between responsiveness, cost, and carbon should be evaluated

## References

- [AWS Lambda for ML Inference](https://aws.amazon.com/lambda/)
- [Google Cloud Functions for Serverless AI](https://cloud.google.com/functions)
- [Azure Functions — Event-driven Serverless Compute](https://azure.microsoft.com/en-us/products/functions)
- [Knative — Kubernetes-based Serverless](https://knative.dev/)