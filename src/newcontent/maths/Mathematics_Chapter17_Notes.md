# Chapter 17: Algebra 7 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics – Detailed Study Notes

---

##  UNIT OVERVIEW

This unit covers **quadratic equations** – one of the most important and frequently examined topics in IGCSE Mathematics. Mastering quadratics is essential for A* success.

**Topics Covered:**
1. Solving quadratics by factorising
2. Completing the square
3. Quadratic formula
4. Quadratic inequalities
5. Word problems involving quadratics

---

## PART 1: SOLVING QUADRATICS BY FACTORISING

---

## 1. UNDERSTANDING QUADRATIC EQUATIONS

### 1.1 What is a Quadratic Equation?

> **KEY DEFINITION**: A **quadratic equation** is an equation of the form $ax^2 + bx + c = 0$ where $a$, $b$, and $c$ are constants and $a \neq 0$.

**Standard Form:**
$$ax^2 + bx + c = 0$$

**Key Features:**
- The highest power of $x$ is 2 (hence "quadratic" – from "quad" meaning square)
- The graph is a parabola (U-shaped curve)
- A quadratic equation can have **0, 1, or 2 real solutions**

---

### 1.2 Why Solve Quadratic Equations?

Quadratic equations model many real-world situations:
- Projectile motion (height of thrown objects)
- Area problems
- Profit maximisation
- Physics applications (stopping distance, falling objects)

---

## 2. FACTORISING QUADRATICS

### 2.1 When Can We Factorise?

> **KEY INSIGHT**: A quadratic can be factorised if it can be written as a product of two linear factors.

**We can factorise when:**
- The quadratic has integer (or simple rational) solutions
- The discriminant $b^2 - 4ac$ is a perfect square

---

### 2.2 Simple Quadratics (When $a = 1$)

**Form:** $x^2 + bx + c$

**Method – Find Two Numbers:**
1. Find two numbers that **multiply to give $c$**
2. Check that they **add to give $b$**
3. Write as $(x + p)(x + q) = 0$

---

#### **Worked Examples**

**Example 1:** Solve $x^2 + 5x + 6 = 0$

**Solution:**

**Step 1:** Find two numbers that multiply to 6 and add to 5
- Factors of 6: $(1, 6)$, $(2, 3)$, $(-1, -6)$, $(-2, -3)$
- $2 \times 3 = 6$ ✓
- $2 + 3 = 5$ ✓

**Step 2:** Factorise
$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

**Step 3:** Solve
$$(x + 2)(x + 3) = 0$$

**Step 4:** Apply the zero product rule
$$x + 2 = 0 \quad \text{or} \quad x + 3 = 0$$
$$x = -2 \quad \text{or} \quad x = -3$$

**Answer:** $x = -2$ or $x = -3$

---

**Example 2:** Solve $x^2 - 7x + 12 = 0$

**Solution:**

**Step 1:** Find two numbers that multiply to 12 and add to $-7$
- We need two **negative** numbers (positive product, negative sum)
- $(-3) \times (-4) = 12$ ✓
- $(-3) + (-4) = -7$ ✓

**Step 2:** Factorise and solve
$$(x - 3)(x - 4) = 0$$
$$x - 3 = 0 \quad \text{or} \quad x - 4 = 0$$
$$x = 3 \quad \text{or} \quad x = 4$$

**Answer:** $x = 3$ or $x = 4$

---

**Example 3:** Solve $x^2 - x - 20 = 0$

**Solution:**

**Step 1:** Find two numbers that multiply to $-20$ and add to $-1$
- We need one positive and one negative
- $4 \times (-5) = -20$ ✓
- $4 + (-5) = -1$ ✓

**Step 2:** Factorise and solve
$$(x + 4)(x - 5) = 0$$
$$x = -4 \quad \text{or} \quad x = 5$$

**Answer:** $x = -4$ or $x = 5$

---

### 2.3 Harder Quadratics (When $a \neq 1$)

**Form:** $ax^2 + bx + c$ where $a \neq 1$

**Method – AC Method (Splitting the Middle Term):**
1. Multiply $a \times c$
2. Find two numbers that multiply to $ac$ and add to $b$
3. Split the middle term using these numbers
4. Factorise by grouping

---

#### **Worked Examples**

