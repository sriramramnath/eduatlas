# Chapter 45: Shape and Space 5 - Concise Synopsis
## Quick Revision Synopsis - Pearson Edexcel IGCSE

---

## 📌 TRANSLATION

### Column Vector $\begin{pmatrix} a \\ b \end{pmatrix}$
- **$a$** = horizontal shift (+ right, − left)
- **$b$** = vertical shift (+ up, − down)

### Key Rule:
$$(x, y) \rightarrow (x + a, y + b)$$

### Description Required:
> "Translation by vector $\begin{pmatrix} a \\ b \end{pmatrix}$"

### Properties:
| Preserved | Not Preserved |
|-----------|---------------|
| Length, Angle, Area, Orientation | None |

---

## 📌 REFLECTION

### Common Mirror Lines:
| Line | Equation | Rule |
|------|----------|------|
| y-axis | $x = 0$ | $(x, y) \rightarrow (-x, y)$ |
| x-axis | $y = 0$ | $(x, y) \rightarrow (x, -y)$ |
| Vertical | $x = a$ | $(x, y) \rightarrow (2a-x, y)$ |
| Horizontal | $y = b$ | $(x, y) \rightarrow (x, 2b-y)$ |
| Diagonal ↗ | $y = x$ | $(x, y) \rightarrow (y, x)$ |
| Diagonal ↖ | $y = -x$ | $(x, y) \rightarrow (-y, -x)$ |

### Description Required:
> "Reflection in the line [equation]"

### Properties:
| Preserved | Not Preserved |
|-----------|---------------|
| Length, Angle, Area, Parallelism | Orientation (reversed) |

### Key Point:
- Points on mirror line = **invariant**

---

## 📌 ROTATION

### Three Requirements:
1. **Centre** (coordinates)
2. **Angle** (90°, 180°, 270°)
3. **Direction** (clockwise/anticlockwise)

### Rotation Rules (about origin):
| Rotation | Rule |
|----------|------|
| 90° ACW | $(x, y) \rightarrow (-y, x)$ |
| 90° CW | $(x, y) \rightarrow (y, -x)$ |
| 180° | $(x, y) \rightarrow (-x, -y)$ |

### For Rotation about $(a, b)$:
1. Translate to origin: $(x-a, y-b)$
2. Apply rotation rule
3. Translate back: add $(a, b)$

### 180° Rule about $(a, b)$:
$$(x, y) \rightarrow (2a-x, 2b-y)$$

### Description Required:
> "Rotation [angle]° [direction] about ([centre])"

### Memory Trick:
- **ACW**: x becomes −y, y becomes x
- **CW**: x becomes y, y becomes −x

---

## 📌 ENLARGEMENT

### Two Requirements:
1. **Scale Factor** ($k$)
2. **Centre** (coordinates)

### Formula:
$$(x, y) \rightarrow (a + k(x-a), b + k(y-b))$$

**Simplified:**
$$\text{Image} = \text{Centre} + k \times (\text{Point} - \text{Centre})$$

### Scale Factor Types:
| SF $k$ | Effect |
|--------|--------|
| $k > 1$ | Enlarges |
| $0 < k < 1$ | Reduces |
| $k < 0$ | Enlarges + inverts (rotates 180°) |
| $k = 1$ | No change |

### Area Relationship:
$$\text{Area factor} = k^2$$

$$\text{New Area} = k^2 \times \text{Original Area}$$

### Finding Scale Factor:
$$k = \frac{\text{Image length}}{\text{Object length}}$$

### Description Required:
> "Enlargement, scale factor $k$, centre ([coordinates])"

### Key Points:
- Lines from centre through corresponding points should be collinear
- Negative SF = 180° rotation effect

---

## 📌 COMBINED TRANSFORMATIONS

### Key Results:

