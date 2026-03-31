# Chapter 22: Atoms and Radioactivity
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 22.1 Atomic Structure

### The Nuclear Model

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (atom) at (4,4.2) {Atom};
  \node[draw,rounded corners,minimum width=2.8cm,minimum height=1cm] (nucleus) at (2.3,2.4) {Nucleus};
  \node at (2.3,1.8) {(centre)};
  \node[draw,rounded corners,minimum width=3.4cm,minimum height=1cm] (electrons) at (5.9,2.4) {Electrons};
  \node at (5.9,1.8) {(negative)};
  \node at (5.9,1.2) {Orbiting in shells};
  \node[draw,rounded corners,minimum width=2.8cm,minimum height=0.9cm] (protons) at (1.0,0.5) {Protons (+)};
  \node[draw,rounded corners,minimum width=2.8cm,minimum height=0.9cm] (neutrons) at (3.6,0.5) {Neutrons (0)};
  \draw[->] (atom) -- (nucleus);
  \draw[->] (atom) -- (electrons);
  \draw[->] (nucleus) -- (protons);
  \draw[->] (nucleus) -- (neutrons);
\end{tikzpicture}
```

### Subatomic Particles

| Particle | Charge | Mass (relative) | Location |
|----------|--------|-----------------|----------|
| **Proton** | +1 | 1 | Nucleus |
| **Neutron** | 0 | 1 | Nucleus |
| **Electron** | -1 | 1/1840 | Shells |

### Key Facts

- **Atomic number (Z)** = number of protons
- **Mass number (A)** = protons + neutrons
- **Number of electrons** = number of protons (in neutral atom)
- **Number of neutrons** = A - Z

### Notation

```tex
\begin{tikzpicture}[x=1cm,y=1cm,font=\small]
  \node at (1.2,1.9) {Mass number $A$};
  \node[draw,rounded corners,minimum width=1.1cm,minimum height=1.4cm] (symbol) at (4,1.1) {$X$};
  \node at (2.9,1.6) {$A$};
  \node at (2.9,0.6) {$Z$};
  \draw[->] (2.0,1.8) -- (3.2,1.6);
  \node at (1.1,0.2) {Atomic number $Z$};
  \draw[->] (2.0,0.3) -- (3.2,0.6);
  \node[align=left] at (7.6,1.0) {Example: $^{238}_{92}\mathrm{U}$\\92 protons, 146 neutrons};
\end{tikzpicture}
```

---

## 22.2 Isotopes

### Definition

**Isotopes** are atoms of the same element with the same number of protons but different numbers of neutrons.

### Example: Carbon Isotopes

| Isotope | Protons | Neutrons | Electrons |
|---------|---------|----------|-----------|
| Carbon-12 | 6 | 6 | 6 |
| Carbon-13 | 6 | 7 | 6 |
| Carbon-14 | 6 | 8 | 6 |

### Properties of Isotopes

- Same chemical properties (same number of electrons)
- Different physical properties (different mass)
- Some isotopes are radioactive (unstable)

---

## 22.3 Radioactivity

### What is Radioactivity?

Radioactivity is the spontaneous decay of unstable nuclei, emitting radiation.

### Causes of Instability

- Too many neutrons
- Too many protons
- Nucleus too large

### Types of Radiation

| Type | Symbol | Nature | Charge | Mass |
|------|--------|--------|--------|------|
| **Alpha (α)** | ⁴He | Helium nucleus | +2 | 4 |
| **Beta (β)** | ⁰e | Fast electron | -1 | 1/1840 |
| **Gamma (γ)** | γ | EM wave | 0 | 0 |

---

## 22.4 Alpha Radiation

### Nature

- Helium nucleus: 2 protons + 2 neutrons
- Symbol: ⁴He or α
- Charge: +2

### Properties

| Property | Description |
|----------|-------------|
| **Range in air** | Few cm (5-10 cm) |
| **Penetration** | Stopped by paper or skin |
| **Ionizing power** | Strong |
| **Deflection by fields** | Deflected by electric and magnetic fields |

### Decay Equation

```
    A        A-4        4
    X    →   Y    +    He
    Z        Z-2        2
    
    Parent → Daughter + Alpha
