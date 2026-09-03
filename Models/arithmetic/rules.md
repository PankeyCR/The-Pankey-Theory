# Arithmetic Rules

All rules apply to canonical natural numerals.

## Rule 1: Successor

`(x ⊗ I) ↓ S(x)`

## Rule 2: Addition

`Add(x, 0) ↓ x`

`Add(x, S(y)) ↓ S(Add(x, y))`

## Rule 3: Multiplication

`Mul(x, 0) ↓ 0`

`Mul(x, S(y)) ↓ Add(Mul(x, y), x)`

## Rule 4: Truncated Subtraction

`Sub(x, 0) ↓ x`

`Sub(0, S(y)) ↓ 0`

`Sub(S(x), S(y)) ↓ Sub(x, y)`

Subtraction is truncated: whenever the second numeral is larger, the result is `0`.

## Rule 5: Order

`0 ≤ y`

`x ≤ y` implies `S(x) ≤ S(y)`

`S(x) ≤ 0` does not hold.

## Rule 6: Structural Induction

`P(0)` and `P(x) ⊢ P(S(x))` imply `P(n)` for every canonical numeral `n`.
