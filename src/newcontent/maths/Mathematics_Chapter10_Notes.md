# Chapter 10: Numbers 10 - Concise Synopsis
## Detailed Study Notes

---

# Unit 10: Rational and Irrational Numbers, Surds

## Learning Objectives
By the end of this unit, you will be able to:
- Distinguish between rational and irrational numbers
- Recognise and work with surds
- Simplify surds to their simplest form
- Rationalise denominators of various forms
- Apply surd manipulation in algebraic contexts
- Solve geometric problems involving surds

---

# Topic 1: Rational and Irrational Numbers

## 1.1 Understanding Rational Numbers

### Definition
A **rational number** is any number that can be expressed as a fraction $\frac{p}{q}$ where $p$ and $q$ are integers and $q \neq 0$.

### Key Characteristics
- Can be written as a terminating or recurring decimal
- Includes all integers, fractions, terminating decimals, and recurring decimals

### Examples of Rational Numbers

| Type | Examples | Fraction Form |
|------|----------|---------------|
| Integers | $5, -3, 0$ | $\frac{5}{1}, \frac{-3}{1}, \frac{0}{1}$ |
| Fractions | $\frac{2}{3}, \frac{-7}{4}$ | Already in form $\frac{p}{q}$ |
| Terminating decimals | $0.75, 3.125$ | $\frac{3}{4}, \frac{25}{8}$ |
| Recurring decimals | $0.\overline{3}, 0.\overline{27}$ | $\frac{1}{3}, \frac{3}{11}$ |

---

### Worked Example 1

> **Question:** Express $0.\overline{6}$ (recurring) as a fraction in its simplest form.

**Solution:**

**Method: Algebraic approach**

Let $x = 0.6666...$

Multiply by 10:
$$10x = 6.6666...$$

Subtract the original:
$$10x - x = 6.6666... - 0.6666...$$
$$9x = 6$$
$$x = \frac{6}{9} = \frac{2}{3}$$

**Answer:** $0.\overline{6} = \frac{2}{3}$

---

### Worked Example 2

> **Question:** Convert $0.\overline{27}$ to a fraction.

**Solution:**

Let $x = 0.272727...$

Multiply by 100 (two digits repeat):
$$100x = 27.272727...$$

Subtract the original:
$$100x - x = 27.272727... - 0.272727...$$
$$99x = 27$$
$$x = \frac{27}{99} = \frac{3}{11}$$

**Answer:** $0.\overline{27} = \frac{3}{11}$

---

> **Key Rule for Recurring Decimals:**
> - If one digit repeats, multiply by 10
> - If two digits repeat, multiply by 100
> - If $n$ digits repeat, multiply by $10^n$

---

## 1.2 Understanding Irrational Numbers

### Definition
An **irrational number** is a number that **cannot** be expressed as a fraction $\frac{p}{q}$ where $p$ and $q$ are integers.

### Key Characteristics
- Decimal expansion is **non-terminating and non-recurring**
- Cannot be written exactly as a fraction

### Common Irrational Numbers

| Symbol | Name | Approximate Value |
|--------|------|-------------------|
| $\pi$ | Pi | $3.14159265...$ |
| $e$ | Euler's number | $2.71828182...$ |
| $\sqrt{2}$ | Square root of 2 | $1.41421356...$ |
| $\sqrt{3}$ | Square root of 3 | $1.73205080...$ |
| $\sqrt{5}$ | Square root of 5 | $2.23606797...$ |

---

> ** Important:** Not all square roots are irrational!
> - $\sqrt{4} = 2$ is rational (it equals $\frac{2}{1}$)
> - $\sqrt{9} = 3$ is rational
> - $\sqrt{16} = 4$ is rational
> 
> **Only square roots of non-perfect squares are irrational.**

---

### Worked Example 3

