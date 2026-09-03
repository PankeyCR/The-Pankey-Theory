# Rational Numbers Language

This model assigns meanings to structures from The Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `N` | The natural-number totality supplied by the Natural Numbers Model. |
| `Z` | Signed finite structures used as numerator structures. |
| `Q` | The rational-number totality. |
| `P` | A placeholder for a rational structure in the rational-number totality. |
| `F` | The condition that a ratio structure may be formed. |
| `Add` | The addition interaction for rational structures. |
| `Mul` | The multiplication interaction for rational structures. |
| `≢` | The negation of structural equality in this model. |
| `★` | The totality of references defined by this model. |

## Structural Forms

Parentheses group a complete structure. They do not introduce an operation.

A rational structure is represented by:

`q = (a : b)`

where `a ⊢ Z`, `b ⊢ N`, and `b ≢ 0`. The colon assigns `b` the denominator position of the ratio.

A rational structure has the logical complete form:

`a ▷ q : b ⊢ b ≢ 0`

The finite numerator `a`, the finite denominator `b`, and the nonzero-denominator condition classify the ratio as logical.

## Ratio Equality

Two ratio structures are structurally equal when their cross-products are structurally equal:

`(a : b) ≣ (c : d)` when `Mul(a, d) ≣ Mul(c, b)`

where `b ≢ 0` and `d ≢ 0`.

## Rational-Number Totality

The totality of rational structures has the complete illogical form:

`Q = P ⟳ P ⊢ F(P)`

`P` is a placeholder for a rational structure. The condition `F(P)` governs each return: another finite ratio structure may be formed and associated with `P`.

The loop is placeholder re-entry, not structural equality between two ratio structures. The totality is illogical because it has no final rational structure; each individual finite ratio remains logical.