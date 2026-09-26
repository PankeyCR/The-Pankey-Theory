# Functions Model

**Status:** Initial structural model
**Role:** Defines functions as deterministic interactions that collapse inputs to outputs.

## Purpose

This model describes how a function associates an input reference with an output reference. It represents application both as an interaction followed by collapse and as a resolution path conditioned by the function. Repeated application forms a path; self-return and two-reference return are special cyclic cases.

The model gives structural rules for function application. It does not define a particular mathematical domain, nor does it claim that functions are injective, surjective, invertible, or computable. Each function is total on its declared domain; repeated application is valid only when each intermediate output belongs to that domain.

## Scope

The model contains:

- function references with declared domains and codomains;
- deterministic application to each input in a function's domain;
- translation between interaction-collapse and resolution-path representations;
- fixed points and two-cycles as special cases of repeated application.

The complete model is given by:

- [language.md](language.md), which defines the model vocabulary;
- [axioms.md](axioms.md), which states the assumptions;
- [rules.md](rules.md), which formalizes the four function forms;
- [examples.md](examples.md), which demonstrates applications;
- [proofs.md](proofs.md), which derives consequences of the rules.