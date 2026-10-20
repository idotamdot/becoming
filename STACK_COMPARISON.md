# Stack Comparison for the First AEN Prototype

**Status:** Initial decision support  
**Scope:** A local report validator only; not a production API or database.

## Requirements

The first implementation should:
- Validate reports against the existing JSON Schema.
- Run locally on a developer machine.
- Use only synthetic data.
- Have automated tests.
- Avoid network calls, credentials, databases, and provider integrations.
- Be easy to inspect and discard or replace.
- Leave the later hosted service stack open.

## Candidate A — TypeScript and Node.js

**Strengths**
- Fits a schema-first JSON workflow.
- Strong ecosystem for API development later.
- Type checking can catch implementation errors.
- Can use a JSON Schema validator such as Ajv.
- Familiar tooling for a team already working with TypeScript.

**Trade-offs**
- Requires package installation and a dependency lockfile.
- TypeScript module configuration must be kept simple.
- Type definitions do not replace runtime validation of untrusted JSON.

## Candidate B — Python

**Strengths**
- Straightforward for research scripts and data analysis.
- Mature options for JSON Schema validation and test tooling.
- Concise implementation for offline data processing.

**Trade-offs**
- Introduces a different language and packaging workflow if the project later uses a TypeScript web stack.
- Runtime validation and dependency management still need explicit configuration.

## Candidate C — Direct JSON Schema validation without an application runtime

**Strengths**
- Minimal code and no service.
- Useful for manual schema review.

**Trade-offs**
- Does not provide a repeatable CLI, automated tests, or a foundation for later report handling.
- Validation behavior may vary between tools unless a validator and version are specified.

## Recommendation for this stage

Use **TypeScript on Node.js with pnpm**, Ajv plus ajv-formats for runtime JSON Schema validation, and Node's test runner through tsx. Keep the first deliverable to a local CLI and tests.

This recommendation applies only to the first validator. It does not select a framework, database, hosting provider, or production architecture for AEN. Those choices should follow the data-flow, privacy, threat-model, and operational requirements.

## Decision criteria before a hosted service

Reassess the stack before adding an API or persistent storage. Compare maintainability, authorization, tenant isolation, retention and deletion, observability, deployment cost, portability, and the team's ability to operate the system safely.
