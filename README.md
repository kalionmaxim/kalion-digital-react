# Kalion.Digital - React Website

Production-ready React website for Kalion.Digital with comprehensive SEO optimization, WayForPay payment integration, and modern responsive design.

## Prerequisites

- Node.js 18+
- npm or yarn

## Quick Start

```bash
# Install dependencies (uses --legacy-peer-deps for React 19)
npm install

# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npx serve -s build
```

## Project Structure

```
kalion-digital-react/
├── public/
│   ├── index.html         # SEO meta tags, Open Graph, GTM
│   ├── sitemap.xml        # XML sitemap for search engines
│   └── robots.txt         # Search engine crawling rules
├── src/
│   ├── components/
│   │   └── SEO.js         # Reusable SEO component with Helmet
│   ├── pages/
│   │   ├── Terms.js       # Terms & Conditions page
│   │   └── Refund.js      # Refund Policy page
│   ├── App.js             # Main component with all sections
│   ├── App.css            # Tailwind utilities
│   └── index.js           # React entry point with HelmetProvider
├── .do/
│   └── app.yaml           # DigitalOcean App Platform config
├── .npmrc                 # npm configuration for legacy peer deps
└── package.json
```

## Features

### Core Features
- ✅ Modern monochrome design (black #000, orange #FF9933, purple #6A00FF)
- ✅ Fully responsive mobile-first design
- ✅ Tailwind CSS for styling
- ✅ React Router for client-side routing
- ✅ WayForPay payment integration
- ✅ Google Tag Manager integration
- ✅ Calendly booking integration

### SEO Optimization
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph protocol for social sharing
- ✅ Twitter Card support
- ✅ Semantic HTML5 structure
- ✅ Image lazy loading and descriptive alt attributes
- ✅ XML sitemap with all routes
- ✅ robots.txt configuration
- ✅ react-helmet-async for dynamic meta management
- ✅ Ukrainian language optimization (lang="uk")

### Content
- ✅ Service cards with pricing (AI automation, SaaS, chatbots, etc.)
- ✅ Team section with founder profiles
- ✅ Partners section with logos
- ✅ Legal documentation (Terms & Conditions, Refund Policy)
- ✅ Contact information and booking

## WayForPay Integration

The site includes WayForPay payment system integration. To activate:

1. Register at [WayForPay](https://wayforpay.com)
2. Get your merchant credentials
3. Update `App.js` line 101-104:
   ```javascript
   merchantAccount: "your_merchant_account",
   merchantDomainName: "kalion.digital",
   merchantSignature: "your_merchant_signature"
   ```

## Deployment Options

### DigitalOcean App Platform (Recommended)

1. Push code to GitHub
2. Create new App in DigitalOcean
3. Select your repository
4. App Platform will auto-detect settings from `.do/app.yaml`
5. Deploy

### DigitalOcean Droplet

```bash
# Build production
npm run build

# Upload build/ folder to droplet
# Serve with nginx or serve
```

### Other Options

- Vercel: `npm install -g vercel && vercel`
- Netlify: Drag `build/` folder to Netlify
- GitHub Pages: Configure in package.json

## Legal Requirements

All legal documentation is included per WayForPay requirements:

- **ФОП Каліон Максим Олександрович**
- **ІПН**: 3438113235
- **Address**: 03057, м. Київ, вул. Брайчевського, буд. 4, кв. 507
- **Phone**: +380 96 999 99 40
- **Email**: hello@kalion.digital

## Customization

### Update Founder Photos

Replace placeholder URLs in `App.js` (lines 55, 62):
```javascript
photo: "https://your-image-url.jpg"
```

### Add Services

Edit the `services` array in `App.js` (line 12).

### Update Pricing

Change `price` values in service objects (in UAH).

## Tech Stack

- **React 19.2.0** - Latest React version
- **React Router 7.9.3** - Client-side routing
- **react-helmet-async 2.0.5** - Dynamic meta tag management
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **lucide-react 0.544.0** - Icon library
- **react-scripts 5.0.1** - Create React App build tools
- **serve** - Production static file server
- No TypeScript
- No database required
- No backend needed
- Static site deployment

## Deployment

### Production Build

The site is optimized for production with:
- **Bundle size**: 87.19 KB JS + 3.48 KB CSS (gzipped)
- **Lazy loading**: All images load on demand
- **Code splitting**: Optimized chunks for faster loading

### DigitalOcean App Platform (Configured)

**Current Setup:**
- **Region**: Frankfurt (fra)
- **Instance**: basic-xxs (512 MB RAM, 1 vCPU, 50 GB bandwidth)
- **Auto-deploy**: Enabled on push to master branch
- **Repository**: kalionmaxim/kalion-digital-react

**Deployment Steps:**
```bash
# 1. Commit your changes
git add .
git commit -m "Your changes"

# 2. Push to trigger auto-deploy
git push origin master

# 3. DigitalOcean automatically:
#    - Installs dependencies (npm install with --legacy-peer-deps)
#    - Builds production bundle (npm run build)
#    - Serves with npx serve on port 3000
```

**Resource Requirements:**
- ✅ 512 MB RAM is sufficient (serve uses ~30-50 MB)
- ✅ 50 GB bandwidth = ~555,000 page loads/month
- ✅ Perfect for marketing/portfolio sites with low-medium traffic

### Alternative Deployment Options

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
- Drag `build/` folder to Netlify dashboard
- Or connect GitHub repo for auto-deploy

**Static Hosting:**
```bash
npm run build
# Upload build/ folder to any static host
```

## Production Checklist

### Pre-Launch
- [x] SEO optimization (meta tags, sitemap, robots.txt)
- [x] Production build configuration
- [x] DigitalOcean deployment setup
- [ ] Replace placeholder founder photos
- [ ] Update WayForPay merchant credentials
- [ ] Test all payment flows
- [ ] Configure custom domain DNS

### Post-Launch
- [ ] Monitor DigitalOcean deployment logs
- [ ] Test all pages on live site
- [ ] Verify SEO meta tags with view-source
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsive design on real devices
- [ ] Test all contact links (email, phone, LinkedIn)
- [ ] Monitor analytics (GTM tracking)

## Known Issues & Notes

### React 19 Peer Dependencies
The project uses React 19 with `.npmrc` configured for `legacy-peer-deps=true` to handle react-helmet-async compatibility. This is a known issue and doesn't affect functionality.

### Webpack Dev Server Warnings
Development mode shows deprecation warnings about webpack middleware options. These are harmless and don't appear in production builds.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: Optimized for 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: 87.19 KB (gzipped)

## License

© 2025 ФОП Каліон Максим Олександрович. All rights reserved.
