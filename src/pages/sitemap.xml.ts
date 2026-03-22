import type { APIRoute } from 'astro';
import { getSubjects } from '../utils/subjects';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function createUrlEntry(loc: string, priority: string, changefreq: string) {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = site ?? new URL(url.origin);
  const subjects = getSubjects();

  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/subjects', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', priority: '0.6', changefreq: 'monthly' },
    { path: '/search', priority: '0.7', changefreq: 'weekly' },
  ];

  const subjectRoutes = Object.values(subjects).map((subject) => ({
    path: `/subjects/${subject.id}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const chapterRoutes = Object.values(subjects).flatMap((subject) =>
    subject.chapters.map((chapter) => ({
      path: `/subjects/${subject.id}/chapters/${chapter.id}`,
      priority: '0.7',
      changefreq: 'weekly',
    })),
  );

  const urls = [...staticRoutes, ...subjectRoutes, ...chapterRoutes]
    .map(({ path, priority, changefreq }) =>
      createUrlEntry(new URL(path, baseUrl).toString(), priority, changefreq),
    )
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
