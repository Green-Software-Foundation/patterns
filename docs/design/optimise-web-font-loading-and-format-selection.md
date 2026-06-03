---
version: 0.1
submitted_by: Paula de Matos
submitted_by_linkedin: https://www.linkedin.com/in/pauladematos/
published_date:
category: Design
tags: frontend, web-performance, fonts, typography, media-assets, network
personas: Front End Engineer, Product Designer, UX Designer, Full Stack Engineer
---

# Optimise web font loading and format selection

## Description

Typefaces are essential for communication, but custom web fonts come with a hidden environmental cost: they must be downloaded by every user's device before text can render correctly. A single page may load multiple font files covering different weights, styles, and character sets, each adding network bytes and increasing the energy consumed by data transmission and device processing.

The problem is compounded when fonts are served in inefficient formats, when unused variations are loaded speculatively, or when system fonts — already present on the device — are bypassed in favour of custom alternatives that serve no functional advantage. These decisions, often made for aesthetic reasons, silently increase the carbon footprint of every page view across a site's entire audience.

## Solution

Prefer system fonts where they serve the design intent. Modern operating systems ship with a broad range of high-quality typefaces. Using system font stacks eliminates the network cost of font delivery entirely and avoids render-blocking behaviour. When a custom font is genuinely required, the following approaches reduce its impact:

- **Use modern, compressed formats.** Serve fonts in WOFF2, which offers significantly better compression than older formats such as TTF or OTF. Avoid serving legacy formats unless browser support requirements demand it.
- **Subset fonts to actual usage.** Rather than loading a full Unicode character set, generate a subset that covers only the characters, scripts, and languages your users will actually encounter. Tools exist to subset fonts at build time, reducing file size substantially.
- **Load only the variations you use.** Each weight (light, regular, bold) and style (italic, oblique) is a separate file. Audit your design system and only load font variations that appear in production. If bold and regular are sufficient, do not load thin, medium, or italic variants.
- **Apply font-display strategies.** Use the `font-display` CSS descriptor to control how text renders while fonts load, favouring approaches that show content immediately using a system font fallback rather than blocking render or causing invisible text.
- **Self-host fonts where possible.** Serving fonts from your own CDN removes third-party request overhead, allows better caching headers, and avoids connection latency to external font services.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Reduced. Smaller font payloads mean less data transferred over the network, lowering the energy consumed by network infrastructure and user devices on each page load. Eliminating unused font variations has a compounding effect across high-traffic sites.
- `I`: Unchanged. This pattern does not influence the carbon intensity of the electricity grid powering the infrastructure.
- `M`: Reduced marginally. Faster page loads and reduced processing reduce active device time per session, contributing a small reduction in embodied emissions amortised over device lifetimes.

## Cost Impact

- **Network egress costs decrease.** Smaller font payloads reduce bytes transferred from CDN or origin servers. For high-traffic sites, the savings across millions of requests can be material.
- **Third-party font service costs may decrease.** Some hosted font services charge based on page views or request volume; self-hosting eliminates these costs entirely.
- **Build pipeline complexity may increase marginally.** Subsetting fonts and generating compressed variants requires tooling at build time. This is a one-time setup cost rather than an ongoing operational cost, and the payoff in reduced transfer costs typically far outweighs it.

## Assumptions

- The application is a web-based product where fonts are delivered over HTTP/S to end-user browsers.
- The design system has been audited to understand which font weights, styles, and character ranges are actually used in production.
- The team has the ability to influence font selection and loading strategy at the design or front-end engineering level.
- Browser support requirements permit the use of WOFF2 (supported by all modern browsers).

## Considerations

- **Switching to system fonts changes visual identity.** For brands where custom typography is a core design element, moving to system fonts may not be acceptable. In these cases, the focus should shift to format optimisation and subsetting rather than elimination.
- **Aggressive subsetting can cause missing characters.** If a subset excludes characters that appear in user-generated content, dynamic text, or internationalised strings, those characters will fall back to a different font, causing visual inconsistency. Subsetting decisions should be informed by real content, not just design mockups.
- **Variable fonts offer a middle path.** A single variable font file can replace multiple weight/style variants and may be smaller in total than loading several static files separately — though this depends on usage patterns and should be measured.
- **Font caching reduces the per-session impact.** For returning users, a well-cached font may add no network cost at all. Optimisation has the greatest impact on first visits and cold caches.

## References

- [W3C Web Sustainability Guidelines — Use Optimized and Appropriate Web Typography](https://www.w3.org/TR/web-sustainability-guidelines/#use-optimized-and-appropriate-web-typography)
- [Wholegrain Digital — Performant Web Fonts](https://www.wholegraindigital.com/blog/performant-web-fonts/)
- [GSF Green Software Principles — Energy Efficiency](https://principles.green/principles/energy-efficiency/)
