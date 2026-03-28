# Chapter 32: Sets 2 - Concise Synopsis
## Detailed Study Notes for Pearson Edexcel IGCSE

---

# 1. Three-Set Venn Diagrams — Advanced Concepts

## 1.1 Structure of Three-Set Venn Diagrams

A three-set Venn diagram uses three overlapping circles within a rectangle (representing the universal set $\xi$). This creates **8 distinct regions**, each representing a unique combination of set membership.

### The Eight Regions:

| Region | Description | Notation |
|--------|-------------|----------|
| 1 | Elements in A only | $A \cap B' \cap C'$ |
| 2 | Elements in B only | $A' \cap B \cap C'$ |
| 3 | Elements in C only | $A' \cap B' \cap C$ |
| 4 | Elements in A and B only | $(A \cap B) \cap C'$ |
| 5 | Elements in A and C only | $(A \cap C) \cap B'$ |
| 6 | Elements in B and C only | $(B \cap C) \cap A'$ |
| 7 | Elements in all three (center) | $A \cap B \cap C$ |
| 8 | Elements in none (outside all circles) | $A' \cap B' \cap C'$ |

### Visual Representation:
```
                    ξ
    ┌─────────────────────────────────┐
    │                                 │
    │       A              B          │
    │     ┌─────┐      ┌─────┐        │
    │    ╱   1   ╲────╱   2   ╲       │
    │   │  (A)   │ 4 │  (B)   │       │
    │   │       ╱─────╲       │       │
    │   │  5   │   7   │   6  │       │
    │   │(A∩C) │(A∩B∩C)│(B∩C) │       │
    │    ╲    ╱───────╲    ╱          │
    │     ╲  ╱    C    ╲  ╱           │
    │      └─────┐  3  ┌─────┘         │
    │            │ (C) │               │
    │            └─────┘               │
    │       8 (outside all)            │
    └─────────────────────────────────┘
```

> **Key Insight:** The numbers in each region must sum to $n(\xi)$. Always verify this!

---

## 1.2 The Three-Set Cardinality Formula

For three sets $A$, $B$, and $C$:

$$\boxed{n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)}$$

### Understanding the Formula (Why does it work?)

**Step-by-step derivation:**

1. **Start:** Add $n(A)$, $n(B)$, and $n(C)$ — elements in overlaps are counted multiple times
2. **Problem:** Double intersections counted twice, triple intersection counted three times
3. **Fix:** Subtract $n(A \cap B)$, $n(B \cap C)$, $n(A \cap C)$
4. **New Problem:** Triple intersection was added 3 times, then subtracted 3 times → not counted at all!
5. **Final Fix:** Add back $n(A \cap B \cap C)$ once

---

### Worked Example 1: Basic Three-Set Problem

In a school of 120 students:
- 50 study Mathematics
- 45 study Physics
- 40 study Chemistry
- 20 study both Mathematics and Physics
- 15 study both Physics and Chemistry
- 18 study both Mathematics and Chemistry
- 8 study all three subjects

Find how many students study at least one subject, and how many study none.

**Solution:**

**Step 1:** Identify the given information
- $n(M) = 50$, $n(P) = 45$, $n(C) = 40$
- $n(M \cap P) = 20$, $n(P \cap C) = 15$, $n(M \cap C) = 18$
- $n(M \cap P \cap C) = 8$
- $n(\xi) = 120$

**Step 2:** Apply the three-set formula

$$n(M \cup P \cup C) = 50 + 45 + 40 - 20 - 15 - 18 + 8$$

$$n(M \cup P \cup C) = 135 - 53 + 8 = 90$$

**Step 3:** Find students studying none

$$n(\text{none}) = n(\xi) - n(M \cup P \cup C) = 120 - 90 = 30$$

**Answer:** 90 students study at least one subject; 30 study none.

---

## 1.3 Filling Three-Set Venn Diagrams — Systematic Method

### ⭐ The "Inside-Out" Strategy:

**Rule:** Always start with the center (triple intersection) and work outward.

