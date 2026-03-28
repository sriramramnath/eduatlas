# Chapter 25: Graphs 5 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics

---

##  Topics Covered
1. Inequalities on Graphs
2. Perpendicular Lines
3. Midpoints
4. Using Pythagoras

---

# 1. Inequalities on Graphs

## 1.1 Introduction to Inequalities on Graphs

Graphical inequalities involve representing regions on a coordinate grid that satisfy one or more inequalities.

> **📌 Key Concept:**
> An inequality like $y > 2x + 1$ represents a **region** on the coordinate plane, not just a line.

---

## 1.2 Types of Inequalities

| Inequality | Meaning | Boundary Line |
|-----------|---------|---------------|
| $y > mx + c$ | Region **above** the line | **Dashed** (not included) |
| $y < mx + c$ | Region **below** the line | **Dashed** (not included) |
| $y \geq mx + c$ | Region **above** the line | **Solid** (included) |
| $y \leq mx + c$ | Region **below** the line | **Solid** (included) |

---

## 1.3 Drawing Inequality Regions

### Step-by-Step Method:

1. **Draw the boundary line**
   - For $>$ or $<$: use a **dashed line**
   - For $\geq$ or $\leq$: use a **solid line**

2. **Identify which region to shade**
   - Substitute a **test point** (usually the origin $(0,0)$ if not on the line)
   - If the inequality is true for the test point, shade that region

3. **Shade the required region**
   - Clearly shade the region that satisfies the inequality

---

### Example 1: Drawing $y \leq 2x + 1$

**Question:** Shade the region satisfying $y \leq 2x + 1$

**Solution:**

**Step 1:** Draw the line $y = 2x + 1$

Find two points on the line:
- When $x = 0$: $y = 2(0) + 1 = 1$ → Point $(0, 1)$
- When $x = 2$: $y = 2(2) + 1 = 5$ → Point $(2, 5)$

Use a **solid line** (because $\leq$ includes the line)

**Step 2:** Test with the origin $(0, 0)$

Is $0 \leq 2(0) + 1$?
$0 \leq 1$ → **TRUE**

**Step 3:** Shade the region **below** the line (including the origin)

**Answer:** Shade the region below and including the line $y = 2x + 1$

---

### Example 2: Drawing $y > x^2 - 4$

**Question:** Shade the region satisfying $y > x^2 - 4$

**Solution:**

**Step 1:** Draw the curve $y = x^2 - 4$

| $x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| $y$ | 5 | 0 | -3 | -4 | -3 | 0 | 5 |

Use a **dashed curve** (because $>$ does not include the curve)

**Step 2:** Test with the origin $(0, 0)$

Is $0 > 0^2 - 4$?
$0 > -4$ → **TRUE**

**Step 3:** Shade the region **above** the curve (including the origin)

**Answer:** Shade the region above (but not including) the parabola $y = x^2 - 4$

---

## 1.4 Systems of Inequalities (Multiple Inequalities)

When multiple inequalities are given, the solution is the **intersection** of all regions.

### Example 3: System of Linear Inequalities

**Question:** Shade the region satisfying:
- $y \leq 2x + 3$
- $y > -x + 1$
- $x \geq 0$

**Solution:**

**Step 1:** Draw each boundary line

| Inequality | Line | Type of Line |
|------------|------|--------------|
| $y \leq 2x + 3$ | $y = 2x + 3$ | Solid |
| $y > -x + 1$ | $y = -x + 1$ | Dashed |
| $x \geq 0$ | $x = 0$ (y-axis) | Solid |

**Step 2:** Identify each region using test points

- $y \leq 2x + 3$: Test $(0,0)$ → $0 \leq 3$ ✓ → Region below line
- $y > -x + 1$: Test $(0,0)$ → $0 > 1$ ✗ → Region above line
- $x \geq 0$: Test $(1,0)$ → $1 \geq 0$ ✓ → Region to the right of y-axis

**Step 3:** Shade the overlapping region

The solution is where all three regions intersect.

---

## 1.5 Identifying Inequalities from Graphs

### Method:

1. **Identify the boundary line/curve equation**
2. **Check if the line is solid or dashed**
   - Solid → includes the boundary ($\geq$ or $\leq$)
   - Dashed → excludes the boundary ($>$ or $<$)
