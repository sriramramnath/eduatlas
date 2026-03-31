# Chapter 10: Properties of Waves
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 10.1 What is a Wave?

### Definition

A **wave** is a transfer of energy from one place to another without transferring matter.

### Types of Waves

| Type | Description | Examples |
|------|-------------|----------|
| **Mechanical waves** | Need a medium to travel | Sound, water waves, waves on a string |
| **Electromagnetic waves** | Can travel through vacuum | Light, radio, X-rays |

### Wave Motion

- Energy is transferred
- Particles of the medium oscillate about fixed positions
- No net movement of matter

---

## 10.2 Transverse and Longitudinal Waves

### Transverse Waves

**Definition:** Particles vibrate perpendicular to the direction of wave travel.

```tex
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth,font=\small]
  \node[anchor=west] at (0,3.8) {Direction of travel};
  \draw[->] (4.1,3.8) -- (6.2,3.8);
  \draw[gray!70] (0.8,-2.7) -- (0.8,2.8);
  \draw[thick] (1.2,0) -- (2.2,1.2) -- (3.2,0) -- (4.2,-1.2) -- (5.2,0) -- (6.2,1.2) -- (7.2,0) -- (8.2,-1.2) -- (9.2,0);
  \draw[dashed] (1.2,0) -- (9.2,0);
  \draw[<->] (2.2,0) -- (2.2,1.2);
  \node[right] at (2.2,0.6) {Amplitude};
  \draw[<->] (2.2,-1.9) -- (6.2,-1.9);
  \node[below] at (4.2,-1.9) {Wavelength};
  \node[above] at (2.2,1.2) {Crest};
  \node[below] at (4.2,-1.2) {Trough};
\end{tikzpicture}
```

**Examples:**
- Light waves
- Water waves
- Waves on a string
- All electromagnetic waves

**Features:**
- **Crest:** Highest point
- **Trough:** Lowest point

### Longitudinal Waves

**Definition:** Particles vibrate parallel to the direction of wave travel.

```tex
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth,font=\small]
  \node[anchor=west] at (0,2.6) {Direction of travel};
  \draw[->] (4.1,2.6) -- (6.2,2.6);
  \foreach \x in {1.0,1.15,1.3,1.45,1.6,3.0,3.15,3.3,3.45,3.6,5.0,5.15,5.3,5.45,5.6,7.0,7.15,7.3,7.45,7.6} {
    \draw[thick] (\x,-0.5) -- (\x,1.7);
  }
  \node at (1.3,-1.1) {Compression};
  \node at (2.3,-1.1) {Rarefaction};
  \node at (5.3,-1.1) {Compression};
  \draw[<->] (2.0,0.6) -- (2.8,0.6);
  \draw[<->] (4.0,0.6) -- (4.8,0.6);
\end{tikzpicture}
```

**Examples:**
- Sound waves
- Compression waves in a spring

**Features:**
- **Compression:** Region where particles are close together
- **Rarefaction:** Region where particles are far apart

---

## 10.3 Wave Terms

### Essential Definitions

| Term | Symbol | Definition | Unit |
|------|--------|------------|------|
| **Wavelength** | λ | Distance between two consecutive corresponding points | metres (m) |
| **Amplitude** | A | Maximum displacement from rest position | metres (m) |
| **Frequency** | f | Number of complete waves per second | hertz (Hz) |
| **Period** | T | Time for one complete wave | seconds (s) |
| **Wave speed** | v | Speed at which wave energy travels | m/s |

### Visual Representation

```tex
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth,font=\small]
  \draw[->] (0,0) -- (0,3.1);
  \draw[->] (0,0) -- (8.5,0);
  \draw[thick] (0.6,1.2) -- (1.6,2.2) -- (2.6,1.2) -- (3.6,0.2) -- (4.6,1.2) -- (5.6,2.2) -- (6.6,1.2) -- (7.6,0.2);
  \draw[dashed] (0,1.2) -- (8.1,1.2);
  \draw[<->] (1.6,1.2) -- (1.6,2.2);
  \node[right] at (1.6,1.7) {Amplitude};
  \draw[<->] (1.6,-0.5) -- (5.6,-0.5);
  \node[below] at (3.6,-0.5) {Wavelength};
  \node[below right] at (8.5,0) {Distance};
\end{tikzpicture}
```

