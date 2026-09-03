# Rational Numbers Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: A Valid Ratio Is Logical

Every finite ratio with a nonzero natural denominator is logical.

### Proof

Let `a ⊢ Z`, `b ⊢ N`, and `b ≢ 0`. By Axiom 1, `(a : b) ⊢ Q`. By Axiom 2 and Rule 1:

`a ▷ (a : b) : b ⊢ b ≢ 0`

Therefore the ratio is logically classified. QED.

## Proposition 2: Equivalent Ratios Have One Rational Structure

If the cross-products of two valid ratios are structurally equal, the ratios represent one rational structure.

### Proof

Let `Mul(a, d) ≣ Mul(c, b)` with `b ≢ 0` and `d ≢ 0`. Axiom 3 and Rule 2 give:

`(a : b) ≣ (c : d)`

Therefore the two ratio structures are equal. QED.

## Proposition 3: Rational Addition Is Closed

The defined sum of two rational structures is rational.

### Proof

By Axiom 4 and Rule 3, two valid ratios collapse to a ratio with a common denominator. Therefore the defined sum is a rational structure. QED.

## Proposition 4: The Rational-Number Totality Has No Final Structure

The totality `Q` does not resolve to a final rational structure.

### Proof

By Axiom 6 and Rule 5:

`Q = P ⟳ P ⊢ F(P)`

The formation condition permits a further return of `P` rather than a terminal resolution. Therefore `Q` has no final rational structure and is illogical as a totality. QED.