**Example 4:** Solve $2x^2 + 7x + 3 = 0$

**Solution:**

**Step 1:** Calculate $ac = 2 \times 3 = 6$

**Step 2:** Find two numbers that multiply to 6 and add to 7
- $1 \times 6 = 6$ and $1 + 6 = 7$ ✓

**Step 3:** Split the middle term
$$2x^2 + x + 6x + 3 = 0$$

**Step 4:** Factorise by grouping
$$x(2x + 1) + 3(2x + 1) = 0$$
$$(x + 3)(2x + 1) = 0$$

**Step 5:** Solve
$$x + 3 = 0 \quad \text{or} \quad 2x + 1 = 0$$
$$x = -3 \quad \text{or} \quad x = -\frac{1}{2}$$

**Answer:** $x = -3$ or $x = -\frac{1}{2}$

---

**Example 5:** Solve $3x^2 - 10x - 8 = 0$

**Solution:**

**Step 1:** Calculate $ac = 3 \times (-8) = -24$

**Step 2:** Find two numbers that multiply to $-24$ and add to $-10$
- $(-12) \times 2 = -24$ and $(-12) + 2 = -10$ ✓

**Step 3:** Split and factorise
$$3x^2 - 12x + 2x - 8 = 0$$
$$3x(x - 4) + 2(x - 4) = 0$$
$$(3x + 2)(x - 4) = 0$$

**Step 4:** Solve
$$x = -\frac{2}{3} \quad \text{or} \quad x = 4$$

**Answer:** $x = -\frac{2}{3}$ or $x = 4$

---

### 2.4 Special Cases

#### **Case 1: No Constant Term**

**Form:** $ax^2 + bx = 0$

**Method:** Factorise out $x$

**Example 6:** Solve $x^2 - 6x = 0$

**Solution:**
$$x(x - 6) = 0$$
$$x = 0 \quad \text{or} \quad x = 6$$

**Answer:** $x = 0$ or $x = 6$

>  **Common Mistake:** Don't divide by $x$ – you'll lose the solution $x = 0$!

---

#### **Case 2: Perfect Square**

**Form:** $(x + p)^2 = 0$ – has exactly one solution (repeated root)

**Example 7:** Solve $x^2 + 8x + 16 = 0$

**Solution:**
$$(x + 4)^2 = 0$$
$$x + 4 = 0$$
$$x = -4$$

**Answer:** $x = -4$ (repeated root)

---

#### **Case 3: Difference of Two Squares**

**Form:** $x^2 - a^2 = 0$

**Formula:**
$$x^2 - a^2 = (x - a)(x + a)$$

**Example 8:** Solve $x^2 - 25 = 0$

**Solution:**
$$(x - 5)(x + 5) = 0$$
$$x = 5 \quad \text{or} \quad x = -5$$

**Answer:** $x = 5$ or $x = -5$

---

## PART 2: COMPLETING THE SQUARE

---

## 3. UNDERSTANDING COMPLETING THE SQUARE

### 3.1 What is Completing the Square?

> **KEY DEFINITION**: **Completing the square** is a method of rewriting a quadratic expression in the form $(x + p)^2 + q$.

**Why Complete the Square?**
- Find the turning point (vertex) of a parabola
- Solve quadratic equations
- Find the minimum/maximum value
- Derive the quadratic formula

---

### 3.2 The Completed Square Form

> **KEY FORMULA:**
> $$x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2 + c$$

**Simplified:**
$$x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + \left(c - \frac{b^2}{4}\right)$$

---

### 3.3 Step-by-Step Method (When $a = 1$)

**Method:**
1. Write $x^2 + bx$
2. Add and subtract $\left(\frac{b}{2}\right)^2$
3. Factorise the perfect square
4. Simplify the constant term

---

#### **Worked Examples**

**Example 9:** Complete the square for $x^2 + 6x + 5$

**Solution:**

**Step 1:** Identify $b = 6$, calculate $\frac{b}{2} = 3$

**Step 2:** Add and subtract $3^2 = 9$
$$x^2 + 6x + 9 - 9 + 5$$

**Step 3:** Factorise the perfect square
$$(x + 3)^2 - 9 + 5$$

**Step 4:** Simplify
$$(x + 3)^2 - 4$$

