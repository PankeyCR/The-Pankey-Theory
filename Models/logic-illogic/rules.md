# Logic and Illogic Rules

## Rule 1: Logical Classification

A declared resolution classifies a structure as logical:

`A ▷ T ⊢ R ↓ A ⊢ L`

## Rule 2: Illogic Classification

An explicitly unresolved self-return classifies a structure as illogical:

`A ⟳ A : B ⊢ C ↓ A ⊢ I`

## Rule 3: Boundary Formation

An illogic can be given a logical boundary:

`A ⊢ I ↓ B(A)`

The collapse produces a boundary reference, not an internal resolution of `A`.

## Rule 4: Boundary Interaction

Logical rules may operate on a boundary when they name the boundary explicitly:

`B(A) ⊗ L ↓ T`

No conclusion from this interaction may be substituted as a terminal result of `A` without an additional rule.

## Rule 5: Hybrid Classification

A structure containing a logical and an illogical component is classified as hybrid:

`l ⊗ J ↓ h`

`h ⊢ H`

## Rule 6: Resolution Restriction

No application of Rules 1 through 5 changes an illogical structure into a logical one. A reclassification requires a new model rule that states what resolves the original unresolved return.
