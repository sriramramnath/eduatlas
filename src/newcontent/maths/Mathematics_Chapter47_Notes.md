# Chapter 47: Shape and Space 7 - Concise Synopsis
## Pearson Edexcel IGCSE Mathematics (Higher Tier)

---

##  UNIT OVERVIEW

**Shape and Space 7** is an advanced geometry unit that builds on previous units and covers:
- Circles (advanced properties, theorems, and calculations)
- Solids (volume and surface area of 3D shapes)
- Similar shapes (scale factors for area and volume)

>  **Exam Importance**: This unit appears in almost every exam paper. Questions typically range from 3 to 8 marks and often combine multiple concepts.

---

# PART 1: CIRCLES (Advanced Geometry)

## 1.1 Key Circle Terminology

Understanding the precise vocabulary is essential for exam success.

| Term | Definition |
|------|------------|
| **Radius ($r$)** | Distance from centre to any point on the circle |
| **Diameter ($d$)** | A chord passing through the centre; $d = 2r$ |
| **Circumference ($C$)** | Perimeter of the circle |
| **Chord** | A straight line joining two points on the circle |
| **Arc** | Part of the circumference |
| **Sector** | Region bounded by two radii and an arc |
| **Segment** | Region bounded by a chord and an arc |
| **Tangent** | A line that touches the circle at exactly one point |
| **Secant** | A line that cuts the circle at two points |

---

## 1.2 Fundamental Circle Formulas

### Circumference
$$C = \pi d = 2\pi r$$

**Derivation**: The ratio $\frac{C}{d}$ is constant for all circles and equals $\pi$.
Therefore, $C = \pi d$.

### Area
$$A = \pi r^2$$

**Derivation**: Imagine cutting a circle into many small sectors and rearranging them to form a parallelogram-like shape. The more sectors, the closer it gets to a rectangle with:
- Length = $\frac{1}{2}C = \frac{1}{2} \times 2\pi r = \pi r$
- Width = $r$

Therefore, $A = \pi r \times r = \pi r^2$

---

## 1.3 Arc Length and Sector Area

### Arc Length

An arc is a portion of the circumference. The length depends on the angle at the centre.

**Formula:**
$$\text{Arc length} = \frac{\theta}{360} \times 2\pi r$$

Where $\theta$ is the angle at the centre in degrees.

>  **Why this works**: The arc length is proportional to the angle. When $\theta = 360°$, we get the full circumference $2\pi r$.

**Worked Example 1:**
> Find the length of the minor arc AB, where the radius is 7 cm and the angle at the centre is 60°.

**Solution:**
$$\text{Arc length} = \frac{60}{360} \times 2\pi \times 7$$
$$= \frac{1}{6} \times 14\pi$$
$$= \frac{7\pi}{3} \text{ cm}$$
$$= 7.33 \text{ cm (3 s.f.)}$$

---

### Sector Area

**Formula:**
$$\text{Sector area} = \frac{\theta}{360} \times \pi r^2$$

>  **Why this works**: Similar to arc length, the sector area is proportional to the angle. When $\theta = 360°$, we get the full circle area $\pi r^2$.

**Worked Example 2:**
> Calculate the area of a sector with radius 12 cm and angle 135°.

**Solution:**
$$\text{Sector area} = \frac{135}{360} \times \pi \times 12^2$$
$$= \frac{3}{8} \times 144\pi$$
$$= 54\pi \text{ cm}^2$$
$$= 169.6 \text{ cm}^2 \text{ (3 s.f.)}$$

---

## 1.4 Segment Area

A segment is the region between a chord and an arc. To find its area:

**Method:**
$$\text{Segment area} = \text{Sector area} - \text{Triangle area}$$

For the triangle, use: $\text{Area} = \frac{1}{2}r^2\sin\theta$

**Combined Formula:**
$$\text{Segment area} = \frac{\theta}{360}\pi r^2 - \frac{1}{2}r^2\sin\theta$$

Or factorised:
$$\text{Segment area} = r^2\left(\frac{\theta\pi}{360} - \frac{\sin\theta}{2}\right)$$

