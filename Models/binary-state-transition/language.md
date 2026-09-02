# Binary State Transition Language

This model assigns meaning to a small subset of the Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `S` | The set of model states. |
| `0` | The first state. |
| `1` | The second state. |
| `K` | The transition interaction. |
| `T` | The transition structure. |
| `★` | The totality of references defined by this model. |

## Structural Representations

The state set is:

`S = {0, 1}`

The transition is represented by:

`T = K ⊗ S`

A state transition is represented by:

`x ⊗ K ↓ T(x)`

where `x` is a state in `S`.

The model uses `=` for reference assignment, `⊗` for interaction, and `↓` for collapse into the resulting state. In this model, collapse is deterministic and always produces one state in `S`.

## Structural Equality

Two state structures are structurally equal exactly when they are the same reference:

`0 ≣ 0`

`1 ≣ 1`

`0 ≢ 1`

The symbol `≢` is explanatory notation for the negation of `≣`; it is not a new primitive required by the model.
