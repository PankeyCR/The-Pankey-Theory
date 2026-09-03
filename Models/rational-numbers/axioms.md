# Rational Numbers Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Ratio Formation

A signed finite numerator and a nonzero natural denominator form a rational structure:

`a ⊢ Z` and `b ⊢ N` and `b ≢ 0` imply `(a : b) ⊢ Q`

## Axiom 2: Logical Classification

Every finite ratio with a nonzero denominator is logical:

`a ▷ (a : b) : b ⊢ b ≢ 0`

## Axiom 3: Ratio Equality

Two ratios represent the same rational structure when their cross-products are structurally equal:

`Mul(a, d) ≣ Mul(c, b)` implies `(a : b) ≣ (c : d)`

provided `b ≢ 0` and `d ≢ 0`.

## Axiom 4: Addition Closure

The sum of two rational structures is a rational structure.

## Axiom 5: Multiplication Closure

The product of two rational structures is a rational structure.

## Axiom 6: Generated Totality

The rational-number totality is:

`Q = P ⟳ P ⊢ F(P)`

`P` is a placeholder for a rational structure. Under the condition `F(P)`, another finite ratio structure may re-enter `P`.

Therefore `Q` contains every ratio structure admitted by Axioms 1 through 5 and has no final ratio structure. As a totality, `Q` is illogical; this does not classify an individual finite ratio as illogical.