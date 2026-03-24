# Chapter 21: Electric Motors and Electromagnetic Induction
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 21.1 Electromagnetic Induction

### Definition

**Electromagnetic induction** is the process of generating a voltage (and current if circuit is complete) by moving a conductor through a magnetic field or changing the magnetic field through a coil.

### Discovery

Discovered by **Michael Faraday** in 1831.

### Ways to Induce a Voltage

| Method | How it Works |
|--------|--------------|
| **Move magnet into/out of coil** | Changing magnetic field induces voltage |
| **Move wire through magnetic field** | Wire cuts magnetic field lines |
| **Change current in nearby coil** | Changing magnetic field induces voltage |

### Factors Affecting Induced Voltage

| Factor | Effect |
|--------|--------|
| **Stronger magnet** | Greater voltage |
| **More turns on coil** | Greater voltage |
| **Faster movement** | Greater voltage |

---

## 21.2 Generators

### AC Generator (Alternator)

```
    N ←───────────→ S
         │
        ╱│╲
       ╱ │ ╲  Rotating coil
      │  ●  │
       ╲ │ ╱
        ╲│╱
         │
    Slip rings (continuous contact)
    Brushes
```

**How it works:**
1. Coil rotates in magnetic field
2. Coil cuts magnetic field lines
3. Voltage induced in coil
4. Slip rings maintain contact
5. Produces alternating current (AC)

### DC Generator

Similar to AC generator but with **commutator** instead of slip rings.
- Commutator reverses connections every half turn
- Produces direct current (DC)
- Current varies but always in same direction

---

## 21.3 Fleming's Right-Hand Rule

### For Generators (Induction)

```
    Thumb = Motion
    First finger = Field (North to South)
    Second finger = Current (induced)
    
    ┌───┐
    │ M │ Thumb (Motion)
    ├───┤
    │ F │ First finger (Field)
    ├───┤
    │ C │ Second finger (Current)
    └───┘
```

---

## 21.4 Transformers

### What is a Transformer?

A device that changes AC voltage using electromagnetic induction.

### Structure

```
    Primary coil        Secondary coil
    (Np turns)          (Ns turns)
    
    ┌────────┐
    │  ╭──╮  │
    │  │  │  │
    │  │  │  │
    │  ╰──╯  │
    │  Iron  │
    │  core  │
    └────────┘
    
    AC input →→→ AC output (different voltage)
```

### How it Works

1. AC in primary coil creates changing magnetic field
2. Iron core channels magnetic field to secondary coil
3. Changing field induces voltage in secondary coil

### Transformer Equation

```
Vp/Vs = Np/Ns

Where:
Vp = primary voltage
Vs = secondary voltage
Np = primary turns
Ns = secondary turns
```

### Types of Transformers

| Type | Condition | Effect |
|------|-----------|--------|
| **Step-up** | Ns > Np | Vs > Vp (increases voltage) |
| **Step-down** | Ns < Np | Vs < Vp (decreases voltage) |

### Worked Example

A transformer has 100 primary turns and 500 secondary turns. The primary voltage is 20 V. Calculate the secondary voltage.

```
Vp/Vs = Np/Ns
20/Vs = 100/500
20/Vs = 1/5
Vs = 20 × 5 = 100 V
```

This is a **step-up transformer**.

---

## 21.5 Transformer Efficiency

### Ideal Transformer

```
Power in = Power out

Vp × Ip = Vs × Is
```

### Real Transformers

Some energy is lost as heat due to:
- Resistance in coils
- Eddy currents in core
- Hysteresis in core

Efficiency is typically 95-99%.

---

## 21.6 Power Transmission

### Why Use High Voltage?

Power = Current × Voltage (P = IV)

For the same power:
- Higher voltage → Lower current
- Lower current → Less heat loss in cables (P = I²R)
- More efficient transmission

### Transmission System

```
Power station → Step-up transformer → High voltage transmission → Step-down transformer → Homes
     ↓                  ↓                      ↓                      ↓
   Low V            High V                High V                  Low V
   High I            Low I                 Low I                  High I
```

---

## 21.7 The National Grid

### What is the National Grid?

The system that distributes electricity across the country.

### Key Features

| Feature | Purpose |
|---------|---------|
| **High voltage transmission** | Reduce energy loss |
| **AC not DC** | Easy to transform voltages |
| **Interconnected network** | Reliable supply |

### Typical Voltages

| Stage | Voltage |
|-------|---------|
| Power station | ~25 kV |
| Transmission | 275-400 kV |
| Local distribution | 11-33 kV |
| Homes | 230 V |

---

## Summary Table: Key Equations

| Equation | Use | Variables |
|----------|-----|-----------|
| Vp/Vs = Np/Ns | Transformer voltages | V (V), N (turns) |
| Vp × Ip = Vs × Is | Transformer power (ideal) | V (V), I (A) |

---

## Summary Table: Left vs Right Hand Rules

| Rule | Use | Hand |
|------|-----|------|
| **Fleming's left-hand** | Motor effect (force) | Left |
| **Fleming's right-hand** | Generator effect (induction) | Right |

---

## Exam Tips for Chapter 21

1. **Induction** - Changing magnetic field induces voltage
2. **Fleming's right-hand rule** - For generators
3. **Transformers** - Only work with AC
4. **Transformer equation** - Vp/Vs = Np/Ns
5. **Step-up vs step-down** - Know the difference
6. **Power transmission** - High voltage = less loss
7. **National Grid** - Understand the system

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Confusing left and right hand rules | Left = motor, Right = generator |
| Thinking transformers work with DC | Transformers only work with AC |
| Forgetting transformer equation | Vp/Vs = Np/Ns |
| Confusing step-up and step-down | More turns = higher voltage |
| Thinking induction needs physical contact | Induction works through space |
