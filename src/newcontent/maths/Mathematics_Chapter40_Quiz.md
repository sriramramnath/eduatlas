# Chapter 40: Handling Data 7 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Practice Questions

**Unit 10 | Topic: Advanced Probability (Tree Diagrams Complex & Conditional Probability)**

---

## Section A: Multiple Choice Questions (10 Questions)

**Each question is worth 1 mark. Select the correct answer.**

---

### Question 1

A bag contains 4 red balls and 6 blue balls. Two balls are drawn with replacement. What is the probability of drawing two red balls?

A) $\frac{4}{25}$

B) $\frac{2}{5}$

C) $\frac{16}{100}$

D) $\frac{8}{100}$

**Answer: A**

**Explanation:**
$$P(RR) = P(R_1) \times P(R_2) = \frac{4}{10} \times \frac{4}{10} = \frac{16}{100} = \frac{4}{25}$$

---

### Question 2

Two events A and B are independent. If $P(A) = 0.3$ and $P(B) = 0.4$, what is $P(A \cap B)$?

A) 0.7

B) 0.12

C) 0.1

D) 0.58

**Answer: B**

**Explanation:**
For independent events: $P(A \cap B) = P(A) \times P(B) = 0.3 \times 0.4 = 0.12$

---

### Question 3

A fair coin is tossed three times. What is the probability of getting at least one head?

A) $\frac{1}{8}$

B) $\frac{3}{8}$

C) $\frac{7}{8}$

D) $\frac{1}{2}$

**Answer: C**

**Explanation:**
$$P(\text{at least one head}) = 1 - P(\text{no heads}) = 1 - P(TTT) = 1 - \frac{1}{8} = \frac{7}{8}$$

---

### Question 4

In a class, $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \cap B) = 0.3$. What is $P(A|B)$?

A) 0.5

B) 0.6

C) 0.3

D) 0.18

**Answer: B**

**Explanation:**
$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.3}{0.5} = 0.6$$

---

### Question 5

A box contains 5 white and 3 black balls. Two balls are drawn without replacement. What is the probability the second ball is white given the first was white?

A) $\frac{5}{8}$

B) $\frac{4}{7}$

C) $\frac{1}{2}$

D) $\frac{5}{7}$

**Answer: B**

**Explanation:**
After drawing one white ball: 4 white and 3 black remain (7 total)
$$P(W_2|W_1) = \frac{4}{7}$$

---

### Question 6

Which statement about independent events is **TRUE**?

A) They cannot both occur

B) $P(A|B) = P(B|A)$

C) $P(A|B) = P(A)$

D) $P(A \cap B) = 0$

**Answer: C**

**Explanation:**
For independent events, the occurrence of B does not affect the probability of A, so $P(A|B) = P(A)$.

---

### Question 7

A bag has 3 red, 4 green, and 5 blue counters. Two counters are drawn with replacement. What is the probability they are different colours?

A) $\frac{47}{72}$

B) $\frac{25}{72}$

C) $\frac{35}{48}$

D) $\frac{13}{36}$

**Answer: A**

**Explanation:**
$$P(\text{different}) = 1 - P(\text{same})$$
$$P(RR) = \frac{3}{12} \times \frac{3}{12} = \frac{9}{144}$$
$$P(GG) = \frac{4}{12} \times \frac{4}{12} = \frac{16}{144}$$
$$P(BB) = \frac{5}{12} \times \frac{5}{12} = \frac{25}{144}$$
$$P(\text{same}) = \frac{50}{144} = \frac{25}{72}$$
$$P(\text{different}) = 1 - \frac{25}{72} = \frac{47}{72}$$

---

### Question 8

In a two-way table, 30 students study Mathematics, 20 study Physics, and 10 study both. What is $P(\text{Maths}|\text{Physics})$?

A) $\frac{1}{3}$

B) $\frac{1}{2}$

C) $\frac{2}{3}$

D) $\frac{1}{4}$

**Answer: B**

**Explanation:**
$$P(\text{Maths}|\text{Physics}) = \frac{n(\text{Maths} \cap \text{Physics})}{n(\text{Physics})} = \frac{10}{20} = \frac{1}{2}$$

---

### Question 9

A test has 95% sensitivity and 90% specificity. Disease prevalence is 1%. A person tests positive. The probability they have the disease is closest to:

A) 95%

B) 90%

C) 9%

D) 50%

**Answer: C**

