# Chapter 32: Sets 2 - Concise Synopsis
## Quick Revision Synopsis for Pearson Edexcel IGCSE

---

# 1. Three-Set Venn Diagrams — Quick Reference

## The 8 Regions:

| Region | Description | Set Notation |
|--------|-------------|--------------|
| 1 | A only | $A \cap B' \cap C'$ |
| 2 | B only | $A' \cap B \cap C'$ |
| 3 | C only | $A' \cap B' \cap C$ |
| 4 | A and B only | $(A \cap B) \cap C'$ |
| 5 | A and C only | $(A \cap C) \cap B'$ |
| 6 | B and C only | $(B \cap C) \cap A'$ |
| 7 | All three (center) | $A \cap B \cap C$ |
| 8 | None (outside) | $A' \cap B' \cap C'$ |

---

## ⭐ Three-Set Cardinality Formula:

$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$$

**Memory aid:** "Add singles, subtract doubles, add triple"

---

## The "Inside-Out" Method for Venn Diagrams:

1. **Start:** Fill center ($A \cap B \cap C$)
2. **Next:** Fill double-only regions (subtract center from each double)
3. **Then:** Fill single-only regions (subtract all overlaps)
4. **Finally:** Fill outside (total minus sum inside)
5. **Check:** All regions sum to $n(\xi)$

---

# 2. Phrase Translation Table

| Phrase | Meaning | Calculation |
|--------|---------|-------------|
| At least one | In any set | $n(A \cup B \cup C)$ |
| Exactly one | One set only | Sum of single-only regions |
| Exactly two | Two sets only | Sum of double-only regions |
| All three | All three sets | $n(A \cap B \cap C)$ |
| At least two | Two or more | Exactly two + All three |
| At most two | Two or fewer | Total inside − All three |
| None | Outside all circles | $n(\xi) - n(A \cup B \cup C)$ |
| Not in A | Outside A | $n(A')$ |

---

# 3. Shading Regions — Quick Rules

## Basic Patterns:

| Expression | Shade |
|------------|-------|
| $A$ | Entire circle A |
| $A'$ | Everything outside A |
| $A \cap B$ | Overlap of A and B |
| $A \cup B$ | Both circles |
| $A \cap B'$ | Part of A outside B |
| $(A \cup B)'$ | Outside both circles |
| $(A \cap B)'$ | Everything except overlap |

## Shading Method:
1. Work from **inside parentheses outward**
2. For **complements**: Shade original, then shade OPPOSITE
3. For **unions**: Shade each part, combine
4. For **intersections**: Keep only doubly-shaded areas

---

# 4. Set-Builder Notation — Quick Guide

## Standard Form:
$$A = \{x \in S : P(x)\}$$
- $x$ = typical element
- $S$ = domain ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{R}$, etc.)
- $P(x)$ = condition

## Common Domains:

| Symbol | Set | Examples |
|--------|-----|----------|
| $\mathbb{N}$ | Natural numbers | $1, 2, 3, 4, ...$ |
| $\mathbb{Z}$ | Integers | $...-2, -1, 0, 1, 2...$ |
| $\mathbb{Q}$ | Rational numbers | $\frac{1}{2}, 0.75, -3$ |
| $\mathbb{R}$ | Real numbers | $\pi, \sqrt{2}, 0.5$ |

## Quick Conversions:

| Set-Builder | Roster Form |
|-------------|-------------|
| $\{x \in \mathbb{N} : x < 5\}$ | $\{1, 2, 3, 4\}$ |
| $\{x \in \mathbb{Z} : |x| \leq 2\}$ | $\{-2, -1, 0, 1, 2\}$ |
| $\{2n : n \in \mathbb{N}, n \leq 4\}$ | $\{2, 4, 6, 8\}$ |
| $\{x \in \mathbb{N} : x^2 < 10\}$ | $\{1, 2, 3\}$ |

---

# 5. Key Formulas

| Formula | Use |
|---------|-----|
| $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ | Two sets |
| $n(A) + n(A') = n(\xi)$ | Complement |
| $(A \cup B)' = A' \cap B'$ | De Morgan's 1st |
| $(A \cap B)' = A' \cup B'$ | De Morgan's 2nd |
| $n(\xi) = n(A \cup B \cup C) + n(\text{none})$ | Finding total |

---

# 6. Common Mistakes to Avoid

| ❌ Mistake | ✅ Correct |
|-----------|------------|
| Forgetting to add triple intersection | $+ n(A \cap B \cap C)$ at end |
| At least 2 = Exactly 2 | At least 2 = Exactly 2 + All three |
| Set-builder without domain | Always write $\{x \in \mathbb{N} : ...\}$ |
| Not starting from center | Always fill center first |
| Wrong "only" calculations | Subtract ALL overlaps |

---

# 7. Exam Checklist

☐ Define sets with clear notation
☐ Identify the universal set
☐ Draw Venn diagram (even if not asked)
☐ Start from center when filling
☐ Check: all regions sum to $n(\xi)$
☐ Read "exactly" vs "at least" carefully
☐ Specify domain in set-builder notation
☐ For shading: work inside parentheses first

---

*Quick Reference - SETS 2 (Unit 6)*
