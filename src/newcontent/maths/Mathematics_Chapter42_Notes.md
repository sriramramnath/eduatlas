# Chapter 42: Shape and Space 2 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics (4MA1)

---

# 1. PYTHAGORAS' THEOREM

## 1.1 The Fundamental Theorem

### KEY FORMULA: Pythagoras' Theorem

For any right-angled triangle with hypotenuse $c$ and other two sides $a$ and $b$:

$$a^2 + b^2 = c^2$$

**Where:**
- $c$ = the **hypotenuse** (the side opposite the right angle, always the longest side)
- $a$ and $b$ = the other two sides (called the **legs** or **catheti**)

> ** CRITICAL:** Pythagoras' theorem ONLY applies to right-angled triangles!

---

## 1.2 Understanding the Hypotenuse

### Definition
The **hypotenuse** is:
- The side **opposite the right angle** (the 90° angle)
- Always the **longest side** in a right-angled triangle
- The side that does NOT touch the right angle

### Identifying the Hypotenuse

```
        C
        *
       /|\
      / | \
     /  |  \
    *---*---*
   A   D    B
```

In triangle $ABC$ above, if $\angle D = 90°$:
- The hypotenuse is $AB$ (opposite the right angle)
- The legs are $AC$ and $BC$

> **🎯 EXAM TIP:** Always identify which angle is 90° FIRST. The side opposite this angle is your hypotenuse.

---

## 1.3 Derivation of Pythagoras' Theorem

### Geometric Proof

Consider a square with side length $(a + b)$ containing four copies of the same right-angled triangle:

**Area of large square = Area of inner square + Area of 4 triangles**

$$(a + b)^2 = c^2 + 4 \times \frac{1}{2}ab$$

$$a^2 + 2ab + b^2 = c^2 + 2ab$$

$$a^2 + b^2 = c^2$$

---

## 1.4 Finding the Hypotenuse

### FORMULA

$$c = \sqrt{a^2 + b^2}$$

---

### 📐 Worked Example 1: Finding the Hypotenuse

**Problem:** In a right-angled triangle, the two shorter sides are 5 cm and 12 cm. Find the length of the hypotenuse.

**Solution:**

**Step 1:** Identify the hypotenuse
- Since these are the two shorter sides, we're finding the hypotenuse.

**Step 2:** Apply Pythagoras' theorem
$$c^2 = a^2 + b^2$$
$$c^2 = 5^2 + 12^2$$
$$c^2 = 25 + 144$$
$$c^2 = 169$$
$$c = \sqrt{169}$$
$$c = 13 \text{ cm}$$

> **📝 EXAM TIP:** The answer 13 cm comes from recognizing that $13^2 = 169$. Memorizing perfect squares up to $15^2 = 225$ saves time!

---

### 📐 Worked Example 2: Finding the Hypotenuse (Decimal Answer)

**Problem:** A right-angled triangle has legs of length 4.2 cm and 6.8 cm. Calculate the length of the hypotenuse correct to 2 decimal places.

**Solution:**

$$c^2 = 4.2^2 + 6.8^2$$
$$c^2 = 17.64 + 46.24$$
$$c^2 = 63.88$$
$$c = \sqrt{63.88}$$
$$c = 7.992... \text{ cm}$$
$$c = 7.99 \text{ cm} \text{ (to 2 d.p.)}$$

> ** COMMON MISTAKE:** Don't round intermediate values. Calculate $c^2$ first, then take the square root at the end.

---

## 1.5 Finding a Shorter Side

### FORMULA

$$a = \sqrt{c^2 - b^2}$$

When finding a shorter side, we **subtract** the squares.

---

### 📐 Worked Example 3: Finding a Shorter Side

**Problem:** The hypotenuse of a right-angled triangle is 17 cm and one leg is 15 cm. Find the length of the other leg.

**Solution:**

**Step 1:** Identify what we're finding
- Hypotenuse $c = 17$ cm (given)
- One leg $b = 15$ cm (given)
- Finding the other leg $a$

**Step 2:** Apply Pythagoras' theorem
$$a^2 + b^2 = c^2$$
$$a^2 + 15^2 = 17^2$$
$$a^2 + 225 = 289$$
$$a^2 = 289 - 225$$
$$a^2 = 64$$
$$a = \sqrt{64}$$
$$a = 8 \text{ cm}$$

> **🎯 KEY INSIGHT:** Notice the pattern 8-15-17 is a Pythagorean triple (see Section 1.8).

