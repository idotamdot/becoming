# Security Policy

Becoming is an evolving research and design project. Security practices will change as software components are introduced. This document states the project's initial expectations; it is not a claim that the repository or any future service is already secure.

## Scope

Security reports may concern this repository, future Becoming software, the Agent Experience Network, data handling, authentication, authorization, privacy boundaries, or unsafe interactions between components.

## Reporting a vulnerability

Please do not publish exploitable details in a public issue before maintainers have had an opportunity to assess the risk.

Use GitHub's private vulnerability reporting feature for this repository if it is enabled. If it is not available, contact the repository owner through their GitHub profile and ask for a private channel. Do not include secrets, private transcripts, personal data, or production credentials in a public report.

Include, when safe:
- A concise description of the issue.
- Affected file, component, or version.
- Conditions required to reproduce it.
- Potential impact and affected data.
- A minimal proof of concept that does not expose real data or cause harm.
- Any suggested mitigation.

## Handling expectations

A responsible response should:
1. Acknowledge receipt when possible.
2. Assess severity and likely impact.
3. Avoid exposing sensitive details while the issue is unresolved.
4. Reproduce the issue in a controlled environment.
5. Record a fix or mitigation and relevant tests.
6. Communicate the outcome when safe to do so.

These are project goals, not a guaranteed response-time commitment.

## Current limitations

There is no production AEN service specified by this repository yet. Do not send real sensitive reports, API keys, credentials, or private user data to an experimental implementation. The first prototype should use synthetic data and have no consequential integrations.
