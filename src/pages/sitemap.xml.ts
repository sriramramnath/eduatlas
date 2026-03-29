import type { APIRoute } from 'astro';
import { getSubjects } from '../utils/subjects';
import { contentSubjectConfigs } from '../utils/contentSubjects';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function createUrlEntry(loc: string, priority: string, changefreq: string, lastmod?: string) {
  const parts = [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
  ];
  
  if (lastmod) {
    parts.push(`    <lastmod>${lastmod}</lastmod>`);
  }
  
  parts.push('  </url>');
  return parts.join('\n');
}

function getChapterId(subjectId: string, chapterNum: number): string {
  const needsPadding = subjectId === 'chemistry' || subjectId === 'physics';
  if (needsPadding) {
    return `chapter-${String(chapterNum).padStart(2, '0')}`;
  }
  return `chapter-${chapterNum}`;
}

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = new URL('https://eduosatlas.vercel.app');
  const subjects = getSubjects();

  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'daily', lastmod: '2026-03-29' },
    { path: '/subjects', priority: '0.9', changefreq: 'weekly', lastmod: '2026-03-29' },
    { path: '/search', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-29' },
    { path: '/about', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-29' },
    { path: '/404', priority: '0.3', changefreq: 'monthly', lastmod: '2026-03-29' },
  ];

  const subjectRoutes = Object.values(subjects).map((subject) => ({
    path: `/subjects/${subject.id}`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: '2026-03-29',
  }));

  const chapterRoutes = Object.values(subjects).flatMap((subject) =>
    subject.chapters.map((chapter) => ({
      path: `/subjects/${subject.id}/chapters/${getChapterId(subject.id, chapter.number)}`,
      priority: '0.7',
      changefreq: 'weekly',
      lastmod: '2026-03-29',
    })),
  );

  const urls = [...staticRoutes, ...subjectRoutes, ...chapterRoutes]
    .map(({ path, priority, changefreq, lastmod }) =>
      createUrlEntry(new URL(path, baseUrl).toString(), priority, changefreq, lastmod),
    )
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
