# Logic and Illogic Language

This model assigns the following meanings to references from The Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `S` | The totality of structures classified by this model. |
| `L` | The totality of logical structures. |
| `l` | An individual logical structure. |
| `I` | The totality of illogical structures. |
| `J` | An individual illogical structure. |
| `H` | The totality of hybrid structures containing logical and illogical components. |
| `h` | An individual hybrid structure. |
| `R` | The resolution condition. |
| `B` | A logical boundary that names or relates an illogic. |
| `T` | A terminal result of a logical structure. |
| `C` | The condition that a self-reference remains unresolved. |
| `Ω` | The reference for an ultimate illogic, if this model chooses to introduce one. |
| `★` | The totality of references defined by this model. |

## Structural Forms

Parentheses group a complete structure. They do not introduce an operation.

A logical structure has a declared resolution:

`A ▷ T ⊢ R`

An illogical structure has an unresolved return:

`A ⟳ A : B ⊢ C`

A hybrid structure contains both components:

`l ⊗ J ⊢ h`

## Classification

A structure is logical only when a terminal result is admitted by a declared rule. A structure is illogical only when its return is declared unresolved by condition `C`. The loop symbol alone does not make a structure illogical; a finite-state cycle may still have a defined logical interpretation in another model.

A boundary `B` names an illogic from outside its unresolved return. It is logical only insofar as the model supplies rules for the boundary itself.
