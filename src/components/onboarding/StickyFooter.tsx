import { ReactNode, useEffect, useState } from 'react';

interface StickyFooterProps {
  children: ReactNode;
  className?: string;
}

export function StickyFooter({ children, className = '' }: StickyFooterProps) {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Check if content overflows viewport
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight + 1;
      setHasScroll(isScrollable);
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    // Observer for dynamic content changes
    const observer = new MutationObserver(checkScroll);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true 
    });

    return () => {
      window.removeEventListener('resize', checkScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 
        Spacer Element (Mobile Only)
        Occupies space in the document flow to prevent content from being hidden behind the fixed footer.
      */}
      <div className="opacity-0 pointer-events-none md:hidden px-6 py-4 mt-auto" aria-hidden="true">
        {children}
      </div>

      {/* 
        Fixed Footer
        - Mobile: Fixed to bottom, matches app background (offwhite-50)
        - Desktop: Static, transparent, no borders
        - No rounded corners on container (straight line top)
        - Top border #E6E9ED only when scrollable
      */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-50
        bg-offwhite-50
        px-6 py-4 pb-8 md:pb-4
        transition-all duration-300
        md:static md:bg-transparent md:border-0 md:p-0 md:mt-8
        border-t
        ${hasScroll ? 'border-[#E6E9ED]' : 'border-transparent'}
        ${className}
      `}>
        <div className="w-full max-w-xl mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
