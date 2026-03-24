import { getSubjects } from './subjects';
import { contentSubjectConfigs } from './contentSubjects';

export type SearchDocumentType = 'subject' | 'chapter' | 'notes' | 'synopsis' | 'quiz' | 'practice';

export interface SearchDocument {
  id: string;
  type: SearchDocumentType;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  subjectId: string;
  subjectTitle: string;
  chapterId?: string;
  chapterNumber?: number;
  keywords: string[];
}

const pageMeta: Record<
  Exclude<SearchDocumentType, 'subject' | 'chapter'>,
  { label: string; tab?: string; synonyms: string[]; description: string }
> = {
  notes: {
    label: 'Notes',
    synonyms: ['study notes', 'revision notes', 'explanations', 'theory'],
    description: 'Detailed notes and explanations for this chapter.',
  },
  synopsis: {
    label: 'Synopsis',
    tab: 'synopsis',
    synonyms: ['summary', 'overview', 'revision summary', 'key ideas'],
    description: 'Condensed chapter summary for quick revision.',
  },
  quiz: {
    label: 'Quiz',
    tab: 'quiz',
    synonyms: ['questions', 'test', 'mcq', 'practice quiz'],
    description: 'Quiz questions to check understanding.',
  },
  practice: {
    label: 'Practice',
    tab: 'practice',
    synonyms: ['exam practice', 'past paper', 'worksheet', 'practice questions'],
    description: 'Practice questions and exam-style resources.',
  },
};

function uniqueKeywords(values: Array<string | undefined>): string[] {
  return [...new Set(values.flatMap((value) => (value ? [value] : [])))];
}

function getChapterContentAvailability() {
  const noteModules = import.meta.glob('/src/subjects/*/chapter-*/note.md');
  const synopsisModules = import.meta.glob('/src/subjects/*/chapter-*/synopsis.md');
  const quizModules = import.meta.glob('/src/subjects/*/chapter-*/quiz.md');
  const practiceModules = import.meta.glob('/src/subjects/*/chapter-*/practice.md');
  const contentSubjectSources = {
    biology: {
      notes: import.meta.glob('/src/newcontent/Biology/Biology_Chapter*_Notes.md'),
      synopsis: import.meta.glob('/src/newcontent/Biology/Biology_Chapter*_Synopsis.md'),
      quiz: import.meta.glob('/src/newcontent/Biology/Biology_Chapter*_Quiz.md'),
    },
    chemistry: {
      notes: import.meta.glob('/src/newcontent/chemistry/Chemistry_Ch*_Notes.md'),
      synopsis: import.meta.glob('/src/newcontent/chemistry/Chemistry_Ch*_Synopsis.md'),
      quiz: import.meta.glob('/src/newcontent/chemistry/Chemistry_Ch*_Quiz.md'),
    },
  };

  return {
    has(subjectId: string, chapterId: string, chapterNumber: number, type: Exclude<SearchDocumentType, 'subject' | 'chapter'>) {
      if (subjectId in contentSubjectSources) {
        if (type === 'practice') {
          return subjectId === 'biology';
        }

        const config = contentSubjectConfigs[subjectId as keyof typeof contentSubjectConfigs];
        const expectedPath =
          type === 'notes'
            ? config.notePath(chapterNumber)
            : type === 'synopsis'
              ? config.synopsisPath(chapterNumber)
              : config.quizPath(chapterNumber);

        return Boolean(contentSubjectSources[subjectId as keyof typeof contentSubjectSources][type][expectedPath]);
      }

      const basePath = `/src/subjects/${subjectId}/${chapterId}`;
      const sources: Record<Exclude<SearchDocumentType, 'subject' | 'chapter'>, Record<string, unknown>> = {
        notes: noteModules,
        synopsis: synopsisModules,
        quiz: quizModules,
        practice: practiceModules,
      };

      return Boolean(sources[type][`${basePath}/${type}.md`]);
    },
  };
}

export function getSearchDocuments(): SearchDocument[] {
  const subjects = Object.values(getSubjects());
  const contentAvailability = getChapterContentAvailability();
  const documents: SearchDocument[] = [];

  for (const subject of subjects) {
    documents.push({
      id: `subject:${subject.id}`,
      type: 'subject',
      title: subject.title,
      subtitle: 'Subject',
      description: subject.description,
      href: `/subjects/${subject.id}`,
      subjectId: subject.id,
      subjectTitle: subject.title,
      keywords: uniqueKeywords([
        subject.id,
        subject.title,
        subject.description,
        ...subject.chapters.flatMap((chapter) => chapter.topics),
      ]),
    });

    for (const chapter of subject.chapters) {
      const chapterLabel = `Chapter ${chapter.number}`;
      const chapterHref = `/subjects/${subject.id}/chapters/${chapter.id}`;

      documents.push({
        id: `chapter:${subject.id}:${chapter.id}`,
        type: 'chapter',
        title: chapter.title,
        subtitle: `${subject.title} ${chapterLabel}`,
        description: chapter.synopsis,
        href: chapterHref,
        subjectId: subject.id,
        subjectTitle: subject.title,
        chapterId: chapter.id,
        chapterNumber: chapter.number,
        keywords: uniqueKeywords([
          subject.id,
          subject.title,
          chapter.id,
          chapterLabel,
          `chapter ${chapter.number}`,
          chapter.title,
          chapter.synopsis,
          ...chapter.topics,
        ]),
      });

      for (const type of Object.keys(pageMeta) as Array<Exclude<SearchDocumentType, 'subject' | 'chapter'>>) {
        if (!contentAvailability.has(subject.id, chapter.id, chapter.number, type)) {
          continue;
        }

        const meta = pageMeta[type];
        const href = meta.tab ? `${chapterHref}?tab=${meta.tab}` : chapterHref;

        documents.push({
          id: `${type}:${subject.id}:${chapter.id}`,
          type,
          title: `${chapter.title} ${meta.label}`,
          subtitle: `${subject.title} ${chapterLabel}`,
          description: meta.description,
          href,
          subjectId: subject.id,
          subjectTitle: subject.title,
          chapterId: chapter.id,
          chapterNumber: chapter.number,
          keywords: uniqueKeywords([
            subject.id,
            subject.title,
            chapter.id,
            chapterLabel,
            `chapter ${chapter.number}`,
            chapter.title,
            chapter.synopsis,
            meta.label,
            ...meta.synonyms,
            ...chapter.topics,
          ]),
        });
      }
    }
  }

  return documents;
}
