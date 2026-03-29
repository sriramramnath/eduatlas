# Chapter 20: Algebra 10 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics – Complete Study Notes

---

##  UNIT OVERVIEW

This unit covers the manipulation and solving of algebraic fractions, essential skills for achieving A/A* grades:

| Topic | Key Skills | Exam Weight |
|-------|-----------|-------------|
| Simplifying Algebraic Fractions | Factorisation, cancelling common factors | ~6-8% |
| Operations with Algebraic Fractions | Addition, subtraction, multiplication, division | ~7-9% |
| Solving Equations with Fractions | Clearing denominators, solving linear & quadratic | ~5-7% |

---

# PART 1: SIMPLIFYING ALGEBRAIC FRACTIONS

## 1.1 Introduction to Algebraic Fractions

### What Are Algebraic Fractions?

An **algebraic fraction** is a fraction where the numerator and/or denominator contains algebraic expressions (variables).

**Examples:**
- $\frac{x}{2}$ — simple algebraic fraction
- $\frac{x+3}{x-1}$ — proper algebraic fraction
- $\frac{x^2-9}{x+3}$ — can be simplified
- $\frac{2x^2+5x-3}{x^2-1}$ — complex algebraic fraction

> **Key Principle:** An algebraic fraction is only defined when the denominator is **not zero**. Always state restrictions on variables.

---

## 1.2 Simplifying by Cancelling Common Factors

### The Golden Rule

> ** CRITICAL:** You can ONLY cancel **factors**, not terms. You must **factorise first** before cancelling.

### Method for Simplifying

1. **Factorise** both numerator and denominator completely
2. **Identify** common factors
3. **Cancel** common factors (divide numerator and denominator by the same factor)
4. **State** any restrictions on the variable

---

### Worked Example 1: Simple Simplification

**Simplify:** $\frac{6x^2}{9x}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $\frac{6x^2}{9x} = \frac{6 \cdot x \cdot x}{9 \cdot x}$ | Express as factors |
| 2 | $= \frac{6 \cdot \cancel{x} \cdot x}{9 \cdot \cancel{x}}$ | Cancel common factor $x$ |
| 3 | $= \frac{6x}{9} = \frac{2x}{3}$ | Simplify numeric coefficient |

**Answer:** $\frac{2x}{3}$ (valid for $x \neq 0$)

---

### Worked Example 2: Factorising Quadratics

**Simplify:** $\frac{x^2-9}{x^2+4x+3}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Factorise numerator: $x^2-9 = (x+3)(x-3)$ | Difference of two squares |
| 2 | Factorise denominator: $x^2+4x+3 = (x+1)(x+3)$ | Find factors of 3 that sum to 4 |
| 3 | $\frac{(x+3)(x-3)}{(x+1)(x+3)}$ | Write as factorised form |
| 4 | $= \frac{\cancel{(x+3)}(x-3)}{(x+1)\cancel{(x+3)}}$ | Cancel common factor $(x+3)$ |
| 5 | $= \frac{x-3}{x+1}$ | Final simplified form |

**Answer:** $\frac{x-3}{x+1}$ (valid for $x \neq -1$ and $x \neq -3$)

> ** Exam Tip:** Always check both factorisation AND cancellation. Common exam trap: cancelling terms that aren't factors!

---

### Worked Example 3: Harder Quadratic Factorisation

**Simplify:** $\frac{2x^2+5x-3}{x^2-9}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Numerator: $2x^2+5x-3 = (2x-1)(x+3)$ | Split middle term or use AC method |
| 2 | Denominator: $x^2-9 = (x+3)(x-3)$ | Difference of two squares |
| 3 | $\frac{(2x-1)(x+3)}{(x+3)(x-3)}$ | Write factorised |
| 4 | $= \frac{(2x-1)\cancel{(x+3)}}{\cancel{(x+3)}(x-3)}$ | Cancel $(x+3)$ |
| 5 | $= \frac{2x-1}{x-3}$ | Final answer |

**Answer:** $\frac{2x-1}{x-3}$ (valid for $x \neq 3$ and $x \neq -3$)

---

### Worked Example 4: Non-Quadratic Expressions

