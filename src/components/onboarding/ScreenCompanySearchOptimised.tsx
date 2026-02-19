import { useState } from 'react';
import { Search, Building, ChevronRight, Info } from 'lucide-react';
import { Company } from './types';
import { StickyFooter } from './StickyFooter';

interface ScreenCompanySearchOptimisedProps {
  onSelect: (company: Company) => void;
}

export function ScreenCompanySearchOptimised({ onSelect }: ScreenCompanySearchOptimisedProps) {
  const [query, setQuery] = useState('Metro Bank'); // Pre-filled
  const [hasSearched, setHasSearched] = useState(false);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  // Mock results
  const mockResults: Company[] = [
    {
      name: 'METRO BANK PLC',
      number: '10261677',
      address: 'One Southampton Row, London, WC1B 5HA',
      status: 'Active',
      incorporationDate: '2016-06-20'
    },
    {
      name: 'METRO BANK HOLDINGS',
      number: '06419578',
      address: 'One Southampton Row, London, WC1B 5HA',
      status: 'Active',
      incorporationDate: '2007-11-06'
    }
  ];

  const handleSearch = () => {
    if (query.length > 2) {
      setHasSearched(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">
          {hasSearched ? 'Select your company' : 'Find your business'}
        </h2>
        <p className="text-text-secondary">Company name or number</p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === '') setHasSearched(false);
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full h-14 pl-5 pr-12 rounded-[20px] border-2 border-divider focus:border-brand-blue outline-none text-lg bg-white"
          placeholder="e.g. Metro Bank"
        />
        <button 
          onClick={handleSearch}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue hover:scale-110 transition-transform"
        >
          <Search size={24} />
        </button>
      </div>

      {!hasSearched ? (
        // Initial State
        <div className="space-y-6">
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-divider">
            <h3 className="font-bold text-brand-navy mb-2">Can't find your business?</h3>
            <p className="text-text-secondary text-sm mb-4">
              You may need to register it with Companies House first.
            </p>
            <button className="w-full py-3 rounded-full border-2 border-brand-blue text-brand-blue font-bold text-sm hover:bg-blue-50 transition-colors">
              Search Companies House
            </button>
          </div>

          <div className="bg-blue-50/50 rounded-[20px] p-4 border border-blue-100">
            <button 
              onClick={() => setIsInfoExpanded(!isInfoExpanded)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2 text-brand-navy font-bold">
                <Info size={20} className="text-brand-blue" />
                <span>What happens next?</span>
              </div>
              <ChevronRight 
                size={20} 
                className={`text-brand-blue transition-transform ${isInfoExpanded ? 'rotate-90' : ''}`} 
              />
            </button>
            
            {isInfoExpanded && (
              <div className="mt-3 text-text-secondary text-sm pl-7">
                We'll fetch your company details from Companies House to save you time.
              </div>
            )}
          </div>

          <StickyFooter>
            <button
              onClick={handleSearch}
              className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity"
            >
              Find my business
            </button>
          </StickyFooter>
        </div>
      ) : (
        // Results State
        <div className="space-y-3">
          {mockResults.map((company) => (
            <button
              key={company.number}
              onClick={() => onSelect(company)}
              className="w-full text-left bg-white p-5 rounded-[20px] shadow-sm border border-divider hover:border-brand-blue group transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-brand-navy text-lg">{company.name}</h3>
                  <p className="text-text-secondary font-mono text-sm mt-1">{company.number}</p>
                  <p className="text-text-secondary text-sm mt-1">{company.address}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue font-bold text-sm flex items-center gap-1">
                  Select <ChevronRight size={16} />
                </div>
              </div>
            </button>
          ))}
          
          <div className="pt-4 text-center">
            <button 
              onClick={() => setHasSearched(false)} 
              className="text-text-secondary hover:text-brand-navy text-sm font-medium"
            >
              Search again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
