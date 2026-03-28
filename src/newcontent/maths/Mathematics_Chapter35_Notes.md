# Chapter 35: Handling Data 2 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics - Comprehensive Study Notes

---

# 1. FREQUENCY TABLES

## 1.1 What is a Frequency Table?

A **frequency table** is a method of organizing data by showing how often each value (or range of values) occurs.

> **📌 Definition:** Frequency is the number of times a particular value or event occurs in a set of data.

### Structure of a Frequency Table

| Category/Value | Frequency |
|----------------|-----------|
| Value 1        | $f_1$     |
| Value 2        | $f_2$     |
| ...            | ...       |
| **Total**      | $\sum f$  |

---

## 1.2 Types of Frequency Tables

### (a) Simple Frequency Tables (Ungrouped)

Used for **discrete data** with a limited number of distinct values.

**Example:** Number of siblings students have

| Number of siblings ($x$) | Frequency ($f$) |
|--------------------------|-----------------|
| 0                        | 8               |
| 1                        | 12              |
| 2                        | 15              |
| 3                        | 4               |
| 4                        | 1               |
| **Total**                | **40**          |

### (b) Grouped Frequency Tables

Used when data has a **large range** or is **continuous**.

**Example:** Heights of students

| Height (cm) | Frequency |
|-------------|-----------|
| 150 – 159   | 5         |
| 160 – 169   | 12        |
| 170 – 179   | 18        |
| 180 – 189   | 10        |
| 190 – 199   | 3         |
| **Total**   | **48**    |

---

## 1.3 Key Terminology for Grouped Data

| Term | Definition | Example |
|------|------------|---------|
| **Class** | A group or interval of data values | 150–159 cm |
| **Class Interval** | The range of values in a class | 9 cm (159 – 150 = 9) |
| **Class Boundaries** | The true limits of a class | 149.5 cm to 159.5 cm |
| **Class Width** | The difference between upper and lower class boundaries | $159.5 - 149.5 = 10$ cm |
| **Midpoint (Class Mark)** | The average of class boundaries | $\frac{150 + 159}{2} = 154.5$ cm |
| **Lower Limit** | The smallest value in a class | 150 |
| **Upper Limit** | The largest value in a class | 159 |

---

## 1.4 Finding Class Boundaries

> **Key Rule:** Class boundaries are found by finding the midpoint between the upper limit of one class and the lower limit of the next class.

**Example:** Find class boundaries for: 10–19, 20–29, 30–39

**Method:**
- Gap between classes = $20 - 19 = 1$
- Half the gap = $0.5$
- Subtract 0.5 from lower limits, add 0.5 to upper limits

| Class | Lower Boundary | Upper Boundary | Class Width |
|-------|----------------|----------------|-------------|
| 10–19 | 9.5            | 19.5           | 10          |
| 20–29 | 19.5           | 29.5           | 10          |
| 30–39 | 29.5           | 39.5           | 10          |

> ** Common Mistake:** Don't confuse class limits with class boundaries! Limits are the stated values; boundaries are the true mathematical limits.

---

## 1.5 Calculating Midpoints

**Formula:**
$$\text{Midpoint} = \frac{\text{Lower limit} + \text{Upper limit}}{2}$$

Or using boundaries:
$$\text{Midpoint} = \frac{\text{Lower boundary} + \text{Upper boundary}}{2}$$

**Worked Example:**

| Weight (kg) | Frequency | Midpoint ($x$) | $f \times x$ |
|-------------|-----------|----------------|--------------|
| 40 – 49     | 6         | $\frac{40+49}{2} = 44.5$ | $6 \times 44.5 = 267$ |
| 50 – 59     | 14        | 54.5           | $14 \times 54.5 = 763$ |
| 60 – 69     | 20        | 64.5           | $20 \times 64.5 = 1290$ |
| 70 – 79     | 8         | 74.5           | $8 \times 74.5 = 596$ |
| 80 – 89     | 2         | 84.5           | $2 \times 84.5 = 169$ |

---

## 1.6 Cumulative Frequency

