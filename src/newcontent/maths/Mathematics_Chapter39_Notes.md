# Chapter 39: Handling Data 6 - Concise Synopsis

## Pearson Edexcel IGCSE Mathematics - Detailed Notes

**Unit 9 | Topic: Histograms (Drawing and Interpreting)**

---

## 1. Introduction to Histograms

### 1.1 What is a Histogram?

A **histogram** is a statistical graph used to display **continuous data** that has been organized into groups (class intervals). Unlike bar charts, histograms show the distribution of continuous data where the **area** of each bar represents the frequency.

> **Key Distinction:**
> - **Bar Chart**: For discrete/categorical data; bars have gaps; height = frequency
> - **Histogram**: For continuous data; bars touch; **area** ∝ frequency

### 1.2 Why Use Histograms?

Histograms are essential when:
- Data is **continuous** (time, weight, height, distance, temperature)
- Class intervals have **unequal widths**
- We need to visualise the **distribution shape** (symmetric, skewed, bimodal)
- We want to estimate frequencies within specific ranges

---

## 2. Key Concepts and Terminology

### 2.1 Class Intervals

Class intervals group continuous data into ranges. Each interval has:
- **Lower bound**: The smallest value in the interval
- **Upper bound**: The largest value in the interval
- **Class width**: Upper bound − Lower bound

#### Types of Class Intervals:

| Notation | Meaning | Example |
|----------|---------|---------|
| $0 \leq x < 10$ | 0 up to but not including 10 | Standard notation |
| $10 \leq x < 20$ | 10 up to but not including 20 | No gaps between intervals |
| $0-$ | 0 to (next lower bound) | Shorthand notation |
| $10-19$ | Inclusive of both bounds | Check context carefully |

> ** Common Mistake:** Assuming "$10-19$" means $10 \leq x \leq 19$ when it might mean $10 \leq x < 20$. Always check the context!

### 2.2 Frequency Density

**Frequency Density** is the crucial concept that makes histograms work, especially with unequal class widths.

$$\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$$

#### Why Frequency Density?

When class widths are unequal, using frequency directly would misrepresent the data. Frequency density allows for **fair comparison** between classes.

**Example:**
- Class A: Width = 10, Frequency = 30 → Density = 3
- Class B: Width = 5, Frequency = 30 → Density = 6

Even though both have the same frequency, Class B is more "crowded" per unit of the variable.

### 2.3 The Area Principle

The fundamental principle of histograms:

$$\boxed{\text{Area of bar} = \text{Frequency}}$$

$$\text{Area} = \text{Width} \times \text{Height} = \text{Class Width} \times \text{Frequency Density} = \text{Frequency}$$

This means:
- **Height of bar** = Frequency Density
- **Width of bar** = Class Width
- **Area of bar** = Frequency

---

## 3. Drawing Histograms

### 3.1 Step-by-Step Method for Drawing Histograms

#### Step 1: Organise the Data
Create a table with columns for:
- Class interval
- Frequency
- Class width
- Frequency density

#### Step 2: Calculate Class Widths
$$\text{Class Width} = \text{Upper Bound} - \text{Lower Bound}$$

#### Step 3: Calculate Frequency Densities
$$\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$$

#### Step 4: Choose Appropriate Scales
- **x-axis**: Variable being measured (continuous scale)
- **y-axis**: Frequency density

#### Step 5: Draw the Bars
- Width of each bar = class width
- Height of each bar = frequency density
- **Bars must touch** (no gaps for continuous data)

### 3.2 Worked Example 1: Equal Class Widths

**Question:** Draw a histogram for the following data showing the heights of 60 plants:

| Height (cm) | Frequency |
|-------------|-----------|
| $0 \leq h < 10$ | 5 |
| $10 \leq h < 20$ | 12 |
| $20 \leq h < 30$ | 18 |
| $30 \leq h < 40$ | 15 |
| $40 \leq h < 50$ | 10 |

**Solution:**

**Step 1:** Calculate class widths and frequency densities