---

### 📐 Worked Example 4: Finding a Shorter Side (Decimal Answer)

**Problem:** In a right-angled triangle, the hypotenuse is 10 cm and one leg is 7.3 cm. Find the other leg to 1 decimal place.

**Solution:**

$$a^2 = c^2 - b^2$$
$$a^2 = 10^2 - 7.3^2$$
$$a^2 = 100 - 53.29$$
$$a^2 = 46.71$$
$$a = \sqrt{46.71}$$
$$a = 6.834... \text{ cm}$$
$$a = 6.8 \text{ cm} \text{ (to 1 d.p.)}$$

---

## 1.6 Proving a Triangle is Right-Angled

### Method: Check if $a^2 + b^2 = c^2$

If $a^2 + b^2 = c^2$, the triangle is right-angled with the right angle opposite side $c$.

If $a^2 + b^2 \neq c^2$, the triangle is NOT right-angled.

---

### 📐 Worked Example 5: Checking for Right Angle

**Problem:** A triangle has sides 9 cm, 12 cm, and 15 cm. Is it right-angled?

**Solution:**

**Step 1:** Identify the longest side (potential hypotenuse)
- Longest side $c = 15$ cm

**Step 2:** Check Pythagoras' theorem
$$a^2 + b^2 = 9^2 + 12^2 = 81 + 144 = 225$$
$$c^2 = 15^2 = 225$$

Since $a^2 + b^2 = c^2$, **the triangle IS right-angled**.

---

### 📐 Worked Example 6: Not a Right-Angled Triangle

**Problem:** A triangle has sides 5 cm, 7 cm, and 9 cm. Is it right-angled?

**Solution:**

$$a^2 + b^2 = 5^2 + 7^2 = 25 + 49 = 74$$
$$c^2 = 9^2 = 81$$

Since $74 \neq 81$, **the triangle is NOT right-angled**.

> **📝 EXAM TIP:** If $a^2 + b^2 < c^2$, the triangle is obtuse-angled. If $a^2 + b^2 > c^2$, the triangle is acute-angled.

---

## 1.7 Pythagorean Triples

### Definition
A **Pythagorean triple** is a set of three positive integers $(a, b, c)$ that satisfy $a^2 + b^2 = c^2$.

### COMMON PYTHAGOREAN TRIPLES TO MEMORIZE

| Triple | Verification |
|--------|--------------|
| $(3, 4, 5)$ | $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ |
| $(5, 12, 13)$ | $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ |
| $(8, 15, 17)$ | $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ |
| $(7, 24, 25)$ | $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ |
| $(9, 40, 41)$ | $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ |
| $(11, 60, 61)$ | $11^2 + 60^2 = 121 + 3600 = 3721 = 61^2$ |

### Multiples of Triples

| Original Triple | Multiple | New Triple |
|-----------------|----------|------------|
| $(3, 4, 5)$ | ×2 | $(6, 8, 10)$ |
| $(3, 4, 5)$ | ×3 | $(9, 12, 15)$ |
| $(3, 4, 5)$ | ×5 | $(15, 20, 25)$ |
| $(5, 12, 13)$ | ×2 | $(10, 24, 26)$ |

> **🎯 EXAM TIP:** Recognizing Pythagorean triples saves significant calculation time in exams!

---

## 1.8 Applications of Pythagoras' Theorem

### Application 1: Diagonals

#### 📐 Worked Example 7: Rectangle Diagonal

**Problem:** A rectangle has length 12 cm and width 5 cm. Find the length of its diagonal.

**Solution:**

A diagonal divides a rectangle into two right-angled triangles.

$$d^2 = 12^2 + 5^2$$
$$d^2 = 144 + 25$$
$$d^2 = 169$$
$$d = 13 \text{ cm}$$

---

#### 📐 Worked Example 8: Square Diagonal

**Problem:** A square has side length 8 cm. Find the length of its diagonal in surd form.

**Solution:**

$$d^2 = 8^2 + 8^2$$
$$d^2 = 64 + 64$$
$$d^2 = 128$$
$$d = \sqrt{128} = \sqrt{64 \times 2} = 8\sqrt{2} \text{ cm}$$

> **📝 EXAM TIP:** For a square with side $s$, the diagonal is always $s\sqrt{2}$.

---

### Application 2: 3D Problems

#### 📐 Worked Example 9: Diagonal of a Cuboid

**Problem:** A cuboid has dimensions 3 cm × 4 cm × 12 cm. Find the length of its space diagonal.

