# Chapter 21: Graphs 1 - Concise Synopsis
## Detailed Notes: Straight Line Graphs, Gradients, and Real-Life Applications

---

# 1. Gradient of a Straight Line

## 1.1 Understanding Gradient

The **gradient** (or slope) of a straight line measures how steep the line is. It tells us how much the line rises (or falls) for each unit we move horizontally.

### Definition

$$\text{Gradient} = \frac{\text{vertical change}}{\text{horizontal change}} = \frac{\text{rise}}{\text{run}}$$

### Key Concepts

| Gradient Value | Meaning |
|----------------|---------|
| **Positive** | Line slopes **uphill** from left to right |
| **Negative** | Line slopes **downhill** from left to right |
| **Zero** | Line is **horizontal** (flat) |
| **Undefined** | Line is **vertical** |

---

## 1.2 Calculating Gradient from a Graph

### Method: Using Two Points

When given two points on a line, $(x_1, y_1)$ and $(x_2, y_2)$:

$$\text{Gradient } m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{difference in } y}{\text{difference in } x}$$

**Worked Example 1:**
Find the gradient of the line passing through points $A(1, 2)$ and $B(4, 8)$.

**Solution:**
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{8 - 2}{4 - 1} = \frac{6}{3} = 2$$

**Answer: Gradient = 2**

>  **Interpretation:** A gradient of 2 means for every 1 unit moved to the right, the line rises by 2 units.

**Worked Example 2:**
Find the gradient of the line passing through $P(-2, 5)$ and $Q(3, -5)$.

**Solution:**
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{-5 - 5}{3 - (-2)} = \frac{-10}{3 + 2} = \frac{-10}{5} = -2$$

**Answer: Gradient = -2**

>  **Common Mistake:** Forgetting that subtracting a negative number is adding: $3 - (-2) = 3 + 2 = 5$

---

## 1.3 Gradient from Rise and Run

### Method: Counting Squares

When a line is drawn on a grid, you can find the gradient by:
1. Pick two points on the line where the line passes through grid intersections
2. Count the **vertical distance** (rise)
3. Count the **horizontal distance** (run)
4. Divide rise by run

**Worked Example 3:**
A line goes through points at $(1, 1)$ and $(5, 7)$. Find its gradient by counting squares.

**Solution:**
- **Rise:** From $y = 1$ to $y = 7$ → rise = $7 - 1 = 6$ squares upward
- **Run:** From $x = 1$ to $x = 5$ → run = $5 - 1 = 4$ squares right

$$m = \frac{\text{rise}}{\text{run}} = \frac{6}{4} = \frac{3}{2} = 1.5$$

**Answer: Gradient = $\frac{3}{2}$ or 1.5**

---

## 1.4 Special Gradients

### Horizontal Lines

A horizontal line has equation $y = c$ (where $c$ is a constant).

**Gradient = 0** (no vertical change)

**Example:** The line $y = 3$ is horizontal with gradient 0.

### Vertical Lines

A vertical line has equation $x = c$ (where $c$ is a constant).

**Gradient = undefined** (infinite slope, cannot divide by zero)

**Example:** The line $x = 5$ is vertical with undefined gradient.

>  **Exam Trap:** A common mistake is to say vertical lines have gradient 0. Remember: horizontal = 0, vertical = undefined!

---

# 2. Equation of a Straight Line

## 2.1 The Form $y = mx + c$

Every straight line can be written in the form:

$$y = mx + c$$

Where:
- **$m$** = the gradient of the line
- **$c$** = the $y$-intercept (where the line crosses the $y$-axis)

### Why This Works

When $x = 0$: $y = m(0) + c = c$

This gives the point $(0, c)$, which is where the line crosses the $y$-axis.

---

## 2.2 Finding the Equation from Gradient and Point

### Method

Given gradient $m$ and a point $(x_1, y_1)$:

**Method 1 - Using $y = mx + c$:**
1. Substitute $m$ into the equation
2. Substitute the coordinates of the given point to find $c$
3. Write the final equation

