# Chapter 24: Applications of Radioactivity
## Pearson Edexcel IGCSE Physics - Concise Synopsis

---

## Medical Applications

### Tracers
- Radioactive chemical injected/absorbed
- Gamma camera detects radiation
- **Technetium-99m**: 6-hour half-life, gamma emitter

### Radiotherapy
- High radiation dose kills cancer cells
- External (Co-60) or internal sources
- Cancer cells more susceptible to damage

---

## Industrial Applications

### Thickness Gauging
```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node[draw,rounded corners] (source) at (0,0) {Source};
  \node[draw,rounded corners,minimum width=2.6cm,minimum height=1cm] (material) at (3.8,0) {Material};
  \node[draw,rounded corners] (detector) at (7.6,0) {Detector};
  \draw[->] (source) -- (material);
  \draw[->] (material) -- (detector);
\end{tikzpicture}
```
- Beta for thin materials
- Gamma for thick materials
- Real-time monitoring

### Tracers
- Pipeline leak detection
- Flow rate measurement
- Mixing efficiency

### Sterilization
- Gamma kills bacteria/viruses
- Medical equipment and food
- Cold process, no chemicals

---

## Carbon Dating

### Principle
- Living things have constant C-14
- After death, C-14 decays (t½ = 5730 years)
- Measure remaining C-14 for age

### Example
```tex
\begin{tikzpicture}[x=1.35cm,y=1cm,>=stealth,font=\small]
  \node (a) at (0,0) {100\%};
  \node (b) at (2.2,0) {50\%};
  \node (c) at (4.4,0) {25\%};
  \draw[->] (a) -- (b);
  \draw[->] (b) -- (c);
  \node[below] at (0,-0.1) {0};
  \node[below] at (2.2,-0.1) {5730 yr};
  \node[below] at (4.4,-0.1) {11\,460 yr};
\end{tikzpicture}
```

### Limitations
- Only to ~50,000 years
- Contamination affects accuracy

---

## Rock Dating

| Method | Parent → Daughter | Half-life |
|--------|-------------------|-----------|
| Uranium-Lead | ²³⁸U → ²⁰⁶Pb | 4.5 billion yrs |
| Potassium-Argon | ⁴⁰K → ⁴⁰Ar | 1.3 billion yrs |

---

## Smoke Detectors

**Ionization type:**
- Americium-241 (alpha)
- Ionizes air → current flows
- Smoke reduces current → alarm

---

## Safety

### ALARA Principle
- **Time:** Minimize exposure
- **Distance:** Maximize distance
- **Shielding:** Use barriers

### Hazards
- DNA damage
- Cancer risk
- Burns

---

## Quick Checklist

- [ ] Know medical tracer requirements
- [ ] Understand radiotherapy principle
- [ ] Can explain carbon dating
- [ ] Know industrial applications
- [ ] Understand smoke detector
- [ ] Know safety measures