**Solution:**

**Step 1:** Find the diagonal of the base
$$\text{Base diagonal}^2 = 3^2 + 4^2 = 9 + 16 = 25$$
$$\text{Base diagonal} = 5 \text{ cm}$$

**Step 2:** Find the space diagonal (using base diagonal and height)
$$\text{Space diagonal}^2 = 5^2 + 12^2 = 25 + 144 = 169$$
$$\text{Space diagonal} = 13 \text{ cm}$$

**Alternative (direct formula):**
$$d^2 = 3^2 + 4^2 + 12^2 = 9 + 16 + 144 = 169$$
$$d = 13 \text{ cm}$$

---

#### 📐 Worked Example 10: Distance Inside a Room

**Problem:** A spider is at one bottom corner of a room measuring 6 m × 8 m × 3 m (height). It walks to the diagonally opposite top corner. What is the shortest distance it could walk?

**Solution:**

The shortest path is along the space diagonal:

$$d^2 = 6^2 + 8^2 + 3^2$$
$$d^2 = 36 + 64 + 9$$
$$d^2 = 109$$
$$d = \sqrt{109} = 10.44 \text{ m} \text{ (to 2 d.p.)}$$

---

### Application 3: Distance Between Two Points

#### 📐 Worked Example 11: 2D Distance

**Problem:** Find the distance between points $A(2, 3)$ and $B(7, 15)$.

**Solution:**

Using the distance formula (derived from Pythagoras):

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

$$d = \sqrt{(7-2)^2 + (15-3)^2}$$
$$d = \sqrt{5^2 + 12^2}$$
$$d = \sqrt{25 + 144}$$
$$d = \sqrt{169}$$
$$d = 13 \text{ units}$$

> **🎯 KEY INSIGHT:** This is a 5-12-13 Pythagorean triple disguised as a coordinate problem!

---

### Application 4: Isosceles Triangles

#### 📐 Worked Example 12: Height of Isosceles Triangle

**Problem:** An isosceles triangle has equal sides of 10 cm and a base of 12 cm. Find its height.

**Solution:**

**Step 1:** Draw the altitude from the apex to the base
- This bisects the base, creating two equal segments of 6 cm each
- This creates two right-angled triangles

**Step 2:** Apply Pythagoras
$$h^2 + 6^2 = 10^2$$
$$h^2 + 36 = 100$$
$$h^2 = 64$$
$$h = 8 \text{ cm}$$

---

### Application 5: Real-World Problems

#### 📐 Worked Example 13: Ladder Problem

**Problem:** A 5 m ladder is placed against a wall. The foot of the ladder is 1.5 m from the wall. How high up the wall does the ladder reach?

**Solution:**

The ladder, wall, and ground form a right-angled triangle.

$$h^2 + 1.5^2 = 5^2$$
$$h^2 + 2.25 = 25$$
$$h^2 = 22.75$$
$$h = \sqrt{22.75} = 4.77 \text{ m} \text{ (to 2 d.p.)}$$

---

#### 📐 Worked Example 14: Ships Problem

**Problem:** Two ships leave a port at the same time. One travels north at 15 km/h and the other travels east at 20 km/h. How far apart are they after 3 hours?

**Solution:**

**Step 1:** Calculate distances traveled
- North distance = $15 \times 3 = 45$ km
- East distance = $20 \times 3 = 60$ km

**Step 2:** Apply Pythagoras
$$d^2 = 45^2 + 60^2$$
$$d^2 = 2025 + 3600$$
$$d^2 = 5625$$
$$d = 75 \text{ km}$$

---

# 2. CIRCLE THEOREMS

## 2.1 Essential Circle Terminology

### KEY DEFINITIONS

| Term | Definition |
|------|------------|
| **Circle** | Set of all points equidistant from a fixed point (center) |
| **Radius** | Distance from center to any point on the circle |
| **Diameter** | Line through center connecting two points on circle; $d = 2r$ |
| **Chord** | Line segment joining two points on the circle |
| **Tangent** | Line that touches the circle at exactly one point |
| **Secant** | Line that cuts the circle at two points |
| **Arc** | Part of the circumference |
| **Sector** | Region bounded by two radii and an arc |
| **Segment** | Region bounded by a chord and an arc |
| **Circumference** | Perimeter of the circle; $C = 2\pi r$ |

### Angle Types in Circles