| Combination | Result |
|-------------|--------|
| Reflection in $x=a$, then $x=b$ | Translation $\begin{pmatrix} 2(b-a) \\ 0 \end{pmatrix}$ |
| Reflection in $y=a$, then $y=b$ | Translation $\begin{pmatrix} 0 \\ 2(b-a) \end{pmatrix}$ |
| 90° CW + 90° CW (same centre) | 180° rotation |
| 180° + 180° | Identity (no change) |
| Reflection in $y=x$, then $y=-x$ | 180° rotation about origin |
| Enlargement $k_1$ + $k_2$ (same centre) | Enlargement $k_1 \times k_2$ |

### Double Reflection Rules:
- **Parallel lines** → Translation
- **Perpendicular lines** → 180° rotation
- **Intersecting lines** → Rotation (angle = 2× angle between lines)

### Inverse Transformations:
| Transformation | Inverse |
|----------------|---------|
| Translation $\begin{pmatrix} a \\ b \end{pmatrix}$ | Translation $\begin{pmatrix} -a \\ -b \end{pmatrix}$ |
| Reflection | Same reflection (self-inverse) |
| Rotation $\theta$ | Rotation $-\theta$ |
| Enlargement $k$ | Enlargement $\frac{1}{k}$ |

---

## 📌 INVARIANT POINTS

| Transformation | Invariant Points |
|----------------|------------------|
| Translation (non-zero) | None |
| Reflection | All points on mirror line |
| Rotation | Centre only |
| Enlargement ($k \neq 1$) | Centre only |

---

## 📌 FORMULA TABLE

### Quick Reference:

| Transformation | Coordinate Rule |
|----------------|-----------------|
| Translation $\begin{pmatrix} a \\ b \end{pmatrix}$ | $(x+a, y+b)$ |
| Reflection in $x=a$ | $(2a-x, y)$ |
| Reflection in $y=b$ | $(x, 2b-y)$ |
| Reflection in $y=x$ | $(y, x)$ |
| Reflection in $y=-x$ | $(-y, -x)$ |
| Rotation 90° ACW (origin) | $(-y, x)$ |
| Rotation 90° CW (origin) | $(y, -x)$ |
| Rotation 180° (origin) | $(-x, -y)$ |
| Rotation 180° about $(a,b)$ | $(2a-x, 2b-y)$ |
| Enlargement SF $k$, centre $(a,b)$ | $(a+k(x-a), b+k(y-b))$ |

---

## 📌 EXAM MARKING CRITERIA

### Translation (2 marks):
- ✓ Type: Translation
- ✓ Vector: $\begin{pmatrix} a \\ b \end{pmatrix}$

### Reflection (2 marks):
- ✓ Type: Reflection
- ✓ Mirror line: equation

### Rotation (3 marks):
- ✓ Type: Rotation
- ✓ Angle and direction
- ✓ Centre

### Enlargement (2 marks):
- ✓ Type: Enlargement
- ✓ Scale factor AND centre

---

## 📌 COMMON EXAM ERRORS

| Error | Correction |
|-------|------------|
| Wrong column vector signs | Positive $a$ = right, positive $b$ = up |
| Missing rotation direction | Always state CW or ACW |
| Missing centre for enlargement | Centre is ALWAYS required |
| Using linear SF for area | Area factor = $k^2$ |
| Confusing reflection lines | Check equation carefully |
| Forgetting negative SF | Negative = inversion |

---

## 📌 QUICK MEMORY TIPS

### Rotation Rules (Origin):
- **90° ACW**: Switch, Negate y → $(-y, x)$
- **90° CW**: Switch, Negate x → $(y, -x)$
- **180°**: Negate both → $(-x, -y)$

### Enlargement:
- Draw rays from centre
- Distance ratio = scale factor
- Area multiplies by $k^2$

### Reflection:
- Count distance to mirror line
- Same distance on other side
- Points on line stay put

---

## 📌 EXAM FREQUENCY

| Topic | Frequency |
|-------|-----------|
| Describing transformations |  Very High |
| Drawing transformations |  Very High |
| Combined transformations |  High |
| Negative enlargement |  Medium |
| Area scale factor |  Medium |
| Invariant points |  Lower |

---

*End of Synopsis - Shape and Space 5*
