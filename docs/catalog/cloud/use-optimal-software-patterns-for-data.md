---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
tags: 
 - cloud
 - compute
 - role:cloud-engineer
 - size:medium
---

# Use optimal software patterns and architectures for data access and storage

## Description

Application generally need to work with data and every application has specific usage patterns which in turn define in which patterns data is accessed. Optimizing the storage for these type of patterns or optimizing the access to the storage to an optimal pattern can lead to lower carbon usage.


## Solution

Monitor and analyze the application to identify if the data access or storage technology is optimal for the use cases of the application. Optimize the access or switch to a more optimal storage technology.
Some low hanging fruit examples are:
* Ensure that database queries have the right indexes set and that a minimal amount of much indexes are defined
* Store the data in a format that can be read directly, like storing high frequented data in one table instead of joining multiple tables
* Choose In-Memory or NoSQL Databases for Key-Value like data (like session storage, caches, etc.)

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, using optimal access patterns and storage technology, will impact two parts:

- `E`: Can reduce the embodied emissions if the application after the optimization uses less hardware overall
- `I`: Optimizing the application will lead to less electricity consumed over time

## Assumptions

- Optimization needs proficiency in the tools and time to be implemented.
- Changing the storage technology can lead to a large rewrite of the application.

## Considerations

- Consider starting with the easiest optimizations first (low hanging fruits)

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_software_a6.html)
