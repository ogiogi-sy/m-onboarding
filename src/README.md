# Cashflow Coach Style - Template Project

## 🎯 Overview

This is a **clean template** for building features with the "Cashflow Coach Style" design system. It provides all design tokens, base components, patterns, and principles needed to maintain visual consistency across your team's work.

---

## 📚 Documentation

### Essential Reading (In Order)

1. **[GETTING_STARTED.md](./GETTING_STARTED.md)** ← **START HERE** ⚡
   - 30-minute quick start
   - Your first feature guide
   - Copy-paste patterns
   - Common mistakes to avoid

2. **[README.md](./README.md)** ← You are here
   - Project overview
   - Documentation map
   - Tech stack

3. **[DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)**
   - Complete design token reference
   - Color palette with hex codes
   - Typography scale
   - Spacing, radius, and shadow systems
   - Component styling guide

4. **[DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md)**
   - 15 core principles for consistency
   - DO's and DON'Ts
   - Why rules exist
   - Common mistakes to avoid

5. **[COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md)**
   - Copy-paste ready code examples
   - Cards, buttons, forms, sheets
   - Complete feature example
   - Working patterns for every use case

6. **[TEMPLATE_SETUP_GUIDE.md](./TEMPLATE_SETUP_GUIDE.md)**
   - What to keep vs. remove from this project
   - Quick start for new features
   - Development checklist

---

## 🚀 Quick Start

### For New Team Members

1. **Read the docs** (1-2 hours)
   - TEMPLATE_SETUP_GUIDE.md
   - DESIGN_PRINCIPLES.md
   - COMPONENT_PATTERNS.md

2. **Explore the codebase** (30 mins)
   - `/styles/globals.css` - All design tokens
   - `/components/ui/*` - Base components

3. **Build your first feature** (Day 1)
   - Copy a pattern from COMPONENT_PATTERNS.md
   - Use design tokens only
   - Follow button hierarchy

4. **Get a code review**
   - Ensure consistency
   - Learn from feedback

### For Existing Team Members

**Creating a new feature:**

```bash
# 1. Create your component
touch components/MyFeature.tsx

# 2. Use base UI components
import { Button } from './components/ui/button';
import { Sheet } from './components/ui/sheet';

# 3. Follow design patterns
# See COMPONENT_PATTERNS.md for examples
```

---

## 📦 Project Structure

```
/
├── 📄 README.md                       ← You are here
├── 📄 TEMPLATE_SETUP_GUIDE.md         ← Setup instructions
├── 📄 DESIGN_SYSTEM_GUIDE.md          ← Complete design reference
├── 📄 DESIGN_PRINCIPLES.md            ← Development principles
├── 📄 COMPONENT_PATTERNS.md           ← Code examples
│
├── styles/
│   └── globals.css                    ← All design tokens (DO NOT MODIFY)
│
├── components/
│   ├── ui/                            ← Base components (DO NOT MODIFY)
│   │   ├── button.tsx
│   │   ├── sheet.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   └── YourFeature.tsx                ← Your new features go here
│
└── App.tsx                            ← Main app structure
```

---

## 🎨 Design System at a Glance

