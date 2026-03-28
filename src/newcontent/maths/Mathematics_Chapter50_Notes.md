# Chapter 50: Shape and Space 10 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Specification A)

### UNIT 10: Advanced Trigonometry

**Topics Covered:**
- Trigonometric Graphs (sine, cosine, tangent)
- Sine Rule
- Cosine Rule
- Area of Triangle Formula

---

## 1. TRIGONOMETRIC GRAPHS

### 1.1 The Sine Curve: $y = \sin\theta$

**Key Features:**

| Property | Value |
|----------|-------|
| Period | $360°$ (completes one full cycle) |
| Maximum value | $1$ (at $\theta = 90°$) |
| Minimum value | $-1$ (at $\theta = 270°$) |
| Amplitude | $1$ (distance from centre line to max/min) |
| Roots (zeros) | $\theta = 0°, 180°, 360°, ...$ |
| Range | $-1 \leq \sin\theta \leq 1$ |

**Shape Description:**
- Starts at origin $(0, 0)$
- Rises smoothly to maximum at $90°$
- Falls back through origin at $180°$
- Continues to minimum at $270°$
- Returns to origin at $360°$

> **🔄 Key Insight:** The sine curve is an odd function: $\sin(-\theta) = -\sin\theta$. This means it has rotational symmetry about the origin.

---

### 1.2 The Cosine Curve: $y = \cos\theta$

**Key Features:**

| Property | Value |
|----------|-------|
| Period | $360°$ |
| Maximum value | $1$ (at $\theta = 0°, 360°$) |
| Minimum value | $-1$ (at $\theta = 180°$) |
| Amplitude | $1$ |
| Roots (zeros) | $\theta = 90°, 270°, 450°, ...$ |
| Range | $-1 \leq \cos\theta \leq 1$ |

**Shape Description:**
- Starts at maximum $(0, 1)$
- Falls to zero at $90°$
- Continues to minimum at $180°$
- Rises back to zero at $270°$
- Returns to maximum at $360°$

> **🔄 Key Insight:** The cosine curve is an even function: $\cos(-\theta) = \cos\theta$. This means it has reflectional symmetry about the y-axis.

> **🔗 Connection:** The cosine curve is the sine curve shifted left by $90°$: $\cos\theta = \sin(\theta + 90°)$

---

### 1.3 The Tangent Curve: $y = \tan\theta$

**Key Features:**

| Property | Value |
|----------|-------|
| Period | $180°$ (half the period of sin/cos) |
| Range | All real numbers (unbounded) |
| Asymptotes | $\theta = 90°, 270°, 450°, ...$ |
| Roots (zeros) | $\theta = 0°, 180°, 360°, ...$ |

**Shape Description:**
- Starts at origin $(0, 0)$
- Rises steeply, approaching infinity as $\theta \to 90°$ from the left
- Jumps from $+\infty$ to $-\infty$ at $90°$ (vertical asymptote)
- Rises from $-\infty$ back to zero at $180°$
- Pattern repeats every $180°$

> ** Important:** $\tan\theta$ is **undefined** at $\theta = 90°, 270°, 450°, ...$ because $\tan\theta = \frac{\sin\theta}{\cos\theta}$ and $\cos(90°) = 0$.

---

### 1.4 Transformations of Trigonometric Graphs

**General Forms:**
- $y = a\sin(b\theta)$ or $y = a\cos(b\theta)$
- $y = \sin(\theta + c)$ or $y = \cos(\theta + c)$
- $y = a\sin(b\theta) + d$

| Transformation | Effect |
|----------------|--------|
| $y = a\sin\theta$ | Vertical stretch by factor $a$; amplitude becomes $|a|$ |
| $y = \sin(b\theta)$ | Horizontal stretch by factor $\frac{1}{b}$; period becomes $\frac{360°}{b}$ |
| $y = \sin(\theta + c)$ | Phase shift: translation left by $c$ degrees |
| $y = \sin\theta + d$ | Vertical translation up by $d$ units |

---

### 1.5 Worked Example: Graph Transformations

**Example 1:** Describe the transformation that maps $y = \sin\theta$ onto $y = 3\sin(2\theta)$

