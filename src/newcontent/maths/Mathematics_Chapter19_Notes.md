# Chapter 19: Algebra 9 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics – Complete Study Notes

---

##  UNIT OVERVIEW

This unit covers two advanced algebraic topics essential for achieving A/A* grades:

| Topic | Key Skills | Exam Weight |
|-------|-----------|-------------|
| Simultaneous Equations | Linear-linear, Linear-non-linear, Graphical methods | ~8-10% |
| Algebraic Proof | Conjectures, Counter-examples, Logical reasoning | ~5-7% |

---

# PART 1: SIMULTANEOUS EQUATIONS

## 1.1 Introduction to Simultaneous Equations

### What Are Simultaneous Equations?

**Simultaneous equations** are a set of two or more equations with the same variables. The solution is the values that satisfy **all** equations simultaneously.

> **Key Insight:** For two equations in two unknowns, we typically find a **unique solution** (intersection point), but cases of **no solution** (parallel lines) or **infinite solutions** (same line) can occur.

---

## 1.2 Linear Simultaneous Equations

### Types of Linear Systems

$$\text{General form: } \begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$

### Method 1: Substitution Method

**When to use:** When one variable has coefficient 1 or is already isolated.

#### Worked Example 1

**Solve:**
$$\begin{cases} y = 2x + 3 \\ 3x + 2y = 21 \end{cases}$$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $y = 2x + 3$ (already isolated) | Identify equation with isolated variable |
| 2 | Substitute into second equation: $3x + 2(2x + 3) = 21$ | Replace $y$ with expression in terms of $x$ |
| 3 | $3x + 4x + 6 = 21$ | Expand brackets |
| 4 | $7x + 6 = 21$ | Collect like terms |
| 5 | $7x = 15$ | Subtract 6 from both sides |
| 6 | $x = \frac{15}{7}$ | Divide by 7 |
| 7 | $y = 2\left(\frac{15}{7}\right) + 3 = \frac{30}{7} + \frac{21}{7} = \frac{51}{7}$ | Substitute back to find $y$ |

**Answer:** $x = \frac{15}{7}, \quad y = \frac{51}{7}$

> ** Common Mistake:** Forgetting to find the second variable after solving for the first!

---

### Method 2: Elimination Method

**When to use:** When both equations have coefficients that can be easily matched.

#### Worked Example 2

**Solve:**
$$\begin{cases} 3x + 2y = 14 \\ 2x - 3y = -15 \end{cases}$$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Multiply equation 1 by 3: $9x + 6y = 42$ | Make $y$ coefficients opposites |
| 2 | Multiply equation 2 by 2: $4x - 6y = -30$ | |
| 3 | Add equations: $13x = 12$ | Eliminate $y$ |
| 4 | $x = \frac{12}{13}$ | Solve for $x$ |
| 5 | $3\left(\frac{12}{13}\right) + 2y = 14$ | Substitute into original equation |
| 6 | $y = 7 - \frac{18}{13} = \frac{91-18}{13} = \frac{73}{13}$ | Solve for $y$ |

**Answer:** $x = \frac{12}{13}, \quad y = \frac{73}{13}$

---

### Method 3: Graphical Method

**Principle:** The solution is the **point of intersection** of the two lines.

#### Worked Example 3

**Solve graphically:**
$$\begin{cases} y = x + 2 \\ y = -2x + 5 \end{cases}$$

**Solution:**

1. **Draw both lines** on the same axes
2. **Find intersection point**

For $y = x + 2$: passes through $(0, 2)$ and $(-2, 0)$

For $y = -2x + 5$: passes through $(0, 5)$ and $(2.5, 0)$

**From graph:** Lines intersect at $(1, 3)$

**Verification:** 
- $y = 1 + 2 = 3$ ✓
- $y = -2(1) + 5 = 3$ ✓

> **📝 Exam Tip:** Always verify your solution by substituting back into BOTH original equations.

---

## 1.3 Non-Linear Simultaneous Equations

### Types of Non-Linear Systems

| System Type | Example | Solutions |
|-------------|---------|-----------|
| Linear + Quadratic | $y = x + 1$ and $y = x^2$ | Up to 2 |
| Linear + Circle | $y = 2x$ and $x^2 + y^2 = 5$ | Up to 2 |
| Two Quadratics | $y = x^2$ and $y = 2x^2 - 3$ | Up to 4 |