**Worked Example 4:**
Find the equation of the line with gradient 3 that passes through the point $(2, 7)$.

**Solution:**
$$y = mx + c$$
$$y = 3x + c$$

Substitute $(2, 7)$:
$$7 = 3(2) + c$$
$$7 = 6 + c$$
$$c = 1$$

**Answer: $y = 3x + 1$**

**Method 2 - Using the formula:**

$$y - y_1 = m(x - x_1)$$

This is called the **point-gradient form**.

Using the same example:
$$y - 7 = 3(x - 2)$$
$$y - 7 = 3x - 6$$
$$y = 3x - 6 + 7$$
$$y = 3x + 1$$

---

## 2.3 Finding the Equation from Two Points

### Method

1. Calculate the gradient $m = \frac{y_2 - y_1}{x_2 - x_1}$
2. Use one point to find $c$
3. Write the equation

**Worked Example 5:**
Find the equation of the line passing through $(1, 4)$ and $(3, 10)$.

**Solution:**

**Step 1:** Find the gradient
$$m = \frac{10 - 4}{3 - 1} = \frac{6}{2} = 3$$

**Step 2:** Find $c$ using point $(1, 4)$
$$y = 3x + c$$
$$4 = 3(1) + c$$
$$4 = 3 + c$$
$$c = 1$$

**Answer: $y = 3x + 1$**

---

## 2.4 Parallel and Perpendicular Lines

### Parallel Lines

**Parallel lines have the SAME gradient.**

If line 1 has equation $y = m_1x + c_1$ and line 2 has equation $y = m_2x + c_2$:

Lines are parallel if and only if $m_1 = m_2$

**Worked Example 6:**
Find the equation of the line parallel to $y = 2x - 5$ that passes through $(0, 3)$.

**Solution:**
- Parallel means same gradient: $m = 2$
- Passes through $(0, 3)$ means $c = 3$ (the $y$-intercept)

**Answer: $y = 2x + 3$**

### Perpendicular Lines

**Perpendicular lines have gradients that multiply to give -1.**

$$m_1 \times m_2 = -1$$

Or equivalently, $m_2 = -\frac{1}{m_1}$ (negative reciprocal)

**Worked Example 7:**
Find the equation of the line perpendicular to $y = 2x + 1$ that passes through $(4, 1)$.

**Solution:**
- Original gradient: $m_1 = 2$
- Perpendicular gradient: $m_2 = -\frac{1}{2}$

$$y = -\frac{1}{2}x + c$$

Substitute $(4, 1)$:
$$1 = -\frac{1}{2}(4) + c$$
$$1 = -2 + c$$
$$c = 3$$

**Answer: $y = -\frac{1}{2}x + 3$**

>  **Memory Trick:** For perpendicular lines, flip the gradient and change the sign. E.g., $m = \frac{3}{4}$ → perpendicular gradient = $-\frac{4}{3}$

---

# 3. Plotting Straight Line Graphs

## 3.1 Using Tables of Values

### Method

To plot a straight line graph:

1. **Create a table** with $x$ values (usually integers like -3, -2, -1, 0, 1, 2, 3)
2. **Calculate corresponding $y$ values** by substituting each $x$ into the equation
3. **Plot the points** on a coordinate grid
4. **Draw a straight line** through the points with a ruler

**Worked Example 8:**
Plot the graph of $y = 2x + 1$ for $-2 \leq x \leq 2$

**Solution:**

| $x$ | $y = 2x + 1$ | Calculation | Point |
|-----|--------------|-------------|-------|
| -2 | $2(-2) + 1$ | $-4 + 1 = -3$ | $(-2, -3)$ |
| -1 | $2(-1) + 1$ | $-2 + 1 = -1$ | $(-1, -1)$ |
| 0 | $2(0) + 1$ | $0 + 1 = 1$ | $(0, 1)$ |
| 1 | $2(1) + 1$ | $2 + 1 = 3$ | $(1, 3)$ |
| 2 | $2(2) + 1$ | $4 + 1 = 5$ | $(2, 5)$ |

