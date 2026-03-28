# Chapter 31: Sets 1 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics

---

# Section A: Multiple Choice Questions (10 Questions)

**Instructions:** Choose the correct answer from options A-D.

---

### Question 1
Given $A = \{1, 2, 3, 4, 5\}$ and $B = \{4, 5, 6, 7\}$, what is $A \cap B$?

A) $\{1, 2, 3, 4, 5, 6, 7\}$

B) $\{4, 5\}$

C) $\{1, 2, 3\}$

D) $\{6, 7\}$

**Answer: B**

**Explanation:** The intersection $A \cap B$ contains only elements that are in BOTH sets A and B. The elements 4 and 5 appear in both sets, so $A \cap B = \{4, 5\}$.

---

### Question 2
If $\xi = \{1, 2, 3, 4, 5, 6, 7, 8\}$ and $A = \{2, 4, 6, 8\}$, what is $A'$?

A) $\{1, 3, 5, 7\}$

B) $\{2, 4, 6, 8\}$

C) $\{1, 2, 3, 4, 5, 6, 7, 8\}$

D) $\emptyset$

**Answer: A**

**Explanation:** The complement $A'$ contains all elements in the universal set $\xi$ that are NOT in A. Since $A = \{2, 4, 6, 8\}$, the elements not in A are $\{1, 3, 5, 7\}$.

---

### Question 3
If $n(A) = 15$, $n(B) = 12$, and $n(A \cap B) = 5$, what is $n(A \cup B)$?

A) 32

B) 27

C) 22

D) 17

**Answer: C**

**Explanation:** Using the formula $n(A \cup B) = n(A) + n(B) - n(A \cap B)$:
$$n(A \cup B) = 15 + 12 - 5 = 22$$

---

### Question 4
How many subsets does the set $\{a, b, c\}$ have?

A) 3

B) 6

C) 8

D) 9

**Answer: C**

**Explanation:** For a set with $n$ elements, the number of subsets is $2^n$. The set $\{a, b, c\}$ has 3 elements, so it has $2^3 = 8$ subsets: $\emptyset, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}$.

---

### Question 5
Which of the following represents De Morgan's First Law?

A) $(A \cap B)' = A' \cap B'$

B) $(A \cup B)' = A' \cup B'$

C) $(A \cup B)' = A' \cap B'$

D) $(A \cap B)' = A' \cap B'$

**Answer: C**

**Explanation:** De Morgan's First Law states: $(A \cup B)' = A' \cap B'$. The complement of a union equals the intersection of the complements.

---

### Question 6
If $A$ and $B$ are disjoint sets, then:

A) $A \cup B = \emptyset$

B) $A \cap B = \emptyset$

C) $A = B$

D) $A \subset B$

**Answer: B**

**Explanation:** Disjoint sets have NO elements in common. Therefore, their intersection is empty: $A \cap B = \emptyset$.

---

### Question 7
Given $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$, what is $A - B$?

A) $\{1, 2\}$

B) $\{5, 6\}$

C) $\{3, 4\}$

D) $\{1, 2, 5, 6\}$

**Answer: A**

**Explanation:** $A - B$ contains elements that are in A but NOT in B. From A = $\{1, 2, 3, 4\}$, the elements 3 and 4 are also in B. So $A - B = \{1, 2\}$.

---

### Question 8
In a class of 40 students, 25 play cricket and 20 play football. If 8 play both, how many play neither?

A) 3

B) 5

C) 12

D) 37

**Answer: A**

**Explanation:**
- $n(C \cup F) = n(C) + n(F) - n(C \cap F) = 25 + 20 - 8 = 37$
- $n(\text{neither}) = n(\xi) - n(C \cup F) = 40 - 37 = 3$

---

### Question 9
Which statement is TRUE about the empty set?

A) $\emptyset \in \{0\}$

B) $\emptyset = \{0\}$

C) $\emptyset \subset \{\emptyset\}$