**Cumulative frequency** is a running total of frequencies through the classes.

> **📌 Definition:** The cumulative frequency for a class is the sum of all frequencies up to and including that class.

### Constructing a Cumulative Frequency Table

**Example:** Test scores

| Score | Frequency | Cumulative Frequency |
|-------|-----------|----------------------|
| 0–10  | 3         | 3                    |
| 11–20 | 7         | $3 + 7 = 10$         |
| 21–30 | 15        | $10 + 15 = 25$       |
| 31–40 | 12        | $25 + 12 = 37$       |
| 41–50 | 8         | $37 + 8 = 45$        |

**Key Values:**
- The last cumulative frequency equals the **total frequency** (45)
- This is denoted as **$n$** or **$\sum f$**

### Finding Quartiles from Cumulative Frequency

| Quartile | Position | Interpretation |
|----------|----------|----------------|
| $Q_1$ (Lower Quartile) | $\frac{n}{4}$ | 25% of data below this value |
| $Q_2$ (Median) | $\frac{n}{2}$ | 50% of data below this value |
| $Q_3$ (Upper Quartile) | $\frac{3n}{4}$ | 75% of data below this value |
| IQR (Interquartile Range) | $Q_3 - Q_1$ | Spread of middle 50% of data |

---

## 1.7 Relative Frequency and Percentage Frequency

**Relative Frequency:**
$$\text{Relative Frequency} = \frac{\text{Frequency of class}}{\text{Total frequency}}$$

**Percentage Frequency:**
$$\text{Percentage Frequency} = \text{Relative Frequency} \times 100\%$$

**Worked Example:**

| Eye Colour | Frequency | Relative Frequency | Percentage |
|------------|-----------|--------------------| -----------|
| Brown      | 24        | $\frac{24}{60} = 0.4$ | 40% |
| Blue       | 18        | $\frac{18}{60} = 0.3$ | 30% |
| Green      | 12        | $\frac{12}{60} = 0.2$ | 20% |
| Other      | 6         | $\frac{6}{60} = 0.1$ | 10% |
| **Total**  | **60**    | **1.0**            | **100%** |

> ** Exam Insight:** The sum of all relative frequencies should always equal 1. Use this to check your calculations!

---

## 1.8 Finding Mean from Grouped Frequency Table

**Formula:**
$$\bar{x} = \frac{\sum fx}{\sum f}$$

Where:
- $x$ = midpoint of each class
- $f$ = frequency of each class
- $\sum fx$ = sum of (frequency × midpoint)

**Worked Example:**

Find the mean mass of 50 apples from this data:

| Mass (g) | Frequency ($f$) | Midpoint ($x$) | $fx$ |
|----------|-----------------|----------------|------|
| 80–99    | 5               | 89.5           | 447.5 |
| 100–119  | 12              | 109.5          | 1314 |
| 120–139  | 18              | 129.5          | 2331 |
| 140–159  | 10              | 149.5          | 1495 |
| 160–179  | 5               | 169.5          | 847.5 |
| **Total**| **50**          |                | **6435** |

$$\bar{x} = \frac{6435}{50} = 128.7 \text{ g (to 1 d.p.)}$$

> ** Important:** This is an **estimate** of the mean because we assume all values in a class are at the midpoint.

---

## 1.9 Finding the Mode (Modal Class) from Grouped Data

For grouped data, we identify the **modal class** (the class with the highest frequency) rather than a specific modal value.

**Example:**

| Time (minutes) | Frequency |
|----------------|-----------|
| 0–9            | 4         |
| 10–19          | 15        | ← Modal class |
| 20–29          | 12        |
| 30–39          | 6         |

**Modal class: 10–19 minutes** (highest frequency = 15)

---

## 1.10 Finding the Median from Grouped Frequency

**Method:**
1. Find the median position: $\frac{n}{2}$ or $\frac{n+1}{2}$
2. Use cumulative frequency to locate which class contains the median
3. Interpolate within that class

