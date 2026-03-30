# Chapter 27: Stellar Evolution
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 27.1 Life Cycle of Stars

### Overview

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (nebula) at (0,0) {NEBULA};
  \node (protostar) at (3,0) {PROTOSTAR};
  \node (main) at (6.2,0) {MAIN SEQUENCE};
  \node (giant) at (10.1,0) {RED GIANT / SUPERGIANT};

  \node (low1) at (7.6,-2.0) {Low-mass star};
  \node (low2) at (7.6,-2.7) {(like Sun)};
  \node (high1) at (12.0,-2.0) {High-mass star};
  \node (high2) at (12.0,-2.7) {(greater than 8 solar masses)};
  \node (pn) at (7.6,-4.3) {PLANETARY NEBULA};
  \node (sn) at (12.0,-4.3) {SUPERNOVA};
  \node (wd) at (6.7,-6.1) {WHITE DWARF};
  \node (bd) at (9.0,-6.1) {BLACK DWARF};
  \node (ns) at (12.0,-6.1) {NEUTRON STAR};
  \node (bh) at (12.0,-7.9) {BLACK HOLE};

  \draw[->] (nebula) -- (protostar);
  \draw[->] (protostar) -- (main);
  \draw[->] (main) -- (giant);
  \draw (giant) -- (10.1,-0.8);
  \draw (10.1,-0.8) -- (7.6,-0.8);
  \draw (10.1,-0.8) -- (12.0,-0.8);
  \draw (7.6,-0.8) -- (7.6,-1.4);
  \draw (12.0,-0.8) -- (12.0,-1.4);
  \draw[->] (7.6,-3.0) -- (pn);
  \draw[->] (12.0,-3.0) -- (sn);
  \draw[->] (pn) -- (wd);
  \draw[->] (wd) -- (bd);
  \draw[->] (sn) -- (ns);
  \draw[->] (ns) -- (bh);
\end{tikzpicture}
```

---

## 27.2 Nebula to Protostar

### Nebula

- Cloud of gas (mainly hydrogen) and dust
- Gravity slowly pulls material together
- Can span light-years across

### Gravitational Collapse

```
Process:
1. Nebula begins to contract due to gravity
2. Gravitational potential energy → thermal energy
3. Temperature rises
4. Core becomes denser and hotter
5. Protostar forms
```

**Key point:** Gravitational potential energy is converted to thermal energy as the cloud collapses.

---

## 27.3 Main Sequence

### Entry to Main Sequence

- Core temperature reaches ~10 million °C
- Nuclear fusion of hydrogen begins
- Star becomes stable
- Joins main sequence on HR diagram

### Main Sequence Characteristics

| Property | Description |
|----------|-------------|
| **Energy source** | Hydrogen fusion |
| **Reaction** | 4¹H → ⁴He + energy |
| **Stability** | Outward pressure balances gravity |
| **Duration** | Millions to billions of years |

### Our Sun

- Main sequence star
- Age: ~4.6 billion years
- Expected main sequence lifetime: ~10 billion years
- Currently fusing hydrogen in core

---

## 27.4 Red Giants and Supergiants

### When Hydrogen Runs Out

1. Hydrogen in core depleted
2. Core contracts and heats up
3. Hydrogen fusion begins in shell around core
4. Outer layers expand and cool
5. Star becomes red giant (or supergiant for massive stars)

### Red Giant (Low-Mass Stars)

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw (-3.6,-2.0) rectangle (3.6,2.0);
  \draw (-1.5,-0.9) rectangle (1.5,0.9);
  \node at (0,1.2) {Expanded outer layers};
  \node at (0,0.0) {Helium core};
  \node at (0,-0.6) {(not yet fusing)};
  \node at (5.0,1.2) {Cool, red};
  \node at (5.0,-0.1) {Hot, dense};
  \draw[->] (4.2,1.2) -- (3.6,1.2);
  \draw[->] (4.2,-0.1) -- (1.5,-0.1);
\end{tikzpicture}
```

### Supergiant (High-Mass Stars)

- Much larger than red giants
- Can fuse heavier elements (carbon, oxygen, etc.)
- Shorter lifespans despite more fuel

---

## 27.5 Death of Low-Mass Stars

### Planetary Nebula

1. Helium core becomes hot enough for fusion
2. ⁴He → ¹²C (triple-alpha process)
3. Outer layers expelled
4. Forms planetary nebula
5. Core left behind as white dwarf

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw (0,0) ellipse (3.6 and 2.0);
  \draw (0,0) circle (0.8);
  \node at (0,0.9) {PLANETARY NEBULA};
  \node at (0,0.2) {(glowing gas shell)};
  \node at (0,-0.2) {CORE};
  \node at (0,2.6) {Expanding shell of gas};
  \node at (4.7,-0.1) {White dwarf forming};
  \draw[->] (3.6,-0.1) -- (0.8,-0.1);
