# Chapter 12: Algebra 2 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics (4MA1)

---

##  SYLLABUS OVERVIEW

This unit builds on foundational algebra skills and introduces more advanced manipulation techniques. These topics are **essential** for success in higher-tier questions and form the bridge to quadratic equations and functions.

### Topics Covered:
1. Algebraic fractions (simplifying expressions)
2. Equations with roots and powers
3. Positive integer indices
4. Inequalities (solving and representing)

---

## 1. ALGEBRAIC FRACTIONS (SIMPLIFYING EXPRESSIONS)

### 1.1 Understanding Algebraic Fractions

An **algebraic fraction** is a fraction where the numerator and/or denominator contains algebraic terms.

**Examples:**
- $\frac{x}{2}$ is an algebraic fraction
- $\frac{3x + 1}{x - 2}$ is an algebraic fraction
- $\frac{x^2 - 4}{x + 2}$ is an algebraic fraction

> **Key Principle:** Algebraic fractions follow the same rules as numerical fractions.

### 1.2 The Fundamental Rule for Simplifying

$$\boxed{\frac{ab}{ac} = \frac{b}{c}}$$

**To simplify a fraction, divide BOTH numerator and denominator by the same common factor.**

>  **COMMON MISTAKE:** You can ONLY cancel factors that are MULTIPLIED. You cannot cancel terms that are ADDED or SUBTRACTED!

### 1.3 Simplifying by Factorising

**The key skill:** Factorise the numerator and denominator FIRST, then cancel common factors.

#### Example 1: Simple Cancellation
**Simplify:** $\frac{6x}{9}$

**Solution:**
$$\frac{6x}{9} = \frac{6 \cdot x}{9} = \frac{2 \cdot 3 \cdot x}{3 \cdot 3} = \frac{2x}{3}$$

**Why:** The common factor is 3. Divide numerator and denominator by 3.

---

#### Example 2: Variable in Both Parts
**Simplify:** $\frac{8x^2}{12x}$

**Solution:**
$$\frac{8x^2}{12x} = \frac{8 \cdot x \cdot x}{12 \cdot x} = \frac{8x}{12} = \frac{2x}{3}$$

**Alternative approach:**
$$\frac{8x^2}{12x} = \frac{8}{12} \cdot \frac{x^2}{x} = \frac{2}{3} \cdot x = \frac{2x}{3}$$

>  **TIP:** Use index laws: $\frac{x^2}{x} = x^{2-1} = x^1 = x$

---

#### Example 3: Factorising Before Cancelling
**Simplify:** $\frac{4x + 8}{6}$

**Solution:**

Step 1: Factorise the numerator
$$4x + 8 = 4(x + 2)$$

Step 2: Write as a fraction
$$\frac{4(x + 2)}{6}$$

Step 3: Cancel the common factor (2)
$$= \frac{2(x + 2)}{3} = \boxed{\frac{2(x + 2)}{3}}$$

>  **NEVER cancel the 4 with the 6 directly:** $\frac{4x + 8}{6} ≠ \frac{x + 8}{\frac{3}{2}}$ - This is WRONG!

---

#### Example 4: Factorising Both Parts
**Simplify:** $\frac{x^2 - 4}{x + 2}$

**Solution:**

Step 1: Recognise that $x^2 - 4$ is a difference of two squares
$$x^2 - 4 = (x + 2)(x - 2)$$

Step 2: Substitute and cancel
$$\frac{(x + 2)(x - 2)}{x + 2} = \boxed{x - 2}$$

>  **KEY INSIGHT:** The factor $(x + 2)$ cancels because it's MULTIPLIED in the numerator.

---

#### Example 5: Common Linear Factor
**Simplify:** $\frac{x^2 + 5x + 6}{x + 2}$

**Solution:**

Step 1: Factorise the quadratic numerator
$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

Step 2: Substitute and cancel
$$\frac{(x + 2)(x + 3)}{x + 2} = \boxed{x + 3}$$

**Verification:** Check by substituting $x = 3$:
- Original: $\frac{3^2 + 5(3) + 6}{3 + 2} = \frac{9 + 15 + 6}{5} = \frac{30}{5} = 6$
- Simplified: $3 + 3 = 6$ ✓