**Worked Example 3:**
> Find the area of the minor segment formed by a chord that subtends an angle of 120° at the centre of a circle of radius 5 cm.

**Solution:**
$$\text{Sector area} = \frac{120}{360} \times \pi \times 5^2 = \frac{25\pi}{3} \text{ cm}^2$$

$$\text{Triangle area} = \frac{1}{2} \times 5^2 \times \sin(120°)$$
$$= \frac{25}{2} \times \frac{\sqrt{3}}{2} = \frac{25\sqrt{3}}{4} \text{ cm}^2$$

$$\text{Segment area} = \frac{25\pi}{3} - \frac{25\sqrt{3}}{4}$$
$$= 25\left(\frac{\pi}{3} - \frac{\sqrt{3}}{4}\right)$$
$$= 25 \times 0.743...$$
$$= 18.6 \text{ cm}^2 \text{ (3 s.f.)}$$

---

## 1.5 Circle Theorems (Essential for IGCSE)

>  **Key Insight**: Circle theorems often appear in questions about angles and lengths. Understanding these is crucial for A* grades.

### Theorem 1: Angle at Centre vs Angle at Circumference
**The angle at the centre is twice the angle at the circumference subtended by the same arc.**

If $\angle AOB$ is at the centre and $\angle ACB$ is at the circumference (both subtended by arc AB):
$$\angle AOB = 2 \times \angle ACB$$

---

### Theorem 2: Angle in a Semicircle
**The angle in a semicircle is a right angle (90°).**

This is a special case of Theorem 1 where the angle at the centre is 180° (diameter).

---

### Theorem 3: Angles in the Same Segment
**Angles in the same segment are equal.**

If two angles are subtended by the same chord and are on the same side of the chord, they are equal.

---

### Theorem 4: Cyclic Quadrilaterals
**Opposite angles of a cyclic quadrilateral sum to 180°.**

If ABCD is a cyclic quadrilateral:
$$\angle A + \angle C = 180°$$
$$\angle B + \angle D = 180°$$

---

### Theorem 5: Tangent and Radius
**A tangent to a circle is perpendicular to the radius at the point of contact.**

If PT is a tangent at point T and O is the centre:
$$\angle OTP = 90°$$

---

### Theorem 6: Tangents from an External Point
**Tangents drawn from an external point to a circle are equal in length.**

If PA and PB are tangents from point P to the circle:
$$PA = PB$$

---

### Theorem 7: Alternate Segment Theorem
**The angle between a tangent and a chord equals the angle in the alternate segment.**

If PT is a tangent at T and TAB is a chord:
$$\angle PTA = \angle TBA$$

---

## 1.6 Common Circle Problem Types

### Type 1: Finding Unknown Angles

**Worked Example 4:**
> In the diagram, O is the centre of the circle. Angle AOB = 130°. Find angle ACB where C is any point on the major arc.

**Solution:**
Since the angle at the centre is twice the angle at the circumference:
$$\angle ACB = \frac{130°}{2} = 65°$$

---

### Type 2: Perimeter of Composite Shapes

**Worked Example 5:**
> A shape consists of a sector of radius 8 cm and angle 120°, attached to a rectangle of length 10 cm and width 6 cm. Find the total perimeter.

**Solution:**
Arc length = $\frac{120}{360} \times 2\pi \times 8 = \frac{16\pi}{3}$ cm

Rectangular part: $2(10) + 6 = 26$ cm (only 3 sides if attached)

**Total perimeter** = $\frac{16\pi}{3} + 26 + \text{additional sides}$ (depends on configuration)

---

### Type 3: Finding Radius from Arc/Sector

**Worked Example 6:**
> A sector has area $48\pi$ cm² and angle 150°. Find its radius.

**Solution:**
$$\frac{150}{360} \times \pi r^2 = 48\pi$$
$$\frac{5}{12}r^2 = 48$$
$$r^2 = 48 \times \frac{12}{5} = \frac{576}{5} = 115.2$$
$$r = \sqrt{115.2} = 10.7 \text{ cm (3 s.f.)}$$

---

##  Common Mistakes - Circles

