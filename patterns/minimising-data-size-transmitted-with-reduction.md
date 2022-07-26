# Minimising the size of data transmitted with reduction

## Version
1.0

## Submitted By
Sarah Hsu (@greenhsu123)

## Published Date
TBD

## Intent
Minimising the size of data transmitted with reduction 

## Tags
Cloud, Networking, Cloud Engineer, Small

## Problem
From an energy-efficiency perspective, it's better to minimise the size of the data transmitted so that less energy is required because the network traffic is reduced. 

## Solution
Minimise the size of data transmitted by only sending properties or values deemed necessary. 

## SCI Impact
`SCI = (E * I) + M per R`

Concerning the SCI equation. Reducing the distance will impact one part:

- `E`: We reduce the total electricity required by reducing network traffic. 

## Assumptions
Suppose we choose to transfer data  (e.g. payloads) to the client side as it is because some properties or values may be needed later. A better solution would be to consider curating the data set, ensuring only necessary properties are sent across the network so the overall network traffic is reduced. And in many use cases, certain properties or values can be correlated later. 


## Pros & Cons
- **PRO**: It may reduce cloud bills because minimising the size of the data transmitted will cost less. 
- **CON**: If we minimise the dataset by taking away properties or values, there may be overhead to corelate the missing properties or values.s