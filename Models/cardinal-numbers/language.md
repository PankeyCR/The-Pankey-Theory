# Structural Cardinal Numbers Language

This model assigns the following meanings to references from The Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `K` | The totality of structural cardinal references. |
| `Card` | The cardinal-profile assignment. |
| `F` | The finite resolved profile. |
| `R` | The recurrent profile of an unresolved loop. |
| `P` | The parallel-component profile. |
| `B` | The branching profile. |
| `G` | A generator reference. |
| `T` | A terminal resolution reference. |
| `★` | The totality of references defined by this model. |

## Structural Forms

Parentheses group a complete structure. They do not introduce an operation.

Cardinal-profile assignment is represented by:

`Card(A) = K(A)`

A finite resolved form has the shape:

`A ▷ T : (G ∧ G)`

A recurrent form has the shape:

`A ⟳ A : G`

A parallel recurrent form has the shape:

`A ⟳ A : (G ∧ G)`

A branching recurrent form has the shape:

`A ⟳ A : (G ∨ G)`

## Cardinal Profiles

`F` records a finite resolved form. `R` records one unresolved recurrent route. `P` records parallel structural components within a recurrent route. `B` records alternatives within a recurrent route.

These profiles are form classifications. They do not assert a value under classical cardinal arithmetic. In particular, a profile with two parallel components is structurally distinct from a simple recurrent profile even when a classical bijection could assign the same cardinality to their unfolded elements.

## Structural Equality

Two structures have the same structural cardinal only when this model recognizes the same cardinal profile:

`K(A) ≣ K(H)`

This equality compares profiles, not the number of elements obtained by an enumeration.
