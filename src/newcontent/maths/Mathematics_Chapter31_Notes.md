# Chapter 31: Sets 1 - Concise Synopsis
## Detailed Study Notes for Pearson Edexcel IGCSE

---

# 1. Introduction to Sets

## 1.1 What is a Set?

A **set** is a well-defined collection of distinct objects. Each object in a set is called an **element** or **member** of the set.

### Key Properties:
- Sets are **unordered** — the order of elements doesn't matter
- Elements are **distinct** — no repetition within a set
- Sets are usually denoted by **capital letters** (A, B, C, ...)
- Elements are denoted by **lowercase letters** (a, b, c, ...)

### Set Notation Methods:

| Method | Example | Description |
|--------|---------|-------------|
| **Roster (Listing)** | $A = \{1, 2, 3, 4, 5\}$ | Lists all elements |
| **Set-Builder** | $A = \{x : x \text{ is a natural number less than 6}\}$ | Describes the property |
| **Description** | "The set of all prime numbers less than 10" | Verbal description |

---

## 1.2 Essential Set Notation Symbols

| Symbol | Meaning | Example |
|--------|---------|---------|
| $\in$ | "is an element of" | $3 \in \{1, 2, 3\}$ |
| $\notin$ | "is not an element of" | $5 \notin \{1, 2, 3\}$ |
| $\emptyset$ or $\{\}$ | Empty set (null set) | $\emptyset = \{\}$ |
| $\cup$ | Union | $A \cup B$ |
| $\cap$ | Intersection | $A \cap B$ |
| $\subset$ | "is a proper subset of" | $A \subset B$ |
| $\subseteq$ | "is a subset of" | $A \subseteq B$ |
| $\not\subset$ | "is not a subset of" | $A \not\subset B$ |
| $A'$ or $A^c$ | Complement of A | Elements not in A |
| $\xi$ or $\mathcal{U}$ | Universal set | The complete set being considered |
| $n(A)$ | Number of elements in A | $n(\{1,2,3\}) = 3$ |

---

# 2. Types of Sets

## 2.1 Empty Set (Null Set)

A set with **no elements** is called an empty set.

$$\emptyset = \{\}$$

> **Exam Insight:** The empty set is a subset of every set, including itself.

### Examples:
- The set of months with 32 days: $\emptyset$
- $\{x \in \mathbb{R} : x^2 < 0\} = \emptyset$

---

## 2.2 Finite and Infinite Sets

| Type | Definition | Example |
|------|------------|---------|
| **Finite Set** | Has a countable number of elements | $A = \{1, 2, 3, 4, 5\}$ |
| **Infinite Set** | Has an uncountable number of elements | $\mathbb{N} = \{1, 2, 3, ...\}$ |

---

## 2.3 Universal Set ($\xi$)

The **universal set** is the set containing all possible elements under consideration for a particular problem.

> **Key Point:** The universal set is typically given or defined at the start of each problem. It's often shown as a rectangle in Venn diagrams.

### Example:
If we're discussing students in a school, the universal set $\xi$ might be "all students in the school."

---

## 2.4 Subsets

**Definition:** Set $A$ is a **subset** of set $B$ (written $A \subseteq B$) if every element of $A$ is also an element of $B$.

$$A \subseteq B \iff \text{every element of } A \text{ is in } B$$

**Proper Subset:** Set $A$ is a **proper subset** of set $B$ (written $A \subset B$) if $A \subseteq B$ but $A \neq B$.

### Important Formula:
If a set has $n$ elements, it has **$2^n$ subsets** (including $\emptyset$ and the set itself).

### Example:
For $A = \{a, b\}$ with $n = 2$ elements:
- Number of subsets = $2^2 = 4$
- Subsets: $\emptyset, \{a\}, \{b\}, \{a, b\}$
- Proper subsets: $\emptyset, \{a\}, \{b\}$ (3 subsets)

---

# 3. Set Operations

## 3.1 Union ($\cup$)

**Definition:** The **union** of sets $A$ and $B$ is the set of all elements that belong to $A$ **or** $B$ **or both**.

$$A \cup B = \{x : x \in A \text{ or } x \in B\}$$

### Worked Example 1:
Given: $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$

**Solution:**
$$A \cup B = \{1, 2, 3, 4, 5, 6\}$$

