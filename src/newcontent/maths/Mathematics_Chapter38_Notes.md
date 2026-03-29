# Chapter 38: Handling Data 5 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics

---

#  TOPICS COVERED
1. Laws of Probability
2. Combined Events
3. Independent Events
4. Tree Diagrams
5. Conditional Probability

---

# 1. LAWS OF PROBABILITY

## 1.1 Basic Probability Concepts

### Definition of Probability
**Probability** is a measure of how likely an event is to occur. It is expressed as a number between 0 and 1.

$$\text{Probability} = \frac{\text{Number of successful outcomes}}{\text{Total number of possible outcomes}}$$

### Key Terminology

| Term | Definition | Example |
|------|------------|---------|
| **Experiment** | A process with uncertain outcomes | Rolling a die |
| **Outcome** | A single result from an experiment | Getting a 6 |
| **Sample Space (S)** | Set of all possible outcomes | $S = \{1, 2, 3, 4, 5, 6\}$ |
| **Event** | A subset of the sample space | Rolling an even number: $\{2, 4, 6\}$ |

### Probability Scale

```
Impossible ←─────────────────────────────────────→ Certain
    0         0.25       0.5       0.75         1
    |──────────|──────────|──────────|──────────|
 Unlikely    Fairly    Even     Fairly       Likely
            Unlikely   Chance    Likely
```

---

## 1.2 The Laws of Probability

### Law 1: Probability Range
> **For any event A: $0 \leq P(A) \leq 1$**

**Why?** Probability cannot be negative (you can't have less than "impossible") and cannot exceed 1 (you can't be more certain than "certain").

### Law 2: Sum of All Probabilities
> **If all possible outcomes are considered: $\sum P = 1$**

**Example:** For a fair die:
$$P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = 1$$

