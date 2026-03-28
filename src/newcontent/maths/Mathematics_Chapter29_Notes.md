# Chapter 29: Graphs 9 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Higher Tier)

---

# Topic Overview

This unit covers essential calculus concepts for the Higher Tier specification:

1. **Gradient of a Function** - Finding gradients algebraically using differentiation
2. **Differentiation** - Rules for finding derivatives of polynomial functions
3. **Rate of Change** - Applications of differentiation to real-world problems
4. **Stationary Points** - Finding and classifying maxima, minima, and points of inflection
5. **Motion Graphs** - Displacement, velocity, and acceleration relationships

---

# Part 1: Gradient of a Function

## 1.1 From Gradient of a Curve to Differentiation

### The Problem with Drawing Tangents

In Unit 9, we learned to find the gradient of a curve by **drawing a tangent** and calculating its gradient. This method has limitations:

- **Accuracy depends on drawing skill**
- **Time-consuming** in exams
- **Cannot find exact values**

**Differentiation** provides an **algebraic method** to find the exact gradient at any point on a curve.

---

## 1.2 The Concept of a Derivative

### Definition

The **derivative** of a function $f(x)$ gives us a formula for the gradient at any point on the curve $y = f(x)$.

$$\text{Gradient at point } x = f'(x)$$

where $f'(x)$ is the **derivative** of $f(x)$, also written as $\frac{dy}{dx}$.

### Notation

| Notation | Meaning | Read as |
|----------|---------|---------|
| $f'(x)$ | Derivative of $f(x)$ | "f prime of x" |
| $\frac{dy}{dx}$ | Derivative of $y$ with respect to $x$ | "dy by dx" |
| $y'$ | Derivative of $y$ | "y prime" |

> **Key Insight:** The derivative tells us how quickly $y$ is changing with respect to $x$. It gives us the **rate of change** and the **gradient of the tangent** at any point.

---

## 1.3 Understanding the Gradient Function

### Example: The Function $y = x^2$

Consider the curve $y = x^2$. By drawing tangents at various points, we can find gradients:

| Point $x$ | Point $y$ | Gradient (from tangent) |
|-----------|-----------|------------------------|
| $x = 1$ | $y = 1$ | $2$ |
| $x = 2$ | $y = 4$ | $4$ |
| $x = 3$ | $y = 9$ | $6$ |
| $x = -1$ | $y = 1$ | $-2$ |

**Pattern:** The gradient at point $x$ is always $2x$.

Therefore, the derivative of $y = x^2$ is $\frac{dy}{dx} = 2x$.

**Verification:**
- At $x = 1$: gradient $= 2(1) = 2$ ✓
- At $x = 3$: gradient $= 2(3) = 6$ ✓
- At $x = -1$: gradient $= 2(-1) = -2$ ✓

---

### Worked Example 1

**Question:** Find the gradient of the curve $y = x^2$ at the point where $x = 4$.

**Solution:**

**Step 1:** Find the derivative.
$$\frac{dy}{dx} = 2x$$

**Step 2:** Substitute $x = 4$.
$$\text{Gradient} = 2 \times 4 = 8$$

**Answer:** The gradient at $x = 4$ is **8**.

---

## 1.4 Interpretation of the Derivative

### What Does the Derivative Tell Us?

| Derivative Value | Interpretation |
|------------------|----------------|
| $f'(x) > 0$ | Function is **increasing** at this point |
| $f'(x) < 0$ | Function is **decreasing** at this point |
| $f'(x) = 0$ | Function is **stationary** (turning point) |
| $f'(x) = 3$ | Gradient of tangent is 3 (steep uphill) |
| $f'(x) = -2$ | Gradient of tangent is -2 (steep downhill) |

### Worked Example 2

**Question:** The derivative of a function is $f'(x) = 3x^2 - 12$. Determine whether the function is increasing or decreasing at $x = 1$ and $x = 3$.

**Solution:**

**At $x = 1$:**
$$f'(1) = 3(1)^2 - 12 = 3 - 12 = -9$$