3. **Identify the shaded region**
   - Above the line/curve → $y >$ or $y \geq$
   - Below the line/curve → $y <$ or $y \leq$

---

### Example 4: Writing Inequalities from a Graph

**Question:** A graph shows a solid line $y = 3x - 2$ with the region above it shaded. Write the inequality.

**Solution:**

- The line is solid → includes boundary
- Region above is shaded → use $>$ or $\geq$
- Therefore: **$y \geq 3x - 2$**

---

## 1.6 Common Mistakes with Inequalities on Graphs

> ** Common Mistakes:**
> 1. **Using the wrong type of line** – dashed for $<$ or $>$, solid for $\leq$ or $\geq$
> 2. **Shading the wrong region** – always use a test point to verify
> 3. **Forgetting that $(0,0)$ might be on the line** – choose another test point if needed
> 4. **Not clearly showing the shaded region** – use clear shading or label the region "R"
> 5. **Confusing $y > mx + c$ with $y < mx + c$** – remember: $y >$ is above, $y <$ is below

---

# 2. Perpendicular Lines

## 2.1 Introduction to Perpendicular Lines

Two lines are **perpendicular** if they intersect at right angles (90°).

> **📌 Key Concept:**
> For perpendicular lines, the product of their gradients equals $-1$.

---

## 2.2 The Perpendicular Gradient Rule

> **📌 Key Formula:**
> If two lines are perpendicular with gradients $m_1$ and $m_2$, then:
> $$m_1 \times m_2 = -1$$
>
> Or equivalently:
> $$m_2 = -\frac{1}{m_1}$$

This means the gradient of a perpendicular line is the **negative reciprocal** of the original gradient.

---

### Example 5: Finding Perpendicular Gradients

**Question:** Find the gradient of a line perpendicular to a line with gradient:
- (a) $m = 3$
- (b) $m = -2$
- (c) $m = \frac{1}{4}$
- (d) $m = -\frac{3}{5}$

**Solution:**

**(a)** If $m_1 = 3$, then:
$$m_2 = -\frac{1}{3}$$

**(b)** If $m_1 = -2$, then:
$$m_2 = -\frac{1}{-2} = \frac{1}{2}$$

**(c)** If $m_1 = \frac{1}{4}$, then:
$$m_2 = -\frac{1}{\frac{1}{4}} = -4$$

**(d)** If $m_1 = -\frac{3}{5}$, then:
$$m_2 = -\frac{1}{-\frac{3}{5}} = \frac{5}{3}$$

---

## 2.3 Finding the Equation of a Perpendicular Line

### Step-by-Step Method:

1. **Find the gradient** of the original line
2. **Calculate the perpendicular gradient** using $m_2 = -\frac{1}{m_1}$
3. **Use the given point** to find the y-intercept using $y = mx + c$

---

### Example 6: Equation of Perpendicular Line Through a Point

**Question:** Find the equation of the line perpendicular to $y = 2x - 5$ that passes through the point $(4, 3)$.

**Solution:**

**Step 1:** Find the gradient of the original line
From $y = 2x - 5$: $m_1 = 2$

**Step 2:** Find the perpendicular gradient
$$m_2 = -\frac{1}{2}$$

**Step 3:** Use the point $(4, 3)$ to find $c$

$$y = mx + c$$
$$3 = -\frac{1}{2}(4) + c$$
$$3 = -2 + c$$
$$c = 5$$

**Answer:** $y = -\frac{1}{2}x + 5$

---

### Example 7: Perpendicular Line Through a Given Point

**Question:** Find the equation of the line perpendicular to $3x + 4y = 12$ that passes through the origin.

**Solution:**

**Step 1:** Rearrange to find the gradient of the original line

$$3x + 4y = 12$$
$$4y = -3x + 12$$
$$y = -\frac{3}{4}x + 3$$

Gradient: $m_1 = -\frac{3}{4}$

**Step 2:** Find the perpendicular gradient
$$m_2 = -\frac{1}{-\frac{3}{4}} = \frac{4}{3}$$

**Step 3:** Use the origin $(0, 0)$ to find $c$

$$y = \frac{4}{3}x + c$$
$$0 = \frac{4}{3}(0) + c$$
$$c = 0$$

**Answer:** $y = \frac{4}{3}x$

---