> **Question:** Classify each number as rational or irrational:
> (a) $\sqrt{25}$
> (b) $\sqrt{7}$
> (c) $0.125$
> (d) $\frac{\pi}{2}$
> (e) $0.\overline{142857}$

**Solution:**

| Number | Classification | Reason |
|--------|----------------|--------|
| (a) $\sqrt{25}$ | **Rational** | $= 5 = \frac{5}{1}$ |
| (b) $\sqrt{7}$ | **Irrational** | 7 is not a perfect square |
| (c) $0.125$ | **Rational** | Terminating decimal $= \frac{1}{8}$ |
| (d) $\frac{\pi}{2}$ | **Irrational** | $\pi$ is irrational, so any non-zero multiple is irrational |
| (e) $0.\overline{142857}$ | **Rational** | Recurring decimal $= \frac{1}{7}$ |

---

## 1.3 The Real Number System

### Venn Diagram Representation

```
        Real Numbers
    ┌─────────────────────┐
    │    Irrational       │
    │   (√2, π, e, ...)   │
    │  ┌───────────────┐  │
    │  │  Rational     │  │
    │  │ ┌───────────┐ │  │
    │  │ │ Integers  │ │  │
    │  │ │ ┌───────┐ │ │  │
    │  │ │ │Whole  │ │ │  │
    │  │ │ │Numbers│ │ │  │
    │  │ │ └───────┘ │ │  │
    │  │ └───────────┘ │  │
    │  └───────────────┘  │
    └─────────────────────┘
```

### Subset Relationships
$$\text{Natural} \subset \text{Whole} \subset \text{Integers} \subset \text{Rational} \subset \text{Real}$$

---

## 1.4 Properties of Irrational Numbers

### Key Property 1: Closure
The sum, difference, product, or quotient of two irrational numbers is **not necessarily irrational**.

**Examples:**
- $\sqrt{2} + \sqrt{2} = 2\sqrt{2}$ — Irrational ✓
- $\sqrt{2} \times \sqrt{2} = 2$ — **Rational** ✗
- $\sqrt{8} \div \sqrt{2} = \sqrt{4} = 2$ — **Rational** ✗

### Key Property 2: Rational + Irrational
The sum of a rational number and an irrational number is **always irrational**.

**Example:**
$$3 + \sqrt{5} \text{ is irrational}$$
$$-\frac{1}{2} + \pi \text{ is irrational}$$

### Key Property 3: Non-Zero Rational × Irrational
The product of a non-zero rational number and an irrational number is **always irrational**.

**Example:**
$$5 \times \sqrt{3} = 5\sqrt{3} \text{ is irrational}$$
$$\frac{1}{2} \times \pi = \frac{\pi}{2} \text{ is irrational}$$

---

> ** Common Mistake Alert:** Many students incorrectly think:
> - $\sqrt{2} + \sqrt{2} = \sqrt{4} = 2$ ✗ WRONG!
> - Correct: $\sqrt{2} + \sqrt{2} = 2\sqrt{2}$ ✓

---

# Topic 2: Introduction to Surds

## 2.1 What is a Surd?

### Definition
A **surd** is an irrational number expressed as a root (square root, cube root, etc.) that cannot be simplified to a rational number.

### Examples of Surds

| Surd | Why it's a surd |
|------|-----------------|
| $\sqrt{2}$ | $\sqrt{2} \approx 1.414...$ — irrational |
| $\sqrt{3}$ | $\sqrt{3} \approx 1.732...$ — irrational |
| $\sqrt[3]{2}$ | Cube root of 2 — irrational |
| $\sqrt{12}$ | Can be simplified to $2\sqrt{3}$ — still irrational |

| NOT Surds | Why not |
|-----------|---------|
| $\sqrt{4}$ | $= 2$ — rational |
| $\sqrt{25}$ | $= 5$ — rational |
| $\sqrt[3]{8}$ | $= 2$ — rational |

---

## 2.2 Why Use Surds?

### Exact Values vs Approximations

