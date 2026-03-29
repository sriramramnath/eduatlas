# Chapter 26: Graphs 6 - Concise Synopsis
## Detailed Notes for Pearson Edexcel IGCSE Mathematics

---

# PART A: CUBIC GRAPHS

## 1. INTRODUCTION TO CUBIC FUNCTIONS

### 1.1 Definition
A **cubic function** is any function of the form:

$$f(x) = ax^3 + bx^2 + cx + d$$

where $a$, $b$, $c$, and $d$ are constants and $a \neq 0$.

> **Key Point:** The highest power of $x$ is 3, which determines the fundamental shape of the graph.

### 1.2 The Basic Cubic Graph: $y = x^3$

The simplest cubic function $y = x^3$ has the following properties:

| x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|---|----|----|----|---|---|---|---|
| y | -27 | -8 | -1 | 0 | 1 | 8 | 27 |

**Key Features:**
- Passes through the **origin** (0, 0)
- **Symmetric about the origin** (point symmetry / rotational symmetry of order 2)
- **S-shaped curve**
- As $x \to +\infty$, $y \to +\infty$
- As $x \to -\infty$, $y \to -\infty$
- Has a **point of inflection** at the origin

---

## 2. TRANSFORMATIONS OF CUBIC GRAPHS

### 2.1 Vertical Translation: $y = x^3 + k$

| Transformation | Effect |
|----------------|--------|
| $y = x^3 + k$ | Shift UP by $k$ units |
| $y = x^3 - k$ | Shift DOWN by $k$ units |

> **📌 Example:** $y = x^3 + 2$ passes through (0, 2) instead of the origin.

### 2.2 Horizontal Translation: $y = (x - h)^3$

| Transformation | Effect |
|----------------|--------|
| $y = (x - h)^3$ | Shift RIGHT by $h$ units |
| $y = (x + h)^3$ | Shift LEFT by $h$ units |

> ** Common Mistake:** Students often confuse the direction. Remember: $(x - 3)^3$ shifts RIGHT, $(x + 3)^3$ shifts LEFT.

### 2.3 Vertical Stretch: $y = ax^3$

| Value of $a$ | Effect |
|--------------|--------|
| $a > 1$ | Stretches VERTICALLY (steeper curve) |
| $0 < a < 1$ | Compresses VERTICALLY (flatter curve) |
| $a < 0$ | Reflects in the x-axis AND stretches/compresses |

**Understanding Negative $a$:**
- $y = -x^3$ is the reflection of $y = x^3$ in the x-axis
- As $x \to +\infty$, $y \to -\infty$
- As $x \to -\infty$, $y \to +\infty$

### 2.4 Combined Transformations: $y = a(x - h)^3 + k$

**Order of Transformations:**
1. Horizontal shift by $h$
2. Vertical stretch by factor $|a|$
3. If $a < 0$, reflect in x-axis
4. Vertical shift by $k$

> ** Worked Example:**
> Describe the transformation from $y = x^3$ to $y = -2(x - 3)^3 + 1$
> 
> **Solution:**
> 1. Shift RIGHT by 3 units
> 2. Stretch vertically by factor 2
> 3. Reflect in the x-axis
> 4. Shift UP by 1 unit

---

## 3. GENERAL CUBIC FUNCTIONS

### 3.1 Standard Form Analysis: $y = ax^3 + bx^2 + cx + d$

**Interpreting the coefficients:**

| Coefficient | Role |
|-------------|------|
| $a$ | Determines end behavior and steepness |
| $b$ | Affects horizontal position of turning points |
| $c$ | Affects slope at origin |
| $d$ | y-intercept (where $x = 0$) |

**Finding the y-intercept:**
- Set $x = 0$ → $y = d$
- The graph crosses the y-axis at $(0, d)$

### 3.2 Finding x-intercepts (Roots)

To find where the cubic crosses the x-axis, solve $ax^3 + bx^2 + cx + d = 0$

**Methods:**
1. **Factorisation** (if possible)
2. **Trial and error** to find one root, then factor theorem
3. **Drawing the graph** and reading intersections

