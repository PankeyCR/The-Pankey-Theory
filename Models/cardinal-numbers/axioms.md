# Structural Cardinal Numbers Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Profile Assignment

Every classified structure has one cardinal profile:

`A ⊢ Card(A) = K(A)`

## Axiom 2: Finite Resolution

A structure with a finite recognized collection of generators and a terminal resolution has a finite profile:

`A ▷ T ⊢ K(A) = F`

The finite profile records the recognized finite component count.

## Axiom 3: Recurrent Form

An unresolved loop has a recurrent profile:

`A ⟳ A : G ⊢ K(A) = R`

This axiom classifies the loop form. It does not infer a classical infinite cardinal.

## Axiom 4: Parallel Form

Parallel components in a recurrent form produce a parallel profile:

`A ⟳ A : (G ∧ G) ⊢ K(A) = P`

## Axiom 5: Branching Form

Alternative components in a recurrent form produce a branching profile:

`A ⟳ A : (G ∨ G) ⊢ K(A) = B`

## Axiom 6: Form Distinction

Distinct recognized profiles are structurally distinct:

`F ≢ R`

`R ≢ P`

`P ≢ B`

## Axiom 7: No Bijection Reduction

A pairing or enumeration relation does not by itself replace one cardinal profile with another. Profile equality is determined only by the recognized structural form defined by this model.
