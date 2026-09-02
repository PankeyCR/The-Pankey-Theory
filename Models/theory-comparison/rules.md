# Theory Comparison Rules

## Rule 1: Component Comparison

The corresponding declared components of two theories may be compared:

`Compare(T, H) ↓ Compare(V(T), V(H)) ∧ Compare(A(T), A(H)) ∧ Compare(C(T), C(H)) ∧ Compare(R(T), R(H)) ∧ Compare(Q(T), Q(H))`

## Rule 2: Shared-Form Recognition

When two components have the same recognized arrangement, record their shared form:

`Compare(X(T), X(H)) ↓ F(X(T), X(H))`

where `X` is one declared component role.

## Rule 3: Translation Comparison

When a translation is declared, compare the translated structures rather than their un-translated reference names:

`Tr(T, H) ⊢ Compare(T, H)`

## Rule 4: Extension Recognition

When a translation preserves declared structures of `T` in `H` and `H` has additional declared components, record:

`T ⊢ Ex(H)`

## Rule 5: Compatibility Recognition

When translated conditions and rules produce no structurally distinct result for a selected comparison domain, record:

`Compare(T, H) ↓ Co(T, H)`

Compatibility applies only to that selected domain.

## Rule 6: Incompatibility Recognition

When translated conditions or rules assign structurally distinct results for a selected comparison domain, record:

`Compare(T, H) ↓ In(T, H)`

## Rule 7: No Soundness Collapse

No comparison result collapses to a judgment of soundness or truth. Such a judgment requires the validity component `Q` and an independent justification.
