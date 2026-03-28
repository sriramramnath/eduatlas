# Chapter 18: Algebra 8 - Concise Synopsis
## Quick Revision Synopsis – Pearson Edexcel IGCSE

---

## 🎯 TOPIC SUMMARY

| Topic | Definition | Key Skill |
|-------|------------|-----------|
| **Function Notation** | $f(x)$ represents output for input $x$ | Substitute and evaluate |
| **Domain** | Set of all valid inputs | Find restrictions |
| **Range** | Set of all possible outputs | Find minimum/maximum values |
| **Composite Functions** | $fg(x) = f(g(x))$ | Apply right function first |
| **Inverse Functions** | $f^{-1}(x)$ undoes $f(x)$ | Swap variables and solve |

---

## PART 1: FUNCTION NOTATION

### Basic Notation

> **$f(x)$** = "f of x" = the output when input is $x$

**Evaluating Functions:**

| Given | Find | Method |
|-------|------|--------|
| $f(x) = 3x - 5$ | $f(2)$ | $3(2) - 5 = 1$ |
| $f(x) = x^2 + 1$ | $f(-3)$ | $(-3)^2 + 1 = 10$ |
| $f(x) = \frac{2}{x}$ | $f(4)$ | $\frac{2}{4} = \frac{1}{2}$ |

### Finding Input Given Output

> **If $f(x) = k$, solve for $x$**

| Example | Equation | Solution |
|---------|----------|----------|
| $f(x) = 2x + 1 = 7$ | $2x + 1 = 7$ | $x = 3$ |
| $f(x) = x^2 - 4 = 5$ | $x^2 = 9$ | $x = \pm 3$ |

---

## PART 2: DOMAIN AND RANGE

### Domain Restrictions

> **KEY RULES:**

| Function Type | Restriction | Reason |
|---------------|-------------|--------|
| $\frac{a}{x - b}$ | $x \neq b$ | Division by zero |
| $\sqrt{x - a}$ | $x \geq a$ | Square root of negative |
| $\frac{a}{\sqrt{x - b}}$ | $x > b$ | Both restrictions |
| $\sqrt{a - x}$ | $x \leq a$ | Square root of negative |

### Quick Domain Examples

| Function | Domain |
|----------|--------|
| $f(x) = \frac{3}{x - 2}$ | $x \neq 2$ |
| $f(x) = \sqrt{x + 4}$ | $x \geq -4$ |
| $f(x) = \frac{1}{\sqrt{x - 3}}$ | $x > 3$ |
| $f(x) = \frac{x + 1}{x^2 - 9}$ | $x \neq 3, x \neq -3$ |

### Range Quick Rules

| Function Form | Range |
|---------------|-------|
| $x^2 + c$ (where $c > 0$) | $f(x) \geq c$ |
| $-x^2 + c$ | $f(x) \leq c$ |
| $(x - a)^2 + c$ | $f(x) \geq c$ |
| $\frac{1}{x}$ for $x > 0$ | $f(x) > 0$ |

**For quadratics:** Complete the square to find range.

| Example | Completed Square | Range |
|---------|------------------|-------|
| $x^2 + 4$ | $x^2 + 4$ | $f(x) \geq 4$ |
| $x^2 - 4x + 5$ | $(x - 2)^2 + 1$ | $f(x) \geq 1$ |
| $-x^2 + 6$ | $-(x^2 - 6)$ | $f(x) \leq 6$ |

---

## PART 3: COMPOSITE FUNCTIONS

### The Golden Rule

> **$fg(x) = f(g(x))$ – Apply $g$ FIRST, then $f$**
> 
> **$gf(x) = g(f(x))$ – Apply $f$ FIRST, then $g$**

**Order matters:** $fg(x) \neq gf(x)$ in general

### Method

```
For fg(x):
1. Write f(x) 
2. Replace every x with g(x)
3. Simplify

For gf(x):
1. Write g(x)
2. Replace every x with f(x)
3. Simplify
```

### Quick Examples

| $f(x)$ | $g(x)$ | $fg(x)$ | $gf(x)$ |
|--------|--------|---------|---------|
| $2x + 1$ | $x^2$ | $2x^2 + 1$ | $(2x + 1)^2 = 4x^2 + 4x + 1$ |
| $x + 3$ | $x - 1$ | $(x - 1) + 3 = x + 2$ | $(x + 3) - 1 = x + 2$ |
| $x^2$ | $x + 5$ | $(x + 5)^2$ | $x^2 + 5$ |
| $\frac{2}{x}$ | $x + 1$ | $\frac{2}{x + 1}$ | $\frac{2}{x} + 1$ |

