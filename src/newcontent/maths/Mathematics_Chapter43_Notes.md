# Chapter 43: Shape and Space 3 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics - Complete Study Notes

---

##  UNIT OVERVIEW

This unit focuses on **trigonometry**, specifically the **tangent ratio**. This is a fundamental topic that builds on your knowledge of right-angled triangles and introduces a powerful tool for calculating unknown sides and angles.

**Key Topics:**
- Understanding the tangent ratio ($\tan \theta$)
- Calculating sides using tangent
- Calculating angles using inverse tangent ($\tan^{-1}$)
- Problem-solving with tangent in real-world contexts

---

## 1. INTRODUCTION TO TRIGONOMETRY

### 1.1 What is Trigonometry?

**Trigonometry** (from Greek: *trigonon* = triangle, *metron* = measure) is the branch of mathematics that studies the relationships between the sides and angles of triangles.

In IGCSE Mathematics, we focus on **right-angled triangles** and three trigonometric ratios:
- **Sine** (sin)
- **Cosine** (cos)
- **Tangent** (tan) ← **This unit**

> **📌 Exam Insight:** The tangent ratio is frequently tested in IGCSE exams, especially in applications involving heights, distances, and angles of elevation/depression.

---

### 1.2 Labelling a Right-Angled Triangle

Before using any trigonometric ratio, you must correctly identify the three sides of a right-angled triangle relative to a given angle.

```
                    |
                    |
                    |  Opposite (O)
                    |  ↗
          Hypotenuse| /
              (H)   |/
                    |─────── angle θ
                    |
                    |  Adjacent (A)
```

| Side | Definition | How to Identify |
|------|------------|-----------------|
| **Hypotenuse (H)** | The longest side | Always opposite the right angle (90°) |
| **Opposite (O)** | The side opposite the angle | Directly across from angle θ |
| **Adjacent (A)** | The side next to the angle | Touches angle θ (but is NOT the hypotenuse) |

> ** Common Mistake:** The labels "Opposite" and "Adjacent" depend on which angle you're working with. If you change the angle, the labels change!

---

## 2. THE TANGENT RATIO

### 2.1 Definition of Tangent

The **tangent ratio** is defined as:

$$\boxed{\tan \theta = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{O}{A}}$$

**Why does this work?**
- For a given angle θ in a right-angled triangle, the ratio $\frac{O}{A}$ is always the same, regardless of the size of the triangle.
- This is because all right-angled triangles with the same angle are **similar triangles**.

### 2.2 Understanding the Tangent Ratio

| Angle θ | tan θ (to 3 d.p.) | What this means |
|---------|-------------------|-----------------|
| 0° | 0.000 | Opposite is 0 (no vertical height) |
| 30° | 0.577 | Opposite ≈ 0.577 × Adjacent |
| 45° | 1.000 | Opposite = Adjacent (isosceles triangle) |
| 60° | 1.732 | Opposite ≈ 1.732 × Adjacent |
| 89° | 57.290 | Opposite is much larger than Adjacent |
| 90° | undefined | Adjacent would be 0 |

> **Key Insight:** 
> - As the angle increases from 0° to 90°, tan θ increases
> - tan 45° = 1 (because opposite equals adjacent in an isosceles right triangle)
> - tan θ can be greater than 1 (unlike sin and cos)

---

### 2.3 When to Use Tangent

Use the tangent ratio when you have:

| You know... | You want to find... | Use... |
|-------------|---------------------|--------|
| Opposite and Adjacent | Angle θ | $\tan \theta = \frac{O}{A}$ then $\theta = \tan^{-1}\left(\frac{O}{A}\right)$ |
| Angle θ and Adjacent | Opposite | $O = A \times \tan \theta$ |
| Angle θ and Opposite | Adjacent | $A = \frac{O}{\tan \theta}$ |

> **📌 Memory Tip:** "TOA" = **T**angent = **O**pposite over **A**djacent

---

## 3. CALCULATING SIDES USING TANGENT

### 3.1 Finding the Opposite Side

**Formula:** $O = A \times \tan \theta$

#### Worked Example 1

**Problem:** Find the length of side $x$ in the diagram.

```
          ╱│
         ╱ │
        ╱  │ x (Opposite)
       ╱   │
      ╱38° │
     ──────┴────
        12 cm
      (Adjacent)
```

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Identify sides | Opposite = x, Adjacent = 12 cm, Angle = 38° |
| 2 | Choose ratio | We have angle and adjacent, need opposite → use tan |
| 3 | Write formula | $\tan 38° = \frac{x}{12}$ |
| 4 | Rearrange | $x = 12 \times \tan 38°$ |
| 5 | Calculate | $x = 12 \times 0.78128...$ |
| 6 | Answer | $x = 9.4$ cm (1 d.p.) |