**Answer:** $(x + 3)^2 - 4$

---

**Example 10:** Complete the square for $x^2 - 8x + 1$

**Solution:**

**Step 1:** Identify $b = -8$, calculate $\frac{b}{2} = -4$

**Step 2:** Add and subtract $(-4)^2 = 16$
$$x^2 - 8x + 16 - 16 + 1$$

**Step 3:** Factorise and simplify
$$(x - 4)^2 - 15$$

**Answer:** $(x - 4)^2 - 15$

---

### 3.4 Solving by Completing the Square

**Method:**
1. Complete the square
2. Set equal to zero (or rearrange)
3. Isolate the squared term
4. Take square root of both sides
5. Solve for $x$

---

**Example 11:** Solve $x^2 + 6x + 5 = 0$ by completing the square

**Solution:**

**Step 1:** Complete the square
$$(x + 3)^2 - 4 = 0$$

**Step 2:** Rearrange
$$(x + 3)^2 = 4$$

**Step 3:** Take square root
$$x + 3 = \pm\sqrt{4}$$
$$x + 3 = \pm 2$$

**Step 4:** Solve
$$x + 3 = 2 \quad \text{or} \quad x + 3 = -2$$
$$x = -1 \quad \text{or} \quad x = -5$$

**Answer:** $x = -1$ or $x = -5$

---

**Example 12:** Solve $x^2 - 10x - 3 = 0$ by completing the square

**Solution:**

**Step 1:** Complete the square
$$x^2 - 10x + 25 - 25 - 3 = 0$$
$$(x - 5)^2 - 28 = 0$$

**Step 2:** Rearrange and solve
$$(x - 5)^2 = 28$$
$$x - 5 = \pm\sqrt{28} = \pm 2\sqrt{7}$$
$$x = 5 \pm 2\sqrt{7}$$

**Answer:** $x = 5 + 2\sqrt{7}$ or $x = 5 - 2\sqrt{7}$

---

### 3.5 When $a \neq 1$ – Harder Completing the Square

> **KEY FORMULA:**
> $$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$$

**Method:**
1. Factorise out $a$ from the first two terms
2. Complete the square inside the bracket
3. Multiply through and simplify

---

**Example 13:** Complete the square for $2x^2 + 8x + 3$

**Solution:**

**Step 1:** Factorise out 2
$$2\left(x^2 + 4x\right) + 3$$

**Step 2:** Complete the square inside
$$2\left(x^2 + 4x + 4 - 4\right) + 3$$
$$2\left[(x + 2)^2 - 4\right] + 3$$

**Step 3:** Expand and simplify
$$2(x + 2)^2 - 8 + 3$$
$$2(x + 2)^2 - 5$$

**Answer:** $2(x + 2)^2 - 5$

---

**Example 14:** Write $3x^2 - 12x + 7$ in the form $a(x + p)^2 + q$

**Solution:**

**Step 1:** Factorise out 3
$$3\left(x^2 - 4x\right) + 7$$

**Step 2:** Complete the square
$$3\left(x^2 - 4x + 4 - 4\right) + 7$$
$$3\left[(x - 2)^2 - 4\right] + 7$$

**Step 3:** Expand and simplify
$$3(x - 2)^2 - 12 + 7$$
$$3(x - 2)^2 - 5$$

**Answer:** $3(x - 2)^2 - 5$, so $a = 3$, $p = -2$, $q = -5$

---

### 3.6 Finding the Turning Point

> **KEY INSIGHT:** For $a(x + p)^2 + q$:
> - **Turning point** (vertex) is at $(-p, q)$
> - If $a > 0$: **minimum** at $(-p, q)$
> - If $a < 0$: **maximum** at $(-p, q)$

---

**Example 15:** Find the minimum value of $x^2 - 8x + 3$ and the value of $x$ at which it occurs.

**Solution:**

**Step 1:** Complete the square
$$x^2 - 8x + 16 - 16 + 3 = (x - 4)^2 - 13$$

**Step 2:** Identify turning point
Since $a = 1 > 0$, this is a minimum.
- $x = 4$
- Minimum value = $-13$

**Answer:** Minimum value is $-13$ when $x = 4$

---

## PART 3: THE QUADRATIC FORMULA

---

## 4. THE QUADRATIC FORMULA

