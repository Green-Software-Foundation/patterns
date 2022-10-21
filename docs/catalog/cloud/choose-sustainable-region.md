---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:medium
---

# Choose Sustainable Region for Workloads

## Description

Applications can have background tasks or jobs that run independent to the rest of the application. These workloads can be put into a region that is the most sustainable region of the used cloud provider.

## Solution

Run the workloads in a region that the used cloud provider labels as most sustainable. Choose the region that is near your application so that data transfer to and from the sustainable region minimal.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation. choose sustainable region for workloads will impact two parts:

- `E`: Transferring the necessary data to the sustainable region and back to the application region will increase the energy consumed by the system
- `I`: Location based carbon emissions will be reduced as the workload is executed in a more sustainable region as the original region

## Assumptions

- This optimization assumes that the workload can be run in an additional region and the transfer of the necessary data from and to the region is still better, in terms of CO2, than running the workload in the original region

## Considerations

- Consider moving your application to the most sustainable region
- Consider running the workload at times where energy is produced from renewable resources

## References

- [AWS Sustainability Region Selection](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/region-selection.html)
