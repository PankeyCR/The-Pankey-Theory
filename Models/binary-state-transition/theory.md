# Binary State Transition Model

**Status:** Complete minimal model
**Role:** Demonstrates a finite, deterministic model built on The Pankey Language.

## Purpose

This model describes a system with exactly two states and one reversible transition between them. It is intentionally small. Its purpose is to show how a model can give precise meaning to references, conditions, interaction, and collapse without changing the underlying language.

The model describes state transitions only. It makes no claim about physical systems, consciousness, or computation outside the rules defined here.

## Scope

The model contains:

- two states: `0` and `1`;
- one transition operation: `T`;
- one interaction input: `K`;
- deterministic transition rules;
- finite structural equality.

A complete model is given by the documents in this directory:

- [language.md](language.md) defines the vocabulary;
- [axioms.md](axioms.md) states the assumptions;
- [rules.md](rules.md) defines behavior;
- [examples.md](examples.md) demonstrates derivations;
- [proofs.md](proofs.md) derives results from the axioms and rules.
