---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: web
tags:
 - size:small
 - role:web-developer
 - web
---

# Deprecate GIFs for animated content

## Description

GIFs where invented in the early 80s and where very popular in the beginnings of the Internet. This format was used to deliver animated content in webbrowsers.
Newer technologies have made GIFs technically obsolete, but it is still widely known as animated picture format. One direct replacement of GIF can be the MP4 video format. MP4 provides much smaller file sizes and higher quality at the same time.

## Solution

Convert the source material of the GIF to MP4 to receive a higher quality at lower file size. If that is not possible the GIF can also directly converted, this way the file size will be reduced at the same quality that the GIF provides.

Even higher compression ratios can be achieved by inspecting the content of the GIF. Depending on the content other techniques may provide even better solutions, like: CSS animations, SVG animations and image formats that also support animations.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

The conversion will impact the SCI as follows:

- `E`: Reduced energy consumption by reducing download size and increased page performance

## Assumptions
- Web browser supports the new format


## Considerations


## References

- [Alternatives to GIF](https://en.wikipedia.org/wiki/GIF#Alternatives)
- [Real life improvement reports for replacing GIF with MP4](https://en.wikipedia.org/wiki/GIF#Uses)