| Mistake | Correction |
|---------|------------|
| Using $d = r$ | Remember: $d = 2r$ |
| Forgetting to convert angle to fraction | Always use $\frac{\theta}{360}$ not $\frac{\theta}{2\pi}$ |
| Confusing segment and sector | Segment = sector - triangle |
| Not using radians in trigonometric functions | IGCSE uses degrees; ensure calculator is in DEG mode |
| Confusing major and minor arc/segment | Check if angle > 180° for major |

---

# PART 2: SOLIDS (Volume and Surface Area)

## 2.1 Prisms

### Definition
A **prism** is a 3D shape with a constant cross-section along its length.

### Volume of Any Prism
$$\text{Volume} = \text{Area of cross-section} \times \text{length}$$

Or: $V = A \times l$

>  **Key Insight**: This formula works for ALL prisms - cuboids, cylinders, triangular prisms, hexagonal prisms, etc.

---

### Cuboid
A cuboid is a prism with a rectangular cross-section.

**Volume:**
$$V = l \times w \times h$$

**Surface Area:**
$$SA = 2(lw + lh + wh)$$

**Worked Example 7:**
> A cuboid has dimensions 5 cm × 8 cm × 12 cm. Calculate its volume and surface area.

**Solution:**
$$V = 5 \times 8 \times 12 = 480 \text{ cm}^3$$

$$SA = 2(5 \times 8 + 5 \times 12 + 8 \times 12)$$
$$= 2(40 + 60 + 96)$$
$$= 2 \times 196 = 392 \text{ cm}^2$$

---

### Cylinder
A cylinder is a prism with a circular cross-section.

**Volume:**
$$V = \pi r^2 h$$

**Curved Surface Area:**
$$CSA = 2\pi r h$$

**Total Surface Area:**
$$TSA = 2\pi r h + 2\pi r^2 = 2\pi r(h + r)$$

>  **Exam Tip**: Check whether the question asks for "curved surface area" or "total surface area". An open cylinder has no top!

**Worked Example 8:**
> A cylinder has radius 4 cm and height 15 cm. Find:
> (a) Its volume
> (b) Its curved surface area
> (c) Its total surface area

**Solution:**
**(a)** $V = \pi \times 4^2 \times 15 = 240\pi = 754 \text{ cm}^3$ (3 s.f.)

**(b)** $CSA = 2\pi \times 4 \times 15 = 120\pi = 377 \text{ cm}^2$ (3 s.f.)

**(c)** $TSA = 2\pi \times 4 \times (15 + 4) = 152\pi = 478 \text{ cm}^2$ (3 s.f.)

---

### Triangular Prism

**Volume:**
$$V = \left(\frac{1}{2}bh_{\triangle}\right) \times l$$

Where $b$ and $h_{\triangle}$ are the base and height of the triangular cross-section.

**Surface Area:** Sum of all faces (2 triangular ends + 3 rectangular sides)

**Worked Example 9:**
> A triangular prism has a cross-section which is a right-angled triangle with legs 3 cm and 4 cm. The length of the prism is 10 cm. Find its volume.

**Solution:**
$$\text{Area of triangle} = \frac{1}{2} \times 3 \times 4 = 6 \text{ cm}^2$$

$$V = 6 \times 10 = 60 \text{ cm}^3$$

---

## 2.2 Pyramids and Cones

### Pyramid

**Volume:**
$$V = \frac{1}{3} \times \text{Base Area} \times \text{Height}$$

>  **Why ⅓?**: A pyramid has exactly $\frac{1}{3}$ the volume of a prism with the same base and height.

---

### Cone

A cone is a pyramid with a circular base.

**Volume:**
$$V = \frac{1}{3}\pi r^2 h$$

**Curved Surface Area:**
$$CSA = \pi r l$$

Where $l$ is the **slant height** (not the vertical height).

**Total Surface Area:**
$$TSA = \pi r l + \pi r^2 = \pi r(l + r)$$

### Relationship Between $h$, $r$, and $l$

Using Pythagoras' theorem in the cross-section:
$$l^2 = r^2 + h^2$$

