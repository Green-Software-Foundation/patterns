---
version: 1.0
submitted_by:
submitted_by_linkedin:
published_date:
category: Development
tags: networking, data-transfer, api-design, data-formats, pagination
personas: Software Engineer, Full Stack Engineer, Solution Architect
---

# Reduce transmitted data at the application layer

## Description

Software commonly transmits more data than the recipient actually needs. APIs return full object representations when only a subset of fields is required. Data pipelines forward complete records when only a handful of properties are consumed downstream. Services send everything up front to avoid making additional requests later. This over-transmission increases network energy consumption on every call, multiplied across every user and every request the system handles.

Reducing the volume of data at the point of creation — before it is ever sent — is one of the most effective ways to lower the network energy footprint of an application.

## Solution

Design APIs and data transfer mechanisms to send only what is needed:

**Send only required fields.** Structure API responses to return the specific properties the recipient needs, rather than full object representations. Field selection mechanisms — such as GraphQL queries or sparse fieldsets in REST — allow clients to declare exactly what they need, avoiding over-fetching by default.

**Filter early, not late.** Apply data filtering and aggregation as close to the source as possible (at the database or service layer) rather than transferring raw datasets and filtering in the client. Data that is never transmitted consumes no network energy.

**Choose compact data formats.** The choice of serialisation format has a significant impact on payload size. Binary formats are substantially more compact than text-based ones for the same data; among text formats, compactness varies considerably. Select the most compact format that meets interoperability requirements.

**Paginate and stream large datasets.** Avoid transferring entire large datasets in a single payload. Use pagination, cursors, or streaming to send data incrementally, allowing the recipient to stop consuming once their need is met.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Reducing the volume of data transmitted lowers the energy consumed by network infrastructure to carry each request and by the recipient to receive and process it. Across high-traffic systems, this reduction compounds significantly.

## Cost Impact

- **Network egress costs**: Cloud providers charge for data transferred out of their networks. Reducing payload size directly reduces egress volume and therefore egress spend — often one of the more significant line items for data-heavy services.
- **Downstream compute**: Smaller payloads mean less processing work for recipients, which can reduce compute costs at scale.
- **API complexity**: Implementing field selection or sparse fieldsets adds development effort up front. This is a one-time cost that pays back continuously through reduced transfer volume.

## Assumptions

- The recipient does not require the full data payload in every case — there is meaningful over-transmission occurring.
- Where properties are omitted, the system supports requesting additional data on demand if needed later.
- The application has sufficient control over API design or data pipeline construction to apply these changes.

## Considerations

- If downstream consumers genuinely need complete data payloads, reducing fields at the source may introduce additional round-trips to fetch missing properties — increasing rather than reducing overall energy use. Analyse actual consumption patterns before optimising.
- Changing existing API contracts to return fewer fields by default is a breaking change for existing clients. Plan migration carefully.
- Compact binary formats improve efficiency but reduce human-readability, which can increase debugging overhead.

## References

- [Energy Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/energy-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)