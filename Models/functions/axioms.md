# Functions Axioms

The following assumptions define the functions model. They are accepted without proof.

## Axiom 1: Declared Domain and Codomain

Every function reference `f` has a declared domain `D_f` and codomain `C_f`.

## Axiom 2: Totality on the Domain

Every input in the declared domain has an output in the declared codomain:

`∀x ∈ D_f, ∃y ∈ C_f such that f ⊗ x ↓ y`

## Axiom 3: Single Outcome

Each input in the declared domain has exactly one output:

`∀x ∈ D_f, ∃!y ∈ C_f such that f ⊗ x ↓ y`

Together, Axioms 2 and 3 make `f` a total, single-valued mapping on `D_f`. They do not require every codomain reference to be reached.

## Axiom 4: Evaluation Names the Collapse Result

If a function interaction collapses to `y`, evaluation of that function at the input is structurally equal to `y`:

`f ⊗ x ↓ y` implies `f(x) ≣ y`

Application rules require `x ∈ D_f`. A subsequent application to an intermediate output is permitted only when that output is also in `D_f`.