Since $f'(1) = -9 < 0$, the function is **decreasing** at $x = 1$.

**At $x = 3$:**
$$f'(3) = 3(3)^2 - 12 = 27 - 12 = 15$$

Since $f'(3) = 15 > 0$, the function is **increasing** at $x = 3$.

---

# Part 2: Differentiation

## 2.1 The Power Rule

### The Fundamental Rule

The **power rule** is the most important differentiation rule for polynomials.

$$\boxed{\text{If } y = x^n, \text{ then } \frac{dy}{dx} = nx^{n-1}}$$

**In words:** Multiply by the power, then reduce the power by 1.

### Why Does This Work?

For $y = x^n$:
- We multiply by the original power $n$
- We subtract 1 from the power to get $n-1$

---

### Worked Example 3

**Question:** Differentiate $y = x^5$.

**Solution:**

**Step 1:** Identify the power: $n = 5$

**Step 2:** Apply the power rule:
$$\frac{dy}{dx} = 5x^{5-1} = 5x^4$$

**Answer:** $\frac{dy}{dx} = 5x^4$

---

### Worked Example 4

**Question:** Differentiate $y = x^3$.

**Solution:**

$$\frac{dy}{dx} = 3x^{3-1} = 3x^2$$

**Answer:** $\frac{dy}{dx} = 3x^2$

---

## 2.2 Differentiating Constants and Linear Terms

### Constants

**Rule:** The derivative of a constant is **zero**.

$$\text{If } y = c \text{ (constant), then } \frac{dy}{dx} = 0$$

**Why?** A constant has no rate of change - it doesn't change at all! The graph $y = c$ is a horizontal line with gradient 0.

### Linear Terms

**Rule:** The derivative of $y = ax$ is $a$.

$$\text{If } y = ax, \text{ then } \frac{dy}{dx} = a$$

This makes sense because $y = ax$ is a straight line with gradient $a$.

---

### Worked Example 5

**Question:** Differentiate $y = x$.

**Solution:**

Using the power rule: $x = x^1$

$$\frac{dy}{dx} = 1 \cdot x^{1-1} = 1 \cdot x^0 = 1 \cdot 1 = 1$$

**Answer:** $\frac{dy}{dx} = 1$

> **Note:** This confirms that the line $y = x$ has gradient 1, which we already know!

---

## 2.3 Differentiating Coefficients

### The Scalar Multiplication Rule

**Rule:** Constants can be factored out when differentiating.

$$\text{If } y = a \cdot f(x), \text{ then } \frac{dy}{dx} = a \cdot f'(x)$$

This means we can differentiate the "main part" and then multiply by the coefficient.

---

### Worked Example 6

**Question:** Differentiate $y = 5x^4$.

**Solution:**

**Method 1:** Factor out the 5
$$\frac{dy}{dx} = 5 \times \frac{d}{dx}(x^4) = 5 \times 4x^3 = 20x^3$$

**Method 2:** Apply the power rule directly
- Multiply by power: $5 \times 4 = 20$
- Reduce power: $4 - 1 = 3$
$$\frac{dy}{dx} = 20x^3$$

**Answer:** $\frac{dy}{dx} = 20x^3$

---

## 2.4 Differentiating Polynomials

### The Sum/Difference Rule

**Rule:** Differentiate each term separately.

$$\text{If } y = f(x) + g(x), \text{ then } \frac{dy}{dx} = f'(x) + g'(x)$$

$$\text{If } y = f(x) - g(x), \text{ then } \frac{dy}{dx} = f'(x) - g'(x)$$

---

### Worked Example 7

**Question:** Differentiate $y = x^3 + 2x^2 - 5x + 7$.

**Solution:**

Differentiate each term:

| Term | Derivative | Working |
|------|------------|---------|
| $x^3$ | $3x^2$ | $3x^{3-1}$ |
| $2x^2$ | $4x$ | $2 \times 2x^{2-1} = 4x$ |
| $-5x$ | $-5$ | $-5 \times x^0 = -5$ |
| $+7$ | $0$ | Derivative of constant = 0 |

