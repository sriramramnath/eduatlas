# Chapter 36: Handling Data 3 - Concise Synopsis
## Measures of Dispersion, Quartiles & Cumulative Frequency

---

# 1. MEASURES OF DISPERSION

## 1.1 Introduction to Dispersion

**Dispersion** refers to how spread out the data values are. While measures of central tendency (mean, median, mode) tell us about the "center" of the data, measures of dispersion tell us about the **spread** or **variability**.

### Why is Dispersion Important?

> 📊 **Key Insight:** Two datasets can have the same mean but very different spreads!

**Example:**
- Class A scores: 48, 49, 50, 51, 52 → Mean = 50
- Class B scores: 20, 35, 50, 65, 80 → Mean = 50

Both classes have the same mean, but Class B has much more variability. This is why we need measures of dispersion!

---

## 1.2 Range

### Definition

$$\text{Range} = \text{Maximum value} - \text{Minimum value}$$

The range is the **simplest** measure of dispersion.

### Step-by-Step Calculation

**Step 1:** Identify the largest value in the dataset
**Step 2:** Identify the smallest value in the dataset
**Step 3:** Subtract the smallest from the largest

### Worked Example 1

Find the range of: 12, 7, 15, 9, 23, 18, 6

| Step | Action | Result |
|------|--------|--------|
| 1 | Identify maximum | 23 |
| 2 | Identify minimum | 6 |
| 3 | Calculate range | 23 - 6 = **17** |

### Range from Frequency Tables

**Worked Example 2:**

| Score (x) | Frequency (f) |
|-----------|---------------|
| 5 | 3 |
| 10 | 7 |
| 15 | 4 |
| 20 | 2 |

**Solution:**
- Maximum value = 20
- Minimum value = 5
- Range = 20 - 5 = **15**

>  **Common Mistake:** Don't use the frequencies! The range is between the data values, not the frequencies.

### Range from Grouped Data

For grouped data, we use the **class boundaries**:

$$\text{Range} = \text{Upper boundary of highest class} - \text{Lower boundary of lowest class}$$

**Worked Example 3:**

| Mass (kg) | Frequency |
|-----------|-----------|
| 0 ≤ m < 10 | 5 |
| 10 ≤ m < 20 | 12 |
| 20 ≤ m < 30 | 8 |

**Solution:**
- Upper boundary of highest class = 30
- Lower boundary of lowest class = 0
- Range = 30 - 0 = **30 kg**

### Advantages and Disadvantages of Range

| Advantages | Disadvantages |
|------------|---------------|
| Simple to calculate | Affected by outliers |
| Easy to understand | Only uses two values |
| Quick to find | Doesn't consider all data points |

---

## 1.3 Interquartile Range (IQR)

### Definition

The **Interquartile Range (IQR)** measures the spread of the middle 50% of the data.

$$\text{IQR} = Q_3 - Q_1$$

Where:
- $Q_1$ = Lower Quartile (25th percentile)
- $Q_3$ = Upper Quartile (75th percentile)

### Why IQR is Better Than Range

> 🎯 **Exam Insight:** The IQR is **not affected by outliers**, making it more reliable for skewed data.

**Visual Representation:**

```
|--------|========|--------|
   25%      50%      25%
   Q₁       Q₂       Q₃
        ← IQR →
```

---

# 2. QUARTILES

## 2.1 Understanding Quartiles

**Quartiles** divide an ordered dataset into **four equal parts**.

| Quartile | Name | Position | Percentage |
|----------|------|----------|------------|
| $Q_1$ | Lower Quartile | 25th percentile | Bottom 25% |
| $Q_2$ | Median | 50th percentile | Bottom 50% |
| $Q_3$ | Upper Quartile | 75th percentile | Bottom 75% |

## 2.2 Finding Quartiles for Discrete Data

### Method 1: Position Formula

For a dataset with $n$ values:

$$\text{Position of } Q_1 = \frac{n+1}{4}$$

$$\text{Position of } Q_2 = \frac{n+1}{2}$$

$$\text{Position of } Q_3 = \frac{3(n+1)}{4}$$

### Worked Example 4

Find the quartiles for: 3, 7, 8, 12, 14, 18, 21, 24, 27, 30, 35

