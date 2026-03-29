# Chapter 30: Sequences - Concise Synopsis
# UNIT 6: SEQUENCES - Quick Revision Synopsis

---

## 🎯 TOPIC OVERVIEW

| Sub-Topic | Importance | Typical Marks |
|---|---|---|
| Continuing sequences | ★★★ | 1-2 marks |
| Finding nth term (linear) | ★★★★★ | 2-4 marks |
| Finding nth term (quadratic) | ★★★★ | 3-5 marks |
| Arithmetic sequences | ★★★★★ | 3-6 marks |
| Sum of arithmetic sequence | ★★★★ | 4-6 marks |

---

## 📐 MASTER FORMULA TABLE

### Arithmetic Sequences

| Formula | Purpose | Variables |
|---|---|---|
| **$u_n = a + (n-1)d$** | nth term | $a$ = first term, $d$ = common diff |
| **$u_n = dn + c$** | Alternative form | $c = a - d$ |
| **$d = u_{n+1} - u_n$** | Common difference | Subtract consecutive terms |
| **$S_n = \frac{n}{2}(a + l)$** | Sum (when last term known) | $l$ = last term |
| **$S_n = \frac{n}{2}[2a + (n-1)d]$** | Sum (standard form) | Most commonly used |

### Quadratic Sequences

| Formula | Purpose |
|---|---|---|
| **$u_n = an^2 + bn + c$** | General quadratic form |
| **$a = \frac{\text{2nd difference}}{2}$** | Find leading coefficient |

---

## QUICK IDENTIFICATION RULES

### Identifying Sequence Type

| Pattern | Sequence Type | nth Term Contains |
|---|---|---|
| 1st difference constant | Linear/Arithmetic | $an + b$ |
| 2nd difference constant | Quadratic | $an^2 + bn + c$ |
| Ratio constant | Geometric | $ar^{n-1}$ |
| Term = sum of previous two | Fibonacci-type | No simple formula |

---

##  STEP-BY-STEP METHODS

### Method 1: Finding nth Term (Linear Sequence)

**Sequence:** $4, 7, 10, 13, 16, ...$

```
Step 1: Find common difference d
        d = 7 - 4 = 3

Step 2: nth term starts with dn
        u_n = 3n + ?

Step 3: Find constant term
        n = 1: 4 = 3(1) + c → c = 1

Answer: u_n = 3n + 1
```

---

### Method 2: Finding nth Term (Quadratic Sequence)

**Sequence:** $2, 5, 10, 17, 26, ...$

```
Step 1: Create difference table

Term:     2    5    10   17   26
1st diff:      3    5    7    9
2nd diff:           2    2    2

Step 2: Find a
        a = 2nd diff ÷ 2 = 2 ÷ 2 = 1
        So formula starts with n²

Step 3: Compare with n²
        n:      1    2    3    4    5
        Term:   2    5   10   17   26
        n²:     1    4    9   16   25
        Diff:   1    1    1    1    1

Step 4: Difference is constant = 1

Answer: u_n = n² + 1
```

---

### Method 3: Sum of Arithmetic Sequence

**Question:** Sum of first 20 terms of $3, 7, 11, 15, ...$

```
Given: a = 3, d = 4, n = 20

Formula: S_n = n/2[2a + (n-1)d]

S₂₀ = 20/2[2(3) + 19(4)]
S₂₀ = 10[6 + 76]
S₂₀ = 10 × 82
S₂₀ = 820
```

---

## 📊 COMMON SEQUENCES REFERENCE

| Name | Terms | nth Term |
|---|---|---|
| Natural numbers | $1, 2, 3, 4, ...$ | $n$ |
| Even numbers | $2, 4, 6, 8, ...$ | $2n$ |
| Odd numbers | $1, 3, 5, 7, ...$ | $2n - 1$ |
| Square numbers | $1, 4, 9, 16, ...$ | $n^2$ |
| Cube numbers | $1, 8, 27, 64, ...$ | $n^3$ |
| Triangular numbers | $1, 3, 6, 10, ...$ | $\frac{n(n+1)}{2}$ |
| Multiples of $k$ | $k, 2k, 3k, ...$ | $kn$ |
| Powers of 2 | $2, 4, 8, 16, ...$ | $2^n$ |

