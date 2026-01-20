# Deployment Guide - Lakhotia Eye Centre Website

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure all production environment variables are set:

```env
# Database (PostgreSQL)
DATABASE_URL="your-production-database-url"

# NextAuth
NEXTAUTH_URL="https://www.lakhotiaeyecentre.com"
NEXTAUTH_SECRET="generate-a-secure-random-string"

# Email (SMTP for contact form)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@lakhotiaeyecentre.com"

# Optional: Google Sheets (contact form leads)
# Deploy the Apps Script in scripts/google-sheets-webhook.gs as a Web App,
# then paste its deployment URL here.
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/XXXX/exec"

# Optional: must match CONFIG.SECRET in the Apps Script
GOOGLE_SHEETS_WEBHOOK_SECRET="your-shared-secret"

# Admin Credentials (for seeding)
SEED_ADMIN_EMAIL="admin@lakhotiaeyecentre.com"
SEED_ADMIN_PASSWORD="secure-password-here"
SEED_ADMIN_NAME="Dr. Sharad Lakhotia"
```

### 2. Update Content
- [ ] Replace Unsplash placeholder images with actual clinic photos
- [ ] Update contact information (phone number, email, address)
- [ ] Configure email SMTP settings
- [ ] Review all text content for accuracy
- [ ] Add real patient testimonials (with consent)
- [ ] Upload actual before/after photos (with patient consent)

### 3. SEO & Analytics
- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Add Google Analytics tracking code
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business profile
- [ ] Verify Open Graph images work correctly

### 4. Security
- [ ] Change default admin password
- [ ] Review and update CORS settings if needed
- [ ] Enable HTTPS redirect
- [ ] Set secure cookie settings in production

## Vercel Deployment

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Lakhotia Eye Centre website"
git branch -M main
git remote add origin your-repository-url
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Set Environment Variables
In Vercel dashboard, add all environment variables from the list above.

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Visit your deployment URL

### Step 5: Post-Deployment
```bash
# After deployment, seed the database
# Run this once in Vercel's terminal or locally with production DATABASE_URL
npm run prisma:generate
npm run prisma:db-push
npm run prisma:seed
```

## Custom Domain Setup

### In Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain: `www.lakhotiaeyecentre.com`
3. Add root domain: `lakhotiaeyecentre.com`
4. Configure DNS records as instructed by Vercel

### DNS Configuration:
Add these records in your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Production Optimization

### 1. Image Optimization
Replace images with optimized versions:
- Use Next.js Image component
- Serve images from CDN (Cloudinary/Vercel)
- Use WebP format where possible

### 2. Performance
- Enable Vercel's Edge Network
- Use ISR (Incremental Static Regeneration) for blog pages
- Implement caching headers

### 3. Monitoring
- Set up Vercel Analytics
- Configure error tracking (Sentry)
- Monitor Core Web Vitals

## Security Headers
Add to `next.config.mjs`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

## Backup Strategy

### Database Backups
- Enable automated backups in your PostgreSQL provider
- Export data weekly: `npx prisma db pull`
- Store backups securely off-site

### Content Backups
- Blog posts are in database (backed up with DB)
- Static content in code (version controlled with Git)

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update
npm audit fix

# Update Prisma
npm install prisma@latest @prisma/client@latest

# Regenerate Prisma Client
npx prisma generate
```

### Monitoring
- Check Vercel deployment logs weekly
- Monitor email delivery success rate
- Review contact form submissions
- Check Google Search Console for SEO issues

## Google Sheets (Single Sheet for All Forms)

If you want all website form submissions to go into a single Google Sheet:

1. Open [scripts/google-sheets-webhook.gs](scripts/google-sheets-webhook.gs) and set:
  - `CONFIG.SHEET_ID` (required)
  - `CONFIG.SHEET_NAME` (optional)
  - `CONFIG.SECRET` (optional)
2. Deploy as a Web App (Execute as: Me).
3. Set `GOOGLE_SHEETS_WEBHOOK_URL` (and optionally `GOOGLE_SHEETS_WEBHOOK_SECRET`) in your production env.

The contact form will append rows with columns:
timestamp, form, name, email, phone, service, message, pageUrl, userAgent.

## Support Contacts

- **Hosting**: Vercel Support (vercel.com/support)
- **Database**: Your PostgreSQL provider support
- **Domain**: Your domain registrar support

## Emergency Rollback

If deployment fails:
```bash
# In Vercel Dashboard
1. Go to Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
```

---

**Last Updated**: December 2025  
**Deployed By**: Development Team  
**Production URL**: https://www.lakhotiaeyecentre.com

