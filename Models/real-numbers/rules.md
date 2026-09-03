# Real Numbers Rules

## Rule 1: Constant Approximation

A rational structure determines a constant approximation:

`q ⊢ Q` implies `Cq(n) ↓ q`

Its completed limit is the rational structure represented as real:

`L(Cq) ↓ q`

## Rule 2: Equivalent Approximation

If the difference between `C` and `H` becomes smaller than every positive rational bound, then:

`E(C, H) ↓ L(C) ≣ L(H)`

## Rule 3: Addition by Approximation

The sum of two real structures is the limit of their stagewise rational sums:

`Add(L(C), L(H)) ↓ L(J)`

`J(n) ↓ Add(C(n), H(n))`

## Rule 4: Multiplication by Approximation

The product of two real structures is the limit of their stagewise rational products:

`Mul(L(C), L(H)) ↓ L(K)`

`K(n) ↓ Mul(C(n), H(n))`

## Rule 5: Order by Persistent Separation

A completed value is less than another when their approximations are separated in that order by one positive rational bound after some natural stage:

`L(C) ⊗ O ⊗ L(H) ↓ Less`

## Rule 6: Completion Re-entry

A convergent approximation can be refined without changing its completed value when the refinement is approximation-equal:

`E(C, H) ⊢ L(C) ≣ L(H)`

This is re-entry through equivalent approximation, not a claim that an approximation structure is structurally equal to its limit.

## Rule 7: Totality Return

The real-number placeholder returns to itself through either via under its declared condition:

`R = P ⟳ P : (U ∨ V) ⊢ K`

No return supplies a final member of `R`. The rule does not interpret `U`, `V`, or `K`.
