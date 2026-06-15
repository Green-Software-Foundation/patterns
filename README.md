# Green Software Patterns

## Scope

An open-source catalogue of best practices that, if applied, will reduce software emissions. Each pattern has been thoroughly reviewed by experts and agreed upon by members of the Green Software Foundation.

The patterns are a direct response to a consistent piece of feedback: people need actionable advice they can apply immediately to their software products. We need one place where everyone can go for green software patterns and trust that if they apply a pattern, it will reduce emissions.

Browse the catalogue at [patterns.greensoftware.foundation](https://patterns.greensoftware.foundation) by **Software Lifecycle stage** — Requirements, Architecture, Development, or Operations — or explore patterns tailored to **your professional role** via the Personas section.

Patterns are vendor-agnostic. There are no Azure, AWS, or GCP-specific patterns — only generic patterns that can be applied across specific platforms. We encourage vendors to create platform-specific implementations of these patterns on their own channels.

## Appointments

The project is led by:

* [Franziska Warncke](https://github.com/franziska-warncke) (NTT DATA) — Project Lead
* [Liya Mathew](https://github.com/LiyaMath) (Goldman Sachs) — Project Lead

Core contributors:

* [Juan Rubio](https://github.com/Juanigrubio1293) (Schneider Electric)
* [Paula de Matos](https://github.com/pdematos12) (AVEVA)

## Browse the Catalogue

Visit [patterns.greensoftware.foundation](https://patterns.greensoftware.foundation) to explore patterns in two ways:

**By Software Lifecycle stage** — find patterns relevant to where you are in the development process:
- **Requirements** — defining constraints and goals
- **Architecture** — system topology and technology selection
- **Development** — data handling, media efficiency, and web performance
- **Operations** — capacity management and resource lifecycle

**By Role** — find patterns tailored to your responsibilities:
- Visit the [Personas](https://patterns.greensoftware.foundation/personas) section to browse patterns curated for Software Engineers, DevOps Engineers, Front-End Engineers, Solution Architects, and more.

## Components of a Green Software Pattern

* **Title**: Title of the pattern
* **Version**: Designation of iteration on the pattern. Initially assigned by the patterns working group
* **Submitted By**: The name of the person(s) submitting the pattern
* **Published Date**: The date this version of the pattern is published. Provided by the patterns working group upon approval
* **Lifecycle Category**: The most appropriate lifecycle category for this pattern: Requirements, Architecture, Development, or Operations
* **Tags**: A [pre-defined list of additional tags](https://patterns.greensoftware.foundation/tags/) which apply to the pattern (e.g. kubernetes, compute, security)
* **Description**: A full description of what problem this pattern is solving
* **Solution**: How this pattern solves the problem
* **SCI Impact**: How this pattern affects an SCI score and why
* **Assumptions**: What assumptions are being made
* **Considerations**: Anything that should be taken into consideration when implementing this pattern
* **References**: Links to related resources elsewhere on the web

## Stages of a Green Software Pattern

### Submission
Anyone can propose a new pattern via the [Propose a Pattern](https://patterns.greensoftware.foundation/contribute) form. You don't need to write the full pattern — just describe the problem you want to solve and your proposed approach. The team will develop it into a fully formatted pattern for review.

### Initial Review *(up to 1 week)*
An initial reviewer checks that the pattern meets core requirements: correct format, sufficient detail, and alignment with the GSF mission. If anything is missing, feedback is provided directly in the pull request.

### SME Review *(up to 2 weeks)*
One or more subject matter experts review the pattern for technical accuracy and efficacy. They assess whether applying the pattern would genuinely reduce software emissions.

### Team Consensus *(2 weeks)*
The Principles and Patterns Working Group has two weeks to comment or object. Once consensus is reached, the pattern is approved and published to the website.

## Local Development

```bash
npm install
node scripts/generate-persona-data.js   # required before build
npm start                                # dev server at localhost:3000
npm run build                            # production build → /build
npm run serve                            # preview the production build
```

> **Note:** `generate-persona-data.js` compiles pattern frontmatter into persona page data. It must be run before `npm run build` or persona pages will be stale.

## Copyright
The Green Software Patterns projects are copyrighted under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).

## Patent
No Patent License. No patent licenses are granted for the Draft Deliverables or Approved Deliverables developed by this Working Group.

## License
The Green Software Patterns projects are licensed under the Creative Commons Attribution 4.0 International License — see the [License.md](license.md) file for details.
