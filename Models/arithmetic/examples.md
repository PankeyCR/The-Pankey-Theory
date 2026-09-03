# Arithmetic Examples

## Example 1: Addition

`Add(S(S(0)), S(S(S(0))))`

`↓ S(Add(S(S(0)), S(S(0))))`

`↓ S(S(Add(S(S(0)), S(0))))`

`↓ S(S(S(Add(S(S(0)), 0))))`

`↓ S(S(S(S(S(0)))))`

Therefore `2 + 3 = 5`.

## Example 2: Multiplication

`Mul(S(S(0)), S(S(S(0))))`

`↓ Add(Mul(S(S(0)), S(S(0))), S(S(0)))`

`↓ Add(Add(Mul(S(S(0)), S(0)), S(S(0))), S(S(0)))`

`↓ Add(Add(Add(Mul(S(S(0)), 0), S(S(0))), S(S(0))), S(S(0)))`

`↓ S(S(S(S(S(S(0))))))`

Therefore `2 × 3 = 6`.

## Example 3: Truncated Subtraction

`Sub(S(S(S(0))), S(0)) ↓ Sub(S(S(0)), 0) ↓ S(S(0))`

`Sub(S(0), S(S(0))) ↓ Sub(0, S(0)) ↓ 0`

Therefore `3 - 1 = 2` and `1 - 2 = 0` in this model.

## Example 4: Order

`0 ≤ S(S(0))`

`S(0) ≤ S(S(0))`

`S(S(0)) ≤ S(S(0))`
