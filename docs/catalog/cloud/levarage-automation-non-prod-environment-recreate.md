---
version: 1.0
submitted_by: navveenb
published_date: tbd
category: cloud
tags: 
 - devops
 - role:cloud-engineer
 - size:small
---

# Leverage automation to start/stop instances and re-create non-production environments

## Description

Non-production workloads take up significant computing resources
and adds to the carbon footprint of your application.

Non-productions workloads, like development and test environments, need not be running all the time (like weekends,non-business hours, and extended non-utilization periods) and can be optimized through automation for efficient utilization.


## Solution
Leverage automation to delete non-production environments and re-create them based on your application and schedule requirements. You can also start/stop compute instances (wherever supported) through automation based on your usage patterns in non-production environments


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

For the SCI equation, adopting automation to re-create non-production environments for workloads would impact the following:

- 'E':  Having automation to delete and re-create non-production environments provides efficient resource utilization and reduces the energy consumption of the compute resources and consequently, the E number should decrease.
- 'M':  Having a serverless architecture for the development and production workloads would lead to effective hardware/resource utilization as the resources would be provisioned only when required and consequently, the M number should decrease.

## Assumptions
None

## Considerations
Evaluate and consider what workloads can be deleted and re-created based on your application and schedule requirements. For instance, if a workload has a consistent load and is underutilized for 45 minutes, then hibernating or starting/stopping the instance might be a better option. Over the weekends (extended non-utilized duration), if the workloads are not used, deleting it and recreating it would be the ideal option. 

## References
- [Optimize Cost by Automating the Start/Stop of Resources in Non-Production Environments](https://aws.amazon.com/blogs/architecture/optimize-cost-by-automating-the-start-stop-of-resources-in-non-production-environments/)
- [Scheduling a VM instance to start and stop](https://cloud.google.com/compute/docs/instances/schedule-instance-start-stop)
- [Start/Stop VMs during off-hours overview] (https://learn.microsoft.com/en-us/azure/automation/automation-solution-vm-management)
