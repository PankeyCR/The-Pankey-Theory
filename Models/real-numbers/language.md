# Real Numbers Language

This model assigns the following meanings to references from The Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `N` | The natural-number totality supplied by the Natural Numbers Model. |
| `Z` | The totality of integer structures used as rational numerators. |
| `Q` | The totality of rational structures. |
| `R` | The totality of real structures. |
| `C` | A rational approximation structure indexed by natural structures. |
| `L` | The limit reference assigned to a convergent approximation structure. |
| `Conv` | The condition that an approximation structure converges. |
| `E` | The approximation equality relation. |
| `D` | The positive difference structure between two rational structures. |
| `A` | The addition interaction. |
| `M` | The multiplication interaction. |
| `O` | The order relation. |
| `Positive` | The condition that a difference structure is positive. |
| `Less` | The result of a valid strict-order collapse. |
| `★` | The totality of references defined by this model. |

## Structural Forms

Parentheses group a complete structure. They do not introduce an operation.

A rational structure is represented by:

`q = (a : b)`

where `a ⊢ Z` and `b ⊢ N`, with `b ≢ 0`. The colon means that `b` specifies the denominator role of the finite relation.

`Z` supplies signed finite structures for the numerator role. Its detailed construction is outside the scope of this model.

An approximation structure is represented by:

`C(n) = q`

where `n ⊢ N` and `q ⊢ Q`.

Its completed limit is represented by:

`L(C) = r`

where `r ⊢ R`.

Approximation equality is represented by:

`E(C, H)`

It means that `C` and `H` eventually differ by less than every positive rational bound.

Addition and multiplication of completed values are represented by:

`Add(L(C), L(H))`

`Mul(L(C), L(H))`

## Real Structural Form

A real structure has the form `L(C)` for a convergent rational approximation structure `C`. Two such forms identify one real structure exactly when `E(C, H)` holds.

The notation `L(C)` does not assert that `C` has a last approximation. It assigns a completed reference to the stable value specified by `C`.
