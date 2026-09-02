# Neural Network Rules

The rules define the behavior of forward propagation, error formation, backward translation, and weight update.

## Rule 1: Weighted Sum

For every layer `l > 0`:

`z^l = W^l ⊗ a^(l-1) ⊢ b^l`

The pre-activation is the interaction of the layer's weights with the previous layer's activation, conditioned by the layer's bias.

## Rule 2: Activation Collapse

For every layer `l > 0`:

`z^l ⊗ φ ↓ a^l`

The pre-activation collapses into an activation through `φ`. This model does not fix `φ`; any collapse satisfying Axiom 4 and Axiom 5 is admissible.

## Rule 3: Input Identity

The activation of layer `0` is the input itself:

`a^0 = input`

No weighted interaction or collapse applies to layer `0`.

## Rule 4: Layer Composition

Forward propagation applies Rule 1 and Rule 2 to every layer in order:

`a^0 : a^1 : ... : a^m ▷ F`

Each `a^l` for `l > 0` is obtained only after `a^(l-1)` has been produced.

## Rule 5: Output Identity

The activation of the last layer is the network's output:

`a^m = output`

## Rule 6: Error Formation

The output interacts with the target and collapses into the error:

`a^m ⊗ y* ↓ E`

## Rule 7: Backward Translation

The error translates into a gradient for each layer, applied from the last layer to the first:

`E ~ ∇W^m, ∇W^m ~ ∇W^(m-1), ..., ∇W^2 ~ ∇W^1`

Each translation may use the pre-activation, activation, and weight structures of its layer. This model does not fix how the translation is computed; any translation satisfying Axiom 7 is admissible.

## Rule 8: Weight Update

For every layer `l > 0`:

`W^l ⊗ ∇W^l ⊢ η ↓ W'^l`

The interaction between a weight and its gradient, conditioned by the learning-rate condition `η`, collapses into an updated weight.

## Rule 9: Training Cycle

One training cycle composes one forward pass and one backward pass:

`⟳(F : B)`

The output `W'^l` of one cycle becomes the `W^l` of the next application of Rule 1 through Rule 8.

## Rule 10: No Other Outcomes

Rules 1 through 8 are exhaustive for their respective structures. No pre-activation, activation, error, gradient, or updated weight other than the one specified by these rules is valid within the model.
