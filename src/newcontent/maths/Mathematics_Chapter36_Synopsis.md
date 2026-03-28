# Chapter 36: Handling Data 3 - Concise Synopsis
## Measures of Dispersion, Quartiles & Cumulative Frequency

---

# 1. MEASURES OF DISPERSION

## Range
$$\boxed{\text{Range} = \text{Maximum} - \text{Minimum}}$$

- **Simplest** measure of spread
- **Affected by outliers** 
- For grouped data: use class boundaries

## Interquartile Range (IQR)
$$\boxed{\text{IQR} = Q_3 - Q_1}$$

- Measures spread of **middle 50%**
- **NOT affected by outliers** ✓
- More reliable than range for skewed data

---

# 2. QUARTILES AT A GLANCE

## What Quartiles Mean

| Quartile | Position | Also Called |
|----------|----------|-------------|
| $Q_1$ | 25th percentile | Lower Quartile |
| $Q_2$ | 50th percentile | Median |
| $Q_3$ | 75th percentile | Upper Quartile |

## Quick Position Formulas

| For Raw Data | Position |
|--------------|----------|
| $Q_1$ | $\frac{n+1}{4}$ |
| $Q_2$ (Median) | $\frac{n+1}{2}$ |
| $Q_3$ | $\frac{3(n+1)}{4}$ |

| For Grouped Data | Position |
|------------------|----------|
| $Q_1$ | $\frac{n}{4}$ |
| $Q_2$ (Median) | $\frac{n}{2}$ |
| $Q_3$ | $\frac{3n}{4}$ |

---

# 3. FINDING QUARTILES - QUICK METHODS

## Method 1: Position Method (Raw Data)

**Steps:**
1. Order the data (ascending)
2. Find n (number of values)
3. Calculate position using formulas above
4. If position is decimal:
   - e.g., 3.5 → average of 3rd and 4th values
   - e.g., 3.25 → interpolate between 3rd and 4th

## Method 2: Split Method

- **Even n:** Split data in half (exclude middle)
  - $Q_1$ = median of lower half
  - $Q_3$ = median of upper half

- **Odd n:** Split data in half (include middle)
  - $Q_1$ = median of lower half
  - $Q_3$ = median of upper half

---

# 4. CUMULATIVE FREQUENCY

## Building the Table

| Class | Frequency | Upper Boundary | Cumulative Frequency |
|-------|-----------|----------------|---------------------|
| 0-10 | 5 | 10 | 5 |
| 10-20 | 12 | 20 | 5 + 12 = 17 |
| 20-30 | 8 | 30 | 17 + 8 = 25 |

**Key Points:**
- Plot CF against **upper class boundaries**
- Start from **lower boundary of first class** with CF = 0
- Join with **smooth curve** (ogive)

## Reading the Curve

| To Find | Use This Position |
|---------|-------------------|
| Median ($Q_2$) | $\frac{n}{2}$ |
| Lower Quartile ($Q_1$) | $\frac{n}{4}$ |
| Upper Quartile ($Q_3$) | $\frac{3n}{4}$ |
| $k$th Percentile | $\frac{kn}{100}$ |

---

# 5. INTERPOLATION FORMULA

For grouped data, use **linear interpolation**:

$$\boxed{Q_k = L + \left(\frac{\frac{kn}{4} - F}{f}\right) \times w}$$

| Symbol | Meaning |
|--------|---------|
| $L$ | Lower boundary of quartile class |
| $n$ | Total frequency |
| $F$ | Cumulative frequency BEFORE quartile class |
| $f$ | Frequency of quartile class |
| $w$ | Class width |
| $k$ | 1 for $Q_1$, 3 for $Q_3$ |

---

# 6. OUTLIER DETECTION

**Outlier Boundaries:**

$$\boxed{\text{Lower Fence} = Q_1 - 1.5 \times \text{IQR}}$$

$$\boxed{\text{Upper Fence} = Q_3 + 1.5 \times \text{IQR}}$$

Values **outside** these boundaries are potential outliers.

---

# 7. BOX PLOT COMPONENTS

**Five-Number Summary:**
```
    ●─────┌─────┼─────┐─────●
    Min   Q₁    Med   Q₃   Max
          ├──── IQR ────┤
```

---

# 8. COMPARING DATASETS

## Template Answer

> "Dataset A has a **higher/lower** median of X compared to B's Y, showing **better/worse** overall performance."

> "Dataset A has a **smaller/larger** IQR of X compared to B's Y, showing **more/less** consistent results."

## Quick Comparison Rules

| Comparison | Interpretation |
|------------|----------------|
| Higher median | Better average performance |
| Smaller IQR | More consistent data |
| Smaller range | Less overall spread |

---

# 9. EXAM CHECKLIST

## Before the Exam ✓

- [ ] Can calculate range from raw/grouped data
- [ ] Can find quartiles using both methods
- [ ] Can construct cumulative frequency table
- [ ] Can draw cumulative frequency curve
- [ ] Can read values from curve (median, quartiles)
- [ ] Can use interpolation formula
- [ ] Can identify outliers
- [ ] Can draw and interpret box plots
- [ ] Can compare datasets with statistical language

## Common Exam Errors 

| Error | Fix |
|-------|-----|
| Not ordering data | Always sort first |
| Wrong boundary | Use upper class boundaries |
| Straight line graph | Draw smooth curve |
| Using frequencies for range | Range = max value - min value |
| Wrong CF starting point | Start from (lower boundary, 0) |

---

# 10. FORMULA TABLE

| Name | Formula |
|------|---------|
| **Range** | Max - Min |
| **IQR** | $Q_3 - Q_1$ |
| **Q₁ position (raw)** | $\frac{n+1}{4}$ |
| **Q₂ position (raw)** | $\frac{n+1}{2}$ |
| **Q₃ position (raw)** | $\frac{3(n+1)}{4}$ |
| **Q₁ position (grouped)** | $\frac{n}{4}$ |
| **Q₃ position (grouped)** | $\frac{3n}{4}$ |
| **Interpolation** | $L + \frac{\frac{kn}{4} - F}{f} \times w$ |
| **Lower Outlier Fence** | $Q_1 - 1.5 \times \text{IQR}$ |
| **Upper Outlier Fence** | $Q_3 + 1.5 \times \text{IQR}$ |

---

# 11. COMMAND WORDS QUICK GUIDE

| Command | Action Required |
|---------|-----------------|
| **Calculate** | Show working, exact answer |
| **Find** | Show method, use calculator |
| **Draw** | Use appropriate scale, label axes |
| **Plot** | Mark points accurately |
| **Compare** | Both datasets with evidence |
| **Estimate** | Read from graph/interpolate |
| **Explain** | Give statistical reasons |

---

# 12. MARK ALLOCATION GUIDE

| Question Type | Typical Marks | Mark Distribution |
|---------------|---------------|-------------------|
| Calculate range/IQR | 2-3 | M1 for method, A1 for answer |
| Draw CF curve | 3-4 | P1 for points, C1 for curve |
| Read from curve | 2-3 | M1 for showing position, A1 for value |
| Compare datasets | 2-3 | M1 for values, A1 for comparison, A1 for conclusion |
| Full problem | 4-6 | Multiple method and accuracy marks |

---

*📌 Quick revision guide for Pearson Edexcel IGCSE Mathematics - Handling Data 3*
