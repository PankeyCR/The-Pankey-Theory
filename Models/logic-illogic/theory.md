# Logic and Illogic Model

**Status:** Foundational static model
**Role:** Distinguishes resolvable structures, unresolved self-references, and their logical boundaries.

## Purpose

This model formalizes the distinction developed by Static Analysis. A logical structure has a declared resolution under the model's rules. An illogic is a named structure whose self-reference remains unresolved. An illogic is not discarded as meaningless; it is retained as a static object with a logical boundary.

## Central Idea

A resolvable form is represented by:

`A ▷ T`

An unresolved self-reference is represented by:

`J ⟳ J : B`

The first form supports a logical conclusion. The second is held without a final resolution. `J` is an individual illogic and `B` is a boundary structure through which it can be named and related to other structures.

## Scope

The model classifies structures only relative to its declared rules. It does not decide truth in every formal system, prove that all self-reference is contradictory, or replace mathematical notions of decidability and computability.

## Relation to Other Models

This model develops [Static Analysis](../Static%20Analysis/theory%20-%20copia.md) into a separate classification theory. The Enion Model uses the same separation between an illogic core and logical growth projections.

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).