| Term | Definition |
|------|------------|
| **Central angle** | Angle at the center with vertex at circle's center |
| **Inscribed angle** | Angle with vertex on the circumference |
| **Angle subtended** | Angle formed by two lines from a point to an arc |

---

## 2.2 Theorem 1: Angle at the Center vs Angle at Circumference

### THEOREM

**The angle at the center is twice the angle at the circumference subtended by the same arc.**

$$\angle AOC = 2 \times \angle ABC$$

where:
- $O$ is the center
- $A$ and $C$ are points on the circumference
- $B$ is any point on the circumference on the same side of $AC$

```
        A
         *
        / \
       /   \
      /     \
     *-------*
    O   *   C
         \
          \
           * B
```

---

### 📐 Worked Example 15: Angle at Center

**Problem:** In a circle with center $O$, points $A$, $B$, and $C$ lie on the circumference. Angle $AOC = 128°$. Find angle $ABC$.

**Solution:**

$$\angle ABC = \frac{1}{2} \times \angle AOC$$
$$\angle ABC = \frac{1}{2} \times 128°$$
$$\angle ABC = 64°$$

---

### 📐 Worked Example 16: Finding Angle at Center

**Problem:** In a circle, angle $ABC = 37°$ where $B$ is on the circumference. Find angle $AOC$ where $O$ is the center.

**Solution:**

$$\angle AOC = 2 \times \angle ABC$$
$$\angle AOC = 2 \times 37°$$
$$\angle AOC = 74°$$

---

## 2.3 Theorem 2: Angle in a Semicircle

### THEOREM

**The angle in a semicircle is a right angle (90°).**

If $AB$ is a diameter, then for any point $C$ on the circumference:
$$\angle ACB = 90°$$

**Proof:** This is a special case of Theorem 1.
- The angle at the center for a semicircle is $180°$ (straight line)
- Therefore, angle at circumference = $\frac{1}{2} \times 180° = 90°$

```
        C
        *
       /|\
      / | \
     /  |  \
    *---*---*
   A   O    B
    
    Diameter AB
```

> ** COMMON MISTAKE:** Students often forget that the side opposite the 90° angle MUST be a diameter.

---

### 📐 Worked Example 17: Angle in Semicircle

**Problem:** In a circle, $AB$ is a diameter. Point $C$ lies on the circumference such that $\angle BAC = 35°$. Find $\angle ABC$.

**Solution:**

**Step 1:** Recognize that $\angle ACB = 90°$ (angle in a semicircle)

**Step 2:** Use angle sum in triangle
$$\angle BAC + \angle ABC + \angle ACB = 180°$$
$$35° + \angle ABC + 90° = 180°$$
$$\angle ABC = 180° - 125°$$
$$\angle ABC = 55°$$

---

### 📐 Worked Example 18: Proving a Diameter

**Problem:** Triangle $ABC$ has $\angle ACB = 90°$ and $AB = 13$ cm, $AC = 12$ cm. Prove that $ABC$ can be inscribed in a circle with $AB$ as diameter.

**Solution:**

**Step 1:** Find $BC$ using Pythagoras
$$AC^2 + BC^2 = AB^2$$
$$12^2 + BC^2 = 13^2$$
$$144 + BC^2 = 169$$
$$BC^2 = 25$$
$$BC = 5 \text{ cm}$$

**Step 2:** Conclusion
Since $\angle ACB = 90°$, by the converse of the angle in a semicircle theorem, $AB$ must be a diameter of the circumcircle.

---

## 2.4 Theorem 3: Angles in the Same Segment

### THEOREM

**Angles in the same segment are equal.**

Angles subtended by the same arc (or chord) at the circumference are equal.

If points $A$, $B$, $C$, $D$ lie on a circle, and all angles are subtended by arc $AB$:
$$\angle ACB = \angle ADB$$

```
        C *     * D
          / \   / \
         /   \ /   \
        *-----*-----*
        A           B
```

---

### 📐 Worked Example 19: Same Segment Angles

**Problem:** Points $A$, $B$, $C$, and $D$ lie on a circle. If $\angle ACB = 47°$, find $\angle ADB$.

**Solution:**

Both angles are subtended by arc $AB$ (or chord $AB$).

$$\angle ADB = \angle ACB = 47°$$

---

### 📐 Worked Example 20: Multiple Angles

**Problem:** Points $P$, $Q$, $R$, $S$, and $T$ lie on a circle. $\angle PSQ = 38°$ and $\angle PTQ = x$. Find $x$.