**Simplify:** $\frac{x^3-x}{x^2+3x+2}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Numerator: $x^3-x = x(x^2-1) = x(x+1)(x-1)$ | Factorise completely |
| 2 | Denominator: $x^2+3x+2 = (x+1)(x+2)$ | Factorise quadratic |
| 3 | $\frac{x(x+1)(x-1)}{(x+1)(x+2)}$ | Write factorised |
| 4 | $= \frac{x\cancel{(x+1)}(x-1)}{\cancel{(x+1)}(x+2)}$ | Cancel $(x+1)$ |
| 5 | $= \frac{x(x-1)}{x+2} = \frac{x^2-x}{x+2}$ | Final answer |

**Answer:** $\frac{x(x-1)}{x+2}$ or $\frac{x^2-x}{x+2}$ (valid for $x \neq -1$ and $x \neq -2$)

---

## 1.3 Common Factorisation Techniques Used

### Summary Table

| Type | Pattern | Factorisation |
|------|---------|---------------|
| **Difference of Two Squares** | $a^2 - b^2$ | $(a+b)(a-b)$ |
| **Perfect Square Trinomial (+)** | $a^2 + 2ab + b^2$ | $(a+b)^2$ |
| **Perfect Square Trinomial (−)** | $a^2 - 2ab + b^2$ | $(a-b)^2$ |
| **Simple Quadratic** | $x^2 + bx + c$ | $(x+p)(x+q)$ where $pq=c$ and $p+q=b$ |
| **General Quadratic** | $ax^2 + bx + c$ | Split middle term or use formula |
| **Common Factor** | $ax + ay$ | $a(x+y)$ |
| **Sum/Difference of Cubes** | $a^3 \pm b^3$ | $(a \pm b)(a^2 \mp ab + b^2)$ |

> **Key Exam Insight:** Examiners often set questions where one expression factorises as a difference of squares. Learn to recognise $x^2-16$, $4x^2-9$, $x^2-1$ etc.

---

# PART 2: OPERATIONS WITH ALGEBRAIC FRACTIONS

## 2.1 Multiplication of Algebraic Fractions

### Rule

$$\frac{A}{B} \times \frac{C}{D} = \frac{A \times C}{B \times D}$$

**Key Strategy:** Factorise everything first, then cancel common factors across numerators and denominators, then multiply what remains.

---

### Worked Example 5: Simple Multiplication

**Simplify:** $\frac{x+2}{3} \times \frac{6}{x^2-4}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $= \frac{x+2}{3} \times \frac{6}{(x+2)(x-2)}$ | Factorise denominator |
| 2 | $= \frac{(x+2) \times 6}{3 \times (x+2)(x-2)}$ | Write as single fraction |
| 3 | $= \frac{\cancel{(x+2)} \times 6}{3 \times \cancel{(x+2)} \times (x-2)}$ | Cancel $(x+2)$ |
| 4 | $= \frac{6}{3(x-2)} = \frac{2}{x-2}$ | Simplify |

**Answer:** $\frac{2}{x-2}$ (valid for $x \neq 2$ and $x \neq -2$)

---

### Worked Example 6: Complex Multiplication

**Simplify:** $\frac{x^2-1}{x^2+2x+1} \times \frac{x+3}{x-1}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Factorise all expressions: | |
| | $x^2-1 = (x+1)(x-1)$ | Difference of squares |
| | $x^2+2x+1 = (x+1)^2$ | Perfect square |
| 2 | $= \frac{(x+1)(x-1)}{(x+1)^2} \times \frac{x+3}{x-1}$ | Write factorised |
| 3 | $= \frac{\cancel{(x+1)}\cancel{(x-1)}}{(x+1)\cancel{(x+1)}} \times \frac{x+3}{\cancel{(x-1)}}$ | Cancel common factors |
| 4 | $= \frac{1}{x+1} \times \frac{x+3}{1}$ | Simplified |
| 5 | $= \frac{x+3}{x+1}$ | Final answer |

**Answer:** $\frac{x+3}{x+1}$ (valid for $x \neq -1$ and $x \neq 1$)

---

## 2.2 Division of Algebraic Fractions

### Rule