$$\frac{dy}{dx} = 3x^2 + 4x - 5$$

**Answer:** $\frac{dy}{dx} = 3x^2 + 4x - 5$

---

### Worked Example 8

**Question:** Find the gradient of the curve $y = 2x^3 - 6x^2 + 4x - 1$ at the point where $x = 2$.

**Solution:**

**Step 1:** Find the derivative.
$$\frac{dy}{dx} = 2(3x^2) - 6(2x) + 4(1) - 0 = 6x^2 - 12x + 4$$

**Step 2:** Substitute $x = 2$.
$$\text{Gradient} = 6(2)^2 - 12(2) + 4$$
$$= 6(4) - 24 + 4$$
$$= 24 - 24 + 4$$
$$= 4$$

**Answer:** The gradient at $x = 2$ is **4**.

---

## 2.5 Negative and Fractional Powers

### Negative Powers

Remember: $x^{-n} = \frac{1}{x^n}$

The power rule still applies!

---

### Worked Example 9

**Question:** Differentiate $y = \frac{1}{x^2}$.

**Solution:**

**Step 1:** Rewrite with negative power.
$$y = \frac{1}{x^2} = x^{-2}$$

**Step 2:** Apply the power rule.
$$\frac{dy}{dx} = -2x^{-2-1} = -2x^{-3} = -\frac{2}{x^3}$$

**Answer:** $\frac{dy}{dx} = -\frac{2}{x^3}$

---

### Fractional Powers (Higher Tier Extension)

Remember: $\sqrt{x} = x^{1/2}$

---

### Worked Example 10

**Question:** Differentiate $y = \sqrt{x}$.

**Solution:**

**Step 1:** Rewrite with fractional power.
$$y = \sqrt{x} = x^{1/2}$$

**Step 2:** Apply the power rule.
$$\frac{dy}{dx} = \frac{1}{2}x^{1/2 - 1} = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$$

**Answer:** $\frac{dy}{dx} = \frac{1}{2\sqrt{x}}$

---

## 2.6 Complete Differentiation Rules Summary

| Function $y = $ | Derivative $\frac{dy}{dx} = $ |
|-----------------|------------------------------|
| $c$ (constant) | $0$ |
| $x$ | $1$ |
| $x^n$ | $nx^{n-1}$ |
| $ax^n$ | $anx^{n-1}$ |
| $ax + b$ | $a$ |
| $ax^2 + bx + c$ | $2ax + b$ |
| $\frac{1}{x} = x^{-1}$ | $-x^{-2} = -\frac{1}{x^2}$ |
| $\frac{1}{x^n} = x^{-n}$ | $-nx^{-n-1} = -\frac{n}{x^{n+1}}$ |

---

# Part 3: Rate of Change

## 3.1 Rate of Change in Context

### Definition

**Rate of change** describes how one quantity changes with respect to another. The derivative gives us the **instantaneous rate of change**.

$$\text{Rate of change} = \frac{dy}{dx}$$

### Real-World Interpretations

| Context | $\frac{dy}{dx}$ represents |
|---------|---------------------------|
| Distance-time | **Speed** (rate of change of distance) |
| Height-time | **Rate of filling/emptying** |
| Temperature-time | **Rate of heating/cooling** |
| Cost-time | **Rate of cost increase** |
| Volume-time | **Flow rate** |

---

## 3.2 Finding Rate of Change at a Point

### Worked Example 11

**Question:** The height $h$ metres of a plant after $t$ weeks is given by $h = 0.5t^2 + 2t + 5$. Find the rate of growth of the plant after 4 weeks.

**Solution:**

**Step 1:** Understand the problem.
- We need to find $\frac{dh}{dt}$ (rate of change of height with time)
- This represents the **growth rate** in metres per week

**Step 2:** Differentiate $h$ with respect to $t$.
$$\frac{dh}{dt} = 0.5(2t) + 2(1) + 0 = t + 2$$

