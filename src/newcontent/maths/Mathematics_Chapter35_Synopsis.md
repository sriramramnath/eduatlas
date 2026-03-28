# Chapter 35: Handling Data 2 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics - Quick Revision Synopsis

---

# 1. FREQUENCY TABLES - Key Points

## 1.1 Basic Concepts

- **Frequency** = number of times a value occurs
- **Total frequency** = $\sum f = n$
- Always verify that frequencies sum to the total number of data items

## 1.2 Types of Frequency Tables

| Type | Use When | Example |
|------|----------|---------|
| Simple (ungrouped) | Limited distinct values | Number of pets: 0, 1, 2, 3 |
| Grouped | Large range or continuous data | Heights: 150–159, 160–169 |

## 1.3 Key Terminology

| Term | Definition | Example |
|------|------------|---------|
| Class | Group/interval of values | 10–19 |
| Class Limits | Stated boundaries | 10 and 19 |
| Class Boundaries | True mathematical limits | 9.5 and 19.5 |
| Class Width | Upper boundary – Lower boundary | $19.5 - 9.5 = 10$ |
| Midpoint | $(L + U) \div 2$ | $(10 + 19) \div 2 = 14.5$ |

---

## 1.4 Essential Formulas

| Formula | Description |
|---------|-------------|
| $\text{Midpoint} = \dfrac{\text{Lower} + \text{Upper}}{2}$ | For finding class midpoints |
| $\bar{x} = \dfrac{\sum fx}{\sum f}$ | Mean from frequency table |
| $\text{Cumulative Frequency} = \text{Running total}$ | Add frequencies progressively |
| $\text{Relative Frequency} = \dfrac{f}{n}$ | Proportion of total |
| $\text{Percentage Frequency} = \dfrac{f}{n} \times 100\%$ | As percentage |

---

## 1.5 Finding Class Boundaries

**Rule:** Find midpoint between upper limit of one class and lower limit of next class.

| Class | Next Class Starts | Gap | Boundary Adjustment |
|-------|-------------------|-----|---------------------|
| 10–19 | 20 | 1 | Add/subtract 0.5 |
| 10–14 | 15 | 1 | Add/subtract 0.5 |
| 0–9 | 10 | 1 | Add/subtract 0.5 |

**Example:** For classes 10–19, 20–29:
- Lower boundary = $10 - 0.5 = 9.5$
- Upper boundary = $19 + 0.5 = 19.5$

---

## 1.6 Statistics from Grouped Data

### Mean (Estimated)
$$\bar{x} = \frac{\sum fx}{\sum f}$$

**Steps:**
1. Find midpoint ($x$) for each class
2. Calculate $fx$ for each class
3. Sum $fx$ and $f$ columns
4. Divide $\sum fx$ by $\sum f$

### Modal Class
- Class with the **highest frequency**

### Median Class
- Class containing the $\frac{n}{2}$th value
- Use cumulative frequency to locate

### Median by Interpolation
$$\text{Median} = L + \left(\frac{\frac{n}{2} - CF}{f}\right) \times w$$

Where:
- $L$ = lower class boundary
- $CF$ = cumulative frequency before median class
- $f$ = frequency of median class
- $w$ = class width

---

## 1.7 Cumulative Frequency

| Position | Quartile | Meaning |
|----------|----------|---------|
| $\dfrac{n}{4}$ | $Q_1$ (Lower Quartile) | 25% below |
| $\dfrac{n}{2}$ | $Q_2$ (Median) | 50% below |
| $\dfrac{3n}{4}$ | $Q_3$ (Upper Quartile) | 75% below |
| $Q_3 - Q_1$ | IQR | Spread of middle 50% |

---

# 2. DISCRETE VS CONTINUOUS DATA

## 2.1 Quick Classification

| Discrete | Continuous |
|----------|------------|
| **COUNTED** | **MEASURED** |
| Specific values only | Any value in a range |
| Gaps between values | No gaps possible |
| Often whole numbers | Can be decimals |
| Examples: people, goals, dice | Examples: height, time, weight |

## 2.2 The "2.5 Test"

**Ask:** "Can this data value be 2.5?"

| Data | 2.5 possible? | Type |
|------|:-------------:|------|
| Number of goals | ❌ No | Discrete |
| Height in metres | ✅ Yes | Continuous |
| Number of students | ❌ No | Discrete |
| Time in hours | ✅ Yes | Continuous |

