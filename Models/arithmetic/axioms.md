# Arithmetic Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Canonical Origin

`0` is a natural numeral: `0 ⊢ N`.

## Axiom 2: Successor Closure

If `x ⊢ N`, then `S(x) ⊢ N`.

## Axiom 3: Successor Separation

`S(x) ≢ 0`.

## Axiom 4: Successor Injectivity

`S(x) ≣ S(y)` implies `x ≣ y`.

## Axiom 5: Finite Generation

Every canonical numeral has a finite successor history ending at `0`.

## Axiom 6: Determinate Arithmetic

For canonical inputs, `Add`, `Mul`, and `Sub` each have exactly one collapse result.

## Axiom 7: Induction

If a property holds for `0`, and holding for `x` implies holding for `S(x)`, then it holds for every canonical numeral.