**Solution:**
- The coefficient $3$ causes a **vertical stretch** by factor $3$
  - Amplitude changes from $1$ to $3$
- The coefficient $2$ inside the angle causes a **horizontal stretch** by factor $\frac{1}{2}$
  - Period changes from $360°$ to $\frac{360°}{2} = 180°$

> **📝 Exam Answer:** "Vertical stretch by factor 3 and horizontal stretch by factor $\frac{1}{2}$ (period becomes $180°$)"

---

**Example 2:** Find the values of $\theta$ for which $\sin\theta = 0.5$ in the range $0° \leq \theta \leq 360°$

**Solution:**
$$\sin\theta = 0.5$$

**Step 1:** Find the principal value
$$\theta_1 = \sin^{-1}(0.5) = 30°$$

**Step 2:** Find the second solution in the range
- Sine is positive in the 1st and 2nd quadrants
- Second solution: $\theta_2 = 180° - 30° = 150°$

**Answer:** $\theta = 30°$ or $\theta = 150°$

---

**Example 3:** Solve $\cos\theta = -0.6$ for $0° \leq \theta \leq 360°$

**Solution:**
$$\cos\theta = -0.6$$

**Step 1:** Find the reference angle
$$\alpha = \cos^{-1}(0.6) = 53.1°$$ (to 1 d.p.)

**Step 2:** Identify quadrants where cosine is negative
- Cosine is negative in the 2nd and 3rd quadrants

**Step 3:** Calculate solutions
$$\theta_1 = 180° - 53.1° = 126.9°$$
$$\theta_2 = 180° + 53.1° = 233.1°$$

**Answer:** $\theta = 126.9°$ or $\theta = 233.1°$ (to 1 d.p.)

---

## 2. THE SINE RULE

### 2.1 Formula

For any triangle $ABC$ with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$:

$$\boxed{\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}}$$

Or equivalently:
$$\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

### 2.2 When to Use the Sine Rule

✅ **Use the Sine Rule when you have:**
- **Two angles and one side** (find another side)
- **Two sides and a non-included angle** (find another angle)

> ** The Ambiguous Case:** When given SSA (two sides and a non-included angle), there may be **two possible solutions**!

---

### 2.3 Derivation (Understanding the Formula)

Consider triangle $ABC$ with altitude $h$ from $C$ to side $AB$:

**Case 1:** If $A$ is acute:
$$\sin A = \frac{h}{b} \implies h = b\sin A$$

**Case 2:** For the same altitude from $B$:
$$\sin B = \frac{h}{a} \implies h = a\sin B$$

Therefore: $b\sin A = a\sin B$

Rearranging: $\frac{a}{\sin A} = \frac{b}{\sin B}$

---

### 2.4 Worked Examples

**Example 4:** In triangle $ABC$, angle $A = 42°$, angle $B = 65°$, and side $a = 12$ cm. Find side $b$.

**Solution:**

**Step 1:** Identify known values
- $A = 42°$
- $B = 65°$
- $a = 12$ cm
- Find: $b$

**Step 2:** Apply the Sine Rule
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{12}{\sin 42°} = \frac{b}{\sin 65°}$$

**Step 3:** Solve for $b$
$$b = \frac{12 \times \sin 65°}{\sin 42°}$$
$$b = \frac{12 \times 0.9063...}{0.6691...}$$
$$b = 16.25...$$

**Answer:** $b = 16.3$ cm (to 1 d.p.)

---

**Example 5:** In triangle $PQR$, $p = 8$ cm, $q = 10$ cm, and angle $P = 50°$. Find angle $Q$.

**Solution:**

**Step 1:** Apply the Sine Rule
$$\frac{p}{\sin P} = \frac{q}{\sin Q}$$
$$\frac{8}{\sin 50°} = \frac{10}{\sin Q}$$

**Step 2:** Rearrange to find $\sin Q$
$$\sin Q = \frac{10 \times \sin 50°}{8}$$
$$\sin Q = \frac{10 \times 0.7660...}{8}$$
$$\sin Q = 0.9576...$$

**Step 3:** Find angle $Q$
$$Q = \sin^{-1}(0.9576...) = 73.2°$$ (to 1 d.p.)