$$\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \times \frac{D}{C} = \frac{A \times D}{B \times C}$$

> **Key Insight:** To divide by a fraction, **multiply by its reciprocal** (flip the second fraction).

---

### Worked Example 7: Division

**Simplify:** $\frac{x^2-4}{x+3} \div \frac{x-2}{x^2-9}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $= \frac{x^2-4}{x+3} \times \frac{x^2-9}{x-2}$ | Multiply by reciprocal |
| 2 | Factorise: $x^2-4 = (x+2)(x-2)$ | Difference of squares |
| 3 | Factorise: $x^2-9 = (x+3)(x-3)$ | Difference of squares |
| 4 | $= \frac{(x+2)(x-2)}{x+3} \times \frac{(x+3)(x-3)}{x-2}$ | Write factorised |
| 5 | $= \frac{(x+2)\cancel{(x-2)}}{\cancel{(x+3)}} \times \frac{\cancel{(x+3)}(x-3)}{\cancel{(x-2)}}$ | Cancel |
| 6 | $= (x+2)(x-3) = x^2-x-6$ | Expand |

**Answer:** $x^2 - x - 6$ (valid for $x \neq -3$, $x \neq 2$, $x \neq 3$, $x \neq -2$)

---

## 2.3 Addition and Subtraction of Algebraic Fractions

### The Key Challenge

Unlike multiplication/division, addition and subtraction require a **common denominator**.

### Rule

$$\frac{A}{C} + \frac{B}{C} = \frac{A+B}{C}$$

$$\frac{A}{B} + \frac{C}{D} = \frac{AD + BC}{BD}$$

---

### Method for Adding/Subtracting

1. **Factorise** all denominators
2. **Find the LCD** (Lowest Common Denominator)
3. **Rewrite** each fraction with the LCD
4. **Add/subtract** numerators
5. **Simplify** the result if possible

---

### Worked Example 8: Simple Addition

**Simplify:** $\frac{2}{x+1} + \frac{3}{x-2}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = $(x+1)(x-2)$ | Different linear factors |
| 2 | $= \frac{2(x-2)}{(x+1)(x-2)} + \frac{3(x+1)}{(x+1)(x-2)}$ | Rewrite with LCD |
| 3 | $= \frac{2(x-2) + 3(x+1)}{(x+1)(x-2)}$ | Combine over common denominator |
| 4 | $= \frac{2x-4 + 3x+3}{(x+1)(x-2)}$ | Expand numerator |
| 5 | $= \frac{5x-1}{(x+1)(x-2)}$ | Collect like terms |

**Answer:** $\frac{5x-1}{(x+1)(x-2)}$ (valid for $x \neq -1$ and $x \neq 2$)

---

### Worked Example 9: Addition with Quadratic Denominators

**Simplify:** $\frac{1}{x+2} + \frac{2}{x^2-4}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x^2-4 = (x+2)(x-2)$ | Factorise denominator |
| 2 | LCD = $(x+2)(x-2)$ | Include all factors |
| 3 | $= \frac{1(x-2)}{(x+2)(x-2)} + \frac{2}{(x+2)(x-2)}$ | Rewrite with LCD |
| 4 | $= \frac{x-2+2}{(x+2)(x-2)}$ | Combine numerators |
| 5 | $= \frac{x}{(x+2)(x-2)}$ | Simplify numerator |

**Answer:** $\frac{x}{(x+2)(x-2)}$ or $\frac{x}{x^2-4}$ (valid for $x \neq 2$ and $x \neq -2$)

---

### Worked Example 10: Subtraction with Common Factor

**Simplify:** $\frac{3}{x-1} - \frac{2x}{x^2-1}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x^2-1 = (x+1)(x-1)$ | Factorise |
| 2 | LCD = $(x+1)(x-1)$ | Find LCD |
| 3 | $= \frac{3(x+1)}{(x+1)(x-1)} - \frac{2x}{(x+1)(x-1)}$ | Rewrite with LCD |
| 4 | $= \frac{3(x+1) - 2x}{(x+1)(x-1)}$ | Combine |
| 5 | $= \frac{3x+3-2x}{(x+1)(x-1)}$ | Expand |
| 6 | $= \frac{x+3}{(x+1)(x-1)}$ | Simplify |

