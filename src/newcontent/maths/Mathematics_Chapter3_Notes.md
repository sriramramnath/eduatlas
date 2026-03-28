# Chapter 3: Numbers 3 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Specification A)

---

# Topics Covered
1. **Prime Factors**
2. **HCF and LCM**
3. **Ratio (Simplifying and Sharing)**

---

# 1. PRIME FACTORS

## 1.1 Understanding Prime Numbers

### Definition
A **prime number** is a natural number greater than 1 that has exactly two factors: 1 and itself.

### First 20 Prime Numbers
$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71$$

> ** Key Exam Note:** 1 is NOT a prime number. It has only one factor (itself).
> ** Key Exam Note:** 2 is the ONLY even prime number.

### Prime Factorisation
**Prime factorisation** is expressing a number as a product of its prime factors.

Every integer greater than 1 can be expressed uniquely as a product of prime powers. This is called the **Fundamental Theorem of Arithmetic**.

---

## 1.2 Methods for Finding Prime Factors

### Method 1: Factor Tree Method

**Example 1:** Find the prime factorisation of 84.

```
        84
       /  \
      6    14
     / \   / \
    2   3 2   7
```

**Solution:**
$$84 = 6 \times 14 = (2 \times 3) \times (2 \times 7) = 2 \times 2 \times 3 \times 7 = 2^2 \times 3 \times 7$$

**Step-by-step process:**
1. Start with the number at the top
2. Split into any two factors (not necessarily prime)
3. Continue splitting each composite number
4. Stop when all branches end in prime numbers
5. Collect all the prime factors at the ends of branches

---

### Method 2: Division Method (Ladder/Bus Stop Method)

**Example 2:** Find the prime factorisation of 180.

| Division | Result |
|----------|--------|
| 180 ÷ 2 = 90 | ✓ |
| 90 ÷ 2 = 45 | ✓ |
| 45 ÷ 3 = 15 | ✓ |
| 15 ÷ 3 = 5 | ✓ |
| 5 ÷ 5 = 1 | ✓ |

**Solution:**
$$180 = 2 \times 2 \times 3 \times 3 \times 5 = 2^2 \times 3^2 \times 5$$

**Step-by-step process:**
1. Divide by the smallest prime factor (start with 2)
2. Continue dividing by the same prime until it no longer divides exactly
3. Move to the next prime factor
4. Continue until the quotient is 1
5. Write all prime factors in index form

---

## 1.3 Worked Examples

### Example 3: Express 1000 as a product of prime factors.

**Method: Division Method**

| Division | Result |
|----------|--------|
| 1000 ÷ 2 = 500 | ✓ |
| 500 ÷ 2 = 250 | ✓ |
| 250 ÷ 2 = 125 | ✓ |
| 125 ÷ 5 = 25 | ✓ |
| 25 ÷ 5 = 5 | ✓ |
| 5 ÷ 5 = 1 | ✓ |

**Answer:**
$$1000 = 2^3 \times 5^3$$

---

### Example 4: Express 462 as a product of prime factors.

**Method: Division Method**

| Division | Result |
|----------|--------|
| 462 ÷ 2 = 231 | ✓ |
| 231 ÷ 3 = 77 | ✓ |
| 77 ÷ 7 = 11 | ✓ |
| 11 ÷ 11 = 1 | ✓ |

**Answer:**
$$462 = 2 \times 3 \times 7 \times 11$$

---

> ** Key Exam Insight:** Always write your final answer in index form (powers) unless the question states otherwise. This shows you understand the concept of repeated factors.

---

## 1.4 Using Prime Factorisation to Find the Number of Factors

### Formula
If $n = p^a \times q^b \times r^c$ where $p, q, r$ are prime factors, then:
$$\text{Number of factors of } n = (a+1)(b+1)(c+1)$$

### Example 5: Find the number of factors of 180.

From earlier: $180 = 2^2 \times 3^2 \times 5$

$$\text{Number of factors} = (2+1)(2+1)(1+1) = 3 \times 3 \times 2 = 18$$

**Verification:** The factors of 180 are:
$$1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30, 36, 45, 60, 90, 180$$

Count: 18 factors ✓

---

# 2. HIGHEST COMMON FACTOR (HCF) AND LOWEST COMMON MULTIPLE (LCM)

## 2.1 Definitions

### Highest Common Factor (HCF)
The **HCF** of two or more numbers is the largest number that divides exactly into all of them.