**Problem:** Find the exact length of the diagonal of a unit square.

**Using approximation:**
$$\sqrt{2} \approx 1.41$$
This is **not exact**.

**Using surd:**
$$\text{Diagonal} = \sqrt{2}$$
This is **exact**.

> **Key Insight:** Surds give us **exact values**. In many mathematical contexts, leaving an answer as $\sqrt{3}$ is more accurate than writing $1.73$.

---

# Topic 3: Simplifying Surds

## 3.1 Fundamental Rule

### Key Rule
For any positive numbers $a$ and $b$:
$$\sqrt{ab} = \sqrt{a} \times \sqrt{b}$$
$$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$$

---

## 3.2 Method for Simplifying Surds

### Step-by-Step Process

**Step 1:** Find the **largest perfect square** that divides the number under the root

**Step 2:** Split the surd using $\sqrt{ab} = \sqrt{a} \times \sqrt{b}$

**Step 3:** Simplify the square root of the perfect square

**Step 4:** Write in the form $k\sqrt{n}$ where $n$ has no perfect square factors

---

### Worked Example 4

> **Question:** Simplify $\sqrt{12}$

**Solution:**

**Step 1:** Find the largest perfect square factor of 12
- Factors of 12: 1, 2, 3, 4, 6, 12
- Perfect squares: 1, 4
- Largest perfect square factor: **4**

**Step 2:** Split the surd
$$\sqrt{12} = \sqrt{4 \times 3} = \sqrt{4} \times \sqrt{3}$$

**Step 3:** Simplify
$$\sqrt{4} \times \sqrt{3} = 2\sqrt{3}$$

**Answer:** $\sqrt{12} = 2\sqrt{3}$

---

### Worked Example 5

> **Question:** Simplify $\sqrt{50}$

**Solution:**

**Step 1:** Find the largest perfect square factor of 50
- 50 = 25 × 2
- Largest perfect square: **25**

**Step 2:** Split and simplify
$$\sqrt{50} = \sqrt{25 \times 2} = \sqrt{25} \times \sqrt{2} = 5\sqrt{2}$$

**Answer:** $\sqrt{50} = 5\sqrt{2}$

---

### Worked Example 6

> **Question:** Simplify $\sqrt{72}$

**Solution:**

**Step 1:** Factorise 72
$$72 = 36 \times 2 = 6^2 \times 2$$

**Step 2:** Simplify
$$\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36} \times \sqrt{2} = 6\sqrt{2}$$

**Answer:** $\sqrt{72} = 6\sqrt{2}$

---

> ** Pro Tip:** Memorise common perfect squares!
> | $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
> |-----|---|---|---|---|---|---|---|---|---|---|----|----|----|
> | $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 | 169 |

---

## 3.3 Simplifying Surds with Coefficients

### Rule
$$a\sqrt{b} \times c\sqrt{d} = ac\sqrt{bd}$$

### Worked Example 7

> **Question:** Simplify $2\sqrt{3} \times 3\sqrt{6}$

**Solution:**

**Step 1:** Multiply coefficients
$$2 \times 3 = 6$$

**Step 2:** Multiply surds
$$\sqrt{3} \times \sqrt{6} = \sqrt{18}$$

**Step 3:** Simplify the result
$$6\sqrt{18} = 6\sqrt{9 \times 2} = 6 \times 3\sqrt{2} = 18\sqrt{2}$$

**Answer:** $2\sqrt{3} \times 3\sqrt{6} = 18\sqrt{2}$

---

## 3.4 Adding and Subtracting Surds

### Key Rule
**Only "like surds" can be combined directly.**

Like surds have the **same number under the square root**.

### Examples