**Step 1: Verify data is ordered** ✓ (already in ascending order)

**Step 2: Find n**
$n = 11$

**Step 3: Calculate positions**

$$Q_1 \text{ position} = \frac{11+1}{4} = \frac{12}{4} = 3\text{rd value}$$

$$Q_2 \text{ position} = \frac{11+1}{2} = \frac{12}{2} = 6\text{th value}$$

$$Q_3 \text{ position} = \frac{3(11+1)}{4} = \frac{36}{4} = 9\text{th value}$$

**Step 4: Read the values**

| Position | Value |
|----------|-------|
| $Q_1$ (3rd) | 8 |
| $Q_2$ (6th) | 18 |
| $Q_3$ (9th) | 27 |

**Step 5: Calculate IQR**

$$\text{IQR} = Q_3 - Q_1 = 27 - 8 = 19$$

---

### Method 2: Splitting the Dataset

>  **Alternative Method:** Split the data at the median and find the median of each half.

**Worked Example 5**

Find the quartiles for: 5, 9, 12, 16, 20, 24, 28, 32

**Step 1: Find the median (Q₂)**

Since $n = 8$ (even), the median is between positions 4 and 5:
$$Q_2 = \frac{16 + 20}{2} = 18$$

**Step 2: Split the data**

Lower half: 5, 9, 12, 16 (exclude median for even n)
Upper half: 20, 24, 28, 32

**Step 3: Find Q₁ and Q₃**

$Q_1$ = median of lower half = $\frac{9 + 12}{2} = 10.5$

$Q_3$ = median of upper half = $\frac{24 + 28}{2} = 26$

**Step 4: Calculate IQR**

$$\text{IQR} = 26 - 10.5 = 15.5$$

>  **Important:** When n is odd, include the median in both halves. When n is even, exclude the median values from both halves.

---

## 2.3 Quartiles from Frequency Tables

### Worked Example 6

| Marks | Frequency |
|-------|-----------|
| 10 | 4 |
| 20 | 8 |
| 30 | 12 |
| 40 | 6 |

**Step 1: Find cumulative frequency**

| Marks | Frequency | Cumulative Frequency |
|-------|-----------|---------------------|
| 10 | 4 | 4 |
| 20 | 8 | 12 |
| 30 | 12 | 24 |
| 40 | 6 | 30 |

Total frequency $n = 30$

**Step 2: Find quartile positions**

$$Q_1 \text{ position} = \frac{30}{4} = 7.5 \text{ (use 8th value)}$$

$$Q_2 \text{ position} = \frac{30}{2} = 15\text{th value}$$

$$Q_3 \text{ position} = \frac{3 \times 30}{4} = 22.5 \text{ (use 23rd value)}$$

**Step 3: Identify quartile values**

- 8th value: In the 20 marks group (cumulative freq reaches 12) → $Q_1 = 20$
- 15th value: In the 30 marks group (cumulative freq reaches 24) → $Q_2 = 30$
- 23rd value: In the 30 marks group (cumulative freq reaches 24) → $Q_3 = 30$

**Answer:**
$Q_1 = 20$, $Q_2 = 30$, $Q_3 = 30$
$\text{IQR} = 30 - 20 = 10$

---

## 2.4 Quartiles from Grouped Data (Cumulative Frequency)

For grouped data, we use **interpolation** on the cumulative frequency curve.

### Formula for Interpolation

$$Q_k = L + \left(\frac{\frac{kn}{4} - F}{f}\right) \times w$$

Where:
- $L$ = Lower class boundary of the quartile class
- $n$ = Total frequency
- $F$ = Cumulative frequency before quartile class
- $f$ = Frequency of quartile class
- $w$ = Class width
- $k$ = 1 for $Q_1$, $k$ = 3 for $Q_3$

### Worked Example 7

| Time (minutes) | Frequency |
|----------------|-----------|
| 0-10 | 5 |
| 10-20 | 15 |
| 20-30 | 25 |
| 30-40 | 20 |
| 40-50 | 10 |

**Find Q₁, Q₃ and IQR**

**Step 1: Create cumulative frequency table**

