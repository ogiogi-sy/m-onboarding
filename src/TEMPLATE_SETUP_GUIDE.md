# Template Setup Guide - Clean Starting Point

## 🎯 Purpose

This template provides a **clean foundation** for building new features while maintaining the "Cashflow Coach Style" design system. All design tokens, patterns, and principles are defined and ready to use.

---

## 📦 What This Template Includes

### ✅ KEEP - Foundation (Already Configured)

**Design System:**
- ✅ `/styles/globals.css` - Complete design tokens (colors, typography, spacing, shadows)
- ✅ `/DESIGN_SYSTEM_GUIDE.md` - Comprehensive design system documentation
- ✅ All CSS variables and Tailwind v4 configuration

**Base UI Components** (`/components/ui/*`):
- ✅ `button.tsx` - Button component with all variants
- ✅ `sheet.tsx` - Bottom sheet/modal component
- ✅ `dialog.tsx` - Dialog/modal component
- ✅ `input.tsx` - Form input component
- ✅ `sonner.tsx` - Toast notification system
- ✅ `utils.ts` - Utility functions (cn, etc.)
- ✅ All other base UI components

**Core Structure:**
- ✅ Basic app routing pattern
- ✅ Authentication flow structure
- ✅ Mobile-first responsive container
- ✅ Toast notification setup

### ❌ REMOVE - Feature-Specific (To Be Deleted)

**Banking-Specific Features:**
- ❌ `/components/Dashboard.tsx`
- ❌ `/components/AccountsView.tsx`
- ❌ `/components/LoginPage.tsx` (keep structure, remove banking context)
- ❌ `/components/ChatView.tsx`
- ❌ `/components/InsightsView.tsx`
- ❌ `/components/ProfileView.tsx`
- ❌ All other banking-specific components
- ❌ `/ACCOUNT_FEATURES.md` (feature-specific documentation)

**Keep Only:**
- `/components/ui/*` - All base UI components
- `/components/figma/*` - If using Figma imports
- Example template components (to be created)

---

## 🏗️ Template Structure

```
/
├── styles/
│   └── globals.css                    ✅ KEEP - All design tokens
├── components/
│   ├── ui/                            ✅ KEEP - All base UI components
│   │   ├── button.tsx
│   │   ├── sheet.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── figma/                         ✅ KEEP - Figma utilities
│   ├── ExampleFeature.tsx             🆕 NEW - Template example
│   └── TabBar.tsx                     🆕 NEW - Clean navigation template
├── App.tsx                            🔄 SIMPLIFY - Basic structure only
├── DESIGN_SYSTEM_GUIDE.md             ✅ KEEP - Design documentation
├── DESIGN_PRINCIPLES.md               🆕 NEW - Development principles
├── COMPONENT_PATTERNS.md              🆕 NEW - Component examples
└── TEMPLATE_SETUP_GUIDE.md            📄 THIS FILE
```

---

## 🚀 Quick Start for New Features

### Step 1: Understand the Design System
1. Read `/DESIGN_SYSTEM_GUIDE.md` - Learn all color tokens, typography, spacing
2. Review `/DESIGN_PRINCIPLES.md` - Understand core principles
3. Study `/COMPONENT_PATTERNS.md` - See working examples

### Step 2: Create Your Feature Component
1. Create new file: `/components/YourFeature.tsx`
2. Follow the component template pattern
3. Use only design tokens from globals.css

### Step 3: Use Base UI Components
```tsx
import { Button } from './components/ui/button';
import { Sheet } from './components/ui/sheet';
```

### Step 4: Follow Design Patterns
- Use established color tokens
- Follow button hierarchy
- Apply consistent spacing
- Use proper shadows and borders

---

## 📋 Development Checklist

Before creating any new component:

**Design Tokens:**
- [ ] Use CSS variable colors only (e.g., `bg-brand-navy`)
- [ ] Use spacing tokens (space-xs to space-xxl)
- [ ] Use radius tokens (radius-sm to radius-xl)
- [ ] Use shadow tokens (shadow-card, shadow-floating)

**Typography:**
- [ ] Don't override default font sizes
- [ ] Use semantic heading levels (h1, h2, h3)
- [ ] Default body text is already styled
- [ ] Labels have default styling

**Components:**
- [ ] Import base UI components from `/components/ui/`
- [ ] Follow button hierarchy (primary = navy, secondary = blue)
- [ ] Use consistent card patterns
- [ ] Apply mobile-first approach

**Quality:**
- [ ] Add hover states to interactive elements
- [ ] Include loading/disabled states
- [ ] Ensure touch targets are 44px minimum
- [ ] Test on mobile viewport (375px - 428px)