---

#### Example 6: Factorising Both Numerator and Denominator
**Simplify:** $\frac{x^2 - 9}{x^2 - 3x}$

**Solution:**

Step 1: Factorise numerator (difference of two squares)
$$x^2 - 9 = (x + 3)(x - 3)$$

Step 2: Factorise denominator (common factor)
$$x^2 - 3x = x(x - 3)$$

Step 3: Cancel common factor $(x - 3)$
$$\frac{(x + 3)(x - 3)}{x(x - 3)} = \boxed{\frac{x + 3}{x}}$$

---

### 1.4 Operations with Algebraic Fractions

#### Adding and Subtracting Algebraic Fractions

**Rule:** Find a **common denominator**, then add/subtract the numerators.

$$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}$$

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$$

---

#### Example 7: Same Denominator
**Simplify:** $\frac{2x}{5} + \frac{3x}{5}$

**Solution:**
$$\frac{2x}{5} + \frac{3x}{5} = \frac{2x + 3x}{5} = \frac{5x}{5} = \boxed{x}$$

---

#### Example 8: Different Denominators
**Simplify:** $\frac{x}{2} + \frac{x}{3}$

**Solution:**

Step 1: Find the LCM of 2 and 3 (which is 6)
Step 2: Convert both fractions to have denominator 6
$$\frac{x}{2} = \frac{3x}{6}$$
$$\frac{x}{3} = \frac{2x}{6}$$

Step 3: Add
$$\frac{3x}{6} + \frac{2x}{6} = \frac{5x}{6}$$

**Alternative (cross-multiplication method):**
$$\frac{x}{2} + \frac{x}{3} = \frac{3x + 2x}{6} = \frac{5x}{6}$$

---

#### Example 9: With Brackets
**Simplify:** $\frac{3}{x} + \frac{2}{x + 1}$

**Solution:**

Step 1: The common denominator is $x(x + 1)$

Step 2: Convert each fraction
$$\frac{3}{x} = \frac{3(x + 1)}{x(x + 1)}$$
$$\frac{2}{x + 1} = \frac{2x}{x(x + 1)}$$

Step 3: Add the numerators
$$\frac{3(x + 1) + 2x}{x(x + 1)} = \frac{3x + 3 + 2x}{x(x + 1)} = \boxed{\frac{5x + 3}{x(x + 1)}}$$

---

#### Example 10: Subtraction
**Simplify:** $\frac{5}{x + 2} - \frac{3}{x - 1}$

**Solution:**

Step 1: Common denominator is $(x + 2)(x - 1)$

Step 2: Convert each fraction
$$\frac{5}{x + 2} = \frac{5(x - 1)}{(x + 2)(x - 1)}$$
$$\frac{3}{x - 1} = \frac{3(x + 2)}{(x + 2)(x - 1)}$$

Step 3: Subtract
$$\frac{5(x - 1) - 3(x + 2)}{(x + 2)(x - 1)} = \frac{5x - 5 - 3x - 6}{(x + 2)(x - 1)} = \boxed{\frac{2x - 11}{(x + 2)(x - 1)}}$$

>  **CAREFUL:** When subtracting, the minus sign applies to the WHOLE second numerator!

---

### 1.5 Key Exam Points for Algebraic Fractions

| Point | Explanation |
|-------|-------------|
| **Always factorise first** | Look for common factors in numerator and denominator |
| **Only cancel factors** | Terms connected by + or − cannot be cancelled |
| **Watch the domain** | The variable cannot make the denominator zero |
| **Expand carefully** | Check signs when expanding brackets |
| **Simplify final answer** | Always check if the numerator can be factorised further |

---

## 2. EQUATIONS WITH ROOTS AND POWERS

### 2.1 Understanding Powers and Roots

**Powers** and **roots** are inverse operations:
- $x^2$ means $x \times x$
- $\sqrt{x}$ means "the positive number whose square is $x$"
- $\sqrt[3]{x}$ means "the number whose cube is $x$"

> **Key Relationship:** $(\sqrt{x})^2 = x$ and $\sqrt{x^2} = |x|$

### 2.2 Solving Equations with Powers

#### Type 1: $x^n = k$ (Variable with Power)

