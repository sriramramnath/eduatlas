# Chapter 48: Shape and Space 8 - Concise Synopsis
## Quick Revision Synopsis

---

## 📌 ESSENTIAL DEFINITIONS

**Vector**: Quantity with magnitude AND direction
**Scalar**: Quantity with magnitude only

---

##  VECTOR NOTATION

| Form | Example |
|------|---------|
| Bold lowercase | $\mathbf{a}, \mathbf{b}$ |
| Underlined | $\underline{a}, \underline{b}$ |
| Column vector | $\begin{pmatrix} x \\ y \end{pmatrix}$ |
| Named vector | $\vec{AB}$ (from $A$ to $B$) |

---

## 🔢 COLUMN VECTORS

### Key Operations

| Operation | Formula |
|-----------|---------|
| Addition | $\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a+c \\ b+d \end{pmatrix}$ |
| Subtraction | $\begin{pmatrix} a \\ b \end{pmatrix} - \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a-c \\ b-d \end{pmatrix}$ |
| Scalar multiply | $k\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} ka \\ kb \end{pmatrix}$ |

### Finding Vector Between Points
$$\vec{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$$

---

## 📐 MAGNITUDE

$$|\mathbf{a}| = \sqrt{x^2 + y^2}$$

**Quick Examples:**
- $\left|\begin{pmatrix} 3 \\ 4 \end{pmatrix}\right| = 5$
- $\left|\begin{pmatrix} 5 \\ 12 \end{pmatrix}\right| = 13$
- $\left|\begin{pmatrix} 6 \\ 8 \end{pmatrix}\right| = 10$
- $\left|\begin{pmatrix} 8 \\ 15 \end{pmatrix}\right| = 17$

---

## ⚡ KEY RELATIONSHIPS

| Rule | Formula |
|------|---------|
| Negative vector | $-\mathbf{a}$ has opposite direction, same magnitude |
| Reverse endpoints | $\vec{AB} = -\vec{BA}$ |
| Zero vector | $\mathbf{a} + (-\mathbf{a}) = \mathbf{0}$ |
| Position vector | $\vec{AB} = \vec{OB} - \vec{OA}$ |

---

## 🔀 PARALLEL VECTORS

**Definition**: $\mathbf{a}$ and $\mathbf{b}$ are parallel if $\mathbf{a} = k\mathbf{b}$

**To check parallelism:**
1. Find ratio of $x$-components
2. Find ratio of $y$-components
3. If ratios equal → parallel

**Example:**
$\begin{pmatrix} 4 \\ 6 \end{pmatrix}$ and $\begin{pmatrix} 6 \\ 9 \end{pmatrix}$

- Ratio $x$: $\frac{4}{6} = \frac{2}{3}$
- Ratio $y$: $\frac{6}{9} = \frac{2}{3}$ ✓
- **Parallel!**

---

## 🎯 GEOMETRY FORMULAS

### Midpoint Formula
$$\vec{OM} = \frac{\vec{OA} + \vec{OB}}{2}$$

### Section Formula ($AP:PB = m:n$)
$$\vec{OP} = \frac{n\vec{OA} + m\vec{OB}}{m+n}$$

> **Memory trick:** Weight of $A$ is $n$, weight of $B$ is $m$

---

## 📍 COLLINEARITY TEST

**To prove $A$, $B$, $C$ are collinear:**
1. Show $\vec{AB} = k\vec{BC}$ (parallel)
2. Both vectors share point $B$
3. Therefore collinear ✓

---

## 📊 UNIT VECTORS

**Standard unit vectors:**
- $\mathbf{i} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (horizontal)
- $\mathbf{j} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (vertical)

**To find unit vector:**
$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

---

##  COMMON EXAM ERRORS

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| $\vec{AB} = \vec{OA} - \vec{OB}$ | $\vec{AB} = \vec{OB} - \vec{OA}$ |
| $|{-3}| = -3$ | $|{-3}| = 3$ |
| Forgetting vector notation | Always underline/bold vectors |
| $\vec{AB} + \vec{BA} = 2\vec{AB}$ | $\vec{AB} + \vec{BA} = \mathbf{0}$ |

---

## 🏆 EXAM TIPS

1. **Always** use vector notation (underline or bold)
2. **Show all steps** in proof questions
3. **Check negatives** carefully
4. **State conclusions** clearly
5. For collinearity: **parallel + common point** = collinear

---

## 📋 QUICK REFERENCE: TRIANGLE LAW

```
    B
   /|
  / |
 /  |
A→→→C

AC = AB + BC
```

**Head-to-tail addition**

---

## 📋 QUICK REFERENCE: PARALLELOGRAM

In parallelogram $ABCD$:
- $\vec{AB} = \vec{DC}$
- $\vec{AD} = \vec{BC}$
- $\vec{AC} = \vec{AB} + \vec{AD}$

---

*End of Synopsis*
