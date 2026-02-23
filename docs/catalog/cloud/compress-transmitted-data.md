---
version: 1.0
submitted_by:
submitted_by_linkedin:
published_date:
category: Operations
tags: networking, data-transfer, compression, cdn, infrastructure
personas: Infrastructure Engineer, DevOps Engineer, Solution Architect
---

# Compress data at the transport layer

## Description

Data transmitted across networks without compression is larger than it needs to be. Larger payloads require more bandwidth, more packet transmissions, and more energy at every network hop between sender and receiver. For text-based content — HTML, CSS, JavaScript, JSON, XML — the gap between compressed and uncompressed size is substantial, often 60–80%. This overhead is incurred on every request, at scale, continuously.

Applying compression at the transport layer reduces this overhead without requiring changes to application logic or API contracts.

## Solution

Configure compression at the server and network edge so that payloads are compressed before transmission and decompressed on receipt:

**Enable HTTP compression server-wide.** Configure web servers, reverse proxies, and API gateways to apply compression to eligible response types automatically. This means compression is applied consistently across all endpoints without per-service changes.

**Apply compression at the CDN or edge.** Content delivery networks can compress assets at the edge before serving them to end users, reducing transmission distance as well as payload size. Enable this where available.

**Use compression for service-to-service traffic.** Internal network traffic between services is often overlooked. Where services communicate over HTTP, enable compression on those connections too — internal bandwidth and energy are not free.

**Match the algorithm to the content type.** Compression yields significant savings on text-based formats (HTML, CSS, JavaScript, JSON) but minimal or no savings on already-compressed formats such as images, video, and binary archives. Focus compression on text content to avoid wasting CPU cycles on content that won't compress meaningfully.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Compressing payloads reduces the total data transmitted, lowering the energy consumed by network infrastructure to carry each request. Compression and decompression add a small CPU overhead at each end, but for text-based content this is consistently outweighed by the network energy savings.

## Cost Impact

- **Network egress costs**: Cloud providers charge for outbound data transfer. Compression directly reduces the volume of data egressing the network, lowering this cost in proportion to the compression ratio achieved.
- **CDN costs**: Many CDN pricing models include data transfer volume. Enabling compression at the edge reduces transfer volume and therefore CDN spend.
- **Compute overhead**: Compression and decompression consume CPU cycles. For most workloads this is negligible, but at very high request volumes it is worth monitoring to confirm the trade-off remains favourable.

## Assumptions

- The receiving client or service supports decompression of the compressed format (standard for modern HTTP clients and browsers).
- The content being transmitted is compressible — primarily text-based formats. Already-compressed content types are excluded.
- Compression can be enabled at the infrastructure layer (server, proxy, CDN) without requiring application-level changes.

## Considerations

- If a client cannot decompress a response and the server must resend the payload uncompressed, the total energy cost increases. Ensure client compatibility before enabling compression broadly, or implement content negotiation via `Accept-Encoding` headers.
- Already-compressed formats (JPEG, MP4, ZIP, WebP) should be excluded from compression configuration — applying compression to these yields minimal size reduction and wastes CPU.
- Compression ratio varies significantly by content type and data structure. Measure actual payload size reductions in your environment rather than relying on generic benchmarks.

## References

- [Energy Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/energy-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)