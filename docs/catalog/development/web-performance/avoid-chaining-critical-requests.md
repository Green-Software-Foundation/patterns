---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: web
description: Most web experiences require a lot of work from the user's browser. The greater the length of the chains and the larger the download sizes, the more significant the impact on page load performance and the energy required to render a page.
tags: 
 - web
 - role:web-developer
 - size:medium
---

# Avoid chaining critical requests

## Description

Most web experiences require a lot of work from the user's browser. The intermediate steps between receiving the HTML, CSS, and JavaScript bytes and the request processing to turn them into rendered pixels is known as the critical rendering path. [Critical request chains](https://web.dev/critical-rendering-path/) are a series of dependent network requests that block page rendering until they complete. The greater the length of the chains and the larger the download sizes, the more significant the impact on page load performance and the energy required to render a page.

## Solution

From an energy efficiency perspective, avoiding critical request chains reduces the overall energy required to render a page by using loading time more efficiently without a serialized set of requests and allowing the user to begin interacting with the content earlier, potentially negating the need for any further rendering and energy consumption. 

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Avoiding chaining critical requests will impact SCI as follows:

- `E`: Improved page rendering times will reduce the amount of energy needed to render the page 

## Assumptions
- There is an assumption that users are on modern web browsers that can support these types of requests.  


## Considerations
- Some critical request chains may be necessary, the focus here is on avoidance and only using them when absolutely critical  
 
## References
- [Critical Rendering Path](https://web.dev/critical-rendering-path/)
- [Critical Request Chains](https://web.dev/critical-request-chains/)
- [Proposed Pattern in Issue 54](https://github.com/Green-Software-Foundation/green-software-patterns/issues/54) 
