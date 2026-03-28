# Chapter 49: Shape and Space 9 - Concise Synopsis
## Complete Study Notes for Pearson Edexcel IGCSE Mathematics

---

## 1. Introduction to 3D Trigonometry

### 1.1 What is 3D Trigonometry?

**3D Trigonometry** extends the principles of right-angled triangle trigonometry to three-dimensional space. It involves finding lengths and angles in solid shapes such as cuboids, pyramids, cones, and other 3D objects.

> **Key Concept:** The fundamental approach is to identify or create right-angled triangles within the 3D shape, then apply standard trigonometry to solve for unknown values.

### 1.2 Why is 3D Trigonometry Important?

- **Real-world applications:** Architecture, engineering, navigation, robotics
- **Exam significance:** High-mark questions (often 4-6 marks) in IGCSE exams
- **Tests understanding:** Combines multiple concepts (trigonometry, Pythagoras, spatial reasoning)

---

## 2. Essential Prerequisites

### 2.1 Right-Angled Triangle Trigonometry

For any right-angled triangle:

| Ratio | Formula | Memory Aid |
|-------|---------|------------|
| Sine | $\sin\theta = \frac{\text{Opposite}}{\text{Hypotenuse}}$ | SOH |
| Cosine | $\cos\theta = \frac{\text{Adjacent}}{\text{Hypotenuse}}$ | CAH |
| Tangent | $\tan\theta = \frac{\text{Opposite}}{\text{Adjacent}}$ | TOA |

### 2.2 Pythagoras' Theorem

$$a^2 + b^2 = c^2$$

where $c$ is the hypotenuse (longest side) of a right-angled triangle.

### 2.3 Angle Properties

- **Angles in a triangle:** Sum to 180°
- **Angles on a straight line:** Sum to 180°
- **Right angle:** Always 90°

---

## 3. The Two Key Methods for 3D Trigonometry

### 3.1 Method 1: The Triangle Approach (Most Common)

**Step-by-step process:**

1. **Identify** the 3D shape and label key points with letters
2. **Draw** a right-angled triangle that contains the unknown you need to find
3. **Calculate** any missing sides using Pythagoras' theorem (if needed)
4. **Apply** trigonometry to find the required length or angle
5. **Check** your answer makes sense in the context

> ** Examiner Tip:** Always draw a separate 2D diagram of the triangle you're working with. This prevents confusion and earns method marks even if you make an arithmetic error.

### 3.2 Method 2: The "Angle Between" Approach

This is used when finding:
- **The angle between a line and a plane**
- **The angle between two planes**

---

## 4. Working with Common 3D Shapes

### 4.1 Cuboids (Rectangular Prisms)

A cuboid has three pairs of rectangular faces with edges of lengths $l$, $w$, and $h$.

**Key diagonals in a cuboid:**

| Diagonal Type | Formula | Description |
|---------------|---------|-------------|
| Face diagonal | $\sqrt{l^2 + w^2}$ | Diagonal across a rectangular face |
| Space diagonal | $\sqrt{l^2 + w^2 + h^2}$ | Diagonal from one vertex to opposite vertex |

**Derivation of Space Diagonal:**

Consider a cuboid with dimensions $l \times w \times h$:

1. First, find the diagonal of the base: $d_1 = \sqrt{l^2 + w^2}$
2. This diagonal, the height $h$, and the space diagonal $D$ form a right-angled triangle
3. Apply Pythagoras: $D^2 = d_1^2 + h^2 = (l^2 + w^2) + h^2$
4. Therefore: $D = \sqrt{l^2 + w^2 + h^2}$

---

### Worked Example 1: Finding a Length in a Cuboid

**Question:** A cuboid has dimensions 6 cm × 8 cm × 5 cm. Find the length of the diagonal from vertex A to vertex G (opposite corners).

**Solution:**

```
    G _______ H
     /|      /|
   D /_|_____/ |
    | |     |  |
    | F_____|__|C
    |/      | /
    A_______B
          E
```

**Step 1:** Identify the path of the diagonal
- The space diagonal AG passes through the interior of the cuboid

**Step 2:** Use the space diagonal formula
$$AG = \sqrt{l^2 + w^2 + h^2}$$

**Step 3:** Substitute values
$$AG = \sqrt{6^2 + 8^2 + 5^2}$$
$$AG = \sqrt{36 + 64 + 25}$$
$$AG = \sqrt{125}$$
$$AG = 5\sqrt{5} \approx 11.18 \text{ cm}$$

**Alternative method (showing full working):**

Let the diagonal of the base be $d$:
$$d = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10 \text{ cm}$$

