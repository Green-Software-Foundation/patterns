---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2022-11-22
category: web
tags: 
 - web
 - compute
 - role:web-developer
 - size:small
---

# Minimize main thread work

## Description

Web browsers traditionally consist of a main rendering thread that handles most of the updates on the web page and the execution of JavaScript. JavaScript is executed on the main thread to simplify JavaScript implementations so the JavaScript programmer doesn't have to deal with any multi-threading programming patterns.
When doing long running JavaScript computations it is running single threaded. In contrast all CPUs nowadays have multiple cores which have to be powered on while being underutilized.

## Solution

For long running JavaScript computations (e.g. computations that run longer than a few 100 ms) try to use WebWorkers and run them in another thread while keeping the main rendering thread free. Consider moving the JavaScript computation to efficient server implementations that use optimized algorithms.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, minimize main thread work will impact as follows:

- `E`: CPU resources can be used more efficiently which reduces the electricity required and reduces the carbon intensity

## Assumptions

- An assumption is made that the code in question can be moved of the main rendering thread

## Considerations

- Consider moving the workload to a efficient server implementation

## References

- [Main thread work breakdown](https://web.dev/mainthread-work-breakdown/)
- [What is a good Total Blocking Time](https://www.debugbear.com/docs/metrics/total-blocking-time#whats-a-good-total-blocking-time)