**Key Features:**
- **Gradient (m) = 2** (line goes up 2 units for every 1 unit right)
- **Y-intercept (c) = 1** (line crosses $y$-axis at $(0, 1)$)

---

## 3.2 Plotting Using Gradient and Intercept

### Method (Quick Method)

For equations in the form $y = mx + c$:

1. Start at the **$y$-intercept** $(0, c)$
2. Use the **gradient** to find more points
   - For positive gradient: go right, then up
   - For negative gradient: go right, then down

**Worked Example 9:**
Plot $y = \frac{1}{2}x - 2$ using the gradient-intercept method.

**Solution:**
- **$y$-intercept:** $(0, -2)$
- **Gradient:** $\frac{1}{2}$ = rise $\div$ run = $\frac{1}{2}$

This means: **go right 2, up 1**

Starting at $(0, -2)$:
- Go right 2, up 1 → $(2, -1)$
- Go right 2, up 1 → $(4, 0)$
- Go right 2, up 1 → $(6, 1)$

Alternatively, go left 2, down 1:
- $(0, -2)$ → left 2, down 1 → $(-2, -3)$

---

## 3.3 Rearranging Equations

Sometimes equations are not in the form $y = mx + c$. You need to rearrange them.

**Worked Example 10:**
Plot the graph of $2y + 4x = 6$

**Solution:**
Rearrange to $y = mx + c$ form:

$$2y + 4x = 6$$
$$2y = 6 - 4x$$
$$y = 3 - 2x$$
$$y = -2x + 3$$

Now we can see:
- **Gradient: $m = -2$**
- **Y-intercept: $c = 3$**

Table of values:

| $x$ | -1 | 0 | 1 | 2 | 3 |
|-----|-----|-----|-----|-----|-----|
| $y = -2x + 3$ | 5 | 3 | 1 | -1 | -3 |

>  **Common Mistake:** Trying to read gradient and intercept without rearranging first. Always convert to $y = mx + c$ form!

---

# 4. Conversion Graphs

## 4.1 Understanding Conversion Graphs

A **conversion graph** is a straight line that converts one quantity to another.

### Examples
- Currency conversion (e.g., Pounds to Euros)
- Temperature conversion (e.g., Celsius to Fahrenheit)
- Unit conversion (e.g., Miles to Kilometers)

### Key Features

- The line must pass through the origin $(0, 0)$ if there's a direct proportion relationship
- The **gradient** gives the **conversion rate**

---

## 4.2 Using Conversion Graphs

### Method

1. **To convert from one unit to another:**
   - Find the value on one axis
   - Read across to the line
   - Read the corresponding value on the other axis

**Worked Example 11:**
A conversion graph converts pounds (£) to dollars ($).
The graph passes through $(£10, $13)$ and $(£30, $39).

a) Find the conversion rate
b) Convert £25 to dollars

**Solution:**

a) **Finding the conversion rate (gradient):**
$$m = \frac{39 - 13}{30 - 10} = \frac{26}{20} = 1.3$$

**Conversion rate: £1 = $1.30**

b) **Converting £25:**
$$\$ = 1.3 \times 25 = \$32.50$$

Or using the equation $D = 1.3P$ where $D$ = dollars, $P$ = pounds:
$$D = 1.3 \times 25 = 32.50$$

**Answer: £25 = $32.50**

---

## 4.3 Interpreting Conversion Graphs

**Worked Example 12:**
The graph shows the relationship between miles and kilometers. It passes through $(5 \text{ miles}, 8 \text{ km})$ and $(10 \text{ miles}, 16 \text{ km})$.

a) Find the conversion factor
b) Convert 25 miles to km
c) Convert 48 km to miles

**Solution:**

a) **Conversion factor (gradient):**
$$m = \frac{16 - 8}{10 - 5} = \frac{8}{5} = 1.6$$

**Conversion: 1 mile = 1.6 km**

b) **Convert 25 miles:**
$$\text{Km} = 1.6 \times 25 = 40 \text{ km}$$

