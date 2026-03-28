# Chapter 18: Algebra 8 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics – Detailed Study Notes

---

##  UNIT OVERVIEW

This unit covers **functions** – a fundamental concept in mathematics that describes relationships between inputs and outputs. Understanding functions is essential for A* success and forms the foundation for advanced mathematics.

**Topics Covered:**
1. Function notation $f(x)$
2. Domain and range
3. Composite functions $fg(x)$ and $gf(x)$
4. Inverse functions $f^{-1}(x)$

---

## PART 1: FUNCTION NOTATION

---

## 1. UNDERSTANDING FUNCTIONS

### 1.1 What is a Function?

> **KEY DEFINITION**: A **function** is a mathematical relationship that assigns each input value to exactly one output value.

**Key Points:**
- A function is a rule that takes an **input** and produces an **output**
- Each input has **exactly one** output
- Think of a function as a "machine" that processes numbers

---

### 1.2 Function Notation

> **KEY NOTATION**: We write functions as $f(x)$, read as "f of x" or "f at x"

**The notation $f(x)$ means:**
- $f$ is the name of the function
- $x$ is the input variable
- $f(x)$ represents the output value

**Example:** If $f(x) = 2x + 3$, then:
- When $x = 4$, we write $f(4) = 2(4) + 3 = 11$
- The output when the input is 4 is 11

---

### 1.3 Evaluating Functions

**Method:**
1. Write down the function
2. Substitute the given value for $x$
3. Calculate the result

---

#### **Worked Examples**

**Example 1:** Given $f(x) = 3x - 5$, find:
(a) $f(2)$
(b) $f(-1)$
(c) $f(0)$

**Solution:**

**(a)** Substitute $x = 2$:
$$f(2) = 3(2) - 5 = 6 - 5 = 1$$

**(b)** Substitute $x = -1$:
$$f(-1) = 3(-1) - 5 = -3 - 5 = -8$$

**(c)** Substitute $x = 0$:
$$f(0) = 3(0) - 5 = 0 - 5 = -5$$

---

**Example 2:** Given $f(x) = x^2 + 2x - 1$, find:
(a) $f(3)$
(b) $f(-2)$
(c) $f(a)$

**Solution:**

**(a)** Substitute $x = 3$:
$$f(3) = 3^2 + 2(3) - 1 = 9 + 6 - 1 = 14$$

**(b)** Substitute $x = -2$:
$$f(-2) = (-2)^2 + 2(-2) - 1 = 4 - 4 - 1 = -1$$

**(c)** Substitute $x = a$:
$$f(a) = a^2 + 2a - 1$$

---

**Example 3:** Given $g(x) = \frac{x + 3}{x - 1}$, find $g(4)$ and $g(5)$

**Solution:**

$$g(4) = \frac{4 + 3}{4 - 1} = \frac{7}{3}$$

$$g(5) = \frac{5 + 3}{5 - 1} = \frac{8}{4} = 2$$

---

### 1.4 Finding the Input Given the Output

> **KEY SKILL**: Sometimes you are given $f(x) = k$ and asked to find $x$.

**Method:**
1. Set the function equal to the given value
2. Solve the equation for $x$

---

**Example 4:** Given $f(x) = 2x + 7$, find $x$ when $f(x) = 15$

**Solution:**

**Step 1:** Set up the equation
$$2x + 7 = 15$$

**Step 2:** Solve for $x$
$$2x = 15 - 7 = 8$$
$$x = 4$$

**Answer:** $x = 4$

---

**Example 5:** Given $f(x) = x^2 - 3$, find the values of $x$ when $f(x) = 22$

**Solution:**

**Step 1:** Set up the equation
$$x^2 - 3 = 22$$

**Step 2:** Solve
$$x^2 = 25$$
$$x = \pm 5$$

**Answer:** $x = 5$ or $x = -5$

---

### 1.5 Different Function Names

Functions can have different names:
- $f(x)$ – most common
- $g(x)$ – another function
- $h(x)$ – another function
- $p(x)$, $q(x)$, etc.

**Example 6:** If $f(x) = 3x + 1$ and $g(x) = x^2$, find:
(a) $f(2) + g(2)$
(b) $f(g(2))$

