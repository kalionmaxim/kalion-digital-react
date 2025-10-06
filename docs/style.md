Kalion.Digital - Monochrome Design System
Color Palette
Primary Colors
css--black: #000000;           /* Main background */
--main-black: #0A0A0A;      /* Sections background */
--white: #FFFFFF;           /* Text */
Grayscale
css--grey-20: #333333;
--grey-30: #4D4D4D;
--grey-40: #666666;
--grey-50: #808080;
--grey-60: #999999;
--grey-70: #B3B3B3;
--grey-80: #CCCCCC;
--grey-90: #E6E6E6;
Accent Colors
css--orange: #FF9933;          /* Gradient start */
--purple: #6A00FF;          /* Gradient end */
--gradient: linear-gradient(90deg, #FF9933 0%, #6A00FF 100%);
Usage

Background: Black
Text primary: White
Text secondary: Grey 60-80
Accents: Orange-purple gradient
Hover effects: Purple glow with shadow

Typography
Font Family
cssfont-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
Desktop Scale
cssH1: 120px / line-height 136px / font-weight 700
H2: 84px / line-height 96px / font-weight 700
H3: 22px / line-height 32px / font-weight 700
Menu/Active: 32px / line-height 40px / font-weight 700
Button: 15px / line-height 24px / font-weight 600
Body Regular: 16px / line-height 24px / font-weight 400
Body Bold: 16px / line-height 24px / font-weight 700
Label: 12px / line-height 20px / font-weight 400
Mobile Scale
cssH1: 84px / line-height 96px
Body Bold: 22px / line-height 32px
Body Regular: 14px / line-height 20px
Spacing
Base Unit: 8px
css--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-2xl: 64px;
--spacing-3xl: 96px;
Section Padding

Desktop: 80-120px vertical
Mobile: 40-60px vertical
Container max-width: 1200px

Components
Buttons
Primary (Gradient):
cssbackground: linear-gradient(90deg, #FF9933, #6A00FF);
padding: 16px 32px;
border-radius: 8px;
font-size: 15px;
font-weight: 600;
box-shadow: 0 0 20px rgba(255, 153, 51, 0.3);

/* Hover */
box-shadow: 0 0 40px rgba(106, 0, 255, 0.6);
transform: translateY(-2px);
Secondary (Outline):
cssborder: 2px solid #6A00FF;
background: transparent;
padding: 14px 30px;
border-radius: 8px;

/* Hover */
background: #6A00FF;
box-shadow: 0 0 20px rgba(106, 0, 255, 0.5);
Cards
cssbackground: #111111;
border: 1px solid #333333;
border-radius: 12px;
padding: 32px;

/* Hover */
background: #1a1a1a;
box-shadow: 0 0 30px rgba(106, 0, 255, 0.3);
transform: translateY(-4px);
transition: all 0.3s ease;
Form Fields
css/* Inactive */
background: #000;
border: 1px solid #333;
border-radius: 8px;
padding: 12px 16px;

/* Hover */
border: 1px solid #6A00FF;

/* Focus */
border: 2px solid transparent;
background: linear-gradient(#000, #000) padding-box,
            linear-gradient(90deg, #FF9933, #6A00FF) border-box;

/* Error */
border: 1px solid #FF3333;
Effects
Glow (Hover)
cssbox-shadow: 0 0 40px rgba(106, 0, 255, 0.6);
Gradient Text
cssbackground: linear-gradient(90deg, #FF9933 0%, #6A00FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
Gradient Border
cssposition: relative;
background: black;
border-radius: 12px;

&::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px;
  background: linear-gradient(90deg, #FF9933, #6A00FF);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
Icons
Sizes

16px: Small icons
24px: Standard icons
32px: Medium icons
40px: Large icons
56px: Tech stack icons (gray + gradient variants)

Technology Icons

Grayscale version (default)
Gradient version (hover/active)
Apply orange-purple gradient overlay on hover

Layout
Grid System
css/* Services: 3 columns desktop, 2 tablet, 1 mobile */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 32px;

/* Partners: 4 columns desktop, 2 mobile */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 32px;

/* Founders: 2 columns desktop, 1 mobile */
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 32px;
Container
cssmax-width: 1200px;
margin: 0 auto;
padding: 0 16px; /* mobile */
padding: 0 24px; /* tablet */
padding: 0 32px; /* desktop */
Animations
Standard Transition
csstransition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
Hover Scale
csstransform: translateY(-4px);
Button Hover
csstransform: translateY(-2px);
box-shadow: 0 0 40px rgba(106, 0, 255, 0.6);
Accessibility
Contrast Ratios

White text on black: 21:1 ✓
Gray 60 on black: 4.5:1 ✓
Purple (#6A00FF) on black: 4.8:1 ✓

Focus States
cssoutline: 2px solid #6A00FF;
outline-offset: 2px;
Brand Guidelines
Logo Usage

Always use "Kalion.Digital" text with gradient
Minimum size: 120px width
Clear space: 16px on all sides

Voice & Tone

Professional but approachable
Technical but clear
Ukrainian language primary
Direct, no fluff

Do's
✓ Use gradient on headings
✓ Dark backgrounds always
✓ Purple glow on interactive elements
✓ Smooth transitions
✓ Clean, minimal design
Don'ts
✗ Never use light backgrounds
✗ Don't mix other colors with brand palette
✗ Avoid busy patterns
✗ No drop shadows (only glows)
✗ No gradients on body text