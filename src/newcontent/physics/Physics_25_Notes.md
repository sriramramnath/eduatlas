# Chapter 25: Fission and Fusion
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 25.1 Nuclear Fission

### Definition

**Nuclear fission** is the splitting of a heavy nucleus into two smaller nuclei, releasing energy and neutrons.

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node[draw,rounded corners,minimum width=2.4cm,minimum height=1.3cm] (u) at (3.6,2.6) {Heavy nucleus\\(U-235)};
  \node at (6.2,2.6) {Splitting};
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=1.1cm] (p1) at (1.4,0.5) {Product 1};
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=1.1cm] (p2) at (5.8,0.5) {Product 2};
  \node at (8.5,0.5) {Energy + neutrons};
  \draw[->] (u) -- (5.1,2.6);
  \draw[->] (u) -- (p1);
  \draw[->] (u) -- (p2);
\end{tikzpicture}
```

### Induced Fission

Fission can be induced by bombarding the nucleus with neutrons:

```
²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3¹n + Energy
```

### Chain Reactions

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node[draw,rounded corners] (u0) at (4,4.3) {U-235};
  \node[left] at (1.1,4.3) {Slow neutron};
  \draw[->] (1.9,4.3) -- (u0);
  \node at (4,3.4) {Fission};
  \node (prod) at (1.5,2.4) {Products};
  \node (energy) at (4,2.4) {Energy};
  \node (neut) at (6.5,2.4) {2--3 neutrons};
  \draw[->] (u0) -- (prod);
  \draw[->] (u0) -- (energy);
  \draw[->] (u0) -- (neut);
  \node[draw,rounded corners] (u1) at (2.4,0.8) {U-235};
  \node[draw,rounded corners] (u2) at (5.6,0.8) {U-235};
  \draw[->] (neut) -- (u1);
  \draw[->] (neut) -- (u2);
  \node at (4,-0.1) {More fissions continue the chain reaction};
\end{tikzpicture}
```

**Controlled chain reaction (nuclear reactor):**
- One neutron per fission causes another fission
- Steady energy release

**Uncontrolled chain reaction (nuclear bomb):**
- Multiple neutrons cause rapid multiplication
- Explosive energy release

### Energy Release

**Mass-energy equivalence:**
```
E = mc²

Where:
E = energy (J)
m = mass defect (kg)
c = speed of light (3 × 10⁸ m/s)
```

**In fission:**
- Mass of products < Mass of reactants
- Mass difference converted to energy
- ~200 MeV per fission

---

## 25.2 Nuclear Reactors

### Components

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw[thick,rounded corners] (0,0.8) rectangle (8,6.2);
  \node at (4,5.8) {Reactor core};
  \draw[rounded corners] (0.7,4.4) rectangle (7.3,5.4);
  \node[anchor=west] at (1.0,4.95) {Fuel rods (U-235)};
  \draw[rounded corners] (0.7,3.0) rectangle (7.3,4.0);
  \node[anchor=west] at (1.0,3.55) {Moderator (graphite/water)};
  \node[anchor=west] at (1.0,3.15) {Slows neutrons};
  \draw[rounded corners] (0.7,1.5) rectangle (7.3,2.5);
  \node[anchor=west] at (1.0,2.05) {Control rods (boron/cadmium)};
  \node[anchor=west] at (1.0,1.65) {Absorb neutrons};
  \node[draw,rounded corners,minimum width=2.5cm,minimum height=1cm] (coolant) at (2.3,-0.5) {Coolant system};
  \node[draw,rounded corners,minimum width=2.8cm,minimum height=1cm] (steam) at (5.9,-0.5) {Steam generator};
  \draw[->] (4,0.8) -- (coolant);
  \draw[->] (4,0.8) -- (steam);
