# Chapter 28: Graphs 8 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics

---

# Topic Overview

This unit covers two essential higher-tier topics:
1. **Gradient of a Curve** - Finding rates of change from curved graphs
2. **Transformations of Graphs** - Translation, Reflection, and Stretching of functions

---

# Part 1: Gradient of a Curve

## 1.1 Introduction to Gradient

### Straight Line vs Curved Graph

For a **straight line**, the gradient is constant throughout - it measures the steepness or rate of change.

$$\text{Gradient} = \frac{\text{Change in } y}{\text{Change in } x} = \frac{y_2 - y_1}{x_2 - x_1}$$

For a **curved graph**, the gradient changes continuously at every point along the curve. The gradient at any specific point is defined as the gradient of the **tangent** to the curve at that point.

---

## 1.2 The Tangent Method

### Key Concept
> **The gradient of a curve at a specific point equals the gradient of the tangent line drawn at that point.**

A **tangent** is a straight line that touches the curve at exactly one point and has the same direction as the curve at that point.

### Step-by-Step Method for Finding Gradient of a Curve

**Step 1:** Plot the curve accurately using a table of values if not already drawn.

**Step 2:** Locate the point on the curve where you need to find the gradient.

**Step 3:** Draw a tangent at that point.
- The tangent should touch the curve at only one point
- Use a ruler and be as accurate as possible
- The tangent should follow the direction of the curve at that point

**Step 4:** Extend the tangent line so it's long enough to read coordinates clearly.

**Step 5:** Choose two well-spaced points on the tangent (not necessarily on the curve).

**Step 6:** Calculate the gradient using the straight line formula.

$$\text{Gradient} = \frac{y_2 - y_1}{x_2 - x_1}$$

---

### Worked Example 1

**Question:** The curve $y = x^2 - 2x + 1$ is drawn. Find the gradient of the curve at the point $(2, 1)$.

**Solution:**

**Step 1:** The curve is already drawn. Locate point $(2, 1)$ on the curve.

**Step 2:** Draw a tangent at the point $(2, 1)$. The tangent should only touch the curve at this point.

**Step 3:** Extend the tangent and read two points on it:
- Point A: $(0, -3)$
- Point B: $(4, 5)$

**Step 4:** Calculate the gradient:
$$\text{Gradient} = \frac{5 - (-3)}{4 - 0} = \frac{8}{4} = 2$$

**Answer:** The gradient of the curve at $(2, 1)$ is **2**.

> **Key Insight:** The tangent must be drawn carefully. Small errors in drawing the tangent lead to significant errors in the gradient calculation.

---

## 1.3 Practical Interpretation

### Rate of Change

In real-world contexts, the gradient represents the **rate of change** of one quantity with respect to another.

| Context | What gradient represents |
|---------|-------------------------|
| Distance-time graph | Speed (rate of change of distance with time) |
| Height vs time (filling container) | Rate of filling |
| Temperature vs time | Rate of heating/cooling |
| Cost vs quantity | Rate of cost increase per unit |

### Positive and Negative Gradients

- **Positive gradient:** The curve is **increasing** (going uphill from left to right)
  - $y$ increases as $x$ increases
  - Rate of change is positive

- **Negative gradient:** The curve is **decreasing** (going downhill from left to right)
  - $y$ decreases as $x$ increases
  - Rate of change is negative

- **Zero gradient:** The curve is horizontal at that point
  - This occurs at maximum and minimum points (turning points)

---

### Worked Example 2 (Real-World Context)

**Question:** The graph shows the height of water (h metres) in a tank over time (t minutes). The curve passes through $(0, 0)$, $(2, 4)$, $(4, 6)$, and $(6, 7)$. Find the rate at which the water level is rising at $t = 3$ minutes.

**Solution:**

**Step 1:** Draw a tangent at $t = 3$ on the curve.

**Step 2:** Read two points on the tangent:
- Point A: $(0, 0.5)$
- Point B: $(6, 7.5)$

**Step 3:** Calculate the gradient:
$$\text{Rate} = \frac{7.5 - 0.5}{6 - 0} = \frac{7}{6} \approx 1.17 \text{ metres per minute}$$

**Answer:** The water level is rising at approximately **1.17 m/min** at $t = 3$ minutes.

---

## 1.4 Drawing an Accurate Tangent

### Tips for Accuracy

1. **Use a sharp pencil** and a good quality ruler

