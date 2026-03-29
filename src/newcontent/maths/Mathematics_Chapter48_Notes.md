# Chapter 48: Shape and Space 8 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics - Complete Study Notes

---

## 📌 LEARNING OBJECTIVES

By the end of this unit, you should be able to:
- Understand and use vector notation
- Represent vectors geometrically and algebraically
- Perform scalar multiplication of vectors
- Add and subtract vectors
- Apply vector methods to solve geometric problems
- Prove geometric results using vectors

---

## 1. INTRODUCTION TO VECTORS

### 1.1 What is a Vector?

> **KEY CONCEPT**: A **vector** is a quantity that has both **magnitude** (size) and **direction**.

**Scalar vs Vector:**
| Scalars (magnitude only) | Vectors (magnitude + direction) |
|--------------------------|--------------------------------|
| Temperature, mass, time, distance | Displacement, velocity, force |
| Speed | Velocity |

**Example:**
- "The car traveled 50 km" → **Distance** (scalar)
- "The car traveled 50 km North" → **Displacement** (vector)

---

### 1.2 Vector Notation

There are **three main ways** to denote vectors:

#### Method 1: Bold Lowercase Letters
$$\mathbf{a}, \mathbf{b}, \mathbf{v}$$

#### Method 2: Underlined Letters
$$\underline{a}, \underline{b}, \underline{v}$$

#### Method 3: Column Vector Form
$$\begin{pmatrix} x \\ y \end{pmatrix}$$

>  **EXAM TIP**: In handwritten work, use underlined letters ($\underline{a}$) or the notation $\vec{AB}$. Never write vectors without some form of notation to distinguish them from scalars!

#### Named Vectors by Endpoints
A vector from point $A$ to point $B$ is written as:
$$\vec{AB} \text{ or } \overrightarrow{AB}$$

**Important:** The order matters!
- $\vec{AB}$ goes from $A$ to $B$
- $\vec{BA}$ goes from $B$ to $A$
- $\vec{AB} = -\vec{BA}$

---

### 1.3 Representing Vectors Geometrically

A vector is represented by a **directed line segment** (arrow).

**Components of a Vector:**
- The **arrow** shows direction
- The **length** represents magnitude
- The vector $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ means:
  - Move 3 units in the positive $x$-direction
  - Move 2 units in the positive $y$-direction

> **KEY INSIGHT**: Vectors represent **displacement**, not position. The vector $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ can start from ANY point and will always have the same magnitude and direction.

---

## 2. COLUMN VECTORS AND COMPONENTS

### 2.1 Understanding Column Vectors

A column vector $\begin{pmatrix} x \\ y \end{pmatrix}$ has:
- **$x$** = horizontal component (positive = right, negative = left)
- **$y$** = vertical component (positive = up, negative = down)

**Example:** The vector $\mathbf{a} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$
- Moves 4 units to the right
- Moves 3 units down

### 2.2 Finding Column Vectors from Diagrams

**Worked Example:**
Given points $A(2, 1)$ and $B(5, 5)$, find the column vector $\vec{AB}$.

**Solution:**
$$\vec{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} = \begin{pmatrix} 5 - 2 \\ 5 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

> **Step-by-step reasoning:**
> 1. The vector goes FROM $A$ TO $B$
> 2. We subtract the starting point coordinates FROM the ending point coordinates
> 3. Horizontal change: $5 - 2 = 3$ (3 units right)
> 4. Vertical change: $5 - 1 = 4$ (4 units up)

---

### 2.3 Finding Coordinates Using Vectors

**Worked Example:**
Point $P$ has coordinates $(3, -2)$. Point $Q$ is such that $\vec{PQ} = \begin{pmatrix} -5 \\ 6 \end{pmatrix}$. Find the coordinates of $Q$.

**Solution:**
$$\vec{PQ} = \begin{pmatrix} x_Q - x_P \\ y_Q - y_P \end{pmatrix}$$

$$\begin{pmatrix} -5 \\ 6 \end{pmatrix} = \begin{pmatrix} x_Q - 3 \\ y_Q - (-2) \end{pmatrix}$$

Therefore:
- $x_Q - 3 = -5 \Rightarrow x_Q = -2$
- $y_Q + 2 = 6 \Rightarrow y_Q = 4$

**Answer:** $Q(-2, 4)$