| Height (cm) | Frequency | Class Width | Frequency Density |
|-------------|-----------|-------------|-------------------|
| $0 \leq h < 10$ | 5 | 10 | $5 \div 10 = 0.5$ |
| $10 \leq h < 20$ | 12 | 10 | $12 \div 10 = 1.2$ |
| $20 \leq h < 30$ | 18 | 10 | $18 \div 10 = 1.8$ |
| $30 \leq h < 40$ | 15 | 10 | $15 \div 10 = 1.5$ |
| $40 \leq h < 50$ | 10 | 10 | $10 \div 10 = 1.0$ |

**Step 2:** Draw histogram
- x-axis: Height (cm) from 0 to 50
- y-axis: Frequency density from 0 to 2

**Note:** When all class widths are equal, the histogram bars have the same width, making the shape similar to a bar chart (but bars still touch).

### 3.3 Worked Example 2: Unequal Class Widths

**Question:** The table shows the time taken by 80 students to complete a test. Draw a histogram.

| Time (minutes) | Frequency |
|----------------|-----------|
| $0 \leq t < 20$ | 8 |
| $20 \leq t < 40$ | 24 |
| $40 \leq t < 60$ | 32 |
| $60 \leq t < 100$ | 16 |

**Solution:**

**Step 1:** Calculate class widths and frequency densities

| Time (minutes) | Frequency | Class Width | Frequency Density |
|----------------|-----------|-------------|-------------------|
| $0 \leq t < 20$ | 8 | 20 | $8 \div 20 = 0.4$ |
| $20 \leq t < 40$ | 24 | 20 | $24 \div 20 = 1.2$ |
| $40 \leq t < 60$ | 32 | 20 | $32 \div 20 = 1.6$ |
| $60 \leq t < 100$ | 16 | 40 | $16 \div 40 = 0.4$ |

**Step 2:** Draw histogram
- x-axis: Time (minutes) from 0 to 100
- y-axis: Frequency density from 0 to 1.6 (or 2)

**Key Observation:** Notice how the first and last bars have the same height (frequency density = 0.4) even though they have different frequencies (8 and 16). This correctly represents that the last class is more spread out.

### 3.4 Worked Example 3: Finding Missing Frequencies

**Question:** A histogram has a bar representing the interval $30 \leq x < 50$ with height 2.5 and width 20. Find the frequency for this class.

**Solution:**

$$\text{Frequency} = \text{Frequency Density} \times \text{Class Width}$$
$$\text{Frequency} = 2.5 \times 20 = 50$$

---

## 4. Interpreting Histograms

### 4.1 Reading Frequency from a Histogram

To find the frequency of a class from a histogram:

1. Read the **height** (frequency density) from the y-axis
2. Read the **width** from the x-axis
3. Calculate: $\text{Frequency} = \text{Height} \times \text{Width}$

### 4.2 Finding the Total Frequency

$$\text{Total Frequency} = \sum (\text{Height} \times \text{Width}) \text{ for all bars}$$

This is equivalent to finding the total area under the histogram.

### 4.3 Worked Example 4: Interpreting a Histogram

**Question:** The histogram shows the distribution of weights of parcels at a post office.

- Bar 1: $0 \leq w < 2$ kg, height = 8
- Bar 2: $2 \leq w < 4$ kg, height = 12
- Bar 3: $4 \leq w < 8$ kg, height = 5
- Bar 4: $8 \leq w < 12$ kg, height = 3

**(a)** Find the total number of parcels.

**Solution:**

| Class | Width | Height | Frequency |
|-------|-------|--------|-----------|
| $0 \leq w < 2$ | 2 | 8 | $2 \times 8 = 16$ |
| $2 \leq w < 4$ | 2 | 12 | $2 \times 12 = 24$ |
| $4 \leq w < 8$ | 4 | 5 | $4 \times 5 = 20$ |
| $8 \leq w < 12$ | 4 | 3 | $4 \times 3 = 12$ |

Total = 16 + 24 + 20 + 12 = **72 parcels**

**(b)** What percentage of parcels weighed less than 4 kg?

**Solution:**

Parcels weighing less than 4 kg = 16 + 24 = 40

$$\text{Percentage} = \frac{40}{72} \times 100 = 55.56\% \approx 55.6\%$$

### 4.4 Estimating Frequencies Between Values

When asked to find the frequency between values within a class, use proportion.