Now, the space diagonal $AG$, the base diagonal $d$, and the height $h$ form a right-angled triangle:
$$AG = \sqrt{d^2 + h^2} = \sqrt{10^2 + 5^2} = \sqrt{100 + 25} = \sqrt{125} = 5\sqrt{5} \text{ cm}$$

---

### 4.2 Pyramids

A pyramid has a polygonal base and triangular faces meeting at an apex.

**Key terms:**
- **Apex:** The top vertex of the pyramid
- **Slant height:** The height of a triangular face (from base to apex along the face)
- **Vertical height:** The perpendicular distance from base to apex

#### Square-Based Pyramid

For a square-based pyramid with:
- Base side length $s$
- Vertical height $h$
- Slant height $l$ (height of triangular face)

**Key relationships:**

1. **Finding slant height from vertical height:**
   $$l = \sqrt{h^2 + \left(\frac{s}{2}\right)^2} = \sqrt{h^2 + \frac{s^2}{4}}$$

2. **Finding vertical height from slant height:**
   $$h = \sqrt{l^2 - \left(\frac{s}{2}\right)^2}$$

---

### Worked Example 2: Finding an Angle in a Pyramid

**Question:** A square-based pyramid has base edges of length 12 cm and a vertical height of 8 cm. Find the angle that a slant edge makes with the base.

**Solution:**

**Step 1:** Draw and label the pyramid

```
         V (apex)
        /|\
       / | \
      /  |  \
     /   |   \
    A----|----B
    |    O    |
    |    |    |
    C----+----D
```

**Step 2:** Identify the triangle needed
- We need the angle between edge VA and the base
- The horizontal distance from O to A is half the diagonal of the base square

**Step 3:** Calculate the horizontal distance OA
$$OA = \frac{\text{diagonal of square}}{2} = \frac{\sqrt{12^2 + 12^2}}{2} = \frac{12\sqrt{2}}{2} = 6\sqrt{2} \text{ cm}$$

**Step 4:** Draw the right-angled triangle VOA

```
    V
    |\
    | \
  8 |  \  (slant edge VA)
    |  θ\
    O----A
    6√2
```

**Step 5:** Apply trigonometry
- We have the opposite side (height = 8) and adjacent side (OA = 6√2)
- Use tangent: $\tan\theta = \frac{\text{opposite}}{\text{adjacent}}$

$$\tan\theta = \frac{8}{6\sqrt{2}} = \frac{8}{6\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}} = \frac{8\sqrt{2}}{12} = \frac{2\sqrt{2}}{3}$$

$$\theta = \tan^{-1}\left(\frac{2\sqrt{2}}{3}\right) = \tan^{-1}(0.9428...)$$

$$\theta \approx 43.3°$$

---

### 4.3 Cones

A cone has a circular base and a curved surface tapering to an apex.

**Key terms:**
- **Radius ($r$):** Radius of the circular base
- **Vertical height ($h$):** Perpendicular distance from base to apex
- **Slant height ($l$):** Distance from base circumference to apex

**Key relationship:**
$$l^2 = r^2 + h^2$$

---

### Worked Example 3: Finding the Angle Between Slant Height and Base

**Question:** A cone has a base radius of 5 cm and a vertical height of 12 cm. Find the angle between the slant height and the base.

**Solution:**

**Step 1:** Draw the triangle formed by the radius, height, and slant height

```
         V (apex)
         /|
        / |
       /  | 12 cm
      /   |
     /θ___|
    A     O
      5 cm
```

**Step 2:** Identify what we know
- Adjacent to angle θ: radius = 5 cm
- Opposite to angle θ: height = 12 cm

**Step 3:** Apply tangent
$$\tan\theta = \frac{12}{5}$$

$$\theta = \tan^{-1}\left(\frac{12}{5}\right) = \tan^{-1}(2.4)$$

$$\theta \approx 67.4°$$

---

## 5. Angle Between a Line and a Plane

### 5.1 Definition

The **angle between a line and a plane** is the angle between the line and its projection onto the plane.

**Construction method:**
1. From any point on the line, drop a perpendicular to the plane
2. Connect the foot of this perpendicular to where the line meets the plane
3. The angle between the original line and this connecting line is the required angle

### 5.2 Visual Understanding

```
        P
         \
          \  line
           \
            \
             θ\
                Q__________R
                projection
                (in plane)
```

- PQ is the line
- QR is the projection of PQ on the plane
- ∠PQR is the angle between the line and the plane

---

### Worked Example 4: Angle Between Line and Plane

**Question:** A cuboid ABCDEFGH has dimensions AB = 8 cm, BC = 6 cm, and AE = 5 cm. Find the angle that the diagonal AG makes with the base ABCD.

**Solution:**

