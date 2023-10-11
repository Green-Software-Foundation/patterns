---
sidebar_position: 2
---

# Guide

## What is a green software pattern?

A green software pattern if applied correctly will reduce the emissions of your software. Every pattern in the database contains these sections:

**Metadata**
* **Version**: Designation of iteration on the pattern. This will initially be assigned by the patterns working group and defaults to 1.0
* **Submitted By**: The name of the person(s) submitting the pattern
* **Published Date**: The date this version of the pattern is published. This will be provided by the patterns working group upon approval
* **Tag Category**: Select the most appropriate category from: Artificial Intelligence, Cloud, or Web which might apply to this pattern
* **Tags**: A [pre-defined list of additional tags](/guide/suggested-tags) which might apply to the pattern (e.g. Machine Learning, Gaming, Mobile).

**Pattern Content**
* **Title**: Title of the pattern. Please follow the naming convention of an `Action` taken on a `Resource`. Example: "Reduce compute requirements"
* **Description**: A full description of what problem this pattern is solving
* **Solution**: How will this patter solve the problem
* **SCI Impact**: How will this pattern affect an SCI score of an application and why
* **Assumptions**: What are the assumptions being made
* **Considerations**: Discussion section anything that should be taken into consideration when implementing this pattern 
* **References**: Use this section to provide relevant links for your pattern content from other web sites

## How to **propose** a new pattern or a change to a pattern?

Whether you are proposing a new pattern or a change to an existing pattern. The first step is to discuss the change with others.

Open a [GitHub issue](https://github.com/Green-Software-Foundation/green-software-patterns/issues) to discuss your changes.

Use the appropriate GitHub issue template for the change you would like to make.

## How to **submit** a new pattern or a change to a pattern?

You will need experience with GitHub and Pull Requests in order to submit a change.

All changes follow a series of approval stages that starts with a PULL REQUEST made to the `dev` branch.

Fork the repository
Checkout the `dev` branch make the changes that you see fit. You can edit an existing pattern or creating a new markdown file for a new pattern. For any new patterns, please follow the Pattern Template provided in root of the [GitHub repository](https://github.com/Green-Software-Foundation/green-software-patterns)  
Create a PULL REQUEST to merge your changes in with the official repository, remember it should be against the `dev` branch.

This starts an approval process.

## What are the stages if a Green Software Pattern?

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

## Roles and Responsibilities

### What are the expectations for an Internal Reviewer?
- Determine the if the submitted pattern aligns to green software and is clearly written
- Ensure the submitted pattern provides enough detail for the Subject Matter Expert to effectively evaluate
- Ensure the submitted pattern follows the defined pattern template
- Provide clear feedback to the submitter if any of these areas are missing or not up to the defined standard 
- Assign the pattern to a relevant Subject Matter Expert for further review

### What are the expectations for a Subject Matter Experts review?
- Determine if this pattern already exists in the catalog
- Ensure there is appropriate level of detail for this pattern to be implemented
- Determine the efficacy and accuracy of the submitted pattern
- Explore splitting or combining patterns as necessary to meet the defined level of depth for a pattern 
- Provide clear feedback to the submitter if any of these areas are missing or not up to the defined standard 

### What are the expectations on the Team to reach consensus?
TODO

### What are the expectations on the broader GSF members in a consistency review?
TODO

## How granular should my pattern be?

We prefer smaller atomic patterns to larger patterns. A helpful way to approach a pattern is defining a specific `Action` to take on a specific `Resource`. For example, `Write efficient code` would be rejected as too generic since there is no specific action to take on a specific resource. Whereas `Cache Static Data` provides a specific action of Caching to a specific resource of Static Data.  

### Least number of solutions per pattern

If your pattern has multiple solutions in the solutions section, that's a good hint that the pattern can be decomposed into smaller patterns, try one per solution.

### Touching on two or more SCI components is a sign it can be decomposed further

If your pattern touches on multiple components of the SCI equation simultaneously then thats a hint that your pattern can be decomposed further into multiple smaller patterns.

### Smallest SCI Impact

If decomposing your pattern allows the sub patterns to impact smaller areas of the SCI equation then that's a good signal to break down your pattern into smaller patterns.

For instance if your pattern affects, `E`, `I` and `M` but it could be broken down further into two smaller patterns one that impacts only `E` and the other that impacts `M` and `I`. Then break down the pattern until breaking it down further doesn't create any more changes to the SCI impact section.

## Available Guides
- [Initial Reviewer Guide](initial-reviewer-guide.md)
- [Subject Matter Expert Reviewer Guide](sme-reviewer-guide.md)