D) $n(\emptyset) = 1$

**Answer: C**

**Explanation:** The empty set is a subset of EVERY set, including $\{\emptyset\}$. Option A is false (empty set is not an element of $\{0\}$). Option B is false ($\{0\}$ has one element, empty set has none). Option D is false ($n(\emptyset) = 0$).

---

### Question 10
If $A \subset B$, then $A \cup B$ equals:

A) $A$

B) $B$

C) $A \cap B$

D) $\emptyset$

**Answer: B**

**Explanation:** If $A$ is a subset of $B$, all elements of $A$ are already in $B$. Therefore, $A \cup B = B$ (the union adds no new elements to B).

---

# Section B: True/False (10 Questions)

**Instructions:** State whether each statement is TRUE or FALSE. If FALSE, provide the correct statement.

---

### Question 11
**Statement:** If $A = \{1, 2, 3\}$, then $\{1, 2\} \subset A$.

**Answer: TRUE**

**Explanation:** $\{1, 2\}$ is a proper subset of $A$ because all elements of $\{1, 2\}$ are in A, and $\{1, 2\} \neq A$.

---

### Question 12
**Statement:** $n(A \cup B) = n(A) + n(B)$ is always true.

**Answer: FALSE**

**Correction:** $n(A \cup B) = n(A) + n(B) - n(A \cap B)$

**Explanation:** This formula is only true when $A$ and $B$ are disjoint sets. Generally, we must subtract $n(A \cap B)$ to avoid double-counting elements in the intersection.

---

### Question 13
**Statement:** The empty set is a subset of every set.

**Answer: TRUE**

**Explanation:** By definition, $\emptyset \subseteq A$ for any set $A$. There are no elements in $\emptyset$ that are not in $A$.

---

### Question 14
**Statement:** $(A \cap B)' = A' \cap B'$

**Answer: FALSE**

**Correction:** $(A \cap B)' = A' \cup B'$ (De Morgan's Second Law)

**Explanation:** The complement of an intersection equals the union of complements, not the intersection.

---

### Question 15
**Statement:** If $n(A) = 10$ and $n(A \cap B) = 3$, then $n(A - B) = 7$.

**Answer: TRUE**

**Explanation:** $n(A - B) = n(A) - n(A \cap B) = 10 - 3 = 7$. This is correct.

---

### Question 16
**Statement:** $A \cup A' = \emptyset$

**Answer: FALSE**

**Correction:** $A \cup A' = \xi$ (the universal set)

**Explanation:** A set combined with its complement gives the entire universal set.

---

### Question 17
**Statement:** For any set $A$, $A \cap A = A$.

**Answer: TRUE**

**Explanation:** This is the idempotent law for intersection. Intersecting a set with itself gives the same set.

---

### Question 18
**Statement:** $A - B = B - A$ for any sets $A$ and $B$.

**Answer: FALSE**

**Correction:** $A - B \neq B - A$ in general (set difference is NOT commutative)

**Explanation:** For example, if $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$, then $A - B = \{1, 2\}$ but $B - A = \{4, 5\}$.

---

### Question 19
**Statement:** If $A \cap B = \emptyset$, then $n(A \cup B) = n(A) + n(B)$.

**Answer: TRUE**

**Explanation:** When sets are disjoint (no common elements), the intersection has 0 elements, so the formula simplifies to $n(A \cup B) = n(A) + n(B)$.

---

### Question 20
**Statement:** Every set is a proper subset of itself.

**Answer: FALSE**

**Correction:** Every set is a subset of itself ($A \subseteq A$), but NOT a proper subset ($A \not\subset A$).

**Explanation:** A proper subset must be strictly smaller. $A \subset A$ would require $A \neq A$, which is false.

---

# Section C: Structured Questions

---

### Question 21 [3 marks]

Given:
- $\xi = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$
- $A = \{2, 4, 6, 8, 10\}$
- $B = \{3, 6, 9\}$