2. **Look at the curve either side** of the point before drawing the tangent
   - This helps you gauge the direction of the curve

3. **Draw the tangent slightly longer** than you need - this makes reading points easier

4. **Choose points far apart** on the tangent for calculating gradient
   - Reduces the impact of reading errors

5. **Avoid using the point on the curve** as one of your gradient calculation points
   - This point is used to draw the tangent, not for the calculation

---

## 1.5 Common Errors to Avoid

| ❌ Common Error | ✅ Correct Approach |
|----------------|---------------------|
| Drawing a tangent that cuts the curve | Tangent should only touch at one point |
| Using points on the curve instead of the tangent | Use points on the tangent line only |
| Choosing two points too close together | Choose well-spaced points for accuracy |
| Forgetting units in real-world problems | Include appropriate units (e.g., m/s) |
| Ignoring negative gradients | Report negative values when appropriate |

---

# Part 2: Transformations of Graphs

## 2.1 Introduction to Transformations

Graphs can be **transformed** by applying operations to either $x$ or $y$ in the function. Understanding how these operations affect the graph is crucial for the exam.

### Types of Transformations

1. **Translations** - Shifting the graph without changing its shape
2. **Reflections** - Flipping the graph across an axis or line
3. **Stretches** - Expanding or compressing the graph

---

## 2.2 Translations

A translation moves every point of the graph by the same amount in the same direction.

### Translation in the y-direction (Vertical Shift)

**Function form:** $y = f(x) + a$

**Effect:** The graph shifts **vertically** by $a$ units.

| Value of $a$ | Transformation |
|--------------|----------------|
| $a > 0$ | Shift **up** by $a$ units |
| $a < 0$ | Shift **down** by $|a|$ units |

**Key Points:**
- Each $y$-coordinate increases by $a$ (if $a > 0$) or decreases by $|a|$ (if $a < 0$)
- $x$-coordinates remain unchanged
- The shape of the graph is preserved

> **Important:** $y = f(x) + 3$ means add 3 to every $y$-value. The graph moves UP by 3.

---

### Worked Example 3

**Question:** The graph of $y = x^2$ is transformed to $y = x^2 + 4$. Describe the transformation and sketch the new graph.

**Solution:**

**Identifying the transformation:**
- The original function is $f(x) = x^2$
- The new function is $y = f(x) + 4$
- This is a translation of **4 units up** (vertical shift)

**Effect on key points:**
| Original point $(x, y)$ | New point $(x, y+4)$ |
|------------------------|---------------------|
| $(0, 0)$ | $(0, 4)$ |
| $(1, 1)$ | $(1, 5)$ |
| $(2, 4)$ | $(2, 8)$ |
| $(-1, 1)$ | $(-1, 5)$ |
| $(-2, 4)$ | $(-2, 8)$ |

**Answer:** Translation by vector $\begin{pmatrix} 0 \\ 4 \end{pmatrix}$ or "4 units up."

---

### Translation in the x-direction (Horizontal Shift)

**Function form:** $y = f(x + a)$

**Effect:** The graph shifts **horizontally**.

> ** Critical Warning:** This is the most common source of errors in transformations!

| Value of $a$ | Transformation |
|--------------|----------------|
| $a > 0$ | Shift **left** by $a$ units |
| $a < 0$ | Shift **right** by $|a|$ units |

**Key Points:**
- The direction is **opposite** to the sign of $a$
- Each $x$-coordinate changes by $-a$
- $y$-coordinates remain unchanged

> **Why is it opposite?** Consider $y = f(x + 3)$. For the function to have the same output as $f(x)$, $x$ must be 3 less. So the graph shifts LEFT by 3.

---

### Worked Example 4

**Question:** The graph of $y = x^2$ is transformed to $y = (x - 2)^2$. Describe the transformation.

**Solution:**

**Identifying the transformation:**
- The original function is $f(x) = x^2$
- The new function is $y = f(x - 2)$
- Since we have $(x - 2)$, this is equivalent to $f(x + (-2))$
- So $a = -2$, which means shift **right** by 2 units

**Effect on key points:**
| Original point $(x, y)$ | New point $(x+2, y)$ |
|------------------------|---------------------|
| $(0, 0)$ | $(2, 0)$ |
| $(1, 1)$ | $(3, 1)$ |
| $(-1, 1)$ | $(1, 1)$ |
| $(-2, 4)$ | $(0, 4)$ |

**Answer:** Translation by vector $\begin{pmatrix} 2 \\ 0 \end{pmatrix}$ or "2 units right."