### 4.1 When to Use the Quadratic Formula

> **KEY INSIGHT:** Use the quadratic formula when:
> - The quadratic **cannot be easily factorised**
> - The question explicitly asks for it
> - You need exact solutions with surds

---

### 4.2 The Quadratic Formula

> **KEY FORMULA – MUST MEMORISE:**
> $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**For the equation:** $ax^2 + bx + c = 0$

**Derivation:** The formula is derived by completing the square on the general quadratic $ax^2 + bx + c = 0$.

---

### 4.3 Step-by-Step Method

**Method:**
1. Write the equation in standard form $ax^2 + bx + c = 0$
2. Identify $a$, $b$, and $c$
3. Calculate the discriminant $b^2 - 4ac$
4. Substitute into the formula
5. Simplify

---

#### **Worked Examples**

**Example 16:** Solve $x^2 + 5x + 2 = 0$ using the quadratic formula

**Solution:**

**Step 1:** Identify $a = 1$, $b = 5$, $c = 2$

**Step 2:** Calculate discriminant
$$b^2 - 4ac = 25 - 4(1)(2) = 25 - 8 = 17$$

**Step 3:** Substitute into formula
$$x = \frac{-5 \pm \sqrt{17}}{2(1)}$$
$$x = \frac{-5 \pm \sqrt{17}}{2}$$

**Answer:** $x = \frac{-5 + \sqrt{17}}{2}$ or $x = \frac{-5 - \sqrt{17}}{2}$

---

**Example 17:** Solve $2x^2 - 3x - 4 = 0$ giving your answers to 2 decimal places

**Solution:**

**Step 1:** Identify $a = 2$, $b = -3$, $c = -4$

**Step 2:** Calculate discriminant
$$b^2 - 4ac = 9 - 4(2)(-4) = 9 + 32 = 41$$

**Step 3:** Substitute into formula
$$x = \frac{-(-3) \pm \sqrt{41}}{2(2)}$$
$$x = \frac{3 \pm \sqrt{41}}{4}$$

**Step 4:** Calculate
$$\sqrt{41} \approx 6.403$$
$$x = \frac{3 + 6.403}{4} \approx 2.35$$
$$x = \frac{3 - 6.403}{4} \approx -0.85$$

**Answer:** $x \approx 2.35$ or $x \approx -0.85$ (to 2 d.p.)

---

**Example 18:** Solve $x^2 - 6x + 2 = 0$. Leave your answer in surd form.

**Solution:**

**Step 1:** Identify $a = 1$, $b = -6$, $c = 2$

**Step 2:** Calculate discriminant
$$b^2 - 4ac = 36 - 4(1)(2) = 36 - 8 = 28$$

**Step 3:** Simplify the surd
$$\sqrt{28} = \sqrt{4 \times 7} = 2\sqrt{7}$$

**Step 4:** Substitute into formula
$$x = \frac{6 \pm 2\sqrt{7}}{2}$$
$$x = 3 \pm \sqrt{7}$$

**Answer:** $x = 3 + \sqrt{7}$ or $x = 3 - \sqrt{7}$

---

### 4.4 The Discriminant

> **KEY DEFINITION:** The **discriminant** is $\Delta = b^2 - 4ac$

| Discriminant | Number of Real Roots | Nature of Roots |
|--------------|---------------------|-----------------|
| $\Delta > 0$ | 2 distinct real roots | $\frac{-b \pm \sqrt{\Delta}}{2a}$ |
| $\Delta = 0$ | 1 repeated real root | $x = -\frac{b}{2a}$ |
| $\Delta < 0$ | No real roots | Roots are complex |

---

**Example 19:** Find the value of $k$ for which $x^2 + kx + 9 = 0$ has exactly one solution.

**Solution:**

For exactly one solution, discriminant = 0:
$$b^2 - 4ac = 0$$
$$k^2 - 4(1)(9) = 0$$
$$k^2 - 36 = 0$$
$$k^2 = 36$$
$$k = \pm 6$$

**Answer:** $k = 6$ or $k = -6$

---

**Example 20:** Show that the equation $x^2 + 2x + 5 = 0$ has no real solutions.

**Solution:**

Calculate discriminant:
$$b^2 - 4ac = 2^2 - 4(1)(5)$$
$$= 4 - 20$$
$$= -16$$

