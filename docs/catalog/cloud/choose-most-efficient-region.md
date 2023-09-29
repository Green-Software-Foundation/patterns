---
version: 2.0
submitted_by: greenhsu123,kreuzwerker
published_date: 2023-09-29
category: cloud
description: From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware. In addition to that, it's also important to consider the carbon intensity of the physical location and choose the most balanced/sustainable region for your application workload based on both factors.
tags: 
 - networking
 - role:cloud-engineer
 - size:small
---

# Choose the most efficient region based on proximity to user and carbon intensity

## Description
From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware.
In addition to that, it's also important to consider the carbon intensity of the physical location and choose the most balanced/sustainable region for your application workload based on both factors.

## Solution
Choose the most carbon efficient region closest to the majority of where the network packets are going.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Reducing the distance and the carbon intensity will impact SCI as follows:

- `E`: By reducing the distance a packet travels, less total electricity is required.
- `I`: By considering location-based marginal carbon emissions (gCO2/kWh), carbon intensity is reduced.
- `M`: By reducing the total number of computing equipment traversed, the total embodied carbon is lower.

## Assumptions
- Provided you have access to the carbon intensity data made available by the chosen cloud provider.
- Provided that your users are located relatively close to each other geographically.
- Provided that the necessary services for running your workload are accessible within the chosen region.

## Considerations
- Costs: changing regions may increase or decrease the cost of running your workload, due to variation in prices of different services.
- Data protection: changing regions may require you to review your data protection policies and mechanisms based on local regulatory and compliance requirements.

## References
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [How to select a Region for your workload based on sustainability goals](https://aws.amazon.com/blogs/architecture/how-to-select-a-region-for-your-workload-based-on-sustainability-goals/)
- [Choose the most suitable cloud regions](https://cloud.google.com/architecture/reduce-carbon-footprint#choose_the_most_suitable_cloud_regions)
- [Select Azure regions based on where the customer resides](https://learn.microsoft.com/en-us/azure/well-architected/sustainability/sustainability-networking#select-azure-regions-based-on-where-the-customer-resides)
