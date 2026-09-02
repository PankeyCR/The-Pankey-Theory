# Natural Numbers Model

**Status:** Foundational model
**Role:** Defines natural numbers as finite structural histories generated from one origin.

## Purpose

This model gives a structural account of the natural numbers using The Pankey Language. A number is not taken as a primitive collection label. It is a finite history produced from the origin `0` by the successor interaction `I`.

The model defines zero, successor, addition, multiplication, and structural induction. It does not define negative numbers, fractions, limits, or infinite numbers.

## Central Idea

`0` is the unique origin. Each successor is a new structure formed by one interaction with `I`:

`S(x) = (x ⊗ I)`

Thus the first natural structures are:

`0`

`S(0)`

`S(S(0))`

A natural number is therefore a finite, ordered construction rather than an unstructured mark.

## Relation to Other Models

The Binary State Transition Model shows deterministic collapse between two fixed states. This model instead has one origin and an unbounded family of finite successor structures. Both models use interaction and collapse, but this model interprets repeated interaction as constructive growth.

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).
