# Chapter 19: Algebra 9 - Concise Synopsis
## Simultaneous Equations & Algebraic Proof

---

## SECTION A: MULTIPLE CHOICE QUESTIONS (10 marks)

**Answer all questions. Each question is worth 1 mark.**

---

### Question 1

The solution to the simultaneous equations:
$$\begin{cases} 2x + y = 7 \\ 3x - y = 8 \end{cases}$$

**A** $x = 3, y = 1$

**B** $x = 3, y = -1$

**C** $x = 1, y = 5$

**D** $x = -3, y = 1$

**Answer: A**

**Explanation:**
Adding the equations eliminates $y$:
$$2x + y + 3x - y = 7 + 8$$
$$5x = 15$$
$$x = 3$$

Substituting back: $2(3) + y = 7$, so $y = 1$

---

### Question 2

Which algebraic expression represents an odd number?

**A** $2n$

**B** $2n + 1$

**C** $n + 1$

**D** $3n$

**Answer: B**

**Explanation:**
An odd number is one more than an even number. Since even numbers are of the form $2n$, odd numbers are $2n + 1$ for integer $n$.

---

### Question 3

How many solutions does the system have?
$$\begin{cases} x^2 + y^2 = 25 \\ y = x + 7 \end{cases}$$

**A** 0

**B** 1

**C** 2

**D** Infinitely many

**Answer: A**

**Explanation:**
Substituting: $x^2 + (x+7)^2 = 25$
$x^2 + x^2 + 14x + 49 = 25$
$2x^2 + 14x + 24 = 0$
$x^2 + 7x + 12 = 0$

Discriminant: $49 - 48 = 1 > 0$, so 2 solutions... 

Let me recalculate: $x^2 + x^2 + 14x + 49 - 25 = 0$
$2x^2 + 14x + 24 = 0$
Discriminant: $196 - 192 = 4 > 0$

Actually, let me verify:
$y = x + 7$
If $y = 7$ (when $x = 0$), $x^2 + 49 \neq 25$

The line $y = x + 7$ passes through $(0, 7)$ and $(-7, 0)$.
The circle $x^2 + y^2 = 25$ has radius 5 centered at origin.

Distance from origin to line $x - y + 7 = 0$ is $\frac{|7|}{\sqrt{2}} \approx 4.95 < 5$, so line intersects circle.

Let me solve properly:
$x^2 + (x+7)^2 = 25$
$x^2 + x^2 + 14x + 49 = 25$
$2x^2 + 14x + 24 = 0$
$x^2 + 7x + 12 = 0$
$(x+3)(x+4) = 0$

So $x = -3$ or $x = -4$.

The answer should be **C (2 solutions)**.

**Corrected Answer: C**

**Corrected Explanation:**
$x^2 + (x+7)^2 = 25$ gives $x^2 + 7x + 12 = 0$
$(x+3)(x+4) = 0$
Two solutions: $x = -3, y = 4$ and $x = -4, y = 3$

---

### Question 4

What is the product of two consecutive integers $n$ and $n+1$ always divisible by?

**A** 3

**B** 4

**C** 2

**D** 5

**Answer: C**

**Explanation:**
Among any two consecutive integers, one must be even. Therefore, their product contains an even factor and is divisible by 2.

---

### Question 5

To prove "the sum of two even numbers is always even," you should start with:

**A** Let the two numbers be 4 and 6

**B** Let the two even numbers be $2n$ and $2m$

**C** Let the two numbers be $n$ and $m$

**D** Let the two odd numbers be $2n + 1$ and $2m + 1$

**Answer: B**

**Explanation:**
A proof requires general algebraic expressions. Using specific numbers (like 4 and 6) only verifies, not proves. The correct form for even numbers is $2n$ and $2m$ where $n, m$ are integers.

---

### Question 6

The simultaneous equations:
$$\begin{cases} 3x + 2y = 10 \\ 6x + 4y = 20 \end{cases}$$

have:

**A** No solution