**Solution:**

**(a)** Calculate each separately:
$$f(2) = 3(2) + 1 = 7$$
$$g(2) = 2^2 = 4$$
$$f(2) + g(2) = 7 + 4 = 11$$

**(b)** First find $g(2) = 4$, then find $f(4)$:
$$f(g(2)) = f(4) = 3(4) + 1 = 13$$

---

## PART 2: DOMAIN AND RANGE

---

## 2. DOMAIN AND RANGE

### 2.1 Definitions

> **KEY DEFINITIONS:**
> - **Domain**: The set of all possible **input** values for a function
> - **Range**: The set of all possible **output** values for a function

**Visual Understanding:**
```
   Domain          Function          Range
  (Inputs)       (Rule/Machine)    (Outputs)
     x      →       f(x)       →      y
```

---

### 2.2 Finding the Domain

**Common Restrictions:**

| Function Type | Restriction | Reason |
|---------------|-------------|--------|
| $f(x) = \frac{1}{x - a}$ | $x \neq a$ | Division by zero |
| $f(x) = \sqrt{x - a}$ | $x \geq a$ | Square root of negative |
| $f(x) = \frac{1}{\sqrt{x - a}}$ | $x > a$ | Division by zero AND square root |

---

#### **Worked Examples**

**Example 7:** Find the domain of $f(x) = \frac{3}{x - 2}$

**Solution:**

The denominator cannot equal zero:
$$x - 2 \neq 0$$
$$x \neq 2$$

**Domain:** All real numbers except $x = 2$

**Notation:** $\{x \in \mathbb{R} : x \neq 2\}$ or "All real $x$, $x \neq 2$"

---

**Example 8:** Find the domain of $f(x) = \sqrt{x + 4}$

**Solution:**

The expression under the square root must be non-negative:
$$x + 4 \geq 0$$
$$x \geq -4$$

**Domain:** $x \geq -4$

**Notation:** $\{x \in \mathbb{R} : x \geq -4\}$

---

**Example 9:** Find the domain of $f(x) = \frac{1}{\sqrt{x - 3}}$

**Solution:**

