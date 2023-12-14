---
version: 1.0
submitted_by: amexboy,gopaltayal,samudurand,shainu-x
published_date: 2023-12-14
category: cloud
description: Data protection through encryption is a crucial aspect of our security measures. However, the encryption process can be resource-intensive at multiple levels.
tags:
- size:medium
- cloud
- security
- role:cloud-engineer
---
# Encrypt what is necessary

## Description
Data protection through encryption is a crucial aspect of our security measures. However, the encryption process can be resource-intensive at multiple levels.
Firstly, the amount of CPU required for encryption varies depending on the chosen algorithm, and more complex algorithms tend to demand higher computational power.
Additionally, encryption can lead to increased storage requirements as it inflates the size of the data being stored because it typically contains additional metadata and padding, which is especially noticeable for smaller files.
Furthermore, encryption is a repetitive task that needs to be performed each time data is fetched or updated. This repetitive nature can contribute to increased energy consumption, especially in high-throughput systems.

## Solution
- Carefully consider the sensitivity of the data that the application processes to understand if encryption is needed or not.
- Revise policy of what is considered sensitive and understand which environments can impact this sensitivity.
- Choose the appropriate algorithm and number of iterations in case of hashing, based on your application's performance and security needs.

## SCI Impact
`SCI = (E * I) + M per R` [Software Carbon Intensity Spec](https://grnsft.org/sci)
Only encrypting what is necessary impacts SCI as follows:
- E: Reducing the amount of data that needs encryption will reduce the amount of energy needed to encrypt/decrypt and store the data.

## Assumptions
- There is an assumption that a significant amount of data is not sensitive and can be stored unencrypted.

## Considerations
- Segregate data into sensitive and non-sensitive data and only encrypt the sensitive data.
- Separate storage for encrypted and non-encrypted data.
- Hard to implement post application design.

## References
- [Comparative Analysis of Energy Costs of Asymmetric vs Symmetric Encryption-Based Security Applications](https://doi.org/10.1109/ACCESS.2022.3192970)