**Worked Example 10:**
> A cone has radius 6 cm and vertical height 8 cm. Find its volume and total surface area.

**Solution:**
First, find the slant height:
$$l = \sqrt{r^2 + h^2} = \sqrt{36 + 64} = \sqrt{100} = 10 \text{ cm}$$

**Volume:**
$$V = \frac{1}{3}\pi \times 6^2 \times 8 = \frac{1}{3}\pi \times 36 \times 8 = 96\pi \text{ cm}^3$$

**Total Surface Area:**
$$TSA = \pi \times 6 \times (10 + 6) = 96\pi \text{ cm}^2$$

---

## 2.3 Spheres

### Volume of a Sphere
$$V = \frac{4}{3}\pi r^3$$

### Surface Area of a Sphere
$$SA = 4\pi r^2$$

>  **Derivation insight**: The surface area formula explains the volume formula! Imagine the sphere's surface divided into tiny pyramids with apex at the centre. Each has base area $\delta A$ and height $r$, giving volume $\frac{1}{3}r\delta A$. Sum: $\frac{1}{3}r \times 4\pi r^2 = \frac{4}{3}\pi r^3$.

**Worked Example 11:**
> A sphere has volume $288\pi$ cm³. Find its surface area.

**Solution:**
$$\frac{4}{3}\pi r^3 = 288\pi$$
$$\frac{4}{3}r^3 = 288$$
$$r^3 = 288 \times \frac{3}{4} = 216$$
$$r = 6 \text{ cm}$$

$$SA = 4\pi \times 6^2 = 144\pi \text{ cm}^2$$

---

### Hemisphere (Half a Sphere)

**Volume:**
$$V = \frac{2}{3}\pi r^3$$

**Curved Surface Area:**
$$CSA = 2\pi r^2$$

**Total Surface Area (including flat circular base):**
$$TSA = 2\pi r^2 + \pi r^2 = 3\pi r^2$$

>  **Common Mistake**: Forgetting to add the flat circular face when calculating total surface area of a hemisphere.

---

## 2.4 Compound Solids

### Strategy for Compound Solid Problems

1. **Identify** all component shapes
2. **Calculate** volume/area of each part separately
3. **Add or subtract** as appropriate
4. **Check** for overlapping regions

---

### Type 1: Adding Volumes

**Worked Example 12:**
> A solid consists of a hemisphere of radius 5 cm on top of a cylinder of the same radius and height 12 cm. Find the total volume.

**Solution:**
$$V_{\text{cylinder}} = \pi \times 5^2 \times 12 = 300\pi \text{ cm}^3$$

$$V_{\text{hemisphere}} = \frac{2}{3}\pi \times 5^3 = \frac{250\pi}{3} \text{ cm}^3$$

$$V_{\text{total}} = 300\pi + \frac{250\pi}{3} = \frac{1150\pi}{3} = 1204 \text{ cm}^3 \text{ (3 s.f.)}$$

---

### Type 2: Removing Volumes (Hollow Objects)

**Worked Example 13:**
> A cylindrical pipe has outer radius 8 cm and inner radius 6 cm. The pipe is 50 cm long. Find the volume of material used to make the pipe.

**Solution:**
$$V_{\text{outer}} = \pi \times 8^2 \times 50 = 3200\pi \text{ cm}^3$$

$$V_{\text{inner}} = \pi \times 6^2 \times 50 = 1800\pi \text{ cm}^3$$

$$V_{\text{material}} = 3200\pi - 1800\pi = 1400\pi \text{ cm}^3$$
$$= 4398 \text{ cm}^3 \text{ (3 s.f.)}$$

**Alternative Method:**
$$V_{\text{material}} = \pi h(R^2 - r^2)$$
$$= \pi \times 50 \times (64 - 36)$$
$$= \pi \times 50 \times 28 = 1400\pi \text{ cm}^3$$

---

### Type 3: Surface Area of Compound Solids

**Worked Example 14:**
> A solid consists of a cone of radius 4 cm and slant height 10 cm attached to a hemisphere of the same radius. Find the total surface area.

