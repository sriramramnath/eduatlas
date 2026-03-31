# Chapter 12: Light Waves
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 12.1 Reflection of Light

### Law of Reflection

**The angle of incidence equals the angle of reflection.**

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) -- (8,0);
  \draw[dashed] (4,0) -- (4,3.3);
  \draw[->,thick] (1.5,2.8) -- (4,0);
  \draw[->,thick] (4,0) -- (6.5,2.8);
  \node[left] at (2.0,2.0) {Incident ray};
  \node[right] at (6.0,2.0) {Reflected ray};
  \node[right] at (4.2,2.7) {Normal};
  \node[below] at (4,-0.2) {Surface};
  \node at (3.4,0.8) {$i$};
  \node at (4.6,0.8) {$r$};
\end{tikzpicture}
```

### Types of Reflection

| Type | Surface | Result |
|------|---------|--------|
| **Specular** | Smooth (mirror) | Clear image formed |
| **Diffuse** | Rough | Light scattered in all directions |

### Plane Mirrors

**Characteristics of images in plane mirrors:**
1. **Virtual** (cannot be projected on screen)
2. **Upright**
3. **Same size** as object
4. **Laterally inverted** (left-right reversed)
5. **Same distance** behind mirror as object is in front

---

## 12.2 Refraction of Light

### Definition

**Refraction** is the change in direction of light when it passes from one medium to another.

### Cause of Refraction

Light changes speed when entering a different medium:
- **Air to glass:** slows down, bends towards normal
- **Glass to air:** speeds up, bends away from normal

### Refraction Diagram

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) -- (8,0);
  \draw[dashed] (4,-2.5) -- (4,2.8);
  \draw[->,thick] (1.4,2.3) -- (4,0);
  \draw[->,thick] (4,0) -- (5.3,-2.1);
  \node at (1.8,2.8) {Air};
  \node at (6.0,-2.8) {Glass};
  \node[left] at (2.2,1.2) {Incident ray};
  \node[right] at (5.6,-1.4) {Refracted ray};
  \node at (3.4,0.7) {$i$};
  \node at (4.5,-0.8) {$r$};
\end{tikzpicture}
```

### Snell's Law (Not required, but useful)

```
n₁ × sin(i) = n₂ × sin(r)
```

### Refractive Index

**Refractive index (n)** measures how much a medium slows down light.

```
n = speed of light in vacuum ÷ speed of light in medium

n = c ÷ v
```

| Medium | Refractive Index (approx) |
|--------|---------------------------|
| Vacuum | 1.00 |
| Air | 1.00 |
| Water | 1.33 |
| Glass | 1.5 |
| Diamond | 2.42 |

---

## 12.3 Total Internal Reflection

### Conditions for TIR

1. Light travels from **denser to less dense** medium
2. Angle of incidence is **greater than critical angle**

### Critical Angle

The **critical angle** is the angle of incidence that gives an angle of refraction of 90°.

```
sin(c) = 1 ÷ n

Where:
c = critical angle
n = refractive index
```

### Total Internal Reflection Diagram

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \node[anchor=west] at (0,3.2) {Less than critical angle};
  \draw[thick] (0,2.4) -- (7.8,2.4);
  \draw[->,thick] (1.0,4.0) -- (4.0,2.4);
  \draw[->,thick] (4.0,2.4) -- (6.0,1.2);

  \node[anchor=west] at (0,0.9) {Equal to critical angle};
  \draw[thick] (0,0.1) -- (7.8,0.1);
  \draw[->,thick] (1.0,1.7) -- (4.0,0.1);
  \draw[->,thick] (4.0,0.1) -- (7.2,0.1);

  \node[anchor=west] at (0,-1.5) {Greater than critical angle};
  \draw[thick] (0,-2.3) -- (7.8,-2.3);
  \draw[->,thick] (1.0,-0.7) -- (4.0,-2.3);
  \draw[->,thick] (4.0,-2.3) -- (6.7,-0.9);
  \node[right] at (6.8,-0.9) {TIR};
\end{tikzpicture}
```

### Applications of TIR

| Application | How it Works |
|-------------|--------------|
| **Optical fibres** | Light undergoes repeated TIR along fibre |
| **Prismatic binoculars** | TIR in prisms redirects light |
| **Diamond sparkle** | TIR creates brilliant sparkle |
| **Periscopes** | TIR in prisms changes light direction |

---

## 12.4 Optical Fibres

### Structure

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (-3,-1.5) rectangle (3,1.5);
  \draw[thick] (-2.2,-1.0) rectangle (2.2,1.0);
  \draw[thick] (-1.4,-0.5) rectangle (1.4,0.5);
  \node at (0,0) {Core};
  \node at (0,0.85) {Cladding};
  \node at (0,1.3) {Protective coating};
  \draw[->] (3.3,0) -- (1.4,0);
  \node[right] at (3.3,0) {Light travels here};
\end{tikzpicture}
```

### How They Work

1. Light enters the core
2. Core has higher refractive index than cladding
3. Light undergoes total internal reflection at core-cladding boundary
4. Light travels along the fibre by repeated TIR

### Advantages

| Advantage | Explanation |
|-----------|-------------|
| **High bandwidth** | Can carry more data than copper wires |
| **Low signal loss** | Little energy lost over long distances |
| **Lightweight** | Much lighter than copper cables |
| **No interference** | Not affected by electromagnetic interference |
| **Secure** | Difficult to tap without detection |

### Uses

