# Chapter 7: Numbers 7 - Concise Synopsis

## Comprehensive Study Notes for A* Students

---

## 1. Understanding Recurring Decimals

### 1.1 Definition

A **recurring decimal** (or repeating decimal) is a decimal number in which a digit or a sequence of digits repeats infinitely.

**Notation:**
- A dot above a digit indicates it repeats: $\dot{3} = 0.333...$
- A dot above the first and last digits of a sequence indicates the repeating block: $0.\dot{1}\dot{2} = 0.121212...$
- Alternative notation: $0.\overline{3}$ or $0.\overline{12}$

### 1.2 Types of Recurring Decimals

| Type | Example | Description |
|------|---------|-------------|
| **Pure recurring** | $0.\dot{3}$, $0.\dot{1}\dot{2}$ | Recurring part starts immediately after decimal point |
| **Mixed recurring** | $0.1\dot{6}$, $0.12\dot{3}$ | Has non-recurring digits before the recurring part |

---

## 2. Converting Recurring Decimals to Fractions

### 2.1 Method 1: Algebraic Method (The Standard Method)

This is the most reliable and universally applicable method.

#### For Pure Recurring Decimals

**Rule:** If all digits recur, put the recurring digits over the same number of nines.

**Example 1:** Convert $0.\dot{7}$ to a fraction.

**Step-by-step solution:**

Let $x = 0.\dot{7} = 0.777...$

Multiply by 10 (one decimal place, as one digit repeats):
$$10x = 7.\dot{7} = 7.777...$$

Subtract the original equation:
$$10x - x = 7.\dot{7} - 0.\dot{7}$$
$$9x = 7$$
$$x = \frac{7}{9}$$

**Answer:** $0.\dot{7} = \frac{7}{9}$

---

**Example 2:** Convert $0.\dot{2}\dot{3}$ to a fraction.

Let $x = 0.\dot{2}\dot{3} = 0.232323...$

Multiply by 100 (two digits repeat):
$$100x = 23.\dot{2}\dot{3} = 23.2323...$$

Subtract:
$$100x - x = 23.\dot{2}\dot{3} - 0.\dot{2}\dot{3}$$
$$99x = 23$$
$$x = \frac{23}{99}$$

**Answer:** $0.\dot{2}\dot{3} = \frac{23}{99}$

---

**Example 3:** Convert $0.\dot{1}\dot{2}\dot{3}$ to a fraction.

Let $x = 0.\dot{1}\dot{2}\dot{3} = 0.123123123...$

Multiply by 1000 (three digits repeat):
$$1000x = 123.\dot{1}\dot{2}\dot{3} = 123.123123...$$

Subtract:
$$1000x - x = 123.\dot{1}\dot{2}\dot{3} - 0.\dot{1}\dot{2}\dot{3}$$
$$999x = 123$$
$$x = \frac{123}{999} = \frac{41}{333}$$

**Answer:** $0.\dot{1}\dot{2}\dot{3} = \frac{41}{333}$

> ** Exam Tip:** Always simplify your final fraction! Examiners may deduct marks for unsimplified answers.

---

#### For Mixed Recurring Decimals

**Rule:** A mixed recurring decimal has non-recurring digits before the recurring part.

**Example 4:** Convert $0.1\dot{6}$ to a fraction.

Let $x = 0.1\dot{6} = 0.1666...$

Multiply by 10 to move past the non-recurring digit:
$$10x = 1.\dot{6} = 1.666...$$

Multiply by 10 again to move past one recurring digit:
$$100x = 16.\dot{6} = 16.666...$$

Subtract:
$$100x - 10x = 16.\dot{6} - 1.\dot{6}$$
$$90x = 15$$
$$x = \frac{15}{90} = \frac{1}{6}$$

**Answer:** $0.1\dot{6} = \frac{1}{6}$

---

**Example 5:** Convert $0.12\dot{3}$ to a fraction.

Let $x = 0.12\dot{3} = 0.12333...$

Multiply by 100 (two non-recurring digits):
$$100x = 12.\dot{3} = 12.333...$$

Multiply by 10 (one recurring digit):
$$1000x = 123.\dot{3} = 123.333...$$

Subtract:
$$1000x - 100x = 123.\dot{3} - 12.\dot{3}$$
$$900x = 111$$
$$x = \frac{111}{900} = \frac{37}{300}$$

**Answer:** $0.12\dot{3} = \frac{37}{300}$

---

### 2.2 Method 2: The Formula Approach

For quick conversions, you can use these formulas:

#### Pure Recurring Decimals

