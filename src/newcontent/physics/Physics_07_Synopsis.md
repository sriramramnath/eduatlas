# Chapter 7: Current and Voltage in Circuits
## Pearson Edexcel IGCSE Physics - Concise Synopsis

---

## Essential Equations

### Series Circuits
```
Current:    I = I₁ = I₂ = I₃ = ...
Voltage:    V_total = V₁ + V₂ + V₃ + ...
Resistance: R_total = R₁ + R₂ + R₃ + ...
```

### Parallel Circuits
```
Voltage:    V = V₁ = V₂ = V₃ = ...
Current:    I_total = I₁ + I₂ + I₃ + ...
Resistance: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...
```

### Potential Divider
```
Vout = Vin × (R₂ ÷ (R₁ + R₂))
```

---

## Series vs Parallel Summary

| Feature | Series | Parallel |
|---------|--------|----------|
| Current | Same everywhere | Splits, adds up |
| Voltage | Adds up | Same everywhere |
| Total R | Sum of all | Less than smallest |
| Components | All on, all off | Independent |

---

## Measuring Instruments

| Instrument | Measures | Connection | Resistance |
|------------|----------|------------|------------|
| **Ammeter** | Current (A) | Series | Very low |
| **Voltmeter** | Voltage (V) | Parallel | Very high |

---

## Circuit Symbols

| Component | Symbol |
|-----------|--------|
| Cell | ⎓ |
| Battery | ⎓⎓⎓ |
| Resistor | ▭ |
| Variable resistor | ▭↗ |
| Lamp | ⨂ |
| Switch | ╱╱ |
| Ammeter | Ⓐ |
| Voltmeter | Ⓥ |

---

## Resistance Calculations

### Series
```
R₁ = 4Ω, R₂ = 6Ω
R_total = 4 + 6 = 10Ω
```

### Parallel (Two Resistors)
```
R_total = (R₁ × R₂) ÷ (R₁ + R₂)

R₁ = 4Ω, R₂ = 6Ω
R_total = (4 × 6) ÷ (4 + 6) = 24 ÷ 10 = 2.4Ω
```

### Parallel (General)
```
1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...
```

---

## Potential Divider

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

### Formula
```
Vout = Vin × R₂/(R₁ + R₂)
```

### Example
```
Vin = 12V, R₁ = 4kΩ, R₂ = 8kΩ
Vout = 12 × 8/(4+8) = 12 × 8/12 = 8V
```

---

## Sensors

### LDR (Light-Dependent Resistor)
| Light | Resistance |
|-------|------------|
| Bright | Low |
| Dark | High |

### Thermistor (NTC)
| Temperature | Resistance |
|-------------|------------|
| Hot | Low |
| Cold | High |

---

## Quick Calculation Guide

### Series Circuit
```
V = 12V, R₁ = 3Ω, R₂ = 5Ω
R_total = 3 + 5 = 8Ω
I = V/R = 12/8 = 1.5A (same everywhere)
V₁ = I × R₁ = 1.5 × 3 = 4.5V
V₂ = I × R₂ = 1.5 × 5 = 7.5V
(Check: 4.5 + 7.5 = 12V ✓)
```

### Parallel Circuit
```
V = 12V, R₁ = 4Ω, R₂ = 6Ω
V₁ = V₂ = 12V (same)
I₁ = 12/4 = 3A
I₂ = 12/6 = 2A
I_total = 3 + 2 = 5A
R_total = 12/5 = 2.4Ω
```

---

## Key Exam Points

1. **Ammeter in series** - measures current
2. **Voltmeter in parallel** - measures voltage
3. **Series**: I same, V adds, R adds
4. **Parallel**: V same, I adds, R decreases
5. **Potential divider**: output is fraction of input
6. **LDR**: light ↑ → resistance ↓
7. **Thermistor**: temperature ↑ → resistance ↓

---

## Common Mistakes to Avoid

| Wrong | Right |
|-------|-------|
| Ammeter in parallel | Ammeter in series |
| Voltmeter in series | Voltmeter in parallel |
| R_parallel = R₁ + R₂ | 1/R = 1/R₁ + 1/R₂ |
| Forgetting units | Always include units |

---

## Quick Checklist

- [ ] Know circuit symbols
- [ ] Can calculate series resistance
- [ ] Can calculate parallel resistance
- [ ] Understand current in series/parallel
- [ ] Understand voltage in series/parallel
- [ ] Can use potential divider formula
- [ ] Know LDR and thermistor characteristics
- [ ] Can connect ammeters and voltmeters correctly
