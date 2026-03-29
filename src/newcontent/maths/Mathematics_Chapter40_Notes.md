# Chapter 40: Handling Data 7 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Detailed Notes

**Unit 10 | Topic: Advanced Probability**

---

## 1. Introduction to Advanced Probability

### 1.1 Overview

Advanced probability builds upon basic probability concepts to handle more complex scenarios involving:
- **Multiple events** occurring in sequence
- **Dependent events** where outcomes affect subsequent probabilities
- **Conditional probability** where the probability of one event depends on another
- **Complex tree diagrams** with multiple branches and stages

> **Key Foundation:** Ensure you understand basic probability rules:
> - $P(A) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$
> - $0 \leq P(A) \leq 1$
> - $P(\text{not } A) = 1 - P(A)$

### 1.2 Why Advanced Probability Matters

Real-world scenarios rarely involve single, independent events. Advanced probability helps us model:
- Medical testing (false positives/negatives)
- Quality control in manufacturing
- Weather prediction sequences
- Insurance risk assessment
- Game strategy and decision making

---

## 2. Complex Tree Diagrams

### 2.1 Structure of Tree Diagrams

A **tree diagram** is a visual representation of all possible outcomes of a sequence of events. Each branch represents a possible outcome, with probabilities written on the branches.

#### Key Components:
- **Branches**: Lines representing each possible outcome
- **Nodes**: Points where branches split (decision points)
- **Probabilities**: Written on each branch (must sum to 1 at each node)
- **Outcomes**: Written at the end of each path

### 2.2 Rules for Tree Diagrams

| Rule | Description |
|------|-------------|
| **Rule 1** | Probabilities on branches from the same node sum to 1 |
| **Rule 2** | Along any path, multiply probabilities to find the combined probability |
| **Rule 3** | For "OR" situations (multiple paths), add the path probabilities |
| **Rule 4** | For "AND" situations (single path), multiply probabilities |

### 2.3 Two-Stage Tree Diagrams

#### Worked Example 1: Balls from a Bag (With Replacement)

**Question:** A bag contains 3 red balls and 5 blue balls. A ball is drawn, its colour noted, and then replaced. A second ball is then drawn. Draw a tree diagram and find:
(a) $P(\text{two red balls})$
(b) $P(\text{one ball of each colour})$
(c) $P(\text{at least one blue ball})$

**Solution:**

**Step 1:** Determine probabilities for each stage.
- $P(\text{Red}) = \frac{3}{8}$
- $P(\text{Blue}) = \frac{5}{8}$

Since the ball is **replaced**, these probabilities remain the same for the second draw.

**Step 2:** Draw the tree diagram.

```
                    ┌── Red (3/8)  → RR: (3/8) × (3/8) = 9/64
                    │
              ┌── Red (3/8) ─┤
              │             │
              │             └── Blue (5/8) → RB: (3/8) × (5/8) = 15/64
              │
Start ────────┤
              │             ┌── Red (3/8)  → BR: (5/8) × (3/8) = 15/64
              │             │
              └── Blue (5/8) ─┤
                            │
                            └── Blue (5/8) → BB: (5/8) × (5/8) = 25/64
```

**(a) $P(\text{two red balls})$**

$$P(RR) = \frac{3}{8} \times \frac{3}{8} = \frac{9}{64}$$

**(b) $P(\text{one ball of each colour})$**

This includes both RB and BR:
$$P(\text{one of each}) = P(RB) + P(BR) = \frac{15}{64} + \frac{15}{64} = \frac{30}{64} = \frac{15}{32}$$

**(c) $P(\text{at least one blue ball})$**

**Method 1:** Add all paths containing at least one blue:
$$P(\text{at least one blue}) = P(RB) + P(BR) + P(BB) = \frac{15}{64} + \frac{15}{64} + \frac{25}{64} = \frac{55}{64}$$

**Method 2:** Use the complement:
$$P(\text{at least one blue}) = 1 - P(\text{no blue}) = 1 - P(RR) = 1 - \frac{9}{64} = \frac{55}{64}$$

> ** Exam Insight:** Method 2 is often quicker for "at least one" questions!

### 2.4 Tree Diagrams Without Replacement

#### Worked Example 2: Balls from a Bag (Without Replacement)