**Interpolation Formula:**
$$\text{Median} = L + \left(\frac{\frac{n}{2} - CF}{f}\right) \times w$$

Where:
- $L$ = lower class boundary of median class
- $n$ = total frequency
- $CF$ = cumulative frequency before median class
- $f$ = frequency of median class
- $w$ = class width

**Worked Example:**

| Score | Frequency | Cumulative Frequency |
|-------|-----------|----------------------|
| 0–20  | 4         | 4                    |
| 21–40 | 8         | 12                   |
| 41–60 | 15        | 27                   | ← Median class |
| 61–80 | 10        | 37                   |
| 81–100| 3         | 40                   |

**Solution:**
- $n = 40$, so $\frac{n}{2} = 20$
- Median class is 41–60 (cumulative freq reaches 27)
- $L = 40.5$, $CF = 12$, $f = 15$, $w = 20$

$$\text{Median} = 40.5 + \left(\frac{20 - 12}{15}\right) \times 20$$
$$= 40.5 + \left(\frac{8}{15}\right) \times 20$$
$$= 40.5 + 10.67$$
$$= 51.17 \approx 51.2$$

---

# 2. DISCRETE VS CONTINUOUS DATA

## 2.1 Types of Data

Data can be classified into two main categories:

```
DATA
  │
  ├── QUANTITATIVE (Numerical)
  │     │
  │     ├── DISCRETE
  │     │
  │     └── CONTINUOUS
  │
  └── QUALITATIVE (Categorical)
```

---

## 2.2 Discrete Data

> **📌 Definition:** Discrete data can only take **specific, separate values** (usually whole numbers). There are gaps between possible values.

### Characteristics:
- Can be **counted**
- Finite number of possible values (or countably infinite)
- Cannot take values "between" the data points
- Often involves words like "number of..."

### Examples:

| Discrete Data | Possible Values |
|---------------|-----------------|
| Number of children | 0, 1, 2, 3, ... |
| Shoe size | 3, 3.5, 4, 4.5, ... |
| Number of cars | 0, 1, 2, 3, ... |
| Dice score | 1, 2, 3, 4, 5, 6 |
| Goals scored | 0, 1, 2, 3, ... |
| Number of siblings | 0, 1, 2, 3, ... |

### Representation of Discrete Data:
- **Bar charts** (gaps between bars)
- **Frequency tables** (ungrouped or grouped)
- **Pictograms**
- **Vertical line charts**

> ** Key Point:** Bar charts for discrete data have **gaps** between the bars!

---

## 2.3 Continuous Data

> **📌 Definition:** Continuous data can take **any value within a range**. There are infinitely many possible values between any two values.

### Characteristics:
- Can be **measured**
- Infinite number of possible values
- Can take decimal/fractional values
- Often involves words like "time," "length," "mass," "temperature"

### Examples:

| Continuous Data | Possible Values |
|-----------------|-----------------|
| Height | Any value (e.g., 175.3 cm) |
| Weight | Any value (e.g., 68.75 kg) |
| Time | Any value (e.g., 3.25 seconds) |
| Temperature | Any value (e.g., 23.6°C) |
| Distance | Any value (e.g., 5.83 km) |
| Volume | Any value (e.g., 250.5 ml) |

### Representation of Continuous Data:
- **Histograms** (no gaps between bars)
- **Frequency polygons**
- **Cumulative frequency graphs**
- **Grouped frequency tables**

> ** Key Point:** Histograms for continuous data have **no gaps** between the bars!

---

## 2.4 Comparison Table: Discrete vs Continuous

| Feature | Discrete Data | Continuous Data |
|---------|---------------|-----------------|
| **Nature** | Countable | Measurable |
| **Values** | Specific, separate | Any value in a range |
| **Examples** | People, cars, goals | Height, weight, time |
| **Between values** | Gaps exist | No gaps possible |
| **Graph type** | Bar chart (with gaps) | Histogram (no gaps) |
| **Decimals** | Sometimes (e.g., shoe size) | Always possible |
| **Frequency table** | Can use exact values | Must use intervals |

