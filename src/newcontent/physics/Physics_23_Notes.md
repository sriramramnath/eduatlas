# Chapter 23: Radiation and Half-Life
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 23.1 Background Radiation

### Sources of Background Radiation

Background radiation is all around us constantly. It comes from:

| Source | Contribution |
|--------|--------------|
| **Radon gas** | ~50% |
| **Rocks and soil** | ~14% |
| **Cosmic rays** | ~10% |
| **Food and drink** | ~12% |
| **Medical** | ~15% |
| **Nuclear industry** | <1% |

### Radon Gas

- Colorless, odorless radioactive gas
- Produced by decay of uranium in rocks and soil
- Can accumulate in buildings, especially basements
- Second leading cause of lung cancer

### Cosmic Rays

- High-energy particles from space
- More intense at higher altitudes
- Aircrew receive higher doses

---

## 23.2 Detecting Radiation

### Geiger-Müller (GM) Tube

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw[thick,rounded corners] (0,0.6) rectangle (6.2,4.3);
  \node[anchor=west] at (0.3,4.0) {Window (thin mica)};
  \draw[thick,rounded corners] (1.0,1.5) rectangle (4.7,3.6);
  \node at (2.85,2.55) {Argon gas};
  \draw[thick] (3.0,1.5) -- (3.0,0.9);
  \node[anchor=west] at (3.15,1.05) {Cathode (-)};
  \draw[->] (6.0,2.55) -- (4.7,2.55);
  \node[anchor=west] at (6.15,2.55) {Anode wire (+)};
  \draw[thick] (3.0,0.6) -- (3.0,-0.2);
  \draw[thick,rounded corners] (2.0,-1.2) rectangle (4.0,-0.2);
  \node at (3.0,-0.7) {Counter};
\end{tikzpicture}
```

**How it works:**
1. Radiation enters through window
2. Ionizes argon gas atoms
3. Ions accelerate to electrodes
4. Creates pulse of current
5. Counter records counts per second

### Cloud Chamber

- Supersaturated vapor in chamber
- Radiation ionizes air molecules
- Vapor condenses on ions
- Visible tracks show radiation paths

### Photographic Film Badge

- Worn by workers handling radiation
- Film darkens when exposed
- Measures cumulative dose
- Different filters identify radiation types

---

## 23.3 Half-Life

### Definition

**Half-life** is the time taken for:
- Half the radioactive nuclei to decay, OR
- The activity to halve

### Understanding Half-Life

```tex
\begin{tikzpicture}[x=1.15cm,y=1cm,>=stealth,font=\small]
  \draw[->] (0,0) -- (6.2,0) node[right] {Time};
  \draw[->] (0,0) -- (0,4.4) node[above] {Activity};
  \draw[smooth,thick] plot coordinates {(0,4) (1,3) (2,2.2) (3,1.55) (4,1.05) (5,0.72)};
  \draw[dashed] (1,0) -- (1,3);
  \draw[dashed] (2,0) -- (2,2.2);
  \draw[dashed] (3,0) -- (3,1.55);
  \draw[dashed] (4,0) -- (4,1.05);
  \node[left] at (0,4) {$A$};
  \node[left] at (0,2.2) {$A/2$};
  \node[left] at (0,1.1) {$A/4$};
  \node[left] at (0,0.55) {$A/8$};
  \node[below] at (1,0) {$t_{1/2}$};
  \node[below] at (2,0) {$2t_{1/2}$};
  \node[below] at (3,0) {$3t_{1/2}$};
  \node[below] at (4,0) {$4t_{1/2}$};
\end{tikzpicture}
```

### Half-Life Calculations

**Formula:**
```
Remaining = Initial × (½)ⁿ

Where n = number of half-lives = time ÷ half-life
```

**Example 1:**
A sample has initial activity 800 Bq and half-life 4 hours. What is the activity after 12 hours?

```
Number of half-lives = 12 ÷ 4 = 3
Activity = 800 × (½)³ = 800 × ⅛ = 100 Bq
```

**Example 2:**
A sample of 100g decays to 12.5g in 30 days. What is the half-life?

```
100g → 50g → 25g → 12.5g (3 half-lives)
3 half-lives = 30 days
Half-life = 30 ÷ 3 = 10 days
```

### Half-Life Values

| Isotope | Half-Life |
|---------|-----------|
| Uranium-238 | 4.5 billion years |
| Carbon-14 | 5730 years |
| Cobalt-60 | 5.3 years |
| Iodine-131 | 8 days |
| Radon-222 | 3.8 days |
| Technetium-99m | 6 hours |

---

## 23.4 Activity and Decay Constant

### Activity (A)

- Measured in **becquerels (Bq)**
- 1 Bq = 1 decay per second
- Activity ∝ Number of undecayed nuclei

### Decay Constant (λ)

```
λ = ln(2) / t½ ≈ 0.693 / t½

Activity A = λN
Where N = number of radioactive nuclei
```

### Exponential Decay

```
N = N₀e^(-λt)
A = A₀e^(-λt)
```

---

## 23.5 Decay Curves

### Activity-Time Graph

```tex
\begin{tikzpicture}[x=0.95cm,y=0.8cm,>=stealth,font=\small]
  \draw[->] (0,0) -- (6.6,0) node[right] {Time (hours)};
  \draw[->] (0,0) -- (0,5.6) node[above] {Activity (Bq)};
  \draw[smooth,thick] plot coordinates {(0,5) (1,4) (2,3.1) (3,2.35) (4,1.75) (5,1.3) (6,0.95)};
  \node[below] at (0,0) {0};
  \node[below] at (1,0) {4};
  \node[below] at (2,0) {8};
  \node[below] at (3,0) {12};
  \node[below] at (4,0) {16};
  \node[below] at (5,0) {20};
  \node[left] at (0,5) {800};
  \node[left] at (0,3.1) {400};
  \node[left] at (0,1.75) {200};
  \node[left] at (0,0.95) {100};
  \draw[dashed] (1,0) -- (1,4);
  \node[below] at (1,-0.45) {Half-life = 4 h};
\end{tikzpicture}
```

### Mass-Time Graph

Same shape - exponential decay curve

---

## 23.6 Random Nature of Decay

### Key Points

1. **Random process** - Cannot predict which nucleus will decay
2. **Spontaneous** - Cannot trigger or prevent decay
3. **Independent** - Each nucleus decays independently
4. **Probability** - Constant probability per unit time

### Implications

- Count rates fluctuate
- Need to take average over time
- Background radiation adds to measurements
- Must subtract background from readings

---

## 23.7 Measuring Half-Life Experimentally

### Method for Short Half-Life

1. Set up GM tube connected to counter
2. Place radioactive source at fixed distance
3. Record count rate at regular intervals
4. Subtract background count
5. Plot activity vs time graph
6. Find time for activity to halve

### Safety Precautions

- Use tongs to handle sources
- Keep source at distance
- Minimize exposure time
- Store in lead-lined box
- Wear film badge

---

## Summary Table: Key Concepts

| Concept | Definition/Description |
|---------|------------------------|
| Background radiation | Radiation all around us from natural and artificial sources |
| Half-life | Time for activity or number of nuclei to halve |
| Activity | Decays per second, measured in Bq |
| Becquerel | 1 decay per second |
| Decay constant | Probability of decay per unit time |

---

## Common Misconceptions

| Misconception | Correction |
|---------------|------------|
| All radiation is man-made | Most background radiation is natural |
| Half-life means half the time | It's time for half to decay |
| Nuclei decay at regular intervals | Decay is random and spontaneous |
| Short half-life = less dangerous | Short half-life sources are more active |
