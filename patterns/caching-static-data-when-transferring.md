# Caching static data instead of transferring it

## Version
1.0

## Submitted By
Sarah Hsu (@greenhsu123)

## Published Date
TBD

## Intent
Caching static data instead of transferring it over the network

## Tags
Cloud, Networking, Cloud Engineer, Small

## Problem
From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally than by accessing it remotely over the network. 

It's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment. 

## Solution
Caching static data, such as images or audio, instead of transferring it over the network. 

## SCI Impact
`SCI = (E * I) + M per R`

Concerning the SCI equation. Reducing the distance will impact two parts:

- `M`: By reducing the total number of computing equipment traversed, we reduce the total embodied carbon.
- `E`: By reducing the distance a packet travels, we reduce the total electricity required. 


## Assumptions
Suppose we transfer all the data of an application across the network as often as needed because some of the data may require a regular update. A better solution would be to consider a caching mechanism for static data that doesn't require frequent updates. This will reduce network traffic because we are doing local readings of the static data. 


## Pros & Cons
- **PRO**: It may reduce cloud bills because shortening the path that a network packet travel will cost less. 
- **CON**: If data is not static anymore, there is more overhead to re-architect the application to deal with the new data requirement