**Step 1:** Visualize the cuboid

```
    H _______ G
     /|      /|
   E /_|_____/F|
    | |     | |
    |D|_____|_|C
    |/      |/
    A_______B
```

**Step 2:** Identify the relevant triangle
- Diagonal AG meets the base at A
- The vertical height from the base is AE = 5 cm
- The horizontal distance is the diagonal of the base: AC = √(8² + 6²) = 10 cm

**Step 3:** Draw the right-angled triangle

```
    G
    |\
    | \
  5 |  \ AG
    |  θ\
    A----C
      10
```

**Step 4:** Apply trigonometry
$$\tan\theta = \frac{5}{10} = 0.5$$

$$\theta = \tan^{-1}(0.5) \approx 26.6°$$

> ** Common Mistake:** Students often confuse the adjacent and opposite sides. Remember: the vertical height is opposite to the angle with the base (horizontal plane).

---

## 6. Angle Between Two Planes (Dihedral Angle)

### 6.1 Definition

The **angle between two planes** (dihedral angle) is measured by finding the angle between two lines, one in each plane, that are both perpendicular to the line of intersection.

### 6.2 Method for Finding the Angle Between Two Planes

1. **Identify** the line of intersection between the two planes
2. **Construct** two lines, one in each plane, perpendicular to the line of intersection
3. **Find** the angle between these two constructed lines

---

### Worked Example 5: Angle Between Two Faces of a Pyramid

**Question:** A regular tetrahedron has all edges equal to 10 cm. Find the angle between two adjacent faces.

**Solution:**

**Understanding:** A regular tetrahedron has 4 equilateral triangular faces. We need to find the angle between any two adjacent faces.

**Step 1:** Set up the geometry
- Let ABCD be the tetrahedron with base ABC and apex D
- The line of intersection between faces ABD and BCD is BD
- We need perpendiculars from A and C to BD

**Step 2:** Find the altitude of triangular face
- Each face is an equilateral triangle with side 10 cm
- Altitude of each face = 10 × sin(60°) = 10 × (√3/2) = 5√3 cm

**Step 3:** Consider the plane containing the altitudes
- Let M be the midpoint of BD
- AM and CM are perpendicular to BD
- AM = CM = 5√3 cm (altitude of equilateral triangle)
- AC = 10 cm (edge of tetrahedron)

**Step 4:** Use the triangle AMC
- AM and CM meet at M with angle θ between them
- This angle θ is the dihedral angle

Using the cosine rule in triangle AMC:
$$AC^2 = AM^2 + CM^2 - 2(AM)(CM)\cos\theta$$

$$100 = 75 + 75 - 2(75)\cos\theta$$
$$100 = 150 - 150\cos\theta$$
$$150\cos\theta = 50$$
$$\cos\theta = \frac{1}{3}$$
$$\theta = \cos^{-1}\left(\frac{1}{3}\right) \approx 70.5°$$

---

## 7. Advanced Problem-Solving Techniques

### 7.1 Multi-Stage Problems

Many 3D trigonometry problems require multiple stages:
1. First, find a length using Pythagoras
2. Then, use this result to find another length
3. Finally, find an angle using trigonometry

---

### Worked Example 6: Multi-Stage Problem

**Question:** A rectangular block has dimensions 12 cm × 9 cm × 8 cm. Point P is at the center of the 12 cm × 9 cm face. Find:
(a) The distance from P to the opposite corner of the block
(b) The angle this distance makes with the base

**Solution:**

**Step 1:** Set up the coordinate system
- Let the base be a 12 cm × 9 cm rectangle
- Height = 8 cm
- P is at the center of the top face

**Step 2:** Find the distance from P to the opposite corner (call it Q)

Position of P: 6 cm from one 9 cm edge, 4.5 cm from one 12 cm edge, at height 8 cm
Position of Q: at a bottom corner, height 0 cm

Horizontal distance from P to Q:
$$d_{horizontal} = \sqrt{6^2 + 4.5^2} = \sqrt{36 + 20.25} = \sqrt{56.25} = 7.5 \text{ cm}$$

(a) Distance from P to Q:
$$PQ = \sqrt{7.5^2 + 8^2} = \sqrt{56.25 + 64} = \sqrt{120.25} = 10.97 \text{ cm}$$

(b) Angle with the base:

```
    P
    |\
    | \
  8 |  \ PQ
    |  θ\
    +----Q
      7.5
```

$$\tan\theta = \frac{8}{7.5} = 1.067$$
$$\theta = \tan^{-1}(1.067) \approx 46.9°$$

---

## 8. Common Mistakes and How to Avoid Them

### 8.1 Top 10 Common Errors

