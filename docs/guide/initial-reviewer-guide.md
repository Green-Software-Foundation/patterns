# Initial Review Guide

This is the guide that our Initial Reviewers will follow to determine if a submitted Green Software Pattern meets the requirements to move the Subject Matter Expert review or not. If any issues arise, the reviewer will provide feedback directly in the pull request that the submitter should update before moving forward. Once the pattern passes the initial review guidelines, the reviewer will assign it to an appropriate Subject Matter Expert (SME) for a deeper technical review. This process is expected to take no more than 1 week barring any lengthy feedback cycles. 

## What To Look For In Your Review
Here are the things you should look for in the initial review. If any of these areas are not met, provide feedback and any recommended changes in the pull request and assign back to the submitter. If all of these areas are met, you may assign the pattern to an appropriate Subject Matter Expert (SME) for the next phase of review.

### Alignment to Green Software Foundation
Does this pattern align to the mission of the Green Software Foundation of reducing emissions that software is responsible for? Is the content clearly written and able to be understood by a subject matter expert? You don't need to evaluate jargon or acronyms from a specific domain, focus more on the content and how it relates to emission reduction and the SCI. 

### Alignment to Green Software Pattern Template
Does this pattern align to the [Pattern Template](https://github.com/Green-Software-Foundation/green-software-patterns/blob/dev/TEMPLATE.md) for Green Software Patterns? This includes all sections being present, tags supported on our [Tags list](https://patterns.greensoftware.foundation/tags/), valid author and github alias, clearly defined assumptions and considerations, relevance to SCI has been called out. The Pattern Title should follow the form of a specific `Action` on a specific `Resource`. For example, "Write efficient code" is not a good title since there is no specific action to take on a specific resource. A title of "Cache Static Data"  provides a specific action of Caching to a specific resource of Static Data.

### Proper Green Software Pattern Formatting
Our documentation system uses "front matter" which requires a specific format for metadata and this section should be included at the top of each submitted pattern. The front matter content and structure can be seen on the [Pattern Template](https://github.com/Green-Software-Foundation/green-software-patterns/blob/dev/TEMPLATE.md) and should include all fields listed there.

Additionally, we look for patterns to align to the following formatting rules:
- Titles should be in sentence casing. Ex: `Title of a pattern` and not `Title Of A Pattern`

### Pull Request Set To Merge In Dev Branch
We require that all new patterns are submitted against the `dev` branch in the repository. If the pull request is set to merge to any other branch of the repository, the submitter should update it to merge to `dev`.

### Content Validation
Is there enough information and detail provided in the pattern for a subject matter expert to reasonably evaluate it? You may or may not have specific knowledge for the submitted pattern so this is a cursory check to make sure there is enough information present for the subject matter expert and does not need to be perfect.

### Provide Clear Feedback
If any of these areas are missing or incomplete, you must provide clear and constructive feedback and guidance as comments in the pull request so that the submitter can make the necessary changes to move to the next phase. Initial Reviewers are one of the first interactions many people will have with Green Software leaders so we want to ensure we are creating an open and inclusive environment by being constructive and clear with the feedback.  


## Assigning to SME for Further Review
If all of these conditions have been met and the pattern is ready for a subject matter expert, you should remove the `Initial Review` label and add the `SME Review` label on the pull request. You also should assign the pull request to an appropriate SME Reviewer based on the tags and content of the pattern. A list of available SMEs is available on each [Tag Page](https://patterns.greensoftware.foundation/tags/). Where possible, spread the SME reviews out across the available experts on a tag so that we do not overload one single person with reviews. 

