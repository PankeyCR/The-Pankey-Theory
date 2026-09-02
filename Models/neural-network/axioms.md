# Neural Network Axioms

The following assumptions define the model. They are accepted without proof.

## Axiom 1: Layered Totality

The model is organized into a finite, ordered set of layers:

`L = {0, 1, ..., m}`

Every neuron belongs to exactly one layer.

## Axiom 2: Directed Structural Relation

Connections are directed from each layer to the next:

`∀l ∈ L, l > 0 implies N^(l-1) → N^l`

No connection proceeds from a layer to itself or to an earlier layer.

## Axiom 3: Weighted Interaction

The interaction `⊗` between `W^l` and `a^(l-1)` is defined for every layer `l > 0`:

`∀l ∈ L, l > 0, W^l ⊗ a^(l-1)`

## Axiom 4: Closed Collapse

The collapse of a pre-activation through `φ` always produces an activation belonging to the model's activation domain `A`:

`∀l ∈ L, l > 0, z^l ⊗ φ ↓ a^l` implies `a^l ∈ A`

## Axiom 5: Single Forward Outcome

For fixed weights, biases, and input `a^0`, each layer's pre-activation and activation have exactly one outcome:

`∀l ∈ L, l > 0, ∃!z^l such that z^l = W^l ⊗ a^(l-1) ⊢ b^l`, and `∃!a^l such that z^l ⊗ φ ↓ a^l`

This axiom makes forward propagation deterministic.

## Axiom 6: Error Existence

For every output `a^m` and target `y*`, an error structure exists:

`∀a^m, y*, ∃E such that a^m ⊗ y* ↓ E`

## Axiom 7: Gradient Existence

For every error `E` and every weight `W^l`, a gradient structure exists:

`∀l ∈ L, l > 0, ∃∇W^l such that E ~ ∇W^l`

This axiom assumes the model's activation and error structures admit such a translation. It does not define how the translation is computed; that belongs to the rules.

## Axiom 8: Single Update Outcome

For every weight `W^l`, gradient `∇W^l`, and learning-rate condition `η`, the conditioned collapse has exactly one outcome:

`∀l ∈ L, l > 0, ∃!W'^l such that W^l ⊗ ∇W^l ⊢ η ↓ W'^l`

This axiom makes the update rule deterministic.
