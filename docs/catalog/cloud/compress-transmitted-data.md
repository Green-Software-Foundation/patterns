---
version: 1.0
submitted_by: greenhsu123
published_date: tbd
category: cloud
tags: 
 - networking
 - role:cloud-engineer
 - size:small
---

# Compress Transmitted Data

## Description
From an energy-efficiency perspective, it's better to minimise the size of the data transmitted so that less energy is required because the network traffic is reduced. 

## Solution
Minimise the size of data transmitted by compressing files or payloads.

## SCI Impact
`SCI = (E * I) + M per R`

Concerning the SCI equation. Reducing the distance will impact two parts:

- `E`: We reduce the total electricity required by reducing network traffic. However, we should be wary that there may be a slight increase in E due to compressing and de-compressing data. 
- `I`: We may also have a slight increase in location-based marginal carbon emissions due to compressing and de-compressing data at different locations.


## Assumptions
Suppose we choose to transfer data (e.g. files or payloads) to the client side because that is the only format the client side can handle. A better solution would be to consider a compressing mechanism for large files or payloads before sending them across the network to the client side to reduce overall network traffic. 


## Considerations
- It may reduce cloud bills because minimising the size of the data transmitted will cost less. 
- If a compressed asset cannot be dealt with, there is more overhead to resend the asset in the correct format. 

## References


