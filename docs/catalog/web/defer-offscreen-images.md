---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: web
tags: 
 - web
 - role:web-developer
 - size:small

---

# Defer Offscreen Images


## Description

Web pages offer a lot of images that aren't displayed on the first loaded screen. They can also hide these images behind other interactions, like tabs and accordions. This content is dynamically displayed and therefore doesn't need to be loaded when it isn't displayed. 
The fact that images are loaded on-demand, only when they are about to be displayed, is often called "lazy-loading".


## Solution

Load images on demand, which are unlikely to be displayed on first page load. This can be done via the newer browser attribute `loading="lazy"` on the image tag and can also be [polyfilled](https://github.com/mfranzke/loading-attribute-polyfill) for older browsers.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, lazy-loading images  will impact as follows:

- `E`: Images are only loaded when needed, saving bandwidth and processing power on the client and server, therefore reducing the needed energy.

## Assumptions

- This assumes that the HTML for the image tags can be modified in the application

## Considerations


## References

- [Detailed description](https://web.dev/offscreen-images/)
