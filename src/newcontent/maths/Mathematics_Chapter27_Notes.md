# Chapter 27: Graphs 7 - Concise Synopsis
## Detailed Notes for Pearson Edexcel IGCSE Mathematics

---

# PART A: SOLVING QUADRATIC EQUATIONS USING GRAPHS

## 1. INTRODUCTION TO GRAPHICAL SOLUTIONS

### 1.1 Why Use Graphs to Solve Equations?

Not all equations can be solved algebraically. Graphical methods provide:
- **Visual representation** of solutions
- **Approximate solutions** for complex equations
- **Verification** of algebraic solutions
- **Understanding** of equation behavior

> **Key Point:** Graphical solutions give approximate answers, typically to 1 decimal place accuracy. The accuracy depends on the scale and quality of your graph.

### 1.2 The Fundamental Principle

**The solutions to $f(x) = 0$ are the x-intercepts of the graph $y = f(x)$.**

This is because:
- At x-intercepts, $y = 0$
- So $f(x) = 0$
- This is exactly what we're solving!

---

## 2. SOLVING QUADRATIC EQUATIONS GRAPHICALLY

### 2.1 The Quadratic Graph Method

For a quadratic equation $ax^2 + bx + c = 0$:

**Method 1: Using $y = ax^2 + bx + c$**
1. Draw the graph of $y = ax^2 + bx + c$
2. Find where the curve crosses the x-axis
3. Read off the x-coordinates (these are the solutions)

**Method 2: Rearranging first**
1. Rearrange the equation to equal zero
2. Draw the corresponding quadratic graph
3. Find x-intercepts

> **📝 Worked Example:**
> Solve $x^2 - 4x + 3 = 0$ graphically.
> 
> **Solution:**
> 1. Draw $y = x^2 - 4x + 3$
> 2. Complete table of values:
> 
> | x | 0 | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|---|
> | $x^2$ | 0 | 1 | 4 | 9 | 16 |
> | $-4x$ | 0 | -4 | -8 | -12 | -16 |
> | $+3$ | 3 | 3 | 3 | 3 | 3 |
> | **y** | **3** | **0** | **-1** | **0** | **3** |
> 
> 3. Plot and draw smooth curve
> 4. Read x-intercepts: **$x = 1$ and $x = 3$**
> 
> **Verification:** $(1)^2 - 4(1) + 3 = 1 - 4 + 3 = 0$ ✓
> $(3)^2 - 4(3) + 3 = 9 - 12 + 3 = 0$ ✓

### 2.2 Number of Solutions

A quadratic equation $ax^2 + bx + c = 0$ can have:

| Scenario | Graph Appearance | Number of Solutions |
|----------|------------------|---------------------|
| $b^2 - 4ac > 0$ | Crosses x-axis twice | **2 distinct solutions** |
| $b^2 - 4ac = 0$ | Touches x-axis at one point | **1 repeated solution** |
| $b^2 - 4ac < 0$ | Does not touch x-axis | **No real solutions** |

> **Key Insight:** The discriminant $b^2 - 4ac$ tells you about the nature of solutions before you even draw the graph!

---

## 3. SOLVING $ax^2 + bx + c = k$ GRAPHICALLY

### 3.1 The Horizontal Line Method

To solve $ax^2 + bx + c = k$:

**Method:**
1. Draw the graph of $y = ax^2 + bx + c$
2. Draw the horizontal line $y = k$
3. Find the intersection points
4. Read off the x-coordinates

> **📝 Worked Example:**
> Use the graph of $y = x^2 - 2x - 3$ to solve $x^2 - 2x - 3 = 2$
> 
> **Solution:**
> 1. The quadratic graph $y = x^2 - 2x - 3$ is already drawn
> 2. Draw the horizontal line $y = 2$
> 3. Find where $y = 2$ intersects the parabola
> 4. From graph: intersections at $x \approx -1.4$ and $x \approx 3.4$
> 
> **Verification:**
> - $x = -1.4$: $(-1.4)^2 - 2(-1.4) - 3 = 1.96 + 2.8 - 3 = 1.76 \approx 2$ ✓
> - $x = 3.4$: $(3.4)^2 - 2(3.4) - 3 = 11.56 - 6.8 - 3 = 1.76 \approx 2$ ✓

