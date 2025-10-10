# Kalion.digital Style Guide
## Based on Serverless Data Platform Design

---

## 🎨 Color Palette

### Primary Colors
- **Background**: `#0a0e0f` (Deep black with slight green tint)
- **Surface/Cards**: `#151a1c` (Dark charcoal)
- **Primary Accent**: `#00d9a3` (Bright teal/mint green)
- **Secondary Accent**: `#00ffc4` (Lighter teal)

### Text Colors
- **Heading Text**: `#00d9a3` (Teal green)
- **Body Text**: `#ffffff` (White)
- **Subtext/Muted**: `#8b9499` (Cool gray)
- **Code Text**: `#a5f3e8` (Light cyan)

### Accent Colors
- **Red**: `#ff4444` (For Redis/alerts)
- **Orange**: `#ff9933` (For MongoDB/warnings)
- **Purple**: `#9966ff` (For GitHub/features)
- **Yellow**: `#ffcc00` (For Workflow/highlights)
- **Blue**: `#0099ff` (For Search/links)

---

## 📝 Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Plus Jakarta Sans', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

### Font Sizes
- **Hero Title**: `clamp(48px, 8vw, 96px)` - Bold, 700-800 weight
- **Section Title**: `clamp(36px, 5vw, 64px)` - Bold, 700 weight
- **Subsection Title**: `clamp(24px, 3vw, 36px)` - Semibold, 600 weight
- **Body Large**: `18px` - Regular, 400 weight
- **Body**: `16px` - Regular, 400 weight
- **Caption/Small**: `14px` - Regular, 400 weight
- **Code**: `14px` - Monospace, 400 weight

### Line Heights
- **Headings**: `1.1 - 1.2`
- **Body Text**: `1.6 - 1.8`
- **Code**: `1.5`

---

## 🏗️ Layout & Spacing

### Container
- **Max Width**: `1400px`
- **Padding**: `0 80px` (desktop), `0 24px` (mobile)

