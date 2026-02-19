# Component Patterns & Examples

## 📚 Purpose

This guide provides **copy-paste ready** code examples for common component patterns. Use these as starting points for your features.

---

## 🎴 Cards

### Basic Information Card
```tsx
function InfoCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
      <h3>Card Title</h3>
      <p className="mt-2">
        Card content and description goes here.
      </p>
    </div>
  );
}
```

### Card with Icon Container
```tsx
import { Wallet } from 'lucide-react';

function FeatureCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
        <Wallet className="text-brand-blue" size={24} />
      </div>
      <h3>Feature Name</h3>
      <p className="mt-2 text-text-secondary">
        Feature description
      </p>
    </div>
  );
}
```

### Attention Card (Left Border)
```tsx
function AttentionCard({ type = 'info' }) {
  const borderColors = {
    info: 'border-blue-300',
    warning: 'border-orange-400',
    success: 'border-green-500',
    danger: 'border-brand-red',
  };

  return (
    <div className={`bg-white rounded-2xl p-5 border-l-4 ${borderColors[type]} shadow-[--shadow-card-sm]`}>
      <h3 className="font-semibold">Attention Needed</h3>
      <p className="mt-2 text-sm text-text-secondary">
        This requires your attention
      </p>
      <button className="mt-3 text-sm text-brand-blue">
        Take Action →
      </button>
    </div>
  );
}
```

### Interactive Card (Clickable)
```tsx
function ClickableCard({ onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm] hover:shadow-[--shadow-card-md] transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3>Item Name</h3>
          <p className="text-sm text-text-secondary mt-1">
            Item description
          </p>
        </div>
        <ChevronRight className="text-text-muted" size={20} />
      </div>
    </div>
  );
}
```

### Card with Action Buttons
```tsx
function ActionCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm]">
      <h3>Confirm Action</h3>
      <p className="mt-2 text-text-secondary">
        Are you sure you want to proceed?
      </p>
      
      <div className="flex gap-3 mt-4">
        <button className="flex-1 py-2 px-4 rounded-xl bg-brand-blue text-white">
          Confirm
        </button>
        <button className="flex-1 py-2 px-4 rounded-xl bg-offwhite-50 text-text-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
}
```

---

## 🔘 Buttons

### Primary Button
```tsx
<button className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
  Primary Action
</button>
```

### Primary Button (Full Width)
```tsx
<button className="w-full bg-brand-navy text-white py-3 rounded-full hover:opacity-90 transition-opacity">
  Continue
</button>
```

### Secondary Button
```tsx
<button className="bg-brand-blue text-white py-2 px-4 rounded-xl hover:opacity-90 transition-opacity">
  Secondary Action
</button>
```

### Tertiary/Ghost Button
```tsx
<button className="bg-offwhite-50 text-text-secondary py-2 px-4 rounded-xl hover:text-text-primary transition-colors">
  Tertiary Action
</button>
```

### Text/Link Button
```tsx
<button className="text-brand-blue text-sm hover:opacity-80 transition-opacity">
  Learn More →
</button>
```

### Destructive Button
```tsx
<button className="bg-brand-red text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
  Delete Item
</button>
```

### Button with Icon
```tsx
import { Plus } from 'lucide-react';

<button className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
  <Plus size={20} />
  Add New
</button>
```

### Icon-Only Button
```tsx
import { X } from 'lucide-react';

<button className="w-10 h-10 rounded-full bg-offwhite-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
  <X size={20} className="text-text-secondary" />
</button>
```

### Loading Button
```tsx
function LoadingButton({ isLoading, onClick, children }) {
  return (
    <button 
      onClick={onClick}
      disabled={isLoading}
      className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
```

---

## 📋 Forms

### Input Field
```tsx
function InputField({ label, value, onChange, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="block">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-divider bg-white text-text-primary focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
      />
    </div>
  );
}
```

### Input with Icon
```tsx
import { Search } from 'lucide-react';

function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-divider bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
      />
    </div>
  );
}
```

### Select Dropdown
```tsx
function SelectField({ label, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <label className="block">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border border-divider bg-white text-text-primary focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Amount Input
```tsx
function AmountInput({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="block">Amount</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary font-semibold">
          £
        </span>
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder="0.00"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-divider bg-white text-text-primary text-2xl font-semibold focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
        />
      </div>
    </div>
  );
}
```

### Form with Validation
```tsx
import { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.name ? 'border-brand-red' : 'border-divider'
          } bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all`}
        />
        {errors.name && (
          <p className="text-brand-red text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <button type="submit" className="w-full bg-brand-navy text-white py-3 rounded-full">
        Submit
      </button>
    </form>
  );
}
```

---

## 📱 Bottom Sheets

### Basic Bottom Sheet
```tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';
import { useState } from 'react';

function BottomSheetExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Sheet
      </button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="rounded-t-3xl">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
          </SheetHeader>
          
          <div className="mt-6">
            <p>Sheet content goes here</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
```