---

## 🎨 Common Patterns Quick Reference

### Card Component
```tsx
<div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Primary Button
```tsx
<button className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90">
  Primary Action
</button>
```

### Bottom Sheet
```tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';

<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>
```

### Icon Container
```tsx
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
  <Icon className="text-brand-blue" size={24} />
</div>
```

---

## 🎯 Core Design Principles

### 1. **Consistency First**
- Always use design tokens from `/styles/globals.css`
- Never add arbitrary colors or sizes
- Follow established patterns

### 2. **Mobile-First**
- Design for 375px - 428px screens
- Touch targets minimum 44px
- Bottom-reachable navigation

### 3. **Hierarchy & Clarity**
- Use color to indicate importance
- Navy = Primary actions
- Blue = Secondary actions
- Red = Negative/Danger
- Green = Positive/Success

### 4. **Performance**
- Keep components simple
- Avoid unnecessary re-renders
- Use CSS transitions (not heavy animations)

### 5. **Accessibility**
- Proper color contrast (WCAG AA)
- Semantic HTML
- Focus states on interactive elements

---

## 🛠️ File Organization

### Feature-Based Structure
```
/components/
├── ui/                    # Base components (DO NOT MODIFY)
├── FeatureName/
│   ├── FeatureName.tsx    # Main component
│   ├── FeatureCard.tsx    # Sub-components
│   └── FeatureSheet.tsx   # Related components
```

### Component Naming
- PascalCase for components: `MyFeature.tsx`
- Descriptive names: `UserProfileCard.tsx` not `Card.tsx`
- Group related components together

---

## 🚫 Common Mistakes to Avoid

### ❌ DON'T:
```tsx
// DON'T use arbitrary colors
<div className="bg-blue-500">

// DON'T override typography sizes
<h1 className="text-3xl">

// DON'T use inline styles for design tokens
<div style={{ color: '#012B72' }}>

// DON'T mix button styles
<button className="bg-red-500 text-brand-navy">
```

### ✅ DO:
```tsx
// DO use design tokens
<div className="bg-brand-blue">

// DO use default typography
<h1>Heading Text</h1>

// DO use CSS variables
<div className="bg-brand-navy">

// DO follow button hierarchy
<button className="bg-brand-navy text-white">
```

---

## 📚 Required Reading

1. **DESIGN_SYSTEM_GUIDE.md** - Complete design system reference
2. **DESIGN_PRINCIPLES.md** - Core development principles
3. **COMPONENT_PATTERNS.md** - Working component examples

---

## 🎓 Learning Path

### Day 1: Understand Foundation
- Read design system guide
- Review color tokens and usage
- Study typography scale
- Explore spacing system

### Day 2: Component Patterns
- Review example components
- Study button hierarchy
- Learn card patterns
- Practice with forms

### Day 3: Build Your First Feature
- Start with simple component
- Use base UI components
- Follow design patterns
- Get code review

---

## 💡 Tips for Success

1. **Reference, Don't Recreate**
   - Use existing UI components
   - Don't rebuild basic elements

2. **Copy Patterns**
   - Look at example components
   - Copy and adapt patterns
   - Maintain consistency

3. **Ask Questions**
   - Design system unclear? Ask the team
   - Unsure about pattern? Check examples
   - Need new component? Discuss first

4. **Stay Within Boundaries**
   - Design system is comprehensive
   - Most needs are already covered
   - Extend only when necessary

---

## 🔄 Template Maintenance

### When to Update Template:
- New base UI component added
- Design token changes
- New common pattern emerges
- Breaking changes to structure

### Who Updates Template:
- Design system owner
- Team lead
- With team approval

### How to Update:
1. Update documentation first
2. Update base components
3. Update example components
4. Communicate changes to team

---

## 📞 Support & Questions

**Design Questions:**
- Refer to DESIGN_SYSTEM_GUIDE.md
- Check COMPONENT_PATTERNS.md
- Ask design system owner

**Technical Questions:**
- Review base UI components
- Check existing implementations
- Ask tech lead

**Pattern Questions:**
- Review DESIGN_PRINCIPLES.md
- Study example components
- Discuss with team

---

## ✅ Template Validation

Your template is ready when:
- [ ] All design tokens are defined
- [ ] Base UI components work
- [ ] Example components demonstrate patterns
- [ ] Documentation is complete
- [ ] Team can create features independently
- [ ] New features maintain consistency

---

*This template ensures every team member can build new features while maintaining the established look and feel of the "Cashflow Coach Style" design system.*