> ** Check for second solution:** Since sine is positive, there could be a second solution: $180° - 73.2° = 106.8°$

However, we must check if this is valid:
- If $Q = 73.2°$: $P + Q = 50° + 73.2° = 123.2° < 180°$ ✓
- If $Q = 106.8°$: $P + Q = 50° + 106.8° = 156.8° < 180°$ ✓

Both solutions are valid! This is the **ambiguous case**.

**Answer:** $Q = 73.2°$ or $Q = 106.8°$ (to 1 d.p.)

---

**Example 6:** The Ambiguous Case

In triangle $ABC$, $a = 15$ cm, $c = 20$ cm, and angle $A = 35°$. Find angle $C$.

**Solution:**

**Step 1:** Apply the Sine Rule
$$\frac{a}{\sin A} = \frac{c}{\sin C}$$
$$\frac{15}{\sin 35°} = \frac{20}{\sin C}$$

**Step 2:** Find $\sin C$
$$\sin C = \frac{20 \times \sin 35°}{15}$$
$$\sin C = \frac{20 \times 0.5736...}{15}$$
$$\sin C = 0.7648...$$

**Step 3:** Find both possible angles
$$C_1 = \sin^{-1}(0.7648...) = 49.9°$$
$$C_2 = 180° - 49.9° = 130.1°$$

**Step 4:** Verify both solutions
- If $C = 49.9°$: $A + C = 35° + 49.9° = 84.9° < 180°$ ✓
- If $C = 130.1°$: $A + C = 35° + 130.1° = 165.1° < 180°$ ✓

Both solutions are valid!

**Answer:** $C = 49.9°$ or $C = 130.1°$ (to 1 d.p.)

---

## 3. THE COSINE RULE

### 3.1 Formula

For any triangle $ABC$:

**Finding a side:**
$$\boxed{a^2 = b^2 + c^2 - 2bc\cos A}$$

**Finding an angle:**
$$\boxed{\cos A = \frac{b^2 + c^2 - a^2}{2bc}}$$

### 3.2 When to Use the Cosine Rule

✅ **Use the Cosine Rule when you have:**
- **Three sides** (find an angle)
- **Two sides and the included angle** (find the third side)

> **🔗 Connection:** The cosine rule is a generalization of Pythagoras' theorem. When $A = 90°$, $\cos 90° = 0$, so $a^2 = b^2 + c^2$.

---

### 3.3 Derivation (Understanding the Formula)

Consider triangle $ABC$ with side lengths $a$, $b$, $c$ and angle $A$ at the origin.

Using coordinate geometry, let $A$ be at the origin, $B$ at $(c, 0)$, and $C$ at $(b\cos A, b\sin A)$.

The distance $BC$ can be found using the distance formula:
$$a^2 = (b\cos A - c)^2 + (b\sin A - 0)^2$$
$$a^2 = b^2\cos^2 A - 2bc\cos A + c^2 + b^2\sin^2 A$$
$$a^2 = b^2(\cos^2 A + \sin^2 A) + c^2 - 2bc\cos A$$

Since $\cos^2 A + \sin^2 A = 1$:
$$\boxed{a^2 = b^2 + c^2 - 2bc\cos A}$$

---

### 3.4 Worked Examples

**Example 7:** In triangle $ABC$, $a = 7$ cm, $b = 5$ cm, and angle $C = 60°$. Find side $c$.

**Solution:**

**Step 1:** Identify the known values
- $a = 7$ cm
- $b = 5$ cm
- $C = 60°$ (included angle)
- Find: $c$

**Step 2:** Apply the Cosine Rule
$$c^2 = a^2 + b^2 - 2ab\cos C$$
$$c^2 = 7^2 + 5^2 - 2 \times 7 \times 5 \times \cos 60°$$
$$c^2 = 49 + 25 - 70 \times 0.5$$
$$c^2 = 74 - 35$$
$$c^2 = 39$$
$$c = \sqrt{39} = 6.24...$$

**Answer:** $c = 6.2$ cm (to 1 d.p.)

---