$$0.\overline{abc} = \frac{abc}{999}$$

(where $abc$ represents the digits of the recurring block)

| Recurring Decimal | Calculation | Fraction (simplified) |
|-------------------|-------------|----------------------|
| $0.\dot{3}$ | $\frac{3}{9}$ | $\frac{1}{3}$ |
| $0.\dot{7}$ | $\frac{7}{9}$ | $\frac{7}{9}$ |
| $0.\dot{1}\dot{2}$ | $\frac{12}{99}$ | $\frac{4}{33}$ |
| $0.\dot{2}\dot{7}$ | $\frac{27}{99}$ | $\frac{3}{11}$ |
| $0.\dot{1}\dot{2}\dot{3}$ | $\frac{123}{999}$ | $\frac{41}{333}$ |

---

#### Mixed Recurring Decimals

$$0.ab\overline{c} = \frac{abc - ab}{900}$$

(The denominator has zeros equal to non-recurring digits, followed by nines equal to recurring digits)

**Example:** Convert $0.1\dot{6}$ to a fraction.

Non-recurring digits: 1 (one digit)
Recurring digits: 6 (one digit)

$$0.1\dot{6} = \frac{16 - 1}{90} = \frac{15}{90} = \frac{1}{6}$$

---

**Example:** Convert $0.12\dot{3}\dot{4}$ to a fraction.

Non-recurring digits: 12 (two digits)
Recurring digits: 34 (two digits)

$$0.12\dot{3}\dot{4} = \frac{1234 - 12}{9900} = \frac{1222}{9900} = \frac{611}{4950}$$

---

## 3. Converting Fractions to Decimals

### 3.1 Division Method

Divide the numerator by the denominator.

**Example:** Convert $\frac{5}{8}$ to a decimal.

$$\frac{5}{8} = 5 \div 8 = 0.625$$ (terminating decimal)

**Example:** Convert $\frac{1}{3}$ to a decimal.

$$\frac{1}{3} = 1 \div 3 = 0.333... = 0.\dot{3}$$ (recurring decimal)

---

### 3.2 When Do Fractions Give Terminating or Recurring Decimals?

> **Key Rule:** A fraction $\frac{p}{q}$ (in lowest terms) produces a **terminating decimal** if and only if $q$ has no prime factors other than 2 and 5.

| Denominator | Prime Factors | Decimal Type |
|-------------|---------------|--------------|
| 2 | 2 | Terminating |
| 4 | $2^2$ | Terminating |
| 5 | 5 | Terminating |
| 8 | $2^3$ | Terminating |
| 10 | $2 \times 5$ | Terminating |
| 20 | $2^2 \times 5$ | Terminating |
| 3 | 3 | Recurring |
| 6 | $2 \times 3$ | Recurring |
| 7 | 7 | Recurring |
| 9 | $3^2$ | Recurring |
| 11 | 11 | Recurring |
| 12 | $2^2 \times 3$ | Recurring |

---

## 4. Ordering Recurring Decimals and Fractions

### 4.1 Strategy for Comparison

When comparing recurring decimals, fractions, and terminating decimals:

1. Convert ALL values to the same format (usually decimals with sufficient decimal places)
2. Compare digit by digit from left to right

**Example:** Arrange in ascending order: $0.6\dot{7}$, $\frac{2}{3}$, $0.\dot{6}$, $67\%$

**Step 1:** Convert each to decimal form (write at least 4 decimal places).

| Value | Conversion | Decimal Form |
|-------|------------|--------------|
| $0.6\dot{7}$ | Recurring | $0.6777...$ |
| $\frac{2}{3}$ | $2 \div 3$ | $0.6666...$ |
| $0.\dot{6}$ | Recurring | $0.6666...$ |
| $67\%$ | $\frac{67}{100}$ | $0.6700...$ |

**Step 2:** Compare:
- $0.6666...$ (smallest) - both $\frac{2}{3}$ and $0.\dot{6}$
- $0.6777...$ (middle) - $0.6\dot{7}$
- $0.6700...$ (largest) - $67\%$

**Answer:** $\frac{2}{3} = 0.\dot{6}$ < $0.6\dot{7}$ < $67\%$

---

## 5. Advanced Calculator Problems

### 5.1 Working with Recurring Decimals on a Calculator

**Problem:** Calculators cannot store infinite decimals, so $0.\dot{3}$ is stored as a finite approximation.

**Strategy:**
1. Convert recurring decimals to fractions FIRST
2. Perform calculations with fractions
3. Convert the final answer back to the required form

---

**Example 6:** Calculate $0.\dot{3} + 0.\dot{6}$

