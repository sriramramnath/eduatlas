# Chapter 38: Handling Data 5 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics

---

# PART A: MULTIPLE CHOICE QUESTIONS (10 marks)

**Choose the correct answer. Each question is worth 1 mark.**

---

### Question 1

The probability that it rains on any given day is 0.35. What is the probability that it does **not** rain?

A) 0.35  
B) 0.55  
C) 0.65  
D) 0.75

**Answer: C**

**Explanation:** Using the complement rule:
$$P(\text{not rain}) = 1 - P(\text{rain}) = 1 - 0.35 = 0.65$$

---

### Question 2

A fair six-sided die is rolled. What is the probability of rolling either a 2 or a 5?

A) $\frac{1}{6}$  
B) $\frac{1}{3}$  
C) $\frac{1}{2}$  
D) $\frac{2}{3}$

**Answer: B**

**Explanation:** Rolling a 2 and rolling a 5 are mutually exclusive events:
$$P(2 \text{ or } 5) = P(2) + P(5) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$$

---

### Question 3

Two fair coins are tossed. What is the probability of getting exactly one head?

A) $\frac{1}{4}$  
B) $\frac{1}{2}$  
C) $\frac{3}{4}$  
D) $\frac{1}{3}$

**Answer: B**

**Explanation:** Sample space: {HH, HT, TH, TT}
Exactly one head: {HT, TH} – 2 outcomes
$$P(\text{exactly one head}) = \frac{2}{4} = \frac{1}{2}$$

---

### Question 4

A bag contains 5 red and 3 blue balls. Two balls are drawn **with replacement**. What is the probability that both are red?

A) $\frac{25}{64}$  
B) $\frac{20}{56}$  
C) $\frac{5}{8}$  
D) $\frac{15}{64}$

**Answer: A**

**Explanation:** With replacement means independent events.
$$P(\text{red}) = \frac{5}{8}$$
$$P(\text{both red}) = \frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$$

---

### Question 5

A bag contains 5 red and 3 blue balls. Two balls are drawn **without replacement**. What is the probability that both are red?

A) $\frac{25}{64}$  
B) $\frac{20}{56}$  
C) $\frac{5}{14}$  
D) $\frac{10}{28}$

**Answer: C**

**Explanation:** Without replacement means dependent events.
$$P(\text{first red}) = \frac{5}{8}$$
$$P(\text{second red} \mid \text{first red}) = \frac{4}{7}$$
$$P(\text{both red}) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$$

---

### Question 6

If events A and B are independent with $P(A) = 0.4$ and $P(B) = 0.5$, what is $P(A \text{ and } B)$?

A) 0.9  
B) 0.2  
C) 0.1  
D) 0.45

**Answer: B**

**Explanation:** For independent events:
$$P(A \cap B) = P(A) \times P(B) = 0.4 \times 0.5 = 0.2$$

---

### Question 7

In a class, $P(\text{student studies Maths}) = 0.6$ and $P(\text{student studies Physics}) = 0.4$. If 24% of students study both subjects, are these events independent?

A) Yes, because $0.6 \times 0.4 = 0.24$  
B) No, because $0.6 \times 0.4 \neq 0.24$  
C) Yes, because some students study both  
D) Cannot determine from given information

**Answer: A**

**Explanation:** Check independence: $P(M) \times P(P) = 0.6 \times 0.4 = 0.24$
Since $P(M \cap P) = 0.24 = P(M) \times P(P)$, the events **are independent**.

---

### Question 8

A fair die is rolled twice. What is the probability that the sum is 7?

A) $\frac{1}{6}$  
B) $\frac{1}{12}$  
C) $\frac{7}{36}$  
D) $\frac{1}{9}$

**Answer: A**

**Explanation:** Pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) – 6 outcomes
Total outcomes: $6 \times 6 = 36$
$$P(\text{sum is 7}) = \frac{6}{36} = \frac{1}{6}$$

---

### Question 9

If $P(A) = 0.3$, $P(B) = 0.4$, and $P(A \cap B) = 0.1$, what is $P(A \mid B)$?

A) 0.12  
B) 0.25  
C) $\frac{1}{3}$  
D) 0.4

**Answer: B**

**Explanation:** Using conditional probability formula:
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{0.1}{0.4} = 0.25$$

---