**Worked Example 5:**

**Question:** Using the data from Example 4, estimate how many parcels weighed between 3 kg and 5 kg.

**Solution:**

- Between 3 kg and 4 kg: This is in class $2 \leq w < 4$
  - Proportion of this class: $\frac{4-3}{4-2} = \frac{1}{2}$
  - Frequency: $24 \times \frac{1}{2} = 12$
  
- Between 4 kg and 5 kg: This is in class $4 \leq w < 8$
  - Proportion of this class: $\frac{5-4}{8-4} = \frac{1}{4}$
  - Frequency: $20 \times \frac{1}{4} = 5$

Total = 12 + 5 = **17 parcels**

---

## 5. Advanced Histogram Problems

### 5.1 Finding Missing Values from Partial Information

**Worked Example 6:**

**Question:** A histogram is drawn for the following data. The bar for the first class has height 4.

| Mass (g) | Frequency |
|----------|-----------|
| $0 \leq m < 20$ | $f_1$ |
| $20 \leq m < 40$ | 30 |
| $40 \leq m < 80$ | 40 |

If the total frequency is 90, find $f_1$.

**Solution:**

**Step 1:** Find the frequency density for the first class.

Class width for first class = 20
Height (frequency density) = 4
$$f_1 = 20 \times 4 = 80$$

But wait, this doesn't work because $f_1 + 30 + 40 = 150 \neq 90$.

**Step 2:** Re-interpret the problem.

Let's work backwards from the total frequency.

$f_1 + 30 + 40 = 90$
$f_1 = 20$

**Step 3:** Find the frequency density for the first class.
$$\text{Frequency Density} = \frac{20}{20} = 1$$

The bar height should be 1, not 4. The problem statement has inconsistent data.

> **📝 Exam Insight:** In exams, if given partial information, always check that the data is consistent. Work systematically, calculating what you can and using the total frequency as a check.

### 5.2 Histograms with Unknown Frequencies

**Worked Example 7:**

**Question:** A histogram has four bars. The frequency densities are 2, 3, 5, and 1 respectively. The class widths are all 10. If the bar with density 3 represents a frequency of 30, find the total frequency.

**Solution:**

**Step 1:** Find the scale factor.
$$\text{Frequency} = \text{Density} \times \text{Width}$$
$$30 = 3 \times 10$$

This confirms the relationship.

**Step 2:** Calculate all frequencies.

| Bar | Density | Width | Frequency |
|-----|---------|-------|-----------|
| 1 | 2 | 10 | 20 |
| 2 | 3 | 10 | 30 |
| 3 | 5 | 10 | 50 |
| 4 | 1 | 10 | 10 |

Total frequency = 20 + 30 + 50 + 10 = **110**

### 5.3 Drawing Histograms from Raw Data

**Worked Example 8:**

**Question:** The masses (in kg) of 25 parcels are recorded below:
2.3, 3.1, 4.5, 4.8, 5.2, 5.5, 5.7, 6.1, 6.3, 6.8, 7.1, 7.4, 7.6, 7.9, 8.2, 8.4, 8.6, 8.9, 9.1, 9.3, 9.5, 9.8, 10.1, 10.4, 11.2

Draw a histogram using class intervals $0 \leq m < 4$, $4 \leq m < 6$, $6 \leq m < 8$, $8 \leq m < 10$, $10 \leq m < 12$.

**Solution:**

**Step 1:** Count frequencies in each class.

| Mass (kg) | Tally | Frequency |
|-----------|-------|-----------|
| $0 \leq m < 4$ | II | 2 |
| $4 \leq m < 6$ | IIII | 5 |
| $6 \leq m < 8$ | IIII I | 6 |
| $8 \leq m < 10$ | IIII III | 8 |
| $10 \leq m < 12$ | IIII | 4 |

**Step 2:** Calculate frequency densities.

| Mass (kg) | Frequency | Width | Frequency Density |
|-----------|-----------|-------|-------------------|
| $0 \leq m < 4$ | 2 | 4 | $2 \div 4 = 0.5$ |
| $4 \leq m < 6$ | 5 | 2 | $5 \div 2 = 2.5$ |
| $6 \leq m < 8$ | 6 | 2 | $6 \div 2 = 3.0$ |
| $8 \leq m < 10$ | 8 | 2 | $8 \div 2 = 4.0$ |
| $10 \leq m < 12$ | 4 | 2 | $4 \div 2 = 2.0$ |

