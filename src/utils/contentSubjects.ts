export type ContentSubjectId = 'biology' | 'chemistry' | 'physics' | 'ict' | 'maths';

export interface ContentSubjectConfig {
  synopsisMatcher: RegExp;
  notePath: (chapterId: string | number) => string;
  synopsisPath: (chapterId: string | number) => string;
  quizPath: (chapterId: string | number) => string;
}

function padChapterNumber(chapterNumber: string | number): string {
  const num = typeof chapterNumber === 'string' ? parseInt(chapterNumber, 10) : chapterNumber;
  return isNaN(num) ? String(chapterNumber) : String(num).padStart(2, '0');
}

export const contentSubjectConfigs: Record<ContentSubjectId, ContentSubjectConfig> = {
  biology: {
    synopsisMatcher: /Biology_Chapter(\d+)_Synopsis\.md/,
    notePath: (chapterNumber) => `/src/newcontent/Biology/Biology_Chapter${chapterNumber}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/Biology/Biology_Chapter${chapterNumber}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/Biology/Biology_Chapter${chapterNumber}_Quiz.md`,
  },
  chemistry: {
    synopsisMatcher: /Chemistry_Ch(\d+)_Synopsis\.md/,
    notePath: (chapterNumber) => `/src/newcontent/chemistry/Chemistry_Ch${padChapterNumber(chapterNumber)}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/chemistry/Chemistry_Ch${padChapterNumber(chapterNumber)}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/chemistry/Chemistry_Ch${padChapterNumber(chapterNumber)}_Quiz.md`,
  },
  physics: {
    synopsisMatcher: /Physics_(\d+)_Synopsis\.md/,
    notePath: (chapterNumber) => `/src/newcontent/physics/Physics_${padChapterNumber(chapterNumber)}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/physics/Physics_${padChapterNumber(chapterNumber)}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/physics/Physics_${padChapterNumber(chapterNumber)}_Quiz.md`,
  },
  ict: {
    synopsisMatcher: /ICT_Chapter(\d+)_Synopsis\.md/,
    notePath: (chapterNumber) => `/src/newcontent/ICT/ICT_Chapter${chapterNumber}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/ICT/ICT_Chapter${chapterNumber}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/ICT/ICT_Chapter${chapterNumber}_Quiz.md`,
  },
  maths: {
    synopsisMatcher: /Mathematics_Chapter(\d+)_Synopsis\.md/,
    notePath: (chapterNumber) => `/src/newcontent/maths/Mathematics_Chapter${chapterNumber}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/maths/Mathematics_Chapter${chapterNumber}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/maths/Mathematics_Chapter${chapterNumber}_Quiz.md`,
  },
};
