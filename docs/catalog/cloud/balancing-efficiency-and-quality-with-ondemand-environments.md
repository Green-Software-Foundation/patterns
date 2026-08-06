# Balancing Efficiency and Quality with On-Demand Environments

## Description

Modern applications often rely on multiple environments during development and deployment. A typical workflow involves a development environment for coding, a staging or testing environment for quality assurance (QA), and finally, a production environment for live users.

While each additional environment provides valuable functionality, it also increases energy consumption and contributes to greenhouse gas emissions. 
Therefore, it's crucial to find a balance between development efficiency and environmental impact. 

## Solution

While minimizing deployed environments saves energy by reducing resource provisioning, some environments are crucial for maintaining application quality. 
Bugs in production can lead to high energy consumption due to failed requests.
Instead of eliminating development and user acceptance testing (UAT) environments entirely, consider an on-demand approach. 
These environments could spin up automatically when needed and shut down after a set period of inactivity (e.g., 2 hours after last access). 
This reduces energy use while still providing the necessary testing grounds to catch bugs before they impact production.

In order to be generally used, this solution should be provided through a simple configuration from cloud providers leveraging IaC files.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Reducing the amount of deployed environments will impact SCI as follows:

- `E`: We reduce the total electricity required by reducing provisioned resources when not used.
- `M`: By reducing the amount of VMs running on underlying machines, the total embodied carbon can be lowered as CSPs might be careful in investing only in HWs to follow the demand.

## Assumptions
An environment is not required to be up and running within the next seconds any time in the day or night.

## Considerations
Spinning up an environment might take time. This might be a drawbac.

The advantage is that developers validate the deployment of an environment from scratch each time they need to test.

## References

- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/)