Also known as:
- Greatest Common Divisor (GCD)
- Greatest Common Factor (GCF)

### Lowest Common Multiple (LCM)
The **LCM** of two or more numbers is the smallest number that is a multiple of all of them.

---

## 2.2 Methods for Finding HCF and LCM

### Method 1: Listing Method (For Small Numbers)

**Example 6:** Find the HCF and LCM of 12 and 18.

**Finding HCF:**
- Factors of 12: 1, 2, 3, 4, 6, 12
- Factors of 18: 1, 2, 3, 6, 9, 18
- Common factors: 1, 2, 3, 6
- **HCF = 6**

**Finding LCM:**
- Multiples of 12: 12, 24, 36, 48, 60, ...
- Multiples of 18: 18, 36, 54, 72, ...
- Common multiples: 36, 72, 108, ...
- **LCM = 36**

---

### Method 2: Prime Factorisation Method (For Larger Numbers)

**Example 7:** Find the HCF and LCM of 84 and 180.

**Step 1: Find prime factorisations**
$$84 = 2^2 \times 3 \times 7$$
$$180 = 2^2 \times 3^2 \times 5$$

**Step 2: For HCF**
- Take the **lowest power** of each common prime factor
- Common prime factors: 2 and 3
- HCF $= 2^2 \times 3^1 = 4 \times 3 = 12$

**Step 3: For LCM**
- Take the **highest power** of each prime factor (including those not common)
- LCM $= 2^2 \times 3^2 \times 5 \times 7 = 4 \times 9 \times 5 \times 7 = 1260$

**Answer:** HCF = 12, LCM = 1260

---

### Method 3: Venn Diagram Method

**Example 8:** Find the HCF and LCM of 60 and 84.

**Step 1: Find prime factorisations**
$$60 = 2^2 \times 3 \times 5$$
$$84 = 2^2 \times 3 \times 7$$

**Step 2: Create a Venn diagram**

```
        60           84
       ┌───────┬───────┐
       │   5   │   7   │
       │       │       │
       │  2²   │       │
       │       │       │
       │   3   │       │
       └───────┴───────┘
          Common
```

**Step 3: Calculate HCF and LCM**
- **HCF** = Product of numbers in the intersection = $2^2 \times 3 = 12$
- **LCM** = Product of ALL numbers in the Venn diagram = $2^2 \times 3 \times 5 \times 7 = 420$

---

## 2.3 Important Relationship

### HCF × LCM = Product of Numbers

For two numbers $a$ and $b$:
$$\text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b$$

**Verification with Example 7:**
- HCF(84, 180) = 12
- LCM(84, 180) = 1260
- HCF × LCM = 12 × 1260 = 15120
- Product = 84 × 180 = 15120 ✓

> ** Important:** This relationship only works for TWO numbers. It does NOT apply to three or more numbers!

---

## 2.4 Worked Examples

### Example 9: Find the HCF and LCM of 72, 96, and 120.

**Step 1: Prime factorisations**
$$72 = 2^3 \times 3^2$$
$$96 = 2^5 \times 3$$
$$120 = 2^3 \times 3 \times 5$$

**Step 2: Find HCF**
- Take lowest power of common primes
- Common primes: 2 and 3
- HCF $= 2^3 \times 3^1 = 8 \times 3 = 24$

**Step 3: Find LCM**
- Take highest power of each prime
- Primes: 2, 3, 5
- LCM $= 2^5 \times 3^2 \times 5 = 32 \times 9 \times 5 = 1440$

**Answer:** HCF = 24, LCM = 1440

---

### Example 10: HCF and LCM Word Problem

**Problem:** Two lighthouses flash their lights at intervals of 12 seconds and 18 seconds respectively. If they flash together at midnight, after how many seconds will they next flash together?

**Analysis:**
- We need to find when both intervals coincide
- This is a LCM problem

**Solution:**
- Multiples of 12: 12, 24, 36, 48, ...
- Multiples of 18: 18, 36, 54, ...
- LCM(12, 18) = 36

**Answer:** They will flash together again after 36 seconds.

---

### Example 11: Finding Numbers Given HCF and LCM

**Problem:** The HCF of two numbers is 15 and their LCM is 180. One of the numbers is 45. Find the other number.

**Solution:**
Using the relationship: HCF × LCM = Product of numbers

