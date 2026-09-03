# Logic and Illogic Model

**Status:** Foundational static model
**Role:** Classifies structures as logical or illogical according to their declared resolution or return.

## Purpose

A logical structure has a declared resolution under the model's rules. An illogical structure has a declared return. Both use the same structural arrangement; their classification differs through the resolution symbol `▷` or the return symbol `⟳`.

## Central Idea

A logical direct form is represented by:

`W ▷ T`

An illogical direct form is represented by:

`A ⟳ A`

Each form may include a via structure and a condition:

`W ▷ T : Q ⊢ R`

`A ⟳ A : B ⊢ C`

The condition is part of the complete classification of either form.

Any position in either form may contain multiple references joined by `∧` or `∨`. This permits multiple origins, outcomes, vias, or conditions without changing the classification operator.

## Scope

The model classifies structures only relative to its declared rules. It does not decide truth in every formal system, prove that all self-reference is contradictory, or replace mathematical notions of decidability and computability.

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).
