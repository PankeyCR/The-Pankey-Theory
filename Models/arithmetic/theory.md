# Arithmetic Model

**Status:** Foundational model
**Role:** Defines finite arithmetic as deterministic transformations of successor structures.

## Scope

This model formalizes arithmetic on natural numbers. It includes zero, successor, addition, multiplication, truncated subtraction, and non-strict order. It does not yet define negative numbers, division, fractions, real numbers, or limits.

## Central Idea

A numeral is a finite successor history from the origin:

`0`, `S(0)`, `S(S(0))`, ...

Every operation is a structural interaction that reduces its recursive argument toward `0`. A calculation therefore has a finite reduction path and one result.

## Model Boundary

The natural-number totality `N` is inherited from [the natural-numbers model](../natural-numbers/theory.md). This model adds arithmetic rules and proves their principal laws. Its symbols and collapse notation follow [The Pankey Language](../../Foundation/language.md).

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).