## 2.4 Checking if Two Lines are Perpendicular

### Method:

1. Find the gradient of each line
2. Check if $m_1 \times m_2 = -1$

---

### Example 8: Verifying Perpendicular Lines

**Question:** Determine whether the lines $y = 3x + 2$ and $x + 3y = 6$ are perpendicular.

**Solution:**

**Line 1:** $y = 3x + 2$
Gradient: $m_1 = 3$

**Line 2:** $x + 3y = 6$
$$3y = -x + 6$$
$$y = -\frac{1}{3}x + 2$$
Gradient: $m_2 = -\frac{1}{3}$

**Check:**
$$m_1 \times m_2 = 3 \times \left(-\frac{1}{3}\right) = -1$$

**Answer:** Yes, the lines are perpendicular.

---

## 2.5 Parallel vs Perpendicular Lines

| Property | Parallel Lines | Perpendicular Lines |
|----------|---------------|---------------------|
| **Gradients** | $m_1 = m_2$ | $m_1 \times m_2 = -1$ |
| **Relationship** | Same gradient | Negative reciprocals |
| **Angle** | Never meet (or are the same line) | Meet at 90° |

---

## 2.6 Common Mistakes with Perpendicular Lines

> ** Common Mistakes:**
> 1. **Confusing parallel and perpendicular gradients**
>    - Parallel: same gradient
>    - Perpendicular: negative reciprocal
> 2. **Forgetting the negative sign** in the perpendicular gradient
> 3. **Sign errors with negative gradients**
>    - Perpendicular to $m = -3$ is $m = \frac{1}{3}$ (positive!)
> 4. **Not checking the product** $m_1 \times m_2 = -1$

---

# 3. Midpoints

## 3.1 Introduction to Midpoints

The **midpoint** of a line segment is the point exactly halfway between the two endpoints.

> **📌 Key Concept:**
> The midpoint divides a line segment into two equal parts.

---

## 3.2 The Midpoint Formula

> **📌 Key Formula:**
> For two points $A(x_1, y_1)$ and $B(x_2, y_2)$, the midpoint $M$ is:
> $$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

**Why this works:** The midpoint's coordinates are the **average** of the x-coordinates and the **average** of the y-coordinates.

---

### Example 9: Finding the Midpoint

**Question:** Find the midpoint of the line segment joining $A(2, 3)$ and $B(6, 9)$.

**Solution:**

Using the midpoint formula:
$$M = \left(\frac{2 + 6}{2}, \frac{3 + 9}{2}\right)$$
$$M = \left(\frac{8}{2}, \frac{12}{2}\right)$$
$$M = (4, 6)$$

**Answer:** Midpoint is $(4, 6)$

**Verification:** Distance from A to M should equal distance from M to B:
- $A(2,3)$ to $M(4,6)$: $\sqrt{(4-2)^2 + (6-3)^2} = \sqrt{4+9} = \sqrt{13}$
- $M(4,6)$ to $B(6,9)$: $\sqrt{(6-4)^2 + (9-6)^2} = \sqrt{4+9} = \sqrt{13}$ ✓

---

### Example 10: Midpoint with Negative Coordinates

**Question:** Find the midpoint of the line segment joining $P(-4, 2)$ and $Q(3, -6)$.

**Solution:**

$$M = \left(\frac{-4 + 3}{2}, \frac{2 + (-6)}{2}\right)$$
$$M = \left(\frac{-1}{2}, \frac{-4}{2}\right)$$
$$M = \left(-\frac{1}{2}, -2\right)$$

**Answer:** Midpoint is $\left(-\frac{1}{2}, -2\right)$

---

## 3.3 Finding an Endpoint Given the Midpoint

If you know one endpoint and the midpoint, you can find the other endpoint.

### Method:

Let the unknown endpoint be $(x, y)$ and use:
$$\text{midpoint} = \left(\frac{x_1 + x}{2}, \frac{y_1 + y}{2}\right)$$

---

### Example 11: Finding an Endpoint

**Question:** The midpoint of $AB$ is $M(3, -1)$. If $A$ has coordinates $(5, 4)$, find the coordinates of $B$.

**Solution:**

Let $B = (x, y)$

Using the midpoint formula:
$$\left(\frac{5 + x}{2}, \frac{4 + y}{2}\right) = (3, -1)$$

