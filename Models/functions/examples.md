# Functions Examples

## Example 1: Direct Application

Let `x ∈ D_f`, and suppose:

`f ⊗ x ↓ y`

By Rule 1:

`f(x) ≣ y`

and the corresponding conditioned resolution is:

`x ▷ y ⊢ f`

## Example 2: Two Successive Applications

Let `x, z ∈ D_f`, and suppose:

`f ⊗ x ↓ z`

`f ⊗ z ↓ y`

The path representation is:

`x ▷ y : z ⊢ f`

with evaluations:

`f(x) ≣ z`

`f(z) ≣ y`

## Example 3: Fixed Point

Suppose `A ∈ D_f` and:

`f ⊗ A ↓ A`

Then:

`f(A) ≣ A`

`A ⟳ A ⊢ f`

## Example 4: Two-Cycle

Let `A, B ∈ D_f`, and suppose:

`f ⊗ A ↓ B`

`f ⊗ B ↓ A`

Then:

`f(A) ≣ B`

`f(B) ≣ A`

`A ⟳ A : B ⊢ f`