**Step 3:** Substitute $t = 4$.
$$\frac{dh}{dt} = 4 + 2 = 6$$

**Answer:** The plant is growing at **6 metres per week** after 4 weeks.

---

## 3.3 Finding When Rate of Change Equals a Value

### Worked Example 12

**Question:** The volume $V$ cm³ of water in a tank after $t$ minutes is given by $V = t^3 - 6t^2 + 15t$. Find the time when the rate of change of volume equals 3 cm³/min.

**Solution:**

**Step 1:** Find the derivative (rate of change).
$$\frac{dV}{dt} = 3t^2 - 12t + 15$$

**Step 2:** Set the rate equal to 3.
$$3t^2 - 12t + 15 = 3$$

**Step 3:** Solve for $t$.
$$3t^2 - 12t + 12 = 0$$
$$t^2 - 4t + 4 = 0$$
$$(t - 2)^2 = 0$$
$$t = 2$$

**Answer:** The rate of change is 3 cm³/min after **2 minutes**.

---

## 3.4 Positive and Negative Rates of Change

### Interpretation

| Rate of Change | Interpretation |
|----------------|----------------|
| $\frac{dy}{dx} > 0$ | Quantity is **increasing** |
| $\frac{dy}{dx} < 0$ | Quantity is **decreasing** |
| $\frac{dy}{dx} = 0$ | Quantity is **stationary** (not changing) |

---

### Worked Example 13

**Question:** The temperature $T$ °C of a cooling object after $t$ minutes is given by $T = 80 + 20e^{-0.1t}$. Given that $\frac{dT}{dt} = -2e^{-0.1t}$, explain whether the temperature is increasing or decreasing.

**Solution:**

**Analysis:**
- $e^{-0.1t} > 0$ for all $t$
- Therefore, $-2e^{-0.1t} < 0$ for all $t$

**Answer:** Since $\frac{dT}{dt} < 0$ (negative), the temperature is **decreasing** at all times. This makes sense - the object is cooling down.

---

# Part 4: Stationary Points

## 4.1 What are Stationary Points?

### Definition

A **stationary point** is a point on a curve where the gradient is **zero**.

$$\text{Stationary point: } \frac{dy}{dx} = 0$$

At a stationary point, the tangent is **horizontal**.

### Types of Stationary Points

1. **Local Maximum** - The highest point in the local area
2. **Local Minimum** - The lowest point in the local area
3. **Point of Inflection** - Neither a maximum nor minimum; the curve flattens but continues in the same direction

---

## 4.2 Finding Stationary Points

### Method

**Step 1:** Find $\frac{dy}{dx}$

**Step 2:** Set $\frac{dy}{dx} = 0$ and solve for $x$

**Step 3:** Substitute $x$ back into the original equation to find $y$

---

### Worked Example 14

**Question:** Find the coordinates of the stationary point on the curve $y = x^2 - 4x + 5$.

**Solution:**

**Step 1:** Find the derivative.
$$\frac{dy}{dx} = 2x - 4$$

**Step 2:** Set derivative equal to zero.
$$2x - 4 = 0$$
$$2x = 4$$
$$x = 2$$

**Step 3:** Find the $y$-coordinate.
$$y = (2)^2 - 4(2) + 5 = 4 - 8 + 5 = 1$$

**Answer:** The stationary point is at **$(2, 1)$**.

---

### Worked Example 15

**Question:** Find the stationary points on the curve $y = x^3 - 3x^2 - 9x + 5$.

**Solution:**

**Step 1:** Find the derivative.
$$\frac{dy}{dx} = 3x^2 - 6x - 9$$

**Step 2:** Set derivative equal to zero and factorise.
$$3x^2 - 6x - 9 = 0$$
$$x^2 - 2x - 3 = 0$$
$$(x - 3)(x + 1) = 0$$
$$x = 3 \text{ or } x = -1$$

**Step 3:** Find the $y$-coordinates.

