# Lakhotia Eye Centre - Production Checklist

## Before Going Live

### Content Updates Required
- [ ] **Contact Page**: Update phone number in `/app/(marketing)/contact/page.tsx`
- [ ] **Footer**: Update address details in `/components/layout/Footer.tsx`
- [ ] **Email Settings**: Configure SMTP credentials in `.env` file
- [ ] **Images**: Replace all Unsplash URLs with actual clinic photos
  - Hero section images
  - Service card images
  - Achievement award images
  - Gallery before/after photos
  - Blog post banners

### SEO & Marketing
- [ ] **Google Analytics**: Add tracking code
- [ ] **Google Search Console**: Submit sitemap
- [ ] **Meta Images**: Add social sharing images (1200x630px)
- [ ] **Favicon**: Custom favicon with clinic logo
- [ ] **Local SEO**: Set up Google My Business

### Security & Admin
- [ ] Change admin password from default `Admin@123`
- [ ] Update `NEXTAUTH_SECRET` to a secure random string
- [ ] Review user roles and permissions
- [ ] Enable HTTPS redirect in production
- [ ] Test contact form email delivery

### Testing
- [ ] Test all pages on mobile devices
- [ ] Verify all links work correctly
- [ ] Test contact form submission
- [ ] Test admin login and blog creation
- [ ] Check page load performance
- [ ] Verify accessibility (screen readers)
- [ ] Test keyboard navigation

### Legal & Compliance
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Include patient consent forms for testimonials
- [ ] Verify HIPAA compliance for patient data
- [ ] Add cookie consent banner if required

### Performance
- [ ] Optimize all images (compress, convert to WebP)
- [ ] Enable caching headers
- [ ] Test Core Web Vitals
- [ ] Minify CSS and JavaScript
- [ ] Enable CDN for static assets

## Post-Launch Tasks

### Week 1
- [ ] Monitor error logs daily
- [ ] Check contact form submissions
- [ ] Review analytics data
- [ ] Test all features with real users
- [ ] Fix any reported bugs

### Month 1
- [ ] Review SEO performance
- [ ] Analyze user behavior
- [ ] Collect user feedback
- [ ] Plan content updates
- [ ] Schedule regular backups

### Ongoing
- [ ] Update blog regularly (1-2 posts/month)
- [ ] Respond to contact form inquiries within 24 hours
- [ ] Monitor uptime and performance
- [ ] Keep dependencies updated
- [ ] Review and update content quarterly

---

**Status**: ✅ Website Ready for Final Review  
**Next Step**: Complete content updates and deploy to production