---

## 3. MAGNITUDE OF A VECTOR

### 3.1 Formula for Magnitude

The **magnitude** (or **modulus**) of a vector $\mathbf{a} = \begin{pmatrix} x \\ y \end{pmatrix}$ is:

$$|\mathbf{a}| = \sqrt{x^2 + y^2}$$

> **Why this formula works:** This is the **Pythagorean theorem**. The vector forms the hypotenuse of a right-angled triangle with legs of length $|x|$ and $|y|$.

### 3.2 Worked Examples

**Example 1:** Find the magnitude of $\mathbf{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$

**Solution:**
$$|\mathbf{v}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

---

**Example 2:** Find the magnitude of $\mathbf{a} = \begin{pmatrix} -6 \\ 8 \end{pmatrix}$

**Solution:**
$$|\mathbf{a}| = \sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$

>  **COMMON MISTAKE**: Don't forget to square negative numbers properly: $(-6)^2 = 36$, NOT $-36$!

---

**Example 3:** If $\mathbf{b} = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$, find $|\mathbf{b}|$

**Solution:**
$$|\mathbf{b}| = \sqrt{5^2 + (-12)^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$

---

### 3.3 Distance Between Two Points Using Vectors

The distance between points $A(x_1, y_1)$ and $B(x_2, y_2)$ is:

$$\text{Distance} = |\vec{AB}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

---

## 4. EQUAL VECTORS

### 4.1 Definition

> **KEY DEFINITION**: Two vectors are **equal** if and only if they have the same **magnitude** AND the same **direction**.

In column vector form:
$$\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} c \\ d \end{pmatrix} \iff a = c \text{ AND } b = d$$

### 4.2 Geometric Interpretation

Equal vectors:
- Have the same length
- Are parallel
- Point in the same direction
- Can be in different positions (vectors are "free")

**Example:** In parallelogram $ABCD$:
- $\vec{AB} = \vec{DC}$ (opposite sides are equal vectors)

---

## 5. NEGATIVE VECTORS

### 5.1 Definition

The **negative** of vector $\mathbf{a}$, written $-\mathbf{a}$, has:
- The **same magnitude** as $\mathbf{a}$
- The **opposite direction** to $\mathbf{a}$

In column vector form:
$$\text{If } \mathbf{a} = \begin{pmatrix} x \\ y \end{pmatrix}, \text{ then } -\mathbf{a} = \begin{pmatrix} -x \\ -y \end{pmatrix}$$

### 5.2 Key Relationship

$$\vec{AB} = -\vec{BA}$$

**Worked Example:**
If $\vec{AB} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$, find $\vec{BA}$.

**Solution:**
$$\vec{BA} = -\vec{AB} = \begin{pmatrix} -3 \\ 2 \end{pmatrix}$$

---

## 6. SCALAR MULTIPLICATION

### 6.1 Definition

When we multiply a vector $\mathbf{v}$ by a scalar (number) $k$, we get a new vector $k\mathbf{v}$.

**Column vector form:**
$$k \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} kx \\ ky \end{pmatrix}$$

### 6.2 Effect of Scalar Multiplication

| Value of $k$ | Effect on Vector |
|--------------|------------------|
| $k > 1$ | Stretches the vector (longer) |
| $k = 1$ | No change |
| $0 < k < 1$ | Shrinks the vector (shorter) |
| $k = 0$ | Zero vector |
| $k < 0$ | Reverses direction and scales |

> **KEY INSIGHT**: The direction is preserved when $k > 0$ and reversed when $k < 0$.

### 6.3 Worked Examples

**Example 1:** Given $\mathbf{a} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$, find $3\mathbf{a}$.

**Solution:**
$$3\mathbf{a} = 3\begin{pmatrix} 2 \\ -3 \end{pmatrix} = \begin{pmatrix} 3 \times 2 \\ 3 \times (-3) \end{pmatrix} = \begin{pmatrix} 6 \\ -9 \end{pmatrix}$$

---

**Example 2:** Given $\mathbf{b} = \begin{pmatrix} -4 \\ 6 \end{pmatrix}$, find $-\frac{1}{2}\mathbf{b}$.

**Solution:**
$$-\frac{1}{2}\mathbf{b} = -\frac{1}{2}\begin{pmatrix} -4 \\ 6 \end{pmatrix} = \begin{pmatrix} -\frac{1}{2} \times (-4) \\ -\frac{1}{2} \times 6 \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$$