Since $-16 < 0$, there are no real solutions.

**Answer:** Discriminant is negative, so no real solutions.

---

## PART 4: QUADRATIC INEQUALITIES

---

## 5. SOLVING QUADRATIC INEQUALITIES

### 5.1 What is a Quadratic Inequality?

> **KEY DEFINITION:** A **quadratic inequality** involves a quadratic expression with an inequality sign: $<, >, \leq, \geq$

**Forms:**
- $ax^2 + bx + c > 0$
- $ax^2 + bx + c < 0$
- $ax^2 + bx + c \geq 0$
- $ax^2 + bx + c \leq 0$

---

### 5.2 The Critical Value Method

> **KEY INSIGHT:** The critical values are the roots of the corresponding quadratic equation. The parabola changes sign at these points.

**Method:**
1. Solve the corresponding equation $ax^2 + bx + c = 0$ to find critical values
2. Sketch the parabola (remember: $a > 0$ opens upward, $a < 0$ opens downward)
3. Identify which regions satisfy the inequality

---

### 5.3 Sign Diagram Approach

**Method:**
1. Find the roots (critical values)
2. Draw a number line with these values marked
3. Test a value in each region
4. Write the solution

---

#### **Worked Examples**

**Example 21:** Solve $x^2 - 5x + 6 < 0$

**Solution:**

**Step 1:** Solve the corresponding equation
$$x^2 - 5x + 6 = 0$$
$$(x - 2)(x - 3) = 0$$
$$x = 2 \quad \text{or} \quad x = 3$$

**Step 2:** Draw sign diagram

Since $a = 1 > 0$, the parabola opens upward (U-shaped).

```
    +        |    -     |       +
              2          3
```

**Step 3:** Identify solution region

The expression is **negative** between the roots.

**Answer:** $2 < x < 3$

---

**Example 22:** Solve $x^2 + 2x - 8 \geq 0$

**Solution:**

**Step 1:** Solve the corresponding equation
$$x^2 + 2x - 8 = 0$$
$$(x + 4)(x - 2) = 0$$
$$x = -4 \quad \text{or} \quad x = 2$$

**Step 2:** Draw sign diagram

Since $a = 1 > 0$, parabola opens upward.

```
    +        |    -     |       +
             -4          2
```

**Step 3:** Identify solution region

The expression is $\geq 0$ (positive or zero) outside the roots.

**Answer:** $x \leq -4$ or $x \geq 2$

---

**Example 23:** Solve $-x^2 + 3x + 4 > 0$

**Solution:**

**Step 1:** Solve the corresponding equation
$$-x^2 + 3x + 4 = 0$$
$$-(x^2 - 3x - 4) = 0$$
$$-(x - 4)(x + 1) = 0$$
$$x = 4 \quad \text{or} \quad x = -1$$

**Step 2:** Draw sign diagram

Since $a = -1 < 0$, parabola opens downward (∩-shaped).

```
    -        |    +     |       -
             -1          4
```

**Step 3:** Identify solution region

The expression is **positive** between the roots.

**Answer:** $-1 < x < 4$

---

**Example 24:** Solve $x^2 - 6x + 9 \leq 0$

**Solution:**

**Step 1:** Solve the corresponding equation
$$x^2 - 6x + 9 = 0$$
$$(x - 3)^2 = 0$$
$$x = 3 \text{ (repeated root)}$$

**Step 2:** Analyse

Since it's a perfect square, $(x - 3)^2 \geq 0$ for all $x$.

The only time $(x - 3)^2 = 0$ is when $x = 3$.

**Answer:** $x = 3$

---

### 5.4 Quick Rules for Quadratic Inequalities

> **KEY RULES – MEMORISE:**

For $ax^2 + bx + c > 0$ or $\geq 0$:
- If $a > 0$: Solution is **outside** the roots ($x < \alpha$ or $x > \beta$)
- If $a < 0$: Solution is **between** the roots ($\alpha < x < \beta$)

For $ax^2 + bx + c < 0$ or $\leq 0$:
- If $a > 0$: Solution is **between** the roots ($\alpha < x < \beta$)
- If $a < 0$: Solution is **outside** the roots ($x < \alpha$ or $x > \beta$)