$$15 \times 180 = 45 \times x$$
$$2700 = 45x$$
$$x = \frac{2700}{45} = 60$$

**Verification:**
- 45 = 15 × 3 = 3² × 5
- 60 = 15 × 4 = 2² × 3 × 5
- HCF = 3 × 5 = 15 ✓
- LCM = 2² × 3² × 5 = 180 ✓

**Answer:** The other number is 60.

---

## 2.5 Common Mistakes to Avoid

| Mistake | Correct Approach |
|---------|------------------|
| Adding powers instead of taking lowest/highest | For HCF take **lowest** power, for LCM take **highest** power |
| Confusing HCF with LCM | HCF = **divides into**, LCM = **multiple of** |
| Using the product formula for 3+ numbers | Only valid for TWO numbers |
| Forgetting to include non-common primes in LCM | Include ALL primes at their highest power |
| Writing prime factors in expanded form | Always write in index form for clarity |

---

# 3. RATIO

## 3.1 Understanding Ratio

### Definition
A **ratio** is a comparison of two or more quantities of the same kind, expressed in the same units.

### Key Properties
1. Ratios have no units (they cancel out)
2. Ratios can be simplified by dividing all terms by their HCF
3. Equivalent ratios are obtained by multiplying/dividing all terms by the same number

### Notation
- Using colon: $a : b$ (read as "a to b")
- Using fraction: $\frac{a}{b}$

---

## 3.2 Simplifying Ratios

### Rules for Simplification
1. Convert all quantities to the same units (if needed)
2. Find the HCF of all numbers in the ratio
3. Divide each term by the HCF
4. Express in simplest form with colons

### Example 12: Simplifying Integer Ratios

**Simplify 24 : 36 : 48**

**Solution:**
- HCF of 24, 36, 48 = 12
- Divide each by 12: $\frac{24}{12} : \frac{36}{12} : \frac{48}{12}$
- **Answer: 2 : 3 : 4**

---

### Example 13: Simplifying with Different Units

**Simplify 2.5 kg : 750 g**

**Step 1: Convert to same units**
- 2.5 kg = 2500 g
- Ratio becomes 2500 g : 750 g

**Step 2: Simplify**
- HCF of 2500 and 750 = 250
- $\frac{2500}{250} : \frac{750}{250} = 10 : 3$

**Answer: 10 : 3**

---

### Example 14: Simplifying with Fractions

**Simplify $\frac{1}{2} : \frac{1}{3} : \frac{1}{4}$**

**Step 1: Find LCM of denominators**
- LCM of 2, 3, 4 = 12

**Step 2: Multiply all terms by the LCM**
$$\frac{1}{2} \times 12 : \frac{1}{3} \times 12 : \frac{1}{4} \times 12$$
$$= 6 : 4 : 3$$

**Step 3: Check if further simplification possible**
- HCF of 6, 4, 3 = 1
- Already in simplest form

**Answer: 6 : 4 : 3**

---

### Example 15: Simplifying Decimal Ratios

**Simplify 0.45 : 0.75**

**Method 1: Multiply by 100 to clear decimals**
$$45 : 75$$

**Method 2: Simplify**
- HCF of 45 and 75 = 15
- $\frac{45}{15} : \frac{75}{15} = 3 : 5$

**Answer: 3 : 5**

---

## 3.3 Sharing in a Ratio

### Basic Principle
When sharing a quantity in the ratio $a : b$, the total number of parts is $a + b$.

### Steps for Sharing
1. Add the parts of the ratio to find the total number of parts
2. Divide the total quantity by the number of parts to find one part
3. Multiply each share by the number of parts it receives

---

### Example 16: Basic Sharing

**Share £240 in the ratio 3 : 5**

**Solution:**
- Total parts = 3 + 5 = 8
- One part = £240 ÷ 8 = £30
- First share = 3 × £30 = £90
- Second share = 5 × £30 = £150

**Verification:** £90 + £150 = £240 ✓

**Answer: £90 and £150**

---

### Example 17: Three-Way Sharing

**Share 360 kg in the ratio 2 : 3 : 4**

**Solution:**
- Total parts = 2 + 3 + 4 = 9
- One part = 360 ÷ 9 = 40 kg
- First share = 2 × 40 = 80 kg
- Second share = 3 × 40 = 120 kg
- Third share = 4 × 40 = 160 kg

**Verification:** 80 + 120 + 160 = 360 kg ✓