c) **Convert 48 km to miles:**
Since 1 mile = 1.6 km, then 1 km = $\frac{1}{1.6}$ miles
$$\text{Miles} = 48 \div 1.6 = 30 \text{ miles}$$

>  **Exam Tip:** Always check your answer makes sense. If 1 mile ≈ 1.6 km, then 48 km should be less than 48 miles (which it is: 30 miles).

---

# 5. Real-Life Relationships

## 5.1 Distance-Time Graphs

A **distance-time graph** shows how distance changes over time.

### Interpreting the Graph

| Feature | Meaning |
|---------|---------|
| **Gradient** | Speed (steeper = faster) |
| **Horizontal section** | Stationary (not moving) |
| **Straight uphill line** | Constant speed |
| **Curve** | Accelerating/decelerating |

**Worked Example 13:**
The distance-time graph shows a journey:

| Time (hours) | Distance (km) |
|--------------|---------------|
| 0 | 0 |
| 1 | 40 |
| 2 | 80 |
| 3 | 80 |
| 4 | 120 |

a) Calculate the speed between hours 0-2
b) What happens between hours 2-3?
c) Calculate the speed between hours 3-4

**Solution:**

a) **Speed 0-2 hours:**
$$\text{Speed} = \frac{\text{Distance}}{\text{Time}} = \frac{80 - 0}{2 - 0} = \frac{80}{2} = 40 \text{ km/h}$$

b) **Hours 2-3:** The distance stays at 80 km, so the object is **stationary** (stopped).

c) **Speed 3-4 hours:**
$$\text{Speed} = \frac{120 - 80}{4 - 3} = \frac{40}{1} = 40 \text{ km/h}$$

---

## 5.2 Speed-Time Graphs

A **speed-time graph** shows how speed changes over time.

### Interpreting the Graph

| Feature | Meaning |
|---------|---------|
| **Gradient** | Acceleration |
| **Horizontal section** | Constant speed |
| **Area under graph** | Distance traveled |

**Worked Example 14:**
A speed-time graph shows:
- 0-5 seconds: Speed increases from 0 to 20 m/s (straight line)
- 5-15 seconds: Speed stays at 20 m/s
- 15-20 seconds: Speed decreases to 0 (straight line)

a) Find the acceleration in the first 5 seconds
b) Find the total distance traveled

**Solution:**

a) **Acceleration (gradient):**
$$\text{Acceleration} = \frac{20 - 0}{5 - 0} = \frac{20}{5} = 4 \text{ m/s}^2$$

b) **Total distance (area under graph):**
- Area 1 (triangle): $\frac{1}{2} \times 5 \times 20 = 50$ m
- Area 2 (rectangle): $10 \times 20 = 200$ m
- Area 3 (triangle): $\frac{1}{2} \times 5 \times 20 = 50$ m

**Total distance = 50 + 200 + 50 = 300 m**

---

## 5.3 Other Real-Life Graphs

### Cost Graphs

**Worked Example 15:**
A taxi company charges a fixed fee of £3 plus £2 per mile.

a) Write an equation for the cost $C$ in terms of miles $m$
b) Draw a graph for $0 \leq m \leq 10$ miles
c) Use the graph to find the cost of a 7-mile journey

**Solution:**

a) **Equation:**
$$C = 2m + 3$$

Where:
- Fixed fee = £3 (y-intercept)
- Rate per mile = £2/mile (gradient)

b) **Table of values:**

| Miles ($m$) | 0 | 2 | 4 | 6 | 8 | 10 |
|-------------|-----|-----|-----|-----|-----|-----|
| Cost (£) | 3 | 7 | 11 | 15 | 19 | 23 |

c) **Cost for 7 miles:**
$$C = 2(7) + 3 = 14 + 3 = £17$$

Or read from graph: approximately £17

### Temperature Conversion

**Worked Example 16:**
The formula to convert Celsius ($C$) to Fahrenheit ($F$) is:
$$F = \frac{9}{5}C + 32$$

