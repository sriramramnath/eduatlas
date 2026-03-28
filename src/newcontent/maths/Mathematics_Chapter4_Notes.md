# Chapter 4: Numbers 4 - Concise Synopsis

##  Pearson Edexcel IGCSE Mathematics - Complete Study Notes

---

## PART A: COMPOUND PERCENTAGES

### 1. Understanding Compound Percentage Change

**Definition:** A compound percentage change occurs when a percentage change is applied repeatedly over multiple periods. The result of each period becomes the starting value for the next period.

> **Key Insight:** Unlike simple percentage change, compound change means the percentage is calculated on the **new amount** each time, not the original amount.

---

### 2. The Compound Percentage Formula

#### Derivation of the Formula

Starting with an initial value $P$:

**For an increase of $r\%$ applied $n$ times:**

After 1st period: $P \times \left(1 + \frac{r}{100}\right)$

After 2nd period: $P \times \left(1 + \frac{r}{100}\right) \times \left(1 + \frac{r}{100}\right) = P \times \left(1 + \frac{r}{100}\right)^2$

After $n$ periods: $P \times \left(1 + \frac{r}{100}\right)^n$

**For a decrease of $r\%$ applied $n$ times:**

After $n$ periods: $P \times \left(1 - \frac{r}{100}\right)^n$

---

### 3. Master Formula

$$\boxed{\text{Final Amount} = P \times \left(1 \pm \frac{r}{100}\right)^n}$$

Where:
- $P$ = Principal (initial amount)
- $r$ = percentage rate
- $n$ = number of time periods
- $+$ for increase, $-$ for decrease

---

### 4. Worked Examples

#### Example 1: Compound Interest (Basic)
**Question:** £5000 is invested at 4% compound interest per annum for 3 years. Calculate the final amount.

**Solution:**
$$\text{Final Amount} = 5000 \times \left(1 + \frac{4}{100}\right)^3$$
$$= 5000 \times (1.04)^3$$
$$= 5000 \times 1.124864$$
$$= £5624.32$$

> ** Method 2 - Step by Step:**
> - Year 1: $5000 \times 1.04 = £5200$
> - Year 2: $5200 \times 1.04 = £5408$
> - Year 3: $5408 \times 1.04 = £5624.32$

---

#### Example 2: Compound Depreciation
**Question:** A car costs £18000 and depreciates at 15% per year. Find its value after 4 years.

**Solution:**
$$\text{Final Value} = 18000 \times \left(1 - \frac{15}{100}\right)^4$$
$$= 18000 \times (0.85)^4$$
$$= 18000 \times 0.52200625$$
$$= £9396.11 \text{ (to 2 d.p.)}$$

> ** Common Mistake:** Do NOT calculate $15\% \times 4 = 60\%$ and subtract from 100%. This gives $18000 \times 0.40 = £7200$ which is **incorrect**!

---

#### Example 3: Finding the Initial Amount
**Question:** After 3 years at 5% compound interest, an investment is worth £11576.25. Find the original investment.

**Solution:**
$$11576.25 = P \times (1.05)^3$$
$$P = \frac{11576.25}{(1.05)^3}$$
$$P = \frac{11576.25}{1.157625}$$
$$P = £10000$$

---

#### Example 4: Finding the Rate
**Question:** A population of 2000 grows to 2420 in 2 years. Find the annual percentage growth rate.

**Solution:**
$$2420 = 2000 \times \left(1 + \frac{r}{100}\right)^2$$
$$\frac{2420}{2000} = \left(1 + \frac{r}{100}\right)^2$$
$$1.21 = \left(1 + \frac{r}{100}\right)^2$$
$$\sqrt{1.21} = 1 + \frac{r}{100}$$
$$1.1 = 1 + \frac{r}{100}$$
$$\frac{r}{100} = 0.1$$
$$r = 10\%$$

---

#### Example 5: Finding the Time Period
**Question:** How long will it take for £1000 to exceed £1500 at 8% compound interest?

**Solution:**
$$1500 = 1000 \times (1.08)^n$$
$$1.5 = (1.08)^n$$

Using trial and improvement or logarithms:

| $n$ | $(1.08)^n$ |
|-----|------------|
| 5 | 1.469 |
| 6 | 1.587 |

