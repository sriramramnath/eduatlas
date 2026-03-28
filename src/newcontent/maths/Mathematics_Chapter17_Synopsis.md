# Chapter 17: Algebra 7 - Concise Synopsis
## Quick Revision Synopsis – Pearson Edexcel IGCSE

---

## 🎯 TOPIC SUMMARY

| Topic | Definition | Key Skill |
|-------|------------|-----------|
| **Factorising** | Writing $ax^2 + bx + c$ as $(px + q)(rx + s)$ | Find two numbers with sum $b$, product $ac$ |
| **Completing the Square** | Rewriting as $a(x + p)^2 + q$ | Find turning point |
| **Quadratic Formula** | Universal solving method | Substitute $a$, $b$, $c$ correctly |
| **Discriminant** | Determines nature of roots | Calculate $b^2 - 4ac$ |
| **Inequalities** | Finding solution regions | Use sign diagram |

---

## PART 1: SOLVING BY FACTORISING

### Simple Quadratics ($a = 1$)

> **Form:** $x^2 + bx + c = 0$

**Method:**
1. Find two numbers that **multiply to $c$** and **add to $b$**
2. Write as $(x + p)(x + q) = 0$
3. Solve: $x = -p$ or $x = -q$

| Example | Numbers | Factorisation | Solutions |
|---------|---------|---------------|-----------|
| $x^2 + 5x + 6 = 0$ | $2, 3$ | $(x + 2)(x + 3) = 0$ | $x = -2, -3$ |
| $x^2 - 7x + 12 = 0$ | $-3, -4$ | $(x - 3)(x - 4) = 0$ | $x = 3, 4$ |
| $x^2 - x - 20 = 0$ | $-5, 4$ | $(x - 5)(x + 4) = 0$ | $x = 5, -4$ |

---

### Harder Quadratics ($a \neq 1$)

> **AC Method:**
> 1. Calculate $ac$
> 2. Find two numbers with product $ac$ and sum $b$
> 3. Split middle term
> 4. Factorise by grouping

| Example | $ac$ | Numbers | Factorisation | Solutions |
|---------|------|---------|---------------|-----------|
| $2x^2 + 7x + 3 = 0$ | $6$ | $1, 6$ | $(x + 3)(2x + 1) = 0$ | $x = -3, -\frac{1}{2}$ |
| $3x^2 - 10x - 8 = 0$ | $-24$ | $-12, 2$ | $(3x + 2)(x - 4) = 0$ | $x = -\frac{2}{3}, 4$ |

---

### Special Cases

| Type | Form | Factorisation | Example |
|------|------|---------------|---------|
| **No constant term** | $ax^2 + bx = 0$ | $x(ax + b) = 0$ | $x^2 - 6x = 0 \Rightarrow x(x - 6) = 0$ |
| **Perfect square** | $(x + p)^2 = 0$ | One repeated root | $x^2 + 8x + 16 = (x + 4)^2$ |
| **Difference of squares** | $x^2 - a^2 = 0$ | $(x - a)(x + a) = 0$ | $x^2 - 25 = (x - 5)(x + 5)$ |

---

## PART 2: COMPLETING THE SQUARE

### The Formula

> **KEY FORMULA:**
> $$x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + c - \frac{b^2}{4}$$

### Quick Steps ($a = 1$)

```
1. Take HALF of b
2. SQUARE it
3. Add AND subtract inside
4. Factorise perfect square
5. Simplify constant
```

| Expression | Working | Result |
|------------|---------|--------|
| $x^2 + 6x + 5$ | $(x + 3)^2 - 9 + 5$ | $(x + 3)^2 - 4$ |
| $x^2 - 8x + 1$ | $(x - 4)^2 - 16 + 1$ | $(x - 4)^2 - 15$ |
| $x^2 - 10x - 3$ | $(x - 5)^2 - 25 - 3$ | $(x - 5)^2 - 28$ |

---

### When $a \neq 1$

> **KEY FORMULA:**
> $$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$$

**Method:**
1. Factorise $a$ from first two terms
2. Complete the square inside bracket
3. Multiply through and simplify

| Expression | Result | Turning Point |
|------------|--------|---------------|
| $2x^2 + 8x + 3$ | $2(x + 2)^2 - 5$ | $(-2, -5)$ minimum |
| $3x^2 - 12x + 7$ | $3(x - 2)^2 - 5$ | $(2, -5)$ minimum |

---

### Finding Turning Point