---

### 6.4 Parallel Vectors

> **KEY DEFINITION**: Two vectors are **parallel** if one is a scalar multiple of the other.

**Mathematically:** $\mathbf{a}$ and $\mathbf{b}$ are parallel if $\mathbf{a} = k\mathbf{b}$ for some scalar $k$.

**Worked Example:**
Show that $\mathbf{a} = \begin{pmatrix} 6 \\ 4 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 9 \\ 6 \end{pmatrix}$ are parallel.

**Solution:**
We need to find $k$ such that $\mathbf{a} = k\mathbf{b}$.

$$\begin{pmatrix} 6 \\ 4 \end{pmatrix} = k\begin{pmatrix} 9 \\ 6 \end{pmatrix}$$

Comparing components:
- $6 = 9k \Rightarrow k = \frac{6}{9} = \frac{2}{3}$
- Check: $4 = 6k = 6 \times \frac{2}{3} = 4$ ✓

Since both components give the same value of $k$, the vectors are parallel.

---

## 7. VECTOR ADDITION AND SUBTRACTION

### 7.1 Vector Addition

**Column vector form:**
$$\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a+c \\ b+d \end{pmatrix}$$

### 7.2 Geometric Interpretation (Triangle Law)

> **TRIANGLE LAW**: To add vectors $\mathbf{a}$ and $\mathbf{b}$, place them head-to-tail. The resultant vector $\mathbf{a} + \mathbf{b}$ goes from the start of $\mathbf{a}$ to the end of $\mathbf{b}$.

```
     b
    →→→
   /   |
  a/    | a + b
 /      |
●→→→→→→→○
```

### 7.3 Parallelogram Law

> **PARALLELOGRAM LAW**: If vectors $\mathbf{a}$ and $\mathbf{b}$ start from the same point, their sum $\mathbf{a} + \mathbf{b}$ is the diagonal of the parallelogram formed.

### 7.4 Vector Subtraction

$$\mathbf{a} - \mathbf{b} = \mathbf{a} + (-\mathbf{b})$$

**Column vector form:**
$$\begin{pmatrix} a \\ b \end{pmatrix} - \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a-c \\ b-d \end{pmatrix}$$

### 7.5 Worked Examples

**Example 1:** If $\mathbf{a} = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} -2 \\ 4 \end{pmatrix}$, find $\mathbf{a} + \mathbf{b}$.

**Solution:**
$$\mathbf{a} + \mathbf{b} = \begin{pmatrix} 3 \\ 5 \end{pmatrix} + \begin{pmatrix} -2 \\ 4 \end{pmatrix} = \begin{pmatrix} 3 + (-2) \\ 5 + 4 \end{pmatrix} = \begin{pmatrix} 1 \\ 9 \end{pmatrix}$$

---

**Example 2:** Find $\mathbf{a} - \mathbf{b}$ for the vectors above.

**Solution:**
$$\mathbf{a} - \mathbf{b} = \begin{pmatrix} 3 \\ 5 \end{pmatrix} - \begin{pmatrix} -2 \\ 4 \end{pmatrix} = \begin{pmatrix} 3 - (-2) \\ 5 - 4 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$$

>  **COMMON MISTAKE**: When subtracting, remember: $3 - (-2) = 5$, NOT $1$!

---

**Example 3:** If $\mathbf{p} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ and $\mathbf{q} = \begin{pmatrix} -3 \\ 4 \end{pmatrix}$, find $2\mathbf{p} + 3\mathbf{q}$.

**Solution:**
$$2\mathbf{p} = 2\begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 4 \\ -2 \end{pmatrix}$$

$$3\mathbf{q} = 3\begin{pmatrix} -3 \\ 4 \end{pmatrix} = \begin{pmatrix} -9 \\ 12 \end{pmatrix}$$

$$2\mathbf{p} + 3\mathbf{q} = \begin{pmatrix} 4 \\ -2 \end{pmatrix} + \begin{pmatrix} -9 \\ 12 \end{pmatrix} = \begin{pmatrix} -5 \\ 10 \end{pmatrix}$$

---

## 8. ZERO VECTOR

### 8.1 Definition

