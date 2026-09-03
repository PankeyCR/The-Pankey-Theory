# Natural Numbers Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Origin

`0` is natural.

`0 ⊢ N`

## Axiom 2: Successor Closure

Every natural structure has a successor structure.

`x ⊢ N` implies `S(x) ⊢ N`

## Axiom 3: Origin Separation

No successor structure is structurally equal to the origin.

`S(x) ≢ 0`

## Axiom 4: Successor Distinction

Equal successor structures have equal predecessors.

`S(x) ≣ S(y)` implies `x ≣ y`

## Axiom 5: Generated Totality

The natural-number totality is:

`N = P ⟳ P ⊢ S(P)`

`P` is a placeholder, not a natural number. It first represents the origin `0`. The condition `S(P)` gives its represented structure a successor form that re-enters `P`. The re-entry means that `S(P)` may again serve as the predecessor for another successor construction; it does not state that `S(P)` is structurally equal to `P`.

Therefore `N` contains the origin and every structure obtained from it by a finite number of successor constructions.

As a totality, `N` is illogical: successor closure provides no final natural structure. This does not classify any finite natural structure as illogical.

## Axiom 6: Determinate Collapse

Each defined interaction in this model has one collapse result for each pair of natural inputs.

This axiom applies to successor, addition, and multiplication.
