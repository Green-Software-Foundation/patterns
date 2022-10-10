---
version: 1.0
submitted_by: markus-ntt-seidl, navveenb
published_date: TBD
category: web
tags: 
 - image
 - size:small
 - role:web-developer
---

# Serve images in Moden Formats

## Description

Images are one of the main parts of modern websites and used almost on every website. Modern image formats can help to reduce bandwidth, storage and computing requirements on the displaying device.

There are serveral new image formats to choose from, for example WebP and AVIF. All new formats provide better compression ratio, increased quality and more features as traditional formats. 

For example WebP offers around 30% smaller files sizes as JPEG without a quality gap.


## Solution

Test which image format give the best compression ratio, visual quality and device coverage for the website use cases. Use the best image format to serve the images on the website.


## SCI Impact

`SCI = (E * I) + M per R`  
[Sofware Carbon Intensity Spec](grnsft.org/sci)

Concerning the SCI equation, the new image formats will impact the equation as follows:

- `E`: Reducing the amount of emissions by reducing time spent on transfering and processing images

## Assumptions
- The ability to use modern webbrowsers which supports modern image formats

## Considerations
- Consider minification to reduce emissions on other resources


## References
- [More Information about WebP](https://en.wikipedia.org/wiki/WebP)
- [More Information about AVIF](https://en.wikipedia.org/wiki/AVIF)
- [Image Format WebBrowser Implementation Status](https://caniuse.com/?search=image%20format)