| Time (min) | Frequency | Cumulative Frequency | Class Boundaries |
|------------|-----------|---------------------|------------------|
| 0-10 | 5 | 5 | 0 ≤ t < 10 |
| 10-20 | 15 | 20 | 10 ≤ t < 20 |
| 20-30 | 25 | 45 | 20 ≤ t < 30 |
| 30-40 | 20 | 65 | 30 ≤ t < 40 |
| 40-50 | 10 | 75 | 40 ≤ t < 50 |

$n = 75$

**Step 2: Find Q₁**

$$Q_1 \text{ position} = \frac{75}{4} = 18.75$$

The 18.75th value lies in the 10-20 class (cumulative frequency goes from 5 to 20).

Using interpolation:
$$Q_1 = 10 + \left(\frac{18.75 - 5}{15}\right) \times 10$$
$$Q_1 = 10 + \left(\frac{13.75}{15}\right) \times 10$$
$$Q_1 = 10 + 9.17 = 19.17 \text{ minutes}$$

**Step 3: Find Q₃**

$$Q_3 \text{ position} = \frac{3 \times 75}{4} = 56.25$$

The 56.25th value lies in the 30-40 class (cumulative frequency goes from 45 to 65).

$$Q_3 = 30 + \left(\frac{56.25 - 45}{20}\right) \times 10$$
$$Q_3 = 30 + \left(\frac{11.25}{20}\right) \times 10$$
$$Q_3 = 30 + 5.625 = 35.625 \text{ minutes}$$

**Step 4: Calculate IQR**

$$\text{IQR} = 35.625 - 19.17 = 16.46 \text{ minutes}$$

---

# 3. CUMULATIVE FREQUENCY

## 3.1 Definition

**Cumulative frequency** is the running total of frequencies. It shows the number of values that are **less than or equal to** a certain value.

$$\text{Cumulative Frequency} = \text{Sum of all frequencies up to that point}$$

## 3.2 Constructing a Cumulative Frequency Table

### Worked Example 8

Given frequency distribution:

| Height (cm) | Frequency |
|-------------|-----------|
| 140 < h ≤ 150 | 8 |
| 150 < h ≤ 160 | 22 |
| 160 < h ≤ 170 | 35 |
| 170 < h ≤ 180 | 28 |
| 180 < h ≤ 190 | 12 |

**Step 1: Identify the upper class boundaries**

These will be our x-values: 150, 160, 170, 180, 190

**Step 2: Calculate cumulative frequencies**

| Height (cm) | Frequency | Upper Boundary | Cumulative Frequency |
|-------------|-----------|----------------|---------------------|
| 140 < h ≤ 150 | 8 | 150 | 8 |
| 150 < h ≤ 160 | 22 | 160 | 8 + 22 = 30 |
| 160 < h ≤ 170 | 35 | 170 | 30 + 35 = 65 |
| 170 < h ≤ 180 | 28 | 180 | 65 + 28 = 93 |
| 180 < h ≤ 190 | 12 | 190 | 93 + 12 = 105 |

>  **Key Point:** Always plot cumulative frequency against the **upper class boundary**.

---

## 3.3 Drawing a Cumulative Frequency Curve (Ogive)

### Steps for Drawing

1. **Plot points** using upper class boundaries (x-axis) and cumulative frequencies (y-axis)
2. **Join points with a smooth curve** (not straight lines)
3. The curve should start from the **lower boundary of the first class** with frequency 0
4. The curve is always **non-decreasing** (it never goes down)

### Worked Example 9

Using the data from Example 8, plot a cumulative frequency curve.

**Points to plot:**
- (140, 0) - Start point
- (150, 8)
- (160, 30)
- (170, 65)
- (180, 93)
- (190, 105)

**Graph characteristics:**
- S-shaped curve (ogive)
- Passes through all plotted points
- Smooth, continuous curve

```
CF
105|                                  ●
   |                               ●
   |                            ●
 70|                        ●
   |                     ●
   |                  ●
 35|              ●
   |           ●
   |        ●
  0|-----●--------+--------+--------+-----> Height
   140   150     160      170      180    190
```

---

## 3.4 Reading Values from a Cumulative Frequency Curve

### Finding the Median (Q₂)

**Step 1:** Calculate $\frac{n}{2}$ where n = total frequency