When $x = 3$:
$$y = (3)^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$$

When $x = -1$:
$$y = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$$

**Answer:** Stationary points are **$(3, -22)$** and **$(-1, 10)$**.

---

## 4.3 Classifying Stationary Points

### Method 1: Using the Second Derivative

The **second derivative** $\frac{d^2y}{dx^2}$ or $f''(x)$ tells us about the curvature of the graph.

| Second Derivative | Type of Stationary Point |
|-------------------|-------------------------|
| $\frac{d^2y}{dx^2} > 0$ | **Minimum** (curve curves upward) |
| $\frac{d^2y}{dx^2} < 0$ | **Maximum** (curve curves downward) |
| $\frac{d^2y}{dx^2} = 0$ | **Inconclusive** - could be point of inflection |

### How to Find the Second Derivative

Simply differentiate the first derivative again:

$$\text{If } y = x^3, \text{ then } \frac{dy}{dx} = 3x^2 \text{ and } \frac{d^2y}{dx^2} = 6x$$

---

### Worked Example 16

**Question:** For the curve $y = x^3 - 6x^2 + 9x + 2$, find and classify the stationary points.

**Solution:**

**Step 1:** Find the first derivative.
$$\frac{dy}{dx} = 3x^2 - 12x + 9$$

**Step 2:** Find stationary points.
$$3x^2 - 12x + 9 = 0$$
$$x^2 - 4x + 3 = 0$$
$$(x - 1)(x - 3) = 0$$
$$x = 1 \text{ or } x = 3$$

**Step 3:** Find $y$-coordinates.
- When $x = 1$: $y = 1 - 6 + 9 + 2 = 6$
- When $x = 3$: $y = 27 - 54 + 27 + 2 = 2$

**Step 4:** Find the second derivative.
$$\frac{d^2y}{dx^2} = 6x - 12$$

**Step 5:** Classify each point.

At $x = 1$:
$$\frac{d^2y}{dx^2} = 6(1) - 12 = -6 < 0 \Rightarrow \textbf{Maximum}$$

At $x = 3$:
$$\frac{d^2y}{dx^2} = 6(3) - 12 = 6 > 0 \Rightarrow \textbf{Minimum}$$

**Answer:**
- **Maximum at $(1, 6)$**
- **Minimum at $(3, 2)$**

---

### Method 2: Using Values Either Side (Sign Testing)

If the second derivative test is inconclusive, use values either side of the stationary point.

| Pattern of $\frac{dy}{dx}$ | Type of Point |
|---------------------------|---------------|
| Positive → Zero → Positive | **Minimum** |
| Negative → Zero → Negative | **Maximum** |
| Positive → Zero → Positive or Negative → Zero → Negative | **Point of Inflection** |

---

### Worked Example 17

**Question:** Determine the nature of the stationary point on $y = x^3$ at $x = 0$.

**Solution:**

**Step 1:** Find the derivatives.
$$\frac{dy}{dx} = 3x^2, \quad \frac{d^2y}{dx^2} = 6x$$

**Step 2:** At $x = 0$: $\frac{d^2y}{dx^2} = 0$ (inconclusive)

**Step 3:** Test values either side.

| $x$ | $\frac{dy}{dx} = 3x^2$ | Sign |
|-----|----------------------|------|
| $-1$ | $3(-1)^2 = 3$ | Positive |
| $0$ | $0$ | Zero |
| $1$ | $3(1)^2 = 3$ | Positive |

**Step 4:** Interpret the pattern.
- Positive → Zero → Positive

But the gradient is **always non-negative** on both sides. This is a **point of inflection**.

**Answer:** The point $(0, 0)$ is a **point of inflection**.

---

## 4.4 Sketching Curves Using Stationary Points

### Key Features to Show

When sketching a curve, identify and label:
1. **Stationary points** (maxima and minima)
2. **$y$-intercept** (where $x = 0$)
3. **$x$-intercepts** (where $y = 0$), if easy to find
4. **End behavior** (what happens as $x \to \pm\infty$)