**Explanation:**
Using tree diagram:
- $P(D \cap Pos) = 0.01 \times 0.95 = 0.0095$
- $P(D' \cap Pos) = 0.99 \times 0.10 = 0.099$
- $P(Pos) = 0.0095 + 0.099 = 0.1085$
- $P(D|Pos) = \frac{0.0095}{0.1085} \approx 0.088 \approx 8.8\% \approx 9\%$

---

### Question 10

For two events A and B, $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \cup B) = 0.7$. What is $P(A|B)$?

A) 0.2

B) 0.4

C) 0.5

D) 0.8

**Answer: B**

**Explanation:**
$$P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0.4 + 0.5 - 0.7 = 0.2$$
$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.2}{0.5} = 0.4$$

---

## Section B: True/False Questions (10 Questions)

**Each question is worth 1 mark. State whether the statement is TRUE or FALSE. If FALSE, provide the correction.**

---

### Question 11

**Statement:** If $P(A|B) = 0.3$ and $P(B) = 0.5$, then $P(A \cap B) = 0.15$.

**Answer: TRUE**

**Explanation:**
$P(A \cap B) = P(B) \times P(A|B) = 0.5 \times 0.3 = 0.15$ ✓

---

### Question 12

**Statement:** $P(A|B) = P(B|A)$ for all events A and B.

**Answer: FALSE**

**Correction:** $P(A|B)$ and $P(B|A)$ are generally different. They are only equal in special cases.

**Explanation:**
$P(A|B) = \frac{P(A \cap B)}{P(B)}$ while $P(B|A) = \frac{P(A \cap B)}{P(A)}$. These are only equal if $P(A) = P(B)$.

---

### Question 13

**Statement:** In a tree diagram, the probabilities on all branches from the same node must sum to 1.

**Answer: TRUE**

**Explanation:**
This is a fundamental rule of tree diagrams. All possible outcomes from any point must have total probability 1.

---

### Question 14

**Statement:** If two events are mutually exclusive, they must be independent.

**Answer: FALSE**

**Correction:** If two events are mutually exclusive, they are NOT independent (unless one has probability 0).

**Explanation:**
Mutually exclusive events cannot both occur, so $P(A \cap B) = 0$. For independent events, $P(A \cap B) = P(A) \times P(B) > 0$ (unless $P(A) = 0$ or $P(B) = 0$).

---

### Question 15

**Statement:** When drawing without replacement, the probabilities on the second branch of a tree diagram depend on the outcome of the first branch.

**Answer: TRUE**

**Explanation:**
Without replacement changes the composition of what remains, so probabilities are conditional on what happened first.

---

### Question 16

**Statement:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ is only true for independent events.

**Answer: FALSE**

**Correction:** This addition law is true for ALL events A and B, not just independent ones.

**Explanation:**
The addition law $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ is a general formula that applies to any two events.

---

### Question 17

**Statement:** If A and B are independent, then $P(A|B) = P(A)$.

**Answer: TRUE**

**Explanation:**
This is the definition of independence: the occurrence of B does not affect the probability of A.

---

### Question 18

**Statement:** The probability of "at least one" can always be found by subtracting the probability of "none" from 1.

**Answer: TRUE**

**Explanation:**
$P(\text{at least one}) = 1 - P(\text{none})$ is always valid since "at least one" and "none" are complementary events.

---

### Question 19

**Statement:** In a tree diagram for three coin flips, there are 6 possible outcomes.

**Answer: FALSE**

**Correction:** There are 8 possible outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.

**Explanation:**
For 3 flips with 2 outcomes each, total paths = $2^3 = 8$.

---

### Question 20

**Statement:** For conditional probability $P(A|B)$, the denominator $P(B)$ must be greater than 0.

**Answer: TRUE**

**Explanation:**
If $P(B) = 0$, event B cannot occur, so it makes no sense to ask about the probability of A given B.

---

## Section C: Structured Questions

---

### Question 21 [3 marks]

A bag contains 5 red marbles and 3 blue marbles. Two marbles are drawn at random **without replacement**.

**(a)** Draw a tree diagram to show all possible outcomes. [1]

**(b)** Find the probability that both marbles are the same colour. [2]

---

**Mark Scheme Solution:**

**(a) Tree Diagram [1 mark]**

```
                    ┌── Red (4/7)    → RR: (5/8) × (4/7)
                    │
              ┌── Red (5/8) ─────┤
              │                  │
              │                  └── Blue (3/7)  → RB: (5/8) × (3/7)
              │
Start ─────────┤
              │                  ┌── Red (5/7)    → BR: (3/8) × (5/7)
              │                  │
              └── Blue (3/8) ────┤
                                 │
                                 └── Blue (2/7)  → BB: (3/8) × (2/7)
```