> **For $a(x + p)^2 + q$:**
> - Turning point: **$(-p, q)$**
> - If $a > 0$: **Minimum**
> - If $a < 0$: **Maximum**

---

## PART 3: QUADRATIC FORMULA

### The Formula – MUST MEMORISE

> **KEY FORMULA:**
> $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### When to Use

| Method | When to Use |
|--------|-------------|
| **Factorising** | Clean integer solutions |
| **Completing Square** | Need vertex or exact surd form |
| **Quadratic Formula** | Won't factorise; always works |

### Quick Steps

```
1. Write in form ax² + bx + c = 0
2. Identify a, b, c
3. Calculate discriminant = b² - 4ac
4. Substitute into formula
5. Simplify surds fully
```

| Example | $a, b, c$ | Discriminant | Solutions |
|---------|-----------|--------------|-----------|
| $x^2 + 5x + 2 = 0$ | $1, 5, 2$ | $17$ | $x = \frac{-5 \pm \sqrt{17}}{2}$ |
| $x^2 - 6x + 2 = 0$ | $1, -6, 2$ | $28 = 4 \times 7$ | $x = 3 \pm \sqrt{7}$ |
| $2x^2 - 3x - 4 = 0$ | $2, -3, -4$ | $41$ | $x = \frac{3 \pm \sqrt{41}}{4}$ |

---

### The Discriminant

> **$\Delta = b^2 - 4ac$**

| Discriminant | Roots | Graph |
|--------------|-------|-------|
| **$\Delta > 0$** | Two distinct real roots | Cuts x-axis twice |
| **$\Delta = 0$** | One repeated root | Touches x-axis |
| **$\Delta < 0$** | No real roots | Above/below x-axis |

---

## PART 4: QUADRATIC INEQUALITIES

### Quick Rules (for $a > 0$)

> **MEMORISE:**

| Inequality | Solution Region |
|------------|-----------------|
| $ax^2 + bx + c > 0$ | **OUTSIDE** roots: $x < \alpha$ or $x > \beta$ |
| $ax^2 + bx + c < 0$ | **BETWEEN** roots: $\alpha < x < \beta$ |
| $ax^2 + bx + c \geq 0$ | $x \leq \alpha$ or $x \geq \beta$ |
| $ax^2 + bx + c \leq 0$ | $\alpha \leq x \leq \beta$ |

### Method

```
1. Solve corresponding EQUATION
2. Find critical values (roots)
3. Draw sign diagram or sketch parabola
4. Identify correct region
5. Write with correct inequality notation
```

### Examples

| Inequality | Critical Values | Solution |
|------------|-----------------|----------|
| $x^2 - 5x + 6 < 0$ | $x = 2, 3$ | $2 < x < 3$ |
| $x^2 + 2x - 8 \geq 0$ | $x = -4, 2$ | $x \leq -4$ or $x \geq 2$ |
| $-x^2 + 3x + 4 > 0$ | $x = -1, 4$ | $-1 < x < 4$ |
| $x^2 - 6x + 9 \leq 0$ | $x = 3$ (repeated) | $x = 3$ |

---

## PART 5: WORD PROBLEMS

### Problem Types

| Type | Setup | Example Equation |
|------|-------|------------------|
| **Area** | $x(x + a) = \text{area}$ | $x(x + 5) = 24$ |
| **Consecutive numbers** | $x(x + 1) = \text{product}$ | $x(x + 1) = 56$ |
| **Projectile** | $h = at^2 + bt + c$ | $h = 20t - 5t^2$ |
| **Profit** | $P = -ax^2 + bx + c$ | $P = -2x^2 + 120x - 400$ |

### Problem-Solving Strategy

```
1. DEFINE variables (Let x = ...)
2. FORM equation from context
3. SOLVE (factorise, formula, or complete square)
4. CHECK validity (reject negative lengths, etc.)
5. STATE answer with units
```

### Key Checks

- ✅ Reject negative lengths/widths/times
- ✅ Check if integer solutions required
- ✅ Verify maximum/minimum makes sense
- ✅ Include units in final answer

---

## COMMON MISTAKES 

### Solving Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Forgetting ± | $x^2 = 9 \Rightarrow x = 3$ | $x = \pm 3$ |
| Dividing by $x$ | $x^2 = 3x \Rightarrow x = 3$ | $x = 0$ or $x = 3$ |
| Sign in formula | $x = \frac{b \pm \sqrt{...}}{2a}$ | $x = \frac{-b \pm \sqrt{...}}{2a}$ |

