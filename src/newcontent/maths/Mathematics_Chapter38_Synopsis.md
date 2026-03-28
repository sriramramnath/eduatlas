# Chapter 38: Handling Data 5 - Concise Synopsis
## Quick Reference Guide for Pearson Edexcel IGCSE Mathematics

---

# 📊 QUICK FORMULA TABLE

## Core Probability Laws

| Law | Formula | Quick Example |
|-----|---------|---------------|
| **Basic Probability** | $P(E) = \frac{\text{favorable outcomes}}{\text{total outcomes}}$ | $P(6\text{ on die}) = \frac{1}{6}$ |
| **Complement** | $P(A') = 1 - P(A)$ | If $P(\text{rain}) = 0.3$, then $P(\text{no rain}) = 0.7$ |
| **Probability Range** | $0 \leq P(E) \leq 1$ | Probability is never negative or > 1 |
| **Sum of Probabilities** | $\sum P = 1$ | All probabilities add to 1 |

---

## Combined Events

| Type | Formula | Key Point |
|------|---------|-----------|
| **Mutually Exclusive** | $P(A \cup B) = P(A) + P(B)$ | Cannot happen together |
| **Non-Mutually Exclusive** | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Subtract overlap |
| **Independent Events** | $P(A \cap B) = P(A) \times P(B)$ | One doesn't affect other |

---

## Conditional Probability

| Concept | Formula | Memory Aid |
|---------|---------|------------|
| **Conditional Probability** | $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | "A given B" = intersection ÷ B |
| **General Multiplication** | $P(A \cap B) = P(A) \times P(B \mid A)$ | Multiply down tree branch |
| **Independence Test** | $P(A \mid B) = P(A)$ | Knowing B doesn't change A |

---

# 🎯 QUICK RULES

## Rule 1: "AND" → Multiply
- $P(A \text{ and } B) = P(A) \times P(B)$ (if independent)
- $P(A \text{ and } B) = P(A) \times P(B \mid A)$ (if dependent)

## Rule 2: "OR" → Add
- $P(A \text{ or } B) = P(A) + P(B)$ (if mutually exclusive)
- $P(A \text{ or } B) = P(A) + P(B) - P(A \cap B)$ (if not mutually exclusive)

## Rule 3: "At Least One" → Complement
- $P(\text{at least one}) = 1 - P(\text{none})$

## Rule 4: Tree Diagrams
- **Multiply along branches** for "AND"
- **Add across outcomes** for "OR"

---

# 📋 KEY DEFINITIONS

| Term | Definition |
|------|------------|
| **Sample Space** | All possible outcomes |
| **Event** | A subset of sample space |
| **Mutually Exclusive** | Cannot occur together |
| **Independent** | One event doesn't affect another |
| **Dependent** | One event affects another |
| **Conditional Probability** | Probability given another event occurred |

---

# ⚡ HIGH-YIELD EXAM CONTENT

## 1. Complement Strategy (Very Common!)

**When to use:** "At least one," "not," "neither"

```
P(not A) = 1 − P(A)
P(at least one) = 1 − P(none)
```

**Example:** $P(\text{at least one 6 in two rolls}) = 1 - P(\text{no 6})$
$= 1 - \frac{5}{6} \times \frac{5}{6} = 1 - \frac{25}{36} = \frac{11}{36}$

---

## 2. With vs Without Replacement

| Scenario | Total Changes? | Method |
|----------|----------------|--------|
| **With replacement** | No | Use same probabilities |
| **Without replacement** | Yes | Decrease total by 1 each draw |

**Example:** Bag has 3 red, 5 blue balls

*With replacement:* $P(RR) = \frac{3}{8} \times \frac{3}{8} = \frac{9}{64}$

*Without replacement:* $P(RR) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$

---

## 3. Tree Diagram Essentials

```
                    ┌── [P(B|A)]
                ┌───┤
                │   └── [P(B'|A)]
            ┌───┤
Start ──────┤   ┌── [P(B|A')]
            │   │
            └───┤
                └── [P(B'|A')]
```

**Rules:**
- Each branch pair sums to 1
- Multiply along branches
- Add across outcomes

---

## 4. Testing Independence

**Two equivalent methods:**

| Method 1 | Method 2 |
|----------|----------|
| Check: $P(A \cap B) = P(A) \times P(B)$ | Check: $P(A \mid B) = P(A)$ |

If TRUE → Independent
If FALSE → Not independent

---

## 5. Conditional Probability Quick Method

For $P(A \mid B)$:
1. Restrict sample space to only B outcomes
2. Count how many of those are also A
3. Divide: $\frac{\text{A and B}}{\text{B only}}$

**Example:** 40 students: 25 play football, 18 play cricket, 10 play both
$P(\text{football} \mid \text{cricket}) = \frac{10}{18} = \frac{5}{9}$

---

# 📊 TWO-WAY TABLE QUICK FORMAT

| | Category B | Not B | Total |
|---|---|---|---|
| **Category A** | a | b | a + b |
| **Not A** | c | d | c + d |
| **Total** | a + c | b + d | Total |

**Reading Conditional Probabilities:**
- $P(A \mid B) = \frac{a}{a+c}$ (first column only)
- $P(B \mid A) = \frac{a}{a+b}$ (first row only)

---

#  COMMON EXAM PITFALLS

| Mistake | Correct Approach |
|---------|------------------|
| $P(A \mid B) = P(B \mid A)$ | These are generally different! |
| Forgetting overlap in "OR" | Always check if events can overlap |
| Wrong branch probability | Check if dependent (total decreases) |
| Not simplifying fractions | Give answer in simplest form |
| Adding instead of multiplying | "AND" → multiply; "OR" → add |

---

# 🧮 SAMPLE SPACE SIZE

| Experiment | Number of Outcomes |
|------------|-------------------|
| One coin flip | 2 |
| Two coin flips | $2 \times 2 = 4$ |
| Three coin flips | $2^3 = 8$ |
| One die roll | 6 |
| Two dice | $6 \times 6 = 36$ |
| One spin (n sections) | n |
| Two spins (n sections each) | $n^2$ |

---

# 🎯 EXAM STRATEGY CHECKLIST

## Before Solving:
- [ ] Identify if events are independent or dependent
- [ ] Check "with" or "without" replacement
- [ ] Decide: direct calculation or complement?

## During Solution:
- [ ] Draw tree diagram for multi-stage events
- [ ] Show all probabilities on branches
- [ ] Write formulas before substituting
- [ ] Show intermediate calculations

## Final Answer:
- [ ] Check probability is between 0 and 1
- [ ] Simplify fractions
- [ ] Give decimal to 3 s.f. if required
- [ ] State conclusion clearly ("Therefore...")

---

# 📐 QUICK REFERENCE: PROBABILITY OF...

| Question Type | Formula/Method |
|---------------|----------------|
| **At least one** | $1 - P(\text{none})$ |
| **Exactly one** | $P(A \text{ only}) + P(B \text{ only})$ |
| **Both** | $P(A) \times P(B)$ if independent |
| **Neither** | $P(A') \times P(B')$ if independent |
| **Either or both** | $P(A) + P(B) - P(A \cap B)$ |
| **Exactly one of two** | $P(A) + P(B) - 2P(A \cap B)$ |

---

# 🔢 USEFUL PROBABILITY VALUES

| Event | Probability |
|-------|-------------|
| Rolling specific number on die | $\frac{1}{6}$ |
| Rolling even number | $\frac{1}{2}$ |
| Rolling prime (2,3,5) | $\frac{3}{6} = \frac{1}{2}$ |
| Flipping heads | $\frac{1}{2}$ |
| Two heads in two flips | $\frac{1}{4}$ |
| At least one head in two flips | $\frac{3}{4}$ |
| Sum of 7 on two dice | $\frac{6}{36} = \frac{1}{6}$ |
| Doubles on two dice | $\frac{6}{36} = \frac{1}{6}$ |

---

*End of Synopsis - Handling Data 5*