**Answer: 80 kg, 120 kg, and 160 kg**

---

### Example 18: Sharing with Context

**Problem:** Ahmed and Bella share some money in the ratio 5 : 3. Ahmed receives £120 more than Bella. How much do they each receive?

**Solution:**
- Ahmed : Bella = 5 : 3
- Difference in parts = 5 - 3 = 2 parts
- 2 parts = £120
- 1 part = £120 ÷ 2 = £60
- Ahmed = 5 × £60 = £300
- Bella = 3 × £60 = £180

**Verification:** £300 - £180 = £120 ✓

**Answer: Ahmed receives £300, Bella receives £180**

---

### Example 19: Finding the Original Quantity

**Problem:** A sum of money is shared between Tom, Dick, and Harry in the ratio 2 : 3 : 5. Harry receives £150. Find the total sum of money.

**Solution:**
- Tom : Dick : Harry = 2 : 3 : 5
- Harry's 5 parts = £150
- 1 part = £150 ÷ 5 = £30
- Total parts = 2 + 3 + 5 = 10
- Total sum = 10 × £30 = £300

**Answer: £300**

---

## 3.4 Combining Ratios

### When to Combine Ratios
When two ratios share a common element, they can be combined to form a three-way ratio.

### Example 20: Combining Ratios

**Problem:** The ratio of apples to oranges is 2 : 3. The ratio of oranges to pears is 4 : 5. Find the ratio of apples to oranges to pears.

**Solution:**
- Apples : Oranges = 2 : 3
- Oranges : Pears = 4 : 5

**Step 1: Make the 'oranges' term the same in both ratios**
- LCM of 3 and 4 = 12
- Multiply first ratio by 4: Apples : Oranges = 8 : 12
- Multiply second ratio by 3: Oranges : Pears = 12 : 15

**Step 2: Combine**
- Apples : Oranges : Pears = 8 : 12 : 15

**Answer: 8 : 12 : 15**

---

## 3.5 Ratio Word Problems

### Example 21: Age Problem

**Problem:** The ratio of a father's age to his son's age is 7 : 2. The father is 35 years old. How old was the father when the son was born?

**Solution:**
- Father : Son = 7 : 2
- Father's 7 parts = 35 years
- 1 part = 35 ÷ 7 = 5 years
- Son's age = 2 × 5 = 10 years

**Finding when son was born:**
- Age difference = 35 - 10 = 25 years
- Father's age when son was born = 35 - 25 = 10 years... Wait, that's not right!

**Correction:**
- Age difference = 35 - 10 = 25 years
- This means the father was 25 years old when the son was born

**Answer: The father was 25 years old when the son was born.**

---

### Example 22: Money Problem with Change

**Problem:** Sam and Tina have money in the ratio 4 : 5. Sam spends £20 and Tina receives £20. They now have money in the ratio 2 : 3. How much did each have originally?

**Solution:**
Let Sam have $4x$ and Tina have $5x$ originally.

After changes:
- Sam has $4x - 20$
- Tina has $5x + 20$

New ratio: $\frac{4x - 20}{5x + 20} = \frac{2}{3}$

Cross multiply:
$$3(4x - 20) = 2(5x + 20)$$
$$12x - 60 = 10x + 40$$
$$2x = 100$$
$$x = 50$$

**Original amounts:**
- Sam = 4 × 50 = £200
- Tina = 5 × 50 = £250

**Verification:**
- After changes: Sam = £180, Tina = £270
- New ratio = 180 : 270 = 18 : 27 = 2 : 3 ✓

**Answer: Sam had £200, Tina had £250**

---

## 3.6 Maps and Scales

### Scale Ratio
A map scale of 1 : 50000 means 1 cm on the map represents 50000 cm in real life.

### Example 23: Map Scale Problem

**Problem:** On a map with scale 1 : 25000, two towns are 6.4 cm apart. Find the actual distance in kilometres.

**Solution:**
- Map distance = 6.4 cm
- Scale = 1 : 25000
- Actual distance = 6.4 × 25000 = 160000 cm

**Converting to kilometres:**
$$160000 \text{ cm} = 1600 \text{ m} = 1.6 \text{ km}$$

**Answer: 1.6 km**

---

### Example 24: Finding the Scale

**Problem:** A model car is 15 cm long. The actual car is 4.5 m long. Find the scale of the model in the form 1 : n.