> **Note:** Elements 3 and 4 appear in both sets but are listed only once in the union (sets don't have repeated elements).

---

## 3.2 Intersection ($\cap$)

**Definition:** The **intersection** of sets $A$ and $B$ is the set of all elements that belong to **both** $A$ and $B$.

$$A \cap B = \{x : x \in A \text{ and } x \in B\}$$

### Worked Example 2:
Given: $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$

**Solution:**
$$A \cap B = \{3, 4\}$$

> **Exam Tip:** If $A \cap B = \emptyset$, sets $A$ and $B$ are called **disjoint sets** — they have no common elements.

---

## 3.3 Complement ($A'$)

**Definition:** The **complement** of set $A$ is the set of all elements in the universal set $\xi$ that are **not** in $A$.

$$A' = \{x \in \xi : x \notin A\}$$

### Worked Example 3:
Given: $\xi = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ and $A = \{2, 4, 6, 8, 10\}$

**Solution:**
$$A' = \{1, 3, 5, 7, 9\}$$

> **Key Insight:** $A' \cup A = \xi$ and $A' \cap A = \emptyset$

---

## 3.4 Difference of Sets ($A - B$)

**Definition:** The **difference** $A - B$ is the set of elements in $A$ but **not** in $B$.

$$A - B = \{x : x \in A \text{ and } x \notin B\}$$

### Worked Example 4:
Given: $A = \{1, 2, 3, 4, 5\}$ and $B = \{3, 4, 5, 6, 7\}$

**Solution:**
$$A - B = \{1, 2\}$$
$$B - A = \{6, 7\}$$

> **Important:** $A - B \neq B - A$ (not commutative)

---

# 4. Venn Diagrams

## 4.1 What is a Venn Diagram?

A **Venn diagram** is a visual representation of sets using overlapping circles (or other closed curves) within a rectangle representing the universal set.

### Standard Venn Diagram Regions:

```
        ξ
    ┌───────────────┐
    │    a    b     │
    │  ┌───┬───┐    │
    │  │ A │   │ B  │
    │  │   │ ∩ │    │
    │  └───┴───┘    │
    │  d      c     │
    └───────────────┘
```

Where:
- Region **a**: Elements in A only
- Region **b**: Elements in A ∩ B (intersection)
- Region **c**: Elements in B only
- Region **d**: Elements in neither A nor B (outside both circles)

---

## 4.2 Representing Set Operations on Venn Diagrams

| Operation | Shaded Region | Description |
|-----------|---------------|-------------|
| $A \cup B$ | Both circles entirely shaded | Union |
| $A \cap B$ | Only overlapping region shaded | Intersection |
| $A'$ | Everything outside circle A | Complement |
| $A - B$ | Part of A outside intersection | Difference |
| $(A \cup B)'$ | Outside both circles | Complement of union |

---

## 4.3 Three-Set Venn Diagrams

For three sets A, B, and C, the diagram has **8 regions**:

```
          ξ
    ┌─────────────────┐
    │     A     B     │
    │   ┌─┬───┬─┐     │
    │   │ │ ∩ │ │     │
    │   ├─┼───┼─┤     │
    │   │ │ ∩ │ │     │
    │   └─┴───┴─┘     │
    │       C         │
    └─────────────────┘
```

### The 8 Regions:
1. In A only
2. In B only
3. In C only
4. In $A \cap B$ only (not C)
5. In $A \cap C$ only (not B)
6. In $B \cap C$ only (not A)
7. In $A \cap B \cap C$ (all three)
8. Outside all circles

---

# 5. Set Theory Laws and Properties

## 5.1 De Morgan's Laws

These are **crucially important** for IGCSE exams!

### First Law:
$$(A \cup B)' = A' \cap B'$$

> **Interpretation:** The complement of a union equals the intersection of complements.

### Second Law:
$$(A \cap B)' = A' \cup B'$$

> **Interpretation:** The complement of an intersection equals the union of complements.

### Worked Example 5:
Given: $\xi = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5, 6\}$

**Verify De Morgan's First Law:**

**Method 1:** Finding $(A \cup B)'$
- $A \cup B = \{1, 2, 3, 4, 5, 6\}$
- $(A \cup B)' = \{7, 8\}$

**Method 2:** Finding $A' \cap B'$
- $A' = \{5, 6, 7, 8\}$
- $B' = \{1, 2, 7, 8\}$
- $A' \cap B' = \{7, 8\}$

✓ Both methods give the same result: $\{7, 8\}$

---

## 5.2 Other Important Laws

| Law | Statement |
|-----|-----------|
| **Commutative** | $A \cup B = B \cup A$ and $A \cap B = B \cap A$ |
| **Associative** | $(A \cup B) \cup C = A \cup (B \cup C)$ |
| **Distributive** | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |
| **Idempotent** | $A \cup A = A$ and $A \cap A = A$ |
| **Identity** | $A \cup \emptyset = A$ and $A \cap \xi = A$ |
| **Complement** | $A \cup A' = \xi$ and $A \cap A' = \emptyset$ |

