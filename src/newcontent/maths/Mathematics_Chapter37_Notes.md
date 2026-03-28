# Chapter 37: Handling Data 4 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics | Unit 5

---

# 1. INTRODUCTION TO PROBABILITY

## 1.1 What is Probability?

**Probability** is a measure of how likely an event is to occur. It quantifies uncertainty and helps us make predictions about random events.

### Key Terms

| Term | Definition |
|------|------------|
| **Experiment** | A process with an uncertain outcome (e.g., rolling a die) |
| **Outcome** | A single possible result of an experiment (e.g., getting a 6) |
| **Event** | A collection of one or more outcomes (e.g., getting an even number) |
| **Sample Space** | The set of all possible outcomes, denoted $S$ or $\Omega$ |
| **Impossible Event** | An event that cannot happen, probability = 0 |
| **Certain Event** | An event that will definitely happen, probability = 1 |

### The Probability Scale

```
Impossible ←—————————————————————→ Certain
     0         0.25    0.5    0.75      1
     |_________|_______|_______|_________|
     Unlikely   Even   Likely  Very Likely
               Chance  Chance
```

> **Key Formula:** All probabilities satisfy: $0 \leq P(E) \leq 1$

---

## 1.2 Notation and Conventions

- **$P(A)$** denotes the probability of event $A$ occurring
- Probabilities can be expressed as:
  - **Fractions**: $P(\text{heads}) = \frac{1}{2}$
  - **Decimals**: $P(\text{heads}) = 0.5$
  - **Percentages**: $P(\text{heads}) = 50\%$

### Converting Between Forms

$$\text{Decimal} = \frac{\text{Percentage}}{100}$$

**Example:** $35\% = 0.35 = \frac{35}{100} = \frac{7}{20}$

---

# 2. THEORETICAL PROBABILITY

## 2.1 Definition and Formula

**Theoretical Probability** is calculated using logic and mathematical reasoning, without actually performing the experiment.

### 📐 Fundamental Formula

$$P(\text{event}) = \frac{\text{number of favorable outcomes}}{\text{total number of possible outcomes}}$$

**In symbols:** $P(A) = \frac{n(A)}{n(S)}$

Where:
- $n(A)$ = number of outcomes in event $A$
- $n(S)$ = total number of outcomes in sample space

---

## 2.2 Calculating Theoretical Probability

### Worked Example 1: Fair Die

**Problem:** A fair six-sided die is rolled. Find the probability of:
- (a) Getting a 4
- (b) Getting an even number
- (c) Getting a number greater than 4

**Solution:**

**Step 1:** Identify the sample space
$$S = \{1, 2, 3, 4, 5, 6\}, \quad n(S) = 6$$

**(a) Getting a 4:**
- Favorable outcomes: $\{4\}$
- $n(A) = 1$
- $P(4) = \frac{1}{6}$

**(b) Getting an even number:**
- Event: $A = \{2, 4, 6\}$
- $n(A) = 3$
- $P(\text{even}) = \frac{3}{6} = \frac{1}{2}$

**(c) Getting a number greater than 4:**
- Event: $A = \{5, 6\}$
- $n(A) = 2$
- $P(\text{greater than 4}) = \frac{2}{6} = \frac{1}{3}$

---

### Worked Example 2: Playing Cards

**Problem:** A card is drawn from a standard 52-card deck. Find the probability of:
- (a) Drawing a King
- (b) Drawing a heart
- (c) Drawing the King of hearts

**Solution:**

**Step 1:** Identify the sample space
- Total cards = 52, so $n(S) = 52$

**(a) Drawing a King:**
- Kings in deck: $K\heartsuit, K\diamondsuit, K\spadesuit, K\clubsuit$
- $n(A) = 4$
- $P(\text{King}) = \frac{4}{52} = \frac{1}{13}$

**(b) Drawing a heart:**
- Hearts in deck: 13 cards
- $n(A) = 13$
- $P(\text{heart}) = \frac{13}{52} = \frac{1}{4}$

**(c) Drawing the King of hearts:**
- Only one King of hearts
- $n(A) = 1$
- $P(K\heartsuit) = \frac{1}{52}$

---