**Solution:**

Both $\angle PSQ$ and $\angle PTQ$ are subtended by arc $PQ$ (angles in the same segment).

$$x = \angle PTQ = \angle PSQ = 38°$$

---

## 2.5 Theorem 4: Cyclic Quadrilaterals

### Definition
A **cyclic quadrilateral** is a quadrilateral whose four vertices all lie on a circle.

### THEOREM

**Opposite angles of a cyclic quadrilateral are supplementary (add up to 180°).**

$$\angle A + \angle C = 180°$$
$$\angle B + \angle D = 180°$$

```
        D *-----------* C
          /           \
         /             \
        /               \
       *-----------------*
      A                 B
```

**Proof:** Using Theorem 1 (angle at center = 2 × angle at circumference)
- $\angle A + \angle C = \frac{1}{2}(\text{reflex } \angle BOD + \text{obtuse } \angle BOD) = \frac{1}{2}(360°) = 180°$

---

### 📐 Worked Example 21: Cyclic Quadrilateral

**Problem:** $ABCD$ is a cyclic quadrilateral. $\angle A = 76°$ and $\angle B = 94°$. Find $\angle C$ and $\angle D$.

**Solution:**

**Step 1:** Find $\angle C$ (opposite to $\angle A$)
$$\angle A + \angle C = 180°$$
$$76° + \angle C = 180°$$
$$\angle C = 104°$$

**Step 2:** Find $\angle D$ (opposite to $\angle B$)
$$\angle B + \angle D = 180°$$
$$94° + \angle D = 180°$$
$$\angle D = 86°$$

**Check:** $76° + 94° + 104° + 86° = 360°$ ✓

---

### 📐 Worked Example 22: Proving Cyclic Quadrilateral

**Problem:** Quadrilateral $PQRS$ has $\angle P = 82°$ and $\angle R = 98°$. Prove that $PQRS$ is a cyclic quadrilateral.

**Solution:**

$$\angle P + \angle R = 82° + 98° = 180°$$

Since opposite angles are supplementary, by the converse theorem, $PQRS$ is a cyclic quadrilateral.

> **🎯 KEY INSIGHT:** The converse is also true: If opposite angles sum to 180°, the quadrilateral is cyclic.

---

## 2.6 Theorem 5: Tangent and Radius

### THEOREM

**A tangent to a circle is perpendicular to the radius at the point of contact.**

If $OT$ is a radius and $AT$ is a tangent at point $T$:
$$\angle OTA = 90°$$

```
        A
        |
        |
        | (tangent)
    T *----*----
       /
      /
     * O (center)
```

---

### 📐 Worked Example 23: Tangent Problem

**Problem:** A circle has center $O$ and radius 5 cm. A tangent $PA$ touches the circle at point $A$. If $OP = 13$ cm, find the length $AP$.

**Solution:**

**Step 1:** Recognize the right angle
$\angle OAP = 90°$ (tangent perpendicular to radius)

**Step 2:** Apply Pythagoras
$$OA^2 + AP^2 = OP^2$$
$$5^2 + AP^2 = 13^2$$
$$25 + AP^2 = 169$$
$$AP^2 = 144$$
$$AP = 12 \text{ cm}$$

---

### 📐 Worked Example 24: Two Tangents from a Point

**Problem:** From an external point $P$, two tangents $PA$ and $PB$ are drawn to a circle with center $O$. Prove that $PA = PB$.

**Solution:**

**Step 1:** Draw radii $OA$ and $OB$
- $\angle OAP = 90°$ (tangent ⊥ radius at $A$)
- $\angle OBP = 90°$ (tangent ⊥ radius at $B$)

**Step 2:** In triangles $OAP$ and $OBP$:
- $OA = OB$ (radii of same circle)
- $OP$ is common
- Both are right-angled triangles

**Step 3:** By RHS (Right angle, Hypotenuse, Side):
$$\triangle OAP \cong \triangle OBP$$

Therefore: $PA = PB$

> **📝 EXAM TIP:** "Two tangents from an external point are equal in length" is a frequently tested result!

---

## 2.7 Theorem 6: Alternate Segment Theorem

### THEOREM

**The angle between a tangent and a chord through the point of contact is equal to the angle in the alternate segment.**

$$\angle TAC = \angle ABC$$

where:
- $AT$ is a tangent at $A$
- $AC$ is a chord
- $B$ is any point on the circumference on the opposite side of $AC$ from $T$