**Solution:**
- Convert to same units: 4.5 m = 450 cm
- Ratio = 15 : 450
- Simplify: $\frac{15}{15} : \frac{450}{15} = 1 : 30$

**Answer: Scale is 1 : 30**

---

## 3.7 Common Mistakes with Ratio

| Mistake | Example | Correction |
|---------|---------|------------|
| Not simplifying fully | 12 : 18 → 6 : 9 | Should be 2 : 3 |
| Adding instead of multiplying parts | 2 : 3 with total 50 → 2 + 3 = 5 parts ✓ | Some students wrongly divide by 5 and then add 2 + 3 |
| Forgetting to convert units | 2 kg : 500 g → 2 : 500 | Should be 2000 : 500 = 4 : 1 |
| Wrong share when finding difference | A : B = 3 : 2, A gets $60 more | Need to understand that difference is in parts |
| Confusing ratio and fraction | Ratio 3 : 5 means $\frac{3}{8}$ and $\frac{5}{8}$ | Ratio to fraction conversion requires total parts |

---

# EXAM FOCUS & STRATEGY

## Frequently Tested Question Types

### 1. Prime Factorisation
- Express a number as a product of prime factors
- Use prime factors to find HCF/LCM
- Find the number of factors

### 2. HCF and LCM Applications
- Word problems involving recurring events
- Finding unknowns given HCF and LCM
- Finding HCF/LCM of three or more numbers

### 3. Ratio Problems
- Simplifying ratios (with fractions, decimals, different units)
- Sharing in a ratio
- Finding one part given another part
- Combining ratios
- Map scales

---

## Typical Problem-Solving Patterns

### Pattern 1: Multi-Step HCF/LCM
Often you need to find prime factors first, then use them to find HCF and LCM.

**Strategy:** Always write prime factors in index form - it makes finding HCF/LCM easier.

### Pattern 2: Ratio with Context
Read carefully to identify:
- What is being compared
- Whether you're finding shares or the total
- Whether any quantities change

### Pattern 3: Working Backwards
Given the result of sharing, find the original amount.

**Strategy:** Find the value of "one part" first, then work backwards.

---

## Command Word Guidance

| Command Word | What It Means | How to Answer |
|--------------|---------------|---------------|
| **Find** | Calculate the value | Show all working, give final answer |
| **Calculate** | Work out using a method | Show the calculation clearly |
| **Write down** | State without working | Just give the answer |
| **Show that** | Prove the statement | Show all steps clearly |
| **Explain** | Give reasons | Use mathematical terminology |
| **Express** | Write in a different form | Convert as specified |

---

## How to Gain Full Marks

### For Prime Factorisation (2-3 marks)
1. Show the division process or factor tree clearly (M1)
2. Write the final answer in correct form (A1)
3. Include index notation where appropriate (A1)

### For HCF/LCM (3-4 marks)
1. Find prime factorisations of all numbers (M1)
2. Identify correct method (lowest powers for HCF, highest for LCM) (M1)
3. Calculate correctly (A1)
4. State final answers clearly (A1)

### For Ratio Problems (3-5 marks)
1. Show the total number of parts (M1)
2. Calculate the value of one part (M1)
3. Multiply to find each share (M1)
4. Check answer makes sense (sense check) (A1)
5. Include units in final answer (A1)

---

## Key Formulas to Memorize

| Formula | When to Use |
|---------|-------------|
| $\text{Number of factors} = (a+1)(b+1)(c+1)$ | When $n = p^a \times q^b \times r^c$ |
| $\text{HCF} \times \text{LCM} = a \times b$ | For TWO numbers only |
| $\text{One part} = \frac{\text{Total}}{\text{Sum of ratio terms}}$ | For sharing problems |
| $\text{Actual distance} = \text{Map distance} \times \text{Scale factor}$ | For map problems |

---

## Final Exam Tips

1. **Always show your working** - even if you can do it mentally
2. **Check your answer** - verify HCF × LCM = product for two numbers
3. **Include units** - missing units can lose marks
4. **Simplify fully** - ratios should be in lowest terms
5. **Use index notation** - $2^3$ rather than $2 \times 2 \times 2$
6. **Read the question carefully** - identify exactly what is being asked
7. **Time management** - don't spend too long on one question

---

*These notes are prepared according to the Pearson Edexcel IGCSE Mathematics Specification A syllabus requirements.*
