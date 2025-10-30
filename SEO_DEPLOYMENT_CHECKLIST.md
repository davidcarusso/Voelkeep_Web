# SEO Deployment Checklist ✅

Use this checklist when deploying Voelkeep to ensure proper SEO configuration.

## Pre-Deployment

- [ ] Update domain in `public/robots.txt` (replace `https://voelkeep.com` with actual domain)
- [ ] Update domain in `scripts/generate-sitemap.js` (SITE_URL constant)
- [ ] Run `npm run generate:sitemap` to ensure sitemap is up-to-date
- [ ] Verify `public/robots.txt` exists
- [ ] Verify `public/sitemap.xml` exists
- [ ] Run `npm run build` (this will auto-generate sitemap)
- [ ] Check that `dist/robots.txt` exists after build
- [ ] Check that `dist/sitemap.xml` exists after build

## Post-Deployment

### Immediate (Day 1)
- [ ] Verify robots.txt is accessible: `https://yourdomain.com/robots.txt`
- [ ] Verify sitemap is accessible: `https://yourdomain.com/sitemap.xml`
- [ ] Test robots.txt with [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)
- [ ] Validate sitemap with [XML Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

### Google Search Console (Week 1)
- [ ] Create/Sign in to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property with your domain
- [ ] Verify ownership (recommended: HTML meta tag method)
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Set up email alerts for crawl errors

### Bing Webmaster Tools (Week 1)
- [ ] Create/Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add your site
- [ ] Verify ownership
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Additional SEO Setup
- [ ] Add meta descriptions to all pages (in each page component)
- [ ] Add Open Graph tags for social sharing
- [ ] Add structured data (JSON-LD) for business information
- [ ] Set up Google Analytics
- [ ] Create Google Business Profile
- [ ] Submit site to relevant directories

## Ongoing Maintenance

### When Adding New Pages
- [ ] Add route to `scripts/generate-sitemap.js`
- [ ] Run `npm run generate:sitemap`
- [ ] Commit and deploy changes
- [ ] Request indexing in Google Search Console

### Monthly
- [ ] Check Search Console for crawl errors
- [ ] Review search performance
- [ ] Update sitemap if page priorities changed
- [ ] Check for broken links

### Quarterly
- [ ] Review and update meta descriptions
- [ ] Check page load speeds
- [ ] Update lastmod dates in sitemap if content significantly changed
- [ ] Review and respond to any Google Business Profile reviews

## Quick Domain Update Script

When you know your production domain, update these files:

**1. `public/robots.txt`:**
```
Find: https://voelkeep.com
Replace: https://your-actual-domain.com
```

**2. `scripts/generate-sitemap.js`:**
```javascript
const SITE_URL = 'https://your-actual-domain.com';
```

Then run:
```bash
npm run generate:sitemap
npm run build
```

## Verification Commands

Test locally (after build):
```bash
npm run build
npm run preview
# Visit: http://localhost:4173/robots.txt
# Visit: http://localhost:4173/sitemap.xml
```

## Common Issues & Solutions

### Issue: Sitemap returns 404
**Solution:** Ensure files are in `public/` folder, rebuild, and redeploy

### Issue: Google says "Couldn't fetch sitemap"
**Solution:** 
1. Check sitemap is accessible via browser
2. Ensure proper XML formatting
3. Check hosting allows .xml files
4. Wait 24-48 hours and retry

### Issue: Pages not being indexed
**Solution:**
1. Check robots.txt isn't blocking
2. Submit individual URLs in Search Console
3. Ensure pages have proper meta tags
4. Check for canonical tag issues

## Notes
- Indexing typically takes 1-4 weeks for new sites
- Priority values are hints, not guarantees
- Google may ignore changefreq and crawl at its own pace
- Keep sitemap updated when structure changes