> ** Important:** Always show your working. Write down $\tan 38°$ before pressing the calculator button.

---

### 3.2 Finding the Adjacent Side

**Formula:** $A = \frac{O}{\tan \theta}$

#### Worked Example 2

**Problem:** Calculate the length of side $y$.

```
          ╱│
         ╱ │
        ╱  │ 8 cm (Opposite)
       ╱   │
      ╱52° │
     ──────┴────
          y
      (Adjacent)
```

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Identify sides | Opposite = 8 cm, Adjacent = y, Angle = 52° |
| 2 | Choose ratio | We have angle and opposite, need adjacent → use tan |
| 3 | Write formula | $\tan 52° = \frac{8}{y}$ |
| 4 | Rearrange | $y = \frac{8}{\tan 52°}$ |
| 5 | Calculate | $y = \frac{8}{1.27994...}$ |
| 6 | Answer | $y = 6.3$ cm (1 d.p.) |

> **Alternative method:** Multiply both sides by y, then divide by tan 52°
> $y \times \tan 52° = 8$ → $y = \frac{8}{\tan 52°}$

---

### 3.3 Multi-Step Problems

#### Worked Example 3

**Problem:** A ladder leans against a wall making an angle of 68° with the ground. The foot of the ladder is 2.1 m from the wall. How high up the wall does the ladder reach?

**Step 1: Draw a diagram**

```
    Wall
      │ ╲
      │  ╲ Ladder
   h  │   ╲
      │68° ╲
      └─────┘
      2.1 m
```

**Step 2: Identify the known values**
- Angle = 68°
- Adjacent = 2.1 m (distance from wall)
- Opposite = h (height up wall)

**Step 3: Solve**

$$\tan 68° = \frac{h}{2.1}$$

$$h = 2.1 \times \tan 68°$$

$$h = 2.1 \times 2.475...$$

$$h = 5.2 \text{ m (1 d.p.)}$$

**Answer:** The ladder reaches 5.2 m up the wall.

---

## 4. CALCULATING ANGLES USING TANGENT

### 4.1 The Inverse Tangent Function

To find an angle when you know the opposite and adjacent sides, use the **inverse tangent** function:

$$\boxed{\theta = \tan^{-1}\left(\frac{O}{A}\right)}$$

**Calculator notation:**
- Press: `SHIFT` then `tan` (or `2nd` then `tan`)
- Enter the ratio
- Press `=`

> ** Calculator Warning:** Make sure your calculator is in **DEGREE mode** (look for D or DEG on screen).

---

### 4.2 Worked Examples

#### Worked Example 4

**Problem:** Find the angle θ in this triangle.

```
          ╱│
         ╱ │
        ╱  │ 15 cm
       ╱   │
      ╱ θ  │
     ──────┴────
        8 cm
```

**Solution:**

| Step | Working | Reason |
|------|---------|--------|
| 1 | Identify sides | Opposite = 15 cm, Adjacent = 8 cm |
| 2 | Calculate ratio | $\tan \theta = \frac{15}{8} = 1.875$ |
| 3 | Apply inverse tan | $\theta = \tan^{-1}(1.875)$ |
| 4 | Calculate | $\theta = 61.9°$ (1 d.p.) |

**Full working:**

$$\tan \theta = \frac{15}{8}$$

$$\theta = \tan^{-1}\left(\frac{15}{8}\right)$$

$$\theta = 61.9° \text{ (to 1 d.p.)}$$

---

#### Worked Example 5

**Problem:** A ramp rises 1.2 m over a horizontal distance of 4 m. Calculate the angle of inclination.

**Solution:**

$$\tan \theta = \frac{\text{rise}}{\text{run}} = \frac{1.2}{4} = 0.3$$

$$\theta = \tan^{-1}(0.3)$$

$$\theta = 16.7° \text{ (1 d.p.)}$$

**Answer:** The angle of inclination is 16.7°.

---

## 5. ANGLES OF ELEVATION AND DEPRESSION

### 5.1 Definitions

| Term | Definition | Diagram |
|------|------------|---------|
| **Angle of Elevation** | The angle measured upward from the horizontal to a point above | Looking UP at something |
| **Angle of Depression** | The angle measured downward from the horizontal to a point below | Looking DOWN at something |

### 5.2 Key Property

> **Important:** The angle of elevation and angle of depression are **equal** (alternate angles).

```
    Observer 2 ────────∠ Depression
                    ╲
                     ╲
                      ╲
    Observer 1        ∠ Elevation ────────
```

---

### 5.3 Worked Examples

#### Worked Example 6 - Angle of Elevation

**Problem:** From a point 35 m from the base of a tower, the angle of elevation to the top is 52°. Calculate the height of the tower.

**Diagram:**

```
        Tower
           │ ╲
           │  ╲
        h  │   ╲
           │52° ╲
           └──────● Observer
           35 m
```

