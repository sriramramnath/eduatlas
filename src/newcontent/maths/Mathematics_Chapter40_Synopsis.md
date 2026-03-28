# Chapter 40: Handling Data 7 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Quick Reference Guide

**Unit 10 | Topic: Advanced Probability (Tree Diagrams Complex & Conditional Probability)**

---

## 📋 Quick Reference Summary

### Core Concepts at a Glance

| Topic | Key Point |
|-------|-----------|
| Tree Diagrams | Visual tool for multi-stage probability |
| Conditional Probability | $P(A|B) = \frac{P(A \cap B)}{P(B)}$ |
| Independent Events | $P(A|B) = P(A)$ |
| "At Least One" | Use complement: $1 - P(\text{none})$ |

---

## 🌳 Tree Diagrams - Essential Rules

### The Four Rules

| Rule | Statement |
|------|-----------|
| **Rule 1** | Branches from same node sum to 1 |
| **Rule 2** | Multiply **along** paths (AND) |
| **Rule 3** | Add **between** paths (OR) |
| **Rule 4** | All final probabilities sum to 1 |

### Tree Diagram Structure

```
                         ┌── Event A (P₁) → Outcome 1: P × P₁
                         │
                   ┌── P ─┤
                   │      │
                   │      └── Event B (1-P₁) → Outcome 2: P × (1-P₁)
                   │
Start ─────────────┤
                   │      ┌── Event A (P₂) → Outcome 3: (1-P) × P₂
                   │      │
                   └── 1-P ─┤
                          │
                          └── Event B (1-P₂) → Outcome 4: (1-P) × (1-P₂)
```

### With vs Without Replacement

| Scenario | Key Feature |
|----------|-------------|
| **With Replacement** | Probabilities stay the same each stage |
| **Without Replacement** | Adjust probabilities after each draw |

**Without Replacement Example:**
- Bag: 3 red, 5 blue
- First draw: $P(R) = \frac{3}{8}$, $P(B) = \frac{5}{8}$
- Second draw (if first was R): $P(R) = \frac{2}{7}$, $P(B) = \frac{5}{7}$

---

## 📊 Conditional Probability

### Core Formula

$$\boxed{P(A|B) = \frac{P(A \cap B)}{P(B)}}$$

### Key Relationships

| Formula | Meaning |
|---------|---------|
| $P(A \cap B) = P(B) \times P(A|B)$ | Multiply to find intersection |
| $P(A \cap B) = P(A) \times P(B|A)$ | Alternative form |
| $P(A \cap B) = P(A) \times P(B)$ | **Only** if independent |

### Reading Conditional Probability

| Notation | Meaning |
|----------|---------|
| $P(A|B)$ | Probability of A **given** B has occurred |
| $P(B|A)$ | Probability of B **given** A has occurred |

>  **Generally:** $P(A|B) \neq P(B|A)$

---

## 🔗 Independence

### Test for Independence

Two events A and B are independent if **any** of these hold:

| Test | Condition |
|------|-----------|
| Test 1 | $P(A|B) = P(A)$ |
| Test 2 | $P(B|A) = P(B)$ |
| Test 3 | $P(A \cap B) = P(A) \times P(B)$ |

### Independence vs Mutually Exclusive

| Property | Independent | Mutually Exclusive |
|----------|-------------|-------------------|
| Can both occur? | Yes | No |
| $P(A \cap B)$ | $P(A) \times P(B)$ | 0 |
| $P(A \cup B)$ | $P(A) + P(B) - P(A)P(B)$ | $P(A) + P(B)$ |
| Venn diagram | Overlapping circles | Non-overlapping circles |

---

## 📐 Key Formulas Table