### Law 3: Complementary Probability
> **$P(\text{not } A) = 1 - P(A)$** or **$P(A') = 1 - P(A)$**

This is one of the most frequently used laws in exams!

**Why does this work?** An event either happens or it doesn't happen – there's no third option. So the probabilities must add to 1.

---

###  Worked Example 1: Complementary Events

**Question:** The probability that a bus arrives on time is 0.72. Find the probability that:
(a) The bus is late
(b) The bus is either on time or late

**Solution:**

**(a)** Using the complement law:
$$P(\text{late}) = 1 - P(\text{on time})$$
$$P(\text{late}) = 1 - 0.72 = 0.28$$

**(b)** These are complementary events:
$$P(\text{on time or late}) = 1$$

>  **Exam Tip:** Always check if using the complement is easier than calculating directly!

---

## 1.3 Mutually Exclusive Events

### Definition
Two events are **mutually exclusive** if they cannot occur at the same time.

**Example:** Rolling a 3 and rolling a 5 on a single die – you can't do both simultaneously!

### Addition Law for Mutually Exclusive Events
> **If A and B are mutually exclusive:**
> $$P(A \text{ or } B) = P(A) + P(B)$$

This can also be written as:
$$P(A \cup B) = P(A) + P(B)$$

where $\cup$ means "union" (or).

### Extended Addition Law
> **For mutually exclusive events A, B, C, ...:**
> $$P(A \text{ or } B \text{ or } C) = P(A) + P(B) + P(C)$$

---

###  Worked Example 2: Mutually Exclusive Events

**Question:** A bag contains 5 red, 3 blue, and 2 green balls. A ball is drawn at random. Find the probability of getting:
(a) A red ball
(b) A red or blue ball
(c) A ball that is neither red nor green

**Solution:**

Total balls = $5 + 3 + 2 = 10$

**(a)** 
$$P(\text{red}) = \frac{5}{10} = \frac{1}{2}$$

**(b)** Red and blue are mutually exclusive (a ball can't be both colors):
$$P(\text{red or blue}) = P(\text{red}) + P(\text{blue})$$
$$P(\text{red or blue}) = \frac{5}{10} + \frac{3}{10} = \frac{8}{10} = \frac{4}{5}$$

**(c)** "Neither red nor green" means "blue":
$$P(\text{neither red nor green}) = P(\text{blue}) = \frac{3}{10}$$

**Alternative method using complement:**
$$P(\text{neither red nor green}) = 1 - P(\text{red or green})$$
$$= 1 - \left(\frac{5}{10} + \frac{2}{10}\right) = 1 - \frac{7}{10} = \frac{3}{10}$$ ✓

---

## 1.4 Non-Mutually Exclusive Events

When events can occur together, we need to subtract the overlap:

> **General Addition Law:**
> $$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$$

Or in set notation:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Why subtract?** The intersection $P(A \cap B)$ is counted twice when we add $P(A)$ and $P(B)$, so we must subtract it once.

---

###  Worked Example 3: Non-Mutually Exclusive Events

**Question:** In a class of 30 students, 18 study Mathematics, 14 study Physics, and 8 study both. Find the probability that a randomly selected student:
(a) Studies Mathematics or Physics
(b) Studies neither subject

**Solution:**

**(a)** Using the general addition law:
$$P(\text{Maths or Physics}) = P(\text{Maths}) + P(\text{Physics}) - P(\text{both})$$
$$P(\text{Maths or Physics}) = \frac{18}{30} + \frac{14}{30} - \frac{8}{30}$$
$$P(\text{Maths or Physics}) = \frac{24}{30} = \frac{4}{5}$$

**(b)** Using complement:
$$P(\text{neither}) = 1 - P(\text{Maths or Physics}) = 1 - \frac{4}{5} = \frac{1}{5}$$

> 🔍 **Check:** Number studying at least one subject = 24 students
> Number studying neither = $30 - 24 = 6$ students
> $P(\text{neither}) = \frac{6}{30} = \frac{1}{5}$ ✓

---

# 2. COMBINED EVENTS

## 2.1 Understanding Combined Events

**Combined events** involve considering two or more events together. We need to determine:
- Whether the events can occur together
- Whether one event affects another

### Types of Combined Events

| Type | Description | Example |
|------|-------------|---------|
| **Mutually Exclusive** | Cannot happen together | Rolling 2 and 3 on one die |
| **Independent** | One doesn't affect the other | Rolling two dice |
| **Dependent** | One affects the other | Drawing cards without replacement |

---

## 2.2 Sample Space Diagrams

A **sample space diagram** shows all possible outcomes for combined events.

###  Worked Example 4: Sample Space Diagram

**Question:** Two fair dice are rolled. Draw a sample space diagram and find:
(a) $P(\text{both show 6})$
(b) $P(\text{sum is 7})$
(c) $P(\text{at least one shows 5})$

**Solution:**

**Sample Space Diagram:**
```
        Die 2
       1   2   3   4   5   6
    ┌───┬───┬───┬───┬───┬───┐
  1 │1,1│1,2│1,3│1,4│1,5│1,6│
D  2 │2,1│2,2│2,3│2,4│2,5│2,6│
i  3 │3,1│3,2│3,3│3,4│3,5│3,6│
e  4 │4,1│4,2│4,3│4,4│4,5│4,6│
1  5 │5,1│5,2│5,3│5,4│5,5│5,6│
   6 │6,1│6,2│6,3│6,4│6,5│6,6│
    └───┴───┴───┴───┴───┴───┘
```

Total outcomes = $6 \times 6 = 36$

**(a)** $P(\text{both 6}) = \frac{1}{36}$ (only (6,6))

**(b)** Sum is 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)
$$P(\text{sum is 7}) = \frac{6}{36} = \frac{1}{6}$$

**(c)** At least one 5: 11 outcomes
$$P(\text{at least one 5}) = \frac{11}{36}$$

>  **Common Mistake:** Forgetting that "at least one" includes the case where BOTH show 5. Students often count 10 instead of 11.

---

## 2.3 Two-Way Tables

**Two-way tables** organize data for two categorical variables.

###  Worked Example 5: Two-Way Table

**Question:** A survey of 100 people gave the following results:

| | Likes Coffee | Dislikes Coffee | Total |
|---|---|---|---|
| **Likes Tea** | 35 | 25 | 60 |
| **Dislikes Tea** | 15 | 25 | 40 |
| **Total** | 50 | 50 | 100 |

Find the probability that a randomly chosen person:
(a) Likes both coffee and tea
(b) Likes exactly one of the drinks
(c) Likes tea given that they like coffee

**Solution:**

**(a)** $P(\text{likes both}) = \frac{35}{100} = 0.35$

**(b)** "Exactly one" = likes only coffee OR likes only tea
$$P(\text{exactly one}) = \frac{15 + 25}{100} = \frac{40}{100} = 0.4$$

**(c)** This is **conditional probability**:
$$P(\text{likes tea} \mid \text{likes coffee}) = \frac{35}{50} = 0.7$$

---

# 3. INDEPENDENT EVENTS

## 3.1 Definition of Independent Events

> **Two events A and B are independent if:**
> $$P(A \text{ and } B) = P(A) \times P(B)$$

Or in set notation:
$$P(A \cap B) = P(A) \times P(B)$$

**Key Insight:** The occurrence of one event does not affect the probability of the other.

### Examples of Independent Events
- Rolling two dice
- Flipping two coins
- Spinning two different spinners
- Drawing from a bag **with replacement**

---

## 3.2 Multiplication Law for Independent Events

> **For independent events A and B:**
> $$P(A \text{ and } B) = P(A) \times P(B)$$

> **For independent events A, B, C, ...:**
> $$P(A \text{ and } B \text{ and } C) = P(A) \times P(B) \times P(C)$$

---

###  Worked Example 6: Basic Independent Events

**Question:** Two fair coins are tossed. Find the probability of getting:
(a) Two heads
(b) At least one tail
(c) One head and one tail

**Solution:**

For each coin: $P(H) = \frac{1}{2}$ and $P(T) = \frac{1}{2}$

**(a)** $P(\text{two heads}) = P(H) \times P(H) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$

**(b)** Method 1: Using complement
$$P(\text{at least one tail}) = 1 - P(\text{two heads}) = 1 - \frac{1}{4} = \frac{3}{4}$$

Method 2: Direct calculation
$$P(\text{at least one tail}) = P(HT) + P(TH) + P(TT) = \frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{3}{4}$$ ✓

**(c)** $P(\text{one head, one tail}) = P(HT) + P(TH) = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$

---

###  Worked Example 7: Independent Events with Replacement

**Question:** A bag contains 4 red and 6 blue balls. A ball is drawn, its color noted, and then replaced. A second ball is drawn. Find:
(a) $P(\text{both red})$
(b) $P(\text{both same color})$
(c) $P(\text{at least one red})$

**Solution:**

$P(\text{red}) = \frac{4}{10} = 0.4$ and $P(\text{blue}) = \frac{6}{10} = 0.6$

Since balls are replaced, events are **independent**.

**(a)** $P(\text{both red}) = 0.4 \times 0.4 = 0.16$

**(b)** Same color = both red OR both blue:
$$P(\text{same color}) = P(RR) + P(BB) = 0.16 + (0.6 \times 0.6) = 0.16 + 0.36 = 0.52$$

**(c)** Method 1: Using complement
$$P(\text{at least one red}) = 1 - P(\text{no red}) = 1 - P(BB)$$
$$= 1 - 0.36 = 0.64$$

Method 2: Direct calculation
$$P(\text{at least one red}) = P(RB) + P(BR) + P(RR)$$
$$= (0.4 \times 0.6) + (0.6 \times 0.4) + 0.16 = 0.24 + 0.24 + 0.16 = 0.64$$ ✓

---

## 3.3 Testing for Independence

To check if two events are independent, verify:
$$P(A \cap B) = P(A) \times P(B)$$

###  Worked Example 8: Testing Independence

**Question:** In a school, 60% of students study French, 40% study German, and 24% study both. Are studying French and German independent events?

**Solution:**

If independent: $P(F \cap G) = P(F) \times P(G)$

Check: $P(F) \times P(G) = 0.6 \times 0.4 = 0.24$

Given: $P(F \cap G) = 0.24$

Since $P(F \cap G) = P(F) \times P(G)$, **the events ARE independent.**

---

## 3.4 Dependent Events (Without Replacement)

When drawing **without replacement**, probabilities change after each draw.

> **Key Rule:** After removing one item, the total number of items decreases by 1.

---

###  Worked Example 9: Dependent Events

**Question:** A bag contains 4 red and 6 blue balls. Two balls are drawn **without replacement**. Find:
(a) $P(\text{both red})$
(b) $P(\text{one of each color})$
(c) $P(\text{second is red} \mid \text{first is red})$

**Solution:**

**(a)** First draw: $P(R_1) = \frac{4}{10}$

After drawing one red: 3 red left, total 9 balls
Second draw: $P(R_2 \mid R_1) = \frac{3}{9}$

$$P(\text{both red}) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}$$

