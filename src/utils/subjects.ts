import { contentSubjectConfigs, type ContentSubjectId } from './contentSubjects';

// Subject configuration type
export interface SubjectConfig {
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

// Chapter configuration type
export interface ChapterConfig {
  title: string;
  synopsis: string;
  topics: string[];
  estimatedTime: string;
  number?: number;
}

// Full subject type
export interface Subject {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  chapters: Chapter[];
}

// Full chapter type
export interface Chapter {
  id: string;
  number: number;
  title: string;
  synopsis: string;
  topics: string[];
  estimatedTime: string;
}

function extractBiologyTitle(raw: string, chapterNumber: number): string {
  const heading = raw.split('\n').find((line) => line.startsWith('# '));
  if (!heading) return `Chapter ${chapterNumber}`;

  const title = heading
    .replace(/^#\s*(?:IGCSE\s+)?Chemistry\s+Chapter\s+\d+:\s*/i, '')
    .replace(/^#\s*Chapter\s+\d+:\s*/i, '')
    .replace(/\s*-\s*Concise Synopsis\s*$/i, '')
    .replace(/\s*-\s*Quick Synopsis.*$/i, '')
    .replace(/\s*-\s*Quiz Section\s*$/i, '')
    .replace(/\s*-\s*Notes\s*$/i, '')
    .trim();

  return title || `Chapter ${chapterNumber}`;
}

function extractBiologyTopics(raw: string): string[] {
  return raw
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.replace(/^##\s*/, '').replace(/^\d+(?:\.\d+)?\.?\s*/, '').trim())
    .filter((topic) =>
      topic &&
      !/^Quick Revision Guide/i.test(topic) &&
      !/^Exam-Style Questions/i.test(topic) &&
      !/^Part [A-Z]/i.test(topic),
    )
    .slice(0, 6);
}

function extractChemistryTopics(raw: string): string[] {
  return raw
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) =>
      line
        .replace(/^##\s*/, '')
        .replace(/^\d+(?:\.\d+)?\.?\s*/, '')
        .replace(/\*\*/g, '')
        .trim(),
    )
    .filter((topic) => topic && !/^(Detailed Notes|Quick Revision Synopsis|Concise Synopsis)/i.test(topic))
    .slice(0, 6);
}

function extractPhysicsTopics(raw: string): string[] {
  return raw
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) =>
      line
        .replace(/^##\s*/, '')
        .replace(/^\d+(?:\.\d+)?\.?\s*/, '')
        .replace(/\*\*/g, '')
        .trim(),
    )
    .filter((topic) => topic && !/^(Pearson Edexcel|Quiz Section|Multiple Choice|True\/False)/i.test(topic))
    .slice(0, 6);
}

function buildBiologySynopsis(title: string, topics: string[]): string {
  if (topics.length === 0) {
    return `Study ${title} using the notes, synopsis, quiz, and practice papers.`;
  }

  if (topics.length === 1) {
    return `Study ${topics[0]} in this chapter.`;
  }

  if (topics.length === 2) {
    return `Study ${topics[0]} and ${topics[1]} in this chapter.`;
  }

  return `Study ${topics.slice(0, 3).join(', ')}, and more in this chapter.`;
}

function buildChapterSynopsis(title: string, topics: string[]): string {
  if (topics.length === 0) {
    return `Study ${title} using the notes, synopsis, and quiz.`;
  }

  if (topics.length === 1) {
    return `Study ${topics[0]} in this chapter.`;
  }

  if (topics.length === 2) {
    return `Study ${topics[0]} and ${topics[1]} in this chapter.`;
  }

  return `Study ${topics.slice(0, 3).join(', ')}, and more in this chapter.`;
}

function getContentSubjectChapterData(subjectId: ContentSubjectId) {
  const config = contentSubjectConfigs[subjectId];
  const synopsisModules =
    subjectId === 'biology'
      ? import.meta.glob('/src/newcontent/Biology/Biology_Chapter*_Synopsis.md', {
          eager: true,
          query: '?raw',
          import: 'default',
        })
      : subjectId === 'chemistry'
        ? import.meta.glob('/src/newcontent/chemistry/Chemistry_Ch*_Synopsis.md', {
            eager: true,
            query: '?raw',
            import: 'default',
          })
        : import.meta.glob('/src/newcontent/physics/Physics_*_Synopsis.md', {
            eager: true,
            query: '?raw',
            import: 'default',
          });
  const notesModules =
    subjectId === 'biology'
      ? import.meta.glob('/src/newcontent/Biology/Biology_Chapter*_Notes.md', {
          eager: true,
          query: '?raw',
          import: 'default',
        })
      : subjectId === 'chemistry'
        ? import.meta.glob('/src/newcontent/chemistry/Chemistry_Ch*_Notes.md', {
            eager: true,
            query: '?raw',
            import: 'default',
          })
        : import.meta.glob('/src/newcontent/physics/Physics_*_Notes.md', {
            eager: true,
            query: '?raw',
            import: 'default',
          });

  return { config, synopsisModules, notesModules };
}

// Get all subjects from the file system
export function getSubjects(): Record<string, Subject> {
  const subjects: Record<string, Subject> = {};
  
  // Import all subject JSONs using glob
  const subjectModules = import.meta.glob('/src/subjects/*/subject.json', { eager: true });
  const chapterModules = import.meta.glob('/src/subjects/*/chapter-*/chapter.json', { eager: true });
  const contentSubjectData: Partial<Record<ContentSubjectId, ReturnType<typeof getContentSubjectChapterData>>> = {
    biology: getContentSubjectChapterData('biology'),
    chemistry: getContentSubjectChapterData('chemistry'),
    physics: getContentSubjectChapterData('physics'),
  };
  
  for (const path in subjectModules) {
    const match = path.match(/\/src\/subjects\/([^/]+)\/subject\.json$/);
    if (!match) continue;
    
    const subjectId = match[1];
    const subjectConfig = (subjectModules[path] as any).default;
    
    // Find chapters for this subject
    const chapters: Chapter[] = [];
    const chapterConfigMap = new Map<number, Chapter>();
    
    for (const chapterPath in chapterModules) {
      if (!chapterPath.includes(`/subjects/${subjectId}/`)) continue;
      
      const chapterMatch = chapterPath.match(/\/src\/subjects\/[^/]+\/(chapter-[^/]+)\/chapter\.json$/);
      if (!chapterMatch) continue;
      
      const chapterId = chapterMatch[1];
      const chapterConfig = (chapterModules[chapterPath] as any).default;
      
      // Extract chapter number from folder name
      const chapterNum = parseInt(chapterId.replace('chapter-', ''));
      
      chapterConfigMap.set(chapterConfig.number || chapterNum, {
        id: chapterId,
        number: chapterConfig.number || chapterNum,
        title: chapterConfig.title,
        synopsis: chapterConfig.synopsis,
        topics: chapterConfig.topics,
        estimatedTime: chapterConfig.estimatedTime,
      });
    }

    if (subjectId in contentSubjectData) {
      const { config, synopsisModules, notesModules } = contentSubjectData[subjectId as ContentSubjectId]!;
      const topicExtractor = subjectId === 'chemistry' ? extractChemistryTopics : subjectId === 'physics' ? extractPhysicsTopics : extractBiologyTopics;

      for (const chapterPath in synopsisModules) {
        const chapterMatch = chapterPath.match(config.synopsisMatcher);
        if (!chapterMatch) continue;

        const chapterNum = parseInt(chapterMatch[1], 10);
        const existingChapter = chapterConfigMap.get(chapterNum);

        if (existingChapter) {
          chapters.push(existingChapter);
          continue;
        }

        const rawSynopsis = synopsisModules[chapterPath] as string;
        const rawNotes = notesModules[config.notePath(chapterNum)] as string | undefined;
        const title = extractBiologyTitle(rawSynopsis, chapterNum);
        const topics = topicExtractor(rawNotes || rawSynopsis);

        chapters.push({
          id: `chapter-${chapterNum}`,
          number: chapterNum,
          title,
          synopsis: buildChapterSynopsis(title, topics),
          topics,
          estimatedTime: '60 min',
        });
      }
    } else {
      chapters.push(...chapterConfigMap.values());
    }
    
    // Sort chapters by number
    chapters.sort((a, b) => a.number - b.number);
    
    subjects[subjectId] = {
      id: subjectId,
      ...subjectConfig,
      chapters,
    };
  }
  
  return subjects;
}

// Get subject by ID
export function getSubject(id: string): Subject | undefined {
  const subjects = getSubjects();
  return subjects[id];
}

// Get chapter by subject and chapter IDs
export function getChapter(subjectId: string, chapterId: string): Chapter | undefined {
  const subject = getSubject(subjectId);
  if (!subject) return undefined;
  
  return subject.chapters.find((c) => c.id === chapterId);
}