| Mistake | Example | Correction |
|---------|---------|------------|
| 1. Using wrong trig ratio | Using tan when sin is needed | Label sides correctly (O, A, H) |
| 2. Confusing slant height with vertical height | Using slant height as triangle height | Read question carefully; slant = along face, vertical = perpendicular |
| 3. Forgetting to divide by 2 | Using full base instead of half | For apex-centered calculations, use half the base |
| 4. Not recognizing right angles | Assuming wrong triangle is right-angled | Verify 90° angles exist before applying trig |
| 5. Calculator mode error | Using radians instead of degrees | Check calculator shows "D" or "DEG" |
| 6. Arithmetic errors in Pythagoras | $5^2 = 25$ written as 10 | Write out each square separately |
| 7. Wrong triangle for angle | Drawing triangle that doesn't contain the angle | Ensure angle is in the triangle you're using |
| 8. Forgetting Pythagoras gives positive | Writing $\sqrt{16} = ±4$ | Lengths are always positive |
| 9. Angle in wrong position | Angle between line and plane calculated wrong | Draw projection, use vertical height as opposite |
| 10. Not using full working | Jumping to calculator | Show method for marks |

---

## 9. Exam Strategy and Technique

### 9.1 General Approach

1. **Read the question twice** - Identify exactly what's being asked
2. **Draw a clear diagram** - Label all points and measurements
3. **Identify the triangle** - Draw the specific right-angled triangle needed
4. **Show all working** - Method marks are available even with wrong answers
5. **Check reasonableness** - Does your answer make sense?

### 9.2 Mark Scheme Insights

**Typical mark distribution:**

| Marks | What's Expected |
|-------|-----------------|
| 1-2 | Single calculation or recognition of correct triangle |
| 3-4 | Multi-step problem with intermediate calculation shown |
| 5-6 | Complex problem requiring full structured solution |

**Common mark-earning steps:**
- Correct diagram (M1)
- Identifying correct triangle (M1)
- Using Pythagoras correctly (M1)
- Correct trigonometric ratio (M1)
- Correct substitution (M1)
- Accurate calculation (A1)
- Correct units and rounding (A1)

### 9.3 Showing Working

**Always show:**
- The formula you're using
- Values substituted into the formula
- Intermediate steps for multi-stage problems
- Final answer with units

**Example of good working:**

$$\text{Using Pythagoras: } AC = \sqrt{8^2 + 6^2}$$
$$= \sqrt{64 + 36}$$
$$= \sqrt{100}$$
$$= 10 \text{ cm}$$

$$\text{Finding angle: } \tan\theta = \frac{5}{10}$$
$$\theta = \tan^{-1}(0.5)$$
$$\theta = 26.6° \text{ (to 1 d.p.)}$$

---

## 10. Summary of Key Formulas

### 10.1 Essential Formulas

| Formula | When to Use |
|---------|-------------|
| $c = \sqrt{a^2 + b^2}$ | Finding hypotenuse from two shorter sides |
| $a = \sqrt{c^2 - b^2}$ | Finding a shorter side |
| $\sin\theta = \frac{O}{H}$ | Have opposite and hypotenuse |
| $\cos\theta = \frac{A}{H}$ | Have adjacent and hypotenuse |
| $\tan\theta = \frac{O}{A}$ | Have opposite and adjacent |
| $\theta = \sin^{-1}\left(\frac{O}{H}\right)$ | Finding angle with O and H |
| $\theta = \cos^{-1}\left(\frac{A}{H}\right)$ | Finding angle with A and H |
| $\theta = \tan^{-1}\left(\frac{O}{A}\right)$ | Finding angle with O and A |

### 10.2 3D Shape Formulas

| Shape | Key Formula |
|-------|-------------|
| Cuboid space diagonal | $d = \sqrt{l^2 + w^2 + h^2}$ |
| Pyramid (slant height) | $l = \sqrt{h^2 + \left(\frac{s}{2}\right)^2}$ |
| Cone | $l = \sqrt{r^2 + h^2}$ |

---

## 11. Practice Tips for A* Success

1. **Practice diagram drawing** - Clean diagrams prevent errors
2. **Work systematically** - Follow the same steps each time
3. **Check your calculator** - Always in degree mode
4. **Estimate first** - Know roughly what answer to expect
5. **Show every step** - Method marks add up
6. **Practice word problems** - Extract information carefully
7. **Time yourself** - A 4-mark question should take about 4-5 minutes
8. **Review mistakes** - Understand why you went wrong

---

*These notes cover all aspects of 3D Trigonometry required for Pearson Edexcel IGCSE Mathematics. For additional practice, see the accompanying Synopsis and Quiz documents.*