### Bottom Sheet with Actions
```tsx
function ActionSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="bottom" className="rounded-t-3xl">
        <SheetHeader>
          <SheetTitle>Select Action</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-3">
          <button 
            onClick={() => {/* action */}}
            className="w-full py-3 px-4 rounded-xl bg-white border border-divider text-left hover:bg-offwhite-50 transition-colors"
          >
            <span className="font-medium">Action 1</span>
          </button>
          
          <button 
            onClick={() => {/* action */}}
            className="w-full py-3 px-4 rounded-xl bg-white border border-divider text-left hover:bg-offwhite-50 transition-colors"
          >
            <span className="font-medium">Action 2</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-offwhite-50 text-text-secondary rounded-xl"
          >
            Cancel
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

### Bottom Sheet with Form
```tsx
function FormSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    // Process form
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="bottom" className="rounded-t-3xl">
        <SheetHeader>
          <SheetTitle>Add New Item</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          <div>
            <label className="block mb-2">Item Name</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-divider bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              placeholder="Enter name"
            />
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full bg-brand-navy text-white py-3 rounded-full"
          >
            Add Item
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

---

## 🎛️ Filters & Chips

### Filter Chips
```tsx
function FilterChips() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'recent', label: 'Recent' },
    { id: 'pending', label: 'Pending' },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
            activeFilter === filter.id
              ? 'bg-brand-blue text-white'
              : 'bg-white text-text-primary border border-divider'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
```

### Multi-Select Filters
```tsx
function MultiSelectFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = ['Category 1', 'Category 2', 'Category 3'];

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => toggleFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm transition-all ${
            selectedFilters.includes(filter)
              ? 'bg-brand-blue text-white'
              : 'bg-offwhite-50 text-text-primary'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
```

---

## 📊 Lists

### Simple List
```tsx
function SimpleList({ items }) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-xl p-4 shadow-[--shadow-card-sm]">
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-text-secondary mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### List with Icons
```tsx
import { ChevronRight } from 'lucide-react';

function IconList({ items, onItemClick }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[--shadow-card-sm]">
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => onItemClick(item)}
          className={`flex items-center justify-between p-4 cursor-pointer hover:bg-offwhite-50 transition-colors ${
            index !== items.length - 1 ? 'border-b border-divider' : ''
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <item.Icon className="text-brand-blue" size={20} />
            </div>
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.subtitle}</p>
            </div>
          </div>
          <ChevronRight className="text-text-muted" size={20} />
        </div>
      ))}
    </div>
  );
}
```

### Grid List
```tsx
function GridList({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-2xl p-4 shadow-[--shadow-card-sm]">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
            <item.Icon className="text-brand-blue" size={24} />
          </div>
          <h4 className="font-medium">{item.title}</h4>
          <p className="text-sm text-text-secondary mt-1">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🎯 Quick Actions

### Quick Action Grid (4 columns)
```tsx
import { ArrowUp, ArrowDown, Plus, MoreHorizontal } from 'lucide-react';

function QuickActions() {
  const actions = [
    { icon: ArrowUp, label: 'Send', color: 'bg-blue-50 text-brand-blue' },
    { icon: ArrowDown, label: 'Receive', color: 'bg-purple-50 text-purple-600' },
    { icon: Plus, label: 'Add', color: 'bg-emerald-50 text-emerald-600' },
    { icon: MoreHorizontal, label: 'More', color: 'bg-amber-50 text-amber-600' },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 grid grid-cols-4 gap-4 shadow-[--shadow-floating]">
      {actions.map((action, index) => (
        <button key={index} className="flex flex-col items-center gap-2">
          <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
            <action.icon size={24} />
          </div>
          <span className="text-xs text-text-secondary">{action.label}</span>
        </button>
      ))}
    </div>
  );
}
```

### Quick Action List (Vertical)
```tsx
function QuickActionList() {
  const actions = [
    { icon: ArrowUp, label: 'Transfer Money', description: 'Send to another account' },
    { icon: Plus, label: 'Add Transaction', description: 'Manual entry' },
    { icon: Download, label: 'Export Statement', description: 'Download PDF or CSV' },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[--shadow-card-sm]">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`w-full flex items-center gap-4 p-4 text-left hover:bg-offwhite-50 transition-colors ${
            index !== actions.length - 1 ? 'border-b border-divider' : ''
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <action.icon className="text-brand-blue" size={24} />
          </div>
          <div>
            <h4 className="font-medium">{action.label}</h4>
            <p className="text-sm text-text-secondary">{action.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
```

---

## 📈 Progress & Status

### Progress Bar
```tsx
function ProgressBar({ progress, label }) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm">{label}</label>}
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-blue rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
```

### Segmented Progress Bar
```tsx
function SegmentedProgress({ segments }) {
  return (
    <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`h-full ${segment.color}`}
          style={{ width: `${segment.percentage}%` }}
        />
      ))}
    </div>
  );
}

// Usage:
<SegmentedProgress
  segments={[
    { percentage: 45, color: 'bg-brand-blue' },
    { percentage: 30, color: 'bg-purple-600' },
    { percentage: 25, color: 'bg-brand-red' },
  ]}
