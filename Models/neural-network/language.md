# Neural Network Language

This model assigns meaning to a subset of the Pankey Language.

## References

| Reference | Meaning |
|---|---|
| `L` | The ordered set of layers, `L = {0, 1, ..., m}`. |
| `N^l` | The set of neurons belonging to layer `l`. |
| `N_i^l` | Neuron `i` of layer `l`. |
| `W^l` | The weight structure connecting layer `l-1` to layer `l`. |
| `b^l` | The bias structure of layer `l`. |
| `a^l` | The activation structure of layer `l` (its collapsed output). |
| `z^l` | The pre-activation structure of layer `l` (before collapse). |
| `φ` | The activation collapse: the structure that turns a pre-activation into an activation. |
| `y*` | The target reference for a given input. |
| `E` | The error structure produced from an output and a target. |
| `∇W^l` | The gradient structure of `W^l`. |
| `η` | The learning-rate condition governing a weight update. |
| `F` | The forward propagation structure. |
| `B` | The backward propagation structure. |
| `★` | The totality of references defined by this model. |

## Structural Representations

The layer set is:

`L = {0, 1, ..., m}`

Layer `0` is the input layer. Layer `m` is the output layer.

Neurons of a layer act in parallel:

`N^l = N_1^l ∧ N_2^l ∧ ... ∧ N_k^l`

The weighted interaction between a layer's weights and the previous layer's activation produces a pre-activation:

`z^l = W^l ⊗ a^(l-1)`

The bias conditions the pre-activation:

`z^l ⊢ b^l`

The pre-activation collapses into an activation through `φ`:

`z^l ⊗ φ ↓ a^l`

Forward propagation is the structure obtained by routing activations through every layer:

`a^0 : a^1 : ... : a^m ▷ F`

The interaction between the final activation and the target collapses into an error:

`a^m ⊗ y* ↓ E`

Backward propagation translates the error into a gradient for each layer's weights:

`E ~ ∇W^l`

The weight update is a collapse of the interaction between a weight and its gradient, conditioned by the learning rate:

`W^l ⊗ ∇W^l ⊢ η ↓ W'^l`

A training cycle is a loop composing one forward pass and one backward pass:

`⟳(F : B)`

## Structural Equality

Two weight structures are structurally equal exactly when they are the same reference:

`W^l ≣ W^l`

Convergence of training is represented by the structural equality between successive weight structures:

`W'^l ≣ W^l`

The symbol `≢` is explanatory notation for the negation of `≣`; it is not a new primitive required by the model.