---

## 2.5 Identifying Data Types: Decision Tree

```
Can the data be counted?
        │
        ├── YES → Can it take ANY value in a range?
        │              │
        │              ├── NO → DISCRETE
        │              │
        │              └── YES → CONTINUOUS
        │
        └── Is it measured rather than counted?
                       │
                       ├── YES → CONTINUOUS
                       │
                       └── NO → DISCRETE (or categorical)
```

### Quick Test Questions:

**Ask yourself:** "Can the value be 2.5?"

| Data Type | Can value be 2.5? | Reasoning |
|-----------|-------------------|-----------|
| Number of goals | ❌ No | Cannot score 2.5 goals → Discrete |
| Height in metres | ✅ Yes | Can be 2.5 m tall → Continuous |
| Number of students | ❌ No | Cannot have 2.5 students → Discrete |
| Time in hours | ✅ Yes | Can take 2.5 hours → Continuous |

---

## 2.6 Grouped Frequency Tables: Discrete vs Continuous

### For Discrete Data:

When grouping discrete data, use **discrete class intervals**:

| Number of items | Frequency |
|-----------------|-----------|
| 0–4             | 8         |
| 5–9             | 15        |
| 10–14           | 12        |
| 15–19           | 5         |

Here, values like 4.5 are **not possible**.

### For Continuous Data:

When grouping continuous data, use **continuous class intervals** with clear boundaries:

| Mass (kg) | Frequency |
|-----------|-----------|
| 0 ≤ m < 10 | 5         |
| 10 ≤ m < 20 | 12        |
| 20 ≤ m < 30 | 18        |
| 30 ≤ m < 40 | 10        |

Here, any value like 9.5 kg or 19.8 kg is **possible**.

---

## 2.7 Inequalities in Class Intervals

For continuous data, class intervals are often written using inequalities:

| Notation | Meaning | Includes |
|----------|---------|----------|
| $a \leq x < b$ | From $a$ up to but not including $b$ | All values from $a$ to just below $b$ |
| $a < x \leq b$ | Greater than $a$, up to and including $b$ | All values just above $a$ to $b$ |
| $a \leq x \leq b$ | From $a$ to $b$ inclusive | All values from $a$ to $b$ |

### Standard Convention:
The most common notation is $a \leq x < b$, where:
- Lower bound is **inclusive** (included)
- Upper bound is **exclusive** (not included)

This ensures no overlap between classes.

**Example:**
| Class | Meaning |
|-------|---------|
| $0 \leq t < 10$ | $t$ can be 0, 5.5, 9.999... but NOT 10 |
| $10 \leq t < 20$ | $t$ can be 10, 15.3, 19.999... but NOT 20 |

---

## 2.8 Determining Class Width

### For Discrete Classes:

If classes are given as 0–9, 10–19, 20–29:

$$\text{Class Width} = (\text{Upper limit} - \text{Lower limit}) + 1$$

**Example:** Width of 10–19 = $(19 - 10) + 1 = 10$

### For Continuous Classes:

If classes are given as $0 \leq x < 10$, $10 \leq x < 20$:

$$\text{Class Width} = \text{Upper boundary} - \text{Lower boundary}$$

**Example:** Width of $10 \leq x < 20$ = $20 - 10 = 10$

---

## 2.9 Histograms vs Bar Charts

### Bar Charts (Discrete Data):
- Gaps between bars
- Bars have equal width (usually)
- Height represents frequency
- Labels are discrete categories

### Histograms (Continuous Data):
- No gaps between bars
- Bars can have unequal widths
- **Area** represents frequency
- Horizontal axis shows continuous scale

**Key Formula for Histograms:**
$$\text{Frequency} = \text{Frequency Density} \times \text{Class Width}$$

$$\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$$

---

## 2.10 Practical Worked Examples

### Example 1: Classifying Data

Classify each as discrete or continuous:

