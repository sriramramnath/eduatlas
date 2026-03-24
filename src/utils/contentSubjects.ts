export type ContentSubjectId = 'biology' | 'chemistry' | 'physics';

export interface ContentSubjectConfig {
  synopsisMatcher: RegExp;
  notePath: (chapterNumber: number) => string;
  synopsisPath: (chapterNumber: number) => string;
  quizPath: (chapterNumber: number) => string;
}

function padChapterNumber(chapterNumber: number): string {
  return String(chapterNumber).padStart(2, '0');
}

export const contentSubjectConfigs: Record<ContentSubjectId, ContentSubjectConfig> = {
  biology: {
    synopsisMatcher: /Biology_Chapter(\d+)_Synopsis\.md$/,
    notePath: (chapterNumber) => `/src/newcontent/Biology/Biology_Chapter${chapterNumber}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/Biology/Biology_Chapter${chapterNumber}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/Biology/Biology_Chapter${chapterNumber}_Quiz.md`,
  },
  chemistry: {
    synopsisMatcher: /Chemistry_Ch(\d+)_Synopsis\.md$/,
    notePath: (chapterNumber) => `/src/newcontent/chemistry/Chemistry_Ch${padChapterNumber(chapterNumber)}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/chemistry/Chemistry_Ch${padChapterNumber(chapterNumber)}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/chemistry/Chemistry_Ch${padChapterNumber(chapterNumber)}_Quiz.md`,
  },
  physics: {
    synopsisMatcher: /Physics_(\d+)_Synopsis\.md$/,
    notePath: (chapterNumber) => `/src/newcontent/physics/Physics_${padChapterNumber(chapterNumber)}_Notes.md`,
    synopsisPath: (chapterNumber) => `/src/newcontent/physics/Physics_${padChapterNumber(chapterNumber)}_Synopsis.md`,
    quizPath: (chapterNumber) => `/src/newcontent/physics/Physics_${padChapterNumber(chapterNumber)}_Quiz.md`,
  },
};