**(b)** Two ways to get one of each: $RB$ or $BR$

$P(RB) = \frac{4}{10} \times \frac{6}{9} = \frac{24}{90}$

$P(BR) = \frac{6}{10} \times \frac{4}{9} = \frac{24}{90}$

$$P(\text{one of each}) = \frac{24}{90} + \frac{24}{90} = \frac{48}{90} = \frac{8}{15}$$

**(c)** After first is red: 3 red remain out of 9 balls
$$P(\text{second red} \mid \text{first red}) = \frac{3}{9} = \frac{1}{3}$$

>  **Exam Tip:** Always check if the question says "with replacement" or "without replacement". This completely changes the method!

---

# 4. TREE DIAGRAMS

## 4.1 Purpose and Construction

**Tree diagrams** are visual tools for:
- Organizing all possible outcomes
- Calculating probabilities for combined events
- Showing dependent and independent events

### Construction Rules
1. Start with a single point
2. Draw branches for each possible outcome
3. Write probabilities on branches
4. Multiply along branches for "AND" probabilities
5. Add across final outcomes for "OR" probabilities

---

## 4.2 Tree Diagrams for Independent Events

###  Worked Example 10: Tree Diagram - Independent Events

**Question:** A fair coin is tossed three times. Draw a tree diagram and find:
(a) $P(\text{exactly two heads})$
(b) $P(\text{at least two heads})$
(c) $P(\text{first two are heads})$