### Evaluating Composites

| Example | Steps |
|---------|-------|
| Find $fg(3)$ | First $g(3)$, then $f(\text{result})$ |
| Find $gf(2)$ | First $f(2)$, then $g(\text{result})$ |

**Example:** $f(x) = 2x + 1$, $g(x) = x^2$
- $fg(3) = f(g(3)) = f(9) = 19$
- $gf(3) = g(f(3)) = g(7) = 49$

### Self-Composition

| $f(x)$ | $ff(x)$ |
|--------|---------|
| $2x + 1$ | $2(2x + 1) + 1 = 4x + 3$ |
| $x^2$ | $(x^2)^2 = x^4$ |
| $x + 5$ | $(x + 5) + 5 = x + 10$ |

---

## PART 4: INVERSE FUNCTIONS

### Definition

> **$f^{-1}(x)$ UNDOES $f(x)$**
> 
> **$f^{-1}(f(x)) = x$ and $f(f^{-1}(x)) = x$**

>  **NOT** the reciprocal! $f^{-1}(x) \neq \frac{1}{f(x)}$

### Method for Finding Inverse

```
1. Write y = f(x)
2. SWAP x and y
3. Solve for y
4. Result is f⁻¹(x)
```

### Quick Examples

| $f(x)$ | Finding $f^{-1}(x)$ | $f^{-1}(x)$ |
|--------|---------------------|-------------|
| $2x + 5$ | $x = 2y + 5$ → $y = \frac{x - 5}{2}$ | $\frac{x - 5}{2}$ |
| $3x - 4$ | $x = 3y - 4$ → $y = \frac{x + 4}{3}$ | $\frac{x + 4}{3}$ |
| $\frac{x + 2}{3}$ | $x = \frac{y + 2}{3}$ → $y = 3x - 2$ | $3x - 2$ |
| $\frac{2x - 1}{5}$ | $x = \frac{2y - 1}{5}$ → $y = \frac{5x + 1}{2}$ | $\frac{5x + 1}{2}$ |

### Inverses with Fractions

| $f(x)$ | $f^{-1}(x)$ | Domain |
|--------|-------------|--------|
| $\frac{3}{x - 2}$ | $\frac{2x + 3}{x}$ | $x \neq 0$ |
| $\frac{x - 1}{x + 2}$ | $\frac{2x + 1}{1 - x}$ | $x \neq 1$ |

### Inverses with Powers

| $f(x)$ | $f^{-1}(x)$ | Note |
|--------|-------------|------|
| $x^3$ | $\sqrt[3]{x}$ | Cube root |
| $x^3 + 2$ | $\sqrt[3]{x - 2}$ | |
| $\sqrt{x}$ | $x^2$ | For $x \geq 0$ |

### Domain and Range Relationship

> **KEY RELATIONSHIP:**

| $f(x)$ | $f^{-1}(x)$ |
|--------|-------------|
| Domain | Range |
| Range | Domain |

---

## COMMON MISTAKES 

### Composite Function Errors

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Wrong order | $fg(x) = f(x) \times g(x)$ | $fg(x) = f(g(x))$ |
| No brackets | $f(2x) = 2f(x)$ | $f(2x) = (2x)^2 + \dots$ |
| Wrong first step | Apply $f$ first for $fg(x)$ | Apply $g$ first! |

### Inverse Function Errors

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Reciprocal confusion | $f^{-1}(x) = \frac{1}{f(x)}$ | Swap and solve |
| Not swapping | Solve $y = f(x)$ for $x$ | Must swap $x$ and $y$ first |
| Wrong domain | Same domain as $f$ | Domain of $f^{-1}$ = Range of $f$ |

### Domain Errors

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Missing restriction | $\frac{1}{x - 2}$ defined for all $x$ | $x \neq 2$ |
| Wrong inequality | $\sqrt{x - 3}$ needs $x > 3$ | $x \geq 3$ |
| Missing multiple restrictions | $\frac{1}{x^2 - 4}$ just $x \neq 2$ | $x \neq 2, x \neq -2$ |

---

## KEY FORMULAE TABLE

### Function Operations

$$f(a) = \text{substitute } x = a \text{ into } f(x)$$

$$fg(x) = f(g(x)) \text{ – apply } g \text{ first}$$

$$gf(x) = g(f(x)) \text{ – apply } f \text{ first}$$

$$ff(x) = f(f(x)) \text{ – apply } f \text{ twice}$$

### Inverse Function

$$\text{If } f(x) = y, \text{ then } f^{-1}(y) = x$$

$$f^{-1}f(x) = x$$

$$ff^{-1}(x) = x$$

