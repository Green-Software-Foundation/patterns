---
version: 1.0
submitted_by: dubrie, holanita
published_date: TBD
category: web
tags: 
 - storage
 - role:web-developer
 - role:software-engineer
 - size:small
---

# Avoid Tracking Unnecessary Data

## Description

User tracking, user data collection, and targeting in things like advertisements are responsible for significant energy use in many digital products and services. This is primarily due to the large size of tracking and advertising scripts, the energy required to process and track user behavior, and databases collecting vast amounts of user data. Furthermore, this can present a significant violation of user privacy and tangibly degrade user experience.


## Solution

From an energy efficiency perspective, avoiding tracking unnecessary user data will reduce the overall workload for page loads and decrease overall page weight of the site. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, avoiding tracking unnecessary data will impact two parts:

`E`: Avoiding the tracking of unnecessary data will reducing time spent on transfering and processing web pages. 
`I`: Avoiding the tracking of unnecessary data will reduce the amount of energy consumed by the users browser, reducing the intensity of carbon emissions. 

## Assumptions
- The term `unnecessary` here is assumed to mean data that is not required for the functionality of the site. Things like advertisements, user location, or click patterns are considered not-critical functionality for a site.

## Considerations
- Consider what data is absolutely critical to your site functionality and what data can be deferred, sampled, or aggregated from other more energy efficient sources.


## References
- [https://github.com/Green-Software-Foundation/green-software-patterns/issues/52](https://github.com/Green-Software-Foundation/green-software-patterns/issues/52)
- [Does the website avoid tracking user behavior and collecting data unnecessarily?](https://sustainablewebdesign.org/does-the-website-avoid-tracking-user-behaviour-and-collecting-data-unnecessarily/)
