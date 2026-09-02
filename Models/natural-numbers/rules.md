# Natural Numbers Rules

## Rule 1: Successor Collapse

A successor interaction collapses to its successor form:

`(x ⊗ I) ↓ S(x)`

## Rule 2: Addition Origin

Adding the origin preserves the first structure:

`Add(x, 0) ↓ x`

## Rule 3: Addition Successor

Adding a successor constructs one successor after the smaller addition:

`Add(x, S(y)) ↓ S(Add(x, y))`

## Rule 4: Multiplication Origin

Multiplying by the origin collapses to the origin:

`Mul(x, 0) ↓ 0`

## Rule 5: Multiplication Successor

Multiplying by a successor adds one further copy of the first structure:

`Mul(x, S(y)) ↓ Add(Mul(x, y), x)`

## Rule 6: Structural Induction

A property holds for every natural structure when both conditions hold:

`P(0)`

`P(x) ⊢ P(S(x))`

This rule is valid only for structures in `N`.
