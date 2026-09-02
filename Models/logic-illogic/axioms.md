# Logic and Illogic Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Classification Domain

Every structure classified by this model belongs to `S`.

## Axiom 2: Logical Resolution

A structure is logical when the model declares a terminal resolution:

`A ▷ T ⊢ R` implies `A ⊢ L`

## Axiom 3: Unresolved Self-Reference

A structure is illogical when its self-return is declared unresolved:

`A ⟳ A : B ⊢ C` implies `A ⊢ I`

## Axiom 4: Boundary Recognition

Every illogic may have a logical boundary through which it is referenced:

`A ⊢ I` implies `B(A) ⊢ S`

The boundary does not resolve the illogic.

## Axiom 5: No Resolution Leakage

No terminal result may be inferred from an illogic solely because it has been named by a boundary:

`A ⊢ I` and `B(A) ⊢ S` do not imply `A ▷ T`

## Axiom 6: Hybrid Composition

A logical structure and an illogical structure may compose into a hybrid:

`l ⊗ J ⊢ h`

`l ⊢ L`

`h ⊢ H`

A hybrid must retain the classification of each component unless a separate rule resolves or reclassifies that component.

## Axiom 7: Relative Classification

Classification is relative to the rules of this model. A structure may receive a different classification in a model that supplies different resolution conditions.

## Axiom 8: Ultimate Illogic

`Ω` may be used as a boundary reference for the totality of illogics. No rule of this model resolves `Ω` or uses it to infer a terminal result for an illogic.