### Worked Example 3: Counters in a Bag

**Problem:** A bag contains 4 red counters, 5 blue counters, and 3 green counters. A counter is selected at random. Find the probability that it is:
- (a) Red
- (b) Not blue
- (c) Red or green

**Solution:**

**Step 1:** Find total number of counters
$$n(S) = 4 + 5 + 3 = 12$$

**(a) Probability of red:**
$$P(\text{red}) = \frac{4}{12} = \frac{1}{3}$$

**(b) Probability of not blue:**
- Not blue = Red or Green = $4 + 3 = 7$ counters
$$P(\text{not blue}) = \frac{7}{12}$$

**(c) Probability of red or green:**
$$P(\text{red or green}) = \frac{4 + 3}{12} = \frac{7}{12}$$

> ** Exam Insight:** "Or" in probability typically means adding favorable outcomes!

---

## 2.3 Important Probability Properties

### Property 1: Sum of All Probabilities

> **Key Rule:** The sum of probabilities of all possible outcomes equals 1.
> $$\sum P(\text{all outcomes}) = 1$$

### Property 2: Complementary Events

The **complement** of event $A$, denoted $A'$ or $\bar{A}$, means "not $A$".

> **Key Formula:** $P(A') = 1 - P(A)$

**Worked Example:**
If $P(\text{rain}) = 0.3$, find $P(\text{no rain})$.

$$P(\text{no rain}) = 1 - P(\text{rain}) = 1 - 0.3 = 0.7$$

> ** Common Mistake:** Students often forget that $P(A) + P(A') = 1$ and try to calculate $P(A')$ from scratch instead of using this relationship.

---

## 2.4 Mutually Exclusive Events

Two events are **mutually exclusive** (or disjoint) if they cannot occur at the same time.

### Examples:
- Rolling a 3 and rolling a 5 (cannot happen simultaneously)
- Drawing a heart and drawing a spade (mutually exclusive)
- Drawing a King and drawing a heart (NOT mutually exclusive - King of hearts exists!)

### Addition Rule for Mutually Exclusive Events

> **Key Formula:** If $A$ and $B$ are mutually exclusive:
> $$P(A \text{ or } B) = P(A) + P(B)$$

**Worked Example:**
A fair die is rolled. Find $P(\text{1 or 6})$.

**Method 1:** Count favorable outcomes
- Event = $\{1, 6\}$, $n(A) = 2$
- $P(1 \text{ or } 6) = \frac{2}{6} = \frac{1}{3}$

**Method 2:** Using the addition rule
- $P(1) = \frac{1}{6}$, $P(6) = \frac{1}{6}$
- $P(1 \text{ or } 6) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$ ✓

---

# 3. EXPERIMENTAL PROBABILITY

## 3.1 Definition and Formula

**Experimental Probability** (also called **Relative Frequency** or **Empirical Probability**) is based on actual data from experiments or observations.

### 📐 Formula

$$P(\text{event}) = \frac{\text{number of times event occurs}}{\text{total number of trials}}$$

**In symbols:** $P(A) = \frac{\text{frequency of } A}{\text{total frequency}}$

---

## 3.2 Experimental vs Theoretical Probability

| Aspect | Theoretical | Experimental |
|--------|-------------|--------------|
| **Basis** | Mathematical reasoning | Actual observations |
| **Requires** | Knowledge of all outcomes | Conducting experiments |
| **Accuracy** | Exact | Approaches theoretical with more trials |
| **Use** | Fair games, ideal conditions | Real-world data, biased objects |

### The Law of Large Numbers

> **Key Principle:** As the number of trials increases, the experimental probability approaches the theoretical probability.

---

## 3.3 Worked Examples

### Worked Example 4: Coin Toss Experiment

**Problem:** A coin was tossed 200 times. Heads appeared 97 times. Find:
- (a) The experimental probability of getting heads
- (b) The theoretical probability of getting heads
- (c) Compare the two values

**Solution:**

**(a) Experimental probability:**
$$P(\text{heads}) = \frac{97}{200} = 0.485$$

**(b) Theoretical probability:**
$$P(\text{heads}) = \frac{1}{2} = 0.5$$

**(c) Comparison:**
- Experimental (0.485) is close to theoretical (0.5)
- With more trials, experimental would get even closer

---

### Worked Example 5: Biased Die

**Problem:** A die is biased. It was rolled 300 times with the following results:

| Score | 1 | 2 | 3 | 4 | 5 | 6 |
|-------|---|---|---|---|---|---|
| Frequency | 60 | 45 | 30 | 75 | 40 | 50 |

Find the experimental probability of:
- (a) Rolling a 4
- (b) Rolling an even number
- (c) Rolling a number less than 3

**Solution:**

**Step 1:** Verify total trials
$$\text{Total} = 60 + 45 + 30 + 75 + 40 + 50 = 300$$

**(a) P(rolling a 4):**
$$P(4) = \frac{75}{300} = \frac{1}{4} = 0.25$$

**(b) P(rolling even) = P(2) + P(4) + P(6):**
$$P(\text{even}) = \frac{45 + 75 + 50}{300} = \frac{170}{300} = \frac{17}{30}$$

**(c) P(less than 3) = P(1) + P(2):**
$$P(\text{less than 3}) = \frac{60 + 45}{300} = \frac{105}{300} = \frac{7}{20}$$

> ** Exam Insight:** For biased objects, you MUST use experimental probability since theoretical probability cannot be determined!

---

### Worked Example 6: Finding Expected Frequency

**Problem:** Based on the biased die in Example 5, if the die is rolled 60 more times, how many times would you expect to get a 6?

**Solution:**

**Step 1:** Find experimental probability of 6
$$P(6) = \frac{50}{300} = \frac{1}{6}$$

**Step 2:** Calculate expected frequency
$$\text{Expected frequency} = P(\text{event}) \times \text{number of trials}$$
$$\text{Expected 6s} = \frac{1}{6} \times 60 = 10$$

> **Key Formula:** Expected Frequency = $P(\text{event}) \times \text{number of trials}$

---

## 3.4 Using Experimental Probability to Estimate

### Worked Example 7: Quality Control

**Problem:** A factory produces light bulbs. In a sample of 500 bulbs, 15 were found to be defective. If the factory produces 8000 bulbs:
- (a) Estimate how many will be defective
- (b) Find the probability that a bulb is not defective

**Solution:**

**(a) Estimate defective bulbs:**
$$P(\text{defective}) = \frac{15}{500} = 0.03$$
$$\text{Expected defective} = 0.03 \times 8000 = 240$$

**(b) Probability of not defective:**
$$P(\text{not defective}) = 1 - P(\text{defective}) = 1 - 0.03 = 0.97$$

---

# 4. PROBABILITY FROM TABLES AND CHARTS

## 4.1 Two-Way Tables

### Worked Example 8: Survey Data

**Problem:** A survey was conducted on 100 students about their favorite subject:

|        | Maths | English | Science | Total |
|--------|-------|---------|---------|-------|
| Boys   | 15    | 10      | 20      | 45    |
| Girls  | 12    | 25      | 18      | 55    |
| Total  | 27    | 35      | 38      | 100   |

A student is selected at random. Find the probability that the student:
- (a) Is a boy
- (b) Prefers Maths
- (c) Is a girl who prefers Science
- (d) Prefers English given they are a girl

**Solution:**

**(a) P(Boy):**
$$P(\text{Boy}) = \frac{45}{100} = \frac{9}{20}$$

**(b) P(Maths):**
$$P(\text{Maths}) = \frac{27}{100}$$

**(c) P(Girl AND Science):**
$$P(\text{Girl and Science}) = \frac{18}{100} = \frac{9}{50}$$

**(d) P(English | Girl):**
$$P(\text{English | Girl}) = \frac{25}{55} = \frac{5}{11}$$

> ** Common Mistake:** In part (d), the denominator changes! We're only considering girls, so the total is 55, not 100.

---

## 4.2 Frequency Tables

### Worked Example 9: Spinner Results

**Problem:** A spinner has 5 equal sections numbered 1-5. It was spun 80 times:

| Number | 1 | 2 | 3 | 4 | 5 |
|--------|---|---|---|---|---|
| Frequency | 18 | 14 | 16 | 17 | 15 |

Find:
- (a) The experimental probability of landing on 3
- (b) The theoretical probability of landing on 3
- (c) Does the spinner appear to be fair? Explain.

**Solution:**

**(a) Experimental probability:**
$$P(3) = \frac{16}{80} = \frac{1}{5} = 0.2$$

**(b) Theoretical probability (if fair):**
$$P(3) = \frac{1}{5} = 0.2$$

**(c) Analysis:**
- Experimental (0.2) equals theoretical (0.2)
- The spinner appears to be fair
- All frequencies are reasonably close to $80 \div 5 = 16$

---

# 5. LISTING OUTCOMES

## 5.1 Systematic Listing

### Worked Example 10: Two Coins

**Problem:** Two fair coins are tossed. List all possible outcomes and find the probability of getting:
- (a) Two heads
- (b) At least one head
- (c) Two different results

**Solution:**

**Step 1:** List all outcomes systematically
$$S = \{HH, HT, TH, TT\}$$
where H = Head, T = Tail

$n(S) = 4$

**(a) P(two heads):**
$$P(HH) = \frac{1}{4}$$

**(b) P(at least one head):**
- Favorable: $\{HH, HT, TH\}$
- $n(A) = 3$
$$P(\text{at least one head}) = \frac{3}{4}$$

**(c) P(different results):**
- Favorable: $\{HT, TH\}$
- $n(A) = 2$
$$P(\text{different}) = \frac{2}{4} = \frac{1}{2}$$

---

### Worked Example 11: Two Dice Sum

**Problem:** Two fair dice are rolled. Find the probability that the sum is:
- (a) 7
- (b) Greater than 9
- (c) At most 4

**Solution:**

**Step 1:** Total number of outcomes
- Each die has 6 faces
- Total outcomes = $6 \times 6 = 36$

**Step 2:** Find favorable outcomes

**(a) Sum = 7:**
- $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$
- $n(A) = 6$
$$P(\text{sum} = 7) = \frac{6}{36} = \frac{1}{6}$$

**(b) Sum > 9 (i.e., 10, 11, 12):**
- Sum = 10: $(4,6), (5,5), (6,4)$ → 3 outcomes
- Sum = 11: $(5,6), (6,5)$ → 2 outcomes
- Sum = 12: $(6,6)$ → 1 outcome
- Total: $3 + 2 + 1 = 6$
$$P(\text{sum} > 9) = \frac{6}{36} = \frac{1}{6}$$

**(c) Sum ≤ 4:**
- Sum = 2: $(1,1)$ → 1 outcome
- Sum = 3: $(1,2), (2,1)$ → 2 outcomes
- Sum = 4: $(1,3), (2,2), (3,1)$ → 3 outcomes
- Total: $1 + 2 + 3 = 6$
$$P(\text{sum} \leq 4) = \frac{6}{36} = \frac{1}{6}$$

> ** Exam Insight:** Create a 6×6 grid to visualize all outcomes when rolling two dice. This helps avoid missing any combinations!

---

# 6. EXAM FOCUS & STRATEGY

## 6.1 Frequently Tested Question Types

### Type 1: Basic Probability Calculations
- Given outcomes, find probability
- Express answer as fraction, decimal, or percentage

**Strategy:** Always simplify fractions unless told otherwise.

### Type 2: Complementary Probability
- Find $P(\text{not } A)$
- Often appears in word problems

**Strategy:** Use $P(A') = 1 - P(A)$ - faster than recalculating!

### Type 3: Experimental Probability Tables
- Read frequency from tables
- Calculate relative frequency

**Strategy:** Check that you've used the correct total (sometimes it changes).

### Type 4: Expected Frequency
- "How many would you expect..."
- Multiply probability by number of trials

**Strategy:** Set up as: $\text{Expected} = P \times n$

### Type 5: Comparing Probabilities
- Compare experimental vs theoretical
- Determine if game is fair

**Strategy:** Convert all probabilities to same format (decimals usually easiest).

---

## 6.2 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Calculate** | Show working, give numerical answer |
| **Find** | Determine the value, show method |
| **Write down** | No working needed, just the answer |
| **Explain** | Give reasons, may need to compare values |
| **Estimate** | Use probability to predict, show calculation |
| **Simplify** | Give answer in simplest form |

---

## 6.3 Gaining Full Marks - Mark Scheme Insight

### Typical Mark Allocation

**1 mark questions:**
- Write down probability
- Simple calculation

**2 mark questions:**
- M1: Correct method
- A1: Correct answer with simplification

**3-4 mark questions:**
- M1: Set up probability calculation
- M1: Correct denominator/total
- A1: Correct probability
- A1: Simplified answer or comparison

### Examiner Tips

1. **Always show working** - Even if you can do it mentally, write down the method
2. **Check your denominator** - Most errors come from wrong totals
3. **Simplify fractions** - Unless question asks otherwise
4. **Answer the question asked** - "Probability" not "number of outcomes"
5. **Use correct notation** - $P(A) = ...$ not just the number

---

## 6.4 Common Mistakes to Avoid

| ❌ Common Error | ✅ Correct Approach |
|-----------------|---------------------|
| Using wrong total | Always verify $n(S)$ before calculating |
| Forgetting to simplify | $\frac{4}{8}$ should be $\frac{1}{2}$ |
| Confusing "or" with "and" | "Or" means add; "and" means multiply (for independent) |
| Probability > 1 | Check calculation - impossible! |
| Not answering the question | Read carefully - probability or frequency? |

---

## 6.5 Quick Reference Formulas

| Formula | When to Use |
|---------|-------------|
| $P(A) = \frac{n(A)}{n(S)}$ | Basic probability |
| $P(A') = 1 - P(A)$ | Complementary events |
| $P(A \text{ or } B) = P(A) + P(B)$ | Mutually exclusive events |
| $\text{Expected} = P \times n$ | Expected frequency |
| $\sum P = 1$ | Sum of all probabilities |

---

# 7. ADVANCED APPLICATIONS

## 7.1 Probability from Venn Diagrams

### Worked Example 12

**Problem:** In a class of 30 students, 18 play football, 12 play basketball, and 5 play both. A student is selected at random. Find the probability that the student:
- (a) Plays only football
- (b) Plays neither sport
- (c) Plays exactly one sport

**Solution:**

**Step 1:** Draw/analyze Venn diagram
- Football only: $18 - 5 = 13$
- Basketball only: $12 - 5 = 7$
- Both: 5
- Neither: $30 - 13 - 7 - 5 = 5$

**(a) P(football only):**
$$P = \frac{13}{30}$$

**(b) P(neither):**
$$P = \frac{5}{30} = \frac{1}{6}$$

**(c) P(exactly one sport):**
$$P = \frac{13 + 7}{30} = \frac{20}{30} = \frac{2}{3}$$

---

## 7.2 Combined Events (Introduction)

### Worked Example 13: Independent Events Preview

**Problem:** A coin is flipped and a die is rolled. Find the probability of getting:
- (a) Heads and a 6
- (b) Tails and an even number

**Solution:**

**Step 1:** Find individual probabilities
- $P(\text{Heads}) = \frac{1}{2}$
- $P(6) = \frac{1}{6}$
- $P(\text{Tails}) = \frac{1}{2}$
- $P(\text{even}) = \frac{3}{6} = \frac{1}{2}$

**Step 2:** For independent events, multiply

**(a) P(Heads AND 6):**
$$P = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$$

**(b) P(Tails AND even):**
$$P = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$$

---

# SUMMARY

## Key Takeaways

1. **Probability measures likelihood** on a scale from 0 (impossible) to 1 (certain)

2. **Theoretical probability** uses mathematical reasoning:
   $$P(A) = \frac{\text{favorable outcomes}}{\text{total outcomes}}$$

3. **Experimental probability** uses actual data:
   $$P(A) = \frac{\text{frequency of event}}{\text{total frequency}}$$

4. **Complementary events:** $P(A') = 1 - P(A)$

5. **Mutually exclusive events:** $P(A \text{ or } B) = P(A) + P(B)$

6. **Expected frequency:** Multiply probability by number of trials

7. **Always check** that your probability is between 0 and 1

---

*Document prepared for Pearson Edexcel IGCSE Mathematics - Handling Data 4*
*© Study Package for A* Students*
