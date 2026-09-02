# Neural Network Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: Forward Propagation Is Total

For every input `a^0` and every layer `l ∈ L`, `a^l` is defined.

### Proof

By Axiom 1, `L = {0, 1, ..., m}` is finite. By Rule 3, `a^0` is defined directly from the input. By Axiom 3, `W^l ⊗ a^(l-1)` is defined for every `l > 0`, so Rule 1 produces `z^l`. By Axiom 4, `z^l ⊗ φ` always collapses, so Rule 2 produces `a^l`. By induction on `l` from `0` to `m`, every `a^l` is defined. QED.

## Proposition 2: Forward Propagation Is Deterministic

For fixed weights, biases, and input, each `a^l` has exactly one value.

### Proof

Axiom 5 states that `z^l` and `a^l` each have exactly one outcome for fixed `W^l`, `b^l`, and `a^(l-1)`. Rule 3 fixes `a^0` uniquely as the input. By induction on `l`, since each `a^(l-1)` is unique, Axiom 5 guarantees each subsequent `z^l` and `a^l` is unique. Therefore `a^m` is unique. QED.

## Proposition 3: The Output Is Closed Within the Activation Domain

The output `a^m` belongs to the activation domain `A`.

### Proof

By Axiom 4, every collapse `z^l ⊗ φ ↓ a^l` produces `a^l ∈ A`. By Rule 5, `a^m` is such a collapse for `l = m` (when `m > 0`). Therefore `a^m ∈ A`. QED.

## Proposition 4: A Training Cycle Produces a Unique Updated Weight Structure

For every layer `l > 0`, one application of Rule 9 produces a unique `W'^l`.

### Proof

By Proposition 1 and Proposition 2, `F` produces a unique output `a^m`. By Axiom 6, Rule 6 produces a unique `E` from `a^m` and `y*`. By Axiom 7, Rule 7 produces a gradient `∇W^l` for every layer through translation. By Axiom 8, Rule 8 produces a unique `W'^l` from `W^l`, `∇W^l`, and `η`. Since `F` and `B` are each well-defined and deterministic, `⟳(F : B)` is well-defined for one cycle. QED.

## Proposition 5: Repeated Training Cycles Are Well-Defined

For any nonnegative integer `n`, `n` applications of `⟳(F : B)` produce a well-defined sequence of weight structures.

### Proof

By Proposition 4, one application of `⟳(F : B)` maps a weight structure `W^l` to a unique `W'^l`. Since `W'^l` satisfies the same conditions required of `W^l` by Axiom 3 (it is a structure over which `⊗` with an activation is defined), it may itself serve as the input to the next cycle. By induction on `n`, a sequence `W^l_0, W^l_1, ..., W^l_n` is produced, where each `W^l_(k+1)` is the unique result of applying `⟳(F : B)` to `W^l_k`. QED.

## Corollary: Convergence Is a Fixed Point

If `W'^l ≣ W^l` for every layer `l`, then every subsequent application of `⟳(F : B)` produces the same weight structures.

### Proof

By Proposition 4, `⟳(F : B)` is a deterministic map from a weight structure to its update. If `W'^l ≣ W^l`, the map sends `W^l` to itself. Since the map is deterministic, applying it again to `W^l` yields `W'^l ≣ W^l` again. By induction, every further application leaves the weight structures unchanged. QED.
