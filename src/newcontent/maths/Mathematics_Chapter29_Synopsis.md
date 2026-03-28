# Chapter 29: Graphs 9 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Higher Tier)

---

# Part 1: Differentiation Rules

## The Power Rule

$$\boxed{\frac{d}{dx}(x^n) = nx^{n-1}}$$

**In words:** Multiply by the power, then reduce power by 1.

## Quick Reference Table

| Function $y = $ | Derivative $\frac{dy}{dx} = $ |
|-----------------|------------------------------|
| $c$ (constant) | $0$ |
| $x$ | $1$ |
| $x^2$ | $2x$ |
| $x^3$ | $3x^2$ |
| $x^4$ | $4x^3$ |
| $x^n$ | $nx^{n-1}$ |
| $ax^n$ | $anx^{n-1}$ |
| $\frac{1}{x} = x^{-1}$ | $-x^{-2} = -\frac{1}{x^2}$ |
| $\frac{1}{x^n} = x^{-n}$ | $-nx^{-(n+1)} = -\frac{n}{x^{n+1}}$ |

---

## Key Rules

### Sum/Difference Rule
- Differentiate each term **separately**
- $y = ax^3 + bx^2 + cx + d \Rightarrow \frac{dy}{dx} = 3ax^2 + 2bx + c$

### Constants
- Derivative of any constant = **0**
- Constants multiplying $x^n$ are kept: $\frac{d}{dx}(5x^3) = 5 \times 3x^2 = 15x^2$

---

# Part 2: Gradient and Rate of Change

## Key Concepts

| Concept | Meaning |
|---------|---------|
| $\frac{dy}{dx}$ | Gradient of curve at point $x$ |
| $\frac{dy}{dx} > 0$ | Function is **increasing** |
| $\frac{dy}{dx} < 0$ | Function is **decreasing** |
| $\frac{dy}{dx} = 0$ | **Stationary point** |

## Real-World Interpretation

| Context | $\frac{dy}{dx}$ Means |
|---------|----------------------|
| Distance-time graph | **Speed** (m/s, km/h) |
| Height-time graph | **Rate of filling/emptying** |
| Temperature-time | **Rate of heating/cooling** |
| Volume-time | **Flow rate** |
| Cost-quantity | **Price per unit** |

---

# Part 3: Stationary Points

## Finding Stationary Points

$$\boxed{\text{Stationary point when } \frac{dy}{dx} = 0}$$

### Method:
1. Find $\frac{dy}{dx}$
2. Set $\frac{dy}{dx} = 0$ and solve for $x$
3. Substitute $x$ back to find $y$

---

## Classifying Stationary Points

### Using Second Derivative $\frac{d^2y}{dx^2}$

| Second Derivative | Type |
|-------------------|------|
| $\frac{d^2y}{dx^2} > 0$ | **Minimum** (U-shaped) |
| $\frac{d^2y}{dx^2} < 0$ | **Maximum** (∩-shaped) |
| $\frac{d^2y}{dx^2} = 0$ | Inconclusive (use sign test) |

### Sign Test (Alternative)

| Left of point | At point | Right of point | Type |
|---------------|----------|----------------|------|
| $\frac{dy}{dx} > 0$ | $\frac{dy}{dx} = 0$ | $\frac{dy}{dx} < 0$ | **Maximum** |
| $\frac{dy}{dx} < 0$ | $\frac{dy}{dx} = 0$ | $\frac{dy}{dx} > 0$ | **Minimum** |

---

## Memory Trick for Classification

> **Minimum**: Second derivative is **positive** (think "smile" 😊 - U shape)
> 
> **Maximum**: Second derivative is **negative** (think "frown" ☹️ - ∩ shape)

---

# Part 4: Motion Graphs

## The Fundamental Relationships

$$\boxed{v = \frac{ds}{dt}} \quad \boxed{a = \frac{dv}{dt} = \frac{d^2s}{dt^2}}$$

| Quantity | Symbol | Units | From | To Find |
|----------|--------|-------|------|---------|
| Displacement | $s$ | m | — | — |
| Velocity | $v$ | m/s | $s$ | Differentiate |
| Acceleration | $a$ | m/s² | $v$ | Differentiate |