**Question:** A bag contains 3 red balls and 5 blue balls. Two balls are drawn without replacement. Draw a tree diagram and find:
(a) $P(\text{both red})$
(b) $P(\text{different colours})$

**Solution:**

**Step 1:** First draw probabilities:
- $P(\text{Red}_1) = \frac{3}{8}$
- $P(\text{Blue}_1) = \frac{5}{8}$

**Step 2:** Second draw probabilities (dependent on first):

If first was Red: Now 2 red, 5 blue (7 total)
- $P(\text{Red}_2 | \text{Red}_1) = \frac{2}{7}$
- $P(\text{Blue}_2 | \text{Red}_1) = \frac{5}{7}$

If first was Blue: Now 3 red, 4 blue (7 total)
- $P(\text{Red}_2 | \text{Blue}_1) = \frac{3}{7}$
- $P(\text{Blue}_2 | \text{Blue}_1) = \frac{4}{7}$

**Step 3:** Draw tree diagram:

```
                    ┌── Red (2/7)  → RR: (3/8) × (2/7) = 6/56 = 3/28
                    │
              ┌── Red (3/8) ─┤
              │             │
              │             └── Blue (5/7) → RB: (3/8) × (5/7) = 15/56
              │
Start ────────┤
              │             ┌── Red (3/7)  → BR: (5/8) × (3/7) = 15/56
              │             │
              └── Blue (5/8) ─┤
                            │
                            └── Blue (4/7) → BB: (5/8) × (4/7) = 20/56 = 5/14
```

**(a) $P(\text{both red})$**
$$P(RR) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$$

**(b) $P(\text{different colours})$**
$$P(RB) + P(BR) = \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28}$$

> ** Common Mistake:** Forgetting to adjust probabilities after "without replacement" draws!

### 2.5 Three-Stage Tree Diagrams

#### Worked Example 3: Three Draws

**Question:** A box contains 4 white socks and 6 black socks. Three socks are drawn at random without replacement. Find the probability that:
(a) All three are white
(b) Exactly two are white
(c) At least one is black

**Solution:**

**Step 1:** Calculate all path probabilities.

**First draw:**
- $P(W_1) = \frac{4}{10} = \frac{2}{5}$
- $P(B_1) = \frac{6}{10} = \frac{3}{5}$

**Second draw (after $W_1$):**
- $P(W_2|W_1) = \frac{3}{9} = \frac{1}{3}$
- $P(B_2|W_1) = \frac{6}{9} = \frac{2}{3}$

**Second draw (after $B_1$):**
- $P(W_2|B_1) = \frac{4}{9}$
- $P(B_2|B_1) = \frac{5}{9}$

**Third draw (after $W_1, W_2$):**
- $P(W_3|W_1,W_2) = \frac{2}{8} = \frac{1}{4}$
- $P(B_3|W_1,W_2) = \frac{6}{8} = \frac{3}{4}$

**Third draw (after $W_1, B_2$):**
- $P(W_3|W_1,B_2) = \frac{3}{8}$
- $P(B_3|W_1,B_2) = \frac{5}{8}$

**Third draw (after $B_1, W_2$):**
- $P(W_3|B_1,W_2) = \frac{3}{8}$
- $P(B_3|B_1,W_2) = \frac{5}{8}$

**Third draw (after $B_1, B_2$):**
- $P(W_3|B_1,B_2) = \frac{4}{8} = \frac{1}{2}$
- $P(B_3|B_1,B_2) = \frac{4}{8} = \frac{1}{2}$

**(a) $P(\text{all white})$**
$$P(WWW) = \frac{4}{10} \times \frac{3}{9} \times \frac{2}{8} = \frac{24}{720} = \frac{1}{30}$$

**(b) $P(\text{exactly two white})$**

This includes paths: WWB, WBW, BWW

$$P(WWB) = \frac{4}{10} \times \frac{3}{9} \times \frac{6}{8} = \frac{72}{720} = \frac{1}{10}$$
$$P(WBW) = \frac{4}{10} \times \frac{6}{9} \times \frac{3}{8} = \frac{72}{720} = \frac{1}{10}$$
$$P(BWW) = \frac{6}{10} \times \frac{4}{9} \times \frac{3}{8} = \frac{72}{720} = \frac{1}{10}$$

