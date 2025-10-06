# Kalion.Digital - React Website

Simple React site with Monochrome design (black background, orange-purple gradient) for WayForPay payment integration.

## Prerequisites

- Node.js 18+
- npm or yarn

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Project Structure

```
kalion-digital-react/
├── public/
│   └── index.html         (SEO meta tags, WayForPay script)
├── src/
│   ├── App.js             (main component with all sections)
│   ├── App.css            (empty - styles in App.js)
│   └── index.js           (React entry point)
├── .do/
│   └── app.yaml           (DigitalOcean App Platform config)
└── package.json
```

## Features

- ✅ Monochrome design (black #000, orange #FF9933, purple #6A00FF)
- ✅ WayForPay payment integration
- ✅ Legal documentation (Terms & Conditions, Refund Policy)
- ✅ Responsive mobile design
- ✅ Service cards with pricing
- ✅ Team section with founders
- ✅ Partners section
- ✅ Contact information
- ✅ Modal dialogs for legal docs and payments

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

- React 18
- lucide-react (icons)
- No TypeScript
- No database required
- No backend needed
- Static site deployment

## Production Checklist

- [ ] Replace placeholder founder photos
- [ ] Update WayForPay merchant credentials
- [ ] Test all payment flows
- [ ] Verify legal documentation accuracy
- [ ] Test mobile responsive design
- [ ] Test all contact links (email, phone, LinkedIn)
- [ ] Add real partner logos
- [ ] Configure domain DNS

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 ФОП Каліон Максим Олександрович. All rights reserved.
