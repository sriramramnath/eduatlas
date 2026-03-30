# Chapter 27: Stellar Evolution
## Pearson Edexcel IGCSE Physics - Concise Synopsis

---

## Life Cycle of Stars

### Low-Mass Stars (like Sun)
```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (nebula) at (0,0) {Nebula};
  \node (protostar) at (2.7,0) {Protostar};
  \node (main) at (5.8,0) {Main Sequence};
  \node (giant) at (8.7,0) {Red Giant};
  \node (pn) at (8.7,-2.0) {Planetary Nebula};
  \node (wd) at (8.7,-4.0) {White Dwarf};
  \node (bd) at (11.4,-4.0) {Black Dwarf};

  \draw[->] (nebula) -- (protostar);
  \draw[->] (protostar) -- (main);
  \draw[->] (main) -- (giant);
  \draw[->] (giant) -- (pn);
  \draw[->] (pn) -- (wd);
  \draw[->] (wd) -- (bd);
\end{tikzpicture}
```

### High-Mass Stars (>8 solar masses)
```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \node (nebula) at (0,0) {Nebula};
  \node (protostar) at (2.7,0) {Protostar};
  \node (main) at (5.8,0) {Main Sequence};
  \node[align=center] (sg) at (8.8,0) {Supergiant};
  \node (sn) at (8.8,-2.0) {Supernova};
  \node (ns) at (7.1,-4.1) {Neutron Star};
  \node (bh) at (10.5,-4.1) {Black Hole};

  \draw[->] (nebula) -- (protostar);
  \draw[->] (protostar) -- (main);
  \draw[->] (main) -- (sg);
  \draw[->] (sg) -- (sn);
  \draw[->] (sn) -- (ns);
  \draw[->] (sn) -- (bh);
\end{tikzpicture}
```

---

## Key Stages

| Stage | Key Feature |
|-------|-------------|
| **Nebula** | Gas and dust cloud |
| **Protostar** | Gravity collapses cloud, heats up |
| **Main sequence** | Hydrogen fusion, stable |
| **Red giant** | Shell burning, expanded |
| **Supernova** | Massive explosion (high-mass only) |

---

## Final States

| Remnant | Forms From | Characteristics |
|---------|------------|-----------------|
| **White dwarf** | Low-mass star | Earth-sized, cooling |
| **Neutron star** | Supernova | ~20 km, extremely dense |
| **Black hole** | Massive supernova | Gravity traps everything |

---

## HR Diagram

```tex
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,font=\small]
  \draw[->] (0,0) -- (0,4.6);
  \draw[->] (0,0) -- (7.2,0);
  \node at (0.7,4.8) {Luminosity};
  \node at (5.7,-0.5) {Temperature};
  \draw (0.9,4.0) -- (5.8,1.2);
  \node at (3.8,2.1) {Main sequence};
  \draw (5.2,4.1) circle (0.07);
  \node at (5.7,4.4) {Supergiants};
  \draw (1.5,3.4) circle (0.07);
  \node at (1.8,3.8) {Giants};
  \draw (5.8,0.8) circle (0.07);
  \node at (6.3,0.5) {White dwarfs};
\end{tikzpicture}
```

---

## Star Classification

| Type | Color | Temperature |
|------|-------|-------------|
| O | Blue | Hottest |
| B | Blue-white | |
| A | White | |
| F | Yellow-white | |
| G | Yellow | Sun |
| K | Orange | |
| M | Red | Coolest |

---

## Mass Determines Fate

| Mass | Final State |
|------|-------------|
| < 8 solar masses | White dwarf |
| 8-25 solar masses | Neutron star |
| > 25 solar masses | Black hole |

---

## Quick Checklist

- [ ] Know star life cycle stages
- [ ] Understand main sequence
- [ ] Know differences for low/high mass stars
- [ ] Understand supernova
- [ ] Know final states (white dwarf, neutron star, black hole)
- [ ] Can interpret HR diagram
- [ ] Know spectral classification