**Answer:** $\frac{x+3}{(x+1)(x-1)}$ (valid for $x \neq 1$ and $x \neq -1$)

---

### Worked Example 11: Three Fractions

**Simplify:** $\frac{1}{x} + \frac{2}{x-1} - \frac{3}{x+1}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = $x(x-1)(x+1)$ | Find LCD of three denominators |
| 2 | $= \frac{1(x-1)(x+1)}{x(x-1)(x+1)} + \frac{2x(x+1)}{x(x-1)(x+1)} - \frac{3x(x-1)}{x(x-1)(x+1)}$ | Rewrite each |
| 3 | Numerator: $(x-1)(x+1) + 2x(x+1) - 3x(x-1)$ | Focus on numerator |
| 4 | $= x^2-1 + 2x^2+2x - 3x^2+3x$ | Expand each term |
| 5 | $= x^2 + 2x^2 - 3x^2 + 2x + 3x - 1$ | Collect like terms |
| 6 | $= 5x - 1$ | Simplify |
| 7 | $= \frac{5x-1}{x(x-1)(x+1)}$ | Final answer |

**Answer:** $\frac{5x-1}{x(x-1)(x+1)}$ (valid for $x \neq 0$, $x \neq 1$, $x \neq -1$)

---

## 2.4 Mixed Operations

### Worked Example 12: Combining Operations

**Simplify:** $\frac{x+1}{x-2} \div \frac{x^2-1}{x^2-4} - \frac{1}{x-2}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $= \frac{x+1}{x-2} \times \frac{x^2-4}{x^2-1} - \frac{1}{x-2}$ | Division to multiplication |
| 2 | Factorise: $x^2-4 = (x+2)(x-2)$, $x^2-1 = (x+1)(x-1)$ | |
| 3 | $= \frac{(x+1)}{(x-2)} \times \frac{(x+2)(x-2)}{(x+1)(x-1)} - \frac{1}{x-2}$ | Write factorised |
| 4 | $= \frac{\cancel{(x+1)}}{\cancel{(x-2)}} \times \frac{(x+2)\cancel{(x-2)}}{\cancel{(x+1)}(x-1)} - \frac{1}{x-2}$ | Cancel |
| 5 | $= \frac{x+2}{x-1} - \frac{1}{x-2}$ | First term simplified |
| 6 | LCD = $(x-1)(x-2)$ | Find LCD for subtraction |
| 7 | $= \frac{(x+2)(x-2)}{(x-1)(x-2)} - \frac{x-1}{(x-1)(x-2)}$ | Rewrite with LCD |
| 8 | $= \frac{x^2-4-x+1}{(x-1)(x-2)}$ | Combine numerators |
| 9 | $= \frac{x^2-x-3}{(x-1)(x-2)}$ | Simplify |

**Answer:** $\frac{x^2-x-3}{(x-1)(x-2)}$

---

# PART 3: SOLVING EQUATIONS WITH FRACTIONS

## 3.1 Linear Equations with Fractions

### The Clear Denominator Method

**Key Strategy:** Multiply **every term** by the LCD to eliminate all fractions.

---

### Worked Example 13: Simple Linear Equation

**Solve:** $\frac{x}{3} + \frac{x}{4} = 7$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = 12 | Find LCD of 3 and 4 |
| 2 | $12 \times \frac{x}{3} + 12 \times \frac{x}{4} = 12 \times 7$ | Multiply all terms by LCD |
| 3 | $4x + 3x = 84$ | Simplify each term |
| 4 | $7x = 84$ | Collect like terms |
| 5 | $x = 12$ | Solve |

**Answer:** $x = 12$

---

### Worked Example 14: Linear Equation with Variables in Denominator

