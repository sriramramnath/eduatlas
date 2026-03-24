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

```
┌─────────────────────────┐
│  Window (thin mica)     │
│  ┌─────────────────┐    │
│  │                 │    │
│  │    Argon gas    │◄───┼── Anode wire (+)
│  │                 │    │
│  └─────────────────┘    │
│         │               │
│        Cathode (-)      │
└─────────────────────────┘
         │
    ┌────┴────┐
    │ Counter │
    └─────────┘
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

```
Activity
  │
A │████
  │    ████
A/2│        ████
   │            ████
A/4│                ████
   │                    ████
A/8│                        ████
   └───────────────────────────────► Time
   0    1    2    3    4    5
      t½   2t½  3t½  4t½
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

```
Activity (Bq)
    │
800 ┤████
    │    ████
400 ┤        ████
    │            ████
200 ┤                ████
    │                    ████
100 ┤                        ████
    └───────────────────────────────► Time (hours)
    0    4    8   12   16   20
         ↑
      Half-life = 4 hours
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