---

##  EXAM ALERT: COMMON MISTAKES

| Mistake | Wrong | Correct |
|---|---|---|
| Forgetting to check integer $n$ | "$n = 3.5$, so 20 is in sequence" | No, $n$ must be a positive integer |
| Wrong difference sign | $20, 17, 14, ...$ has $d = 3$ | $d = 17 - 20 = -3$ |
| Mixing formulas | $S_n = n(a + l)$ | $S_n = \frac{n}{2}(a + l)$ |
| Substituting wrong values | $u_n = 4n + 3$, find $u_4$ | $u_4 = 4(4) + 3 = 19$ ✓ |
| Finding $n$ incorrectly | $u_n = 5n - 2$, find which term = 43 | $5n - 2 = 43 → n = 9$ |

---

## 🎯 HIGH-YIELD EXAM TIPS

### Tip 1: The "Substitute and Check" Method
After finding nth term, **always verify** with at least 2 known terms.

### Tip 2: Finding if a Number is in a Sequence
1. Set $u_n$ = the number
2. Solve for $n$
3. If $n$ is a **positive integer**, the answer is YES

### Tip 3: Sum Formula Selection
- **Use $S_n = \frac{n}{2}(a+l)$** when you know the first and last term
- **Use $S_n = \frac{n}{2}[2a+(n-1)d]$** when you know $a$ and $d$

### Tip 4: Finding $u_n$ from $S_n$
$$u_n = S_n - S_{n-1}$$

### Tip 5: Negative Differences
For decreasing sequences like $50, 45, 40, ...$:
- $d = 45 - 50 = -5$
- $u_n = 50 + (n-1)(-5) = 50 - 5n + 5 = 55 - 5n$

---

## 📋 QUICK CHECKLIST

Before the exam, can you:

- [ ] Find the common difference of an arithmetic sequence?
- [ ] Write the nth term of a linear sequence?
- [ ] Find any specific term using the nth term?
- [ ] Calculate the sum of an arithmetic sequence?
- [ ] Determine if a number is in a sequence?
- [ ] Identify sequence type from differences?
- [ ] Find the nth term of a quadratic sequence?
- [ ] Solve problems involving "find the term equal to..."?

---

## 🔄 FORMULA DERIVATIONS (Understanding Why)

### Why is $u_n = a + (n-1)d$?

```
1st term: a
2nd term: a + d        (add d once)
3rd term: a + 2d       (add d twice)
4th term: a + 3d       (add d three times)
...
nth term: a + (n-1)d   (add d (n-1) times)
```

### Why is $S_n = \frac{n}{2}(a + l)$?

For sum $S = a_1 + a_2 + ... + a_n$:
- Write forwards: $S = a + (a+d) + (a+2d) + ... + l$
- Write backwards: $S = l + (l-d) + (l-2d) + ... + a$
- Add: $2S = n(a + l)$
- Therefore: $S = \frac{n}{2}(a + l)$

---

## 📈 TYPICAL EXAM QUESTION TYPES

| Type | Marks | Key Skills |
|---|---|---|
| Find next 2 terms | 1-2 | Pattern recognition |
| Find nth term (linear) | 2-3 | Difference method |
| Find nth term (quadratic) | 3-5 | Difference table |
| Find specific term | 2-3 | Substitute into formula |
| Is X in the sequence? | 2-3 | Solve for $n$, check integer |
| Find sum | 3-4 | Apply sum formula |
| Find $n$ given sum | 4-5 | Solve quadratic |

---

##  MEMORY AIDS

**For nth term (linear):** "Difference times n, plus the adjustment"

**For sum formula:** "Average of first and last, times the number of terms"
$$S_n = \text{average} \times \text{count} = \frac{a+l}{2} \times n$$

**For quadratic coefficient:** "Second difference, halved"

---

*This synopsis is designed for quick revision before exams. Refer to full notes for detailed explanations and worked examples.*