$$\boxed{n = 6 \text{ years}}$$

After 5 years: $£1469.33$ (not enough)
After 6 years: $£1586.87$ (exceeds £1500)

---

### 5. Compound Interest vs Simple Interest

| Aspect | Simple Interest | Compound Interest |
|--------|----------------|-------------------|
| Interest calculated on | Original principal | Current amount |
| Formula | $I = P \times r \times t$ | $A = P(1+r)^n$ |
| Growth pattern | Linear | Exponential |
| Long-term returns | Lower | Higher |

**Example:** £1000 at 10% for 3 years

**Simple Interest:**
$$I = 1000 \times 0.10 \times 3 = £300$$
$$\text{Total} = £1300$$

**Compound Interest:**
$$A = 1000 \times (1.10)^3 = £1331$$

**Difference:** £31 more with compound interest

---

### 6. Different Compounding Periods

> **Key Concept:** Interest can be compounded more frequently than annually.

| Compounding Frequency | Times per Year | Modified Formula |
|-----------------------|----------------|------------------|
| Annually | 1 | $P\left(1 + \frac{r}{100}\right)^n$ |
| Semi-annually | 2 | $P\left(1 + \frac{r}{200}\right)^{2n}$ |
| Quarterly | 4 | $P\left(1 + \frac{r}{400}\right)^{4n}$ |
| Monthly | 12 | $P\left(1 + \frac{r}{1200}\right)^{12n}$ |
| Daily | 365 | $P\left(1 + \frac{r}{36500}\right)^{365n}$ |

**Example:** £10000 invested at 8% p.a. compounded quarterly for 2 years.

$$A = 10000 \times \left(1 + \frac{8}{400}\right)^{4 \times 2}$$
$$= 10000 \times (1.02)^8$$
$$= 10000 \times 1.171659$$
$$= £11716.59$$

---

### 7. Real-World Applications

#### a) House Price Inflation
**Question:** A house was bought for £180000. House prices rise by 6% annually. Find its value after 5 years.

$$V = 180000 \times (1.06)^5 = £240880.47$$

#### b) Car Depreciation
**Question:** A new car costs £25000 and depreciates at 20% in year 1 and 15% each subsequent year. Find its value after 3 years.

$$V = 25000 \times 0.80 \times (0.85)^2$$
$$= 25000 \times 0.80 \times 0.7225$$
$$= £14450$$

#### c) Bacterial Growth
**Question:** A bacteria culture doubles every 3 hours. Starting with 500 bacteria, how many after 12 hours?

Number of doubling periods: $\frac{12}{3} = 4$

$$N = 500 \times 2^4 = 500 \times 16 = 8000 \text{ bacteria}$$

---

## PART B: INVERSE PERCENTAGES

### 1. Understanding Inverse Percentages

**Definition:** Inverse percentage problems involve finding the **original value** when you are given the value **after** a percentage change has been applied.

> **Key Insight:** This is essentially "working backwards" through a percentage calculation.

---

### 2. The Inverse Percentage Concept

#### Scenario: After a 20% increase, a value is £240. What was the original?

**Forward thinking:**
$$\text{Original} \xrightarrow{+20\%} \text{New Value}$$
$$\text{Original} \times 1.20 = \text{New Value}$$

**Inverse thinking:**
$$\text{Original} = \frac{\text{New Value}}{1.20}$$

$$\text{Original} = \frac{240}{1.20} = £200$$

---

### 3. Master Formula for Inverse Percentages

$$\boxed{\text{Original Value} = \frac{\text{New Value}}{1 \pm \frac{r}{100}}}$$

Where:
- $+$ when the change was an increase
- $-$ when the change was a decrease

---

### 4. Worked Examples

#### Example 1: After a Percentage Increase
**Question:** After a 25% increase, a price is £75. Find the original price.

**Solution:**
$$\text{Original} = \frac{75}{1 + \frac{25}{100}} = \frac{75}{1.25} = £60$$

**Verification:** $60 \times 1.25 = £75$ ✓

> ** Common Mistake:** Do NOT calculate $75 - (0.25 \times 75) = 56.25$. This is wrong because you're finding 25% of the NEW value, not the ORIGINAL.

---