---

# 6. Problem-Solving with Sets

## 6.1 The Cardinal Number Formula

For two sets $A$ and $B$:

$$\boxed{n(A \cup B) = n(A) + n(B) - n(A \cap B)}$$

### Why Subtract $n(A \cap B)$?
Elements in the intersection are counted **twice** when we add $n(A) + n(B)$. We subtract once to correct for this double-counting.

---

### Worked Example 6 (Basic):
In a class of 30 students, 18 play football and 15 play basketball. If 7 students play both sports, how many students play at least one sport?

**Solution:**
- Let $F$ = students who play football
- Let $B$ = students who play basketball
- Given: $n(F) = 18$, $n(B) = 15$, $n(F \cap B) = 7$

Using the formula:
$$n(F \cup B) = n(F) + n(B) - n(F \cap B)$$
$$n(F \cup B) = 18 + 15 - 7 = 26$$

**Answer:** 26 students play at least one sport.

---

### Worked Example 7 (Finding Intersection):
In a survey of 50 people, 32 like coffee and 24 like tea. If everyone likes at least one drink, how many like both?

**Solution:**
- Given: $n(\xi) = 50$, $n(C) = 32$, $n(T) = 24$
- Since everyone likes at least one drink: $n(C \cup T) = 50$

Using the formula:
$$n(C \cup T) = n(C) + n(T) - n(C \cap T)$$
$$50 = 32 + 24 - n(C \cap T)$$
$$n(C \cap T) = 56 - 50 = 6$$

**Answer:** 6 people like both coffee and tea.

---

## 6.2 Three-Set Problems

### Formula for Three Sets:

$$\boxed{n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)}$$

---

### Worked Example 8:
In a school:
- 25 students study Mathematics
- 20 students study Physics
- 18 students study Chemistry
- 8 study both Mathematics and Physics
- 6 study both Physics and Chemistry
- 7 study both Mathematics and Chemistry
- 3 study all three subjects

How many students study at least one of these subjects?

**Solution:**

Let M = Mathematics, P = Physics, C = Chemistry

Using the three-set formula:
$$n(M \cup P \cup C) = 25 + 20 + 18 - 8 - 6 - 7 + 3$$
$$n(M \cup P \cup C) = 63 - 21 + 3$$
$$n(M \cup P \cup C) = 45$$

**Answer:** 45 students study at least one subject.

---

## 6.3 Filling in Venn Diagrams — Step-by-Step Method

### Strategy for Complex Problems:

1. **Start from the center** — fill in the intersection of all sets first
2. **Work outward** — fill in double intersections (subtract the triple intersection)
3. **Fill single regions** — subtract all overlaps from individual totals
4. **Check** — the sum of all regions should equal the total

---

### Worked Example 9:
In a group of 100 students:
- 45 study Biology
- 40 study Chemistry
- 35 study Physics
- 15 study Biology and Chemistry
- 12 study Chemistry and Physics
- 10 study Biology and Physics
- 5 study all three subjects

**Fill in the Venn diagram and find how many study none of these subjects.**

**Solution:**

**Step 1:** Start with the triple intersection
- $n(B \cap C \cap P) = 5$ → Center region

**Step 2:** Fill double-intersection regions (excluding center)
- $n(B \cap C) = 15$, so Biology ∩ Chemistry only = $15 - 5 = 10$
- $n(C \cap P) = 12$, so Chemistry ∩ Physics only = $12 - 5 = 7$
- $n(B \cap P) = 10$, so Biology ∩ Physics only = $10 - 5 = 5$

**Step 3:** Fill single-subject regions
- Biology only = $45 - 10 - 5 - 5 = 25$
- Chemistry only = $40 - 10 - 7 - 5 = 18$
- Physics only = $35 - 5 - 7 - 5 = 18$

**Step 4:** Calculate students studying at least one subject
$$n(B \cup C \cup P) = 25 + 10 + 5 + 18 + 7 + 5 + 18 = 88$$

**Step 5:** Find those studying none
$$n(\text{none}) = 100 - 88 = 12$$

**Venn Diagram Representation:**
```
           Biology    Chemistry
         ┌──────────────────────┐
         │    25    10    18    │
         │   ┌───┬────┬───┐     │
         │   │   │ 5  │   │     │
         │   ├───┼────┼───┤     │
         │   │ 5 │    │ 7 │     │
         │   └───┴────┴───┘     │
         │        18            │
         └──────────────────────┘
              Physics
         
         Outside: 12
```