### Completing Square Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Forgetting to subtract | $(x + 3)^2 = x^2 + 6x + 9$ | $x^2 + 6x = (x + 3)^2 - 9$ |
| Wrong value inside | $(x + 6)^2$ for $x^2 + 6x$ | $(x + 3)^2$ – use half of $b$ |

### Inequality Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Wrong region | $x^2 > 4 \Rightarrow x > 2$ | $x < -2$ or $x > 2$ |
| Including when should exclude | $x^2 > 4 \Rightarrow x \geq -2$ | Use strict inequality |

---

## KEY FORMULAE TABLE

### Quadratic Formula

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Completing the Square

| Form | Result |
|------|--------|
| $x^2 + bx + c$ | $\left(x + \frac{b}{2}\right)^2 + c - \frac{b^2}{4}$ |
| $ax^2 + bx + c$ | $a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a}$ |

### Discriminant

$$\Delta = b^2 - 4ac$$

| $\Delta$ | Roots |
|----------|-------|
| $> 0$ | Two real roots |
| $= 0$ | One repeated root |
| $< 0$ | No real roots |

---

## COMMAND WORDS

| Command | Action |
|---------|--------|
| **Solve** | Find all values of $x$ |
| **Factorise** | Write as product of factors |
| **Complete the square** | Write as $a(x + p)^2 + q$ |
| **Find** | Calculate exact value |
| **Show that** | Prove with algebra |
| **Give to 2 d.p.** | Round to 2 decimal places |
| **Leave in surd form** | Don't use decimals |

---

## EXAM CHECKLIST ✓

Before submitting:
- [ ] All solutions found? (check for $\pm$)
- [ ] Surds simplified fully? ($\sqrt{12} = 2\sqrt{3}$)
- [ ] Correct inequality notation?
- [ ] Invalid solutions rejected?
- [ ] Units included?
- [ ] Answer in context?

---

## QUICK REVISION CARDS

```
┌─────────────────────────────────────────────┐
│  QUADRATIC FORMULA - MEMORISE!              │
├─────────────────────────────────────────────┤
│                                             │
│         -b ± √(b² - 4ac)                    │
│     x = ─────────────                       │
│               2a                            │
│                                             │
│  For: ax² + bx + c = 0                      │
│                                             │
│  Discriminant: Δ = b² - 4ac                 │
│  Δ > 0: 2 roots | Δ = 0: 1 root | Δ < 0: 0  │
└─────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────┐
│  COMPLETING THE SQUARE                      │
├─────────────────────────────────────────────┤
│                                             │
│  x² + bx + c = (x + b/2)² + c - (b/2)²      │
│                                             │
│  Steps:                                     │
│  1. Take HALF of b                          │
│  2. SQUARE it                               │
│  3. Add AND subtract                        │
│  4. Factorise perfect square                │
│                                             │
│  Turning point: (-b/2, c - b²/4)            │
└─────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────┐
│  QUADRATIC INEQUALITIES                     │
├─────────────────────────────────────────────┤
│                                             │
│  For a > 0 (opens upward):                  │
│                                             │
│  ax² + bx + c > 0  →  OUTSIDE roots         │
│  ax² + bx + c < 0  →  BETWEEN roots         │
│                                             │
│  Method:                                    │
│  1. Find roots                              │
│  2. Sketch parabola                         │
│  3. Identify correct region                 │
└─────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────┐
│  FACTORISING CHECK                          │
├─────────────────────────────────────────────┤
│                                             │
│  For x² + bx + c = 0:                       │
│  Find p, q where:                           │
│    p + q = b                                │
│    p × q = c                                │
│                                             │
│  Then: (x + p)(x + q) = 0                   │
│        x = -p or x = -q                     │
│                                             │
│  For ax² + bx + c = 0:                      │
│  Use AC method or formula                   │
└─────────────────────────────────────────────┘
```

---

## METHOD SELECTION GUIDE

| Question Type | Best Method |
|---------------|-------------|
| Integer solutions likely | **Factorise** |
| Need vertex/turning point | **Complete square** |
| Surd solutions required | **Formula or complete square** |
| Won't factorise | **Formula** |
| Find min/max value | **Complete square** |
| Discriminant question | **Calculate $b^2 - 4ac$** |
| Inequality | **Find roots, then sign diagram** |

---

*For detailed explanations and worked examples, see Mathematics_Algebra7_Notes.md*
