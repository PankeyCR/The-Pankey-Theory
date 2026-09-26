# Functions Rules

The rules formalize the four function forms. In each rule, inputs to `f` belong to its declared domain and outputs belong to its declared codomain. The symbol `~` marks translation between representations, as defined in the Pankey Language.

## Rule 1: Application and Resolution

`f ⊗ x ↓ y ~ x ▷ y ⊢ f`

The application is recorded by evaluation as:

`f(x) ≣ y`

Thus a function application that collapses from `x` to `y` has a corresponding resolution representation conditioned by `f`.

## Rule 2: Successive Application

When `z` is both the first output and a valid input to `f`, two applications form a path through `z`:

`x ▷ y : z ⊢ f ~ f ⊗ x ↓ z → f ⊗ z ↓ y`

The evaluations are:

`f(x) ≣ z`

`f(z) ≣ y`

The rule describes two successive applications, not a claim that every function output can be reapplied as an input.

## Rule 3: Fixed Point

When an input returns itself, the application is represented as a loop:

`f ⊗ A ↓ A ~ A ⟳ A ⊢ f`

The evaluation is:

`f(A) ≣ A`

## Rule 4: Two-Cycle

When two valid inputs return each other, the applications form a two-cycle:

`A ⟳ A : B ⊢ f ~ f ⊗ A ↓ B → f ⊗ B ↓ A`

The evaluations are:

`f(A) ≣ B`

`f(B) ≣ A`

The two-cycle is local to `A` and `B`; it does not imply that `f` is an inverse or that all references participate in a cycle.