### Linear + Quadratic Systems

#### Worked Example 4

**Solve:**
$$\begin{cases} y = x^2 - 4x + 7 \\ y = 2x + 3 \end{cases}$$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x^2 - 4x + 7 = 2x + 3$ | Set equations equal (both = $y$) |
| 2 | $x^2 - 6x + 4 = 0$ | Rearrange to standard quadratic form |
| 3 | Use quadratic formula: $x = \frac{6 \pm \sqrt{36-16}}{2}$ | Solve quadratic |
| 4 | $x = \frac{6 \pm \sqrt{20}}{2} = \frac{6 \pm 2\sqrt{5}}{2}$ | Simplify surd |
| 5 | $x = 3 \pm \sqrt{5}$ | Final $x$ values |
| 6 | For $x = 3 + \sqrt{5}$: $y = 2(3+\sqrt{5}) + 3 = 9 + 2\sqrt{5}$ | Find corresponding $y$ |
| 7 | For $x = 3 - \sqrt{5}$: $y = 2(3-\sqrt{5}) + 3 = 9 - 2\sqrt{5}$ | |

**Answer:** Solutions are $(3 + \sqrt{5}, 9 + 2\sqrt{5})$ and $(3 - \sqrt{5}, 9 - 2\sqrt{5})$

---

### Linear + Circle Systems

#### Worked Example 5

**Solve:**
$$\begin{cases} x^2 + y^2 = 25 \\ y = x - 1 \end{cases}$$

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x^2 + (x-1)^2 = 25$ | Substitute $y = x - 1$ |
| 2 | $x^2 + x^2 - 2x + 1 = 25$ | Expand |
| 3 | $2x^2 - 2x - 24 = 0$ | Collect terms |
| 4 | $x^2 - x - 12 = 0$ | Divide by 2 |
| 5 | $(x-4)(x+3) = 0$ | Factorise |
| 6 | $x = 4$ or $x = -3$ | Find $x$ values |
| 7 | When $x = 4$: $y = 4 - 1 = 3$ | Find $y$ values |
| 8 | When $x = -3$: $y = -3 - 1 = -4$ | |

**Answer:** $(4, 3)$ and $(-3, -4)$

**Graphical interpretation:** The line intersects the circle at two points.

---

### Number of Solutions Analysis

#### Worked Example 6: Determining Number of Intersections

**Find the number of solutions to:**
$$\begin{cases} x^2 + y^2 = 16 \\ y = 2x + k \end{cases}$$

**For what value of $k$ does the line touch the circle exactly once?**

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | $x^2 + (2x+k)^2 = 16$ | Substitute linear equation |
| 2 | $x^2 + 4x^2 + 4kx + k^2 = 16$ | Expand |
| 3 | $5x^2 + 4kx + (k^2 - 16) = 0$ | Standard form |
| 4 | For one solution: $b^2 - 4ac = 0$ | Discriminant = 0 for tangent |
| 5 | $(4k)^2 - 4(5)(k^2-16) = 0$ | Apply discriminant condition |
| 6 | $16k^2 - 20k^2 + 320 = 0$ | Expand |
| 7 | $-4k^2 + 320 = 0$ | Simplify |
| 8 | $k^2 = 80$, so $k = \pm 4\sqrt{5}$ | |

**Answer:** The line is tangent to the circle when $k = \pm 4\sqrt{5}$

> **Key Formula:** For a quadratic $ax^2 + bx + c = 0$:
> - $b^2 - 4ac > 0$: Two distinct solutions
> - $b^2 - 4ac = 0$: One repeated solution (tangent)
> - $b^2 - 4ac < 0$: No real solutions

---

## 1.4 Special Cases

### No Solution (Inconsistent System)

**Example:**
$$\begin{cases} 2x + 3y = 7 \\ 4x + 6y = 15 \end{cases}$$

**Analysis:**
- Multiply equation 1 by 2: $4x + 6y = 14$
- Compare with equation 2: $4x + 6y = 15$
- **Contradiction:** $14 \neq 15$

**Interpretation:** Lines are **parallel** (same gradient, different $y$-intercept)

---

### Infinite Solutions (Dependent System)

**Example:**
$$\begin{cases} 3x - 2y = 5 \\ 6x - 4y = 10 \end{cases}$$

