# Chapter 19: Algebra 9 - Concise Synopsis
## Simultaneous Equations & Algebraic Proof

---

## ⚡ PART 1: SIMULTANEOUS EQUATIONS

### Key Methods Summary

| Method | When to Use | Key Steps |
|--------|-------------|-----------|
| **Substitution** | One variable isolated or coefficient of 1 | Substitute expression into other equation |
| **Elimination** | Matching coefficients possible | Add/subtract equations to eliminate one variable |
| **Graphical** | Geometric interpretation needed | Find intersection point |

### Linear Simultaneous Equations

**Standard form:**
$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$

**Quick rules:**
- Rearrange to $y = mx + c$ to check for parallel lines (same $m$)
- If equations are multiples of each other → infinite solutions
- If left sides match but right sides differ → no solution

### Non-Linear Systems

| System | Max Solutions | Method |
|--------|---------------|--------|
| Linear + Quadratic | 2 | Substitute linear into quadratic |
| Linear + Circle | 2 | Substitute linear into circle equation |
| Two Quadratics | 4 | Equate and solve resulting quartic |

### Number of Solutions (Discriminant)

For $ax^2 + bx + c = 0$ after substitution:

| Discriminant | Solutions | Geometric Meaning |
|--------------|-----------|-------------------|
| $b^2 - 4ac > 0$ | 2 distinct | Line intersects curve twice |
| $b^2 - 4ac = 0$ | 1 (repeated) | Line is tangent |
| $b^2 - 4ac < 0$ | No real | Line doesn't meet curve |

---

## ⚡ PART 2: ALGEBRAIC PROOF

### Essential Algebraic Representations

| Number Type | Algebraic Form |
|-------------|----------------|
| Any integer | $n$ |
| **Even number** | $2n$ |
| **Odd number** | $2n + 1$ |
| Multiple of $k$ | $kn$ |
| Consecutive integers | $n$, $n+1$ |
| Consecutive evens | $2n$, $2n+2$ |
| Consecutive odds | $2n+1$, $2n+3$ |
| Two-digit number (digits $a$, $b$) | $10a + b$ |
| Square number | $n^2$ |
| Cube number | $n^3$ |

### Proof Structure Template

```
1. Define: Let [expression] be [form], where n ∈ ℤ
2. Manipulate: Show algebraic working
3. Factorise: To reveal required form
4. Conclude: Therefore [statement] is [true/false]
```

### Quick Proof Results to Memorise

| Statement | Key Step |
|-----------|----------|
| Sum of two evens is even | $2m + 2n = 2(m+n)$ |
| Sum of two odds is even | $(2m+1)+(2n+1) = 2(m+n+1)$ |
| Product of two evens is even | $(2m)(2n) = 4mn$ |
| Product of two odds is odd | $(2m+1)(2n+1) = 4mn + 2m + 2n + 1$ |
| Square of odd is odd | $(2n+1)^2 = 4n^2 + 4n + 1 = 2(2n^2+2n) + 1$ |
| $n(n+1)$ is always even | Consecutive integers include one even |
| $n^2 - n$ is always even | $n^2 - n = n(n-1)$ - consecutive integers |
| $n^3 - n$ is divisible by 6 | $n(n-1)(n+1)$ - three consecutive integers |

### Counter-Example Method

- **One counter-example** is enough to disprove a universal statement
- Test boundary values first ($n = 0, 1, 2$, or special cases)
- Statement must be true for ALL values to be valid

---

## 📐 Key Formulae

### Algebraic Identities

| Identity | Formula |
|----------|---------|
| Difference of squares | $a^2 - b^2 = (a-b)(a+b)$ |
| Perfect square (+) | $(a+b)^2 = a^2 + 2ab + b^2$ |
| Perfect square (−) | $(a-b)^2 = a^2 - 2ab + b^2$ |
| Sum of cubes | $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ |
| Difference of cubes | $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ |

### Quadratic Formula

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Circle Equation

$$(x-a)^2 + (y-b)^2 = r^2$$

---

## 🎯 Exam Checklist

### Before Exam:

- [ ] Practise all three methods for simultaneous equations
- [ ] Know when each method is most efficient
- [ ] Memorise algebraic forms for different number types
- [ ] Practise writing clear, structured proofs
- [ ] Know how to find counter-examples

### During Exam:

- [ ] Read command words carefully (prove vs verify)
- [ ] Check answers by substitution
- [ ] Show all working in proofs
- [ ] State conclusions clearly
- [ ] Check for special cases (tangent, no intersection)

---

##  Common Pitfalls

| Mistake | Correction |
|---------|------------|
| Using $2n$ for odd numbers | Odd = $2n + 1$ |
| Using specific numbers as proof | Must use general expressions |
| Forgetting to find second variable | Always solve for both $x$ AND $y$ |
| Sign errors in elimination | Check addition/subtraction carefully |
| Missing conclusion in proof | Always write "Therefore..." |

---

## 📊 Mark Distribution Guide

### Typical Proof Question (4 marks):
- M1: Correct algebraic form used
- M1: Correct manipulation shown
- A1: Correct final form reached
- A1: Valid conclusion stated

### Typical Simultaneous Equations (4-5 marks):
- M1: Correct method started
- M1: Correct elimination/substitution
- A1: One correct value found
- A1: Second correct value found
- [B1: Verification shown]

---

*Quick reference for Pearson Edexcel IGCSE Mathematics A (4MA1)*
