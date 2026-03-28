# Chapter 50: Shape and Space 10 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Specification A)

### Quick Reference Guide for UNIT 10: Advanced Trigonometry

---

## 1. TRIGONOMETRIC GRAPHS - QUICK REFERENCE

### Graph Properties at a Glance

| Function | Period | Range | Max | Min | Zeros |
|----------|--------|-------|-----|-----|-------|
| $y = \sin\theta$ | $360°$ | $[-1, 1]$ | $1$ at $90°$ | $-1$ at $270°$ | $0°, 180°, 360°$ |
| $y = \cos\theta$ | $360°$ | $[-1, 1]$ | $1$ at $0°, 360°$ | $-1$ at $180°$ | $90°, 270°$ |
| $y = \tan\theta$ | $180°$ | $(-\infty, \infty)$ | None | None | $0°, 180°, 360°$ |

### Key Exact Values

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|----------|--------------|--------------|--------------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45°$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{\sqrt{2}}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |
| $180°$ | $0$ | $-1$ | $0$ |
| $270°$ | $-1$ | $0$ | undefined |

### Graph Transformations

| Form | Transformation |
|------|----------------|
| $y = a\sin\theta$ | Vertical stretch by factor $a$; amplitude $= |a|$ |
| $y = \sin(b\theta)$ | Horizontal stretch by factor $\frac{1}{b}$; period $= \frac{360°}{b}$ |
| $y = \sin(\theta + c)$ | Translation left by $c$ degrees |
| $y = \sin\theta + d$ | Translation up by $d$ units |

### Solving Trig Equations

**For $\sin\theta = k$:**
- Principal value: $\theta_1 = \sin^{-1}(k)$
- Second solution: $\theta_2 = 180° - \theta_1$

**For $\cos\theta = k$:**
- Principal value: $\theta_1 = \cos^{-1}(k)$
- Second solution: $\theta_2 = 360° - \theta_1$ (or $-\theta_1$)

**For $\tan\theta = k$:**
- Principal value: $\theta_1 = \tan^{-1}(k)$
- Second solution: $\theta_2 = \theta_1 + 180°$

---

## 2. SINE RULE - QUICK REFERENCE

### Formula
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

### When to Use
| Given | Finding | Use Sine Rule? |
|-------|---------|----------------|
| 2 angles + 1 side | Another side | ✅ YES |
| 2 sides + non-included angle | Angle | ✅ YES (check ambiguous case) |
| 2 sides + included angle | 3rd side | ❌ NO - Use Cosine Rule |
| 3 sides | Angle | ❌ NO - Use Cosine Rule |

### The Ambiguous Case (SSA)
- Given: 2 sides and a non-included angle
- May have **TWO possible solutions**
- Always check: $\theta_2 = 180° - \theta_1$
- Verify both solutions: angle sum $< 180°$

### Quick Steps
1. Write down known values
2. Substitute into formula
3. Solve for unknown
4. Check for second solution (if finding angle)

---

## 3. COSINE RULE - QUICK REFERENCE

### Formula
**Finding a side:**
$$a^2 = b^2 + c^2 - 2bc\cos A$$

**Finding an angle:**
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

### When to Use
| Given | Finding | Use Cosine Rule? |
|-------|---------|------------------|
| 2 sides + included angle (SAS) | 3rd side | ✅ YES |
| 3 sides (SSS) | Any angle | ✅ YES |
| 2 angles + 1 side | Another side | ❌ NO - Use Sine Rule |

### Quick Steps - Finding a Side
1. Identify the two sides and included angle
2. Substitute into $a^2 = b^2 + c^2 - 2bc\cos A$
3. Calculate $a^2$
4. Take square root: $a = \sqrt{a^2}$

### Quick Steps - Finding an Angle
1. Substitute into $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$
2. Calculate $\cos A$
3. Use inverse cosine: $A = \cos^{-1}(\cos A)$

### Key Insight
- If $\cos A < 0$, angle $A$ is obtuse ($> 90°$)
- If $\cos A > 0$, angle $A$ is acute ($< 90°$)
- Largest angle opposite longest side

---

## 4. AREA OF TRIANGLE - QUICK REFERENCE

### Formula
$$\text{Area} = \frac{1}{2}ab\sin C$$

### When to Use
- Given: 2 sides + included angle (SAS)

### Quick Steps
1. Identify two sides and the angle **between** them
2. Multiply: $\text{Area} = \frac{1}{2} \times a \times b \times \sin C$
3. Calculate and round appropriately

### Finding Angle Given Area
1. Rearrange: $\sin C = \frac{2 \times \text{Area}}{a \times b}$
2. Use inverse sine: $C = \sin^{-1}(\sin C)$

---

## 5. DECISION FLOWCHART

```
START: What do you know?
│
├─ RIGHT-ANGLED TRIANGLE?
│  └─ Use SOH CAH TOA
│
├─ AAS (2 angles + 1 side)?
│  └─ Use SINE RULE
│
├─ SAS (2 sides + included angle)?
│  ├─ Find 3rd side → COSINE RULE
│  └─ Find area → AREA = ½ab sin C
│
├─ SSA (2 sides + non-included angle)?
│  └─ Use SINE RULE (check for 2 solutions!)
│
└─ SSS (3 sides)?
   └─ Use COSINE RULE (find any angle)
```

---

## 6. EXAM CHECKLIST

### Before the Exam ✓
- [ ] Memorize exact values for $0°, 30°, 45°, 60°, 90°$
- [ ] Know when to use each rule
- [ ] Practice the ambiguous case
- [ ] Know graph transformations

### During the Exam ✓
- [ ] Draw and label a clear diagram
- [ ] State which rule you're using
- [ ] Show all working
- [ ] Check angle sum = 180°
- [ ] Give answers to 3 s.f. (unless specified)
- [ ] Check for multiple solutions
- [ ] Include units in final answer

---

## 7. COMMON EXAM TRAPS 

| Trap | How to Avoid |
|------|--------------|
| Using wrong rule | Check what you're given first |
| Missing second solution | Always check for $\theta_2 = 180° - \theta_1$ |
| Wrong angle in cosine rule | Angle A must be opposite side a |
| Forgetting $\frac{1}{2}$ in area | Area $= \frac{1}{2}ab\sin C$, NOT $ab\sin C$ |
| Using non-included angle | Angle must be BETWEEN the two sides |
| Wrong sign in cosine rule | Remember: $a^2 = b^2 + c^2 - 2bc\cos A$ |
| Giving one answer when there are two | SSA with Sine Rule = check ambiguous case |

---

## 8. FORMULA SHEET

| Formula | Use When |
|---------|----------|
| $\frac{a}{\sin A} = \frac{b}{\sin B}$ | AAS or SSA |
| $a^2 = b^2 + c^2 - 2bc\cos A$ | SAS (find side) |
| $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$ | SSS (find angle) |
| $\text{Area} = \frac{1}{2}ab\sin C$ | SAS (find area) |

---

*End of Synopsis*
