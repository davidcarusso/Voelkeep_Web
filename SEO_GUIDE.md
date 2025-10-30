# SEO Configuration Guide - Voelkeep

This document explains the SEO configuration for Voelkeep's website, including `robots.txt` and `sitemap.xml`.

## 📁 Files Created

### 1. `public/robots.txt`
Location: `/public/robots.txt`

This file tells search engine crawlers which pages they can access on your site.

**Key features:**
- ✅ Allows all search engines to crawl the entire site
- 🗺️ Points to the sitemap location
- 🚫 Blocks unnecessary resources (API endpoints, source maps)
- ⏱️ Implements crawl delay to prevent server overload

### 2. `public/sitemap.xml`
Location: `/public/sitemap.xml`

An XML file that lists all the URLs on your website, helping search engines discover and index your content.

**Key features:**
- 📍 Contains all 14 pages of your website
- 🎯 Includes priority ratings (1.0 for homepage, 0.7-0.9 for other pages)
- 📅 Update frequency hints for search engines
- 🔄 Automatically dated with last modification

### 3. `scripts/generate-sitemap.js`
Location: `/scripts/generate-sitemap.js`

A Node.js script that automatically generates the sitemap based on your routes.

## 🚀 How to Use

### Manual Generation
To manually regenerate the sitemap (e.g., after adding new pages):

```bash
npm run generate:sitemap
```

### Automatic Generation
The sitemap is automatically regenerated before each build:

```bash
npm run build
```

This runs the `prebuild` script which generates a fresh sitemap with the current date.

## 🔧 How It Works with Vite

1. **Files in `public/` folder** are copied to the root of `dist/` during build
2. When deployed, both files will be accessible at:
   - `https://voelkeep.com/robots.txt`
   - `https://voelkeep.com/sitemap.xml`

## 📝 Adding New Pages

When you add a new page to your application:

1. Update `scripts/generate-sitemap.js` with the new route:

```javascript
{
  path: '/your-new-page',
  changefreq: 'monthly',
  priority: '0.8',
}
```

2. Run the generation script:

```bash
npm run generate:sitemap
```

## 🌐 Post-Deployment Steps

After deploying your website:

### 1. Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://voelkeep.com`
3. Verify ownership (recommended: HTML tag method)
4. Submit your sitemap: `https://voelkeep.com/sitemap.xml`

### 2. Test Your Files
- Robots.txt: https://voelkeep.com/robots.txt
- Sitemap: https://voelkeep.com/sitemap.xml
- Google Robots Testing Tool: [Use this](https://www.google.com/webmasters/tools/robots-testing-tool)

### 3. Verify Sitemap Format
Use the [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## 📊 Understanding Priority Values

| Priority | Usage |
|----------|-------|
| 1.0 | Homepage - most important |
| 0.9 | Very important pages (e.g., Asesoramiento) |
| 0.8 | Treatment pages - core content |
| 0.7 | Supporting pages (FAQ, Gift Card) |
| 0.5 | Less important pages |

## 🔄 Change Frequency Recommendations

- **weekly**: Homepage and frequently updated content
- **monthly**: Treatment pages and services (standard for most pages)
- **yearly**: Static pages that rarely change

## ⚠️ Important Notes

1. **Update Domain**: Before deploying, replace `https://voelkeep.com` with your actual domain in:
   - `public/robots.txt` (Sitemap URL)
   - `scripts/generate-sitemap.js` (SITE_URL constant)

2. **Don't Block Important Resources**: Make sure your `robots.txt` doesn't block CSS/JS files needed for Google's mobile-first indexing

3. **Keep Sitemap Under 50MB**: Your current sitemap is small, but keep this in mind if adding many pages

4. **Update Regularly**: Run `npm run generate:sitemap` whenever you add/remove pages

## 🔍 SEO Best Practices Included

✅ **Proper XML structure** - Valid sitemap format
✅ **Last modification dates** - Helps search engines prioritize fresh content
✅ **Priority hints** - Guides crawlers to important pages first
✅ **Change frequency** - Sets expectations for re-crawling
✅ **Clean URLs** - All routes properly formatted
✅ **Comprehensive coverage** - All public pages included

## 📱 Testing Locally

To test the files locally:

1. Build the project:
```bash
npm run build
```

2. Preview the built site:
```bash
npm run preview
```

3. Access the files at:
- http://localhost:4173/robots.txt
- http://localhost:4173/sitemap.xml

## 🆘 Troubleshooting

**Q: Sitemap not showing up after deployment?**
- Check that files are in `public/` folder
- Verify build output includes these files in `dist/`
- Check hosting configuration allows `.txt` and `.xml` files

**Q: Google not crawling my site?**
- Submit sitemap in Google Search Console
- Check robots.txt isn't blocking Googlebot
- Verify site is accessible (not behind authentication)

**Q: Need to add dynamic routes?**
- Modify `scripts/generate-sitemap.js` to read from a config file
- Or manually add routes to the `routes` array in the script

## 📚 Resources

- [Google Sitemap Guide](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Robots.txt Specifications](https://developers.google.com/search/docs/advanced/robots/intro)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