The **zero vector** (or null vector) is:
$$\mathbf{0} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

### 8.2 Properties

- $|\mathbf{0}| = 0$ (zero magnitude)
- $\mathbf{a} + \mathbf{0} = \mathbf{a}$
- $\mathbf{a} + (-\mathbf{a}) = \mathbf{0}$
- For any point $P$: $\vec{PP} = \mathbf{0}$

---

## 9. UNIT VECTORS

### 9.1 Definition

> **KEY DEFINITION**: A **unit vector** is a vector with magnitude 1.

### 9.2 Standard Unit Vectors

The standard unit vectors are:
$$\mathbf{i} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \text{ (horizontal unit vector)}$$
$$\mathbf{j} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \text{ (vertical unit vector)}$$

### 9.3 Expressing Vectors Using $\mathbf{i}$ and $\mathbf{j}$

Any vector $\begin{pmatrix} x \\ y \end{pmatrix}$ can be written as:
$$\begin{pmatrix} x \\ y \end{pmatrix} = x\mathbf{i} + y\mathbf{j}$$

**Example:**
$$\begin{pmatrix} 3 \\ -5 \end{pmatrix} = 3\mathbf{i} - 5\mathbf{j}$$

### 9.4 Finding a Unit Vector

To find the unit vector in the direction of $\mathbf{a}$:

$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|} = \frac{1}{|\mathbf{a}|}\mathbf{a}$$

**Worked Example:**
Find the unit vector in the direction of $\mathbf{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.

**Solution:**
Step 1: Find the magnitude
$$|\mathbf{v}| = \sqrt{3^2 + 4^2} = 5$$

Step 2: Divide by the magnitude
$$\hat{\mathbf{v}} = \frac{1}{5}\begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} \frac{3}{5} \\ \frac{4}{5} \end{pmatrix}$$

**Verification:** $|\hat{\mathbf{v}}| = \sqrt{\left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2} = \sqrt{\frac{9}{25} + \frac{16}{25}} = \sqrt{\frac{25}{25}} = 1$ ✓

---

## 10. VECTOR GEOMETRY

### 10.1 Midpoint Formula

The position vector of the midpoint $M$ of line segment $AB$ is:

$$\vec{OM} = \frac{1}{2}(\vec{OA} + \vec{OB})$$

Or if $A$ has position vector $\mathbf{a}$ and $B$ has position vector $\mathbf{b}$:
$$\vec{OM} = \frac{\mathbf{a} + \mathbf{b}}{2}$$

**Worked Example:**
If $\vec{OA} = \begin{pmatrix} 2 \\ 6 \end{pmatrix}$ and $\vec{OB} = \begin{pmatrix} 8 \\ 4 \end{pmatrix}$, find the position vector of the midpoint $M$ of $AB$.

**Solution:**
$$\vec{OM} = \frac{1}{2}\left[\begin{pmatrix} 2 \\ 6 \end{pmatrix} + \begin{pmatrix} 8 \\ 4 \end{pmatrix}\right] = \frac{1}{2}\begin{pmatrix} 10 \\ 10 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$$

---

### 10.2 Section Formula (Internal Division)

If point $P$ divides line segment $AB$ in the ratio $m:n$ (internally), then:

$$\vec{OP} = \frac{n\vec{OA} + m\vec{OB}}{m+n}$$

> **Memory Tip:** "To find $P$, the weight of $A$ is $n$ and the weight of $B$ is $m$ — opposite to their positions in the ratio!"

**Worked Example:**
Point $P$ divides $AB$ in the ratio $2:3$ (i.e., $AP:PB = 2:3$).
If $\vec{OA} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\vec{OB} = \begin{pmatrix} 6 \\ 7 \end{pmatrix}$, find $\vec{OP}$.

**Solution:**
Here $m = 2$, $n = 3$

$$\vec{OP} = \frac{3\vec{OA} + 2\vec{OB}}{2+3} = \frac{3\begin{pmatrix} 1 \\ 2 \end{pmatrix} + 2\begin{pmatrix} 6 \\ 7 \end{pmatrix}}{5}$$

$$= \frac{\begin{pmatrix} 3 \\ 6 \end{pmatrix} + \begin{pmatrix} 12 \\ 14 \end{pmatrix}}{5} = \frac{\begin{pmatrix} 15 \\ 20 \end{pmatrix}}{5} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