**Method:** Take the $n^{th}$ root of both sides.

---

#### Example 11: Square Power
**Solve:** $x^2 = 49$

**Solution:**
$$x^2 = 49$$
$$x = \pm\sqrt{49}$$
$$x = \pm 7$$

>  **CRITICAL:** Remember that both $7^2 = 49$ AND $(-7)^2 = 49$. There are TWO solutions!

**Answer:** $x = 7$ or $x = -7$

---

#### Example 12: Cube Power
**Solve:** $x^3 = 27$

**Solution:**
$$x^3 = 27$$
$$x = \sqrt[3]{27}$$
$$x = 3$$

>  **NOTE:** Cube roots only have ONE real solution. $(-3)^3 = -27 ≠ 27$

---

#### Example 13: Higher Powers
**Solve:** $x^4 = 16$

**Solution:**
$$x^4 = 16$$
$$x = \pm\sqrt[4]{16}$$
$$x = \pm 2$$

Both $2^4 = 16$ and $(-2)^4 = 16$ ✓

**Answer:** $x = 2$ or $x = -2$

---

#### Type 2: $ax^n = k$ (Coefficient × Power)

**Method:** First isolate the power, then take the root.

---

#### Example 14:
**Solve:** $3x^2 = 75$

**Solution:**

Step 1: Isolate $x^2$
$$x^2 = \frac{75}{3} = 25$$

Step 2: Take square root
$$x = \pm\sqrt{25} = \pm 5$$

**Answer:** $x = 5$ or $x = -5$

---

#### Example 15:
**Solve:** $2x^3 + 10 = 26$

**Solution:**

Step 1: Subtract 10
$$2x^3 = 16$$

Step 2: Divide by 2
$$x^3 = 8$$

Step 3: Take cube root
$$x = \sqrt[3]{8} = 2$$

**Answer:** $x = 2$

---

#### Type 3: $(x + a)^n = k$ (Bracket with Power)

**Method:** Take the root first, then solve for $x$.

---

#### Example 16:
**Solve:** $(x + 3)^2 = 25$

**Solution:**

Step 1: Take square root
$$x + 3 = \pm\sqrt{25} = \pm 5$$

Step 2: Solve two equations
- $x + 3 = 5$ gives $x = 2$
- $x + 3 = -5$ gives $x = -8$

**Answer:** $x = 2$ or $x = -8$

---

#### Example 17:
**Solve:** $(2x - 1)^2 = 9$

**Solution:**

Step 1: Take square root
$$2x - 1 = \pm 3$$

Step 2: Solve two equations
- $2x - 1 = 3$ → $2x = 4$ → $x = 2$
- $2x - 1 = -3$ → $2x = -2$ → $x = -1$

**Answer:** $x = 2$ or $x = -1$

---

#### Example 18:
**Solve:** $(x - 4)^3 = -8$

**Solution:**

Step 1: Take cube root
$$x - 4 = \sqrt[3]{-8} = -2$$

Step 2: Solve
$$x = -2 + 4 = 2$$

**Answer:** $x = 2$

---

### 2.3 Solving Equations with Roots

#### Type 1: $\sqrt{x} = k$ (Square Root of Variable)

**Method:** Square both sides.

---

#### Example 19:
**Solve:** $\sqrt{x} = 7$

**Solution:**
$$(\sqrt{x})^2 = 7^2$$
$$x = 49$$

**Check:** $\sqrt{49} = 7$ ✓

---

#### Example 20:
**Solve:** $\sqrt{x + 2} = 5$

**Solution:**

Step 1: Square both sides
$$x + 2 = 25$$

Step 2: Solve
$$x = 23$$

**Check:** $\sqrt{23 + 2} = \sqrt{25} = 5$ ✓

---

#### Type 2: $a\sqrt{x} = k$ (Coefficient × Root)

**Method:** Isolate the root, then square.

---

#### Example 21:
**Solve:** $3\sqrt{x} = 12$

**Solution:**

Step 1: Divide by 3
$$\sqrt{x} = 4$$

Step 2: Square
$$x = 16$$

**Check:** $3\sqrt{16} = 3 \times 4 = 12$ ✓

---

#### Type 3: Equations with Root and Other Terms

---