**Solution:**

$$\tan 52° = \frac{h}{35}$$

$$h = 35 \times \tan 52°$$

$$h = 35 \times 1.2799...$$

$$h = 44.8 \text{ m (1 d.p.)}$$

---

#### Worked Example 7 - Angle of Depression

**Problem:** From the top of a cliff 80 m high, a boat is seen at an angle of depression of 32°. How far is the boat from the base of the cliff?

**Diagram:**

```
    Top of cliff ●
                │╲
             80m│ ╲32°
                │  ╲
                └───● Boat
                   d
```

**Solution:**

Note: The angle of depression is measured from the horizontal. The angle inside the triangle is also 32° (alternate angles).

$$\tan 32° = \frac{80}{d}$$

$$d = \frac{80}{\tan 32°}$$

$$d = \frac{80}{0.6248...}$$

$$d = 128.0 \text{ m (1 d.p.)}$$

---

## 6. BEARINGS AND TANGENT

### 6.1 Bearings Quick Review

- Bearings are measured **clockwise from North**
- Always given as **three-digit angles** (e.g., 045°, not 45°)
- In triangle problems, bearings often create angles that need to be found using tangent

### 6.2 Worked Example

**Problem:** A ship sails 8 km due East from port A. It then changes course and sails 6 km due North to reach port B. What is the bearing of B from A?

**Solution:**

```
         N
         │
    B ───┼──── 6 km (North)
         │
         │
    A────┴──── 8 km (East)
```

The bearing angle is measured clockwise from North at point A.

$$\tan \theta = \frac{8}{6} = \frac{4}{3}$$

$$\theta = \tan^{-1}\left(\frac{4}{3}\right) = 53.1°$$

**Answer:** The bearing of B from A is 053° (to nearest degree).

---

## 7. SPECIAL CASES AND SHORTCUTS

### 7.1 The 45°-45°-90° Triangle (Isosceles Right Triangle)

In a 45°-45°-90° triangle:
- The two legs are equal
- $\tan 45° = 1$

```
         ╱│
        ╱ │
       ╱  │ x
      ╱45°│
     └────┘
        x
```

> **Key Fact:** In a 45°-45°-90° triangle, if one leg = x, the other leg = x and hypotenuse = $x\sqrt{2}$.

### 7.2 Common Tangent Values to Remember

| Angle | tan θ | Memory Aid |
|-------|-------|------------|
| 30° | $\frac{1}{\sqrt{3}} \approx 0.577$ | Smallest common angle |
| 45° | 1 | Exactly 1 (opposite = adjacent) |
| 60° | $\sqrt{3} \approx 1.732$ | Largest common angle |

> **📌 Exam Tip:** These exact values sometimes appear in non-calculator papers or can simplify working.

---

## 8. COMMON MISTAKES AND HOW TO AVOID THEM

### 8.1 Error Analysis Table

| ❌ Common Mistake | ✅ Correct Approach | Example |
|-------------------|---------------------|---------|
| Using wrong sides for tan | Remember: tan = $\frac{O}{A}$ | Don't use hypotenuse with tangent |
| Mixing up Opposite and Adjacent | Label sides from the angle you're using | Check: which angle are you working with? |
| Forgetting to use inverse tan | Use $\tan^{-1}$ when finding angles | $\theta = \tan^{-1}\left(\frac{O}{A}\right)$ |
| Calculator in wrong mode | Always check for DEGREES (D or DEG) | Look at screen before calculating |
| Rounding too early | Keep exact values until final answer | Use calculator memory or more decimals |
| Wrong interpretation of diagrams | Draw your own diagram if needed | Add labels for O, A, H |

### 8.2 Step-by-Step Error Prevention

**Before starting any question:**

1. ☐ Draw/clearly label the triangle
2. ☐ Mark the angle you're working with
3. ☐ Label O, A, and H relative to that angle
4. ☐ Circle what you need to find
5. ☐ Check calculator is in DEGREE mode

---

## 9. EXAM-STYLE PROBLEM SOLVING

### 9.1 Multi-Stage Problems

#### Worked Example 8

**Problem:** A surveyor needs to find the width of a river. She stands at point A on one bank and measures the angle to a tree at point B on the opposite bank as 41°. She then walks 50 m parallel to the river bank to point C. From C, she measures the angle to the same tree as 58°. Calculate the width of the river.

**Diagram:**

```
    Bank 1:    A─────────C
               │        │
               │        │
               │        │
    Bank 2:    B────────┘
               │←width→│
    
    Angle at A to B: 41°
    Angle at C to B: 58°
    AC = 50 m
```

This requires a **two-stage solution** using tangent.

**Stage 1:** Find BC (or AB)

From point C, if we drop a perpendicular from B to create a right triangle:
- The perpendicular distance from B to line AC represents the width of the river

