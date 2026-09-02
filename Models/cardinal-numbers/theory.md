# Structural Cardinal Numbers Model

**Status:** Exploratory static model
**Role:** Classifies the size and growth form of structures by static recognition.

## Purpose

This model defines structural cardinal numbers: references that classify a structure by its recognized form, including finite components, loops, and branching. It follows Static Analysis by treating form as primary and does not require a bijection or an imagined completed enumeration.

A structural cardinal is not automatically a classical Cantorian cardinal. It records information that classical cardinality intentionally discards, such as the number of generators, the route through a loop, and the branching form.

## Central Idea

A structure has a cardinal profile:

`Card(A) = K(A)`

`K(A)` records the structure recognized in `A`. A finite resolved structure, a single recurrent loop, a loop with parallel components, and a loop with alternative branches can therefore receive distinct cardinal profiles.

## Scope

The model classifies finite, recurrent, parallel, and branching structures. It does not prove classical countability, uncountability, arithmetic laws for infinite cardinals, or comparisons with all set-theoretic cardinal numbers.

## Relation to Other Models

The model develops the cardinality discussion in [Static Analysis](../Static%20Analysis/theory%20-%20copia.md). It is compatible with the Natural Numbers Model for finite counts but has no dependence on a completed infinite enumeration.

The complete model consists of [language.md](language.md), [axioms.md](axioms.md), [rules.md](rules.md), [examples.md](examples.md), and [proofs.md](proofs.md).