#### Example 22:
**Solve:** $\sqrt{x - 1} + 3 = 7$

**Solution:**

Step 1: Isolate the root
$$\sqrt{x - 1} = 7 - 3 = 4$$

Step 2: Square both sides
$$x - 1 = 16$$

Step 3: Solve
$$x = 17$$

**Check:** $\sqrt{17 - 1} + 3 = \sqrt{16} + 3 = 4 + 3 = 7$ ✓

---

### 2.4 Important Warnings About Roots

>  **EXTRANEOUS SOLUTIONS:** When you square both sides of an equation, you may create "false" solutions. ALWAYS check your answers!

**Example where checking matters:**
Solve: $\sqrt{x} = -3$

Squaring gives $x = 9$, but $\sqrt{9} = 3 ≠ -3$

This equation has **NO SOLUTION** because $\sqrt{x}$ is always non-negative for real numbers.

---

### 2.5 Summary Table for Equations with Powers and Roots

| Equation Type | Method | Number of Solutions |
|---------------|--------|---------------------|
| $x^2 = k$ (where $k > 0$) | Take square root | Two: $\pm\sqrt{k}$ |
| $x^2 = k$ (where $k < 0$) | - | No real solutions |
| $x^3 = k$ | Take cube root | One: $\sqrt[3]{k}$ |
| $(x + a)^2 = k$ | Take root, then solve | Two (if $k > 0$) |
| $\sqrt{x} = k$ (where $k \geq 0$) | Square both sides | One: $k^2$ |
| $\sqrt{x} = k$ (where $k < 0$) | - | No solution |

---

## 3. POSITIVE INTEGER INDICES

### 3.1 What is an Index?

An **index** (plural: indices) or **exponent** tells you how many times to multiply a base by itself.

**Example:** $x^4 = x \times x \times x \times x$ (x multiplied by itself 4 times)

### 3.2 The Three Index Laws

These are **fundamental** rules that you must memorise.

---

#### Law 1: Multiplication Rule
$$\boxed{a^m \times a^n = a^{m+n}}$$

**When multiplying:** Same base → ADD the powers

**Why:** $a^3 \times a^2 = (a \times a \times a) \times (a \times a) = a^5 = a^{3+2}$

---

#### Law 2: Division Rule
$$\boxed{\frac{a^m}{a^n} = a^{m-n}}$$

**When dividing:** Same base → SUBTRACT the powers

**Why:** $\frac{a^5}{a^2} = \frac{a \times a \times a \times a \times a}{a \times a} = a \times a \times a = a^3 = a^{5-2}$

---

#### Law 3: Power of a Power
$$\boxed{(a^m)^n = a^{m \times n}}$$

**When raising to a power:** MULTIPLY the powers

**Why:** $(a^2)^3 = a^2 \times a^2 \times a^2 = a^{2+2+2} = a^{2 \times 3} = a^6$

---

### 3.3 Special Cases

#### Zero Index
$$\boxed{a^0 = 1 \quad \text{(where } a \neq 0 \text{)}}$$

**Why:** Using Law 2 with $m = n$:
$$\frac{a^n}{a^n} = a^{n-n} = a^0$$
But $\frac{a^n}{a^n} = 1$, so $a^0 = 1$

---

#### First Power
$$\boxed{a^1 = a}$$

---

### 3.4 Worked Examples Using Index Laws

#### Example 23: Using Law 1 (Multiplication)
**Simplify:** $x^3 \times x^5$

**Solution:**
$$x^3 \times x^5 = x^{3+5} = \boxed{x^8}$$

---

#### Example 24: With Coefficients
**Simplify:** $3x^4 \times 5x^2$

**Solution:**
- Multiply the coefficients: $3 \times 5 = 15$
- Apply Law 1 to the powers: $x^4 \times x^2 = x^{4+2} = x^6$
- Combine: $\boxed{15x^6}$

---

#### Example 25: Using Law 2 (Division)
**Simplify:** $\frac{x^7}{x^3}$

**Solution:**
$$\frac{x^7}{x^3} = x^{7-3} = \boxed{x^4}$$

---

#### Example 26: Division with Coefficients
**Simplify:** $\frac{12x^8}{4x^3}$