| Data | Classification | Reason |
|------|----------------|--------|
| (a) Number of pages in a book | Discrete | Can only be whole numbers |
| (b) Weight of a parcel | Continuous | Can be any value |
| (c) Temperature in °C | Continuous | Can take any value |
| (d) Number of petals | Discrete | Countable, whole numbers |
| (e) Time to complete a race | Continuous | Can be any value |
| (f) Score on a dice | Discrete | Only 1, 2, 3, 4, 5, 6 |

### Example 2: Constructing a Frequency Table

**Question:** The masses (in kg) of 20 parcels are recorded:
2.3, 1.8, 4.5, 3.2, 2.9, 1.5, 4.1, 3.8, 2.1, 1.9, 4.8, 3.5, 2.7, 1.2, 3.9, 4.2, 2.5, 3.1, 1.7, 4.4

Construct a grouped frequency table using classes 1–2, 2–3, etc.

**Solution:**

| Mass (kg) | Tally | Frequency |
|-----------|-------|-----------|
| 1–2       | ||||  | 4         |
| 2–3       | ||||  | 5         |
| 3–4       | ||||  | 5         |
| 4–5       | ||||| | 6         |
| **Total** |       | **20**    |

> ** Note:** Since mass is continuous, a value of exactly 2 kg would need clear class boundaries.

### Example 3: Finding Statistics from Grouped Data

**Question:** Find the estimated mean and identify the modal class:

| Time (s) | Frequency |
|----------|-----------|
| 10–20    | 8         |
| 20–30    | 15        |
| 30–40    | 22        |
| 40–50    | 10        |
| 50–60    | 5         |

**Solution:**

| Time (s) | $f$ | Midpoint ($x$) | $fx$ |
|----------|-----|----------------|------|
| 10–20    | 8   | 15             | 120  |
| 20–30    | 15  | 25             | 375  |
| 30–40    | 22  | 35             | 770  |
| 40–50    | 10  | 45             | 450  |
| 50–60    | 5   | 55             | 275  |
| **Total**| 60  |                | 1990 |

**Mean:** $\bar{x} = \frac{1990}{60} = 33.17$ seconds (to 2 d.p.)

**Modal class:** 30–40 seconds (highest frequency = 22)

---

# 3. EXAM FOCUS & STRATEGY

## 3.1 Frequently Tested Question Types

| Type | Description | Marks |
|------|-------------|-------|
| 1. Construct frequency table | From raw data to grouped/ungrouped | 2–4 |
| 2. Find midpoints | Calculate midpoints for grouped data | 1–2 |
| 3. Estimate mean | From grouped frequency table | 3–4 |
| 4. Identify modal class | Find class with highest frequency | 1–2 |
| 5. Find median class | Using cumulative frequency | 2–3 |
| 6. Classify data | Discrete vs continuous identification | 1–2 |
| 7. Cumulative frequency | Build and interpret tables | 2–4 |
| 8. Calculate statistics | Mean, median, quartiles from tables | 4–6 |

---

## 3.2 Command Words Guide

| Command Word | What to Do |
|--------------|------------|
| **Calculate** | Show working, give exact or specified accuracy |
| **Find** | Similar to calculate, may need estimation |
| **Estimate** | Use appropriate method, often with grouped data |
| **Complete** | Fill in missing values in a table |
| **Construct** | Create a table/graph from scratch |
| **Explain** | Give reasons with mathematical justification |
| **Compare** | State similarities and differences |
| **Write down** | No working needed (but show it anyway!) |

---

## 3.3 Common Mistakes to Avoid

| Mistake | Correct Approach |
|---------|------------------|
| Using limits instead of midpoints for mean | Always use midpoints for grouped data |
| Forgetting to check total frequency | Sum of frequencies should equal $n$ |
| Confusing class limits with boundaries | Boundaries = limits ± 0.5 (usually) |
| Putting gaps in histograms | No gaps for continuous data |
| Using $\times$ for frequency density | Frequency density = $\frac{\text{frequency}}{\text{width}}$ |
| Wrong median position | Use $\frac{n}{2}$ for grouped data |
| Missing units in answer | Always include units (cm, kg, etc.) |

---

