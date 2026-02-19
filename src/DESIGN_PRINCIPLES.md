# Design Principles - "Cashflow Coach Style"

## 🎯 Core Philosophy

Build with **consistency, clarity, and confidence**. Every component should feel like part of a cohesive system, not a collection of individual pieces.

---

## 1. 🎨 Design Token First

### Principle
**Never use arbitrary values. Always use design tokens.**

### Why
Ensures visual consistency across all features and makes global updates possible.

### How
```tsx
// ❌ WRONG - Arbitrary values
<div className="bg-blue-500 rounded-lg p-4">

// ✅ CORRECT - Design tokens
<div className="bg-brand-blue rounded-xl p-5">
```

### Available Tokens

**Colors:**
- Brand: `brand-navy`, `brand-blue`, `brand-red`
- Text: `text-primary`, `text-secondary`, `text-muted`
- Background: `bg-app`, `bg-surface`, `offwhite-50`
- Accent: `accent-primary`, `accent-danger`, `accent-positive`

**Spacing:**
- `space-xs` (4px), `space-sm` (8px), `space-md` (12px)
- `space-lg` (16px), `space-xl` (24px), `space-xxl` (32px)

**Radius:**
- `radius-sm` (8px), `radius-md` (12px), `radius-lg` (16px)
- `radius-xl` (24px), `radius-pill` (999px)

**Shadows:**
- `shadow-card-sm`, `shadow-card`, `shadow-card-md`
- `shadow-card-lg`, `shadow-floating`

### Rule
If you need a value that doesn't exist in the design system, **discuss with the team first** before adding it.

---

## 2. 📝 Typography Hierarchy

### Principle
**Respect the established typography scale. Don't override sizes.**

### Why
Creates visual hierarchy and readability without confusion.

### Scale
```
h1 → 32px/38px/600 (Display - Page titles)
h2 → 22px/28px/600 (Title Large - Section headings)
h3 → 18px/22px/600 (Title Medium - Subsections)
p  → 16px/22px/400 (Body Medium - Content)
label → 13px/16px/500 (Label Medium - Form labels)
```

### How to Use
```tsx
// ✅ CORRECT - Use semantic HTML
<h1>Dashboard</h1>
<h2>Recent Transactions</h2>
<h3>Filter By</h3>
<p>Transaction description text</p>
<label>Amount</label>

// ❌ WRONG - Don't override
<h1 className="text-4xl">Dashboard</h1>
<p className="text-lg font-bold">Section Title</p>
```

### Color Override (Allowed)
```tsx
// ✅ OK - Change color, not size
<h2 className="text-brand-blue">Section Title</h2>
<p className="text-text-muted">Helper text</p>
```

### Rule
Use the right semantic element for the job. If h2 seems too small, question whether it should be h1.

---

## 3. 🎨 Color Has Meaning

### Principle
**Colors communicate function, not just aesthetics.**

### Color Meanings