**Solution:**

**Tree Diagram:**
```
                        ┌── H (1/2) → HHH
                    ┌───┤
                    │   └── T (1/2) → HHT
                ┌───┤
                │   │   ┌── H (1/2) → HTH
                │   └───┤
            ┌───┤       └── T (1/2) → HTT
            │   │
            │   │       ┌── H (1/2) → THH
            │   └───┬───┤
            │       │   └── T (1/2) → THT
        ┌───┤       │
        │   │       │   ┌── H (1/2) → TTH
        │   └───────┴───┤
Start ───┤               └── T (1/2) → TTT
        │
        │                   (similar structure for first toss T)
```

Each outcome has probability $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$

**(a)** Exactly two heads: HHT, HTH, THH (3 outcomes)
$$P(\text{exactly two heads}) = \frac{3}{8}$$

**(b)** At least two heads = two heads OR three heads
$$P(\text{at least two heads}) = \frac{3}{8} + \frac{1}{8} = \frac{4}{8} = \frac{1}{2}$$

**(c)** First two are heads: HHH, HHT
$$P(\text{first two heads}) = \frac{1}{8} + \frac{1}{8} = \frac{2}{8} = \frac{1}{4}$$

---

## 4.3 Tree Diagrams for Dependent Events

###  Worked Example 11: Tree Diagram - Without Replacement

**Question:** A box contains 5 red and 3 blue pens. Two pens are drawn without replacement. Draw a tree diagram and find:
(a) $P(\text{both red})$
(b) $P(\text{different colors})$
(c) $P(\text{at least one blue})$

**Solution:**

Initial: 5 red, 3 blue, total 8 pens

