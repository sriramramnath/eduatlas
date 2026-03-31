# Chapter 13: Sound
## Pearson Edexcel IGCSE Physics Detailed Notes

---

## 13.1 Nature of Sound

### What is Sound?

Sound is a **longitudinal wave** produced by vibrating objects.

### Key Properties

| Property | Description |
|----------|-------------|
| **Type** | Longitudinal wave |
| **Medium** | Requires a material medium |
| **Production** | Vibrating objects |
| **Speed** | Varies with medium |

### Sound Cannot Travel Through a Vacuum

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) rectangle (5,4);
  \draw[thick] (2.5,0) -- (2.5,-1.1);
  \draw[thick] (2.0,2.4) circle (0.45);
  \draw[thick] (1.8,2.85) -- (1.6,3.2);
  \draw[thick] (2.2,2.85) -- (2.4,3.2);
  \node at (2.0,1.4) {Electric bell};
  \node[right] at (5.2,2.8) {Bell jar};
  \node[right] at (3.0,-1.1) {Vacuum pump};
\end{tikzpicture}
```

---

## 13.2 How Sound Travels

### Compression and Rarefaction

```tex
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth,font=\small]
  \foreach \x in {0.8,0.95,1.1,1.25,1.4,2.8,2.95,3.1,3.25,3.4,4.8,4.95,5.1,5.25,5.4,6.8,6.95,7.1,7.25,7.4} {
    \draw[thick] (\x,0) -- (\x,2.0);
  }
  \node at (1.2,-0.6) {Compression};
  \node at (2.1,-0.6) {Rarefaction};
  \node at (5.2,-0.6) {Compression};
  \draw[->] (0.8,2.8) -- (7.6,2.8);
  \node[above] at (4.2,2.8) {Direction of travel};
\end{tikzpicture}
```

### Process

1. Vibrating object pushes air particles
2. Creates regions of compression (high pressure)
3. Creates regions of rarefaction (low pressure)
4. These regions travel outward as a wave

---

## 13.3 Properties of Sound

### Pitch

**Pitch** is how high or low a sound is.

| Factor | Effect |
|--------|--------|
| **Higher frequency** | Higher pitch |
| **Lower frequency** | Lower pitch |

### Loudness (Amplitude)

**Loudness** depends on the amplitude of the sound wave.

| Factor | Effect |
|--------|--------|
| **Larger amplitude** | Louder sound |
| **Smaller amplitude** | Quieter sound |

### Visual Representation

```tex
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth,font=\small]
  \node[anchor=west] at (0,4.4) {High pitch};
  \draw[thick] plot[smooth] coordinates {(2,4.2) (2.4,4.6) (2.8,4.2) (3.2,4.6) (3.6,4.2) (4.0,4.6) (4.4,4.2) (4.8,4.6) (5.2,4.2)};
  \node[anchor=west] at (0,3.1) {Low pitch};
  \draw[thick] plot[smooth] coordinates {(2,2.9) (3.0,3.5) (4.0,2.9) (5.0,3.5) (6.0,2.9)};
  \node[anchor=west] at (0,1.7) {Loud};
  \draw[thick] plot[smooth] coordinates {(2,1.4) (3,2.4) (4,1.4) (5,0.4) (6,1.4) (7,2.4) (8,1.4)};
  \node[anchor=west] at (0,0.1) {Quiet};
  \draw[thick] plot[smooth] coordinates {(2,-0.1) (3,0.4) (4,-0.1) (5,-0.6) (6,-0.1) (7,0.4) (8,-0.1)};
\end{tikzpicture}
```

---

## 13.4 Speed of Sound

### Speed in Different Media

| Medium | Speed (approx) |
|--------|----------------|
| Air (0°C) | 330 m/s |
| Air (20°C) | 343 m/s |
| Water | 1500 m/s |
| Steel | 5000 m/s |
| Glass | 4500 m/s |

### Key Facts

- Sound travels **fastest in solids**
- Sound travels **slowest in gases**
- Speed **increases with temperature** in gases
- Speed in air ≈ **330-340 m/s**

### Factors Affecting Speed

| Factor | Effect |
|--------|--------|
| **Medium density** | Denser = faster (generally) |
| **Temperature** | Higher T = faster in gases |
| **Elasticity** | More elastic = faster |

---

## 13.5 Range of Hearing

### Human Hearing Range

| Limit | Frequency |
|-------|-----------|
| **Lower limit** | 20 Hz |
| **Upper limit** | 20,000 Hz (20 kHz) |

### Types of Sound

| Type | Frequency Range |
|------|-----------------|
| **Infrasound** | Below 20 Hz |
| **Audible sound** | 20 Hz - 20,000 Hz |
| **Ultrasound** | Above 20,000 Hz |

### Age and Hearing

- Young people can hear up to ~20,000 Hz
- Hearing range decreases with age
- Older people may only hear up to ~12,000-15,000 Hz

---

## 13.6 Ultrasound

### Definition

**Ultrasound** is sound with frequency above 20,000 Hz (above human hearing range).

### Properties

- Can travel through body tissue
- Reflects at boundaries between different media
- Can be focused into beams

### Uses of Ultrasound

| Use | Explanation |
|-----|-------------|
| **Medical imaging** | Creates images of internal organs and fetuses |
| **Scanning (SONAR)** | Detects objects underwater |
| **Cleaning** | Vibrations remove dirt from objects |
| **Distance measurement** | Echo timing measures distance |
| **Industrial testing** | Detects cracks in materials |

### Ultrasound Imaging

```tex
\begin{tikzpicture}[x=0.9cm,y=0.9cm,>=stealth,font=\small]
  \draw[thick] (0,0) rectangle (1.2,1.8);
  \node at (0.6,0.9) {Transducer};
  \draw[fill=gray!20] (3,0) rectangle (3.5,1.8);
  \draw[fill=gray!35] (5,0) rectangle (5.8,1.8);
  \draw[->,thick] (1.2,1.2) -- (3,1.2);
  \draw[->,thick] (1.2,0.9) -- (5,0.9);
  \draw[->,thick] (3,0.6) -- (1.2,0.6);
  \draw[->,thick] (5,0.3) -- (1.2,0.3);
  \node[above] at (3.8,1.2) {Outgoing pulse};
  \node[below] at (3.3,0.4) {Echoes};
