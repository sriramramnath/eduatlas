# Chapter 33: Sets 3 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Practice Questions

---

## SECTION A: MULTIPLE CHOICE QUESTIONS

**Answer all questions. Choose the correct answer from A, B, C, or D.**

---

### Question 1

A fair six-sided die is rolled. What is the probability of rolling a number greater than 4?

A) $\frac{1}{6}$

B) $\frac{1}{3}$

C) $\frac{1}{2}$

D) $\frac{2}{3}$

**Answer: B**

**Explanation:**
- Numbers greater than 4: {5, 6} = 2 outcomes
- Total outcomes: 6
- $P(> 4) = \frac{2}{6} = \frac{1}{3}$

---

### Question 2

The probability that it rains on any given day is 0.35. What is the probability that it does NOT rain?

A) 0.35

B) 0.55

C) 0.65

D) 0.75

**Answer: C**

**Explanation:**
Using the complement rule:
$$P(\text{no rain}) = 1 - P(\text{rain}) = 1 - 0.35 = 0.65$$

---

### Question 3

A bag contains 5 red balls and 3 blue balls. A ball is drawn at random. What is the probability of drawing a red ball?

A) $\frac{3}{8}$

B) $\frac{5}{8}$

C) $\frac{3}{5}$

D) $\frac{5}{3}$

**Answer: B**

**Explanation:**
- Red balls: 5
- Total balls: $5 + 3 = 8$
- $P(\text{red}) = \frac{5}{8}$

---

### Question 4

For two events A and B, $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \cap B) = 0.1$. What is $P(A \cup B)$?

A) 0.8

B) 0.9

C) 1.0

D) 0.7

**Answer: A**

**Explanation:**
Using the addition rule:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.4 + 0.5 - 0.1 = 0.8$$

---

### Question 5

A fair coin is tossed twice. What is the probability of getting at least one head?

A) $\frac{1}{4}$

B) $\frac{1}{2}$

C) $\frac{3}{4}$

D) $1$

**Answer: C**

**Explanation:**

Method 1: Using complement
$$P(\text{at least one head}) = 1 - P(\text{no heads}) = 1 - P(TT) = 1 - \frac{1}{4} = \frac{3}{4}$$

Method 2: Direct counting
Sample space: {HH, HT, TH, TT}
Favourable: {HH, HT, TH} = 3 outcomes
$$P = \frac{3}{4}$$

---

### Question 6

Given $P(A) = 0.6$ and $P(B) = 0.5$. If A and B are independent, what is $P(A \cap B)$?

A) 0.1

B) 0.3

C) 0.5

D) 1.1

**Answer: B**

**Explanation:**
For independent events:
$$P(A \cap B) = P(A) \times P(B) = 0.6 \times 0.5 = 0.3$$

---

### Question 7

In a class of 30 students, 18 play football and 12 play basketball. If 5 students play both sports, how many play neither sport?

A) 0

B) 5

C) 10

D) 25

**Answer: B**

**Explanation:**
Using the inclusion-exclusion principle:
$$n(F \cup B) = n(F) + n(B) - n(F \cap B) = 18 + 12 - 5 = 25$$
$$n(\text{neither}) = 30 - 25 = 5$$

---

### Question 8

If $P(A \cap B) = 0.2$ and $P(B) = 0.4$, what is $P(A|B)$?

A) 0.08

B) 0.2

C) 0.5

D) 0.8

**Answer: C**

**Explanation:**
$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.2}{0.4} = 0.5$$

---

### Question 9

Two events A and B are mutually exclusive. If $P(A) = 0.3$ and $P(B) = 0.4$, what is $P(A \cap B)$?

A) 0

B) 0.12

C) 0.7

D) Cannot determine

**Answer: A**

**Explanation:**
Mutually exclusive events cannot occur together, so:
$$P(A \cap B) = 0$$

---

### Question 10

A biased die has $P(6) = 0.3$. If the die is rolled 60 times, what is the expected number of sixes?

A) 6

B) 18

C) 30

D) 42

**Answer: B**

**Explanation:**
Expected frequency = Probability × Number of trials
$$\text{Expected sixes} = 0.3 \times 60 = 18$$

---

### Question 11

From the Venn diagram, the number of elements in set A is:

