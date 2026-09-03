# Natural Numbers Examples

## Example 1: The First Three Successors

`(0 ⊗ I) ↓ S(0)`

`(S(0) ⊗ I) ↓ S(S(0))`

`(S(S(0)) ⊗ I) ↓ S(S(S(0)))`

## Example 2: One Plus Two

`Add(S(0), S(S(0))) ↓ S(Add(S(0), S(0)))`

`S(Add(S(0), S(0))) ↓ S(S(Add(S(0), 0)))`

`S(S(Add(S(0), 0))) ↓ S(S(S(0)))`

## Example 3: Two Times Three

`Mul(S(S(0)), S(S(S(0)))) ↓ Add(Mul(S(S(0)), S(S(0))), S(S(0)))`

`Add(Mul(S(S(0)), S(S(0))), S(S(0))) ↓ Add(Add(Mul(S(S(0)), S(0)), S(S(0))), S(S(0)))`

`Add(Add(Mul(S(S(0)), S(0)), S(S(0))), S(S(0))) ↓ Add(Add(Add(Mul(S(S(0)), 0), S(S(0))), S(S(0))), S(S(0)))`

`Add(Add(Add(Mul(S(S(0)), 0), S(S(0))), S(S(0))), S(S(0))) ↓ S(S(S(S(S(S(0))))))`

## Example 4: Natural-Number Totality

`N = P ⟳ P ⊢ S(P)`

`P` first represents `0`. Under the condition `S(P)`, its successor form re-enters `P`, so `P` may then represent `S(0)`. The same conditioned return lets `P` represent `S(S(0))`, then each later successor form.

The return to `P` is placeholder re-entry, not `S(P) ≣ P`.

## Example 5: Model Totality

The model totality is represented by grouped reference composition:

`★ = (N ∧ P ∧ 0 ∧ I ∧ S ∧ A ∧ M)`