**Example 8:** In triangle $XYZ$, $x = 9$ cm, $y = 11$ cm, and $z = 13$ cm. Find angle $X$.

**Solution:**

**Step 1:** Apply the Cosine Rule for finding an angle
$$\cos X = \frac{y^2 + z^2 - x^2}{2yz}$$
$$\cos X = \frac{11^2 + 13^2 - 9^2}{2 \times 11 \times 13}$$
$$\cos X = \frac{121 + 169 - 81}{286}$$
$$\cos X = \frac{209}{286}$$
$$\cos X = 0.7307...$$

**Step 2:** Find angle $X$
$$X = \cos^{-1}(0.7307...) = 43.0°$$

**Answer:** $X = 43.0°$ (to 1 d.p.)

---

**Example 9:** In triangle $ABC$, $AB = 8$ cm, $BC = 5$ cm, and $AC = 10$ cm. Find the size of the largest angle.

**Solution:**

> **📝 Key Insight:** The largest angle is always opposite the longest side. So we need to find angle $B$ (opposite side $AC = 10$ cm).

**Step 1:** Apply the Cosine Rule
$$\cos B = \frac{AB^2 + BC^2 - AC^2}{2 \times AB \times BC}$$
$$\cos B = \frac{8^2 + 5^2 - 10^2}{2 \times 8 \times 5}$$
$$\cos B = \frac{64 + 25 - 100}{80}$$
$$\cos B = \frac{-11}{80}$$
$$\cos B = -0.1375$$

**Step 2:** Find angle $B$
$$B = \cos^{-1}(-0.1375) = 97.9°$$

> **🔍 Verification:** Since $\cos B$ is negative, angle $B$ must be obtuse (between $90°$ and $180°$), which confirms our answer.

**Answer:** The largest angle is $97.9°$ (to 1 d.p.)

---

## 4. AREA OF A TRIANGLE FORMULA

### 4.1 Formula

For any triangle with two sides and the included angle:

$$\boxed{\text{Area} = \frac{1}{2}ab\sin C}$$

Where:
- $a$ and $b$ are two sides of the triangle
- $C$ is the angle between sides $a$ and $b$

### 4.2 When to Use This Formula

✅ **Use when you have:**
- Two sides and the included angle (SAS)

**Alternative formula** (for right-angled triangles):
$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$$

---

### 4.3 Derivation

Consider triangle $ABC$ with sides $a$ and $b$ and angle $C$ between them.

Drop a perpendicular from $B$ to side $AC$:
- Height $h = a\sin C$

Therefore:
$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times b \times a\sin C = \frac{1}{2}ab\sin C$$

---

### 4.4 Worked Examples

**Example 10:** Find the area of triangle $ABC$ where $AB = 12$ cm, $BC = 8$ cm, and angle $B = 45°$.

**Solution:**

**Step 1:** Identify the known values
- $a = BC = 8$ cm
- $b = AB = 12$ cm
- $C = B = 45°$ (included angle between $AB$ and $BC$)

**Step 2:** Apply the area formula
$$\text{Area} = \frac{1}{2} \times 8 \times 12 \times \sin 45°$$
$$\text{Area} = 48 \times \frac{\sqrt{2}}{2}$$
$$\text{Area} = 24\sqrt{2} = 33.9...$$

**Answer:** Area $= 33.9 \text{ cm}^2$ (to 1 d.p.) or $24\sqrt{2} \text{ cm}^2$ (exact)

---

**Example 11:** The area of triangle $PQR$ is $45 \text{ cm}^2$. Side $PQ = 10$ cm and side $QR = 12$ cm. Find angle $Q$.

**Solution:**

**Step 1:** Apply the area formula
$$\text{Area} = \frac{1}{2} \times PQ \times QR \times \sin Q$$
$$45 = \frac{1}{2} \times 10 \times 12 \times \sin Q$$
$$45 = 60\sin Q$$

**Step 2:** Solve for $\sin Q$
$$\sin Q = \frac{45}{60} = 0.75$$

**Step 3:** Find angle $Q$
$$Q = \sin^{-1}(0.75) = 48.6°$$