\end{tikzpicture}
```

### White Dwarf

| Property | Description |
|----------|-------------|
| **Size** | Earth-sized |
| **Mass** | Up to 1.4 solar masses (Chandrasekhar limit) |
| **Density** | Extremely high (~1 tonne per cm³) |
| **Energy source** | None - cooling remnant |
| **Fate** | Eventually becomes black dwarf |

### Black Dwarf

- Theoretical final stage
- White dwarf that has cooled completely
- No longer emits significant radiation
- Timescale: trillions of years

---

## 27.6 Death of High-Mass Stars

### Supernova

When iron core forms:
- Iron fusion absorbs energy (doesn't release)
- Core collapses catastrophically
- Explosive rebound ejects outer layers
- Enormous energy release

**Elements created:** Elements heavier than iron are formed in supernovae.

### Neutron Star

| Property | Description |
|----------|-------------|
| **Formation** | Core of supernova |
| **Size** | ~20 km diameter |
| **Mass** | 1.4-3 solar masses |
| **Density** | Extreme (~atomic nucleus density) |
| **Composition** | Neutrons |

### Black Hole

- Forms from most massive stars (>20-25 solar masses)
- Gravity so strong that nothing escapes
- Not even light can escape
- Singularity at center

**Event horizon:** Boundary beyond which nothing can escape

---

## 27.7 Hertzsprung-Russell (HR) Diagram

### Axes

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw[->] (0,0) -- (0,5.5);
  \draw[->] (0,0) -- (8.0,0);
  \node at (0,5.9) {Luminosity};
  \node at (7.0,-0.6) {Temperature (decreasing)};
  \draw (0.8,4.7) -- (6.8,1.8);
  \node at (4.1,2.6) {Main sequence};
  \draw (1.2,4.4) circle (0.07);
  \draw (1.7,4.9) circle (0.07);
  \node at (1.4,5.2) {Giants};
  \draw (5.7,5.0) circle (0.07);
  \draw (6.2,4.6) circle (0.07);
  \node at (6.1,5.3) {Supergiants};
  \draw (6.0,1.0) circle (0.07);
  \draw (6.6,1.2) circle (0.07);
  \node at (6.7,0.5) {White dwarfs};
\end{tikzpicture}
```

### Features

| Region | Characteristics |
|--------|-----------------|
| **Main sequence** | Most stars; fusing hydrogen |
| **Giants/Supergiants** | Large, cool, luminous |
| **White dwarfs** | Small, hot, dim |

### Star Classification

| Spectral Type | Color | Temperature (K) | Mass (Sun = 1) |
|---------------|-------|-----------------|----------------|
| O | Blue | >30,000 | >16 |
| B | Blue-white | 10,000-30,000 | 2.1-16 |
| A | White | 7,500-10,000 | 1.4-2.1 |
| F | Yellow-white | 6,000-7,500 | 1.04-1.4 |
| G | Yellow | 5,200-6,000 | 0.8-1.04 |
| K | Orange | 3,700-5,200 | 0.45-0.8 |
| M | Red | <3,700 | <0.45 |

**Our Sun:** G-type, yellow, surface temperature ~5,800 K

---

## 27.8 Mass and Stellar Evolution

### Mass Determines Fate

| Initial Mass | Evolution | Final State |
|--------------|-----------|-------------|
| < 0.08 solar | No fusion | Brown dwarf |
| 0.08-0.5 solar | Slow evolution | White dwarf (long life) |
| 0.5-8 solar | Red giant | White dwarf |
| 8-25 solar | Supergiant → Supernova | Neutron star |
| > 25 solar | Supergiant → Supernova | Black hole |

### Key Relationships

- **More massive stars:** Burn fuel faster, shorter lives, hotter, bluer
- **Less massive stars:** Burn fuel slower, longer lives, cooler, redder

---

## Summary Table

| Stage | Description | Duration |
|-------|-------------|----------|
| Nebula | Gas and dust cloud | Millions of years |
| Protostar | Collapsing cloud | Millions of years |
| Main sequence | Hydrogen fusion | Millions to billions of years |
| Red giant/supergiant | Shell burning | Millions of years |
| Death | Planetary nebula/supernova | Brief |
| Remnant | White dwarf/neutron star/black hole | Forever |