**Solve:** $\frac{2}{x} + \frac{3}{x+1} = 1$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = $x(x+1)$ | Find LCD |
| 2 | $x(x+1) \times \frac{2}{x} + x(x+1) \times \frac{3}{x+1} = x(x+1) \times 1$ | Multiply all terms |
| 3 | $2(x+1) + 3x = x(x+1)$ | Simplify |
| 4 | $2x + 2 + 3x = x^2 + x$ | Expand |
| 5 | $5x + 2 = x^2 + x$ | Collect LHS |
| 6 | $x^2 - 4x - 2 = 0$ | Rearrange to standard form |
| 7 | $x = \frac{4 \pm \sqrt{16+8}}{2}$ | Quadratic formula |
| 8 | $x = \frac{4 \pm \sqrt{24}}{2} = \frac{4 \pm 2\sqrt{6}}{2} = 2 \pm \sqrt{6}$ | Simplify |

**Answer:** $x = 2 + \sqrt{6}$ or $x = 2 - \sqrt{6}$

**Check:** Neither solution makes any denominator zero, so both are valid.

---

### Worked Example 15: Equation with Linear Denominators

**Solve:** $\frac{3}{x-1} - \frac{2}{x+2} = 1$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = $(x-1)(x+2)$ | Find LCD |
| 2 | $(x-1)(x+2) \times \frac{3}{x-1} - (x-1)(x+2) \times \frac{2}{x+2} = (x-1)(x+2) \times 1$ | Multiply all |
| 3 | $3(x+2) - 2(x-1) = (x-1)(x+2)$ | Simplify |
| 4 | $3x + 6 - 2x + 2 = x^2 + x - 2$ | Expand |
| 5 | $x + 8 = x^2 + x - 2$ | Collect LHS |
| 6 | $x^2 - 10 = 0$ | Rearrange |
| 7 | $x^2 = 10$ | Solve |
| 8 | $x = \pm\sqrt{10}$ | Two solutions |

**Answer:** $x = \sqrt{10}$ or $x = -\sqrt{10}$

**Check denominators:** $x-1 \neq 0$ and $x+2 \neq 0$
- $\sqrt{10} - 1 \neq 0$ ✓
- $\sqrt{10} + 2 \neq 0$ ✓
- $-\sqrt{10} - 1 \neq 0$ ✓
- $-\sqrt{10} + 2 \neq 0$ ✓

Both solutions are valid.

---

## 3.2 Quadratic Equations with Fractions

### Worked Example 16: Quadratic from Fraction Equation

**Solve:** $\frac{2}{x-1} + \frac{1}{x+3} = \frac{3}{x^2+2x-3}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Note: $x^2+2x-3 = (x-1)(x+3)$ | Factorise third denominator |
| 2 | LCD = $(x-1)(x+3)$ | Find LCD |
| 3 | $(x-1)(x+3) \times \frac{2}{x-1} + (x-1)(x+3) \times \frac{1}{x+3} = 3$ | Multiply all |
| 4 | $2(x+3) + (x-1) = 3$ | Simplify |
| 5 | $2x + 6 + x - 1 = 3$ | Expand |
| 6 | $3x + 5 = 3$ | Collect terms |
| 7 | $3x = -2$ | |
| 8 | $x = -\frac{2}{3}$ | Solve |

**Answer:** $x = -\frac{2}{3}$

**Check:** $x-1 = -\frac{2}{3}-1 = -\frac{5}{3} \neq 0$ ✓

---

### Worked Example 17: Leading to Quadratic

**Solve:** $\frac{x}{x-2} - \frac{2}{x+1} = 1$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = $(x-2)(x+1)$ | Find LCD |
| 2 | $(x-2)(x+1) \times \frac{x}{x-2} - (x-2)(x+1) \times \frac{2}{x+1} = (x-2)(x+1)$ | Multiply all |
| 3 | $x(x+1) - 2(x-2) = (x-2)(x+1)$ | Simplify |
| 4 | $x^2 + x - 2x + 4 = x^2 - x - 2$ | Expand |
| 5 | $x^2 - x + 4 = x^2 - x - 2$ | Simplify LHS |
| 6 | $4 = -2$ | Subtract $x^2 - x$ from both sides |

**Contradiction!** This means there is **no solution**.

**Answer:** No solution (the equation is inconsistent)

---

### Worked Example 18: Quadratic with Validity Check

