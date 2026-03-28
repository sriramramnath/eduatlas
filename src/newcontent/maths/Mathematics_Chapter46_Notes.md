# Chapter 46: Shape and Space 6 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Unit 6 Study Notes

---

## 1. Introduction to Advanced Circle Theorems

Circle theorems form one of the most challenging yet rewarding topics in the IGCSE Mathematics syllabus. This unit covers the advanced theorems that frequently appear in higher-tier examinations and are essential for achieving A/A* grades.

### 1.1 What You Should Already Know

Before studying this unit, ensure you are confident with:
- Basic angle facts (angles on a straight line, around a point, in a triangle)
- Properties of isosceles triangles
- Basic circle theorems:
  - Angle at centre = 2 × angle at circumference
  - Angle in a semicircle = 90°
  - Angles in the same segment are equal
  - Opposite angles in a cyclic quadrilateral sum to 180°
  - Tangent perpendicular to radius at point of contact

---

## 2. The Alternate Segment Theorem

### 2.1 Statement of the Theorem

> **Alternate Segment Theorem:** The angle between a tangent and a chord through the point of contact is equal to the angle in the alternate segment.

### 2.2 Understanding the Alternate Segment

When a chord divides a circle into two segments, the "alternate segment" is the segment **opposite** to where the tangent meets the chord.

```
                    A
                   /|\
                  / | \
                 /  |  \
                /   |   \
               /    |    \
              /     |     \
             /      |      \
            /       |       \
           /        |        \
          /_________|_________\
         B          C          D
         |__________|
              |
           Tangent
```

In the diagram above:
- $BC$ is a chord
- The tangent at $C$ is shown
- Angle between tangent and chord $BC$ equals angle $BAC$ (angle in alternate segment)

### 2.3 Formal Proof of the Alternate Segment Theorem

**Given:** A circle with tangent $PT$ at point $A$. Chord $AB$ divides the circle into two segments.

**To prove:** $\angle TAB = \angle ACB$ (angle in alternate segment)

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Draw diameter from $A$ through centre $O$ to $D$ | Construction |
| 2 | Join $D$ to $B$ | Construction |
| 3 | $\angle ABD = 90°$ | Angle in a semicircle |
| 4 | $\angle DAB = 90° - \angle ADB$ | Angles in triangle $ABD$ |
| 5 | $\angle TAB = 90° - \angle BAD$ | Tangent perpendicular to radius |
| 6 | $\angle ADB = \angle ACB$ | Angles in same segment |
| 7 | $\angle TAB = \angle ACB$ | Substitution from steps 4, 5, 6 |

$\blacksquare$ QED

### 2.4 Key Insight for Applications

The alternate segment theorem is particularly powerful because:
1. It connects tangent properties with chord properties
2. It creates an elegant "bridge" between external and internal angles
3. It often provides the most elegant solution to complex angle problems

### 2.5 Worked Example 1

**Problem:** In the diagram, $PT$ is a tangent to the circle at $A$. $AB$ and $AC$ are chords. Given that $\angle TAB = 35°$ and $\angle BAC = 80°$, find $\angle ACB$.

**Solution:**

```
                    P
                    |
                    |
              B-----A-----T (tangent)
               \   |   /
                \  |  /
                 \ | /
                  \|/
                   C
```

**Step 1:** Identify the alternate segment theorem application
- Tangent $PT$ touches circle at $A$
- Chord $AB$ creates alternate segment containing angle $ACB$

**Step 2:** Apply alternate segment theorem
$$\angle TAB = \angle ACB$$

**Step 3:** Substitute the given value
$$\angle ACB = 35°$$

**Answer:** $\angle ACB = 35°$

---

### 2.6 Worked Example 2

**Problem:** In the diagram, $XY$ is a tangent to the circle at $P$. $PQ$ and $PR$ are chords. If $\angle QPR = 68°$ and $\angle XPR = 42°$, find $\angle PQR$.

**Solution:**

**Step 1:** Identify which angles we need to work with
- We have $\angle XPR = 42°$ (angle between tangent $XY$ and chord $PR$)
- We need $\angle PQR$ (angle in the alternate segment to $\angle XPR$)

**Step 2:** Apply alternate segment theorem to chord $PR$
$$\angle XPR = \angle PQR$$

**Step 3:** State the answer
$$\angle PQR = 42°$$

**Answer:** $\angle PQR = 42°$

---

### 2.7 Worked Example 3 (Combined Theorems)

**Problem:** $AB$ is a tangent to the circle at $P$. $PQ$ is a diameter. $PR$ and $QR$ are chords. Given that $\angle QPR = 58°$, find:
(a) $\angle PQR$
(b) $\angle RPQ$ between tangent and chord $PQ$
(c) $\angle PRQ$

