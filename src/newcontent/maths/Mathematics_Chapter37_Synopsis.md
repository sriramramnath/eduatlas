# Chapter 37: Handling Data 4 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics | Quick Reference Guide

---

# 📊 PROBABILITY FUNDAMENTALS

## The Probability Scale

```
0 ←—————————————————————→ 1
Impossible              Certain
```

- All probabilities: **$0 \leq P \leq 1$**
- Can be expressed as: **fractions, decimals, or percentages**

---

# 📐 ESSENTIAL FORMULAS

## Core Formula Table

| Formula | Description |
|---------|-------------|
| $P(A) = \frac{n(A)}{n(S)}$ | Theoretical probability |
| $P(A) = \frac{\text{frequency}}{\text{total trials}}$ | Experimental probability |
| $P(A') = 1 - P(A)$ | Complementary events |
| $P(A \cup B) = P(A) + P(B)$ | Mutually exclusive events |
| $\text{Expected} = P \times n$ | Expected frequency |
| $\sum P(\text{all outcomes}) = 1$ | Sum of probabilities |

---

# 🎯 THEORETICAL PROBABILITY

## Key Points
- Based on **logic and reasoning**
- Used for **fair** objects (fair die, fair coin)
- Requires knowing **all possible outcomes**

## Quick Method
1. Count favorable outcomes
2. Count total outcomes
3. Divide and simplify

## Example
Roll a die: $P(5) = \frac{1}{6}$

---

# 📈 EXPERIMENTAL PROBABILITY

## Key Points
- Based on **actual experiments/data**
- Also called **relative frequency**
- Used for **biased** objects

## Quick Method
1. Find frequency of event
2. Find total trials
3. Divide

## Law of Large Numbers
> More trials → Experimental probability → Theoretical probability

---

# ⚡ QUICK RULES

## Complementary Events

| Event | Complement | Relationship |
|-------|------------|--------------|
| $A$ | $A'$ (not A) | $P(A) + P(A') = 1$ |
| Rain | No rain | $P(\text{no rain}) = 1 - P(\text{rain})$ |
| Pass | Fail | $P(\text{fail}) = 1 - P(\text{pass})$ |

## Mutually Exclusive Events
- **Cannot happen together**
- Add probabilities for "or"

**Example:**
$P(1 \text{ or } 2) = P(1) + P(2) = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$

---

# 🔢 COMMON SAMPLE SPACES

| Experiment | Sample Space | $n(S)$ |
|------------|--------------|--------|
| Coin flip | $\{H, T\}$ | 2 |
| Fair die | $\{1,2,3,4,5,6\}$ | 6 |
| Two coins | $\{HH, HT, TH, TT\}$ | 4 |
| Two dice | $6 \times 6 = 36$ pairs | 36 |
| Pack of cards | 52 cards | 52 |

---

# 🃏 PLAYING CARDS REFERENCE

| Type | Count | Probability |
|------|-------|-------------|
| Total cards | 52 | — |
| Hearts/Diamonds/Spades/Clubs | 13 each | $\frac{1}{4}$ |
| Picture cards (J,Q,K) | 12 | $\frac{3}{13}$ |
| Aces | 4 | $\frac{1}{13}$ |
| Each number (2-10) | 4 each | $\frac{1}{13}$ |
| Red cards | 26 | $\frac{1}{2}$ |

---

# 📋 TWO DICE SUMS TABLE

## Quick Reference (Total outcomes = 36)

| Sum | Combinations | Count | Probability |
|-----|--------------|-------|-------------|
| 2 | $(1,1)$ | 1 | $\frac{1}{36}$ |
| 3 | $(1,2), (2,1)$ | 2 | $\frac{1}{18}$ |
| 4 | $(1,3), (2,2), (3,1)$ | 3 | $\frac{1}{12}$ |
| 5 | $(1,4), (2,3), (3,2), (4,1)$ | 4 | $\frac{1}{9}$ |
| 6 | $(1,5), (2,4), (3,3), (4,2), (5,1)$ | 5 | $\frac{5}{36}$ |
| 7 | $(1,6), (2,5), ... , (6,1)$ | 6 | $\frac{1}{6}$ |
| 8 | $(2,6), (3,5), ... , (6,2)$ | 5 | $\frac{5}{36}$ |
| 9 | $(3,6), (4,5), ... , (6,3)$ | 4 | $\frac{1}{9}$ |
| 10 | $(4,6), (5,5), (6,4)$ | 3 | $\frac{1}{12}$ |
| 11 | $(5,6), (6,5)$ | 2 | $\frac{1}{18}$ |
| 12 | $(6,6)$ | 1 | $\frac{1}{36}$ |

