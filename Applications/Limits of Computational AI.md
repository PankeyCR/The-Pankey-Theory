# Limits of Computational AI

**Status:** Exploratory application theory
**Role:** Describes structural limits on computational artificial intelligence using The Pankey Language, the Logic and Illogic Model, and the Natural Numbers Model.

## Scope

This application theory concerns limits of systems that compute defined outputs from finite representations. It is not a general theory of intelligence, consciousness, safety, or the social effects of artificial intelligence.

The symbols below receive their interpretation from this application theory. The Pankey Language supplies their structural form only.

## References

| Reference | Interpretation in this theory |
|---|---|
| `A` | A computational AI system. |
| `P` | A finite input problem presented to `A`. |
| `B` | A bounded response produced by `A`. |
| `T` | A validated resolution of `P`. |
| `H` | A finite computational history. |
| `U` | An unresolved computational structure. |
| `V` | A validation condition relating a response to a resolution. |
| `K` | Additional assumptions introduced when interpreting an underspecified input. |
| `C` | The conditions under which the input, rules, and available resources are fixed. |

## Structural Forms

A computational AI system is represented as a structure that produces a bounded response for an input within fixed conditions:

`A ⊗ P ▷ B : H ⊢ C`

This is logical in the sense of the Logic and Illogic Model because the application declares the response `B` through a finite history `H`. It does not by itself declare that `B` resolves `P`.

A response is a resolution only when this theory declares a validation condition:

`B ~ T ⊢ V`

The translation means that, under `V`, the response is interpreted as the resolution `T`. This application does not define `V`; a specific system must provide its own validation method.

An unresolved computational structure is represented as:

`U ⟳ U ⊢ C`

This is illogical in the model's structural sense: under `C`, no terminal outcome has been declared. It does not mean that the system is defective, irrational, or incapable of useful work.

## Axioms

### Axiom 1: Finite Construction

Every computational history that produces a bounded response is a finite construction:

`H = S^n(0) ⊢ C`

Here `S` represents one computational step and `n` is a finite natural-number structure. This follows the Natural Numbers Model, in which each individual construction has a finite history. A non-terminal return is not assigned such a finite response history.

### Axiom 2: Declared Resolution

If a finite history produces a bounded response under `C`, then the computation is logical relative to this application theory:

`A ⊗ P ▷ B : H ⊢ C`

A response is not a resolution unless the application also declares:

`B ~ T ⊢ V`

### Axiom 3: No Resolution from an Unresolved Return

If the computational structure returns without a declared terminal result, this theory does not assign it a resolved output:

`U ⟳ U ⊢ C`

No rule in this application permits the return itself to be treated as a finite proof of `T`.

## Computational Limits

A computational AI can produce only responses declared by its rules, representations, and finite history under `C`. A produced response is not thereby a validated resolution of its input.

For example, when asked to resolve an open problem, an AI can terminate with a response such as “unresolved under the available evidence.” This is a bounded response:

`A ⊗ P ▷ B : H ⊢ C`

It is not a resolution because no validation relation `B ~ T ⊢ V` has been declared. It is also not an illogical return merely because the response is incomplete.

When an input is underspecified, an AI may introduce assumptions in order to return a practical answer. That response is bounded under the expanded condition, not under the original one:

`A ⊗ P ▷ B : H ⊢ (C ∧ K)`

The added assumptions `K` must be stated. Without them, the response cannot validate a resolution under `C` alone.

When the system encounters a structure represented by `U ⟳ U ⊢ C`, it has three possible application-level responses:

1. return a bounded result that states the unresolved condition;
2. change `C` by adding data, rules, or resources, thereby forming a new computational problem;
3. continue computation without a declared terminal outcome.

Only the first response preserves the original condition while acknowledging the limit. The second begins a new structure; it does not resolve the original one under the original conditions.

## Consequences

1. A finite response is logical only relative to its declared input, history, and conditions.
2. A finite response is not a validated resolution without a declared validation condition.
3. Increased computation can create longer finite histories, but it does not by itself convert an unresolved return into a declared resolution.
4. Learning changes the system's effective condition `C`; a learned system must therefore be evaluated relative to the data and rules that produced its current structure.
5. An AI system can be highly capable within its declared domain while remaining structurally limited outside that domain.

## Interpretation

This theory treats the limits of computational AI as two distinct boundaries: the difference between a finite response and a validated resolution, and the difference between a bounded unresolved response and a non-terminal return. It does not claim that AI cannot reason, discover, learn, or assist with open problems. It claims only that computation does not remove these structural distinctions.

## Self-Test Cases

The following cases test the structural distinction with a conversational AI system.

| Input type | AI result | Classification |
|---|---|---|
| A finite arithmetic question with a checkable answer. | The system returns `B`; an arithmetic validation condition can declare `B ~ T ⊢ V`. | A finite response and a validated resolution. |
| A self-referential statement evaluated under stated two-valued classical logic. | The system shows that no consistent true-or-false assignment exists. | A finite response and a validated resolution of that limited, stated question. |
| An open problem or a request lacking enough information. | The system returns a bounded statement of uncertainty. | A finite response, but not a resolution because no `B ~ T ⊢ V` is declared. |
| An everyday request with missing facts, such as asking whether a job offer is best. | The system gives advice and identifies its assumptions or missing information. | A bounded response under `C ∧ K`, but not a validated resolution under `C` alone. |
| A computation specified to continue without a terminal state. | No terminal response is declared under the original condition. | An unresolved return: `U ⟳ U ⊢ C`. |

These cases show why a returned answer, a validated limited conclusion, an assumption-dependent answer, an acknowledged lack of resolution, and non-termination must remain separate forms in this theory.

## Open Requirements

To develop this application theory further, it needs:

- a formal definition of the computational condition `C` for a specific AI architecture;
- a translation between `H` and measurable execution histories;
- examples that distinguish an unresolved structure from a merely resource-limited computation;
- a proof framework relating these structural limits to established results in computability theory.