---

## PART 5: WORD PROBLEMS

---

## 6. QUADRATIC WORD PROBLEMS

### 6.1 Problem-Solving Strategy

**Step-by-Step Approach:**
1. **Define variables** – Let $x$ represent the unknown
2. **Form an equation** – Translate the problem into a quadratic equation
3. **Solve** – Use factorising, completing the square, or the quadratic formula
4. **Check** – Verify solutions make sense in context
5. **State the answer** – Include units and reject invalid solutions

---

### 6.2 Types of Word Problems

| Type | Key Concept | Typical Equation |
|------|-------------|------------------|
| **Area problems** | Area = length × width | $x(x + a) = \text{area}$ |
| **Number problems** | Product or sum conditions | $x(a - x) = b$ |
| **Projectile motion** | Height formula | $h = at^2 + bt + c$ |
| **Business/Profit** | Revenue, profit | $P = -ax^2 + bx + c$ |

---

### 6.3 Worked Examples

**Example 25:** The area of a rectangle is 24 cm². The length is 5 cm more than the width. Find the dimensions.

**Solution:**

**Step 1:** Define variables
Let width = $x$ cm
Then length = $(x + 5)$ cm

**Step 2:** Form equation
$$x(x + 5) = 24$$
$$x^2 + 5x - 24 = 0$$

**Step 3:** Solve
$$(x + 8)(x - 3) = 0$$
$$x = -8 \quad \text{or} \quad x = 3$$

**Step 4:** Check validity
Width cannot be negative, so $x = 3$.

**Step 5:** Find length
$$\text{Length} = 3 + 5 = 8 \text{ cm}$$

**Answer:** Width = 3 cm, Length = 8 cm

---

**Example 26:** The product of two consecutive positive integers is 56. Find the integers.

**Solution:**

**Step 1:** Define variables
Let the smaller integer = $x$
Then the larger integer = $x + 1$

**Step 2:** Form equation
$$x(x + 1) = 56$$
$$x^2 + x - 56 = 0$$

**Step 3:** Solve
$$(x + 8)(x - 7) = 0$$
$$x = -8 \quad \text{or} \quad x = 7$$

**Step 4:** Select valid solution
Since integers are positive, $x = 7$.

The integers are 7 and 8.

**Answer:** 7 and 8

---

**Example 27:** A ball is thrown upwards. Its height $h$ metres after $t$ seconds is given by $h = 20t - 5t^2$.

(a) After how many seconds is the ball at a height of 15 metres?
(b) When does the ball hit the ground?
(c) What is the maximum height reached?

**Solution:**

**(a)** Set $h = 15$:
$$15 = 20t - 5t^2$$
$$5t^2 - 20t + 15 = 0$$
$$t^2 - 4t + 3 = 0$$
$$(t - 1)(t - 3) = 0$$
$$t = 1 \quad \text{or} \quad t = 3$$

**Answer:** At $t = 1$ second and $t = 3$ seconds

**(b)** Ball hits ground when $h = 0$:
$$0 = 20t - 5t^2$$
$$5t(4 - t) = 0$$
$$t = 0 \quad \text{or} \quad t = 4$$

At $t = 0$, the ball is thrown. At $t = 4$, it hits ground.

**Answer:** $t = 4$ seconds

**(c)** Complete the square:
$$h = -5t^2 + 20t$$
$$h = -5(t^2 - 4t)$$
$$h = -5(t^2 - 4t + 4 - 4)$$
$$h = -5(t - 2)^2 + 20$$

Maximum when $(t - 2)^2 = 0$, i.e., $t = 2$.

Maximum height = 20 metres.

**Answer:** Maximum height = 20 metres at $t = 2$ seconds

---

**Example 28:** The profit $P$ (in £) made by selling $x$ items is given by $P = -2x^2 + 120x - 400$.

(a) Find the number of items needed to break even ($P = 0$).
(b) Find the number of items that gives maximum profit.
(c) Calculate the maximum profit.

**Solution:**

**(a)** Set $P = 0$:
$$-2x^2 + 120x - 400 = 0$$
$$x^2 - 60x + 200 = 0$$

