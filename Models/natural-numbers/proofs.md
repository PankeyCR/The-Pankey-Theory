# Natural Numbers Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: Every Natural Structure Has a Unique Successor

For every natural structure `x`, exactly one successor structure is produced.

### Proof

By Axiom 2, `S(x)` is natural whenever `x` is natural. Rule 1 gives:

`(x ⊗ I) ↓ S(x)`

Axiom 6 makes this collapse determinate. Therefore every natural structure has one successor structure. QED.

## Proposition 2: The Origin Is Not a Successor

`0` is structurally distinct from every successor structure.

### Proof

Axiom 3 states:

`S(x) ≢ 0`

Therefore no successor structure is structurally equal to the origin. QED.

## Proposition 3: One Plus Two Is Three

`Add(S(0), S(S(0))) ↓ S(S(S(0)))`

### Proof

By Rule 3:

`Add(S(0), S(S(0))) ↓ S(Add(S(0), S(0)))`

Applying Rule 3 again gives:

`S(Add(S(0), S(0))) ↓ S(S(Add(S(0), 0)))`

By Rule 2:

`S(S(Add(S(0), 0))) ↓ S(S(S(0)))`

Therefore:

`Add(S(0), S(S(0))) ↓ S(S(S(0)))`

QED.

## Proposition 4: Addition Preserves Natural Form

For natural structures `x` and `y`, `Add(x, y)` collapses to a natural structure.

### Proof

Use Rule 6 with the property that `Add(x, y)` collapses to a natural structure for a fixed natural `x`.

For `0`, Rule 2 gives:

`Add(x, 0) ↓ x`

which is natural.

For a successor `S(y)`, Rule 3 gives:

`Add(x, S(y)) ↓ S(Add(x, y))`

If `Add(x, y)` collapses to a natural structure, Axiom 2 makes its successor natural. By structural induction, addition preserves natural form. QED.

## Proposition 5: Every Natural Number Has a Finite Origin History

Every natural structure is either `0` or a finite successor construction whose final predecessor is `0`.

### Proof

This is Axiom 5 interpreted through the successor form. Each permitted natural structure begins at `0` and gains one finite successor construction at each use of Rule 1. No other structures are admitted into `N`. QED.
