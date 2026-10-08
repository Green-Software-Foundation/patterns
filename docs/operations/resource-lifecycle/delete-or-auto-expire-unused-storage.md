---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: Operations
description: Storage that is no longer used still occupies hardware and carries embodied carbon. Deleting unused storage, either manually or through automated retention policies, reduces the hardware needed to hold data, provided deletion is controlled so that data still needed is not lost.
tags: 
 - storage
 - data-lifecycle
 - size:small
 - persona:devops-engineer
 - persona:data-engineer
 - persona:software-engineer
personas: DevOps Engineer, Data Engineer, Software Engineer
---

# Delete or auto-expire unused storage

## Description

Storage resources such as volumes, snapshots, backups, logs and datasets accumulate over time and are rarely removed. Once nothing reads them, they deliver no value but still occupy physical storage hardware that must be manufactured, powered and eventually replaced. Keeping everything "in case it is needed" means storing data indefinitely, so storage requirements and the embodied carbon attributed to them grow without limit.

Cleanup is usually left until someone notices the bill, and is often done once rather than as a routine.

## Solution

Remove storage that is no longer used, using one or both of two techniques:

- **Delete unused storage manually.** Periodically identify storage with no recent access or no owning workload, confirm it is not needed, and delete it. This suits one-off resources such as orphaned volumes, old snapshots and abandoned environments.
- **Expire storage automatically with a retention policy.** Define how long each class of data is kept and let the platform delete it when that period ends. This suits data that is produced continuously, such as logs, backups and temporary files, where manual cleanup does not scale.

Whichever is used, protect against deleting data that is still needed:

- Assign an owner and a retention period to each class of storage, based on business and legal needs.
- Put a review or approval step before manual deletion.
- Use a soft-delete or grace period before permanent removal, so mistakes can be reversed.
- Take extra care with automated expiry, since it deletes data silently and at scale. Test a new policy on non-critical data first.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

- `M`: Decreases. Deleting unused storage reduces the number of storage devices needed, so less embodied carbon is attributed to the workload. The effect is greatest in shared infrastructure, where freed capacity avoids new hardware.

Energy (`E`) is also lower in principle, as less data is stored and replicated, but the effect is small compared with the embodied saving.

## Cost Impact

- **Storage costs decrease.** Less stored data means lower charges for capacity, and for the replicas, snapshots and backups that scale with it.
- **Operational effort is reduced by automation.** A retention policy removes the recurring effort of manual cleanup, at the cost of defining and maintaining the policy.
- **Recovery and compliance risk can add cost.** Deleting data that later proves necessary can cost far more to recreate than it saved, and some data is subject to legal retention requirements.
- **Early-deletion fees may apply.** Some storage tiers charge a minimum storage duration, so deleting data soon after it is written may not reduce cost.

## Assumptions

- Unused storage can be identified, for example through access logs, last-modified dates, or the absence of an owning workload.
- Each class of data has an owner who can say how long it must be kept.
- Legal, regulatory and backup requirements for retention are known and documented before any deletion rule is created.
- The storage platform supports deletion rules, versioning or a soft-delete period, if automated expiry is to be used.

## Considerations

- **Deletion can be permanent.** Data deleted in error may be lost for good, and automated policies can delete large volumes before anyone notices. Use grace periods and backups, and start with narrow rules.
- **"Unused" is hard to prove.** Data read rarely, such as audit records or annual reports, can look idle. Check with owners instead of relying on access time alone.
- **Retention periods need maintaining.** A policy set once can go out of date as requirements change, so review policies on a regular schedule.
- **Cold storage may be a better fit.** Where data must be kept but is rarely accessed, moving it to a lower-tier storage class retains it without deleting. This does not reduce the volume stored, so the embodied saving is smaller.
- **Dependencies may not be visible.** Snapshots, images and datasets can be referenced by other systems, so check dependencies before deleting.

## References

- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- Related patterns: [Remove unused assets](/operations/resource-lifecycle/remove-unused-assets), [Optimise storage utilization](/operations/resource-lifecycle/optimise-storage-resource-utilisation)