**M1:** Correct first stage probabilities (5/8, 3/8) [1 mark]

**(b) Both same colour [2 marks]**

$$P(RR) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56}$$

**M1:** Correct calculation of at least one path probability [1 mark]

$$P(BB) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56}$$

$$P(\text{same colour}) = P(RR) + P(BB) = \frac{20}{56} + \frac{6}{56} = \frac{26}{56} = \frac{13}{28}$$

**A1:** Correct final answer $\frac{13}{28}$ or equivalent [1 mark]

---

### Question 22 [4 marks]

In a school, 60% of students study French, 45% study German, and 25% study both languages.

**(a)** A student is selected at random. Find the probability that they study at least one of these languages. [2]

**(b)** Given that a student studies French, find the probability that they also study German. [2]

---

**Mark Scheme Solution:**

**(a) At least one language [2 marks]**

$$P(F \cup G) = P(F) + P(G) - P(F \cap G)$$

**M1:** Use of addition formula [1 mark]

$$P(F \cup G) = 0.60 + 0.45 - 0.25 = 0.80$$

**A1:** Correct answer 0.8 or 80% [1 mark]

**(b) Probability of German given French [2 marks]**

$$P(G|F) = \frac{P(F \cap G)}{P(F)}$$

**M1:** Use of conditional probability formula [1 mark]

$$P(G|F) = \frac{0.25}{0.60} = \frac{25}{60} = \frac{5}{12}$$

**A1:** Correct answer $\frac{5}{12}$ or 0.417 (to 3 sf) [1 mark]

---

### Question 23 [5 marks]

A factory has two machines producing components:
- Machine A produces 70% of components, with 4% defective
- Machine B produces 30% of components, with 8% defective

A component is selected at random and found to be defective.

Find the probability that it was produced by Machine A.

---

**Mark Scheme Solution:**

**Step 1:** Draw tree diagram and calculate probabilities [2 marks]

| Path | Calculation | Probability |
|------|-------------|-------------|
| Machine A → Defective | $0.70 \times 0.04$ | 0.028 |
| Machine A → Good | $0.70 \times 0.96$ | 0.672 |
| Machine B → Defective | $0.30 \times 0.08$ | 0.024 |
| Machine B → Good | $0.30 \times 0.92$ | 0.276 |

**M1:** At least one correct path calculation [1 mark]
**M1:** All path probabilities correct [1 mark]

**Step 2:** Find $P(\text{Defective})$ [1 mark]

$$P(D) = 0.028 + 0.024 = 0.052$$

**M1:** Total probability of defective [1 mark]

**Step 3:** Find conditional probability [2 marks]

$$P(A|D) = \frac{P(A \cap D)}{P(D)} = \frac{0.028}{0.052}$$

**M1:** Use of conditional probability formula [1 mark]

$$P(A|D) = \frac{28}{52} = \frac{7}{13} \approx 0.538$$

**A1:** Correct answer $\frac{7}{13}$ or 0.538 (to 3 sf) [1 mark]

---

### Question 24 [6 marks]

A box contains 4 white balls and 2 black balls. Three balls are drawn at random **without replacement**.

**(a)** Find the probability that all three balls are white. [2]

**(b)** Find the probability that exactly two balls are white. [3]

**(c)** Given that the first ball drawn is white, find the probability that all three balls are white. [1]

---

**Mark Scheme Solution:**

**(a) All three white [2 marks]**

$$P(WWW) = \frac{4}{6} \times \frac{3}{5} \times \frac{2}{4}$$

**M1:** Correct probability structure with at least one fraction correct [1 mark]

$$P(WWW) = \frac{4}{6} \times \frac{3}{5} \times \frac{2}{4} = \frac{24}{120} = \frac{1}{5}$$

**A1:** Correct answer $\frac{1}{5}$ [1 mark]

**(b) Exactly two white [3 marks]**

Possible orders: WWB, WBW, BWW

$$P(WWB) = \frac{4}{6} \times \frac{3}{5} \times \frac{2}{4} = \frac{24}{120} = \frac{1}{5}$$

$$P(WBW) = \frac{4}{6} \times \frac{2}{5} \times \frac{3}{4} = \frac{24}{120} = \frac{1}{5}$$

