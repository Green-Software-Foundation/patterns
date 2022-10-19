---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: web
tags: 
 - size:medium
 - role:web-developer
 - web
---

# Keep transfer sizes small

## Description

Displaying a web page requires that the browser has downloaded all necessary files needed. Not only does the amount of request determine how much CO2 is used, but also the file sizes of each request.

To use the least amount of CO2 it is more efficient to download a larger, completely necessary, resource instead of multiple tiny resources. 

## Solution

Reduce the required and necessary resources to the minimum file size possible. Consider applying one or more of the following patterns:
* Minifying their content if the resource is of type HTML, JavaScript or CSS (TODO Link to pattern)
* Using new image formats (TODO Link to pattern)
* Loading images on demand (TODO Link to defer pattern)
* Size images properly (TODO link to pattern)
* Deprecate GIFs for newer animation formats (TODO link to pattern)

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, keeping the request counts low will impact:

- `I`: Reducing the file size of resources also reduces bandwidth and, maybe, parsing and processing time will also be reduced
- `M`: Reducing the file size on each resource reduces the storage needed


## Assumptions


## Considerations


## References

- [Source](https://web.dev/resource-summary/)
