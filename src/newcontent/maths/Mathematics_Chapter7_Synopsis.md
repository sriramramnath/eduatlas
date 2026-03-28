# Chapter 7: Numbers 7 - Concise Synopsis

## Recurring Decimals & Fractions - High-Yield Exam Content

---

## 1. Essential Definitions

| Term | Definition |
|------|------------|
| **Recurring Decimal** | A decimal with digits that repeat infinitely |
| **Pure Recurring** | Recurring starts immediately after decimal point (e.g., $0.\dot{3}$) |
| **Mixed Recurring** | Non-recurring digits before recurring part (e.g., $0.1\dot{6}$) |

### Notation
- **Single digit repeats**: $0.\dot{3}$ = 0.333...
- **Sequence repeats**: $0.\dot{1}\dot{2}$ = 0.121212...
- **Alternative**: $\overline{3}$, $\overline{12}$

---

## 2. Core Conversion Formulas

### Pure Recurring Decimals

$$0.\overline{abc} = \frac{abc}{999} \quad \text{(same number of 9s as repeating digits)}$$

| Decimal | Calculation | Fraction |
|---------|-------------|----------|
| $0.\dot{3}$ | $\frac{3}{9}$ | $\frac{1}{3}$ |
| $0.\dot{7}$ | $\frac{7}{9}$ | $\frac{7}{9}$ |
| $0.\dot{1}\dot{2}$ | $\frac{12}{99}$ | $\frac{4}{33}$ |
| $0.\dot{2}\dot{7}$ | $\frac{27}{99}$ | $\frac{3}{11}$ |
| $0.\dot{1}\dot{2}\dot{3}$ | $\frac{123}{999}$ | $\frac{41}{333}$ |

---

### Mixed Recurring Decimals

$$0.ab\overline{cde} = \frac{abcde - ab}{99900}$$

**Denominator rule**: Zeros for non-recurring digits + Nines for recurring digits

| Decimal | Formula | Calculation | Fraction |
|---------|---------|-------------|----------|
| $0.1\dot{6}$ | $\frac{16-1}{90}$ | $\frac{15}{90}$ | $\frac{1}{6}$ |
| $0.12\dot{3}$ | $\frac{123-12}{900}$ | $\frac{111}{900}$ | $\frac{37}{300}$ |
| $0.2\dot{3}\dot{4}$ | $\frac{234-2}{990}$ | $\frac{232}{990}$ | $\frac{116}{495}$ |

---

## 3. Algebraic Method (Step-by-Step)

### Pure Recurring (e.g., $0.\dot{2}\dot{7}$)

```
1. Let x = 0.2727...
2. Multiply: 100x = 27.2727... (100 = 10^n, n = number of recurring digits)
3. Subtract: 100x - x = 27
4. Solve: 99x = 27, x = 27/99 = 3/11
```

### Mixed Recurring (e.g., $0.1\dot{6}$)

```
1. Let x = 0.1666...
2. Multiply by 10: 10x = 1.666... (move past non-recurring)
3. Multiply by 10: 100x = 16.666... (move past one recurring digit)
4. Subtract: 100x - 10x = 15
5. Solve: 90x = 15, x = 15/90 = 1/6
```

---

## 4. Quick Rules Table

| Rule | Description |
|------|-------------|
| **Terminating decimal** | Denominator has only prime factors 2 and 5 |
| **Recurring decimal** | Denominator has prime factors other than 2 and 5 |
| **$0.\dot{9} = 1$** | This is mathematically TRUE |
| **Always simplify** | Final fractions must be in lowest terms |

---

## 5. Terminating vs Recurring Test

| Denominator | Prime Factorization | Decimal Type |
|-------------|---------------------|--------------|
| 2, 4, 5, 8, 10, 16, 20, 25, 40, 50 | Only 2s and 5s | **Terminating** |
| 3, 6, 7, 9, 11, 12, 13, 14, 15, 18 | Has other primes | **Recurring** |

---

## 6. Essential Fraction-Decimal Equivalents

| Fraction | Decimal | Fraction | Decimal |
|----------|---------|----------|---------|
| $\frac{1}{2}$ | 0.5 | $\frac{1}{3}$ | $0.\dot{3}$ |
| $\frac{1}{4}$ | 0.25 | $\frac{2}{3}$ | $0.\dot{6}$ |
| $\frac{1}{5}$ | 0.2 | $\frac{1}{6}$ | $0.1\dot{6}$ |
| $\frac{1}{8}$ | 0.125 | $\frac{1}{7}$ | $0.\dot{1}4285\dot{7}$ |
| $\frac{1}{9}$ | $0.\dot{1}$ | $\frac{1}{11}$ | $0.\dot{0}\dot{9}$ |
| $\frac{1}{12}$ | $0.08\dot{3}$ | $\frac{5}{6}$ | $0.8\dot{3}$ |

