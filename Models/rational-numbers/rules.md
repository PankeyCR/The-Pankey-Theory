# Rational Numbers Rules

## Rule 1: Ratio Classification

A valid ratio is logically classified by its nonzero denominator condition:

`a ▷ (a : b) : b ⊢ b ≢ 0`

## Rule 2: Equivalent Ratios

Cross-product equality permits ratio equality:

`Mul(a, d) ≣ Mul(c, b) ↓ (a : b) ≣ (c : d)`

where `b ≢ 0` and `d ≢ 0`.

## Rule 3: Addition

Two rational structures add through their common denominator:

`(a : b) ⊗ Add ⊗ (c : d) ↓ (Add(Mul(a, d), Mul(c, b)) : Mul(b, d))`

The rule applies when both denominators are nonzero.

## Rule 4: Multiplication

Two rational structures multiply component by component:

`(a : b) ⊗ Mul ⊗ (c : d) ↓ (Mul(a, c) : Mul(b, d))`

The rule applies when both denominators are nonzero.

## Rule 5: Totality Return

The rational placeholder returns to itself under its formation condition:

`Q = P ⟳ P ⊢ F(P)`

Each return permits another finite ratio structure. No return supplies a final member of `Q`.