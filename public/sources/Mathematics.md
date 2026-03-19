# Mathematics MasterBook: IGCSE Comprehensive Guide

This guide is structured for rapid IGCSE revision, combining essential formulas with technical shortcuts and common pitfall warnings.

---

## 1. Numbers

### Metric Unit Conversions
| Prefix | Symbol | Multiplier | Power of 10 |
| :--- | :---: | :--- | :--- |
| **Kilo** | k | 1000 | 10^3 |
| **Hecto** | h | 100 | 10^2 |
| **Deca** | da | 10 | 10^1 |
| **(Base)** | - | 1 | 10^0 |
| **Deci** | d | 0.1 | 10^{-1} |
| **Centi** | c | 0.01 | 10^{-2} |
| **Milli** | m | 0.001 | 10^{-3} |

![Number Line Diagram](file:///Users/sriram/Desktop/School/MasterBooks/number_line.png)

### Number Line & Inequalities
| Symbol | Circle Type | Meaning | Property |
| :---: | :---: | :--- | :--- |
| > | **Open (\circ)** | Greater than | Value not included |
| < | **Open (\circ)** | Less than | Value not included |
| \ge | **Closed (\bullet)** | Greater than or equal to | Value IS included |
| \le | **Closed (\bullet)** | Less than or equal to | Value IS included |

> [!IMPORTANT]
> - **Arrow Right**: Higher values (towards positive infinity).
> - **Arrow Left**: Lower values (towards negative infinity).
> - **Solid Line between dots**: Represents a range/interval (e.g., 2 < x \le 5).

### HCF and LCM
- **Highest Common Factor (HCF)**: The largest number that divides exactly into two or more numbers.
    - **Method**: Use prime factor trees. HCF is the product of the **lowest** powers of common prime factors.
- **Lowest Common Multiple (LCM)**: The smallest number that is a multiple of two or more numbers.
    - **Method**: LCM is the product of the **highest** powers of all prime factors involved.
- **Rule**: HCF(a, b) \times LCM(a, b) = a \times b

> [!TIP]
> **Converting Units**:
> - Move from **Large to Small** (e.g., kg to g): **Multiply** by 10 per step.
> - Move from **Small to Large** (e.g., mm to m): **Divide** by 10 per step.

### Indices & Powers
- **Multiplication**: a^m \times a^n = a^{m+n}
- **Division**: a^m \div a^n = a^{m-n}
- **Power of a Power**: (a^m)^n = a^{mn}
- **Negative Index**: a^{-n} = \frac{1}{a^n}
- **Fractional Index**: a^{\frac{m}{n}} = \sqrt[n]{a^m}
- **Zero Index**: a^0 = 1

### Standard Form
- **Notation**: A \times 10^n (where 1 \le A < 10).
- **Multiplication**: Multiply the As and add the ns. Adjust to fit 1 \le A < 10.

### Percentages & Ratios
- **Compound Interest**: A = P(1 + \frac{r}{100})^n
- **Reverse Percentage**: \text{Original} = \frac{\text{Final}}{\text{Multiplier}} (e.g., 20% increase multiplier is 1.2).
- **Direct Proportion**: y = kx
- **Inverse Proportion**: y = \frac{k}{x}

---

## 2. Algebra

### Expansion & Factorisation
- **Difference of Two Squares**: a^2 - b^2 = (a - b)(a + b)
- **Splitting the Middle Term (ax^2 + bx + c)**:
    1. Multiply a \times c.
    2. Find factors of ac that sum to b.
    3. Split bx and factorise by grouping.
- **Example 1 (a=1)**: x^2 + 5x + 6
    - Multiply to 6, add to 5 \implies 2 and 3.
    - (x+2)(x+3)
- **Example 2 (a \neq 1)**: 3x^2 + 10x + 8
    - ac = 3 \times 8 = 24. Factors of 24 that add to 10 \implies 6 and 4.
    - 3x^2 + 6x + 4x + 8 = 3x(x+2) + 4(x+2)
    - (3x+4)(x+2)

### Solving Quadratics
- **Completing the Square**: x^2 + bx + c = (x + \frac{b}{2})^2 - (\frac{b}{2})^2 + c
- **Quadratic Formula**: x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
- **Discriminant (\Delta)**: b^2 - 4ac
    - \Delta > 0: 2 solutions | \Delta = 0: 1 solution | \Delta < 0: 0 solutions.

### Algebraic Fractions
- **Addition/Subtraction**: Find a common denominator first.
- **Multiplication**: Multiply numerators and denominators.
- **Division**: Flip the second fraction and multiply.

### Advanced Modules
- **Functions**: fg(x) = f(g(x)). Inverse f^{-1}(x) (swap x/y and solve).
---

## 3. Graphs

### Linear Graphs

![Quadrants Diagram](file:///Users/sriram/Desktop/School/MasterBooks/quadrants.png)

- **Equation**: y = mx + c

![Linear Graph Diagram](file:///Users/sriram/Desktop/School/MasterBooks/linear_graph.png)
- **Gradient (m)**: \frac{y_2 - y_1}{x_2 - x_1}
- **Parallel Lines**: Have the same gradient (m_1 = m_2).
- **Perpendicular Lines**: m_1 \times m_2 = -1.

![Gradients Comparison](file:///Users/sriram/Desktop/School/MasterBooks/gradients_comparison.png)

### Non-Linear Graphs
| Type | Equation Form | Shape Description |
| :--- | :--- | :--- |
| **Quadratic** | y = ax^2 + bx + c | Parabola (U or n shape). |
| **Cubic** | y = ax^3 + ... | S-shape curve. |
| **Reciprocal** | y = \frac{k}{x} | Two curves in opposite quadrants (Asymptotes at axes). |
| **Exponential**| y = a^x | Starts flat, then rises/falls steeply. |

### Trigonometric Graphs
- **Sine Curve**: Starts at (0,0), peak at 90^\circ, cycle 360^\circ.
- **Cosine Curve**: Starts at (0,1), trough at 180^\circ, cycle 360^\circ.
- **Tangent Curve**: Asymptotes at 90^\circ, 270^\circ.

### Graph Transformations
- **Translation Vertical**: y = f(x) + a (Moves Up by a)
- **Translation Horizontal**: y = f(x + a) (Moves Left by a)
- **Stretch Vertical**: y = af(x)
- **Reflection**: y = -f(x) (reflect in x-axis) or y = f(-x) (reflect in y-axis).

---

## 4. Shapes and Space General

### Shapes
| Category | Shape | Volume (V) | Surface Area (SA) |
| :--- | :--- | :--- | :--- |
| **2D** | **Trapezium** | - | A = \frac{1}{2}(a+b)h |
| **2D** | **Parallelogram** | - | A = bh |
| **3D** | **Cylinder** | \pi r^2 h | 2\pi r^2 + 2\pi rh |
| **3D** | **Sphere** | \frac{4}{3}\pi r^3 | 4\pi r^2 |
| **3D** | **Cone** | \frac{1}{3}\pi r^2 h | \pi r^2 + \pi rl |
| **3D** | **Pyramid** | \frac{1}{3} \times \text{Base} \times h | Total area of all faces |

### Similarity & Scale Factors
- **Length SF**: k
- **Area SF**: k^2
- **Volume SF**: k^3

### Polygons
- **Sum of Interior Angles**: (n-2) \times 180^\circ
- **Sum of Exterior Angles**: Always 360^\circ
- **Interior + Exterior Angle**: 180^\circ (at any vertex)
- **Regular Polygon Interior Angle**: \frac{(n-2) \times 180^\circ}{n}

### Enlargement
- **Scale Factor**: \frac{\text{New Length}}{\text{Old Length}}
- **Center of Enlargement**: The fixed point from which all points are enlarged.
- **Negative SF**: The image is on the opposite side of the center and inverted.

---

## 5. The Triangle

### Right-Angled Trigonometry
- **Pythagoras**: a^2 + b^2 = c^2
- **SOHCAHTOA**:
    - \sin \theta = \frac{O}{H} | \cos \theta = \frac{A}{H} | \tan \theta = \frac{O}{A}

### Non-Right-Angled Trigonometry
- **Sine Rule (Side)**: \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
- **Cosine Rule (Side)**: a^2 = b^2 + c^2 - 2bc \cos A
- **Cosine Rule (Angle)**: \cos A = \frac{b^2 + c^2 - a^2}{2bc}
- **Triangle Area**: \frac{1}{2}ab \sin C

### 3D Trigonometry
- **Technique**: Use Pythagoras or SOHCAHTOA twice. Usually involves finding a diagonal across a base first.

---

## 6. The Circle

### Parts of a Circle
- **Arc**: A portion of the circumference.
- **Chord**: A line connecting two points on the circumference.
- **Segment**: Area between a chord and an arc.
- **Sector**: Area between two radii and an arc (like a pizza slice).
- **Tangent**: A line that touches the circle at exactly one point (90^\circ to the radius).

### Arc and Sector Formulas
- **Arc Length**: L = \frac{\theta}{360} \times 2\pi r
- **Sector Area**: A = \frac{\theta}{360} \times \pi r^2

### Circle Theorems (The Big 8)
1. **Angle at Center**: The angle at the center is **double** the angle at the circumference.
2. **Semi-circle**: The angle in a semi-circle is always **90^\circ**.
3. **Same Segment**: Angles in the same segment are **equal**.
4. **Cyclic Quadrilateral**: Opposite angles sum to **180^\circ**.
5. **Tangent-Radius**: A tangent meets a radius at **90^\circ**.
6. **Double Tangents**: Tangents from an external point to a circle are **equal in length**.
7. **Alternating Segment Theorem**: The angle between a tangent and a chord is equal to the angle in the alternate segment.
8. **Chord Bisector**: A radius that is perpendicular to a chord **bisects** the chord.

---

## 7. Sets

### Set Notation
| Symbol | Meaning | Example |
| :---: | :--- | :--- |
| \xi | Universal Set | All possible elements. |
| \varnothing | Null/Empty Set | A set with no elements. |
| \in | Element of | 2 \in \{1, 2, 3\} |
| \notin | Not an element of | 4 \notin \{1, 2, 3\} |
| \cap | Intersection | Only elements in BOTH. |
| \cup | Union | Elements in A OR B (or both). |
| A' | Complement | All elements NOT in A. |
| \subset | Subset | Every element in A is also in B. |

### Venn Diagram Shading
- **A \cap B**: Shade the overlapping region only.
- **A \cup B**: Shade both circles completely.
- **A' \cap B**: Shade the part of B that does **not** overlap with A.
- **(A \cup B)'**: Shade everything outside the two circles.

---

## 8. Handling Data

### Statistics
- **Mean**: \bar{x} = \frac{\sum fx}{\sum f}
- **Median**: The middle value (Position: \frac{n+1}{2}).
- **Mode**: The value with the highest frequency.
- **Range**: \text{Max} - \text{Min}.
- **Interquartile Range (IQR)**: Q_3 - Q_1 (Upper Quartile minus Lower Quartile).

### Probability
- **Range**: Always 0 \le P \le 1.
- **Not occurring**: P(A') = 1 - P(A).
- **Combined Events**:
    - **Independent (AND)**: P(A) \times P(B).
    - **Mutual Exclusive (OR)**: P(A) + P(B).
- **Tree Diagrams**: Multiply branches moving across; add results moving down.

---

## 9. Sequences

### Linear Sequences
- **Formula**: u_n = a + (n - 1)d
- **Terms**:
    - a: First term (n=1).
    - d: Common difference.
- **Shortcut**: Find the difference, multiply by n, and adjust the constant to match the first term.

### Quadratic Sequences
- **Formula**: an^2 + bn + c
- **Finding the terms**:
    1. Find the **second difference**. 2a = \text{second difference}.
    2. 3a + b = \text{first term of the first difference}.
    3. a + b + c = \text{first term of the sequence}.

---


> **Common Errors (Review Before Exam)**:
> - **Units**: Converting m^2 to cm^2 requires multiplying by 100^2 (10,000), not just 100.
> - **Signs**: Distributing a negative outside a bracket flips ALL signs inside.
> - **Radius/Diameter**: Circle formulas use r. If given d, divide by 2 first.
> - **Probabilities**: Cannot be negative or greater than 1.