| Expression | Can Combine? | Result |
|------------|--------------|--------|
| $3\sqrt{2} + 5\sqrt{2}$ | ✓ Yes | $8\sqrt{2}$ |
| $4\sqrt{3} - \sqrt{3}$ | ✓ Yes | $3\sqrt{3}$ |
| $2\sqrt{5} + 3\sqrt{7}$ | ✗ No | Cannot combine |
| $\sqrt{2} + \sqrt{8}$ | Simplify first! | $\sqrt{2} + 2\sqrt{2} = 3\sqrt{2}$ |

---

### Worked Example 8

> **Question:** Simplify $\sqrt{2} + \sqrt{8} + \sqrt{18}$

**Solution:**

**Step 1:** Simplify each surd
$$\sqrt{2} = \sqrt{2}$$
$$\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$$
$$\sqrt{18} = \sqrt{9 \times 2} = 3\sqrt{2}$$

**Step 2:** Combine like terms
$$\sqrt{2} + 2\sqrt{2} + 3\sqrt{2} = 6\sqrt{2}$$

**Answer:** $\sqrt{2} + \sqrt{8} + \sqrt{18} = 6\sqrt{2}$

---

### Worked Example 9

> **Question:** Simplify $\sqrt{27} - \sqrt{12} + \sqrt{48}$

**Solution:**

**Step 1:** Simplify each surd
$$\sqrt{27} = \sqrt{9 \times 3} = 3\sqrt{3}$$
$$\sqrt{12} = \sqrt{4 \times 3} = 2\sqrt{3}$$
$$\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}$$

**Step 2:** Combine
$$3\sqrt{3} - 2\sqrt{3} + 4\sqrt{3} = 5\sqrt{3}$$

**Answer:** $5\sqrt{3}$

---

## 3.5 Expanding Brackets with Surds

### Worked Example 10

> **Question:** Expand and simplify $\sqrt{3}(\sqrt{6} + 2\sqrt{3})$

**Solution:**

$$\sqrt{3}(\sqrt{6} + 2\sqrt{3}) = \sqrt{3} \times \sqrt{6} + \sqrt{3} \times 2\sqrt{3}$$

$$= \sqrt{18} + 2\sqrt{9}$$

$$= 3\sqrt{2} + 2 \times 3$$

$$= 3\sqrt{2} + 6$$

**Answer:** $3\sqrt{2} + 6$

---

### Worked Example 11 (Double Brackets)

> **Question:** Expand and simplify $(2 + \sqrt{3})(4 - \sqrt{3})$

**Solution:**

Use FOIL method:
$$= 2 \times 4 + 2 \times (-\sqrt{3}) + \sqrt{3} \times 4 + \sqrt{3} \times (-\sqrt{3})$$

$$= 8 - 2\sqrt{3} + 4\sqrt{3} - \sqrt{9}$$

$$= 8 + 2\sqrt{3} - 3$$

$$= 5 + 2\sqrt{3}$$

**Answer:** $5 + 2\sqrt{3}$

---

# Topic 4: Rationalising the Denominator

## 4.1 What is Rationalising?

### Definition
**Rationalising the denominator** means eliminating surds from the denominator of a fraction, so that only rational numbers remain in the denominator.

### Why Rationalise?
- Makes fractions easier to compare
- Standard form for exact values
- Required in many exam questions

---

## 4.2 Rationalising Simple Denominators

### Method for $\frac{a}{\sqrt{b}}$

**Rule:** Multiply numerator and denominator by $\sqrt{b}$

$$\frac{a}{\sqrt{b}} = \frac{a \times \sqrt{b}}{\sqrt{b} \times \sqrt{b}} = \frac{a\sqrt{b}}{b}$$

---

### Worked Example 12

> **Question:** Rationalise $\frac{6}{\sqrt{3}}$

**Solution:**

Multiply by $\frac{\sqrt{3}}{\sqrt{3}}$:
$$\frac{6}{\sqrt{3}} = \frac{6 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}}$$

$$= \frac{6\sqrt{3}}{3}$$

$$= 2\sqrt{3}$$

**Answer:** $2\sqrt{3}$

---

### Worked Example 13