---

### Combined Translations

**Function form:** $y = f(x + a) + b$

**Effect:** Both horizontal and vertical shifts applied simultaneously.

- Horizontal shift: $a$ units in the opposite direction to the sign
- Vertical shift: $b$ units in the same direction as the sign

**Translation vector:** $\begin{pmatrix} -a \\ b \end{pmatrix}$

---

### Worked Example 5

**Question:** The graph of $y = \sin(x)$ is transformed to $y = \sin(x - 30°) + 2$. Describe the transformation.

**Solution:**

**Breaking down the transformation:**
- $y = \sin(x - 30°) = \sin(x + (-30°))$ → shift **right** by 30°
- $+ 2$ → shift **up** by 2 units

**Translation vector:** $\begin{pmatrix} 30° \\ 2 \end{pmatrix}$

**Effect on key points:**
| Original point | New point |
|---------------|-----------|
| $(0°, 0)$ | $(30°, 2)$ |
| $(90°, 1)$ | $(120°, 3)$ |
| $(180°, 0)$ | $(210°, 2)$ |
| $(270°, -1)$ | $(300°, 1)$ |

**Answer:** Translation by vector $\begin{pmatrix} 30 \\ 2 \end{pmatrix}$, meaning 30 units right and 2 units up.

---

## 2.3 Reflections

A reflection flips the graph across a mirror line (axis of reflection).

### Reflection in the x-axis

**Function form:** $y = -f(x)$

**Effect:** The graph is reflected in the **x-axis** (horizontal axis).

**What happens:**
- Each $y$-coordinate is **negated** (multiplied by $-1$)
- $x$-coordinates remain unchanged
- Points above the x-axis move below, and vice versa

**Transformation rule:** $(x, y) \rightarrow (x, -y)$

---

### Worked Example 6

**Question:** The graph of $y = x^2$ passes through points $(0, 0)$, $(2, 4)$, and $(-2, 4)$. Find the coordinates of these points after the transformation $y = -x^2$.

**Solution:**

**Identifying the transformation:**
- $y = -x^2 = -f(x)$ where $f(x) = x^2$
- This is a reflection in the **x-axis**

**Effect on points:**
| Original point | After reflection |
|---------------|------------------|
| $(0, 0)$ | $(0, 0)$ (stays on x-axis) |
| $(2, 4)$ | $(2, -4)$ |
| $(-2, 4)$ | $(-2, -4)$ |

**Answer:** The transformed points are $(0, 0)$, $(2, -4)$, and $(-2, -4)$.

> **Note:** Points on the x-axis (where $y = 0$) remain unchanged since $-0 = 0$.

---

### Reflection in the y-axis

**Function form:** $y = f(-x)$

**Effect:** The graph is reflected in the **y-axis** (vertical axis).

**What happens:**
- Each $x$-coordinate is **negated** (multiplied by $-1$)
- $y$-coordinates remain unchanged
- Points to the right of the y-axis move to the left, and vice versa

**Transformation rule:** $(x, y) \rightarrow (-x, y)$

---

### Worked Example 7

**Question:** The graph of $y = e^x$ passes through points $(0, 1)$, $(1, e)$, and $(-1, \frac{1}{e})$. Describe the transformation $y = e^{-x}$ and find the new coordinates.

**Solution:**

**Identifying the transformation:**
- $y = e^{-x} = f(-x)$ where $f(x) = e^x$
- This is a reflection in the **y-axis**

**Effect on points:**
| Original point | After reflection |
|---------------|------------------|
| $(0, 1)$ | $(0, 1)$ (on y-axis, stays same) |
| $(1, e)$ | $(-1, e)$ |
| $(-1, \frac{1}{e})$ | $(1, \frac{1}{e})$ |

**Answer:** Reflection in the y-axis. New points: $(0, 1)$, $(-1, e)$, and $(1, \frac{1}{e})$.

> **Note:** Points on the y-axis (where $x = 0$) remain unchanged.

---

### Summary: Reflection Rules

| Transformation | Description | Rule |
|---------------|-------------|------|
| $y = -f(x)$ | Reflection in x-axis | $(x, y) \rightarrow (x, -y)$ |
| $y = f(-x)$ | Reflection in y-axis | $(x, y) \rightarrow (-x, y)$ |

---

## 2.4 Stretches

A stretch changes the shape of the graph by expanding or compressing it in one direction.