| Formula | Use When |
|---------|----------|
| $P(A') = 1 - P(A)$ | Finding "not A" |
| $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Finding "A or B" |
| $P(A \cap B) = P(A) \times P(B|A)$ | Finding "A and B" (general) |
| $P(A \cap B) = P(A) \times P(B)$ | Finding "A and B" (independent) |
| $P(A|B) = \frac{P(A \cap B)}{P(B)}$ | Conditional probability |
| $P(\text{at least one}) = 1 - P(\text{none})$ | "At least one" questions |

---

## ⚡ Quick Calculation Methods

### Method 1: "At Least One" Problems

**Shortcut:** $P(\text{at least one}) = 1 - P(\text{none})$

**Example:** P(at least one head in 3 tosses)
$$= 1 - P(\text{all tails}) = 1 - \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = 1 - \frac{1}{8} = \frac{7}{8}$$

### Method 2: "Exactly k" Problems

**For exactly k successes in n trials:**
- List all possible orders
- Each order has same probability (if independent)
- Count orders using combinations (if needed)

**Example:** Exactly 2 heads in 3 tosses (fair coin)
- Orders: HHT, HTH, THH (3 orders)
- Each has probability: $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$
- Total: $3 \times \frac{1}{8} = \frac{3}{8}$

### Method 3: Reverse Conditional (Bayes-Type)

**Formula:** $P(A|B) = \frac{P(A \cap B)}{P(B)}$

**Steps:**
1. Find $P(A \cap B)$ using tree diagram
2. Find $P(B)$ by adding all paths containing B
3. Divide: $P(A|B) = \frac{P(A \cap B)}{P(B)}$

---

## 📋 Two-Way Table Method

### For Conditional Probability from Tables

|  | Category B | Not B | Total |
|--|------------|-------|-------|
| **Category A** | $n_{AB}$ | $n_{AB'}$ | $n_A$ |
| **Not A** | $n_{A'B}$ | $n_{A'B'}$ | $n_{A'}$ |
| **Total** | $n_B$ | $n_{B'}$ | $N$ |

**Key Calculations:**

| Find | Use |
|------|-----|
| $P(A|B)$ | $\frac{n_{AB}}{n_B}$ |
| $P(B|A)$ | $\frac{n_{AB}}{n_A}$ |
| $P(A)$ | $\frac{n_A}{N}$ |
| $P(A \cap B)$ | $\frac{n_{AB}}{N}$ |

---

## 🎯 Exam Quick Tips

### Tree Diagram Checklist

- [ ] Label all branches with outcomes
- [ ] Write probabilities on each branch
- [ ] Check branches from each node sum to 1
- [ ] Calculate path probabilities (multiply)
- [ ] Add paths for "OR" situations
- [ ] Verify all final probabilities sum to 1

### Common Question Types

| Type | Strategy |
|------|----------|
| "Both same colour" | Single path |
| "Different colours" | Add all different-colour paths |
| "At least one X" | Use complement: $1 - P(\text{none})$ |
| "Exactly k of n" | List all orders, add paths |
| "Given that X..." | Conditional probability formula |
| "With/without replacement" | Adjust probabilities accordingly |

### Answer Format

| Preference | Reason |
|------------|--------|
| **Fractions preferred** | Exact values |
| Simplify when easy | $\frac{2}{4} \to \frac{1}{2}$ |
| Decimals acceptable | If 2-3 significant figures |
| Percentages OK | If asked or appropriate |

---

## 📊 Key Problem Patterns

### Pattern 1: Balls/Counters from Bags

| Question Type | Key Point |
|---------------|-----------|
| With replacement | Probabilities unchanged |
| Without replacement | Decrease total, adjust colours |

### Pattern 2: Medical/Diagnostic Tests

| Term | Definition |
|------|------------|
| Sensitivity | $P(\text{Positive} | \text{Disease})$ |
| Specificity | $P(\text{Negative} | \text{No Disease})$ |
| PPV | $P(\text{Disease} | \text{Positive})$ |
| NPV | $P(\text{No Disease} | \text{Negative})$ |

### Pattern 3: Multi-Stage Selection

| Stage | Method |
|-------|--------|
| Draw tree diagram | Show all paths |
| Calculate path probabilities | Multiply along branches |
| Identify relevant paths | Based on question |
| Calculate final answer | Multiply or add as needed |

---

## 🔢 Quick Probability Values

### Common Fractions to Memorize

| Fraction | Decimal | Percentage |
|----------|---------|------------|
| $\frac{1}{2}$ | 0.5 | 50% |
| $\frac{1}{3}$ | 0.333... | 33.3% |
| $\frac{1}{4}$ | 0.25 | 25% |
| $\frac{1}{5}$ | 0.2 | 20% |
| $\frac{1}{6}$ | 0.166... | 16.7% |
| $\frac{1}{8}$ | 0.125 | 12.5% |
| $\frac{1}{10}$ | 0.1 | 10% |

### Coin Flip Probabilities

| Event | Probability |
|-------|-------------|
| 1 head in 1 flip | $\frac{1}{2}$ |
| 2 heads in 2 flips | $\frac{1}{4}$ |
| At least 1 head in 2 flips | $\frac{3}{4}$ |
| At least 1 head in 3 flips | $\frac{7}{8}$ |

### Die Roll Probabilities

| Event | Probability |
|-------|-------------|
| Any specific number | $\frac{1}{6}$ |
| Even number | $\frac{1}{2}$ |
| Multiple of 3 | $\frac{1}{3}$ |
| Prime number (2,3,5) | $\frac{1}{2}$ |

---

##  Common Errors to Avoid

| Error | Correct Approach |
|-------|------------------|
| $P(A|B) = P(B|A)$ | They are different - use formula |
| Not adjusting for "without replacement" | Update totals and probabilities |
| Adding when should multiply | Multiply for "AND", add for "OR" |
| $P(A \cup B) = P(A) \times P(B)$ | Use addition law |
| Forgetting to check node sums | Branches from each node sum to 1 |
| Tree paths don't sum to 1 | All final outcomes should sum to 1 |

---

## 📝 Exam Command Words

| Word | Action Required |
|------|-----------------|
| **Find/Calculate** | Show working, give answer |
| **Draw** | Accurate, labeled diagram |
| **Complete** | Fill in missing values |
| **Determine** | Find with justification |
| **Show that** | Prove the given result |
| **Explain** | Give reasons in context |

---

## ✅ Last-Minute Checklist

Before the exam, can you:

- [ ] Draw a complete tree diagram for any 2-stage problem?
- [ ] Calculate conditional probability $P(A|B)$?
- [ ] Distinguish between "with" and "without replacement"?
- [ ] Use the complement for "at least one" questions?
- [ ] Test if two events are independent?
- [ ] Find reverse conditional probability (Bayes-type)?
- [ ] Work with two-way tables for conditional probability?
- [ ] Handle 3-stage tree diagrams?

---

*Synopsis prepared for Pearson Edexcel IGCSE Mathematics - Handling Data 7*
*© Study Package for A* Students*