**Solution:**
- Divide the coefficients: $\frac{12}{4} = 3$
- Apply Law 2: $\frac{x^8}{x^3} = x^{8-3} = x^5$
- Combine: $\boxed{3x^5}$

---

#### Example 27: Using Law 3 (Power of a Power)
**Simplify:** $(x^3)^4$

**Solution:**
$$(x^3)^4 = x^{3 \times 4} = \boxed{x^{12}}$$

---

#### Example 28: Power of a Product
**Simplify:** $(2x^3)^2$

**Solution:**
$$(2x^3)^2 = 2^2 \times (x^3)^2 = 4 \times x^{3 \times 2} = \boxed{4x^6}$$

>  **TIP:** $(ab)^n = a^n \times b^n$

---

#### Example 29: Power of a Fraction
**Simplify:** $\left(\frac{2x^2}{3}\right)^3$

**Solution:**
$$\left(\frac{2x^2}{3}\right)^3 = \frac{(2x^2)^3}{3^3} = \frac{8x^6}{27} = \boxed{\frac{8x^6}{27}}$$

>  **TIP:** $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$

---

#### Example 30: Combining All Three Laws
**Simplify:** $\frac{(x^2)^3 \times x^4}{x^5}$

**Solution:**

Step 1: Apply Law 3 to $(x^2)^3$
$$(x^2)^3 = x^{2 \times 3} = x^6$$

Step 2: Apply Law 1 to numerator
$$x^6 \times x^4 = x^{6+4} = x^{10}$$

Step 3: Apply Law 2 to the division
$$\frac{x^{10}}{x^5} = x^{10-5} = \boxed{x^5}$$

---

#### Example 31: Complex Expression
**Simplify:** $\frac{6x^5 y^3}{2x^2 y}$

**Solution:**

Step 1: Divide coefficients
$$\frac{6}{2} = 3$$

Step 2: Apply Law 2 to each variable
- For $x$: $\frac{x^5}{x^2} = x^{5-2} = x^3$
- For $y$: $\frac{y^3}{y} = y^{3-1} = y^2$

Step 3: Combine
$$\boxed{3x^3 y^2}$$

---

### 3.5 Common Mistakes with Indices

| ❌ WRONG | ✅ CORRECT | Explanation |
|----------|------------|-------------|
| $x^3 \times x^2 = x^6$ | $x^3 \times x^2 = x^5$ | ADD powers when multiplying |
| $x^5 \div x^2 = x^{2.5}$ | $x^5 \div x^2 = x^3$ | SUBTRACT powers when dividing |
| $(x^3)^2 = x^5$ | $(x^3)^2 = x^6$ | MULTIPLY powers when raising to power |
| $x^3 + x^2 = x^5$ | $x^3 + x^2$ (cannot combine) | Laws don't apply to addition! |
| $2x^3 \times 3x^2 = 6x^5$ | $2x^3 \times 3x^2 = 6x^5$ | This one is actually correct! |

---

## 4. INEQUALITIES (SOLVING AND REPRESENTING)

### 4.1 What is an Inequality?

An **inequality** compares two expressions using inequality symbols:

| Symbol | Meaning |
|--------|---------|
| $<$ | Less than |
| $>$ | Greater than |
| $\leq$ | Less than or equal to |
| $\geq$ | Greater than or equal to |

### 4.2 Solving Linear Inequalities

**Key Principle:** Solve inequalities just like equations, with ONE important exception.

>  **CRITICAL RULE:** When you **multiply or divide by a NEGATIVE number**, you must **REVERSE the inequality sign**.

---

#### Example 32: Simple Inequality
**Solve:** $x + 5 < 12$

**Solution:**
$$x + 5 < 12$$
$$x < 12 - 5$$
$$x < 7$$

---

#### Example 33: Two-Step Inequality
**Solve:** $3x - 4 > 11$

**Solution:**
$$3x - 4 > 11$$
$$3x > 11 + 4$$
$$3x > 15$$
$$x > \frac{15}{3}$$
$$x > 5$$

---

#### Example 34: Inequality with Negative Coefficient
**Solve:** $-2x + 3 < 9$

**Solution:**

Step 1: Subtract 3
$$-2x < 9 - 3$$
$$-2x < 6$$

