# Minimising the size of data transmitted

## Version
1.0

## Submitted By
Sarah Hsu

## Published Date
TBD

## Intent
Minimising the size of data transmitted

## Tags
Cloud, Networking, Cloud Engineer, Small

## Problem
From an energy-efficiency perspective, it's better to minimise the size of the data transmitted so that less energy is required because the network traffic is reduced. 

## Solution
Minimise the size of data transmitted by compressing files or payloads.

## SCI Impact
`SCI = (E * I) + M per R`

Concerning the SCI equation. Reducing the distance will impact one part:

- `E`: We reduce the total electricity required by reducing network traffic. 


## Assumptions
Suppose we choose to transfer data (e.g. files or payloads) to the client side because that is the only format the client side can handle. A better solution would be to consider a compressing mechanism for large files or payloads before sending them across the network to the client side to reduce overall network traffic. 


## Pros & Cons
- **PRO**: It may reduce cloud bills because minimising the size of the data transmitted will cost less. 
- **CON**: If a compressed asset cannot be dealt with, there is more overhead to resend the asset in the correct format. 
