// sitemap-generator.js
import { writeFileSync } from 'fs';

const baseUrl = 'https://ddjayportal.com'; // अपना domain यहाँ डालें

const pages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/what-is-ddjay', priority: 0.9, changefreq: 'weekly' },
  { url: '/live-projects', priority: 0.8, changefreq: 'daily' },
  { url: '/upcoming-projects', priority: 0.8, changefreq: 'daily' },
  { url: '/closed-projects', priority: 0.7, changefreq: 'weekly' },
  { url: '/about', priority: 0.6, changefreq: 'monthly' },
  { url: '/contact', priority: 0.6, changefreq: 'monthly' },
];

// Project pages (अगर आपके projects.ts में projects हैं)
const projects = [
  { id: 'green-valley-phase-2' },
  // यहाँ अपने अन्य projects add करें
];

const projectPages = projects.map(project => ({
  url: `/project/${project.id}`,
  priority: 0.7,
  changefreq: 'weekly'
}));

const allPages = [...pages, ...projectPages];
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`).join('')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated at public/sitemap.xml');
console.log(`📊 Total pages: ${allPages.length}`);