Let $w$ = width of river, $x$ = distance from point where perpendicular meets AC to point C.

From triangle at C: $\tan 58° = \frac{w}{x}$, so $w = x \times \tan 58°$

From triangle at A: $\tan 41° = \frac{w}{50-x}$

Substituting: $\tan 41° = \frac{x \times \tan 58°}{50-x}$

This gives: $(50-x)\tan 41° = x \tan 58°$

$50\tan 41° - x\tan 41° = x\tan 58°$

$50\tan 41° = x(\tan 41° + \tan 58°)$

$x = \frac{50\tan 41°}{\tan 41° + \tan 58°} = \frac{50 \times 0.8693}{0.8693 + 1.6003} = 17.72$ m

Therefore: $w = 17.72 \times \tan 58° = 28.3$ m

**Answer:** The width of the river is 28.3 m.

---

### 9.2 3D Problems with Tangent

#### Worked Example 9

**Problem:** A cuboid has dimensions 5 cm × 4 cm × 3 cm. Calculate the angle between the diagonal of the base and the diagonal of the vertical face.

**Solution:** [This type of problem combines multiple applications of tangent]

The base diagonal: $\sqrt{5^2 + 4^2} = \sqrt{41}$ cm

The angle required involves considering the height (3 cm) and the base diagonal.

$\tan \theta = \frac{3}{\sqrt{41}}$

$\theta = \tan^{-1}\left(\frac{3}{\sqrt{41}}\right) = 25.1°$

---

## 10. EXAM FOCUS & STRATEGY

### 10.1 Frequently Tested Question Types

| Question Type | Typical Marks | Key Skills |
|---------------|---------------|------------|
| Direct calculation of side | 2-3 | Set up ratio, rearrange, calculate |
| Direct calculation of angle | 2-3 | Set up ratio, use inverse tan |
| Word problem (elevation/depression) | 3-4 | Interpret, draw diagram, solve |
| Multi-step problem | 4-6 | Multiple applications, algebra |
| Bearings with tangent | 3-4 | Combine bearing rules with trig |

### 10.2 Command Word Guidance

| Command Word | What to Do | Example |
|--------------|------------|---------|
| **Calculate** | Show working, give numerical answer | "Calculate the length of AB" |
| **Find** | Similar to calculate, may accept expression | "Find the value of θ" |
| **Determine** | Work out with reasoning | "Determine whether the ladder is safe" |
| **Show that** | Verify the given result | "Show that θ = 36.9° to 1 d.p." |
| **Explain** | Give reasons | "Explain why angle A = angle B" |

### 10.3 Mark Scheme Insights

**Typical marks distribution for tangent problems:**

| Marks | Requirements |
|-------|--------------|
| **M1** (Method) | Correct trigonometric ratio set up |
| **M1** (Method) | Correct rearrangement |
| **A1** (Accuracy) | Correct numerical answer |
| **B1** (Bonus) | Correct interpretation in context |

> **📌 Exam Tip:** Always show your working! Even if you make an arithmetic error, you can still earn method marks.

### 10.4 How to Get Full Marks

**Step-by-step approach:**

1. **Draw a diagram** (if not provided) - gets you thinking correctly
2. **Label all sides** with O, A, H - earns method marks
3. **Write the formula** you'll use - $\tan \theta = \frac{O}{A}$
4. **Substitute values** - show what you're calculating
5. **Show rearrangement** - demonstrate understanding
6. **Calculate and round** appropriately
7. **Check your answer makes sense** - is it reasonable?

### 10.5 Final Exam Checklist

☐ Can I identify Opposite and Adjacent sides correctly?
☐ Can I use tangent to find a missing side?
☐ Can I use inverse tangent to find an angle?
☐ Do I know when to multiply and when to divide by tan θ?
☐ Can I interpret angle of elevation/depression problems?
☐ Can I draw appropriate diagrams?
☐ Is my calculator in DEGREE mode?
☐ Can I round my answer to the required accuracy?

---

## 11. KEY FORMULAS SUMMARY

$$\boxed{\tan \theta = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{O}{A}}$$

**Rearrangements:**

| To find... | Formula |
|------------|---------|
| Opposite | $O = A \times \tan \theta$ |
| Adjacent | $A = \frac{O}{\tan \theta}$ |
| Angle | $\theta = \tan^{-1}\left(\frac{O}{A}\right)$ |

---

## 12. PRACTICE TIPS

1. **Practice without a calculator first** - understand the concept
2. **Draw diagrams for every word problem** - it helps visualize
3. **Check your answer is sensible** - an angle should be between 0° and 90° in a right triangle
4. **Practice past paper questions** - familiarize with exam style
5. **Time yourself** - aim for 1-2 minutes per basic question

---

*End of Notes - SHAPE AND SPACE 3: The Tangent Ratio*
*Pearson Edexcel IGCSE Mathematics*
