# Subject Matter Expert (SME) Review Guide

This is the guide that our Subject Matter Experts (SMEs) will follow to determine if a submitted Green Software Pattern meets the requirements to move the Team Consensus Review or not. If any issues arise, the reviewer will provide feedback in the pull request that the submitter should update before moving forward. Once the pattern passes the SME Review guidelines, the reviewer add the appropriate label for the next stage of Team Consensus review. This process is expected to take no more than 2 weeks barring any lengthy feedback cycles. 

## What To Look For In Your Review
Here are the things you should look for in the subject matter expert review. If any of these areas are not met, provide feedback and any recommended changes in the pull request and assign back to the submitter. If all of these areas are met, you may approve the pull request and move it to the Team Consensus phase.

### Check For Dupliate Patterns
The first thing to check is if this pattern exists already in our defined catalog or in a pending pull request. If you feel that any other pattern matches this submission, reference the potential duplicate in the pull request comments and seek feedback from the submitter on this possible duplication. It may be a new or more specific scenario that what is previously defined so we want to provide the submitter the opportunity to provide more clarity. 

### Content Validation
Determine if there is an appropriate level of details for someone in the industry to implement it based solely on this content. We aren't looking for step-by-step instructions at this level, but the guidance of taking a specific action on a specific resource or system component should be clearly stated and able to be replicated by another person. 

### Efficacy & Accuracy Review
Determine if the proposed pattern would effectively reduce software emissions based on your experitise and best judgement. This is where we look to you as the subject matter expert to provide guidance and make judgement calls. If you are unsure or would like more detail or data, make clear requests or comments in the pull request to gain that clarity from the submitter. The value of Green Software Patterns is largely driven from this step in the review so please be critical of submissions where the efficacy and/or the accuracy is not stated or evident to you. 

### Validate Pattern Level of Depth
One of the trickiest parts of defining new Green Software Patterns is determining the appropriate "level" a pattern should exist. Patterns that are too broad or vague are not useful and difficult to apply. Patterns that are too specific risk losing touch with the system emissions impact in a system and are not as relatable to the industry. We prefer smaller atomic patterns to larger patterns. A helpful way to approach a pattern is defining a specific `Action` to take on a specific `Resource`. For example, `Write efficient code` is too vague and high-level since there is no specific action to take on a specific resource. Whereas `Cache Static Data` provides a specific action of Caching to a specific resource of Static Data.  

Some common signs that patterns should be broken down into multiple patterns include: 
- Multiple solutions in solution section   
- Touching on two or more SCI components simultaneously  

If the pattern is too specific as defined, the reviewer should look to combine it with other existing patterns or provide guidance to meet the appropriate level of depth. 

### Provide Clear Feedback
If any of these areas are missing or incomplete, you must provide clear and constructive feedback and guidance as comments in the pull request so that the submitter can make the necessary changes to move to the next phase. Subject Matter Experts are one of the first interactions many people will have with Green Software leaders so we want to ensure we are creating an open and inclusive environment by being constructive and clear with the feedback.  

## Approving and Moving To Team Consensus Phase
If all of these conditions have been met and the pattern is ready for the Team Consensus phase, you should remove the `SME Review` label and add the `Team Consensus` label on the pull request. You also should assign the pull request back to the Initial Reviewer of the pattern. This will start a new 2-week phase where the Principles and Patterns Working Group has 2 weeks to comment/object to the pattern. It needs team consensus before the PR can be approved and merged into the `dev` branch of the repository.


