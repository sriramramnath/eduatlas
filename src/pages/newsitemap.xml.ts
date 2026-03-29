import type { APIRoute } from 'astro';

interface UrlEntry {
  path: string;
  priority: string;
  changefreq: string;
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
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

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = new URL('https://eduosatlas.vercel.app');
  const today = '2026-03-29';

  const staticRoutes: UrlEntry[] = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/subjects', priority: '0.9', changefreq: 'weekly' },
    { path: '/search', priority: '0.8', changefreq: 'weekly' },
    { path: '/about', priority: '0.6', changefreq: 'monthly' },
    { path: '/404', priority: '0.3', changefreq: 'monthly' },
  ];

  const subjects = [
    { id: 'biology', chapters: 22 },
    { id: 'chemistry', chapters: 29 },
    { id: 'ict', chapters: 12 },
    { id: 'maths', chapters: 50 },
    { id: 'physics', chapters: 28 },
  ];

  const subjectRoutes: UrlEntry[] = subjects.map(({ id }) => ({
    path: `/subjects/${id}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const chapterRoutes: UrlEntry[] = [];
  for (const { id, chapters } of subjects) {
    for (let i = 1; i <= chapters; i++) {
      const chapterPath = `/subjects/${id}/chapters/chapter-${i}`;
      chapterRoutes.push(
        { path: chapterPath, priority: '0.7', changefreq: 'weekly' },
        { path: `${chapterPath}?tab=notes`, priority: '0.7', changefreq: 'weekly' },
        { path: `${chapterPath}?tab=synopsis`, priority: '0.7', changefreq: 'weekly' },
        { path: `${chapterPath}?tab=quiz`, priority: '0.7', changefreq: 'weekly' },
        { path: `${chapterPath}?tab=practice`, priority: '0.6', changefreq: 'weekly' },
      );
    }
  }

  const allUrls: UrlEntry[] = [...staticRoutes, ...subjectRoutes, ...chapterRoutes];

  const urls = allUrls
    .map(({ path, priority, changefreq }) =>
      createUrlEntry(new URL(path, baseUrl).toString(), priority, changefreq, today),
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
