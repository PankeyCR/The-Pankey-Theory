# Binary State Transition Examples

## Example 1: Transition from Zero

`0 ⊗ K ↓ 1`

The initial state is `0`. The interaction produces `1`.

## Example 2: Transition from One

`1 ⊗ K ↓ 0`

The initial state is `1`. The interaction produces `0`.

## Example 3: Two Transitions from Zero

`0 ⊗ K ↓ 1`

`1 ⊗ K ↓ 0`

Therefore:

`0 ⊗ K ⊗ K ↓ 0`

## Example 4: Four Transitions from One

`1 ⊗ K ↓ 0`

`0 ⊗ K ↓ 1`

`1 ⊗ K ↓ 0`

`0 ⊗ K ↓ 1`

Therefore:

`1 ⊗ K ⊗ K ⊗ K ⊗ K ↓ 1`

## Example 5: Totality

The totality of the model contains the state and transition references:

`★ = {S, 0, 1, K, T}`