Step 2: Divide by -2 and REVERSE the sign
$$x > -3$$

>  **REMEMBER:** Dividing by -2 reverses $<$ to $>$

---

#### Example 35: Inequality on Both Sides
**Solve:** $4x + 1 \leq 2x + 9$

**Solution:**

Step 1: Subtract $2x$ from both sides
$$2x + 1 \leq 9$$

Step 2: Subtract 1
$$2x \leq 8$$

Step 3: Divide by 2
$$x \leq 4$$

---

#### Example 36: Three-Part Inequality
**Solve:** $-3 < 2x + 1 < 7$

**Solution:**

Step 1: Subtract 1 from all three parts
$$-3 - 1 < 2x < 7 - 1$$
$$-4 < 2x < 6$$

Step 2: Divide all parts by 2
$$-2 < x < 3$$

---

### 4.3 Representing Inequalities on Number Lines

**Conventions:**
- **Open circle (○):** Used for $<$ and $>$ (strict inequality - endpoint NOT included)
- **Filled circle (●):** Used for $\leq$ and $\geq$ (endpoint IS included)
- **Arrow:** Shows the direction of the solution set

---

#### Example 37: Representing $x > 2$

```
    ○────────────────────>
    ←─────────────────────
   -1   0   1   2   3   4   5
```

- Open circle at 2 (not included)
- Arrow pointing right (greater than)

---

#### Example 38: Representing $x \leq -1$

```
<────────────────●
                 ─────────────────→
   -3  -2  -1   0   1   2   3   4
```

- Filled circle at -1 (included)
- Arrow pointing left (less than or equal to)

---

#### Example 39: Representing $-2 < x \leq 3$

```
         ○───────────────●
    ←─────────────────────────────→
   -3  -2  -1   0   1   2   3   4
```

- Open circle at -2 (not included)
- Filled circle at 3 (included)

---

### 4.4 Set Notation and Interval Notation

| Inequality | Set Notation | Interval Notation |
|------------|--------------|-------------------|
| $x > 3$ | $\{x : x > 3\}$ | $(3, \infty)$ |
| $x \leq 5$ | $\{x : x \leq 5\}$ | $(-\infty, 5]$ |
| $-2 < x < 4$ | $\{x : -2 < x < 4\}$ | $(-2, 4)$ |
| $1 \leq x \leq 6$ | $\{x : 1 \leq x \leq 6\}$ | $[1, 6]$ |

---

### 4.5 Integer Solutions

Sometimes you're asked for **integer solutions** only.

#### Example 40:
**Find all integer values of $x$ such that $-2 \leq x < 3$**

**Solution:**
The inequality represents all numbers from -2 (inclusive) to 3 (exclusive).

Integer solutions: $-2, -1, 0, 1, 2$

---

#### Example 41:
**Find all integer values of $x$ such that $2x + 1 > 5$ and $x < 5$**

**Solution:**

First inequality:
$$2x + 1 > 5$$
$$2x > 4$$
$$x > 2$$

Second inequality: $x < 5$

Combining: $2 < x < 5$

Integer solutions: $\boxed{3, 4}$

---

### 4.6 Common Mistakes with Inequalities

| Mistake | Example | Correction |
|---------|---------|------------|
| Forgetting to reverse sign | $-2x > 6$ gives $x > -3$ ✗ | $-2x > 6$ gives $x < -3$ ✓ |
| Wrong circle type | $x \geq 3$ uses open circle ✗ | $x \geq 3$ uses filled circle ✓ |
| Wrong direction arrow | $x < 4$ arrow points right ✗ | $x < 4$ arrow points left ✓ |

---

## 📋 EXAM FOCUS & STRATEGY

### Frequently Tested Question Types

| Type | Frequency | Key Skills |
|------|-----------|------------|
| Simplifying algebraic fractions | High | Factorising, cancelling |
| Adding/subtracting fractions | Medium | Common denominators |
| Solving $x^2 = k$ equations | Very High | Two solutions! |
| Solving $(x + a)^n = k$ | High | Root then solve |
| Solving $\sqrt{x} = k$ | Medium | Squaring, checking |
| Index law simplification | Very High | All three laws |
| Solving inequalities | Very High | Reversing signs |
| Representing on number line | High | Circle types |
| Integer solutions | Medium | Combined inequalities |