Find:
(a) $A \cup B$ [1 mark]
(b) $A \cap B$ [1 mark]
(c) $A' \cap B$ [1 mark]

**Mark Scheme:**

**(a) $A \cup B$ [1 mark]**
- $A \cup B = \{2, 3, 4, 6, 8, 9, 10\}$ ✓ M1 A1

*M1: Correct method (listing union)*
*A1: All elements correct, no duplicates, no missing elements*

**(b) $A \cap B$ [1 mark]**
- $A \cap B = \{6\}$ ✓ A1

*A1: Correct intersection identified (only 6 appears in both sets)*

**(c) $A' \cap B$ [1 mark]**
- $A' = \{1, 3, 5, 7, 9\}$ ✓ M1
- $A' \cap B = \{3, 9\}$ ✓ A1

*M1: Correct complement of A found*
*A1: Correct final answer*

---

### Question 22 [4 marks]

In a group of 50 people:
- 32 like coffee
- 24 like tea
- Each person likes at least one of these drinks

Find:
(a) How many people like both drinks? [2 marks]
(b) How many people like only coffee? [2 marks]

**Mark Scheme:**

**(a) People who like both drinks [2 marks]**

*Method 1: Using formula*
$$n(C \cup T) = n(C) + n(T) - n(C \cap T)$$
$$50 = 32 + 24 - n(C \cap T)$$ ✓ M1
$$n(C \cap T) = 56 - 50 = 6$$ ✓ A1

*Method 2: Venn diagram*
- Draw Venn diagram ✓ M1
- Label regions correctly
- $n(C \cap T) = 6$ ✓ A1

**(b) People who like only coffee [2 marks]**

$$n(\text{only coffee}) = n(C) - n(C \cap T)$$ ✓ M1
$$= 32 - 6 = 26$$ ✓ A1

*M1: Recognizing "only coffee" = $n(C) - n(C \cap T)$*
*A1: Correct calculation*

---

### Question 23 [5 marks]

The Venn diagram shows information about the subjects studied by 100 students.

- 45 study Biology (B)
- 40 study Chemistry (C)
- 35 study Physics (P)
- 15 study Biology and Chemistry
- 12 study Chemistry and Physics
- 10 study Biology and Physics
- 5 study all three subjects

(a) Draw a Venn diagram to show this information. [3 marks]
(b) How many students study exactly one subject? [1 mark]
(c) How many students study none of these subjects? [1 mark]

**Mark Scheme:**

**(a) Venn diagram [3 marks]**

*Step-by-step:*

**Step 1:** Fill center (all three)
- $B \cap C \cap P = 5$ ✓ M1

**Step 2:** Fill double-intersection regions
- $B \cap C$ only: $15 - 5 = 10$
- $C \cap P$ only: $12 - 5 = 7$
- $B \cap P$ only: $10 - 5 = 5$ ✓ M1

**Step 3:** Fill single regions
- Biology only: $45 - 10 - 5 - 5 = 25$
- Chemistry only: $40 - 10 - 7 - 5 = 18$
- Physics only: $35 - 5 - 7 - 5 = 18$ ✓ A1

*Venn diagram:*
```
           Biology     Chemistry
         ┌────────────────────────┐
         │   25   10   18   12    │
         │  ┌────┬────┬────┐      │
         │  │    │ 5  │    │      │
         │  ├────┼────┼────┤      │
         │  │    │ 7  │    │      │
         │  └────┴────┴────┘      │
         │       18               │
         └────────────────────────┘
              Physics
```

*Note: Outside = 12 (see part c)*

**(b) Students studying exactly one subject [1 mark]**
$$n(\text{exactly one}) = 25 + 18 + 18 = 61$$ ✓ A1

**(c) Students studying none [1 mark]**
$$n(B \cup C \cup P) = 25 + 10 + 5 + 18 + 7 + 5 + 18 = 88$$
$$n(\text{none}) = 100 - 88 = 12$$ ✓ A1

