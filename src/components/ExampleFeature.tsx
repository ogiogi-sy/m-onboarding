import { useState } from 'react';
import { Plus, Settings, Download, MoreHorizontal, ChevronRight, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { toast } from 'sonner';

/**
 * ExampleFeature Component
 * 
 * This component demonstrates all the key patterns from the design system:
 * 
 * PATTERNS DEMONSTRATED:
 * ✅ Hero section (navy background)
 * ✅ Quick action grid (4 columns)
 * ✅ Filter chips (active/inactive states)
 * ✅ Card lists with hover states
 * ✅ Bottom sheets for details
 * ✅ Icon containers with color variants
 * ✅ Button hierarchy (primary, secondary, ghost)
 * ✅ Toast notifications
 * ✅ Empty states
 * ✅ Proper spacing and typography
 * 
 * USE THIS AS A REFERENCE:
 * - Copy patterns from here for your features
 * - See COMPONENT_PATTERNS.md for more examples
 * - Follow DESIGN_PRINCIPLES.md for consistency
 * 
 * TO CUSTOMIZE:
 * 1. Replace mock data with your actual data
 * 2. Update action handlers with your logic
 * 3. Modify content while keeping design patterns
 * 4. Maintain design token usage
 */

// Mock data - Replace with your actual data
const mockItems = [
  { id: 1, title: 'Example Item 1', description: 'This demonstrates a list item', category: 'Category A', value: '£125.00' },
  { id: 2, title: 'Example Item 2', description: 'Click to see the bottom sheet', category: 'Category B', value: '£89.50' },
  { id: 3, title: 'Example Item 3', description: 'Shows proper card styling', category: 'Category A', value: '£234.00' },
];

export function ExampleFeature() {
  // State management
  const [selectedItem, setSelectedItem] = useState<typeof mockItems[0] | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [items] = useState(mockItems);

  // Handlers
  const handleItemClick = (item: typeof mockItems[0]) => {
    setSelectedItem(item);
    setIsSheetOpen(true);
  };

  const handleQuickAction = (action: string) => {
    toast.success(`${action} clicked - Replace with your logic`);
  };

  const handlePrimaryAction = () => {
    toast.success('Primary action completed!');
    setIsSheetOpen(false);
  };

  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-offwhite-50">
      {/* 
        HERO SECTION 
        - Navy background (--brand-primary-navy)
        - White text
        - Icon container with semi-transparent background
      */}
      <div className="bg-brand-navy px-6 pt-12 pb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-white">Example Feature</h1>
            <p className="text-white/70 text-sm mt-2">
              This demonstrates the design system patterns
            </p>
          </div>
          
          {/* Icon button - white background with low opacity */}
          <button className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
            <Settings className="text-white" size={20} />
          </button>
        </div>

        {/* Stats Row - Shows data presentation in hero */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-white/70 text-sm">Total Items</p>
            <p className="text-white text-2xl font-semibold mt-1">{items.length}</p>
          </div>
          <div>
            <p className="text-white/70 text-sm">Total Value</p>
            <p className="text-white text-2xl font-semibold mt-1">£448.50</p>
          </div>
        </div>
      </div>

      {/* 
        QUICK ACTIONS GRID 
        - Floating card (shadow-floating)
        - 4 column grid
        - Icon containers with color-coded backgrounds
      */}
      <div className="px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-5 grid grid-cols-4 gap-4 shadow-[--shadow-floating]">
          <button 
            onClick={() => handleQuickAction('Add')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Plus className="text-brand-blue" size={24} />
            </div>
            <span className="text-xs text-text-secondary">Add</span>
          </button>

          <button 
            onClick={() => handleQuickAction('Download')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
              <Download className="text-purple-600" size={24} />
            </div>
            <span className="text-xs text-text-secondary">Export</span>
          </button>

          <button 
            onClick={() => handleQuickAction('Settings')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Settings className="text-emerald-600" size={24} />
            </div>
            <span className="text-xs text-text-secondary">Settings</span>
          </button>

          <button 
            onClick={() => handleQuickAction('More')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <MoreHorizontal className="text-amber-600" size={24} />
            </div>
            <span className="text-xs text-text-secondary">More</span>
          </button>
        </div>
      </div>

      {/* 
        MAIN CONTENT SECTION 
        - Proper spacing (px-6 py-6 space-y-6)
      */}
      <div className="px-6 py-6 space-y-6">
        {/* 
          FILTER CHIPS 
          - Active state: brand-blue background
          - Inactive state: white background with border
        */}
        <div>
          <h2 className="mb-4">Filter Items</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'Category A', 'Category B'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-text-primary border border-divider'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* 
          ITEMS LIST 
          - Cards with hover states
          - Proper shadow (shadow-card-sm)
          - Chevron for navigation affordance
        */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2>Items</h2>
            <span className="text-sm text-text-muted">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <div className="space-y-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="bg-white rounded-2xl p-5 shadow-[--shadow-card-sm] hover:shadow-[--shadow-card-md] transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3>{item.title}</h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {item.description}
                      </p>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-medium mt-3">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <p className="font-semibold text-text-primary">
                        {item.value}
                      </p>
                      <ChevronRight className="text-text-muted flex-shrink-0" size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="bg-white rounded-2xl p-12 text-center shadow-[--shadow-card-sm]">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Plus className="text-text-muted" size={32} />
              </div>
              <h3 className="mb-2">No items found</h3>
              <p className="text-sm text-text-secondary mb-6">
                Try adjusting your filters
              </p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* 
          INFO CARD WITH LEFT BORDER 
          - Attention card pattern
          - Blue border for info
        */}
        <div className="bg-white rounded-2xl p-5 border-l-4 border-blue-300 shadow-[--shadow-card-sm]">
          <h3 className="font-semibold text-brand-blue mb-2">
            💡 Using This Template
          </h3>
          <p className="text-sm text-text-secondary mb-3">
            This component demonstrates all key patterns. Copy what you need and customize for your feature.
          </p>
          <button 
            onClick={() => toast.info('Check out /COMPONENT_PATTERNS.md for more examples')}
            className="text-sm text-brand-blue font-medium"
          >
            View Documentation →
          </button>
        </div>
      </div>

      {/* 
        BOTTOM SHEET 
        - Slides up from bottom
        - Rounded top corners
        - Shows item details
        - Button hierarchy (primary + tertiary)
      */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="bottom" className="rounded-t-3xl">
          {/* Close button */}
          <button
            onClick={() => setIsSheetOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-offwhite-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-text-secondary" />
          </button>

          <SheetHeader>
            <SheetTitle>{selectedItem?.title}</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Item Details */}
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Description</label>
                <p className="text-text-secondary">
                  {selectedItem?.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Category</label>
                  <p className="text-text-primary font-medium">
                    {selectedItem?.category}
                  </p>
                </div>
                <div>
                  <label className="block mb-1">Value</label>
                  <p className="text-text-primary font-medium">
                    {selectedItem?.value}
                  </p>
                </div>
              </div>
            </div>

            {/* 
              BUTTON HIERARCHY 
              - Primary button (navy pill)
              - Tertiary button (ghost)
            */}
            <div className="space-y-3">
              {/* Primary Action */}
              <button
                onClick={handlePrimaryAction}
                className="w-full bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
              >
                Take Primary Action
              </button>

              {/* Secondary Action */}
              <button
                onClick={() => toast.info('Secondary action clicked')}
                className="w-full bg-brand-blue text-white py-2 px-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                Secondary Action
              </button>

              {/* Tertiary/Cancel */}
              <button
                onClick={() => setIsSheetOpen(false)}
                className="w-full bg-offwhite-50 text-text-secondary py-2 px-4 rounded-xl hover:text-text-primary transition-colors"
              >
                Cancel
              </button>
            </div>

            {/* Info message */}
            <p className="text-text-muted text-sm text-center">
              This demonstrates the bottom sheet pattern with proper button hierarchy
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