$$P(BWW) = \frac{2}{6} \times \frac{4}{5} \times \frac{3}{4} = \frac{24}{120} = \frac{1}{5}$$

**M1:** Recognition of three cases [1 mark]
**M1:** At least one correct calculation [1 mark]

$$P(\text{exactly 2 white}) = \frac{1}{5} + \frac{1}{5} + \frac{1}{5} = \frac{3}{5}$$

**A1:** Correct answer $\frac{3}{5}$ [1 mark]

**(c) All white given first is white [1 mark]**

After first white: 3 white, 2 black remain

$$P(WW|W_1) = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$

**A1:** Correct answer $\frac{3}{10}$ [1 mark]

---

### Question 25 [6 marks]

The probability that it rains on any given day is 0.3.

If it rains on one day, the probability it rains on the next day is 0.5.

If it does not rain on one day, the probability it rains on the next day is 0.2.

**(a)** Draw a tree diagram showing the possibilities for two consecutive days. [2]

**(b)** Find the probability that it rains on exactly one of the two days. [2]

**(c)** Given that it rains on the second day, find the probability that it rained on the first day. [2]

---

**Mark Scheme Solution:**

**(a) Tree Diagram [2 marks]**

```
Day 1              Day 2                    Outcomes
                    ┌── Rain (0.5)     → RR: 0.3 × 0.5 = 0.15
                    │
              ┌── Rain (0.3) ─────┤
              │                   │
              │                   └── No rain (0.5) → RN: 0.3 × 0.5 = 0.15
              │
Start ─────────┤
              │                   ┌── Rain (0.2)     → NR: 0.7 × 0.2 = 0.14
              │                   │
              └── No rain (0.7) ──┤
                                  │
                                  └── No rain (0.8) → NN: 0.7 × 0.8 = 0.56
```

**M1:** Correct Day 1 probabilities and structure [1 mark]
**M1:** Correct conditional Day 2 probabilities [1 mark]

**(b) Rains on exactly one day [2 marks]**

$$P(\text{exactly one}) = P(RN) + P(NR)$$

**M1:** Recognition that two paths needed [1 mark]

$$P(\text{exactly one}) = 0.15 + 0.14 = 0.29$$

**A1:** Correct answer 0.29 [1 mark]

**(c) P(Rain Day 1 | Rain Day 2) [2 marks]**

$$P(R_1|R_2) = \frac{P(R_1 \cap R_2)}{P(R_2)} = \frac{0.15}{0.15 + 0.14}$$

**M1:** Use of conditional probability formula [1 mark]

$$P(R_1|R_2) = \frac{0.15}{0.29} = \frac{15}{29} \approx 0.517$$

**A1:** Correct answer $\frac{15}{29}$ or 0.517 (to 3 sf) [1 mark]

---

### Question 26 [8 marks]

A doctor's surgery tested a new diagnostic test for a certain illness on 200 patients. The results are shown in the table:

|  | Has Illness | Does Not Have Illness | Total |
|--|-------------|----------------------|-------|
| **Test Positive** | 42 | 12 | 54 |
| **Test Negative** | 8 | 138 | 146 |
| **Total** | 50 | 150 | 200 |

**(a)** A patient is selected at random. Calculate the probability that they have the illness. [1]

**(b)** Calculate the sensitivity of the test (probability of positive test given illness). [1]

**(c)** Calculate $P(\text{Has Illness}|\text{Test Positive})$. Interpret this value. [3]

**(d)** Calculate $P(\text{Does Not Have Illness}|\text{Test Negative})$. Interpret this value. [3]

---

**Mark Scheme Solution:**

**(a) Probability of illness [1 mark]**

$$P(\text{Illness}) = \frac{50}{200} = \frac{1}{4} = 0.25$$

**A1:** Correct answer 0.25 [1 mark]

**(b) Sensitivity [1 mark]**

$$P(\text{Positive}|\text{Illness}) = \frac{42}{50} = 0.84 \text{ or } 84\%$$

**A1:** Correct answer 0.84 or 84% [1 mark]

**(c) P(Illness | Test Positive) [3 marks]**

$$P(\text{Illness}|\text{Positive}) = \frac{42}{54} = \frac{7}{9} \approx 0.778$$

**M1:** Correct method [1 mark]
**A1:** Correct value $\frac{7}{9}$ or 0.778 [1 mark]
**B1:** Interpretation: "Given a positive test result, there is approximately a 78% chance the patient actually has the illness" [1 mark]

**(d) P(No Illness | Test Negative) [3 marks]**

