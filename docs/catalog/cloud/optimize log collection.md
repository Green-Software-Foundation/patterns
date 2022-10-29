---
version: 1.0
submitted_by: yelghali
published_date: tbd
category: cloud
tags: 
- compute
- kubernetes
- role:software-engineer
- role:cloud-engineer
- size:medium
---

# Optimize log collection

## Description
Sending and storing all logs from all possible sources (workloads, services, diagnostics and platform activity) can considerably increase storage and network traffic, which would impact higher costs and carbon emissions.

## Solution

Make sure you are collecting and retaining only the log data necessary to support your requirements. Configure data collection rules for your workloads, platform and infrastructure.

## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Regarding the SCI equation, optimizing log collection will impact:

- `E`: By reducing the transmitted and stored logs, we reduce the amount of energy consumed for the monitoring needs.
- `M`: By reducing the volumes of stored logs, we reduce storage resource utilization. Hence, decreasing the embodied carbon emissions.

## Assumptions

The logging requirements are defined and shared by the developpers and platform operators.

## Considerations
Consider archiving or deleting old logs.

Consider implementing an [observability pipeline](https://opentelemetry.io/docs/collector/configuration/) that allows better management of log collection, filtering and exports.