---

### Question 24 [6 marks]

In a survey of 80 households:
- 48 have a dog
- 32 have a cat
- 20 have a fish
- 15 have both a dog and a cat
- 8 have both a cat and a fish
- 6 have both a dog and a fish
- 4 have all three pets

(a) Draw a Venn diagram and fill in all regions. [4 marks]
(b) Find the number of households that have exactly two types of pets. [1 mark]
(c) Find the number of households that have at least two types of pets. [1 mark]

**Mark Scheme:**

**(a) Venn diagram [4 marks]**

*Step 1:* Center
- All three = 4 ✓ M1

*Step 2:* Double intersections (excluding center)
- Dog ∩ Cat only: $15 - 4 = 11$
- Cat ∩ Fish only: $8 - 4 = 4$
- Dog ∩ Fish only: $6 - 4 = 2$ ✓ M1

*Step 3:* Single regions
- Dog only: $48 - 11 - 4 - 2 = 31$
- Cat only: $32 - 11 - 4 - 4 = 13$
- Fish only: $20 - 2 - 4 - 4 = 10$ ✓ M1

*Step 4:* Outside
- Total with pets: $31 + 11 + 4 + 13 + 4 + 2 + 10 = 75$
- Outside: $80 - 75 = 5$ ✓ A1

**(b) Exactly two types of pets [1 mark]**
$$n(\text{exactly two}) = 11 + 4 + 2 = 17$$ ✓ A1

**(c) At least two types of pets [1 mark]**
$$n(\text{at least two}) = n(\text{exactly two}) + n(\text{all three})$$
$$= 17 + 4 = 21$$ ✓ A1

---

### Question 25 [4 marks]

Given:
- $\xi = \{x : 1 \leq x \leq 12, x \in \mathbb{Z}\}$
- $A = \{\text{factors of 12}\}$
- $B = \{\text{multiples of 3 less than 12}\}$

(a) List the elements of sets A and B. [2 marks]
(b) Verify De Morgan's First Law: $(A \cup B)' = A' \cap B'$ [2 marks]

**Mark Scheme:**

**(a) Listing elements [2 marks]**

$\xi = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\}$

$A = \{1, 2, 3, 4, 6, 12\}$ ✓ A1 (factors of 12)

$B = \{3, 6, 9\}$ ✓ A1 (multiples of 3 less than 12)

**(b) Verifying De Morgan's First Law [2 marks]**

**LHS:** $(A \cup B)'$
- $A \cup B = \{1, 2, 3, 4, 6, 9, 12\}$ ✓ M1
- $(A \cup B)' = \{5, 7, 8, 10, 11\}$

**RHS:** $A' \cap B'$
- $A' = \{5, 7, 8, 9, 10, 11\}$
- $B' = \{1, 2, 4, 5, 7, 8, 10, 11, 12\}$
- $A' \cap B' = \{5, 7, 8, 10, 11\}$ ✓ M1

**Conclusion:** LHS = RHS = $\{5, 7, 8, 10, 11\}$ ✓ A1

*Therefore, $(A \cup B)' = A' \cap B'$ is verified.*

---

### Question 26 [5 marks]

In a school of 200 students:
- 120 study Mathematics
- 90 study English
- 70 study Science
- 40 study both Mathematics and English
- 35 study both English and Science
- 30 study both Mathematics and Science
- 15 study all three subjects

Find:
(a) The number of students who study at least one of these subjects. [2 marks]
(b) The number of students who study none of these subjects. [1 mark]
(c) The number of students who study Mathematics but neither English nor Science. [2 marks]

**Mark Scheme:**

**(a) Students studying at least one subject [2 marks]**

Using the three-set formula:
$$n(M \cup E \cup S) = n(M) + n(E) + n(S) - n(M \cap E) - n(E \cap S) - n(M \cap S) + n(M \cap E \cap S)$$

