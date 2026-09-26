# Functions Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: Application Has One Output

For every `x ∈ D_f`, there is exactly one `y ∈ C_f` such that `f(x) ≣ y`.

### Proof

By Axiom 3, there is exactly one `y ∈ C_f` such that `f ⊗ x ↓ y`. By Axiom 4, that collapse result is structurally equal to `f(x)`. Therefore evaluation at `x` identifies exactly one output. QED.

## Proposition 2: A Two-Step Path Records Two Evaluations

If `f ⊗ x ↓ z` and `f ⊗ z ↓ y`, then `f(x) ≣ z` and `f(z) ≣ y`.

### Proof

Apply Axiom 4 to the first collapse to obtain `f(x) ≣ z`. Apply it to the second collapse to obtain `f(z) ≣ y`. Rule 2 records these successive interactions as the path `x ▷ y : z ⊢ f`. QED.

## Proposition 3: A Fixed Point Is a One-Step Return

If `f ⊗ A ↓ A`, then `f(A) ≣ A` and the application has the loop representation `A ⟳ A ⊢ f`.

### Proof

By Axiom 4, the collapse gives `f(A) ≣ A`. Rule 3 translates this self-return into the stated loop representation. QED.

## Proposition 4: A Two-Cycle Returns After Two Applications

If `f ⊗ A ↓ B` and `f ⊗ B ↓ A`, then applying `f` twice from `A` returns to `A`.

### Proof

The first application maps `A` to `B`; the second maps `B` to `A`. By Rule 2 these are successive applications through `B`, and Rule 4 identifies their two-cycle representation. Thus the two-step path returns to its initial reference. QED.