> ** Worked Example:**
> Find the x-intercepts of $y = x^3 - 6x^2 + 11x - 6$
> 
> **Solution:**
> Set $y = 0$: $x^3 - 6x^2 + 11x - 6 = 0$
> 
> Try $x = 1$: $1 - 6 + 11 - 6 = 0$ ✓ (so $x = 1$ is a root)
> 
> Divide by $(x - 1)$:
> $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$
> 
> Factorise: $(x - 1)(x - 2)(x - 3) = 0$
> 
> **x-intercepts: $x = 1, 2, 3$**

---

## 4. TURNING POINTS OF CUBIC GRAPHS

### 4.1 Definition
A **turning point** is where the graph changes direction (from increasing to decreasing or vice versa).

**Key Facts:**
- A cubic graph can have **0, 1, or 2 turning points**
- Never more than 2 turning points for a cubic
- The **maximum** or **minimum** point is a turning point

### 4.2 Types of Turning Points

| Type | Description |
|------|-------------|
| **Local Maximum** | Highest point in a region (peak) |
| **Local Minimum** | Lowest point in a region (trough) |
| **Point of Inflection** | Where curve changes concavity (like $y = x^3$ at origin) |

### 4.3 Identifying Turning Points from Tables

When plotting cubic graphs, turning points occur where:
- Values increase then decrease (maximum), or
- Values decrease then increase (minimum)

> ** Worked Example:**
> Complete the table for $y = x^3 - 3x + 2$ and identify turning points.
> 
> | x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
> |---|----|----|----|---|---|---|---|
> | y | -16 | 0 | 4 | 2 | 0 | 4 | 20 |
> 
> **Analysis:**
> - Between $x = -1$ and $x = 0$: y decreases from 4 to 2
> - Between $x = 0$ and $x = 1$: y decreases from 2 to 0
> - Then increases from 0 to 4
> 
> There appears to be a maximum near $x = -1$ and a minimum near $x = 1$

### 4.4 Estimating Turning Points

For exam purposes, turning points are often:
- **Read from a graph** (to 0.5 grid square accuracy)
- **Estimated from a completed table**
- **Found using calculus** (beyond IGCSE but useful knowledge)

---

## 5. SHAPES OF CUBIC GRAPHS

### 5.1 Four Basic Shapes

**Positive leading coefficient ($a > 0$):**

```
Shape 1: Two turning points      Shape 2: No turning point
    /\                               /
   /  \                             /
  /    \___                        /
_/        \_                      /
            Point of inflection
```

**Negative leading coefficient ($a < 0$):**

```
Shape 3: Two turning points      Shape 4: No turning point
       __                              \
      /    \                            \
  ___/      \                           \
            \/                           \
```

### 5.2 Summary Table

| Condition | Shape |
|-----------|-------|
| $a > 0$, two turning points | Rises, falls, rises again |
| $a > 0$, no turning point | Always rising (inflection) |
| $a < 0$, two turning points | Falls, rises, falls again |
| $a < 0$, no turning point | Always falling (inflection) |

---

## 6. DRAWING CUBIC GRAPHS

### 6.1 Step-by-Step Method

**Step 1:** Create a table of values (usually from $x = -3$ to $x = 3$)
**Step 2:** Calculate $y$ for each $x$ value
**Step 3:** Plot the points on graph paper
**Step 4:** Draw a smooth curve through the points
**Step 5:** Label the graph with its equation

### 6.2 Choosing x-values

- Start with standard range: $-3, -2, -1, 0, 1, 2, 3$
- If the question specifies a range, use that
- Add extra points near turning points if needed

> ** Worked Example:**
> Draw the graph of $y = x^3 - 4x$ for $-3 \leq x \leq 3$
> 
> **Solution:**
> 
> | x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
> |---|----|----|----|---|---|---|---|
> | $x^3$ | -27 | -8 | -1 | 0 | 1 | 8 | 27 |
> | $-4x$ | 12 | 8 | 4 | 0 | -4 | -8 | -12 |
> | **y** | **-15** | **0** | **3** | **0** | **-3** | **0** | **15** |
> 
> **Key observations:**
> - x-intercepts at $x = -2, 0, 2$
> - Maximum near $x = -1.2$, $y \approx 3.1$
> - Minimum near $x = 1.2$, $y \approx -3.1$

---

## 7. SOLVING EQUATIONS USING CUBIC GRAPHS

### 7.1 Finding Solutions Graphically

