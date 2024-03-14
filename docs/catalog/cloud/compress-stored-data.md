---
version: 1.0
submitted_by: franziska-warncke
published_date: 2024-03-14
category: cloud
tags: 
 - cloud
 - size:medium
---

# Compress stored data

## Description

Storing too much uncompressed data can result in bandwidth waste and increase the storage capacity requirements.

## Solution

Using the right compression tool for each use case reduces the storage requirements. This includes both the capacity and required bandwidth to write or retrieve data. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using compression when storing data impacts SCI as follows:

- `E`: Decreasing the amount of storage means less energy is consumed for the storage. However, compressing and de-compressing data may also cause a slight increase in energy consumed.
- `M`: Decreasing the amount of storage means there is less embodied carbon emitted.

## Assumptions
- You have the ability to choose whether you use compression or not. This is not the case if you store a lot of data, as compression is needed to keep storage costs reasonable. In the same way, if you have a limited amount of storage space, you will be forced to use a high compression (even when a high CPU is required).
  
## Considerations
- The benefit of compression should always be considered in terms of the trade-off with the increased carbon cost of the resources (e.g. CPU, RAM) needed to perform the compression/decompression.

## References
- [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/sustainability/sustainability-storage#enable-storage-compression)