---

## 7. Calculator Problem Strategy

 **Never use calculator directly for recurring decimals!**

### Correct Approach:
1. Convert recurring decimals to fractions
2. Perform calculation with fractions
3. Convert answer back to required form

**Example:** $0.\dot{3} \times 0.\dot{6}$
$$= \frac{1}{3} \times \frac{2}{3} = \frac{2}{9}$$

---

## 8. Ordering Numbers - Quick Method

1. **Convert all to decimals** (write 4+ decimal places)
2. **Align decimal points** vertically
3. **Compare digit by digit** from left

**Example:** Order $0.7\dot{2}$, $\frac{3}{4}$, $0.\dot{7}$

| Value | Decimal | Order |
|-------|---------|-------|
| $0.7\dot{2}$ | 0.7222... | 2nd |
| $\frac{3}{4}$ | 0.7500... | 3rd |
| $0.\dot{7}$ | 0.7777... | 4th |

---

## 9. Common Exam Mistakes 

| ❌ Error | ✅ Correction |
|----------|---------------|
| Not simplifying final fraction | Always divide by HCF |
| Wrong multiplier (×10 vs ×100) | Count recurring digits |
| Forgetting to subtract | Always do: $nx - x = ...$ |
| Using calculator directly | Convert to fraction first |
| Misreading dot notation | Write out several places |

---

## 10. Mark Scheme Insights

### 2-Mark Question (Conversion)
- **M1**: Correct algebraic method OR correct formula
- **A1**: Correct fraction (simplified)

### 3-Mark Question (Proof)
- **M1**: Correct initial setup
- **M1**: Correct multiplier(s)
- **A1**: Correct simplified result

### "Show That" Questions
- Must show ALL steps
- No jumps in logic
- Must arrive exactly at given answer

---

## 11. Command Words Quick Guide

| Command | Action Required |
|---------|-----------------|
| **Convert** | Change form, show working |
| **Prove** | Full algebraic proof with QED/□ |
| **Show that** | Verify, all steps shown |
| **Hence** | Use previous result |
| **Express** | Give in required form |

---

## 12. Speed Tips for A* Students

⚡ **Memorize:** $\frac{1}{3} = 0.\dot{3}$, $\frac{2}{3} = 0.\dot{6}$, $\frac{1}{6} = 0.1\dot{6}$

⚡ **Quick formula for pure recurring:** Digits over nines

⚡ **Mixed recurring:** (All − Non-recurring) / (Zeros + Nines)

⚡ **Check answer:** Convert fraction back to verify

---

## 13. One-Page Formula Sheet

```
╔════════════════════════════════════════════════════════════╗
║           RECURRING DECIMAL CONVERSIONS                    ║
╠════════════════════════════════════════════════════════════╣
║ PURE RECURRING:                                            ║
║   0.ṡṡ... = repeating_digits / (9s equal to digits)       ║
║   Example: 0.̇4̇5 = 45/99 = 5/11                            ║
╠════════════════════════════════════════════════════════════╣
║ MIXED RECURRING:                                           ║
║   0.aḃcḋ = (abcd - ab) / (00...99...)                     ║
║   Zeros = non-recurring digits                             ║
║   Nines = recurring digits                                 ║
║   Example: 0.1̇6 = (16-1)/90 = 15/90 = 1/6                 ║
╠════════════════════════════════════════════════════════════╣
║ KEY FACTS:                                                 ║
║ • 0.̇9 = 1 (exactly!)                                      ║
║ • Terminating if denominator = 2ⁿ × 5ᵐ only               ║
║ • Always simplify final fraction                           ║
║ • Convert to fractions before calculating                  ║
╚════════════════════════════════════════════════════════════╝
```

---

## 14. Last-Minute Checklist

Before the exam, ensure you can:

- [ ] Identify pure vs mixed recurring decimals
- [ ] Apply algebraic method correctly
- [ ] Use quick formula for pure recurring
- [ ] Handle mixed recurring with correct denominator
- [ ] Simplify fractions efficiently
- [ ] Convert between all number formats
- [ ] Order mixed decimals/fractions/percentages
- [ ] Show full proof working
- [ ] Use "hence" questions correctly
- [ ] Avoid common calculator errors

---

*This synopsis contains the highest-yield content for Pearson Edexcel IGCSE Mathematics Number 7.*