## 2.3 Common Examples

### Discrete Data
- Number of children, cars, books, goals
- Shoe size
- Dice roll, coin flip result
- Number of pages
- Score on a test (whole marks)

### Continuous Data
- Height, weight, length, distance
- Time, speed, temperature
- Volume, area, mass
- Age (when measured precisely)

---

## 2.4 Graph Types

| Data Type | Correct Graph | Key Feature |
|-----------|---------------|-------------|
| Discrete | Bar Chart | **Gaps between bars** |
| Continuous | Histogram | **No gaps between bars** |

## 2.5 Histogram Frequency Density

$$\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$$

$$\text{Frequency} = \text{Frequency Density} \times \text{Class Width}$$

> **Key Point:** In histograms, **area** represents frequency.

---

# 3. FORMULA REFERENCE TABLE

| Statistic | Formula | Notes |
|-----------|---------|-------|
| Mean (ungrouped) | $\dfrac{\sum x}{n}$ | Sum of values ÷ count |
| Mean (grouped) | $\dfrac{\sum fx}{\sum f}$ | Uses midpoints |
| Midpoint | $\dfrac{L + U}{2}$ | Average of limits |
| Median position | $\dfrac{n}{2}$ | For grouped data |
| $Q_1$ position | $\dfrac{n}{4}$ | Lower quartile |
| $Q_3$ position | $\dfrac{3n}{4}$ | Upper quartile |
| IQR | $Q_3 - Q_1$ | Interquartile range |
| Relative Frequency | $\dfrac{f}{n}$ | Proportion |
| Percentage Frequency | $\dfrac{f}{n} \times 100$ | As percentage |
| Frequency Density | $\dfrac{f}{w}$ | For histograms |

---

# 4. QUICK RULES

## For Frequency Tables

1. ✓ Always check $\sum f = n$ (total data items)
2. ✓ Midpoints needed for mean calculations
3. ✓ Modal class = highest frequency
4. ✓ Use cumulative frequency for median/quartiles

## For Class Boundaries

1. ✓ Find gap between consecutive classes
2. ✓ Divide gap by 2
3. ✓ Subtract from lower limit, add to upper limit

## For Data Classification

1. ✓ Counted → Discrete
2. ✓ Measured → Continuous
3. ✓ Can be 2.5? → Continuous
4. ✓ Whole numbers only → Discrete

## For Graphs

1. ✓ Discrete data → Bar chart (gaps)
2. ✓ Continuous data → Histogram (no gaps)
3. ✓ Unequal class widths → Use frequency density

---

# 5. EXAM CHECKLIST

## Before the Exam, Know How To:

- [ ] Construct frequency tables from raw data
- [ ] Find midpoints of class intervals
- [ ] Calculate class boundaries
- [ ] Estimate mean from grouped frequency table
- [ ] Identify modal class
- [ ] Find median class using cumulative frequency
- [ ] Calculate cumulative frequency
- [ ] Distinguish discrete from continuous data
- [ ] Choose appropriate graph type
- [ ] Calculate frequency density for histograms
- [ ] Work with inequality notation ($a \leq x < b$)

## Common Exam Questions:

| Type | Marks | Key Skills |
|------|-------|------------|
| Complete frequency table | 2–3 | Tallying, counting |
| Find mean | 3–4 | Midpoints, $\bar{x} = \frac{\sum fx}{\sum f}$ |
| Find modal/median class | 1–2 | Highest frequency, cumulative freq |
| Classify data | 1–2 | Discrete vs continuous reasoning |
| Construct cumulative freq | 2–3 | Running totals |

---

# 6. KEY POINTS TO REMEMBER

> **⚡ Mean from grouped data is an ESTIMATE** (we assume values at midpoint)

> **⚡ Sum of relative frequencies = 1** (use as a check)

> **⚡ Last cumulative frequency = total frequency** (always check)

> **⚡ Discrete → Gaps in bar chart; Continuous → No gaps in histogram**

> **⚡ Class width ≠ (upper limit − lower limit) for continuous data; use boundaries**

> **⚡ For histograms with unequal widths, use frequency density**

---

*End of Handling Data 2 Synopsis*
