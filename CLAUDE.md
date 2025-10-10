# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
```bash
# Install dependencies (uses --legacy-peer-deps for React 19)
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run a single test file
npm test -- src/App.test.js
```

### Production Build
```bash
# Build for production
npm run build

# Test production build locally
npx serve -s build

# Test production build on specific port
npx serve -s build -l 3000
```

### Deployment
```bash
# Auto-deploy to DigitalOcean (pushes trigger deployment)
git push origin master

# The deployment runs:
# 1. npm install (with --legacy-peer-deps from .npmrc)
# 2. npm run build
# 3. npx serve -s build -l 3000
```

## Architecture Overview

### Technology Stack
- **React 19.2.0** - Uses latest React features; requires `legacy-peer-deps=true` in `.npmrc` for react-helmet-async compatibility
- **React Router 7.9.3** - Client-side routing (no server-side routes)
- **Tailwind CSS 3.4.1** - Utility-first styling with dark mode support (`darkMode: 'class'`)
- **react-helmet-async 2.0.5** - Dynamic meta tag management for SEO
- **lucide-react** - Icon library
- **No TypeScript, No backend, No database** - Pure static React SPA

### Application Structure

**Entry Point Flow:**
1. `src/index.js` - Wraps app with providers in correct order:
   - `ThemeProvider` (outermost, provides theme state)
   - `HelmetProvider` (for SEO meta tags)
   - `BrowserRouter` (for routing)

**Routes:**
- `/` - Main landing page (App.js)
- `/terms` - Terms & Conditions (required for WayForPay)
- `/refund` - Refund Policy (required for WayForPay)

**Component Architecture:**
- `App.js` - Main landing page with all sections (services, team, partners, contact)
- `components/SEO.js` - Reusable SEO component with react-helmet-async
- `components/ThemeSwitcher.js` - Light/dark theme toggle
- `contexts/ThemeContext.js` - Theme state management with localStorage persistence
- `pages/Terms.js` & `pages/Refund.js` - Legal pages

### Theme System

The theme system uses React Context + localStorage + Tailwind dark mode:

1. **ThemeContext** (`src/contexts/ThemeContext.js:14-16`):
   - Initializes from localStorage, defaults to 'dark'
   - Toggles between 'light' and 'dark'
   - Adds/removes 'dark' class on `<html>` element

2. **Tailwind Configuration** (`tailwind.config.js:6`):
   - Uses `darkMode: 'class'` strategy
   - Custom zinc color extensions for dark theme

3. **Usage Pattern:**
   ```javascript
   import { useTheme } from './contexts/ThemeContext';
   const { theme, toggleTheme } = useTheme();
   ```

### SEO Architecture

**Dual-layer SEO approach:**

1. **Static SEO** (`public/index.html`):
   - Base meta tags, Open Graph, Twitter Cards
   - Google Tag Manager (GTM) integration
   - Ukrainian language (`lang="uk"`)

2. **Dynamic SEO** (`components/SEO.js`):
   - Page-specific meta tags via react-helmet-async
   - Canonical URLs
   - Custom title/description/image per route

3. **Supporting files:**
   - `public/sitemap.xml` - All routes for search engines
   - `public/robots.txt` - Crawling rules

### WayForPay Payment Integration

Payment system is configured in `App.js` but requires merchant credentials:

**Location:** `src/App.js:101-104` (WayForPay widget initialization)

**Required updates before production:**
```javascript
merchantAccount: "your_merchant_account",        // Replace with real merchant ID
merchantDomainName: "kalion.digital",           // Already correct
merchantSignature: "your_merchant_signature"    // Generate from WayForPay dashboard
```

**Legal requirement:** Terms & Conditions and Refund Policy pages must be published for WayForPay compliance.

## Important Configuration Files

### .npmrc
```
legacy-peer-deps=true
```
Required for React 19 compatibility with react-helmet-async. Do not remove.

### .do/app.yaml
DigitalOcean App Platform deployment configuration:
- Region: Frankfurt (fra)
- Instance: basic-xxs (512 MB RAM, 1 vCPU)
- Auto-deploy on push to master branch
- Build: `npm run build`
- Serve: `npx serve -s build -l 3000`

### tailwind.config.js
- Content paths: `./src/**/*.{js,jsx,ts,tsx}`
- Dark mode: `class` (toggled via ThemeContext)
- Custom zinc color palette for dark theme

## Key Business Logic

### Service Cards
Defined in `App.js:10-47` as array of service objects. Each service includes:
- title, description, icon (emoji)
- details (extended description)
- No pricing structure currently (previously had price field per README)

### Team Section
Founders data in `App.js:76-93`:
- Photo URLs from LinkedIn CDN (time-limited URLs - may need updating)
- LinkedIn profile links
- Expertise tags

### Partners Section
Partner logos and info in `App.js:49-74`:
- Mix of local (`/images/`) and external logo URLs
- Includes website links for external navigation

## Development Notes

### React 19 Warnings
Development mode shows webpack middleware deprecation warnings. These are harmless and don't affect functionality or production builds.

### Image Assets
- Partner logos: `/public/images/` directory
- External images: Loaded from partner websites and LinkedIn CDN
- All images use lazy loading (`loading="lazy"`)

### Styling Approach
- Tailwind utility classes throughout
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Color scheme: Orange (#FF9933), Purple (#6A00FF), Black (#000) for light theme
- Dark theme: Zinc shades (800, 900, 950)

### Contact Integration
- **Calendly:** Booking button links to external scheduling
- **Email:** hello@kalion.digital
- **Phone:** +380 96 999 99 40
- **LinkedIn:** Individual founder profiles linked in team section

## Testing

### Test Configuration
- Framework: React Testing Library + Jest (via react-scripts)
- Setup file: `src/setupTests.js` (includes @testing-library/jest-dom)
- Test file: `src/App.test.js` (basic render test)

### Running Tests
```bash
# Run all tests once
npm test -- --watchAll=false

# Watch mode (interactive)
npm test

# Run specific test file
npm test -- src/App.test.js

# Coverage report
npm test -- --coverage --watchAll=false
```

## Deployment Pipeline

**DigitalOcean App Platform (Configured):**
1. Push to master branch → triggers auto-deploy
2. Runs `npm install` (uses .npmrc settings)
3. Runs `npm run build` → creates optimized bundle
4. Serves with `npx serve -s build -l 3000`
5. Accessible via assigned DigitalOcean URL

**Production Checklist (from README):**
- Replace placeholder founder photos with permanent URLs
- Update WayForPay merchant credentials
- Configure custom domain DNS
- Submit sitemap to Google Search Console

## Legal Information

**Business Entity:** ФОП Каліон Максим Олександрович
- **ІПН:** 3438113235
- **Address:** 03057, м. Київ, вул. Брайчевського, буд. 4, кв. 507
- **Required pages:** /terms and /refund (WayForPay compliance)
