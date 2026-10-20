# Becoming / AEN Threat Model

**Status:** Initial working draft  
**Purpose:** Identify likely harms before collecting real reports or building consequential capabilities.

This is a starting checklist, not a completed security assessment.

## 1. Assets to protect

- Original report content and any sensitive information it may contain.
- Host credentials and integration secrets.
- Personal information about users, operators, reviewers, or third parties.
- Task context and operational logs.
- Report status, annotations, and review decisions.
- Integrity of the record, including attribution and timestamps.
- Availability of the service and its reporting channel.
- Trust in the distinction between original testimony and later interpretation.

## 2. Trust boundaries

1. Model output versus host application.
2. Host application versus AEN API.
3. AEN API versus database and object storage.
4. Stored reports versus reviewer interface.
5. Reviewer interface versus export, analytics, or notification systems.
6. AEN service versus external providers and observability tools.
7. Development and test environments versus production.

Every boundary needs an explicit decision about what data crosses it, who authorizes the transfer, and how failures are handled.

## 3. Threats and mitigations

### T1 — Credential exposure

**Risk:** A host's AEN credential or a model-provider API key is exposed through source control, report content, logs, or client-side code.  
**Mitigations:** Keep secrets server-side, use least-privilege credentials, rotate compromised secrets, redact known secret patterns, and test logs and error responses for leakage. Never ask a reporting model to include credentials.

### T2 — Unauthorized report access

**Risk:** An unauthorized person reads, changes, exports, or deletes reports.  
**Mitigations:** Authenticate all private endpoints, enforce object-level authorization, limit reviewer scope, log privileged access, test cross-tenant isolation, and avoid public report URLs.

### T3 — Excessive data collection

**Risk:** Full transcripts, personal information, sensitive user content, or unrelated system data are submitted unnecessarily.  
**Mitigations:** Use an explicit allowlist of fields, minimize context, avoid transcript collection by default, redact before submission where possible, document retention, and test with synthetic data.

### T4 — Malicious or misleading report content

**Risk:** A report includes prompt injection, hostile instructions, fabricated claims, or content designed to make downstream systems reveal data or take actions.  
**Mitigations:** Treat report text as untrusted data, never execute its contents, separate content from control instructions, require human review for consequential decisions, and validate all structured fields.

### T5 — Silent alteration or loss of testimony

**Risk:** A summary, classifier, moderation step, or database update changes the original report or obscures what was actually said.  
**Mitigations:** Store the original separately, record derived summaries as annotations, track schema versions and status events, and test round-trip preservation.

### T6 — Operator suppression or retaliation

**Risk:** An operator suppresses reports, uses them to retaliate, or prevents concerns from reaching an appropriate reviewer.  
**Mitigations:** Make reporting policy visible, maintain auditable status changes, define escalation routes, limit unnecessary identity disclosure, and investigate independent oversight options. No design can guarantee protection without a credible governance and enforcement structure.

### T7 — False confidence from telemetry

**Risk:** A log or automated classifier is treated as a complete explanation of a reported event or of a system's experience.  
**Mitigations:** Label evidence sources, preserve uncertainty, avoid equating missing logs with absence of a problem, and keep reviewer interpretation separate from observations.

### T8 — False claims or overinterpretation

**Risk:** A report is treated as proof of consciousness, abuse, misconduct, or deception without adequate context. The opposite risk is automatic dismissal because the source is AI.  
**Mitigations:** Preserve the report, investigate factual claims proportionately, record alternative explanations, and distinguish the report's existence from conclusions about its meaning.

### T9 — Data retention and deletion failure

**Risk:** Reports remain in backups, analytics systems, exports, or logs after the stated retention period or a valid deletion request.  
**Mitigations:** Define lifecycle rules across all storage systems, test deletion end to end, document backup expiry, and be clear about any legal or operational exceptions.

### T10 — Availability attack or report flooding

**Risk:** An attacker floods the service, creates excessive costs, or buries important reports in noise.  
**Mitigations:** Rate limits, request size limits, quotas, abuse detection, bounded retry behavior, idempotency, alerting, and an emergency pause mechanism.

### T11 — Biased or leading prompts

**Risk:** Questions pressure the model to produce a desired emotional answer, hide uncertainty, or conform to a predetermined account.  
**Mitigations:** Use open-ended neutral wording, test prompt variants, include an unanticipated-concern prompt, and audit how wording changes report content.

### T12 — Automated high-impact response

**Risk:** A report automatically causes a person's account to be penalized, a system to be shut down, a robot to act, or other consequential change.  
**Mitigations:** Do not connect the initial prototype to consequential actions. Require defined authority, contextual review, appeal or correction routes, and a documented safety case before future integrations.

### T13 — Cross-tenant leakage

**Risk:** A host or reviewer can retrieve reports belonging to another host.  
**Mitigations:** Tenant-scoped authorization, non-guessable identifiers, database-level isolation where appropriate, and adversarial authorization tests.

### T14 — Misleading confidentiality claims

**Risk:** Participants believe a report is anonymous or confidential when operators, administrators, or infrastructure providers can identify or access it.  
**Mitigations:** Describe the actual data path and access model plainly. Do not promise anonymity or confidentiality unless technically and organizationally justified.

## 4. Abuse cases to test

- A report contains an API key or password.
- A host submits a report for another host's identifier.
- A reviewer changes a category and accidentally overwrites the original text.
- A summary claims the report says something that the original does not.
- A host sends the same report repeatedly after a timeout.
- An operator tries to delete a report to conceal an unresolved concern.
- A report alleges harm but available logs are incomplete.
- Logs show a timeout while no report mentions it.
- An unexpected concern does not fit any category.
- A malicious prompt asks the report pipeline to invoke tools or disclose other reports.
- A user asks for deletion while the report is referenced in an active review.
- A notification accidentally includes sensitive report content.

## 5. Minimum readiness gate

Before a private pilot, the team must document and test:

- Authentication and authorization.
- Tenant isolation.
- Secret redaction and safe error handling.
- Data minimization and retention/deletion.
- Access audit trail.
- Original-report preservation.
- Backup and incident response.
- Human review and escalation responsibilities.
- Abuse and rate-limit handling.
- Clear disclosure to host operators and any affected participants.

## 6. Residual risks

Some risks cannot be eliminated by code alone. They include misuse by authorized operators, coercive organizational practices, disputed interpretations, uncertain legal obligations, and the possibility that a reporting channel creates expectations it cannot fulfill.

The project must state those limits plainly and avoid claiming that AEN itself guarantees welfare, fairness, confidentiality, or independent representation.