$$= 120 + 90 + 70 - 40 - 35 - 30 + 15$$ ✓ M1
$$= 280 - 105 + 15$$
$$= 190$$ ✓ A1

**(b) Students studying none [1 mark]**
$$n(\text{none}) = 200 - 190 = 10$$ ✓ A1

**(c) Mathematics only (neither English nor Science) [2 marks]**

*Method 1: Using Venn diagram regions*
- $M \cap E$ only: $40 - 15 = 25$
- $M \cap S$ only: $30 - 15 = 15$
- $M \cap E \cap S$: 15

$$n(\text{Mathematics only}) = n(M) - 25 - 15 - 15$$ ✓ M1
$$= 120 - 55 = 65$$ ✓ A1

*Method 2: Using formula*
$$n(\text{Math only}) = n(M) - n(M \cap E) - n(M \cap S) + n(M \cap E \cap S)$$
$$= 120 - 40 - 30 + 15 = 65$$

---

### Question 27 [3 marks]

If $n(A) = 20$, $n(B) = 15$, and $n(A \cup B) = 28$, find $n(A \cap B)$ and $n(A - B)$.

**Mark Scheme:**

**Finding $n(A \cap B)$:**
$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
$$28 = 20 + 15 - n(A \cap B)$$ ✓ M1
$$n(A \cap B) = 35 - 28 = 7$$ ✓ A1

**Finding $n(A - B)$:**
$$n(A - B) = n(A) - n(A \cap B)$$ ✓ M1
$$= 20 - 7 = 13$$ ✓ A1

---

### Question 28 [4 marks]

Let $A = \{x \in \mathbb{N} : 1 < x < 10\}$ and $B = \{x \in \mathbb{N} : x \text{ is even and } x < 8\}$.

(a) List the elements of A and B. [1 mark]
(b) Find $A \cap B$ and $A \cup B$. [2 marks]
(c) Is $B \subset A$? Give a reason. [1 mark]

**Mark Scheme:**

**(a) Elements [1 mark]**
- $A = \{2, 3, 4, 5, 6, 7, 8, 9\}$ ✓ A1
- $B = \{2, 4, 6\}$ ✓ A1

**(b) Intersection and Union [2 marks]**
- $A \cap B = \{2, 4, 6\}$ ✓ A1
- $A \cup B = \{2, 3, 4, 5, 6, 7, 8, 9\}$ ✓ A1

**(c) Subset check [1 mark]**
- Yes, $B \subset A$ ✓ A1
- Reason: All elements of B (2, 4, 6) are in A, and $B \neq A$. ✓ R1

---

### Question 29 [5 marks]

In a group of students:
- The number who play football is 35
- The number who play cricket is 28
- The number who play both is 12
- The number who play neither is 15

(a) Find the total number of students. [2 marks]
(b) Draw a Venn diagram to represent this information. [2 marks]
(c) Find the number who play exactly one sport. [1 mark]

**Mark Scheme:**

**(a) Total number of students [2 marks]**

$$n(F \cup C) = n(F) + n(C) - n(F \cap C)$$
$$= 35 + 28 - 12 = 51$$ ✓ M1

$$n(\xi) = n(F \cup C) + n(\text{neither})$$
$$= 51 + 15 = 66$$ ✓ A1

**(b) Venn diagram [2 marks]**

- Football only: $35 - 12 = 23$
- Cricket only: $28 - 12 = 16$
- Both: 12 ✓ M1
- Neither: 15 ✓ A1

**(c) Exactly one sport [1 mark]**
$$n(\text{exactly one}) = 23 + 16 = 39$$ ✓ A1

---

### Question 30 [6 marks]

Prove that $n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C) = n(A \cup B \cup C)$.

Use a specific example to demonstrate this formula with:
- $\xi = \{1, 2, 3, ..., 10\}$
- $A = \{1, 2, 3, 4, 5\}$
- $B = \{3, 4, 5, 6, 7\}$
- $C = \{5, 6, 7, 8, 9\}$

