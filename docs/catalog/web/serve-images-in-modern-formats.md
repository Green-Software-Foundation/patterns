---
version: 1.0
submitted_by: dubrie
published_date: TBD
category: web
tags: 
 - image
 - size:small
---

# Serve images in Moden Formats

## Description

Images are one of the main parts of modern Websites and used almost on every website. Modern Image formats can help to reduce bandwith, storage and computing requirements on the displaying device.

There are serveral new image formats to choose from, for example WebP and AVIF. All Formats provide better compression ratio, increased quality and more features as traditional formats.


## Solution

Validate which image format is supports the use case of the web application the best. Convert images to modern image formats and deliver them to the displaying devices. 


## SCI Impact

`SCI = (E * I) + M per R`  
[Sofware Carbon Intensity Spec](grnsft.org/sci)

Concerning the SCI equation, optimizing peak CPU utilization will impact two parts:

- `E`: Reducing the amount of emissions by reducing time spent on transfering and processing images

## Assumptions
- The ability to use modern webbrowsers with supportes modern image formats

## Considerations
- Consider minification to reduce emissions on other resources


## References
- [More Information about WebP](https://en.wikipedia.org/wiki/WebP)
- [More Information about AVIF](https://en.wikipedia.org/wiki/AVIF)
- [Image Format WebBrowser Implementation Status](https://caniuse.com/?search=image%20format)