> **Question:** Rationalise $\frac{10}{\sqrt{5}}$ and simplify fully.

**Solution:**

$$\frac{10}{\sqrt{5}} = \frac{10\sqrt{5}}{5} = 2\sqrt{5}$$

**Answer:** $2\sqrt{5}$

---

## 4.3 Rationalising with Surds in Numerator

### Worked Example 14

> **Question:** Simplify $\frac{\sqrt{12}}{\sqrt{3}}$

**Method 1: Rationalise first**
$$\frac{\sqrt{12}}{\sqrt{3}} = \frac{\sqrt{12} \times \sqrt{3}}{3} = \frac{\sqrt{36}}{3} = \frac{6}{3} = 2$$

**Method 2: Use surd division rule**
$$\frac{\sqrt{12}}{\sqrt{3}} = \sqrt{\frac{12}{3}} = \sqrt{4} = 2$$

**Answer:** $2$

---

### Worked Example 15

> **Question:** Simplify $\frac{\sqrt{20}}{\sqrt{5}}$

**Solution:**

$$\frac{\sqrt{20}}{\sqrt{5}} = \sqrt{\frac{20}{5}} = \sqrt{4} = 2$$

**Answer:** $2$

---

## 4.4 Rationalising $a + b\sqrt{c}$ Denominators

### The Conjugate

For an expression of the form $a + b\sqrt{c}$, its **conjugate** is $a - b\sqrt{c}$.

**Key property:**
$$(a + b\sqrt{c})(a - b\sqrt{c}) = a^2 - b^2c$$

This product is always **rational**.

---

### Worked Example 16

> **Question:** Rationalise $\frac{5}{2 + \sqrt{3}}$

**Solution:**

**Step 1:** Identify the conjugate
$$\text{Conjugate of } (2 + \sqrt{3}) \text{ is } (2 - \sqrt{3})$$

**Step 2:** Multiply numerator and denominator by the conjugate
$$\frac{5}{2 + \sqrt{3}} \times \frac{2 - \sqrt{3}}{2 - \sqrt{3}}$$

**Step 3:** Expand the denominator
$$(2 + \sqrt{3})(2 - \sqrt{3}) = 2^2 - (\sqrt{3})^2 = 4 - 3 = 1$$

**Step 4:** Expand the numerator
$$5(2 - \sqrt{3}) = 10 - 5\sqrt{3}$$

**Answer:** $10 - 5\sqrt{3}$

---

### Worked Example 17

> **Question:** Rationalise $\frac{3}{4 - \sqrt{7}}$

**Solution:**

Multiply by $\frac{4 + \sqrt{7}}{4 + \sqrt{7}}$:

$$\frac{3(4 + \sqrt{7})}{(4 - \sqrt{7})(4 + \sqrt{7})}$$

Denominator:
$$4^2 - (\sqrt{7})^2 = 16 - 7 = 9$$

Numerator:
$$3(4 + \sqrt{7}) = 12 + 3\sqrt{7}$$

$$= \frac{12 + 3\sqrt{7}}{9} = \frac{4 + \sqrt{7}}{3}$$

**Answer:** $\frac{4 + \sqrt{7}}{3}$

---

### Worked Example 18

> **Question:** Rationalise $\frac{2 + \sqrt{5}}{3 - \sqrt{5}}$

**Solution:**

Multiply by $\frac{3 + \sqrt{5}}{3 + \sqrt{5}}$:

**Numerator:**
$$(2 + \sqrt{5})(3 + \sqrt{5}) = 6 + 2\sqrt{5} + 3\sqrt{5} + 5 = 11 + 5\sqrt{5}$$

**Denominator:**
$$(3 - \sqrt{5})(3 + \sqrt{5}) = 9 - 5 = 4$$

**Answer:** $\frac{11 + 5\sqrt{5}}{4}$

---

## 4.5 More Complex Rationalisation

### Worked Example 19

