---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2023-10-25
category: web
description: Web browsers often communicate with web servers in a human readable format. These can be HTML, JavaScript and/or CSS files and REST requests which can return a response in JSON. This human readable communication is redundant and, as such, can be compressed to save bandwidth.
tags: 
 - web
 - size:small
 - role:web-developer
---

# Enable text compression

## Description

Web browsers often communicate with web servers in a human readable format. These can be HTML, JavaScript and/or CSS files and REST requests which can return a response in JSON. This human readable communication is redundant and, as such, can be compressed to save bandwidth.

Web browsers and servers can communicate the compression format dynamically via the "Accept-Encoding"/"Content-Encoding" HTTP Headers. This allows the communication to dynamically switch to compression formats both sides support.


## Solution

Enable all supported compression formats on the server, allowing clients to use the best available format.


## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Enabling text compression will impact SCI as follows:

- `E`: Reducing emissions by reducing the amount of electricity needed while transferring and processing text files
- `M`: Reducing the size of the files can also reduce the storage requirements of the web page on the server

## Assumptions

- The use of web servers that allow compression formats

## Considerations



## References
- [HTTP compression](https://en.wikipedia.org/wiki/HTTP_compression)
- [Information about Brotli, a common web compression algorithm](https://en.wikipedia.org/wiki/Brotli)
- [Compression Format WebBrowser Implementation Status](https://caniuse.com/?search=content-encoding)