### Question 10

A spinner has 4 equal sections coloured Red, Blue, Green, and Yellow. It is spun twice. What is the probability of getting at least one Red?

A) $\frac{1}{16}$  
B) $\frac{1}{4}$  
C) $\frac{7}{16}$  
D) $\frac{3}{4}$

**Answer: C**

**Explanation:** Using complement:
$$P(\text{at least one Red}) = 1 - P(\text{no Red})$$
$$P(\text{no Red in one spin}) = \frac{3}{4}$$
$$P(\text{no Red in two spins}) = \frac{3}{4} \times \frac{3}{4} = \frac{9}{16}$$
$$P(\text{at least one Red}) = 1 - \frac{9}{16} = \frac{7}{16}$$

---

# PART B: TRUE/FALSE QUESTIONS (10 marks)

**State whether each statement is TRUE or FALSE. For FALSE statements, provide the correction.**

---

### Question 11

**Statement:** If two events are mutually exclusive, they cannot occur at the same time.

**Answer: TRUE**

**Explanation:** This is the definition of mutually exclusive events. For example, you cannot roll both a 3 and a 5 on a single die roll.

---

### Question 12

**Statement:** For any event A, $P(A) + P(A') = 1$.

**Answer: TRUE**

**Explanation:** An event either occurs or doesn't occur. These are complementary events, and their probabilities must sum to 1.

---

### Question 13

**Statement:** If $P(A) = 0.3$ and $P(B) = 0.4$, then $P(A \text{ or } B)$ must equal 0.7.

**Answer: FALSE**

**Correction:** $P(A \text{ or } B) = P(A) + P(B) - P(A \cap B)$, which could be less than 0.7 if events overlap.

**Explanation:** The statement assumes events are mutually exclusive. If events can occur together, we must subtract the intersection. For example, if $P(A \cap B) = 0.1$, then $P(A \cup B) = 0.3 + 0.4 - 0.1 = 0.6$.

---

### Question 14

**Statement:** For independent events A and B, $P(A \mid B) = P(A)$.

**Answer: TRUE**

**Explanation:** This is a key property of independent events. Knowing that B has occurred does not change the probability of A occurring.

---

### Question 15

**Statement:** When drawing balls from a bag without replacement, the probabilities for each draw remain the same.

**Answer: FALSE**

**Correction:** When drawing without replacement, the total number of balls decreases and probabilities change after each draw.

**Explanation:** For example, if a bag has 3 red and 7 blue balls, $P(\text{first red}) = \frac{3}{10}$, but $P(\text{second red} \mid \text{first red}) = \frac{2}{9}$ because one red ball has been removed.

---

### Question 16

**Statement:** $P(A \mid B)$ and $P(B \mid A)$ always have the same value.

**Answer: FALSE**

**Correction:** $P(A \mid B)$ and $P(B \mid A)$ are generally different values.

**Explanation:** Using the formula:
- $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$
- $P(B \mid A) = \frac{P(A \cap B)}{P(A)}$

Since $P(A)$ and $P(B)$ are usually different, these conditional probabilities are different.

---

### Question 17

**Statement:** In a tree diagram, you multiply along branches for "AND" probabilities and add across outcomes for "OR" probabilities.

**Answer: TRUE**

**Explanation:** This is the fundamental rule for tree diagrams:
- Multiplication rule: $P(A \text{ and } B) = P(A) \times P(B \mid A)$
- Addition rule: $P(A \text{ or } B) = P(A) + P(B)$ for mutually exclusive outcomes

---

### Question 18

**Statement:** The probability of any event must be greater than 0.

**Answer: FALSE**

**Correction:** The probability of any event must be greater than or equal to 0 (can be exactly 0 for impossible events).

**Explanation:** $P(\text{event}) \geq 0$. An impossible event has probability 0. For example, the probability of rolling a 7 on a standard die is 0.

---

### Question 19

**Statement:** If $P(A \cap B) = 0$, then events A and B are mutually exclusive.

**Answer: TRUE**

**Explanation:** $P(A \cap B) = 0$ means the probability of both A and B occurring together is zero, which is the definition of mutually exclusive events.

---

### Question 20

**Statement:** For two independent events, $P(A \text{ or } B) = P(A) + P(B)$.

**Answer: FALSE**

**Correction:** For independent events, $P(A \text{ or } B) = P(A) + P(B) - P(A) \times P(B)$.

**Explanation:** Independent events can both occur, so they are NOT mutually exclusive. We must subtract the intersection: $P(A \cap B) = P(A) \times P(B)$ for independent events.

---

# PART C: STRUCTURED QUESTIONS

---

### Question 21 [3 marks]

A box contains 6 white balls and 4 black balls. A ball is drawn at random, its color is noted, and then it is replaced. A second ball is drawn.

**(a)** Draw a tree diagram showing all possible outcomes and their probabilities. [2 marks]

**(b)** Calculate the probability that both balls are the same color. [1 mark]

---

**Solution:**

**(a)** Tree diagram:

```
                        ┌── W (6/10) → WW [P = 0.36]
                    ┌───┤
                    │   └── B (4/10) → WB [P = 0.24]
                ┌───┤
                │   │       ┌── W (6/10) → BW [P = 0.24]
Start ──────────┤   └───────┤
                │           └── B (4/10) → BB [P = 0.16]
                │
                └── B (4/10)
```

| Award 1 mark for correct first branch probabilities |
| Award 1 mark for correct second branch probabilities |

**(b)** Same color = both white OR both black

$P(\text{same color}) = P(WW) + P(BB)$

$= 0.6 \times 0.6 + 0.4 \times 0.4$

$= 0.36 + 0.16$

$= 0.52$ or $\frac{13}{25}$

| Award 1 mark for correct answer |

**Total: 3 marks**

---

### Question 22 [4 marks]

The table shows the results of a survey about transportation to work:

| | Car | Public Transport | Total |
|---|---|---|---|
| **Male** | 35 | 15 | 50 |
| **Female** | 25 | 25 | 50 |
| **Total** | 60 | 40 | 100 |

Find:

**(a)** $P(\text{Male} \mid \text{Car})$ [1 mark]

**(b)** $P(\text{Car} \mid \text{Male})$ [1 mark]

**(c)** Are "being male" and "using a car" independent events? Show your working. [2 marks]

---

**Solution:**

**(a)** $P(\text{Male} \mid \text{Car}) = \frac{\text{Male and Car}}{\text{Total Car users}}$

$= \frac{35}{60} = \frac{7}{12}$

| Award 1 mark for correct answer |

**(b)** $P(\text{Car} \mid \text{Male}) = \frac{\text{Male and Car}}{\text{Total Males}}$

$= \frac{35}{50} = \frac{7}{10}$

| Award 1 mark for correct answer |

**(c)** Testing for independence:

Method 1:
$P(\text{Male}) = \frac{50}{100} = 0.5$
$P(\text{Male} \mid \text{Car}) = \frac{7}{12} \approx 0.583$

Since $P(\text{Male} \mid \text{Car}) \neq P(\text{Male})$, events are **NOT independent**.

| Award 1 mark for comparing values |
| Award 1 mark for correct conclusion |

**Alternative Method 2:**
$P(\text{Male}) \times P(\text{Car}) = 0.5 \times 0.6 = 0.3$
$P(\text{Male} \cap \text{Car}) = \frac{35}{100} = 0.35$

Since $0.3 \neq 0.35$, events are **NOT independent**.

**Total: 4 marks**

---

### Question 23 [5 marks]

A factory produces items using two machines. Machine A produces 55% of items, and Machine B produces 45% of items. The defect rate for Machine A is 3%, and for Machine B is 5%.

**(a)** Draw a tree diagram to represent this information. [2 marks]

**(b)** Calculate the probability that a randomly selected item is defective. [2 marks]

**(c)** If an item is found to be defective, what is the probability it came from Machine A? [1 mark]

---

**Solution:**

**(a)** Tree diagram:

```
                    ┌── Defective (0.03)
                ┌───┤
                │   └── Good (0.97)
            ┌───┤
Start ──────┤   │   ┌── Defective (0.05)
            │   └───┤
            │       └── Good (0.95)
            │
            └── Machine B (0.45)
```

| Award 1 mark for correct machine branch probabilities |
| Award 1 mark for correct defect rates |

**(b)** $P(\text{Defective}) = P(A \cap D) + P(B \cap D)$

$= (0.55 \times 0.03) + (0.45 \times 0.05)$

$= 0.0165 + 0.0225$

$= 0.039$

| Award 1 mark for correct formula/method |
| Award 1 mark for correct answer |

**(c)** $P(A \mid \text{Defective}) = \frac{P(A \cap D)}{P(D)}$

$= \frac{0.0165}{0.039}$

$= \frac{165}{390} = \frac{11}{26}$ or $0.423$ (to 3 s.f.)

| Award 1 mark for correct answer |

**Total: 5 marks**

---

### Question 24 [6 marks]

A bag contains 7 red counters and 5 green counters. Three counters are drawn at random **without replacement**.

**(a)** Find the probability that all three counters are red. [2 marks]

**(b)** Find the probability that exactly two counters are red. [2 marks]

**(c)** Find the probability that at least one counter is green. [2 marks]

---

**Solution:**

Total counters = $7 + 5 = 12$

**(a)** $P(\text{all three red}) = P(R_1) \times P(R_2 \mid R_1) \times P(R_3 \mid R_1 \cap R_2)$

$= \frac{7}{12} \times \frac{6}{11} \times \frac{5}{10}$

$= \frac{210}{1320} = \frac{21}{132} = \frac{7}{44}$

| Award 1 mark for correct method |
| Award 1 mark for correct answer |

**(b)** For exactly two red: we need RRG or RGR or GRR

$P(RRG) = \frac{7}{12} \times \frac{6}{11} \times \frac{5}{10} = \frac{35}{132}$

$P(RGR) = \frac{7}{12} \times \frac{5}{11} \times \frac{6}{10} = \frac{35}{132}$

$P(GRR) = \frac{5}{12} \times \frac{7}{11} \times \frac{6}{10} = \frac{35}{132}$

$P(\text{exactly 2 red}) = \frac{35}{132} + \frac{35}{132} + \frac{35}{132} = \frac{105}{132} = \frac{35}{44}$

| Award 1 mark for correct method |
| Award 1 mark for correct answer |

**(c)** $P(\text{at least one green}) = 1 - P(\text{no green})$

$= 1 - P(\text{all three red})$

$= 1 - \frac{7}{44}$

$= \frac{37}{44}$

| Award 1 mark for using complement method |
| Award 1 mark for correct answer |

**Total: 6 marks**

---

### Question 25 [5 marks]

In a school:
- 35% of students play football
- 25% of students play tennis
- 15% of students play both sports

A student is chosen at random.

**(a)** Draw a Venn diagram to represent this information. [2 marks]

**(b)** Find the probability that the student plays neither sport. [1 mark]

**(c)** Find the probability that the student plays exactly one sport. [1 mark]

**(d)** Given that the student plays at least one sport, find the probability that they play football. [1 mark]

---

**Solution:**

**(a)** Venn diagram:

Let F = Football, T = Tennis

$P(F \text{ only}) = 35\% - 15\% = 20\%$
$P(T \text{ only}) = 25\% - 15\% = 10\%$
$P(F \cap T) = 15\%$
$P(\text{neither}) = 100\% - 20\% - 10\% - 15\% = 55\%$

```
            ┌─────────────┐
            │  F          │
            │   ┌─────┐   │
            │20%│ 15% │   │
            │   │ F∩T │10%│ T
            │   └─────┘   │
            └─────────────┘
                  55%
```

| Award 1 mark for correct overlap |
| Award 1 mark for correct probabilities in each region |

**(b)** $P(\text{neither}) = 1 - P(F \cup T)$

$P(F \cup T) = P(F) + P(T) - P(F \cap T)$
$= 0.35 + 0.25 - 0.15 = 0.45$

$P(\text{neither}) = 1 - 0.45 = 0.55$

| Award 1 mark for correct answer |

**(c)** $P(\text{exactly one}) = P(F \text{ only}) + P(T \text{ only})$

$= 0.20 + 0.10 = 0.30$

| Award 1 mark for correct answer |

**(d)** $P(F \mid \text{at least one sport})$

$= \frac{P(F)}{P(F \cup T)}$

$= \frac{0.35}{0.45} = \frac{35}{45} = \frac{7}{9}$

| Award 1 mark for correct answer |

**Total: 5 marks**

---

### Question 26 [4 marks]

Two fair dice are rolled.

**(a)** Draw a sample space diagram showing all possible outcomes. [1 mark]

**(b)** Find the probability that both dice show the same number. [1 mark]

**(c)** Find the probability that the sum of the two numbers is greater than 9. [2 marks]

---

**Solution:**

**(a)** Sample space diagram:

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

Total outcomes = 36

| Award 1 mark for complete sample space |

**(b)** Same number (doubles): (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) – 6 outcomes

$P(\text{same}) = \frac{6}{36} = \frac{1}{6}$

| Award 1 mark for correct answer |

**(c)** Sum > 9 means sum = 10, 11, or 12

Sum = 10: (4,6), (5,5), (6,4) – 3 outcomes
Sum = 11: (5,6), (6,5) – 2 outcomes
Sum = 12: (6,6) – 1 outcome

Total = 6 outcomes

$P(\text{sum} > 9) = \frac{6}{36} = \frac{1}{6}$

| Award 1 mark for identifying correct outcomes |
| Award 1 mark for correct probability |

**Total: 4 marks**

---

### Question 27 [6 marks]

A biased coin has $P(\text{Head}) = 0.6$. The coin is tossed three times.

**(a)** Draw a tree diagram showing all possible outcomes. [2 marks]

**(b)** Find the probability of getting exactly two heads. [2 marks]

**(c)** Find the probability of getting at least two heads. [2 marks]

---

**Solution:**

**(a)** Tree diagram: $P(H) = 0.6$, $P(T) = 0.4$

```
                            ┌── H (0.6) → HHH [0.216]
                        ┌───┤
                        │   └── T (0.4) → HHT [0.144]
                    ┌───┤
                    │   │   ┌── H (0.6) → HTH [0.144]
                    │   └───┤
                ┌───┤       └── T (0.4) → HTT [0.096]
                │   │
                │   │       ┌── H (0.6) → THH [0.144]
                │   └───┬───┤
                │       │   └── T (0.4) → THT [0.096]
            ┌───┤       │
            │   │       │   ┌── H (0.6) → TTH [0.096]
Start ──────┤   └───────┴───┤
            │               └── T (0.4) → TTT [0.064]
            │
            └── T (0.4)
```

| Award 1 mark for correct first level |
| Award 1 mark for complete diagram with probabilities |

**(b)** Exactly two heads: HHT, HTH, THH

$P(HHT) = 0.6 \times 0.6 \times 0.4 = 0.144$
$P(HTH) = 0.6 \times 0.4 \times 0.6 = 0.144$
$P(THH) = 0.4 \times 0.6 \times 0.6 = 0.144$

$P(\text{exactly 2 heads}) = 0.144 + 0.144 + 0.144 = 0.432$

| Award 1 mark for identifying correct outcomes |
| Award 1 mark for correct answer |

**(c)** At least two heads = exactly 2 heads + exactly 3 heads

$P(\text{exactly 3 heads}) = P(HHH) = 0.6 \times 0.6 \times 0.6 = 0.216$

$P(\text{at least 2 heads}) = 0.432 + 0.216 = 0.648$

| Award 1 mark for correct method |
| Award 1 mark for correct answer |

**Total: 6 marks**

---

### Question 28 [5 marks]

Events A and B are such that:
- $P(A) = 0.5$
- $P(B) = 0.4$
- $P(A \cup B) = 0.7$

**(a)** Find $P(A \cap B)$. [2 marks]

**(b)** Find $P(A \mid B)$. [1 mark]

**(c)** Determine whether events A and B are independent. Give a reason for your answer. [2 marks]

---

**Solution:**

**(a)** Using: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

$0.7 = 0.5 + 0.4 - P(A \cap B)$

$P(A \cap B) = 0.5 + 0.4 - 0.7 = 0.2$

| Award 1 mark for correct formula |
| Award 1 mark for correct answer |

**(b)** $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$

$= \frac{0.2}{0.4} = 0.5$

| Award 1 mark for correct answer |

**(c)** Testing for independence:

Check: Is $P(A \mid B) = P(A)$?

$P(A \mid B) = 0.5$ and $P(A) = 0.5$

Since $P(A \mid B) = P(A)$, **events A and B ARE independent.**

**Alternative check:**
$P(A) \times P(B) = 0.5 \times 0.4 = 0.2$
$P(A \cap B) = 0.2$
Since $P(A \cap B) = P(A) \times P(B)$, events are independent.

| Award 1 mark for correct check/calculation |
| Award 1 mark for correct conclusion with reason |

**Total: 5 marks**

---

### Question 29 [4 marks]

A game involves spinning two fair spinners. Spinner A has numbers 1, 2, 3, 4. Spinner B has numbers 1, 2, 3.

**(a)** List all possible outcomes. [1 mark]

**(b)** Find the probability that the sum of the two numbers is even. [2 marks]

**(c)** The player wins if both spinners show the same number. Find the probability of winning. [1 mark]

---

**Solution:**

**(a)** Sample space (Spinner A, Spinner B):

{(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3), (4,1), (4,2), (4,3)}

Total = $4 \times 3 = 12$ outcomes

| Award 1 mark for listing all outcomes |

**(b)** Sum is even when: both odd OR both even

Spinner A odd: 1, 3  |  Spinner A even: 2, 4
Spinner B odd: 1, 3  |  Spinner B even: 2

**Both odd:** $(2 \times 2) = 4$ outcomes: (1,1), (1,3), (3,1), (3,3)
**Both even:** $(2 \times 1) = 2$ outcomes: (2,2), (4,2)

Total even sum = $4 + 2 = 6$ outcomes

$P(\text{even sum}) = \frac{6}{12} = \frac{1}{2}$

| Award 1 mark for correct method |
| Award 1 mark for correct answer |

**(c)** Same number: (1,1), (2,2), (3,3) – 3 outcomes

$P(\text{win}) = \frac{3}{12} = \frac{1}{4}$

| Award 1 mark for correct answer |

**Total: 4 marks**

---

### Question 30 [6 marks]

A box contains cards numbered 1 to 20. A card is drawn at random.

Let A be the event "the number is a multiple of 3"
Let B be the event "the number is greater than 10"

**(a)** List the outcomes in A and in B. [2 marks]

**(b)** Find $P(A \cap B)$. [1 mark]

**(c)** Find $P(A \cup B)$. [2 marks]

**(d)** Determine if events A and B are mutually exclusive. Give a reason. [1 mark]

---

**Solution:**

**(a)** Outcomes:

A (multiples of 3): {3, 6, 9, 12, 15, 18} – 6 outcomes

B (greater than 10): {11, 12, 13, 14, 15, 16, 17, 18, 19, 20} – 10 outcomes

| Award 1 mark for A |
| Award 1 mark for B |

**(b)** $A \cap B$ (multiple of 3 AND greater than 10): {12, 15, 18}

$P(A \cap B) = \frac{3}{20}$

| Award 1 mark for correct answer |

**(c)** Using: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

$P(A) = \frac{6}{20}$, $P(B) = \frac{10}{20}$

$P(A \cup B) = \frac{6}{20} + \frac{10}{20} - \frac{3}{20}$

$= \frac{13}{20}$

| Award 1 mark for correct formula |
| Award 1 mark for correct answer |

**(d)** Events A and B are **NOT mutually exclusive** because $P(A \cap B) \neq 0$.

(They have outcomes in common: 12, 15, 18)

| Award 1 mark for correct conclusion with reason |

**Total: 6 marks**

---

# 📝 MARKING GUIDANCE

## General Marking Principles

| Code | Meaning |
|------|---------|
| **M1** | Method mark for correct approach |
| **A1** | Accuracy mark for correct answer |
| **C1** | Communication mark for clear explanation |
| **B1** | Independent mark (can be awarded without M1) |

## Common Error Handling

| Error | Action |
|-------|--------|
| Arithmetic error | Award M1, withhold A1 |
| Wrong formula | No method marks |
| Correct answer, no working | Award full marks (unless "show that") |
| Probability > 1 or < 0 | Award method marks if approach correct |

---

# 🎯 EXAM SUCCESS TIPS

## Time Management
- Allocate 1 minute per mark approximately
- MCQs: 30 seconds each maximum
- Show all working for method marks

## Presentation
- Use tree diagrams for multi-stage events
- Label all probabilities clearly
- State formulas before substituting
- Box final answers

## Checking
- All probabilities should be between 0 and 1
- Probabilities in a complete tree diagram should sum to 1
- Check using complement when possible

---

*End of Quiz - Handling Data 5*
