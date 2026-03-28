# Chapter 12: Algebra 2 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics (4MA1)

---

## 1. ALGEBRAIC FRACTIONS

### Key Principle
$$\boxed{\text{Only cancel FACTORS, never cancel terms connected by } + \text{ or } -}$$

### Simplifying Process
1. **Factorise** numerator and denominator
2. **Cancel** common factors
3. **Simplify** the result

### Quick Examples

| Fraction | Factorise | Cancel | Result |
|----------|-----------|--------|--------|
| $\frac{4x}{6}$ | $\frac{2 \cdot 2x}{2 \cdot 3}$ | 2 cancels | $\frac{2x}{3}$ |
| $\frac{x^2-4}{x+2}$ | $\frac{(x+2)(x-2)}{x+2}$ | $(x+2)$ cancels | $x-2$ |
| $\frac{6x^2}{9x}$ | $\frac{3 \cdot 2 \cdot x \cdot x}{3 \cdot 3 \cdot x}$ | 3 and x cancel | $\frac{2x}{3}$ |

### Adding/Subtracting Fractions

**Same denominators:** Add numerators directly
$$\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c}$$

**Different denominators:** Find common denominator first
$$\frac{a}{b} + \frac{c}{d} = \frac{ad+bc}{bd}$$

### Common Errors

| ❌ WRONG | ✅ CORRECT |
|----------|------------|
| $\frac{x+4}{2} = x+2$ | Cannot simplify - 2 is not a factor of $x$ |
| $\frac{x^2+3x}{x} = x+3x$ | $\frac{x(x+3)}{x} = x+3$ |

---

## 2. EQUATIONS WITH ROOTS AND POWERS

### Key Rules

| Equation Type | Method | Solutions |
|---------------|--------|-----------|
| $x^2 = k$ ($k > 0$) | Square root | $x = \pm\sqrt{k}$ (TWO solutions) |
| $x^3 = k$ | Cube root | $x = \sqrt[3]{k}$ (ONE solution) |
| $(x+a)^2 = k$ | Root then solve | Two linear equations |
| $\sqrt{x} = k$ | Square both sides | $x = k^2$ (check!) |

### Critical Points

>  **$x^2 = k$ always gives TWO solutions:** $x = +\sqrt{k}$ AND $x = -\sqrt{k}$

>  **Always CHECK solutions** to equations with roots (extraneous solutions possible)

### Quick Examples

| Equation | Solution |
|----------|----------|
| $x^2 = 25$ | $x = 5$ or $x = -5$ |
| $x^3 = 8$ | $x = 2$ |
| $(x+3)^2 = 16$ | $x+3 = \pm4$ → $x = 1$ or $x = -7$ |
| $\sqrt{x-1} = 4$ | $x-1 = 16$ → $x = 17$ |

---

## 3. POSITIVE INTEGER INDICES

### The Three Laws

$$\boxed{a^m \times a^n = a^{m+n}}$$

| Law | Rule | Example |
|-----|------|---------|
| **Multiplication** | $a^m \times a^n = a^{m+n}$ | $x^3 \times x^4 = x^7$ |
| **Division** | $\frac{a^m}{a^n} = a^{m-n}$ | $\frac{x^8}{x^3} = x^5$ |
| **Power of Power** | $(a^m)^n = a^{mn}$ | $(x^2)^5 = x^{10}$ |

### Special Values

| Expression | Value |
|------------|-------|
| $a^0$ | $1$ (if $a \neq 0$) |
| $a^1$ | $a$ |

### Extended Rules

| Rule | Example |
|------|---------|
| $(ab)^n = a^n \times b^n$ | $(2x)^3 = 8x^3$ |
| $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ | $\left(\frac{x}{2}\right)^3 = \frac{x^3}{8}$ |

### With Coefficients

$$3x^4 \times 5x^2 = (3 \times 5) \times x^{4+2} = 15x^6$$

$$\frac{12x^7}{4x^3} = \frac{12}{4} \times x^{7-3} = 3x^4$$

### Common Errors

| ❌ WRONG | ✅ CORRECT |
|----------|------------|
| $x^3 \times x^2 = x^6$ | $x^3 \times x^2 = x^5$ (ADD) |
| $x^5 \div x^2 = x^{2.5}$ | $x^5 \div x^2 = x^3$ (SUBTRACT) |
| $(x^3)^2 = x^5$ | $(x^3)^2 = x^6$ (MULTIPLY) |
| $x^3 + x^2 = x^5$ | Cannot add - laws don't apply! |

---

## 4. INEQUALITIES

### Symbols

| Symbol | Meaning |
|--------|---------|
| $<$ | Less than |
| $>$ | Greater than |
| $\leq$ | Less than or equal to |
| $\geq$ | Greater than or equal to |

### The Golden Rule

$$\boxed{\text{Multiply or divide by NEGATIVE → REVERSE the inequality sign}}$$

### Quick Examples

| Inequality | Solution | Key Step |
|------------|----------|----------|
| $x + 3 < 7$ | $x < 4$ | Subtract 3 |
| $3x \geq 12$ | $x \geq 4$ | Divide by 3 |
| $-2x < 8$ | $x > -4$ | Divide by -2, REVERSE |
| $2x - 1 > 5$ | $x > 3$ | Add 1, divide by 2 |

