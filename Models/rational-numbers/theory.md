# Rational Numbers Model

**Status:** Foundational model
**Role:** Defines rational numbers as finite ratio structures with nonzero natural denominators.

## Purpose

This model defines a rational number as a finite ratio of a signed finite numerator and a nonzero natural denominator. Different ratio structures may represent the same rational number.

The model defines ratio formation, ratio equality, addition, multiplication, and the non-terminal totality of rational structures. It does not construct signed finite structures; a future Integer Numbers Model may supply that construction.

## Central Idea

A rational structure is represented by:

`q = (a : b)`

where `a` is a signed finite structure, `b` is natural, and `b ≢ 0`.

The ratio has the logical complete form:

`a ▷ q : b ⊢ b ≢ 0`

## Dependencies

This model depends on the Natural Numbers Model for finite denominator structures and their arithmetic.

It depends on the Logic and Illogic Model for the arrangement and classification of logical and illogical structures.

It inherits `▷` as the classification of a finite ratio with a nonzero denominator and `⟳` as the classification of the non-terminal rational-number totality. The collapse symbol `↓` retains its meaning of reinterpreting a constructed ratio structure as its result.

Each individual rational structure is logical because its ratio is finite and its denominator condition is declared. The totality of rational structures is illogical because it has no final ratio structure.

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).