### Relationships

```
Period and frequency:    T = 1 ÷ f    or    f = 1 ÷ T

Wave equation:           v = f × λ

Where:
v = wave speed (m/s)
f = frequency (Hz)
λ = wavelength (m)
```

---

## 10.4 The Wave Equation

### Formula

```
wave speed = frequency × wavelength

v = f × λ
```

### Worked Examples

**Example 1:** A wave has frequency 5 Hz and wavelength 0.4 m. Calculate the wave speed.
```
v = f × λ = 5 × 0.4 = 2 m/s
```

**Example 2:** A wave travels at 3 m/s with frequency 10 Hz. Calculate the wavelength.
```
λ = v ÷ f = 3 ÷ 10 = 0.3 m
```

**Example 3:** A wave has speed 340 m/s and wavelength 0.17 m. Calculate the frequency.
```
f = v ÷ λ = 340 ÷ 0.17 = 2000 Hz
```

---

## 10.5 Wave Behaviour

### Reflection

- Waves bounce off a surface
- Angle of incidence = Angle of reflection
- Can form standing waves

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) -- (8,0);
  \draw[dashed] (4,0) -- (4,3.2);
  \draw[->,thick] (1.5,2.6) -- (4,0);
  \draw[->,thick] (4,0) -- (6.5,2.6);
  \node[left] at (2.0,2.0) {Incident};
  \node[right] at (6.0,2.0) {Reflected};
  \node[right] at (4.2,1.6) {Normal};
  \node[below] at (4,-0.2) {Surface};
\end{tikzpicture}
```

### Refraction

- Waves change direction when entering a different medium
- Caused by change in wave speed
- Frequency stays constant, wavelength changes

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (4,-0.4) -- (4,3.2);
  \draw[dashed] (4,1.4) -- (7.0,1.4);
  \draw[dashed] (4,1.4) -- (1.0,1.4);
  \draw[->,thick] (1.2,2.8) -- (4,1.4);
  \draw[->,thick] (4,1.4) -- (5.4,0.2);
  \node at (1.8,3.2) {Air};
  \node at (5.8,3.2) {Glass};
  \node at (1.8,2.6) {(fast)};
  \node at (5.8,2.6) {(slow)};
\end{tikzpicture}
```

### Diffraction

- Waves spread out after passing through a gap or around an obstacle
- Most noticeable when gap size ≈ wavelength

```tex
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth,font=\small]
  \foreach \y in {0.4,1.0,1.6,2.2} {
    \draw[thick] (0,\y) -- (2.6,\y);
  }
  \draw[thick] (3.2,0) -- (3.2,1.1);
  \draw[thick] (3.2,1.7) -- (3.2,2.8);
  \draw[thick] (4.2,0) -- (4.2,1.1);
  \draw[thick] (4.2,1.7) -- (4.2,2.8);
  \foreach \r in {0.7,1.3,1.9,2.5} {
    \draw[thick] (3.7,1.4) arc[start angle=-70,end angle=70,radius=\r];
  }
  \node at (1.4,3.3) {Waves approaching};
  \node at (3.7,3.3) {Diffraction through gap};
\end{tikzpicture}
```

---

## 10.6 Sound Waves

### Nature of Sound

- Sound is a **longitudinal wave**
- Requires a medium to travel (cannot travel through vacuum)
- Produced by vibrating objects

### Sound Properties

| Property | Description |
|----------|-------------|
| **Pitch** | Determined by frequency (higher f = higher pitch) |
| **Loudness** | Determined by amplitude (larger A = louder) |
| **Speed** | About 330-340 m/s in air (depends on temperature) |

### Speed of Sound in Different Media

| Medium | Speed (approx) |
|--------|----------------|
| Air (0°C) | 330 m/s |
| Air (20°C) | 343 m/s |
| Water | 1500 m/s |
| Steel | 5000 m/s |