---

### 10.3 Points on a Straight Line (Collinearity)

> **KEY INSIGHT**: Points are **collinear** (lie on the same straight line) if the vectors between them are parallel.

**To prove three points $A$, $B$, $C$ are collinear:**
1. Show $\vec{AB}$ and $\vec{BC}$ are parallel (one is a scalar multiple of the other)
2. State that they share point $B$
3. Conclude $A$, $B$, $C$ are collinear

**Worked Example:**
$A$, $B$, and $C$ have position vectors $\mathbf{a} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$, and $\mathbf{c} = \begin{pmatrix} 7 \\ 11 \end{pmatrix}$. Show that $A$, $B$, and $C$ are collinear.

**Solution:**

Step 1: Find $\vec{AB}$
$$\vec{AB} = \mathbf{b} - \mathbf{a} = \begin{pmatrix} 3 \\ 5 \end{pmatrix} - \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

Step 2: Find $\vec{BC}$
$$\vec{BC} = \mathbf{c} - \mathbf{b} = \begin{pmatrix} 7 \\ 11 \end{pmatrix} - \begin{pmatrix} 3 \\ 5 \end{pmatrix} = \begin{pmatrix} 4 \\ 6 \end{pmatrix}$$

Step 3: Check for parallelism
$$\vec{BC} = \begin{pmatrix} 4 \\ 6 \end{pmatrix} = 2\begin{pmatrix} 2 \\ 3 \end{pmatrix} = 2\vec{AB}$$

Since $\vec{BC} = 2\vec{AB}$, the vectors are parallel.
Since both vectors pass through $B$, the points $A$, $B$, $C$ are collinear.

---

### 10.4 Proving Geometric Results

#### Parallelogram Properties

In parallelogram $ABCD$:
- $\vec{AB} = \vec{DC}$ (opposite sides are equal)
- $\vec{AD} = \vec{BC}$ (opposite sides are equal)
- $\vec{AB} + \vec{AD} = \vec{AC}$ (diagonal)

**Worked Example:**
$ABCD$ is a parallelogram. $M$ is the midpoint of $BC$ and $N$ is the midpoint of $DC$. Prove that $\vec{MN}$ is parallel to $\vec{BD}$.

**Solution:**
Let $\vec{AB} = \mathbf{a}$ and $\vec{AD} = \mathbf{b}$

Then $\vec{BC} = \mathbf{b}$ and $\vec{DC} = \mathbf{a}$ (opposite sides of parallelogram)

Position vectors:
- $\vec{AM} = \vec{AB} + \vec{BM} = \mathbf{a} + \frac{1}{2}\mathbf{b}$
- $\vec{AN} = \vec{AD} + \vec{DN} = \mathbf{b} + \frac{1}{2}\mathbf{a}$

Therefore:
$$\vec{MN} = \vec{AN} - \vec{AM} = \left(\mathbf{b} + \frac{1}{2}\mathbf{a}\right) - \left(\mathbf{a} + \frac{1}{2}\mathbf{b}\right) = \frac{1}{2}\mathbf{b} - \frac{1}{2}\mathbf{a} = \frac{1}{2}(\mathbf{b} - \mathbf{a})$$

Also:
$$\vec{BD} = \vec{AD} - \vec{AB} = \mathbf{b} - \mathbf{a}$$

So $\vec{MN} = \frac{1}{2}\vec{BD}$, meaning $\vec{MN}$ is parallel to $\vec{BD}$. ∎

---

### 10.5 Finding Ratios Using Vectors

**Worked Example:**
In triangle $OAB$, the point $P$ lies on $OA$ such that $\vec{OP} = \frac{3}{5}\vec{OA}$. The point $Q$ lies on $OB$ such that $\vec{OQ} = \frac{2}{3}\vec{OB}$. The line $AB$ is extended to $R$ such that $\vec{AR} = 2\vec{AB}$. Find $\vec{PR}$ in terms of $\mathbf{a}$ and $\mathbf{b}$ where $\vec{OA} = \mathbf{a}$ and $\vec{OB} = \mathbf{b}$.

**Solution:**
$$\vec{PR} = \vec{PA} + \vec{AR}$$

$$\vec{PA} = \vec{OA} - \vec{OP} = \mathbf{a} - \frac{3}{5}\mathbf{a} = \frac{2}{5}\mathbf{a}$$