---

## Key Motion Situations

| Situation | Condition |
|-----------|-----------|
| **At rest** | $v = 0$ |
| **Constant velocity** | $a = 0$ |
| **Moving forward (+)** | $v > 0$ |
| **Moving backward (-)** | $v < 0$ |
| **Speeding up** | $v$ and $a$ have **same sign** |
| **Slowing down** | $v$ and $a$ have **opposite signs** |

---

## Interpreting Graphs

### Displacement-Time Graph

| Feature | Meaning |
|---------|---------|
| Gradient | Velocity |
| Positive gradient | Moving forward |
| Negative gradient | Moving backward |
| Horizontal line | At rest |
| Curve | Accelerating/decelerating |

### Velocity-Time Graph

| Feature | Meaning |
|---------|---------|
| Gradient | Acceleration |
| Area under graph | Displacement |
| Above x-axis | Positive velocity |
| Below x-axis | Negative velocity |
| Horizontal line | Constant velocity |

---

# Quick Formula Sheet

## Differentiation

$$\boxed{\frac{d}{dx}(ax^n) = anx^{n-1}}$$

$$\boxed{\frac{d}{dx}(ax^3 + bx^2 + cx + d) = 3ax^2 + 2bx + c}$$

## Stationary Points

$$\boxed{\text{Find: } \frac{dy}{dx} = 0 \Rightarrow x = ... \Rightarrow y = ...}$$

$$\boxed{\text{Classify: } \frac{d^2y}{dx^2} > 0 \Rightarrow \text{Min}, \quad \frac{d^2y}{dx^2} < 0 \Rightarrow \text{Max}}$$

## Motion

$$\boxed{v = \frac{ds}{dt}, \quad a = \frac{dv}{dt}}$$

$$\boxed{\text{At rest: } v = 0}$$

---

# Exam Checklist

## For Differentiation Questions ✓
- [ ] Apply power rule to each term
- [ ] Multiply by power, then reduce power by 1
- [ ] Constants differentiate to 0
- [ ] Simplify fully

## For Stationary Point Questions ✓
- [ ] Find $\frac{dy}{dx}$
- [ ] Set $\frac{dy}{dx} = 0$ and solve
- [ ] Find $y$-coordinate
- [ ] Use $\frac{d^2y}{dx^2}$ to classify
- [ ] State type clearly (max/min)

## For Motion Questions ✓
- [ ] Differentiate $s$ to get $v$
- [ ] Differentiate $v$ to get $a$
- [ ] Include units (m, m/s, m/s²)
- [ ] "At rest" means $v = 0$
- [ ] Sign of $v$ gives direction

---

# Common Exam Errors

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| $\frac{d}{dx}(5) = 5x$ | $\frac{d}{dx}(5) = 0$ |
| $\frac{d}{dx}(3x^2) = 6x^2$ | $\frac{d}{dx}(3x^2) = 6x$ |
| $\frac{d}{dx}(x^3) = 3x$ | $\frac{d}{dx}(x^3) = 3x^2$ |
| Maximum when $\frac{d^2y}{dx^2} > 0$ | Maximum when $\frac{d^2y}{dx^2} < 0$ |
| At rest when $s = 0$ | At rest when $v = 0$ |
| $\frac{d}{dx}(\frac{1}{x}) = \frac{1}{x^2}$ | $\frac{d}{dx}(\frac{1}{x}) = -\frac{1}{x^2}$ |

---

# Problem-Solving Patterns

## Pattern 1: Find Gradient at Point
```
1. Differentiate to get dy/dx
2. Substitute x-value
3. Result = gradient
```

## Pattern 2: Find Stationary Points
```
1. Differentiate to get dy/dx
2. Set dy/dx = 0
3. Solve for x
4. Find y by substituting into original
5. Find d²y/dx²
6. Classify each point
```

## Pattern 3: Motion Problems
```
1. Write s(t), find v = ds/dt, find a = dv/dt
2. "At rest" → solve v = 0
3. "Direction" → check sign of v
4. "Max displacement" → find stationary points of s
```

---

*End of Synopsis*
