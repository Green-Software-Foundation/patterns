---
version: 1.0
submitted_by: navveenb
published_date: tbd
category: web
tags: 
 - web-assets
 - role:web-developer
 - size:small
---

# Minify web assets

## Description
A web page comprises various assets, such as CSS, JavaScript, and third-party libraries like jQuery, Bootstrap etc. Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser.

## Solution
Minify web assets to reduce page size and network bandwidth while delivering the content. At scale, even a small reduction in size can have a significant impact.

## SCI Impact
`SCI = (E * I) + M per R`

For the SCI equation, minifying web assets will impact the following::
- 'E': Minifying  web assets would reduce the size of the web page and lead to reduction in network bytes during transfer of content. The browser/device would takes less energy to render the content. This should reduce the energy consumption of your web page, and consequently, the E number should decrease.

## Assumptions
None 

## Considerations
None

## References
- [Minify CSS](https://web.dev/unminified-css/)
- [Minify JavaScript](https://web.dev/unminified-javascript/)