$$\vec{AB} = \vec{OB} - \vec{OA} = \mathbf{b} - \mathbf{a}$$

$$\vec{AR} = 2\vec{AB} = 2(\mathbf{b} - \mathbf{a})$$

$$\vec{PR} = \frac{2}{5}\mathbf{a} + 2(\mathbf{b} - \mathbf{a}) = \frac{2}{5}\mathbf{a} + 2\mathbf{b} - 2\mathbf{a} = 2\mathbf{b} - \frac{8}{5}\mathbf{a}$$

---

## 11. POSITION VECTORS

### 11.1 Definition

> **KEY DEFINITION**: The **position vector** of a point $P$ is the vector from the origin $O$ to $P$, written as $\vec{OP}$.

If $P$ has coordinates $(x, y)$, then:
$$\vec{OP} = \begin{pmatrix} x \\ y \end{pmatrix}$$

### 11.2 Vector Between Two Points

$$\vec{AB} = \vec{OB} - \vec{OA}$$

> **Memory Tip:** "End minus Start" — the vector $\vec{AB}$ equals position vector of $B$ MINUS position vector of $A$.

---

## 12. EXAM FOCUS & STRATEGY

###  Frequently Tested Question Types

1. **Basic operations**: Add, subtract, find scalar multiples of vectors
2. **Finding column vectors**: From diagrams or coordinates
3. **Parallel vectors**: Proving vectors are parallel
4. **Collinearity**: Proving points lie on a straight line
5. **Geometric proofs**: Using vectors to prove properties
6. **Ratio problems**: Finding position vectors with ratios
7. **Magnitude calculations**: Finding $|\mathbf{v}|$

### 🟡 Typical Problem-Solving Patterns

**Pattern 1: Expressing vectors in terms of others**
- Identify the path from start to end point
- Write the path as a sum of known vectors
- Simplify using the relationships given

**Pattern 2: Proving parallel vectors**
- Find expressions for both vectors
- Show one is a scalar multiple of the other

**Pattern 3: Proving collinearity**
- Find two vectors sharing a common point
- Show they are parallel
- Conclude collinearity

### 🟢 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Find** | Calculate the answer |
| **Show that** | Work must lead to given result |
| **Prove** | Formal logical argument required |
| **Express** | Write in terms of given variables |
| **Determine** | Find with reasoning |

### 🔵 How to Gain Full Marks

1. **Always use vector notation** — underline or bold
2. **Show all working** — especially in "show that" questions
3. **Check arithmetic** — especially with negative signs
4. **State conclusions clearly** — "Therefore, points are collinear"
5. **For proof questions** — give reasons for each step

---

## 13. COMMON MISTAKES TO AVOID

| ❌ Mistake | ✅ Correct |
|-----------|-----------|
| $\vec{AB} + \vec{BA} = 2\vec{AB}$ | $\vec{AB} + \vec{BA} = \vec{AB} - \vec{AB} = \mathbf{0}$ |
| $\vec{AB} = \vec{OA} - \vec{OB}$ | $\vec{AB} = \vec{OB} - \vec{OA}$ |
| $|-3| = -3$ | $|-3| = 3$ |
| Forgetting vector notation | Always use $\underline{a}$, $\vec{a}$, or $\mathbf{a}$ |
| $2\begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 6 \\ 4 \end{pmatrix}$ | $2\begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 6 \\ 8 \end{pmatrix}$ |

---

## 14. KEY FORMULAS SUMMARY

| Formula | Description |
|---------|-------------|
| $|\mathbf{a}| = \sqrt{x^2 + y^2}$ | Magnitude of $\mathbf{a} = \begin{pmatrix} x \\ y \end{pmatrix}$ |
| $\vec{AB} = \vec{OB} - \vec{OA}$ | Vector between points |
| $k\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} kx \\ ky \end{pmatrix}$ | Scalar multiplication |
| $\vec{OM} = \frac{\vec{OA} + \vec{OB}}{2}$ | Midpoint position vector |
| $\vec{OP} = \frac{n\vec{OA} + m\vec{OB}}{m+n}$ | Section formula ($AP:PB = m:n$) |
| $\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$ | Unit vector |

---

*End of Notes - Shape and Space 8: Vectors*
