# Chapter 26: Motion in the Universe
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 26.1 Our Solar System

### Structure

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (sun) at (0,4.5) {SUN};
  \node (mercury) at (-3,2.7) {Mercury};
  \node (venus) at (0,2.7) {Venus};
  \node (earth) at (3,2.7) {Earth};
  \node (mars) at (-3,0.9) {Mars};
  \node (jupiter) at (0,0.9) {Jupiter};
  \node (saturn) at (3,0.9) {Saturn};
  \node (outer) at (0,-0.8) {Uranus, Neptune};
  \draw (sun) -- (0,3.8);
  \draw (-3,3.2) -- (3,3.2);
  \draw (-3,1.4) -- (3,1.4);
  \draw (0,3.8) -- (0,-0.2);
  \foreach \p in {mercury,venus,earth,mars,jupiter,saturn} {
    \draw (\p) -- ++(0,0.5);
  }
  \draw (outer) -- (0,-0.2);
\end{tikzpicture}
```

### Planets (in order from Sun)

| Planet | Distance (AU) | Moons | Notable Features |
|--------|---------------|-------|------------------|
| Mercury | 0.39 | 0 | Smallest, closest to Sun |
| Venus | 0.72 | 0 | Hottest, retrograde rotation |
| Earth | 1.00 | 1 | Only known life |
| Mars | 1.52 | 2 | Red planet, polar ice caps |
| Jupiter | 5.20 | 95+ | Largest, Great Red Spot |
| Saturn | 9.58 | 146+ | Prominent ring system |
| Uranus | 19.22 | 27 | Rotates on side |
| Neptune | 30.05 | 14 | Windiest planet |

### Other Objects

- **Dwarf planets:** Pluto, Ceres, Eris, etc.
- **Asteroids:** Rocky objects, mainly between Mars and Jupiter
- **Comets:** Icy bodies with elliptical orbits
- **Meteoroids:** Small rocky/icy debris

---

## 26.2 Gravitational Force

### Newton's Law of Gravitation

```
Every mass attracts every other mass with a force proportional
to the product of their masses and inversely proportional to
the square of their separation.
```

**Formula:**
```
F = G × (m₁ × m₂) / r²

Where:
F = gravitational force (N)
G = gravitational constant (6.67 × 10⁻¹¹ N m²/kg²)
m₁, m₂ = masses (kg)
r = distance between centers (m)
```

### Key Points

- Gravity is always **attractive**
- Force depends on **mass** (more mass = more force)
- Force decreases with **distance squared** (inverse square law)

### Inverse Square Law

```
Distance    Force
   r         F
   2r       F/4
   3r       F/9
   4r       F/16
```

If distance doubles, force becomes ¼.
If distance triples, force becomes ¹⁄₉.

---

## 26.3 Orbits

### Circular Orbits

For a stable circular orbit:
```
Gravitational force = Centripetal force

G × M × m / r² = m × v² / r

Orbital speed: v = √(GM/r)
```

### Orbital Period

```
T² ∝ r³

(Period squared is proportional to orbital radius cubed)
```

### Types of Orbits

| Orbit Type | Altitude | Period | Use |
|------------|----------|--------|-----|
| Low Earth | 200-2000 km | ~90 min | Imaging, ISS |
| Medium Earth | 2000-35786 km | 2-12 hours | Navigation (GPS) |
| Geostationary | 35786 km | 24 hours | Communications |

### Geostationary Satellites

- Orbit above equator
- Period = 24 hours (matches Earth's rotation)
- Appear stationary from Earth
- Used for TV, communications

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) circle (1.3);
  \node at (0,0) {Earth};
  \draw[->] (1.6,1.0) arc[start angle=35,end angle=320,radius=1.9];
  \node at (0,2.4) {Earth rotates};
  \filldraw (0,3.2) circle (0.08);
  \node[right] at (0.2,3.2) {Satellite};
  \draw[dashed] (0,1.3) -- (0,3.1);
  \node[right] at (0.3,1.8) {Stays above};
  \node[right] at (0.3,1.4) {same point};
\end{tikzpicture}
```

---

## 26.4 Orbital Speed and Period

### Calculating Orbital Speed

**Example:**
Calculate orbital speed of satellite 400 km above Earth.

```
Given:
- Earth mass M = 6.0 × 10²⁴ kg
- Earth radius = 6400 km
- Satellite height = 400 km
- Orbital radius r = 6800 km = 6.8 × 10⁶ m

v = √(GM/r)
v = √((6.67 × 10⁻¹¹ × 6.0 × 10²⁴) / 6.8 × 10⁶)
v = √(5.88 × 10⁷)
v ≈ 7670 m/s (≈ 7.7 km/s)
```