**Analysis:**
- Equation 2 is exactly 2× equation 1
- Same line represented twice

**Interpretation:** All points on the line are solutions.

---

## 1.5 Applications of Simultaneous Equations

### Problem-Solving Strategy

1. **Define variables** clearly
2. **Form equations** from given conditions
3. **Solve** using appropriate method
4. **Interpret** solution in context
5. **Check** if answer makes sense

#### Worked Example 7: Word Problem

**A rectangle has perimeter 34 cm. If the length is increased by 2 cm and the width is decreased by 1 cm, the area remains unchanged. Find the dimensions.**

**Solution:**

| Step | Working |
|------|---------|
| Let length $= l$ cm and width $= w$ cm | Define variables |
| Perimeter: $2l + 2w = 34$, so $l + w = 17$ | Equation 1 |
| Original area: $A = lw$ | |
| New dimensions: $(l+2)(w-1)$ | |
| Areas equal: $lw = (l+2)(w-1)$ | Equation 2 |
| $lw = lw - l + 2w - 2$ | Expand |
| $l - 2w = -2$, so $l = 2w - 2$ | Simplify |
| Substitute: $(2w-2) + w = 17$ | Use equation 1 |
| $3w = 19$, so $w = 6$ | Solve |
| $l = 2(6) - 2 = 10$ | Find length |

**Answer:** Length = 10 cm, Width = 6 cm

**Verification:**
- Perimeter: $2(10) + 2(6) = 32 \neq 34$ ❌

Let me recalculate:
- $l + w = 17$
- $(l+2)(w-1) = lw$
- $lw - l + 2w - 2 = lw$
- $-l + 2w = 2$
- From $l + w = 17$: $l = 17 - w$
- Substitute: $-(17-w) + 2w = 2$
- $-17 + w + 2w = 2$
- $3w = 19$, so $w = \frac{19}{3}$
- $l = 17 - \frac{19}{3} = \frac{32}{3}$

**Correct Answer:** Length = $\frac{32}{3}$ cm, Width = $\frac{19}{3}$ cm

---

# PART 2: ALGEBRAIC PROOF

## 2.1 Introduction to Proof

### What is Mathematical Proof?

A **mathematical proof** is a logical argument that establishes the truth of a statement beyond any doubt using deductive reasoning.

> **Key Principle:** A single counter-example is sufficient to disprove a statement, but a proof must be complete and general.

---

## 2.2 Types of Mathematical Statements

| Type | Description | Example |
|------|-------------|---------|
| **Universal Statement** | True for all values | "The sum of two even numbers is even" |
| **Conditional Statement** | If... then... | "If $n$ is odd, then $n^2$ is odd" |
| **Existence Statement** | There exists... | "There exists a prime number between 10 and 20" |

---

## 2.3 Proof by Deduction

### Structure of a Deductive Proof

1. **Start** with known facts or given information
2. **Apply** logical steps
3. **Reach** the required conclusion
4. **Include** a concluding statement

### Representing Numbers Algebraically

> **Essential Notation:**

| Type of Number | Algebraic Form |
|----------------|----------------|
| Any integer | $n$ |
| Even number | $2n$ |
| Odd number | $2n + 1$ |
| Multiple of $k$ | $kn$ |
| Consecutive integers | $n$, $n+1$, $n+2$ |
| Consecutive even numbers | $2n$, $2n+2$, $2n+4$ |
| Consecutive odd numbers | $2n+1$, $2n+3$, $2n+5$ |
| Square number | $n^2$ |
| Two-digit number (digits $a$, $b$) | $10a + b$ |

---

### Worked Example 8: Proving Sum of Even Numbers

**Prove that the sum of two even numbers is always even.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let the two even numbers be $2m$ and $2n$ where $m, n \in \mathbb{Z}$ | Definition of even numbers |
| 2 | Sum $= 2m + 2n$ | Add the two numbers |
| 3 | $= 2(m + n)$ | Factorise |
| 4 | Since $m + n$ is an integer, $2(m+n)$ is a multiple of 2 | Closure of integers under addition |
| 5 | Therefore, the sum is even | Definition of even number |

**Q.E.D.** (Quod Erat Demonstrandum - "which was to be proved")

---

### Worked Example 9: Proving Sum of Odd Numbers