**Method 1 (Direct):**
$$0.\dot{3} + 0.\dot{6} = 0.333... + 0.666... = 0.999... = 0.\dot{9} = 1$$

**Method 2 (Convert to fractions):**
$$0.\dot{3} = \frac{1}{3}, \quad 0.\dot{6} = \frac{2}{3}$$
$$\frac{1}{3} + \frac{2}{3} = \frac{3}{3} = 1$$

**Key Insight:** $0.\dot{9} = 1$ (This is mathematically true!)

---

**Example 7:** Calculate $0.\dot{2}\dot{7} \times 0.\dot{3}$ giving your answer as a fraction in its simplest form.

**Step 1:** Convert to fractions.
$$0.\dot{2}\dot{7} = \frac{27}{99} = \frac{3}{11}$$
$$0.\dot{3} = \frac{3}{9} = \frac{1}{3}$$

**Step 2:** Multiply.
$$\frac{3}{11} \times \frac{1}{3} = \frac{3}{33} = \frac{1}{11}$$

**Answer:** $\frac{1}{11}$

---

### 5.2 Proof Questions

**Example 8:** Prove that $0.\dot{4}\dot{5} = \frac{5}{11}$

**Proof:**

Let $x = 0.\dot{4}\dot{5} = 0.454545...$

Multiply by 100:
$$100x = 45.\dot{4}\dot{5} = 45.4545...$$

Subtract the original equation:
$$100x - x = 45.\dot{4}\dot{5} - 0.\dot{4}\dot{5}$$
$$99x = 45$$
$$x = \frac{45}{99}$$

Simplify:
$$x = \frac{45 \div 9}{99 \div 9} = \frac{5}{11}$$

**Therefore:** $0.\dot{4}\dot{5} = \frac{5}{11}$ $\square$

---

### 5.3 Finding Exact Values

**Example 9:** Express $0.2\dot{3}\dot{4}$ as a fraction. Hence find the exact value of $0.2\dot{3}\dot{4} \times \sqrt{2}$

**Part 1:** Convert to fraction.

Let $x = 0.2\dot{3}\dot{4} = 0.2343434...$

Multiply by 10:
$$10x = 2.\dot{3}\dot{4} = 2.3434...$$

Multiply by 100:
$$1000x = 234.\dot{3}\dot{4} = 234.3434...$$

Subtract:
$$1000x - 10x = 234.\dot{3}\dot{4} - 2.\dot{3}\dot{4}$$
$$990x = 232$$
$$x = \frac{232}{990} = \frac{116}{495}$$

**Part 2:** Calculate exact value.
$$\frac{116}{495} \times \sqrt{2} = \frac{116\sqrt{2}}{495}$$

**Answer:** $\frac{116\sqrt{2}}{495}$

---

### 5.4 Complex Problems with Mixed Numbers

**Example 10:** Express $2.3\dot{1}\dot{4}$ as an improper fraction.

**Step 1:** Separate the integer and decimal parts.
$$2.3\dot{1}\dot{4} = 2 + 0.3\dot{1}\dot{4}$$

**Step 2:** Convert $0.3\dot{1}\dot{4}$ to a fraction.

Let $x = 0.3\dot{1}\dot{4} = 0.3141414...$

Multiply by 10:
$$10x = 3.\dot{1}\dot{4} = 3.1414...$$

Multiply by 100:
$$1000x = 314.\dot{1}\dot{4} = 314.1414...$$

Subtract:
$$1000x - 10x = 314 - 3 = 311$$
$$990x = 311$$
$$x = \frac{311}{990}$$

**Step 3:** Combine with the integer part.
$$2.3\dot{1}\dot{4} = 2 + \frac{311}{990} = \frac{1980}{990} + \frac{311}{990} = \frac{2291}{990}$$

**Answer:** $\frac{2291}{990}$

---

## 6. Common Mistakes and How to Avoid Them

### 6.1 Top 10 Errors to Avoid

| ❌ Mistake | ✅ Correct Approach |
|-----------|---------------------|
| Not simplifying fractions | Always check for common factors in the final answer |
| Wrong multiplier (e.g., ×10 instead of ×100) | Count the number of recurring digits to determine the multiplier |
| Forgetting to subtract original equation | Set up equations clearly: $100x - x = ...$ |
| Confusing pure and mixed recurring decimals | Identify the repeating block first using dot notation |
| Assuming $0.\dot{9} \neq 1$ | $0.\dot{9} = 1$ (this is mathematically proven) |
| Using calculator for recurring decimals directly | Convert to fraction first, then calculate |
| Misplacing dots in notation | One dot for single repeating digit, two dots for sequences |
| Not identifying all recurring digits | Write out several decimal places to identify the pattern |
| Errors in subtraction | Be careful with borrowing in subtraction |
| Wrong denominator formula | For mixed recurring: zeros for non-recurring, nines for recurring |

