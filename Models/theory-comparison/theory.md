# Theory Comparison Model

**Status:** Foundational meta-model
**Role:** Defines how theories written in The Pankey Language can be structurally compared.

## Purpose

This model treats a theory as a structure with declared references, axioms, conditions, rules, and criteria of validity. Since these components are written in the same language, their forms can be compared directly or through an explicit translation.

The model does not assume that identical symbols have identical meaning across theories. It distinguishes structural resemblance from semantic equivalence, and structural comparison from proof of soundness.

## Central Idea

A theory is represented by:

`T = (V ∧ A ∧ C ∧ R ∧ Q)`

`V` is vocabulary, `A` is axioms, `C` is conditions, `R` is rules, and `Q` is criteria of validity. A comparison examines the relation between these declared components in two theories:

`T ⊗ H ↓ Compare(T, H)`

## Scope

The model defines structural similarity, translation, extension, compatibility, and incompatibility between theories. It does not decide whether a theory is true, consistent, or sound without the proof rules and interpretation required by that theory.

## Relation to Other Models

This model develops the relation-between-models idea in [Theory of Models](../../Foundation/theory-of-models.md). The Natural Numbers Model is its first reference example because its vocabulary, axioms, and recursive rules are explicitly declared.

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).