**Navy (#012B72):**
- Primary brand color
- Primary actions/CTAs
- Trust and authority
- Main navigation elements

**Brand Blue (#0041AD):**
- Secondary actions
- Interactive elements
- Links and selections
- Checking accounts

**Brand Red (#ED0322):**
- Negative balances
- Credit indicators
- Destructive actions
- Alerts and warnings

**Green (#1EB980):**
- Positive balances
- Success states
- Confirmations
- Growth indicators

**Purple (#7C3AED):**
- Savings accounts
- Investment-related
- Special features

**Orange/Amber:**
- Warnings (non-critical)
- Pending states
- Attention needed

**Gray/Muted:**
- Disabled states
- Secondary information
- Backgrounds

### Usage Examples
```tsx
// Account type = Color
<div className="bg-brand-blue">Checking Account</div>
<div className="bg-purple-600">Savings Account</div>
<div className="bg-brand-red">Credit Card</div>

// State = Color
<span className="text-green-500">+£125.00</span>
<span className="text-brand-red">-£45.00</span>
<span className="text-text-muted">Pending</span>

// Action priority = Color
<button className="bg-brand-navy">Primary Action</button>
<button className="bg-brand-blue">Secondary Action</button>
<button className="bg-brand-red">Delete</button>
```

### Rule
Don't use colors randomly. Every color choice should have semantic meaning.

---

## 4. 🔘 Button Hierarchy is Sacred

### Principle
**Button visual weight indicates importance.**

### Hierarchy (Top to Bottom)

**1. Primary - Navy Pill**
```tsx
<button className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90">
  Continue Payment
</button>
```
- Most important action on screen
- Typically only ONE per view
- Full rounded (pill shape)
- Navy background

**2. Secondary - Blue Rounded**
```tsx
<button className="bg-brand-blue text-white py-2 px-4 rounded-xl">
  View Details
</button>
```
- Secondary actions
- Multiple allowed
- Rounded corners (12px)
- Blue background

**3. Tertiary - Ghost/Outline**
```tsx
<button className="bg-offwhite-50 text-text-secondary py-2 px-4 rounded-xl hover:text-text-primary">
  Cancel
</button>
```
- Less important actions
- Cancel, dismiss, etc.
- Light background
- No bold colors

**4. Text/Link**
```tsx
<button className="text-brand-blue text-sm">
  Learn More
</button>
```
- Lowest priority
- Navigation links
- Helper actions
- No background

**5. Destructive - Red Pill**
```tsx
<button className="bg-brand-red text-white py-3 px-6 rounded-full hover:opacity-90">
  Delete Account
</button>
```
- Dangerous actions
- Same weight as primary
- Red background

### Rules
1. Only ONE primary button per screen/sheet
2. Primary button should be the user's likely next action
3. Destructive buttons stand alone (confirm first)
4. Don't mix styles at same hierarchy level

---

## 5. 📱 Mobile-First Always

### Principle
**Design for mobile, enhance for desktop.**

### Screen Targets
- iPhone SE: 375px width (minimum)
- iPhone Pro: 390px width (common)
- iPhone Pro Max: 428px width (maximum)

### Touch Targets
```tsx
// ✅ CORRECT - 44px minimum
<button className="py-3 px-4 h-[44px]">

// ❌ WRONG - Too small
<button className="py-1 px-2 text-xs">
```

### Spacing for Touch
```tsx
// ✅ CORRECT - Adequate spacing
<div className="flex flex-col gap-4">
  <button>Action 1</button>
  <button>Action 2</button>
</div>

// ❌ WRONG - Too tight
<div className="flex flex-col gap-1">
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

### Bottom Reachable
```tsx
// ✅ CORRECT - Actions at bottom
<div className="flex flex-col min-h-screen">
  <div className="flex-1">{/* Content */}</div>
  <div className="p-6 bg-white">
    <button className="w-full">Primary Action</button>
  </div>
</div>
```

### Container Width
```tsx
// ✅ CORRECT - Max width for mobile
<div className="max-w-md mx-auto">
  {/* Content */}
</div>
```

### Rule
Test every component at 375px width. If it breaks, fix it.

---

## 6. 🎴 Card Patterns are Consistent

### Principle
**All cards share core characteristics with purpose-based variations.**

### Base Card
```tsx
<div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
  {/* Content */}
</div>
```

**Core Characteristics:**
- White background
- 16px border radius (rounded-2xl)
- 20px padding (p-5)
- Subtle shadow

### Card Variations

**1. Attention Card (Left Border)**
```tsx
<div className="bg-white rounded-2xl p-5 border-l-4 border-blue-300 shadow-[--shadow-card-sm]">
  {/* Needs attention */}
</div>
```
Border colors:
- Info: `border-blue-300`
- Warning: `border-orange-400`
- Success: `border-green-500`
- Danger: `border-brand-red`

**2. Interactive Card (Hover State)**
```tsx
<div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm] hover:shadow-[--shadow-card-md] transition-shadow cursor-pointer">
  {/* Clickable card */}
</div>
```

**3. Elevated Card (More Shadow)**
```tsx
<div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-lg]">
  {/* Important/elevated content */}
</div>
```

**4. Floating Card (Bottom Sheets, Modals)**
```tsx
<div className="bg-white rounded-t-3xl p-6 shadow-[--shadow-floating]">
  {/* Floating over content */}
</div>
```

### Icon Containers in Cards
```tsx
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
  <Icon className="text-brand-blue" size={24} />
</div>
```

**Background by Purpose:**
- Blue actions: `bg-blue-50` + `text-brand-blue`
- Success: `bg-emerald-50` + `text-emerald-600`
- Warning: `bg-amber-50` + `text-amber-600`
- Savings: `bg-purple-50` + `text-purple-600`

### Rule
Cards should feel related but not identical. Use variations purposefully.

---

## 7. ⚡ Interactions Feel Smooth

### Principle
**All interactions should have transitions. Nothing should snap.**

### Standard Transition
```tsx
className="transition-all duration-300"
```

### Common Transitions

**Opacity (Hover)**
```tsx
<button className="hover:opacity-90 transition-opacity">
```

**Colors**
```tsx
<button className="transition-colors hover:bg-brand-blue/90">
```

**Transform (Subtle)**
```tsx
<div className="hover:scale-[1.02] transition-transform">
```

**Shadows (Cards)**
```tsx
<div className="shadow-[--shadow-card-sm] hover:shadow-[--shadow-card-md] transition-shadow">
```

### Motion Library (For Complex Animations)
```tsx
import { motion } from 'motion/react';

// Slide up
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

### Timing
- **Fast (200ms)**: Small elements, icons, text
- **Medium (300ms)**: Cards, buttons, most UI
- **Slow (500ms)**: Large modals, page transitions

### Rule
Every interactive element needs a transition. Duration should match element size.

---

## 8. 📐 Spacing Creates Breathing Room

### Principle
**Generous spacing improves clarity and reduces cognitive load.**

### Spacing Scale Application

**Within Components (Tight):**
```tsx
<div className="space-y-2">  {/* 8px - Related items */}
  <label>Label</label>
  <input />
</div>
```

**Between Components (Medium):**
```tsx
<div className="space-y-4">  {/* 16px - Component groups */}
  <Card />
  <Card />
</div>
```

**Between Sections (Loose):**
```tsx
<div className="space-y-6">  {/* 24px - Major sections */}
  <Section />
  <Section />
</div>
```

### Padding Guidelines

**Small Elements:**
```tsx
<button className="px-4 py-2">  {/* 16px/8px */}
```

**Medium Elements:**
```tsx
<div className="p-5">  {/* 20px all sides - Cards */}
```

**Large Elements:**
```tsx
<div className="p-6">  {/* 24px all sides - Sheets */}
```

**Screen Edges:**
```tsx
<div className="px-6">  {/* 24px horizontal padding */}
```

### Rule
When in doubt, add more space. Cramped UIs feel cheap.

---

## 9. 🎯 One Primary Action Per Screen

### Principle
**Users should always know what to do next.**

### Good Example
```tsx
<div className="flex flex-col min-h-screen">
  {/* Content with information */}
  <div className="flex-1 p-6">
    <h2>Review Transaction</h2>
    <p>Details...</p>
  </div>
  
  {/* ONE clear primary action */}
  <div className="p-6 bg-white">
    <button className="w-full bg-brand-navy text-white py-3 rounded-full">
      Confirm Payment
    </button>
  </div>
</div>
```

### Bad Example
```tsx
<div className="p-6">
  <button className="bg-brand-navy">Pay Now</button>
  <button className="bg-brand-navy">Schedule Payment</button>
  <button className="bg-brand-navy">Save Draft</button>
</div>
```
❌ Three primary buttons = confusion

### Correct Multiple Actions
```tsx
<div className="p-6 space-y-3">
  {/* Primary */}
  <button className="w-full bg-brand-navy text-white py-3 rounded-full">
    Pay Now
  </button>
  
  {/* Secondary */}
  <button className="w-full bg-brand-blue text-white py-2 rounded-xl">
    Schedule Payment
  </button>
  
  {/* Tertiary */}
  <button className="w-full bg-offwhite-50 text-text-secondary py-2 rounded-xl">
    Save Draft
  </button>
</div>
```
✅ Clear hierarchy = clear choice

### Rule
If you have multiple primary buttons, one of them should be secondary.

---

## 10. 🧩 Composition Over Customization

### Principle
**Build with base components, don't rebuild base components.**

### Use Base UI Components
```tsx
// ✅ CORRECT - Use existing
import { Button } from './components/ui/button';
import { Sheet } from './components/ui/sheet';

<Button variant="default">Click Me</Button>
<Sheet>...</Sheet>
```

```tsx
// ❌ WRONG - Rebuilding base components
<button className="inline-flex items-center justify-center...">
  Click Me
</button>
```

### Compose Complex Components
```tsx
// ✅ CORRECT - Compose from base
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

function FeatureCard() {
  return (
    <Card className="p-5">
      <h3>Feature Title</h3>
      <p>Feature description</p>
      <Button>Take Action</Button>
    </Card>
  );
}
```

### When to Create New Components
- ✅ Feature-specific layouts
- ✅ Complex compositions
- ✅ Reusable patterns unique to your feature
- ❌ Base UI elements (buttons, inputs, etc.)
- ❌ Simple wrappers around existing components

### Rule
Check `/components/ui/` first. If it exists, use it. Don't reinvent.

---

## 11. 📊 Data Visualization is Clear

### Principle
**Charts should tell a story at a glance.**

### Color Usage in Charts

**Lines/Bars:**
```tsx
// Positive trends
<Line stroke="#1EB980" strokeWidth={2} />  // Green

// Negative trends
<Line stroke="#ED0322" strokeWidth={2} />  // Red

// Neutral/Primary
<Line stroke="#0041AD" strokeWidth={2} />  // Blue

// Forecast/Predicted
<Line stroke="#6995E6" strokeWidth={2} strokeDasharray="5 5" />  // Light blue, dashed
```

**Gradients:**
```tsx
<defs>
  <linearGradient id="positive">
    <stop offset="0%" stopColor="#1EB980" stopOpacity={0.2} />
    <stop offset="100%" stopColor="#1EB980" stopOpacity={0} />
  </linearGradient>
</defs>
<Area fill="url(#positive)" />
```

### Chart Guidelines
- Keep it simple (max 3-4 data series)
- Use color meaningfully (green = good, red = bad)
- Label axes clearly
- Show tooltips on hover
- Round corners on bars: `radius={[8, 8, 0, 0]}`

### Rule
If the chart is confusing, simplify it. Don't add more colors/lines.

---

## 12. ♿ Accessibility is Non-Negotiable

### Principle
**Everyone should be able to use the app.**

### Color Contrast
```tsx
// ✅ CORRECT - Sufficient contrast
<div className="bg-brand-navy text-white">  // High contrast

// ❌ WRONG - Poor contrast
<div className="bg-gray-200 text-gray-300">  // Low contrast
```

All design tokens already meet WCAG AA standards.

### Focus States
```tsx
// ✅ CORRECT - Visible focus
<button className="focus:outline-none focus:ring-2 focus:ring-brand-blue">

// ❌ WRONG - No focus indicator
<button className="outline-none">
```

### Semantic HTML
```tsx
// ✅ CORRECT
<button onClick={handleClick}>Click</button>
<nav>...</nav>
<main>...</main>

// ❌ WRONG
<div onClick={handleClick}>Click</div>
<div>...</div> {/* Should be nav */}
```

### Alt Text
```tsx
// ✅ CORRECT
<img src="..." alt="User profile avatar" />

// ❌ WRONG
<img src="..." />
```

### Rule
Test with keyboard navigation. If you can't use it without a mouse, fix it.

---

## 13. 🧪 Consistency Compounds

### Principle
**Small inconsistencies add up to a bad experience.**

### Examples of Consistency

**Spacing:**
```tsx
// ✅ Consistent card spacing
<Card className="p-5">...</Card>
<Card className="p-5">...</Card>

// ❌ Inconsistent spacing
<Card className="p-5">...</Card>
<Card className="p-6">...</Card>
```

**Button Sizing:**
```tsx
// ✅ Consistent primary buttons
<button className="py-3 px-6">Action 1</button>
<button className="py-3 px-6">Action 2</button>

// ❌ Different sizes
<button className="py-3 px-6">Action 1</button>
<button className="py-2 px-4">Action 2</button>
```

**Border Radius:**
```tsx
// ✅ Consistent radius for cards
<div className="rounded-2xl">Card 1</div>
<div className="rounded-2xl">Card 2</div>

// ❌ Mixed radius
<div className="rounded-2xl">Card 1</div>
<div className="rounded-lg">Card 2</div>
```

### Rule
If you're not sure, copy the pattern from an existing component.

---

## 14. 🚦 Progressive Disclosure

### Principle
**Show what's needed, hide what's not.**

### Good Example - Filters
```tsx
function Filters() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  return (
    <>
      {/* Basic filters always visible */}
      <div>
        <FilterChip>All</FilterChip>
        <FilterChip>Recent</FilterChip>
      </div>
      
      {/* Advanced filters hidden by default */}
      {showAdvanced && (
        <div>
          <DateRangePicker />
          <CategorySelector />
          <AmountRange />
        </div>
      )}
      
      <button onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
      </button>
    </>
  );
}
```

### Bottom Sheets for Details
```tsx
// List view - minimal info
<div className="p-4" onClick={() => setShowSheet(true)}>
  <h3>Transaction Name</h3>
  <p>£45.00</p>
</div>

// Sheet - full details
<Sheet open={showSheet}>
  <DetailedTransactionView />
</Sheet>
```

### Rule
Start with minimal information. Let users request more.

---

## 15. 🎭 Feedback is Immediate

### Principle
**Every action should have a visible reaction.**

### Loading States
```tsx
<button disabled={isLoading}>
  {isLoading ? 'Processing...' : 'Confirm Payment'}
</button>
```

### Success Feedback
```tsx
import { toast } from 'sonner';

toast.success('Payment sent successfully');
```

### Error Feedback
```tsx
toast.error('Payment failed. Please try again.');
```

### Optimistic Updates
```tsx
// Update UI immediately, revert if API fails
const handleAction = async () => {
  setData(newData);  // Optimistic
  try {
    await api.update(newData);
  } catch (error) {
    setData(oldData);  // Revert
    toast.error('Update failed');
  }
};
```

### Rule
Never leave users wondering if their action worked.

---

## 🎓 Summary Checklist

Before submitting any component:

- [ ] All colors are design tokens (no arbitrary values)
- [ ] Typography uses default sizes (no overrides unless necessary)
- [ ] Spacing uses design tokens (xs, sm, md, lg, xl, xxl)
- [ ] Button hierarchy is correct (one primary per screen)
- [ ] Touch targets are 44px minimum
- [ ] Cards follow established patterns
- [ ] Transitions are smooth (300ms standard)
- [ ] Color choices have semantic meaning
- [ ] Base UI components are used (not rebuilt)
- [ ] Accessibility standards met (contrast, focus, semantic HTML)
- [ ] Mobile-first approach (tested at 375px)
- [ ] Loading/error states implemented
- [ ] Consistent with existing components

---

*These principles ensure every feature feels like part of the same cohesive product, not a collection of disconnected pieces.*