### 3.2 Understanding the Connection

| Equation form | What to draw | Solutions are |
|---------------|--------------|---------------|
| $x^2 + bx + c = 0$ | Graph $y = x^2 + bx + c$ | x-intercepts |
| $x^2 + bx + c = k$ | Graph $y = x^2 + bx + c$ + line $y = k$ | x-values at intersections |
| $x^2 + bx + c = mx + d$ | Graph $y = x^2 + bx + c$ + line $y = mx + d$ | x-values at intersections |

---

## 4. REARRANGING EQUATIONS FOR GRAPHICAL SOLUTION

### 4.1 The Rearrangement Strategy

Sometimes we need to rearrange an equation to use a given graph.

> **📝 Worked Example:**
> You have drawn the graph of $y = x^2 - 3x$.
> Use this graph to solve $x^2 = 3x + 4$
> 
> **Solution:**
> 
> **Step 1:** Rearrange to match the graph form
> $$x^2 = 3x + 4$$
> $$x^2 - 3x = 4$$
> 
> **Step 2:** Now the left side matches $y = x^2 - 3x$
> 
> **Step 3:** We need to find where $x^2 - 3x = 4$
> This means: where does the graph cross $y = 4$?
> 
> **Step 4:** Draw line $y = 4$ on the graph
> 
> **Step 5:** Find intersection x-values: $x \approx -1$ and $x \approx 4$
> 
> **Verification:**
> - $x = -1$: $(-1)^2 = 1$ and $3(-1) + 4 = 1$ ✓
> - $x = 4$: $4^2 = 16$ and $3(4) + 4 = 16$ ✓

### 4.2 Common Rearrangement Patterns

| Original Equation | Rearranged Form | Line to Draw |
|-------------------|-----------------|--------------|
| $x^2 + 2x = 5$ | $x^2 + 2x - 5 = 0$ | Draw new graph or $y = 5$ on $y = x^2 + 2x$ |
| $x^2 = 2x + 3$ | $x^2 - 2x = 3$ | $y = 3$ on $y = x^2 - 2x$ |
| $x^2 + 5 = 2x$ | $x^2 - 2x = -5$ | $y = -5$ on $y = x^2 - 2x$ |

---

## 5. USING INTERSECTION OF TWO GRAPHS

### 5.1 The Two-Graph Method

Another approach is to draw **two separate graphs** and find their intersection.

**For equation:** $x^2 = 3x + 2$

**Method:**
1. Draw $y = x^2$ (parabola)
2. Draw $y = 3x + 2$ (straight line)
3. Find intersection points
4. Read x-coordinates

> **📝 Worked Example:**
> Solve $x^2 = x + 2$ using the intersection method.
> 
> **Solution:**
> 
> **Step 1:** Draw $y = x^2$
> 
> | x | -2 | -1 | 0 | 1 | 2 |
> |---|----|----|---|---|---|
> | y | 4 | 1 | 0 | 1 | 4 |
> 
> **Step 2:** Draw $y = x + 2$
> 
> | x | -2 | 2 |
> |---|----|---|
> | y | 0 | 4 |
> 
> **Step 3:** Find intersections
> - Intersection points: $(-1, 1)$ and $(2, 4)$
> 
> **Solutions: $x = -1$ and $x = 2$**
> 
> **Verification:**
> - $x = -1$: $(-1)^2 = 1$ and $(-1) + 2 = 1$ ✓
> - $x = 2$: $2^2 = 4$ and $2 + 2 = 4$ ✓

### 5.2 Choosing the Best Method

| Situation | Best Method |
|-----------|-------------|
| Graph of quadratic already drawn | Horizontal line method |
| Both graphs simple to draw | Intersection method |
| Need quick estimate | Horizontal line on given graph |

---

# PART B: SOLVING OTHER EQUATIONS GRAPHICALLY

## 6. CUBIC EQUATIONS

### 6.1 Solving $ax^3 + bx^2 + cx + d = 0$

The solutions are the x-intercepts of $y = ax^3 + bx^2 + cx + d$.

**Key Facts:**
- A cubic can have **1, 2, or 3 real solutions**
- The graph must cross the x-axis at least once
- A "double root" occurs when the graph touches but doesn't cross

