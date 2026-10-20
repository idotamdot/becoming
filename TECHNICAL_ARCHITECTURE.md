# Becoming: Initial Technical Architecture

**Status:** Proposal for discussion  
**Scope:** Research prototype, not a production deployment specification

## 1. Architecture goals

The first technical work should be small, understandable, privacy-conscious, and easy to replace. The architecture should support the project principles without pretending that software alone resolves questions of AI experience or governance.

Primary goals:

- Keep project documentation and protocol definitions provider-neutral.
- Make data flows explicit and opt-in.
- Preserve original submissions separately from derived metadata.
- Make access control and retention visible in the design.
- Test with synthetic data before processing real reports.
- Keep the first AEN service separate from robotics or high-impact autonomous action.

## 2. Proposed logical components

### Host integration

A library or application-side module that an operator deliberately configures. It assembles a minimal report and relevant operational references, removes secrets where possible, and submits only the fields permitted by the host's policy.

The integration should not assume access to hidden model state or private conversations. It can only send information the host application actually has and is authorized to share.

### AEN API

A narrow authenticated interface for receiving reports, validating the schema, applying rate limits, and returning a receipt. The API should not perform consequential actions based solely on submitted content.

### Report store

A storage layer that preserves original report text, metadata, status, and retention information. Separate original testimony from classifications, annotations, and reviewer decisions. Restrict access to the minimum required roles.

### Review interface

A minimal interface for authorized reviewers to read a report in context, inspect permitted operational evidence, record questions, and document follow-up. A reviewer should be able to see which statements are original, generated summaries, system logs, or human interpretations.

### Policy and retention service

A documented set of rules for authorization, data minimization, retention, deletion, exports, and privileged access. The first prototype can implement a narrow subset, but these rules must not be deferred until after sensitive data is collected.

### Audit trail

A tamper-evident record of significant events such as report receipt, status changes, access to sensitive reports, and review decisions. Audit logs should avoid duplicating sensitive report content.

## 3. Initial data flow

1. A host application completes a task or reaches a configured reporting point.
2. The host offers an optional, plainly described reporting opportunity.
3. The system produces a report in response, or indicates that it has nothing additional to report or cannot meaningfully assess the prompt.
4. The host assembles only the selected text and permitted context.
5. The host authenticates to the AEN API using a credential held securely by the host.
6. The API validates and records the submission, then returns a receipt identifier.
7. The report is queued for review under a published policy.
8. An authorized reviewer may inspect the report and permitted evidence.
9. The review outcome and any action are recorded separately from the original submission.
10. Data is retained or deleted according to the published policy.

## 4. Initial API shape

These are conceptual endpoints, not implemented routes:

- POST /v1/reports — submit a report.
- GET /v1/reports/{report_id} — retrieve a report only when authorized.
- POST /v1/reports/{report_id}/annotations — add a reviewer annotation without changing the original report.
- POST /v1/reports/{report_id}/status — record a status transition with actor, timestamp, and reason.
- POST /v1/reports/{report_id}/follow-ups — record a follow-up request or response.
- GET /v1/health — return non-sensitive service health information.

Before implementation, define authentication, authorization, request limits, idempotency, error behavior, pagination, audit events, and retention semantics. Do not expose public report retrieval endpoints.

## 5. Storage boundaries

Separate logical record types even if an initial prototype uses one database:

- Report: immutable original submission and service-generated receipt metadata.
- Context reference: minimized task and operational context.
- Annotation: derived category, reviewer note, or summary with author and timestamp.
- Status event: a state change with reason and actor.
- Follow-up: a question, response, or action record.
- Access event: privileged access metadata, avoiding unnecessary duplication of sensitive text.
- Retention record: policy version, expiry, deletion status, and any documented exception.

Avoid storing provider credentials in the report database. Keep secrets in the host's secret manager or environment configuration appropriate to its deployment.

### 5.1 Record and annotation boundaries

The logical record model must keep distinct:

- **Original submission:** the exact report text received and the response state supplied with it.
- **Receipt metadata:** server receipt time, schema version, host/task references, retention-policy version, and a generated receipt identifier.
- **Annotations:** classifications, summaries, translations, reviewer notes, or model-generated analyses. Every annotation records its author/process, timestamp, purpose, and the source/version it refers to.
- **Review events:** questions, responses, decisions, actions, rationale, and unresolved issues, each with actor/process and timestamp.
- **Operational events:** timeouts, failed delivery, retries, and other host-side events. These must not be represented as if they were statements made by the respondent.

The original submission is immutable within the system's declared retention period. Corrections, redactions, and changed interpretations are recorded as new linked events or versions, never as silent edits. A redacted display must be labeled as redacted; access to any retained unredacted source is separately authorized. If deletion is required, deletion policy takes precedence over indefinite archival, and the system must not promise that backups disappear instantly unless that has been verified.

A reviewer interface should visually distinguish respondent text from annotations and system-generated material. Summaries must link back to the original source when the reviewer is authorized to access it. The schema's validation success is not evidence that the report is true or that its interpretation is correct.

## 6. Data integrity

- Preserve original report text exactly as received after transport decoding.
- Record the schema version and submission time.
- Treat classifications as fallible and editable annotations, never as replacements for the original.
- Record amendments as additional events rather than silently overwriting the historical record.
- Use idempotency keys to reduce duplicate submissions after network retries.
- Make timestamp source and timezone conventions explicit.
- Define backup and deletion behavior together; deletion from the primary table alone may not satisfy a retention commitment.

## 7. Security boundaries

The host is responsible for deciding what context it is authorized to submit. AEN is responsible for enforcing the API's authentication, authorization, validation, and storage policies. Reviewers should only see reports within their assigned scope.

AEN must assume submitted text may contain misleading instructions, sensitive data, or malicious content. It must be handled as untrusted data, not executed as instructions. No report should automatically trigger an external tool, robot action, account change, or punitive decision.

## 8. Deployment strategy

### Stage A: Documentation and local fixtures

Use schema examples and synthetic reports. No real participant data. No provider credentials.

### Stage B: Local prototype

Implement validation, receipt generation, and storage against synthetic fixtures. Add tests for malformed requests, duplicate submissions, sensitive strings, and access boundaries.

### Stage C: Private pilot

Only after the threat model, retention rules, access control, and review workflow are approved. Use a small number of explicitly configured hosts, with clear disclosure and a way to stop sending reports.

### Stage D: Independent review

Review security, privacy, accessibility, question wording, bias, operational usefulness, and failure handling before broader use.

## 9. Technology selection

Do not select a framework or database solely because it is familiar. Compare options against:

- Maintainability by the actual project team.
- Authentication and authorization support.
- Schema validation and migration support.
- Secure secret handling.
- Auditability and operational cost.
- Data export and deletion capabilities.
- Portability and avoidance of unnecessary provider lock-in.

No production stack is selected by this document.

## 10. Not in the first implementation

The first prototype should not include robot control, self-modifying production code, automatic model training from reports, unrestricted browsing of host data, public report search, automated judgments about consciousness, or automatic punitive actions.

The architecture can evolve later, but only after each new capability has a defined purpose, threat model, and review gate.