**Mark Scheme:**

**Calculating each term:**
- $n(A) = 5$ ✓ M1
- $n(B) = 5$
- $n(C) = 5$
- $A \cap B = \{3, 4, 5\}$, $n(A \cap B) = 3$
- $B \cap C = \{5, 6, 7\}$, $n(B \cap C) = 3$
- $A \cap C = \{5\}$, $n(A \cap C) = 1$
- $A \cap B \cap C = \{5\}$, $n(A \cap B \cap C) = 1$ ✓ M1

**Applying formula:**
$$= 5 + 5 + 5 - 3 - 3 - 1 + 1$$ ✓ M1
$$= 15 - 7 + 1 = 9$$ ✓ A1

**Verifying by direct calculation:**
$$A \cup B \cup C = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$$
$$n(A \cup B \cup C) = 9$$ ✓ A1

**Conclusion:** Both methods give 9, confirming the formula. ✓ A1

---

# Exam Focus & Strategy Section

## Frequently Tested Question Types

### 1. **Basic Set Operations** (1-2 marks)
- Finding union, intersection, complement
- Listing elements in set notation

### 2. **Cardinality Problems** (2-3 marks)
- Using $n(A \cup B) = n(A) + n(B) - n(A \cap B)$
- Finding unknown values by rearranging

### 3. **Venn Diagram Problems** (3-5 marks)
- Filling in all regions
- Finding specific groups (exactly one, at least two, etc.)

### 4. **Three-Set Problems** (4-6 marks)
- Complete Venn diagram filling
- Multiple part questions with various interpretations

### 5. **De Morgan's Law Verification** (2-3 marks)
- Proving or verifying the laws with specific sets

---

## Typical Problem-Solving Patterns

| Pattern | Key Steps |
|---------|-----------|
| "Find how many..." | Use cardinality formula, draw Venn diagram |
| "Show that..." | Calculate LHS and RHS separately, compare |
| "Verify..." | Work through each side methodically |
| "Fill in Venn diagram" | Start from center, work outward |

---

## Command Word Guidance

| Command Word | What It Means | How to Answer |
|--------------|---------------|---------------|
| **Find** | Calculate the answer | Show working, give final answer |
| **List** | Write out all elements | Use set notation with braces |
| **Draw** | Create a diagram | Use standard Venn diagram format |
| **Show that** | Prove the given result | Step-by-step working leading to the stated result |
| **Verify** | Check that a statement is true | Work both sides and show they're equal |
| **Explain** | Give a reason | Mathematical reasoning required |

---

## How to Gain Full Marks

### ✅ Essential Tips:

1. **Always show your working** — Marks are given for method (M) and accuracy (A)

2. **Define your sets clearly** — State what each letter represents

3. **Draw Venn diagrams** — Even when not required, it helps avoid errors

4. **Check your answer** — All regions should sum to $n(\xi)$

5. **Use correct notation** — $\cup$, $\cap$, $\subset$, $\in$, not words

6. **Read carefully** — "Exactly one" ≠ "At least one"

7. **State the universal set** — Essential for complement problems

8. **Show substitutions** — When using formulas, show the values being substituted

### 📊 Mark Allocation Guide:

| Marks Expected | What to Include |
|----------------|-----------------|
| 1 mark | Final answer only (usually) |
| 2 marks | Method + answer |
| 3 marks | More detailed working or multiple parts |
| 4+ marks | Complete method, all steps shown, answer checked |

---

## Common Errors to Avoid

| Error | Consequence | How to Avoid |
|-------|-------------|--------------|
| Not subtracting intersection | Overcounting | Always use the full formula |
| Confusing $\subset$ with $\in$ | Conceptual error | $\subset$ for sets, $\in$ for elements |
| Forgetting universal set | Can't find complement | Identify $\xi$ first |
| Misreading "exactly" vs "at least" | Wrong answer | Underline key words |

---

*End of Quiz - SETS Unit 1*
