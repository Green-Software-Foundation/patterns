---
version: 1.0
submitted_by: Naveen Balani
submitted_by_linkedin: https://www.linkedin.com/in/naveenbalani/
published_date: 
category: Development
tags: 
 - ai
 - machine-learning
 - storage
 - persona:data-engineer
 - persona:ai-ml-engineer
 - size:medium
personas: Data Engineer, AI/ML Engineer
description: Use efficient storage formats, compression, and indexing strategies for AI datasets and embeddings to reduce storage footprint, data transfer, and retrieval compute.
---

# Optimize data storage formats for AI training and inference

**Applicable Role:** Provider and Consumer

## Description

Data storage and access form a significant part of AI and ML systems. During development, large datasets are collected and processed for training. During runtime, especially in retrieval-augmented generation (RAG) systems, data and embeddings are frequently accessed for retrieval and inference.

Inefficient data storage formats and access patterns increase storage requirements, data transfer volumes, and processing overhead. This leads to higher energy consumption and infrastructure usage.

Using efficient data storage and access patterns improves data retrieval performance and reduces the overall resource footprint of both training and runtime systems.

## Solution

- Use columnar storage formats such as Parquet or ORC for structured datasets
- Avoid text-based formats like CSV for large-scale workloads when more efficient alternatives are available
- Compress data where appropriate to reduce storage and transfer size
- Optimize data schemas to reduce redundancy and improve access efficiency
- Use storage systems that support efficient querying, indexing, and partial reads
- For retrieval systems, use optimized vector storage and indexing techniques to reduce compute during similarity search

## SCI Impact

**SCI = (E × I) + M per R**

**E (Energy):** Efficient storage, retrieval, and vector search reduce compute required for data processing and runtime inference.

**M (Embodied Carbon):** Reduced storage requirements decrease infrastructure needs and associated embodied emissions.

## Cost Impact

- **Storage costs:** Reduced through efficient formats (Parquet vs. CSV) and compression
- **Data transfer costs:** Lower egress charges due to smaller data sizes
- **Compute costs:** Reduced query and retrieval costs from optimized indexing
- **Tooling costs:** Vector DB licensing (Milvus, Pinecone) may add operational expense
- **Trade-off:** Storage efficiency gains offset by vector indexing infrastructure costs

## Assumptions

- Data storage formats and systems can be updated without breaking downstream applications
- Compression and indexing strategies do not introduce excessive processing overhead

## Considerations

- Compatibility with existing tools and pipelines must be evaluated
- Retrieval workloads may require both efficient storage and optimized indexing strategies
- Compression should be balanced with decompression cost
- Vector storage and indexing choices can significantly impact retrieval performance and energy usage

## References

- [Apache Parquet — Columnar Storage Format](https://parquet.apache.org/)
- [Apache ORC — Optimized Row Columnar Format](https://orc.apache.org/)
- [FAISS — Facebook AI Similarity Search](https://github.com/facebookresearch/faiss)
- [Milvus — Open-source Vector Database](https://milvus.io/)
- [Pinecone — Managed Vector Database](https://www.pinecone.io/)