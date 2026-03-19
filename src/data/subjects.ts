export interface Chapter {
  id: string;
  number: number;
  title: string;
  synopsis: string;
  topics: string[];
  estimatedTime: string;
  content?: string; // Detailed study notes
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  chapters: Chapter[];
}

export const subjects: Record<string, Subject> = {
  biology: {
    id: 'biology',
    title: 'Biology',
    description: 'Master the science of life with our comprehensive guide to the Pearson Edexcel IGCSE Biology specification.',
    color: '#10b981',
    bgColor: '#dcfce7',
    chapters: [
      {
        id: 'life-processes',
        number: 1,
        title: 'Life Processes',
        synopsis: 'Learn the fundamental characteristics of living organisms (MRS GREN), cell structure, enzymes, respiration, and transport mechanisms.',
        topics: ['MRS GREN', 'Animal vs Plant Cells', 'Organelles', 'Enzymes', 'Aerobic & Anaerobic Respiration', 'Diffusion, Osmosis & Active Transport'],
        estimatedTime: '45 min',
        content: `
# Chapter 1: Life Processes

### Main Points

1.  **Characteristics of Living Organisms (MRS GREN)**
    *   **M**ovement - by muscles in animals, slow growth movements in plants
    *   **R**espiration - release energy from food
    *   **S**ensitivity - respond to stimuli/changes in surroundings
    *   **H**omeostasis - maintenance of internal body conditions within a narrow limit
    *   **G**rowth - increase in size and complexity
    *   **R**eproduction - produce offspring
    *   **E**xcretion - get rid of waste products
    *   **N**utrition - plants make their own food, animals eat other organisms

2.  **Cell Structure**
    *   **Animal cells** contain: nucleus, cytoplasm, cell membrane, mitochondria, ribosomes, temporary vacuoles
    *   **Plant cells** contain all animal cell structures PLUS: cell wall (cellulose), permanent vacuole, chloroplasts
    *   **Organelles and functions**:
        *   Nucleus: contains DNA, controls cell activities
        *   Cytoplasm: site of chemical reactions
        *   Cell membrane: controls what enters/leaves cell (selectively permeable)
        *   Mitochondria: site of aerobic respiration
        *   Chloroplasts: site of photosynthesis (plants only)
        *   Ribosomes: site of protein synthesis
        *   Vacuole: stores cell sap (plants)

3.  **Enzymes**
    *   Biological catalysts that speed up reactions without being used up
    *   Work by lowering activation energy
    *   **Lock and key model**: substrate fits into active site
    *   **Factors affecting enzyme activity**:
        *   **Temperature**: increases rate up to optimum (37°C for humans), then denatures above 40°C
        *   **pH**: most work best at pH 7 (neutral), except pepsin (pH 2)
    *   Denaturation: permanent change in shape of active site, enzyme stops working

4.  **Respiration**
    *   **Aerobic respiration**: glucose + oxygen → carbon dioxide + water (+ energy)
    *   Occurs in mitochondria
    *   Produces ATP (adenosine triphosphate) - energy currency of cells
    *   **Anaerobic respiration**: glucose → lactate (+ some energy)
    *   Occurs when oxygen supply is insufficient (e.g., during intense exercise)
    *   Produces oxygen debt - extra oxygen needed to break down lactate

5.  **Movement of Materials**
    *   **Diffusion**: net movement of particles from high to low concentration (down concentration gradient)
    *   **Osmosis**: net movement of water from dilute to concentrated solution across partially permeable membrane
    *   **Active transport**: movement against concentration gradient, requires energy (ATP)

### Things to Remember

*   **Respiration ≠ Breathing**: Respiration is the chemical reaction releasing energy; breathing is the mechanical process moving air
*   **Enzymes are proteins** - denatured by heat and extreme pH
*   **ATP** is the energy currency - used for active transport, muscle contraction, cell division
*   **Osmosis** only involves water molecules

### Past Paper Questions

**Question 1**: Name three structures found in plant cells but not in animal cells. (3 marks)
**Answer**: Cell wall (1 mark), Chloroplasts (1 mark), Permanent vacuole (1 mark)

**Question 2**: Explain how temperature affects enzyme activity. (6 marks)
**Answer**: As temperature increases, rate increases (1 mark) due to more collisions (1 mark). At optimum, maximum rate occurs (1 mark). Above optimum, enzyme denatures (1 mark), active site changes shape (1 mark), substrate no longer fits (1 mark).
        `
      },
      {
        id: 'variety-of-organisms',
        number: 2,
        title: 'The Variety of Living Organisms',
        synopsis: 'Explore the five kingdoms of life including Eukaryotic and Prokaryotic organisms, and understand the unique nature of viruses.',
        topics: ['Five Kingdoms', 'Plants & Animals', 'Fungi & Protoctists', 'Bacteria', 'Viruses & Pathogens'],
        estimatedTime: '30 min',
        content: `
# Chapter 2: The Variety of Living Organisms

### Main Points

1.  **Five Kingdoms**: Animals, Plants, Fungi, Protoctists, Bacteria
2.  **Eukaryotic vs Prokaryotic**:
    *   **Eukaryotic**: Have nucleus and membrane-bound organelles (animals, plants, fungi, protoctists)
    *   **Prokaryotic**: No nucleus, simpler structure (bacteria)
3.  **Animals**: Multicellular, no cell walls, no chloroplasts, store carbohydrate as glycogen.
4.  **Plants**: Multicellular, cellulose cell walls, chloroplasts, store carbohydrate as starch or sucrose.
5.  **Fungi**: Multicellular (mushrooms) or unicellular (yeast), chitin cell walls, saprotrophic nutrition.
6.  **Protoctists**: Mostly unicellular, "dustbin kingdom". Examples: Amoeba, Plasmodium.
7.  **Bacteria**: Single-celled, no nucleus, peptidoglycan cell wall. Some are pathogens.
8.  **Viruses**: NOT living organisms. Protein coat + DNA/RNA. Parasitic reproduction.

### Things to Remember
*   **Viruses are NOT alive** - they don't carry out life processes independently.
*   **Bacteria are prokaryotic** - much simpler than eukaryotic cells.
*   **Fungi cell walls are made of chitin**, not cellulose.
        `
      },
      {
        id: 'gas-exchange',
        number: 3,
        title: 'Breathing and Gas Exchange',
        synopsis: 'Understand the structure and function of the human respiratory system, the mechanism of ventilation, and the impact of smoking.',
        topics: ['Thorax Structure', 'Ventilation Mechanism', 'Alveoli Adaptations', 'Smoking Effects', 'Bronchitis & Emphysema'],
        estimatedTime: '40 min',
        content: `
# Chapter 3: Breathing and Gas Exchange

### Main Points

1.  **Structure**: Trachea, bronchi, bronchioles, alveoli, diaphragm, intercostal muscles.
2.  **Ventilation**:
    *   **Inhalation**: External intercostals contract, ribs move up/out, diaphragm flattens. Vol increases, pressure decreases, air moves in.
    *   **Exhalation**: External intercostals relax, internal intercostals contract, ribs move down/in, diaphragm domes. Vol decreases, pressure increases.
3.  **Alveoli Adaptations**: Large SA, thin walls (1 cell thick), moist, rich blood supply.
4.  **Smoking**:
    *   **Tar**: Damages cilia, causes lung cancer.
    *   **Nicotine**: Addictive, increases BP/Heart rate.
    *   **CO**: Binds to haemoglobin, reduces O2 capacity.
    *   **Diseases**: Emphysema (alveoli breakdown), Bronchitis (inflammation).
        `
      },
      {
        id: 'food-and-digestion',
        number: 4,
        title: 'Food and Digestion',
        synopsis: 'Master the chemistry of food, balanced diets, and the mechanical and chemical processes of the human digestive system.',
        topics: ['Biomolecules', 'Food Tests', 'Digestive Enzymes', 'Peristalsis', 'Bile', 'Villi & Absorption'],
        estimatedTime: '50 min',
        content: `
# Chapter 4: Food and Digestion

### Main Points

1.  **Biological Molecules**:
    *   Carbohydrates (C, H, O) - Glucose/Starch
    *   Proteins (C, H, O, N) - Amino Acids
    *   Lipids (C, H, O) - Glycerol + Fatty Acids
2.  **Food Tests**:
    *   Starch: Iodine (Blue-Black)
    *   Glucose: Benedict's + Heat (Brick Red)
    *   Protein: Biuret (Purple)
    *   Lipids: Ethanol (Milky Emulsion)
3.  **Digestive System**: Mouth, Oesophagus (peristalsis), Stomach (HCl + Pepsin), Small Intestine (absorption), Large Intestine (water absorption).
4.  **Enzymes**: Amylase (Starch → Maltose), Protease (Protein → Peptides), Lipase (Lipids → Fatty Acids).
5.  **Bile**: Produced by liver, stored in gall bladder. Neutralizes acid and emulsifies fats.
        `
      },
      {
        id: 'blood-and-circulation',
        number: 5,
        title: 'Blood and Circulation',
        synopsis: 'Learn about the components of blood, heart structure, circulation types, and the human immune response.',
        topics: ['Heart Structure', 'Arteries vs Veins', 'Blood Composition', 'Phagocytes & Lymphocytes', 'Vaccination', 'CHD'],
        estimatedTime: '55 min',
        content: `
# Chapter 5: Blood and Circulation

### Main Points

1.  **Transport System**: Multicellular organisms need double circulation (Pulmonary and Systemic).
2.  **Heart Structure**: Four chambers (Atria & Ventricles). Left ventricle wall is thicker as it pumps to the whole body.
3.  **Blood Vessels**:
    *   Arteries: Thick walls, high pressure, carry blood away from heart.
    *   Veins: Thin walls, low pressure, valves, carry blood to heart.
    *   Capillaries: One-cell thick for exchange.
4.  **Blood Composition**: Plasma (carries CO2, food), RBCs (O2 via haemoglobin), WBCs (Immunity), Platelets (Clotting).
5.  **Immunity**: Phagocytes engulf pathogens; Lymphocytes produce antibodies.
        `
      },
      {
        id: 'nervous-coordination',
        number: 6,
        title: 'Coordination',
        synopsis: 'Understand how organisms respond to stimuli through the nervous system, including the structure of neurones and the eye.',
        topics: ['Reflex Arc', 'CNS vs PNS', 'Neurones & Synapses', 'Eye Structure', 'Accommodation', 'Pupil Reflex'],
        estimatedTime: '50 min',
        content: `
# Chapter 6: Coordination

### Main Points

1.  **Pathway**: Stimulus → Receptor → Sensory neurone → CNS → Motor neurone → Effector → Response.
2.  **Reflex Action**: Automatic response involving spinal cord only (Reflex Arc).
3.  **Synapses**: Gaps between neurones where chemicals (neurotransmitters) cross.
4.  **The Eye**:
    *   **Near Object**: Ciliary muscles contract, ligaments slacken, lens fat.
    *   **Bright Light**: Circular muscles contract, radial relax, pupil smaller.
        `
      },
      {
        id: 'chemical-coordination',
        number: 7,
        title: 'Chemical Coordination in Animals',
        synopsis: 'Explore the endocrine system, the role of hormones like insulin, glucagon, and adrenaline, and the control of blood glucose.',
        topics: ['Endocrine Glands', 'Insulin & Glucagon', 'Blood Glucose Control', 'Diabetes Types', 'Adrenaline', 'ADH & Thyroxine'],
        estimatedTime: '45 min',
        content: `
# Chapter 7: Chemical Coordination in Animals

### Main Points

1.  **Hormones**: Chemical messengers in blood. Slower than nerves but longer-lasting.
2.  **Key Glands**: Pituitary (ADH/FSH), Pancreas (Insulin/Glucagon), Adrenal (Adrenaline), Ovaries/Testes.
3.  **Glucose Control**: Insulin lowers blood glucose (liver converts it to glycogen). Glucagon raises it.
4.  **Adrenaline**: Flight or fight response (increases heart/breathing rate).
5.  **ADH**: Controls water reabsorption in kidneys.
        `
      },
      {
        id: 'transport-in-plants',
        number: 10,
        title: 'Transport in Plants',
        synopsis: 'Master the transport of water and nutrients in plants through xylem and phloem, and understand transpiration.',
        topics: ['Xylem vs Phloem', 'Root Hair Cells', 'Transpiration Stream', 'Stomata & Guard Cells', 'Factors affecting Transpiration'],
        estimatedTime: '40 min',
        content: `
# Chapter 10: Transport in Plants

### Main Points

1.  **Xylem**: Transports water/minerals UP only. Dead cells, lignified walls.
2.  **Phloem**: Transports sucrose/amino acids BOTH directions. Living cells.
3.  **Water Uptake**: Roots hairs increase SA for osmosis.
4.  **Transpiration**: Evaporation of water from leaves. Creates pulling force in xylem.
5.  **Factors**: High temp/wind/light increases rate; high humidity decreases it.
        `
      },
      {
        id: 'plants-and-food',
        number: 11,
        title: 'Plants and Food',
        synopsis: 'Deep dive into photosynthesis, the structure of the leaf, limiting factors, and the storage of glucose as starch.',
        topics: ['Photosynthesis Equation', 'Leaf Adaptations', 'Starch Testing', 'Limiting Factors', 'Mineral Requirements'],
        estimatedTime: '50 min',
        content: `
# Chapter 11: Plants and Food

### Main Points

1.  **Photosynthesis**: 6CO2 + 6H2O → C6H12O6 + 6O2 (using light/chlorophyll).
2.  **Leaf Layers**: Waxy cuticle (water loss), Palisade (many chloroplasts), Spongy (gas exchange), Stomata (pores).
3.  **Starch Test**: Kill in boiling water → boil in ethanol → wash → add iodine.
4.  **Limiting Factors**: Light intensity, CO2 concentration, and Temperature.
5.  **Minerals**: Nitrates (Proteins/Growth), Magnesium (Chlorophyll).
        `
      },
      {
        id: 'coordination-in-plants',
        number: 12,
        title: 'Coordination in Plants',
        synopsis: 'Understand tropisms, the role of auxins in plant growth, and how plants respond to light and gravity.',
        topics: ['Phototropism', 'Gravitropism', 'Auxins', 'Cell Elongation', 'Commercial uses of hormones'],
        estimatedTime: '35 min',
        content: `
# Chapter 12: Coordination in Plants

### Main Points

1.  **Tropisms**: Directional growth toward (positive) or away (negative) from stimulus.
2.  **Phototropism**: Shoots grow to light. Auxin moves to shaded side, causing cell elongation.
3.  **Gravitropism**: Roots grow to gravity. Auxin inhibits growth in roots, causing bending down.
4.  **Auxins**: Plant hormones produced in tips.
        `
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Master the atomic world. Detailed coverage of chemical principles for the Pearson Edexcel IGCSE Chemistry curriculum.',
    color: '#3b82f6',
    bgColor: '#dbeafe',
    chapters: [
      {
        id: 'states-of-matter',
        number: 1,
        title: 'States of Matter',
        synopsis: 'Understand solids, liquids, and gases using the particle model, state changes, and diffusion.',
        topics: ['Particles', 'Melting/Boiling', 'State Change Curves', 'Diffusion & Brownian Motion'],
        estimatedTime: '30 min',
        content: `
# Chapter 1: States of Matter

### Main Points

1.  **Three States**: Solid (fixed shape), Liquid (takes shape of container), Gas (expands to fill space).
2.  **Particle Model**: All matter made of tiny particles. Higher temp → faster movement.
3.  **Changes of State**: Melting, Boiling, Condensing, Freezing, Sublimation. Temperature stays constant during state change.
4.  **Diffusion**: Random spreading of particles from high to low concentration. Faster in gases and at higher temperatures.
        `
      },
      {
        id: 'elements-compounds-mixtures',
        number: 2,
        title: 'Elements, Compounds and Mixtures',
        synopsis: 'Learn the differences between pure substances and mixtures, and master separation techniques like filtration and distillation.',
        topics: ['Elements vs Compounds', 'Homogeneous vs Heterogeneous', 'Filtration', 'Distillation & Chromatography'],
        estimatedTime: '40 min',
        content: `
# Chapter 2: Elements, Compounds and Mixtures

### Main Points

1.  **Definitions**:
    *   Element: One type of atom.
    *   Compound: 2+ elements chemically combined (fixed ratio).
    *   Mixture: 2+ substances physically mixed (variable ratio).
2.  **Separation**:
    *   Filtration: insoluble solid from liquid.
    *   Distillation: separates by boiling points.
    *   Chromatography: separates by solubility (inks/dyes).
        `
      },
      {
        id: 'atomic-structure',
        number: 3,
        title: 'Atomic Structure',
        synopsis: 'Dive into the heart of the atom. Understand protons, neutrons, electrons, isotopes, and relative atomic mass.',
        topics: ['Subatomic Particles', 'Atomic & Mass Number', 'Isotopes', 'Electronic Configuration', 'Relative Atomic Mass'],
        estimatedTime: '45 min',
        content: `
# Chapter 3: Atomic Structure

### Main Points

1.  **Atom Parts**: Nucleus (Protons +1, Neutrons 0) and Shells (Electrons -1).
2.  **Atomic Number**: Number of protons. **Mass Number**: Protons + Neutrons.
3.  **Isotopes**: Same element, different number of neutrons (same atomic number, different mass number).
4.  **Relative Atomic Mass (Ar)**: Average mass of isotopes compared to Carbon-12.
        `
      },
      {
        id: 'periodic-table',
        number: 4,
        title: 'The Periodic Table',
        synopsis: 'Explore the classification of elements. Understand Group 1, Group 7, and Noble Gases.',
        topics: ['Periods & Groups', 'Alkali Metals', 'Halogens', 'Noble Gases', 'Transition Metal Trends'],
        estimatedTime: '45 min',
        content: `
# Chapter 4: The Periodic Table

### Main Points

1.  **Structure**: Periods (Horizontal = Shells), Groups (Vertical = Outer Electrons).
2.  **Group 1 (Alkali Metals)**: Soft, very reactive. Reactivity increases DOWN group.
3.  **Group 7 (Halogens)**: Diatomic (Cl2, Br2). Reactivity decreases DOWN group.
4.  **Group 0 (Noble Gases)**: Inert, full outer shell.
        `
      },
      {
        id: 'formulae-equations-calculations',
        number: 5,
        title: 'Chemical Formulae and Calculations',
        synopsis: 'Master chemical equations, the mole concept, and empirical factor calculations.',
        topics: ['Valency', 'Balancing Equations', 'Relative Formula Mass (Mr)', 'Mole Calculations', 'n=m/Mr', 'Empirical Formula'],
        estimatedTime: '60 min',
        content: `
# Chapter 5: Formulae and Calculations

### Main Points

1.  **Relative Formula Mass (Mr)**: Sum of atomic masses. (e.g., H2O = 18).
2.  **The Mole**: n = mass ÷ Mr.
3.  **Balancing**: Must have same number of atoms on both sides.
4.  **Empirical Formula**: Simplest whole number ratio of atoms in a compound.
        `
      },
      {
        id: 'ionic-bonding',
        number: 6,
        title: 'Ionic Bonding',
        synopsis: 'Understand how atoms transfer electrons to form ions and high-melting ionic lattices.',
        topics: ['Electron Transfer', 'Dot & Cross Diagrams', 'Giant Ionic Lattice', 'Properties of Ions'],
        estimatedTime: '40 min',
        content: `
# Chapter 6: Ionic Bonding

### Main Points

1.  **Bonding**: Transfer of electrons from metal (lose) to non-metal (gain).
2.  **Ionic Compounds**: High BP/MP due to strong electrostatic attraction. Giant lattice structure.
3.  **Conductivity**: Conduct when molten/dissolved (ions free to move).
        `
      },
      {
        id: 'covalent-bonding',
        number: 7,
        title: 'Covalent Bonding',
        synopsis: 'Learn how non-metals share electrons to form molecules and giant structures like diamond and graphite.',
        topics: ['Shared Pairs', 'Simple Molecular vs Giant Structures', 'Diamond & Graphite Properties', 'SiO2'],
        estimatedTime: '45 min',
        content: `
# Chapter 7: Covalent Bonding

### Main Points

1.  **Bonding**: Sharing electrons between non-metals.
2.  **Simple Molecules**: Low melting points due to weak intermolecular forces.
3.  **Giant Covalent**:
    *   Diamond: Each C bonded to 4 others, very hard.
    *   Graphite: Each C bonded to 3 others, conducts electricity (delocalized electrons), slippery layers.
        `
      },
      {
        id: 'alkali-metals',
        number: 8,
        title: 'The Alkali Metals',
        synopsis: 'Explore the group 1 elements, their physical properties, and their vigorous reactions with water.',
        topics: ['Lithium, Sodium, Potassium', 'Reaction with Water', 'Trend in Reactivity', 'Group 1 Flame Tests'],
        estimatedTime: '35 min',
        content: `
# Chapter 8: The Alkali Metals

### Main Points

1.  **Properties**: Soft, low density, shiny when cut (but tarnish quickly).
2.  **Reactivity**: Increases DOWN the group. (Outer electron is further from nucleus, less attraction, lost more easily).
3.  **Reaction with water**: Metal + Water → Metal Hydroxide + Hydrogen.
4.  **Observations**: 
    *   Lithium: fizzes, moves on surface. 
    *   Sodium: melts into silver ball, fizzes. 
    *   Potassium: lilac flame, pops.
        `
      },
      {
        id: 'halogens',
        number: 9,
        title: 'The Halogens',
        synopsis: 'Understand the properties of group 7 elements, displacement reactions, and the trend in reactivity.',
        topics: ['Chlorine, Bromine, Iodine', 'States and Colours', 'Displacement Reactions', 'Silver Nitrate Tests'],
        estimatedTime: '40 min',
        content: `
# Chapter 9: The Halogens

### Main Points

1.  **States**: F2 (Gas, yellow), Cl2 (Gas, pale green), Br2 (Liquid, red-brown), I2 (Solid, grey).
2.  **Reactivity**: Decreases DOWN the group.
3.  **Displacement**: A more reactive halogen displaces a less reactive one from its halide salt.
    *   Cl2 + 2KI → 2KCl + I2 (solution turns brown).
        `
      },
      {
        id: 'gases-in-atmosphere',
        number: 10,
        title: 'Gases in the Atmosphere',
        synopsis: 'Learn the composition of air, the laboratory preparation of oxygen, and the impact of greenhouse gases.',
        topics: ['Percentage of Air', 'Oxygen Preparation (H2O2)', 'Burning Elements (Mg, S, C)', 'Global Warming'],
        estimatedTime: '40 min',
        content: `
# Chapter 10: Gases in the Atmosphere

### Main Points

1.  **Composition**: 78% Nitrogen, 21% Oxygen, 0.9% Argon, 0.04% CO2.
2.  **Oxygen Prep**: 2H2O2 → 2H2O + O2 (using MnO2 catalyst).
3.  **O2 Test**: Glowing splint relights.
4.  **Greenhouse Effect**: CO2 and CH4 trap heat. Combustion and deforestation increase CO2.
        `
      },
      {
        id: 'reactivity-series',
        number: 11,
        title: 'Reactivity Series',
        synopsis: 'Master the order of reactivity for various metals and how they can be extracted from their ores.',
        topics: ['Extraction of Iron', 'Displacement Reactions', 'Rusting & Prevention', 'Oxidation/Reduction'],
        estimatedTime: '50 min',
        content: `
# Chapter 11: Reactivity Series

### Main Points

1.  **Order**: K > Na > Li > Ca > Mg > Al > (C) > Zn > Fe > (H) > Cu > Ag > Au.
2.  **Extraction**: Metals above carbon (Al, Mg) via electrolysis. Below carbon (Fe, Cu) via heating with carbon.
3.  **Rusting**: Needs Iron + Oxygen + Water. Prevent via galvanizing (sacrificial protection) or painting.
        `
      },
      {
        id: 'acids-alkalis-salts',
        number: 13,
        title: 'Acids, Bases and Salts',
        synopsis: 'Understand pH, indicators, and the methods for preparing soluble and insoluble salts.',
        topics: ['pH Scale', 'Neutralization', 'Reacting Acids', 'Precipitation', 'Salt Prep Methods'],
        estimatedTime: '55 min',
        content: `
# Chapter 13: Acids, Bases and Salts

### Main Points

1.  **pH**: 0-6 (Acidic), 7 (Neutral), 8-14 (Alkaline).
2.  **Neutralization**: Acid + Base → Salt + Water.
3.  **Salt Prep**:
    *   Soluble (from excess base): Acid + Insoluble base → filter → evaporate.
    *   Insoluble (Precipitation): Mix two soluble salts → filter → wash → dry.
        `
      },
      {
        id: 'chemical-tests',
        number: 14,
        title: 'Chemical Tests',
        synopsis: 'Master the tests for cations, anions, and various gases in the laboratory.',
        topics: ['Flame Tests', 'NaOH Cation Tests', 'Halide & Sulfate Tests', 'Gas Tests'],
        estimatedTime: '45 min',
        content: `
# Chapter 14: Chemical Tests

### Main Points

1.  **Flame Tests**: Li+ (Red), Na+ (Yellow), K+ (Lilac), Ca2+ (Orange-Red), Cu2+ (Blue-Green).
2.  **Gases**: O2 (Relights splint), H2 (Squeaky pop), CO2 (Limewater cloudy), Cl2 (Bleaches litmus).
3.  **Anions**:
    *   Cl- (White ppt), Br- (Cream ppt), I- (Yellow ppt) using Silver Nitrate.
    *   SO4^2- (White ppt) using Barium Chloride.
        `
      }
    ]
  },
  physics: {
    id: 'physics',
    title: 'Physics',
    description: 'Master the laws of the universe with our comprehensive guide to the Pearson Edexcel IGCSE Physics specification.',
    color: '#f59e0b',
    bgColor: '#fef3c7',
    chapters: [
      {
        id: 'movement-and-position',
        number: 1,
        title: 'Movement and Position',
        synopsis: 'Master speed, velocity, acceleration, and the analysis of distance-time and velocity-time graphs.',
        topics: ['Scalars vs Vectors', 'Average Speed', 'Acceleration Equation', 'D-T Graphs', 'V-T Graphs & Area'],
        estimatedTime: '45 min',
        content: `
# Chapter 1: Movement and Position

### Main Points

1.  **Metrics**: Speed (m/s), Velocity (vector), Acceleration (m/s^2).
2.  **Equations**: v = d/t, a = (v-u)/t.
3.  **Graphs**:
    *   D-T graph gradient = Speed.
    *   V-T graph gradient = Acceleration.
    *   V-T graph area = Distance travelled.
        `
      },
      {
        id: 'forces-and-shape',
        number: 2,
        title: 'Forces and Shape',
        synopsis: 'Understand different types of forces, resultant force, and Hooke\'s law for elastic deformation.',
        topics: ['Force Types', 'Resultant Force', 'Elastic vs Plastic Deformation', 'Hooke\'s Law', 'Elastic Limit'],
        estimatedTime: '40 min',
        content: `
# Chapter 2: Forces and Shape

### Main Points

1.  **Forces**: Vectors measured in Newtons (N).
2.  **Hooke's Law**: Extension is proportional to force (F=kx) until the elastic limit.
3.  **Deformation**: Elastic (returns to shape), Plastic (permanent change).
        `
      },
      {
        id: 'forces-and-movement',
        number: 3,
        title: 'Forces and Movement',
        synopsis: 'Learn about Newton\'s laws, the difference between mass and weight, terminal velocity, and friction.',
        topics: ['F=ma', 'Weight vs Mass', 'Terminal Velocity', 'Friction & Drag', 'Newton\'s Laws'],
        estimatedTime: '50 min',
        content: `
# Chapter 3: Forces and Movement

### Main Points

1.  **F = ma**: Net force equals mass times acceleration.
2.  **Weight**: W = mg (Gravity g = 10 N/kg).
3.  **Terminal Velocity**: Reached when Air Resistance = Weight (balanced forces).
        `
      },
      {
        id: 'mains-electricity',
        number: 4,
        title: 'Mains Electricity',
        synopsis: 'Understand domestic electricity, safety devices like fuses and earth wires, and power calculations.',
        topics: ['AC vs DC', 'Plug Wiring', 'Fuses & Earth Wire', 'Electrical Power (P=VI)', 'Cost of Electricity'],
        estimatedTime: '45 min',
        content: `
# Chapter 4: Mains Electricity

### Main Points

1.  **Mains**: AC, 230V, 50Hz.
2.  **Safety**:
    *   Earth Wire: connects case to ground.
    *   Fuse: melts if current > rating.
    *   Double Insulation: no metal parts exposed.
3.  **Power**: P = V × I. Energy = P × t.
        `
      },
      {
        id: 'electricity-circuits',
        number: 5,
        title: 'Current and Voltage in Circuits',
        synopsis: 'Master series and parallel circuits, the relationship between charge and current, and energy transfer.',
        topics: ['I=Q/t', 'V=E/Q', 'Series Circuit Rules', 'Parallel Circuit Rules', 'Charge & Energy Transfer'],
        estimatedTime: '55 min',
        content: `
# Chapter 5: Current and Voltage in Circuits

### Main Points

1.  **Basic metrics**: Current (I) = Q/t; Voltage (V) = E/Q.
2.  **Series**: Current is same everywhere; Voltage splits.
3.  **Parallel**: Voltage is same in all branches; Current splits.
        `
      },
      {
        id: 'electrical-resistance',
        number: 6,
        title: 'Electrical Resistance',
        synopsis: 'Explore Ohm\'s Law, IV characteristics of various components, and factors affecting resistance.',
        topics: ['V=IR', 'Filament Lamp curve', 'LDR & Thermistors', 'Diodes', 'Resistance Factors'],
        estimatedTime: '50 min',
        content: `
# Chapter 6: Electrical Resistance

### Main Points

1.  **Ohm's Law**: V = I × R.
2.  **I-V Graphs**:
    *   Resistor: Straight line.
    *   Filament Lamp: Curve (increasing temp increases resistance).
3.  **Sensors**:
    *   LDR: Light up → Resistance down.
    *   Thermistor: Temp up → Resistance down.
        `
      },
      {
        id: 'em-spectrum',
        number: 8,
        title: 'The Electromagnetic Spectrum',
        synopsis: 'Master the EM spectrum, including the uses and dangers of each radiation type from radio waves to gamma rays.',
        topics: ['EM Wave Properties', 'Radio, Micro, Infrared', 'Visible & UV', 'X-rays & Gamma', 'Ionising Dangers'],
        estimatedTime: '50 min',
        content: `
# Chapter 8: The Electromagnetic Spectrum

### Main Points

1.  **Spectrum Order**: Radio → Micro → IR → Visible → UV → X-ray → Gamma (Increasing frequency).
2.  **Speed**: All travel at 3×10^8 m/s in vacuum.
3.  **Dangers**: UV/X-ray/Gamma are ionising (can cause cancer).
        `
      },
      {
        id: 'energy-transfers',
        number: 10,
        title: 'Energy Transfers',
        synopsis: 'Master kinetic and potential energy stores, energy conservation, and efficiency calculations.',
        topics: ['Energy Stores', 'KE & GPE', 'Conservation of Energy', 'Efficiency Equation'],
        estimatedTime: '45 min',
        content: `
# Chapter 10: Energy Transfers

### Main Points

1.  **Stores**: Kinetic (E=1/2mv^2), GPE (E=mgh), Chemical, Nuclear, Thermal, Elastic.
2.  **Conservation**: Energy cannot be created or destroyed, only transferred.
3.  **Efficiency**: (Useful Energy Out / Total Energy In) x 100%.
        `
      },
      {
        id: 'thermal-energy',
        number: 11,
        title: 'Thermal Energy',
        synopsis: 'Explore conduction, convection, and radiation, and how to minimize heat loss in buildings.',
        topics: ['Conduction (Solids)', 'Convection (Fluids)', 'Radiation (IR)', 'Insulation'],
        estimatedTime: '50 min',
        content: `
# Chapter 11: Thermal Energy

### Main Points

1.  **Conduction**: Transfer through solids via particle collisions. Metals are good conductors.
2.  **Convection**: Movement of warm fluids (gases/liquids) due to density changes.
3.  **Radiation**: Infrared waves that can travel through vacuum. Matt black is best emitter/absorber.
        `
      },
      {
        id: 'work-and-power',
        number: 12,
        title: 'Work and Power',
        synopsis: 'Learn how to calculate work done by forces and the rate of energy transfer as power.',
        topics: ['Work Done (W=Fd)', 'Power (P=W/t)', '1 Watt = 1 Joule/second'],
        estimatedTime: '40 min',
        content: `
# Chapter 12: Work and Power

### Main Points

1.  **Work Done**: Energy transferred when a force moves an object. W = Force x distance.
2.  **Power**: The rate at which work is done. Power = Work / time.
3.  **Units**: Work (Joules), Power (Watts).
        `
      },
      {
        id: 'density-and-pressure',
        number: 13,
        title: 'Density and Pressure',
        synopsis: 'Master the calculation of density and pressure in solids, liquids, and gases.',
        topics: ['p = m/V', 'P = F/A', 'Gas Laws (P1V1=P2V2)', 'Absolute Zero'],
        estimatedTime: '55 min',
        content: `
# Chapter 13: Density and Pressure

### Main Points

1.  **Density**: Mass per unit volume (p = m/V).
2.  **Pressure**: Force per unit area (P = F/A).
3.  **Gas Pressure**: Caused by particles colliding with container walls. Higher temp = higher pressure.
4.  **Absolute Zero**: -273°C or 0 Kelvin (particles have no kinetic energy).
        `
      },
      {
        id: 'magnetism',
        number: 15,
        title: 'Magnetism',
        synopsis: 'Understand magnetic fields, electromagnetism, and the construction of simple motors.',
        topics: ['Poles & Fields', 'Electromagnets', 'Motor Effect', 'Fleming\'s LHR'],
        estimatedTime: '50 min',
        content: `
# Chapter 15: Magnetism

### Main Points

1.  **Poles**: North and South. Like poles repel, opposite poles attract.
2.  **Electromagnets**: Coils of wire with current. Strength increases with more turns, more current, or iron core.
3.  **Motor Effect**: When a wire carrying current in a magnetic field experiences a force.
        `
      },
    ]
  },
  ict: {
    id: 'ict',
    title: 'ICT',
    description: 'Explore the digital world. Master information and communication technology fundamentals for IGCSE.',
    color: '#8b5cf6',
    bgColor: '#ede9fe',
    chapters: [
      {
        id: 'digital-devices',
        number: 1,
        title: 'Digital Devices',
        synopsis: 'Understand the different types of digital devices, their features, input/output hardware, and storage technologies.',
        topics: ['Mainframes & Servers', 'PCs & Laptops', 'Embedded Systems', 'Storage (Magnetic, SSD, Optical)', 'Input/Output Devices'],
        estimatedTime: '60 min',
        content: `
# Chapter 1: Digital Devices

### Main Points

1.  **Types**: Mainframes (huge processing), Servers (network services), PCs, Mobile devices, Embedded systems.
2.  **Input/Output**:
    *   Input: Keyboard, mouse, sensors (temp, light).
    *   Output: Monitors, actuators (physical response), printers.
3.  **Storage**: 
    *   Magnetic: HDD (High capacity, slow).
    *   Solid State: SSD (Fast, durable, expensive).
    *   Optical: Blu-ray/DVD/CD.
4.  **Accessibility**: Screen readers, Braille keyboards for impaired users.
        `
      },
      {
        id: 'software',
        number: 2,
        title: 'Software',
        synopsis: 'Learn about systems and application software, operating systems, utility programs, and software licensing.',
        topics: ['Operating Systems', 'Utility Software', 'GUI vs CLI', 'Open Source vs Proprietary', 'Software Licensing'],
        estimatedTime: '50 min',
        content: `
# Chapter 2: Software

### Main Points

1.  **Categories**: System software (OS/Utility) vs Application software (Word, Browser).
2.  **OS Functions**: Manage RAM, Processor time, UI, and File security.
3.  **User Interface**: GUI (icons/windows) vs CLI (text commands).
4.  **Open Source**: Public code, free. **Proprietary**: Hidden code, paid license.
        `
      },
      {
        id: 'memory-and-processors',
        number: 3,
        title: 'Memory and Processors',
        synopsis: 'Deconstruct the CPU, the Fetch-Execute cycle, and look at factors that affect computer performance.',
        topics: ['CPU Architecture', 'Fetch-Decode-Execute', 'Clock Speed & Cores', 'Cache vs RAM', 'Volatile Memory', 'GPU'],
        estimatedTime: '55 min',
        content: `
# Chapter 3: Memory and Processors

### Main Points

1.  **the CPU**: Control Unit, ALU (maths), and Registers.
2.  **Performance Factors**: Clock speed (Hz), Number of Cores, and Cache size.
3.  **Memory**:
    *   RAM: Volatile (lost at power off).
    *   ROM: Non-Volatile (BIOS instructions).
4.  **GPU**: Specialized for complex visual/math 3D tasks.
        `
      },
      {
        id: 'digital-communication',
        number: 4,
        title: 'Digital Communication',
        synopsis: 'Master networking concepts, bandwidth, latency, and the difference between wired and wireless connectivity.',
        topics: ['Bandwidth & Latency', 'Wired (Fiber/Ethernet)', 'Wireless (Wi-Fi, 5G, Sat)', 'LAN vs WAN vs VPN', 'Tethering'],
        estimatedTime: '50 min',
        content: `
# Chapter 4: Digital Communication

### Main Points

1.  **Speed Concepts**: Bandwidth (Capacity), Latency (Time lag).
2.  **Connectivity**: 
    *   Wired: Fiber optic (fastest), Ethernet (Copper).
    *   Wireless: Wi-Fi, 5G, Bluetooth, Satellite.
3.  **Network Types**: LAN (small area), WAN (global), VPN (encrypted tunnel).
        `
      },
      {
        id: 'risks-and-security',
        number: 6,
        title: 'Risks to Data and Personal Information',
        synopsis: 'Explore cybersecurity risks including malware, social engineering, and the technical and physical methods to secure data.',
        topics: ['MFA', 'Malware (Virus, Worm, Trojan)', 'Social Engineering (Phishing)', 'Firewalls & Encryption'],
        estimatedTime: '60 min',
        content: `
# Chapter 6: Risks to Data and Personal Information

### Main Points

1.  **Authentication**: Multi-Factor Authentication (Know, Have, Are).
2.  **Malware**: Virus (needs host), Worm (self-spreads), Trojan (disguised).
3.  **Social Engineering**: Phishing (emails), Tailgating (physical).
4.  **Defense**: Firewalls (traffic filter), Encryption (scrambling data).
        `
      },
      {
        id: 'impact-of-internet',
        number: 7,
        title: 'The Impact of the Internet',
        synopsis: 'Analyze how the internet has changed communication, business, and working patterns like teleworking and the gig economy.',
        topics: ['VoIP & Video Conferencing', 'E-commerce & E-banking', 'Teleworking Pros/Cons', 'The Gig Economy'],
        estimatedTime: '50 min',
        content: `
# Chapter 7: The Impact of the Internet

### Main Points

1.  **Communication**: VoIP, Instant Messaging, Video Conferencing.
2.  **Daily Life**: E-commerce, Online banking, and Streaming.
3.  **Work**: Teleworking (WFH), Mobile working, and the Gig Economy (App-based work).
        `
      },
      {
        id: 'online-communities',
        number: 8,
        title: 'Online Communities',
        synopsis: 'Learn about social media, wikis, blogs, and the impact of online collaboration on society.',
        topics: ['Social Networking', 'Wikis & Blogs', 'User-Generated Content', 'Collaborative Working'],
        estimatedTime: '45 min',
        content: `
# Chapter 8: Online Communities

### Main Points

1.  **Types**: Social Networks (personal), Wikis (informational), Blogs (personal journals), and Vlogs.
2.  **Features**: Profiles, Friends/Followers, Privacy settings, and Real-time updates.
3.  **User-Generated Content**: Reviews, photos, and videos created by users (e.g., YouTube, TripAdvisor).
        `
      },
      {
        id: 'implications-digital-tech',
        number: 9,
        title: 'Implications of Digital Technologies',
        synopsis: 'Analyze the environmental, ethical, and legal impacts of our digital lives.',
        topics: ['E-waste', 'Privacy & Surveillance', 'Digital Divide', 'Laws (GDPR, CMA)'],
        estimatedTime: '55 min',
        content: `
# Chapter 9: Implications of Digital Technologies

### Main Points

1.  **Environmental**: Energy consumption and E-waste (toxic chemicals in landfills).
2.  **Ethical**: Net neutrality, surveillance, and online behavior (cyberbullying).
3.  **Legal**: Computer Misuse Act (hacking), Data Protection Act (GDPR), Copyright.
4.  **Social**: The Digital Divide (gap between those with and without access).
        `
      },
      {
        id: 'online-information',
        number: 10,
        title: 'Online Information',
        synopsis: 'Master the skills to search, evaluate, and verify information found on the internet.',
        topics: ['Search Engines', 'Evaluation of Sources', 'Verifying Data', 'Bias & Fake News'],
        estimatedTime: '40 min',
        content: `
# Chapter 10: Online Information

### Main Points

1.  **Search Engines**: Use keywords and logical operators (AND, OR, NOT).
2.  **Reliability**: Check the author, date, and cross-reference with other sources.
3.  **Bias**: Recognizing when information is one-sided or intended to persuade rather than inform.
        `
      },
      {
        id: 'online-services',
        number: 11,
        title: 'Online Services',
        synopsis: 'Understand how online services like retail, banking, and government portals work.',
        topics: ['E-commerce', 'Online Banking', 'E-government', 'VLEs & Online Training'],
        estimatedTime: '45 min',
        content: `
# Chapter 11: Online Services

### Main Points

1.  **Retail**: 24/7 access, wider choice, but impact on local high streets.
2.  **Banking**: Convenient transfers and payments, but security risks (phishing).
3.  **Education**: Virtual Learning Environments (VLEs) like Moodle/Google Classroom.
        `
      },
      {
        id: 'the-cloud',
        number: 12,
        title: 'The Cloud',
        synopsis: 'Explore cloud storage and computing, collaborative tools, and the pros and cons of cloud-based services.',
        topics: ['Cloud Storage', 'SaaS', 'Collaborative Editing', 'Scalability'],
        estimatedTime: '35 min',
        content: `
# Chapter 12: The Cloud

### Main Points

1.  **Definition**: Storing and accessing data/programs over the internet instead of local hardware.
2.  **Pros**: Accessibility from any device, automated backups, and easy collaboration.
3.  **Cons**: Requires internet connection, security concerns, and potential subscription costs.
        `
      },
      {
        id: 'applying-ict',
        number: 13,
        title: 'Applying ICT',
        synopsis: 'Understand how ICT is used in specific sectors like manufacturing, retail, and finance.',
        topics: ['CAD/CAM', 'EPOS Systems', 'Stock Control', 'ATM Services'],
        estimatedTime: '50 min',
        content: `
# Chapter 13: Applying ICT

### Main Points

1.  **Manufacturing**: CAD (Design) and CAM (Making) for high precision.
2.  **Retail**: EPOS (Electronic Point of Sale) for tracking sales and inventory.
3.  **Finance**: ATMs and EFT (Electronic Fund Transfer) for global money movement.
        `
      },
      {
        id: 'file-management',
        number: 14,
        title: 'File Management',
        synopsis: 'Learn how to organize, compress, and secure your digital files effectively.',
        topics: ['Folders & Naming', 'File Compression (ZIP)', 'Backups', 'File Extensions'],
        estimatedTime: '30 min',
        content: `
# Chapter 14: File Management

### Main Points

1.  **Organization**: Clear folder structures and descriptive file names.
2.  **Compression**: Reducing file size for easier sharing (e.g., .zip, .rar).
3.  **Backups**: Keeping copies in different locations (USB, Cloud, External drive).
        `
      }
    ]
  },
  math: {
    id: 'math',
    title: 'Mathematics',
    description: 'Build a strong mathematical foundation for IGCSE success. Algebra, Geometry, and beyond.',
    color: '#ec4899',
    bgColor: '#fce7f3',
    chapters: [
      {
        id: 'number-systems',
        number: 1,
        title: 'Numbers',
        synopsis: 'Master HCF, LCM, indices, standard form, percentages, and unit conversions.',
        topics: ['HCF & LCM', 'Indices rules', 'Standard Form', 'Reverse Percentage', 'Compound Interest', 'Metric Units'],
        estimatedTime: '55 min',
        content: `
# Chapter 1: Numbers

### Essential Rules

1.  **Indices**: a^m × a^n = a^(m+n); a^m / a^n = a^(m-n); a^-n = 1/a^n.
2.  **HCF/LCM**: HCF is the lowest power common factors. LCM is the highest powers of all factors.
3.  **Compound Interest**: A = P(1 + r/100)^n.
4.  **Reverse %**: Original = Final / Multiplier.
        `
      },
      {
        id: 'algebra',
        number: 2,
        title: 'Algebra',
        synopsis: 'Explore factorisation, solving quadratics, algebraic fractions, and the quadratic formula.',
        topics: ['Factorisation', 'Quadratics', 'Quadratic Formula', 'Completing the Square', 'Discriminant'],
        estimatedTime: '60 min',
        content: `
# Chapter 2: Algebra

### Core Methods

1.  **Factorisation**: Difference of two squares (a^2-b^2 = (a-b)(a+b)).
2.  **Solving Quadratics**: Formula x = [-b ± sqrt(b^2-4ac)] / 2a.
3.  **Completing the Square**: (x + b/2)^2 - (b/2)^2 + c.
4.  **Discriminant**: b^2-4ac (tells you how many solutions).
        `
      },
      {
        id: 'graphs',
        number: 3,
        title: 'Graphs',
        synopsis: 'Learn about linear, quadratic, cubic, and trigonometric graphs, as well as transformations.',
        topics: ['y=mx+c', 'Perpendicular lines', 'Parabolas & S-shapes', 'Trig Graphs', 'Transformations'],
        estimatedTime: '55 min',
        content: `
# Chapter 3: Graphs

### Linear Graphs
*   **Equation**: y = mx + c.
*   **Gradient (m)**: (y2-y1)/(x2-x1).
*   **Perpendicular**: m1 × m2 = -1.

### Transformations
*   f(x) + a: Move UP.
*   f(x + a): Move LEFT.
*   -f(x): Reflect in x-axis.
        `
      },
      {
        id: 'shapes-and-similarity',
        number: 4,
        title: 'Shapes and Space',
        synopsis: 'Calculate volumes and areas of 3D shapes, and understand similarity and polygon angles.',
        topics: ['Sphere/Cone/Cylinder Volume', 'Similarity SF^2 & SF^3', 'Polygon Interior/Exterior Angles'],
        estimatedTime: '50 min',
        content: `
# Chapter 4: Shapes and Space

### Key Formulas
*   **Sphere**: V = 4/3 π r^3; SA = 4 π r^2.
*   **Cylinder**: V = π r^2 h; SA = 2πr^2 + 2πrh.
*   **Polygons**: Sum of Interior = (n-2) × 180. Exterior = 360.
*   **Similarity**: Area Scale Factor = k^2. Volume Scale Factor = k^3.
        `
      },
      {
        id: 'trigonometry',
        number: 5,
        title: 'Trigonometry',
        synopsis: 'Master right-angled and non-right-angled trigonometry, including the Sine and Cosine rules.',
        topics: ['SOHCAHTOA', 'Sine Rule', 'Cosine Rule', 'Triangle Area', '3D Trig'],
        estimatedTime: '65 min',
        content: `
# Chapter 5: Trigonometry

### Right-Angled
*   **SOHCAHTOA**: sin(θ)=O/H, cos(θ)=A/H, tan(θ)=O/A.

### Non-Right-Angled
*   **Sine Rule**: a/sin(A) = b/sin(B).
*   **Cosine Rule**: a^2 = b^2 + c^2 - 2bc cos(A).
*   **Area**: 1/2 ab sin(C).
        `
      },
      {
        id: 'circle-theorems',
        number: 6,
        title: 'The Circle',
        synopsis: 'Learn the properties of arc/sectors and the 8 fundamental circle theorems.',
        topics: ['Arc Length', 'Sector Area', 'Circle Theorems', 'Alternating Segment'],
        estimatedTime: '55 min',
        content: `
# Chapter 6: The Circle

### Formulas
*   **Arc Length**: (θ/360) × 2πr.
*   **Sector Area**: (θ/360) × πr^2.

### Big 8 Theorems
1. Angle at center is double circumference.
2. Angle in semi-circle is 90°.
3. Cyclic quadrilateral: opposite angles add to 180°.
4. Alternate segment theorem.
        `
      },
      {
        id: 'sets',
        number: 7,
        title: 'Sets',
        synopsis: 'Understand set notation, Venn diagrams, and the principles of intersection and union.',
        topics: ['Intersection & Union', 'Complement of a Set', 'Venn Diagram Shading', 'Subset Notation'],
        estimatedTime: '40 min',
        content: `
# Chapter 7: Sets

### Notation
*   **A ∩ B**: Intersection (Elements in both A and B).
*   **A ∪ B**: Union (Elements in A or B or both).
*   **A'**: Complement (Elements NOT in A).
*   **∈**: Element of.

### Venn Diagrams
Used to visualize relationships between sets. Shading regions helps identify specific groups of data.
        `
      },
      {
        id: 'statistics',
        number: 8,
        title: 'Handling Data',
        synopsis: 'Master the calculation of mean, median, mode, and range, as well as probability fundamentals.',
        topics: ['Mean/Median/Mode', 'IQR', 'Probability Rules', 'Tree Diagrams'],
        estimatedTime: '55 min',
        content: `
# Chapter 8: Handling Data

### Statistics
*   **Mean**: Sum / Frequency.
*   **Median**: Middle value.
*   **Probability**: Range is 0 to 1. P(Not A) = 1 - P(A).
*   **Independent Events**: Multiply probabilities.
        `
      },
      {
        id: 'sequences',
        number: 9,
        title: 'Sequences',
        synopsis: 'Learn how to find the nth term for linear and quadratic sequences.',
        topics: ['Linear Sequences', 'Quadratic Sequences', 'Fibonacci Type', 'Nth Term Formula'],
        estimatedTime: '45 min',
        content: `
# Chapter 9: Sequences

### Linear (Arithmetic)
*   **Formula**: nth term = dn + c (where d is the difference).

### Quadratic
*   **Formula**: an^2 + bn + c.
*   Find second difference → Divide by 2 to get 'a'.
        `
      }
    ]
  }
};

export function getSubject(id: string): Subject | undefined {
  return subjects[id];
}

export function getChapter(subjectId: string, chapterId: string) {
  const subject = subjects[subjectId];
  if (!subject) return undefined;
  return subject.chapters.find(c => c.id === chapterId);
}