```

### Example

```
    ²³⁸       ²³⁴        ⁴
     U   →    Th    +   He
     ₉₂        ₉₀        ₂
```

---

## 22.5 Beta Radiation

### Nature

- Fast-moving electron
- Symbol: ⁰e or β
- Charge: -1

### Properties

| Property | Description |
|----------|-------------|
| **Range in air** | Up to 1 m |
| **Penetration** | Stopped by thin aluminum |
| **Ionizing power** | Moderate |
| **Deflection by fields** | Deflected by electric and magnetic fields (opposite to alpha) |

### Decay Equation

```
    A        A         0
    X    →   Y    +    e
    Z        Z+1       -1
    
    Parent → Daughter + Beta
    
    (Neutron → Proton + Electron)
```

### Example

```
    ¹⁴        ¹⁴        0
     C   →    N    +   e
     ₆         ₇       -1
```

---

## 22.6 Gamma Radiation

### Nature

- Electromagnetic wave
- Symbol: γ
- Charge: 0
- No mass

### Properties

| Property | Description |
|----------|-------------|
| **Range in air** | Very long (km) |
| **Penetration** | Reduced by thick lead or concrete |
| **Ionizing power** | Weak |
| **Deflection by fields** | Not deflected |

### Decay

Gamma is often emitted alongside alpha or beta decay.

```
    A*       A
    X   →    X    +    γ
    Z        Z
    
    (Excited state → Ground state + gamma)
```

---

## 22.7 Comparing Radiation

| Property | Alpha | Beta | Gamma |
|----------|-------|------|-------|
| **Nature** | Helium nucleus | Electron | EM wave |
| **Charge** | +2 | -1 | 0 |
| **Mass** | 4 | 1/1840 | 0 |
| **Range in air** | Few cm | ~1 m | km |
| **Penetration** | Paper | Aluminum | Lead/concrete |
| **Ionizing power** | Strong | Moderate | Weak |
| **Deflection by E field** | Yes (toward -) | Yes (toward +) | No |
| **Deflection by B field** | Yes | Yes (opposite) | No |

---

## 22.8 Detecting Radiation

### Geiger-Muller Tube

- Detects ionizing radiation
- Produces electrical pulse when radiation enters
- Connected to counter or ratemeter

### Cloud Chamber

- Shows tracks of radiation
- Alpha: thick, straight tracks
- Beta: thin, wiggly tracks
- Gamma: short, random tracks

### Photographic Film

- Radiation darkens film
- Used in film badges for monitoring exposure

---

## Summary Table: Radiation Properties

| Type | Symbol | Charge | Mass | Penetration | Ionization |
|------|--------|--------|------|-------------|------------|
| Alpha | ⁴He | +2 | 4 | Paper | Strong |
| Beta | ⁰e | -1 | 1/1840 | Aluminum | Moderate |
| Gamma | γ | 0 | 0 | Lead | Weak |

---

## Summary Table: Decay Equations

| Type | Equation |
|------|----------|
| Alpha | ᴬX → ᴬ⁻⁴Y + ⁴He |
| Beta | ᴬX → ᴬY + ⁰e |
| Gamma | ᴬX* → ᴬX + γ |

---

## Exam Tips for Chapter 22

1. **Atomic structure** - Know protons, neutrons, electrons
2. **Isotopes** - Same protons, different neutrons
3. **Three types of radiation** - Alpha, beta, gamma
4. **Properties** - Range, penetration, ionization
5. **Decay equations** - Balance mass and atomic numbers
6. **Deflection** - Alpha and beta deflected, gamma not
7. **Safety** - Know appropriate shielding

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Confusing atomic and mass numbers | Atomic = protons, Mass = protons + neutrons |
| Thinking gamma has mass | Gamma is EM radiation, no mass |
| Forgetting charge conservation | Total charge same before and after |
| Confusing alpha and beta penetration | Alpha stopped by paper, beta by aluminum |
| Thinking all isotopes are radioactive | Only unstable isotopes are radioactive |