---

### Worked Example 18

**Question:** Sketch the curve $y = x^3 - 3x + 2$, showing all stationary points and intercepts.

**Solution:**

**Step 1:** Find stationary points.
$$\frac{dy}{dx} = 3x^2 - 3 = 0$$
$$x^2 = 1 \Rightarrow x = \pm 1$$

- When $x = 1$: $y = 1 - 3 + 2 = 0$
- When $x = -1$: $y = -1 + 3 + 2 = 4$

**Step 2:** Classify using second derivative.
$$\frac{d^2y}{dx^2} = 6x$$

- At $x = 1$: $\frac{d^2y}{dx^2} = 6 > 0 \Rightarrow$ **Minimum at $(1, 0)$**
- At $x = -1$: $\frac{d^2y}{dx^2} = -6 < 0 \Rightarrow$ **Maximum at $(-1, 4)$**

**Step 3:** Find intercepts.
- $y$-intercept: $x = 0 \Rightarrow y = 2$
- $x$-intercept: $y = 0 \Rightarrow x^3 - 3x + 2 = 0$. We already know $x = 1$ is a root.
  - Factorising: $(x - 1)(x^2 + x - 2) = (x - 1)^2(x + 2) = 0$
  - $x = 1$ (double root - touches x-axis) or $x = -2$

**Step 4:** Sketch the curve.
- Curve passes through $(-2, 0)$, touches x-axis at $(1, 0)$
- Maximum at $(-1, 4)$, Minimum at $(1, 0)$
- $y$-intercept at $(0, 2)$
- As $x \to \infty$, $y \to \infty$; as $x \to -\infty$, $y \to -\infty$

---

# Part 5: Motion Graphs

## 5.1 Displacement, Velocity, and Acceleration

### Definitions

| Term | Definition | Symbol | Units (SI) |
|------|------------|--------|------------|
| **Displacement** | Distance from a fixed point (with direction) | $s$ | metres (m) |
| **Velocity** | Rate of change of displacement | $v$ | m/s |
| **Acceleration** | Rate of change of velocity | $a$ | m/s² |

### The Key Relationships

$$\text{Velocity} = \frac{ds}{dt}$$

$$\text{Acceleration} = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

> **Key Insight:** Velocity is the derivative of displacement, and acceleration is the derivative of velocity (or the second derivative of displacement).

---

## 5.2 Finding Velocity from Displacement

### Worked Example 19

**Question:** The displacement $s$ metres of a particle after $t$ seconds is given by $s = 2t^3 - 9t^2 + 12t$. Find:
(a) The velocity at time $t$
(b) The velocity when $t = 1$
(c) The time(s) when the particle is at rest

**Solution:**

**(a)** Find velocity by differentiating displacement.
$$v = \frac{ds}{dt} = 6t^2 - 18t + 12$$

**Answer:** $v = 6t^2 - 18t + 12$

**(b)** Substitute $t = 1$.
$$v = 6(1)^2 - 18(1) + 12 = 6 - 18 + 12 = 0$$

**Answer:** Velocity at $t = 1$ is **0 m/s** (particle is at rest).

**(c)** Particle is at rest when $v = 0$.
$$6t^2 - 18t + 12 = 0$$
$$t^2 - 3t + 2 = 0$$
$$(t - 1)(t - 2) = 0$$
$$t = 1 \text{ or } t = 2$$

**Answer:** The particle is at rest at **$t = 1$ s and $t = 2$ s**.

---

## 5.3 Finding Acceleration

### Worked Example 20

**Question:** For the particle with displacement $s = 2t^3 - 9t^2 + 12t$, find:
(a) The acceleration at time $t$
(b) The acceleration when $t = 3$
(c) The time when acceleration is zero

**Solution:**

**(a)** Find acceleration by differentiating velocity.
$$a = \frac{dv}{dt} = \frac{d}{dt}(6t^2 - 18t + 12) = 12t - 18$$