\end{tikzpicture}
```

### Functions of Components

| Component | Material | Function |
|-----------|----------|----------|
| **Fuel rods** | Uranium-235 | Undergo fission |
| **Moderator** | Graphite or water | Slows neutrons for capture |
| **Control rods** | Boron or cadmium | Absorb neutrons, control rate |
| **Coolant** | Water or CO₂ | Removes heat energy |
| **Shielding** | Concrete/steel | Contains radiation |

### Moderator Purpose

- Fast neutrons are less likely to cause fission
- Moderator slows neutrons by collision
- Slow (thermal) neutrons more readily absorbed by U-235

### Control Rods

- Absorb excess neutrons
- Lowered to slow reaction
- Raised to speed up reaction
- Fully inserted to shut down reactor

---

## 25.3 Nuclear Fusion

### Definition

**Nuclear fusion** is the joining of two light nuclei to form a heavier nucleus, releasing energy.

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=1.2cm] (h2) at (1.5,2.5) {Light nucleus\\(H-2)};
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=1.2cm] (h3) at (5.1,2.5) {Light nucleus\\(H-3)};
  \node at (3.3,2.5) {+};
  \node at (7.5,2.5) {Fusion};
  \node[draw,rounded corners,minimum width=2.4cm,minimum height=1.2cm] (he) at (3.3,0.4) {Heavier nucleus\\(He-4)};
  \node at (6.8,0.4) {Energy + neutron};
  \draw[->] (h2) -- (he);
  \draw[->] (h3) -- (he);
\end{tikzpicture}
```

### Example Reaction

```
²H + ³H → ⁴He + ¹n + Energy
(Deuterium + Tritium → Helium + Neutron)
```

Energy released: ~17.6 MeV

### Conditions Required

| Condition | Reason |
|-----------|--------|
| **High temperature** (~10⁸ °C) | Nuclei have enough kinetic energy to overcome repulsion |
| **High pressure/density** | Increases collision frequency |
| **Confinement** | Maintains conditions long enough |

### Fusion in Stars

- Stars are natural fusion reactors
- Core temperature: ~15 million °C
- Proton-proton chain:
```
4¹H → ⁴He + 2e⁺ + 2ν + Energy
```

### Fusion on Earth

**Challenges:**
- Containing plasma at extreme temperatures
- Achieving net energy gain
- Maintaining confinement

**Approaches:**
- **Magnetic confinement** (tokamak) - magnetic fields contain plasma
- **Inertial confinement** - lasers compress fuel pellet

---

## 25.4 Fission vs Fusion Comparison

| Aspect | Fission | Fusion |
|--------|---------|--------|
| **Process** | Heavy nucleus splits | Light nuclei join |
| **Fuel** | Uranium, plutonium | Hydrogen isotopes |
| **Conditions** | Room temperature, neutron trigger | Extreme temperature/pressure |
| **Products** | Radioactive waste | Helium (non-radioactive) |
| **Energy per reaction** | ~200 MeV | ~17-24 MeV |
| **Control** | Controlled in reactors | Not yet controlled for power |
| **Safety** | Risk of meltdown, radioactive waste | Safer, but technically challenging |

---

## 25.5 Mass-Energy Equivalence

### Einstein's Equation

```
E = mc²
```

**Meaning:** Mass can be converted to energy, and vice versa.

### Mass Defect

- Nucleus mass < Sum of individual nucleon masses
- Mass difference = binding energy
- Binding energy holds nucleus together

### Calculating Energy Release

**Example:**
If 1 kg of matter is completely converted to energy:
```
E = mc² = 1 × (3 × 10⁸)² = 9 × 10¹⁶ J
```

**In nuclear reactions:**
1. Find mass of reactants
2. Find mass of products
3. Calculate mass difference (Δm)
4. Energy released = Δm × c²

---

## 25.6 Nuclear Waste

### Types of Waste

| Type | Examples | Management |
|------|----------|------------|
| **Low-level** | Contaminated clothing, tools | Compact, bury in shallow sites |
| **Intermediate-level** | Reactor components | Solidify in cement, deep burial |
| **High-level** | Spent fuel rods | Cool in ponds, vitrify, deep geological storage |

### Waste Concerns

- Long half-life of some isotopes
- Heat generation
- Environmental contamination risk
- Security concerns

---

## Summary

```
┌─────────────────────────────────────────────────────┐
│              NUCLEAR ENERGY                         │
├──────────────────────┬──────────────────────────────┤
│      FISSION         │          FUSION              │
│  (Splitting heavy)   │    (Joining light)           │
├──────────────────────┼──────────────────────────────┤
│ • Uranium-235        │ • Hydrogen isotopes          │
│ • Chain reaction     │ • High T and P needed        │
│ • Controlled: power  │ • Powers stars               │
│ • Uncontrolled: bomb │ • Cleaner energy source      │
│ • Radioactive waste  │ • Not yet commercial         │
└──────────────────────┴──────────────────────────────┘
```
