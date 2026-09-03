# Logic and Illogic Rules

## Rule 1: Direct Classification

Classify a direct form by its structural operator:

`W ▷ T` is logical.

`A ⟳ A` is illogical.

## Rule 2: Via Extension

Adding a via structure preserves the classification:

`W ▷ T` becomes `W ▷ T : Q`.

`A ⟳ A` becomes `A ⟳ A : B`.

## Rule 3: Condition Extension

Adding a condition completes the classification:

`W ▷ T : Q` becomes `W ▷ T : Q ⊢ R`.

`A ⟳ A : B` becomes `A ⟳ A : B ⊢ C`.

## Rule 4: Condition Interpretation

Interpret a condition according to the declared rules of the model. The condition may affect the meaning of the form, but it does not replace `▷` with `⟳` or `⟳` with `▷`.

## Rule 5: Compound Position Classification

References within any position may be joined through `∧` or `∨`:

`(W ∧ X) ▷ T : Q ⊢ R`

`W ▷ (T ∨ X) : Q ⊢ R`

`W ▷ T : (Q ∧ X) ⊢ R`

`W ▷ T : Q ⊢ (R ∨ X)`

The same rule applies to illogical forms with `⟳`. Joining references within a position does not replace `▷` with `⟳` or `⟳` with `▷`.

## Rule 6: Hybrid Classification

Logical and illogical forms may be joined through `∧` or `∨`:

`W ▷ T : Q ⊢ R ∧ A ⟳ A : B ⊢ C`

`W ▷ T : Q ⊢ R ∨ A ⟳ A : B ⊢ C`

The resulting hybrid retains the classification of both components.
