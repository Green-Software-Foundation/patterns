# Green Software Foundation releases their catalog of Green Software Patterns to empower software teams throughout the world to build greener applications.

In August 2022, the Green Software Foundation released its catalog of Green Software Patterns. An open-source database of software patterns that, if applied, will reduce software emissions. Each pattern has been thoroughly reviewed by experts and agreed upon by all members of the Foundation. The patterns are the next step in the Foundation's goal to create an ecosystem of people with the knowledge of how to build greener applications. 

For the longest time, the feedback we've received is that people need actionable advice they can apply immediately to their software products. 

However, the correct choices can change dramatically from one technology to another. For example, a good pattern for an AI product might be a wrong pattern for a web application. 

The information is out there but hard to find. We need one place where everyone can go for green software patterns regardless of their role or the technology and trust that if they apply the pattern, it will reduce emissions.

The catalog of green software patterns is an online open-source database of software patterns reviewed and curated by the Green Software Foundation across a wide range of categories. Any software practitioner can find the patterns related to their field, technology, or domain. Anyone can submit a pattern that triggers a detailed review process by the Foundation. You can be confident that applying any patterns that have completed that process will reduce your software emissions.

"Patterns are how we apply the principles of green software. Now anyone can find actionable advice they can apply to their software products and be confident that emissions will reduce as a result" - Asim Hussain, Chair Green Software Foundation.

To use the patterns, head to [https://patterns.greensoftware.foundation](https://patterns.greensoftware.foundation) and search for your field or technology. Each pattern is atomic and applicable to real-world situations and applications.

"It's challenging to find advice regarding building green software. It's hidden away in thousands of articles, papers, and videos. Now we can point our software teams to one place for this information and be confident they are getting advice we can trust." - Mr. CTO, ACME Corp.

To learn more, go to [https://patterns.greensoftware.foundation](https://patterns.greensoftware.foundation). 




## FAQ

### What are the components of a green software pattern?
* Title: Title of the pattern
* Intent: Subtitle
* Tags: List of tags (from a suggested list) which might be applied to the pattern, e.g. cloud, web, simple.
* Problem: What is the problem this pattern is solving.
* Solution: How will the pattern solve this problem?
* SCI Impact: How might this pattern affect an SCI score of an application and why.
* Assumptions: What are the assumptions being made?
* Pros & Cons: Discussion of the pros and cons.

Example Green Software Pattern: [Rightsizing Oversized VMs](https://github.com/Green-Software-Foundation/green-software-principles/pull/24/files#diff-43483146b156070a56a5ca760b4dae0c56bcc86a9b2c1104aaa345e58d94368f).

### Where will the Green Software Patterns live?
The develop)ment process will be via GitHub in the green-software-patterns repository.

The published catalog will be available via the subdomain [https://patterns.greensoftware.foundation](https://patterns.greensoftware.foundation)

### What are the stages of a green software pattern?

#### Discussion
Anyone (member or non-members) can discuss patterns via the GitHub Issues tab of the repository. There will be an issue template to suggest new patterns or suggest changes to existing patterns. Once they are ready then can go ahead and create a PR to add a pattern to the database.

#### Draft
Anyone (member or non-members) can create a PR matching the template for Green Software Patterns to be merged into the dev branch. This starts an internal process of review.

#### Initial Review
An initial review by one member of the principles and patterns project. The goal of this stage is just to make sure the pattern meets core requirements for what a pattern should contain, is it the right format, syntax etc…? 

The initial reviewer will also decide what subject matter experts are required to review this pattern.

This needs an explicit approval from the initial reviewer before the pattern can move to the next stage.

#### SME Review
One or more subject matter experts in the GSF are asked to review the pattern and give their feedback. E.g. If the pattern is in the machine-learning catalog we ask a machine learning expert to review.

This needs an explicit approval from the initial reviewer before the pattern can move to the next stage.


#### Team Consensus
Once the pattern has been approved by the SME it starts the team review phase. The principles and patterns team has 2 weeks to comment/object to the pattern. It needs consensus before the PR can be approved and merged into dev.

The pattern is merged into dev but is not published on our website.


#### Consistency Review
Every quarter the dev branch is merged to the main branch and this triggers a consistency review where anyone in the Foundation has 2 weeks to comment or object. We need GSF wide consensus for the patterns to be published.

This is done in batches every quarter to reduce the noise to the rest of the Foundation.

### What about patterns related to a specific product or service?

The intention is that patterns are vendor agnostic, for instance there should not be Azure, AWS and GCP patterns. There should be generic cloud patterns which could be applied to specific vendors, but the patterns themselves are vendor agnostic.

Specific platforms/vendors can opt to create vendor specific versions of our patterns for their specific products on their platforms, we encourage that approach.



### What are some suggestions for tags?

* Technology: E.g. Machine Learning, Cloud, Kubernetes etc…
* Role: Web Developer, Data Scientist etc…
* Complexity: Small, Medium, Large.



