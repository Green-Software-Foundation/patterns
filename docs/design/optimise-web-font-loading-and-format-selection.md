---
version: 0.2
submitted_by: Paula de Matos
submitted_by_linkedin: https://www.linkedin.com/in/pauladematos/
published_date:
category: Design
tags: frontend, fonts, typography, design-system, accessibility, internationalisation, web-performance
personas: Product Designer, UX Designer, Front End Engineer, Full Stack Engineer
---

# Choose typefaces appropriately and optimise

## Description

Typeface selection is a design decision, but it carries a direct environmental consequence. Custom web fonts must be downloaded to every user's device on each visit, adding network bytes and increasing the energy consumed by data transmission and device processing. When designers choose custom fonts without first evaluating whether existing system fonts could meet user needs, they introduce an avoidable cost that compounds across every page view at scale.

The environmental impact worsens when font choices are not informed by actual user requirements. Fonts loaded with unnecessary weights, styles, or character ranges — or chosen primarily for aesthetic reasons when a system font would serve equally well — silently increase the carbon footprint of the product for every user, on every visit.

## Solution

Font decisions should begin with understanding user requirements, not aesthetic preference. Working through these stages in order ensures that custom fonts are only introduced when they genuinely serve users better than what already exists on their devices.

**1. Identify what users actually need from typography.**

Before any font is selected, designers should establish the functional requirements:

- **Readability and legibility** — does the context require high character distinctiveness? Ambiguous character pairs (such as lowercase l, uppercase I, and numeral 1) matter significantly in interfaces where users read codes, identifiers, or data.
- **Purpose and context** — UI interfaces, data-dense dashboards, and long-form reading have different typographic demands. A font well-suited to one may perform poorly in another.
- **Accessibility** — consider dyslexia-friendly letterforms, sufficient character distinguishability, and the needs of users with visual impairments.
- **Internationalisation** — if the product serves users across languages, character set coverage, text direction, and script support all influence which fonts are viable.

**2. Evaluate whether system fonts meet those requirements.**

Modern operating systems ship with a broad range of high-quality typefaces. If the requirements identified in step 1 can be satisfied by system fonts, using them eliminates the network cost of font delivery entirely and removes render-blocking behaviour. System fonts are already present on the user's device — they have zero download cost.

A hybrid approach is worth considering: system fonts for body text, where readability requirements are often well met by defaults, combined with a single custom font for headlines or brand-critical elements — loading only the one weight needed.

**3. If a custom font is genuinely required, minimise its impact.**

- **Use modern, compressed formats.** Serve fonts in WOFF2, which offers significantly better compression than TTF or OTF. Avoid legacy formats unless browser support requirements demand them.
- **Subset to actual usage.** Generate a subset that covers only the characters, scripts, and languages your users will encounter. Loading a full Unicode character set when only Latin characters are needed is a common and avoidable source of excess weight.
- **Load only the variations used.** Each weight and style is a separate file. Audit your design system and load only what appears in production — if regular and bold are sufficient, do not load thin, medium, or italic.
- **Apply font-display strategies.** Control how text renders while fonts load, favouring approaches that show content immediately using a system font fallback rather than blocking render or causing invisible text.
- **Self-host fonts where possible.** Serving fonts from your own infrastructure removes third-party request overhead, enables better caching, and avoids connection latency to external font services.

## SCI Impact

`SCI = (E * I) + M per R`

- `E`: Reduced. Choosing system fonts where appropriate eliminates font download energy entirely. Where custom fonts are retained, optimisation reduces the bytes transferred and processed on every page load. Both effects compound across high-traffic products.
- `M`: Reduced marginally. Reduced data transfer and faster rendering lower active device processing time per session, contributing a small reduction in embodied emissions amortised over device lifetimes.

## Cost Impact

- **Network egress costs decrease.** Smaller or eliminated font payloads reduce bytes transferred from CDN or origin servers. At scale, this is material.
- **Third-party font service costs may be eliminated.** Some hosted font services charge by page view or request volume; self-hosting removes these costs entirely.
- **Design and build time may increase modestly upfront.** Establishing typography requirements and subsetting fonts requires deliberate effort. This is a one-time cost per product rather than an ongoing operational cost.

## Assumptions

- The product has web-based surfaces where fonts are delivered over HTTP/S to end-user browsers.
- Designers have input into typeface selection before engineering decisions about font loading are made.
- The design team has access to information about user needs — language coverage, accessibility requirements, context of use — to inform font selection.
- Browser support requirements permit WOFF2 (supported by all modern browsers).

## Considerations

- **System fonts vary across platforms.** A system font stack that looks excellent on macOS may render differently on Windows or Android. Where visual consistency across platforms is a hard requirement, system fonts alone may not be sufficient.
- **Custom fonts may be a brand requirement.** Where a typeface is central to brand identity, switching to system fonts may not be an option. In these cases, the emphasis should shift entirely to format optimisation and subsetting.
- **Aggressive subsetting can cause missing characters.** If a subset excludes characters that appear in user-generated content, dynamic text, or internationalised strings, those characters will fall back to a different font, causing visual inconsistency. Subsetting should be informed by real content and user language data, not only design mockups.
- **Font caching reduces per-session impact for returning users.** Optimisation has the greatest environmental benefit on first visits and cold caches. For products with high proportions of returning users, the marginal gain from further optimisation diminishes over time.

## References

- [W3C Web Sustainability Guidelines — Use Optimized and Appropriate Web Typography](https://www.w3.org/TR/web-sustainability-guidelines/#use-optimized-and-appropriate-web-typography)
- [Wholegrain Digital — Performant Web Fonts](https://www.wholegraindigital.com/blog/performant-web-fonts/)
- [GSF Green Software Principles — Energy Efficiency](https://principles.green/principles/energy-efficiency/)