/>
```

### Status Badge
```tsx
function StatusBadge({ status, label }) {
  const colors = {
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    danger: 'bg-red-50 text-red-600',
    info: 'bg-blue-50 text-brand-blue',
    neutral: 'bg-gray-100 text-slate-600',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      {label}
    </span>
  );
}
```

---

## 🎨 Icon Containers

### Standard Icon Container
```tsx
import { Wallet } from 'lucide-react';

<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
  <Wallet className="text-brand-blue" size={24} />
</div>
```

### Icon Container Variants
```tsx
function IconContainers() {
  return (
    <div className="flex gap-4">
      {/* Blue */}
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
        <Icon className="text-brand-blue" size={24} />
      </div>

      {/* Purple (Savings) */}
      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
        <Icon className="text-purple-600" size={24} />
      </div>

      {/* Green (Success) */}
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
        <Icon className="text-emerald-600" size={24} />
      </div>

      {/* Amber (Warning) */}
      <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
        <Icon className="text-amber-600" size={24} />
      </div>

      {/* Navy (Brand) */}
      <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
        <Icon className="text-white" size={24} />
      </div>
    </div>
  );
}
```

---

## 🏗️ Layout Patterns

### Mobile Container
```tsx
function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-offwhite-50">
      <div className="max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}
```

### Header + Content + Footer
```tsx
function ScreenLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite-50">
      {/* Header */}
      <div className="bg-brand-navy px-6 pt-12 pb-8">
        <h1 className="text-white">Page Title</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6">
        <Card />
        <Card />
      </div>

      {/* Footer */}
      <div className="p-6 bg-white">
        <button className="w-full bg-brand-navy text-white py-3 rounded-full">
          Primary Action
        </button>
      </div>
    </div>
  );
}
```

### Section with Spacing
```tsx
function SectionLayout() {
  return (
    <div className="px-6 py-6 space-y-6">
      <section>
        <h2 className="mb-4">Section Title</h2>
        <div className="space-y-4">
          <Card />
          <Card />
        </div>
      </section>

      <section>
        <h2 className="mb-4">Another Section</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
```

---

## 🔔 Notifications

### Toast Notifications
```tsx
import { toast } from 'sonner';

// Success
toast.success('Action completed successfully');

// Error
toast.error('Something went wrong');

// Info
toast.info('Here is some information');

// Warning
toast.warning('Please review this');

// Custom
toast('Custom message', {
  description: 'Additional details here',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo'),
  },
});
```

### In-App Notification Banner
```tsx
import { X } from 'lucide-react';

function NotificationBanner({ onDismiss }) {
  return (
    <div className="bg-blue-50 border-l-4 border-brand-blue px-4 py-3 rounded-r-xl flex items-start justify-between gap-3">
      <div>
        <h4 className="font-semibold text-brand-blue">Notification Title</h4>
        <p className="text-sm text-text-secondary mt-1">
          Notification message goes here
        </p>
      </div>
      <button onClick={onDismiss} className="flex-shrink-0">
        <X size={20} className="text-text-muted" />
      </button>
    </div>
  );
}
```

---

## 🎭 Loading States

### Skeleton Loading
```tsx
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm] animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
```

### Loading Spinner
```tsx
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
```

### Loading Overlay
```tsx
function LoadingOverlay({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
```

---

## 📊 Empty States

### Empty State
```tsx
import { Inbox } from 'lucide-react';

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
        <Inbox className="text-text-muted" size={32} />
      </div>
      <h3 className="text-text-primary mb-2">No Items Yet</h3>
      <p className="text-text-secondary text-sm mb-6">
        Get started by adding your first item
      </p>
      <button className="bg-brand-navy text-white py-3 px-6 rounded-full">
        Add Item
      </button>
    </div>
  );
}
```

---

## 🎯 Complete Feature Example

### Simple Feature Component
```tsx
import { useState } from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';
import { toast } from 'sonner';

function MyFeature() {
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
  ]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsSheetOpen(true);
  };

  const handleAction = () => {
    toast.success('Action completed');
    setIsSheetOpen(false);
  };

  return (
    <div className="min-h-screen bg-offwhite-50">
      {/* Header */}
      <div className="bg-brand-navy px-6 pt-12 pb-8">
        <h1 className="text-white">My Feature</h1>
        <p className="text-white/70 text-sm mt-2">
          Feature description
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-5 grid grid-cols-4 gap-4 shadow-[--shadow-floating]">
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Plus className="text-brand-blue" size={24} />
            </div>
            <span className="text-xs text-text-secondary">Add</span>
          </button>
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {items.map(item => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm] cursor-pointer hover:shadow-[--shadow-card-md] transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3>{item.title}</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="text-text-muted" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="bottom" className="rounded-t-3xl">
          <SheetHeader>
            <SheetTitle>{selectedItem?.title}</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            <p className="text-text-secondary">
              {selectedItem?.description}
            </p>

            <button
              onClick={handleAction}
              className="w-full bg-brand-navy text-white py-3 rounded-full"
            >
              Take Action
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MyFeature;
```

---

*Copy these patterns and adapt them to your specific needs. Always maintain the established design system.*
