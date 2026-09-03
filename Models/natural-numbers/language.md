# Natural Numbers Language

This model assigns the following meanings to references from The Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `0` | The origin structure. |
| `N` | The natural-number totality. |
| `P` | A placeholder for a natural structure; it is not itself a natural number. |
| `I` | The successor interaction. |
| `S` | The successor structural form. |
| `A` | The addition interaction. |
| `M` | The multiplication interaction. |
| `★` | The totality of references defined by this model. |

## Structural Forms

Parentheses group a complete structure. They do not introduce an operation.

The successor form is:

`S(x) = (x ⊗ I)`

The expression `S(x)` is a reference to the grouped successor structure. It may be substituted wherever that structure occurs.

Addition is represented by:

`Add(x, y) = (x ⊗ A ⊗ y)`

Multiplication is represented by:

`Mul(x, y) = (x ⊗ M ⊗ y)`

`Add` and `Mul` are names for structural forms, not additional primitive operators.

## Logical Construction

Each finite natural-number construction has a logical classification through `▷`.

For example, the successor construction may be classified as:

`(x ⊗ I) ▷ S(x)`

Its arithmetic collapse remains:

`(x ⊗ I) ↓ S(x)`

The first expression classifies the construction as resolved. The second reinterprets the constructed structure as its result.

## Natural-Number Totality

The totality of natural numbers is represented by:

`N = P ⟳ P ⊢ S(P)`

`P` is a placeholder for any natural structure generated from `0`. The condition `S(P)` governs each return to `P`: the successor form is eligible to be represented by the same placeholder. This is placeholder re-entry, not structural equality. In particular, `S(P) ≣ P` is not asserted.

Because `P` may represent the successor form after re-entry, that form may itself have a successor. Thus the loop makes successor construction available again without making an individual natural structure return to an earlier structure.

The totality is an illogical form in the Logic and Illogic Model: it has a successor return and no final natural structure. This classification applies to `N` as a totality, not to any individual finite natural structure.

## Natural Structural Form

A natural structure has one of two forms:

`0`

`S(x)` where `x` is natural.

No other structure is interpreted as natural by this model.

## Structural Equality

Structural equality records equality of construction form. For example:

`S(0) ≣ S(0)`

`0 ≢ S(0)`

The expression `≢` abbreviates the negation of `≣` in this model.
