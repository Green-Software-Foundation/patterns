---
sidebar_position: 2
displayed_sidebar: tutorialSidebar
---

# Guide

## What is a Green Software Pattern?

Each pattern, applied correctly, reduces your software's emissions. Every pattern in the database contains these sections:

**Metadata**
* **Version**: Designation of iteration on the pattern. This will initially be assigned by the patterns working group and defaults to 1.0
* **Submitted By**: The name of the person(s) submitting the pattern
* **Published Date**: The date this version of the pattern is published. This will be provided by the patterns working group upon approval
* **Tag Category**: Select the most appropriate category from: Artificial Intelligence, Cloud, or Web which might apply to this pattern

**Pattern Content**
* **Title**: Title of the pattern. Please follow the naming convention of an `Action` taken on a `Resource`. Example: "Reduce compute requirements"
* **Description**: A full description of what problem this pattern is solving
* **Solution**: How will this pattern solve the problem
* **SCI Impact**: How will this pattern affect an SCI score of an application and why
* **Assumptions**: What are the assumptions being made
* **Considerations**: Discussion section anything that should be taken into consideration when implementing this pattern 
* **References**: Use this section to provide relevant links for your pattern content from other web sites


## What are the stages of a Pattern?

### Discussion
Anyone (member or non-members) can discuss patterns via the GitHub Issues tab of the repository. There will be an issue template to suggest new patterns or suggest changes to existing patterns. Once they are ready then can go ahead and create a PR to add a pattern to the database.

### Draft
Anyone (member or non-members) can create a PR matching the template for Green Software Patterns to be merged into the dev branch. This starts an internal process of review.

### Initial Review
An initial review by one member of the patterns project. The goal of this stage is just to make sure the pattern meets core requirements for what a pattern should contain, is it the right format, syntax etc…?  

The initial reviewer will also decide what subject matter experts are required to review this pattern.  

This needs an explicit approval from the initial reviewer before the pattern can move to the next stage.  

### SME Review
One or more subject matter experts in the GSF are asked to review the pattern and give their feedback. E.g. If the pattern is in the machine-learning catalog we ask a machine learning expert to review.

This needs an explicit approval from the SME reviewer before the pattern can move to the next stage.

### Team Consensus
Once the pattern has been approved by the SME it starts the team review phase. The principles and patterns team has 2 weeks to comment/object to the pattern. It needs consensus before the PR can be approved and merged into dev.

At the end of this stage the pattern is merged into `dev` but is **not published on our official catalog**.

### Consistency Review
Every quarter the `dev` branch is merged to the `main` branch and this triggers a consistency review where anyone in the Foundation has 2 weeks to comment or object. We need GSF wide consensus for the patterns to be published.

This is done in batches every quarter to reduce the noise to the rest of the Foundation.

## What are the timelines for each stage?

The working group will regularly review submitted patterns along the following timeline:

* Initial Review: 1 week
* SME Review: 2 weeks (plus additional iteration time based on feedback)
* Team Consensus: 2 weeks