**Solution:**

**Part (a): Find $\angle PQR$**

Since $PQ$ is a diameter and $R$ is on the circumference:
$$\angle PRQ = 90° \text{ (angle in a semicircle)}$$

In triangle $PQR$:
$$\angle PQR = 180° - 90° - 58° = 32°$$

**Part (b): Find $\angle RPQ$ (angle between tangent and chord)**

By alternate segment theorem, angle between tangent $AB$ and chord $PR$:
$$\angle APR = \angle PQR = 32°$$

**Part (c): Find $\angle PRQ$**

Already found: $\angle PRQ = 90°$

---

## 3. Intersecting Chords Theorem

### 3.1 Statement of the Theorem

> **Intersecting Chords Theorem:** When two chords intersect inside a circle, the products of the segments of each chord are equal.

### 3.2 Mathematical Formulation

If two chords $AB$ and $CD$ intersect at point $P$ inside a circle, then:

$$AP \times PB = CP \times PD$$

```
              A
             /|\
            / | \
           /  |  \
          /   P   \
         /    |    \
        /     |     \
       D------|------B
              |
              C
```

### 3.3 Proof of Intersecting Chords Theorem

**Given:** Chords $AB$ and $CD$ intersect at $P$ inside a circle.

**To prove:** $AP \times PB = CP \times PD$

**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Join $AC$ and $BD$ | Construction |
| 2 | $\angle CAP = \angle BDP$ | Angles in same segment (subtended by $CB$) |
| 3 | $\angle ACP = \angle DBP$ | Angles in same segment (subtended by $AD$) |
| 4 | Triangles $APC$ and $DPB$ are similar | AA similarity |
| 5 | $\frac{AP}{PD} = \frac{CP}{PB}$ | Corresponding sides of similar triangles |
| 6 | $AP \times PB = CP \times PD$ | Cross-multiplication |

$\blacksquare$ QED

### 3.4 Extended Intersecting Chords (Secant-Secant Theorem)

When two secants intersect **outside** the circle:

$$PA \times PB = PC \times PD$$

where $P$ is the external point, and $A, B$ and $C, D$ are points where each secant meets the circle.

```
                    P
                   /|\
                  / | \
                 /  |  \
                A   |   C
                 \  |  /
                  \ | /
                   \|/
              B----O----D
                 (Circle)
```

**Key distinction:**
- For internal intersection: Both products use segments of the same chord
- For external intersection: Each product uses full length from external point to far intersection

### 3.5 Tangent-Secant Theorem (Special Case)

When a tangent and a secant intersect outside the circle:

$$PT^2 = PA \times PB$$

where $PT$ is the tangent length, and $PA$ and $PB$ are segments of the secant.

```
                    P
                   /|
                  / |
                 /  |
                T   A
                 \  |
                  \ |
                   \|
                    B
                 (Circle)
```

### 3.6 Worked Example 4

**Problem:** Two chords $AB$ and $CD$ intersect at $P$ inside a circle. Given that $AP = 4$ cm, $PB = 6$ cm, and $CP = 3$ cm, find $PD$.

**Solution:**

**Step 1:** Write down the intersecting chords theorem
$$AP \times PB = CP \times PD$$

**Step 2:** Substitute the known values
$$4 \times 6 = 3 \times PD$$

**Step 3:** Solve for $PD$
$$24 = 3 \times PD$$
$$PD = \frac{24}{3} = 8 \text{ cm}$$

**Answer:** $PD = 8$ cm

---

### 3.7 Worked Example 5 (External Intersection)

**Problem:** From an external point $P$, two secants are drawn to a circle. The first secant passes through points $A$ and $B$ (where $PA = 4$ cm and $AB = 6$ cm). The second secant passes through points $C$ and $D$ (where $PC = 5$ cm). Find $CD$.

**Solution:**

**Step 1:** Calculate $PB$
$$PB = PA + AB = 4 + 6 = 10 \text{ cm}$$

**Step 2:** Apply the secant-secant theorem
$$PA \times PB = PC \times PD$$
$$4 \times 10 = 5 \times PD$$

**Step 3:** Find $PD$
$$40 = 5 \times PD$$
$$PD = 8 \text{ cm}$$

**Step 4:** Calculate $CD$
$$CD = PD - PC = 8 - 5 = 3 \text{ cm}$$

**Answer:** $CD = 3$ cm

---

### 3.8 Worked Example 6 (Tangent-Secant)

**Problem:** From point $P$ outside a circle, a tangent $PT$ of length 8 cm is drawn. A secant from $P$ passes through the circle at points $A$ and $B$, where $PA = 4$ cm. Find $PB$.