- Telecommunications (telephone, internet)
- Medical endoscopes
- Decorative lighting
- Sensors

---

## 12.5 Lenses

### Types of Lenses

| Type | Shape | Effect |
|------|-------|--------|
| **Converging (convex)** | Thicker in middle | Converges light to a point |
| **Diverging (concave)** | Thinner in middle | Diverges light |

### Converging Lens

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (4,-2.2) .. controls (4.6,-1.2) and (4.6,1.2) .. (4,2.2);
  \draw[thick] (4,-2.2) .. controls (3.4,-1.2) and (3.4,1.2) .. (4,2.2);
  \draw[dashed] (0,0) -- (8,0);
  \foreach \y in {1.2,0.4,-0.4} {
    \draw[->,thick] (0,\y) -- (4,\y);
  }
  \draw[->,thick] (4,1.2) -- (7,0);
  \draw[->,thick] (4,0.4) -- (7,0);
  \draw[->,thick] (4,-0.4) -- (7,0);
  \filldraw (7,0) circle (0.06);
  \node[below] at (7,0) {$F$};
\end{tikzpicture}
```

### Diverging Lens

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (4,-2.2) .. controls (3.4,-1.2) and (3.4,1.2) .. (4,2.2);
  \draw[thick] (4,-2.2) .. controls (4.6,-1.2) and (4.6,1.2) .. (4,2.2);
  \draw[dashed] (0,0) -- (8,0);
  \foreach \y in {1.2,0.4,-0.4} {
    \draw[->,thick] (0,\y) -- (4,\y);
  }
  \draw[->,thick] (4,1.2) -- (7,2.0);
  \draw[->,thick] (4,0.4) -- (7,0.9);
  \draw[->,thick] (4,-0.4) -- (7,-0.2);
  \draw[dashed] (4,1.2) -- (1.6,0);
  \draw[dashed] (4,0.4) -- (1.6,0);
  \draw[dashed] (4,-0.4) -- (1.6,0);
  \filldraw (1.6,0) circle (0.06);
  \node[below] at (1.6,0) {$F$};
\end{tikzpicture}
```

### Lens Terminology

| Term | Definition |
|------|------------|
| **Principal axis** | Line through centre of lens |
| **Optical centre** | Centre point of lens |
| **Focal point (F)** | Where parallel rays converge (or appear to) |
| **Focal length (f)** | Distance from lens to focal point |

---

## 12.6 Ray Diagrams

### Rules for Converging Lenses

1. **Parallel to principal axis** → passes through focal point
2. **Through focal point** → emerges parallel to principal axis
3. **Through optical centre** → continues undeviated

### Image Formation by Converging Lens

| Object Position | Image Characteristics |
|-----------------|----------------------|
| Beyond 2F | Real, inverted, smaller |
| At 2F | Real, inverted, same size |
| Between F and 2F | Real, inverted, larger |
| At F | No image (rays parallel) |
| Inside F | Virtual, upright, larger |

### Magnifying Glass

When object is placed **inside the focal length** of a converging lens:
- Image is **virtual**
- Image is **upright**
- Image is **magnified**
- Image is on same side as object

---

## 12.7 Colour

### White Light

White light is a mixture of all colours of the visible spectrum.

### Dispersion

A prism can split white light into its component colours:

```
    White light →
                  ╲
                   ╲
                    ╲
    ─────────────────╲
                      ╲
                       ╲
                        ╲→ Red
                         ╲→ Orange
                          ╲→ Yellow
                           ╲→ Green
                            ╲→ Blue
                             ╲→ Indigo
                              ╲→ Violet
```

**Order:** Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV)

- **Red** is deviated least
- **Violet** is deviated most

### Primary Colours of Light

- **Red**
- **Green**
- **Blue**

All other colours can be made by mixing these.

### Colour of Objects

| Object Colour | Explanation |
|---------------|-------------|
| **Red object** | Reflects red light, absorbs other colours |
| **White object** | Reflects all colours |
| **Black object** | Absorbs all colours |

---

## Summary Table: Key Equations

| Equation | Use | Variables |
|----------|-----|-----------|
| i = r | Law of reflection | angles |
| n = c ÷ v | Refractive index | n (no unit), c (m/s), v (m/s) |
| sin(c) = 1 ÷ n | Critical angle | c (°), n (no unit) |

---

## Summary Table: Image Characteristics

| Lens Type | Object Position | Image Type | Orientation | Size |
|-----------|-----------------|------------|-------------|------|
| Converging | Beyond 2F | Real | Inverted | Smaller |
| Converging | At 2F | Real | Inverted | Same |
| Converging | F to 2F | Real | Inverted | Larger |
| Converging | Inside F | Virtual | Upright | Larger |
| Diverging | Anywhere | Virtual | Upright | Smaller |

---

## Exam Tips for Chapter 12

1. **Law of reflection** - i = r, measure from normal
2. **Refraction** - Towards normal when slowing down
3. **TIR conditions** - Denser to less dense, angle > critical angle
4. **Critical angle** - sin(c) = 1/n
5. **Optical fibres** - Work by repeated TIR
6. **Lens ray diagrams** - Know the three rules
7. **Dispersion** - Red deviated least, violet most

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Measuring angles from surface | Measure from normal |
| Forgetting TIR needs two conditions | Both conditions must be met |
| Confusing converging and diverging lenses | Convex = converging, concave = diverging |
| Wrong ray diagram rules | Learn the three rules for converging lenses |
| Thinking all lens images are real | Virtual images form when object inside F |