**Solution:**
The base of the cone and the flat face of the hemisphere are joined together, so they are NOT part of the external surface.

$$SA_{\text{cone}} = \pi \times 4 \times 10 = 40\pi \text{ cm}^2$$ (curved surface only)

$$SA_{\text{hemisphere}} = 2\pi \times 4^2 = 32\pi \text{ cm}^2$$ (curved surface only)

$$SA_{\text{total}} = 40\pi + 32\pi = 72\pi \text{ cm}^2$$

---

##  Common Mistakes - Solids

| Mistake | Correction |
|---------|------------|
| Confusing height ($h$) and slant height ($l$) in cones | Always use Pythagoras to find the missing one |
| Forgetting $\frac{1}{3}$ in pyramid/cone volume | V = $\frac{1}{3}$ × base area × height |
| Using curved surface area when total is asked | TSA includes all surfaces |
| Forgetting to subtract hidden faces in compound solids | Only count external surfaces |
| Wrong formula for sphere | Volume = $\frac{4}{3}\pi r^3$, Surface = $4\pi r^2$ |

---

# PART 3: SIMILAR SHAPES

## 3.1 Understanding Similarity

Two shapes are **similar** if they have the same shape but different sizes. This means:
- Corresponding angles are equal
- Corresponding sides are in the same ratio

The **scale factor** (or linear scale factor) is the ratio of corresponding lengths:
$$k = \frac{\text{Length in new shape}}{\text{Length in original shape}}$$

---

## 3.2 Scale Factor for Area

>  **Key Principle**: If two shapes are similar with linear scale factor $k$, then the **area scale factor** is $k^2$.

**Why?** Area is measured in square units. If each length is multiplied by $k$, the area is multiplied by $k \times k = k^2$.

**Formula:**
$$\frac{A_2}{A_1} = k^2$$

**Worked Example 15:**
> Two similar triangles have areas 18 cm² and 50 cm². The smaller triangle has a side of length 6 cm. Find the corresponding side in the larger triangle.

**Solution:**
$$k^2 = \frac{A_2}{A_1} = \frac{50}{18} = \frac{25}{9}$$

$$k = \sqrt{\frac{25}{9}} = \frac{5}{3}$$

Corresponding side = $6 \times \frac{5}{3} = 10$ cm

---

## 3.3 Scale Factor for Volume

>  **Key Principle**: If two solids are similar with linear scale factor $k$, then the **volume scale factor** is $k^3$.

**Why?** Volume is measured in cubic units. If each length is multiplied by $k$, the volume is multiplied by $k \times k \times k = k^3$.

**Formula:**
$$\frac{V_2}{V_1} = k^3$$

**Worked Example 16:**
> Two similar cones have volumes 27 cm³ and 64 cm³. The smaller cone has height 9 cm. Find the height of the larger cone.

**Solution:**
$$k^3 = \frac{V_2}{V_1} = \frac{64}{27}$$

$$k = \sqrt[3]{\frac{64}{27}} = \frac{4}{3}$$

Height of larger cone = $9 \times \frac{4}{3} = 12$ cm

---

## 3.4 Summary Table of Scale Factors

| Scale Factor | For Lengths | For Areas | For Volumes |
|--------------|-------------|-----------|-------------|
| Linear ($k$) | $k$ | $k^2$ | $k^3$ |
| Area ($k^2$) | $\sqrt{k^2} = k$ | $k^2$ | $(k^2)^{3/2} = k^3$ |
| Volume ($k^3$) | $\sqrt[3]{k^3} = k$ | $(k^3)^{2/3} = k^2$ | $k^3$ |

---

## 3.5 Working Between Scale Factors

### From Length to Area/Volume
- Area: Multiply by $k^2$
- Volume: Multiply by $k^3$

### From Area to Length/Volume
- Length: Take square root: $k = \sqrt{k^2}$
- Volume: Use $k^3 = (k^2)^{3/2} = k^2 \times k$

### From Volume to Length/Area
- Length: Take cube root: $k = \sqrt[3]{k^3}$
- Area: Use $k^2 = (k^3)^{2/3}$

---

## 3.6 Similar Solids

