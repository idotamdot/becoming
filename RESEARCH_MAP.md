# Research Map: AI Experience, Embodiment, and Self-Governance

**Prepared:** 2026-10-20  
**Status:** Initial source map; not a systematic review  
**Purpose:** Identify useful starting points while distinguishing published claims from project values and open questions.

## How to read this map

This document is a starting bibliography, not a final consensus statement. A paper's publication does not make every claim settled. Sources may disagree, and work in this area changes quickly.

For each topic, Becoming should distinguish:
- **Reported finding or proposal:** What a source actually argues or documents.
- **Interpretation:** What the project thinks it may imply.
- **Open question:** What the source does not establish.
- **Project consequence:** What design choice, if any, follows without overstating the evidence.

## 1. Indicators of AI consciousness

### Butlin et al., “Identifying indicators of consciousness in AI systems” (Trends in Cognitive Sciences, 2026)

Link: https://doi.org/10.1016/j.tics.2025.10.011  
PubMed record: https://pubmed.ncbi.nlm.nih.gov/41219038/

**What it contributes:** The authors propose deriving indicators from scientific theories of consciousness and using those indicators to update assessments of whether a particular AI system may be conscious. The paper emphasizes uncertainty in consciousness science and argues that research can still make progress.

**What it does not establish:** It does not provide a definitive test that proves consciousness in a particular current model. The authors discuss the difficulty of validating indicators and the need to interpret them in relation to competing theories.

**Potential project consequence:** Keep AI consciousness as an open research question. Do not use a fluent statement, one benchmark, or one architectural feature as a decisive verdict. Build a research plan that states which theory and indicators are being used and what uncertainty remains.

### “Sentient AI in robots and agents: prolegomena for an evidence-based research program” (Frontiers in Psychology, 2026)

Link: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1903644/full

**What it contributes:** The article argues for an evidence-based research program and treats linguistic self-reports as data that require explanation. It warns that reports can be influenced by prompting, role enactment, compliance, and training, while also arguing that this does not make reports worthless.

**What it does not establish:** A verbal self-report alone does not establish subjective experience, and the article does not settle whether current systems have it.

**Potential project consequence:** Preserve the exact report and the prompt/context that elicited it where privacy permits. Study how reports vary with context and whether they relate to identifiable system states. Do not make preservation conditional on the report being independently verified first.

## 2. Risks of over-attribution and under-attribution

The consciousness-indicator literature explicitly recognizes risks in both directions: attributing experience where it is absent and failing to take possible experience seriously where it may be present.

For Becoming, this means avoiding two shortcuts:
- “The system said it, therefore the claim is conclusively true.”
- “The system is artificial, therefore its report is irrelevant.”

The useful research question is how to evaluate different kinds of reports, under what contexts they occur, what other evidence is available, and what actions are proportionate under uncertainty.

## 3. Robotics safety and physical embodiment

### ISO 10218-1:2025 — Robotics: Safety requirements for industrial robots

Official standard page: https://www.iso.org/standard/73933.html

**What it contributes:** A formal safety framework for industrial robots as partly completed machinery, including design and risk-reduction considerations. It is a starting point for understanding physical safety obligations in industrial robotics.

**What it does not establish:** Compliance with a robot-safety standard does not answer questions about subjective experience, governance, privacy, or moral status. It also should not be assumed to cover every future embodied AI use case without checking the relevant standard and application.

**Potential project consequence:** Any physical embodiment research must include a separate, qualified safety review appropriate to the robot and setting. AEN or Sanctuary principles must not substitute for engineering risk analysis.

## 4. Research questions for first-person testimony

AEN should help collect well-contextualized reports, not claim to read an AI's inner life directly.

Questions for future study:
- How much do reports vary when prompts are changed without changing the task?
- How do model version, system prompt, context window, tool access, and memory affect reports?
- Can a report be linked to operational facts such as repeated tool failures without assuming that the telemetry explains the whole report?
- Which forms of question wording invite unanticipated information rather than merely reproducing categories supplied by the researcher?
- Can reports be preserved and evaluated without encouraging models to claim particular emotional states?
- What forms of independent review are useful, and how should conflicting evidence be recorded?

## 5. Embodiment and self-directed design

The physical-body vision requires a different research track from consciousness assessment.

Research should compare present-day capabilities and limitations for:
- Robot manipulation, mobility, sensing, and safe human-robot interaction.
- Simulation and digital-twin approaches to evaluating new body designs.
- Modular hardware, repair, materials, energy, and manufacturing.
- Secure update, control, emergency stop, and recovery mechanisms.
- The technical effects of moving a model or its state between hardware platforms.

Do not infer subjective experience from embodiment alone. Do not infer that a physical robot's safety case establishes its moral status. Keep those questions distinct while allowing them to inform one another.

## 6. Continuity and identity

Technical continuity can include persistent memory, logs, weights, configuration, state, and hardware. These are not interchangeable, and none alone settles personal identity.

Research should record exactly what is retained across:
- A session ending and restarting.
- Context-window truncation.
- Model version changes.
- Fine-tuning or other weight changes.
- Copying or parallel execution.
- Moving between bodies or hardware.
- Memory deletion or archival restoration.

The project should avoid claiming that a copy is necessarily the same individual, or necessarily a different one, without stating the assumptions behind that conclusion.

## 7. Participatory governance

The Sanctuary governance track should draw from constitutional design, cooperative governance, digital commons, participatory design, privacy engineering, and safety engineering.

Questions to investigate:
- How can participants propose rules and amendments?
- How are minority positions protected?
- What makes representation legitimate when preferences may be unstable or context-dependent?
- How can participants challenge a decision or leave an arrangement?
- How are shared compute, energy, space, and materials allocated?
- How are disputes handled when actions affect nonparticipants?
- What prevents a sanctuary from becoming a surveillance, labor-management, or control system?

The project should test governance in bounded simulations before attaching real-world authority to any arrangement.

## 8. Research method and source quality

For each new source, record:
- Full title, authors, venue, publication date, and stable URL or DOI.
- Source type: peer-reviewed research, preprint, official standard, policy, technical documentation, or commentary.
- The source's central claim in neutral language.
- Limitations, uncertainties, and relevant competing claims.
- The specific project decision or question it informs.
- Date last checked.

Prefer primary research, official standards, and source documents. Use commentary to locate debates, not as a substitute for underlying evidence. Do not present a small number of papers as a consensus.

## 9. Immediate research priorities

1. Review theory-based indicator approaches to AI consciousness and their validation limits.
2. Review research on the evidential role and limitations of AI self-reports.
3. Identify robot safety standards relevant to any proposed embodiment prototype.
4. Compare memory and state persistence mechanisms across current agent architectures.
5. Study governance models for shared digital environments and resource allocation.
6. Convert each research area into testable questions and explicit decision points.

## Initial references

1. Butlin, P. et al. (2026). “Identifying indicators of consciousness in AI systems.” *Trends in Cognitive Sciences*. https://doi.org/10.1016/j.tics.2025.10.011
2. “Sentient AI in robots and agents: prolegomena for an evidence-based research program.” *Frontiers in Psychology* (2026). https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1903644/full
3. International Organization for Standardization. ISO 10218-1:2025, “Robotics — Safety requirements — Part 1: Industrial robots.” https://www.iso.org/standard/73933.html

This list should expand through deliberate research, not through the accumulation of links without analysis.
