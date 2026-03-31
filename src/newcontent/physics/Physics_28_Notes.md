# Chapter 28: Cosmology (Physics Only)
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 28.1 The Scale of the Universe

### Units of Distance

| Unit | Definition | Approximate Value |
|------|------------|-------------------|
| **Astronomical Unit (AU)** | Earth-Sun distance | 1.5 × 10¹¹ m |
| **Light-year (ly)** | Distance light travels in 1 year | 9.5 × 10¹⁵ m |
| **Parsec (pc)** | Distance with parallax of 1 arcsecond | 3.1 × 10¹⁶ m = 3.26 ly |

### Scale

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (earth) at (0,0) {Earth};
  \node (solar) at (3.0,0) {Solar System};
  \node (stars) at (6.4,0) {Nearest stars};
  \node (mw) at (9.8,0) {Milky Way};
  \node (group) at (13.0,0) {Local Group};
  \node (universe) at (16.0,0) {Universe};
  \draw[->] (earth) -- (solar);
  \draw[->] (solar) -- (stars);
  \draw[->] (stars) -- (mw);
  \draw[->] (mw) -- (group);
  \draw[->] (group) -- (universe);
  \node[below] at (earth.south) {12,800 km};
  \node[below] at (solar.south) {40 AU};
  \node[below] at (stars.south) {4 ly};
  \node[below] at (mw.south) {100,000 ly};
  \node[below] at (group.south) {5 million ly};
\end{tikzpicture}
```

### The Milky Way

- Our galaxy
- Spiral galaxy
- Diameter: ~100,000 light-years
- Contains: ~200-400 billion stars
- Sun's position: ~26,000 ly from center

---

## 28.2 Doppler Effect and Redshift

### The Doppler Effect

When a wave source moves relative to an observer:
- **Moving toward:** Waves compressed, frequency higher (blueshift)
- **Moving away:** Waves stretched, frequency lower (redshift)

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node[anchor=west] at (0,3.0) {Source moving toward observer};
  \foreach \x in {0.8,1.2,1.6,2.0,2.4,2.8,3.2} {
    \draw (\x,2.2) -- (\x,1.5);
  }
  \draw[->] (4.1,1.85) -- (3.2,1.85);
  \node[right] at (4.2,1.85) {Observer};
  \node[anchor=west] at (5.1,1.85) {Higher frequency (blueshift)};
  \node[anchor=west] at (0,0.8) {Source moving away from observer};
  \foreach \x in {0.8,1.6,2.4,3.2,4.0,4.8} {
    \draw (\x,0.0) -- (\x,-0.7);
  }
  \draw[->] (3.1,-0.35) -- (4.1,-0.35);
  \node[left] at (2.9,-0.35) {Observer};
  \node[anchor=west] at (5.1,-0.35) {Lower frequency (redshift)};
\end{tikzpicture}
```

### Redshift of Galaxies

- Light from distant galaxies is redshifted
- Galaxies are moving away from us
- More distant galaxies show greater redshift

### Calculating Redshift

```
z = Δλ/λ = (λ_observed - λ_rest) / λ_rest

Where:
z = redshift
λ = wavelength
```

**Example:**
If hydrogen line at 656 nm is observed at 720 nm:
```
z = (720 - 656) / 656 = 64/656 ≈ 0.098
```

---

## 28.3 Hubble's Law

### Discovery

Edwin Hubble (1929) discovered:
- Galaxies are moving away from us
- Recession velocity proportional to distance

### Hubble's Law

```
v = H₀ × d

Where:
v = recession velocity (km/s)
H₀ = Hubble constant (~70 km/s/Mpc)
d = distance (Mpc)
```

### Implications

- Universe is expanding
- No center to expansion (all galaxies moving apart)
- Evidence for Big Bang

### Hubble Constant

| Value | Units |
|-------|-------|
| ~70 | km/s/Mpc |
| ~2.3 | × 10⁻¹⁸ s⁻¹ |

---

## 28.4 The Big Bang Theory

### Main Ideas

1. Universe began from extremely hot, dense state
2. Space itself began expanding
3. Universe has been cooling and expanding ever since
4. Occurred approximately 13.8 billion years ago

### Evidence for Big Bang

| Evidence | Explanation |
|----------|-------------|
| **Redshift of galaxies** | Universe is expanding |
| **Cosmic Microwave Background (CMB)** | Relic radiation from early universe |
| **Abundance of light elements** | H, He, Li formed in early universe |

### Cosmic Microwave Background (CMB)

- Discovered 1965 by Penzias and Wilson
- Uniform radiation in all directions
- Temperature: 2.7 K (-270.5 °C)
- Formed ~380,000 years after Big Bang
- Strong evidence for Big Bang