**Worked Example 17:**
> Two similar cylinders have radii in the ratio 2:5.
> (a) Find the ratio of their surface areas.
> (b) Find the ratio of their volumes.
> (c) If the smaller cylinder has volume 40 cm³, find the volume of the larger cylinder.

**Solution:**
Linear scale factor: $k = \frac{5}{2} = 2.5$

**(a)** Area scale factor: $k^2 = (2.5)^2 = 6.25$
Ratio of surface areas = $4 : 25$ or $1 : 6.25$

**(b)** Volume scale factor: $k^3 = (2.5)^3 = 15.625$
Ratio of volumes = $8 : 125$ or $1 : 15.625$

**(c)** $V_{\text{large}} = 40 \times 15.625 = 625 \text{ cm}^3$

---

## 3.7 Similarity in 2D Shapes

### Similar Triangles

Triangles are similar if:
1. **AA**: Two angles are equal (third must also be equal)
2. **SSS**: All three sides are in proportion
3. **SAS**: Two sides are in proportion and the included angle is equal

**Worked Example 18:**
> In triangle ABC, DE is parallel to BC. AD = 4 cm, DB = 6 cm, and BC = 15 cm. Find DE.

**Solution:**
Since DE is parallel to BC, triangles ADE and ABC are similar (AA similarity).

Linear scale factor: $k = \frac{AB}{AD} = \frac{4+6}{4} = \frac{10}{4} = 2.5$

$$DE = \frac{BC}{k} = \frac{15}{2.5} = 6 \text{ cm}$$

---

## 3.8 Complex Similarity Problems

### Type 1: Finding Unknown Dimensions

**Worked Example 19:**
> A model car is made to a scale of 1:24. The model has wheels of diameter 2 cm. The actual car has a fuel tank capacity of 60 litres. What is the capacity of the model's fuel tank in cm³?

**Solution:**
Linear scale factor: $k = \frac{1}{24}$

Volume scale factor: $k^3 = \frac{1}{24^3} = \frac{1}{13824}$

Model tank capacity = $60 \times 1000 \times \frac{1}{13824} = \frac{60000}{13824}$
$$= 4.34 \text{ cm}^3 \text{ (3 s.f.)}$$

---

### Type 2: Finding Scale Factor from Areas/Volumes

**Worked Example 20:**
> Two similar pyramids have surface areas of 45 cm² and 125 cm². The volume of the smaller pyramid is 54 cm³. Find the volume of the larger pyramid.

**Solution:**
$$k^2 = \frac{A_{\text{large}}}{A_{\text{small}}} = \frac{125}{45} = \frac{25}{9}$$

$$k = \sqrt{\frac{25}{9}} = \frac{5}{3}$$

$$k^3 = \left(\frac{5}{3}\right)^3 = \frac{125}{27}$$

$$V_{\text{large}} = 54 \times \frac{125}{27} = 2 \times 125 = 250 \text{ cm}^3$$

---

### Type 3: Ratios in Similar Figures

**Worked Example 21:**
> Two similar shapes have areas in the ratio 9:16. Find:
> (a) The ratio of their perimeters
> (b) The ratio of their volumes (if extended to 3D)

**Solution:**
**(a)** $k^2 = \frac{16}{9}$, so $k = \frac{4}{3}$

Ratio of perimeters = $3:4$

**(b)** $k^3 = \left(\frac{4}{3}\right)^3 = \frac{64}{27}$

Ratio of volumes = $27:64$

---

##  Common Mistakes - Similarity

| Mistake | Correction |
|---------|------------|
| Using $k$ instead of $k^2$ for area | Area scales by $k^2$ |
| Using $k$ instead of $k^3$ for volume | Volume scales by $k^3$ |
| Taking cube root of area ratio | Square root for area, cube root for volume |
| Confusing which shape is larger | Check the direction: larger to smaller or vice versa |
| Forgetting to cube when finding volume ratio | Always use $k^3$ for volume |

---

# PART 4: EXAM FOCUS & STRATEGY

## 4.1 Frequently Tested Question Types