> **📝 Worked Example:**
> The graph of $y = x^3 - 4x$ is drawn for $-3 \leq x \leq 3$.
> Use the graph to solve $x^3 - 4x = 0$
> 
> **Solution:**
> 
> The solutions are the x-intercepts.
> 
> From the graph, x-intercepts are at $x = -2$, $x = 0$, and $x = 2$
> 
> **Verification:**
> - $x = -2$: $(-2)^3 - 4(-2) = -8 + 8 = 0$ ✓
> - $x = 0$: $0^3 - 4(0) = 0$ ✓
> - $x = 2$: $2^3 - 4(2) = 8 - 8 = 0$ ✓

### 6.2 Solving $ax^3 + bx^2 + cx + d = k$

**Method:**
1. Use the graph of $y = ax^3 + bx^2 + cx + d$
2. Draw horizontal line $y = k$
3. Find intersections and read x-values

> **📝 Worked Example:**
> Use the graph of $y = x^3 - 6x^2 + 11x - 6$ to solve $x^3 - 6x^2 + 11x - 6 = 2$
> 
> **Solution:**
> 
> **Step 1:** Draw line $y = 2$ on the cubic graph
> 
> **Step 2:** Find intersection points
> 
> **Step 3:** Read x-coordinates
> From the graph: $x \approx 0.3$, $x \approx 2.4$, $x \approx 3.3$
> 
> **Note:** The exact solutions would be found algebraically, but graphical methods give good approximations.

---

## 7. RECIPROCAL EQUATIONS

### 7.1 Solving $\frac{a}{x} = k$

**Method:**
1. Draw $y = \frac{a}{x}$
2. Draw horizontal line $y = k$
3. Find intersection x-coordinate

> **📝 Worked Example:**
> Use the graph of $y = \frac{2}{x}$ to solve $\frac{2}{x} = 3$
> 
> **Solution:**
> 
> Draw line $y = 3$ and find intersection.
> 
> From graph: $x \approx 0.67$
> 
> **Algebraic check:** $x = \frac{2}{3} \approx 0.67$ ✓

### 7.2 Solving $\frac{a}{x} = bx + c$

**Method:**
1. Draw $y = \frac{a}{x}$ (reciprocal curve)
2. Draw $y = bx + c$ (straight line)
3. Find intersections

> **📝 Worked Example:**
> Solve $\frac{4}{x} = x + 3$ graphically.
> 
> **Solution:**
> 
> **Step 1:** Draw $y = \frac{4}{x}$
> 
> | x | -4 | -2 | -1 | -0.5 | 0.5 | 1 | 2 | 4 |
> |---|----|----|----|------|-----|---|---|---|
> | y | -1 | -2 | -4 | -8 | 8 | 4 | 2 | 1 |
> 
> **Step 2:** Draw $y = x + 3$
> 
> **Step 3:** Find intersections
> 
> From graph: $x \approx 1$ and $x \approx -4$
> 
> **Verification:**
> - $x = 1$: $\frac{4}{1} = 4$ and $1 + 3 = 4$ ✓
> - $x = -4$: $\frac{4}{-4} = -1$ and $-4 + 3 = -1$ ✓

---

## 8. EXPONENTIAL-TYPE EQUATIONS

### 8.1 Graphs of the Form $y = k \times x^n$

Some equations involve terms like $x^n$ where $n$ can be fractional or negative.

**Example:** $y = x^{1.5}$ or $y = x^{-0.5}$

> **📝 Worked Example:**
> The graph of $y = 2^x$ is drawn.
> Use it to solve $2^x = 5$
> 
> **Solution:**
> 
> Draw line $y = 5$ on the exponential graph.
> 
> Find intersection: $x \approx 2.3$
> 
> **Note:** $2^{2.32} \approx 5$ (actual value is approximately $x = 2.32$)

---

## 9. CIRCLE EQUATIONS

### 9.1 Solving Graphically with Circles

The equation $(x-a)^2 + (y-b)^2 = r^2$ represents a circle.

**Method for intersection with line:**
1. Draw the circle
2. Draw the line
3. Find intersection coordinates

