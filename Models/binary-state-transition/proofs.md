# Binary State Transition Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: The Transition Is Total

For every state `x ∈ S`, `x ⊗ K` has an outcome.

### Proof

By Axiom 1, `S = {0, 1}`. If `x = 0`, Rule 1 gives `0 ⊗ K ↓ 1`. If `x = 1`, Rule 2 gives `1 ⊗ K ↓ 0`. These cases exhaust `S`, so the interaction is defined for every state. QED.

## Proposition 2: The Transition Is Deterministic

For every state `x ∈ S`, there is exactly one result of `x ⊗ K`.

### Proof

Axiom 5 states that each state-interaction pair has exactly one outcome. Rules 1 and 2 assign one outcome to each of the only two states. Rule 4 excludes all other outcomes. Therefore the transition is deterministic. QED.

## Proposition 3: The Transition Is Closed

Applying `K` to a state never produces a structure outside `S`.

### Proof

Rule 1 produces `1`, and Rule 2 produces `0`. By Axiom 1, both `0` and `1` belong to `S`. Therefore every collapse remains inside `S`. QED.

## Proposition 4: Two Applications Restore the Initial State

For every `x ∈ S`:

`x ⊗ K ⊗ K ↓ x`

### Proof

If `x = 0`, Rule 1 gives `0 ⊗ K ↓ 1`, and Rule 2 gives `1 ⊗ K ↓ 0`. Thus `0 ⊗ K ⊗ K ↓ 0`.

If `x = 1`, Rule 2 gives `1 ⊗ K ↓ 0`, and Rule 1 gives `0 ⊗ K ↓ 1`. Thus `1 ⊗ K ⊗ K ↓ 1`.

Axiom 1 says these are all possible states. Therefore two applications restore every initial state. QED.

## Corollary: Even Applications Are Identity on States

For every nonnegative integer `n`:

`x ⊗ K^(2n) ↓ x`

### Proof

Proposition 4 establishes the base pair of transitions. Repeating the same two-step result preserves `x`. QED.