**Answer:** $a = 12t - 18$ m/s²

**(b)** Substitute $t = 3$.
$$a = 12(3) - 18 = 36 - 18 = 18$$

**Answer:** Acceleration at $t = 3$ is **18 m/s²**.

**(c)** Set acceleration equal to zero.
$$12t - 18 = 0$$
$$t = \frac{18}{12} = 1.5$$

**Answer:** Acceleration is zero at **$t = 1.5$ s**.

---

## 5.4 Interpreting Motion Graphs

### Displacement-Time Graphs

| Feature | Interpretation |
|---------|----------------|
| **Gradient** | Velocity |
| **Positive gradient** | Moving in positive direction |
| **Negative gradient** | Moving in negative direction |
| **Zero gradient (horizontal)** | At rest |
| **Curve** | Velocity is changing (acceleration) |
| **Steepness** | Speed (magnitude of velocity) |

### Velocity-Time Graphs

| Feature | Interpretation |
|---------|----------------|
| **Gradient** | Acceleration |
| **Positive gradient** | Accelerating |
| **Negative gradient** | Decelerating |
| **Zero gradient (horizontal)** | Constant velocity |
| **Area under graph** | Displacement |
| **Above x-axis** | Positive velocity |
| **Below x-axis** | Negative velocity |

### Acceleration-Time Graphs

| Feature | Interpretation |
|---------|----------------|
| **Area under graph** | Change in velocity |
| **Zero (horizontal at y=0)** | Constant velocity |

---

## 5.5 Determining Direction of Motion

### Worked Example 21

**Question:** A particle moves with displacement $s = t^3 - 6t^2 + 9t$ metres. Find when the particle is:
(a) Moving in the positive direction
(b) Moving in the negative direction
(c) At rest

**Solution:**

**Step 1:** Find velocity.
$$v = \frac{ds}{dt} = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)$$

**Step 2:** Find when at rest ($v = 0$).
$$t = 1 \text{ or } t = 3$$

**Step 3:** Test intervals for sign of $v$.

| Interval | Test point | $v = 3(t-1)(t-3)$ | Sign of $v$ |
|----------|-----------|-------------------|-------------|
| $t < 1$ | $t = 0$ | $3(-1)(-3) = 9$ | Positive |
| $1 < t < 3$ | $t = 2$ | $3(1)(-1) = -3$ | Negative |
| $t > 3$ | $t = 4$ | $3(3)(1) = 9$ | Positive |

**Answers:**
- **(a)** Moving in positive direction when **$t < 1$ or $t > 3$**
- **(b)** Moving in negative direction when **$1 < t < 3$**
- **(c)** At rest when **$t = 1$ or $t = 3$**

---

## 5.6 Finding Maximum/Minimum Displacement and Velocity

### Worked Example 22

**Question:** A particle moves with displacement $s = t^3 - 6t^2 + 9t + 1$. Find the maximum displacement.

**Solution:**

**Step 1:** Find velocity and set equal to zero (stationary points of displacement).
$$v = 3t^2 - 12t + 9 = 0$$
$$t^2 - 4t + 3 = 0$$
$$(t - 1)(t - 3) = 0$$
$$t = 1 \text{ or } t = 3$$

**Step 2:** Classify using acceleration.
$$a = 6t - 12$$

At $t = 1$: $a = 6 - 12 = -6 < 0 \Rightarrow$ **Maximum**
At $t = 3$: $a = 18 - 12 = 6 > 0 \Rightarrow$ **Minimum**

**Step 3:** Find maximum displacement.
$$s(1) = 1 - 6 + 9 + 1 = 5$$

**Answer:** Maximum displacement is **5 metres** (occurs at $t = 1$).

---

## 5.7 Complete Motion Summary Table

