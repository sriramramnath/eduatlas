# Chapter 45: Shape and Space 5 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics - Complete Study Notes

---

##  TOPIC OVERVIEW

Transformations are operations that change the position, size, or orientation of a shape while preserving certain properties. Understanding transformations is essential for geometric reasoning and problem-solving.

### Learning Objectives:
- Perform and describe translations using column vectors
- Perform and describe reflections using mirror lines
- Perform and describe rotations using centre, angle, and direction
- Perform and describe enlargements using centre and scale factor
- Combine transformations and describe single equivalent transformations
- Identify invariant points under transformations

---

## 1. TRANSLATIONS

### 1.1 Definition
A **translation** moves every point of a shape by the same distance in the same direction. The shape's size, orientation, and angles remain unchanged.

### 1.2 Column Vector Notation

A translation is described using a **column vector** $\begin{pmatrix} a \\ b \end{pmatrix}$ where:

- **$a$** = horizontal movement (positive = right, negative = left)
- **$b$** = vertical movement (positive = up, negative = down)

#### Key Formula:
$$\text{Translation vector} = \begin{pmatrix} x_{\text{new}} - x_{\text{original}} \\ y_{\text{new}} - y_{\text{original}} \end{pmatrix}$$

### 1.3 Worked Example

**Example 1:** Triangle ABC has vertices A(1, 2), B(3, 2), C(2, 4). Translate by vector $\begin{pmatrix} 4 \\ -3 \end{pmatrix}$.

**Solution:**
- Move 4 units right, 3 units down
- A(1, 2) → A'(1 + 4, 2 - 3) = A'(5, -1)
- B(3, 2) → B'(3 + 4, 2 - 3) = B'(7, -1)
- C(2, 4) → C'(2 + 4, 4 - 3) = C'(6, 1)

### 1.4 Describing a Translation

To fully describe a translation, write:
> "Translation by vector $\begin{pmatrix} a \\ b \end{pmatrix}$"

>  **Common Mistake:** Forgetting that positive $b$ means UP (not down)

>  **Exam Tip:** To find the translation vector between two shapes, pick corresponding points and calculate the difference.

### 1.5 Properties of Translation

| Property | Preserved? |
|----------|------------|
| Length | ✓ Yes |
| Angle | ✓ Yes |
| Area | ✓ Yes |
| Orientation | ✓ Yes |
| Parallelism | ✓ Yes |

---

## 2. REFLECTIONS

### 2.1 Definition
A **reflection** flips a shape over a line (mirror line), creating a mirror image. The shape's size and angles remain unchanged, but orientation is reversed.

### 2.2 Describing a Reflection

To fully describe a reflection, specify:
> "Reflection in the line [mirror line]"

### 2.3 Common Mirror Lines

| Mirror Line | Equation | Description |
|-------------|----------|-------------|
| y-axis | $x = 0$ | Vertical line through origin |
| x-axis | $y = 0$ | Horizontal line through origin |
| Vertical line | $x = a$ | Vertical line $a$ units from y-axis |
| Horizontal line | $y = b$ | Horizontal line $b$ units from x-axis |
| Line $y = x$ | $y = x$ | Diagonal through origin (45°) |
| Line $y = -x$ | $y = -x$ | Diagonal through origin (135°) |

### 2.4 Reflection Rules

#### Reflection in $x = a$ (vertical line):
$$(x, y) \rightarrow (2a - x, y)$$

**Why?** The x-coordinate changes; y stays the same. Distance from mirror line reverses.

#### Reflection in $y = b$ (horizontal line):
$$(x, y) \rightarrow (x, 2b - y)$$

**Why?** The y-coordinate changes; x stays the same. Distance from mirror line reverses.

#### Reflection in $y = x$:
$$(x, y) \rightarrow (y, x)$$

**Why?** Coordinates swap places.

#### Reflection in $y = -x$:
$$(x, y) \rightarrow (-y, -x)$$

**Why?** Coordinates swap and both change sign.

### 2.5 Worked Examples

**Example 2:** Reflect triangle with vertices A(2, 1), B(4, 1), C(3, 3) in the line $x = 5$.

**Solution:**
Using $(x, y) \rightarrow (2a - x, y)$ where $a = 5$:
- A(2, 1) → A'(2×5 - 2, 1) = A'(8, 1)
- B(4, 1) → B'(2×5 - 4, 1) = B'(6, 1)
- C(3, 3) → C'(2×5 - 3, 3) = C'(7, 3)