> ** Note:** $Q$ could also be $180° - 48.6° = 131.4°$, but since we're finding an angle in a triangle with given sides, the acute angle is the expected answer. Check if the obtuse angle is valid by considering the context.

**Answer:** $Q = 48.6°$ (to 1 d.p.)

---

## 5. COMBINED PROBLEMS

### 5.1 Multi-Step Problems

**Example 12:** In triangle $ABC$, $AB = 6$ cm, $BC = 9$ cm, and angle $B = 55°$. 
(a) Find the length of $AC$.
(b) Find the area of the triangle.
(c) Find angle $A$.

**Solution:**

**(a) Finding side $AC$:**

Using the Cosine Rule:
$$AC^2 = AB^2 + BC^2 - 2 \times AB \times BC \times \cos B$$
$$AC^2 = 6^2 + 9^2 - 2 \times 6 \times 9 \times \cos 55°$$
$$AC^2 = 36 + 81 - 108 \times 0.5736...$$
$$AC^2 = 117 - 61.9...$$
$$AC^2 = 55.1...$$
$$AC = 7.42... \text{ cm}$$

**Answer:** $AC = 7.4$ cm (to 1 d.p.)

**(b) Finding the area:**

$$\text{Area} = \frac{1}{2} \times AB \times BC \times \sin B$$
$$\text{Area} = \frac{1}{2} \times 6 \times 9 \times \sin 55°$$
$$\text{Area} = 27 \times 0.8192...$$
$$\text{Area} = 22.1... \text{ cm}^2$$

**Answer:** Area $= 22.1 \text{ cm}^2$ (to 1 d.p.)

**(c) Finding angle $A$:**

Using the Sine Rule:
$$\frac{AC}{\sin B} = \frac{BC}{\sin A}$$
$$\frac{7.42}{\sin 55°} = \frac{9}{\sin A}$$
$$\sin A = \frac{9 \times \sin 55°}{7.42}$$
$$\sin A = \frac{9 \times 0.8192...}{7.42}$$
$$\sin A = 0.994...$$
$$A = \sin^{-1}(0.994...) = 83.8°$$

**Answer:** $A = 83.8°$ (to 1 d.p.)

---

## 6. CHOOSING THE CORRECT METHOD

### 6.1 Decision Tree

```
What information do you have?
│
├─ Right-angled triangle?
│  └─ Use SOHCAHTOA
│
├─ Two angles + one side?
│  └─ Use Sine Rule to find another side
│
├─ Two sides + included angle?
│  ├─ Use Cosine Rule to find the third side
│  └─ Use Area = ½ab sin C to find the area
│
├─ Two sides + non-included angle?
│  └─ Use Sine Rule (check for ambiguous case!)
│
└─ Three sides?
   └─ Use Cosine Rule to find an angle
```

### 6.2 Summary Table

| Given Information | Find | Rule to Use |
|-------------------|------|-------------|
| 2 angles, 1 side | Another side | Sine Rule |
| 2 sides, included angle | 3rd side | Cosine Rule |
| 2 sides, included angle | Area | Area formula |
| 2 sides, non-included angle | Angle | Sine Rule |
| 3 sides | Any angle | Cosine Rule |

---

## 7. COMMON MISTAKES 

### 7.1 Trigonometric Graphs

| Mistake | Correction |
|---------|------------|
| $\sin 0° = 1$ | $\sin 0° = 0$ |
| $\cos 180° = 1$ | $\cos 180° = -1$ |
| $\tan 90° = \text{undefined}$ (thinking it equals $0$ or $\infty$) | $\tan 90°$ is undefined - there's an asymptote |
| Period of $\tan\theta$ is $360°$ | Period of $\tan\theta$ is $180°$ |
| Forgetting second solution when solving $\sin\theta = k$ | Always check for solutions in other quadrants |

### 7.2 Sine Rule

| Mistake | Correction |
|---------|------------|
| Using Sine Rule when you have SAS | Use Cosine Rule for SAS |
| Forgetting the ambiguous case | When given SSA, check for two possible solutions |
| $\frac{\sin A}{\sin B} = \frac{a}{b}$ | Correct: $\frac{a}{\sin A} = \frac{b}{\sin B}$ |
| Not checking if angle sum $> 180°$ | After finding angles, verify sum $= 180°$ |