---

### 6.2 Detailed Error Analysis

**Error 1: Wrong Multiplier**

❌ **Incorrect:** Converting $0.\dot{1}\dot{2}\dot{3}$ by multiplying by 10 or 100.

✅ **Correct:** Three digits recur, so multiply by $10^3 = 1000$.

---

**Error 2: Forgetting to Subtract**

❌ **Incorrect:** Setting $100x = 23$ when converting $0.\dot{2}\dot{3}$

✅ **Correct:** 
$$100x = 23.\dot{2}\dot{3}$$
$$100x - x = 23.\dot{2}\dot{3} - 0.\dot{2}\dot{3}$$
$$99x = 23$$

---

**Error 3: Incorrect Denominator for Mixed Recurring**

❌ **Incorrect:** $0.1\dot{6} = \frac{16 - 1}{99}$

✅ **Correct:** $0.1\dot{6} = \frac{16 - 1}{90}$ (one zero for one non-recurring digit, one nine for one recurring digit)

---

## 7. Exam Focus & Strategy

### 7.1 Frequently Tested Question Types

1. **Convert recurring decimal to fraction** (2-3 marks)
   - Pure recurring decimals
   - Mixed recurring decimals

2. **Convert fraction to recurring decimal** (1-2 marks)
   - Using long division
   - Recognizing patterns

3. **Order a mixture of decimals, fractions, and percentages** (2-3 marks)
   - Convert to common format
   - Compare systematically

4. **Calculation with recurring decimals** (3-4 marks)
   - Convert to fractions first
   - Simplify final answer

5. **Proof questions** (3-4 marks)
   - Show full algebraic working
   - Clear logical steps

6. **"Hence" questions** (2-4 marks)
   - Use previous answer
   - Apply to new context

---

### 7.2 Command Word Guidance

| Command Word | What It Means | How to Answer |
|--------------|---------------|---------------|
| **Convert** | Change from one form to another | Show working, give exact answer |
| **Express** | Write in a different form | Full algebraic method required |
| **Prove** | Demonstrate truth mathematically | Clear steps, show all working, conclude with QED or $\square$ |
| **Show that** | Verify a given result | Work must lead to the stated answer |
| **Hence** | Use a previous result | Don't restart from scratch |
| **Find** | Calculate a value | Show method, give final answer |
| **Write** | Give the answer directly | Often can be done mentally |

---

### 7.3 Gaining Full Marks: Mark Scheme Insights

**For 2-mark conversion questions:**
- M1: Correct method (setting up equation with appropriate multiplier)
- A1: Correct fraction (simplified if appropriate)

**For 3-4 mark proof questions:**
- M1: Correct initial equation
- M1: Correct multiplier(s)
- M1: Correct subtraction
- A1: Correct fraction, simplified

**For "show that" questions:**
- All steps must be shown
- No jumping to the answer
- Working must logically lead to the given result

---

### 7.4 Time-Saving Tips for A* Students

1. **Memorize common conversions:**
   - $\frac{1}{3} = 0.\dot{3}$, $\frac{2}{3} = 0.\dot{6}$
   - $\frac{1}{7} = 0.\dot{1}4285\dot{7}$
   - $\frac{1}{9} = 0.\dot{1}$, $\frac{1}{11} = 0.\dot{0}\dot{9}$

2. **Use the quick formula for pure recurring:**
   - $0.\overline{abc} = \frac{abc}{999}$ (simplify as needed)

3. **For mixed recurring decimals:**
   - Denominator pattern: number of non-recurring zeros + number of recurring nines

4. **Check answers by converting back:**
   - Divide your fraction to verify it produces the recurring decimal

---

## 8. Key Formulas Summary

### Core Formulas

| Conversion | Formula |
|------------|---------|
| Pure recurring: $0.\overline{n}$ digits | $\frac{\text{repeating digits}}{\underbrace{99...9}_{n \text{ nines}}}$ |
| Mixed recurring: $m$ non-recurring, $n$ recurring | $\frac{\text{all digits} - \text{non-recurring digits}}{\underbrace{00...0}_{m \text{ zeros}}\underbrace{99...9}_{n \text{ nines}}}$ |
| Fraction to terminating decimal | Divide numerator by denominator |
| $0.\dot{9}$ | $= 1$ |