**Step 2:** Draw a horizontal line from this point on the y-axis to the curve

**Step 3:** Drop a vertical line to the x-axis to read the median

### Finding Quartiles (Q₁ and Q₃)

- **Q₁:** Use $\frac{n}{4}$
- **Q₃:** Use $\frac{3n}{4}$

### Finding Percentiles

For the $k$th percentile:
$$P_k = \text{Value at } \frac{kn}{100}$$

### Worked Example 10

Using the data from Example 8 (n = 105):

**Find the median, Q₁, Q₃ and IQR**

**Step 1: Calculate positions**

- Median position: $\frac{105}{2} = 52.5$
- Q₁ position: $\frac{105}{4} = 26.25$
- Q₃ position: $\frac{3 \times 105}{4} = 78.75$

**Step 2: Read from the curve** (using the graph)

- Median ≈ 166 cm (reading from curve at CF = 52.5)
- Q₁ ≈ 157 cm (reading from curve at CF = 26.25)
- Q₃ ≈ 174 cm (reading from curve at CF = 78.75)

**Step 3: Calculate IQR**

$$\text{IQR} = 174 - 157 = 17 \text{ cm}$$

---

## 3.5 Finding the Number of Values in a Range

### Worked Example 11

Using the cumulative frequency curve, find:
(a) How many students are taller than 175 cm?
(b) What percentage of students are between 155 cm and 170 cm?

**Solution:**

**(a) Students taller than 175 cm:**

**Step 1:** Read the cumulative frequency at 175 cm from the curve
CF at 175 cm ≈ 80

**Step 2:** Calculate students taller than 175 cm
$$= 105 - 80 = 25 \text{ students}$$

**(b) Students between 155 cm and 170 cm:**

**Step 1:** Read CF at 155 cm and 170 cm
- CF at 155 cm ≈ 22
- CF at 170 cm = 65

**Step 2:** Find the difference
$$= 65 - 22 = 43 \text{ students}$$

**Step 3:** Calculate percentage
$$\frac{43}{105} \times 100 = 40.95\% \approx 41\%$$

---

# 4. COMPARING DATASETS

## 4.1 Using Measures of Dispersion

When comparing two datasets:

| Measure | What it tells you |
|---------|------------------|
| **Range** | Overall spread including extremes |
| **IQR** | Spread of the middle 50% (more reliable) |
| **Median with IQR** | Central value with typical spread |
| **Mean with Range** | Average value with overall spread |

### Worked Example 12

**Test scores for two classes:**

| Statistic | Class A | Class B |
|-----------|---------|---------|
| Median | 68 | 65 |
| IQR | 15 | 22 |
| Range | 45 | 38 |

**Compare the two classes:**

**Analysis:**
1. **Central tendency:** Class A has a higher median (68 vs 65), indicating generally better performance.

2. **Consistency:** Class A has a smaller IQR (15 vs 22), showing more consistent results. The middle 50% of students in Class A are more closely grouped.

3. **Spread:** Class B has a smaller range but larger IQR, suggesting the extreme values are closer together, but the middle 50% is more spread out.

**Conclusion:** Class A performed better overall and more consistently, while Class B shows more variation in the middle range of students.

---

## 4.2 Outlier Detection

### Using IQR to Identify Outliers

An outlier is a value that is significantly different from other values.

**Common rule:**

$$\text{Lower fence} = Q_1 - 1.5 \times \text{IQR}$$
$$\text{Upper fence} = Q_3 + 1.5 \times \text{IQR}$$

Values outside these fences are potential outliers.

### Worked Example 13

Given: $Q_1 = 25$, $Q_3 = 45$

**Find the outlier boundaries:**

$$\text{IQR} = 45 - 25 = 20$$

$$\text{Lower fence} = 25 - 1.5(20) = 25 - 30 = -5$$

$$\text{Upper fence} = 45 + 1.5(20) = 45 + 30 = 75$$

Any value below -5 or above 75 would be considered an outlier.

---

# 5. BOX PLOTS (BOX-AND-WHISKER DIAGRAMS)

## 5.1 Components of a Box Plot

