# Theory Comparison Language

This model assigns the following meanings to references from The Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `T` | A first theory structure. |
| `H` | A second theory structure. |
| `V` | The vocabulary component of a theory. |
| `A` | The axiom component of a theory. |
| `C` | The condition component of a theory. |
| `R` | The rule component of a theory. |
| `Q` | The validity-criterion component of a theory. |
| `Compare` | The comparison structure relating two theories. |
| `F` | A shared structural form. |
| `Tr` | A translation relation between theory components. |
| `Ex` | An extension relation. |
| `Co` | A compatibility relation. |
| `In` | An incompatibility relation. |
| `Eq` | A structural-equivalence relation. |
| `★` | The totality of references defined by this model. |

## Theory Form

A declared theory structure is:

`T = (V ∧ A ∧ C ∧ R ∧ Q)`

The same form applies to `H`:

`H = (V ∧ A ∧ C ∧ R ∧ Q)`

The references on the right identify component roles within each theory. They do not assert that the vocabularies, axioms, conditions, rules, or validity criteria of `T` and `H` are identical.

## Comparison Forms

A comparison is represented by:

`Compare(T, H)`

A shared form is represented by:

`F(T, H)`

A translation is represented by:

`Tr(T, H)`

An extension is represented by:

`T ⊢ Ex(H)`

Compatibility and incompatibility are represented by:

`Co(T, H)`

`In(T, H)`

## Interpretation Boundary

Structural equality compares only form:

`T ≣ H`

Semantic equivalence requires an explicit translation and a preservation rule. The use of the same Pankey symbols makes comparison possible; it does not impose one shared interpretation.
