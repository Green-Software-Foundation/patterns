---
version: 1.0
submitted_by: dubrie
published_date: TBD
category: web
tags: 
 - text
 - compression
 - size:small
---

# Enable Text Compression

## Description

Web browsers often communicate with Web servers in a human readable format. These can be HTML, JavaScript and/or CSS - files and also REST requests which can return a response in JSON. This communication is human readable and therefore highly redudandant, therefore it can be highly compressed saving a lot of bandwidth.

Web browsers and servers can communicate the compression format dynamically via the "Accept-Encoding"/"Content-Encoding" HTTP Headers. This allows the communication to dynamically switch to compression formats both side support.


## Solution

Enable all supported compression formats on the server, this allows clients to use the best available format.


## SCI Impact

`SCI = (E * I) + M per R`  
[Sofware Carbon Intensity Spec](grnsft.org/sci)

Concerning the SCI equation, optimizing peak CPU utilization will impact two parts:

- `E`: Reducing the amount of emissions by reducing time spent on transfering and processing text files.

## Assumptions
- The ability to use web servers that allow compression formats

## Considerations
- Consider compression of image resources by using modern image formats


## References
- [Information about Brotli, a common web compression algorithm](https://en.wikipedia.org/wiki/Brotli)
- [Compression Format WebBrowser Implementation Status](https://caniuse.com/?search=content-encoding)