**Tree Diagram:**
```
                    ┌── R (4/7) → RR
                ┌───┤
                │   └── B (3/7) → RB
            ┌───┤
            │   │   ┌── R (5/7) → BR
            │   └───┤
Start ──────┤       └── B (2/7) → BB
            │
            │       ┌── R (5/7) → BR
            │   ┌───┤
            └───┤   └── B (2/7) → BB
                │
                │   (Wait, this is wrong. Let me redo.)
```

**Correct Tree Diagram:**
```
                        ┌── R (4/7) → RR [P = 5/8 × 4/7 = 20/56]
                    ┌───┤
                    │   └── B (3/7) → RB [P = 5/8 × 3/7 = 15/56]
                ┌───┤
                │   │       ┌── R (5/7) → BR [P = 3/8 × 5/7 = 15/56]
Start ──────────┤   └───────┤
                │           └── B (2/7) → BB [P = 3/8 × 2/7 = 6/56]
                │
                └── B (3/8)
```

**(a)** $P(RR) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$

**(b)** $P(\text{different colors}) = P(RB) + P(BR)$
$$= \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28}$$

**(c)** Method 1: Using complement
$$P(\text{at least one blue}) = 1 - P(RR) = 1 - \frac{5}{14} = \frac{9}{14}$$

Method 2: Direct
$$P(\text{at least one blue}) = P(RB) + P(BR) + P(BB)$$
$$= \frac{15}{56} + \frac{15}{56} + \frac{6}{56} = \frac{36}{56} = \frac{9}{14}$$ ✓

---

## 4.4 Tree Diagrams with More Than Two Outcomes

###  Worked Example 12: Three-Outcome Tree Diagram

**Question:** A spinner has three equal sections: Red, Blue, and Green. It is spun twice. Find:
(a) $P(\text{both same color})$
(b) $P(\text{at least one green})$
(c) $P(\text{different colors})$

**Solution:**

$P(R) = P(B) = P(G) = \frac{1}{3}$

**(a)** Same color = RR or BB or GG
$$P(\text{same color}) = \frac{1}{9} + \frac{1}{9} + \frac{1}{9} = \frac{3}{9} = \frac{1}{3}$$

**(b)** Using complement:
$$P(\text{at least one green}) = 1 - P(\text{no green})$$
$$= 1 - [P(RR) + P(BB) + P(RB) + P(BR)]$$
$$= 1 - \frac{4}{9} = \frac{5}{9}$$

**(c)** Using complement:
$$P(\text{different colors}) = 1 - P(\text{same color}) = 1 - \frac{1}{3} = \frac{2}{3}$$

---

# 5. CONDITIONAL PROBABILITY

## 5.1 Definition

> **Conditional probability** is the probability of one event occurring given that another event has already occurred.
>
> **Notation:** $P(A \mid B)$ means "probability of A given B"

### Formula
> $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Key Insight:** When we know B has occurred, our sample space "shrinks" to just the outcomes where B occurs.

---

## 5.2 Understanding Conditional Probability

### Venn Diagram Interpretation

When we calculate $P(A \mid B)$:
1. We restrict our attention to circle B (the given condition)
2. We find the portion of circle A that overlaps with B
3. The probability is the ratio of overlap to B's total area

---

###  Worked Example 13: Basic Conditional Probability

**Question:** In a class of 40 students:
- 25 play football (F)
- 18 play cricket (C)
- 10 play both sports

A student is chosen at random. Find:
(a) $P(F \mid C)$
(b) $P(C \mid F)$
(c) $P(F \mid \text{not } C)$

**Solution:**

**(a)** $P(F \mid C)$ = Probability plays football GIVEN plays cricket
$$P(F \mid C) = \frac{P(F \cap C)}{P(C)} = \frac{10/40}{18/40} = \frac{10}{18} = \frac{5}{9}$$

**Check:** Of the 18 who play cricket, 10 play football. So $P(F \mid C) = \frac{10}{18} = \frac{5}{9}$ ✓