| Quantity | From | To find | Operation |
|----------|------|---------|-----------|
| Velocity | Displacement | Differentiate | $v = \frac{ds}{dt}$ |
| Acceleration | Velocity | Differentiate | $a = \frac{dv}{dt}$ |
| Acceleration | Displacement | Differentiate twice | $a = \frac{d^2s}{dt^2}$ |
| Displacement | Velocity | Integrate/area under $v$-$t$ graph | — |
| Velocity | Acceleration | Integrate/area under $a$-$t$ graph | — |

---

# Exam Focus & Strategy

## Frequently Tested Question Types

### Type 1: Basic Differentiation
- Differentiate polynomial functions
- Find the gradient at a specific point
- Identify increasing/decreasing regions

### Type 2: Stationary Points
- Find coordinates of stationary points
- Classify as maximum or minimum
- Sketch curves showing stationary points

### Type 3: Rate of Change
- Interpret derivatives in real-world contexts
- Find when rate equals a specific value
- Determine whether quantity is increasing/decreasing

### Type 4: Motion Problems
- Find velocity and acceleration from displacement
- Determine when particle is at rest
- Find direction of motion
- Find maximum/minimum displacement or velocity

---

## Command Word Guidance

| Command Word | What to Do |
|-------------|------------|
| **Differentiate** | Find the derivative; no need to evaluate |
| **Find** | Calculate a numerical answer |
| **Determine** | Find with clear justification |
| **Classify** | State whether maximum, minimum, or inflection |
| **Sketch** | Draw showing key features (stationary points, intercepts) |
| **Explain** | Give reasons for your answer |

---

## How to Gain Full Marks

### For Differentiation Questions
1. ✅ Show all steps of differentiation
2. ✅ Simplify your answer fully
3. ✅ Use correct notation ($\frac{dy}{dx}$ or $f'(x)$)

### For Stationary Point Questions
1. ✅ Set derivative = 0 and solve
2. ✅ Find BOTH coordinates of the point
3. ✅ Use second derivative (preferred) or sign test to classify
4. ✅ State clearly: "maximum at $(x, y)$" or "minimum at $(x, y)$"

### For Motion Questions
1. ✅ Show all differentiation steps
2. ✅ Include units in your final answer (m/s, m/s²)
3. ✅ Interpret the sign correctly (positive/negative direction)
4. ✅ For "at rest" questions, solve $v = 0$

---

## Common Mistakes to Avoid

| ❌ Common Error | ✅ Correct Approach |
|----------------|---------------------|
| Differentiating constants incorrectly | Derivative of constant = 0 |
| Forgetting to find $y$-coordinate | Always find both $x$ and $y$ for stationary points |
| Wrong classification of stationary points | Use $\frac{d^2y}{dx^2}$ or sign test |
| Confusing velocity and speed | Velocity has direction; speed = $|v|$ |
| Missing units in motion problems | Always include m/s, m/s², etc. |
| Not checking all stationary points | Some curves have multiple maxima/minima |

---

## Key Formulas Summary

$$\boxed{\frac{d}{dx}(x^n) = nx^{n-1}}$$

$$\boxed{\frac{d}{dx}(ax^n) = anx^{n-1}}$$

$$\boxed{\text{Stationary point: } \frac{dy}{dx} = 0}$$

$$\boxed{\frac{d^2y}{dx^2} > 0 \Rightarrow \text{Minimum}, \quad \frac{d^2y}{dx^2} < 0 \Rightarrow \text{Maximum}}$$

$$\boxed{v = \frac{ds}{dt}, \quad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}}$$

$$\boxed{\text{At rest: } v = 0}$$

---

## Quick Problem-Solving Flowcharts

### Finding Stationary Points:
```
1. Find dy/dx
2. Set dy/dx = 0
3. Solve for x
4. Find y for each x
5. Find d²y/dx²
6. Substitute x into d²y/dx²
7. If > 0 → Minimum; If < 0 → Maximum
```

### Motion Problems:
```
1. Given s(t), find v = ds/dt
2. Given v(t), find a = dv/dt
3. "At rest" → set v = 0
4. "Constant velocity" → set a = 0
5. "Maximum velocity" → find stationary points of v
```

---

*End of Notes*
