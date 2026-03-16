---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2022-11-10
category: web
description: The greater the amount of nodes that are defined in HTML, the greater the time spent processing and rendering each element.
tags: 
 - size:medium
 - role:web-developer
 - web
---

# Avoid an excessive DOM size

## Description

Web browsers convert the HTML from the server into a Document Object Model (DOM) to further process the web page. Each HTML element, for example, one div, is then one node in the DOM. The amount of nodes defines the memory requirements in the browser and the needed time to display and update the page.
The greater the amount of nodes that are defined in HTML, the greater the time spent processing and rendering each element. Additionally, each interaction with the DOM from Javascript needs more processing time and more memory to traverse the DOM elements.


## Solution

Keep the necessary HTML as small as possible and strip unneeded elements from it. Use advanced strategies of the frontend framework used to reduce the DOM size additionally. When rendering large lists, for example, use these techniques:
* Angular: Use [virtual scrolling](https://material.angular.io/cdk/scrolling/overview#virtual-scrolling) with the component dev kit
* React: Use "windowing" libraries like [react-window](https://react-window.vercel.app/#/examples/list/fixed-size) 


## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing the DOM size will impact SCI as follows:

- `E`: Reduces the processing and memory requirements to display the page and therefore the energy requirements.

## Assumptions

- There is an assumption that the framework and/or the environment allows for changing the HTML structure or rendering path.

## Considerations


## References

- [Reference](https://web.dev/dom-size/)