### Stretch parallel to the y-axis (Vertical Stretch)

**Function form:** $y = a \cdot f(x)$

**Effect:** The graph is stretched (or compressed) **vertically**.

| Value of $a$ | Effect |
|--------------|--------|
| $|a| > 1$ | Stretch **away** from x-axis (taller) |
| $0 < |a| < 1$ | Stretch **towards** x-axis (shorter) |
| $a < 0$ | Stretch combined with reflection in x-axis |

**What happens:**
- Each $y$-coordinate is **multiplied by $a$**
- $x$-coordinates remain unchanged
- Scale factor is $|a|$

**Transformation rule:** $(x, y) \rightarrow (x, ay)$

---

### Worked Example 8

**Question:** The graph of $y = \sin(x)$ is transformed to $y = 2\sin(x)$. Describe the transformation and its effect on the maximum and minimum values.

**Solution:**

**Identifying the transformation:**
- $y = 2\sin(x) = 2 \cdot f(x)$ where $f(x) = \sin(x)$
- This is a **vertical stretch** with scale factor 2

**Effect:**
- Original amplitude: 1 (max = 1, min = -1)
- New amplitude: 2 (max = 2, min = -2)
- All $y$-values are doubled

**Key points comparison:**
| Original point | After stretch |
|---------------|---------------|
| $(0°, 0)$ | $(0°, 0)$ (on x-axis, stays same) |
| $(90°, 1)$ | $(90°, 2)$ |
| $(180°, 0)$ | $(180°, 0)$ |
| $(270°, -1)$ | $(270°, -2)$ |

**Answer:** Vertical stretch, scale factor 2. Maximum becomes 2, minimum becomes -2.

> **Note:** Points on the x-axis (where $y = 0$) are invariant points - they don't move under a vertical stretch.

---

### Stretch parallel to the x-axis (Horizontal Stretch)

**Function form:** $y = f(ax)$

**Effect:** The graph is stretched (or compressed) **horizontally**.

> ** Critical Warning:** This is another common source of errors - the scale factor is the **reciprocal** of what you might expect!

| Value of $a$ | Effect | Scale Factor |
|--------------|--------|--------------|
| $|a| > 1$ | Stretch **towards** y-axis (narrower) | $\frac{1}{a}$ |
| $0 < |a| < 1$ | Stretch **away** from y-axis (wider) | $\frac{1}{a}$ |
| $a < 0$ | Stretch combined with reflection in y-axis | $\frac{1}{|a|}$ |

**What happens:**
- Each $x$-coordinate is **divided by $a$** (or multiplied by $\frac{1}{a}$)
- $y$-coordinates remain unchanged

**Transformation rule:** $(x, y) \rightarrow \left(\frac{x}{a}, y\right)$

---

### Worked Example 9

**Question:** The graph of $y = \sin(x)$ (where $x$ is in degrees) has period 360°. Find the period after the transformation $y = \sin(2x)$.

**Solution:**

**Identifying the transformation:**
- $y = \sin(2x) = f(2x)$ where $f(x) = \sin(x)$
- This is a **horizontal stretch** with scale factor $\frac{1}{2}$

**Effect on period:**
- Original period: 360°
- New period: $360° \times \frac{1}{2} = 180°$

**Explanation:** For the sine function to complete one full cycle:
- Originally: $x$ goes from 0° to 360°
- After transformation: $2x$ goes from 0° to 360°, so $x$ goes from 0° to 180°

**Answer:** The period is now **180°**.

---

### Worked Example 10

**Question:** The graph of $y = x^2$ passes through $(2, 4)$. Find the coordinates of this point after the transformation $y = (\frac{1}{2}x)^2$.

**Solution:**

**Identifying the transformation:**
- $y = (\frac{1}{2}x)^2 = f(\frac{1}{2}x)$ where $f(x) = x^2$
- This is a **horizontal stretch** with scale factor $\frac{1}{1/2} = 2$

**Effect on coordinates:**
- $x$-coordinate: $2 \times 2 = 4$
- $y$-coordinate: stays the same = 4

**Verification:** When $x = 4$ in the new function: $y = (\frac{1}{2} \times 4)^2 = (2)^2 = 4$ ✓

**Answer:** The point $(2, 4)$ becomes $(4, 4)$.

---

### Summary: Stretch Rules