### Number Line Representation

| Inequality | Circle Type | Direction |
|------------|-------------|-----------|
| $x > a$ | Open (○) | Right (→) |
| $x < a$ | Open (○) | Left (←) |
| $x \geq a$ | Filled (●) | Right (→) |
| $x \leq a$ | Filled (●) | Left (←) |

### Visual Guide

**$x > 2$:**
```
        ○───────────────>
    ←────────────────────────
    0   1   2   3   4   5
```

**$x \leq -1$:**
```
    <───────────────●
                    ────────→
   -2  -1   0   1   2   3
```

**$-1 < x \leq 3$:**
```
            ○───────────●
    ←────────────────────────→
   -2  -1   0   1   2   3   4
```

### Set Notation Quick Reference

| Inequality | Set Notation | Interval Notation |
|------------|--------------|-------------------|
| $x > 2$ | $\{x : x > 2\}$ | $(2, \infty)$ |
| $x \leq 5$ | $\{x : x \leq 5\}$ | $(-\infty, 5]$ |
| $-2 < x < 4$ | $\{x : -2 < x < 4\}$ | $(-2, 4)$ |

---

## QUICK REFERENCE TABLES

### Powers Reference

| $x$ | $x^2$ | $x^3$ |
|-----|-------|-------|
| 1 | 1 | 1 |
| 2 | 4 | 8 |
| 3 | 9 | 27 |
| 4 | 16 | 64 |
| 5 | 25 | 125 |
| 6 | 36 | 216 |
| 7 | 49 | 343 |
| 8 | 64 | 512 |
| 9 | 81 | 729 |
| 10 | 100 | 1000 |

### Square Roots Reference

| $\sqrt{x}$ | Value |
|------------|-------|
| $\sqrt{1}$ | 1 |
| $\sqrt{4}$ | 2 |
| $\sqrt{9}$ | 3 |
| $\sqrt{16}$ | 4 |
| $\sqrt{25}$ | 5 |
| $\sqrt{36}$ | 6 |
| $\sqrt{49}$ | 7 |
| $\sqrt{64}$ | 8 |
| $\sqrt{81}$ | 9 |
| $\sqrt{100}$ | 10 |
| $\sqrt{121}$ | 11 |
| $\sqrt{144}$ | 12 |

### Cube Roots Reference

| $\sqrt[3]{x}$ | Value |
|---------------|-------|
| $\sqrt[3]{1}$ | 1 |
| $\sqrt[3]{8}$ | 2 |
| $\sqrt[3]{27}$ | 3 |
| $\sqrt[3]{64}$ | 4 |
| $\sqrt[3]{125}$ | 5 |
| $\sqrt[3]{216}$ | 6 |
| $\sqrt[3]{-1}$ | -1 |
| $\sqrt[3]{-8}$ | -2 |
| $\sqrt[3]{-27}$ | -3 |

---

## EXAM CHECKLIST ✓

### Before the Exam, Can You:

- [ ] Factorise before cancelling algebraic fractions?
- [ ] Identify what can and cannot be cancelled?
- [ ] Find common denominators for addition?
- [ ] Solve $x^2 = k$ equations correctly (TWO solutions)?
- [ ] Solve equations with $(x+a)^n$?
- [ ] Solve equations with $\sqrt{x}$ and check solutions?
- [ ] Apply all three index laws correctly?
- [ ] Handle coefficients with indices?
- [ ] Solve inequalities (including sign reversal)?
- [ ] Represent inequalities on number lines?
- [ ] Use correct circle types (open/filled)?
- [ ] Find integer solutions within a range?

---

## HIGH-YIELD EXAM TIPS

### Time-Savers
1. **Square equations = ±** - Always write both solutions
2. **Index laws = memory** - Practice until automatic
3. **Negative in inequality = reverse** - Always check
4. **Factorise first** - Before cancelling any fraction

### Exam Technique
1. **Show ALL working** - Every step earns marks
2. **Check answers** - Substitute back to verify
3. **Two solutions** - Don't forget the negative root
4. **Circle types** - Open vs filled matters

### Command Words Quick Guide

| Command | Action |
|---------|--------|
| Simplify | Use laws, cancel factors |
| Solve | Find all values |
| Express | Write in given form |
| Represent | Draw on number line |
| Find | Determine the value(s) |

---

## FORMULA SHEET

### Algebraic Fractions
- **Cancellation:** $\frac{ab}{ac} = \frac{b}{c}$
- **Addition:** $\frac{a}{b} + \frac{c}{d} = \frac{ad+bc}{bd}$

### Equations with Powers
- **Square:** $x^2 = k$ → $x = \pm\sqrt{k}$
- **Cube:** $x^3 = k$ → $x = \sqrt[3]{k}$

### Index Laws
- **Law 1:** $a^m \times a^n = a^{m+n}$
- **Law 2:** $\frac{a^m}{a^n} = a^{m-n}$
- **Law 3:** $(a^m)^n = a^{mn}$
- **Zero:** $a^0 = 1$

### Inequalities
- **Rule:** Multiply/divide by negative → reverse sign
- **Open circle:** $<$ or $>$
- **Filled circle:** $\leq$ or $\geq$

---

*Synopsis for Pearson Edexcel IGCSE Mathematics (4MA1) - Algebra 2*

---

**End of Synopsis**
