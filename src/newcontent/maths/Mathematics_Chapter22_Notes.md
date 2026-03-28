# Chapter 22: Graphs 2 - Concise Synopsis
## Detailed Notes for A* Students

---

## Table of Contents
1. [Straight-Line Graphs](#1-straight-line-graphs)
2. [Sketching Graphs](#2-sketching-graphs)
3. [Simultaneous Equations (Graphical Solutions)](#3-simultaneous-equations-graphical-solutions)
4. [Exam Focus & Strategy](#4-exam-focus--strategy)

---

# 1. Straight-Line Graphs

## 1.1 The Equation $y = mx + c$

The general equation of a straight line is:

$$\boxed{y = mx + c}$$

Where:
- **$m$** = gradient (slope) of the line
- **$c$** = $y$-intercept (where the line crosses the $y$-axis)

---

### Understanding the Components

#### The Gradient ($m$)

The gradient measures the **steepness** and **direction** of a line.

$$m = \frac{\text{change in } y}{\text{change in } x} = \frac{y_2 - y_1}{x_2 - x_1}$$

**Key interpretations:**
| Gradient Value | Meaning |
|----------------|---------|
| $m > 0$ | Line slopes **upward** from left to right |
| $m < 0$ | Line slopes **downward** from left to right |
| $m = 0$ | **Horizontal** line (parallel to $x$-axis) |
| $m$ undefined | **Vertical** line (parallel to $y$-axis) |
| $|m| > 1$ | **Steep** line |
| $0 < |m| < 1$ | **Gentle** line |

#### The Y-Intercept ($c$)

The $y$-intercept is the point where the line crosses the $y$-axis.
- At this point, **$x = 0$**
- The coordinates are **$(0, c)$**

---

## 1.2 Finding the Equation of a Straight Line

### Method 1: From Gradient and Y-Intercept

**When given:** The gradient $m$ and $y$-intercept $c$

**Direct substitution** into $y = mx + c$

---

### Worked Example 1

> Find the equation of the line with gradient $3$ and $y$-intercept $-2$.

**Solution:**
- Gradient $m = 3$
- $y$-intercept $c = -2$

$$y = 3x - 2$$

---

### Method 2: From Two Points

**When given:** Two points $(x_1, y_1)$ and $(x_2, y_2)$

**Step-by-step process:**

**Step 1:** Calculate the gradient
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Step 2:** Substitute $m$ and one point into $y = mx + c$ to find $c$

**Step 3:** Write the final equation

---

### Worked Example 2

> Find the equation of the line passing through $A(2, 5)$ and $B(4, 11)$.

**Solution:**

**Step 1:** Calculate the gradient
$$m = \frac{11 - 5}{4 - 2} = \frac{6}{2} = 3$$

**Step 2:** Use point $(2, 5)$ to find $c$
$$y = mx + c$$
$$5 = 3(2) + c$$
$$5 = 6 + c$$
$$c = -1$$

**Step 3:** Write the equation
$$\boxed{y = 3x - 1}$$

---

### Method 3: From a Point and Gradient

**When given:** A point $(x_1, y_1)$ and gradient $m$

**Use the point-gradient form:**
$$y - y_1 = m(x - x_1)$$

Then rearrange to $y = mx + c$ form.

---

### Worked Example 3

> Find the equation of the line with gradient $-2$ that passes through the point $(3, 4)$.

**Solution:**

Using $y - y_1 = m(x - x_1)$:
$$y - 4 = -2(x - 3)$$
$$y - 4 = -2x + 6$$
$$y = -2x + 10$$

$$\boxed{y = -2x + 10}$$

---

## 1.3 Special Cases of Straight Lines

### Horizontal Lines

**Equation:** $y = c$ (where $c$ is a constant)

- Gradient = **0**
- Parallel to the $x$-axis
- All points have the same $y$-coordinate

**Example:** $y = 5$ is a horizontal line passing through all points with $y$-coordinate $5$.

---

### Vertical Lines

**Equation:** $x = k$ (where $k$ is a constant)

- Gradient is **undefined**
- Parallel to the $y$-axis
- All points have the same $x$-coordinate

**Example:** $x = -3$ is a vertical line passing through all points with $x$-coordinate $-3$.

---

### Lines Through the Origin

**Equation:** $y = mx$

- $y$-intercept $c = 0$
- Passes through $(0, 0)$

---

## 1.4 Parallel and Perpendicular Lines

### Parallel Lines

**Key Rule:** Parallel lines have the **same gradient**.

If line 1 has equation $y = m_1x + c_1$ and line 2 has equation $y = m_2x + c_2$:

$$\text{Parallel} \Rightarrow m_1 = m_2$$

---

### Worked Example 4

> Find the equation of the line parallel to $y = 3x - 7$ that passes through $(2, 5)$.

**Solution:**

**Step 1:** Identify the gradient of the given line
$$y = 3x - 7 \Rightarrow m = 3$$

**Step 2:** Parallel line has the same gradient
$$m_{new} = 3$$

**Step 3:** Find $c$ using the point $(2, 5)$
$$5 = 3(2) + c$$
$$5 = 6 + c$$
$$c = -1$$

**Answer:** $\boxed{y = 3x - 1}$

---

### Perpendicular Lines

**Key Rule:** Perpendicular lines have gradients that multiply to give $-1$.

$$m_1 \times m_2 = -1$$

Or equivalently:
$$m_2 = -\frac{1}{m_1}$$

The gradient of one line is the **negative reciprocal** of the other.

---

### Worked Example 5

> Find the equation of the line perpendicular to $y = 2x + 1$ that passes through $(4, 3)$.

**Solution:**

**Step 1:** Identify the gradient of the given line
$$y = 2x + 1 \Rightarrow m_1 = 2$$

**Step 2:** Find the gradient of the perpendicular line
$$m_2 = -\frac{1}{m_1} = -\frac{1}{2}$$

**Step 3:** Find $c$ using the point $(4, 3)$
$$y = mx + c$$
$$3 = -\frac{1}{2}(4) + c$$
$$3 = -2 + c$$
$$c = 5$$

**Answer:** $\boxed{y = -\frac{1}{2}x + 5}$

---

## 1.5 The Gradient-Intercept vs. General Form

### Gradient-Intercept Form
$$y = mx + c$$
- Easy to read gradient and $y$-intercept directly

### General Form
$$ax + by + c = 0$$
- Must rearrange to find gradient and intercept

---

### Worked Example 6

> Find the gradient and $y$-intercept of the line $3x + 2y - 6 = 0$.

**Solution:**

Rearrange to $y = mx + c$ form:
$$2y = -3x + 6$$
$$y = -\frac{3}{2}x + 3$$

**Gradient:** $\boxed{m = -\frac{3}{2}}$

**Y-intercept:** $\boxed{c = 3}$

---

## 1.6 Plotting Straight-Line Graphs

### Method 1: Using Y-Intercept and Gradient

**Step 1:** Plot the $y$-intercept $(0, c)$

**Step 2:** Use the gradient to find another point
- If $m = \frac{a}{b}$, move $b$ units right and $a$ units up

**Step 3:** Draw the line through both points

---

### Method 2: Using a Table of Values

**Step 1:** Choose at least 3 values of $x$ (including negative, zero, positive)

**Step 2:** Calculate corresponding $y$ values

**Step 3:** Plot the points and draw the line

---

### Worked Example 7

> Plot the line $y = 2x - 1$ for $-2 \leq x \leq 2$.

**Solution:**

| $x$ | $y = 2x - 1$ | Point |
|:---:|:------------:|:-----:|
| $-2$ | $2(-2) - 1 = -5$ | $(-2, -5)$ |
| $-1$ | $2(-1) - 1 = -3$ | $(-1, -3)$ |
| $0$ | $2(0) - 1 = -1$ | $(0, -1)$ |
| $1$ | $2(1) - 1 = 1$ | $(1, 1)$ |
| $2$ | $2(2) - 1 = 3$ | $(2, 3)$ |

Plot these points and draw a straight line through them.

---

## 1.7 Finding Midpoint of a Line Segment

The midpoint $M$ of a line segment joining $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$\boxed{M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)}$$

---

### Worked Example 8

> Find the midpoint of the line segment joining $A(-3, 4)$ and $B(5, -2)$.

**Solution:**
$$M = \left(\frac{-3 + 5}{2}, \frac{4 + (-2)}{2}\right)$$
$$M = \left(\frac{2}{2}, \frac{2}{2}\right)$$
$$\boxed{M = (1, 1)}$$

---

## 1.8 Length of a Line Segment

The distance between points $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$\boxed{d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$

This is derived from **Pythagoras' theorem**.

---

### Worked Example 9

> Find the length of the line segment joining $A(1, 2)$ and $B(4, 6)$.

**Solution:**
$$d = \sqrt{(4-1)^2 + (6-2)^2}$$
$$d = \sqrt{3^2 + 4^2}$$
$$d = \sqrt{9 + 16}$$
$$d = \sqrt{25}$$
$$\boxed{d = 5 \text{ units}}$$

---

>  **Common Mistake:** Forgetting to take the square root at the end, giving $d = 25$ instead of $d = 5$.

---

## 1.9 Finding Gradient from a Graph

When reading gradient from a graph:

**Step 1:** Choose two points on the line that pass through grid lines clearly

**Step 2:** Draw a right-angled triangle

**Step 3:** Calculate:
$$m = \frac{\text{vertical change (rise)}}{\text{horizontal change (run)}}$$

---

### Worked Example 10

> A line passes through $(1, 2)$ and $(4, 8)$. Find its gradient.

**Solution:**
$$m = \frac{8 - 2}{4 - 1} = \frac{6}{3} = 2$$

$$\boxed{m = 2}$$

---

# 2. Sketching Graphs

## 2.1 The Difference Between Plotting and Sketching

| Plotting | Sketching |
|----------|-----------|
| Accurate to scale | Not to scale |
| Uses many points | Shows key features only |
| On graph paper | Quick diagram |
| Precise coordinates | Shape and position |

---

## 2.2 Sketching Straight-Line Graphs

### Key Features to Show:
1. **Y-intercept** (where the line crosses the $y$-axis)
2. **X-intercept** (where the line crosses the $x$-axis)
3. **General direction** (positive or negative gradient)

---

### Finding the X-Intercept

Set $y = 0$ and solve for $x$.

---

### Worked Example 11

> Sketch the line $y = 2x - 4$, showing the intercepts.

**Solution:**

**Y-intercept:** Set $x = 0$
$$y = 2(0) - 4 = -4$$
Point: $(0, -4)$

**X-intercept:** Set $y = 0$
$$0 = 2x - 4$$
$$2x = 4$$
$$x = 2$$
Point: $(2, 0)$

**Sketch:** Draw a line passing through $(0, -4)$ and $(2, 0)$ with positive gradient.

---

## 2.3 Sketching Quadratic Graphs ($y = ax^2 + bx + c$)

### Key Features:
1. **Shape:** Parabola (∪ if $a > 0$, ∩ if $a < 0$)
2. **Y-intercept:** Set $x = 0$, gives $y = c$
3. **X-intercepts (roots):** Solve $ax^2 + bx + c = 0$
4. **Turning point (vertex):** Maximum or minimum point

---

### Finding the Turning Point

The $x$-coordinate of the turning point is at:
$$x = -\frac{b}{2a}$$

Substitute this value back into the equation to find $y$.

---

### Worked Example 12

> Sketch the graph of $y = x^2 - 4x + 3$, showing all key features.

**Solution:**

**Step 1:** Identify the shape
$a = 1 > 0$, so parabola opens **upward** (∪ shape)

**Step 2:** Find the $y$-intercept
When $x = 0$: $y = 0^2 - 4(0) + 3 = 3$
$y$-intercept: $(0, 3)$

**Step 3:** Find the $x$-intercepts
$$x^2 - 4x + 3 = 0$$
$$(x - 1)(x - 3) = 0$$
$$x = 1 \text{ or } x = 3$$
$x$-intercepts: $(1, 0)$ and $(3, 0)$

**Step 4:** Find the turning point
$$x = -\frac{b}{2a} = -\frac{-4}{2(1)} = 2$$
$$y = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$$
Turning point: $(2, -1)$

**Step 5:** Sketch
- Draw axes
- Mark $(0, 3)$, $(1, 0)$, $(3, 0)$, $(2, -1)$
- Draw smooth U-shaped curve through all points

---

## 2.4 Sketching Quadratics in Completed Square Form

**Completed square form:** $y = a(x - h)^2 + k$

Where:
- $(h, k)$ is the **turning point**
- If $a > 0$: minimum at $(h, k)$
- If $a < 0$: maximum at $(h, k)$

---

### Worked Example 13

> Sketch $y = (x - 2)^2 - 1$

**Solution:**

From the form $y = (x - 2)^2 - 1$:
- $a = 1 > 0$ (opens upward, minimum)
- Turning point: $(2, -1)$

**Y-intercept:** Set $x = 0$
$$y = (0 - 2)^2 - 1 = 4 - 1 = 3$$
Point: $(0, 3)$

**X-intercepts:** Set $y = 0$
$$(x - 2)^2 - 1 = 0$$
$$(x - 2)^2 = 1$$
$$x - 2 = \pm 1$$
$$x = 3 \text{ or } x = 1$$
Points: $(1, 0)$ and $(3, 0)$

---

## 2.5 Sketching Cubic Graphs ($y = ax^3 + bx^2 + cx + d$)

### Key Features:
1. **Shape:** S-curve (can have up to 2 turning points)
2. **Y-intercept:** Set $x = 0$, gives $y = d$
3. **X-intercepts:** Solve $ax^3 + bx^2 + cx + d = 0$

---

### Basic Cubic Shapes

| Equation | Shape |
|----------|-------|
| $y = x^3$ | S-curve through origin, bottom-left to top-right |
| $y = -x^3$ | S-curve through origin, top-left to bottom-right |
| $y = x^3 + k$ | S-curve shifted up by $k$ |
| $y = (x - h)^3$ | S-curve shifted right by $h$ |

---

### Worked Example 14

> Sketch $y = x^3 - 4x$

**Solution:**

**Y-intercept:** $x = 0$ gives $y = 0$
Point: $(0, 0)$

**X-intercepts:** Solve $x^3 - 4x = 0$
$$x(x^2 - 4) = 0$$
$$x(x - 2)(x + 2) = 0$$
$$x = 0, 2, -2$$
Points: $(-2, 0)$, $(0, 0)$, $(2, 0)$

**Turning points:** Find where $\frac{dy}{dx} = 0$
$$\frac{dy}{dx} = 3x^2 - 4 = 0$$
$$x^2 = \frac{4}{3}$$
$$x = \pm \frac{2\sqrt{3}}{3} \approx \pm 1.15$$

**Shape:** Positive $x^3$ coefficient, so bottom-left to top-right S-curve.

---

## 2.6 Sketching Reciprocal Graphs ($y = \frac{k}{x}$)

### Key Features:
1. **Asymptotes:**
   - Vertical asymptote: $x = 0$ ($y$-axis)
   - Horizontal asymptote: $y = 0$ ($x$-axis)
2. **Two branches** in opposite quadrants

---

### Shape Based on $k$

| $k$ | Quadrants | Shape |
|-----|-----------|-------|
| $k > 0$ | I and III | Curves in top-right and bottom-left |
| $k < 0$ | II and IV | Curves in top-left and bottom-right |

---

### Worked Example 15

> Sketch $y = \frac{2}{x}$

**Solution:**

- $k = 2 > 0$, so curves in Quadrants I and III
- Asymptotes: $x = 0$ and $y = 0$
- No intercepts (graph never touches axes)

**Key points:**
- $(1, 2)$ and $(-1, -2)$
- $(2, 1)$ and $(-2, -1)$

---

## 2.7 Sketching Exponential Graphs ($y = ka^x$)

### Key Features:
1. **Y-intercept:** $(0, k)$ since $a^0 = 1$
2. **Asymptote:** $y = 0$ ($x$-axis)
3. **Always positive** for $k > 0$, $a > 0$

---

### Shape Based on Base $a$

| Condition | Shape |
|-----------|-------|
| $a > 1$ | Rising curve (exponential growth) |
| $0 < a < 1$ | Falling curve (exponential decay) |

---

### Worked Example 16

> Sketch $y = 2^x$

**Solution:**

- $a = 2 > 1$: exponential growth
- $y$-intercept: $(0, 1)$ since $2^0 = 1$
- Asymptote: $y = 0$

**Key points:**
- $(-1, 0.5)$, $(0, 1)$, $(1, 2)$, $(2, 4)$

---

## 2.8 Summary of Graph Shapes

| Function | Shape | Key Features |
|----------|-------|--------------|
| $y = mx + c$ | Straight line | Gradient $m$, $y$-intercept $c$ |
| $y = ax^2 + bx + c$ | Parabola | Turning point, $y$-intercept $c$ |
| $y = x^3$ | S-curve | Through origin |
| $y = \frac{k}{x}$ | Hyperbola | Asymptotes at axes |
| $y = ka^x$ | Exponential | Horizontal asymptote $y = 0$ |

---

# 3. Simultaneous Equations (Graphical Solutions)

## 3.1 Understanding Graphical Solutions

**Key Concept:** The solution to simultaneous equations is the **point of intersection** of their graphs.

When solving graphically:
- Each equation represents a line (or curve)
- The solution is the $(x, y)$ coordinates where they meet
- **Always read coordinates accurately** from the graph

---

## 3.2 Solving Linear Simultaneous Equations Graphically

### Method:

**Step 1:** Plot both lines on the same axes

**Step 2:** Identify the point of intersection

**Step 3:** Read off the coordinates $(x, y)$

---

### Worked Example 17

> Solve the simultaneous equations graphically:
> $$y = 2x + 1$$
> $$y = -x + 4$$

**Solution:**

**Plot Line 1:** $y = 2x + 1$
- $y$-intercept: $(0, 1)$
- Gradient: $m = 2$ (up 2, right 1)
- Another point: $(1, 3)$

**Plot Line 2:** $y = -x + 4$
- $y$-intercept: $(0, 4)$
- Gradient: $m = -1$ (down 1, right 1)
- Another point: $(1, 3)$

**Point of intersection:** $(1, 3)$

**Answer:** $\boxed{x = 1, y = 3}$

**Verification:**
- $y = 2(1) + 1 = 3$ ✓
- $y = -(1) + 4 = 3$ ✓

---

## 3.3 Solving Linear and Quadratic Simultaneous Equations Graphically

### Method:

**Step 1:** Plot the straight line

**Step 2:** Plot the quadratic curve

**Step 3:** Identify all points of intersection (there may be 0, 1, or 2)

**Step 4:** Read off the coordinates of each intersection

---

### Worked Example 18

> Solve graphically:
> $$y = x^2$$
> $$y = x + 2$$

**Solution:**

**Plot Curve 1:** $y = x^2$
- Parabola opening upward
- Through $(0, 0)$, $(-1, 1)$, $(1, 1)$, $(-2, 4)$, $(2, 4)$

**Plot Line 2:** $y = x + 2$
- $y$-intercept: $(0, 2)$
- Gradient: $m = 1$
- Through $(-1, 1)$ and $(2, 4)$

**Points of intersection:**
Reading from graph: $(-1, 1)$ and $(2, 4)$

**Answer:** $\boxed{x = -1, y = 1 \text{ or } x = 2, y = 4}$

---

## 3.4 Types of Solutions

| Situation | Graphical Interpretation | Number of Solutions |
|-----------|--------------------------|---------------------|
| Two lines with different gradients | Lines intersect once | **1 solution** |
| Parallel lines | Lines never meet | **No solution** |
| Same line | Lines coincide | **Infinite solutions** |
| Line and parabola | Line cuts curve twice | **2 solutions** |
| Line and parabola | Line touches curve | **1 solution** (tangent) |
| Line and parabola | Line misses curve | **No solution** |

---

## 3.5 Using Graphs to Estimate Solutions

When the intersection point doesn't fall on exact grid lines:

1. **Draw the graphs accurately**
2. **Estimate the coordinates** to the nearest half or tenth
3. **Check algebraically** if possible

---

### Worked Example 19

> Use the graph of $y = x^2 - 3x + 1$ and $y = 2x - 1$ to find approximate solutions.

**Solution:**

From the graph, the intersection points appear to be at approximately:
- $(0.4, -0.2)$ and $(4.6, 8.2)$

**Algebraic verification:**
$$x^2 - 3x + 1 = 2x - 1$$
$$x^2 - 5x + 2 = 0$$
$$x = \frac{5 \pm \sqrt{25 - 8}}{2} = \frac{5 \pm \sqrt{17}}{2}$$

$$x \approx 0.44 \text{ or } x \approx 4.56$$

The graphical estimate is reasonable.

---

## 3.6 Graphical vs Algebraic Solutions

| Graphical Method | Algebraic Method |
|------------------|------------------|
| Visual and intuitive | Exact solutions |
| Good for estimation | No drawing needed |
| Shows all solutions clearly | Faster for simple equations |
| Required for some exam questions | Always works for linear equations |

---

> 📝 **Exam Tip:** When a question asks to "solve graphically," you **must** draw the graphs and read from them, even if you can solve algebraically.

---

## 3.7 Using Intersections to Solve Inequalities

**Concept:** To find where $f(x) > g(x)$, look at where the graph of $f(x)$ is **above** the graph of $g(x)$.

---

### Worked Example 20

> Using the graphs of $y = x^2$ and $y = 2x$, find the values of $x$ for which $x^2 < 2x$.

**Solution:**

**Step 1:** Find the intersection points
$$x^2 = 2x$$
$$x^2 - 2x = 0$$
$$x(x - 2) = 0$$
$$x = 0 \text{ or } x = 2$$

**Step 2:** Identify where $x^2 < 2x$
The parabola $y = x^2$ is below the line $y = 2x$ between $x = 0$ and $x = 2$.

**Answer:** $\boxed{0 < x < 2}$

---

# 4. Exam Focus & Strategy

## 4.1 Frequently Tested Question Types

### Straight-Line Graphs
1. ✅ **Finding gradient and intercept** from equation
2. ✅ **Finding equation** from two points or point and gradient
3. ✅ **Parallel and perpendicular lines**
4. ✅ **Midpoint and distance calculations**
5. ✅ **Real-life applications** (conversion graphs, distance-time)

### Sketching Graphs
1. ✅ **Sketching with intercepts clearly marked**
2. ✅ **Finding turning points** of quadratics
3. ✅ **Identifying key features** from equations
4. ✅ **Matching graphs to equations**

### Simultaneous Equations
1. ✅ **Drawing two lines** and finding intersection
2. ✅ **Linear-quadratic** intersections
3. ✅ **Interpreting graphical solutions**
4. ✅ **Estimating solutions** from graphs

---

## 4.2 Typical Problem-Solving Patterns

### Pattern 1: "Find the equation of the line..."
**Keywords:** "passes through," "parallel to," "perpendicular to"

**Strategy:**
1. Extract gradient information first
2. Use point to find $y$-intercept
3. Write in $y = mx + c$ form

---

### Pattern 2: "Sketch the graph of..."
**Keywords:** "show intercepts," "turning point," "shape"

**Strategy:**
1. Identify the type of graph
2. Find $x$ and $y$ intercepts
3. Find turning point (for quadratics)
4. Draw smooth curve with labeled points

---

### Pattern 3: "Solve graphically..."
**Keywords:** "draw the graphs," "find the intersection," "use the graph"

**Strategy:**
1. Create a table of values for each equation
2. Plot both accurately
3. Read intersection coordinates carefully
4. Check answer makes sense

---

## 4.3 Command Word Guidance

| Command Word | What It Means | How to Answer |
|--------------|---------------|---------------|
| **Sketch** | Draw without accuracy, show key features | Label intercepts, turning points, asymptotes |
| **Plot** | Draw accurately using coordinates | Use graph paper, plot points precisely |
| **Find** | Calculate or determine | Show working, give exact answer |
| **Determine** | Find with certainty | Show full working |
| **Write down** | State without working | No calculation needed |
| **Calculate** | Show your working | Full method required |
| **Draw** | Produce accurate graph | Use appropriate scale |

---

## 4.4 How to Gain Full Marks

### For Equation of a Line Questions (3-4 marks)
1. ✓ Show calculation of gradient
2. ✓ Show substitution into $y = mx + c$
3. ✓ State final equation clearly
4. ✓ Check answer makes sense

---

### For Sketching Questions (2-4 marks)
1. ✓ Correct shape (parabola, line, etc.)
2. ✓ $y$-intercept labeled
3. ✓ $x$-intercept(s) labeled
4. ✓ Turning point labeled (for quadratics)

---

### For Graphical Solution Questions (3-5 marks)
1. ✓ Accurate table of values
2. ✓ Correct plotting of both graphs
3. ✓ Clear identification of intersection
4. ✓ Coordinates read correctly
5. ✓ Answer stated clearly

---

## 4.5 Key Formulas Summary

### Straight Lines

$$\boxed{y = mx + c}$$

$$\boxed{m = \frac{y_2 - y_1}{x_2 - x_1}}$$

$$\boxed{m_1 \times m_2 = -1 \text{ (perpendicular lines)}}$$

### Coordinates

$$\boxed{\text{Midpoint} = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)}$$

$$\boxed{d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$

### Quadratics

$$\boxed{\text{Turning point at } x = -\frac{b}{2a}}$$

---

## 4.6 Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forgetting negative signs in gradient | Check direction of line carefully |
| Confusing $x$ and $y$ coordinates | Remember $(x, y)$ - alphabetical order |
| Not labeling axes or points | Always label with coordinates |
| Drawing curves with straight lines | Use smooth curves for quadratics |
| Reading wrong scale on axes | Check scale before reading values |
| Finding only one intersection | Check for multiple intersections |
| Forgetting to find $c$ after gradient | Complete all steps for full equation |

---

## 4.7 Exam Checklist

Before attempting graph questions, ensure you can:

- [ ] Identify gradient and intercept from $y = mx + c$
- [ ] Calculate gradient from two points
- [ ] Find equation given point and gradient
- [ ] Find equation given two points
- [ ] Recognize parallel and perpendicular lines
- [ ] Calculate midpoint and distance
- [ ] Sketch straight lines with intercepts
- [ ] Sketch quadratics showing all features
- [ ] Recognize basic graph shapes
- [ ] Plot graphs accurately from tables
- [ ] Read coordinates from intersections
- [ ] Solve simultaneous equations graphically

---

## 4.8 Time Management Tips

| Question Type | Suggested Time |
|---------------|----------------|
| Finding equation (simple) | 2-3 minutes |
| Finding equation (parallel/perpendicular) | 3-4 minutes |
| Sketching straight line | 2-3 minutes |
| Sketching quadratic | 4-5 minutes |
| Plotting from table | 4-5 minutes |
| Graphical solution (linear) | 5-6 minutes |
| Graphical solution (quadratic) | 6-8 minutes |

---

> 🎯 **Final Exam Tip:** Always **check your answer** by substituting back into the original equation. This catches most arithmetic errors!

---

*These notes are aligned with the Pearson Edexcel IGCSE Mathematics specification and are designed for students targeting Grade 9 (A*).*
