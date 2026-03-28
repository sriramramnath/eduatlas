
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
        title: 'Characteristics and Classification of Living Organisms',
        synopsis: 'Understand the fundamental characteristics and classification of living organisms.',
        topics: ['MRS GREN', 'Five Kingdoms', 'Vertebrates', 'Arthropods'],
        estimatedTime: '45 min',
        content: `
# Chapter 1: Characteristics and Classification of Living Organisms

All living things share seven characteristics, remembered by the acronym MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition. Organisms are classified into a hierarchical system, with the five kingdoms being a key component: Animals, Plants, Fungi, Protoctists, and Prokaryotes.
        `
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Master the atomic world. Detailed coverage of chemical principles for the Pearson Edexcel IGCSE Chemistry curriculum.',
    color: '#f59e0b',
    bgColor: '#fef3c7',
    chapters: [
      {
        id: 'principles-of-chemistry',
        number: 1,
        title: 'Principles of Chemistry',
        synopsis: 'This chapter covers the states of matter, separation techniques, atomic structure, and the mole concept.',
        topics: ['States of Matter', 'Separation', 'Atomic Structure', 'Moles'],
        estimatedTime: '60 min',
        content: `
# Chapter 1: Principles of Chemistry

This chapter introduces fundamental concepts. You will learn about the three states of matter (solid, liquid, gas) and how to separate mixtures using techniques like filtration, crystallisation, and distillation. You will also explore the structure of atoms and the concept of the mole.
        `
      }
    ]
  },
  physics: {
    id: 'physics',
    title: 'Physics',
    description: 'Master the laws of the universe with our comprehensive guide to the Pearson Edexcel IGCSE Physics specification.',
    color: '#8b5cf6',
    bgColor: '#ede9fe',
    chapters: [
      {
          id: 'forces-and-motion',
          number: 1,
          title: 'Forces and Motion',
          synopsis: 'Explore the relationship between forces and motion, including speed, acceleration, and Newton\'s Laws.',
          topics: ['Speed & Velocity', 'Acceleration', 'Graphs', 'Newton\'s Laws'],
          estimatedTime: '60 min',
          content: `
# Chapter 1: Forces and Motion

This chapter covers the basics of motion, including the difference between speed and velocity, and the concept of acceleration. You will learn how to interpret distance-time and velocity-time graphs, and apply Newton's Laws of Motion to solve problems.
          `
      }
    ]
  },
  ict: {
    id: 'ict',
    title: 'ICT',
    description: 'Explore the digital world. Master information and communication technology fundamentals for IGCSE.',
    color: '#ef4444',
    bgColor: '#fee2e2',
    chapters: [
      {
        id: 'digital-devices',
        number: 1,
        title: 'Digital Devices',
        synopsis: 'Understand the different types of digital devices, their features, and their uses.',
        topics: ['Computers', 'Mobile Devices', 'Storage'],
        estimatedTime: '45 min',
        content: `
# Chapter 1: Digital Devices

This chapter introduces the various types of digital devices you will encounter, from mainframes to mobile phones. You will learn about their key features and explore the different types of storage they use.
        `
      }
    ]
  },
  maths: {
    id: 'maths',
    title: 'Mathematics',
    description: 'Build a strong mathematical foundation for IGCSE success. Algebra, Geometry, and beyond.',
    color: '#3b82f6',
    bgColor: '#dbeafe',
    chapters: [
      {
        id: 'number',
        number: 1,
        title: 'Number',
        synopsis: 'Master the foundational concepts of numbers, including integers, fractions, decimals, and percentages.',
        topics: ['Integers', 'Fractions', 'Decimals', 'Percentages'],
        estimatedTime: '60 min',
        content: `
# Chapter 1: Number

This chapter covers the fundamental concepts of numbers, including working with integers, fractions, decimals, and percentages. You will also learn about squares, square roots, cubes, and cube roots.
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
  return subject.chapters.find((c: any) => c.id === chapterId);
}
