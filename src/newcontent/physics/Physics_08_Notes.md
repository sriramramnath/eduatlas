# Chapter 8: Electrical Resistance
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 8.1 What is Resistance?

### Definition

**Resistance** is a measure of how difficult it is for electric current to flow through a component.

```
resistance = voltage ÷ current

R = V ÷ I

Where:
R = resistance (Ω)
V = voltage (V)
I = current (A)
```

### Unit

The unit of resistance is the **ohm (Ω)**.

### Alternative Forms

```
V = I × R
I = V ÷ R
```

### Understanding Resistance

| Resistance | Effect on Current |
|------------|-------------------|
| High resistance | Low current (for given voltage) |
| Low resistance | High current (for given voltage) |

---

## 8.2 Ohm's Law

### Statement

**Ohm's Law:** The current through a conductor is directly proportional to the voltage across it, provided the temperature remains constant.

```
V ∝ I (at constant temperature)
V = I × R
```

### Ohmic Conductors

Materials that obey Ohm's Law:
- Most metals (at constant temperature)
- Show a straight-line V-I graph through origin

```
Voltage (V)
    │
    │    ╱
    │   ╱
    │  ╱
    │ ╱
    │╱
    └──────────→ Current (A)
```

### Non-Ohmic Conductors

Materials that do NOT obey Ohm's Law:
- Filament lamp (resistance increases with temperature)
- Diode (current only flows one way)
- Thermistor (resistance changes with temperature)

---

## 8.3 Factors Affecting Resistance

### For a Wire

| Factor | Effect on Resistance |
|--------|---------------------|
| **Length** | Longer wire = more resistance (R ∝ L) |
| **Cross-sectional area** | Thicker wire = less resistance (R ∝ 1/A) |
| **Material** | Different materials have different resistivities |
| **Temperature** | For metals: hotter = more resistance |

### Length Relationship

```
R ∝ L

If length doubles, resistance doubles.
```

### Cross-Sectional Area Relationship

```
R ∝ 1/A

If area doubles, resistance halves.
```

### Combined Relationship

```
R = ρ × L ÷ A

Where:
ρ = resistivity (Ωm) - property of material
L = length (m)
A = cross-sectional area (m²)
```

---

## 8.4 V-I Characteristics

### Filament Lamp

```
Voltage (V)
    │
    │      ╭─── (curve gets less steep)
    │     ╱
    │    ╱
    │   ╱
    │  ╱
    │ ╱
    │╱
    └──────────→ Current (A)
```

**Explanation:**
- As voltage increases, current increases
- Lamp gets hotter
- Resistance increases (curve gets less steep)
- NOT an ohmic conductor

### Diode

```
Current (A)
    │
    │         ╱ (conducts)
    │        ╱
    │       ╱
    │______╱
    │
    │      (does not conduct)
    │
    └──────────────────→ Voltage (V)
         0
```

**Explanation:**
- Very high resistance in reverse direction (no current)
- Conducts only when forward voltage exceeds threshold (~0.6 V for silicon)
- Used to convert AC to DC (rectification)

### Fixed Resistor (Ohmic)

```
Voltage (V)
    │
    │    ╱
    │   ╱ (straight line)
    │  ╱
    │ ╱
    │╱
    └──────────→ Current (A)
```

**Explanation:**
- Straight line through origin
- Constant resistance
- Obeys Ohm's Law

---

## 8.5 Investigating Resistance

### Method

**Aim:** Investigate how resistance of a wire changes with length.

**Apparatus:**
- Wire (e.g., nichrome)
- Ammeter
- Voltmeter
- Power supply
- Metre rule
- Connecting wires

**Method:**
1. Set up circuit with wire, ammeter in series, voltmeter across wire section
2. Measure voltage and current for different lengths of wire
3. Calculate resistance (R = V/I) for each length
4. Plot graph of R against L

**Safety:**
- Wire may get hot - don't touch
- Use low voltage to prevent overheating

### Expected Results