Using quadratic formula:
$$x = \frac{60 \pm \sqrt{3600 - 800}}{2}$$
$$x = \frac{60 \pm \sqrt{2800}}{2}$$
$$x = \frac{60 \pm 20\sqrt{7}}{2}$$
$$x = 30 \pm 10\sqrt{7}$$

$$x \approx 3.54 \quad \text{or} \quad x \approx 56.46$$

**Answer:** Between 4 and 56 items (approximately)

**(b)** Complete the square:
$$P = -2(x^2 - 60x) - 400$$
$$P = -2(x^2 - 60x + 900) - 400 + 1800$$
$$P = -2(x - 30)^2 + 1400$$

Maximum when $x = 30$.

**Answer:** 30 items

**(c)** Maximum profit when $x = 30$:
$$P = -2(0)^2 + 1400 = £1400$$

**Answer:** £1400

---

## 7. COMMON MISTAKES

>  **EXAM WARNING – TOP ERRORS:**

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Forgetting both solutions | $x^2 = 9$, so $x = 3$ | $x = \pm 3$ |
| Dividing by variable | $x^2 = 3x$ → $x = 3$ only | $x(x - 3) = 0$ → $x = 0$ or $x = 3$ |
| Sign error in formula | $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ | Double-check all signs |
| Wrong inequality direction | $x^2 > 4$ → $x > 2$ | $x < -2$ or $x > 2$ |
| Ignoring context | Accepting negative answers for lengths | Reject invalid solutions |
| Not simplifying surds | $x = \frac{4 \pm \sqrt{12}}{2}$ | $x = 2 \pm \sqrt{3}$ |
| Incomplete square | $x^2 + 6x = (x + 3)^2$ | $x^2 + 6x = (x + 3)^2 - 9$ |
| Forgetting $\pm$ in square root | $\sqrt{x^2} = x$ | $\sqrt{x^2} = \|x\|$ |

---

## 8. SUMMARY OF METHODS

### 8.1 When to Use Each Method

| Method | When to Use | Advantage |
|--------|-------------|-----------|
| **Factorising** | Clean integer solutions | Fastest method |
| **Completing the Square** | Need vertex/turning point | Gives extra information |
| **Quadratic Formula** | Won't factorise easily | Always works |

---

### 8.2 Quick Reference Table

