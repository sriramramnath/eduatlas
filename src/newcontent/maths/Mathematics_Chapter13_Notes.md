# Chapter 13: Algebra 3 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Specification A)

---

## Table of Contents
1. [Factorising Expressions](#1-factorising-expressions)
2. [Simplifying Fractions](#2-simplifying-fractions)
3. [Equations with Fractions](#3-equations-with-fractions)
4. [Simultaneous Equations](#4-simultaneous-equations)
5. [Exam Focus & Strategy](#5-exam-focus--strategy)

---

# 1. Factorising Expressions

## 1.1 What is Factorising?

**Definition:** Factorising is the reverse process of expanding brackets. It involves expressing an algebraic expression as a product of its factors.

> **Key Insight:** If expanding is multiplication, factorising is finding what was multiplied together.

### Why Factorise?
- Simplifies complex expressions
- Essential for solving equations
- Needed for simplifying algebraic fractions
- Crucial for finding roots of quadratic equations

---

## 1.2 Factorising by Taking Out Common Factors

### Finding the Highest Common Factor (HCF)

**Method:** Look for the HCF of:
1. **Numerical coefficients**
2. **Each variable's lowest power**

### Worked Example 1.1
**Factorise:** $6x^2 + 9x$

**Solution:**
| Step | Action | Result |
|------|--------|--------|
| 1 | Find HCF of 6 and 9 | HCF = 3 |
| 2 | Find HCF of $x^2$ and $x$ | HCF = $x$ |
| 3 | Combined HCF | $3x$ |
| 4 | Write as product | $3x(2x + 3)$ |

**Verification:** $3x(2x + 3) = 6x^2 + 9x$ ✓

### Worked Example 1.2
**Factorise:** $12a^3b - 8a^2b^2 + 4ab$

**Solution:**
- HCF of 12, 8, 4 is **4**
- HCF of $a^3$, $a^2$, $a$ is **$a$**
- HCF of $b$, $b^2$, $b$ is **$b$** (note: last term has no $b$)

Wait, the last term is $4ab$ which has $b$. Let me recalculate:
- HCF of 12, 8, 4 is **4**
- HCF of $a^3$, $a^2$, $a$ is **$a$**
- HCF of $b$, $b^2$, $b$ is **$b$**

**Answer:** $4ab(3a^2 - 2ab + 1)$

> ** Common Mistake:** Forgetting the 1 in the brackets when all terms share the factor. For example, $4ab$ in the last term becomes 1, not 0.

---

## 1.3 Factorising Quadratic Expressions

### Standard Form
A quadratic expression has the form: $ax^2 + bx + c$ where $a \neq 0$

### Case 1: Simple Quadratics ($a = 1$)

**Method:** Find two numbers that:
1. **Multiply** to give $c$ (the constant term)
2. **Add** to give $b$ (the coefficient of $x$)

### Worked Example 1.3
**Factorise:** $x^2 + 7x + 12$

**Solution:**
- We need two numbers that multiply to 12 and add to 7
- Pairs with product 12: (1,12), (2,6), (3,4), (-1,-12), (-2,-6), (-3,-4)
- Checking sums: 1+12=13, 2+6=8, **3+4=7** ✓

**Answer:** $(x + 3)(x + 4)$

### Worked Example 1.4
**Factorise:** $x^2 - 5x - 14$

**Solution:**
- We need numbers that multiply to **-14** and add to **-5**
- Since product is negative, one number is positive, one negative
- Since sum is negative, the larger number is negative
- Pairs: (-7, 2) gives product -14 and sum -5 ✓

**Answer:** $(x - 7)(x + 2)$

> ** Exam Tip:** When factorising $x^2 + bx + c$:
> - If $c > 0$ and $b > 0$: both brackets have **+** signs
> - If $c > 0$ and $b < 0$: both brackets have **−** signs
> - If $c < 0$: one bracket has **+**, one has **−**

### Case 2: Quadratics with $a \neq 1$ (The AC Method)

**Method:** For $ax^2 + bx + c$:
1. Find $a \times c$
2. Find two numbers that multiply to $ac$ and add to $b$
3. Split the middle term using these numbers
4. Factorise by grouping

### Worked Example 1.5
**Factorise:** $2x^2 + 7x + 3$

**Solution:**
| Step | Working |
|------|---------|
| Calculate $a \times c$ | $2 \times 3 = 6$ |
| Find two numbers | Product = 6, Sum = 7 → **1 and 6** |
| Split middle term | $2x^2 + 6x + x + 3$ |
| Factorise pairs | $2x(x + 3) + 1(x + 3)$ |
| Extract common bracket | $(2x + 1)(x + 3)$ |

**Answer:** $(2x + 1)(x + 3)$

### Alternative Method: Trial and Improvement

For $2x^2 + 7x + 3$:

The brackets must be $(2x + ?)(x + ?)$

Options:
- $(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$ ✓
- $(2x + 3)(x + 1) = 2x^2 + 2x + 3x + 3 = 2x^2 + 5x + 3$ ✗

### Worked Example 1.6
**Factorise:** $3x^2 - 10x - 8$

**Solution:**
- $a \times c = 3 \times (-8) = -24$
- Need two numbers: product = -24, sum = -10
- Numbers: **-12 and +2**
- Split: $3x^2 - 12x + 2x - 8$
- Group: $3x(x - 4) + 2(x - 4)$
- Factorise: $(3x + 2)(x - 4)$

**Answer:** $(3x + 2)(x - 4)$

---

## 1.4 Difference of Two Squares

### The Formula
$$a^2 - b^2 = (a + b)(a - b)$$

### Why It Works
$(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$

### Worked Example 1.7
**Factorise:** $x^2 - 25$

**Solution:**
- $x^2 = (x)^2$ and $25 = (5)^2$
- Apply the formula: $(x + 5)(x - 5)$

**Answer:** $(x + 5)(x - 5)$

### Worked Example 1.8
**Factorise:** $4x^2 - 9y^2$

**Solution:**
- $4x^2 = (2x)^2$ and $9y^2 = (3y)^2$
- Apply formula: $(2x + 3y)(2x - 3y)$

**Answer:** $(2x + 3y)(2x - 3y)$

### Worked Example 1.9
**Factorise:** $x^2 - 20$

**Solution:**
- $x^2 = (x)^2$ and $20 = (\sqrt{20})^2 = (2\sqrt{5})^2$
- $(x + 2\sqrt{5})(x - 2\sqrt{5})$

> ** Note:** In some questions, you may leave answers with surds.

### Hidden Difference of Two Squares

**Example:** $2x^2 - 50$
- First take out the common factor: $2(x^2 - 25)$
- Then apply difference of two squares: $2(x + 5)(x - 5)$

---

## 1.5 Factorising by Grouping

### When to Use
Expressions with four terms that can be grouped into pairs.

### Worked Example 1.10
**Factorise:** $ax + ay + bx + by$

**Solution:**
- Group terms: $(ax + ay) + (bx + by)$
- Factorise each group: $a(x + y) + b(x + y)$
- Extract common factor: $(a + b)(x + y)$

**Answer:** $(a + b)(x + y)$

### Worked Example 1.11
**Factorise:** $x^2 - 2x - xy + 2y$

**Solution:**
- Group: $(x^2 - 2x) + (-xy + 2y)$
- Factorise: $x(x - 2) - y(x - 2)$
- Extract: $(x - y)(x - 2)$

**Answer:** $(x - 2)(x - y)$

---

## 1.6 Complete Factorising

**Always factorise completely!** Check if any factors can be factorised further.

### Worked Example 1.12
**Factorise completely:** $3x^2 - 27$

**Solution:**
1. Take out common factor: $3(x^2 - 9)$
2. Recognise difference of squares: $3(x + 3)(x - 3)$

**Answer:** $3(x + 3)(x - 3)$

> ** Common Mistake:** Stopping at $3(x^2 - 9)$ - this is incomplete!

---

# 2. Simplifying Fractions

## 2.1 Algebraic Fractions - Basic Principles

**Key Rule:** You can only cancel factors, not terms!

> ** Critical Error:** $\frac{x + 2}{x} \neq 2$ (CANNOT cancel the $x$)

> **✓ Correct:** $\frac{xy}{x} = y$ (CAN cancel $x$ because it's a factor)

---

## 2.2 Simplifying by Factorising

### Method
1. **Factorise** numerator and denominator completely
2. **Cancel** common factors
3. **Write** the simplified result

### Worked Example 2.1
**Simplify:** $\frac{6x^2}{9x}$

**Solution:**
$$\frac{6x^2}{9x} = \frac{6 \cdot x \cdot x}{9 \cdot x} = \frac{2 \cdot \cancel{3} \cdot \cancel{x} \cdot x}{3 \cdot \cancel{3} \cdot \cancel{x}} = \frac{2x}{3}$$

**Answer:** $\frac{2x}{3}$

### Worked Example 2.2
**Simplify:** $\frac{x^2 - 9}{x^2 + 4x + 3}$

**Solution:**
1. Factorise numerator: $x^2 - 9 = (x+3)(x-3)$ (difference of squares)
2. Factorise denominator: $x^2 + 4x + 3 = (x+3)(x+1)$
3. Cancel common factors:

$$\frac{(x+3)(x-3)}{(x+3)(x+1)} = \frac{\cancel{(x+3)}(x-3)}{\cancel{(x+3)}(x+1)}$$

**Answer:** $\frac{x-3}{x+1}$

> ** Exam Tip:** Always check for difference of two squares in numerators!

### Worked Example 2.3
**Simplify:** $\frac{x^2 + 5x + 6}{x^2 - x - 12}$

**Solution:**
1. Factorise numerator: $x^2 + 5x + 6 = (x+2)(x+3)$
2. Factorise denominator: $x^2 - x - 12 = (x-4)(x+3)$
3. Cancel:

$$\frac{(x+2)\cancel{(x+3)}}{(x-4)\cancel{(x+3)}}$$

**Answer:** $\frac{x+2}{x-4}$

---

## 2.3 Multiplying Algebraic Fractions

### Rule
$$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$$

**Best Practice:** Factorise first, then cancel, then multiply.

### Worked Example 2.4
**Simplify:** $\frac{x^2 - 4}{x + 1} \times \frac{2x + 2}{x - 2}$

**Solution:**
1. Factorise: $\frac{(x+2)(x-2)}{x+1} \times \frac{2(x+1)}{x-2}$
2. Rearrange: $\frac{(x+2)(x-2) \times 2(x+1)}{(x+1)(x-2)}$
3. Cancel: $\frac{(x+2) \times 2\cancel{(x-2)}\cancel{(x+1)}}{\cancel{(x+1)}\cancel{(x-2)}}$
4. Simplify: $2(x+2)$

**Answer:** $2(x+2)$ or $2x + 4$

---

## 2.4 Dividing Algebraic Fractions

### Rule
$$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$

**Remember:** "Keep, Flip, Change" - Keep first fraction, Flip the second, Change ÷ to ×

### Worked Example 2.5
**Simplify:** $\frac{x^2 - 1}{x + 3} \div \frac{x - 1}{x^2 - 9}$

**Solution:**
1. Change to multiplication: $\frac{x^2 - 1}{x + 3} \times \frac{x^2 - 9}{x - 1}$
2. Factorise all:
   - $x^2 - 1 = (x+1)(x-1)$
   - $x^2 - 9 = (x+3)(x-3)$
3. Write: $\frac{(x+1)(x-1)}{x+3} \times \frac{(x+3)(x-3)}{x-1}$
4. Cancel: $\frac{(x+1)\cancel{(x-1)}}{\cancel{x+3}} \times \frac{\cancel{(x+3)}(x-3)}{\cancel{x-1}}$
5. Simplify: $(x+1)(x-3)$

**Answer:** $(x+1)(x-3)$ or $x^2 - 2x - 3$

---

## 2.5 Adding and Subtracting Algebraic Fractions

### Key Rule
You need a **common denominator** to add or subtract fractions.

$$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}$$

### Finding the Common Denominator

The common denominator is the **Lowest Common Multiple (LCM)** of the denominators.

### Worked Example 2.6
**Simplify:** $\frac{3}{x} + \frac{2}{x+1}$

**Solution:**
1. Common denominator: $x(x+1)$
2. Rewrite each fraction:
   $$\frac{3(x+1)}{x(x+1)} + \frac{2x}{x(x+1)}$$
3. Combine:
   $$\frac{3(x+1) + 2x}{x(x+1)} = \frac{3x + 3 + 2x}{x(x+1)}$$
4. Simplify numerator:
   $$\frac{5x + 3}{x(x+1)}$$

**Answer:** $\frac{5x + 3}{x(x+1)}$

### Worked Example 2.7
**Simplify:** $\frac{2}{x-1} - \frac{3}{x+2}$

**Solution:**
1. Common denominator: $(x-1)(x+2)$
2. Rewrite:
   $$\frac{2(x+2)}{(x-1)(x+2)} - \frac{3(x-1)}{(x-1)(x+2)}$$
3. Combine:
   $$\frac{2(x+2) - 3(x-1)}{(x-1)(x+2)}$$
4. Expand and simplify:
   $$\frac{2x + 4 - 3x + 3}{(x-1)(x+2)} = \frac{-x + 7}{(x-1)(x+2)}$$

**Answer:** $\frac{7-x}{(x-1)(x+2)}$ or $\frac{-x+7}{(x-1)(x+2)}$

> ** Common Mistake:** When subtracting, remember the negative sign applies to ALL terms in the second numerator!

### Worked Example 2.8 (More Complex)
**Simplify:** $\frac{1}{x^2-1} - \frac{1}{x^2-x}$

**Solution:**
1. Factorise denominators:
   - $x^2 - 1 = (x+1)(x-1)$
   - $x^2 - x = x(x-1)$
2. LCM: $x(x+1)(x-1)$
3. Rewrite:
   $$\frac{x}{x(x+1)(x-1)} - \frac{x+1}{x(x+1)(x-1)}$$
4. Combine:
   $$\frac{x - (x+1)}{x(x+1)(x-1)} = \frac{x - x - 1}{x(x+1)(x-1)}$$
5. Simplify:
   $$\frac{-1}{x(x+1)(x-1)}$$

**Answer:** $\frac{-1}{x(x+1)(x-1)}$ or $-\frac{1}{x(x^2-1)}$

---

# 3. Equations with Fractions

## 3.1 Solving Equations with Algebraic Fractions

### Main Strategy
1. **Find the LCD** (Lowest Common Denominator) of all fractions
2. **Multiply every term** by the LCD to eliminate denominators
3. **Solve** the resulting equation

---

## 3.2 Simple Fractional Equations

### Worked Example 3.1
**Solve:** $\frac{x}{3} + 2 = 5$

**Solution:**
1. Multiply all terms by 3:
   $$x + 6 = 15$$
2. Solve:
   $$x = 9$$

**Answer:** $x = 9$

### Worked Example 3.2
**Solve:** $\frac{2x-1}{3} = 5$

**Solution:**
1. Multiply by 3:
   $$2x - 1 = 15$$
2. Add 1:
   $$2x = 16$$
3. Divide by 2:
   $$x = 8$$

**Answer:** $x = 8$

---

## 3.3 Equations with Multiple Fractions

### Worked Example 3.3
**Solve:** $\frac{x}{2} + \frac{x}{3} = 5$

**Solution:**
1. Find LCD of 2 and 3: **6**
2. Multiply all terms by 6:
   $$6 \times \frac{x}{2} + 6 \times \frac{x}{3} = 6 \times 5$$
   $$3x + 2x = 30$$
3. Combine:
   $$5x = 30$$
4. Solve:
   $$x = 6$$

**Answer:** $x = 6$

**Verification:** $\frac{6}{2} + \frac{6}{3} = 3 + 2 = 5$ ✓

### Worked Example 3.4
**Solve:** $\frac{3}{x} + \frac{2}{x+1} = 2$

**Solution:**
1. Find LCD: $x(x+1)$
2. Multiply all terms:
   $$\frac{3x(x+1)}{x(x+1)} + \frac{2x(x+1)}{x+1} \cdot \frac{?}{x} = \frac{2x(x+1)}{?}$$
   
   Wait, let me redo this clearly:
   $$x(x+1) \times \frac{3}{x} + x(x+1) \times \frac{2}{x+1} = 2x(x+1)$$
   $$3(x+1) + 2x = 2x(x+1)$$
3. Expand:
   $$3x + 3 + 2x = 2x^2 + 2x$$
4. Rearrange:
   $$5x + 3 = 2x^2 + 2x$$
   $$0 = 2x^2 - 3x - 3$$
5. Use quadratic formula:
   $$x = \frac{3 \pm \sqrt{9 + 24}}{4} = \frac{3 \pm \sqrt{33}}{4}$$

**Answer:** $x = \frac{3 + \sqrt{33}}{4}$ or $x = \frac{3 - \sqrt{33}}{4}$

---

## 3.4 Equations with Variables in Denominators

### Worked Example 3.5
**Solve:** $\frac{2}{x-1} - \frac{3}{x+2} = 1$

**Solution:**
1. LCD: $(x-1)(x+2)$
2. Multiply all terms:
   $$\frac{2(x+2) - 3(x-1)}{(x-1)(x+2)} = 1$$
   
   Or equivalently:
   $$2(x+2) - 3(x-1) = (x-1)(x+2)$$
3. Expand:
   $$2x + 4 - 3x + 3 = x^2 + 2x - x - 2$$
   $$-x + 7 = x^2 + x - 2$$
4. Rearrange:
   $$0 = x^2 + 2x - 9$$
5. Quadratic formula:
   $$x = \frac{-2 \pm \sqrt{4 + 36}}{2} = \frac{-2 \pm \sqrt{40}}{2} = \frac{-2 \pm 2\sqrt{10}}{2}$$
   $$x = -1 \pm \sqrt{10}$$

**Answer:** $x = -1 + \sqrt{10}$ or $x = -1 - \sqrt{10}$

> ** Important:** Always check that your solutions don't make any denominator equal to zero. If $x = 1$ or $x = -2$, the original equation would be undefined.

---

## 3.5 Equations Leading to Quadratics

### Worked Example 3.6
**Solve:** $\frac{5}{x+2} + \frac{3}{x-1} = 2$

**Solution:**
1. LCD: $(x+2)(x-1)$
2. Multiply:
   $$5(x-1) + 3(x+2) = 2(x+2)(x-1)$$
3. Expand:
   $$5x - 5 + 3x + 6 = 2(x^2 + x - 2)$$
   $$8x + 1 = 2x^2 + 2x - 4$$
4. Rearrange:
   $$0 = 2x^2 - 6x - 5$$
5. Quadratic formula:
   $$x = \frac{6 \pm \sqrt{36 + 40}}{4} = \frac{6 \pm \sqrt{76}}{4} = \frac{6 \pm 2\sqrt{19}}{4}$$
   $$x = \frac{3 \pm \sqrt{19}}{2}$$

**Answer:** $x = \frac{3 + \sqrt{19}}{2}$ or $x = \frac{3 - \sqrt{19}}{2}$

---

## 3.6 Cross-Multiplication Method

### When to Use
When the equation is of the form: $\frac{A}{B} = \frac{C}{D}$

### Method
$$AD = BC$$

### Worked Example 3.7
**Solve:** $\frac{x+1}{x-2} = \frac{3}{x+1}$

**Solution:**
1. Cross multiply:
   $$(x+1)(x+1) = 3(x-2)$$
2. Expand:
   $$x^2 + 2x + 1 = 3x - 6$$
3. Rearrange:
   $$x^2 - x + 7 = 0$$
4. Check discriminant: $b^2 - 4ac = 1 - 28 = -27 < 0$

**Answer:** No real solutions

---

# 4. Simultaneous Equations

## 4.1 What Are Simultaneous Equations?

**Definition:** Two or more equations that must be satisfied by the same values of the variables.

**Types:**
- Linear equations (both equations have variables to power 1)
- One linear and one quadratic

---

## 4.2 Solving Linear Simultaneous Equations

### Method 1: Elimination (Subtraction/Addition)

**When to use:** When coefficients of one variable can be made equal.

### Worked Example 4.1
**Solve:**
$$\begin{cases} 3x + 2y = 18 \\ 3x - y = 9 \end{cases}$$

**Solution:**
1. Subtract equation 2 from equation 1:
   $$(3x + 2y) - (3x - y) = 18 - 9$$
   $$3y = 9$$
   $$y = 3$$
2. Substitute back:
   $$3x - 3 = 9$$
   $$3x = 12$$
   $$x = 4$$

**Answer:** $x = 4, y = 3$

**Verification:** $3(4) + 2(3) = 12 + 6 = 18$ ✓

### Worked Example 4.2
**Solve:**
$$\begin{cases} 2x + 3y = 13 \\ 5x + 2y = 16 \end{cases}$$

**Solution:**
1. Make coefficients of $y$ equal (multiply first by 2, second by 3):
   $$\begin{cases} 4x + 6y = 26 \\ 15x + 6y = 48 \end{cases}$$
2. Subtract:
   $$-11x = -22$$
   $$x = 2$$
3. Substitute:
   $$2(2) + 3y = 13$$
   $$4 + 3y = 13$$
   $$3y = 9$$
   $$y = 3$$

**Answer:** $x = 2, y = 3$

> ** Exam Tip:** Always check which variable has easier coefficients to match. Choose the one requiring smaller multipliers.

### Method 2: Substitution

**When to use:** When one equation has a variable with coefficient 1.

### Worked Example 4.3
**Solve:**
$$\begin{cases} x + y = 10 \\ 3x + 2y = 26 \end{cases}$$

**Solution:**
1. Rearrange equation 1: $x = 10 - y$
2. Substitute into equation 2:
   $$3(10 - y) + 2y = 26$$
3. Expand and solve:
   $$30 - 3y + 2y = 26$$
   $$-y = -4$$
   $$y = 4$$
4. Find $x$:
   $$x = 10 - 4 = 6$$

**Answer:** $x = 6, y = 4$

### Worked Example 4.4 (Fractions)
**Solve:**
$$\begin{cases} \frac{x}{2} + \frac{y}{3} = 3 \\ \frac{x}{4} - \frac{y}{2} = -1 \end{cases}$$

**Solution:**
1. Eliminate fractions (multiply equation 1 by 6, equation 2 by 4):
   $$\begin{cases} 3x + 2y = 18 \\ x - 2y = -4 \end{cases}$$
2. Add equations:
   $$4x = 14$$
   $$x = \frac{14}{4} = \frac{7}{2}$$
3. Substitute:
   $$\frac{7}{2} - 2y = -4$$
   $$-2y = -4 - \frac{7}{2} = -\frac{15}{2}$$
   $$y = \frac{15}{4}$$

**Answer:** $x = \frac{7}{2}, y = \frac{15}{4}$

---

## 4.3 Solving Simultaneous Equations Graphically

### Method
1. Rearrange both equations to the form $y = mx + c$
2. Plot both lines
3. Find the point of intersection

### Worked Example 4.5
**Solve graphically:**
$$\begin{cases} y = 2x + 1 \\ y = -x + 7 \end{cases}$$

**Solution:**
1. At intersection, both equations give the same $y$:
   $$2x + 1 = -x + 7$$
   $$3x = 6$$
   $$x = 2$$
2. Find $y$:
   $$y = 2(2) + 1 = 5$$

**Answer:** Point of intersection is $(2, 5)$

---

## 4.4 Simultaneous Equations: Linear and Quadratic

### Standard Form
$$\begin{cases} y = ax^2 + bx + c \text{ (quadratic)} \\ y = mx + k \text{ (linear)} \end{cases}$$

### Method: Substitution
1. Substitute the linear equation into the quadratic
2. Solve the resulting quadratic equation
3. Find corresponding $y$ values

### Worked Example 4.6
**Solve:**
$$\begin{cases} y = x^2 - 2x + 4 \\ y = 2x + 1 \end{cases}$$

**Solution:**
1. Substitute: $2x + 1 = x^2 - 2x + 4$
2. Rearrange:
   $$x^2 - 4x + 3 = 0$$
3. Factorise:
   $$(x - 1)(x - 3) = 0$$
   $$x = 1 \text{ or } x = 3$$
4. Find $y$ values:
   - When $x = 1$: $y = 2(1) + 1 = 3$
   - When $x = 3$: $y = 2(3) + 1 = 7$

**Answer:** $(1, 3)$ and $(3, 7)$

### Worked Example 4.7
**Solve:**
$$\begin{cases} x^2 + y^2 = 25 \\ y = x + 1 \end{cases}$$

**Solution:**
1. Substitute $y = x + 1$ into the first equation:
   $$x^2 + (x+1)^2 = 25$$
2. Expand:
   $$x^2 + x^2 + 2x + 1 = 25$$
   $$2x^2 + 2x - 24 = 0$$
   $$x^2 + x - 12 = 0$$
3. Factorise:
   $$(x + 4)(x - 3) = 0$$
   $$x = -4 \text{ or } x = 3$$
4. Find $y$:
   - $x = -4$: $y = -4 + 1 = -3$
   - $x = 3$: $y = 3 + 1 = 4$

**Answer:** $(-4, -3)$ and $(3, 4)$

> **Key Insight:** A line can intersect a circle at 0, 1, or 2 points. A line can intersect a parabola at 0, 1, or 2 points.

### Worked Example 4.8 (No Real Solutions)
**Solve:**
$$\begin{cases} y = x^2 + 4 \\ y = x - 2 \end{cases}$$

**Solution:**
1. Substitute:
   $$x - 2 = x^2 + 4$$
2. Rearrange:
   $$x^2 - x + 6 = 0$$
3. Check discriminant: $b^2 - 4ac = 1 - 24 = -23 < 0$

**Answer:** No real solutions (the line doesn't meet the parabola)

---

## 4.5 Word Problems Involving Simultaneous Equations

### Worked Example 4.9
**Problem:** The sum of two numbers is 25. The difference between their squares is 225. Find the two numbers.

**Solution:**
1. Set up equations (let the numbers be $x$ and $y$):
   $$\begin{cases} x + y = 25 \\ x^2 - y^2 = 225 \end{cases}$$
2. Factorise equation 2: $(x+y)(x-y) = 225$
3. Since $x + y = 25$:
   $$25(x - y) = 225$$
   $$x - y = 9$$
4. Now solve:
   $$\begin{cases} x + y = 25 \\ x - y = 9 \end{cases}$$
5. Add: $2x = 34$, so $x = 17$
6. $y = 25 - 17 = 8$

**Answer:** The numbers are 17 and 8.

### Worked Example 4.10
**Problem:** A rectangle has perimeter 28 cm and area 48 cm². Find its dimensions.

**Solution:**
1. Let length = $x$, width = $y$
2. Set up equations:
   $$\begin{cases} 2x + 2y = 28 \Rightarrow x + y = 14 \\ xy = 48 \end{cases}$$
3. From equation 1: $y = 14 - x$
4. Substitute into equation 2:
   $$x(14 - x) = 48$$
   $$14x - x^2 = 48$$
   $$x^2 - 14x + 48 = 0$$
5. Factorise:
   $$(x - 6)(x - 8) = 0$$
   $$x = 6 \text{ or } x = 8$$
6. Find $y$: $y = 8$ or $y = 6$

**Answer:** The dimensions are 8 cm × 6 cm.

---

# 5. Exam Focus & Strategy

## 5.1 Frequently Tested Question Types

### Factorising
| Question Type | Frequency | Marks |
|--------------|-----------|-------|
| Factorising with common factor | Very High | 1-2 |
| Factorising quadratics ($a = 1$) | Very High | 2 |
| Factorising quadratics ($a \neq 1$) | High | 2-3 |
| Difference of two squares | High | 2 |
| Complete factorising | High | 2-3 |

### Algebraic Fractions
| Question Type | Frequency | Marks |
|--------------|-----------|-------|
| Simplifying fractions | High | 2-3 |
| Multiplying/dividing fractions | Medium | 3-4 |
| Adding/subtracting fractions | High | 3-4 |
| Complex simplification | Medium | 4-5 |

### Fractional Equations
| Question Type | Frequency | Marks |
|--------------|-----------|-------|
| Simple fractional equations | High | 3-4 |
| Equations leading to quadratics | Medium | 4-5 |
| Word problems | Medium | 5-6 |

### Simultaneous Equations
| Question Type | Frequency | Marks |
|--------------|-----------|-------|
| Linear (elimination) | Very High | 3-4 |
| Linear (substitution) | Very High | 3-4 |
| Linear + Quadratic | High | 4-6 |
| Word problems | High | 5-6 |

---

## 5.2 Typical Problem-Solving Patterns

### Pattern 1: "Show That" Questions
These require careful, logical steps with clear working.

**Example:** "Show that $(2x + 1)^2 - (x - 2)^2$ simplifies to $3x^2 + 8x - 3$

**Strategy:**
- Expand both brackets first
- Combine like terms
- Show ALL intermediate steps
- Circle or underline your final answer

### Pattern 2: "Hence" Questions
Use your previous answer to solve the next part.

**Example:**
- Part (a): Factorise $x^2 - 9$
- Part (b): Hence solve $x^2 - 9 = 0$

**Strategy:**
- Always use the factorised form from part (a)
- Don't re-do work

### Pattern 3: Connected Rates/Ratio Problems
Often lead to simultaneous equations.

**Strategy:**
- Define variables clearly
- Write equations systematically
- Check answers make sense in context

---

## 5.3 Command Word Guidance

| Command Word | What to Do |
|-------------|------------|
| **Simplify** | Reduce to simplest form |
| **Factorise** | Express as product of factors |
| **Factorise completely** | Factorise until no more factors can be extracted |
| **Solve** | Find all values of the variable |
| **Expand** | Remove brackets |
| **Hence** | Use previous result |
| **Show that** | Provide clear working to prove the statement |
| **Find** | Calculate or determine |
| **Determine** | Find with justification |

---

## 5.4 How to Gain Full Marks

### General Tips

1. **Show ALL working**
   - Even if you can do it mentally, write it down
   - Method marks are awarded for correct approach

2. **Check your answers**
   - Substitute back into original equations
   - Verify factorising by expanding

3. **Use proper notation**
   - Write $x = 4$ not just $4$
   - Use equals signs consistently

4. **Present clearly**
   - Write each step on a new line
   - Align equals signs vertically

### For Factorising Questions

✅ **DO:**
- Check for common factors FIRST
- Look for difference of two squares
- Verify by expanding your answer

❌ **DON'T:**
- Stop before factorising completely
- Mix up signs between brackets

### For Fraction Questions

✅ **DO:**
- Factorise numerators and denominators before cancelling
- Show the factorised form
- Write the common denominator when adding/subtracting

❌ **DON'T:**
- Cancel terms (only cancel factors)
- Forget to multiply ALL terms by the common denominator

### For Simultaneous Equations

✅ **DO:**
- Label equations as (1) and (2)
- Show which equation you're substituting into
- Check both solutions in both equations
- Give answer as a coordinate pair for graph questions

❌ **DON'T:**
- Mix up $x$ and $y$ values
- Forget that quadratic equations may have two solutions

---

## 5.5 Common Mistakes to Avoid

| Topic | Common Mistake | Correct Approach |
|-------|---------------|------------------|
| Factorising | Stopping at $3(x^2 - 9)$ | Continue: $3(x+3)(x-3)$ |
| Fractions | Cancelling terms: $\frac{x+2}{x} = 2$ | Only cancel factors |
| Adding fractions | Forgetting to multiply all terms by LCD | Multiply ALL terms |
| Subtracting fractions | $-(x-1) = -x - 1$ | $-(x-1) = -x + 1$ |
| Simultaneous | Only finding one variable | Find ALL variables |
| Quadratic | Forgetting ± in solutions | Both solutions needed |
| Substitution | Substituting wrong equation | Check carefully |

---

## 5.6 Time Management Tips

| Question Type | Suggested Time |
|--------------|----------------|
| Simple factorising (1-2 marks) | 1-2 minutes |
| Quadratic factorising (2-3 marks) | 2-3 minutes |
| Simplifying fractions (2-3 marks) | 2-3 minutes |
| Adding/subtracting fractions (3-4 marks) | 3-4 minutes |
| Fractional equations (4-5 marks) | 4-5 minutes |
| Linear simultaneous (3-4 marks) | 3-4 minutes |
| Quadratic simultaneous (5-6 marks) | 5-6 minutes |

---

## 5.7 Last-Minute Revision Checklist

- [ ] Can factorise by taking out common factors
- [ ] Can factorise quadratics when $a = 1$
- [ ] Can factorise quadratics when $a \neq 1$
- [ ] Recognise and apply difference of two squares
- [ ] Can factorise by grouping
- [ ] Can simplify algebraic fractions
- [ ] Can multiply and divide algebraic fractions
- [ ] Can add and subtract algebraic fractions
- [ ] Can solve equations with algebraic fractions
- [ ] Can solve linear simultaneous equations by elimination
- [ ] Can solve linear simultaneous equations by substitution
- [ ] Can solve quadratic simultaneous equations
- [ ] Can apply simultaneous equations to word problems

---

*© Pearson Edexcel IGCSE Mathematics - Algebra 3 Study Package*