Once a cubic graph is drawn, it can be used to solve equations.

**Method:**
1. Draw $y = f(x)$ (the cubic)
2. Draw the line required by the equation
3. Find the x-coordinates of intersection points

> ** Worked Example:**
> Use the graph of $y = x^3 - 4x$ to solve $x^3 - 4x = 2$
> 
> **Solution:**
> 1. The cubic graph $y = x^3 - 4x$ is already drawn
> 2. Draw the line $y = 2$ (horizontal line)
> 3. Find where they intersect
> 4. Read off x-values: approximately $x \approx -2.2, 0.5, 1.7$

### 7.2 Types of Graphical Solutions

| Equation | What to draw |
|----------|--------------|
| $x^3 - 4x = k$ | Line $y = k$ |
| $x^3 - 4x = 2x$ | Line $y = 2x$ |
| $x^3 - 4x + 1 = 0$ | Line $y = -1$ (after rearranging) |

---

# PART B: RECIPROCAL GRAPHS

## 8. INTRODUCTION TO RECIPROCAL FUNCTIONS

### 8.1 Definition
A **reciprocal function** has the form:

$$y = \frac{a}{x} \quad \text{or} \quad y = \frac{a}{x^n}$$

where $a$ is a constant and $x \neq 0$.

### 8.2 The Basic Reciprocal Graph: $y = \frac{1}{x}$

**Table of Values:**

| x | -4 | -2 | -1 | -0.5 | 0.5 | 1 | 2 | 4 |
|---|----|----|----|------|-----|---|---|---|
| y | -0.25 | -0.5 | -1 | -2 | 2 | 1 | 0.5 | 0.25 |

> ** Important:** $x = 0$ is NOT in the domain - division by zero is undefined!

---

## 9. KEY FEATURES OF $y = \frac{1}{x}$

### 9.1 Asymptotes

**Asymptotes** are lines that the curve approaches but never touches.

| Asymptote | Description |
|-----------|-------------|
| **x-axis** ($y = 0$) | Horizontal asymptote |
| **y-axis** ($x = 0$) | Vertical asymptote |

**Understanding Asymptotes:**
- As $x \to +\infty$, $y \to 0^+$ (approaches 0 from above)
- As $x \to 0^+$, $y \to +\infty$ (approaches infinity)
- As $x \to 0^-$, $y \to -\infty$ (approaches negative infinity)
- As $x \to -\infty$, $y \to 0^-$ (approaches 0 from below)

### 9.2 Quadrants

| $a > 0$ | $a < 0$ |
|---------|---------|
| Curve in **Quadrants I and III** | Curve in **Quadrants II and IV** |

For $y = \frac{1}{x}$:
- When $x > 0$, $y > 0$ (Quadrant I)
- When $x < 0$, $y < 0$ (Quadrant III)

### 9.3 Symmetry

The graph $y = \frac{1}{x}$ has **rotational symmetry of order 2** about the origin.

This means if you rotate the curve 180° around the origin, it maps onto itself.

---

## 10. TRANSFORMATIONS OF RECIPROCAL GRAPHS

### 10.1 Vertical Stretch: $y = \frac{a}{x}$

| Value of $a$ | Effect |
|--------------|--------|
| $a > 1$ | Stretches VERTICALLY (curves further from axes) |
| $0 < a < 1$ | Compresses VERTICALLY (curves closer to axes) |
| $a < 0$ | Reflects in x-axis (moves to Quadrants II and IV) |

**Comparison Table:**

| x | $y = \frac{1}{x}$ | $y = \frac{2}{x}$ | $y = \frac{3}{x}$ |
|---|-------------------|-------------------|-------------------|
| 1 | 1 | 2 | 3 |
| 2 | 0.5 | 1 | 1.5 |
| 3 | 0.33 | 0.67 | 1 |

### 10.2 Horizontal Translation: $y = \frac{1}{x-h}$

| Transformation | Effect | Asymptotes |
|----------------|--------|------------|
| $y = \frac{1}{x-h}$ | Shift RIGHT by $h$ | Vertical: $x = h$ |
| $y = \frac{1}{x+h}$ | Shift LEFT by $h$ | Vertical: $x = -h$ |

