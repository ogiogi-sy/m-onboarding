import { MapPin, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Branch } from './types';

interface BranchSelectorProps {
  onSelect: (branch: Branch) => void;
  onSaveExit: () => void;
}

export function BranchSelector({ onSelect, onSaveExit }: BranchSelectorProps) {
  const [step, setStep] = useState<'search' | 'confirm'>('search');
  const [query, setQuery] = useState('EC2A 4NE');
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  const mockBranch: Branch = {
    id: 'bham',
    name: 'Birmingham',
    address: '85-88 High Street, Birmingham, B4 7TE',
    distance: '0.5 miles'
  };

  const handleSearch = () => {
    // Mock search
    setSelectedBranch(mockBranch);
    setStep('confirm');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center py-6">
        <div className="w-16 h-16 bg-offwhite-50 rounded-full flex items-center justify-center">
          <MapPin className="text-brand-blue" size={32} />
        </div>
      </div>

      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Choose your preferred Metro Bank branch</h2>
        <p className="text-text-secondary">Select the branch you'd like to visit for in-person support</p>
      </div>

      {step === 'search' ? (
        <div className="bg-white rounded-[20px] p-5 shadow-sm mt-6">
          <h3 className="font-bold text-text-primary mb-2">Search for a branch</h3>
          <p className="text-sm text-text-secondary mb-4">Enter your postcode or a location to find nearby branches</p>

          <label className="text-xs font-bold text-text-primary mb-2 block">Search by location or postcode</label>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-divider bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
            />
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-brand-navy text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Search branches
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
           <div className="bg-blue-50/50 rounded-2xl p-5 border border-brand-blue/20 flex gap-4">
             <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 text-brand-blue">
               <CheckCircle2 size={24} />
             </div>
             <div>
               <h3 className="font-bold text-text-primary">{selectedBranch?.name}</h3>
               <p className="text-sm text-text-secondary mt-1">{selectedBranch?.address}</p>
               
               <div className="mt-4 pt-4 border-t border-blue-200">
                 <p className="text-xs font-bold text-text-primary mb-1">Good to know:</p>
                 <p className="text-xs text-text-secondary leading-relaxed">
                   You can visit any Metro Bank branch for support, but this is the one we'll recommend for appointments and collections.
                 </p>
               </div>
             </div>
           </div>

           <button 
             onClick={() => setStep('search')}
             className="w-full py-3 border border-brand-navy text-brand-navy rounded-full font-semibold hover:bg-offwhite-50 transition-colors"
           >
             Choose a different branch
           </button>
        </div>
      )}

      {step === 'confirm' && (
        <div className="flex gap-4 pt-8">
           <button 
             onClick={onSaveExit}
             className="flex-1 py-3 px-6 rounded-full border border-brand-navy text-brand-navy font-semibold hover:bg-offwhite-50 transition-colors"
           >
             Save & Exit
           </button>
           <button 
             onClick={() => selectedBranch && onSelect(selectedBranch)}
             className="flex-1 py-3 px-6 rounded-full bg-brand-navy text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20"
           >
             Continue
             <ChevronRight size={20} />
           </button>
        </div>
      )}
    </div>
  );
}

import { CheckCircle2 } from 'lucide-react';