> **Question:** Simplify $\frac{1}{\sqrt{2} + 1} + \frac{1}{\sqrt{2} - 1}$

**Solution:**

**Step 1:** Rationalise each fraction separately

$$\frac{1}{\sqrt{2} + 1} = \frac{\sqrt{2} - 1}{(\sqrt{2} + 1)(\sqrt{2} - 1)} = \frac{\sqrt{2} - 1}{2 - 1} = \sqrt{2} - 1$$

$$\frac{1}{\sqrt{2} - 1} = \frac{\sqrt{2} + 1}{(\sqrt{2} - 1)(\sqrt{2} + 1)} = \frac{\sqrt{2} + 1}{2 - 1} = \sqrt{2} + 1$$

**Step 2:** Add the results
$$(\sqrt{2} - 1) + (\sqrt{2} + 1) = 2\sqrt{2}$$

**Answer:** $2\sqrt{2}$

---

# Topic 5: Applications of Surds

## 5.1 Geometric Applications

### The Pythagorean Theorem and Surds

In a right-angled triangle with sides $a$, $b$ and hypotenuse $c$:
$$c^2 = a^2 + b^2$$

This often produces surds.

---

### Worked Example 20

> **Question:** Find the exact length of the diagonal of a square with side length 5 cm.

**Solution:**

Using Pythagoras:
$$d^2 = 5^2 + 5^2 = 25 + 25 = 50$$
$$d = \sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2} \text{ cm}$$

**Answer:** $5\sqrt{2}$ cm

---

### Worked Example 21

> **Question:** A rectangle has sides of length $\sqrt{8}$ cm and $\sqrt{18}$ cm. Find:
> (a) The perimeter
> (b) The area
> (c) The length of the diagonal

**Solution:**

**Simplify the sides:**
$$\sqrt{8} = 2\sqrt{2} \text{ cm}$$
$$\sqrt{18} = 3\sqrt{2} \text{ cm}$$

**(a) Perimeter:**
$$P = 2(2\sqrt{2} + 3\sqrt{2}) = 2(5\sqrt{2}) = 10\sqrt{2} \text{ cm}$$

**(b) Area:**
$$A = 2\sqrt{2} \times 3\sqrt{2} = 6 \times \sqrt{4} = 6 \times 2 = 12 \text{ cm}^2$$

**(c) Diagonal:**
$$d^2 = (2\sqrt{2})^2 + (3\sqrt{2})^2 = 8 + 18 = 26$$
$$d = \sqrt{26} \text{ cm}$$

---

## 5.2 Exact Trigonometric Values

### Common Exact Values

| Angle | $\sin$ | $\cos$ | $\tan$ |
|-------|--------|--------|--------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ |
| $45°$ | $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$ | $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

---

### Worked Example 22

> **Question:** Find the exact value of $\frac{\sin 45° + \cos 45°}{\tan 60°}$

**Solution:**

$$\sin 45° = \frac{\sqrt{2}}{2}$$
$$\cos 45° = \frac{\sqrt{2}}{2}$$
$$\tan 60° = \sqrt{3}$$

$$\frac{\sin 45° + \cos 45°}{\tan 60°} = \frac{\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}}{\sqrt{3}}$$

$$= \frac{\sqrt{2}}{\sqrt{3}}$$

$$= \frac{\sqrt{2} \times \sqrt{3}}{3}$$

$$= \frac{\sqrt{6}}{3}$$

**Answer:** $\frac{\sqrt{6}}{3}$

---

# Exam Focus & Strategy Section

## Frequently Tested Question Types

### Type 1: Simplifying Surds
**Pattern:** Simplify $\sqrt{n}$ to the form $k\sqrt{m}$

**Strategy:**
1. Find the largest perfect square factor
2. Split and simplify
3. Always check your answer is in simplest form

---

### Type 2: Combining Surds
**Pattern:** Add/subtract/expand expressions with surds