**Solve:** $\frac{3x}{x-1} - \frac{2}{x+2} = 2$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD = $(x-1)(x+2)$ | |
| 2 | $3x(x+2) - 2(x-1) = 2(x-1)(x+2)$ | Multiply all by LCD |
| 3 | $3x^2 + 6x - 2x + 2 = 2(x^2 + x - 2)$ | Expand |
| 4 | $3x^2 + 4x + 2 = 2x^2 + 2x - 4$ | |
| 5 | $x^2 + 2x + 6 = 0$ | Rearrange |

**Discriminant:** $b^2 - 4ac = 4 - 24 = -20 < 0$

**Answer:** No real solutions (discriminant is negative)

---

## 3.3 Equations with Algebraic Fractions and Checking Validity

> ** CRITICAL EXAM POINT:** After solving, ALWAYS check that your solution doesn't make any denominator zero. If it does, that solution is **extraneous** (invalid) and must be rejected.

---

### Worked Example 19: Identifying Extraneous Solutions

**Solve:** $\frac{x^2-9}{x-3} = 6$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $\frac{(x-3)(x+3)}{x-3} = 6$ | Factorise numerator |
| 2 | $x+3 = 6$ (provided $x \neq 3$) | Cancel $(x-3)$ with restriction |
| 3 | $x = 3$ | Solve |

**But wait!** $x = 3$ makes the original denominator zero.

**Answer:** No solution. The equation $\frac{x^2-9}{x-3} = 6$ has no valid solutions.

> ** Exam Tip:** This is a classic examiner trap! The algebra gives $x=3$, but this is extraneous.

---

### Worked Example 20: Recognising Disguised Restrictions

**Solve:** $\frac{1}{x-2} + \frac{1}{x+2} = \frac{4}{x^2-4}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x^2-4 = (x-2)(x+2)$, so LCD = $(x-2)(x+2)$ | Find LCD |
| 2 | $(x+2) + (x-2) = 4$ | Multiply all by LCD |
| 3 | $2x = 4$ | Simplify |
| 4 | $x = 2$ | Solve |

**Check:** $x = 2$ makes denominators $(x-2)$ and $(x^2-4)$ equal to zero.

**Answer:** No solution (extraneous root)

---

## 3.4 Word Problems Leading to Fraction Equations

### Worked Example 21: Rate Problem

**A tank can be filled by two pipes. Pipe A can fill it in 6 hours, and pipe B can fill it in 4 hours. How long would it take to fill the tank if both pipes are used together?**

**Solution:**

Let $t$ = time (hours) to fill the tank together.

| Step | Working | Reason |
|------|---------|--------|
| 1 | Pipe A rate: $\frac{1}{6}$ tank per hour | Rate = work/time |
| 2 | Pipe B rate: $\frac{1}{4}$ tank per hour | |
| 3 | Combined rate: $\frac{1}{t}$ tank per hour | |
| 4 | $\frac{1}{6} + \frac{1}{4} = \frac{1}{t}$ | Rates add |
| 5 | $\frac{2}{12} + \frac{3}{12} = \frac{1}{t}$ | Common denominator |
| 6 | $\frac{5}{12} = \frac{1}{t}$ | |
| 7 | $t = \frac{12}{5} = 2.4$ hours | Invert both sides |

**Answer:** $2.4$ hours or $2$ hours $24$ minutes

---

### Worked Example 22: Number Problem

**The sum of a number and its reciprocal is $\frac{13}{6}$. Find the number.**

**Solution:**

Let the number be $x$.

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x + \frac{1}{x} = \frac{13}{6}$ | Set up equation |
| 2 | $x^2 + 1 = \frac{13x}{6}$ | Multiply by $x$ |
| 3 | $6x^2 + 6 = 13x$ | Multiply by 6 |
| 4 | $6x^2 - 13x + 6 = 0$ | Rearrange |
| 5 | $(2x-3)(3x-2) = 0$ | Factorise |
| 6 | $x = \frac{3}{2}$ or $x = \frac{2}{3}$ | Solve |

**Answer:** $x = \frac{3}{2}$ or $x = \frac{2}{3}$

**Check:** $\frac{3}{2} + \frac{2}{3} = \frac{9+4}{6} = \frac{13}{6}$ ✓

---

# PART 4: ADVANCED TECHNIQUES

