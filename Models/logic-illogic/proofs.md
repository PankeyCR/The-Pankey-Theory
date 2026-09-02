# Logic and Illogic Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: A Declared Resolution Produces a Logical Classification

If a structure has a declared terminal resolution, it is logical in this model.

### Proof

Let `A ▷ T ⊢ R`. Rule 1 gives:

`A ▷ T ⊢ R ↓ A ⊢ L`

Therefore `A` is logically classified. QED.

## Proposition 2: Naming an Illogic Does Not Resolve It

A logical boundary for an illogic does not provide a terminal result for its self-reference.

### Proof

Let `A ⊢ I`. By Rule 3, the model forms `B(A)`. Axiom 5 states that the existence of `B(A)` does not imply `A ▷ T`. Therefore a boundary names an illogic without resolving it. QED.

## Proposition 3: A Hybrid Preserves Its Unresolved Component

The formation of a hybrid does not by itself resolve its illogical component.

### Proof

By Rule 5:

`l ⊗ J ↓ h`

Axiom 6 requires the hybrid to retain the classification of each component. Rule 6 forbids reclassification without a new resolving rule. Therefore the illogical component remains unresolved in the hybrid. QED.

## Proposition 4: A Loop Is Not Sufficient for Illogic Classification

A structure with a loop is illogical only when the unresolved condition is declared.

### Proof

Rule 2 requires both the self-return form and condition `C`. By Axiom 7, classification depends on the model's declared rules. Therefore a loop without `C` is not sufficient for illogic classification. QED.
