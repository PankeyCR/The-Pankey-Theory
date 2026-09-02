# Binary State Transition Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Finite Totality

The model has exactly two states:

`S = {0, 1}`

Every state of the model is either `0` or `1`.

## Axiom 2: State Distinction

The two states are structurally distinct:

`0 ≢ 1`

## Axiom 3: Transition Interaction

The interaction `K` acts on every state in `S`:

`∀x ∈ S, x ⊗ K`

The interaction is therefore defined for both `0` and `1`.

## Axiom 4: Closed Collapse

The result of applying `K` to a state collapses into a state of the same model:

`∀x ∈ S, x ⊗ K ↓ y` implies `y ∈ S`

## Axiom 5: Single Outcome

Each state-interaction pair has exactly one outcome:

`∀x ∈ S, ∃!y ∈ S such that x ⊗ K ↓ y`

This axiom makes the model deterministic.
