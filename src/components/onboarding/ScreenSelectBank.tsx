import { useState } from 'react';
import { Search, ChevronRight, Building } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenSelectBankProps {
  onSelect: (bankName: string) => void;
  onBack: () => void;
}

const POPULAR_BANKS = [
  { name: 'Barclays', color: 'bg-[#00AEEF]' },
  { name: 'HSBC', color: 'bg-[#DB0011]' },
  { name: 'Lloyds', color: 'bg-[#006A4D]' },
  { name: 'NatWest', color: 'bg-[#42145F]' },
  { name: 'Santander', color: 'bg-[#EC0000]' },
  { name: 'RBS', color: 'bg-[#002D64]' },
  { name: 'Monzo', color: 'bg-[#FF4D4D]' },
  { name: 'Revolut', color: 'bg-[#000000]' },
];

export function ScreenSelectBank({ onSelect, onBack }: ScreenSelectBankProps) {
  const [search, setSearch] = useState('');

  const filteredBanks = POPULAR_BANKS.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Select your bank</h2>
        <p className="text-text-secondary">Choose the bank you want to connect for open banking.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
        <input 
          type="text" 
          placeholder="Search for your bank..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 h-12 rounded-xl border border-divider bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-2 mt-2">Popular Banks</h3>
        {filteredBanks.map((bank) => (
          <button
            key={bank.name}
            onClick={() => onSelect(bank.name)}
            className="w-full bg-white p-4 rounded-xl border border-divider hover:border-brand-blue hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg ${bank.color} flex items-center justify-center text-white font-bold text-sm`}>
                {bank.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="font-bold text-brand-navy">{bank.name}</span>
            </div>
            <ChevronRight size={20} className="text-text-muted group-hover:text-brand-blue transition-colors" />
          </button>
        ))}
        
        {filteredBanks.length === 0 && (
          <div className="text-center py-8 text-text-secondary">
            <Building size={32} className="mx-auto mb-2 opacity-50" />
            <p>No banks found matching "{search}"</p>
          </div>
        )}
      </div>

      <div className="pt-4">
        <button className="w-full py-4 text-center text-brand-blue font-bold hover:underline">
          My bank isn't listed
        </button>
      </div>
    </div>
  );
}