**Example 3:** Reflect point P(3, -2) in the line $y = x$.

**Solution:**
Using $(x, y) \rightarrow (y, x)$:
- P(3, -2) → P'(-2, 3)

**Example 4:** Reflect point Q(-1, 4) in the line $y = -x$.

**Solution:**
Using $(x, y) \rightarrow (-y, -x)$:
- Q(-1, 4) → Q'(-4, 1)

### 2.6 Properties of Reflection

| Property | Preserved? |
|----------|------------|
| Length | ✓ Yes |
| Angle | ✓ Yes |
| Area | ✓ Yes |
| Orientation | ✗ No (reversed) |
| Parallelism | ✓ Yes |

>  **Exam Tip:** Points on the mirror line are **invariant** (don't move)

---

## 3. ROTATIONS

### 3.1 Definition
A **rotation** turns a shape about a fixed point (centre of rotation) through a given angle in a specified direction.

### 3.2 Describing a Rotation

A complete description requires THREE things:
1. **Centre of rotation** (coordinates)
2. **Angle** (usually 90°, 180°, or 270°)
3. **Direction** (clockwise or anticlockwise)

>  **Common Mistake:** Omitting any of the three required elements loses marks!

### 3.3 Rotation Rules (about the origin)

#### Rotation 90° anticlockwise about origin:
$$(x, y) \rightarrow (-y, x)$$

**Derivation:** The point (x, y) moves perpendicular to its position, with x becoming y and y becoming -x.

#### Rotation 90° clockwise about origin:
$$(x, y) \rightarrow (y, -x)$$

#### Rotation 180° about origin:
$$(x, y) \rightarrow (-x, -y)$$

**Note:** 180° rotation has no direction needed (clockwise = anticlockwise).

### 3.4 Rotation Rules (about arbitrary point)

For rotation about point $(a, b)$:
1. Translate shape so centre moves to origin
2. Apply rotation about origin
3. Translate back

**Combined formula for 90° anticlockwise about $(a, b)$:**
$$(x, y) \rightarrow (a - (y - b), b + (x - a)) = (a - y + b, b + x - a)$$

### 3.5 Worked Examples

**Example 5:** Rotate triangle ABC with A(2, 1), B(4, 1), C(3, 3) by 90° anticlockwise about the origin.

**Solution:**
Using $(x, y) \rightarrow (-y, x)$:
- A(2, 1) → A'(-1, 2)
- B(4, 1) → B'(-1, 4)
- C(3, 3) → C'(-3, 3)

**Example 6:** Rotate point P(3, 2) by 180° about the point (1, 1).

**Solution:**
**Method 1 (Step-by-step):**
1. Translate P by vector $\begin{pmatrix} -1 \\ -1 \end{pmatrix}$: P → (2, 1)
2. Rotate 180°: (2, 1) → (-2, -1)
3. Translate back: (-2, -1) + (1, 1) = (-1, 0)

**Method 2 (Using the 180° rule):**
For 180° rotation about $(a, b)$:
$$(x, y) \rightarrow (2a - x, 2b - y)$$
- P(3, 2) → (2×1 - 3, 2×1 - 2) = (-1, 0)

**Example 7:** Rotate point Q(4, -1) by 90° clockwise about (2, 3).

**Solution:**
**Step 1:** Translate so (2, 3) becomes origin: Q' = (4-2, -1-3) = (2, -4)

**Step 2:** Apply 90° clockwise rotation $(x, y) \rightarrow (y, -x)$:
- (2, -4) → (-4, -2)

**Step 3:** Translate back: (-4+2, -2+3) = (-2, 1)

**Answer:** Q''(-2, 1)

### 3.6 Finding the Centre of Rotation

**Method using perpendicular bisectors:**
1. Join a point to its image
2. Draw the perpendicular bisector
3. Repeat for another pair of corresponding points
4. The intersection is the centre of rotation

>  **Exam Tip:** Use tracing paper in exams to verify rotations!

### 3.7 Properties of Rotation

| Property | Preserved? |
|----------|------------|
| Length | ✓ Yes |
| Angle | ✓ Yes |
| Area | ✓ Yes |
| Orientation | ✗ No (unless 360°) |
| Parallelism | ✓ Yes |

---

## 4. ENLARGEMENTS

### 4.1 Definition
An **enlargement** changes the size of a shape by a scale factor from a centre point. The shape remains similar (same angles, proportional sides).

### 4.2 Describing an Enlargement

A complete description requires TWO things:
1. **Centre of enlargement** (coordinates)
2. **Scale factor** (positive or negative number)

>  **Common Mistake:** Forgetting to state the centre of enlargement!

### 4.3 Scale Factor Rules

#### Positive Scale Factor:
- **SF > 1:** Shape gets larger
- **0 < SF < 1:** Shape gets smaller
- **SF = 1:** No change

#### Negative Scale Factor:
- Shape is enlarged AND inverted (rotated 180°)
- Image appears on opposite side of centre

### 4.4 Enlargement Formula

For enlargement with centre $(a, b)$ and scale factor $k$:
$$(x, y) \rightarrow (a + k(x-a), b + k(y-b))$$

**Why?** The distance from centre is multiplied by $k$.

**Simplified form:**
$$\text{New point} = \text{Centre} + k \times (\text{Original point} - \text{Centre})$$

### 4.5 Worked Examples

**Example 8:** Enlarge triangle ABC with A(1, 1), B(3, 1), C(2, 3) by scale factor 2, centre (0, 0).

**Solution:**
Using $(x, y) \rightarrow (kx, ky)$ for centre at origin:
- A(1, 1) → A'(2, 2)
- B(3, 1) → B'(6, 2)
- C(2, 3) → C'(4, 6)

**Example 9:** Enlarge point P(3, 5) by scale factor 3, centre (1, 2).

**Solution:**
Using formula: $(x, y) \rightarrow (a + k(x-a), b + k(y-b))$
- $a = 1, b = 2, k = 3$
- P(3, 5) → (1 + 3(3-1), 2 + 3(5-2))
- = (1 + 6, 2 + 9)
- = (7, 11)

**Alternative ray method:**
1. Draw ray from (1, 2) through P(3, 5)
2. Distance from centre to P = $\sqrt{(3-1)^2 + (5-2)^2} = \sqrt{13}$
3. New distance = $3 \times \sqrt{13}$
4. Point lies on same ray, 3 times further from centre

**Example 10:** Enlarge triangle with vertices (1, 1), (3, 1), (2, 3) by scale factor -2, centre (0, 0).

**Solution:**
Using $(x, y) \rightarrow (-2x, -2y)$:
- (1, 1) → (-2, -2)
- (3, 1) → (-6, -2)
- (2, 3) → (-4, -6)

The image is inverted (rotated 180°) and twice the size.

**Example 11:** Enlarge shape by scale factor $\frac{1}{2}$, centre (4, 2).

**Solution:**
For each point $(x, y)$:
- New x = $4 + \frac{1}{2}(x - 4)$
- New y = $2 + \frac{1}{2}(y - 2)$

For point (6, 4):
- New = $(4 + \frac{1}{2}(2), 2 + \frac{1}{2}(2)) = (5, 3)$

The image is half the size.

### 4.6 Finding the Scale Factor

**Formula:**
$$\text{Scale Factor} = \frac{\text{Image length}}{\text{Object length}}$$

**Using coordinates:**
$$k = \frac{\text{Distance from centre to image point}}{\text{Distance from centre to original point}}$$

### 4.7 Finding the Centre of Enlargement

**Method:**
1. Draw lines (rays) connecting corresponding vertices
2. All rays should intersect at the centre of enlargement

>  **Exam Tip:** If rays don't meet at a single point, check your work!

### 4.8 Area and Scale Factor

**Critical Formula:**
$$\text{Area Scale Factor} = (\text{Linear Scale Factor})^2$$

$$\text{Area}_{\text{image}} = k^2 \times \text{Area}_{\text{object}}$$

>  **Common Mistake:** Using $k$ instead of $k^2$ for area calculations!

### 4.9 Properties of Enlargement

| Property | Preserved? |
|----------|------------|
| Length | ✗ No (multiplied by $k$) |
| Angle | ✓ Yes |
| Area | ✗ No (multiplied by $k^2$) |
| Orientation | ✓ Yes (for positive $k$), ✗ No (for negative $k$) |
| Parallelism | ✓ Yes |
| Similarity | ✓ Yes (shapes are similar) |

---

## 5. COMBINED TRANSFORMATIONS

### 5.1 Definition
When two or more transformations are applied in sequence, we can often find a **single equivalent transformation**.

### 5.2 Key Combined Transformation Results

| Transformation 1 | Transformation 2 | Single Equivalent |
|------------------|------------------|-------------------|
| Reflection in $x = a$ | Reflection in $x = b$ | Translation $\begin{pmatrix} 2(b-a) \\ 0 \end{pmatrix}$ |
| Reflection in $y = a$ | Reflection in $y = b$ | Translation $\begin{pmatrix} 0 \\ 2(b-a) \end{pmatrix}$ |
| Rotation 90° CW | Rotation 90° CW (same centre) | Rotation 180° (same centre) |
| Rotation 180° | Rotation 180° (same centre) | No change (identity) |
| Rotation 90° ACW | Rotation 90° CW (same centre) | No change (identity) |
| Reflection in $y = x$ | Reflection in $y = -x$ | Rotation 180° about origin |

### 5.3 Double Reflection Theorem

**Two reflections in parallel lines:**
- Equivalent to a **translation**
- Distance of translation = $2 \times$ distance between mirror lines

**Two reflections in perpendicular lines:**
- Equivalent to a **rotation of 180°**
- Centre is the intersection of the mirror lines

**Two reflections in intersecting lines:**
- Equivalent to a **rotation**
- Angle = $2 \times$ angle between mirror lines
- Centre = intersection point

### 5.4 Worked Examples

**Example 12:** Triangle T is reflected in line $x = 2$, then reflected in line $x = 5$. Describe the single transformation.

**Solution:**
Two reflections in parallel lines = translation.
- Distance between lines = $5 - 2 = 3$
- Translation vector = $\begin{pmatrix} 2 \times 3 \\ 0 \end{pmatrix} = \begin{pmatrix} 6 \\ 0 \end{pmatrix}$

**Answer:** Translation by $\begin{pmatrix} 6 \\ 0 \end{pmatrix}$

**Example 13:** Shape S is rotated 90° clockwise about origin, then rotated 180° about origin. Find the single transformation.

**Solution:**
- Total angle = 90° + 180° = 270° clockwise
- Equivalent to: 90° anticlockwise about origin

**Answer:** Rotation 90° anticlockwise about (0, 0)

**Example 14:** Point P(2, 3) is reflected in $y = x$, then in $y = -x$. Find the image.

**Solution:**
**Method 1 (Step-by-step):**
- Reflection in $y = x$: (2, 3) → (3, 2)
- Reflection in $y = -x$: (3, 2) → (-2, -3)

**Method 2 (Using combined result):**
- This is equivalent to rotation 180° about origin
- (2, 3) → (-2, -3) ✓

**Example 15:** Rectangle R is enlarged by SF 2, centre O, then enlarged by SF 3, centre O. Find the single transformation.

**Solution:**
Combined scale factor = $2 \times 3 = 6$

**Answer:** Enlargement by scale factor 6, centre O

>  **Exam Tip:** For successive enlargements with the same centre, multiply the scale factors!

### 5.5 Inverse Transformations

Every transformation has an inverse that "undoes" it:

| Transformation | Inverse |
|----------------|---------|
| Translation $\begin{pmatrix} a \\ b \end{pmatrix}$ | Translation $\begin{pmatrix} -a \\ -b \end{pmatrix}$ |
| Reflection in line $L$ | Reflection in line $L$ (self-inverse!) |
| Rotation by angle $\theta$ | Rotation by angle $-\theta$ (same centre) |
| Enlargement SF $k$ | Enlargement SF $\frac{1}{k}$ (same centre) |

---

## 6. INVARIANT POINTS

### 6.1 Definition
**Invariant points** are points that remain unchanged after a transformation.

### 6.2 Invariant Points by Transformation

| Transformation | Invariant Points |
|----------------|------------------|
| Translation $\begin{pmatrix} 0 \\ 0 \end{pmatrix}$ | All points (identity) |
| Translation $\begin{pmatrix} a \\ b \end{pmatrix}$ (non-zero) | None |
| Reflection in line $L$ | All points on line $L$ |
| Rotation about point $P$ | Point $P$ only |
| Enlargement centre $C$, SF $k$ | Point $C$ only |
| Enlargement SF 1 | All points (identity) |

### 6.3 Example

**Example 16:** Find invariant points under reflection in $y = 2x + 1$.

**Solution:**
All points on the line $y = 2x + 1$ are invariant.

Verify: Point (0, 1) is on the line.
Reflection in $y = 2x + 1$ maps (0, 1) to (0, 1). ✓

---

## 7. EXAM TECHNIQUE

### 7.1 Command Words

| Command Word | What to Do |
|--------------|------------|
| **Describe** | State the transformation type and ALL required details |
| **Draw** | Accurately construct the image |
| **Find** | Calculate the required value |
| **Determine** | Work out with justification |

### 7.2 Gaining Full Marks for Description

**Translation:** "Translation by vector $\begin{pmatrix} a \\ b \end{pmatrix}$"

**Reflection:** "Reflection in the line [equation]"

**Rotation:** "Rotation [angle]° [direction] about ([centre])"

**Enlargement:** "Enlargement, scale factor $k$, centre ([coordinates])"

### 7.3 Common Loss of Marks

| Mistake | Consequence |
|---------|-------------|
| Wrong sign in column vector | 0 marks |
| Omitting direction for rotation | Lose 1 mark |
| Omitting centre for enlargement | Lose 1-2 marks |
| Confusing clockwise/anticlockwise | 0 marks |
| Using linear SF for area | 0 marks for that part |

### 7.4 Practical Tips

1. **Use tracing paper** for rotations and checking work
2. **Draw rays** from centre of enlargement to verify
3. **Count squares carefully** for translations
4. **Label images clearly** (A', B', C', etc.)
5. **Show construction lines** if asked for method

---

## 8. FORMULA SUMMARY

### Key Formulas to Memorize

| Transformation | Rule |
|----------------|------|
| Translation | $(x, y) \rightarrow (x + a, y + b)$ |
| Reflection in $x = a$ | $(x, y) \rightarrow (2a - x, y)$ |
| Reflection in $y = b$ | $(x, y) \rightarrow (x, 2b - y)$ |
| Reflection in $y = x$ | $(x, y) \rightarrow (y, x)$ |
| Reflection in $y = -x$ | $(x, y) \rightarrow (-y, -x)$ |
| Rotation 90° ACW about origin | $(x, y) \rightarrow (-y, x)$ |
| Rotation 90° CW about origin | $(x, y) \rightarrow (y, -x)$ |
| Rotation 180° about origin | $(x, y) \rightarrow (-x, -y)$ |
| Enlargement SF $k$, centre $(a, b)$ | $(x, y) \rightarrow (a + k(x-a), b + k(y-b))$ |

### Area Scale Factor

$$\text{Area factor} = k^2$$

---

## 9. PRACTICE PROBLEMS

### Problem 1 (3 marks)
Triangle PQR has vertices P(1, 1), Q(3, 1), R(2, 4). It is transformed to P'(−1, 1), Q'(−1, 3), R'(−4, 2). Describe fully the single transformation.

### Problem 2 (4 marks)
A rectangle has area 12 cm². After enlargement, its area is 108 cm². Find the linear scale factor.

### Problem 3 (5 marks)
Point A(2, 4) is rotated 90° clockwise about (−1, 3). Find the coordinates of the image.

---

## 10. ANSWERS TO PRACTICE PROBLEMS

### Problem 1 Solution
**Step 1:** Compare coordinates to identify transformation.
- P(1, 1) → P'(−1, 1): x changes from 1 to −1
- Looking at pattern: $(x, y) \rightarrow (-y, x)$ is NOT the case
- Check: $(x, y) \rightarrow (-y, x)$? P(1, 1) → (−1, 1)? No: $(−1, 1)$

Let me check reflection in $y = x$:
- P(1, 1) → (1, 1) ❌ Not this

Check rotation 90° anticlockwise about origin:
- $(x, y) \rightarrow (-y, x)$
- P(1, 1) → (−1, 1) ✓
- Q(3, 1) → (−1, 3) ✓
- R(2, 4) → (−4, 2) ✓

**Answer:** Rotation 90° anticlockwise about (0, 0)

### Problem 2 Solution
$$\frac{\text{Area}_{\text{new}}}{\text{Area}_{\text{original}}} = \frac{108}{12} = 9$$

Since $\text{Area factor} = k^2$:
$$k^2 = 9$$
$$k = 3$$

**Answer:** Scale factor = 3

### Problem 3 Solution
**Method:** Rotate about arbitrary point.

**Step 1:** Translate so centre becomes origin.
$$A' = A - (-1, 3) = (2 + 1, 4 - 3) = (3, 1)$$

**Step 2:** Apply 90° clockwise rotation.
$$(x, y) \rightarrow (y, -x)$$
$$(3, 1) \rightarrow (1, -3)$$

**Step 3:** Translate back.
$$(1, -3) + (-1, 3) = (0, 0)$$

**Answer:** A''(0, 0)

---

*End of Notes - Shape and Space 5: Transformations*