**Prove that the sum of two odd numbers is always even.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let the two odd numbers be $2m + 1$ and $2n + 1$ where $m, n \in \mathbb{Z}$ | Definition of odd numbers |
| 2 | Sum $= (2m+1) + (2n+1)$ | Add the two numbers |
| 3 | $= 2m + 2n + 2$ | Collect terms |
| 4 | $= 2(m + n + 1)$ | Factorise |
| 5 | Since $m + n + 1$ is an integer, $2(m+n+1)$ is a multiple of 2 | Closure of integers |
| 6 | Therefore, the sum is even | Definition of even number |

**Q.E.D.**

---

### Worked Example 10: Product of Consecutive Integers

**Prove that the product of two consecutive integers is always even.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let two consecutive integers be $n$ and $n + 1$ | Definition of consecutive integers |
| 2 | Product $= n(n + 1) = n^2 + n$ | Expand |
| 3 | Case 1: If $n$ is even ($n = 2k$) | Consider cases |
| 4 | Then $n(n+1) = 2k(2k+1) = 2[k(2k+1)]$ | Substitute and factorise |
| 5 | This is even | |
| 6 | Case 2: If $n$ is odd ($n = 2k + 1$) | |
| 7 | Then $n + 1 = 2k + 2 = 2(k+1)$ is even | |
| 8 | So $n(n+1)$ contains an even factor | |
| 9 | In both cases, the product is even | Conclusion |

**Alternative elegant proof:**

Since $n$ and $n+1$ are consecutive, one must be even and one must be odd (consecutive integers alternate parity). Therefore, their product contains an even factor and is even.

**Q.E.D.**

---

### Worked Example 11: Proving $n^2 - n$ is Always Even

**Prove that $n^2 - n$ is always even for any integer $n$.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | $n^2 - n = n(n - 1)$ | Factorise |
| 2 | $n$ and $n - 1$ are consecutive integers | Observe structure |
| 3 | Product of consecutive integers is always even | By previous result |
| 4 | Therefore, $n^2 - n$ is always even | Conclusion |

**Q.E.D.**

---

## 2.4 Proof by Counter-Example

### When to Use Counter-Examples

Use a counter-example to **disprove** a universal statement.

> **Key Point:** You only need ONE counter-example to disprove a statement, but you must prove a statement in general.

---

### Worked Example 12: Disproving with Counter-Example

**Disprove the statement: "All prime numbers are odd."**

**Counter-example:**

The number 2 is prime, but 2 is even.

Therefore, the statement is **false**.

---

### Worked Example 13: Disproving Algebraic Statement

**Is the statement "$n^2 + n + 41$ is always prime for all positive integers $n$" true?**

**Testing values:**

| $n$ | $n^2 + n + 41$ | Prime? |
|-----|----------------|--------|
| 1 | 43 | Yes |
| 2 | 47 | Yes |
| 3 | 53 | Yes |
| 4 | 61 | Yes |
| ... | ... | ... |
| 40 | $1600 + 40 + 41 = 1681 = 41^2$ | **No!** |

**Counter-example:** When $n = 40$, we get $1681 = 41 \times 41$, which is not prime.

Therefore, the statement is **false**.

---

## 2.5 Proof Involving Squares and Divisibility

### Worked Example 14: Square of Odd Number

**Prove that the square of any odd number is also odd.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let an odd number be $2n + 1$ where $n \in \mathbb{Z}$ | Definition of odd |
| 2 | $(2n + 1)^2 = 4n^2 + 4n + 1$ | Expand |
| 3 | $= 2(2n^2 + 2n) + 1$ | Factorise 2 from first two terms |
| 4 | $= 2k + 1$ where $k = 2n^2 + 2n \in \mathbb{Z}$ | Define $k$ |
| 5 | This is of the form $2k + 1$ | Odd number form |
| 6 | Therefore, the square of an odd number is odd | Conclusion |

**Q.E.D.**

---

### Worked Example 15: Difference of Squares

**Prove that the difference between the squares of two consecutive integers is always odd.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let consecutive integers be $n$ and $n+1$ | Define variables |
| 2 | Difference $= (n+1)^2 - n^2$ | Set up expression |
| 3 | $= n^2 + 2n + 1 - n^2$ | Expand |
| 4 | $= 2n + 1$ | Simplify |
| 5 | $2n + 1$ is odd for any integer $n$ | Form of odd number |
| 6 | Therefore, the difference is always odd | Conclusion |