---

# 7. Advanced Problem Types

## 7.1 "Exactly One" Problems

### Worked Example 10:
From Example 9, how many students study **exactly one** subject?

**Solution:**
Students studying exactly one subject = Biology only + Chemistry only + Physics only
$$= 25 + 18 + 18 = 61$$

---

## 7.2 "Exactly Two" Problems

### Worked Example 11:
From Example 9, how many students study **exactly two** subjects?

**Solution:**
Students studying exactly two subjects = $(B \cap C \text{ only}) + (C \cap P \text{ only}) + (B \cap P \text{ only})$
$$= 10 + 7 + 5 = 22$$

---

## 7.3 "At Least Two" Problems

### Worked Example 12:
From Example 9, how many students study **at least two** subjects?

**Solution:**
Students studying at least two = Exactly two + All three
$$= 22 + 5 = 27$$

**Alternative Method:**
$$n(A \cup B \cup C) - n(\text{exactly one}) = 88 - 61 = 27$$

---

# 8. Common Mistakes and How to Avoid Them

## ❌ Common Mistakes:

| Mistake | Wrong | Correct | Explanation |
|---------|-------|---------|-------------|
| Double counting intersection | $n(A \cup B) = n(A) + n(B)$ | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ | Must subtract intersection |
| Confusing subset symbols | $A \subset A$ | $A \subseteq A$ | Every set is a subset of itself |
| Empty set confusion | $\emptyset = \{0\}$ | $\emptyset = \{\}$ | Empty set has no elements |
| Wrong complement | $A' = \{\text{nothing}\}$ | $A' = \xi - A$ | Complement is relative to universal set |
| Forgetting universal set | Not defining $\xi$ | Always state or identify $\xi$ | Essential for complement problems |

---

## ✅ Exam Tips:

1. **Always identify the universal set** before solving complement problems
2. **Start from the center** when filling Venn diagrams
3. **Check your answer** by adding all regions
4. **Use brackets correctly** in complex expressions
5. **Read carefully** — "at least one" ≠ "exactly one"
6. **Draw a Venn diagram** even if not required — it helps visualize

---

# 9. Special Cases and Edge Cases

## 9.1 Disjoint Sets

When $A \cap B = \emptyset$:
- $n(A \cup B) = n(A) + n(B)$
- The formula simplifies because $n(A \cap B) = 0$

### Worked Example 13:
In a class, 12 students play only cricket and 10 play only tennis. How many students play sports?

**Solution:**
Since the sets are disjoint:
$$n(A \cup B) = n(A) + n(B) = 12 + 10 = 22$$

---

## 9.2 Subset Case

When $A \subset B$:
- $A \cup B = B$
- $A \cap B = A$
- $A - B = \emptyset$

### Worked Example 14:
If $A = \{1, 2\}$ and $B = \{1, 2, 3, 4\}$, find $A \cup B$ and $A \cap B$.

**Solution:**
Since $A \subset B$:
- $A \cup B = B = \{1, 2, 3, 4\}$
- $A \cap B = A = \{1, 2\}$

---

# 10. Standard Number Sets

## Important Number Sets in Mathematics:

| Symbol | Set | Description | Examples |
|--------|-----|-------------|----------|
| $\mathbb{N}$ | Natural Numbers | Counting numbers (1, 2, 3, ...) | $1, 2, 3, 4, 5$ |
| $\mathbb{W}$ | Whole Numbers | Natural numbers including 0 | $0, 1, 2, 3, 4$ |
| $\mathbb{Z}$ | Integers | Positive, negative, and zero | $-2, -1, 0, 1, 2$ |
| $\mathbb{Q}$ | Rational Numbers | Fractions, terminating/repeating decimals | $\frac{1}{2}, 0.75, -3$ |
| $\mathbb{R}$ | Real Numbers | All rational and irrational numbers | $\pi, \sqrt{2}, 0.5$ |

### Subset Relationships:
$$\mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

---

# Summary of Key Formulas

| Formula | Description |
|---------|-------------|
| $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ | Two-set cardinality |
| $n(A) + n(A') = n(\xi)$ | Complement relationship |
| $n(A - B) = n(A) - n(A \cap B)$ | Difference formula |
| $(A \cup B)' = A' \cap B'$ | De Morgan's First Law |
| $(A \cap B)' = A' \cup B'$ | De Morgan's Second Law |
| Number of subsets = $2^n$ | For a set with $n$ elements |
| $n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$ | Three-set cardinality |

---

*End of Notes - SETS Unit 1*
