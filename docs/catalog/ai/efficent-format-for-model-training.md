---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: ai
description: Efficient storage of the model becomes extremely important to manage the data used for ML model development.
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Use efficient file formats for AI/ML development

## Description
Data processing and storage constitute a significant portion of AI/ML development and impact the carbon footprint of your application. Variety and volumes of data might need to be captured and pre-processed for building the ML model. Efficient storage of the model becomes extremely important to manage the data used for ML model development.


## Solution
Use efficient file formats for building your ML models. For instance, column-oriented data file formats like Parquet provide efficient data storage and retrieval as compared to formats like CSV.


## SCI Impact
`SCI = (E * I) + M per R`

[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using efficient file formats for ML development impacts SCI as follows:
- `E`: A more efficient file format for ML development means more efficient data storage and retrieval, resulting in lower overall energy consumption.
- `M`: A more efficient file format for ML development reduces the amount of storage space and number of servers needed, resulting in a lower overall embodied carbon.

## Assumptions
None 

## Considerations
Evaluate and consider the most energy efficient formats required for your application.

## References
[Apache Parquet](https://parquet.apache.org/)
