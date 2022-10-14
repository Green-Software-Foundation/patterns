---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: web
tags: 
 - web
 - size:medium
 - role:web-developer
---

# Properly sized images

## Description

Images are stored with fixed pixel dimensions on disk. This determines the file size and the quality that can be achieved when displaying the image on screen. Web pages allow to dynamically resize the images from the stored size to a specific display size. 
Ideally the stored pixel dimensions are exactly the same, or smaller, as the display size in pixels. So no bandwith or storage space is wasted. 
The display size of images varies from device to device and can even change when the window resizes. For this use case web browsers provide the functionality to have "responsive images". The main strategy is, that the web server stores multiple versions of the same image at different sizes. The web browser then decides which image size to load depending on the screen and window size. 

## Solution

The main strategy is that the web browser can download the image in a size that is nearest to the display size, therefore saving bandwidth and processing cost in the web browser. The generation can be done in multiple ways, for example inside the CI/CD pipeline or via a third party service (for example via Image-CDNs).

## SCI Impact

`SCI = (E * I) + M per R`  
[Sofware Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, optimizing the image sizes will impact two parts:

- `E`: Reduces the processing and memory requirements to display the page and therefore the energy requirements, but increases the processing time once for every image to convert it into every size needed
- `M`: Increases the storage requirements to cache or store all needed image sizes

## Assumptions



## Considerations

- Consider using vector image formats like SVG to provide dynamically scalable images 

## References

- [Further explanation](https://web.dev/uses-responsive-images/)
- [Image CDNs](https://web.dev/image-cdns/)