| Length (cm) | Voltage (V) | Current (A) | Resistance (Ω) |
|-------------|-------------|-------------|----------------|
| 20 | 0.4 | 0.5 | 0.8 |
| 40 | 0.8 | 0.5 | 1.6 |
| 60 | 1.2 | 0.5 | 2.4 |
| 80 | 1.6 | 0.5 | 3.2 |

**Conclusion:** Resistance is directly proportional to length.

---

## 8.6 Resistivity

### Definition

**Resistivity (ρ)** is a property of a material that measures how strongly it opposes the flow of electric current.

### Equation

```
R = ρ × L ÷ A

Where:
R = resistance (Ω)
ρ = resistivity (Ωm)
L = length (m)
A = cross-sectional area (m²)
```

### Resistivity Values

| Material | Resistivity (Ωm) | Type |
|----------|------------------|------|
| Silver | 1.6 × 10⁻⁸ | Conductor |
| Copper | 1.7 × 10⁻⁸ | Conductor |
| Aluminium | 2.7 × 10⁻⁸ | Conductor |
| Nichrome | 1.1 × 10⁻⁶ | Resistor alloy |
| Glass | 10¹² | Insulator |
| Rubber | 10¹⁵ | Insulator |

### Worked Example

Calculate the resistance of a copper wire (ρ = 1.7 × 10⁻⁸ Ωm) with length 2 m and cross-sectional area 1 mm² (1 × 10⁻⁶ m²).

```
R = ρ × L ÷ A
R = (1.7 × 10⁻⁸) × 2 ÷ (1 × 10⁻⁶)
R = 3.4 × 10⁻⁸ ÷ 10⁻⁶
R = 3.4 × 10⁻²
R = 0.034 Ω
```

---

## 8.7 Temperature and Resistance

### Metals

| Temperature | Resistance |
|-------------|------------|
| Increase | Increases |
| Decrease | Decreases |

**Reason:** Higher temperature → more vibrations of metal ions → more collisions for electrons → higher resistance

### Semiconductors (Thermistors)

| Temperature | Resistance |
|-------------|------------|
| Increase | Decreases |
| Decrease | Increases |

**Reason:** Higher temperature → more charge carriers released → lower resistance

### Superconductors

Some materials have **zero resistance** below a critical temperature.

**Applications:**
- MRI scanners
- Maglev trains
- Particle accelerators
- Power transmission (no energy loss)

---

## 8.8 Variable Resistors

### Function

A variable resistor (rheostat) can change its resistance, allowing control of current in a circuit.

### Uses

| Use | Application |
|-----|-------------|
| Dimmer switch | Control lamp brightness |
| Volume control | Adjust sound level |
| Speed control | Adjust motor speed |

---

## Summary Table: Key Equations

| Equation | Use | Variables |
|----------|-----|-----------|
| R = V ÷ I | Ohm's Law / Calculate resistance | R (Ω), V (V), I (A) |
| V = I × R | Calculate voltage | V (V), I (A), R (Ω) |
| I = V ÷ R | Calculate current | I (A), V (V), R (Ω) |
| R = ρ × L ÷ A | Resistivity equation | R (Ω), ρ (Ωm), L (m), A (m²) |

---

## Summary Table: Factors Affecting Resistance

| Factor | Relationship | Effect |
|--------|--------------|--------|
| Length (L) | R ∝ L | Double length = double R |
| Area (A) | R ∝ 1/A | Double area = half R |
| Material | R ∝ ρ | Depends on resistivity |
| Temperature (metals) | R increases with T | Hotter = higher R |

---

## Exam Tips for Chapter 8

1. **Ohm's Law** - V = IR, can be rearranged
2. **V-I graphs** - Know shapes for resistor, lamp, diode
3. **Factors affecting R** - Length, area, material, temperature
4. **Units** - Ω for resistance, Ωm for resistivity
5. **Temperature effect** - Metals: R increases with T
6. **Resistivity formula** - R = ρL/A

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Confusing V = IR with other equations | Learn Ohm's Law well |
| Using wrong units for area | Convert mm² to m² (× 10⁻⁶) |
| Forgetting temperature effect on resistance | Metals: hotter = higher R |
| Thinking all conductors obey Ohm's Law | Only at constant temperature |
| Not converting length to metres | Use metres for resistivity calculations |
