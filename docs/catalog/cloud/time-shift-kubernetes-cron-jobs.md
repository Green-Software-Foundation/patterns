---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
 - kubernetes
 - role:cloud-engineer
 - size:medium
---

# Time-shift Kubernetes "CronJobs", by scheduling them when Electricity Carbon Intensity is low

## Description
The carbon emissions of a software system depends on the power consumed by that sotware, but also on the Carbon intensity of the Electricity it is powered on. For this reason, running energy-efficient software on carbon intensive Electtricity grid, might be inefficient to reduce its global carbon emissions. 

## Solution
Enable Carbon Aware time scheduling, for recurrent Jobs on Kubernetes, such as ML Training Jobs, Batchs, etc. => which are implemented [as CronJobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)

## SCI Impact
`SCI = (E * I) + M per R`

Regarding the SCI equation. Reducing the distance will impact:

- `I`: The goal is to reduce SCI by reducing (I), and in practice, schedule CronJobs when (I) is low.

To capture the impact of time shifting, the following image shows variation of Electricity Carbon Intensity during a day, from one the Electricity data providers, [ElectricityMap](https://app.electricitymaps.com/map).

![zez](/src/images/time-shift.png)


## Assumptions
The CronJob to be time shifted, has a flexible time window for scheduling, which allows variation on time to reduce (I). 

## Considerations
- **PRO**: CronJob based workloads, can benefit from time shifting at the Platform Operating level, without requiring change to their code.
- **CON**: Scheduling constraints for CronJobs, with several dependencies. 

## References
- [Carbon Awareness](https://learn.greensoftware.foundation/practitioner/carbon-awareness)