```
        T
        |
        |
    A *-*---- (tangent AT)
       / \
      /   \
     *     *
    C      B
    
    ∠TAC = ∠ABC
```

---

### 📐 Worked Example 25: Alternate Segment

**Problem:** A tangent $AT$ touches a circle at $A$. Chord $AB$ makes an angle of $52°$ with the tangent. Point $C$ is on the circumference on the opposite side of $AB$ from $T$. Find $\angle ACB$.

**Solution:**

By the alternate segment theorem:
$$\angle ACB = \angle BAT = 52°$$

---

### 📐 Worked Example 26: Combined Theorems

**Problem:** In the diagram, $PQ$ is a tangent to the circle at $A$. $AB$ is a chord, and $C$ is a point on the circumference. Given $\angle PAC = 35°$ and $\angle ABC = 55°$, find $\angle BAC$.

**Solution:**

**Step 1:** Apply alternate segment theorem
$$\angle ABP = \angle ACB$$ (we need to find this first)

**Step 2:** Using alternate segment with chord $AB$ and tangent $PQ$:
$$\angle BAP = \angle ACB$$

**Step 3:** Using triangle $ABC$:
$$\angle BAC + \angle ABC + \angle ACB = 180°$$

We need more information. Let's use the given angles differently.

Actually, by alternate segment:
$$\angle ACB = \angle BAP$$

Using angle sum in triangle $ABC$:
$$\angle BAC + 55° + \angle ACB = 180°$$

And $\angle BAC + \angle BAP = 35°$ (from $\angle PAC = 35°$)

Therefore:
$$\angle BAC + 55° + \angle BAP = 180°$$
$$\angle BAC + 55° + (35° - \angle BAC) = 180°$$
$$55° + 35° = 90°$$ ... This doesn't give us $\angle BAC$ directly.

Let me reconsider: $\angle PAC = 35°$ and if we use the alternate segment theorem on chord $AC$:
$$\angle BAC = \angle \text{between tangent and chord } AC$$

Using $\angle PAC = 35°$ (angle between tangent $PQ$ and chord $AC$):
$$\angle ABC = 35°$$ by alternate segment theorem

Given $\angle ABC = 55°$, we have $\angle ACB = 35°$ (same segment).

In triangle $ABC$:
$$\angle BAC = 180° - 55° - 35° = 90°$$

---

## 2.8 Theorem 7: Chord Properties

### THEOREM A: Perpendicular from Center Bisects Chord

**The perpendicular from the center to a chord bisects the chord.**

If $OM \perp AB$ where $O$ is center and $AB$ is a chord:
$$AM = MB$$

### THEOREM B: Bisector of Chord Passes Through Center

**The perpendicular bisector of a chord passes through the center of the circle.**

---

### 📐 Worked Example 27: Distance from Center to Chord

**Problem:** A circle has radius 10 cm. A chord of length 12 cm is drawn. Find the distance from the center to the chord.

**Solution:**

**Step 1:** Draw the perpendicular from center $O$ to chord $AB$
- Let $M$ be the midpoint of $AB$
- $AM = MB = 6$ cm

**Step 2:** Apply Pythagoras in triangle $OMA$
$$OM^2 + AM^2 = OA^2$$
$$OM^2 + 6^2 = 10^2$$
$$OM^2 + 36 = 100$$
$$OM^2 = 64$$
$$OM = 8 \text{ cm}$$

---

### 📐 Worked Example 28: Finding Chord Length

**Problem:** A chord is 8 cm from the center of a circle of radius 10 cm. Find the length of the chord.

**Solution:**

**Step 1:** Set up right triangle
$$OM^2 + AM^2 = OA^2$$
$$8^2 + AM^2 = 10^2$$
$$64 + AM^2 = 100$$
$$AM^2 = 36$$
$$AM = 6 \text{ cm}$$

**Step 2:** Full chord length
$$AB = 2 \times AM = 2 \times 6 = 12 \text{ cm}$$

---

## 2.9 Summary of All Circle Theorems

### QUICK REFERENCE TABLE

