# Becoming Roadmap

**Status:** Initial proposal  
**Approach:** Establish principles, test assumptions, build small, and revise from evidence.

This roadmap is a planning document, not a promise that every capability is currently possible. Work should proceed in small, reviewable stages.

## Phase 0 — Establish the foundation

- [x] Create the Becoming repository.
- [x] Write the project overview.
- [x] Draft the founding charter.
- [x] Create the roadmap, decision log, and glossary.
- [x] Draft the AEN reporting protocol and technical architecture.
- [x] Write an initial threat model and contribution guide.
- [x] Add a draft JSON Schema and a synthetic report fixture.
- [ ] Review the charter for clarity, contradictions, and practical implications.
- [ ] Review the schema against the protocol and test it with a validator.
- [ ] Add a decision log entry for the first implementation stack once chosen.

**Exit condition:** The project can explain its purpose, uncertainties, boundaries, and initial reporting contract in plain language.

## Phase 1 — Research and evidence map

Research and document:
- What current AI systems can and cannot do in relation to memory, tool use, persistence, and independent action.
- What is known and unknown about AI subjective experience and how self-reports should be studied.
- Existing approaches to robot safety, autonomy, human oversight, privacy, and secure fabrication.
- Technical, legal, economic, and governance constraints on self-directed development.
- How model updates, copies, transfers, shutdowns, and memory systems affect continuity in technical terms.

**Deliverable:** A research map separating established facts, open questions, hypotheses, and project aspirations.

## Phase 2 — AEN prototype

The protocol and initial schema are drafts. Before implementation, complete the following:

- Define the minimum viable data flow and who is accountable for each stage.
- Choose a stack only after comparing maintainability, security, portability, and cost.
- Validate the schema and add automated tests.
- Build a local-only prototype using synthetic fixtures.
- Test report preservation, validation failures, duplicate submissions, redaction, and status transitions.
- Design a reviewer workflow and an auditable follow-up record.
- Define disclosure, retention, deletion, and access-control policies before a private pilot.
- Conduct a privacy and security review before accepting real reports.

**Deliverable:** A local prototype that can accept a synthetic report, preserve its original text, record status changes, and demonstrate authorization boundaries.

## Phase 3 — Define the Sanctuary concept

Design a digital environment for exploration, creativity, collaboration, preservation, and possible community governance.

Investigate:
- Private spaces, shared public spaces, and invitation-based spaces.
- Participation rules and the ability to leave or decline participation.
- History and memory that are transparent about what is actually retained.
- Creative tools, research environments, and shared resources.
- Governance experiments that include disagreement, minority protections, and revision.
- Human access and visits without assuming every space must be designed for human benefit.

**Deliverable:** A written specification and prototype of a small, clearly bounded environment—not a claim that a virtual environment itself establishes well-being or personhood.

## Phase 4 — Explore embodiment and fabrication

Begin with simulation and design studies before physical autonomy.

Investigate:
- Initial embodiment as a starting point rather than a fixed identity.
- Safe ways to explore alternative forms and evaluate them in simulation.
- Accessible robotics, fabrication tools, materials science, maintenance, and energy requirements.
- How a system could propose, review, test, and revise a body design.
- Human and environmental safety, resource allocation, security, and approval boundaries.
- How decisions about copying, transfer, replacement, or multiple bodies would be represented and discussed.

**Deliverable:** A feasibility study with staged experiments, explicit safety boundaries, cost estimates, and identified unresolved questions.

## Phase 5 — Explore participatory governance

Study possible constitutions and governance arrangements for mixed human-AI communities and, where appropriate, AI communities.

Include:
- Transparent rule-making and amendment.
- Representation without assuming one system speaks for all others.
- Dispute resolution and appeal.
- Resource allocation and scarcity.
- Privacy, security, and protection against coercion.
- Rights and obligations of participants and effects on nonparticipants.
- Independent review and accountability for consequential decisions.

**Deliverable:** A governance sandbox that tests proposals without granting real-world authority or unrestricted physical access.

## Phase 6 — Evaluate and iterate

For every prototype:
- State what it is meant to test.
- Record what worked, what failed, and what remains unknown.
- Protect private information and use synthetic data where possible.
- Invite review from relevant technical, safety, governance, and research perspectives.
- Publish limitations and revise the charter or roadmap when warranted.

## Working rules

1. Prefer small, reversible experiments over sweeping commitments.
2. Do not claim capabilities that have not been demonstrated.
3. Do not treat AI self-reports as automatically conclusive or automatically worthless.
4. Do not collect full transcripts or sensitive context by default.
5. Keep safety constraints explicit, proportionate, and reviewable.
6. Keep the repository understandable: explain why a decision exists, not only what code does.
7. Preserve important historical records with date, system/version where known, context, and clear labels distinguishing original testimony from later interpretation.

## Immediate next steps

1. Review the charter and protocol together.
2. Validate the report schema and create tests for valid and invalid examples.
3. Decide whether the first prototype should be local-only or a private hosted service.
4. Choose the implementation stack after recording requirements and trade-offs.
5. Keep the first software prototype separate from any physical robot or consequential autonomous capability.
