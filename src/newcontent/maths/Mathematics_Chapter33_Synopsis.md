# Chapter 33: Sets 3 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Quick Reference Guide

---

## 📌 BASIC PROBABILITY

### Probability Scale
$$0 \leq P(A) \leq 1$$

| $P(A) = 0$ | Impossible |
|------------|------------|
| $P(A) = 1$ | Certain |
| $P(A) = 0.5$ | Even chance |

### Basic Formula
$$\boxed{P(\text{event}) = \frac{\text{favourable outcomes}}{\text{total outcomes}}}$$

### Complement Rule
$$\boxed{P(A') = 1 - P(A)}$$

> **Quick Tip:** For "at least one" problems, use:
> $$P(\text{at least one}) = 1 - P(\text{none})$$

---

## 📌 VENN DIAGRAMS

### Set Notation

| Symbol | Name | Meaning |
|--------|------|---------|
| $A \cap B$ | Intersection | Elements in **BOTH** A and B |
| $A \cup B$ | Union | Elements in A **OR** B (or both) |
| $A'$ | Complement | Elements **NOT** in A |
| $\xi$ | Universal set | All possible elements |

### Completing Venn Diagrams (Method)
1. Fill in the **intersection first** ($A \cap B$)
2. Calculate "only" regions by **subtraction**
3. Calculate the **outside region last**

### Venn Diagram Regions

| Region | Calculation |
|--------|-------------|
| $A$ only | $n(A) - n(A \cap B)$ |
| $B$ only | $n(B) - n(A \cap B)$ |
| $A \cup B$ | $n(A) + n(B) - n(A \cap B)$ |
| Neither | $n(\xi) - n(A \cup B)$ |

### Probability from Venn Diagrams
$$P(A) = \frac{n(A)}{n(\xi)}$$

---

## 📌 ADDITION RULES

### Mutually Exclusive Events
Events that **cannot occur together**

$$\boxed{P(A \cup B) = P(A) + P(B)}$$

### General Addition Rule
For events that **may overlap**:

$$\boxed{P(A \cup B) = P(A) + P(B) - P(A \cap B)}$$

> **Why subtract?** The intersection $P(A \cap B)$ is counted twice when adding, so subtract once.

---

## 📌 CONDITIONAL PROBABILITY

### Definition
$P(A|B)$ = Probability of A **given** B has occurred

### Formula
$$\boxed{P(A|B) = \frac{P(A \cap B)}{P(B)}}$$

### Key Point
$$P(A|B) \neq P(B|A) \text{ in general!}$$

### From Venn Diagrams
$$P(A|B) = \frac{n(A \cap B)}{n(B)}$$

### Multiplication Rule
$$\boxed{P(A \cap B) = P(B) \times P(A|B)}$$

---

## 📌 INDEPENDENT EVENTS

### Definition
Events where one does **not affect** the probability of the other

### Test for Independence
$$\boxed{P(A \cap B) = P(A) \times P(B)}$$

Or equivalently:
$$P(A|B) = P(A)$$

### Examples of Independent Events
- Coin toss and die roll
- Drawing with replacement
- Separate random experiments

---

## 📌 PROBABILITY TREES

### When to Use
- Sequential events
- Conditional probability
- With/without replacement problems

### Rules
1. **Sum of branches from each node = 1**
2. **Multiply along branches** (for "AND")
3. **Add across outcomes** (for "OR")

### With Replacement
Probabilities stay **same** on each draw

### Without Replacement
Probabilities **change** after each draw

---

## 📌 KEY FORMULAS TABLE

| Description | Formula |
|-------------|---------|
| Basic probability | $P = \frac{\text{favourable}}{\text{total}}$ |
| Complement | $P(A') = 1 - P(A)$ |
| Union (mutually exclusive) | $P(A \cup B) = P(A) + P(B)$ |
| Union (general) | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Intersection (independent) | $P(A \cap B) = P(A) \times P(B)$ |
| Conditional probability | $P(A\mid B) = \frac{P(A \cap B)}{P(B)}$ |
| Multiplication rule | $P(A \cap B) = P(A) \times P(B \mid A)$ |
| Expected frequency | $\text{Expected} = P \times n$ |

---

## 📌 QUICK RULES

| Situation | Use |
|-----------|-----|
| "or" | Addition (subtract intersection if not mutually exclusive) |
| "and" | Multiplication (if independent) |
| "given that" | Conditional probability formula |
| "at least one" | Complement: $1 - P(\text{none})$ |
| "exactly one" | $P(A \text{ only}) + P(B \text{ only})$ |
| "neither" | $P(A' \cap B') = 1 - P(A \cup B)$ |

---

## 📌 PROBABILITY TREE TEMPLATES

### Two-Stage Tree
```
                    ┌── A₂ ──→ P(A₁) × P(A₂)
              A₁ ───┤
             P(A₁)  └── A₂' ──→ P(A₁) × P(A₂')
                  
START ───────┤
                    ┌── A₂ ──→ P(A₁') × P(A₂)
              A₁'──┤
            P(A₁') └── A₂' ──→ P(A₁') × P(A₂')
```

### Check: All probabilities sum to 1

---

## 📌 COMMON MISTAKES 

| ❌ Wrong | ✓ Correct |
|----------|-----------|
| $P(A \mid B) = P(B \mid A)$ | These are NOT equal |
| $P(A \cap B) = P(A) \times P(B)$ | Only for independent events |
| $P(A \cup B) = P(A) + P(B)$ | Only for mutually exclusive events |
| Forgetting to subtract intersection | Always check for overlap |
| Wrong conditional denominator | $P(A \mid B)$ uses $P(B)$ as denominator |

---

## 📌 EXAM STRATEGY

### Step-by-Step Approach

**Step 1:** Read carefully for keywords
- "given that" → Conditional probability
- "and" → Multiplication
- "or" → Addition

**Step 2:** Draw diagram
- Venn diagram for overlapping events
- Tree diagram for sequences

**Step 3:** Apply formula
- Write the formula first
- Substitute values carefully

**Step 4:** Check answer
- Probability must be 0 ≤ P ≤ 1
- For Venn: all regions sum to total

### Mark-Earning Tips
1. ✓ Show all working
2. ✓ State formulas used
3. ✓ Label diagrams clearly
4. ✓ Give answer in required format
5. ✓ Simplify fractions

---

## 📌 HIGH-YIELD FACTS

| Topic | Key Point |
|-------|-----------|
| Complement | $P(A) + P(A') = 1$ |
| Intersection | $\cap$ means "AND" |
| Union | $\cup$ means "OR" |
| Conditional | "Given that" changes sample space |
| Independence | $P(A \cap B) = P(A) \times P(B)$ |
| Expected | Expected frequency = Probability × Trials |

---

*Quick reference for Pearson Edexcel IGCSE Mathematics*
