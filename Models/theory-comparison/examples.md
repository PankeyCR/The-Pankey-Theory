# Theory Comparison Examples

## Example 1: Comparing Theory Components

`T = (V ∧ A ∧ C ∧ R ∧ Q)`

`H = (V ∧ A ∧ C ∧ R ∧ Q)`

`Compare(T, H) ↓ Compare(V(T), V(H)) ∧ Compare(A(T), A(H)) ∧ Compare(C(T), C(H)) ∧ Compare(R(T), R(H)) ∧ Compare(Q(T), Q(H))`

The theories are comparable because each exposes its declared structure in the same language.

## Example 2: Comparing Conditions

`C(T) ⊗ C(H) ↓ Compare(C(T), C(H))`

Conditions may have similar form, different form, or require a translation before their relation can be stated.

## Example 3: Natural Numbers and Peano Arithmetic

Let `T` be the Natural Numbers Model and `H` be Peano arithmetic under a declared translation.

`Tr(T, H)`

The origin, successor closure, origin separation, successor distinction, induction, and recursive operation forms can be compared under this translation.

This records a strong structural correspondence. It does not prove `Eq(T, H)`, soundness, or consistency without a formal grammar and preservation proof.

## Example 4: Extension

If a theory retains the natural-number successor structures and adds rational structures with additional rules:

`T ⊢ Ex(H)`

The extension relation identifies preservation plus additional declared structure.

## Example 5: Model Totality

`★ = (T ∧ H ∧ V ∧ A ∧ C ∧ R ∧ Q ∧ Compare ∧ F ∧ Tr ∧ Ex ∧ Co ∧ In ∧ Eq)`