---

### Command Words Guide

| Command Word | What It Means | How to Answer |
|--------------|---------------|---------------|
| **Simplify** | Write in simplest form | Use index laws, cancel factors |
| **Solve** | Find the value(s) of the variable | Show all steps, check solutions |
| **Express** | Write in a particular form | Show working clearly |
| **Find** | Determine a value or expression | Show method clearly |
| **Write down** | State without working | No working needed |
| **Show that** | Prove the given result | Every step must be shown |
| **Represent** | Draw on number line | Use correct circles and arrows |

---

### How to Gain Full Marks

#### For Algebraic Fractions:
1. ✅ Factorise numerator and denominator FIRST
2. ✅ Show the factorising step clearly
3. ✅ Cancel common factors
4. ✅ Check if further simplification is possible

#### For Equations with Powers:
1. ✅ Remember square equations have TWO solutions
2. ✅ Show both solutions clearly
3. ✅ Use ± symbol correctly
4. ✅ Check answers by substitution

#### For Index Questions:
1. ✅ Apply each law correctly
2. ✅ Handle coefficients separately
3. ✅ Show intermediate steps
4. ✅ Check final answer has correct power

#### For Inequalities:
1. ✅ Show every step
2. ✅ REVERSE sign when dividing by negative
3. ✅ Use correct circle type on number line
4. ✅ Indicate direction clearly with arrow

---

### Typical Problem-Solving Patterns

1. **Algebraic Fractions:** Factorise → Cancel → Simplify
2. **$x^2 = k$:** Take root → Remember ± → Write both solutions
3. **$(x+a)^2 = k$:** Take root first → Solve two linear equations
4. **$\sqrt{x+a} = k$:** Square → Solve → CHECK
5. **Inequalities:** Solve like equation → Check sign reversal → Represent correctly

---

### Common Exam Mistakes to Avoid

| ❌ Mistake | ✅ Correct Approach |
|------------|---------------------|
| $\frac{x+2}{2} = x$ | Cannot cancel 2 - it's not a factor of $x$ |
| $x^2 = 16$ gives $x = 4$ only | Two solutions: $x = \pm 4$ |
| $-x > 3$ gives $x > -3$ | Must reverse: $x < -3$ |
| $x^3 \times x^2 = x^6$ | Add powers: $x^5$ |
| Using open circle for $\leq$ | Use filled circle for $\leq$ and $\geq$ |

---

### Time-Saving Tips for A* Students

1. **Memorise index laws** - They appear frequently
2. **Always check for two solutions** in square equations
3. **Factorise instinctively** when seeing algebraic fractions
4. **Check sign reversals** before writing final answer for inequalities
5. **Verify by substitution** - catches many errors

---

## 📝 KEY FORMULAS AND RULES SUMMARY

| Topic | Rule/Formula |
|-------|--------------|
| Algebraic fractions | $\frac{ab}{ac} = \frac{b}{c}$ (cancel factors only) |
| Adding fractions | $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$ |
| Square equations | $x^2 = k$ → $x = \pm\sqrt{k}$ (if $k > 0$) |
| Cube equations | $x^3 = k$ → $x = \sqrt[3]{k}$ |
| Root equations | $\sqrt{x} = k$ → $x = k^2$ (check solution!) |
| Index Law 1 | $a^m \times a^n = a^{m+n}$ |
| Index Law 2 | $\frac{a^m}{a^n} = a^{m-n}$ |
| Index Law 3 | $(a^m)^n = a^{mn}$ |
| Zero index | $a^0 = 1$ |
| Inequality reversal | Divide/multiply by negative → reverse sign |

---

## 🔗 CONNECTIONS TO OTHER TOPICS

These algebraic skills connect to:
- **Unit 3:** Quadratic equations, simultaneous equations
- **Unit 4:** Functions, graphs
- **Geometry:** Area and volume formulas with indices
- **Graphs:** Understanding powers helps with curve sketching

---

*These notes are designed for Pearson Edexcel IGCSE Mathematics (4MA1) Specification.*

---

**End of Algebra 2 Detailed Notes**