### Spacing Scale
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 48px;
--space-xl: 80px;
--space-2xl: 120px;
--space-3xl: 160px;
```

### Section Spacing
- **Between Sections**: `120px - 160px`
- **Within Sections**: `48px - 80px`

---

## 🎯 Components

### Hero Section
```css
.hero {
  background: radial-gradient(ellipse at center, #0d1514 0%, #0a0e0f 100%);
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 24px;
}

.hero-title {
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  color: #00d9a3;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 18px;
  color: #8b9499;
  max-width: 600px;
  margin-bottom: 32px;
}
```

### Cards
```css
.card {
  background: #151a1c;
  border: 1px solid #1f2629;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #00d9a3;
  box-shadow: 0 8px 32px rgba(0, 217, 163, 0.1);
  transform: translateY(-4px);
}

.card-highlight {
  background: linear-gradient(135deg, #151a1c 0%, #1a2123 100%);
  border: 1px solid #00d9a3;
}
```

### Buttons
```css
.btn-primary {
  background: #00d9a3;
  color: #0a0e0f;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #00ffc4;
  box-shadow: 0 4px 20px rgba(0, 217, 163, 0.4);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #00d9a3;
  border: 2px solid #00d9a3;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #00d9a3;
  color: #0a0e0f;
}
```

### Code Blocks
```css
.code-block {
  background: #0d1214;
  border: 1px solid #1f2629;
  border-radius: 12px;
  padding: 24px;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.5;
}

.code-line {
  color: #a5f3e8;
}

.code-comment {
  color: #6b7780;
  font-style: italic;
}

.code-keyword {
  color: #ff6b9d;
}

.code-string {
  color: #00d9a3;
}
```

### Tags/Pills
```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: #1f2629;
  color: #ffffff;
}

.tag-redis {
  background: rgba(255, 68, 68, 0.15);
  color: #ff4444;
  border: 1px solid rgba(255, 68, 68, 0.3);
}

.tag-mongodb {
  background: rgba(255, 153, 51, 0.15);
  color: #ff9933;
  border: 1px solid rgba(255, 153, 51, 0.3);
}

.tag-github {
  background: rgba(153, 102, 255, 0.15);
  color: #9966ff;
  border: 1px solid rgba(153, 102, 255, 0.3);
}
```

---

## 🌟 Visual Effects

### Gradients
```css
/* Background Gradient */
.bg-gradient-radial {
  background: radial-gradient(ellipse at top, #0d1514 0%, #0a0e0f 100%);
}

/* Text Gradient */
.text-gradient {
  background: linear-gradient(135deg, #00d9a3 0%, #00ffc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glow Effect */
.glow {
  box-shadow: 0 0 40px rgba(0, 217, 163, 0.3);
}

/* Mesh Background */
.mesh-bg {
  background-image: 
    linear-gradient(rgba(0, 217, 163, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 163, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

### Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 217, 163, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 217, 163, 0.4);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

---

## 📊 Data Visualization

### Stats Display
```css
.stat-card {
  text-align: center;
  padding: 24px;
}

.stat-number {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  color: #00d9a3;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #8b9499;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Progress Indicators
```css
.progress-bar {
  height: 8px;
  background: #1f2629;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00d9a3 0%, #00ffc4 100%);
  transition: width 0.3s ease;
}
```

---

## 🎭 Icons & Graphics

### Icon Style
- **Size**: `24px - 48px` default
- **Stroke Width**: `2px`
- **Color**: Match section accent color
- **Style**: Outlined, modern, minimal

### Logo Treatment
- Primary color: `#00d9a3`
- Allow breathing room: `32px` minimum padding
- Use on dark backgrounds only

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

### Mobile Adjustments
- Reduce font sizes by 20-30%
- Stack cards vertically
- Reduce spacing by 40-50%
- Full-width buttons
- Hide decorative elements

---

## ✨ Interaction States

### Hover States
```css
/* Subtle lift and glow */
element:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 217, 163, 0.15);
}
```

### Active States
```css
element:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 217, 163, 0.2);
}
```

### Focus States
```css
element:focus {
  outline: 2px solid #00d9a3;
  outline-offset: 2px;
}
```

---

## 📐 Grid System

```css
.grid {
  display: grid;
  gap: 24px;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## 🎪 Special Sections

### Testimonials
- Dark card background: `#151a1c`
- Subtle border: `1px solid #1f2629`
- Quote icon in accent color
- Author name in white, company in gray

### Footer
- Background: `#0a0e0f`
- Border top: `1px solid #1f2629`
- Links in `#8b9499`, hover to `#00d9a3`
- Social icons: `32px`, `#8b9499`

---

## 🚀 Performance & Accessibility

### Performance
- Lazy load images below fold
- Use `font-display: swap` for web fonts
- Optimize animations with `transform` and `opacity`
- Implement critical CSS

### Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- Focus indicators on all interactive elements
- Semantic HTML5 elements
- Alt text for all images
- ARIA labels where needed

---

## 💡 Content Guidelines

### Voice & Tone
- **Professional yet approachable**
- **Technical but clear**
- **Confident without being arrogant**
- **Action-oriented**

### Copywriting
- Keep hero headlines short (4-8 words)
- Use active voice
- Lead with benefits
- Include clear CTAs
- Use power words: Fast, Instant, Powerful, Seamless

---

## 🛠️ Implementation Notes

### CSS Variables Setup
```css
:root {
  /* Colors */
  --bg-primary: #0a0e0f;
  --bg-secondary: #151a1c;
  --accent-primary: #00d9a3;
  --accent-secondary: #00ffc4;
  --text-primary: #ffffff;
  --text-secondary: #8b9499;
  --border-color: #1f2629;
  
  /* Spacing */
  --space-unit: 8px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Dark Mode Only
This design is optimized for dark mode. Do not create a light mode variant as it would compromise the aesthetic integrity.

---

## 📋 Checklist for Implementation

- [ ] Set up CSS variables
- [ ] Implement base typography
- [ ] Create component library
- [ ] Design responsive breakpoints
- [ ] Add hover/focus states
- [ ] Implement animations
- [ ] Test accessibility
- [ ] Optimize performance
- [ ] Cross-browser testing
- [ ] Mobile testing

---

**Last Updated**: October 2025  
**Version**: 1.0  
**For**: kalion.digital redesign