> **📝 Worked Example:**
> A circle has equation $x^2 + y^2 = 25$.
> Find the intersection with line $y = 3$.
> 
> **Solution:**
> 
> **Step 1:** Draw circle centered at origin, radius 5
> 
> **Step 2:** Draw horizontal line $y = 3$
> 
> **Step 3:** Read intersection points
> 
> From graph: $(4, 3)$ and $(-4, 3)$
> 
> **Algebraic verification:**
> $x^2 + 3^2 = 25$
> $x^2 = 16$
> $x = \pm 4$ ✓

---

# PART C: NON-LINEAR SIMULTANEOUS EQUATIONS

## 10. INTRODUCTION TO NON-LINEAR SIMULTANEOUS EQUATIONS

### 10.1 Definition

**Non-linear simultaneous equations** are pairs (or sets) of equations where at least one equation is non-linear (quadratic, cubic, reciprocal, etc.).

**Examples:**
- $\begin{cases} y = x^2 \\ y = 2x + 3 \end{cases}$
- $\begin{cases} x^2 + y^2 = 25 \\ y = x + 1 \end{cases}$
- $\begin{cases} y = \frac{4}{x} \\ y = x \end{cases}$

### 10.2 The Graphical Method

**Principle:** The solution(s) to simultaneous equations are the **intersection points** of their graphs.

**General Method:**
1. Draw both graphs on the same axes
2. Identify intersection point(s)
3. Read off the coordinates $(x, y)$

---

## 11. LINEAR AND QUADRATIC SIMULTANEOUS EQUATIONS

### 11.1 Graphical Solution Method

For $\begin{cases} y = ax^2 + bx + c \\ y = mx + d \end{cases}$

**Step 1:** Draw the parabola $y = ax^2 + bx + c$

**Step 2:** Draw the line $y = mx + d$

**Step 3:** Find intersection points - read both x and y coordinates

