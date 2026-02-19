# UK Banking App - "Cashflow Coach Style" Design System Guide

## Overview
This is a comprehensive design system guide for a UK mobile banking application featuring a professional, modern aesthetic built with Tailwind CSS v4.0 and React. The design emphasizes clarity, trust, and financial insight through careful use of color, typography, and spacing.

---

## 🎨 Color System

### Primary Brand Colors
```css
--brand-primary-navy: #012B72   /* Primary brand color - Navy */
--brand-blue: #0041AD            /* Secondary brand color - Brand Blue */
--brand-red: #ED0322             /* Accent brand color - Red */
```

**Usage:**
- **Navy (#012B72)**: Primary buttons, hero sections, main CTAs, account icons
- **Brand Blue (#0041AD)**: Interactive elements, links, selected states, secondary CTAs
- **Brand Red (#ED0322)**: Negative balances, alerts, credit indicators, warnings

### Supporting Color Palette

**Blues:**
```css
--blue-300: #6995E6    /* Light blue for charts/graphs */
--blue-100: #DAE7FA    /* Very light blue for backgrounds */
--blue-50: #EBF0F8     /* Subtle blue tint */
```

**Greens (Positive/Success):**
```css
--green-500: #1EB980    /* Positive indicators */
--emerald-50: #ECFDF5   /* Success backgrounds */
--emerald-600: #059669  /* Success states */
--emerald-700: #047857  /* Success hover states */
```

**Orange/Amber (Warnings):**
```css
--orange-400: #FF9A5A   /* Warning accent */
--amber-50: #FFFBEB     /* Warning backgrounds */
--amber-500: #F59E0B    /* Warning states */
--amber-600: #D97706    /* Warning hover states */
```

**Purple (Savings/Investment):**
```css
--purple-600: #7C3AED   /* Savings accounts */
--purple-50: #F5F3FF    /* Savings backgrounds */
```

**Red (Danger/Negative):**
```css
--red-50: #FEF2F2      /* Error backgrounds */
--red-600: #DC2626     /* Error states */
```

**Indigo:**
```css
--indigo-50: #EEF2FF   /* Info backgrounds */
--indigo-600: #4F46E5  /* Info states */
```

**Neutrals:**
```css
--offwhite-50: #F5F7FB    /* Main app background */
--offwhite-75: #F1F6FC    /* Soft surface background */
--white: #FFFFFF          /* Card/surface background */
--slate-50: #F8FAFC       /* Alternative neutral background */
--slate-600: #475569      /* Neutral text */
--gray-100: #F3F4F6       /* Borders/dividers */
--gray-300: #D1D5DB       /* Subtle borders */
```

### Text Colors
```css
--text-primary: #031538     /* Main headings, important text */
--text-secondary: #4B5F82   /* Body text, labels, secondary info */
--text-muted: #8D9ABC       /* Subtle text, placeholders, disabled */
--text-on-dark: #FFFFFF     /* Text on dark backgrounds */
```

**Usage:**
- **Primary (#031538)**: H1, H2, H3, important values, account balances
- **Secondary (#4B5F82)**: Body copy, descriptions, input text
- **Muted (#8D9ABC)**: Timestamps, helper text, inactive states
- **On Dark (#FFFFFF)**: Text over Navy or dark backgrounds

### Role-Based Colors
```css
--background-app: #F5F7FB          /* Main app background */
--background-surface: #FFFFFF      /* Cards, sheets, modals */
--background-surface-soft: #F1F6FC /* Alternate card background */
--background-hero: #012B72         /* Hero/header sections */
--background-highlight: #DAE7FA    /* Highlighted sections */
--accent-primary: #0041AD          /* Primary interactive elements */
--accent-danger: #ED0322           /* Destructive actions */
--accent-positive: #1EB980         /* Positive indicators */
--accent-warning: #FF9A5A          /* Warning indicators */
--divider: #F1F6FC                 /* Borders and dividers */
```

---

## 📝 Typography Scale

**Font Family:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### Type Scale

**Display (H1)**
```css
font-size: 32px
line-height: 38px
font-weight: 600
color: #031538
```
Usage: Page titles, main headings

**Title Large (H2)**
```css
font-size: 22px
line-height: 28px
font-weight: 600
color: #031538
```
Usage: Section headings, card titles

**Title Medium (H3)**
```css
font-size: 18px
line-height: 22px
font-weight: 600
color: #031538
```
Usage: Subsection headings, component titles

**Body Medium (P, H4)**
```css
font-size: 16px
line-height: 22px
font-weight: 400
color: #4B5F82
```
Usage: Body text, descriptions, default text

**Label Medium (Label)**
```css
font-size: 13px
line-height: 16px
font-weight: 500
color: #4B5F82
```
Usage: Form labels, small headings, metadata

**Button Text**
```css
font-size: 16px
line-height: 22px
font-weight: 600
```
Usage: All button text

**Input Text**
```css
font-size: 16px
line-height: 22px
font-weight: 400
color: #4B5F82
```
Usage: Form inputs, text fields

### Font Weight Tokens
```css
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
```

---

## 📏 Spacing System

```css
--space-xs: 4px      /* Minimal spacing */
--space-sm: 8px      /* Tight spacing */
--space-md: 12px     /* Small spacing */
--space-lg: 16px     /* Default spacing */
--space-xl: 24px     /* Large spacing */
--space-xxl: 32px    /* Extra large spacing */
```

**Common Usage:**
- **4px (xs)**: Icon padding, tight gaps
- **8px (sm)**: Between related elements, inner padding
- **12px (md)**: Card internal spacing, list item gaps
- **16px (lg)**: Card padding, section spacing, default gaps
- **24px (xl)**: Between sections, major component spacing
- **32px (xxl)**: Top/bottom page padding, major sections

---

## 🔲 Border Radius

```css
--radius-sm: 8px      /* Small elements, tags, pills */
--radius-md: 12px     /* Buttons, inputs, small cards */
--radius-lg: 16px     /* Cards, modals */
--radius-xl: 24px     /* Large cards, sheets */
--radius-pill: 999px  /* Fully rounded pills */
```

**Component Examples:**
- **8px**: Badges, chips, small action buttons
- **12px**: Primary buttons, input fields, icon containers
- **16px**: Standard cards, bottom sheets
- **24px**: Large modal cards, hero cards
- **999px**: Pill buttons, status indicators, avatars

---

## 🌑 Shadows

```css
--shadow-card-sm: 0px 2px 8px rgba(0, 0, 0, 0.04)
--shadow-card: 0px 2px 12px rgba(0, 0, 0, 0.05)
--shadow-card-md: 0px 2px 12px rgba(0, 0, 0, 0.06)
--shadow-card-lg: 0px 4px 16px rgba(0, 0, 0, 0.08)
--shadow-floating: 0px 4px 20px rgba(0, 0, 0, 0.08)
```

**Usage:**
- **card-sm**: Subtle cards, attention cards, list items
- **card**: Standard cards, transaction items
- **card-md**: Elevated cards, hover states
- **card-lg**: Important modals, prominent cards
- **floating**: Action sheets, tooltips, popovers, dropdowns

---

## 🎯 Button Hierarchy

### Primary Button
```tsx
<button className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90">
  Primary Action
</button>
```
**Style:**
- Background: Navy (#012B72)
- Text: White
- Border Radius: Full (pill shape)
- Padding: 12px vertical, 24px horizontal
- Hover: 90% opacity

### Secondary Button
```tsx
<button className="bg-brand-blue text-white py-2 px-4 rounded-xl">
  Secondary Action
</button>
```
**Style:**
- Background: Brand Blue (#0041AD)
- Text: White
- Border Radius: 12px (rounded-xl)
- Padding: 8px vertical, 16px horizontal

### Tertiary/Ghost Button
```tsx
<button className="bg-offwhite-50 text-text-secondary py-2 px-4 rounded-xl hover:text-text-primary">
  Tertiary Action
</button>
```
**Style:**
- Background: Off-white (#F5F7FB)
- Text: Secondary text color
- Hover: Primary text color

### Text/Link Button
```tsx
<button className="text-brand-blue text-sm">
  Link Action
</button>
```
**Style:**
- No background
- Text: Brand Blue (#0041AD)
- Font size: 14px (text-sm)

### Destructive Button
```tsx
<button className="bg-brand-red text-white py-3 px-6 rounded-full hover:opacity-90">
  Delete
</button>
```
**Style:**
- Background: Brand Red (#ED0322)
- Text: White
- Border Radius: Full (pill shape)

---

## 🎴 Card Components

### Standard Card
```tsx
<div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
  {/* Card content */}
</div>
```
**Style:**
- Background: White
- Border Radius: 16px (rounded-2xl)
- Padding: 20px (p-5)
- Shadow: card-sm

### Accent Border Card (Attention Cards)
```tsx
<div className="bg-white rounded-2xl p-5 border-l-4 border-blue-300 shadow-[--shadow-card-sm]">
  {/* Card content */}
</div>
```
**Border Colors by Type:**
- Info/Default: `border-blue-300` (#6995E6)
- Warning: `border-orange-400` (#FF9A5A)
- Success: `border-green-500` (#1EB980)
- Danger: `border-brand-red` (#ED0322)

### Icon Container
```tsx
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
  <Icon className="text-brand-blue" size={24} />
</div>
```
**Background Colors by Type:**
- Blue actions: `bg-blue-50` with `text-brand-blue`
- Purple (savings): `bg-purple-50` with `text-purple-600`
- Green (positive): `bg-emerald-50` with `text-emerald-600`
- Amber (warning): `bg-amber-50` with `text-amber-600`

---

## 📱 Component Patterns

### Hero Section (Account Header)
```tsx
<div className="bg-brand-navy px-6 pt-12 pb-12">
  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/15">
    <Icon className="text-white" size={24} />
  </div>
  <h1 className="text-white mt-4">£12,345.67</h1>
  <p className="text-white/70 text-sm">Total Balance</p>
</div>
```

### Quick Action Grid
```tsx
<div className="bg-white rounded-3xl p-5 grid grid-cols-4 gap-4 shadow-[--shadow-floating]">
  <button className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
      <Icon className="text-brand-blue" size={24} />
    </div>
    <span className="text-xs text-text-secondary">Action</span>
  </button>
</div>
```

### Progress Bar
```tsx
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
  <div 
    className="h-full rounded-full bg-brand-blue transition-all duration-300" 
    style={{ width: '65%' }}
  />
</div>
```

### Balance Bar (Segmented)
```tsx
<div className="h-3 bg-white/10 rounded-full overflow-hidden flex">
  <div className="h-full bg-brand-blue" style={{ width: '45%' }} />
  <div className="h-full bg-purple-600" style={{ width: '30%' }} />
  <div className="h-full bg-brand-red" style={{ width: '25%' }} />
</div>
```

### Filter Chip (Toggle)
```tsx
<button className={`
  px-4 py-2 rounded-full text-sm transition-all
  ${isActive 
    ? 'bg-brand-blue text-white' 
    : 'bg-white text-text-primary border border-divider'
  }
`}>
  Filter Name
</button>
```

### Bottom Sheet
```tsx
<div className="fixed inset-0 bg-black/50 z-50">
  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-auto">
    {/* Sheet content */}
  </div>
</div>
```

---

## 🎨 Color Coding by Account Type

### Checking Accounts
- Primary: `bg-brand-blue` / `text-brand-blue`
- Background: `bg-blue-50`
- Border: `border-brand-blue`

### Savings Accounts
- Primary: `bg-purple-600` / `text-purple-600`
- Background: `bg-purple-50`
- Border: `border-purple-600`

### Credit Accounts
- Primary: `bg-brand-red` / `text-brand-red`
- Background: `bg-red-50`
- Border: `border-brand-red`

### Business Accounts
- Primary: `bg-brand-navy` / `text-brand-navy`
- Background: `bg-blue-50`
- Border: `border-brand-navy`

---

## 📊 Data Visualization

### Chart Colors (Recharts)
```tsx
// Positive trends
<Line stroke="#1EB980" strokeWidth={2} />

// Negative trends
<Line stroke="#ED0322" strokeWidth={2} />

// Neutral/Primary
<Line stroke="#0041AD" strokeWidth={2} />

// Forecast/Predicted
<Line stroke="#6995E6" strokeWidth={2} strokeDasharray="5 5" />

// Bar charts
<Bar fill="#0041AD" radius={[8, 8, 0, 0]} />
```

### Color Gradients
```tsx
// Positive gradient
<linearGradient id="positive">
  <stop offset="0%" stopColor="#1EB980" stopOpacity={0.2} />
  <stop offset="100%" stopColor="#1EB980" stopOpacity={0} />
</linearGradient>

// Negative gradient
<linearGradient id="negative">
  <stop offset="0%" stopColor="#ED0322" stopOpacity={0.2} />
  <stop offset="100%" stopColor="#ED0322" stopOpacity={0} />
</linearGradient>
```

---

## 💫 Animation & Transitions

### Standard Transitions
```css
transition-all duration-300   /* Standard UI transitions */
transition-colors             /* Color-only transitions */
transition-opacity            /* Fade effects */
```

### Hover States
```tsx
hover:opacity-90              /* Primary buttons */
hover:text-text-primary       /* Text color change */
hover:bg-accent               /* Background color change */
```

### Motion Library (motion/react)
```tsx
// Slide up animation
<motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
>

// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2 }}
>
```

---

## 🔍 Interactive States

### Active/Selected
```tsx
className="bg-brand-blue text-white"
```

### Inactive/Default
```tsx
className="bg-white text-text-primary border border-divider"
```

### Disabled
```tsx
className="opacity-50 pointer-events-none"
```

### Hover
```tsx
className="hover:opacity-90 transition-opacity"
```

---

## 📋 Form Elements

### Input Field
```tsx
<input 
  className="w-full px-4 py-3 rounded-xl border border-divider bg-white text-text-primary focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
  placeholder="Enter amount"
/>
```

### Select/Dropdown
```tsx
<select className="w-full px-4 py-3 rounded-xl border border-divider bg-white text-text-primary">
  <option>Select option</option>
</select>
```

### Range Slider
```tsx
<input 
  type="range"
  className="w-full range-blue"
  min="0"
  max="100"
/>
```
Custom styling in globals.css with thumb styles

---

## 🏷️ Badge Components

### Status Badge
```tsx
<span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
  Completed
</span>
```

**Badge Colors:**
- Success: `bg-emerald-50 text-emerald-600`
- Warning: `bg-amber-50 text-amber-600`
- Danger: `bg-red-50 text-red-600`
- Info: `bg-blue-50 text-brand-blue`
- Neutral: `bg-gray-100 text-slate-600`

---

## 📐 Layout Patterns

### Mobile Container
```tsx
<div className="min-h-screen bg-offwhite-50">
  <div className="max-w-md mx-auto">
    {/* Content */}
  </div>
</div>
```

### Section Spacing
```tsx
<div className="space-y-6">  {/* 24px gap between sections */}
  <section>...</section>
  <section>...</section>
</div>
```

### Grid Layouts
```tsx
{/* 2 columns */}
<div className="grid grid-cols-2 gap-4">

{/* 4 columns (quick actions) */}
<div className="grid grid-cols-4 gap-4">

{/* Auto-fit responsive */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
```

---

## 🎯 Best Practices

### DO:
✅ Use CSS variables for colors (e.g., `bg-brand-navy`)
✅ Follow the established button hierarchy
✅ Apply consistent spacing using design tokens
✅ Use semantic color naming (accent-primary, accent-danger)
✅ Maintain consistent border radius across similar components
✅ Use appropriate shadows for elevation
✅ Follow mobile-first design principles
✅ Use transition classes for smooth interactions

### DON'T:
❌ Override typography sizes unless specifically needed
❌ Use arbitrary colors outside the design system
❌ Mix different button styles in the same hierarchy level
❌ Forget to use proper hover/active states
❌ Use hardcoded px values when design tokens exist
❌ Skip accessibility considerations (contrast, focus states)

---

## 🎨 Tailwind Configuration

This project uses **Tailwind CSS v4.0** with CSS variables defined in `/styles/globals.css`.

### Custom Tailwind Classes Available:
```css
/* Brand colors */
bg-brand-navy, text-brand-navy
bg-brand-blue, text-brand-blue
bg-brand-red, text-brand-red

/* Background utilities */
bg-offwhite-50, bg-offwhite-75
bg-bg-app, bg-bg-surface

/* Text utilities */
text-text-primary, text-text-secondary, text-text-muted

/* Accent utilities */
bg-accent-primary, text-accent-primary
bg-accent-danger, text-accent-danger

/* Shadow utilities */
shadow-[--shadow-card-sm]
shadow-[--shadow-floating]

/* Radius utilities */
rounded-[--radius-md]
```

---

## 📦 Component Library Reference

### Icons (lucide-react)
Always verify icon names exist before importing. Common icons used:
- `ArrowLeft`, `ArrowRight`, `ArrowDown`, `ArrowUp`
- `CreditCard`, `Wallet`, `PiggyBank`, `Building2`
- `Search`, `Filter`, `X`, `Check`
- `ChevronDown`, `ChevronRight`
- `Download`, `Upload`, `Plus`, `Minus`
- `Calendar`, `Clock`, `TrendingUp`, `TrendingDown`

### Charts (recharts)
Primary library for data visualization. Common components:
- `LineChart`, `BarChart`, `AreaChart`
- `Line`, `Bar`, `Area`
- `XAxis`, `YAxis`, `Tooltip`, `Legend`
- `ResponsiveContainer`

---

## 🎬 Implementation Checklist

When creating new components:
- [ ] Use established color tokens from CSS variables
- [ ] Follow typography scale (don't add custom font sizes)
- [ ] Apply appropriate spacing tokens
- [ ] Use correct border radius for component type
- [ ] Add proper shadow for elevation
- [ ] Include hover/active/disabled states
- [ ] Ensure mobile-first responsive design
- [ ] Add smooth transitions where appropriate
- [ ] Maintain consistent padding/margin
- [ ] Follow button hierarchy for CTAs
- [ ] Use semantic HTML elements
- [ ] Ensure proper color contrast (WCAG AA minimum)

---

## 📱 Mobile-First Guidelines

This is a **mobile-first** design system optimized for:
- Screen width: 375px - 428px (iPhone SE to iPhone Pro Max)
- Touch targets: Minimum 44px × 44px
- Bottom-reachable navigation
- Swipeable carousels and sheets
- Tap-friendly spacing (16px+ between interactive elements)

### Common Mobile Patterns:
- Bottom sheets for actions/filters
- Floating action buttons
- Sticky headers with scroll shadows
- Pull-to-refresh (when applicable)
- Swipe gestures for navigation

---

## 💡 Usage with ChatCN or Other AI Tools

To recreate this design system in another tool, provide:

1. **Complete color palette** (all CSS variables from this guide)
2. **Typography scale** (6 levels with exact sizes/weights)
3. **Spacing system** (6 tokens from xs to xxl)
4. **Border radius tokens** (5 levels)
5. **Shadow tokens** (5 elevation levels)
6. **Component patterns** (buttons, cards, forms from examples)
7. **Mobile-first approach** with max-width container
8. **Color coding rules** for account types and states

**Key principles to emphasize:**
- Professional banking aesthetic (trust, clarity, security)
- Navy and Blue as primary brand colors
- Red for negative/credit indicators
- Green for positive indicators
- Consistent use of rounded corners (never sharp)
- Subtle shadows for depth
- Ample white space for clarity
- Mobile-optimized touch targets

---

## 📚 Additional Resources

**Files to reference:**
- `/styles/globals.css` - Complete CSS variable definitions
- `/components/ui/button.tsx` - Button component with variants
- `/components/AccountsView.tsx` - Comprehensive component examples
- `/App.tsx` - Application structure

**External dependencies:**
- Tailwind CSS v4.0
- React 18+
- lucide-react (icons)
- recharts (charts)
- motion/react (animations)

---

*Last Updated: December 2024*
*Design System Version: 1.0*
*"Cashflow Coach Style" - UK Banking App*