**B** Exactly one solution

**C** Exactly two solutions

**D** Infinitely many solutions

**Answer: D**

**Explanation:**
Equation 2 is exactly twice equation 1. This means both equations represent the same line, so there are infinitely many solutions (all points on the line).

---

### Question 7

What is the algebraic expression for the sum of two consecutive odd numbers?

**A** $2n + (2n + 1) = 4n + 1$

**B** $(2n + 1) + (2n + 3) = 4n + 4$

**C** $2n + 2n + 2 = 4n + 2$

**D** $n + (n + 2) = 2n + 2$

**Answer: B**

**Explanation:**
Two consecutive odd numbers are of the form $2n + 1$ and $2n + 3$.
Their sum: $(2n+1) + (2n+3) = 4n + 4 = 4(n+1)$

Note: This is always divisible by 4.

---

### Question 8

For a line $y = mx + c$ to be tangent to the circle $x^2 + y^2 = r^2$, the discriminant of the resulting quadratic must be:

**A** Greater than zero

**B** Equal to zero

**C** Less than zero

**D** Equal to $r$

**Answer: B**

**Explanation:**
A tangent touches the circle at exactly one point. When substituting the line equation into the circle equation, we get a quadratic. For exactly one solution, the discriminant must equal zero.

---

### Question 9

Which statement disproves "All prime numbers are odd"?

**A** 3 is prime and odd

**B** 5 is prime and odd

**C** 2 is prime and even

**D** 4 is even and not prime

**Answer: C**

**Explanation:**
To disprove a universal statement, we need a counter-example. The statement claims ALL primes are odd. Finding 2, which is prime but even, disproves the statement.

---

### Question 10

The difference between the squares of two consecutive integers is:

**A** Always even

**B** Always odd

**C** Can be even or odd

**D** Always a perfect square

**Answer: B**