## 4.1 Complex Fractions

A **complex fraction** is a fraction where the numerator and/or denominator contains another fraction.

### Simplifying Complex Fractions

**Method 1:** Multiply numerator and denominator by the LCD of all fractions within.

**Method 2:** Simplify numerator and denominator separately, then divide.

---

### Worked Example 23: Complex Fraction

**Simplify:** $\frac{\frac{1}{x} + \frac{1}{y}}{\frac{1}{x} - \frac{1}{y}}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | LCD of all fractions = $xy$ | Identify LCD |
| 2 | $= \frac{xy\left(\frac{1}{x} + \frac{1}{y}\right)}{xy\left(\frac{1}{x} - \frac{1}{y}\right)}$ | Multiply by LCD |
| 3 | $= \frac{y + x}{y - x}$ | Simplify |
| 4 | $= \frac{x + y}{y - x}$ or $\frac{x+y}{-(x-y)} = -\frac{x+y}{x-y}$ | Final answer |

**Answer:** $\frac{x+y}{y-x}$ or $-\frac{x+y}{x-y}$

---

### Worked Example 24: Nested Fractions

**Simplify:** $\frac{x + \frac{1}{x-1}}{x - \frac{1}{x+1}}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Numerator: $x + \frac{1}{x-1} = \frac{x(x-1) + 1}{x-1} = \frac{x^2-x+1}{x-1}$ | Combine |
| 2 | Denominator: $x - \frac{1}{x+1} = \frac{x(x+1) - 1}{x+1} = \frac{x^2+x-1}{x+1}$ | Combine |
| 3 | $= \frac{x^2-x+1}{x-1} \div \frac{x^2+x-1}{x+1}$ | Division |
| 4 | $= \frac{x^2-x+1}{x-1} \times \frac{x+1}{x^2+x-1}$ | Multiply by reciprocal |
| 5 | $= \frac{(x^2-x+1)(x+1)}{(x-1)(x^2+x-1)}$ | Final answer |

**Answer:** $\frac{(x^2-x+1)(x+1)}{(x-1)(x^2+x-1)}$

---

## 4.2 Partial Fractions (Introduction)

> **Note:** While full partial fractions are typically A-level content, the IGCSE may include simple cases that require splitting a fraction.

### Worked Example 25: Simple Partial Fraction Type

**Express** $\frac{5x+1}{(x+1)(x-2)}$ **in the form** $\frac{A}{x+1} + \frac{B}{x-2}$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $\frac{5x+1}{(x+1)(x-2)} = \frac{A}{x+1} + \frac{B}{x-2}$ | Set up |
| 2 | $5x+1 = A(x-2) + B(x+1)$ | Multiply both sides by LCD |
| 3 | Let $x = 2$: $10+1 = 3B$, so $B = \frac{11}{3}$ | Substitute values |
| 4 | Let $x = -1$: $-5+1 = -3A$, so $A = \frac{4}{3}$ | |
| 5 | $= \frac{4}{3(x+1)} + \frac{11}{3(x-2)}$ | Final answer |

---

# EXAM FOCUS & STRATEGY SECTION

## 📌 Frequently Tested Question Types

### Simplifying Algebraic Fractions

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Cancel common factors (after factorisation) | 2-3 |  |
| Difference of squares recognition | 2-3 |  |
| Complex factorisation required | 3-4 |  |

### Operations with Algebraic Fractions

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Adding/subtracting (finding LCD) | 3-4 |  |
| Multiplication (with cancellation) | 2-3 |  |
| Division (multiply by reciprocal) | 3-4 |  |
| Mixed operations | 4-5 |  |

### Solving Fraction Equations

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Linear equations (clear denominator) | 3-4 |  |
| Quadratic equations from fractions | 4-5 |  |
| Identifying extraneous solutions | 3-4 |  |
| Word problems leading to fractions | 4-6 |  |

---

##  Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Simplify** | Reduce to simplest form; factorise and cancel where possible |
| **Express** | Write in a different form (usually specified) |
| **Solve** | Find the value(s) of the variable |
| **Show that** | Work towards a given result |
| **Find** | Calculate or determine a value |
| **Prove** | Give a complete logical argument |