### Relationship Between Orbit Radius and Speed

| Orbital Radius | Orbital Speed |
|----------------|---------------|
| Smaller | Faster |
| Larger | Slower |

Planets closer to Sun move faster than those farther away.

---

## 26.5 The Sun

### Structure

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) circle (2.4);
  \draw[thick] (0,0) circle (1.8);
  \draw[thick] (0,0) circle (1.2);
  \draw[thick] (0,0) circle (0.5);
  \node at (0,0) {Core};
  \node at (0,0.9) {Photosphere};
  \node at (0,1.55) {Chromosphere};
  \node at (0,2.2) {Corona};
  \draw[->] (2.8,2.2) -- (2.3,2.2);
  \node[right] at (2.8,2.2) {Outer atmosphere};
  \draw[->] (2.8,1.55) -- (1.7,1.55);
  \node[right] at (2.8,1.55) {Middle layer};
  \draw[->] (2.8,0.9) -- (1.1,0.9);
  \node[right] at (2.8,0.9) {Visible surface};
  \draw[->] (2.8,0.0) -- (0.5,0.0);
  \node[right] at (2.8,0.0) {Fusion occurs};
\end{tikzpicture}
```

### Key Facts

| Property | Value |
|----------|-------|
| Mass | 1.99 × 10³⁰ kg |
| Radius | 696,000 km |
| Surface temperature | 5,500 °C |
| Core temperature | 15 million °C |
| Composition | 73% hydrogen, 25% helium |

### Energy Production

- Nuclear fusion in core
- 4 hydrogen → 1 helium + energy
- Energy takes ~170,000 years to reach surface

---

## 26.6 The Moon

### Key Facts

| Property | Value |
|----------|-------|
| Diameter | 3,474 km (¼ Earth's) |
| Mass | 7.35 × 10²² kg (¹⁄₈₁ Earth's) |
| Orbital period | 27.3 days |
| Distance from Earth | 384,400 km |
| Gravity | ¹⁄₆ Earth's gravity |

### Phases of the Moon

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node[anchor=west] at (0,2.5) {Sunlight};
  \draw[->] (1.6,2.5) -- (3.4,2.5);
  \fill (1,0.8) circle (0.28);
  \node[below] at (1,0.3) {New};
  \draw (3,0.8) circle (0.28);
  \fill[black] (3,0.8) arc[start angle=90,end angle=270,radius=0.28] -- cycle;
  \node[below] at (3,0.3) {First quarter};
  \draw (5,0.8) circle (0.28);
  \node[below] at (5,0.3) {Full};
  \draw (7,0.8) circle (0.28);
  \fill[black] (7,0.8) arc[start angle=-90,end angle=90,radius=0.28] -- cycle;
  \node[below] at (7,0.3) {Last quarter};
\end{tikzpicture}
```

- Phases caused by changing illumination by Sun
- Same side always faces Earth (tidally locked)

### Eclipses

**Solar Eclipse:**
- Moon between Earth and Sun
- Moon blocks Sun's light
- Only visible from small area

**Lunar Eclipse:**
- Earth between Sun and Moon
- Earth blocks sunlight reaching Moon
- Moon appears reddish (reflected through Earth's atmosphere)

---

## 26.7 Tides

### Cause

- Gravitational pull of Moon (main cause)
- Gravitational pull of Sun (secondary)

### Spring and Neap Tides

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \node at (0,2.8) {Spring tides};
  \node at (0,2.2) {(forces add)};
  \node (sun1) at (0,1.2) {Sun};
  \node (moon1) at (2.5,1.2) {Moon};
  \node (earth1) at (5.0,1.2) {Earth};
  \draw[->] (sun1) -- (moon1);
  \draw[->] (moon1) -- (earth1);

  \node at (9.0,2.8) {Neap tides};
  \node at (9.0,2.2) {(forces partly cancel)};
  \node (moon2) at (9.0,1.6) {Moon};
  \node (earth2) at (9.0,0.2) {Earth};
  \node (sun2) at (11.8,0.2) {Sun};
  \draw[->] (moon2) -- (earth2);
  \draw[->] (earth2) -- (sun2);
\end{tikzpicture}
```

| Tide Type | Moon Phase | Height |
|-----------|------------|--------|
| Spring | Full/New | Highest |
| Neap | First/Last quarter | Lowest |

---

## Summary Table

| Concept | Key Point |
|---------|-----------|
| Gravity | Attractive, inverse square law |
| Orbits | Balance of gravity and motion |
| Geostationary | 24-hour period, fixed position |
| Solar system | 8 planets, many other objects |
| Sun | Fusion-powered, dominant mass |
| Tides | Caused by Moon's gravity |