\end{tikzpicture}
```

### Advantages over X-rays

| Advantage | Explanation |
|-----------|-------------|
| **Non-ionizing** | Does not damage cells |
| **Safe for fetus** | Can be used during pregnancy |
| **Real-time imaging** | Can see movement |

---

## 13.7 Echoes

### What is an Echo?

An **echo** is a reflected sound wave.

### Calculating Distance

```
distance = speed × time ÷ 2

(÷ 2 because sound travels to object AND back)
```

### Worked Example

An echo is heard 3 seconds after a shout. Speed of sound = 330 m/s. Calculate the distance to the reflecting surface.

```
Distance = (330 × 3) ÷ 2 = 990 ÷ 2 = 495 m
```

### Applications

| Application | Use |
|-------------|-----|
| **SONAR** | Detect submarines, map seabed |
| **Radar** | Detect aircraft, ships (uses radio waves) |
| **Bats** | Navigate and hunt using echoes |
| **Dolphins** | Navigate and communicate |

---

## 13.8 The Ear

### Structure of the Human Ear

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (outer) at (0,0) {Outer ear};
  \node (middle) at (3.2,0) {Middle ear};
  \node (inner) at (6.4,0) {Inner ear};
  \draw[->] (0.8,0) -- (2.4,0);
  \draw[->] (4.0,0) -- (5.6,0);
  \node[below] at (0,-0.4) {Pinna};
  \node[below] at (3.2,-0.4) {Eardrum};
  \node[below] at (6.4,-0.4) {Cochlea};
\end{tikzpicture}
```

### How Hearing Works

1. **Outer ear (pinna)** collects sound waves
2. **Ear canal** directs sound to eardrum
3. **Eardrum** vibrates
4. **Ossicles** (tiny bones) amplify vibrations
5. **Cochlea** converts vibrations to electrical signals
6. **Auditory nerve** sends signals to brain

### Hearing Loss

| Type | Cause |
|------|-------|
| **Conductive** | Problem in outer/middle ear |
| **Sensorineural** | Damage to cochlea or auditory nerve |

---

## 13.9 Noise

### What is Noise?

Unwanted sound that can cause disturbance or damage.

### Effects of Noise

| Effect | Description |
|--------|-------------|
| **Hearing damage** | Prolonged exposure to loud noise |
| **Stress** | Causes psychological stress |
| **Sleep disturbance** | Affects quality of sleep |
| **Interference** | Makes communication difficult |

### Measuring Sound Level

| Unit | Description |
|------|-------------|
| **Decibel (dB)** | Unit of sound intensity level |

### Typical Sound Levels

| Source | Level (dB) |
|--------|------------|
| Threshold of hearing | 0 |
| Whisper | 20 |
| Normal conversation | 60 |
| Busy traffic | 80 |
| Rock concert | 110 |
| Threshold of pain | 120 |
| Jet taking off | 140 |

### Protecting Hearing

| Method | How it Works |
|--------|--------------|
| **Ear defenders** | Block or absorb sound |
| **Ear plugs** | Reduce sound entering ear |
| **Limit exposure time** | Reduces total sound energy |
| **Increase distance** | Sound intensity decreases with distance |

---

## Summary Table: Key Equations

| Equation | Use | Variables |
|----------|-----|-----------|
| distance = (speed × time) ÷ 2 | Echo calculations | distance (m), speed (m/s), time (s) |
| v = f × λ | Wave equation | v (m/s), f (Hz), λ (m) |

---

## Summary Table: Sound Properties

| Property | Factor | Relationship |
|----------|--------|--------------|
| **Pitch** | Frequency | Higher f = higher pitch |
| **Loudness** | Amplitude | Larger A = louder |
| **Speed** | Medium | Solid > Liquid > Gas |

---

## Exam Tips for Chapter 13

1. **Sound is longitudinal** - particles vibrate parallel to direction
2. **Needs medium** - cannot travel through vacuum
3. **Speed** - ~330-340 m/s in air, faster in solids
4. **Pitch and frequency** - directly related
5. **Loudness and amplitude** - directly related
6. **Echo calculations** - remember to divide by 2
7. **Ultrasound uses** - medical imaging, cleaning, SONAR

---

## Common Student Errors

| Error | Correction |
|-------|------------|
| Thinking sound is transverse | Sound is longitudinal |
| Thinking sound travels faster in air than water | Sound travels faster in water |
| Confusing pitch and loudness | Pitch = frequency, Loudness = amplitude |
| Forgetting ÷ 2 in echo calculations | Sound travels to object AND back |
| Wrong human hearing range | 20 Hz - 20,000 Hz |
