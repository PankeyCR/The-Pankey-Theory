# Real Numbers Examples

## Example 1: A Rational Real

Let `q` be a rational structure.

`Cq(0) ↓ q`

`Cq(S(0)) ↓ q`

`Cq(S(S(0))) ↓ q`

`L(Cq) ↓ q`

The completed value has the same represented value as every stage, although it remains a real structure in this model.

## Example 2: Refining Approximation

Let `C` be an approximation structure for a value not fixed by one rational stage.

`C(0) ↓ q0`

`C(S(0)) ↓ q1`

`C(S(S(0))) ↓ q2`

`C ⊢ Conv`

`C → L(C)`

No stage is required to be equal to `L(C)`.

## Example 3: Equivalent Descriptions

Let `C` and `H` be convergent approximation structures with differences smaller than every positive rational bound after sufficiently late stages.

`E(C, H)`

`E(C, H) ↓ L(C) ≣ L(H)`

## Example 4: Addition of Completed Values

`Add(L(C), L(H)) ↓ L(J)`

`J(n) ↓ Add(C(n), H(n))`

The sum is specified through finite rational additions at every natural stage and completed by `L`.

## Example 5: Model Totality

`★ = (N ∧ Z ∧ Q ∧ R ∧ C ∧ L ∧ Conv ∧ E ∧ D ∧ A ∧ M ∧ O ∧ Positive ∧ Less)`