> **Key pattern:** Sum = 7 has the highest probability ($\frac{1}{6}$)

---

# ✅ EXAM CHECKLIST

## Before the Exam, Know How To:

- [ ] Calculate theoretical probability from scratch
- [ ] Calculate experimental probability from data
- [ ] Use $P(A') = 1 - P(A)$ efficiently
- [ ] Find expected frequency
- [ ] List outcomes systematically
- [ ] Work with two-way tables
- [ ] Identify mutually exclusive events
- [ ] Convert between fractions, decimals, percentages

---

#  COMMON ERRORS

| Error | Correction |
|-------|------------|
| Wrong denominator | Always verify total $n(S)$ |
| $P > 1$ | Check calculation - impossible! |
| Not simplifying | $\frac{4}{8} \neq$ final answer |
| Confusing "or" with "and" | "Or" = add (mutually exclusive) |
| Wrong total in conditional | Check what "given" means |

---

# 🎯 MARK SCHEME TIPS

## For Full Marks:

1. **Show working** - M1 marks for method
2. **Simplify fractions** - unless told otherwise
3. **Use correct notation** - $P(A) = ...$
4. **Answer the question** - probability vs frequency
5. **Check answer** - Must be $0 \leq P \leq 1$

## Typical Mark Breakdown:

| Marks | Requirements |
|-------|--------------|
| 1 mark | Write down answer |
| 2 marks | Method + Answer |
| 3 marks | Method + Method + Answer |
| 4 marks | Multiple steps + Comparison |

---

#  QUICK EXAMPLES

## Example 1: Basic Probability
**Q:** Bag has 3 red, 5 blue, 2 green marbles. $P(\text{red}) = ?$

$$P(\text{red}) = \frac{3}{3+5+2} = \frac{3}{10}$$

## Example 2: Complement
**Q:** $P(\text{rain}) = 0.3$. Find $P(\text{no rain})$

$$P(\text{no rain}) = 1 - 0.3 = 0.7$$

## Example 3: Expected Frequency
**Q:** $P(\text{win}) = 0.25$. In 40 games, expected wins?

$$\text{Expected} = 0.25 \times 40 = 10$$

## Example 4: Experimental
**Q:** Die rolled 100 times, got 20 sixes. $P(6) = ?$

$$P(6) = \frac{20}{100} = 0.2$$

## Example 5: Mutually Exclusive
**Q:** $P(A) = 0.4$, $P(B) = 0.3$, mutually exclusive. Find $P(A \text{ or } B)$

$$P(A \text{ or } B) = 0.4 + 0.3 = 0.7$$

---

# 🔄 CONVERSION TABLE

| Fraction | Decimal | Percentage |
|----------|---------|------------|
| $\frac{1}{2}$ | 0.5 | 50% |
| $\frac{1}{3}$ | 0.333... | 33.3% |
| $\frac{1}{4}$ | 0.25 | 25% |
| $\frac{1}{5}$ | 0.2 | 20% |
| $\frac{1}{6}$ | 0.166... | 16.7% |
| $\frac{1}{8}$ | 0.125 | 12.5% |
| $\frac{1}{10}$ | 0.1 | 10% |

---

# 📌 KEY DEFINITIONS

| Term | Definition |
|------|------------|
| **Probability** | Measure of likelihood (0 to 1) |
| **Outcome** | Single result of an experiment |
| **Event** | Collection of outcomes |
| **Sample Space** | All possible outcomes |
| **Mutually Exclusive** | Cannot happen together |
| **Complement** | "Not" the event |
| **Experimental Probability** | Based on actual data |
| **Theoretical Probability** | Based on logic |

---

*Quick Reference for Pearson Edexcel IGCSE Mathematics*
*Handling Data 4 | Unit 5*
