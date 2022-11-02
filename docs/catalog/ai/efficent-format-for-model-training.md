---
version: 1.0
submitted_by: navveenb
published_date: tbd
category: ai
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Use efficient file formats for AI/ML development

## Description
Data processing and storage constitute a significant portion of ML development and impact the carbon footprint of your application. Variety and volumes of data might need to be captured and pre-processed for building the ML model. Efficient storage of the model becomes extremely important to manage the data used for ML model development.


## Solution
Use efficient file formats for building your ML models. For instance, column-oriented data file format like Parquet provides efficient data storage and retrieval as compared to formats like CSV.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

For the SCI equation, efficient file formats for ML development would impact the following:
- 'E': Having an efficient file format for ML development, would provide efficient data storage and retrieval, consequently, decreasing the E number.
- 'M': Having an efficient file format for ML development, would reduce the storage space and servers required, thereby reducing the total embodied carbon, the M of the equation.

## Assumptions
None 

## Considerations
Evaluate and consider the most energy efficient formats required for your application.

## References
- [Apache Parquet](https://parquet.apache.org/)
