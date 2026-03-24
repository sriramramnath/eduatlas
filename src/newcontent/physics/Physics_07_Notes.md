# Chapter 7: Current and Voltage in Circuits
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 7.1 Circuit Symbols

### Essential Circuit Symbols

| Component | Symbol |
|-----------|--------|
| **Cell** | ⎓ (long line = +, short line = -) |
| **Battery** | ⎓⎓⎓ (multiple cells) |
| **DC Supply** | ⎓ with dots |
| **AC Supply** | ~ in circle |
| **Resistor** | ▭ (rectangle) |
| **Variable Resistor** | ▭ with arrow |
| **Lamp** | ⨂ (circle with cross) |
| **Switch (open)** | ╱╱ (gap) |
| **Switch (closed)** | ─ (connected) |
| **Ammeter** | A in circle |
| **Voltmeter** | V in circle |
| **Fuse** | ▭ with line through |

---

## 7.2 Series Circuits

### Characteristics

In a series circuit:
- Components are connected end-to-end
- There is only one path for current

### Current in Series

**The current is the same at all points in a series circuit.**

```
    A1      A2      A3
    ──●──────●──────●──
      │      │      │
      R1     R2     R3
      │      │      │
    ──●──────●──────●──

I₁ = I₂ = I₃ = I_total
```

### Voltage in Series

**The total voltage equals the sum of voltages across each component.**

```
V_total = V₁ + V₂ + V₃ + ...
```

### Resistance in Series

**The total resistance equals the sum of all resistances.**

```
R_total = R₁ + R₂ + R₃ + ...
```

### Worked Example

Three resistors (2 Ω, 3 Ω, 5 Ω) are connected in series to a 12 V battery.

(a) Total resistance:
```
R_total = 2 + 3 + 5 = 10 Ω
```

(b) Current:
```
I = V ÷ R = 12 ÷ 10 = 1.2 A
```

(c) Voltage across 3 Ω resistor:
```
V = I × R = 1.2 × 3 = 3.6 V
```

---

## 7.3 Parallel Circuits

### Characteristics

In a parallel circuit:
- Components are connected across common points
- There are multiple paths for current

### Voltage in Parallel

**The voltage is the same across all components in parallel.**

```
    ┌────R1────┐
    │          │
───●┼────R2────┼●───
    │          │
    └────R3────┘

V₁ = V₂ = V₃ = V_total
```

### Current in Parallel

**The total current equals the sum of currents through each branch.**

```
I_total = I₁ + I₂ + I₃ + ...
```

### Resistance in Parallel

**The reciprocal of total resistance equals the sum of reciprocals.**

```
1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...
```

For two resistors:
```
R_total = (R₁ × R₂) ÷ (R₁ + R₂)
```

### Special Case: Identical Resistors

For n identical resistors (R) in parallel:
```
R_total = R ÷ n
```

### Worked Example

Two resistors (4 Ω and 6 Ω) are connected in parallel to a 12 V battery.

(a) Total resistance:
```
1/R_total = 1/4 + 1/6 = 3/12 + 2/12 = 5/12
R_total = 12/5 = 2.4 Ω
```

(b) Current through 4 Ω resistor:
```
I = V ÷ R = 12 ÷ 4 = 3 A
```

(c) Total current:
```
I_6Ω = 12 ÷ 6 = 2 A
I_total = 3 + 2 = 5 A
```

---

## 7.4 Comparing Series and Parallel

| Feature | Series | Parallel |
|---------|--------|----------|
| Current | Same everywhere | Splits between branches |
| Voltage | Shared between components | Same across all branches |
| Resistance | R_total = R₁ + R₂ + ... | 1/R_total = 1/R₁ + 1/R₂ + ... |
| If one component fails | All stop working | Others continue working |
| Adding resistors | Increases total R | Decreases total R |

---

## 7.5 Measuring Current and Voltage

### Ammeters

- Measure **current** (in amps, A)
- Connected in **series** with the component
- Have very **low resistance**
- Must not significantly affect the circuit

### Voltmeters

- Measure **voltage** (in volts, V)
- Connected in **parallel** across the component
- Have very **high resistance**
- Draw minimal current