This gives two equations:
$$\frac{5 + x}{2} = 3 \quad \text{and} \quad \frac{4 + y}{2} = -1$$

**For x:**
$$5 + x = 6$$
$$x = 1$$

**For y:**
$$4 + y = -2$$
$$y = -6$$

**Answer:** $B = (1, -6)$

---

## 3.4 Applications of Midpoints

### Application 1: Finding the Centre of a Circle

The centre of a circle is the midpoint of the diameter.

---

### Example 12: Centre of a Circle

**Question:** The diameter of a circle has endpoints $(1, 2)$ and $(5, 8)$. Find the centre of the circle.

**Solution:**

Centre = midpoint of the diameter:
$$C = \left(\frac{1 + 5}{2}, \frac{2 + 8}{2}\right)$$
$$C = (3, 5)$$

**Answer:** Centre is $(3, 5)$

---

### Application 2: Verifying a Point is a Midpoint

---

### Example 13: Verifying a Midpoint

**Question:** Show that $(2, 1)$ is the midpoint of the line segment joining $(-1, 5)$ and $(5, -3)$.

**Solution:**

Calculate the midpoint:
$$M = \left(\frac{-1 + 5}{2}, \frac{5 + (-3)}{2}\right)$$
$$M = \left(\frac{4}{2}, \frac{2}{2}\right)$$
$$M = (2, 1)$$

**Answer:** Since the calculated midpoint is $(2, 1)$, the point is confirmed as the midpoint.

---

## 3.5 Common Mistakes with Midpoints

> ** Common Mistakes:**
> 1. **Adding instead of averaging** – remember to divide by 2
> 2. **Subtracting coordinates** – use addition, not subtraction
> 3. **Mixing up x and y coordinates** – keep them separate
> 4. **Sign errors with negative coordinates** – be careful with signs

---

# 4. Using Pythagoras

## 4.1 Introduction to Pythagoras' Theorem

**Pythagoras' Theorem** states that in a right-angled triangle:

> **📌 Key Formula:**
> $$a^2 + b^2 = c^2$$
>
> Where:
> - $a$ and $b$ are the lengths of the two shorter sides
> - $c$ is the length of the hypotenuse (longest side, opposite the right angle)

---

## 4.2 Pythagoras on a Coordinate Grid

The distance between two points can be found using Pythagoras' theorem.

> **📌 Distance Formula:**
> For two points $A(x_1, y_1)$ and $B(x_2, y_2)$, the distance $AB$ is:
> $$AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Why this works:** The horizontal distance is $|x_2 - x_1|$ and the vertical distance is $|y_2 - y_1|$. These form the two shorter sides of a right-angled triangle, with $AB$ as the hypotenuse.

---

### Example 14: Finding the Distance Between Two Points

**Question:** Find the distance between $A(1, 2)$ and $B(4, 6)$.

**Solution:**

**Method 1: Using the distance formula**

$$AB = \sqrt{(4 - 1)^2 + (6 - 2)^2}$$
$$AB = \sqrt{3^2 + 4^2}$$
$$AB = \sqrt{9 + 16}$$
$$AB = \sqrt{25}$$
$$AB = 5$$

**Method 2: Using Pythagoras directly**

- Horizontal distance: $|4 - 1| = 3$
- Vertical distance: $|6 - 2| = 4$
- Using Pythagoras: $AB = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$

**Answer:** Distance = 5 units

---

### Example 15: Distance with Negative Coordinates

**Question:** Find the distance between $P(-3, 1)$ and $Q(2, -3)$.

**Solution:**

$$PQ = \sqrt{(2 - (-3))^2 + (-3 - 1)^2}$$
$$PQ = \sqrt{(2 + 3)^2 + (-4)^2}$$
$$PQ = \sqrt{5^2 + 16}$$
$$PQ = \sqrt{25 + 16}$$
$$PQ = \sqrt{41}$$

**Answer:** Distance = $\sqrt{41}$ units (or approximately 6.40 units)

---

## 4.3 Applications of Pythagoras in Coordinate Geometry

### Application 1: Finding the Length of a Line Segment

---

### Example 16: Length of a Line Segment

**Question:** Find the length of the line segment with endpoints $(−2, 3)$ and $(1, 7)$.

**Solution:**