| Transformation | Description | Rule | Scale Factor |
|---------------|-------------|------|--------------|
| $y = a \cdot f(x)$ | Vertical stretch | $(x, y) \rightarrow (x, ay)$ | $a$ |
| $y = f(ax)$ | Horizontal stretch | $(x, y) \rightarrow \left(\frac{x}{a}, y\right)$ | $\frac{1}{a}$ |

---

## 2.5 Combined Transformations

When multiple transformations are applied, the order can matter!

### Order of Transformations

**For the function** $y = a \cdot f(x + b) + c$:

Apply in this order:
1. **Horizontal translation** (inside the function with $x$)
2. **Horizontal stretch/reflection** (inside the function, coefficient of $x$)
3. **Vertical stretch/reflection** (outside the function, coefficient of $f(x)$)
4. **Vertical translation** (outside the function, added constant)

> **Memory Aid:** Work from the **inside out** - transformations affecting $x$ first, then those affecting $y$.

---

### Worked Example 11

**Question:** Describe fully the transformation that maps $y = x^2$ onto $y = 2(x + 3)^2 - 5$.

**Solution:**

**Breaking down the transformations:**
- $y = x^2$ → original function
- $y = (x + 3)^2$ → horizontal translation: 3 units **left**
- $y = 2(x + 3)^2$ → vertical stretch: scale factor 2
- $y = 2(x + 3)^2 - 5$ → vertical translation: 5 units **down**

**Answer:**
1. Translation by vector $\begin{pmatrix} -3 \\ 0 \end{pmatrix}$ (3 units left)
2. Vertical stretch with scale factor 2
3. Translation by vector $\begin{pmatrix} 0 \\ -5 \end{pmatrix}$ (5 units down)

Or combined: Translation $\begin{pmatrix} -3 \\ -5 \end{pmatrix}$ followed by vertical stretch, scale factor 2.

---

### Worked Example 12

**Question:** The point $(2, 4)$ lies on the curve $y = f(x)$. Find the coordinates of the image point after the transformation $y = 3f(x - 1) + 2$.

**Solution:**

**Step 1: Horizontal translation** ($x - 1$ means shift right by 1)
- $(2, 4) \rightarrow (2 + 1, 4) = (3, 4)$

**Step 2: Vertical stretch** (multiply $y$ by 3)
- $(3, 4) \rightarrow (3, 4 \times 3) = (3, 12)$

**Step 3: Vertical translation** (add 2 to $y$)
- $(3, 12) \rightarrow (3, 12 + 2) = (3, 14)$

**Answer:** The image point is **(3, 14)**.

**Verification:** 
- Original: $f(2) = 4$
- Transformed: $y = 3f(2 - 1) + 2 = 3f(1) + 2$
- We need $f(1)$ but we know $f(2) = 4$, so this verification method doesn't work directly.
- However, the transformation method is correct!

---

## 2.6 Special Cases and Properties

### Invariant Points

Points that remain unchanged after a transformation:

| Transformation | Invariant Points |
|---------------|------------------|
| Reflection in x-axis | Points on the x-axis (where $y = 0$) |
| Reflection in y-axis | Points on the y-axis (where $x = 0$) |
| Vertical stretch | Points on the x-axis (where $y = 0$) |
| Horizontal stretch | Points on the y-axis (where $x = 0$) |
| Translation | No invariant points (unless translation is zero) |

### Symmetric Functions

**Even functions:** $f(-x) = f(x)$
- Symmetric about the y-axis
- Examples: $y = x^2$, $y = \cos(x)$, $y = |x|$
- Reflecting in y-axis produces the same graph

**Odd functions:** $f(-x) = -f(x)$
- Symmetric about the origin (rotational symmetry)
- Examples: $y = x^3$, $y = \sin(x)$, $y = x$
- Reflecting in both axes produces the same graph

---

## 2.7 Complete Transformation Summary Table

| Transformation | Function Form | Description | Coordinate Rule |
|---------------|---------------|-------------|-----------------|
| Translation up by $a$ | $y = f(x) + a$ | Vertical shift up | $(x, y) \rightarrow (x, y+a)$ |
| Translation down by $a$ | $y = f(x) - a$ | Vertical shift down | $(x, y) \rightarrow (x, y-a)$ |
| Translation left by $a$ | $y = f(x + a)$ | Horizontal shift left | $(x, y) \rightarrow (x-a, y)$ |
| Translation right by $a$ | $y = f(x - a)$ | Horizontal shift right | $(x, y) \rightarrow (x+a, y)$ |
| Reflection in x-axis | $y = -f(x)$ | Flip vertically | $(x, y) \rightarrow (x, -y)$ |
| Reflection in y-axis | $y = f(-x)$ | Flip horizontally | $(x, y) \rightarrow (-x, y)$ |
| Vertical stretch, SF $a$ | $y = a \cdot f(x)$ | Stretch away from x-axis | $(x, y) \rightarrow (x, ay)$ |
| Horizontal stretch, SF $\frac{1}{a}$ | $y = f(ax)$ | Stretch towards y-axis | $(x, y) \rightarrow \left(\frac{x}{a}, y\right)$ |