> ** Common Mistake:** Remember the vertical asymptote moves with the translation. For $y = \frac{1}{x-2}$, the asymptote is $x = 2$, NOT $x = -2$.

### 10.3 Vertical Translation: $y = \frac{1}{x} + k$

| Transformation | Effect | Asymptotes |
|----------------|--------|------------|
| $y = \frac{1}{x} + k$ | Shift UP by $k$ | Horizontal: $y = k$ |
| $y = \frac{1}{x} - k$ | Shift DOWN by $k$ | Horizontal: $y = -k$ |

### 10.4 Combined Transformations: $y = \frac{a}{x-h} + k$

**Asymptotes:**
- Vertical: $x = h$
- Horizontal: $y = k$

> ** Worked Example:**
> Sketch $y = \frac{2}{x-3} + 1$ and state its asymptotes.
> 
> **Solution:**
> - Start with $y = \frac{1}{x}$
> - Stretch vertically by factor 2: $y = \frac{2}{x}$
> - Shift right by 3: $y = \frac{2}{x-3}$
> - Shift up by 1: $y = \frac{2}{x-3} + 1$
> 
> **Asymptotes:**
> - Vertical: $x = 3$
> - Horizontal: $y = 1$

---

## 11. DRAWING RECIPROCAL GRAPHS

### 11.1 Step-by-Step Method

**Step 1:** Identify asymptotes
**Step 2:** Create a table of values (avoid $x = 0$ or asymptote value)
**Step 3:** Choose both positive and negative x-values
**Step 4:** Plot points and draw smooth curves
**Step 5:** Draw asymptotes as dashed lines
**Step 6:** Label the graph

### 11.2 Choosing x-values

For $y = \frac{1}{x}$, use values like:
- Positive: 0.5, 1, 2, 3, 4
- Negative: -0.5, -1, -2, -3, -4

> ** Worked Example:**
> Draw the graph of $y = \frac{3}{x}$ for $-4 \leq x \leq 4$, $x \neq 0$
> 
> **Solution:**
> 
> | x | -4 | -2 | -1 | -0.5 | 0.5 | 1 | 2 | 4 |
> |---|----|----|----|------|-----|---|---|---|
> | y | -0.75 | -1.5 | -3 | -6 | 6 | 3 | 1.5 | 0.75 |
> 
> **Key features:**
> - Asymptotes: $x = 0$, $y = 0$
> - In Quadrants I and III
> - Stretched version of $y = \frac{1}{x}$

---

## 12. SOLVING EQUATIONS USING RECIPROCAL GRAPHS

### 12.1 Finding Intersection Points

Similar to cubic graphs, once drawn, reciprocal graphs can solve equations.

> ** Worked Example:**
> Use the graph of $y = \frac{2}{x}$ to solve $\frac{2}{x} = x + 1$
> 
> **Solution:**
> 1. Draw $y = \frac{2}{x}$ (already on graph)
> 2. Draw the line $y = x + 1$
> 3. Find intersection points
> 4. Solutions: $x \approx 1$ and $x \approx -2$
> 
> **Verification:**
> - $x = 1$: $\frac{2}{1} = 2$ and $1 + 1 = 2$ ✓
> - $x = -2$: $\frac{2}{-2} = -1$ and $-2 + 1 = -1$ ✓

### 12.2 Common Equation Types

| Equation | Method |
|----------|--------|
| $\frac{a}{x} = k$ | Draw line $y = k$ |
| $\frac{a}{x} = mx + c$ | Draw line $y = mx + c$ |
| $\frac{a}{x} = x$ | Draw line $y = x$ |

---

## 13. RECIPROCAL GRAPHS: $y = \frac{1}{x^2}$

### 13.1 Shape and Features

**Table of Values:**

| x | -3 | -2 | -1 | -0.5 | 0.5 | 1 | 2 | 3 |
|---|----|----|----|------|-----|---|---|---|
| $x^2$ | 9 | 4 | 1 | 0.25 | 0.25 | 1 | 4 | 9 |
| y | 0.11 | 0.25 | 1 | 4 | 4 | 1 | 0.25 | 0.11 |

**Key Features:**
- Asymptotes: $x = 0$ and $y = 0$
- Always POSITIVE (since $x^2 > 0$ for all $x \neq 0$)
- Graph in **Quadrants I and II only**
- **Symmetric about the y-axis** (even function)