1. **Start:** Write the triple intersection value in the center
2. **Second layer:** Calculate double-intersection-only regions (subtract triple from each double)
3. **Third layer:** Calculate single-only regions (subtract all overlaps from individual totals)
4. **Outside:** Calculate elements outside all circles
5. **Verify:** Sum all regions to check

---

### Worked Example 2: Complete Venn Diagram Construction

In a survey of 80 people about their pets:
- 35 have dogs
- 30 have cats
- 25 have fish
- 12 have both dogs and cats
- 10 have both cats and fish
- 8 have both dogs and fish
- 5 have all three pets

**Draw the Venn diagram and find:**
(i) How many have only dogs?
(ii) How many have exactly two types of pets?
(iii) How many have none of these pets?

**Solution:**

**Step 1:** Fill center (all three)
- Center region = 5

**Step 2:** Fill double-intersection regions (excluding center)
- Dogs ∩ Cats only = $12 - 5 = 7$
- Cats ∩ Fish only = $10 - 5 = 5$
- Dogs ∩ Fish only = $8 - 5 = 3$

**Step 3:** Fill single-only regions
- Dogs only = $35 - 7 - 5 - 3 = 20$
- Cats only = $30 - 7 - 5 - 5 = 13$
- Fish only = $25 - 3 - 5 - 5 = 12$

**Step 4:** Calculate total inside circles
$$n(D \cup C \cup F) = 20 + 7 + 5 + 13 + 3 + 5 + 12 = 65$$

**Step 5:** Calculate outside region
$$n(\text{none}) = 80 - 65 = 15$$

**Venn Diagram:**
```
                Dogs        Cats
         ┌─────────────────────────┐
         │    20    7     13       │
         │   ┌─────┬──────┐        │
         │   │     │  5   │        │
         │   │    ╱└──────╲        │
         │   │ 3  │   5   │        │
         │   │    │       │        │
         │   └────┴───────┴────┐   │
         │       12            │   │
         │        Fish         │15 │
         └─────────────────────────┘
```

**Answers:**
(i) Only dogs = 20
(ii) Exactly two = $7 + 5 + 3 = 15$
(iii) None = 15

---

## 1.4 Advanced Three-Set Problems

### Worked Example 3: Finding Missing Information

In a class of 50 students, a survey was conducted about learning preferences:
- 28 students prefer visual learning
- 24 students prefer auditory learning
- 22 students prefer kinesthetic learning
- 12 students prefer both visual and auditory
- 10 students prefer both auditory and kinesthetic
- 14 students prefer both visual and kinesthetic
- Every student has at least one learning preference

Find the number of students who prefer all three learning styles.

**Solution:**

Since everyone has at least one preference:
$$n(\xi) = n(V \cup A \cup K) = 50$$

Using the formula:
$$50 = 28 + 24 + 22 - 12 - 10 - 14 + n(V \cap A \cap K)$$

$$50 = 74 - 36 + n(V \cap A \cap K)$$

$$50 = 38 + n(V \cap A \cap K)$$

$$n(V \cap A \cap K) = 50 - 38 = 12$$

**Answer:** 12 students prefer all three learning styles.

> **Exam Tip:** When "everyone is in at least one set," we know $n(A \cup B \cup C) = n(\xi)$.

---

### Worked Example 4: "At Least" and "Exactly" Problems

Using the data from Example 2 (pets survey), find:

**(a)** How many have at least one pet?
**(b)** How many have exactly one pet?
**(c)** How many have at least two pets?
**(d)** How many have at most two pets?

**Solution:**

**(a)** At least one pet = $n(D \cup C \cup F) = 65$

**(b)** Exactly one pet = Dogs only + Cats only + Fish only
$$= 20 + 13 + 12 = 45$$

**(c)** At least two pets = Exactly two + All three
$$= 15 + 5 = 20$$
*Alternative:* $n(D \cup C \cup F) - \text{Exactly one} = 65 - 45 = 20$