**Q.E.D.**

---

### Worked Example 16: Sum of Squares

**Prove that the sum of the squares of any two consecutive integers is always odd.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let consecutive integers be $n$ and $n+1$ | Define variables |
| 2 | Sum $= n^2 + (n+1)^2$ | Set up expression |
| 3 | $= n^2 + n^2 + 2n + 1$ | Expand |
| 4 | $= 2n^2 + 2n + 1$ | Collect terms |
| 5 | $= 2(n^2 + n) + 1$ | Factorise |
| 6 | $= 2k + 1$ where $k = n^2 + n$ | Odd form |
| 7 | Therefore, the sum is always odd | Conclusion |

**Q.E.D.**

---

## 2.6 Proof by Exhaustion

### When to Use

Proof by exhaustion is used when there are a **finite number of cases** to check.

### Worked Example 17

**Prove that every even number between 2 and 10 inclusive can be written as the sum of two prime numbers.**

**Proof by exhaustion:**

| Number | Sum of Two Primes | Verification |
|--------|-------------------|--------------|
| 2 | Cannot be written as sum of two primes | Exception! |
| 4 | 2 + 2 = 4 | ✓ |
| 6 | 3 + 3 = 6 | ✓ |
| 8 | 3 + 5 = 8 | ✓ |
| 10 | 3 + 7 = 10 or 5 + 5 = 10 | ✓ |

**Note:** The statement needs revision - 2 is a counter-example.

**Corrected statement:** "Every even number greater than 2 and less than or equal to 10 can be written as the sum of two prime numbers."

**Q.E.D.**

---

## 2.7 Algebraic Proofs Involving Inequalities

### Worked Example 18: Proving an Inequality

**Prove that for any two consecutive positive integers, their product is less than the square of the larger number.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let consecutive integers be $n$ and $n+1$ where $n \geq 1$ | Define |
| 2 | Product $= n(n+1) = n^2 + n$ | Expand |
| 3 | Square of larger $= (n+1)^2 = n^2 + 2n + 1$ | Expand |
| 4 | Difference: $(n+1)^2 - n(n+1) = n^2 + 2n + 1 - n^2 - n$ | Set up comparison |
| 5 | $= n + 1$ | Simplify |
| 6 | Since $n \geq 1$, we have $n + 1 > 0$ | Positivity |
| 7 | Therefore $(n+1)^2 > n(n+1)$ | Conclusion |

**Q.E.D.**

---

## 2.8 Proofs Involving Special Number Types

### Worked Example 19: Square Numbers Ending in 5

**Prove that the square of any number ending in 5 also ends in 5.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let a number ending in 5 be $10n + 5$ where $n \in \mathbb{Z}$ | Form of number ending in 5 |
| 2 | $(10n + 5)^2 = 100n^2 + 100n + 25$ | Expand |
| 3 | $= 100(n^2 + n) + 25$ | Factorise 100 |
| 4 | $= 100k + 25$ where $k = n^2 + n$ | |
| 5 | This ends in 25, which ends in 5 | Observe last digit |
| 6 | Therefore, the square ends in 5 | Conclusion |

**Q.E.D.**

> **📝 Exam Tip:** The square of any number ending in 5 actually ends in **25** (not just 5)!

---

### Worked Example 20: Divisibility Proof

**Prove that $n^3 - n$ is divisible by 6 for all positive integers $n$.**

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | $n^3 - n = n(n^2 - 1) = n(n-1)(n+1)$ | Factorise |
| 2 | This is the product of three consecutive integers | Observe structure |
| 3 | **Divisibility by 2:** Among any three consecutive integers, at least one is even | Pigeonhole principle |
| 4 | **Divisibility by 3:** Among any three consecutive integers, exactly one is a multiple of 3 | |
| 5 | Since 2 and 3 are coprime, if divisible by both 2 and 3, then divisible by 6 | |
| 6 | Therefore, $n^3 - n$ is divisible by 6 | Conclusion |

**Q.E.D.**

---

# EXAM FOCUS & STRATEGY SECTION

## 📌 Frequently Tested Question Types