**(b)** $P(C \mid F)$ = Probability plays cricket GIVEN plays football
$$P(C \mid F) = \frac{P(C \cap F)}{P(F)} = \frac{10/40}{25/40} = \frac{10}{25} = \frac{2}{5}$$

**Check:** Of the 25 who play football, 10 play cricket. So $P(C \mid F) = \frac{10}{25} = \frac{2}{5}$ ✓

**(c)** Students not playing cricket = $40 - 18 = 22$
Students playing football but not cricket = $25 - 10 = 15$

$$P(F \mid \text{not } C) = \frac{15}{22}$$

---

## 5.3 Conditional Probability from Two-Way Tables

###  Worked Example 14: Conditional Probability from Table

**Question:** The table shows the results of a survey about pets:

| | Dog | No Dog | Total |
|---|---|---|---|
| **Cat** | 12 | 18 | 30 |
| **No Cat** | 25 | 15 | 40 |
| **Total** | 37 | 33 | 70 |

Find:
(a) $P(\text{Cat} \mid \text{Dog})$
(b) $P(\text{Dog} \mid \text{Cat})$
(c) $P(\text{No Dog} \mid \text{No Cat})$

**Solution:**

**(a)** Given dog owner (37 people), probability of having a cat:
$$P(\text{Cat} \mid \text{Dog}) = \frac{12}{37}$$

**(b)** Given cat owner (30 people), probability of having a dog:
$$P(\text{Dog} \mid \text{Cat}) = \frac{12}{30} = \frac{2}{5}$$

**(c)** Given no cat (40 people), probability of no dog:
$$P(\text{No Dog} \mid \text{No Cat}) = \frac{15}{40} = \frac{3}{8}$$

---

## 5.4 Conditional Probability and Independence

> **Events A and B are independent if and only if:**
> $$P(A \mid B) = P(A)$$
>
> This means: knowing B occurred doesn't change the probability of A.

###  Worked Example 15: Testing Independence with Conditional Probability

**Question:** Using the data from Example 14, determine if "having a cat" and "having a dog" are independent events.

**Solution:**

$P(\text{Cat}) = \frac{30}{70} = \frac{3}{7}$

$P(\text{Cat} \mid \text{Dog}) = \frac{12}{37}$

Compare: Is $P(\text{Cat} \mid \text{Dog}) = P(\text{Cat})$?

$\frac{12}{37} \approx 0.324$ and $\frac{3}{7} \approx 0.429$

Since $\frac{12}{37} \neq \frac{3}{7}$, **the events are NOT independent.**

---

## 5.5 Tree Diagrams with Conditional Probability

Tree diagrams naturally show conditional probabilities on their branches.

###  Worked Example 16: Conditional Probability on Tree Diagrams

**Question:** A factory has two machines. Machine A produces 60% of items with a 5% defect rate. Machine B produces 40% of items with a 3% defect rate. Find:
(a) $P(\text{defective})$
(b) $P(\text{from A} \mid \text{defective})$

**Solution:**

**Tree Diagram:**
```
                    ┌── Defective (0.05)
                ┌───┤
                │   └── Good (0.95)
            ┌───┤
            │   │   ┌── Defective (0.03)
Start ──────┤   └───┤
            │       └── Good (0.97)
            │
            └── B (0.4)
```

**(a)** $P(\text{defective}) = P(A \cap D) + P(B \cap D)$
$$= (0.6 \times 0.05) + (0.4 \times 0.03)$$
$$= 0.03 + 0.012 = 0.042$$

**(b)** Using conditional probability formula:
$$P(A \mid D) = \frac{P(A \cap D)}{P(D)} = \frac{0.03}{0.042} = \frac{30}{42} = \frac{5}{7}$$

>  **Exam Tip:** This type of "reverse" conditional probability question is very common in exams!

---

## 5.6 The Multiplication Rule (General Form)

> **For any two events A and B:**
> $$P(A \cap B) = P(A) \times P(B \mid A)$$
> $$P(A \cap B) = P(B) \times P(A \mid B)$$

This is more general than the independent events formula!

---

###  Worked Example 17: General Multiplication Rule