**Explanation:**
Let consecutive integers be $n$ and $n+1$.
$(n+1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$

This is of the form $2n + 1$, which is always odd.

---

## SECTION B: TRUE OR FALSE (10 marks)

**State whether each statement is TRUE or FALSE. If FALSE, provide the correct statement.**

---

### Question 11

**Statement:** "The product of three consecutive integers is always divisible by 6."

**Answer: TRUE**

**Explanation:**
Among three consecutive integers:
- At least one is even (divisible by 2)
- Exactly one is divisible by 3

Since 2 and 3 are coprime, the product is divisible by $2 \times 3 = 6$.

---

### Question 12

**Statement:** "The square of any even number is always odd."

**Answer: FALSE**

**Correction:** The square of any even number is always even.

**Explanation:**
Let even number = $2n$
$(2n)^2 = 4n^2 = 2(2n^2)$

This is a multiple of 2, so it's even.

---

### Question 13

**Statement:** "The sum of an odd number and an even number is always odd."

**Answer: TRUE**

**Explanation:**
Odd number = $2n + 1$, Even number = $2m$
Sum = $(2n + 1) + 2m = 2(n + m) + 1$

This is of the form $2k + 1$, which is odd.

---

### Question 14

**Statement:** "Two different linear equations always have exactly one solution."

**Answer: FALSE**

**Correction:** Two different linear equations can have zero, one, or infinitely many solutions.

**Explanation:**
- Parallel lines: no solution
- Intersecting lines: one solution
- Same line: infinitely many solutions

---

### Question 15

**Statement:** "If a line does not intersect a circle, the discriminant of the resulting equation is negative."

**Answer: TRUE**

**Explanation:**
When a line doesn't intersect a circle, the quadratic formed by substitution has no real solutions. This means the discriminant $b^2 - 4ac < 0$.

---

### Question 16

**Statement:** "The expression $n^2 + n$ is always even for any integer $n$."

**Answer: TRUE**

**Explanation:**
$n^2 + n = n(n + 1)$

This is the product of two consecutive integers. One of them must be even, so the product is always even.

---

### Question 17

**Statement:** "To disprove a statement, you need to find at least two counter-examples."

**Answer: FALSE**

**Correction:** To disprove a statement, you only need ONE counter-example.

**Explanation:**
A single counter-example is sufficient to show that a universal statement is not always true.

---

### Question 18

**Statement:** "A number of the form $6n + 1$ can be either odd or even depending on the value of $n$."

**Answer: FALSE**

**Correction:** A number of the form $6n + 1$ is always odd.

**Explanation:**
$6n + 1 = 2(3n) + 1$

This is always of the form $2k + 1$, which is odd, regardless of the value of $n$.

---

### Question 19

**Statement:** "The system $y = x^2$ and $y = x + 2$ has exactly two solutions."

**Answer: TRUE**

**Explanation:**
$x^2 = x + 2$
$x^2 - x - 2 = 0$
$(x-2)(x+1) = 0$

Two solutions: $x = 2, y = 4$ and $x = -1, y = 1$

---

### Question 20

**Statement:** "The product of two odd numbers is always odd."

**Answer: TRUE**

**Explanation:**
Let odd numbers be $2m + 1$ and $2n + 1$
$(2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$

This is of the form $2k + 1$, which is odd.

---

## SECTION C: STRUCTURED QUESTIONS

---

### Question 21 (4 marks)

Solve the simultaneous equations:
$$\begin{cases} 3x + 5y = 1 \\ 2x - 3y = 27 \end{cases}$$

**Solution:**

**Method: Elimination**

| Step | Mark | Working |
|------|------|---------|
| Multiply equation 1 by 3 | M1 | $9x + 15y = 3$ |
| Multiply equation 2 by 5 | M1 | $10x - 15y = 135$ |
| Add equations | M1 | $19x = 138$ |
| Solve for x | A1 | $x = \frac{138}{19}$ |

Wait, let me recalculate with cleaner numbers:

| Step | Mark | Working |
|------|------|---------|
| Multiply eq 1 by 2 | M1 | $6x + 10y = 2$ |
| Multiply eq 2 by 3 | M1 | $6x - 9y = 81$ |
| Subtract: $(6x+10y) - (6x-9y) = 2 - 81$ | M1 | $19y = -79$ |
| Solve for y | A1 | $y = -\frac{79}{19}$ |

These numbers are not nice. Let me verify the question has a cleaner solution.

Actually, let's use the given equations:
$3x + 5y = 1$ ... (1)
$2x - 3y = 27$ ... (2)

Multiply (1) by 3: $9x + 15y = 3$
Multiply (2) by 5: $10x - 15y = 135$
Add: $19x = 138$, $x = \frac{138}{19}$

Substituting: $3(\frac{138}{19}) + 5y = 1$
$\frac{414}{19} + 5y = 1$
$5y = 1 - \frac{414}{19} = \frac{19-414}{19} = \frac{-395}{19}$
$y = -\frac{395}{95} = -\frac{79}{19}$

**Final Answer:** $x = \frac{138}{19}, y = -\frac{79}{19}$

**Note:** These are exact values; the question may have been designed for exact fraction answers.

---

### Question 22 (5 marks)

Solve the simultaneous equations:
$$\begin{cases} y = x^2 - 4x + 3 \\ y = 2x - 6 \end{cases}$$

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Equate expressions for y | M1 | $x^2 - 4x + 3 = 2x - 6$ |
| Rearrange | M1 | $x^2 - 6x + 9 = 0$ |
| Factorise | M1 | $(x - 3)^2 = 0$ |
| Solve for x | A1 | $x = 3$ (repeated root) |
| Find y | A1 | $y = 2(3) - 6 = 0$ |

**Answer:** $x = 3, y = 0$

**Geometric interpretation:** The line is tangent to the parabola at the point $(3, 0)$.

---

### Question 23 (4 marks)

**Prove that the sum of three consecutive integers is always divisible by 3.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Define consecutive integers | M1 | Let three consecutive integers be $n$, $n+1$, $n+2$ where $n \in \mathbb{Z}$ |
| Find sum | M1 | Sum $= n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$ |
| Show divisibility | A1 | Since $n+1$ is an integer, $3(n+1)$ is a multiple of 3 |
| Conclusion | A1 | Therefore, the sum of three consecutive integers is always divisible by 3. **Q.E.D.** |

---

### Question 24 (6 marks)

The line $y = 2x + c$ is a tangent to the circle $x^2 + y^2 = 5$.

**Find the possible values of $c$.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Substitute line into circle | M1 | $x^2 + (2x+c)^2 = 5$ |
| Expand | M1 | $x^2 + 4x^2 + 4cx + c^2 = 5$ |
| Simplify | M1 | $5x^2 + 4cx + (c^2 - 5) = 0$ |
| Apply discriminant = 0 for tangent | M1 | $(4c)^2 - 4(5)(c^2-5) = 0$ |
| Simplify | A1 | $16c^2 - 20c^2 + 100 = 0$ |
| | | $-4c^2 + 100 = 0$ |
| | | $c^2 = 25$ |
| Find c values | A1 | $c = \pm 5$ |

**Answer:** $c = 5$ or $c = -5$

**Verification:** When $c = 5$: $5x^2 + 20x + 20 = 0$ → $x^2 + 4x + 4 = 0$ → $(x+2)^2 = 0$ ✓

---

### Question 25 (4 marks)

**Prove that $n^2 - 1$ is divisible by 8 when $n$ is an odd integer greater than 1.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Define odd number | M1 | Let $n = 2k + 1$ where $k \geq 1$ (since $n > 1$) |
| Substitute and simplify | M1 | $n^2 - 1 = (2k+1)^2 - 1 = 4k^2 + 4k + 1 - 1 = 4k^2 + 4k = 4k(k+1)$ |
| Analyse factor | M1 | $k(k+1)$ is the product of two consecutive integers, so it is even |
| | | Let $k(k+1) = 2m$ for some integer $m$ |
| Show divisibility | A1 | $n^2 - 1 = 4(2m) = 8m$ |
| | | Since $m$ is an integer, $n^2 - 1$ is divisible by 8 |
| Conclusion | A1 | Therefore, $n^2 - 1$ is divisible by 8 when $n$ is an odd integer greater than 1. **Q.E.D.** |

---

### Question 26 (5 marks)

A rectangle has perimeter 26 cm. When the length is increased by 3 cm and the width is decreased by 2 cm, the area is unchanged.

**Find the dimensions of the original rectangle.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Define variables | M1 | Let length $= l$ cm, width $= w$ cm |
| Form equation 1 (perimeter) | M1 | $2l + 2w = 26$, so $l + w = 13$ |
| Form equation 2 (areas equal) | M1 | $lw = (l+3)(w-2)$ |
| | | $lw = lw - 2l + 3w - 6$ |
| | | $2l - 3w = -6$ |
| Solve system | | From $l + w = 13$: $l = 13 - w$ |
| | | $2(13-w) - 3w = -6$ |
| | | $26 - 2w - 3w = -6$ |
| | | $-5w = -32$ |
| Find width | A1 | $w = 6.4$ cm |
| Find length | A1 | $l = 13 - 6.4 = 6.6$ cm |

**Answer:** Length = 6.6 cm, Width = 6.4 cm

**Verification:**
- Perimeter: $2(6.6) + 2(6.4) = 13.2 + 12.8 = 26$ ✓
- Original area: $6.6 \times 6.4 = 42.24$ cm²
- New area: $9.6 \times 4.4 = 42.24$ cm² ✓

---

### Question 27 (3 marks)

**Disprove the statement: "$n^2 + n + 11$ is always prime for all positive integers $n$."**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Test values | M1 | Try $n = 10$: $100 + 10 + 11 = 121 = 11^2$ |
| Counter-example | A1 | When $n = 10$, we get $121 = 11 \times 11$ |
| Conclusion | A1 | Since 121 is not prime, the statement is false. |

**Alternative counter-examples:** $n = 11$ gives $121 + 11 + 11 = 143 = 11 \times 13$

---

### Question 28 (5 marks)

**Prove that the difference of the squares of two consecutive even numbers is always divisible by 4.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Define consecutive even numbers | M1 | Let consecutive even numbers be $2n$ and $2n+2$ where $n \in \mathbb{Z}$ |
| Set up difference of squares | M1 | $(2n+2)^2 - (2n)^2$ |
| Expand | M1 | $= 4n^2 + 8n + 4 - 4n^2 = 8n + 4$ |
| Factorise | A1 | $= 4(2n + 1)$ |
| Show divisibility | A1 | Since $2n + 1$ is an integer, $4(2n+1)$ is divisible by 4 |
| Conclusion | | Therefore, the difference is always divisible by 4. **Q.E.D.** |

**Note:** The difference is actually always divisible by 4 but NOT always divisible by 8, since $2n+1$ is odd.

---

### Question 29 (6 marks)

The curve $y = x^2 - 2x + 4$ and the line $y = mx - 2$ intersect at two distinct points.

**Find the range of possible values of $m$.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Equate expressions | M1 | $x^2 - 2x + 4 = mx - 2$ |
| Rearrange to quadratic | M1 | $x^2 - (2+m)x + 6 = 0$ |
| For two distinct points: discriminant > 0 | M1 | $(2+m)^2 - 4(1)(6) > 0$ |
| Expand | M1 | $m^2 + 4m + 4 - 24 > 0$ |
| | | $m^2 + 4m - 20 > 0$ |
| Solve inequality | A1 | Find roots: $m = \frac{-4 \pm \sqrt{16+80}}{2} = \frac{-4 \pm \sqrt{96}}{2}$ |
| | | $m = \frac{-4 \pm 4\sqrt{6}}{2} = -2 \pm 2\sqrt{6}$ |
| State range | A1 | $m < -2 - 2\sqrt{6}$ or $m > -2 + 2\sqrt{6}$ |
| | | $m < -2 - 4.90...$ or $m > -2 + 4.90...$ |
| | | Approximately: $m < -6.90$ or $m > 2.90$ |

**Answer:** $m < -2 - 2\sqrt{6}$ or $m > -2 + 2\sqrt{6}$

---

### Question 30 (4 marks)

**Prove that if $n$ is a positive integer, then $n^3 - n$ is divisible by 6.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Factorise expression | M1 | $n^3 - n = n(n^2 - 1) = n(n-1)(n+1)$ |
| Identify structure | M1 | This is the product of three consecutive integers |
| Divisibility by 2 | M1 | Among any three consecutive integers, at least one is even, so the product is divisible by 2 |
| Divisibility by 3 | A1 | Among any three consecutive integers, exactly one is a multiple of 3 |
| Combine | A1 | Since the product is divisible by both 2 and 3 (which are coprime), it is divisible by 6 |
| Conclusion | | Therefore, $n^3 - n$ is divisible by 6. **Q.E.D.** |

---

## SECTION D: EXTENSION QUESTIONS

---

### Question 31 (5 marks)

**Prove that the sum of the squares of any three consecutive odd numbers is always divisible by 3.**

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Define three consecutive odd numbers | M1 | $(2n-1), (2n+1), (2n+3)$ |
| Find sum of squares | M1 | $(2n-1)^2 + (2n+1)^2 + (2n+3)^2$ |
| Expand | M1 | $= (4n^2 - 4n + 1) + (4n^2 + 4n + 1) + (4n^2 + 12n + 9)$ |
| | | $= 12n^2 + 12n + 11$ |
| Factorise | M1 | $= 12(n^2 + n) + 11$ |
| | | Wait, this isn't divisible by 3... |
| | | Let me recalculate: |
| | | $= 12n^2 + 12n + 11 = 12(n^2 + n) + 11$ |
| | | $= 12n(n+1) + 11$ |
| | | This is $12 \times$ even number $+ 11$ |
| | | $= 24k + 11$ for some integer $k$ |
| | | This leaves remainder 2 when divided by 3 |

Let me verify with actual numbers:
- $n = 1$: odds are 1, 3, 5. Squares: 1 + 9 + 25 = 35. 35 ÷ 3 = 11 remainder 2 ❌

The statement appears to be FALSE.

Let me check if the question was meant differently...

**Counter-example:**
For $n = 1$: consecutive odd numbers are 1, 3, 5
Sum of squares = $1 + 9 + 25 = 35$
$35 = 3 \times 11 + 2$ (not divisible by 3)

**Answer:** The statement is **FALSE**. 

A valid counter-example is the consecutive odd numbers 1, 3, 5 whose squares sum to 35, which is not divisible by 3.

---

### Question 32 (6 marks)

Find all values of $k$ for which the line $y = kx + 1$ does not intersect the curve $y = x^2 + 3x + 4$.

**Solution:**

| Step | Mark | Working |
|------|------|---------|
| Set up equation | M1 | $kx + 1 = x^2 + 3x + 4$ |
| Rearrange | M1 | $x^2 + (3-k)x + 3 = 0$ |
| For no intersection: discriminant < 0 | M1 | $(3-k)^2 - 4(1)(3) < 0$ |
| Expand | M1 | $9 - 6k + k^2 - 12 < 0$ |
| | | $k^2 - 6k - 3 < 0$ |
| Solve the inequality | A1 | Roots: $k = \frac{6 \pm \sqrt{36+12}}{2} = \frac{6 \pm \sqrt{48}}{2}$ |
| | | $k = \frac{6 \pm 4\sqrt{3}}{2} = 3 \pm 2\sqrt{3}$ |
| Determine range | A1 | For $k^2 - 6k - 3 < 0$: |
| | | $3 - 2\sqrt{3} < k < 3 + 2\sqrt{3}$ |
| | | $3 - 3.46 < k < 3 + 3.46$ |
| | | $-0.46 < k < 6.46$ (approximately) |

**Answer:** $3 - 2\sqrt{3} < k < 3 + 2\sqrt{3}$

---

## MARKING SCHEME SUMMARY

| Question | Marks | Key Points |
|----------|-------|------------|
| 1-10 | 10 × 1 | MCQ - One mark each |
| 11-20 | 10 × 1 | True/False with correction |
| 21 | 4 | Method marks for elimination; accuracy for values |
| 22 | 5 | Equating, rearranging, factorising, solving |
| 23 | 4 | Definition, sum, factorisation, conclusion |
| 24 | 6 | Substitution, discriminant, solving |
| 25 | 4 | Odd number form, algebraic manipulation |
| 26 | 5 | Variables, equations, solving, interpretation |
| 27 | 3 | Testing, counter-example, conclusion |
| 28 | 5 | Even number forms, difference, factorisation |
| 29 | 6 | Quadratic setup, discriminant, inequality |
| 30 | 4 | Factorisation, divisibility arguments |
| 31 | 5 | Counter-example or proof verification |
| 32 | 6 | Setup, discriminant, inequality solution |

**Total: 68 marks**

---

## EXAM TIPS SUMMARY

### For Simultaneous Equations:
1. ✅ Always verify solutions in BOTH original equations
2. ✅ Check if answer makes sense (positive where context requires)
3. ✅ For non-linear systems, find ALL solutions
4. ✅ Use discriminant to determine number of solutions
5. ✅ Consider geometric interpretation when helpful

### For Algebraic Proof:
1. ✅ Use general algebraic forms, not specific numbers
2. ✅ Define variables clearly ("where $n$ is an integer")
3. ✅ Show ALL steps of working
4. ✅ End with a clear conclusion statement
5. ✅ For disproof, ONE counter-example is sufficient
6. ✅ Memorise standard forms for even, odd, multiples

---

*Practice makes perfect! Good luck with your IGCSE Mathematics examination.*
