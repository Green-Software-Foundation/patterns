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

# Keep request counts low

## Description

Accessing a web page usually retrieves a HTML file from the web server. The HTML can then reference additional resources that the browser has to download. 
To use the least amount of CO2, reduce the amount of files needed to display a page in the browser.

## Solution

Reduce the amount of files needed and also the amount of requests done by the loaded JavaScript to display the final page. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, keeping the request counts low will impact:

- `I`: Reducing the amount of requests reduces the energy needed to display the page
- `M`: Reducing the amount of requests can also reduce the amount of files and therefore the storage requirements of the web page on the server


## Assumptions


## Considerations


## References

- [Source](https://web.dev/resource-summary/)
