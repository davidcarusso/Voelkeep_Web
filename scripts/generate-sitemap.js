/**
 * Sitemap Generator Script for Voelkeep
 * 
 * This script automatically generates a sitemap.xml file based on the routes
 * defined in your React application.
 * 
 * Usage: node scripts/generate-sitemap.js
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SITE_URL = 'https://voelkeep.com';
const OUTPUT_PATH = join(__dirname, '../public/sitemap.xml');

// Define your routes with metadata
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
  },
  // Tratamientos Faciales
  {
    path: '/gloss-peel',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/limpieza-profunda',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/peeling-facial',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/dermaplaning',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/microneedling',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/radiofrecuencia',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/hidralips',
    changefreq: 'monthly',
    priority: '0.8',
  },
  // Tratamientos Corporales
  {
    path: '/reductores',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/reafirmantes',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/anticeluliticos',
    changefreq: 'monthly',
    priority: '0.8',
  },
  // Asesoramiento
  {
    path: '/asesoramiento',
    changefreq: 'monthly',
    priority: '0.9',
  },
  // Gift Card
  {
    path: '/gift-card',
    changefreq: 'monthly',
    priority: '0.7',
  },
  // FAQ
  {
    path: '/preguntas-frecuentes',
    changefreq: 'monthly',
    priority: '0.7',
  },
];

// Generate current date in ISO format
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
function generateSitemap() {
  const urls = routes.map(route => {
    return `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls}

</urlset>`;

  return sitemap;
}

// Write sitemap to file
try {
  const sitemapContent = generateSitemap();
  writeFileSync(OUTPUT_PATH, sitemapContent, 'utf-8');
  console.log('✅ Sitemap generated successfully at:', OUTPUT_PATH);
  console.log(`📊 Total URLs: ${routes.length}`);
  console.log(`📅 Last modified: ${today}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