### Domain Restrictions

| Expression | Restriction |
|------------|-------------|
| Denominator = 0 | Excluded from domain |
| Radicand < 0 | Excluded from domain |
| $\sqrt{x - a}$ | $x \geq a$ |
| $\frac{1}{x - a}$ | $x \neq a$ |

---

## COMMAND WORDS

| Command | Action |
|---------|--------|
| **Find** | Calculate the value or expression |
| **Evaluate** | Substitute and calculate |
| **Solve** | Find value(s) of $x$ |
| **Express** | Write in the required form |
| **State** | Give answer without working |
| **Hence** | Use previous answer |
| **Verify** | Show statement is true |

---

## EXAM CHECKLIST ✓

Before submitting:
- [ ] Correct substitution with brackets?
- [ ] Right order for composite functions?
- [ ] Swapped variables for inverse?
- [ ] All domain restrictions stated?
- [ ] Answer fully simplified?
- [ ] Verified $f^{-1}f(x) = x$?

---

## QUICK REVISION CARDS

```
┌─────────────────────────────────────────────┐
│  COMPOSITE FUNCTIONS                        │
├─────────────────────────────────────────────┤
│                                             │
│  fg(x) = f(g(x))                            │
│                                             │
│  ORDER: Work RIGHT to LEFT                  │
│         Apply g FIRST, then f               │
│                                             │
│  Example: f(x)=2x+1, g(x)=x²                │
│  fg(x) = f(x²) = 2x² + 1                    │
│  gf(x) = g(2x+1) = (2x+1)²                  │
│                                             │
│  fg(x) ≠ gf(x) (in general)                 │
└─────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────┐
│  INVERSE FUNCTIONS                          │
├─────────────────────────────────────────────┤
│
│  Finding f⁻¹(x):                            │
│  1. Write y = f(x)                          │
│  2. SWAP x and y                            │
│  3. Solve for y                             │
│  4. Result is f⁻¹(x)                        │
│                                             │
│  Key: f⁻¹(f(x)) = x                         │
│                                             │
│  Example: f(x) = 3x - 6                     │
│  y = 3x - 6                                 │
│  x = 3y - 6                                 │
│  y = (x + 6)/3                              │
│  f⁻¹(x) = (x + 6)/3                         │
└─────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────┐
│  DOMAIN RESTRICTIONS                        │
├─────────────────────────────────────────────┤
│                                             │
│  DENOMINATOR ≠ 0                            │
│  f(x) = 1/(x-2)  →  x ≠ 2                   │
│                                             │
│  RADICAND ≥ 0 (for √)                       │
│  f(x) = √(x+4)  →  x ≥ -4                   │
│                                             │
│  BOTH for √ in denominator                  │
│  f(x) = 1/√(x-3)  →  x > 3                  │
│                                             │
│  Domain of f⁻¹ = Range of f                 │
└─────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────┐
│  RANGE - QUICK METHOD                       │
├─────────────────────────────────────────────┤
│                                             │
│  For quadratics: COMPLETE THE SQUARE        │
│                                             │
│  x² + bx + c = (x + b/2)² + c - (b/2)²      │
│                                             │
│  Examples:                                  │
│  x² + 4         → Range: f(x) ≥ 4           │
│  x² - 4x + 5    → (x-2)² + 1 → f(x) ≥ 1     │
│  -x² + 6        → Range: f(x) ≤ 6           │
│                                             │
│  a > 0: minimum → Range ≥ min value         │
│  a < 0: maximum → Range ≤ max value         │
└─────────────────────────────────────────────┘
```

---

## METHOD SELECTION GUIDE

| Question Type | Best Approach |
|---------------|---------------|
| Evaluate $f(a)$ | Substitute directly |
| Find $fg(x)$ | Substitute $g(x)$ into $f$ |
| Find $gf(x)$ | Substitute $f(x)$ into $g$ |
| Find $f^{-1}(x)$ | Swap variables and solve |
| Find domain | Check restrictions |
| Find range | Complete square or analyze |
| Solve $f(x) = k$ | Substitute or use inverse |
| Verify inverse | Check $f^{-1}f(x) = x$ |

---

## VERIFICATION TRICKS

### For Composite Functions
- Test with a numerical value
- Check order: $fg(x)$ means $g$ first

### For Inverse Functions
- Verify: $ff^{-1}(x) = x$
- Verify: $f^{-1}f(x) = x$
- Check domain/range swap

### For Domain/Range
- Check denominator ≠ 0
- Check radicand ≥ 0
- Test boundary values

---

*For detailed explanations and worked examples, see Mathematics_Algebra8_Notes.md*
