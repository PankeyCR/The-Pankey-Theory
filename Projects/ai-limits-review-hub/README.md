# AI Limits Review Hub

A static GitHub Pages site for reviewing AI answers through the distinctions in [Limits of Computational AI](../../Applications/Limits%20of%20Computational%20AI.md).

**License:** This website source and its operating materials are proprietary. See [LICENSE](LICENSE). The referenced research material has separate terms in [LICENSING.md](../../LICENSING.md). Third-party web assets are identified in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

## Purpose

The site helps a reviewer distinguish:

- a bounded response: an AI returned a finite response;
- a validated resolution: a response includes a stated, independently checkable validation method;
- an unresolved structure: the available conditions do not declare a terminal resolution.

It does not claim that a reviewer, a person, or separate hardware is automatically more truthful or conscious. Any external review must state its method, evidence, assumptions, and limits.

## Pilot Offer

The initial service is a fixed-scope AI answer audit for a single workflow. The pilot includes 20 to 50 AI outputs, a structured finding log, corrected examples, and a before-and-after summary.

Use the site to prepare a local pilot brief. It does not collect or send client information. Before accepting client materials, agree in writing on scope, price, timeline, confidentiality, and data handling. See [PILOT-KIT.md](PILOT-KIT.md) for a starter operating plan.

## GitHub Pages

This project has no build step. To publish it:

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Choose **Deploy from a branch**.
4. Select the branch and `/Projects/ai-limits-review-hub` folder.
5. Save the setting and use the published Pages URL.

## External Review Protocol

The site never sends data automatically. It prepares a JSON request only after the reviewer supplies an endpoint they control. An external service should return:

```json
{
  "review": "analysis or correction",
  "assumptions": ["assumption made"],
  "validationMethod": "how the conclusion can be checked",
  "limits": ["what the review does not establish"]
}
```

Do not connect the site to model training pipelines, unrestricted model controls, or services that claim authority without a verifiable method.
