---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2023-10-25
category: web
description: Use server-side rendering for high-traffic pages
tags: 
 - web
---

# Use server-side rendering for high-traffic pages

## Description

Modern web applications feature a lot of interface elements that are stored in templates on the server. The template is downloaded with the application code and then rendered with requested data from the server.
This can dramatically increase the SCI in different scenarios: When the client device doesn't have access to green energy, when the page usage is short (e.g. accidental clicks, pages with short dwell time like landing pages) or if a lot of server round-trips are needed to gather data.


## Solution

Consider using server-side rendering as a method to reduce energy consumption on the client side. Frameworks like Angular or React already provide solutions on how to implement this efficiently.
Server side rendering can improve site loading times (including rendering time on slower hardware), reduce network requirements (less round trips needed), and utilize caching (pre-rendered pages can be stored on the client device).

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Server side rendering will impact SCI as follows:

- `E`: Pre-rendering once can dramatically reduce energy consumption; pre-rendering on every request can reduce energy consumption if the server is more energy efficient and has access to green energy

## Assumptions

- Assumes that the frontend technology being used allows for pre-rendered content
- Assumes that the web page is visited in high enough volumes so as to affect the overall SCI

## Considerations

- Consider using a caching mechanism to store rendered pages if they change frequently but are still met with a high load. This can significantly reduce the server load by serving pre-rendered content for frequent requests.
- Consider the other patterns in the web category

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