### Circles (High Frequency)
1. **Arc length and sector area** - Calculate from given radius and angle
2. **Perimeter of sector** - Arc + 2 radii
3. **Segment area** - Sector minus triangle
4. **Circle theorems combined with length calculations**
5. **Finding radius from arc/sector information**

### Solids (High Frequency)
1. **Volume of compound solids** - Add/subtract volumes
2. **Surface area of compound solids** - Careful counting of external faces
3. **Problems involving missing dimensions** - Work backwards from volume
4. **Conversion problems** - ml to cm³, litres to cm³
5. **Real-world application** - Tanks, pipes, containers

### Similarity (Medium-High Frequency)
1. **Direct scale factor problems** - Find area/volume from linear SF
2. **Reverse problems** - Find linear SF from area/volume ratio
3. **Similar triangles in context** - Shadows, mirrors, maps
4. **Model-to-reality problems** - Scale models, maps
5. **Compound similarity** - Similar solids with missing dimensions

---

## 4.2 Typical Problem-Solving Patterns

### Pattern 1: Work Backwards
When given area/volume, find the dimension:
- Identify which formula relates to the given quantity
- Substitute and solve algebraically
- Use inverse operations (division, square root, cube root)

### Pattern 2: Multi-Step Problems
1. Find one quantity (e.g., radius from circumference)
2. Use this to find another (e.g., volume from radius)
3. Compare or combine with other values

### Pattern 3: Apply Similarity
1. Identify corresponding lengths
2. Calculate linear scale factor
3. Square/cube appropriately for area/volume
4. Apply to find the unknown

---

## 4.3 Command Word Guidance

| Command Word | What It Means |
|--------------|---------------|
| **Calculate** | Show working and give a numerical answer |
| **Find** | Determine the value; may involve working out |
| **Show that** | Prove the given statement; show all steps clearly |
| **Work out** | Calculate with appropriate method |
| **Explain** | Give reasons; refer to formulas or theorems |
| **Determine** | Find with certainty; may require proof |

---

## 4.4 How to Gain Full Marks

### For Method Marks (M marks):
- Show substitution into correct formula
- Show intermediate steps
- Use correct mathematical notation

### For Accuracy Marks (A marks):
- Give answer to appropriate degree of accuracy
- Include correct units
- Check your answer makes sense

### For Reasoning Marks (R marks):
- Justify your method choice
- State formulas used
- Explain why a particular approach is valid

---

## 4.5 Key Formula Summary

### Circles
| Quantity | Formula |
|----------|---------|
| Circumference | $C = 2\pi r$ or $C = \pi d$ |
| Area | $A = \pi r^2$ |
| Arc length | $= \frac{\theta}{360} \times 2\pi r$ |
| Sector area | $= \frac{\theta}{360} \times \pi r^2$ |

### Solids
| Shape | Volume | Surface Area |
|-------|--------|--------------|
| Prism | $A \times l$ | Sum of all faces |
| Cylinder | $\pi r^2 h$ | $2\pi r h + 2\pi r^2$ |
| Cone | $\frac{1}{3}\pi r^2 h$ | $\pi r l + \pi r^2$ |
| Sphere | $\frac{4}{3}\pi r^3$ | $4\pi r^2$ |
| Pyramid | $\frac{1}{3} \times \text{base} \times h$ | Sum of all faces |

### Similarity
| Scale Factor | Relationship |
|--------------|--------------|
| Linear ($k$) | $k$ |
| Area ($k^2$) | $k^2 = \frac{A_2}{A_1}$ |
| Volume ($k^3$) | $k^3 = \frac{V_2}{V_1}$ |

---

## 4.6 Exam Checklist

Before the exam, ensure you can:
- [ ] Calculate arc length and sector area for any angle
- [ ] Find segment area using sector minus triangle
- [ ] Apply circle theorems to find angles
- [ ] Calculate volume and surface area for all standard solids
- [ ] Handle compound solids (add and subtract)
- [ ] Convert between linear, area, and volume scale factors
- [ ] Work backwards from area/volume to find dimensions
- [ ] Identify similar shapes and corresponding parts

---

*End of Detailed Notes - Shape and Space 7*