$$L = \sqrt{(1 - (-2))^2 + (7 - 3)^2}$$
$$L = \sqrt{3^2 + 4^2}$$
$$L = \sqrt{9 + 16}$$
$$L = \sqrt{25}$$
$$L = 5$$

**Answer:** Length = 5 units

---

### Application 2: Checking if a Triangle is Right-Angled

A triangle is right-angled if Pythagoras' theorem holds for its sides.

---

### Example 17: Verifying a Right-Angled Triangle

**Question:** The vertices of a triangle are $A(0, 0)$, $B(3, 0)$, and $C(3, 4)$. Show that triangle $ABC$ is right-angled at $B$.

**Solution:**

**Step 1:** Calculate the side lengths

$$AB = \sqrt{(3-0)^2 + (0-0)^2} = \sqrt{9} = 3$$

$$BC = \sqrt{(3-3)^2 + (4-0)^2} = \sqrt{16} = 4$$

$$AC = \sqrt{(3-0)^2 + (4-0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

**Step 2:** Check Pythagoras' theorem

$$AB^2 + BC^2 = 3^2 + 4^2 = 9 + 16 = 25$$
$$AC^2 = 5^2 = 25$$

Since $AB^2 + BC^2 = AC^2$, the triangle is right-angled at $B$.

**Answer:** Triangle $ABC$ is right-angled at $B$ (verified).

---

### Application 3: Finding Missing Coordinates

---

### Example 18: Finding a Missing Coordinate Using Pythagoras

**Question:** Point $P$ lies on the line $y = 4$ and is a distance of 5 units from $Q(1, 1)$. Find the possible coordinates of $P$.

**Solution:**

Let $P = (x, 4)$ since it lies on $y = 4$.

Using the distance formula:
$$\sqrt{(x - 1)^2 + (4 - 1)^2} = 5$$
$$\sqrt{(x - 1)^2 + 9} = 5$$

Square both sides:
$$(x - 1)^2 + 9 = 25$$
$$(x - 1)^2 = 16$$
$$x - 1 = \pm 4$$
$$x = 1 + 4 = 5 \quad \text{or} \quad x = 1 - 4 = -3$$

**Answer:** $P = (5, 4)$ or $P = (-3, 4)$

---

### Application 4: Finding the Radius of a Circle

The radius of a circle is the distance from the centre to any point on the circumference.

---

### Example 19: Finding the Radius

**Question:** A circle has centre $(2, -1)$ and passes through the point $(5, 3)$. Find the radius.

**Solution:**

Radius = distance from centre to point on circumference:
$$r = \sqrt{(5 - 2)^2 + (3 - (-1))^2}$$
$$r = \sqrt{3^2 + 4^2}$$
$$r = \sqrt{9 + 16}$$
$$r = \sqrt{25}$$
$$r = 5$$

**Answer:** Radius = 5 units

---

## 4.4 Pythagoras and Perpendicular Lines

Pythagoras can help verify perpendicularity by showing a right angle exists.

---

### Example 20: Using Pythagoras to Verify Perpendicular Lines

**Question:** Show that the lines from $(0, 0)$ to $(3, 4)$ and from $(0, 0)$ to $(4, -3)$ are perpendicular.

**Solution:**

**Step 1:** Calculate the distances
- $OA = \sqrt{3^2 + 4^2} = 5$ (where $O$ is the origin)
- $OB = \sqrt{4^2 + (-3)^2} = 5$
- $AB = \sqrt{(4-3)^2 + (-3-4)^2} = \sqrt{1 + 49} = \sqrt{50}$

**Step 2:** Check using Pythagoras

If $OA$ and $OB$ are perpendicular:
$$OA^2 + OB^2 = AB^2$$
$$5^2 + 5^2 = \sqrt{50}^2$$
$$25 + 25 = 50$$ ✓

**Answer:** The lines are perpendicular (verified).

**Alternative check using gradients:**
- Gradient of $OA$: $\frac{4}{3}$
- Gradient of $OB$: $\frac{-3}{4}$
- Product: $\frac{4}{3} \times \frac{-3}{4} = -1$ ✓

---

## 4.5 Common Mistakes with Pythagoras

> ** Common Mistakes:**
> 1. **Forgetting to take the square root** at the end
> 2. **Mixing up which side is the hypotenuse** – it's always the longest side
> 3. **Sign errors in subtraction** – $(x_2 - x_1)^2$ gives the same result as $(x_1 - x_2)^2$
> 4. **Not simplifying surds** – leave answers in exact form unless asked otherwise
> 5. **Adding instead of squaring** – remember $(x_2 - x_1)^2$, not $(x_2 - x_1) \times 2$

---

# 5. Summary Tables

## 5.1 Inequalities on Graphs

| Inequality | Boundary Line | Region |
|-----------|---------------|--------|
| $y > mx + c$ | Dashed | Above line |
| $y < mx + c$ | Dashed | Below line |
| $y \geq mx + c$ | Solid | Above line |
| $y \leq mx + c$ | Solid | Below line |

## 5.2 Perpendicular Lines

| Property | Rule |
|----------|------|
| Gradient relationship | $m_1 \times m_2 = -1$ |
| Perpendicular gradient | $m_2 = -\frac{1}{m_1}$ |
| Test for perpendicularity | Check if $m_1 \times m_2 = -1$ |

## 5.3 Midpoints

| Given | Formula |
|-------|---------|
| Two endpoints $(x_1, y_1)$ and $(x_2, y_2)$ | $M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$ |

## 5.4 Distance Formula (Pythagoras)

| Given | Formula |
|-------|---------|
| Two points $(x_1, y_1)$ and $(x_2, y_2)$ | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |

---

# 6. Common Mistakes & How to Avoid Them

##  Common Mistakes

| Topic | Mistake | Correction |
|-------|---------|------------|
| **Inequalities** | Wrong line type | Dashed for $<$/$>$, solid for $\leq$/$\geq$ |
| **Inequalities** | Wrong region shaded | Use test point to verify |
| **Perpendicular** | Forgetting negative sign | $m_2 = -\frac{1}{m_1}$ |
| **Perpendicular** | Confusing with parallel | Parallel: same gradient; Perpendicular: negative reciprocal |
| **Midpoint** | Adding without dividing by 2 | $M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$ |
| **Distance** | Forgetting square root | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| **Distance** | Sign errors | Squaring removes the need to worry about sign |

---

# 7. Exam Focus & Strategy

## 📌 Frequently Tested Question Types

1. **Shading regions on graphs**
   - Single inequality
   - Systems of inequalities
   - Writing inequalities from shaded regions

2. **Perpendicular lines**
   - Finding perpendicular gradient
   - Equation of perpendicular line through a point
   - Verifying perpendicularity

3. **Midpoints**
   - Finding midpoint given two endpoints
   - Finding endpoint given midpoint and other endpoint
   - Applications to circles

4. **Distance calculations**
   - Distance between two points
   - Length of line segment
   - Finding radius of circle
   - Verifying right-angled triangles

---

## 📌 Typical Problem-Solving Patterns

### Pattern 1: "Shade the region satisfying..."
1. Draw the boundary line (solid or dashed)
2. Use test point to identify correct region
3. Shade clearly and label if required

### Pattern 2: "Find the equation of the line perpendicular to..."
1. Find original gradient
2. Calculate perpendicular gradient: $m_2 = -\frac{1}{m_1}$
3. Use given point to find y-intercept

### Pattern 3: "Find the midpoint of..."
1. Apply formula: $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$
2. Give answer as coordinates

### Pattern 4: "Find the distance between..."
1. Apply formula: $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
2. Simplify surd if required

---

## 📌 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Shade** | Clearly fill in the required region |
| **Draw** | Accurately plot on a grid |
| **Find** | Calculate and give the answer |
| **Show** | Demonstrate with full working |
| **Determine** | Work out with clear method |
| **Verify** | Confirm by showing the mathematics works |
| **Write down** | State the answer without working |

---

## 📌 How to Gain Full Marks

### For Inequalities on Graphs:

1. **Draw correct boundary line** – solid or dashed
2. **Shade the correct region** – use test point
3. **Label clearly** – mark the region "R" if required
4. **For multiple inequalities** – show only the overlapping region

### For Perpendicular Lines:

1. **Show the gradient calculation** clearly
2. **Apply the negative reciprocal rule** correctly
3. **Use the point correctly** to find $c$
4. **State the final equation** in the required form

### For Midpoints:

1. **Show the formula application**
2. **Calculate both coordinates**
3. **Give answer as an ordered pair** $(x, y)$

### For Distance Calculations:

1. **Show the substitution** into the formula
2. **Simplify the expression** under the square root
3. **Give exact answer** (surd form) unless asked to round
4. **Round appropriately** if decimal answer required

---

## 📌 Last-Minute Checklist

Before the exam, make sure you can:

- [ ] Draw inequality regions (solid vs dashed lines)
- [ ] Identify regions using test points
- [ ] Write inequalities from shaded regions
- [ ] Calculate perpendicular gradients
- [ ] Find equations of perpendicular lines
- [ ] Verify if lines are perpendicular
- [ ] Calculate midpoints
- [ ] Find unknown endpoints from midpoints
- [ ] Calculate distances using Pythagoras
- [ ] Find lengths of line segments
- [ ] Apply distance formula to circles
- [ ] Verify right-angled triangles using Pythagoras

---

# 8. Practice Problems

## Problem 1: Inequalities on Graphs

Shade the region satisfying $y < 2x - 3$

<details>
<summary>Solution</summary>

**Step 1:** Draw the line $y = 2x - 3$ using a **dashed** line

Points: $(0, -3)$ and $(2, 1)$

**Step 2:** Test with origin $(0, 0)$
$$0 < 2(0) - 3$$
$$0 < -3$$ → FALSE

**Step 3:** Since origin doesn't satisfy, shade the region **below** the line (not containing origin)

**Key features:**
- Dashed line (boundary not included)
- Region below the line

</details>

---

## Problem 2: Perpendicular Lines

Find the equation of the line perpendicular to $y = -\frac{1}{3}x + 2$ that passes through $(6, 1)$.

<details>
<summary>Solution</summary>

**Step 1:** Original gradient: $m_1 = -\frac{1}{3}$

**Step 2:** Perpendicular gradient:
$$m_2 = -\frac{1}{-\frac{1}{3}} = 3$$

**Step 3:** Use point $(6, 1)$:
$$y = 3x + c$$
$$1 = 3(6) + c$$
$$1 = 18 + c$$
$$c = -17$$

**Answer:** $y = 3x - 17$

</details>

---

## Problem 3: Midpoints

The midpoint of $AB$ is $(4, 7)$. If $A = (2, 3)$, find $B$.

<details>
<summary>Solution</summary>

Let $B = (x, y)$

Using midpoint formula:
$$\left(\frac{2 + x}{2}, \frac{3 + y}{2}\right) = (4, 7)$$

Equating coordinates:
$$\frac{2 + x}{2} = 4 \implies 2 + x = 8 \implies x = 6$$
$$\frac{3 + y}{2} = 7 \implies 3 + y = 14 \implies y = 11$$

**Answer:** $B = (6, 11)$

</details>

---

## Problem 4: Distance

Find the distance between $(-1, 5)$ and $(3, 2)$.

<details>
<summary>Solution</summary>

$$d = \sqrt{(3 - (-1))^2 + (2 - 5)^2}$$
$$d = \sqrt{4^2 + (-3)^2}$$
$$d = \sqrt{16 + 9}$$
$$d = \sqrt{25}$$
$$d = 5$$

**Answer:** Distance = 5 units

</details>

---

## Problem 5: Right-Angled Triangle

Show that the triangle with vertices $A(0, 0)$, $B(6, 0)$, and $C(3, 4)$ is isosceles.

<details>
<summary>Solution</summary>

Calculate all three sides:

$$AB = \sqrt{(6-0)^2 + (0-0)^2} = \sqrt{36} = 6$$

$$AC = \sqrt{(3-0)^2 + (4-0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

$$BC = \sqrt{(3-6)^2 + (4-0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

Since $AC = BC = 5$ but $AC \neq AB$, the triangle is isosceles (two equal sides).

**Answer:** Triangle is isosceles with $AC = BC = 5$

</details>

---

*End of Notes*

---

** Key Takeaways:**
- Inequalities: Use dashed lines for $<$/$>$, solid for $\leq$/$\geq$
- Perpendicular gradients multiply to give $-1$
- Midpoint coordinates are averages of endpoint coordinates
- Distance formula comes from Pythagoras' theorem
- Always verify your answer using a test point or alternative method