#### Example 2: After a Percentage Decrease
**Question:** After a 30% discount, a jacket costs £42. Find the original price.

**Solution:**
$$\text{Original} = \frac{42}{1 - \frac{30}{100}} = \frac{42}{0.70} = £60$$

**Verification:** $60 \times 0.70 = £42$ ✓

---

#### Example 3: VAT (Value Added Tax) Problems
**Question:** A TV costs £480 including 20% VAT. Find the price before VAT.

**Solution:**
$$\text{Price before VAT} = \frac{480}{1.20} = £400$$

**VAT amount:** $480 - 400 = £80$

---

#### Example 4: Multi-Step Inverse Percentage
**Question:** A car's value after depreciating at 15% per year for 3 years is £6141.25. Find its original value.

**Solution:**
$$\text{Original} = \frac{6141.25}{(1 - 0.15)^3}$$
$$= \frac{6141.25}{(0.85)^3}$$
$$= \frac{6141.25}{0.614125}$$
$$= £10000$$

---

#### Example 5: Finding the Original and Change Amount
**Question:** In a sale, all items are reduced by 35%. A coat now costs £52. Find:
a) The original price
b) The amount saved

**Solution:**

a) Original price:
$$\text{Original} = \frac{52}{0.65} = £80$$

b) Amount saved:
$$\text{Saving} = 80 - 52 = £28$$

**Alternative:** $80 \times 0.35 = £28$ ✓

---

#### Example 6: Successive Percentage Changes (Forward and Inverse)
**Question:** A price is increased by 15% then decreased by 10%. The final price is £103.50. Find the original price.

**Solution:**

Let original price = $P$

$$P \times 1.15 \times 0.90 = 103.50$$
$$P \times 1.035 = 103.50$$
$$P = \frac{103.50}{1.035} = £100$$

**Verification:**
- After 15% increase: $100 \times 1.15 = £115$
- After 10% decrease: $115 \times 0.90 = £103.50$ ✓

---

### 5. Reverse Percentage vs Forward Percentage

| Aspect | Forward Percentage | Reverse Percentage |
|--------|-------------------|-------------------|
| What we know | Original + rate | New value + rate |
| What we find | New value | Original |
| Operation | Multiply | Divide |
| Formula | $New = Original \times (1 \pm \frac{r}{100})$ | $Original = \frac{New}{1 \pm \frac{r}{100}}$ |

---

### 6. The "Unitary Method" Approach

**Example:** After a 40% increase, a number is 168. Find the original.

**Unitary Method:**
- 140% of original = 168
- 1% of original = $\frac{168}{140} = 1.2$
- 100% of original = $1.2 \times 100 = 120$

**Direct Method:**
$$Original = \frac{168}{1.40} = 120$$

Both methods give the same result! ✓

---

### 7. Profit and Loss Applications

#### Example 7: Profit Margin
**Question:** A shop sells a watch for £96, making a 20% profit on the cost price. Find the cost price.

**Solution:**
$$\text{Selling Price} = \text{Cost Price} \times (1 + \frac{20}{100})$$
$$\text{Cost Price} = \frac{96}{1.20} = £80$$

---

#### Example 8: Loss
**Question:** A trader sells an item for £153, making a 15% loss. Find the cost price.

**Solution:**
$$\text{Cost Price} = \frac{153}{0.85} = £180$$

---

### 8. Exam-Style Multi-Stage Problems

#### Example 9: Complex Real-World Problem
**Question:** A house was valued in 2020. It increased in value by 8% in 2021, then by 12% in 2022, and finally decreased by 5% in 2023. In 2023, the house is valued at £234,360. Find its 2020 value.

**Solution:**
$$\text{2020 Value} = \frac{234360}{1.08 \times 1.12 \times 0.95}$$
$$= \frac{234360}{1.14816}$$
$$= £204,167 \text{ (nearest pound)}$$

---

## PART C: ADVANCED TECHNIQUES & EXAM STRATEGIES

### 1. Equivalent Single Percentage Change

**Question:** A price increases by 20% then decreases by 20%. Is it back to the original?

**Solution:**
$$\text{Final} = Original \times 1.20 \times 0.80 = Original \times 0.96$$

This represents a **4% decrease** overall, not back to original!

> **Key Insight:** Two equal but opposite percentage changes do NOT cancel out!

