# Neural Network Examples

## Example 1: A Minimal Two-Layer Network

Let `L = {0, 1}`, with one neuron per layer.

`a^0 = input`

Rule 1: `z^1 = W^1 ⊗ a^0 ⊢ b^1`

Rule 2: `z^1 ⊗ φ ↓ a^1`

Rule 5: `a^1 = output`

## Example 2: Forward Propagation Through Three Layers

Let `L = {0, 1, 2}`.

`a^0 = input`

`z^1 = W^1 ⊗ a^0 ⊢ b^1`

`z^1 ⊗ φ ↓ a^1`

`z^2 = W^2 ⊗ a^1 ⊢ b^2`

`z^2 ⊗ φ ↓ a^2`

Therefore:

`a^0 : a^1 : a^2 ▷ F`

`a^2 = output`

## Example 3: Error Formation

Continuing Example 2, with target `y*`:

`a^2 ⊗ y* ↓ E`

## Example 4: Backward Translation and Update

Continuing Example 3:

`E ~ ∇W^2`

`∇W^2 ~ ∇W^1`

`W^2 ⊗ ∇W^2 ⊢ η ↓ W'^2`

`W^1 ⊗ ∇W^1 ⊢ η ↓ W'^1`

## Example 5: One Full Training Cycle

`⟳(F : B)` applied once to Example 2 through Example 4 produces `W'^1` and `W'^2` from `W^1` and `W^2`.

A second cycle replaces `W^1` with `W'^1` and `W^2` with `W'^2`, then repeats Rule 1 through Rule 8.

## Example 6: Convergence

If a training cycle produces no change in the weight structures:

`W'^1 ≣ W^1` and `W'^2 ≣ W^2`

the network is said to have converged, in the structural sense defined by this model.

## Example 7: Totality

The totality of the model contains the layer, neuron, weight, bias, and interaction references:

`★ = {L, N^l, W^l, b^l, a^l, z^l, φ, y*, E, ∇W^l, η, F, B}`