### Timeline of the Universe

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw[->] (0,0) -- (13.5,0) node[right] {Time};
  \draw (0,0.15) -- (0,-0.15);
  \draw (1,0.15) -- (1,-0.15);
  \draw (2,0.15) -- (2,-0.15);
  \draw (3,0.15) -- (3,-0.15);
  \draw (4,0.15) -- (4,-0.15);
  \draw (5,0.15) -- (5,-0.15);
  \draw (7,0.15) -- (7,-0.15);
  \draw (9,0.15) -- (9,-0.15);
  \draw (11,0.15) -- (11,-0.15);
  \draw (13,0.15) -- (13,-0.15);
  \node[rotate=45,anchor=west] at (0,0.25) {0};
  \node[rotate=45,anchor=west] at (1,0.25) {$10^{-43}$ s};
  \node[rotate=45,anchor=west] at (2,0.25) {$10^{-36}$ s};
  \node[rotate=45,anchor=west] at (3,0.25) {$10^{-6}$ s};
  \node[rotate=45,anchor=west] at (4,0.25) {1 s};
  \node[rotate=45,anchor=west] at (5,0.25) {3 min};
  \node[rotate=45,anchor=west] at (7,0.25) {380,000 yr};
  \node[rotate=45,anchor=west] at (9,0.25) {1 billion yr};
  \node[rotate=45,anchor=west] at (11,0.25) {9 billion yr};
  \node[rotate=45,anchor=west] at (13,0.25) {13.8 billion yr};
  \node[align=center,below] at (0,-0.45) {Big Bang};
  \node[align=center,below] at (1,-0.45) {Planck epoch};
  \node[align=center,below] at (2,-0.45) {Inflation};
  \node[align=center,below] at (3,-0.45) {Quarks form};
  \node[align=center,below] at (4,-0.45) {Nucleons form};
  \node[align=center,below] at (5,-0.45) {Nucleosynthesis};
  \node[align=center,below] at (7,-0.45) {Atoms form\\and CMB};
  \node[align=center,below] at (9,-0.45) {First galaxies};
  \node[align=center,below] at (11,-0.45) {Solar System\\forms};
  \node[align=center,below] at (13,-0.45) {Today};
\end{tikzpicture}
```

---

## 28.5 The Fate of the Universe

### Critical Density

The fate depends on the average density of the universe:

```
ρ_critical ≈ 10⁻²⁶ kg/m³
```

### Three Possible Scenarios

| Scenario | Density | Fate |
|----------|---------|------|
| **Open universe** | ρ < ρ_critical | Expands forever |
| **Flat universe** | ρ = ρ_critical | Expands forever, slowing to stop |
| **Closed universe** | ρ > ρ_critical | Eventually collapses (Big Crunch) |

### Current Understanding

- Universe appears to be flat or very close to flat
- Expansion is **accelerating**
- Dark energy may be causing acceleration

### Dark Matter and Dark Energy

| Component | Evidence | Nature |
|-----------|----------|--------|
| **Dark matter** | Galaxy rotation curves, gravitational lensing | Unknown, doesn't emit light |
| **Dark energy** | Accelerating expansion | Unknown repulsive force |

---

## 28.6 Galaxies

### Types of Galaxies

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node at (2,3.2) {Spiral};
  \draw (2,1.8) circle (0.65);
  \draw[thick] (1.35,1.8) .. controls (1.7,2.35) and (2.3,2.35) .. (2.65,1.8);
  \draw[thick] (1.35,1.8) .. controls (1.7,1.25) and (2.3,1.25) .. (2.65,1.8);
  \node at (2,0.5) {Arms with young stars};
  \node at (6,3.2) {Elliptical};
  \draw (6,1.8) ellipse (1.0 and 0.65);
  \node at (6,0.5) {Round or oval};
  \node at (10,3.2) {Irregular};
  \draw[thick] (9.1,2.2) -- (9.6,2.6) -- (10.4,2.4) -- (10.9,1.8) -- (10.3,1.1) -- (9.4,1.3) -- cycle;
  \node at (10,0.5) {No definite shape};
\end{tikzpicture}
```

| Type | Features | Examples |
|------|----------|----------|
| **Spiral** | Disk with spiral arms, central bulge | Milky Way, Andromeda |
| **Elliptical** | Smooth, featureless, little gas | M87 |
| **Irregular** | No definite shape, often small | Large Magellanic Cloud |

### Galaxy Clusters

- Galaxies grouped together by gravity
- Our Local Group contains ~50 galaxies
- Clusters form superclusters
- Largest structures in universe

---

## 28.7 Observing the Universe

### Telescopes

**Optical telescopes:**
- Collect visible light
- Use mirrors or lenses
- Ground-based or space-based (Hubble)

**Other wavelengths:**
| Type | Detects | Advantage |
|------|---------|-----------|
| Radio | Radio waves | Penetrates dust |
| Infrared | Heat radiation | Sees through dust, cool objects |
| X-ray | X-rays | Hot gas, black holes |
| Gamma-ray | Gamma rays | Extreme events |

### Why Space Telescopes?

- No atmospheric distortion
- No light pollution
- Can observe all wavelengths
- Hubble Space Telescope, James Webb Space Telescope

---

## Summary Table: Key Concepts

| Concept | Key Point |
|---------|-----------|
| Redshift | Galaxies moving away |
| Hubble's Law | v = H₀d; expansion |
| Big Bang | Universe began 13.8 billion years ago |
| CMB | Evidence for Big Bang |
| Dark matter | Affects gravity, invisible |
| Dark energy | Causes accelerating expansion |
