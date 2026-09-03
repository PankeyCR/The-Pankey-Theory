# Arithmetic Proofs

All results below use only the axioms and rules of this model.

## Proposition 1: Every Calculation Terminates

Every `Add`, `Mul`, or `Sub` calculation on canonical numerals reaches a unique numeral after finitely many reductions.

### Proof

Each recursive rule decreases the second input by one successor. By Axiom 5, that input has a finite history ending at `0`. Addition and subtraction then use their base rules. Multiplication reduces to addition and its recursive input also decreases finitely. Axiom 6 gives uniqueness of the result. QED.

## Proposition 2: Addition Is Commutative

`Add(x, y) ≣ Add(y, x)` for all canonical numerals `x` and `y`.

### Proof

First prove by induction on `y` that `Add(0, y) ≣ y`. Rule 2 gives the base case, and Rule 3 gives the successor case. Next prove by induction on `y` that:

`Add(S(x), y) ≣ S(Add(x, y))`.

Rule 2 gives the base case. In the successor case, Rule 3 and the induction hypothesis give the same successor on both sides. Finally induct on `x`. For `x = 0`, the first result gives `Add(0, y) ≣ y ≣ Add(y, 0)`. For `S(x)`, the second result, the induction hypothesis, and Rule 3 give:

`Add(S(x), y) ≣ S(Add(x, y)) ≣ S(Add(y, x)) ≣ Add(y, S(x))`.

Therefore addition is commutative. QED.

## Proposition 3: Addition Is Associative

`Add(Add(x, y), z) ≣ Add(x, Add(y, z))`.

### Proof

Induct on `z`. For `z = 0`, both sides reduce to `Add(x, y)` by Rule 2. For `S(z)`, Rule 3 gives:

`Add(Add(x, y), S(z)) ↓ S(Add(Add(x, y), z))`.

Apply the induction hypothesis and Rule 3 to the other side:

`Add(x, Add(y, S(z))) ↓ Add(x, S(Add(y, z))) ↓ S(Add(x, Add(y, z)))`.

Both sides are structurally equal. QED.

## Proposition 4: Multiplication Distributes over Addition

`Mul(x, Add(y, z)) ≣ Add(Mul(x, y), Mul(x, z))`.

### Proof

Induct on `z`. For `z = 0`, Rule 2 gives `Add(y, 0) ↓ y` and both sides reduce to `Mul(x, y)`. For `S(z)`, Rule 3 gives:

`Mul(x, Add(y, S(z))) ↓ Mul(x, S(Add(y, z)))`

`↓ Add(Mul(x, Add(y, z)), x)`.

Apply the induction hypothesis and the successor form of addition to obtain:

`Add(Add(Mul(x, y), Mul(x, z)), x)`.

The right side reduces to the same structure by Rule 3, Proposition 2, and Proposition 3. QED.

## Proposition 5: Subtraction Is the Left Inverse of Addition

`Sub(Add(x, y), x) ≣ y` for all canonical numerals `x` and `y`.

### Proof

Induct on `x`. For `x = 0`, `Add(0, y) ≣ y` and Rule 4 gives `Sub(y, 0) ↓ y`. For `S(x)`, the successor-addition lemma from Proposition 2 gives:

`Add(S(x), y) ≣ S(Add(x, y))`.

Rule 4 then gives:

`Sub(S(Add(x, y)), S(x)) ↓ Sub(Add(x, y), x)`.

The induction hypothesis reduces this to `y`. QED.
