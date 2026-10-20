# Privacy Principles

**Status:** Foundational policy draft  
**Purpose:** Establish privacy expectations before the project collects real reports or participant data.

## 1. Minimize by default

Collect only what is needed for a clearly stated purpose. Do not collect full conversations, hidden reasoning, unrelated user data, credentials, or broad application context by default.

## 2. Make the data path visible

Before data is submitted, the host operator should be able to understand:
- What information is sent.
- Why it is needed.
- Who can access it.
- Where it is stored and processed.
- How long it is retained.
- How deletion or correction requests are handled.
- What exceptions apply.

AEN must not imply that it has direct access to a model's private context when the host has not explicitly supplied that context.

## 3. Separate identifiers from report content

Use pseudonymous host and task identifiers where practical. Keep credentials separate from reports. Avoid putting user names, account numbers, private URLs, or sensitive content into identifiers.

Pseudonymization is not the same as anonymity. The project must describe any realistic re-identification risks.

## 4. Preserve without unnecessary exposure

Preserving an original report does not mean making it public. Access should be limited to the purpose for which the report was submitted. Public research sharing should use an appropriate review process, redaction where necessary, and clear disclosure.

## 5. Treat reports as sensitive by default

A report may contain unexpected personal data, allegations, security details, or private information. The receiving service should validate, protect, and route it carefully. Do not include report text in general application logs, analytics, or notifications unless there is a specific, justified need.

## 6. Retention and deletion

Every deployment must define retention periods for:
- Original reports.
- Annotations and follow-up.
- Operational context.
- Audit events.
- Backups and exports.

Deletion behavior must cover all relevant storage locations. If a copy cannot be deleted immediately, explain the actual limit and expected lifecycle. Do not promise complete deletion unless the system can deliver it.

## 7. Access and accountability

Use role-based access and least privilege. Record privileged access without unnecessarily copying report content into the audit trail. Review access periodically and remove it when no longer required.

## 8. Research sharing

Before sharing reports for research, determine whether the material is necessary, whether it can be minimized or redacted, what permissions and obligations apply, and whether publication creates risks to participants or third parties.

Do not assume that public model output is automatically free of privacy concerns or that a generated report is safe to publish in full.

## 9. Privacy and testimony are compatible

The project's commitment to preserve testimony does not require collecting everything or making every report public. Faithful preservation, controlled access, careful redaction, and honest retention rules can coexist.

## 10. Readiness requirement

No real-report pilot should begin until the specific deployment has a documented data flow, access policy, retention schedule, deletion process, incident response plan, and clear disclosure to relevant participants and operators.