a) Draw a conversion graph for $0°C$ to $100°C$
b) Find the temperature that is the same in both scales

**Solution:**

a) **Key points:**
- $C = 0$: $F = \frac{9}{5}(0) + 32 = 32°F$
- $C = 100$: $F = \frac{9}{5}(100) + 32 = 180 + 32 = 212°F$

b) **When $F = C$:**
$$C = \frac{9}{5}C + 32$$
$$5C = 9C + 160$$
$$-4C = 160$$
$$C = -40$$

**Answer: $-40°C = -40°F$**

---

# 6. Exam Focus & Strategy

## 🔥 Frequently Tested Question Types

1. **Calculating gradient** from coordinates or from a drawn line
2. **Finding the equation** of a line from given information
3. **Plotting graphs** using tables of values
4. **Interpreting real-life graphs** (distance-time, conversion)
5. **Parallel and perpendicular lines**
6. **Finding midpoints** of line segments

---

## 🧩 Typical Problem-Solving Patterns

### Pattern 1: Multi-Part Graph Questions
- Often combine plotting with interpretation
- Always show working for gradient calculations
- Use the graph to verify calculations

### Pattern 2: Context-Based Questions
- Read the context carefully
- Identify what each axis represents
- Interpret the gradient in context (speed, rate, etc.)

### Pattern 3: Equation Finding
- Given: two points → find gradient first, then equation
- Given: gradient and point → use $y - y_1 = m(x - x_1)$
- Given: parallel/perpendicular to another line → compare gradients

---

## 📝 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Plot** | Mark points accurately on the grid provided |
| **Draw** | Sketch a graph (use pencil and ruler for straight lines) |
| **Find** | Calculate and show working |
| **Work out** | Same as find - show all steps |
| **Write down** | Give the answer without detailed working |
| **Explain** | Give a reason using mathematical vocabulary |
| **Interpret** | Explain what the graph shows in context |
| **Compare** | Make statements about similarities and differences |

---

##  How to Gain Full Marks

### For Gradient Questions
1. **Show the formula** you're using: $m = \frac{y_2 - y_1}{x_2 - x_1}$
2. **Substitute correctly** - be careful with negative numbers
3. **Simplify** your answer to simplest form

### For Plotting Questions
1. **Use a table** to organize your calculations
2. **Plot points accurately** using small, precise crosses
3. **Use a ruler** to draw the straight line
4. **Extend the line** across the full grid if required

### For Interpretation Questions
1. **Quote values** from the graph when giving answers
2. **Use correct units** (mph, £/hour, etc.)
3. **Explain in context** - what does the gradient represent?

---

##  Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Wrong way round in gradient formula | $\frac{y_2-y_1}{x_2-x_1}$ - y values on top! |
| Forgetting to rearrange to $y = mx + c$ | Always rearrange before identifying gradient |
| Confusing horizontal and vertical gradients | Horizontal = 0, Vertical = undefined |
| Reading scales incorrectly | Always check scale increments on axes |
| Not using ruler for straight lines | Always use a sharp pencil and ruler |
| Forgetting units in real-life questions | Speed in m/s or km/h, rates in £/hour, etc. |

---

# 7. Key Formulas Summary

| Concept | Formula |
|---------|---------|
| **Gradient** | $m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}$ |
| **Equation of a line** | $y = mx + c$ |
| **Point-gradient form** | $y - y_1 = m(x - x_1)$ |
| **Parallel lines** | Same gradient: $m_1 = m_2$ |
| **Perpendicular lines** | $m_1 \times m_2 = -1$ or $m_2 = -\frac{1}{m_1}$ |
| **Midpoint** | $(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2})$ |
| **Speed** | $\text{Speed} = \frac{\text{distance}}{\text{time}}$ |
| **Acceleration** | $\text{Acceleration} = \frac{\text{change in speed}}{\text{time}}$ |

---

*These notes follow the Pearson Edexcel IGCSE Mathematics specification and are designed for A* students aiming for the highest grades.*
