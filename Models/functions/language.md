# Functions Language

This model assigns meaning to the function-related structures used here.

## References

| Reference | Meaning |
|---|---|
| `f` | A function reference. |
| `x`, `y`, `z` | Input, output, or intermediate references. |
| `D_f` | The declared domain of `f`. |
| `C_f` | The declared codomain of `f`. |
| `f(x)` | The output reference associated with input `x` under `f`. |

For each function `f`, `D_f` and `C_f` are the references on which its application is defined and into which its outputs fall.

## Symbols

| Symbol | Meaning in this model |
|---|---|
| `⊗` | Applies a function reference to an input as an interaction. |
| `↓` | Collapses the function-input interaction into its output. |
| `▷` | Represents a resolved path from an input reference to an output reference. |
| `:` | Identifies an intermediate reference on a path. |
| `⊢` | Conditions a path representation on a function. |
| `~` | Translates between the interaction-collapse and resolution-path representations; it does not assert logical equivalence. |
| `→` | Continues a path with a subsequent interaction. |
| `⟳` | Represents a cyclic return structure. |
| `≣` | States structural equality between the application result and an output reference. |

## Structural Representations

Function application:

`f ⊗ x ↓ y`

The associated evaluation notation is:

`f(x) ≣ y`

Resolution representation, conditioned by `f`:

`x ▷ y ⊢ f`

Two successive applications through `z`:

`f ⊗ x ↓ z → f ⊗ z ↓ y`

with the corresponding path:

`x ▷ y : z ⊢ f`

A fixed point:

`f ⊗ A ↓ A`

A two-cycle:

`f ⊗ A ↓ B → f ⊗ B ↓ A`

The evaluation notation `f(x)` is shorthand for the output identified by the model's application rules. It does not introduce a separate primitive operation.