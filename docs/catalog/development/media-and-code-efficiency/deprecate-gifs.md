---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2022-11-10
category: web
description: One direct replacement of the GIF is the MP4 video format which provides much smaller file sizes and higher quality at the same time.
tags:
 - size:small
 - role:web-developer
 - web
---

# Deprecate GIFs for animated content

## Description

GIFs were invented in the early 80s and this popular format was used to deliver animated content in web browsers.

Newer technologies have made GIFs technically obsolete, but they are still widely known as animated picture format. One direct replacement of the GIF is the MP4 video format. MP4 provides much smaller file sizes and higher quality at the same time.

## Solution

Convert the source material of the GIF to MP4 to receive a higher quality at lower file size. If that is not possible, the GIF can also be directly converted to reduce the file size while maintaining the quality of the GIF.

Even higher compression ratios can be achieved by inspecting the content of the GIF. Depending on the content other techniques may provide even better solutions, such as CSS animations, SVG animations and image formats that also support animations.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Converting GIFs will impact the SCI as follows:

- `E`: Reduced energy consumption by reducing download size and increased page performance.

## Assumptions
- The web browser must support the new format.


## Considerations
None

## References

- [Alternatives to GIF](https://en.wikipedia.org/wiki/GIF#Alternatives)
- [Real life improvement reports for replacing GIF with MP4](https://en.wikipedia.org/wiki/GIF#Uses)
