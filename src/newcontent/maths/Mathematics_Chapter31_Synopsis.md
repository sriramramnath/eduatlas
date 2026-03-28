# Chapter 31: Sets 1 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics - High-Yield Exam Content

---

# 📌 Essential Symbols at a Glance

| Symbol | Name | Meaning |
|--------|------|---------|
| $\in$ | Element | "belongs to" |
| $\notin$ | Not element | "does not belong to" |
| $\emptyset$ | Empty set | Set with no elements |
| $\cup$ | Union | Elements in A **or** B **or both** |
| $\cap$ | Intersection | Elements in **both** A and B |
| $\subset$ | Proper subset | All elements of A are in B, but A ≠ B |
| $\subseteq$ | Subset | All elements of A are in B (A may equal B) |
| $A'$ | Complement | Elements **not** in A |
| $\xi$ | Universal set | The complete set being considered |
| $n(A)$ | Cardinality | Number of elements in A |

---

# 🔢 MUST-KNOW Formulas

## Two-Set Formula (Most Important!)
$$\boxed{n(A \cup B) = n(A) + n(B) - n(A \cap B)}$$

### Quick Rearrangements:
| To Find | Formula |
|---------|---------|
| $n(A \cap B)$ | $n(A) + n(B) - n(A \cup B)$ |
| $n(A)$ | $n(A \cup B) - n(B) + n(A \cap B)$ |

---

## Three-Set Formula
$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$$

---

## Complement Relationships
$$n(A) + n(A') = n(\xi)$$
$$n(A - B) = n(A) - n(A \cap B)$$

---

## Number of Subsets
**For a set with $n$ elements:** Number of subsets = $2^n$

---

# 📊 De Morgan's Laws (Exam Favorites!)

$$\boxed{(A \cup B)' = A' \cap B'}$$
$$\boxed{(A \cap B)' = A' \cup B'}$$

> **Memory Trick:** "Break the bar, flip the symbol"
> - Complement of **union** → **intersection** of complements
> - Complement of **intersection** → **union** of complements

---

# 🎯 Quick Rules

## Set Operations Summary

| Operation | Description | Result |
|-----------|-------------|--------|
| $A \cup B$ | Union | Everything in A, B, or both |
| $A \cap B$ | Intersection | Only what's in BOTH |
| $A'$ | Complement | Everything NOT in A |
| $A - B$ | Difference | In A but NOT in B |
| $(A \cap B)'$ | Not both | Everything except the overlap |

## Special Cases

| Case | Property |
|------|----------|
| **Disjoint sets** | $A \cap B = \emptyset$ |
| **Equal sets** | $A = B \Rightarrow A \cup B = A \cap B = A$ |
| **Subset** | $A \subset B \Rightarrow A \cup B = B$, $A \cap B = A$ |

---

# 📐 Venn Diagram Regions

## Two Sets — 4 Regions
- **Region 1:** A only
- **Region 2:** A ∩ B (overlap)
- **Region 3:** B only
- **Region 4:** Outside both (neither)

## Three Sets — 8 Regions
- 3 single regions (A only, B only, C only)
- 3 double-intersection regions (excluding triple)
- 1 triple-intersection region
- 1 outside region

---

# ⚡ Filling Venn Diagrams — Fast Method

**Order of Operations:**
1. **Center first** → $n(A \cap B \cap C)$
2. **Then double overlaps** → subtract center from each pair
3. **Then single regions** → subtract all overlaps
4. **Finally outside** → subtract total from $n(\xi)$

---

# 🎲 Problem-Solving Keywords

| Phrase | Meaning | Region |
|--------|---------|--------|
| "At least one" | Union | $A \cup B$ |
| "Both" | Intersection | $A \cap B$ |
| "Exactly one" | One only (not both) | $(A - B) \cup (B - A)$ |
| "Neither" | Outside both | $(A \cup B)'$ |
| "Exactly two" | Two subjects only | Sum of double-only regions |
| "At least two" | Two or more | Exactly two + all three |
| "Only A" | A but not B | $A - B$ or $A \cap B'$ |

---

# 🔴 Common Exam Traps

| Trap | Wrong | Correct |
|------|-------|---------|
| Forgetting to subtract overlap | $n(A \cup B) = n(A) + n(B)$ | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ |
| Empty set = {0} | $\emptyset = \{0\}$ | $\emptyset = \{\}$ (has NO elements) |
| Not stating universal set | Finding $A'$ without $\xi$ | Always identify $\xi$ first |
| "Exactly one" vs "At least one" | Treating them the same | Exactly one ≠ At least one |
| $\subset$ vs $\subseteq$ | Using interchangeably | $\subseteq$ allows equality, $\subset$ doesn't |

---

# 📋 Standard Number Sets

| Symbol | Name | Examples |
|--------|------|----------|
| $\mathbb{N}$ | Natural | 1, 2, 3, 4, ... |
| $\mathbb{W}$ | Whole | 0, 1, 2, 3, ... |
| $\mathbb{Z}$ | Integers | ..., -2, -1, 0, 1, 2, ... |
| $\mathbb{Q}$ | Rational | $\frac{1}{2}$, $-\frac{3}{4}$, 0.25 |
| $\mathbb{R}$ | Real | All above + $\pi$, $\sqrt{2}$ |

**Hierarchy:** $\mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$

---

# ✅ Exam Checklist

Before answering set problems:
- [ ] Identified the universal set $\xi$?
- [ ] Understood what each set represents?
- [ ] Recognized the operation (union/intersection/complement)?
- [ ] Drawing a Venn diagram for 2+ sets?
- [ ] Using correct formula?
- [ ] Checking that all regions sum to total?
- [ ] Reading "exactly" vs "at least" carefully?

---

# 📝 Quick Worked Examples

## Example 1: Basic Union/Intersection
$A = \{1, 2, 3, 4, 5\}$, $B = \{4, 5, 6, 7\}$

- $A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$
- $A \cap B = \{4, 5\}$
- $A - B = \{1, 2, 3\}$
- $B - A = \{6, 7\}$

## Example 2: Using the Formula
$n(A) = 25$, $n(B) = 30$, $n(A \cap B) = 10$

$n(A \cup B) = 25 + 30 - 10 = 45$

## Example 3: Finding Complement
$\xi = \{1, 2, ..., 10\}$, $A = \{2, 4, 6, 8\}$

$A' = \{1, 3, 5, 7, 9, 10\}$

## Example 4: De Morgan's Law
$(A \cup B)' = A' \cap B'$

If $\xi = \{1,...,8\}$, $A = \{1, 2, 3\}$, $B = \{3, 4, 5\}$
- $A \cup B = \{1, 2, 3, 4, 5\}$
- $(A \cup B)' = \{6, 7, 8\}$
- $A' = \{4, 5, 6, 7, 8\}$
- $B' = \{1, 2, 6, 7, 8\}$
- $A' \cap B' = \{6, 7, 8\}$ ✓

---

*End of Synopsis - SETS Unit 1*