| # | Theorem | Statement | Diagram Symbol |
|---|---------|-----------|----------------|
| 1 | Angle at center | $\angle \text{center} = 2 \times \angle \text{circumference}$ | $\angle AOC = 2\angle ABC$ |
| 2 | Angle in semicircle | Angle in semicircle = $90°$ | $\angle ACB = 90°$ |
| 3 | Same segment | Angles in same segment are equal | $\angle ACB = \angle ADB$ |
| 4 | Cyclic quadrilateral | Opposite angles sum to $180°$ | $\angle A + \angle C = 180°$ |
| 5 | Tangent ⊥ radius | Tangent perpendicular to radius | $\angle OTA = 90°$ |
| 6 | Alternate segment | $\angle$ tangent-chord = $\angle$ in alternate segment | $\angle TAC = \angle ABC$ |
| 7 | Chord properties | Perpendicular from center bisects chord | $AM = MB$ |

---

# 3. ADVANCED PROBLEM-SOLVING

## 3.1 Multi-Step Problems

### 📐 Worked Example 29: Combining Theorems

**Problem:** In the diagram, $AB$ is a diameter. $CD$ is a chord perpendicular to $AB$ at $P$. If $AP = 2$ cm and $PB = 8$ cm, find the length of $CD$.

**Solution:**

**Step 1:** Find the radius
$$AB = AP + PB = 2 + 8 = 10 \text{ cm}$$
$$r = 5 \text{ cm}, \text{ center } O \text{ at distance } 3 \text{ cm from } P$$

(Note: $OP = 5 - 2 = 3$ cm from center to $P$)

**Step 2:** Use Pythagoras to find half the chord
$$CP^2 + OP^2 = OC^2$$
$$CP^2 + 3^2 = 5^2$$
$$CP^2 + 9 = 25$$
$$CP^2 = 16$$
$$CP = 4 \text{ cm}$$

**Step 3:** Full chord length
$$CD = 2 \times CP = 8 \text{ cm}$$

---

### 📐 Worked Example 30: Complex Circle Problem

**Problem:** In circle with center $O$, $A$, $B$, $C$, $D$ lie on the circle. $\angle AOC = 110°$. Find $\angle ABC$ and $\angle ADC$.

**Solution:**

**Step 1:** Find reflex $\angle AOC$
$$\text{Reflex } \angle AOC = 360° - 110° = 250°$$

**Step 2:** Find $\angle ABC$ (subtended by minor arc $AC$)
$$\angle ABC = \frac{1}{2} \times 110° = 55°$$

**Step 3:** Find $\angle ADC$ (subtended by major arc $AC$)
$$\angle ADC = \frac{1}{2} \times 250° = 125°$$

**Check:** $55° + 125° = 180°$ (cyclic quadrilateral) ✓

---

## 3.2 Proof Questions

### 📐 Worked Example 31: Proof Problem

**Problem:** $PQ$ and $PR$ are tangents from an external point $P$ to a circle with center $O$. Prove that $\angle OQP = \angle ORP$.

**Solution:**

| Statement | Reason |
|-----------|--------|
| $\angle OQP = 90°$ | Tangent perpendicular to radius at $Q$ |
| $\angle ORP = 90°$ | Tangent perpendicular to radius at $R$ |
| $OQ = OR$ | Radii of same circle |
| $OP$ is common | Given |
| $\triangle OQP \cong \triangle ORP$ | RHS congruence |
| $\therefore \angle OQP = \angle ORP$ | Corresponding angles in congruent triangles |

---

# 4. EXAM FOCUS & STRATEGY

## 4.1 Frequently Tested Question Types

### High-Frequency Topics

| Topic | Question Type | Typical Marks |
|-------|--------------|---------------|
| Pythagoras - find hypotenuse | Calculate missing side | 2-3 |
| Pythagoras - find shorter side | Calculate missing side | 2-3 |
| Pythagoras - prove right angle | Show $a^2 + b^2 = c^2$ | 3-4 |
| Pythagoras applications | Ladders, diagonals, 3D | 3-5 |
| Angle in semicircle | Find angle = 90° | 2-3 |
| Angle at center theorem | Find angles | 2-4 |
| Cyclic quadrilateral | Find opposite angles | 2-3 |
| Tangent problems | Use perpendicular property | 3-4 |
| Alternate segment | Identify equal angles | 3-4 |
| Multi-theorem problems | Combine 2+ theorems | 4-6 |

---

## 4.2 Command Word Guidance

| Command Word | What It Means | Required Response |
|--------------|---------------|-------------------|
| **Calculate** | Find a numerical answer | Show working, give answer with units |
| **Find** | Determine a value | Show method, state answer clearly |
| **Prove** | Show using logical reasoning | Clear steps with reasons |
| **Show that** | Verify a given result | Full working leading to stated result |
| **Explain** | Give reasons | Written explanation with theorem reference |
| **Determine** | Find with certainty | Method and clear conclusion |
| **Give a reason** | State the theorem used | Name the theorem explicitly |