---

# Exam Focus & Strategy

## Frequently Tested Question Types

### Type 1: Gradient of Curve
- Drawing tangents at specific points
- Calculating rates of change from distance-time graphs
- Finding the gradient at turning points (answer: 0)

### Type 2: Describing Transformations
- Given $y = f(x)$ and $y = f(x+a)+b$, describe the transformation
- Must use correct terminology (translation, reflection, stretch)

### Type 3: Finding Coordinates After Transformation
- Given a point on $y = f(x)$, find its image after transformation
- Apply coordinate rules systematically

### Type 4: Sketching Transformed Graphs
- Given a sketch of $y = f(x)$, sketch the transformed graph
- Label key points clearly

### Type 5: Writing Transformed Functions
- Given a transformation, write the new function
- Example: "Write the function after reflecting $y = x^2$ in the x-axis"

---

## Command Word Guidance

| Command Word | What to Do |
|-------------|------------|
| **Describe** | State the type of transformation with direction/magnitude |
| **Find** | Calculate numerical values |
| **Sketch** | Draw the graph showing key features (no exact plotting) |
| **Write down** | Give the answer without showing working |
| **Determine** | Find with clear justification |
| **Explain** | Give reasons for your answer |

---

## How to Gain Full Marks

### For Gradient Questions
1. ✅ Draw tangent accurately with a ruler
2. ✅ Choose well-spaced points on the tangent
3. ✅ Show your calculation clearly
4. ✅ Include units if it's a real-world context
5. ✅ Give answer to appropriate accuracy (usually 1 or 2 decimal places)

### For Transformation Questions
1. ✅ State the **type** of transformation (translation, reflection, stretch)
2. ✅ Give the **direction** (up/down/left/right, x-axis/y-axis)
3. ✅ Give the **magnitude** (scale factor or number of units)
4. ✅ Use correct vector notation if asked: $\begin{pmatrix} a \\ b \end{pmatrix}$

### Example of Full Marks Answer
**Question:** Describe fully the transformation that maps $y = f(x)$ onto $y = f(x-2) + 3$.

**Full marks answer:**
- "Translation" ✓ (1 mark for type)
- "2 units right" ✓ (1 mark for horizontal component)
- "3 units up" ✓ (1 mark for vertical component)
- OR: "Translation by vector $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$" ✓

---

## Common Mistakes to Avoid

1. **❌ Wrong direction for horizontal translations**
   - $f(x + 3)$ shifts LEFT, not right!

2. **❌ Wrong scale factor for horizontal stretches**
   - $f(2x)$ has scale factor $\frac{1}{2}$, not 2

3. **❌ Not identifying all transformations in combined questions**
   - List each transformation separately

4. **❌ Forgetting units in real-world gradient questions**
   - Include m/s, cm/min, etc. as appropriate

5. **❌ Poor tangent drawing**
   - Tangent should only touch at ONE point

---

## Key Formulas Summary

$$\boxed{\text{Gradient of tangent} = \frac{y_2 - y_1}{x_2 - x_1}}$$

$$\boxed{y = f(x) + a \quad \Rightarrow \quad \text{Translation: } \begin{pmatrix} 0 \\ a \end{pmatrix}}}$$

$$\boxed{y = f(x + a) \quad \Rightarrow \quad \text{Translation: } \begin{pmatrix} -a \\ 0 \end{pmatrix}}}$$

$$\boxed{y = -f(x) \quad \Rightarrow \quad \text{Reflection in x-axis}}$$

$$\boxed{y = f(-x) \quad \Rightarrow \quad \text{Reflection in y-axis}}$$

$$\boxed{y = a \cdot f(x) \quad \Rightarrow \quad \text{Vertical stretch, SF } a}$$

$$\boxed{y = f(ax) \quad \Rightarrow \quad \text{Horizontal stretch, SF } \frac{1}{a}}$$

---

*End of Notes*