```
        ξ = 50
    ┌─────────────────────────────┐
    │            10               │
    │    ┌───────┐   ┌───────┐    │
    │    │   A   │   │   B   │    │
    │ 15 │  ┌────┼───┼────┐  │ 8  │
    │    │  │ 12 │   │    │  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │                             │
    └─────────────────────────────┘
```

A) 15

B) 12

C) 27

D) 35

**Answer: C**

**Explanation:**
$$n(A) = n(A \text{ only}) + n(A \cap B) = 15 + 12 = 27$$

---

### Question 12

If $P(A) = 0.5$ and $P(A|B) = 0.5$, which statement is true?

A) A and B are mutually exclusive

B) A and B are independent

C) A and B are complementary

D) Cannot determine

**Answer: B**

**Explanation:**
Since $P(A|B) = P(A)$, the occurrence of B does not affect the probability of A.
This is the definition of independence.

---

---

## SECTION B: TRUE/FALSE QUESTIONS

**State whether each statement is TRUE or FALSE. If FALSE, provide the correct statement.**

---

### Question 1

If $P(A) = 0.3$, then $P(A') = 0.7$.

**Answer: TRUE**

---

### Question 2

If two events are mutually exclusive, they must be independent.

**Answer: FALSE**

**Correction:** If two events are mutually exclusive and both have positive probabilities, they are **NOT** independent. Mutually exclusive events affect each other—if one occurs, the other cannot occur.

---

### Question 3

For any two events A and B, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Answer: TRUE**

---

### Question 4

$P(A|B)$ and $P(B|A)$ are always equal.

**Answer: FALSE**

**Correction:** $P(A|B)$ and $P(B|A)$ are generally **NOT** equal. They are only equal in special cases.
$$P(A|B) = \frac{P(A \cap B)}{P(B)} \quad \text{and} \quad P(B|A) = \frac{P(A \cap B)}{P(A)}$$

---

### Question 5

If $P(A \cap B) = P(A) \times P(B)$, then A and B are independent.

**Answer: TRUE**

---

### Question 6

The probability of any event must be between 0 and 1 inclusive.

**Answer: TRUE**

---

### Question 7

When drawing without replacement, the probabilities stay the same for each draw.

**Answer: FALSE**

**Correction:** When drawing **without replacement**, probabilities **change** after each draw because the total number of items changes. Probabilities stay the same only when drawing **with replacement**.

---

### Question 8

The complement of $A \cup B$ is $A' \cap B'$.

**Answer: TRUE**

(This is De Morgan's Law for sets)

---

### Question 9

If A and B are independent, then $P(A \cap B) = 0$.

**Answer: FALSE**

**Correction:** If A and B are independent, then $P(A \cap B) = P(A) \times P(B)$.
$P(A \cap B) = 0$ would mean they are **mutually exclusive** (cannot both occur).

---

### Question 10

$P(A \cap B)$ represents the probability of A **or** B occurring.

**Answer: FALSE**

**Correction:** $P(A \cap B)$ represents the probability of A **and** B both occurring. $P(A \cup B)$ represents the probability of A **or** B occurring.

---

### Question 11

For a biased coin with $P(\text{heads}) = 0.6$, the expected number of heads in 100 tosses is 60.

**Answer: TRUE**

---

### Question 12

The sum of probabilities of all possible outcomes equals 1.

**Answer: TRUE**

---

---

## SECTION C: STRUCTURED QUESTIONS

---

### Question 1 [3 marks]

A fair spinner has 8 equal sections numbered 1 to 8.

**(a)** Find the probability of landing on an odd number. [1 mark]

**(b)** Find the probability of landing on a prime number. [2 marks]

**Solution:**

**(a)** Odd numbers: {1, 3, 5, 7} = 4 outcomes

$$P(\text{odd}) = \frac{4}{8} = \frac{1}{2}$$ **[M1, A1]**

**(b)** Prime numbers from 1-8: {2, 3, 5, 7} = 4 outcomes

$$P(\text{prime}) = \frac{4}{8} = \frac{1}{2}$$ **[M1, A1]**

---

### Question 2 [4 marks]

In a group of 50 people:
- 32 like coffee (C)
- 24 like tea (T)
- 15 like both coffee and tea

**(a)** Complete the Venn diagram showing this information. [2 marks]

**(b)** Find the probability that a randomly selected person likes neither drink. [2 marks]

**Solution:**

**(a)** Starting with the intersection: $n(C \cap T) = 15$

Coffee only: $n(C) - n(C \cap T) = 32 - 15 = 17$ **[M1]**

Tea only: $n(T) - n(C \cap T) = 24 - 15 = 9$

Neither: $50 - (17 + 15 + 9) = 50 - 41 = 9$ **[A1]**

```
        ξ = 50
    ┌─────────────────────────────┐
    │            9                │
    │    ┌───────┐   ┌───────┐    │
    │    │   C   │   │   T   │    │
    │ 17 │  ┌────┼───┼────┐  │ 9  │
    │    │  │ 15 │   │    │  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │                             │
    └─────────────────────────────┘
```

**(b)**

$$P(\text{neither}) = \frac{9}{50}$$ **[M1, A1]**

---

### Question 3 [5 marks]

A bag contains 4 red balls, 5 green balls, and 1 blue ball. Two balls are drawn at random **without replacement**.

**(a)** Draw a probability tree diagram for this situation. [2 marks]

**(b)** Find the probability that both balls are green. [2 marks]

**(c)** Find the probability that at least one ball is red. [1 mark]

**Solution:**

**(a)** First draw probabilities:
- $P(R) = \frac{4}{10} = \frac{2}{5}$
- $P(G) = \frac{5}{10} = \frac{1}{2}$
- $P(B) = \frac{1}{10}$

Second draw probabilities depend on first draw:

**[M1 for first level branches, M1 for second level branches]**

```
                              ┌── R (3/9) ──→ RR
                    R ────────┤
                    (4/10)    ├── G (5/9) ──→ RG
                              └── B (1/9) ──→ RB
                              
                    ┌── R (4/9) ──→ GR
        START ───── G ────────┤
                    (5/10)    ├── G (4/9) ──→ GG
                              └── B (1/9) ──→ GB
                              
                    ┌── R (4/9) ──→ BR
                    B ────────┤
                    (1/10)    ├── G (5/9) ──→ BG
                              └── B (0/9) ──→ BB
```

**(b)** Both green:

$$P(GG) = P(G_1) \times P(G_2|G_1) = \frac{5}{10} \times \frac{4}{9} = \frac{20}{90} = \frac{2}{9}$$ **[M1, A1]**

**(c)** At least one red:

Using complement:
$$P(\text{at least one red}) = 1 - P(\text{no red})$$

$P(\text{no red}) = P(GG) + P(GB) + P(BG) + P(BB)$

$= \frac{5}{10} \times \frac{4}{9} + \frac{5}{10} \times \frac{1}{9} + \frac{1}{10} \times \frac{5}{9} + \frac{1}{10} \times 0$

$= \frac{20}{90} + \frac{5}{90} + \frac{5}{90} + 0 = \frac{30}{90} = \frac{1}{3}$

$P(\text{at least one red}) = 1 - \frac{1}{3} = \frac{2}{3}$ **[M1]**

---

### Question 4 [4 marks]

The Venn diagram shows information about a group of 80 students and whether they study Mathematics (M) or Physics (P).

```
        ξ = 80
    ┌─────────────────────────────┐
    │            x                │
    │    ┌───────┐   ┌───────┐    │
    │    │   M   │   │   P   │    │
    │ 18 │  ┌────┼───┼────┐  │ 25 │
    │    │  │ y  │   │ z  │  │    │
    │    │  └────┼───┼────┘  │    │
    │    └───────┘   └───────┘    │
    │                             │
    └─────────────────────────────┘
```

Given that:
- 45 students study Mathematics
- 48 students study Physics
- 22 students study both subjects

**(a)** Find the values of x, y, and z. [3 marks]

**(b)** Find $P(M|P)$. [1 mark]

**Solution:**

**(a)** 

Intersection $y = 22$ **[B1]**

M only = $45 - 22 = 23$ (but diagram shows 18 in M only)

Let me recalculate: $n(M \text{ only}) = 45 - 22 = 23$

So the value shown as 18 in the M only region should be 23.

$n(P \text{ only}) = 48 - 22 = 26$ (diagram shows 25, which should be 26)

Let me work with the given values from the problem:

- $n(M \cap P) = 22$
- $n(M) = 45$
- $n(P) = 48$

$n(M \text{ only}) = 45 - 22 = 23$ **[M1]**
$n(P \text{ only}) = 48 - 22 = 26$ **[M1]**
$n(\text{neither}) = 80 - (23 + 22 + 26) = 80 - 71 = 9$ **[A1]**

So: $x = 9$ (neither), $y = 22$ (intersection), and M only = 23, P only = 26

**(b)**

$$P(M|P) = \frac{P(M \cap P)}{P(P)} = \frac{22/80}{48/80} = \frac{22}{48} = \frac{11}{24}$$ **[M1, A1]**

---

### Question 5 [5 marks]

Events A and B are such that:
- $P(A) = 0.6$
- $P(B) = 0.5$
- $P(A \cup B) = 0.8$

**(a)** Find $P(A \cap B)$. [2 marks]

**(b)** Determine whether A and B are independent. [2 marks]

**(c)** Find $P(A|B)$. [1 mark]

**Solution:**

**(a)** Using the addition formula:

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

$0.8 = 0.6 + 0.5 - P(A \cap B)$ **[M1]**

$P(A \cap B) = 0.6 + 0.5 - 0.8 = 0.3$ **[A1]**

**(b)** If independent, $P(A \cap B) = P(A) \times P(B) = 0.6 \times 0.5 = 0.3$ **[M1]**

Since $P(A \cap B) = 0.3$, A and B **are independent**. **[A1]**

**(c)**

$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.3}{0.5} = 0.6 = P(A)$$ **[M1, A1]**

This confirms independence.

---

### Question 6 [4 marks]

A box contains 3 white balls and 7 black balls. Three balls are drawn at random **without replacement**.

Find the probability that exactly two balls are white.

**Solution:**

Let W = white, B = black

We need exactly 2 white balls (and therefore 1 black ball).

Possible sequences: WWB, WBW, BWW

**[M1 for identifying all three cases]**

$P(WWB) = \frac{3}{10} \times \frac{2}{9} \times \frac{7}{8} = \frac{42}{720}$

$P(WBW) = \frac{3}{10} \times \frac{7}{9} \times \frac{2}{8} = \frac{42}{720}$

$P(BWW) = \frac{7}{10} \times \frac{3}{9} \times \frac{2}{8} = \frac{42}{720}$ **[M1 for correct probabilities]**

Note: All three probabilities are equal.

$$P(\text{exactly 2 white}) = \frac{42}{720} + \frac{42}{720} + \frac{42}{720} = \frac{126}{720} = \frac{7}{40}$$ **[M1, A1]**

---

### Question 7 [6 marks]

In a survey of 200 students about their weekend activities:
- 120 play sports (S)
- 85 read books (R)
- 70 watch movies (M)
- 40 play sports and read books
- 35 play sports and watch movies
- 25 read books and watch movies
- 15 do all three activities

**(a)** Complete the Venn diagram. [3 marks]

**(b)** Find the probability that a student does none of these activities. [1 mark]

**(c)** Find the probability that a student does exactly one of these activities. [2 marks]

**Solution:**

**(a)** Working from inside out:

All three = 15

S ∩ R only = $40 - 15 = 25$

S ∩ M only = $35 - 15 = 20$

R ∩ M only = $25 - 15 = 10$

S only = $120 - (25 + 15 + 20) = 60$

R only = $85 - (25 + 15 + 10) = 35$

M only = $70 - (20 + 15 + 10) = 25$ **[M1, M1]**

Total in circles = $60 + 25 + 35 + 20 + 15 + 10 + 25 = 190$

None = $200 - 190 = 10$ **[A1]**

**(b)**

$$P(\text{none}) = \frac{10}{200} = \frac{1}{20}$$ **[B1]**

**(c)** Exactly one means in only one circle:

$P(\text{exactly one}) = \frac{60 + 35 + 25}{200} = \frac{120}{200} = \frac{3}{5}$ **[M1, A1]**

---

### Question 8 [5 marks]

A fair coin is tossed three times.

**(a)** List all possible outcomes. [1 mark]

**(b)** Find the probability of getting exactly two heads. [2 marks]

**(c)** Find the probability of getting at least one tail. [2 marks]

**Solution:**

**(a)** Sample space:

{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} **[B1]**

(8 equally likely outcomes)

**(b)** Exactly two heads: {HHT, HTH, THH} = 3 outcomes

$$P(\text{exactly 2 heads}) = \frac{3}{8}$$ **[M1, A1]**

**(c)** Method 1: Direct counting

At least one tail: {HHT, HTH, THH, HTT, THT, TTH, TTT} = 7 outcomes

$$P(\text{at least one tail}) = \frac{7}{8}$$ **[M1, A1]**

Method 2: Using complement

$$P(\text{at least one tail}) = 1 - P(\text{no tails}) = 1 - P(HHH) = 1 - \frac{1}{8} = \frac{7}{8}$$

---

### Question 9 [6 marks]

Two events A and B are such that:
- $P(A) = 0.4$
- $P(B|A) = 0.6$
- $P(A|B) = 0.5$

**(a)** Find $P(A \cap B)$. [2 marks]

**(b)** Find $P(B)$. [2 marks]

**(c)** Determine whether A and B are independent. [2 marks]

**Solution:**

**(a)** Using the multiplication rule:

$P(A \cap B) = P(A) \times P(B|A) = 0.4 \times 0.6 = 0.24$ **[M1, A1]**

**(b)** Using conditional probability:

$P(A|B) = \frac{P(A \cap B)}{P(B)}$

$0.5 = \frac{0.24}{P(B)}$ **[M1]**

$P(B) = \frac{0.24}{0.5} = 0.48$ **[A1]**

**(c)** Check independence:

If independent: $P(A \cap B) = P(A) \times P(B) = 0.4 \times 0.48 = 0.192$ **[M1]**

Since $P(A \cap B) = 0.24 \neq 0.192$, A and B are **NOT independent**. **[A1]**

---

### Question 10 [4 marks]

A biased coin has $P(\text{heads}) = 0.7$. The coin is tossed 5 times.

Find the probability of getting:
**(a)** 5 heads in a row
**(b)** at least one tail

**Solution:**

**(a)** Since each toss is independent:

$P(5 \text{ heads}) = 0.7^5 = 0.16807$ **[M1, A1]**

**(b)** Using complement:

$P(\text{at least one tail}) = 1 - P(\text{no tails})$

$= 1 - P(5 \text{ heads})$ **[M1]**

$= 1 - 0.16807 = 0.83193 \approx 0.832$ **[A1]**

---

## EXAM FOCUS & STRATEGY

### 📊 Frequently Tested Question Types

| Type | Frequency | Key Approach |
|------|-----------|--------------|
| Venn diagram completion | High | Work from inside out |
| Conditional probability | High | Use formula directly |
| Tree diagrams | High | Multiply along, add across |
| Independence testing | Medium | Check $P(A \cap B) = P(A) \times P(B)$ |
| Expected frequency | Medium | Probability × trials |
| Complement problems | Medium | $1 - P(\text{event})$ |

### 🎯 Typical Problem-Solving Patterns

1. **"Given that..." → Conditional probability**
   - Write formula: $P(A|B) = \frac{P(A \cap B)}{P(B)}$
   - Identify numerator and denominator from data

2. **"At least one..." → Use complement**
   - $P(\text{at least one}) = 1 - P(\text{none})$
   - Often simpler than direct counting

3. **Sequential events → Tree diagram**
   - Draw tree showing all branches
   - Multiply along branches for "AND"
   - Add outcomes for "OR"

4. **Venn diagram from text → Fill systematically**
   - Start with intersection
   - Calculate "only" regions
   - Find "neither" region last

### 📝 Command Word Guidance

| Command Word | What Examiners Want |
|--------------|---------------------|
| **Find** | Calculate and give answer |
| **Calculate** | Show working, give answer |
| **Show that** | Verify using given information |
| **Determine** | Make a conclusion with justification |
| **Complete** | Fill in missing values (Venn diagrams, tables) |
| **Explain** | Give mathematical reason |

### ✅ How to Gain Full Marks

| Mark Type | How to Earn It |
|-----------|----------------|
| **M marks** (Method) | Show correct formula or approach |
| **A marks** (Accuracy) | Get correct answer from correct method |
| **B marks** (Independent) | Correct answer shown independently |

### Checklist Before Submitting

- [ ] All probabilities between 0 and 1?
- [ ] Fractions in simplest form?
- [ ] Venn diagram values sum to total?
- [ ] Tree diagram branches sum to 1 at each node?
- [ ] Show all working clearly?
- [ ] Answer in required format (fraction/decimal/percentage)?

---

*Practice questions prepared for Pearson Edexcel IGCSE Mathematics*
*Mark allocations and solutions follow official mark scheme style*