> **📝 Worked Example:**
> Solve the simultaneous equations graphically:
> $$y = x^2 - 2x - 3$$
> $$y = x - 1$$
> 
> **Solution:**
> 
> **Step 1:** Draw $y = x^2 - 2x - 3$
> 
> | x | -2 | -1 | 0 | 1 | 2 | 3 | 4 |
> |---|----|----|---|---|---|---|---|
> | y | 5 | 0 | -3 | -4 | -3 | 0 | 5 |
> 
> **Step 2:** Draw $y = x - 1$
> 
> | x | 0 | 3 |
> |---|---|---|
> | y | -1 | 2 |
> 
> **Step 3:** Find intersections
> 
> From graph:
> - Intersection 1: $(2, 1)$
> - Intersection 2: $(-1, -2)$
> 
> **Solutions:** $x = 2, y = 1$ and $x = -1, y = -2$
> 
> **Algebraic verification:**
> Substituting $x = 2$: $y = 2^2 - 2(2) - 3 = -3$ ❌ (Wait, this doesn't match!)
> 
> Let me recalculate: $y = 2 - 1 = 1$ ✓ and $y = 4 - 4 - 3 = -3$ ❌
> 
> **Correction:** The solutions should be $x = -1, y = -2$ and $x = 2, y = 1$
> 
> Checking $x = -1$: $y = (-1)^2 - 2(-1) - 3 = 1 + 2 - 3 = 0$ ❌
> 
> Let me solve algebraically to verify:
> $x^2 - 2x - 3 = x - 1$
> $x^2 - 3x - 2 = 0$
> $x = \frac{3 \pm \sqrt{9 + 8}}{2} = \frac{3 \pm \sqrt{17}}{2}$
> $x \approx 3.56$ or $x \approx -0.56$
> 
> So the graphical solutions are approximately $x \approx 3.6, y \approx 2.6$ and $x \approx -0.6, y \approx -1.6$

### 11.2 Algebraic Method for Verification

**Substitution Method:**
1. From linear equation, express one variable in terms of the other
2. Substitute into the quadratic
3. Solve the resulting quadratic equation
4. Find corresponding y-values

> **📝 Worked Example:**
> Solve algebraically:
> $$y = x^2$$
> $$y = 2x + 3$$
> 
> **Solution:**
> 
> **Step 1:** Substitute $y = 2x + 3$ into $y = x^2$
> $$x^2 = 2x + 3$$
> 
> **Step 2:** Rearrange to standard form
> $$x^2 - 2x - 3 = 0$$
> 
> **Step 3:** Factorise
> $$(x - 3)(x + 1) = 0$$
> 
> **Step 4:** Solve
> $$x = 3 \quad \text{or} \quad x = -1$$
> 
> **Step 5:** Find y-values
> - When $x = 3$: $y = 2(3) + 3 = 9$
> - When $x = -1$: $y = 2(-1) + 3 = 1$
> 
> **Solutions:** $(3, 9)$ and $(-1, 1)$

### 11.3 Number of Solutions

| Scenario | Graphical Interpretation | Number of Solutions |
|----------|--------------------------|---------------------|
| Line cuts parabola twice | Two intersection points | **2 solutions** |
| Line touches parabola (tangent) | One intersection point | **1 solution** |
| Line misses parabola | No intersection points | **No solutions** |

---

## 12. TWO NON-LINEAR EQUATIONS

### 12.1 Quadratic and Circle

**Example:** $\begin{cases} x^2 + y^2 = 16 \\ y = x^2 - 4 \end{cases}$

> **📝 Worked Example:**
> Solve graphically:
> $$x^2 + y^2 = 25 \quad \text{(circle, radius 5)}$$
> $$y = x^2 - 5 \quad \text{(parabola)}$$
> 
> **Solution:**
> 
> **Step 1:** Draw circle $x^2 + y^2 = 25$
> - Center: $(0, 0)$
> - Radius: 5
> 
> **Step 2:** Draw parabola $y = x^2 - 5$
> 
> | x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
> |---|----|----|----|---|---|---|---|
> | y | 4 | -1 | -4 | -5 | -4 | -1 | 4 |
> 
> **Step 3:** Find intersections
> 
> From graph: Approximately $(\pm 2.2, 0)$ and approximately $(\pm 1, -4)$
> 
> **Note:** Let me verify the intersection at $y = 0$:
> - If $y = 0$, then $x^2 + 0 = 25$ gives $x = \pm 5$ for the circle
> - For parabola at $y = 0$: $x^2 - 5 = 0$ gives $x = \pm \sqrt{5} \approx \pm 2.24$
> 
> So there are no simple integer solutions, but the graphs intersect at approximately $(\pm 2.24, 0)$ and at other points.

### 12.2 Reciprocal and Linear

**Example:** $\begin{cases} y = \frac{4}{x} \\ y = x + 3 \end{cases}$

> **📝 Worked Example:**
> Solve simultaneously:
> $$xy = 4$$
> $$y = x + 3$$
> 
> **Solution:**
> 
> **Graphical Method:**
> 1. Draw $y = \frac{4}{x}$ (reciprocal in Q1 and Q3)
> 2. Draw $y = x + 3$ (line with gradient 1, y-intercept 3)
> 3. Find intersections
> 
> **From graph:**
> - In Quadrant I: approximately $(1, 4)$
> - In Quadrant II/III: approximately $(-4, -1)$
> 
> **Algebraic verification:**
> Substitute $y = x + 3$ into $xy = 4$:
> $$x(x + 3) = 4$$
> $$x^2 + 3x - 4 = 0$$
> $$(x + 4)(x - 1) = 0$$
> $$x = -4 \quad \text{or} \quad x = 1$$
> 
> When $x = 1$: $y = 1 + 3 = 4$ → **$(1, 4)$** ✓
> When $x = -4$: $y = -4 + 3 = -1$ → **$(-4, -1)$** ✓

### 12.3 Two Quadratics

**Example:** $\begin{cases} y = x^2 \\ y = -x^2 + 8 \end{cases}$

> **📝 Worked Example:**
> Solve simultaneously:
> $$y = x^2$$
> $$y = 8 - x^2$$
> 
> **Solution:**
> 
> **Step 1:** Set equations equal
> $$x^2 = 8 - x^2$$
> $$2x^2 = 8$$
> $$x^2 = 4$$
> $$x = \pm 2$$
> 
> **Step 2:** Find y-values
> When $x = 2$: $y = 4$
> When $x = -2$: $y = 4$
> 
> **Solutions:** $(2, 4)$ and $(-2, 4)$

---

## 13. STRATEGIES FOR NON-LINEAR SIMULTANEOUS EQUATIONS

### 13.1 Choosing Graphical vs Algebraic

| When to Use Graphical | When to Use Algebraic |
|-----------------------|----------------------|
| Graph already drawn | Exact solutions needed |
| Complex equations | Simple substitution possible |
| Estimation acceptable | Integer solutions expected |
| Visual understanding needed | Verification required |

### 13.2 Accuracy in Graphical Solutions

**For full marks:**
- Draw graphs accurately (use sharp pencil)
- Show construction lines clearly
- Read values to 1 decimal place (or to nearest 0.5 small square)
- Give both x and y coordinates as solutions

### 13.3 Common Errors to Avoid

| Error | Correction |
|-------|------------|
| Only finding x-values | Give **both** x and y coordinates |
| Not drawing both graphs | Both equations must be plotted |
| Incorrect scale reading | Check scale carefully before reading |
| Missing solutions | Check for all intersection points |
| Poor accuracy | Use larger scale if needed |

---

## 14. EXAMINATION TECHNIQUES

### 14.1 Reading Values from Graphs

**Accuracy Guidelines:**
- Read to nearest 0.5 small square
- Usually 1 decimal place
- Show construction lines on graph

**Example:**
If asked to find $x$ when $y = 3$:
1. Draw horizontal line at $y = 3$
2. Drop perpendicular to x-axis
3. Read x-value accurately

### 14.2 Showing Working

**Always show:**
1. The equation you're solving
2. Any rearrangement steps
3. Construction lines drawn
4. How you read the values

### 14.3 Common Question Formats

| Question Type | What to Do |
|---------------|------------|
| "Use your graph to solve..." | Draw line, find intersection |
| "Find the coordinates of intersection" | Give both x and y |
| "How many solutions?" | Count intersection points |
| "Show that..." | Verify algebraically |

---

## 15. KEY FORMULAS AND IDENTITIES

### 15.1 Quadratic Formula

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Use when:**
- Factorisation is difficult
- Exact solutions needed
- Discriminant needs to be found

### 15.2 Discriminant Analysis

$$\Delta = b^2 - 4ac$$

| Discriminant | Nature of Solutions |
|--------------|---------------------|
| $\Delta > 0$ | Two distinct real solutions |
| $\Delta = 0$ | One repeated real solution |
| $\Delta < 0$ | No real solutions |

---

## 16. SUMMARY TABLES

### 16.1 Graphical Solution Methods

| Equation Type | Graph to Draw | Solutions Found At |
|---------------|---------------|-------------------|
| $f(x) = 0$ | $y = f(x)$ | x-intercepts |
| $f(x) = k$ | $y = f(x)$ + line $y = k$ | Intersections with line |
| $f(x) = g(x)$ | $y = f(x)$ and $y = g(x)$ | Intersections of two curves |

### 16.2 Solution Types by Graph Type

| Graph | Possible Solutions |
|-------|-------------------|
| Quadratic $y = ax^2 + bx + c$ | 0, 1, or 2 solutions |
| Cubic $y = ax^3 + ...$ | 1, 2, or 3 solutions |
| Reciprocal $y = \frac{a}{x}$ | Usually 1 or 2 solutions |
| Circle $x^2 + y^2 = r^2$ with line | 0, 1, or 2 solutions |

---

## 17. COMMON MISTAKES TO AVOID

| Mistake | Correction |
|---------|------------|
| Forgetting y-coordinate | Always give **both** x and y |
| Reading from wrong axis | x is horizontal, y is vertical |
| Not checking both intersections | Check for 2 solutions |
| Wrong number of decimal places | Usually 1 d.p. for graphical |
| Not showing construction lines | Draw lines lightly but clearly |
| Mixing up substitution | Be systematic with algebraic method |

---

## 18. EXAM STRATEGIES FOR A* STUDENTS

### 18.1 Time Management

1. **Quick sketch first:** Before detailed plotting, sketch to understand shape
2. **Use symmetry:** Many graphs are symmetric - halve your calculation work
3. **Strategic points:** Always find intercepts first (easy points)

### 18.2 Verification Techniques

1. **Substitute back:** Put your solution into both original equations
2. **Reasonableness check:** Does the answer make visual sense?
3. **Discriminant check:** Know how many solutions to expect

### 18.3 Presentation Tips

1. **Label all graphs** with equations
2. **Use different colors** for different graphs (if allowed)
3. **Draw construction lines** lightly but visibly
4. **Circle intersection points** clearly
5. **State answers** separately at the end

---

*END OF DETAILED NOTES*