$$P(\text{No Illness}|\text{Negative}) = \frac{138}{146} = \frac{69}{73} \approx 0.945$$

**M1:** Correct method [1 mark]
**A1:** Correct value $\frac{69}{73}$ or 0.945 [1 mark]
**B1:** Interpretation: "Given a negative test result, there is approximately a 95% chance the patient does not have the illness" [1 mark]

---

## Section D: Exam Focus & Strategy

---

### Frequently Tested Question Types

| Question Type | Frequency | Key Skills |
|---------------|-----------|------------|
| Tree diagrams with/without replacement |  | Draw complete diagram, calculate paths |
| Conditional probability from tables |  | Apply formula, interpret results |
| "At least one" using complement |  | Recognise pattern, use $1 - P(\text{none})$ |
| Reverse conditional (Bayes-type) |  | Tree diagram, then apply formula |
| Testing independence |  | Check $P(A \cap B) = P(A) \times P(B)$ |
| Medical/diagnostic testing |  | Calculate sensitivity, PPV, NPV |

---

### Typical Problem-Solving Patterns

**Pattern 1: Multi-Stage Selection**
1. Identify replacement type (with/without)
2. Draw tree diagram
3. Calculate path probabilities
4. Select relevant paths based on question

**Pattern 2: Conditional from Two-Way Table**
1. Identify the condition (denominator)
2. Find intersection (numerator)
3. Apply formula
4. Interpret in context

**Pattern 3: Reverse Conditional Probability**
1. Draw tree diagram from given information
2. Calculate all path probabilities
3. Find the "given" probability (denominator)
4. Calculate conditional probability

**Pattern 4: Medical Testing**
1. Draw tree with disease/no-disease branches
2. Calculate all path probabilities
3. Find PPV or NPV as required
4. Interpret clinically

---

### Command Word Guidance

| Command Word | What Examiners Expect |
|--------------|----------------------|
| **Find/Calculate** | Show working, give numerical answer |
| **Draw** | Complete, labeled diagram with probabilities |
| **Determine** | Find with clear justification |
| **Show that** | Full working leading to given result |
| **Explain** | Give reasons using probability concepts |
| **Interpret** | Explain meaning in context of the problem |

---

### How to Gain Full Marks

#### For Tree Diagram Questions:
- [ ] Draw complete diagram with all branches
- [ ] Label each branch with outcome AND probability
- [ ] Verify branches from each node sum to 1
- [ ] Show all path calculations
- [ ] State final answer clearly

#### For Conditional Probability Questions:
- [ ] State the formula being used
- [ ] Identify numerator and denominator correctly
- [ ] Show substitution
- [ ] Give answer in requested form
- [ ] Interpret if asked

#### Common Mark Distribution:

| Question Type | M1 | A1 | Total |
|---------------|----|----|-------|
| Simple tree diagram | 1 | 1 | 2 |
| Path calculation | 1 | 1 | 2 |
| Conditional probability | 1 | 1 | 2 |
| Interpretation | 1 | - | 1 |
| Complex multi-step | 2-3 | 1-2 | 4-5 |

---

### Examiner's Top Tips

> **Tip 1:** Always check that your final probability is between 0 and 1. If not, you've made an error.

> **Tip 2:** In "without replacement" questions, write the changing totals: 8→7→6 etc.

> **Tip 3:** For "at least one" questions, the complement method is usually quicker and less error-prone.

> **Tip 4:** When asked to interpret a probability, always give context - don't just say "0.7" but "There is a 70% chance that..."

> **Tip 5:** In reverse conditional questions, the tree diagram is essential - don't try to skip steps.

> **Tip 6:** Label your tree diagram clearly with outcomes (like RR, RB) and show all calculations.

> **Tip 7:** Give fractions rather than decimals unless asked otherwise - fractions are exact.

> **Tip 8:** Check your answer by ensuring all path probabilities sum to 1.

---

### Quick Reference: Key Calculations

| To Find | Method |
|---------|--------|
| $P(A \cap B)$ | Multiply along path |
| $P(A \cup B)$ | Add relevant paths, or use formula |
| $P(A|B)$ | $\frac{P(A \cap B)}{P(B)}$ |
| $P(\text{at least one})$ | $1 - P(\text{none})$ |
| Test for independence | Check if $P(A \cap B) = P(A) \times P(B)$ |

---

*Quiz prepared for Pearson Edexcel IGCSE Mathematics - Handling Data 7*
*© Study Package for A* Students*
