---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: web
description: Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser.
tags: 
 - web
 - role:web-developer
 - size:small
---

# Minify web assets

## Description
A web page comprises various assets, such as HTML, CSS, JavaScript, and third-party libraries like jQuery, Bootstrap etc. Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser.

## Solution
Minify web assets to reduce page size and network bandwidth while delivering the content. At scale, even a small reduction in size can have a significant impact.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Minifying web assets will impact the SCI as follows:

- `E`: Minifying  web assets can reduce the size of the web page and lead to a reduction in network bytes during the transfer of content. The browser/device would take less energy to render the content. This should reduce the energy consumption of your web page.

## Assumptions
None 

## Considerations
None

## References
- [Minify CSS](https://web.dev/unminified-css/)
- [Minify JavaScript](https://web.dev/unminified-javascript/)
