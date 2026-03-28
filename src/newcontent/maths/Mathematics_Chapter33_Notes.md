# Chapter 33: Sets 3 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Detailed Study Notes

---

##  TABLE OF CONTENTS

1. [Basic Probability](#1-basic-probability)
2. [Venn Diagram Probability](#2-venn-diagram-probability)
3. [Conditional Probability](#3-conditional-probability)
4. [Probability Trees](#4-probability-trees)
5. [Key Formulas Summary](#5-key-formulas-summary)
6. [Common Mistakes & Exam Tips](#6-common-mistakes--exam-tips)

---

## 1. BASIC PROBABILITY

### 1.1 Fundamental Concepts

**Probability** is a measure of how likely an event is to occur. It is expressed as a number between 0 and 1.

$$\boxed{0 \leq P(A) \leq 1}$$

| Probability Value | Meaning |
|------------------|---------|
| $P(A) = 0$ | Event A is **impossible** |
| $P(A) = 1$ | Event A is **certain** |
| $P(A) = 0.5$ | Event A is **equally likely** to occur or not |

### 1.2 The Probability Scale

```
Impossible ←─────────────────────────────────────→ Certain
    0      0.25     0.5     0.75      1
    │        │        │        │        │
   0%      25%      50%      75%     100%
           Unlikely  Even   Likely
```

### 1.3 Calculating Basic Probability

For equally likely outcomes:

$$\boxed{P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of possible outcomes}}}$$

**Worked Example 1:**

*A fair six-sided die is rolled. Find the probability of rolling:*
*(a) a 4*
*(b) an even number*
*(c) a number greater than 4*

**Solution:**

Total possible outcomes = {1, 2, 3, 4, 5, 6} = 6 outcomes

**(a)** Rolling a 4:
- Favourable outcome: {4} = 1 outcome
- $P(4) = \frac{1}{6}$

**(b)** Rolling an even number:
- Favourable outcomes: {2, 4, 6} = 3 outcomes
- $P(\text{even}) = \frac{3}{6} = \frac{1}{2}$

**(c)** Rolling a number > 4:
- Favourable outcomes: {5, 6} = 2 outcomes
- $P(\text{> 4}) = \frac{2}{6} = \frac{1}{3}$

---

### 1.4 Sample Space

The **sample space** (denoted by $S$ or $\Omega$) is the set of all possible outcomes.

**Worked Example 2:**

*Two fair coins are tossed. Find the probability of getting:*
*(a) two heads*
*(b) at least one tail*

**Solution:**

Sample space: $S = \{HH, HT, TH, TT\}$ (4 equally likely outcomes)

**(a)** Two heads: $\{HH\}$ = 1 outcome
$$P(HH) = \frac{1}{4}$$

**(b)** At least one tail: $\{HT, TH, TT\}$ = 3 outcomes
$$P(\text{at least one tail}) = \frac{3}{4}$$

> **KEY INSIGHT:** "At least one" means one or more. Alternative method using the complement:
> $$P(\text{at least one tail}) = 1 - P(\text{no tails}) = 1 - P(HH) = 1 - \frac{1}{4} = \frac{3}{4}$$

---

### 1.5 Complementary Events

The **complement** of event $A$, denoted $A'$ or $\bar{A}$, is the event "not A".

$$\boxed{P(A') = 1 - P(A)}$$

Or equivalently:
$$\boxed{P(A) + P(A') = 1}$$

**Worked Example 3:**

*The probability that it rains tomorrow is 0.3. Find the probability that it does not rain.*

**Solution:**
$$P(\text{no rain}) = 1 - P(\text{rain}) = 1 - 0.3 = 0.7$$

> ** EXAM TIP:** The complement rule is extremely useful for "at least one" problems:
> $$P(\text{at least one}) = 1 - P(\text{none})$$

---

### 1.6 Mutually Exclusive Events

Two events are **mutually exclusive** (or disjoint) if they cannot occur at the same time.

**Examples of mutually exclusive events:**
- Rolling a 3 and rolling a 5 on the same die roll
- Getting an A and getting a B on the same test

**Addition Law for Mutually Exclusive Events:**

$$\boxed{P(A \text{ or } B) = P(A) + P(B)}$$

Or in set notation:
$$\boxed{P(A \cup B) = P(A) + P(B)}$$

**Worked Example 4:**

*A fair die is rolled. Find the probability of rolling a 2 or a 5.*

**Solution:**

Events "rolling a 2" and "rolling a 5" are mutually exclusive.

$$P(2 \text{ or } 5) = P(2) + P(5) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$$

---

### 1.7 General Addition Law

For events that are **NOT mutually exclusive**:

$$\boxed{P(A \cup B) = P(A) + P(B) - P(A \cap B)}$$

**Why subtract $P(A \cap B)$?**

When adding $P(A)$ and $P(B)$, the intersection $P(A \cap B)$ is counted twice, so we must subtract it once.

```
        ┌─────────┐
        │    A    │
        │    ┌────┼────┐
        │ ░░░░│////│    │
        │ ░░░░│////│ B  │
        └────┼────┘    │
             └─────────┘
             
░░░ = A only  //// = A ∩ B  (counted twice, so subtract once)
```

**Worked Example 5:**

*A card is drawn from a standard deck. Find the probability that it is:*
*(a) a heart or a king*
*(b) a face card or a heart*

**Solution:**

**(a)** Heart or King:
- $P(\text{heart}) = \frac{13}{52} = \frac{1}{4}$
- $P(\text{king}) = \frac{4}{52} = \frac{1}{13}$
- $P(\text{king of hearts}) = \frac{1}{52}$ (intersection)

$$P(\text{heart or king}) = \frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}$$

**(b)** Face card or Heart:
- $P(\text{face card}) = \frac{12}{52} = \frac{3}{13}$ (J, Q, K of each suit)
- $P(\text{heart}) = \frac{13}{52} = \frac{1}{4}$
- $P(\text{face card and heart}) = \frac{3}{52}$ (J♥, Q♥, K♥)

$$P(\text{face or heart}) = \frac{12}{52} + \frac{13}{52} - \frac{3}{52} = \frac{22}{52} = \frac{11}{26}$$

---

### 1.8 Expected Frequency

**Expected frequency** = Probability × Number of trials

$$\boxed{\text{Expected frequency} = P(\text{event}) \times n}$$

**Worked Example 6:**

*A biased coin has P(heads) = 0.7. If the coin is tossed 50 times, how many heads would you expect?*

**Solution:**
$$\text{Expected heads} = 0.7 \times 50 = 35$$

---

## 2. VENN DIAGRAM PROBABILITY

### 2.1 Understanding Venn Diagrams

A **Venn diagram** uses overlapping circles to show relationships between sets.

```
           Universal Set (U or ξ)
    ┌─────────────────────────────┐
    │                             │
    │    ┌───────┐   ┌───────┐    │
    │    │   A   │   │   B   │    │
    │    │  ┌────┼───┼────┐  │    │
    │    │  │////│   │\\\\│  │    │
    │    │  │////│   │\\\\│  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │         ┌───────┐           │
    │         │outside│           │
    │         └───────┘           │
    └─────────────────────────────┘
    
//// = A ∩ B (intersection - elements in both A and B)
\\\\ = elements in B only
outside = elements in neither A nor B
```

### 2.2 Key Set Notation

| Symbol | Meaning | Example |
|--------|---------|---------|
| $A \cap B$ | Intersection: elements in BOTH A AND B | $A \cap B = \{x : x \in A \text{ and } x \in B\}$ |
| $A \cup B$ | Union: elements in A OR B or both | $A \cup B = \{x : x \in A \text{ or } x \in B\}$ |
| $A'$ | Complement: elements NOT in A | $A' = \{x : x \notin A\}$ |
| $n(A)$ | Number of elements in set A | $n(A) = 5$ means A has 5 elements |
| $\xi$ or $U$ | Universal set | Contains all possible elements |

### 2.3 Reading Probabilities from Venn Diagrams

**Worked Example 7:**

*The Venn diagram shows information about 40 students. Set M represents students who study Music, and set D represents students who study Drama.*

```
        ξ = 40 students
    ┌─────────────────────────────┐
    │            12               │
    │    ┌───────┐   ┌───────┐    │
    │    │   M   │   │   D   │    │
    │ 8  │  ┌────┼───┼────┐  │ 6  │
    │    │  │ 10 │   │ 4  │  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │                             │
    └─────────────────────────────┘
```

*Find:*
*(a) P(student studies Music)*
*(b) P(student studies both Music and Drama)*
*(c) P(student studies Drama only)*
*(d) P(student studies neither subject)*

**Solution:**

First, verify total = 8 + 10 + 4 + 6 + 12 = 40 ✓

**(a)** $P(M) = \frac{8 + 10}{40} = \frac{18}{40} = \frac{9}{20}$

**(b)** $P(M \cap D) = \frac{10}{40} = \frac{1}{4}$

**(c)** $P(\text{Drama only}) = \frac{4}{40} = \frac{1}{10}$

**(d)** $P(\text{neither}) = \frac{12}{40} = \frac{3}{10}$

---

### 2.4 Completing Venn Diagrams from Data

**Worked Example 8:**

*In a class of 30 students:*
- *18 play football (F)*
- *15 play basketball (B)*
- *7 play both sports*
- *Some students play neither sport*

*(a) Complete the Venn diagram*
*(b) Find the probability that a randomly selected student plays exactly one sport*

**Solution:**

**(a)** Completing the Venn diagram:

Start with the intersection: $n(F \cap B) = 7$

Then find "only football": $n(F \text{ only}) = 18 - 7 = 11$

Then find "only basketball": $n(B \text{ only}) = 15 - 7 = 8$

Then find "neither": $n(\text{neither}) = 30 - (11 + 7 + 8) = 30 - 26 = 4$

```
        ξ = 30
    ┌─────────────────────────────┐
    │            4                │
    │    ┌───────┐   ┌───────┐    │
    │    │   F   │   │   B   │    │
    │ 11 │  ┌────┼───┼────┐  │ 8  │
    │    │  │ 7  │   │    │  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │                             │
    └─────────────────────────────┘
```

**(b)** $P(\text{exactly one sport}) = \frac{11 + 8}{30} = \frac{19}{30}$

> **METHOD:** Always work from inside out when completing Venn diagrams:
> 1. Fill in the intersection first
> 2. Calculate "only" regions by subtraction
> 3. Calculate the outside region last

---

### 2.5 Three-Set Venn Diagrams

**Worked Example 9:**

*In a survey of 100 people about pets:*
- *45 have dogs (D)*
- *38 have cats (C)*
- *30 have fish (F)*
- *18 have dogs and cats*
- *12 have dogs and fish*
- *10 have cats and fish*
- *6 have all three types of pets*

*Find the probability that a randomly selected person has:*
*(a) only dogs*
*(b) exactly one type of pet*
*(c) at least one pet*

**Solution:**

Step 1: Complete the Venn diagram systematically

- All three (center): 6
- Dogs and cats only: $18 - 6 = 12$
- Dogs and fish only: $12 - 6 = 6$
- Cats and fish only: $10 - 6 = 4$
- Dogs only: $45 - (12 + 6 + 6) = 21$
- Cats only: $38 - (12 + 6 + 4) = 16$
- Fish only: $30 - (6 + 6 + 4) = 14$
- None: $100 - (21 + 12 + 6 + 16 + 6 + 4 + 14) = 100 - 79 = 21$

```
              ξ = 100
    ┌───────────────────────────────────┐
    │              21                   │
    │    ┌─────────┐   ┌─────────┐      │
    │    │    D    │   │    C    │      │
    │    │   21 ┌──┼───┼──┐ 16   │      │
    │    │      │12│   │  │      │      │
    │    │   ┌──┼──┼───┼──┼──┐   │      │
    │    │   │  │6 │   │4 │  │   │      │
    │    │   │  └──┼───┼──┘  │   │      │
    │    │ 6│     │   │     │14 │       │
    │    │  └─────┼───┼─────┘   │       │
    │    │        F   │         │       │
    │    └───────────┴─────────┘        │
    │                                   │
    └───────────────────────────────────┘
```

**(a)** $P(\text{only dogs}) = \frac{21}{100} = 0.21$

**(b)** $P(\text{exactly one pet}) = \frac{21 + 16 + 14}{100} = \frac{51}{100} = 0.51$

**(c)** $P(\text{at least one pet}) = \frac{79}{100} = 0.79$
Or using complement: $P(\text{at least one}) = 1 - P(\text{none}) = 1 - \frac{21}{100} = \frac{79}{100}$

---

### 2.6 Probability Rules Using Venn Diagrams

From a Venn diagram, we can derive:

**Union:**
$$P(A \cup B) = P(A \text{ only}) + P(B \text{ only}) + P(A \cap B)$$

**Or using the formula:**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Complement of Union (Neither):**
$$P(A' \cap B') = P(\text{neither } A \text{ nor } B)$$

**Worked Example 10:**

*Given:*
- *$P(A) = 0.6$*
- *$P(B) = 0.5$*
- *$P(A \cap B) = 0.3$*

*Find:*
*(a) $P(A \cup B)$*
*(b) $P(A \text{ only})$*
*(c) $P(A' \cap B')$*

**Solution:**

**(a)** $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.6 + 0.5 - 0.3 = 0.8$

**(b)** $P(A \text{ only}) = P(A) - P(A \cap B) = 0.6 - 0.3 = 0.3$

**(c)** $P(A' \cap B') = 1 - P(A \cup B) = 1 - 0.8 = 0.2$

---

## 3. CONDITIONAL PROBABILITY

### 3.1 Definition

**Conditional probability** is the probability of an event occurring **given that** another event has already occurred.

The notation $P(A|B)$ means "the probability of A given B has occurred."

$$\boxed{P(A|B) = \frac{P(A \cap B)}{P(B)}}$$

**Important:** This formula only applies when $P(B) \neq 0$

### 3.2 Understanding the Formula

The conditional probability formula makes intuitive sense:

- Originally, the sample space had total probability $= 1$
- After B occurs, the "new sample space" is just the outcomes in B
- Within this new sample space, we find the proportion that is also in A

```
    Original Sample Space        After B occurs
    
    ┌─────────────────┐         ┌─────────────────┐
    │        ┌────┐   │         │                 │
    │   A    │////│ B │  ───►   │  Only B matters │
    │        │////│   │         │   ┌────────┐    │
    │        └────┘   │         │   │ A∩B////│    │
    │                 │         │   └────────┘    │
    └─────────────────┘         └─────────────────┘
    
    P(A|B) = P(A∩B)/P(B)
```

### 3.3 Worked Examples

**Worked Example 11:**

*A fair die is rolled.*
- *A = "even number" = {2, 4, 6}*
- *B = "number > 3" = {4, 5, 6}*

*Find:*
*(a) $P(A|B)$*
*(b) $P(B|A)$*

**Solution:**

**(a)** $P(A|B) = \frac{P(A \cap B)}{P(B)}$

First find $A \cap B$: Numbers that are both even AND > 3 = {4, 6}

$P(A \cap B) = \frac{2}{6} = \frac{1}{3}$

$P(B) = \frac{3}{6} = \frac{1}{2}$

$$P(A|B) = \frac{\frac{1}{3}}{\frac{1}{2}} = \frac{1}{3} \times \frac{2}{1} = \frac{2}{3}$$

**Check:** Given we rolled a number > 3 (i.e., 4, 5, or 6), what's the probability it's even? Out of {4, 5, 6}, two are even (4, 6), so $\frac{2}{3}$. ✓

**(b)** $P(B|A) = \frac{P(A \cap B)}{P(A)}$

$P(A \cap B) = \frac{1}{3}$ (as before)

$P(A) = \frac{3}{6} = \frac{1}{2}$

$$P(B|A) = \frac{\frac{1}{3}}{\frac{1}{2}} = \frac{1}{3} \times \frac{2}{1} = \frac{2}{3}$$

**Check:** Given we rolled an even number (i.e., 2, 4, or 6), what's the probability it's > 3? Out of {2, 4, 6}, two are > 3 (4, 6), so $\frac{2}{3}$. ✓

---

**Worked Example 12:**

*In a class of 40 students:*
- *25 study French*
- *18 study German*
- *10 study both French and German*

*A student is selected at random.*
*(a) Find the probability that the student studies French, given that they study German.*
*(b) Find the probability that the student studies German, given that they study French.*

**Solution:**

Let $F$ = students studying French, $G$ = students studying German.

Given: $n(F) = 25$, $n(G) = 18$, $n(F \cap G) = 10$, Total = 40

**(a)** $P(F|G) = \frac{P(F \cap G)}{P(G)}$

$P(F \cap G) = \frac{10}{40} = \frac{1}{4}$

$P(G) = \frac{18}{40} = \frac{9}{20}$

$$P(F|G) = \frac{\frac{10}{40}}{\frac{18}{40}} = \frac{10}{18} = \frac{5}{9}$$

**(b)** $P(G|F) = \frac{P(F \cap G)}{P(F)}$

$P(F) = \frac{25}{40} = \frac{5}{8}$

$$P(G|F) = \frac{\frac{10}{40}}{\frac{25}{40}} = \frac{10}{25} = \frac{2}{5}$$

> ** KEY OBSERVATION:** $P(F|G) \neq P(G|F)$ in general! Conditional probability is NOT symmetric.

---

### 3.4 Conditional Probability from Venn Diagrams

**Worked Example 13:**

*The Venn diagram shows information about a group of 60 people and whether they own a car (C) or a bicycle (B).*

```
        ξ = 60
    ┌─────────────────────────────┐
    │            15               │
    │    ┌───────┐   ┌───────┐    │
    │    │   C   │   │   B   │    │
    │ 25 │  ┌────┼───┼────┐  │ 5  │
    │    │  │ 12 │   │ 3  │  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │                             │
    └─────────────────────────────┘
```

*Find:*
*(a) $P(B|C)$*
*(b) $P(C|B')$*

**Solution:**

**(a)** $P(B|C) = \frac{P(B \cap C)}{P(C)}$

$P(B \cap C) = \frac{12}{60}$

$P(C) = \frac{25 + 12}{60} = \frac{37}{60}$

$$P(B|C) = \frac{12}{37}$$

**(b)** $P(C|B') = \frac{P(C \cap B')}{P(B')}$

$C \cap B'$ = people with car only = 25

$P(C \cap B') = \frac{25}{60}$

$B'$ = people without bicycle = $15 + 25 = 40$

$P(B') = \frac{40}{60} = \frac{2}{3}$

$$P(C|B') = \frac{\frac{25}{60}}{\frac{40}{60}} = \frac{25}{40} = \frac{5}{8}$$

---

### 3.5 Conditional Probability Formula Variations

The conditional probability formula can be rearranged:

**Multiplication Rule:**

$$\boxed{P(A \cap B) = P(B) \times P(A|B)}$$

Or equivalently:
$$\boxed{P(A \cap B) = P(A) \times P(B|A)}$$

**Worked Example 14:**

*Given $P(A) = 0.4$, $P(B|A) = 0.6$, find $P(A \cap B)$.*

**Solution:**

$$P(A \cap B) = P(A) \times P(B|A) = 0.4 \times 0.6 = 0.24$$

---

### 3.6 Tree Diagrams for Conditional Probability

**Worked Example 15:**

*A bag contains 5 red balls and 3 blue balls. Two balls are drawn at random without replacement.*

*Find the probability that:*
*(a) both balls are red*
*(b) the second ball is blue*
*(c) exactly one ball is blue*

**Solution:**

First, construct a probability tree:

```
                    First Draw        Second Draw        Outcome
                    ──────────        ──────────        ───────
                    
                         ┌── R (4/7) ──→  RR = (5/8)×(4/7) = 20/56
                    R ───┤
                   (5/8) └── B (3/7) ──→  RB = (5/8)×(3/7) = 15/56
                        
START ──────┤
                        ┌── R (5/7) ──→  BR = (3/8)×(5/7) = 15/56
                    B ───┤
                   (3/8) └── B (2/7) ──→  BB = (3/8)×(2/7) = 6/56
```

**(a)** $P(\text{both red}) = P(RR) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$

**(b)** $P(\text{second ball is blue}) = P(RB) + P(BB) = \frac{15}{56} + \frac{6}{56} = \frac{21}{56} = \frac{3}{8}$

> **KEY INSIGHT:** When drawing randomly without replacement, $P(\text{second ball is blue}) = P(\text{first ball is blue}) = \frac{3}{8}$

**(c)** $P(\text{exactly one blue}) = P(RB) + P(BR) = \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28}$

---

### 3.7 Independent Events

Two events are **independent** if the occurrence of one does not affect the probability of the other.

**Definition:**
$$\boxed{P(A|B) = P(A)}$$

**Multiplication Rule for Independent Events:**
$$\boxed{P(A \cap B) = P(A) \times P(B)}$$

**Worked Example 16:**

*A fair coin is tossed and a fair die is rolled.*
*(a) Find the probability of getting heads and a 6.*
*(b) Are the events "getting heads" and "rolling a 6" independent?*

**Solution:**

**(a)** $P(H \text{ and } 6) = P(H) \times P(6) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$

**(b)** Yes, these are independent events because the outcome of the coin toss does not affect the die roll.

> ** EXAM TIP:** "And" in probability often means multiply (for independent events). "Or" often means add (for mutually exclusive events).

---

**Worked Example 17:**

*Given $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \cap B) = 0.2$:*
*(a) Are A and B independent?*
*(b) Find $P(A|B)$*

**Solution:**

**(a)** If independent: $P(A \cap B) = P(A) \times P(B) = 0.5 \times 0.4 = 0.2$

Since $P(A \cap B) = 0.2$, A and B ARE independent.

**(b)** $P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.2}{0.4} = 0.5 = P(A)$ ✓ (confirms independence)

---

## 4. PROBABILITY TREES

### 4.1 When to Use Probability Trees

Probability trees are useful for:
- Sequential events
- Conditional probability problems
- "With replacement" vs "without replacement" problems

### 4.2 Rules for Probability Trees

1. **Sum of branches from each node = 1**
2. **Multiply along branches** (for "and" situations)
3. **Add across outcomes** (for "or" situations)

### 4.3 With Replacement vs Without Replacement

**With Replacement:** Probabilities stay the same on each draw

**Without Replacement:** Probabilities change after each draw

**Worked Example 18:**

*A box contains 4 white balls and 6 black balls. Two balls are drawn.*

*(a) With replacement, find $P(\text{both same colour})$*
*(b) Without replacement, find $P(\text{both same colour})$*

**Solution:**

**(a) With Replacement:**

$P(W) = \frac{4}{10} = 0.4$, $P(B) = \frac{6}{10} = 0.6$ (same for both draws)

$P(\text{same colour}) = P(WW) + P(BB)$

$= (0.4 \times 0.4) + (0.6 \times 0.6)$

$= 0.16 + 0.36 = 0.52$

**(b) Without Replacement:**

First draw: $P(W) = \frac{4}{10}$, $P(B) = \frac{6}{10}$

If first was white: $P(W_2) = \frac{3}{9} = \frac{1}{3}$ (one less white ball)

If first was black: $P(B_2) = \frac{5}{9}$ (one less black ball)

$P(WW) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}$

$P(BB) = \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} = \frac{1}{3}$

$P(\text{same colour}) = \frac{2}{15} + \frac{1}{3} = \frac{2}{15} + \frac{5}{15} = \frac{7}{15}$

---

## 5. KEY FORMULAS SUMMARY

### 5.1 Essential Formulas

| Formula | Description |
|---------|-------------|
| $P(A) = \frac{\text{favourable outcomes}}{\text{total outcomes}}$ | Basic probability |
| $P(A') = 1 - P(A)$ | Complement rule |
| $P(A \cup B) = P(A) + P(B)$ | Union (mutually exclusive) |
| $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Union (general) |
| $P(A \cap B) = P(A) \times P(B)$ | Intersection (independent) |
| $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | Conditional probability |
| $P(A \cap B) = P(A) \times P(B \mid A)$ | Multiplication rule |

### 5.2 Venn Diagram Regions

| Region | Meaning |
|--------|---------|
| $n(A \text{ only})$ | $n(A) - n(A \cap B)$ |
| $n(B \text{ only})$ | $n(B) - n(A \cap B)$ |
| $n(A \cup B)$ | $n(A) + n(B) - n(A \cap B)$ |
| $n(\text{neither})$ | $n(\xi) - n(A \cup B)$ |

---

## 6. COMMON MISTAKES & EXAM TIPS

###  Common Mistakes

| Mistake | Correct Approach |
|---------|------------------|
| $P(A \mid B) = P(B \mid A)$ | These are NOT equal in general! |
| $P(A \cap B) = P(A) \times P(B)$ | Only true for independent events |
| $P(A \cup B) = P(A) + P(B)$ | Only true for mutually exclusive events |
| Forgetting to subtract intersection | Use $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Confusing $A \cap B$ with $A \cup B$ | $\cap$ = AND (intersection), $\cup$ = OR (union) |
| Wrong conditional probability denominator | $P(A \mid B)$: denominator is $P(B)$, not $P(A)$ |

### 📝 Exam Tips

1. **Read carefully:** "Given that" or "if" usually indicates conditional probability
2. **Check independence:** If events don't affect each other, use multiplication rule
3. **Draw diagrams:** Venn diagrams and tree diagrams help visualize problems
4. **Verify totals:** In Venn diagrams, all regions should sum to the total
5. **Use complements:** For "at least one" problems, use $P(\text{at least one}) = 1 - P(\text{none})$
6. **Simplify fractions:** Always give answers in simplest form unless asked otherwise
7. **Check reasonableness:** Probabilities must be between 0 and 1

### 🎯 Command Words

| Command Word | What to Do |
|--------------|------------|
| **Find** | Calculate the value |
| **Calculate** | Show working and give answer |
| **Show that** | Verify a given result |
| **Explain** | Give a reason or justification |
| **Complete** | Fill in missing values |
| **Determine** | Find with justification |

---

## EXAM FOCUS & STRATEGY

### 📊 Frequently Tested Question Types

1. **Basic probability calculations** with dice, cards, coins
2. **Venn diagram completion** from given information
3. **Conditional probability** from Venn diagrams or tables
4. **Tree diagrams** for sequential events
5. **Independent events** verification
6. **Expected frequency** calculations

### 🔍 Typical Problem-Solving Patterns

| Problem Type | Approach |
|--------------|----------|
| Two events with overlap | Use Venn diagram + addition rule |
| Sequential draws | Use tree diagram |
| "Given that..." | Use conditional probability formula |
| "At least one..." | Use complement rule |
| Independent events check | Verify $P(A \cap B) = P(A) \times P(B)$ |

###  How to Gain Full Marks

1. **Show all working** - marks are awarded for method
2. **State formulas used** - shows understanding
3. **Draw diagrams clearly** - labeled Venn/tree diagrams
4. **Give final answers** in the required format (fraction/decimal/percentage)
5. **Check arithmetic** - silly calculation errors cost marks
6. **Use correct notation** - $P(A)$, $\cap$, $\cup$, etc.

---

*These notes are prepared for Pearson Edexcel IGCSE Mathematics preparation.*
*All formulas and methods align with the official syllabus requirements.*
