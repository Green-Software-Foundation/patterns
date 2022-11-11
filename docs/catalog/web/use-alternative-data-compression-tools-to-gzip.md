---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld
published_date: TBD
category: web
tags: 
 - compute
 - web
 - role:web-developer
 - size:medium
---

# Use alternative data compression tools to gzip

## Description

Compressing and decompressing files creates overheads in time and energy usage. It takes time/energy to compress the file, send it and uncompress it. Replacing gzip with ZSTD offers a reduction in compression size and compression timing. See numerical compression results in referenced blog post.

## Solution

Replacing gzip with ZSTD for example offers a reduction in compression size and compression timing. See numerical compression results in referenced blog post.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, using alternative data compression tools to gzip will impact one part:

- `E`: Quicker compression/decompression times and quicker transmission over a network (due to smaller file size) will result in less E consumed by the software.

## Assumptions


## Considerations


## References

- [Blogpost](https://lemire.me/blog/2021/06/30/compressing-json-gzip-vs-zstd/)
- [Similar Issue](vitejs/vite#5295)