Sound travels faster in denser media.

---

## 10.7 Electromagnetic Waves

### Properties

- All electromagnetic waves are **transverse**
- All travel at the **same speed in vacuum** (3 × 10⁸ m/s)
- Can travel through vacuum
- Transfer energy

### The Electromagnetic Spectrum

| Type | Wavelength (approx) | Uses |
|------|---------------------|------|
| **Radio waves** | > 1 m | Communication, TV, radio |
| **Microwaves** | 1 mm - 1 m | Mobile phones, cooking, radar |
| **Infrared** | 700 nm - 1 mm | Heating, remote controls, thermal imaging |
| **Visible light** | 400-700 nm | Vision, photography |
| **Ultraviolet** | 10-400 nm | Sun tanning, sterilization |
| **X-rays** | 0.01-10 nm | Medical imaging, security |
| **Gamma rays** | < 0.01 nm | Cancer treatment, sterilization |

### Order of Electromagnetic Spectrum

```tex
\begin{tikzpicture}[x=0.75cm,y=0.75cm,>=stealth,font=\small]
  \draw[<->] (0,2.2) -- (12,2.2);
  \draw[<->] (0,1.3) -- (12,1.3);
  \node[left] at (0,2.2) {Long $\lambda$};
  \node[right] at (12,2.2) {Short $\lambda$};
  \node[left] at (0,1.3) {Low $f$};
  \node[right] at (12,1.3) {High $f$};
  \foreach \x/\label in {0.8/Radio,2.5/Micro,4.2/Infrared,6.0/Visible,7.7/UV,9.4/X-ray,11.1/Gamma} {
    \node at (\x,0) {\label};
  }
  \draw[->] (1.3,0.6) -- (2.0,0.6);
  \draw[->] (3.0,0.6) -- (3.7,0.6);
  \draw[->] (4.9,0.6) -- (5.6,0.6);
  \draw[->] (6.5,0.6) -- (7.2,0.6);
  \draw[->] (8.2,0.6) -- (8.9,0.6);
  \draw[->] (10.0,0.6) -- (10.7,0.6);
\end{tikzpicture}
```

---

## 10.8 Measuring Wave Properties

### Using an Oscilloscope

An oscilloscope displays a wave and allows measurement of:
- **Amplitude** (from peak height)
- **Period** (from distance between peaks)
- **Frequency** (calculated from period)

### Method

1. Connect signal source to oscilloscope
2. Adjust timebase to show 2-3 complete waves
3. Measure period from screen
4. Calculate frequency: f = 1/T

---

## Summary Table: Key Equations

| Equation | Use | Variables |
|----------|-----|-----------|
| v = f × λ | Wave equation | v (m/s), f (Hz), λ (m) |
| T = 1 ÷ f | Period and frequency | T (s), f (Hz) |
| f = 1 ÷ T | Frequency and period | f (Hz), T (s) |

---

## Summary Table: Wave Types

| Feature | Transverse | Longitudinal |
|---------|------------|--------------|
| Particle vibration | Perpendicular to direction | Parallel to direction |
| Examples | Light, water, string | Sound, compression spring |
| Features | Crests and troughs | Compressions and rarefactions |

---

## Exam Tips for Chapter 10

1. **Wave equation** - v = fλ, can rearrange for any variable
2. **Transverse vs longitudinal** - Know the difference
3. **Wave behaviours** - Reflection, refraction, diffraction
4. **EM spectrum** - Know order and approximate wavelengths
5. **Sound** - Longitudinal, needs medium, speed ~340 m/s
6. **Units** - Hz for frequency, m for wavelength

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Confusing transverse and longitudinal | Transverse: perpendicular, Longitudinal: parallel |
| Forgetting wave equation | v = fλ, learn it well |
| Confusing frequency and wavelength | Frequency is waves per second, wavelength is distance |
| Thinking sound is transverse | Sound is longitudinal |
| Wrong EM spectrum order | Radio, Micro, Infra, Visible, Ultra, X, Gamma |