**Strategy:**
1. Simplify all surds first
2. Only combine like surds
3. Be careful with signs

---

### Type 3: Rationalising Denominators
**Pattern:** Remove surds from denominator

**Strategy:**
- For $\frac{a}{\sqrt{b}}$: multiply by $\sqrt{b}$
- For $\frac{a}{p + q\sqrt{r}}$: multiply by conjugate $p - q\sqrt{r}$

---

### Type 4: Exact Values with Surds
**Pattern:** Find exact values in geometric or trigonometric contexts

**Strategy:**
1. Use Pythagoras or trigonometric ratios
2. Leave answers in surd form unless asked for decimal
3. Always rationalise if the denominator contains a surd

---

## Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Simplify** | Express in simplest surd form |
| **Rationalise** | Remove surds from denominator |
| **Show that** | Verify the given result |
| **Express** | Write in the required form |
| **Find** | Calculate the exact value |
| **Calculate** | Work out the value |

---

## How to Gain Full Marks

### For Simplifying Surds Questions:
- [ ] Show the factorisation (e.g., $\sqrt{12} = \sqrt{4 \times 3}$)
- [ ] Show the split (e.g., $= \sqrt{4} \times \sqrt{3}$)
- [ ] Give the final simplified form

### For Rationalising Questions:
- [ ] Identify the correct multiplier
- [ ] Show the multiplication of both numerator and denominator
- [ ] Expand the denominator using difference of squares
- [ ] Simplify the final fraction

### For Geometric Applications:
- [ ] State Pythagoras theorem or formula used
- [ ] Substitute correctly
- [ ] Simplify surds
- [ ] State units in answer

---

## Common Mistakes to Avoid

> **❌ Common Mistake 1:** $\sqrt{a} + \sqrt{b} = \sqrt{a + b}$
> 
> **✅ Correct:** $\sqrt{a} + \sqrt{b}$ cannot be combined

> **❌ Common Mistake 2:** $2\sqrt{3} + 3\sqrt{5} = 5\sqrt{8}$
> 
> **✅ Correct:** $2\sqrt{3} + 3\sqrt{5}$ — cannot combine different surds

> **❌ Common Mistake 3:** $\sqrt{2}^2 = \sqrt{4}$
> 
> **✅ Correct:** $(\sqrt{2})^2 = 2$

> **❌ Common Mistake 4:** Forgetting to simplify final answer
> 
> **✅ Always check:** $\frac{6\sqrt{3}}{3} = 2\sqrt{3}$

---

## Key Formulas Summary

| Operation | Formula |
|-----------|---------|
| Product of surds | $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$ |
| Quotient of surds | $\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}$ |
| Square of surd | $(\sqrt{a})^2 = a$ |
| Conjugate product | $(a + b\sqrt{c})(a - b\sqrt{c}) = a^2 - b^2c$ |
| Simple rationalise | $\frac{k}{\sqrt{n}} = \frac{k\sqrt{n}}{n}$ |

---

## Exam Technique Tips

✅ **DO:**
- Leave answers in exact surd form unless asked for decimal
- Show all steps when rationalising
- Simplify surds at the start of calculations
- Check if different surds can be simplified to like surds

✅ **DON'T:**
- Use calculator approximations for exact value questions
- Forget to multiply both numerator AND denominator
- Mix up the conjugate sign
- Leave answers with surds in the denominator

---

## Practice Recommendations

1. **Mental arithmetic:** Memorise perfect squares up to $15^2 = 225$
2. **Quick simplification:** Practice simplifying $\sqrt{8}, \sqrt{12}, \sqrt{18}, \sqrt{20}, \sqrt{24}, \sqrt{27}, \sqrt{28}, \sqrt{32}, \sqrt{45}, \sqrt{50}$
3. **Rationalisation patterns:** Practice all three types regularly
4. **Time yourself:** Surd questions should take 2-4 minutes each

---

*End of Number 10 Detailed Notes*