### Correct Connections

```
Series Circuit:
    ──●──A──R──V──●──
       ↑          ↑
    Ammeter    Voltmeter (across R)
    in series  in parallel

Parallel Circuit:
    ┌────R1──A1───┐
    │             │
───●┼────R2──A2──┼●───
    │             │
    └────R3──A3───┘
    
    V connected across each resistor or supply
```

---

## 7.6 Potential Dividers

### What is a Potential Divider?

A potential divider is a circuit that produces an output voltage that is a fraction of the input voltage.

### Circuit

```
    Vin
     │
    R1
     ├──→ Vout
    R2
     │
    GND
```

### Equation

```
Vout = Vin × (R₂ ÷ (R₁ + R₂))
```

### Worked Example

A potential divider has R₁ = 4 kΩ and R₂ = 6 kΩ, with Vin = 10 V.

```
Vout = 10 × (6 ÷ (4 + 6))
Vout = 10 × (6 ÷ 10)
Vout = 10 × 0.6
Vout = 6 V
```

### Applications

| Application | Use |
|-------------|-----|
| **Volume control** | Variable resistor adjusts output voltage |
| **Sensor circuits** | Thermistor or LDR changes resistance with environment |
| **Biasing circuits** | Set operating point for transistors |

---

## 7.7 Variable Resistors

### Function

A variable resistor (rheostat or potentiometer) can change its resistance.

### Uses

| Use | How it Works |
|-----|--------------|
| **Dimmer switch** | Varies current through lamp |
| **Volume control** | Varies signal voltage |
| **Speed control** | Varies current through motor |

### Symbol

▭ with an arrow (indicates adjustable contact)

---

## 7.8 LDRs and Thermistors

### Light-Dependent Resistor (LDR)

| Light Level | Resistance |
|-------------|------------|
| Bright light | Low |
| Dark | High |

**Use:** Light-sensing circuits, automatic street lights

### Thermistor (NTC - Negative Temperature Coefficient)

| Temperature | Resistance |
|-------------|------------|
| Hot | Low |
| Cold | High |

**Use:** Temperature-sensing circuits, thermostats

### Potential Divider with Sensors

```
    Supply
      │
    Sensor (LDR/Thermistor)
      ├──→ Output
    Fixed Resistor
      │
    GND
```

Output voltage changes as sensor resistance changes.

---

## Summary Table: Key Equations

| Equation | Use | Circuit Type |
|----------|-----|--------------|
| I same everywhere | Current | Series |
| V_total = V₁ + V₂ + ... | Voltage | Series |
| R_total = R₁ + R₂ + ... | Resistance | Series |
| V same everywhere | Voltage | Parallel |
| I_total = I₁ + I₂ + ... | Current | Parallel |
| 1/R_total = 1/R₁ + 1/R₂ + ... | Resistance | Parallel |
| Vout = Vin × (R₂/(R₁+R₂)) | Potential divider | Divider |

---

## Summary Table: Component Characteristics

| Component | Symbol | Function |
|-----------|--------|----------|
| Ammeter | A in circle | Measures current (series) |
| Voltmeter | V in circle | Measures voltage (parallel) |
| LDR | rectangle with arrows | Resistance changes with light |
| Thermistor | rectangle with line | Resistance changes with temperature |
| Variable resistor | rectangle with arrow | Adjustable resistance |

---

## Exam Tips for Chapter 7

1. **Draw clear circuit diagrams** - use correct symbols
2. **Ammeter in series** - never in parallel
3. **Voltmeter in parallel** - never in series
4. **Series resistances add** - R_total = R₁ + R₂ + ...
5. **Parallel resistances** - use reciprocal formula
6. **Potential divider** - Vout = Vin × R₂/(R₁+R₂)
7. **Check units** - convert kΩ to Ω if needed

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Ammeter in parallel | Ammeter must be in series |
| Voltmeter in series | Voltmeter must be in parallel |
| Adding parallel resistances directly | Use reciprocal formula |
| Forgetting current splits in parallel | I_total = I₁ + I₂ + ... |
| Confusing series and parallel rules | Learn the differences |
