---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: cloud
tags: 
 - cloud
 - role:cloud-engineer
 - size:small
---

# Use compiled languages

## Description

Interpreted languages need to be parsed, compiled and executed when the application starts or a workload arrives. This tends to be more energy heavy then when a compiled language is used. The compilation is then only done once, saving on resources.

## Solution

Use compiled languages whenever possible or compile interpreted languages.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, use compiled languages will impact as follows:

- `E`: The embodied carbon emissions will be reduced, as compiled binaries tend to be smaller then the sources they are compiled from
- `I`: Running compiled binaries is more energy efficient and uses less energy which outweighs the energy consumed in compiling it to binary upfront.

## Assumptions

- There is the assumption that the execution environment allows usage of compiled languages, this is not always the case (for example web browsers)
- Use benchmarks to determine if the application use case benefits from using a compiled language

## Considerations

- Some interpreted languages provide ways to compile these into binary (for example GraalVM for Java) 

## References

- [One Carbon intensity benchmark](https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf)

