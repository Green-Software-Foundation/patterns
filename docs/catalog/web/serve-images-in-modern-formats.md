---
version: 1.0
submitted_by:
submitted_by_linkedin:
published_date:
category: Development
tags: media-assets, images, frontend, networking, data-transfer
personas: Front End Engineer, Full Stack Engineer, DevOps Engineer
---

# Serve images in modern image formats

## Description

Images are among the largest contributors to web page weight. Despite significant advances in image compression technology, legacy formats — JPEG for photography, PNG for graphics, GIF for animation — remain the default output of many design tools, CMS platforms, and content pipelines. This means most web images are larger than they need to be, consuming more network energy and storage on every request, without any deliberate decision being made to keep them that way.

Modern image formats offer substantially better compression ratios at equivalent or higher visual quality, with broad browser support. Switching to them reduces the data transmitted on every image load, across every user, continuously.

## Solution

**Replace legacy static formats with modern equivalents.** WebP offers around 30% smaller file sizes than JPEG at equivalent quality and is supported by 98%+ of browsers, making it a safe baseline replacement for most use cases. AVIF provides even better compression — often 20–50% smaller than WebP — and is well-suited to high-quality photography where size is a priority. Provide fallbacks to JPEG or PNG for the small proportion of browsers that do not support modern formats, using format negotiation so each client receives the best format it can handle.

**Replace GIFs with video or vector alternatives.** GIF is a 1980s format that encodes animation extremely inefficiently. For photographic or video-like animations, converting to MP4 or WebM delivers the same visual result at a fraction of the file size. For simple UI animations — loaders, transitions, icons — CSS or SVG animation transfers no image data at all and should be the first consideration. Choose the technique based on content type: video formats for rich animated content, CSS/SVG for geometric or interface animations.

**Integrate format conversion into the build or delivery pipeline.** Modern image formats deliver their benefit only if images are actually converted before being served. Automating conversion at build time or via a CDN with image optimisation capabilities ensures the gains are realised consistently, rather than relying on manual per-image decisions.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Smaller image files reduce the data transmitted on every request, directly lowering the network energy required to serve each image. Decoding modern formats also has comparable or lower computational cost than legacy formats on modern devices, so the client-side energy impact is neutral to positive.
- `M`: Reduced file sizes lower storage requirements, which reduces the infrastructure needed to store and cache image assets — marginally reducing the embodied carbon of storage hardware at scale.

## Cost Impact

- **Network egress costs**: Image delivery is a significant proportion of egress volume for content-heavy services. Reducing image file sizes by 30–50% translates directly into proportional egress cost savings.
- **CDN and storage costs**: Smaller assets reduce both the storage footprint and the bandwidth charged by CDN providers.
- **Build pipeline investment**: Integrating format conversion into CI/CD or CDN configuration has a one-time setup cost. Managed CDN image optimisation services can reduce this to near-zero effort.

## Assumptions

- The application serves images to web browsers or other clients that support format negotiation.
- A fallback mechanism is in place for clients that do not support modern formats (JPEG/PNG fallback for static images).
- Image conversion can be integrated into the build pipeline or handled at the CDN layer.

## Considerations

- Visual quality at a given compression level varies by content type — benchmarks on a representative sample of your actual images are more reliable than format-level averages. Validate quality against your requirements before rolling out at scale.
- Browser support for AVIF and newer formats continues to improve but is not universal. Always implement fallback delivery so older clients are not served broken images.
- For animated content used in UI interactions, CSS and SVG animation are preferable to any image-based approach where the content permits — they involve no image data transfer and scale without quality loss.

## References

- [Energy Efficiency Principle — Green Software Foundation](https://learn.greensoftware.foundation/energy-efficiency)
- [Software Carbon Intensity Specification](https://grnsft.org/sci)
- [WebP image format — web.dev](https://web.dev/learn/images/webp)
- [AVIF image format — web.dev](https://web.dev/learn/images/avif)
- [Browser format support — caniuse.com](https://caniuse.com)