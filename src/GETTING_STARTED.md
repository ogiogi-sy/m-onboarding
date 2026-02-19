# Getting Started - Quick Guide

## 🚀 You're Ready to Build!

This template is **ready to use**. Everything is set up and documented.

---

## 📖 First 30 Minutes

### 1. Run the App (5 mins)
```bash
npm install
npm run dev
```

Open in your browser and explore:
- **Welcome screen** - Form patterns, hero section
- **Example feature** - All key patterns demonstrated
- Click around, open sheets, try filters

### 2. Read This (10 mins)
- ✅ This file (you're here!)
- ✅ **[README.md](./README.md)** - Project overview
- ✅ **[DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md)** - Skim through the 15 principles

### 3. Explore the Code (15 mins)
```
/components/
├── WelcomeScreen.tsx        ← Simple login pattern
├── ExampleFeature.tsx       ← Main pattern reference
└── ui/                      ← Base components (DON'T MODIFY)
    ├── button.tsx
    ├── sheet.tsx
    ├── input.tsx
    └── ...

/styles/
└── globals.css              ← All design tokens (DON'T MODIFY)
```

**Open these files:**
1. `/components/ExampleFeature.tsx` - See all patterns in action
2. `/styles/globals.css` - See all available design tokens
3. `/components/ui/button.tsx` - See how base components work

---

## 🎯 Your First Feature (Next 2 Hours)

### Step 1: Plan Your Feature (15 mins)
Ask yourself:
- What data will I display?
- What actions can users take?
- Do I need a bottom sheet or modal?
- Will I use filters or search?

### Step 2: Create Your Component (30 mins)
```bash
# Create your new file
touch components/MyFeature.tsx
```

Start with this template:
```tsx
import { useState } from 'react';
import { MyIcon } from 'lucide-react';
import { Sheet, SheetContent } from './ui/sheet';
import { toast } from 'sonner';

export function MyFeature() {
  const [data, setData] = useState([]);

  return (
    <div className="min-h-screen bg-offwhite-50">
      {/* Navy hero section */}
      <div className="bg-brand-navy px-6 pt-12 pb-8">
        <h1 className="text-white">My Feature</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Your content here */}
      </div>
    </div>
  );
}
```

### Step 3: Add to App.tsx (5 mins)
```tsx
import { MyFeature } from './components/MyFeature';

// Replace ExampleFeature with MyFeature
<MyFeature />
```

### Step 4: Build & Test (1 hour)
- Copy patterns from `ExampleFeature.tsx`
- Use design tokens from `globals.css`
- Test at 375px width (mobile)
- Add toast notifications
- Ensure 44px touch targets

---

## 🎨 Quick Design Token Reference

### Colors (Most Used)
```tsx
// Backgrounds
className="bg-brand-navy"     // Primary brand color
className="bg-brand-blue"     // Secondary brand color
className="bg-offwhite-50"    // App background
className="bg-white"          // Cards, sheets

// Text
className="text-white"        // On navy/blue backgrounds
className="text-text-primary" // Main text
className="text-text-secondary" // Secondary text
className="text-text-muted"   // Muted text

// Borders
className="border-divider"    // Card/input borders
```

### Spacing (Most Used)
```tsx
className="p-5"    // Card padding (20px)
className="p-6"    // Sheet padding (24px)
className="px-6"   // Screen horizontal padding
className="space-y-4"  // Vertical spacing between elements
className="space-y-6"  // Vertical spacing between sections
```

### Border Radius
```tsx
className="rounded-xl"    // Cards, buttons (12px)
className="rounded-2xl"   // Larger cards (16px)
className="rounded-full"  // Pills, circles
```

### Shadows
```tsx
className="shadow-[--shadow-card-sm]"    // Standard cards
className="shadow-[--shadow-card-md]"    // Hover state
className="shadow-[--shadow-floating]"   // Quick actions, floating elements
```

---

## 🔘 Button Quick Reference

```tsx
// Primary (Navy Pill)
<button className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
  Primary Action
</button>

// Secondary (Blue Rounded)
<button className="bg-brand-blue text-white py-2 px-4 rounded-xl hover:opacity-90 transition-opacity">
  Secondary Action
</button>

// Tertiary/Ghost
<button className="bg-offwhite-50 text-text-secondary py-2 px-4 rounded-xl hover:text-text-primary transition-colors">
  Cancel
</button>

// Text/Link
<button className="text-brand-blue text-sm hover:opacity-80 transition-opacity">
  Learn More →
</button>
```

---

## 📦 Common Imports

```tsx
// Icons (lucide-react)
import { Plus, Settings, ChevronRight, X } from 'lucide-react';

// Base UI Components
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

// Toast Notifications
import { toast } from 'sonner';

// React Hooks
import { useState, useEffect } from 'react';
```

---

## 🎯 Common Patterns (Copy-Paste)

### Hero Section
```tsx
<div className="bg-brand-navy px-6 pt-12 pb-8">
  <h1 className="text-white">Page Title</h1>
  <p className="text-white/70 text-sm mt-2">Description</p>
</div>
```

### Card
```tsx
<div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
  <h3>Card Title</h3>
  <p className="text-text-secondary mt-2">Card content</p>
</div>
```

### Clickable List Item
```tsx
<div 
  onClick={handleClick}
  className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm] hover:shadow-[--shadow-card-md] transition-shadow cursor-pointer"
>
  <div className="flex items-center justify-between">
    <div>
      <h3>Item Title</h3>
      <p className="text-sm text-text-secondary mt-1">Description</p>
    </div>
    <ChevronRight className="text-text-muted" size={20} />
  </div>
</div>
```

### Bottom Sheet
```tsx
const [isOpen, setIsOpen] = useState(false);

<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetContent side="bottom" className="rounded-t-3xl">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    <div className="mt-6">
      {/* Content */}
    </div>
  </SheetContent>
</Sheet>
```

### Icon Container
```tsx
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
  <Icon className="text-brand-blue" size={24} />
</div>
```

### Filter Chips
```tsx
const [active, setActive] = useState('all');

<div className="flex gap-2 overflow-x-auto">
  {['all', 'option1', 'option2'].map(filter => (
    <button
      key={filter}
      onClick={() => setActive(filter)}
      className={`px-4 py-2 rounded-full text-sm transition-all ${
        active === filter
          ? 'bg-brand-blue text-white'
          : 'bg-white text-text-primary border border-divider'
      }`}
    >
      {filter}
    </button>
  ))}
</div>
```

---

## 🚫 Common Mistakes (Avoid These!)

### ❌ DON'T:
```tsx
// Don't use arbitrary colors
<div className="bg-blue-500">

// Don't override typography sizes
<h1 className="text-4xl">

// Don't rebuild base components
<button className="inline-flex items-center justify-center rounded-md...">

// Don't forget transitions
<button className="bg-brand-navy"> // Missing hover/transition

// Don't use small touch targets
<button className="py-1 px-2"> // Too small for mobile
```

### ✅ DO:
```tsx
// Use design tokens
<div className="bg-brand-blue">

// Use default typography
<h1>Heading Text</h1>

// Use base components
import { Button } from './components/ui/button';
<Button>Click Me</Button>

// Add smooth transitions
<button className="bg-brand-navy hover:opacity-90 transition-opacity">

// Ensure touch targets are 44px+
<button className="py-3 px-6">
```

---

## 📚 When You Need Help

### Design Questions
**"What color should I use?"**
→ See [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md) - Color System section

**"How much spacing?"**
→ See [DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md) - Principle 8: Spacing

**"Which button style?"**
→ See [DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md) - Principle 4: Button Hierarchy

### Code Questions
**"How do I make a card?"**
→ See [COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md) - Cards section

**"How do I make a form?"**
→ See [COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md) - Forms section

**"How do I show a bottom sheet?"**
→ See [COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md) - Bottom Sheets section

### Pattern Questions
**"Can I see a complete example?"**
→ Look at `/components/ExampleFeature.tsx`

**"What's the best way to structure my component?"**
→ See [COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md) - Complete Feature Example

---

## ✅ Development Checklist

Before you commit your feature:

**Design Tokens:**
- [ ] All colors use CSS variables (bg-brand-navy, text-brand-blue, etc.)
- [ ] Spacing uses design tokens (space-xs to space-xxl)
- [ ] Border radius uses tokens (rounded-xl, rounded-2xl)
- [ ] Shadows use tokens (shadow-[--shadow-card-sm])

**Typography:**
- [ ] Using semantic HTML (h1, h2, h3, p, label)
- [ ] Not overriding default font sizes
- [ ] Text colors use design tokens

**Components:**
- [ ] Using base UI components from `/components/ui/`
- [ ] Button hierarchy is correct (one primary per screen)
- [ ] Touch targets are 44px minimum
- [ ] All interactive elements have hover states
- [ ] Smooth transitions (300ms standard)

**Mobile:**
- [ ] Tested at 375px width
- [ ] Content is readable
- [ ] Buttons are reachable
- [ ] No horizontal scroll

**Functionality:**
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Success feedback (toast notifications)
- [ ] Empty states included

---

## 🎓 Learning Path

### Today (2-3 hours)
- ✅ Run the app and explore
- ✅ Read this guide
- ✅ Read README.md
- ✅ Skim DESIGN_PRINCIPLES.md
- ✅ Build your first simple component

### This Week
- Day 2: Read DESIGN_SYSTEM_GUIDE.md in detail
- Day 3: Study COMPONENT_PATTERNS.md thoroughly
- Day 4: Build a complete feature
- Day 5: Code review and refinement

### Next Week
- Build features independently
- Help review team members' code
- Suggest improvements

---

## 🔥 Pro Tips

1. **Copy, Don't Create**
   - Start by copying from ExampleFeature.tsx
   - Modify for your needs
   - Don't start from scratch

2. **Use Find & Replace**
   - Copy a pattern
   - Replace variable names
   - Update content
   - Maintain structure

3. **Test As You Build**
   - Keep browser open at 375px
   - Refresh frequently
   - Check hover states
   - Test touch interactions

4. **Reference Often**
   - Keep COMPONENT_PATTERNS.md open
   - Check design tokens in globals.css
   - Look at ExampleFeature.tsx

5. **Ask Questions**
   - Design system unclear? Ask
   - Pattern not working? Ask
   - Unsure about approach? Ask

---

## 🎯 Success Metrics

**You're doing it right when:**

✅ Your feature looks like it belongs with ExampleFeature
✅ No arbitrary colors or sizes in your code
✅ Using base UI components, not rebuilding them
✅ One primary button per screen
✅ Smooth transitions on everything
✅ Works perfectly on mobile (375px)
✅ Code review passes without issues

---

## 🚀 Ready?

You have everything you need:
- ✅ Clean template
- ✅ Working examples
- ✅ Complete documentation
- ✅ Design system
- ✅ Component patterns

**Next Step:** Start building your first feature!

```bash
# Create your component
touch components/MyFeature.tsx

# Start coding
# Copy patterns from ExampleFeature.tsx
# Use design tokens from globals.css
# Reference COMPONENT_PATTERNS.md

# Test frequently
npm run dev
```

---

**Need more examples?** See [COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md)

**Need design reference?** See [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)

**Need principles?** See [DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md)

**Need setup info?** See [TEMPLATE_SETUP_GUIDE.md](./TEMPLATE_SETUP_GUIDE.md)

---

*Happy coding! 🎉*
