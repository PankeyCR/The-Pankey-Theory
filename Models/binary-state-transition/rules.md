# Binary State Transition Rules

The rules define the behavior of the transition interaction `K`.

## Rule 1: Transition of Zero

`0 ⊗ K ↓ 1`

## Rule 2: Transition of One

`1 ⊗ K ↓ 0`

## Rule 3: Sequential Application

If a transition produces a state, the same interaction may be applied again:

`x ⊗ K ↓ y` and `y ⊗ K ↓ z` imply `x ⊗ K ⊗ K ↓ z`

The sequential expression is shorthand for applying the collapse rule twice. It does not introduce a new operator.

## Rule 4: No Other Outcomes

The two transition rules are exhaustive. Therefore, for any `x ∈ S`, no result other than the result specified by Rule 1 or Rule 2 is valid.