### 13.2 Comparison with $y = \frac{1}{x}$

| Feature | $y = \frac{1}{x}$ | $y = \frac{1}{x^2}$ |
|---------|-------------------|---------------------|
| Quadrants | I and III | I and II |
| y-values | Can be negative | Always positive |
| Symmetry | Rotational (origin) | Reflectional (y-axis) |
| Shape | Two curved branches | Single "U-shaped" curve (two halves) |

---

## 14. EXAM FOCUS: COMMON QUESTION TYPES

### 14.1 Plotting and Drawing

**Typical Questions:**
1. "Complete the table of values for $y = x^3 - 2x$"
2. "Draw the graph of $y = \frac{2}{x}$ for $-4 \leq x \leq 4$"
3. "Hence estimate the coordinates of the turning point"

**Marking Points:**
- M1: Correct substitution into function
- M1: Plotting points correctly
- M1: Drawing smooth curve
- A1: Accuracy of turning points/intercepts

### 14.2 Finding Solutions Graphically

**Typical Questions:**
1. "Use your graph to solve $x^3 - 2x = 3$"
2. "Find the x-coordinates where the curves intersect"
3. "Estimate the solutions to..."

**Exam Technique:**
- Draw a HORIZONTAL LINE for equations like $f(x) = k$
- Draw a DIAGONAL LINE for equations like $f(x) = mx + c$
- Read x-values accurately (usually to 1 decimal place)

### 14.3 Transformations

**Typical Questions:**
1. "Describe the transformation that maps $y = x^3$ to $y = (x-2)^3 + 3$"
2. "Write down the equation of the asymptotes for $y = \frac{1}{x+2}$"

**Key Phrases:**
- "Translation by vector $\begin{pmatrix} h \\ k \end{pmatrix}$"
- "Stretch by factor $a$ in the y-direction"

---

## 15. KEY FORMULAS AND IDENTITIES

### 15.1 Cubic Functions Summary

| Function Form | Key Features |
|---------------|--------------|
| $y = ax^3$ | Passes through origin, inflection at origin |
| $y = ax^3 + bx^2 + cx + d$ | y-intercept at $(0, d)$ |
| $y = a(x - h)^3 + k$ | Inflection at $(h, k)$ |

### 15.2 Reciprocal Functions Summary

| Function | Vertical Asymptote | Horizontal Asymptote |
|----------|-------------------|---------------------|
| $y = \frac{a}{x}$ | $x = 0$ | $y = 0$ |
| $y = \frac{a}{x - h}$ | $x = h$ | $y = 0$ |
| $y = \frac{a}{x} + k$ | $x = 0$ | $y = k$ |
| $y = \frac{a}{x - h} + k$ | $x = h$ | $y = k$ |

---

## 16. COMMON MISTAKES TO AVOID

| Mistake | Correction |
|---------|------------|
| Forgetting $x = 0$ is undefined for $\frac{1}{x}$ | Never plot a point at $x = 0$ |
| Connecting points with straight lines | Always draw smooth curves |
| Wrong direction for translations | $(x - 3)$ means RIGHT, $(x + 3)$ means LEFT |
| Not drawing asymptotes | Always show asymptotes as dashed lines |
| Missing turning points | Use enough x-values to find shape |
| Confusing maximum and minimum | Maximum is the "peak", minimum is the "trough" |

---

## 17. EXAM STRATEGIES FOR A* STUDENTS

### 17.1 Time-Saving Tips

1. **Mental calculations:** For simple cubes and reciprocals, calculate mentally
2. **Symmetry:** Use symmetry of graphs to halve your work
3. **Transformation shortcuts:** Identify transformations directly from equation form

### 17.2 Accuracy Tips

1. **Reading scales:** Check if each square represents 0.5, 1, or 2 units
2. **Estimating:** For turning points, read to nearest 0.5 of a small square
3. **Drawing lines:** Use a ruler for straight lines, freehand for curves

### 17.3 Checking Your Work

1. **Substitute back:** Put your solution into the original equation
2. **Visual check:** Does the graph look right? Is the shape correct?
3. **Symmetry check:** Is the graph symmetric where it should be?

---

*END OF DETAILED NOTES*