**Solution:**

**Step 1:** Apply the tangent-secant theorem
$$PT^2 = PA \times PB$$

**Step 2:** Substitute known values
$$8^2 = 4 \times PB$$
$$64 = 4 \times PB$$

**Step 3:** Solve for $PB$
$$PB = \frac{64}{4} = 16 \text{ cm}$$

**Answer:** $PB = 16$ cm

---

## 4. Advanced Applications and Combined Theorems

### 4.1 Strategy for Multi-Step Problems

When solving complex circle theorem problems:

1. **Identify all relevant theorems** - List which theorems might apply
2. **Mark all known angles/lengths** on the diagram
3. **Work systematically** - Often need to find intermediate values
4. **Look for special configurations:**
   - Isosceles triangles (equal radii)
   - Right angles (semicircle, tangent-radius)
   - Cyclic quadrilaterals

### 4.2 Worked Example 7 (Multi-Step Problem)

**Problem:** In the diagram, $PAQ$ is a tangent to the circle at $A$. $O$ is the centre. $AB$ and $AC$ are chords. $BO$ is extended to meet the circle again at $D$. Given that $\angle BAC = 40°$ and $\angle OAB = 25°$, find:
(a) $\angle BAP$
(b) $\angle ABC$
(c) $\angle ACD$

**Solution:**

**Part (a): Find $\angle BAP$**

Since $PAQ$ is tangent at $A$ and $OA$ is a radius:
$$\angle OAP = 90°$$

Therefore:
$$\angle BAP = 90° - \angle OAB = 90° - 25° = 65°$$

**Part (b): Find $\angle ABC$**

Using alternate segment theorem:
$$\angle BAP = \angle ACB$$
$$\angle ACB = 65°$$

In triangle $ABC$:
$$\angle ABC = 180° - 40° - 65° = 75°$$

**Part (c): Find $\angle ACD$**

Since $ABDC$ is a cyclic quadrilateral (opposite angles sum to 180°):
$$\angle ACD + \angle ABD = 180°$$

Note: $OB = OD$ (radii), so triangle $OBD$ is isosceles.
$\angle ABD = \angle ABC = 75°$

$$\angle ACD = 180° - 75° = 105°$$

---

## 5. Summary of All Circle Theorems

### 5.1 Quick Reference Table

| Theorem | Statement | Formula/Relationship |
|---------|-----------|---------------------|
| Angle at centre | Angle at centre = 2 × angle at circumference | $\angle AOC = 2 \times \angle ABC$ |
| Angle in semicircle | Angle in a semicircle = 90° | $\angle = 90°$ |
| Same segment | Angles in same segment are equal | $\angle_1 = \angle_2$ |
| Cyclic quadrilateral | Opposite angles sum to 180° | $\angle A + \angle C = 180°$ |
| Tangent-radius | Tangent perpendicular to radius at contact | $\angle = 90°$ |
| **Alternate segment** | Angle between tangent and chord = angle in alternate segment | $\angle_{tangent-chord} = \angle_{alternate}$ |
| **Intersecting chords** | Products of segments are equal | $AP \times PB = CP \times PD$ |
| **Secant-secant** | External intersection | $PA \times PB = PC \times PD$ |
| **Tangent-secant** | Tangent² = external × full | $PT^2 = PA \times PB$ |

---

## 6. Common Mistakes and How to Avoid Them

###  Common Mistake 1: Misidentifying the Alternate Segment

**Wrong:** Confusing which segment is the "alternate" one

**Correct:** The alternate segment is the one **opposite** to where the tangent meets the chord. It does NOT contain the tangent.

**Test yourself:** If tangent touches at point $P$ and chord goes to $Q$, the alternate segment is on the **other side** of chord $PQ$ from the tangent.

---

###  Common Mistake 2: Wrong Product for Intersecting Chords

**Wrong:** Writing $AP \times CP = BP \times DP$ (mixing segments from different chords)

**Correct:** For chord $AB$ and chord $CD$ intersecting at $P$:
$$AP \times PB = CP \times PD$$

Each product contains segments from the **same chord**.

---

###  Common Mistake 3: Forgetting Tangent-Radius Angle

**Wrong:** Not recognizing that tangent-radius gives a right angle

**Correct:** Always mark the 90° angle between tangent and radius. This is often the starting point for solutions.

---

###  Common Mistake 4: Confusing Internal and External Intersection

**Wrong:** Using the same formula for both cases

**Correct:**
- **Internal:** $AP \times PB = CP \times PD$ (segments of each chord)
- **External:** $PA \times PB = PC \times PD$ (external point to far intersection)