### Common Decimal-Fraction Equivalents

| Fraction | Decimal | Fraction | Decimal |
|----------|---------|----------|---------|
| $\frac{1}{2}$ | 0.5 | $\frac{1}{3}$ | $0.\dot{3}$ |
| $\frac{1}{4}$ | 0.25 | $\frac{2}{3}$ | $0.\dot{6}$ |
| $\frac{1}{5}$ | 0.2 | $\frac{1}{6}$ | $0.1\dot{6}$ |
| $\frac{1}{8}$ | 0.125 | $\frac{1}{7}$ | $0.\dot{1}4285\dot{7}$ |
| $\frac{1}{9}$ | $0.\dot{1}$ | $\frac{1}{11}$ | $0.\dot{0}\dot{9}$ |
| $\frac{1}{12}$ | $0.08\dot{3}$ | $\frac{1}{13}$ | $0.\dot{0}7692\dot{3}$ |

---

## 9. Practice Examples with Full Solutions

### Example 11: Exam-Style Question (3 marks)

**Question:** Convert $0.\dot{5}\dot{4}$ to a fraction. Hence find the value of $0.\dot{5}\dot{4} \times 99$.

**Solution:**

Let $x = 0.\dot{5}\dot{4} = 0.5454...$

$$100x = 54.\dot{5}\dot{4} = 54.5454...$$

$$100x - x = 54.\dot{5}\dot{4} - 0.\dot{5}\dot{4}$$

$$99x = 54$$

$$x = \frac{54}{99} = \frac{6}{11}$$

**Hence:**
$$0.\dot{5}\dot{4} \times 99 = \frac{6}{11} \times 99 = \frac{6 \times 99}{11} = \frac{6 \times 9}{1} = 54$$

---

### Example 12: Proof Question (4 marks)

**Question:** Prove algebraically that $0.1\dot{8} = \frac{17}{90}$

**Solution:**

Let $x = 0.1\dot{8} = 0.1888...$

Multiply by 10 to move past the non-recurring digit:
$$10x = 1.\dot{8} = 1.888...$$

Multiply by 10 again to move past one recurring digit:
$$100x = 18.\dot{8} = 18.888...$$

Subtract:
$$100x - 10x = 18.\dot{8} - 1.\dot{8}$$
$$90x = 17$$
$$x = \frac{17}{90}$$

Therefore, $0.1\dot{8} = \frac{17}{90}$ $\square$

---

### Example 13: Ordering Question (3 marks)

**Question:** Write these numbers in order of size, smallest first:
$0.\dot{7}$, $\frac{3}{4}$, $0.7\dot{2}$, $72\%$

**Solution:**

Convert all to decimals (to 4 decimal places):

| Value | Conversion | Decimal |
|-------|------------|---------|
| $0.\dot{7}$ | Recurring | $0.7777...$ |
| $\frac{3}{4}$ | $3 \div 4$ | $0.7500...$ |
| $0.7\dot{2}$ | Recurring | $0.7222...$ |
| $72\%$ | $\frac{72}{100}$ | $0.7200...$ |

Comparing: $0.7200 < 0.7222 < 0.7500 < 0.7777$

**Answer:** $72\% < 0.7\dot{2} < \frac{3}{4} < 0.\dot{7}$

---

### Example 14: Complex Calculation (4 marks)

**Question:** Calculate $0.\dot{3} \times 0.\dot{6}$, giving your answer as a fraction in its simplest form.

**Solution:**

Convert to fractions:
$$0.\dot{3} = \frac{3}{9} = \frac{1}{3}$$
$$0.\dot{6} = \frac{6}{9} = \frac{2}{3}$$

Multiply:
$$\frac{1}{3} \times \frac{2}{3} = \frac{2}{9}$$

**Answer:** $\frac{2}{9}$

---

## 10. Summary: What You Must Know

✅ **Definition and notation** of recurring decimals  
✅ **Algebraic method** for converting recurring decimals to fractions  
✅ **Quick formulas** for pure and mixed recurring decimals  
✅ **Converting fractions** to decimals (terminating or recurring)  
✅ **Identifying** terminating vs recurring decimals from denominator  
✅ **Ordering** mixed numbers in different formats  
✅ **Calculator problems**: convert to fractions first  
✅ **Proof technique** for algebraic verification  
✅ **Common mistakes** and how to avoid them  
✅ **Simplifying** fractions to lowest terms

---

*These notes are aligned with the Pearson Edexcel IGCSE Mathematics specification and designed for students targeting grades 8-9 (A*).*