---

## 🏆 How to Gain Full Marks

### Checklist for Simplifying Fractions:
- [ ] Factorise numerator completely
- [ ] Factorise denominator completely
- [ ] Identify and cancel ALL common factors
- [ ] Write final answer in simplest form
- [ ] Check for any restrictions on variables

### Checklist for Adding/Subtracting:
- [ ] Factorise all denominators first
- [ ] Identify LCD correctly
- [ ] Multiply each fraction to get LCD
- [ ] Add/subtract numerators carefully (watch signs!)
- [ ] Simplify result if possible
- [ ] Expand if answer needs to be in expanded form

### Checklist for Solving Equations:
- [ ] Find LCD of all denominators
- [ ] Multiply EVERY term by LCD
- [ ] Check solution doesn't make denominator zero
- [ ] Verify by substituting back

---

##  Common Mistakes to Avoid

| Mistake | Example | Correction |
|---------|---------|------------|
| **Cancelling terms, not factors** | $\frac{x+3}{3} = x$ ❌ | Cannot cancel 3 with +3; must factorise first |
| **Forgetting to multiply ALL terms by LCD** | $x + \frac{1}{x} = 2$ → $x^2 + 1 = 2$ ❌ | Should be $x^2 + 1 = 2x$ |
| **Sign errors in subtraction** | $\frac{1}{x-1} - \frac{2}{x+1}$ | Watch brackets: numerator is $(x+1) - 2(x-1)$ |
| **Not checking for extraneous roots** | Solving $\frac{x^2-4}{x-2} = 4$ gives $x=2$ | But $x=2$ makes denominator zero! |
| **Wrong LCD** | LCD of $(x-1)$ and $(x-1)(x+1)$ is $(x-1)(x+1)$, not $(x-1)^2(x+1)$ | Take each factor at its highest power |
| **Forgetting restrictions** | $\frac{x+2}{x-3} = 0$ has answer $x=-2$, but must state $x \neq 3$ | Always state domain restrictions |

---

##  Key Exam Insights

> **Factorisation is Key:**
> - Master recognising difference of squares: $x^2-1$, $x^2-4$, $x^2-9$, $4x^2-1$, etc.
> - Practice factorising all types of quadratics quickly
> - Always check if further factorisation is possible

> **The LCD Method:**
> - For addition/subtraction: LCD is the LCM of all denominators
> - For equations: multiply EVERY term by LCD
> - Check validity of solutions

> **Examiner's Favourite Traps:**
> - Extraneous solutions (solutions that make denominator zero)
> - Cancelling terms instead of factors
> - Sign errors when subtracting fractions
> - Forgetting to state restrictions

---

## 📐 Essential Formulas and Identities

### Factorisation Identities:

$$a^2 - b^2 = (a-b)(a+b)$$

$$(a+b)^2 = a^2 + 2ab + b^2$$

$$(a-b)^2 = a^2 - 2ab + b^2$$

$$x^2 + (p+q)x + pq = (x+p)(x+q)$$

### Operations Rules:

$$\frac{A}{B} \times \frac{C}{D} = \frac{AC}{BD}$$

$$\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \times \frac{D}{C} = \frac{AD}{BC}$$

$$\frac{A}{C} + \frac{B}{C} = \frac{A+B}{C}$$

$$\frac{A}{B} + \frac{C}{D} = \frac{AD+BC}{BD}$$

---

## 🎯 Last-Minute Revision Checklist

### Before Exam:
- [ ] Can factorise all types of quadratics quickly
- [ ] Can identify difference of squares
- [ ] Can find LCD for any combination of denominators
- [ ] Can add, subtract, multiply, divide algebraic fractions
- [ ] Can solve equations by clearing denominators
- [ ] Remember to check for extraneous solutions
- [ ] Know to state restrictions on variables

### During Exam:
- [ ] Read command words carefully
- [ ] Factorise BEFORE cancelling
- [ ] Check signs carefully in subtraction
- [ ] Verify solutions don't make denominators zero
- [ ] Show all working clearly
- [ ] State final answer in required form

---

*These notes are aligned with the Pearson Edexcel IGCSE Mathematics A (4MA1) specification.*
