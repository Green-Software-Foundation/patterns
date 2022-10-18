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

# Remove unused CSS definitions

## Description

Cascading Style Sheets (CSS) allow HTML content to be styled in a very exact way. Because of that the CSS files are itself very complex and need complex parsing and processing. The browser needs to download all specified CSS files, process all definitions inside these files, apply it to the DOM and calculate the layout for rendering. Each added CSS definition increases the amount of time and processing power needed in this process.

## Solution

Remove all unused CSS definitions if they aren't used on the web site at all. Also consider combining multiple CSS files into one file to reduce the amount of requests, and therefore time, the browser needs to retrieve all CSS definitions at once.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, removing unused css definitions will impact two parts:

- `E`: Reduces the processing, memory and bandwidth requirements to display the page and therefore the energy requirements.

## Assumptions



## Considerations

- Depending on the web page, consider crafting specialized CSS files for landing pages or highly frequented web pages. This also makes sense if a landing page has a completely different layout as the rest of the web page

## References

- [Unused CSS Rules reference](https://web.dev/unused-css-rules/)