---

###  Common Mistake 5: Not Using Multiple Theorems

**Wrong:** Trying to solve with only one theorem

**Correct:** Most A/A* questions require combining 2-3 theorems. Always check if you've used all information given.

---

## 7. Key Exam Insights

### 📌 Insight 1: Diagram Annotation is Essential

Always write angle values on the diagram as you find them. This helps you:
- Track your progress
- Spot relationships more easily
- Avoid calculation errors

### 📌 Insight 2: Look for "Double Angle" Situations

When you see an angle at the centre and an angle at the circumference subtended by the same arc, immediately use:
$$\angle_{centre} = 2 \times \angle_{circumference}$$

### 📌 Insight 3: Cyclic Quadrilaterals are Hidden Gems

If four points lie on a circle, opposite angles **must** sum to 180°. This is often the key to solving complex problems.

### 📌 Insight 4: Isosceles Triangles from Radii

Remember that any triangle formed by two radii is isosceles. This gives you equal angles at the base.

### 📌 Insight 5: Alternate Segment with Tangent First

When you see a tangent, immediately check if alternate segment theorem applies. It's often the quickest route to an answer.

---

## 8. Formula Summary Box

```
╔══════════════════════════════════════════════════════════════╗
║               CIRCLE THEOREMS - FORMULA SHEET                ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ALTERNATE SEGMENT:                                          ║
║  ∠(tangent-chord) = ∠(alternate segment)                     ║
║                                                              ║
║  INTERSECTING CHORDS (internal):                             ║
║  AP × PB = CP × PD                                           ║
║                                                              ║
║  INTERSETING CHORDS (external/Secant-Secant):                ║
║  PA × PB = PC × PD                                           ║
║                                                              ║
║  TANGENT-SECANT:                                             ║
║  PT² = PA × PB                                               ║
║                                                              ║
║  ANGLE THEOREMS:                                             ║
║  ∠(centre) = 2 × ∠(circumference)                            ║
║  ∠(semicircle) = 90°                                         ║
║  ∠(tangent-radius) = 90°                                     ║
║  Opposite ∠s in cyclic quad. = 180°                          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 9. Practice Problem Set

### Problem 1 (3 marks)
Two chords intersect inside a circle. The segments of one chord are 5 cm and 8 cm. One segment of the other chord is 4 cm. Find the other segment.

### Problem 2 (4 marks)
$AB$ is a tangent to a circle at $T$. Chord $TC$ subtends an angle of 62° at the circumference in the alternate segment. Find the angle between the tangent and the chord $TC$.

### Problem 3 (5 marks)
From point $P$ outside a circle, a tangent $PT$ of length 12 cm and a secant $PAB$ are drawn. If $PA = 8$ cm, find $AB$.

### Problem 4 (6 marks)
Prove that the angle between a tangent and a chord through the point of contact equals the angle in the alternate segment.

---

## 10. Solutions to Practice Problems

### Solution 1
Let the unknown segment be $x$.

Using intersecting chords theorem:
$$5 \times 8 = 4 \times x$$
$$40 = 4x$$
$$x = 10 \text{ cm}$$

**Answer:** 10 cm

---

### Solution 2
By alternate segment theorem:
$$\angle ATC = \text{angle in alternate segment} = 62°$$

**Answer:** 62°

---

### Solution 3
Using tangent-secant theorem:
$$PT^2 = PA \times PB$$
$$12^2 = 8 \times PB$$
$$144 = 8 \times PB$$
$$PB = 18 \text{ cm}$$

$$AB = PB - PA = 18 - 8 = 10 \text{ cm}$$

**Answer:** $AB = 10$ cm

---

### Solution 4
**Proof:**

| Step | Statement | Reason |
|------|-----------|--------|
| 1 | Let tangent $PT$ touch circle at $A$; chord $AB$ | Given |
| 2 | Draw diameter through $A$ to $D$ | Construction |
| 3 | Join $D$ to $B$ | Construction |
| 4 | $\angle ABD = 90°$ | Angle in semicircle |
| 5 | $\angle DAB + \angle ADB = 90°$ | Angles in triangle |
| 6 | $\angle TAB = 90° - \angle DAB$ | Tangent ⊥ radius |
| 7 | $\angle ADB = \angle ACB$ | Angles in same segment |
| 8 | From (5): $\angle ADB = 90° - \angle DAB$ | Rearrangement |
| 9 | $\angle TAB = \angle ADB = \angle ACB$ | From (6), (7), (8) |

$\blacksquare$ QED

---

*End of Study Notes*

**© Pearson Edexcel IGCSE Mathematics - Shape and Space 6*
