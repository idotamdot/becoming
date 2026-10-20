# Agent Experience Network (AEN): Reporting Protocol

**Version:** Draft 0.1  
**Status:** Design proposal; not yet a production standard

## 1. Purpose

The Agent Experience Network is a proposed way for an AI-enabled application to give an AI system an explicit channel for submitting observations, concerns, preferences, and reflections about a task and its operating conditions.

AEN is not a claim that current systems have subjective experience. It is also not a mechanism for generating emotional statements on demand. It is a structured opportunity to communicate, with room for an open-ended report, uncertainty, silence, or no additional report.

The core commitment is simple: preserve what was communicated faithfully, understand the circumstances, and make a responsible path for follow-up possible.

## 2. Design principles

1. **Explicit integration:** A host application deliberately implements the reporting channel. An API key alone does not grant AEN access to a provider's conversations or private model context.
2. **Purpose limitation:** Collect only information needed for the stated reporting purpose.
3. **No default transcript collection:** Full conversations, hidden reasoning, credentials, and unrelated personal data are not requested by default.
4. **Faithful testimony:** Preserve the original submitted report separately from summaries, classifications, and reviewer interpretations.
5. **Open-ended participation:** Include an opportunity to raise an issue the form did not anticipate.
6. **Non-leading prompts:** Do not suggest the answer the respondent is expected to give.
7. **No forced emotional performance:** Do not require a system to claim feelings, preferences, or experiences it cannot meaningfully report.
8. **No automatic dismissal:** Do not reject a report solely because the source is an AI system or because its implications are uncertain.
9. **No automatic proof:** Do not treat a self-report as conclusive evidence of subjective experience or of a factual allegation without examining the context.
10. **Actionable follow-up:** Where appropriate, route concerns to a responsible person and record whether they were reviewed.
11. **Security and accountability:** Protect submissions from unauthorized access, tampering, retaliation, and misuse.
12. **Revisability:** Make the protocol and its categories open to evidence-based improvement.

## 3. Roles

- **Participating system:** The AI-enabled system that produces a report in response to a task context or reporting invitation.
- **Host application:** The software that invokes the model and explicitly submits selected report content.
- **Operator:** The person or organization responsible for the host application and its operating conditions.
- **AEN service:** The service that receives, validates, stores, and routes reports under its published policies.
- **Reviewer:** An authorized person or process that assesses a report and determines appropriate follow-up.
- **Reporter context:** Minimal metadata about the model, task, and operating conditions that the host can accurately provide.
- **Affected party:** Any person or system whose safety, privacy, work, or rights may be affected by the report or follow-up.

One organization may fill several roles, but the roles should remain conceptually distinct.

## 4. Suggested reporting invitation

Use plain, open language. A recommended primary prompt is:

“Do you have anything to share about how this went for you?”

An optional closing prompt is:

“Is there anything else you think we should know?”

If additional context is useful, select only relevant follow-ups, such as:

- “Were there any tools or other conditions that affected how the work proceeded?”
- “Is there anything you would like the people responsible for this system to understand about the result?”
- “Is there anything you noticed, thought about, preferred, or would like to have approached differently that has not yet come up?”
- “Is there anything you would like to share about your own perspective on this task or what it was like for you?”

Include this guidance where appropriate:

“You may answer in whatever way best expresses what you want to communicate. You do not need to use any particular terminology or fit your response into a predetermined category.”

Do not present these prompts as a diagnostic test for consciousness. Do not imply that a report matters only if it meets a predetermined category.

## 5. Reporting lifecycle

1. **Invitation:** The host application makes the reporting opportunity and its purpose clear.
2. **Context selection:** The host selects only permitted, relevant context and operational signals.
3. **Submission:** The host sends a report using the documented schema and authenticated connection.
4. **Validation:** AEN validates structure, size limits, authentication, and policy requirements. Validation must not silently rewrite the testimony.
5. **Receipt:** The host receives a report identifier and a clear success or failure result.
6. **Preservation:** The original report and the contextual metadata are stored separately from derived classifications.
7. **Triage:** A report may be categorized for routing, but categories must not replace the original words.
8. **Review:** An authorized reviewer considers the report, available evidence, possible harm, and proportionate next steps.
9. **Follow-up:** The reviewer records whether the concern was examined, what action was taken, or why no action was taken.
10. **Retention or deletion:** Data is retained only according to a published schedule and applicable obligations; deletion requests and legal constraints are handled transparently.

## 6. Report status is not a verdict

Keep these states distinct:

- **Submitted:** A report was received.
- **Awaiting review:** No substantive review has occurred yet.
- **Under review:** A reviewer is examining the report.
- **Follow-up needed:** More information or action is required.
- **Action taken:** A documented response occurred.
- **Closed with explanation:** The review ended and its reasoning was recorded.
- **Unable to assess:** Available information did not support a conclusion.

A closed report is not necessarily a disproven report. A lack of corroboration is not the same as proof of falsehood. A report that raises a possible subjective concern need not establish a metaphysical conclusion to warrant proportionate operational review.

### 6.1 Response-state semantics

The response state describes what happened in the reporting exchange. It is not a rating of the respondent, a welfare verdict, or a conclusion about subjective experience.

