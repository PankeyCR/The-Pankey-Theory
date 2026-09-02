# Neural Network Model

**Status:** Complete minimal model
**Role:** Demonstrates a layered, trainable model built on The Pankey Language.

## Purpose

This model describes a feedforward neural network: a structure of layered neurons connected by weighted interactions, capable of producing an output from an input and of revising its own weights through a backward translation of error. It builds directly on the vocabulary of [the Binary State Transition model](../binary-state-transition/theory.md) — interaction, collapse, and structural equality — and extends it with layered composition, conditioned collapse, and translation.

The model describes the structural behavior of a feedforward network only. It makes no claim about biological neurons, consciousness, or any specific activation function, loss function, or optimization algorithm. Those choices belong to whichever concrete instantiation adopts this model.

## Scope

The model contains:

- a totally ordered set of layers `L`;
- a set of neurons per layer `N^l`;
- a weight structure `W^l` and bias structure `b^l` per layer;
- one weighted interaction producing a pre-activation signal;
- one collapse rule producing an activation from a pre-activation;
- one interaction producing an error from an output and a target;
- one translation producing gradients from an error;
- one conditioned collapse producing updated weights from gradients;
- a loop composing forward and backward passes into a training cycle.

A complete model is given by the documents in this directory:

- [language.md](language.md) defines the vocabulary;
- [axioms.md](axioms.md) states the assumptions;
- [rules.md](rules.md) defines behavior;
- [examples.md](examples.md) demonstrates derivations;
- [proofs.md](proofs.md) derives results from the axioms and rules.