**Question:** A bag contains 4 white and 5 black balls. Two balls are drawn without replacement. Given that the first ball is white, find:
(a) The probability that the second is black
(b) The probability that both are white
(c) The probability that both are the same color

**Solution:**

**(a)** This is a conditional probability directly:
$$P(B_2 \mid W_1) = \frac{5}{8}$$ (5 black out of 8 remaining balls)

**(b)** Using multiplication rule:
$$P(W_1 \cap W_2) = P(W_1) \times P(W_2 \mid W_1) = \frac{4}{9} \times \frac{3}{8} = \frac{12}{72} = \frac{1}{6}$$

**(c)** Same color = both white OR both black
$$P(\text{same}) = P(WW) + P(BB)$$
$$P(WW) = \frac{4}{9} \times \frac{3}{8} = \frac{1}{6}$$
$$P(BB) = \frac{5}{9} \times \frac{4}{8} = \frac{5}{18}$$
$$P(\text{same}) = \frac{1}{6} + \frac{5}{18} = \frac{3}{18} + \frac{5}{18} = \frac{8}{18} = \frac{4}{9}$$

---

#  EXAM FOCUS & STRATEGY

## Frequently Tested Question Types

### 1. **"At Least One" Problems**
- **Strategy:** Use complement: $P(\text{at least one}) = 1 - P(\text{none})$
- **Why:** Often faster than listing all cases

### 2. **"Without Replacement" Problems**
- **Strategy:** Draw a tree diagram with changing probabilities
- **Watch for:** Total decreases by 1 after each draw

### 3. **Conditional Probability "Reverse" Problems**
- **Pattern:** Given $P(A \mid B)$, find $P(B \mid A)$
- **Strategy:** Use Bayes' thinking: $\frac{P(A \cap B)}{P(A)}$

### 4. **Testing for Independence**
- **Method:** Check if $P(A \mid B) = P(A)$
- **Alternative:** Check if $P(A \cap B) = P(A) \times P(B)$

---

## Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Find** | Calculate the probability |
| **Calculate** | Show working and give numerical answer |
| **Show that** | Work backwards from given answer |
| **Explain** | Give mathematical reason |
| **Determine** | Make a decision based on calculation |
| **Complete** | Fill in missing parts of diagram/table |

---

## How to Gain Full Marks

### Method Marks (M1, M2)
- Show clear method (tree diagram, formula used)
- Write the formula before substituting
- Show intermediate steps

### Accuracy Marks (A1, A2)
- Give final answer to required accuracy
- Usually 3 significant figures or exact fraction
- Check your answer makes sense

### Communication Marks (C1)
- State your conclusion clearly
- "Therefore, the events are independent"
- Label tree diagrams properly

---

##  Common Mistakes to Avoid

| Mistake | Correct Approach |
|---------|------------------|
| Forgetting to subtract intersection | Use $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Wrong probability on second branch (dependent) | Remember total decreases by 1 |
| Confusing $P(A \mid B)$ with $P(A \cap B)$ | Conditional ≠ Joint probability |
| Forgetting "both" in "at least one" | Count all outcomes including both |
| Not simplifying fractions | Always give probability in simplest form |

---

## 📐 KEY FORMULAS SUMMARY

| Formula | When to Use |
|---------|-------------|
| $P(A') = 1 - P(A)$ | Complement problems |
| $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Non-mutually exclusive events |
| $P(A \cap B) = P(A) \times P(B)$ | Independent events |
| $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | Conditional probability |
| $P(A \cap B) = P(A) \times P(B \mid A)$ | General multiplication |

---

## 🎯 Last-Minute Checklist

Before your exam, ensure you can:
- [ ] Draw and interpret tree diagrams
- [ ] Distinguish between with/without replacement
- [ ] Calculate conditional probabilities
- [ ] Test for independence
- [ ] Use complement rule effectively
- [ ] Complete two-way tables
- [ ] Handle "at least one" problems
- [ ] Work with Venn diagrams

---

*End of Detailed Notes - Handling Data 5*