**Step 3:** Draw histogram with x-axis (Mass in kg) and y-axis (Frequency Density).

---

## 6. Frequency Polygons

### 6.1 What is a Frequency Polygon?

A **frequency polygon** is a line graph that shows the distribution of continuous data. It can be drawn:
- From a histogram (by joining midpoints of bars)
- Directly from grouped data

### 6.2 Drawing a Frequency Polygon

#### Method 1: From a Histogram
1. Mark the midpoint of the top of each bar
2. Join the midpoints with straight lines
3. Close the polygon by extending to the midpoints of adjacent empty classes

#### Method 2: Directly from Data
1. Find the midpoint of each class interval: $\text{Midpoint} = \frac{\text{Lower} + \text{Upper}}{2}$
2. Plot (midpoint, frequency) coordinates
3. Join with straight lines

### 6.3 Worked Example 9

**Question:** Draw a frequency polygon for the following data:

| Weight (kg) | Frequency |
|-------------|-----------|
| $0 \leq w < 10$ | 5 |
| $10 \leq w < 20$ | 15 |
| $20 \leq w < 30$ | 25 |
| $30 \leq w < 40$ | 10 |

**Solution:**

**Step 1:** Find midpoints.

| Weight (kg) | Midpoint | Frequency |
|-------------|----------|-----------|
| $0 \leq w < 10$ | 5 | 5 |
| $10 \leq w < 20$ | 15 | 15 |
| $20 \leq w < 30$ | 25 | 25 |
| $30 \leq w < 40$ | 35 | 10 |

**Step 2:** Plot points (5, 5), (15, 15), (25, 25), (35, 10).

**Step 3:** Add closing points at (-5, 0) and (45, 0) to complete the polygon.

---

## 7. Analysing Distribution Shape

### 7.1 Types of Distribution

| Shape | Description | Example |
|-------|-------------|---------|
| **Symmetric** | Mirror image about centre | Heights of adults |
| **Positive skew** | Long tail to the right | Income distribution |
| **Negative skew** | Long tail to the left | Exam scores (easy test) |
| **Bimodal** | Two peaks | Heights of mixed population |

### 7.2 Identifying Skew from Histograms

- **Positive skew**: Most data on the left, tail extends right
- **Negative skew**: Most data on the right, tail extends left
- **Symmetric**: Data balanced around the centre

### 7.3 Measures of Central Tendency in Skewed Data

For symmetric distributions: Mean ≈ Median ≈ Mode

For positively skewed: Mode < Median < Mean

For negatively skewed: Mean < Median < Mode

---

## 8. Common Mistakes and How to Avoid Them

###  Common Mistake 1: Using Frequency Instead of Frequency Density

**Wrong:** Drawing bars with height = frequency

**Correct:** Height = frequency density = frequency ÷ class width

###  Common Mistake 2: Leaving Gaps Between Bars

**Wrong:** Drawing histogram bars with gaps (like a bar chart)

**Correct:** Bars must touch because data is continuous

###  Common Mistake 3: Incorrect Class Boundaries

**Wrong:** Thinking $10-19$ always means $10 \leq x \leq 19$

**Correct:** Usually means $10 \leq x < 20$ for continuous data (check context)

###  Common Mistake 4: Reading Frequency Directly from y-axis

**Wrong:** Assuming y-axis shows frequency

**Correct:** y-axis shows frequency density; multiply by width to get frequency

###  Common Mistake 5: Forgetting Units

**Wrong:** Stating "The frequency density is 3"

**Correct:** "The frequency density is 3 students per mark" (include units)

---

## 9. Key Formulas Summary

| Formula | Description |
|---------|-------------|
| $\text{Class Width} = \text{Upper Bound} - \text{Lower Bound}$ | Width of class interval |
| $\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$ | Height of histogram bar |
| $\text{Frequency} = \text{Frequency Density} \times \text{Class Width}$ | Area of histogram bar |
| $\text{Midpoint} = \frac{\text{Lower Bound} + \text{Upper Bound}}{2}$ | For frequency polygons |
| $\text{Total Frequency} = \sum (\text{Height} \times \text{Width})$ | Sum of all bar areas |