Two conditions:
1. Expression under square root must be positive (not zero, because it's in denominator)
2. $x - 3 > 0$
3. $x > 3$

**Domain:** $x > 3$

---

**Example 10:** Find the domain of $f(x) = \frac{x + 1}{x^2 - 4}$

**Solution:**

The denominator cannot equal zero:
$$x^2 - 4 \neq 0$$
$$x^2 \neq 4$$
$$x \neq 2 \text{ and } x \neq -2$$

**Domain:** All real numbers except $x = 2$ and $x = -2$

---

### 2.3 Finding the Range

> **KEY INSIGHT**: The range is the set of all possible $f(x)$ values as $x$ varies over the domain.

**Methods to Find Range:**
1. **Graphical method**: Sketch the function and identify y-values
2. **Algebraic method**: Consider what values $f(x)$ can take
3. **Completing the square**: For quadratic functions

---

#### **Worked Examples**

**Example 11:** Find the range of $f(x) = x^2 + 4$

**Solution:**

Since $x^2 \geq 0$ for all real $x$:
$$x^2 + 4 \geq 4$$

**Range:** $f(x) \geq 4$

**Notation:** $\{y \in \mathbb{R} : y \geq 4\}$

---

**Example 12:** Find the range of $f(x) = -x^2 + 6$

**Solution:**

Since $x^2 \geq 0$:
$$-x^2 \leq 0$$
$$-x^2 + 6 \leq 6$$

**Range:** $f(x) \leq 6$

---

**Example 13:** Find the range of $f(x) = x^2 - 4x + 5$

**Solution:**

Complete the square:
$$x^2 - 4x + 5 = (x - 2)^2 - 4 + 5 = (x - 2)^2 + 1$$

Since $(x - 2)^2 \geq 0$:
$$(x - 2)^2 + 1 \geq 1$$

**Range:** $f(x) \geq 1$

---

**Example 14:** Find the range of $f(x) = \frac{1}{x}$ for $x > 0$

**Solution:**

When $x > 0$:
- As $x \to 0^+$, $f(x) \to +\infty$
- As $x \to +\infty$, $f(x) \to 0^+$

Since $x > 0$, we have $\frac{1}{x} > 0$

**Range:** $f(x) > 0$

---

### 2.4 Domain and Range from Graphs

> **KEY TECHNIQUE:**
> - **Domain**: Look at how far the graph extends horizontally (x-values)
> - **Range**: Look at how far the graph extends vertically (y-values)

---

**Example 15:** A function $f$ has domain $-2 \leq x \leq 3$ and range $1 \leq f(x) \leq 5$.
State whether each of the following statements is true or false:
(a) $f(0)$ exists
(b) $f(4) = 5$ is possible

**Solution:**

**(a)** Since $-2 \leq 0 \leq 3$, $x = 0$ is in the domain. **TRUE**

**(b)** Since $4 > 3$, $x = 4$ is NOT in the domain. $f(4)$ is undefined. **FALSE**

---

## PART 3: COMPOSITE FUNCTIONS

---

## 3. COMPOSITE FUNCTIONS

### 3.1 What is a Composite Function?

> **KEY DEFINITION**: A **composite function** is formed when one function is applied after another.

**Notation:**
- $fg(x)$ means "apply $g$ first, then apply $f$"
- Also written as $f(g(x))$ or $f \circ g(x)$

>  **COMMON MISTAKE**: $fg(x)$ does NOT mean $f(x) \times g(x)$

---

### 3.2 The Order of Composite Functions

> **KEY RULE**: Work from RIGHT to LEFT (inside out)

**For $fg(x)$:**
1. Start with $x$
2. Apply $g$ (the function on the right/inside)
3. Apply $f$ (the function on the left/outside)

```
  x  →  g(x)  →  f(g(x)) = fg(x)
      Step 1      Step 2
```

**For $gf(x)$:**
1. Start with $x$
2. Apply $f$ first
3. Apply $g$ second

```
  x  →  f(x)  →  g(f(x)) = gf(x)
      Step 1      Step 2
```

---

### 3.3 Evaluating Composite Functions

---

#### **Worked Examples**

**Example 16:** Given $f(x) = 2x + 1$ and $g(x) = x^2$, find:
(a) $fg(3)$
(b) $gf(3)$

**Solution:**

**(a) Finding $fg(3)$:**
- Step 1: Find $g(3) = 3^2 = 9$
- Step 2: Find $f(9) = 2(9) + 1 = 19$

**Answer:** $fg(3) = 19$

**(b) Finding $gf(3)$:**
- Step 1: Find $f(3) = 2(3) + 1 = 7$
- Step 2: Find $g(7) = 7^2 = 49$

**Answer:** $gf(3) = 49$

> 📝 **Note:** $fg(3) \neq gf(3)$ – order matters!

---

**Example 17:** Given $f(x) = 3x - 2$ and $g(x) = x + 5$, find $fg(2)$ and $gf(2)$

**Solution:**

**Finding $fg(2)$:**
$$g(2) = 2 + 5 = 7$$
$$f(7) = 3(7) - 2 = 19$$

**Finding $gf(2)$:**
$$f(2) = 3(2) - 2 = 4$$
$$g(4) = 4 + 5 = 9$$

**Answer:** $fg(2) = 19$, $gf(2) = 9$

---

### 3.4 Finding Composite Function Expressions

**Method:**
1. Write out the outer function
2. Replace every $x$ with the inner function
3. Simplify

---

**Example 18:** Given $f(x) = 2x + 3$ and $g(x) = x - 1$, find expressions for:
(a) $fg(x)$
(b) $gf(x)$

**Solution:**

**(a) Finding $fg(x)$:**

**Step 1:** $fg(x) = f(g(x))$ means put $g(x)$ into $f$

**Step 2:** Replace $x$ in $f(x)$ with $(x - 1)$:
$$f(x - 1) = 2(x - 1) + 3$$

**Step 3:** Simplify:
$$= 2x - 2 + 3$$
$$= 2x + 1$$

**Answer:** $fg(x) = 2x + 1$

**(b) Finding $gf(x)$:**

**Step 1:** $gf(x) = g(f(x))$ means put $f(x)$ into $g$

**Step 2:** Replace $x$ in $g(x)$ with $(2x + 3)$:
$$g(2x + 3) = (2x + 3) - 1$$

**Step 3:** Simplify:
$$= 2x + 2$$

**Answer:** $gf(x) = 2x + 2$

---

**Example 19:** Given $f(x) = x^2$ and $g(x) = x + 3$, find:
(a) $fg(x)$
(b) $gf(x)$

**Solution:**

**(a) $fg(x) = f(x + 3) = (x + 3)^2 = x^2 + 6x + 9$**

**(b) $gf(x) = g(x^2) = x^2 + 3$**

---

**Example 20:** Given $f(x) = \frac{2}{x}$ and $g(x) = x + 1$, find $fg(x)$

**Solution:**

$$fg(x) = f(x + 1) = \frac{2}{x + 1}$$

**Answer:** $fg(x) = \frac{2}{x + 1}$

---

**Example 21:** Given $f(x) = 2x - 1$ and $g(x) = \frac{3}{x}$, find $gf(x)$

**Solution:**

$$gf(x) = g(2x - 1) = \frac{3}{2x - 1}$$

**Answer:** $gf(x) = \frac{3}{2x - 1}$

---

### 3.5 Self-Composition

> **KEY CONCEPT**: $ff(x)$ means apply $f$ twice.

**Example 22:** Given $f(x) = 2x + 1$, find $ff(x)$

**Solution:**

$$ff(x) = f(2x + 1) = 2(2x + 1) + 1$$
$$= 4x + 2 + 1$$
$$= 4x + 3$$

**Answer:** $ff(x) = 4x + 3$

---

**Example 23:** Given $f(x) = x^2 - 2$, find $ff(2)$

**Solution:**

**Method 1 (Direct):**
$$f(2) = 2^2 - 2 = 2$$
$$ff(2) = f(f(2)) = f(2) = 2^2 - 2 = 2$$

**Method 2 (Find expression first):**
$$ff(x) = f(x^2 - 2) = (x^2 - 2)^2 - 2$$
$$ff(2) = (4 - 2)^2 - 2 = 4 - 2 = 2$$

**Answer:** $ff(2) = 2$

---

### 3.6 Domain of Composite Functions

> **KEY RULE**: For $fg(x)$ to be defined:
> 1. $x$ must be in the domain of $g$
> 2. $g(x)$ must be in the domain of $f$

---

**Example 24:** Given $f(x) = \sqrt{x}$ and $g(x) = x - 3$, find the domain of $fg(x)$

**Solution:**

For $fg(x) = \sqrt{x - 3}$:
- $g(x) = x - 3$ is defined for all real $x$
- But $f(x) = \sqrt{x}$ requires $x \geq 0$
- So $g(x) \geq 0$ means $x - 3 \geq 0$

**Domain:** $x \geq 3$

---

## PART 4: INVERSE FUNCTIONS

---

## 4. INVERSE FUNCTIONS

### 4.1 What is an Inverse Function?

> **KEY DEFINITION**: The **inverse function** $f^{-1}(x)$ "undoes" the effect of $f(x)$.

**Key Property:**
$$f^{-1}(f(x)) = x \quad \text{and} \quad f(f^{-1}(x)) = x$$

**Visual Understanding:**
```
  x  →  f  →  f(x)  →  f⁻¹  →  x
         (forward)       (backward/undo)
```

>  **Note:** Not all functions have inverses. A function must be **one-to-one** to have an inverse.

---

### 4.2 Conditions for an Inverse Function

> **KEY CONCEPT**: A function has an inverse if and only if it is **one-to-one**.

**One-to-one function:**
- Each output corresponds to exactly one input
- No horizontal line crosses the graph more than once (horizontal line test)

**Many-to-one function:**
- Some outputs correspond to multiple inputs
- No inverse function (but can restrict domain)

---

### 4.3 Finding the Inverse Function – Algebraic Method

**Method:**
1. Write $y = f(x)$
2. Swap $x$ and $y$ (interchange variables)
3. Solve for $y$ in terms of $x$
4. The result is $f^{-1}(x)$

---

#### **Worked Examples**

**Example 25:** Find the inverse of $f(x) = 2x + 5$

**Solution:**

**Step 1:** Write $y = f(x)$
$$y = 2x + 5$$

**Step 2:** Swap $x$ and $y$
$$x = 2y + 5$$

**Step 3:** Solve for $y$
$$x - 5 = 2y$$
$$y = \frac{x - 5}{2}$$

**Step 4:** Write as inverse function
$$f^{-1}(x) = \frac{x - 5}{2}$$

**Verification:** $f(f^{-1}(x)) = 2\left(\frac{x - 5}{2}\right) + 5 = x - 5 + 5 = x$ ✓

---

**Example 26:** Find the inverse of $f(x) = \frac{x - 3}{4}$

**Solution:**

**Step 1:** $y = \frac{x - 3}{4}$

**Step 2:** $x = \frac{y - 3}{4}$

**Step 3:** Solve for $y$:
$$4x = y - 3$$
$$y = 4x + 3$$

**Answer:** $f^{-1}(x) = 4x + 3$

---

**Example 27:** Find the inverse of $f(x) = \frac{2x + 1}{3}$

**Solution:**

**Step 1:** $y = \frac{2x + 1}{3}$

**Step 2:** $x = \frac{2y + 1}{3}$

**Step 3:** Solve:
$$3x = 2y + 1$$
$$2y = 3x - 1$$
$$y = \frac{3x - 1}{2}$$

**Answer:** $f^{-1}(x) = \frac{3x - 1}{2}$

---

**Example 28:** Find the inverse of $f(x) = \frac{3}{x - 2}$, $x \neq 2$

**Solution:**

**Step 1:** $y = \frac{3}{x - 2}$

**Step 2:** $x = \frac{3}{y - 2}$

**Step 3:** Solve:
$$x(y - 2) = 3$$
$$xy - 2x = 3$$
$$xy = 3 + 2x$$
$$y = \frac{3 + 2x}{x} = \frac{2x + 3}{x}$$

**Answer:** $f^{-1}(x) = \frac{2x + 3}{x}$, $x \neq 0$

---

**Example 29:** Find the inverse of $f(x) = x^3 + 2$

**Solution:**

**Step 1:** $y = x^3 + 2$

**Step 2:** $x = y^3 + 2$

**Step 3:** Solve:
$$x - 2 = y^3$$
$$y = \sqrt[3]{x - 2}$$

**Answer:** $f^{-1}(x) = \sqrt[3]{x - 2}$

---

### 4.4 Finding the Inverse – Quadratic Functions

>  **KEY INSIGHT**: Quadratic functions are NOT one-to-one, so they don't have inverses over their full domain.

**However:** If we restrict the domain to $x \geq$ vertex (or $x \leq$ vertex), we can find an inverse.

---

**Example 30:** The function $f(x) = x^2 + 2$, for $x \geq 0$, has an inverse. Find $f^{-1}(x)$.

**Solution:**

**Step 1:** $y = x^2 + 2$

**Step 2:** $x = y^2 + 2$

**Step 3:** Solve for $y$:
$$x - 2 = y^2$$
$$y = \sqrt{x - 2}$$

**Step 4:** Since domain of $f$ is $x \geq 0$, we take the positive root.

**Answer:** $f^{-1}(x) = \sqrt{x - 2}$, for $x \geq 2$

**Domain of $f^{-1}$:** $x \geq 2$ (which equals the range of $f$)

---

### 4.5 Relationship Between a Function and its Inverse

> **KEY RELATIONSHIPS:**

| Property | $f(x)$ | $f^{-1}(x)$ |
|----------|--------|-------------|
| **Domain** | $D$ | Range of $f$ |
| **Range** | $R$ | Domain of $f$ |
| **Graph** | Reflected in line $y = x$ | Mirror image of $f$ |

**Graph Property:**
- The graphs of $y = f(x)$ and $y = f^{-1}(x)$ are reflections of each other in the line $y = x$

---

**Example 31:** Given $f(x) = 2x - 6$, find:
(a) $f^{-1}(x)$
(b) $f^{-1}(4)$

**Solution:**

**(a)** Finding $f^{-1}(x)$:
$$y = 2x - 6$$
$$x = 2y - 6$$
$$x + 6 = 2y$$
$$y = \frac{x + 6}{2}$$

**Answer:** $f^{-1}(x) = \frac{x + 6}{2}$

**(b)** Two methods:

**Method 1:** Use the inverse:
$$f^{-1}(4) = \frac{4 + 6}{2} = 5$$

**Method 2:** Set $f(x) = 4$ and solve:
$$2x - 6 = 4$$
$$2x = 10$$
$$x = 5$$

Both give the same answer! ✓

---

### 4.6 Using Inverse Functions to Solve Equations

> **KEY APPLICATION**: If $f(a) = b$, then $f^{-1}(b) = a$

---

**Example 32:** Given $f(x) = 3x - 7$, solve $f(x) = 5$

**Solution:**

**Method 1:** Direct substitution:
$$3x - 7 = 5$$
$$3x = 12$$
$$x = 4$$

**Method 2:** Using inverse:
$$f^{-1}(x) = \frac{x + 7}{3}$$
$$f^{-1}(5) = \frac{5 + 7}{3} = 4$$

**Answer:** $x = 4$

---

### 4.7 Composite with Inverse Functions

> **KEY IDENTITY:**
> $$ff^{-1}(x) = x \quad \text{and} \quad f^{-1}f(x) = x$$

---

**Example 33:** Given $f(x) = 2x + 3$, verify that $ff^{-1}(x) = x$

**Solution:**

**Step 1:** Find $f^{-1}(x)$:
$$f^{-1}(x) = \frac{x - 3}{2}$$

**Step 2:** Find $ff^{-1}(x)$:
$$ff^{-1}(x) = f\left(\frac{x - 3}{2}\right) = 2\left(\frac{x - 3}{2}\right) + 3$$
$$= (x - 3) + 3 = x$$ ✓

---

## PART 5: ADVANCED PROBLEMS

---

## 5. COMBINED CONCEPTS

### 5.1 Multi-Step Function Problems

---

**Example 34:** Given $f(x) = 2x + 1$, $g(x) = x^2$
(a) Find $fg(x)$
(b) Find $gf(x)$
(c) Solve $fg(x) = gf(x)$

**Solution:**

**(a)** $fg(x) = f(x^2) = 2x^2 + 1$

**(b)** $gf(x) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$

**(c)** Set $fg(x) = gf(x)$:
$$2x^2 + 1 = 4x^2 + 4x + 1$$
$$0 = 2x^2 + 4x$$
$$0 = 2x(x + 2)$$
$$x = 0 \text{ or } x = -2$$

**Answer:** $x = 0$ or $x = -2$

---

**Example 35:** Given $f(x) = x + 2$ and $g(x) = 3x - 1$
(a) Find $fg(x)$
(b) Hence solve $fg(x) = 9$

**Solution:**

**(a)** $fg(x) = f(3x - 1) = (3x - 1) + 2 = 3x + 1$

**(b)** $3x + 1 = 9$
$$3x = 8$$
$$x = \frac{8}{3}$$

---

**Example 36:** Given $f(x) = \frac{x + 2}{3}$ and $g(x) = 2x - 5$, find $f^{-1}(x)$ and verify that $f^{-1}f(x) = x$

**Solution:**

**Finding $f^{-1}(x)$:**
$$y = \frac{x + 2}{3}$$
$$x = \frac{y + 2}{3}$$
$$3x = y + 2$$
$$y = 3x - 2$$

**Answer:** $f^{-1}(x) = 3x - 2$

**Verification:**
$$f^{-1}f(x) = f^{-1}\left(\frac{x + 2}{3}\right) = 3\left(\frac{x + 2}{3}\right) - 2$$
$$= x + 2 - 2 = x$$ ✓

---

**Example 37:** The function $f$ is defined by $f(x) = \frac{x - 1}{x + 2}$, $x \neq -2$
(a) Find $f^{-1}(x)$
(b) State the domain of $f^{-1}$

**Solution:**

**(a)**
$$y = \frac{x - 1}{x + 2}$$
$$x = \frac{y - 1}{y + 2}$$
$$x(y + 2) = y - 1$$
$$xy + 2x = y - 1$$
$$xy - y = -2x - 1$$
$$y(x - 1) = -2x - 1$$
$$y = \frac{-2x - 1}{x - 1} = \frac{2x + 1}{1 - x}$$

**Answer:** $f^{-1}(x) = \frac{2x + 1}{1 - x}$

**(b)** The domain of $f^{-1}$ equals the range of $f$.

The range of $f$ excludes the value that makes numerator equal zero when finding $y$ in terms of $x$. This happens when $f^{-1}(x)$ is undefined.

$x - 1 \neq 0$, so $x \neq 1$

**Domain of $f^{-1}$:** $x \neq 1$

---

## 6. COMMON MISTAKES

>  **EXAM WARNING – TOP ERRORS:**

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Wrong order in composite | $fg(x) = f(x) \times g(x)$ | $fg(x) = f(g(x))$ – apply $g$ first |
| Forgetting to substitute | $f(2x)$ when $f(x) = x^2 + 1$ gives $x^2 + 1$ | $f(2x) = (2x)^2 + 1 = 4x^2 + 1$ |
| Not swapping in inverse | Finding $f^{-1}$ without swapping $x$ and $y$ | Must swap variables |
| Domain of inverse | Assuming same domain as original | Domain of $f^{-1}$ = Range of $f$ |
| Inverse of quadratic | Finding inverse without restriction | Must specify domain restriction |
| Forgetting domain restrictions | $f(x) = \frac{1}{x-2}$ defined for all $x$ | Domain excludes $x = 2$ |
| Not simplifying | $fg(x) = 2(x + 1) + 3$ as final answer | Simplify: $fg(x) = 2x + 5$ |

---

## 7. SUMMARY TABLES

### 7.1 Function Notation Summary

| Notation | Meaning |
|----------|---------|
| $f(x)$ | Function $f$ evaluated at $x$ |
| $f(a)$ | Value of $f$ when $x = a$ |
| $fg(x)$ | Apply $g$ first, then $f$ |
| $gf(x)$ | Apply $f$ first, then $g$ |
| $ff(x)$ | Apply $f$ twice |
| $f^{-1}(x)$ | Inverse function of $f$ |

### 7.2 Domain Restrictions Summary

| Function | Domain Restriction |
|----------|-------------------|
| $f(x) = \frac{a}{x - b}$ | $x \neq b$ |
| $f(x) = \sqrt{x - a}$ | $x \geq a$ |
| $f(x) = \frac{a}{\sqrt{x - b}}$ | $x > b$ |
| $f(x) = \sqrt{a - x}$ | $x \leq a$ |

### 7.3 Key Relationships

| Relationship | Formula |
|--------------|---------|
| Composite | $fg(x) = f(g(x))$ |
| Inverse property | $f^{-1}(f(x)) = x$ |
| Inverse property | $f(f^{-1}(x)) = x$ |
| Domain of inverse | $\text{Dom}(f^{-1}) = \text{Range}(f)$ |
| Range of inverse | $\text{Range}(f^{-1}) = \text{Dom}(f)$ |

---

## 8. EXAM FOCUS & STRATEGY

### 8.1 Frequently Tested Question Types

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Evaluate $f(a)$ | 1-2 | ⭐⭐⭐⭐⭐ Very High |
| Find domain/range | 2-3 | ⭐⭐⭐⭐⭐ Very High |
| Find composite $fg(x)$ | 2-3 | ⭐⭐⭐⭐⭐ Very High |
| Find inverse $f^{-1}(x)$ | 2-4 | ⭐⭐⭐⭐⭐ Very High |
| Solve $f(x) = k$ | 2-3 | ⭐⭐⭐⭐ High |
| Combined composite and inverse | 4-6 | ⭐⭐⭐⭐ High |
| Problems with domain restrictions | 3-4 | ⭐⭐⭐ Medium |

---

### 8.2 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Find** | Calculate the value or expression |
| **Evaluate** | Substitute and calculate numerical answer |
| **Solve** | Find the value(s) of $x$ that satisfy the equation |
| **Express** | Write in the required form |
| **State** | Give the answer without working |
| **Hence** | Use your previous answer |
| **Verify** | Show that the statement is true |

---

### 8.3 How to Gain Full Marks

> 🎯 **EXAM STRATEGIES:**

**For Function Evaluation (1-2 marks):**
1. ✅ Substitute correctly (use brackets!)
2. ✅ Calculate carefully
3. ✅ Simplify the answer

**For Composite Functions (2-3 marks):**
1. ✅ Show substitution step
2. ✅ Apply functions in correct order
3. ✅ Simplify fully
4. ✅ Use brackets when substituting

**For Inverse Functions (3-4 marks):**
1. ✅ Show the swap step ($x$ and $y$)
2. ✅ Show solving process
3. ✅ State the inverse clearly
4. ✅ State any domain restrictions

**For Domain/Range (2-3 marks):**
1. ✅ State the restriction clearly
2. ✅ Use correct notation
3. ✅ Consider all restrictions

---

### 8.4 Typical Mark Scheme

**Composite Function (3 marks):**
| Mark | Criteria |
|------|----------|
| M1 | Correct substitution of inner function |
| M1 | Correct expansion/substitution into outer function |
| A1 | Fully simplified correct expression |

**Inverse Function (3 marks):**
| Mark | Criteria |
|------|----------|
| M1 | Swap variables (or equivalent method) |
| M1 | Correct rearrangement |
| A1 | Correct $f^{-1}(x)$ stated |

**Domain/Range (2 marks):**
| Mark | Criteria |
|------|----------|
| B1 | Correct restriction identified |
| B1 | Correct notation used |

---

## 9. KEY FORMULAE SUMMARY

### 9.1 Function Operations

| Operation | Process |
|-----------|---------|
| $f(a)$ | Substitute $x = a$ into $f(x)$ |
| $fg(x)$ | Replace $x$ in $f$ with $g(x)$ |
| $gf(x)$ | Replace $x$ in $g$ with $f(x)$ |
| $f^{-1}(x)$ | Swap $x$ and $y$, solve for $y$ |

### 9.2 Key Identities

$$ff^{-1}(x) = x$$

$$f^{-1}f(x) = x$$

$$fg(x) \neq gf(x) \text{ (in general)}$$

---

## 10. PRACTICE TIPS FOR A* STUDENTS

### 10.1 Quick Self-Check Questions

Before submitting, ask yourself:
1. Have I substituted correctly using brackets?
2. For composite functions, did I apply them in the correct order?
3. For inverse functions, did I swap the variables?
4. Have I stated all domain restrictions?
5. Is my answer fully simplified?

### 10.2 Common Exam Traps to Avoid

1. **Wrong order in composite** – Remember: $fg(x)$ means $f(g(x))$, apply $g$ first
2. **Forgetting brackets** – $f(2x) \neq f(x) \times 2$
3. **Not stating domains** – Always check for restrictions
4. **Incomplete simplification** – Expand and collect like terms
5. **Confusing $f^{-1}$ with reciprocal** – $f^{-1}(x) \neq \frac{1}{f(x)}$

### 10.3 Verification Methods

- **For composite functions:** Test with a numerical value
- **For inverse functions:** Verify $ff^{-1}(x) = x$
- **For domain restrictions:** Check what makes denominator zero or radicand negative

---

## 📌 FINAL SUMMARY

| Topic | Key Skills | Key Points |
|-------|------------|------------|
| **Function Notation** | Evaluate $f(a)$, find $x$ given $f(x) = k$ | Substitute carefully with brackets |
| **Domain & Range** | Identify restrictions, find possible values | Denominator ≠ 0, radicand ≥ 0 |
| **Composite Functions** | Find $fg(x)$, $gf(x)$ | Apply right function first |
| **Inverse Functions** | Find $f^{-1}(x)$, verify identities | Swap $x$ and $y$, solve |

---

*These notes are designed for Pearson Edexcel IGCSE Mathematics students aiming for A* grades. For best results, practise with past papers and use these notes alongside your textbook.*