### 7.3 Cosine Rule

| Mistake | Correction |
|---------|------------|
| Using Cosine Rule when you have AAS | Use Sine Rule for AAS |
| $a^2 = b^2 + c^2 + 2bc\cos A$ | Correct: $a^2 = b^2 + c^2 - 2bc\cos A$ |
| Using wrong angle in formula | Angle $A$ must be opposite side $a$ |
| Forgetting to square root | After finding $a^2$, take $\sqrt{a^2}$ to find $a$ |

### 7.4 Area Formula

| Mistake | Correction |
|---------|------------|
| Using non-included angle | The angle must be between the two sides |
| $\text{Area} = ab\sin C$ | Correct: $\text{Area} = \frac{1}{2}ab\sin C$ |
| Using the formula for right-angled triangles unnecessarily | For right-angled triangles, Area $= \frac{1}{2} \times \text{base} \times \text{height}$ is simpler |

---

## 8. EXAM FOCUS & STRATEGY

### 8.1 Frequently Tested Question Types

1. **Solving triangles** - Find all unknown sides and angles
2. **Area problems** - Find area or find an angle given the area
3. **Word problems** - Applications involving bearings, navigation, or real-world contexts
4. **Graph interpretation** - Reading values from trigonometric graphs
5. **Transformation of graphs** - Describing transformations of $y = \sin\theta$ or $y = \cos\theta$
6. **Multi-step problems** - Combining sine rule, cosine rule, and area formula

### 8.2 Typical Problem-Solving Patterns

**Pattern 1: Triangle Solving**
- Given: 3 pieces of information
- Find: Remaining sides and angles
- Strategy: Identify which rule applies, solve systematically

**Pattern 2: Bearings Problems**
- Draw a clear diagram
- Identify triangles
- Apply sine/cosine rule
- Interpret results in context

**Pattern 3: Area-First Problems**
- Sometimes given area and asked to find a side or angle
- Work backwards using the area formula

### 8.3 Command Word Guidance

| Command Word | What It Means |
|--------------|---------------|
| **Find** | Calculate the value - show working |
| **Calculate** | Work out the value - show all steps |
| **Solve** | Find all solutions - check for multiple answers |
| **Show that** | Prove the given result - must reach exact answer |
| **Determine** | Find with certainty - justify your answer |
| **Explain** | Give reasons - use mathematical terminology |

### 8.4 How to Gain Full Marks

✅ **Show all working** - Marks are given for method, not just the answer

✅ **Use appropriate notation** - Write angles with degree symbol ($°$)

✅ **Give answers to appropriate accuracy** - Usually 3 significant figures unless specified

✅ **Check for multiple solutions** - Especially with the Sine Rule

✅ **Verify your answer** - Angle sum of triangle $= 180°$

✅ **State the rule used** - "Using the sine rule..." or "Using the cosine rule..."

✅ **Draw clear diagrams** - Label all sides and angles

### 8.5 Grade 9/A* Tips

1. **Exact values:** Know $\sin 30° = \frac{1}{2}$, $\cos 60° = \frac{1}{2}$, $\sin 45° = \cos 45° = \frac{1}{\sqrt{2}}$, $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$

2. **Compound problems:** Be prepared to use multiple rules in one question

3. **Algebraic manipulation:** You may need to rearrange formulas

4. **Proof questions:** "Show that" questions require clear logical steps

5. **Context interpretation:** In word problems, extract the mathematical information carefully

---

## 9. KEY FORMULAS SUMMARY

### Trigonometric Values (Exact)

| Angle | $\sin$ | $\cos$ | $\tan$ |
|-------|--------|--------|--------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45°$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{\sqrt{2}}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

### Formula Sheet

**Sine Rule:**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

**Cosine Rule:**
$$a^2 = b^2 + c^2 - 2bc\cos A$$

**Area of Triangle:**
$$\text{Area} = \frac{1}{2}ab\sin C$$

**Period of trigonometric functions:**
- $\sin\theta$ and $\cos\theta$: Period $= 360°$
- $\tan\theta$: Period $= 180°$

---

*End of Notes*