A box plot displays:
- Minimum value
- Lower Quartile (Q₁)
- Median (Q₂)
- Upper Quartile (Q₃)
- Maximum value

```
        ←---- Box ----→
    |---|____|____|---|
    |   |    |    |   |
    ●───┼────┼────┼───●
    Min Q₁   Med  Q₃  Max
        ←-- IQR --→
```

## 5.2 Drawing a Box Plot

### Worked Example 14

Draw a box plot for the following data:
Minimum = 12, Q₁ = 18, Median = 25, Q₃ = 35, Maximum = 48

**Steps:**
1. Draw a horizontal scale
2. Mark the five-number summary on the scale
3. Draw a box from Q₁ to Q₃
4. Draw a vertical line inside the box at the median
5. Draw whiskers from the box to the minimum and maximum

```
    10    20    30    40    50
    |-----|-----|-----|-----|
    ●─────┌─────┼─────┐─────●
    12    │    25     │    48
          18         35
```

---

# EXAM FOCUS & STRATEGY

## Frequently Tested Question Types

### Type 1: Basic Calculations
- Calculate range, IQR from raw data
- Find quartiles from ordered lists

**Strategy:** Always order data first (unless already ordered)

### Type 2: Cumulative Frequency Curve
- Draw the curve from grouped data
- Read median, quartiles, percentiles
- Find values above/below certain thresholds

**Strategy:** 
- Always start from the lower boundary of first class with CF = 0
- Plot upper class boundaries
- Draw smooth curve

### Type 3: Comparison Questions
- Compare two datasets using median and IQR
- Make conclusions about consistency and performance

**Strategy:**
- Use comparative language: "higher", "lower", "more consistent"
- Support with numerical evidence
- Consider both central tendency and spread

### Type 4: Interpolation from Grouped Data
- Estimate quartiles using linear interpolation

**Strategy:**
- Set up the interpolation formula correctly
- Identify which class contains the quartile
- Show all working clearly

---

## Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Calculate** | Show working, give exact answer |
| **Find** | May use calculator, show method |
| **Draw** | Use graph paper, use appropriate scale |
| **Plot** | Mark points accurately |
| **Compare** | Write similarities AND differences with evidence |
| **Estimate** | Use interpolation or read from graph |
| **Explain** | Give reasons with statistical justification |

---

## How to Gain Full Marks

### For Calculation Questions (3-4 marks)
1. ✓ Show all working
2. ✓ Use correct formula
3. ✓ State final answer clearly with units

### For Graph Questions (4-5 marks)
1. ✓ Label axes clearly
2. ✓ Choose appropriate scale
3. ✓ Plot points accurately (±1mm tolerance)
4. ✓ Draw smooth curve through points
5. ✓ Start from (lower boundary, 0)

### For Comparison Questions (2-3 marks)
1. ✓ Quote values from both datasets
2. ✓ Make direct comparison
3. ✓ Give interpretation/conclusion

---

## Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forgetting to order data before finding quartiles | Always sort data first |
| Using class limits instead of boundaries | Convert to class boundaries (e.g., 10-20 → 10, 20) |
| Plotting cumulative frequency at class midpoints | Plot at upper class boundaries |
| Drawing straight lines between points | Draw smooth curve |
| Finding range from frequencies | Range is between data values |
| Confusing n/4 with (n+1)/4 | For grouped data use n/4, for raw data use (n+1)/4 |

---

## Key Formulas Summary

| Formula | Use |
|---------|-----|
| $\text{Range} = \text{Max} - \text{Min}$ | Overall spread |
| $\text{IQR} = Q_3 - Q_1$ | Middle 50% spread |
| $Q_1 \text{ position} = \frac{n+1}{4}$ | For raw data |
| $Q_3 \text{ position} = \frac{3(n+1)}{4}$ | For raw data |
| $Q_k = L + \left(\frac{\frac{kn}{4} - F}{f}\right) \times w$ | Interpolation for grouped data |
| $\text{Lower fence} = Q_1 - 1.5 \times \text{IQR}$ | Outlier detection |
| $\text{Upper fence} = Q_3 + 1.5 \times \text{IQR}$ | Outlier detection |

---

*📌 This notes package is aligned with Pearson Edexcel IGCSE Mathematics specification for Handling Data 3.*