### Simultaneous Equations

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Linear simultaneous equations (substitution/elimination) | 3-4 | ⭐⭐⭐⭐⭐ |
| Linear-quadratic systems | 4-6 | ⭐⭐⭐⭐ |
| Finding intersection graphically | 2-3 | ⭐⭐⭐ |
| Word problems leading to simultaneous equations | 5-7 | ⭐⭐⭐⭐ |
| Proving number of solutions using discriminant | 4-5 | ⭐⭐⭐ |

### Algebraic Proof

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Prove sum/product of evens/odds | 3-4 | ⭐⭐⭐⭐⭐ |
| Prove properties of consecutive integers | 3-5 | ⭐⭐⭐⭐ |
| Counter-example questions | 2-3 | ⭐⭐⭐⭐ |
| Prove divisibility | 4-5 | ⭐⭐⭐ |
| Proof involving squares | 3-4 | ⭐⭐⭐⭐ |

---

## 📝 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Prove** | Give a complete logical argument from start to finish |
| **Show that** | Work towards a given result |
| **Disprove** | Find a counter-example |
| **Hence** | Use your previous answer |
| **Hence or otherwise** | You may use previous answer or start fresh |
| **Determine** | Find a numerical or algebraic answer |
| **Verify** | Check that a given value satisfies a condition |

---

## 🏆 How to Gain Full Marks in Proof Questions

### Checklist for Full Marks:

- [ ] Start with general algebraic expressions (e.g., $2n$, $2n+1$)
- [ ] Define what your variables represent
- [ ] Show ALL steps clearly
- [ ] State the reason for key steps
- [ ] End with a clear conclusion ("Therefore..." or "Q.E.D.")
- [ ] Don't use specific numbers as proof (that's verification, not proof)

### Common Mark Scheme Points:

| Mark | Description |
|------|-------------|
| M1 | Correct algebraic form used |
| M1 | Correct algebraic manipulation |
| A1 | Correct conclusion stated |
| E1 | Clear explanation/reasoning |

---

##  Common Mistakes to Avoid

### Simultaneous Equations:

1. **Sign errors** when adding/subtracting equations
2. **Forgetting to substitute back** for the second variable
3. **Calculation errors** with fractions
4. **Not checking answers** in both original equations
5. **Forgetting surd simplification** when required

### Algebraic Proof:

1. **Using specific numbers** instead of general expressions
2. **Not defining variables** at the start
3. **Missing conclusion** at the end
4. **Incomplete reasoning** - jumping to conclusions
5. **Wrong algebraic representation** (e.g., odd as $2n$ instead of $2n+1$)

---

##  Key Exam Insights

> **Simultaneous Equations:**
> - Always check if graphical interpretation is expected
> - Look for geometric context (intersection of curves)
> - Check for special cases: no solution, infinite solutions
> - Verify by substitution in both equations

> **Algebraic Proof:**
> - Memorise standard algebraic forms for different number types
> - Practice factorisation - many proofs involve factorising
> - Structure your proof with clear steps
> - Use "Let... where... is an integer" at the start
> - Always write a concluding statement

---

## 📐 Essential Formulas and Identities

### Factorisation Identities:

$$a^2 - b^2 = (a-b)(a+b)$$

$$(a+b)^2 = a^2 + 2ab + b^2$$

$$(a-b)^2 = a^2 - 2ab + b^2$$

$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$

$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$

### Discriminant:

For $ax^2 + bx + c = 0$:

$$\Delta = b^2 - 4ac$$

- $\Delta > 0$: Two distinct solutions
- $\Delta = 0$: One repeated solution  
- $\Delta < 0$: No real solutions

### Circle Equation:

$$(x-a)^2 + (y-b)^2 = r^2$$

Centre $(a, b)$, radius $r$

---

## 🎯 Last-Minute Revision Checklist

### Simultaneous Equations:
- [ ] Can solve linear systems by substitution
- [ ] Can solve linear systems by elimination
- [ ] Can solve linear-quadratic systems
- [ ] Can interpret solutions graphically
- [ ] Can identify special cases (no/infinite solutions)
- [ ] Can apply to word problems

### Algebraic Proof:
- [ ] Know algebraic forms for even, odd, multiples
- [ ] Can prove statements about sums of even/odd
- [ ] Can prove statements about products
- [ ] Can use counter-examples correctly
- [ ] Can structure a proof clearly
- [ ] Can prove divisibility statements

---

*These notes are aligned with the Pearson Edexcel IGCSE Mathematics A (4MA1) specification.*
