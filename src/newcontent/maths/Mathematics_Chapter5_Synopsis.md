# Chapter 5: Numbers 5 - Concise Synopsis
## Using Calculators | Estimating Answers | Upper and Lower Bounds

---

## 📱 SECTION 1: USING CALCULATORS

### Order of Operations (BIDMAS)
| Order | Operation | Example |
|:-----:|-----------|---------|
| 1 | **B**rackets | $(3+2) \times 4 = 20$ |
| 2 | **I**ndices | $3^2 = 9$ |
| 3 | **D**ivision | Left to right |
| 4 | **M**ultiplication | Left to right |
| 5 | **A**ddition | Left to right |
| 6 | **S**ubtraction | Left to right |

### Essential Calculator Functions

| Function | Key | Example Input |
|----------|-----|---------------|
| Square | $x^2$ | $7^2 = 49$ |
| Power | $x^y$ or $\wedge$ | $2^5 = 32$ |
| Square root | $\sqrt{\phantom{x}}$ | $\sqrt{144} = 12$ |
| Cube root | $\sqrt[3]{\phantom{x}}$ | $\sqrt[3]{27} = 3$ |
| nth root | shift + $x^y$ | $\sqrt[4]{81} = 3$ |
| Scientific notation | EXP or $\times 10^x$ | $3.5 \times 10^6$ |
| Fraction | Dedicated key | $\frac{3}{4}$ |
| Memory store | STO | Store value |
| Memory recall | RCL | Recall value |

###  Calculator Checklist
- [ ] Check DEG mode (not RAD) for trigonometry
- [ ] Clear memory before starting
- [ ] Use brackets for complex expressions
- [ ] Show more decimal places in working than final answer
- [ ] Use ANS key for multi-step calculations

---

## 📊 SECTION 2: ESTIMATING ANSWERS

### Quick Rules
- **Round each number to 1 significant figure**
- **Choose compatible numbers** for easier mental math
- **Always check reasonableness** of calculator answers

### Estimation Examples

| Calculation | Estimation | Actual |
|-------------|------------|--------|
| $\frac{29.7 \times 51.2}{4.1}$ | $\frac{30 \times 50}{4} = 375$ | $370.5$ |
| $\sqrt{82.3} \times 19.8$ | $\sqrt{80} \times 20 \approx 180$ | $179.6$ |
| $17\% \text{ of } £38.50$ | $20\% \text{ of } £40 = £8$ | $£6.55$ |
| $\frac{387}{42}$ | $\frac{400}{40} = 10$ | $9.2$ |

### Perfect Squares to Memorize

| $n$ | $n^2$ | $n$ | $n^2$ |
|:---:|:-----:|:---:|:-----:|
| 1 | 1 | 9 | 81 |
| 2 | 4 | 10 | 100 |
| 3 | 9 | 11 | 121 |
| 4 | 16 | 12 | 144 |
| 5 | 25 | 13 | 169 |
| 6 | 36 | 14 | 196 |
| 7 | 49 | 15 | 225 |
| 8 | 64 | | |

### Square Root Estimation

$$\text{For } 64 < n < 81: \quad 8 < \sqrt{n} < 9$$

Example: $\sqrt{70} \approx 8.4$ (actual: $8.37...$)

---

## 📐 SECTION 3: UPPER AND LOWER BOUNDS

### Core Formulas

$$\boxed{\text{Lower Bound} = \text{Value} - \frac{\text{Rounding Unit}}{2}}$$

$$\boxed{\text{Upper Bound} = \text{Value} + \frac{\text{Rounding Unit}}{2}}$$

### Quick Reference: Rounding Units

| Rounding To | Unit | Half Unit |
|-------------|------|-----------|
| Nearest 100 | 100 | 50 |
| Nearest 10 | 10 | 5 |
| Nearest 1 | 1 | 0.5 |
| Nearest 0.1 (1 d.p.) | 0.1 | 0.05 |
| Nearest 0.01 (2 d.p.) | 0.01 | 0.005 |
| 1 s.f. | Varies | — |
| 2 s.f. | Varies | — |

### Examples: Finding Bounds

| Given | Rounding Unit | Lower Bound | Upper Bound |
|-------|---------------|-------------|-------------|
| 8 cm (nearest cm) | 1 | 7.5 cm | 8.5 cm |
| 12.3 (1 d.p.) | 0.1 | 12.25 | 12.35 |
| 3000 (1 s.f.) | 1000 | 2500 | 3500 |
| 470 (2 s.f.) | 10 | 465 | 475 |

###  Key Reminders
- Upper bound is **exclusive**: $LB \leq x < UB$
- Error interval: Use inequality notation
- Measurement implies rounding to that precision

---

## Combining Bounds: Operation Rules

### Quick Reference Table

| Operation | Lower Bound | Upper Bound |
|-----------|-------------|-------------|
| $A + B$ | $LB_A + LB_B$ | $UB_A + UB_B$ |
| $A - B$ | $LB_A - UB_B$ | $UB_A - LB_B$ |
| $A \times B$ | $LB_A \times LB_B$ | $UB_A \times UB_B$ |
| $A \div B$ | $LB_A \div UB_B$ | $UB_A \div LB_B$ |

###  Critical Rules
- **Subtraction**: "Lower minus Upper" for min, "Upper minus Lower" for max
- **Division**: "Lower ÷ Upper" for min, "Upper ÷ Lower" for max

---

## Percentage Error

$$\boxed{\text{Percentage Error} = \frac{\text{Half Unit}}{\text{Measured Value}} \times 100\%}$$

### Example
Length = 25 cm (nearest cm)
- Half unit = 0.5 cm
- $\text{Percentage Error} = \frac{0.5}{25} \times 100\% = 2\%$

---

## 🎯 EXAM QUICK TIPS

### Common Command Words
| Command | Action Required |
|---------|-----------------|
| Calculate | Show method, give answer |
| Estimate | Round sensibly, show working |
| Write down | No working needed |
| Show that | Prove with clear steps |
| Give your answer to... | Round appropriately |

### Accuracy Rules
- **Default**: 3 significant figures
- **Show more in working** than final answer
- **Match precision** of given data for bounds questions

### Time-Saving Strategies
1. Set up a bounds table before combining
2. Check calculator mode immediately
3. Estimate first to catch errors
4. Use memory for multi-step calculations

---

## 📝 Checklist Before Exam

- [ ] Can find LB and UB for any rounding type
- [ ] Know operation rules for combining bounds
- [ ] Can estimate using 1 significant figure
- [ ] Know perfect squares up to $15^2$
- [ ] Comfortable with all calculator functions
- [ ] Can express error intervals as inequalities
- [ ] Can calculate percentage error

---

## 🔄 Quick Memory Aid: Bounds Operations

**"SLIM-DUMB" for finding extremes:**

| | Lower (Minimum) | Upper (Maximum) |
|---|-----------------|-----------------|
| **S**ubtract | **L**ower − **U**pper | **U**pper − **L**ower |
| **M**ultiply | **L**ower × **L**ower | **U**pper × **U**pper |
| **D**ivide | **L**ower ÷ **U**pper | **U**pper ÷ **L**ower |

**For Addition**: Just add LBs and UBs directly (straightforward)

---

*Pearson Edexcel IGCSE Mathematics - Number 5 Revision Synopsis*