**(d)** At most two pets = Everyone with pets - All three
$$= 65 - 5 = 60$$
*Or:* Exactly one + Exactly two = $45 + 15 = 60$

---

# 2. Practical Set Problems

## 2.1 Real-World Context Problems

These problems present set theory in everyday scenarios: surveys, market research, school statistics, sports, hobbies, etc.

### Strategy for Practical Problems:

1. **Define sets clearly** with appropriate notation
2. **Identify what each number represents** (total, intersection, etc.)
3. **Draw a Venn diagram** even if not explicitly asked
4. **Translate "word phrases" to set notation**
5. **Solve systematically** using the inside-out method

---

### Phrase Translation Table:

| Phrase | Meaning | Notation |
|--------|---------|----------|
| "at least one" | In any of the sets | $n(A \cup B \cup C)$ |
| "exactly one" | In one set only | Single-only regions |
| "exactly two" | In two sets only (not three) | Double-only regions |
| "at least two" | In two or more sets | Exactly two + All three |
| "at most two" | In two or fewer sets | Total inside - All three |
| "all three" | In all sets simultaneously | $n(A \cap B \cap C)$ |
| "none" | Outside all sets | $n(A' \cap B' \cap C')$ |
| "not in A" | Not a member of set A | $n(A')$ |

---

### Worked Example 5: Survey Problem

A market researcher surveyed 200 people about their streaming services:
- 95 have Netflix
- 80 have Disney+
- 75 have Amazon Prime
- 45 have both Netflix and Disney+
- 40 have both Disney+ and Amazon Prime
- 50 have both Netflix and Amazon Prime
- 25 have all three services

**Find:**
(i) How many have none of these services?
(ii) How many have exactly one service?
(iii) How many have Netflix but not Disney+?
(iv) How many have Amazon Prime only?

**Solution:**

**Step 1:** Define sets
- N = Netflix, D = Disney+, A = Amazon Prime
- $n(\xi) = 200$

**Step 2:** Fill Venn diagram (inside-out)

Center: $n(N \cap D \cap A) = 25$

Double-only regions:
- $N \cap D$ only = $45 - 25 = 20$
- $D \cap A$ only = $40 - 25 = 15$
- $N \cap A$ only = $50 - 25 = 25$

Single-only regions:
- N only = $95 - 20 - 25 - 25 = 25$
- D only = $80 - 20 - 25 - 15 = 20$
- A only = $75 - 25 - 15 - 25 = 10$

Total inside: $25 + 20 + 25 + 20 + 25 + 15 + 10 = 140$

Outside: $200 - 140 = 60$

**Venn Diagram:**
```
              N           D
       ┌────────────────────────┐
       │  25   20    20         │
       │ ┌────┬──────┐          │
       │ │   ╱│  25  │          │
       │ │25│ │      │          │
       │ │  ╲│      ╱│          │
       │ └────┴─────╲│          │
       │    10    15 │   60     │
       │       A      │          │
       └────────────────────────┘
```

**Answers:**
(i) None = 60
(ii) Exactly one = $25 + 20 + 10 = 55$
(iii) Netflix but not Disney+ = N only + $N \cap A$ only = $25 + 25 = 50$
(iv) Amazon Prime only = 10

---

## 2.2 Problems with Missing Information

### Worked Example 6: Finding the Universal Set

In a group of students:
- 18 play football
- 15 play cricket
- 10 play both sports
- 8 play neither sport

How many students are in the group?

**Solution:**

Using: $n(\xi) = n(F \cup C) + n(\text{neither})$

First find $n(F \cup C)$:
$$n(F \cup C) = n(F) + n(C) - n(F \cap C) = 18 + 15 - 10 = 23$$

Therefore:
$$n(\xi) = 23 + 8 = 31$$

**Answer:** There are 31 students in the group.

---

### Worked Example 7: Given Totals and Overlaps

In a survey about newspaper readership:
- The number who read The Times is 45
- The number who read The Guardian is 38
- The number who read The Telegraph is 52
- The number who read both The Times and The Guardian is 18
- The number who read both The Guardian and The Telegraph is 22
- The number who read both The Times and The Telegraph is 25
- The number who read all three newspapers is 8
- The number who read none of these newspapers is 15

How many people were surveyed?

**Solution:**

Using the three-set formula:
$$n(T \cup G \cup Te) = 45 + 38 + 52 - 18 - 22 - 25 + 8$$
$$n(T \cup G \cup Te) = 135 - 65 + 8 = 78$$

Total surveyed:
$$n(\xi) = n(T \cup G \cup Te) + n(\text{none}) = 78 + 15 = 93$$

**Answer:** 93 people were surveyed.

---

## 2.3 Two-Set Problems within Three Sets

### Worked Example 8: Comparing Subsets

From Example 5 (streaming services), find:
(i) How many have Netflix or Amazon Prime but not both?
(ii) How many have exactly one of Netflix or Disney+?

**Solution:**

**(i)** Netflix or Amazon Prime but not both (symmetric difference)

This includes:
- N only + A only + $N \cap D$ only + $D \cap A$ only

Wait — let me reconsider. "Netflix or Amazon Prime but not both" means:
- In N but not in A: N only + $N \cap D$ only = $25 + 20 = 45$
- In A but not in N: A only + $D \cap A$ only = $10 + 15 = 25$

Total: $45 + 25 = 70$

**(ii)** Exactly one of Netflix or Disney+

This means exactly one of {N, D}, which includes:
- N only + D only = $25 + 20 = 45$

But wait — we need "exactly one of N or D" which means:
- People with N but not D: N only + $N \cap A$ only = $25 + 25 = 50$
- People with D but not N: D only + $D \cap A$ only = $20 + 15 = 35$
- But those with exactly one must NOT have both N and D

Actually, "exactly one of Netflix or Disney+" means:
- Has Netflix but not Disney+: $25 + 25 = 50$
- Has Disney+ but not Netflix: $20 + 15 = 35$
- Total: $50 + 35 = 85$

However, for "exactly one of Netflix OR Disney+" (meaning exactly one from the pair):
We count: N only + D only = $25 + 20 = 45$

> **Important:** Read questions carefully! The interpretation depends on phrasing.

---

# 3. Shading Regions in Venn Diagrams

## 3.1 Basic Shading Rules

Shading regions is a visual way to represent set operations and verify set identities.

### Fundamental Shading Patterns:

| Expression | Shaded Region |
|------------|---------------|
| $A$ | Entire circle A |
| $A'$ | Everything outside circle A (including other circles partially) |
| $A \cap B$ | Overlapping region of A and B |
| $A \cup B$ | Both circles completely |
| $A - B$ or $A \cap B'$ | Part of A outside the intersection |
| $(A \cap B)'$ | Everything except the intersection |

---

## 3.2 Two-Set Shading Techniques

### Step-by-Step Shading Method:

1. **Identify the main operation** (union, intersection, complement)
2. **Work from inside parentheses outward**
3. **For complements:** Shade the original region first, then shade everything EXCEPT that region
4. **For unions:** Shade each part separately, then combine
5. **For intersections:** Shade each part, then keep only the doubly-shaded area

---

### Worked Example 9: Simple Two-Set Shading

**Shade the region representing:**
(i) $A \cup B$
(ii) $A \cap B'$
(iii) $(A \cup B)'$
(iv) $A' \cap B$

**Solutions:**

**(i) $A \cup B$**
```
    ξ
┌─────────────┐
│  ┌─────┐    │
│ ╱   A   ╲ ╱ │
││   ██   ████│ B
││   ██   ████│
│ ╲   ██   ╲  │
│  └─────┘    │
│             │
└─────────────┘
Both circles completely shaded
```

**(ii) $A \cap B'$**
```
    ξ
┌─────────────┐
│  ┌─────┐    │
│ ╱█████  ╲ ╱ │
││█████    │  │ B
││█████    │  │
│ ╲█████   ╲  │
│  └─────┘    │
│             │
└─────────────┘
Only the part of A that doesn't overlap with B
```

**(iii) $(A \cup B)'$**
```
    ξ
┌─────────────┐
│██┌─────┐████│
██╱      ╲ ╱██│
██│       │███│ B
██│       │███│
██╲       ╲███│
│██└─────┘████│
│█████████████│
└─────────────┘
Everything outside both circles
```

**(iv) $A' \cap B$**
```
    ξ
┌─────────────┐
│  ┌─────┐    │
│ ╱      ╱╲███│
││      │ ████│ B
││      │ ████│
│ ╲      ╲███ │
│  └─────┘    │
│             │
└─────────────┘
The part of B that doesn't overlap with A
```

---

## 3.3 Three-Set Shading

Three-set shading requires identifying specific regions that satisfy multiple conditions.

### Worked Example 10: Three-Set Shading

**Shade the following regions:**
(i) $A \cap B \cap C$
(ii) $(A \cup B) \cap C$
(iii) $A' \cap (B \cup C)$
(iv) $(A \cap B) \cup (B \cap C)$

**Solutions:**

**(i) $A \cap B \cap C$**
Only the central region where all three circles overlap.

```
              ξ
    ┌───────────────────┐
    │    A        B     │
    │  ┌───┐   ┌───┐    │
    │  │   │   │   │    │
    │  │   ├───┤   │    │
    │  │   │███│   │    │
    │  │   ├───┤   │    │
    │  └───┘   └───┘    │
    │       C           │
    └───────────────────┘
Only the center region shaded
```

**(ii) $(A \cup B) \cap C$**

First shade $A \cup B$ (both circles), then find the intersection with C.

This gives: $(A \cap C)$ and $(B \cap C)$ — both the double regions and the triple intersection.

```
              ξ
    ┌───────────────────┐
    │    A        B     │
    │  ┌───┐   ┌───┐    │
    │  │   │   │   │    │
    │  │███├───┤███│    │
    │  │███│███│███│    │
    │  │███├───┤███│    │
    │  └───┘   └───┘    │
    │       C           │
    └───────────────────┘
The overlap of C with A∪B
```

**(iii) $A' \cap (B \cup C)$**

This is the region outside A that is inside B or C (or both).

```
              ξ
    ┌───────────────────┐
    │    A        B     │
    │  ┌───┐   ┌───┐    │
    │██│   │███│███│    │
    │██│   ├───┤███│    │
    │██│   │███│███│    │
    │██│   ├───┤███│    │
    │██└───┘███└───┘    │
    │█████████ C ██████ │
    └───────────────────┘
Everything in B∪C that is outside A
```

**(iv) $(A \cap B) \cup (B \cap C)$**

Shade the intersection of A and B, plus the intersection of B and C.

```
              ξ
    ┌───────────────────┐
    │    A        B     │
    │  ┌───┐   ┌───┐    │
    │  │   │███│   │    │
    │  │   ├───┤   │    │
    │  │   │███│███│    │
    │  │   ├───┤███│    │
    │  └───┘███└───┘    │
    │     C             │
    └───────────────────┘
A∩B and B∩C (including center)
```

---

## 3.4 Shading to Verify Set Identities

### Worked Example 11: Verify De Morgan's Laws by Shading

**First Law:** $(A \cup B)' = A' \cap B'$

**Step 1:** Shade $(A \cup B)'$
```
    ξ
┌─────────────┐
│██┌─────┐████│
██╱      ╲ ╱██│
██│       │███│ B
██│       │███│
██╲       ╲███│
│██└─────┘████│
│█████████████│
└─────────────┘
```

**Step 2:** Shade $A' \cap B'$
```
    ξ
┌─────────────┐
│██┌─────┐████│
██╱      ╲ ╱██│
██│       │███│ B
██│       │███│
██╲       ╲███│
│██└─────┘████│
│█████████████│
└─────────────┘
```

**Conclusion:** Both diagrams are identical. ✓

**Second Law:** $(A \cap B)' = A' \cup B'$

The shading would show:
- $(A \cap B)'$ = everything except the overlapping region
- $A' \cup B'$ = everything outside A, plus everything outside B = everything except the overlapping region

Both are identical. ✓

---

# 4. Set-Builder Notation

## 4.1 Introduction to Set-Builder Notation

**Set-builder notation** is a mathematical way to describe sets by stating the properties that elements must satisfy.

### General Form:
$$A = \{x \in S : P(x)\}$$

Where:
- $x$ = a typical element
- $S$ = the universal set or domain
- $P(x)$ = the property or condition that $x$ must satisfy
- The colon ":" or vertical bar "|" means "such that"

---

## 4.2 Examples of Set-Builder Notation

### Worked Example 12: Translating to Set-Builder Notation

**Express the following in set-builder notation:**

(i) The set of even numbers from 1 to 20

**Solution:**
$$A = \{x \in \mathbb{N} : x \text{ is even and } 1 \leq x \leq 20\}$$
*Or:* $A = \{x \in \mathbb{N} : x = 2k \text{ where } k \in \{1, 2, 3, ..., 10\}\}$

(ii) The set of prime numbers less than 20

**Solution:**
$$B = \{x \in \mathbb{N} : x \text{ is prime and } x < 20\}$$
*Roster form:* $B = \{2, 3, 5, 7, 11, 13, 17, 19\}$

(iii) The set of integers between -5 and 5

**Solution:**
$$C = \{x \in \mathbb{Z} : -5 < x < 5\}$$
*Roster form:* $C = \{-4, -3, -2, -1, 0, 1, 2, 3, 4\}$

(iv) The set of natural numbers divisible by 3

**Solution:**
$$D = \{x \in \mathbb{N} : x \equiv 0 \pmod{3}\}$$
*Or:* $D = \{3k : k \in \mathbb{N}\}$
*Roster form:* $D = \{3, 6, 9, 12, 15, ...\}$

---

## 4.3 Translating from Set-Builder to Roster Form

### Worked Example 13: Converting Notation

**Write the following sets in roster form:**

(i) $A = \{x \in \mathbb{N} : x^2 < 20\}$

**Solution:**
Find natural numbers where $x^2 < 20$:
- $1^2 = 1 < 20$ ✓
- $2^2 = 4 < 20$ ✓
- $3^2 = 9 < 20$ ✓
- $4^2 = 16 < 20$ ✓
- $5^2 = 25 \not< 20$ ✗

$A = \{1, 2, 3, 4\}$

(ii) $B = \{x \in \mathbb{Z} : |x| \leq 3\}$

**Solution:**
Find integers where $|x| \leq 3$:
$B = \{-3, -2, -1, 0, 1, 2, 3\}$

(iii) $C = \{2n + 1 : n \in \mathbb{N}, n \leq 5\}$

**Solution:**
For $n = 1, 2, 3, 4, 5$:
- $2(1) + 1 = 3$
- $2(2) + 1 = 5$
- $2(3) + 1 = 7$
- $2(4) + 1 = 9$
- $2(5) + 1 = 11$

$C = \{3, 5, 7, 9, 11\}$

(iv) $D = \{x \in \mathbb{R} : x^2 - 5x + 6 = 0\}$

**Solution:**
Solve $x^2 - 5x + 6 = 0$:
$(x - 2)(x - 3) = 0$
$x = 2$ or $x = 3$

$D = \{2, 3\}$

---

## 4.4 Set Operations in Set-Builder Notation

### Worked Example 14: Combining Sets

Given:
- $A = \{x \in \mathbb{N} : x < 10\}$
- $B = \{x \in \mathbb{N} : x \text{ is even}\}$

Find in set-builder notation:
(i) $A \cap B$
(ii) $A \cup B$ (within a finite universal set)
(iii) $A - B$

**Solution:**

First, identify the elements:
- $A = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$
- $B = \{2, 4, 6, 8, 10, 12, ...\}$

(i) $A \cap B = \{x \in \mathbb{N} : x < 10 \text{ and } x \text{ is even}\}$
$= \{2, 4, 6, 8\}$

(ii) If $\xi = \{x \in \mathbb{N} : x \leq 10\}$:
$A \cup B = \{x \in \mathbb{N} : x \leq 10\}$

(iii) $A - B = \{x \in \mathbb{N} : x < 10 \text{ and } x \text{ is odd}\}$
$= \{1, 3, 5, 7, 9\}$

---

## 4.5 Advanced Set-Builder Problems

### Worked Example 15: Finding Elements from Conditions

List all elements of the set:
$$S = \{x \in \mathbb{N} : \sqrt{x} \in \mathbb{N} \text{ and } 1 \leq x \leq 50\}$$

**Solution:**

We need natural numbers $x$ where:
1. $1 \leq x \leq 50$
2. $\sqrt{x}$ is also a natural number (i.e., $x$ is a perfect square)

Perfect squares from 1 to 50:
$1^2 = 1$, $2^2 = 4$, $3^2 = 9$, $4^2 = 16$, $5^2 = 25$, $6^2 = 36$, $7^2 = 49$

$S = \{1, 4, 9, 16, 25, 36, 49\}$

---

### Worked Example 16: Set-Builder with Inequalities

Find the number of elements in:
$$P = \{x \in \mathbb{Z} : 2x + 3 > 0 \text{ and } x^2 \leq 16\}$$

**Solution:**

**Condition 1:** $2x + 3 > 0$
$2x > -3$
$x > -\frac{3}{2}$
$x \geq -1$ (since $x$ is an integer)

**Condition 2:** $x^2 \leq 16$
$-4 \leq x \leq 4$

**Combining:** $x \in \{-1, 0, 1, 2, 3, 4\}$

$n(P) = 6$

---

# 5. Common Mistakes and How to Avoid Them

## ❌ Common Mistakes Table:

| Mistake | Wrong | Correct | Explanation |
|---------|-------|---------|-------------|
| Triple intersection subtraction | $n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C)$ | Add $+ n(A \cap B \cap C)$ at the end | Triple intersection gets removed completely otherwise |
| Wrong "only" calculation | Biology only = $n(B)$ | Biology only = $n(B) - n(B \cap C) - n(B \cap P) + n(B \cap C \cap P)$ | Must subtract ALL overlaps |
| Confusing "exactly" and "at least" | At least 2 = Exactly 2 | At least 2 = Exactly 2 + All 3 | "At least" includes the boundary case |
| Wrong shading for complement | Shade inside region for $(A \cap B)'$ | Shade everything EXCEPT the intersection | Complement means "not in" |
| Missing elements in set-builder | $\{x : x < 5\}$ | $\{x \in \mathbb{N} : x < 5\}$ | Always specify the domain |

---

## ✅ Exam Tips:

1. **Always start from the center** when filling three-set Venn diagrams
2. **Draw diagrams** even when not required — they prevent mistakes
3. **Check your work** by ensuring all regions sum to $n(\xi)$
4. **Read carefully:** "exactly one" ≠ "at least one"
5. **In set-builder notation:** Always specify the domain ($x \in \mathbb{N}$, etc.)
6. **For shading:** Work from inside parentheses outward
7. **Remember the formula** for three sets — write it down before using

---

# 6. Key Formulas Summary

| Formula | Description |
|---------|-------------|
| $n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$ | Three-set cardinality |
| $(A \cup B)' = A' \cap B'$ | De Morgan's First Law |
| $(A \cap B)' = A' \cup B'$ | De Morgan's Second Law |
| $n(\text{exactly one})$ | Sum of single-only regions |
| $n(\text{exactly two})$ | Sum of double-only regions |
| $n(\text{at least two}) = n(\text{exactly two}) + n(\text{all three})$ | At least formula |
| $n(\text{at most two}) = n(A \cup B \cup C) - n(\text{all three})$ | At most formula |

---

*End of Notes - SETS 2 (Unit 6)*