### Colors
- **Navy** (#012B72) - Primary actions, trust
- **Brand Blue** (#0041AD) - Secondary actions, links
- **Brand Red** (#ED0322) - Negative, warnings
- **Green** (#1EB980) - Positive, success
- **Purple** (#7C3AED) - Savings, special

### Typography
```
h1 → 32px/600 (Page titles)
h2 → 22px/600 (Section headings)
h3 → 18px/600 (Subsections)
p  → 16px/400 (Body text)
```

### Spacing
```
xs:4px  sm:8px  md:12px  lg:16px  xl:24px  xxl:32px
```

### Button Hierarchy
1. **Primary** - Navy pill (most important)
2. **Secondary** - Blue rounded (secondary actions)
3. **Tertiary** - Ghost (cancel, dismiss)
4. **Text/Link** - No background (low priority)
5. **Destructive** - Red pill (dangerous actions)

---

## ✅ Development Checklist

Before creating any component:

- [ ] Read DESIGN_PRINCIPLES.md
- [ ] Review COMPONENT_PATTERNS.md for similar examples
- [ ] Use design tokens only (no arbitrary values)
- [ ] Import base UI components from `/components/ui/`
- [ ] Follow button hierarchy (one primary per screen)
- [ ] Ensure 44px minimum touch targets
- [ ] Test at 375px viewport width
- [ ] Add hover/focus/disabled states
- [ ] Use smooth transitions (300ms)
- [ ] Get code review before merging

---

## 🎯 Core Principles (Quick Reference)

1. **Design Token First** - Never use arbitrary values
2. **Typography Hierarchy** - Don't override sizes
3. **Color Has Meaning** - Navy=primary, Blue=secondary, Red=negative, Green=positive
4. **Button Hierarchy is Sacred** - One primary button per screen
5. **Mobile-First Always** - 375px minimum, 44px touch targets
6. **Card Patterns are Consistent** - White bg, 16px radius, 20px padding
7. **Interactions Feel Smooth** - 300ms transitions on everything
8. **Spacing Creates Breathing Room** - Generous spacing improves UX
9. **One Primary Action Per Screen** - Clear user path
10. **Composition Over Customization** - Use base components, don't rebuild
11. **Data Visualization is Clear** - Green=good, Red=bad, Blue=neutral
12. **Accessibility is Non-Negotiable** - WCAG AA minimum
13. **Consistency Compounds** - Small inconsistencies add up
14. **Progressive Disclosure** - Show what's needed, hide what's not
15. **Feedback is Immediate** - Every action has a reaction

---

## 🛠️ Common Use Cases

### Need to create a card?
→ See COMPONENT_PATTERNS.md → Cards section

### Need to add a button?
→ See COMPONENT_PATTERNS.md → Buttons section

### Need a form?
→ See COMPONENT_PATTERNS.md → Forms section

### Need a bottom sheet?
→ See COMPONENT_PATTERNS.md → Bottom Sheets section

### Not sure which color to use?
→ See DESIGN_SYSTEM_GUIDE.md → Color System

### Not sure about spacing?
→ See DESIGN_PRINCIPLES.md → Principle 8

### Need to show a list?
→ See COMPONENT_PATTERNS.md → Lists section

---

## 📱 Target Devices

**Mobile-First Design:**
- iPhone SE: 375px (minimum)
- iPhone 14/15: 390px (most common)
- iPhone 14/15 Pro Max: 428px (maximum)

**Touch Targets:**
- Minimum: 44px × 44px
- Recommended: 48px × 48px

---

## 🎓 Learning Path

### Week 1: Foundation
- Day 1: Read all documentation
- Day 2: Explore `/styles/globals.css` and `/components/ui/`
- Day 3: Study COMPONENT_PATTERNS.md examples
- Day 4: Build a simple card component
- Day 5: Build a simple form component

### Week 2: Practice
- Day 1-5: Build a complete feature following patterns
- Get daily code reviews
- Refactor based on feedback

### Week 3: Mastery
- Build features independently
- Help review others' code
- Suggest improvements to documentation

---

## 🚫 Common Mistakes to Avoid

### ❌ DON'T:
```tsx
// Arbitrary colors
<div className="bg-blue-500">

// Overriding typography
<h1 className="text-4xl">

// Rebuilding base components
<button className="inline-flex items-center...">

// Multiple primary buttons
<div>
  <button className="bg-brand-navy">Action 1</button>
  <button className="bg-brand-navy">Action 2</button>
</div>
```

### ✅ DO:
```tsx
// Design tokens
<div className="bg-brand-blue">

// Default typography
<h1>Heading</h1>

// Use base components
import { Button } from './components/ui/button';
<Button>Click Me</Button>

// Proper button hierarchy
<div>
  <button className="bg-brand-navy">Primary</button>
  <button className="bg-brand-blue">Secondary</button>
</div>
```

---

## 🔄 Template Maintenance

### When to Update:
- New base UI component added
- Design token changes
- New common pattern emerges
- Breaking changes to structure

### Who Updates:
- Design system owner
- Team lead
- With team approval

### Update Process:
1. Update `/styles/globals.css` if needed
2. Update documentation (DESIGN_SYSTEM_GUIDE.md, etc.)
3. Update COMPONENT_PATTERNS.md with new examples
4. Communicate changes to entire team
5. Update this README if structure changes

---

## 📞 Getting Help

### Design Questions
→ Review DESIGN_SYSTEM_GUIDE.md
→ Check COMPONENT_PATTERNS.md for examples
→ Ask design system owner

### Technical Questions
→ Review `/components/ui/*` implementations
→ Check existing feature components
→ Ask tech lead

### Pattern Questions
→ Review DESIGN_PRINCIPLES.md
→ Study COMPONENT_PATTERNS.md
→ Discuss with team

---

## 🎯 Success Criteria

**You're using the template correctly when:**

✅ All components use design tokens only
✅ Button hierarchy is followed consistently
✅ Mobile-first approach (tested at 375px)
✅ Touch targets are 44px minimum
✅ Smooth transitions on interactive elements
✅ Proper spacing using design tokens
✅ Base UI components are used (not rebuilt)
✅ Code reviews pass without design system violations
✅ Features feel cohesive with existing work

---

## 📊 Tech Stack

- **React 18+**
- **Tailwind CSS v4.0** (with CSS variables)
- **lucide-react** (icons)
- **motion/react** (animations)
- **recharts** (data visualization)
- **sonner** (toast notifications)
- **Radix UI** (accessible primitives)

---

## 🎨 Design Philosophy

**"Consistency, Clarity, Confidence"**

Every feature should:
- **Look related** to existing features (consistency)
- **Communicate clearly** what it does (clarity)
- **Inspire trust** in the user (confidence)

This is achieved through:
- Strict adherence to design tokens
- Meaningful use of color
- Clear visual hierarchy
- Generous spacing
- Smooth interactions
- Accessible design

---

## 📝 Final Notes

**This template is your foundation.** Everything you need to build consistent, professional features is already here:

- Complete design system in `/styles/globals.css`
- Base UI components in `/components/ui/`
- Comprehensive documentation
- Working code examples
- Clear principles and patterns

**Your job is to:**
1. Learn the system
2. Follow the patterns
3. Build your features
4. Maintain consistency

**If you're ever unsure:**
- Check the documentation
- Look at existing examples
- Ask the team
- When in doubt, copy an existing pattern

---

## 🚀 Ready to Start?

1. Read **TEMPLATE_SETUP_GUIDE.md**
2. Review **DESIGN_PRINCIPLES.md**
3. Study **COMPONENT_PATTERNS.md**
4. Build your first feature
5. Get a code review
6. Iterate and improve

**Welcome to the team! Let's build something amazing together.** 🎉

---

*Last Updated: January 2025*
*Template Version: 1.0*
*"Cashflow Coach Style" Design System*