import { Search } from 'lucide-react';
import { useState } from 'react';
import { Company } from './types';
import { Building2 } from 'lucide-react';

interface CompanySearchProps {
  onCompanySelect: (company: Company) => void;
  initialQuery: string;
}

export function CompanySearch({ onCompanySelect, initialQuery }: CompanySearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Company[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (query.length < 3) return;
    
    setIsSearching(true);
    // Simulate API delay
    setTimeout(() => {
      setResults([
        {
          name: 'YCOMPLEX LTD',
          number: '09950792',
          address: '3rd Floor 86-90 Paul Street, London, England, EC2A 4NE',
          status: 'Active',
          incorporationDate: '14 Jan 2016'
        },
        {
          name: 'YCOMPLEX SERVICES LTD',
          number: '12345678',
          address: '123 High Street, Manchester, M1 1AA',
          status: 'Active',
          incorporationDate: '20 Feb 2020'
        }
      ]);
      setIsSearching(false);
      setHasSearched(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Find your business</h2>
        <p className="text-text-secondary">Search Companies House to get started</p>
      </div>

      <div className="bg-white rounded-[20px] p-5 shadow-sm">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Company name or number
        </label>
        
        <div className="relative mb-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (hasSearched) setHasSearched(false); // Reset results on type
            }}
            placeholder="e.g. Acme Ltd or 12345678"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-divider bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
          />
        </div>
        <p className="text-xs text-text-muted mb-6">Enter at least 3 characters to search</p>

        {!hasSearched ? (
          <button
            onClick={handleSearch}
            disabled={query.length < 3 || isSearching}
            className="w-full bg-brand-blue text-white py-3 rounded-full hover:opacity-90 disabled:bg-brand-blue/50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isSearching ? 'Searching...' : 'Search Companies House'}
          </button>
        ) : (
           <div className="space-y-3">
             {results.map((company) => (
               <button
                 key={company.number}
                 onClick={() => onCompanySelect(company)}
                 className="w-full text-left bg-offwhite-50 border border-transparent hover:border-brand-blue rounded-xl p-4 transition-all group"
               >
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-bold text-text-primary group-hover:text-brand-blue transition-colors">
                       {company.name}
                     </h3>
                     <div className="flex items-center gap-2 mt-1">
                       <span className="text-xs text-text-secondary">#{company.number}</span>
                       <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                         company.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                       }`}>
                         {company.status}
                       </span>
                     </div>
                     <p className="text-xs text-text-muted mt-2 flex items-start gap-1">
                       <span className="mt-0.5">📍</span> {company.address}
                     </p>
                   </div>
                 </div>
               </button>
             ))}
           </div>
        )}

        <button className="w-full mt-4 text-brand-blue text-sm font-medium hover:underline">
          Can't find your business? Enter manually
        </button>
      </div>

      <div className="flex gap-3 px-2">
        <Building2 className="text-brand-blue flex-shrink-0" size={24} />
        <p className="text-sm text-text-secondary">
          We'll use Companies House data to pre-fill your application, making the process faster.
        </p>
      </div>
    </div>
  );
}