---

### 2. Finding the Overall Percentage Change

**Method:**
$$\text{Overall Multiplier} = (1 + \frac{r_1}{100}) \times (1 + \frac{r_2}{100}) \times ...$$

**Example:** Price increases by 10% then by 15%. Overall percentage increase?

$$\text{Multiplier} = 1.10 \times 1.15 = 1.265$$

**Overall increase = 26.5%**

---

### 3. Using Multipliers Efficiently

| Percentage Change | Multiplier |
|-------------------|------------|
| Increase by 10% | 1.10 |
| Decrease by 10% | 0.90 |
| Increase by 25% | 1.25 |
| Decrease by 25% | 0.75 |
| Increase by 8% | 1.08 |
| Decrease by 8% | 0.92 |
| Increase by 100% | 2.00 |
| Decrease by 100% | 0.00 |

---

### 4. Calculator Tips for Edexcel IGCSE

1. **Store the multiplier:** For repeated calculations, store $(1 \pm \frac{r}{100})$ in memory
2. **Use the power key:** For compound interest, use $x^n$ or $x^y$ efficiently
3. **Check reasonableness:** Always verify your answer makes sense

---

### 5. Common Mistakes to Avoid

| ❌ Common Mistake | ✅ Correct Approach |
|-------------------|---------------------|
| Adding/subtracting percentages from result | Divide by the multiplier |
| $240 - 25\% = 180$ for reverse 25% increase | $\frac{240}{1.25} = 192$ |
| Simple interest formula for compound | Use $P(1+r)^n$ |
| Forgetting to convert % to decimal | $\frac{r}{100}$ not $\frac{r}{10}$ |
| Assuming $+r\%$ then $-r\%$ = no change | Calculate the combined multiplier |

---

## PART D: KEY FORMULAS SUMMARY

### Essential Formulas

| Formula | Use |
|---------|-----|
| $A = P\left(1+\frac{r}{100}\right)^n$ | Compound interest (growth) |
| $A = P\left(1-\frac{r}{100}\right)^n$ | Compound depreciation |
| $Original = \frac{New}{1+\frac{r}{100}}$ | Reverse percentage (after increase) |
| $Original = \frac{New}{1-\frac{r}{100}}$ | Reverse percentage (after decrease) |
| $Multiplier = 1 \pm \frac{r}{100}$ | Converting percentage to multiplier |
| $Percentage Change = \frac{New - Old}{Old} \times 100$ | Finding % change |

---

## PART E: EXAM FOCUS & STRATEGY

### 1. Frequently Tested Question Types

1. **Compound interest calculations** (every exam series)
2. **Depreciation problems** (vehicles, machinery, technology)
3. **Reverse percentage** (VAT, profit/loss, sale prices)
4. **Comparison of investment options**
5. **Finding rate or time period**
6. **Real-world contexts** (population, house prices, investments)

---

### 2. Command Words Guide

| Command Word | What to Do |
|--------------|------------|
| **Calculate** | Show working, give exact or rounded answer |
| **Find** | Similar to calculate, may need explanation |
| **Work out** | Show full method |
| **Explain** | Give mathematical reason |
| **Compare** | Calculate both, then state difference/conclusion |
| **Show that** | Work towards the given answer |

---

### 3. Mark Scheme Insights

- **M1 (Method mark):** For correct method shown
- **A1 (Accuracy mark):** For correct answer
- **M2:** For more complex methods
- **B1:** Independent mark for specific point

**Always show your working** - you can get method marks even with arithmetic errors!

---

### 4. Tips for Full Marks

1. ✅ Always show the multiplier you're using
2. ✅ Write down the formula before substituting
3. ✅ Check units and round appropriately
4. ✅ For reverse %, explicitly state "Dividing by 1.xx because..."
5. ✅ Verify your answer by working forwards

---

### 5. Time Management

| Question Type | Suggested Time |
|---------------|----------------|
| Basic compound calculation | 2-3 minutes |
| Reverse percentage | 2-3 minutes |
| Multi-step problem | 4-5 minutes |
| Comparison question | 4-5 minutes |

---

*📝 These notes cover all essential content for Pearson Edexcel IGCSE Mathematics Number 4 syllabus requirements.*