## 3.4 How to Gain Full Marks

### For Frequency Table Questions:
1. **Show tally marks** (if asked to construct)
2. **Check total adds up** to number of data items
3. **Use appropriate class widths** (equal unless specified)
4. **Label clearly** with units where appropriate

### For Mean Calculations:
1. **Set up a table** with columns for $f$, $x$, $fx$
2. **Show the formula** $\bar{x} = \frac{\sum fx}{\sum f}$
3. **Substitute values clearly**
4. **Give answer to appropriate accuracy** (usually 3 s.f. or as specified)
5. **Include units**

### For Data Classification:
1. **State the classification** (discrete/continuous)
2. **Give a reason** (can be counted/measured)
3. **Use keywords**: "counted," "measured," "any value," "whole numbers only"

---

## 3.5 Step-by-Step Problem-Solving Patterns

### Pattern 1: Estimating Mean from Grouped Data

```
Step 1: Create table with columns: Class, f, x (midpoint), fx
Step 2: Calculate midpoints for each class
Step 3: Calculate fx for each row
Step 4: Sum the fx column and f column
Step 5: Apply formula: mean = Σfx / Σf
Step 6: Round appropriately and include units
```

### Pattern 2: Finding Median from Cumulative Frequency

```
Step 1: Add cumulative frequency column to table
Step 2: Find n (total frequency)
Step 3: Calculate median position = n/2
Step 4: Identify which class contains the median
Step 5: Apply interpolation formula if exact value needed
Step 6: State answer with units
```

### Pattern 3: Constructing a Frequency Table

```
Step 1: Identify range of data (max - min)
Step 2: Decide on number of groups (usually 5-8)
Step 3: Calculate suitable class width
Step 4: Set up class intervals (no gaps or overlaps)
Step 5: Tally data into appropriate classes
Step 6: Count tallies to get frequencies
Step 7: Verify total = number of data items
```

---

## 3.6 Key Formulas Summary

| Formula | When to Use |
|---------|-------------|
| $\bar{x} = \frac{\sum fx}{\sum f}$ | Mean from frequency table |
| $\text{Midpoint} = \frac{L + U}{2}$ | Finding midpoints |
| $\text{Median position} = \frac{n}{2}$ | Locating median in grouped data |
| $\text{Median} = L + \frac{\frac{n}{2} - CF}{f} \times w$ | Interpolation for median |
| $Q_1 \text{ position} = \frac{n}{4}$ | Lower quartile |
| $Q_3 \text{ position} = \frac{3n}{4}$ | Upper quartile |
| $\text{IQR} = Q_3 - Q_1$ | Interquartile range |
| $\text{Rel. Freq.} = \frac{f}{n}$ | Relative frequency |
| $\text{Freq. Density} = \frac{f}{w}$ | Histograms |

---

## 3.7 Grade 8/9 Tips

> ** Tip 1:** Always check if data is discrete or continuous before choosing graph type or class intervals.

> ** Tip 2:** For estimated mean questions, clearly state "Estimated mean = ..." since grouped data gives an approximation.

> ** Tip 3:** In exam questions involving cumulative frequency, the last value should always equal the total frequency—use this as a check.

> ** Tip 4:** When asked to explain why mean from grouped data is an estimate, state: "We assume all values in a class are at the midpoint."

> ** Tip 5:** For A* questions, you may need to work backwards from given statistics to find missing frequencies.

---

## 3.8 Quick Reference: Discrete vs Continuous Checklist

| Question | Discrete | Continuous |
|----------|:--------:|:----------:|
| Can it be counted? | ✓ | ✗ |
| Can it be measured? | ✗ | ✓ |
| Can it take any value in a range? | ✗ | ✓ |
| Are there gaps between possible values? | ✓ | ✗ |
| Does it involve decimals naturally? | ✗ | ✓ |
| Bar chart appropriate? | ✓ | ✗ |
| Histogram appropriate? | ✗ | ✓ |
| Gaps between bars? | ✓ | ✗ |

---

*End of Handling Data 2 Notes*
