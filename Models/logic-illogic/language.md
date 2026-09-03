# Logic and Illogic Language

## Structural Forms

Parentheses group a complete structure. They do not introduce an operation.

A logical structure has a declared resolution and in its complete form it looks like this:

`W ▷ T : Q ⊢ R`

An illogical structure has an unresolved return and in its complete form it looks like this:

`A ⟳ A : B ⊢ C`

A hybrid structure contains both components and it can be separeted with the symbol ∧ or ∨:

`W ▷ T : Q ⊢ R ∧ A ⟳ A : B ⊢ C`

`W ▷ T : Q ⊢ R ∨ A ⟳ A : B ⊢ C`

## Classification

Logical and illogical structures have the same arrangement. Their classification differs only by the structural operator: `▷` for resolution and `⟳` for return.

### Direct Form

`W ▷ T`

`A ⟳ A`

### Via Form

`W ▷ T : Q`

`A ⟳ A : B`

### Complete Form

`W ▷ T : Q ⊢ R`

`A ⟳ A : B ⊢ C`

The condition is part of the complete classification. It may determine how the resolution or return is interpreted, but it does not change the shared arrangement of the two forms.

### Compound Forms

More than one reference may occupy the origin, outcome, via, or condition position. The references may be joined by `∧` or `∨`.

| Position | Conjunctive form | Alternative form |
|---|---|---|
| Origin | `(W ∧ X) ▷ T : Q ⊢ R`<br>`(A ∧ D) ⟳ A : B ⊢ C` | `(W ∨ X) ▷ T : Q ⊢ R`<br>`(A ∨ D) ⟳ A : B ⊢ C` |
| Outcome | `W ▷ (T ∧ X) : Q ⊢ R`<br>`A ⟳ (A ∧ D) : B ⊢ C` | `W ▷ (T ∨ X) : Q ⊢ R`<br>`A ⟳ (A ∨ D) : B ⊢ C` |
| Via | `W ▷ T : (Q ∧ X) ⊢ R`<br>`A ⟳ A : (B ∧ D) ⊢ C` | `W ▷ T : (Q ∨ X) ⊢ R`<br>`A ⟳ A : (B ∨ D) ⊢ C` |
| Condition | `W ▷ T : Q ⊢ (R ∧ X)`<br>`A ⟳ A : B ⊢ (C ∧ D)` | `W ▷ T : Q ⊢ (R ∨ X)`<br>`A ⟳ A : B ⊢ (C ∨ D)` |

Compound references do not change the classification: `▷` remains logical and `⟳` remains illogical.
