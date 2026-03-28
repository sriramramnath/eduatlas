# Chapter 28: Graphs 8 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics

---

# Part 1: Gradient of a Curve

## Key Concept
**Gradient of a curve at a point = Gradient of the tangent at that point**

## Quick Method
1. **Locate** the point on the curve
2. **Draw** tangent touching curve at ONE point only
3. **Extend** tangent to make reading coordinates easy
4. **Choose** two well-spaced points on the tangent (not the curve)
5. **Calculate:** $\text{Gradient} = \frac{y_2 - y_1}{x_2 - x_1}$

## Quick Rules
| Gradient Sign | Meaning |
|--------------|---------|
| **Positive** | Curve increasing (going uphill →) |
| **Negative** | Curve decreasing (going downhill →) |
| **Zero** | Horizontal tangent (at max/min points) |

## Real-World Interpretation
| Graph Type | Gradient Meaning |
|-----------|------------------|
| Distance-time | **Speed** (m/s, km/h) |
| Height-time | **Rate of filling/emptying** |
| Temperature-time | **Rate of heating/cooling** |
| Cost-quantity | **Rate per unit** |

---

# Part 2: Transformations of Graphs

## Complete Transformation Table

| Function | Transformation | Direction/Scale | Coordinate Rule |
|----------|---------------|-----------------|-----------------|
| $y = f(x) + a$ | Translation | **Up** by $a$ | $(x,y) → (x, y+a)$ |
| $y = f(x) - a$ | Translation | **Down** by $a$ | $(x,y) → (x, y-a)$ |
| $y = f(x + a)$ | Translation | **Left** by $a$ | $(x,y) → (x-a, y)$ |
| $y = f(x - a)$ | Translation | **Right** by $a$ | $(x,y) → (x+a, y)$ |
| $y = -f(x)$ | Reflection | In **x-axis** | $(x,y) → (x, -y)$ |
| $y = f(-x)$ | Reflection | In **y-axis** | $(x,y) → (-x, y)$ |
| $y = a \cdot f(x)$ | Stretch (vertical) | SF **$a$** from x-axis | $(x,y) → (x, ay)$ |
| $y = f(ax)$ | Stretch (horizontal) | SF **$\frac{1}{a}$** from y-axis | $(x,y) → (\frac{x}{a}, y)$ |

---

## Memory Tricks

### Translation Direction
- **Outside the function** (affecting y): Same direction as sign
  - $+a$ = up, $-a$ = down
  
- **Inside the function** (affecting x): **OPPOSITE** direction
  - $f(x + a)$ = left, $f(x - a)$ = right

> **Remember:** "x moves opposite"

### Stretch Scale Factor
- **Outside** the function: Scale factor = $a$
- **Inside** the function: Scale factor = $\frac{1}{a}$

> **Remember:** "Inside is inverted"

---

## Quick Reference: Effects on Coordinates

### For point $(x, y)$ on $y = f(x)$:

| Transformation | New x | New y |
|---------------|-------|-------|
| $y = f(x) + a$ | Same | $y + a$ |
| $y = f(x + a)$ | $x - a$ | Same |
| $y = -f(x)$ | Same | $-y$ |
| $y = f(-x)$ | $-x$ | Same |
| $y = af(x)$ | Same | $ay$ |
| $y = f(ax)$ | $\frac{x}{a}$ | Same |

---

## Invariant Points Summary

| Transformation | Points that stay fixed |
|---------------|----------------------|
| Reflection in x-axis | Points on x-axis ($y = 0$) |
| Reflection in y-axis | Points on y-axis ($x = 0$) |
| Vertical stretch | Points on x-axis ($y = 0$) |
| Horizontal stretch | Points on y-axis ($x = 0$) |

---

## Combined Transformations

### Order (inside to outside):
1. **Horizontal shift** (from $x + a$)
2. **Horizontal stretch** (from coefficient of $x$)
3. **Vertical stretch** (from coefficient of $f(x)$)
4. **Vertical shift** (from $+ a$ outside)

### Example: $y = 2f(x-3) + 4$
1. Right by 3
2. Vertical stretch, SF 2
3. Up by 4

---

## Key Formulas

$$\boxed{\text{Gradient} = \frac{y_2 - y_1}{x_2 - x_1}}$$

$$\boxed{\text{Translation vector} = \begin{pmatrix} -a \\ b \end{pmatrix} \text{ for } y = f(x+a) + b}$$

---

## Exam Checklist

### Gradient Questions ✓
- [ ] Draw tangent accurately (one point of contact)
- [ ] Use points ON the tangent, not the curve
- [ ] Show working: $\frac{y_2 - y_1}{x_2 - x_1}$
- [ ] Include units if context requires

### Transformation Questions ✓
- [ ] State **TYPE** (translation/reflection/stretch)
- [ ] State **DIRECTION** (up/down/left/right/x-axis/y-axis)
- [ ] State **MAGNITUDE** (units or scale factor)
- [ ] Use vector notation: $\begin{pmatrix} a \\ b \end{pmatrix}$ if asked

---

## Common Exam Errors

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| $f(x+2)$ shifts right | Shifts **left** by 2 |
| $f(2x)$ has SF 2 | Has SF **$\frac{1}{2}$** |
| $-f(x)$ reflects in y-axis | Reflects in **x-axis** |
| Gradient from curve points | From **tangent** points |
| Missing units | Include **appropriate units** |

---

*End of Synopsis*