---

## 4.3 Typical Problem-Solving Patterns

### Pattern 1: Pythagoras Setup
1. Identify the right angle
2. Identify hypotenuse (opposite right angle)
3. Apply $a^2 + b^2 = c^2$ or $a^2 = c^2 - b^2$
4. Square root for final answer

### Pattern 2: Circle Theorem Problems
1. Identify all points on the circle
2. Look for special configurations (diameter, tangent, cyclic quad)
3. Apply relevant theorem
4. Use angle sum rules if needed

### Pattern 3: Multi-Step Problems
1. Extract all given information
2. Identify which theorems/rules apply
3. Work systematically through steps
4. Check answer makes sense

---

## 4.4 Common Mistakes to Avoid

###  TOP 10 MISTAKES

1. **Not identifying the hypotenuse correctly**
   - Always find the right angle first; hypotenuse is opposite it

2. **Adding instead of subtracting for shorter side**
   - Finding shorter side: $a^2 = c^2 - b^2$ (subtract!)

3. **Forgetting to take square root**
   - After finding $c^2 = 169$, must state $c = 13$

4. **Confusing angle at center with angle at circumference**
   - Center angle is DOUBLE circumference angle

5. **Not recognizing diameter creates right angle**
   - Any angle subtended by diameter = 90°

6. **Forgetting tangent is perpendicular to radius**
   - Always draw in the radius to the tangent point

7. **Not giving reasons in circle theorem proofs**
   - Every angle statement needs a theorem reference

8. **Mixing up same segment and alternate segment**
   - Same segment: same arc, same side
   - Alternate segment: tangent and chord

9. **Rounding too early**
   - Keep exact values; round only at final answer

10. **Not checking if triangle is right-angled before Pythagoras**
    - Pythagoras ONLY works for right-angled triangles

---

## 4.5 How to Gain Full Marks

### Method Marks (M)
- State the theorem or formula used
- Show substitution
- Show intermediate steps
- Draw relevant construction lines

### Accuracy Marks (A)
- Correct numerical answer
- Correct units (cm, m, °)
- Correct level of accuracy (3 s.f., 2 d.p.)

### Reason Marks (R)
- Name the specific theorem
- Quote the relevant rule
- Explain why a method applies

---

### Example: Scoring Full Marks

**Question:** In the diagram, $AB$ is a diameter. Find angle $ABC$. Give a reason for your answer. [2 marks]

**Full marks solution:**
$$\angle ACB = 90° \quad \text{(1A)}$$
**Reason:** Angle in a semicircle is 90° (or angle subtended by diameter is 90°) (1R)

---

## 4.6 Exam Strategy Tips

### Time Management
- 1 mark: 30 seconds
- 2-3 marks: 1-2 minutes
- 4-5 marks: 3-4 minutes
- 6+ marks: 5-6 minutes

### Checking Your Work
1. Pythagoras: Verify by substitution back
2. Circle angles: Check opposite angles sum to 180° (cyclic)
3. Triangle angles: Check sum = 180°
4. Units: Always include ° for angles

### When Stuck
1. Draw on the diagram
2. List all theorems that might apply
3. Try working backwards from answer
4. Look for hidden right angles

---

# Summary: Key Formulas and Theorems

## Pythagoras' Theorem

| Formula | When to Use |
|---------|-------------|
| $a^2 + b^2 = c^2$ | Finding hypotenuse |
| $a = \sqrt{c^2 - b^2}$ | Finding shorter side |
| $d = \sqrt{l^2 + w^2}$ | Diagonal of rectangle |
| $d = s\sqrt{2}$ | Diagonal of square |
| $d = \sqrt{a^2 + b^2 + c^2}$ | Space diagonal of cuboid |

## Circle Theorems Summary

| # | Theorem | Key Formula/Result |
|---|---------|-------------------|
| 1 | Angle at center | $\angle_{center} = 2 \times \angle_{circumference}$ |
| 2 | Semicircle | Angle = 90° |
| 3 | Same segment | Angles equal |
| 4 | Cyclic quadrilateral | Opposite angles sum to 180° |
| 5 | Tangent-radius | Perpendicular (90°) |
| 6 | Alternate segment | Tangent-chord angle = alternate angle |
| 7 | Chord from center | Perpendicular bisects chord |

---

*END OF NOTES*