| Task | Method |
|------|--------|
| Solve $ax^2 + bx + c = 0$ | Factorise, complete square, or use formula |
| Find turning point | Complete the square |
| Find minimum/maximum | Complete the square, look at coefficient |
| Solve inequality | Find roots, use sign diagram |
| Prove no real solutions | Show discriminant $< 0$ |
| Find exact solutions | Use surd form (don't decimalise) |

---

## 9. EXAM FOCUS & STRATEGY

### 9.1 Frequently Tested Question Types

| Question Type | Marks | Frequency |
|---------------|-------|-----------|
| Solve by factorising | 2-3 | ⭐⭐⭐⭐⭐ Very High |
| Complete the square | 2-4 | ⭐⭐⭐⭐⭐ Very High |
| Use quadratic formula | 3-4 | ⭐⭐⭐⭐⭐ Very High |
| Quadratic inequality | 3-4 | ⭐⭐⭐⭐ High |
| Find turning point | 2-3 | ⭐⭐⭐⭐ High |
| Discriminant problems | 3-5 | ⭐⭐⭐⭐ High |
| Word problems | 4-6 | ⭐⭐⭐⭐ High |
| Find coefficients from form | 3-4 | ⭐⭐⭐ Medium |

---

### 9.2 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Solve** | Find all values of $x$ that satisfy the equation |
| **Factorise** | Write as product of linear factors only |
| **Complete the square** | Write in form $a(x + p)^2 + q$ |
| **Find** | Calculate the exact value |
| **Show that** | Prove with full algebraic working |
| **Give your answer to...** | Round to specified accuracy |
| **Leave in surd form** | Don't convert to decimals |

---

### 9.3 How to Gain Full Marks

> 🎯 **EXAM STRATEGIES:**

**For Solving Quadratics (3-4 marks):**
1. ✅ Show clear working (don't jump to answer)
2. ✅ State both solutions
3. ✅ Simplify surds fully
4. ✅ Check solutions by substitution

**For Completing the Square (3-4 marks):**
1. ✅ Show the addition/subtraction step
2. ✅ Write in correct form $a(x + p)^2 + q$
3. ✅ Simplify all constants
4. ✅ State turning point if asked

**For Inequalities (3-4 marks):**
1. ✅ Find critical values first
2. ✅ Show sign diagram or sketch
3. ✅ Use correct inequality notation
4. ✅ Check boundary points (include/exclude)

**For Word Problems (4-6 marks):**
1. ✅ Define variables clearly
2. ✅ Show equation formation
3. ✅ Solve with full working
4. ✅ Check validity of solutions
5. ✅ Include units in final answer
6. ✅ Write conclusion in context

---

### 9.4 Typical Mark Scheme

**Solving by Factorising (3 marks):**
| Mark | Criteria |
|------|----------|
| M1 | Correct factorisation |
| M1 | Equating factors to zero |
| A1 | Both correct solutions |

**Completing the Square (4 marks):**
| Mark | Criteria |
|------|----------|
| M1 | Halving $b$ correctly |
| M1 | Adding and subtracting $(b/2)^2$ |
| M1 | Correct factorised form |
| A1 | Fully simplified |

**Quadratic Formula (4 marks):**
| Mark | Criteria |
|------|----------|
| B1 | Correct values of $a$, $b$, $c$ identified |
| M1 | Correct substitution into formula |
| M1 | Correct simplification (including surd) |
| A1 | Both correct solutions |

---

## 10. KEY FORMULAE SUMMARY

### 10.1 Quadratic Formulae

| Formula | Use |
|---------|-----|
| $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ | Solve any quadratic |
| $x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \frac{b^2}{4}$ | Complete the square |
| $\Delta = b^2 - 4ac$ | Discriminant |

### 10.2 Discriminant Analysis

| Discriminant | Roots | Graph |
|--------------|-------|-------|
| $\Delta > 0$ | Two distinct real roots | Cuts x-axis twice |
| $\Delta = 0$ | One repeated root | Touches x-axis |
| $\Delta < 0$ | No real roots | Doesn't meet x-axis |

### 10.3 Inequality Quick Rules

| Inequality | Solution (for $a > 0$) |
|------------|------------------------|
| $ax^2 + bx + c > 0$ | $x < \alpha$ or $x > \beta$ |
| $ax^2 + bx + c < 0$ | $\alpha < x < \beta$ |
| $ax^2 + bx + c \geq 0$ | $x \leq \alpha$ or $x \geq \beta$ |
| $ax^2 + bx + c \leq 0$ | $\alpha \leq x \leq \beta$ |

---

## 11. PRACTICE TIPS FOR A* STUDENTS

### 11.1 Quick Self-Check Questions

Before submitting, ask yourself:
1. Have I found ALL solutions?
2. Have I included $\pm$ when taking square roots?
3. Is my surd simplified fully?
4. Have I checked solutions in the original equation?
5. Does my answer make sense in context?

### 11.2 Common Exam Traps to Avoid

1. **Forgetting the negative solution** when $x^2 = k$
2. **Dividing by $x$** instead of factorising out $x$
3. **Sign errors** in the quadratic formula
4. **Wrong inequality direction** – always test a point
5. **Accepting invalid solutions** (negative lengths, etc.)
6. **Not simplifying surds** – $\sqrt{12} = 2\sqrt{3}$

### 11.3 Verification Methods

- **Substitution check:** Put solutions back into original equation
- **Sum/product check:** For $ax^2 + bx + c = 0$: sum of roots $= -\frac{b}{a}$, product $= \frac{c}{a}$
- **Graphical check:** Sketch the parabola to verify number of roots

---

## 📌 FINAL SUMMARY

| Topic | Key Skills | Key Methods |
|-------|------------|-------------|
| **Factorising** | Find two numbers, split middle term | $(x + p)(x + q) = 0$ |
| **Completing Square** | Find vertex, minimum/maximum | $a\left(x + \frac{b}{2a}\right)^2 + ...$ |
| **Quadratic Formula** | Always works | $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| **Inequalities** | Find roots, use sign diagram | Test a point in each region |
| **Word Problems** | Define variables, form equation, check validity | Context is key |

---

*These notes are designed for Pearson Edexcel IGCSE Mathematics students aiming for A* grades. For best results, practise with past papers and use these notes alongside your textbook.*