---

## 10. Exam Focus & Strategy

### 10.1 Frequently Tested Question Types

1. **Drawing histograms** from frequency tables
2. **Completing frequency tables** from partial histogram information
3. **Calculating frequencies** from histogram bar dimensions
4. **Finding missing frequencies** given total frequency
5. **Estimating frequencies** for values within or between classes
6. **Interpreting distribution shape** (skewness)
7. **Drawing frequency polygons**
8. **Comparing distributions** from histograms

### 10.2 Typical Problem-Solving Patterns

**Pattern 1: "Complete the table"**
- Always check what information is given
- Use the formula: FD = F ÷ W
- Verify using total frequency if given

**Pattern 2: "Find the frequency"**
- Read height (FD) and width from graph
- Multiply: F = FD × W

**Pattern 3: "How many values are greater than/less than..."**
- Identify which bars are involved
- Calculate partial frequencies using proportions

**Pattern 4: "Compare two histograms"**
- Look at distribution shape
- Compare spread (range)
- Compare central tendency

### 10.3 Command Word Guidance

| Command Word | What to Do |
|--------------|------------|
| **Draw** | Accurately construct the histogram with proper scales |
| **Complete** | Fill in missing values in a table |
| **Calculate** | Show working and give numerical answer |
| **Estimate** | Find an approximate value (acceptable for partial bars) |
| **Interpret** | Explain what the histogram shows |
| **Compare** | Describe similarities and differences |
| **Explain** | Give reasons for your answer |

### 10.4 How to Gain Full Marks

1. **Show all working** - Even if you can do it mentally
2. **Use correct formula** - Write down FD = F ÷ W
3. **Include units** where appropriate
4. **Check your answer makes sense** - Total should match given total
5. **Label axes clearly** when drawing
6. **Use a ruler** for straight lines
7. **Choose sensible scales** - Avoid awkward intervals

### 10.5 Examiner's Tips

> ** Tip 1:** When asked to estimate a frequency from part of a bar, always show your proportion calculation clearly.

> ** Tip 2:** If the histogram shows equal class widths, you can check your answer by adding all frequencies and comparing to the given total.

> ** Tip 3:** Pay attention to the boundaries - especially if there are gaps in the data (e.g., no values between 20 and 21).

> ** Tip 4:** When comparing histograms, use terms like "more spread out", "higher peak", "skewed to the right/left".

> ** Tip 5:** Practice reading frequency densities from graphs - this is often where students lose marks.

---

## 11. Practice Problems

### Problem 1 (Foundation)
A histogram shows the distribution of times for 100 runners. The bar for $20 \leq t < 30$ has height 3. Find the frequency for this class.

### Problem 2 (Higher)
The table shows information about the heights of plants:

| Height (cm) | Frequency |
|-------------|-----------|
| $0 \leq h < 10$ | 6 |
| $10 \leq h < 20$ | $x$ |
| $20 \leq h < 40$ | 24 |
| $40 \leq h < 50$ | 8 |

The histogram for this data has a bar of height 0.8 for the class $10 \leq h < 20$. Find the value of $x$.

### Problem 3 (Higher)
A histogram is drawn for 200 values. The bars have equal widths. The frequency densities are 5, 8, 12, and 5 respectively. How many values fall in the modal class?

### Answers to Practice Problems:

**Problem 1:**
- Class width = 30 - 20 = 10
- Frequency = 3 × 10 = **30 runners**

**Problem 2:**
- Width = 10
- Frequency density = 0.8
- $x = 10 \times 0.8 = \mathbf{8}$

**Problem 3:**
- Let width = $w$
- Frequencies: $5w, 8w, 12w, 5w$
- Total = $30w = 200$
- $w = \frac{200}{30} = \frac{20}{3}$
- Modal class frequency = $12w = 12 \times \frac{20}{3} = \mathbf{80}$

---

*Notes prepared for Pearson Edexcel IGCSE Mathematics - Handling Data 6*
*© Study Package for A* Students*