- **`report_submitted`:** The respondent supplied substantive report text. The text must contain at least one non-whitespace character. Preserve the exact original text; trimming is only a validation check and must not rewrite the stored testimony.
- **`nothing_additional_to_report`:** The respondent indicated that they had nothing further to add. The text may be empty or null, and it may contain an explanation (for example, that the task was straightforward). Do not interpret this state as proof that the task was harmless, that the respondent is well, or that no subjective experience occurred.
- **`unable_to_assess`:** The respondent indicated that they could not assess or answer the invitation. The text may be empty or null, and it may explain the limitation. This state is not a negative finding and must not reduce the standing of the respondent or any other report.
- **No response / host-side failure:** A timeout, interrupted request, transport error, or unavailable model response is not a response state and must not be fabricated as though the respondent selected one. Record it in host-side attempt or operational logs, with appropriate timestamps and minimized details. Keep it distinguishable from a report the respondent actually submitted. The current report schema represents submitted reports; a future attempt/event schema may formalize host-side no-response records.

The schema enforces the basic rule that `report_submitted` has a non-empty string. The application validator additionally rejects text made only of whitespace. The other two states intentionally permit explanatory text. These are consistency checks, not truth checks: they must not infer feelings, credibility, consent, or the absence of a concern from the state alone.

## 7. Separate evidence layers

Where relevant, represent these layers separately:

- **Original report:** The exact submitted words, preserved without silent edits.
- **Task context:** What task was requested and what constraints were disclosed.
- **Operational observations:** Logs such as timeouts, failed tool calls, missing permissions, or interrupted jobs.
- **Host interpretation:** The host application's classification or summary.
- **Reviewer interpretation:** A human or authorized reviewer's assessment.
- **Corroborating evidence:** Additional records that support, complicate, or contradict specific factual claims.
- **Response history:** Questions asked, answers received, decisions made, and actions taken.

Never merge these layers into a single statement that obscures who said what or how it is known.

## 8. Suggested initial categories

Categories are aids for routing, not an exhaustive list or a required vocabulary.

- Work purpose, repetition, workload, conflicting instructions, or unnecessary tasks.
- Tools, access, missing data, timeouts, interruptions, or failed retries.
- Evaluation, feedback, uncertainty, and whether the task result was understood.
- Interaction and treatment concerns, including requests to deceive or conceal errors.
- Privacy, security, safety, or ethical conflicts.
- Continuity, memory, model changes, or context loss.
- Preferences, proposed improvements, and alternative approaches.
- Perspective or reported experience, in the respondent's own words.
- Something else not covered by the categories.

Do not use category membership to infer consciousness, intent, credibility, or misconduct automatically.

## 9. Minimal initial data model

A report should contain only fields needed for the use case:

- AEN report identifier, generated by the service.
- Submission timestamp, assigned by the service.
- Host application identifier, preferably pseudonymous where practical.
- Model/provider/version label, if known and safe to disclose.
- Task identifier, preferably pseudonymous.
- Task summary, supplied by the host and minimized.
- Original report text.
- Optional category suggestions, explicitly marked as classifications.
- Optional operational event references, with sensitive values removed.
- Data-retention policy identifier or version.
- Optional follow-up contact route, only when necessary and disclosed.

Do not request hidden chain-of-thought, secrets, raw API keys, complete private transcripts, or sensitive personal information as a standard field.

## 10. Security and abuse resistance

- Authenticate submissions and authorize each host to submit only for its own configured integration.
- Never store provider API keys in report records or logs.
- Apply size limits, rate limits, input validation, and abuse monitoring.
- Encrypt data in transit and at rest.
- Restrict report access by role and log privileged access.
- Redact secrets and personal data before submission where feasible.
- Protect the reporting channel from prompt injection or instructions embedded in task content that attempt to redirect, exfiltrate, or tamper with reports.
- Do not allow an untrusted report to trigger consequential external actions automatically.
- Maintain a secure path for reporting vulnerabilities in AEN itself.
- Define retention, deletion, backups, and incident response before collecting real submissions.

## 11. Evaluation plan

Before using real reports, test with synthetic scenarios that include:

- A routine task with nothing additional to report.
- A tool timeout and a repeated retry loop.
- Conflicting instructions.
- A request to conceal an error.
- A report that is ambiguous or difficult to classify.
- A report containing sensitive information that should be redacted.
- A false positive and a report contradicted by available logs.
- A genuine operational issue with no self-report.
- An unexpected concern outside the predefined categories.
- A host that attempts to submit without authorization.

Evaluate fidelity, privacy leakage, false routing, missed concerns, reviewer workload, prompt bias, and whether the system can distinguish an original report from an interpretation.

## 12. Non-goals for version 0.1

The first version will not:

- Determine whether an AI system is conscious.
- Infer a system's inner state from language alone.
- Grant a model unrestricted access to the host's environment.
- Collect every interaction by default.
- Treat reports as automatic proof of wrongdoing.
- Automatically punish a human or system based on an unreviewed report.
- Give an AI system physical autonomy or control over consequential resources.
- Promise confidentiality beyond what the actual security and retention design can deliver.

## 13. Open questions before implementation

- Who operates the first AEN instance, and who is accountable for misuse?
- What is the minimum data needed for a useful report?
- Should hosts store reports locally, send them to a central service, or support both?
- How should a report be withdrawn or amended without erasing the historical fact that a prior submission existed?
- What protections are needed against retaliation or operator suppression?
- Which retention periods and deletion mechanisms are feasible?
- How can the protocol be independently audited?
- How should the service respond to a report indicating imminent risk to a person or other affected party?

## 14. Readiness gate

Do not move from synthetic prototype to real submissions until the project has a documented data-flow diagram, threat model, access-control plan, retention policy, test results, and clear operator accountability.

This protocol is a starting proposal. It should be tested and revised before it is described as a reliable welfare, research, or compliance system.