$$P(\text{exactly 2 white}) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$$

**(c) $P(\text{at least one black})$**

Using complement:
$$P(\text{at least one black}) = 1 - P(\text{all white}) = 1 - \frac{1}{30} = \frac{29}{30}$$

> ** Key Insight:** Notice that for exactly two white socks, all three paths have the same probability. This happens when the number of each colour is the same in different orders!

### 2.6 Tree Diagrams for Multiple Categories

#### Worked Example 4: Weather and Decisions

**Question:** The probability it rains on Saturday is 0.3. If it rains on Saturday, the probability it rains on Sunday is 0.6. If it doesn't rain on Saturday, the probability it rains on Sunday is 0.2.

(a) Draw a tree diagram
(b) Find $P(\text{rains on exactly one day})$
(c) Find $P(\text{rains on at least one day})$

**Solution:**

**Step 1:** Define events:
- $R_S$: Rain on Saturday
- $R_S'$: No rain on Saturday
- $R_U$: Rain on Sunday
- $R_U'$: No rain on Sunday

**Step 2:** Identify given probabilities:
- $P(R_S) = 0.3$, so $P(R_S') = 0.7$
- $P(R_U | R_S) = 0.6$, so $P(R_U' | R_S) = 0.4$
- $P(R_U | R_S') = 0.2$, so $P(R_U' | R_S') = 0.8$

**Tree Diagram:**
```
                      ┌── Rain (0.6)    → RR: 0.3 × 0.6 = 0.18
                      │
                ┌── Rain (0.3) ────────┤
                │                      │
                │                      └── No rain (0.4) → RN: 0.3 × 0.4 = 0.12
                │
Saturday ───────┤
                │                      ┌── Rain (0.2)    → NR: 0.7 × 0.2 = 0.14
                │                      │
                └── No rain (0.7) ─────┤
                                       │
                                       └── No rain (0.8) → NN: 0.7 × 0.8 = 0.56
```

**(b) $P(\text{exactly one day})$**
$$P(RN) + P(NR) = 0.12 + 0.14 = 0.26$$

**(c) $P(\text{at least one day})$**
$$P(RR) + P(RN) + P(NR) = 0.18 + 0.12 + 0.14 = 0.44$$

Or: $1 - P(NN) = 1 - 0.56 = 0.44$ ✓

---

## 3. Conditional Probability

### 3.1 Definition

**Conditional probability** is the probability of an event occurring given that another event has already occurred.

$$\boxed{P(A|B) = \frac{P(A \cap B)}{P(B)}}$$

Where:
- $P(A|B)$ = Probability of $A$ given that $B$ has occurred
- $P(A \cap B)$ = Probability of both $A$ AND $B$ occurring
- $P(B)$ = Probability of $B$ (must be non-zero)

### 3.2 Understanding Conditional Probability

The notation $P(A|B)$ means "the probability of $A$ given $B$". This restricts our sample space to only those outcomes where $B$ has occurred.

#### Visual Representation using Venn Diagrams:

```
        Universal Set
    ┌───────────────────────┐
    │                       │
    │    ┌───────┐          │
    │    │   A   │          │
    │    │  ┌────┼────┐     │
    │    │  │A∩B │    │     │
    │    └──┼────┘ B  │     │
    │       └────────┘      │
    │                       │
    └───────────────────────┘
```

When we condition on $B$, we only look inside circle $B$. The probability of $A$ given $B$ is the fraction of $B$ that overlaps with $A$.

### 3.3 Rearranged Formula

From the definition, we can derive:

$$P(A \cap B) = P(B) \times P(A|B)$$

Or equivalently:
$$P(A \cap B) = P(A) \times P(B|A)$$

This is exactly what we use when multiplying along tree diagram branches!

### 3.4 Worked Examples on Conditional Probability

#### Worked Example 5: Basic Conditional Probability

**Question:** In a class of 30 students:
- 18 study Mathematics
- 12 study Physics
- 8 study both Mathematics and Physics

A student is selected at random. Find:
(a) $P(\text{studies Physics} | \text{studies Mathematics})$
(b) $P(\text{studies Mathematics} | \text{studies Physics})$

**Solution:**

Define events:
- $M$: Student studies Mathematics
- $P$: Student studies Physics

Given: $n(M) = 18$, $n(P) = 12$, $n(M \cap P) = 8$, Total = 30

**(a) $P(P|M)$**
$$P(P|M) = \frac{P(P \cap M)}{P(M)} = \frac{8/30}{18/30} = \frac{8}{18} = \frac{4}{9}$$

**Interpretation:** Given that a student studies Mathematics, the probability they also study Physics is $\frac{4}{9}$.

**(b) $P(M|P)$**
$$P(M|P) = \frac{P(M \cap P)}{P(P)} = \frac{8/30}{12/30} = \frac{8}{12} = \frac{2}{3}$$

**Interpretation:** Given that a student studies Physics, the probability they also study Mathematics is $\frac{2}{3}$.

> **Key Point:** $P(A|B) \neq P(B|A)$ in general!

#### Worked Example 6: Conditional Probability from a Table

**Question:** The table shows the results of a medical test:

|  | Disease Present | Disease Absent | Total |
|---|---|---|---|
| **Test Positive** | 95 | 15 | 110 |
| **Test Negative** | 5 | 385 | 390 |
| **Total** | 100 | 400 | 500 |

Find:
(a) $P(\text{Test Positive} | \text{Disease Present})$ — **Sensitivity**
(b) $P(\text{Disease Present} | \text{Test Positive})$ — **Positive Predictive Value**
(c) $P(\text{Disease Absent} | \text{Test Negative})$ — **Negative Predictive Value**

**Solution:**

**(a) Sensitivity**
$$P(\text{Positive} | \text{Disease}) = \frac{95}{100} = 0.95 \text{ or } 95\%$$

**(b) Positive Predictive Value**
$$P(\text{Disease} | \text{Positive}) = \frac{95}{110} = 0.864 \text{ or } 86.4\%$$

**(c) Negative Predictive Value**
$$P(\text{No Disease} | \text{Negative}) = \frac{385}{390} = 0.987 \text{ or } 98.7\%$$

> ** Real-world Insight:** A test can have high sensitivity (95%) but the probability of actually having the disease given a positive result can be much lower (86.4%) due to false positives!

### 3.5 Independent Events and Conditional Probability

Two events $A$ and $B$ are **independent** if the occurrence of one does not affect the probability of the other.

$$\boxed{A \text{ and } B \text{ are independent} \iff P(A|B) = P(A)}$$

This also means:
$$P(A \cap B) = P(A) \times P(B)$$

#### Worked Example 7: Testing for Independence

**Question:** In a school, 40% of students play football, 35% play tennis, and 14% play both. Are playing football and tennis independent events?

**Solution:**

Let $F$ = plays football, $T$ = plays tennis.

$P(F) = 0.40$, $P(T) = 0.35$, $P(F \cap T) = 0.14$

**Check if $P(F \cap T) = P(F) \times P(T)$:**
$$P(F) \times P(T) = 0.40 \times 0.35 = 0.14$$
$$P(F \cap T) = 0.14$$

Since $P(F \cap T) = P(F) \times P(T)$, the events are **independent**.

**Alternative check:**
$$P(F|T) = \frac{P(F \cap T)}{P(T)} = \frac{0.14}{0.35} = 0.40 = P(F)$$

Since $P(F|T) = P(F)$, they are independent. ✓

---

## 4. Advanced Applications

### 4.1 Combining Tree Diagrams and Conditional Probability

#### Worked Example 8: Production Quality Control

**Question:** A factory has two machines producing widgets:
- Machine A produces 60% of widgets, with a 3% defect rate
- Machine B produces 40% of widgets, with a 5% defect rate

A widget is selected at random and found to be defective. What is the probability it came from Machine A?

**Solution:**

**Step 1:** Draw tree diagram.

```
                    ┌── Defective (0.03)  → AD: 0.6 × 0.03 = 0.018
                    │
              ┌── Machine A (0.6) ─┤
              │                    │
              │                    └── Good (0.97)     → AG: 0.6 × 0.97 = 0.582
              │
Start ─────────┤
              │                    ┌── Defective (0.05)  → BD: 0.4 × 0.05 = 0.020
              │                    │
              └── Machine B (0.4) ─┤
                                   │
                                   └── Good (0.95)     → BG: 0.4 × 0.95 = 0.380
```

**Step 2:** Find $P(\text{Defective})$:
$$P(D) = P(AD) + P(BD) = 0.018 + 0.020 = 0.038$$

**Step 3:** Use conditional probability:
$$P(A|D) = \frac{P(A \cap D)}{P(D)} = \frac{0.018}{0.038} = \frac{18}{38} = \frac{9}{19} \approx 0.474$$

**Answer:** Given the widget is defective, there is a $\frac{9}{19}$ (≈47.4%) probability it came from Machine A.

> ** Exam Insight:** This is a classic "reverse conditional probability" problem. Bayes' theorem is used, but you can solve it with tree diagrams!

### 4.2 Worked Example 9: False Positives

**Question:** A disease affects 1% of the population. A test for the disease has:
- 99% sensitivity: $P(\text{Positive} | \text{Disease}) = 0.99$
- 95% specificity: $P(\text{Negative} | \text{No Disease}) = 0.95$

If a randomly selected person tests positive, what is the probability they actually have the disease?

**Solution:**

**Step 1:** Identify all probabilities:
- $P(D) = 0.01$ (disease present)
- $P(D') = 0.99$ (disease absent)
- $P(Pos|D) = 0.99$
- $P(Neg|D') = 0.95$, so $P(Pos|D') = 0.05$

**Step 2:** Draw tree diagram and calculate path probabilities.

| Path | Calculation | Probability |
|------|-------------|-------------|
| $D \to Pos$ | $0.01 \times 0.99$ | 0.0099 |
| $D \to Neg$ | $0.01 \times 0.01$ | 0.0001 |
| $D' \to Pos$ | $0.99 \times 0.05$ | 0.0495 |
| $D' \to Neg$ | $0.99 \times 0.95$ | 0.9405 |

**Step 3:** Find $P(Pos)$:
$$P(Pos) = 0.0099 + 0.0495 = 0.0594$$

**Step 4:** Find $P(D|Pos)$:
$$P(D|Pos) = \frac{P(D \cap Pos)}{P(Pos)} = \frac{0.0099}{0.0594} = \frac{99}{594} = \frac{11}{66} = \frac{1}{6} \approx 0.167$$

**Answer:** Only about 16.7% of positive tests are true positives!

> **🚨 Critical Insight:** Even with high sensitivity and specificity, if a disease is rare, most positive results can be false positives!

### 4.3 Multiple Stage Dependent Events

#### Worked Example 10: Card Selection Without Replacement

**Question:** Three cards are drawn from a standard deck of 52 cards without replacement. Find:
(a) $P(\text{all three are hearts})$
(b) $P(\text{exactly two hearts})$
(c) $P(\text{third card is a heart} | \text{first two are hearts})$

**Solution:**

A standard deck has 52 cards, 13 of which are hearts.

**(a) $P(\text{all three hearts})$**
$$P(HHH) = \frac{13}{52} \times \frac{12}{51} \times \frac{11}{50} = \frac{1716}{132600} = \frac{11}{850}$$

**(b) $P(\text{exactly two hearts})$**

Possible orders: HHN, HNH, NHH (where N = non-heart)

$$P(HHN) = \frac{13}{52} \times \frac{12}{51} \times \frac{39}{50} = \frac{6084}{132600}$$
$$P(HNH) = \frac{13}{52} \times \frac{39}{51} \times \frac{12}{50} = \frac{6084}{132600}$$
$$P(NHH) = \frac{39}{52} \times \frac{13}{51} \times \frac{12}{50} = \frac{6084}{132600}$$

$$P(\text{exactly 2 hearts}) = \frac{6084 \times 3}{132600} = \frac{18252}{132600} = \frac{728}{5304} = \frac{91}{663}$$

**(c) $P(\text{third heart} | \text{first two hearts})$**

After drawing two hearts: 11 hearts remain out of 50 cards.

$$P(\text{third heart} | \text{first two hearts}) = \frac{11}{50}$$

---

## 5. The Multiplication Law

### 5.1 General Multiplication Law

For any two events $A$ and $B$:
$$P(A \cap B) = P(A) \times P(B|A) = P(B) \times P(A|B)$$

### 5.2 For Independent Events

If $A$ and $B$ are independent:
$$P(A \cap B) = P(A) \times P(B)$$

### 5.3 Extended Multiplication

For $n$ events occurring in sequence:
$$P(A_1 \cap A_2 \cap ... \cap A_n) = P(A_1) \times P(A_2|A_1) \times P(A_3|A_1,A_2) \times ...$$

---

## 6. The Addition Law Revisited

### 6.1 General Addition Law

For any two events:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

### 6.2 For Mutually Exclusive Events

If $A$ and $B$ are mutually exclusive (cannot both occur):
$$P(A \cup B) = P(A) + P(B)$$

---

## 7. Common Mistakes and How to Avoid Them

###  Common Mistake 1: Confusing $P(A|B)$ with $P(B|A)$

**Wrong:** Assuming $P(A|B) = P(B|A)$

**Correct:** They are generally different! Use the formula to distinguish them.

###  Common Mistake 2: Forgetting to Adjust Probabilities

**Wrong:** Using $P(A|B) = P(A)$ when events are dependent

**Correct:** Calculate the new conditional probability based on the restricted sample space

###  Common Mistake 3: Multiplying When You Should Add

**Wrong:** $P(A \text{ or } B) = P(A) \times P(B)$

**Correct:** $P(A \text{ or } B) = P(A) + P(B) - P(A \cap B)$

###  Common Mistake 4: Not Using the Complement for "At Least One"

**Wrong:** Calculating every possible path for "at least one" manually

**Correct:** Use $P(\text{at least one}) = 1 - P(\text{none})$

###  Common Mistake 5: Tree Diagram Fractions Not Summing to 1

**Wrong:** Having branches from one node that don't sum to 1

**Correct:** Always check that probabilities at each node sum to 1

###  Common Mistake 6: Ignoring "Without Replacement"

**Wrong:** Using the same probabilities for all branches in a "without replacement" scenario

**Correct:** Adjust probabilities after each draw

---

## 8. Key Formulas Summary

| Formula | Description |
|---------|-------------|
| $P(A) + P(A') = 1$ | Complement rule |
| $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Addition law |
| $P(A \cap B) = P(A) \times P(B|A)$ | Multiplication law |
| $P(A|B) = \frac{P(A \cap B)}{P(B)}$ | Conditional probability definition |
| $P(A \cap B) = P(A) \times P(B)$ | For independent events |
| $P(A|B) = P(A)$ | Independence test |
| $P(\text{at least one}) = 1 - P(\text{none})$ | Complement for "at least one" |

---

## 9. Exam Focus & Strategy

### 9.1 Frequently Tested Question Types

1. **Drawing tree diagrams** for multi-stage experiments
2. **Calculating path probabilities** by multiplying along branches
3. **"At least one" problems** using the complement
4. **Conditional probability calculations** from tables or text
5. **Reverse conditional probability** (Bayes-type problems)
6. **With vs without replacement** scenarios
7. **Testing for independence** using conditional probability
8. **Three-stage tree diagrams**

### 9.2 Typical Problem-Solving Patterns

**Pattern 1: "Find the probability that..."**
- Draw a tree diagram if there are multiple stages
- Identify which path(s) give the desired outcome
- Multiply along paths, add between paths

**Pattern 2: "Given that..." (Conditional probability)**
- Restrict your attention to the given condition
- Use $P(A|B) = \frac{P(A \cap B)}{P(B)}$

**Pattern 3: "Without replacement"**
- Adjust probabilities at each stage
- Show the changing denominators clearly

**Pattern 4: "At least one"**
- Calculate $P(\text{none})$
- Use $P(\text{at least one}) = 1 - P(\text{none})$

### 9.3 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Find** | Calculate and give the answer |
| **Calculate** | Show working and give numerical answer |
| **Draw** | Construct a complete tree diagram |
| **Complete** | Fill in missing probabilities on a diagram |
| **Explain** | Give reasons for your answer |
| **Determine** | Find with justification |
| **Show that** | Prove the given result |

### 9.4 How to Gain Full Marks

1. **Show all working** - Each branch multiplication should be shown
2. **Label tree diagrams clearly** - Include all outcomes and probabilities
3. **Check probabilities sum to 1** - At each node and for all final outcomes
4. **Use correct notation** - $P(A|B)$ for conditional probability
5. **Give answers as fractions** - Unless decimals are requested or more appropriate
6. **Simplify fractions** - Where reasonable
7. **Interpret in context** - When asked to explain

### 9.5 Examiner's Tips

> ** Tip 1:** When drawing tree diagrams, use straight lines and ruler. Label each branch with the outcome AND probability.

> ** Tip 2:** For "at least one" questions, the complement method is almost always faster and less prone to error.

> ** Tip 2:** In conditional probability questions, clearly state what you are conditioning on: "Given that X occurred..."

> ** Tip 4:** Check your answer makes sense - a probability cannot be negative or greater than 1.

> ** Tip 5:** In multi-stage problems without replacement, write down the changing totals at each stage.

> ** Tip 6:** When given a two-way table, highlight the relevant row/column for conditional probability.

---

## 10. Practice Problems

### Problem 1 (Foundation)
A bag contains 4 red counters and 6 blue counters. Two counters are drawn at random with replacement. Draw a tree diagram and find the probability of getting:
(a) Two red counters
(b) At least one blue counter

### Problem 2 (Higher)
In a survey, 45% of people liked tea, 35% liked coffee, and 20% liked both. A person is chosen at random. Given that they like tea, what is the probability they also like coffee?

### Problem 3 (Higher)
A box contains 5 white balls and 3 black balls. Three balls are drawn without replacement. Find the probability that exactly two are white.

### Problem 4 (A* Level)
A test for a disease has 98% sensitivity and 94% specificity. The disease occurs in 2% of the population. If a person tests positive, what is the probability they have the disease?

### Problem 5 (A* Level)
Urn A contains 3 red and 2 blue balls. Urn B contains 1 red and 4 blue balls. A fair coin is tossed. If heads, a ball is drawn from Urn A. If tails, from Urn B. The ball drawn is red. What is the probability the coin showed heads?

---

### Solutions to Practice Problems:

**Problem 1:**
- (a) $P(RR) = \frac{4}{10} \times \frac{4}{10} = \frac{16}{100} = \frac{4}{25}$
- (b) $P(\text{at least one blue}) = 1 - P(RR) = 1 - \frac{4}{25} = \frac{21}{25}$

**Problem 2:**
Let $T$ = likes tea, $C$ = likes coffee
$$P(C|T) = \frac{P(C \cap T)}{P(T)} = \frac{0.20}{0.45} = \frac{20}{45} = \frac{4}{9}$$

**Problem 3:**
$P(\text{exactly 2 white}) = P(WWB) + P(WBW) + P(BWW)$
- $P(WWB) = \frac{5}{8} \times \frac{4}{7} \times \frac{3}{6} = \frac{60}{336}$
- $P(WBW) = \frac{5}{8} \times \frac{3}{7} \times \frac{4}{6} = \frac{60}{336}$
- $P(BWW) = \frac{3}{8} \times \frac{5}{7} \times \frac{4}{6} = \frac{60}{336}$

Total $= \frac{180}{336} = \frac{15}{28}$

**Problem 4:**
- $P(D) = 0.02$, $P(D') = 0.98$
- $P(Pos|D) = 0.98$, $P(Pos|D') = 0.06$
- $P(D \cap Pos) = 0.02 \times 0.98 = 0.0196$
- $P(D' \cap Pos) = 0.98 \times 0.06 = 0.0588$
- $P(Pos) = 0.0196 + 0.0588 = 0.0784$
- $P(D|Pos) = \frac{0.0196}{0.0784} = \frac{196}{784} = \frac{1}{4} = 0.25$

**Problem 5:**
Using tree diagram:
- $P(H \cap R) = 0.5 \times \frac{3}{5} = 0.3$
- $P(T \cap R) = 0.5 \times \frac{1}{5} = 0.1$
- $P(R) = 0.3 + 0.1 = 0.4$
- $P(H|R) = \frac{0.3}{0.4} = \frac{3}{4}$

---

*Notes prepared for Pearson Edexcel IGCSE Mathematics - Handling Data 7*
*© Study Package for A* Students*
