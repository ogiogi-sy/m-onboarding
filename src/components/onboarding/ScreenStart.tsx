import { Search, Building2, ChevronRight, Loader2, CheckCircle2, ShieldCheck, FileText, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { Company } from './types';
import Mlogo from '../../imports/Mlogo';

interface ScreenStartProps {
  onCompanySelect: (company: Company) => void;
}

export function ScreenStart({ onCompanySelect }: ScreenStartProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<Company[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    
    if (value.length < 3) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    // Simulate API search
    setTimeout(() => {
      setResults([
        {
          name: 'METRO DESIGN LTD',
          number: '12345678',
          address: '123 High Street, London, EC1 1AA',
          status: 'Active',
          incorporationDate: '20 Feb 2020'
        },
        {
          name: 'METRO DIGITAL SERVICES',
          number: '87654321',
          address: '456 Low Street, Manchester, M1 1BB',
          status: 'Active',
          incorporationDate: '15 Mar 2021'
        }
      ]);
      setIsSearching(false);
    }, 600);
  };

  const showResults = query.length >= 3;
  const showEmptyHint = isFocused && query.length === 0;

  return (
    <div 
      className="min-h-screen flex flex-col md:flex-row"
      style={{ background: 'linear-gradient(180deg, #0046AD 0%, #000C45 23.54%)' }}
    >
      {/* Left Sidebar (Header Area) */}
      <div 
        className="pt-8 px-6 pb-8 md:w-5/12 lg:w-1/3 md:h-screen md:pt-16 md:px-12 md:pb-12 md:flex md:flex-col md:justify-center flex flex-col items-center text-center shrink-0 relative overflow-hidden"
      >
        
        {/* Background Image - Removed as requested, keeping pure gradient */}
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo - Centered */}
          <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-2xl md:rounded-[24px] mb-4 md:mb-8 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg">
             <div className="w-8 h-8 md:w-12 md:h-12 text-white">
               <Mlogo />
             </div>
          </div>

          {/* Text Hierarchy */}
          <h1 className="text-xl md:text-3xl md:leading-tight font-bold text-white mb-1.5 md:mb-4 tracking-tight">
            Open a Business Account
          </h1>
          <p className="text-blue-200/90 font-medium text-sm md:text-lg">
            Takes about 10 minutes
          </p>
        </div>
      </div>

      {/* Right Panel (Content Sheet) */}
      <div className="flex-1 bg-[#f1f5f9] rounded-t-[32px] md:rounded-none px-5 py-8 md:px-12 md:py-16 shadow-[0_-8px_30px_rgba(0,0,0,0.25)] md:shadow-none relative flex flex-col w-full overflow-hidden md:h-screen md:overflow-y-auto">
        
        <div className="w-full max-w-xl mx-auto flex flex-col h-full justify-center">
          {/* Search Container */}
          <div className="relative z-10 space-y-3 md:space-y-6">
            {/* Input Field */}
            <div className={`relative group transition-all duration-300 ${isFocused ? "transform -translate-y-1" : ""}`}>
              <div className={`absolute left-4 md:left-6 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? "text-[#0046ad]" : "text-slate-400"}`}>
                {isSearching ? (
                  <Loader2 size={20} className="animate-spin md:w-6 md:h-6" />
                ) : (
                  <Search size={20} className="md:w-6 md:h-6" />
                )}
              </div>
              
              <input
                type="text"
                value={query}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Company name or number"
                className="w-full pl-12 md:pl-16 pr-4 h-14 md:h-20 bg-white border-2 border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-2xl md:rounded-[24px] outline-none text-slate-900 placeholder:text-slate-400 font-medium text-base md:text-xl transition-all focus:border-[#0046ad] focus:shadow-[0_4px_12px_rgba(0,70,173,0.1)]"
                autoFocus
              />
            </div>

            {/* Helper Text or Idle State */}
            <div className="px-2 min-h-[20px] transition-all duration-300">
              {showEmptyHint ? (
                <p className="text-slate-400 text-xs md:text-sm font-medium animate-in fade-in slide-in-from-top-1">
                  Start typing to search...
                </p>
              ) : !showResults && !query ? (
                <p className="text-slate-400 text-xs md:text-sm font-medium">
                  We’ll pre-fill your details from Companies House
                </p>
              ) : null}
            </div>
          </div>

          {/* Results List - Animated entry */}
          {showResults ? (
            <div className="mt-2 md:mt-4 -mx-2 animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-forwards">
              <div className="px-2 mb-2">
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Matches
                </span>
              </div>
              
              <div className="space-y-2 md:space-y-4">
                {results.map((company) => (
                  <button
                    key={company.number}
                    onClick={() => onCompanySelect(company)}
                    className="w-full text-left bg-white p-4 md:p-6 rounded-[20px] border border-transparent shadow-sm hover:border-[#0046ad]/30 hover:shadow-md active:scale-[0.98] transition-all group"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3.5 md:gap-5">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#0046ad] shrink-0 group-hover:bg-[#0046ad] group-hover:text-white transition-colors duration-300">
                          <Building2 size={18} className="md:w-7 md:h-7" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-sm md:text-lg group-hover:text-[#0046ad] transition-colors">
                            {company.name}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-500 font-mono mt-0.5">#{company.number}</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300 md:w-6 md:h-6 group-hover:text-[#0046ad] transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : !query && (
            /* "What you'll need" Section - Only shown when not searching */
            <div className="mt-6 md:mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h3 className="font-bold text-brand-navy text-lg mb-4">What you'll need</h3>
              
              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Company registration number</h4>
                    <p className="text-sm text-text-secondary leading-tight">We'll fetch your details from Companies House</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <UserCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Director details</h4>
                    <p className="text-sm text-text-secondary leading-tight">Names, roles, and contact information</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Identity verification</h4>
                    <p className="text-sm text-text-secondary leading-tight">Primary director will need a passport or driving licence</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Proof of address</h4>
                    <p className="text-sm text-text-secondary leading-tight">A recent utility bill or bank statement</p>
                  </div>
                </div>
              </div>

              {/* Secure Badge */}
              <div className="mt-6 bg-emerald-50 rounded-[20px] p-3 border border-emerald-100 flex items-start gap-3">
                 <ShieldCheck className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                 <div>
                   <h4 className="font-bold text-emerald-800 text-sm">Secure & Compliant</h4>
                   <p className="text-xs text-emerald-700 mt-0.5 leading-snug">
                     Your data is protected by bank-grade security and treated in accordance with UK regulations.
                   </p>
                 </div>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-auto pt-4 text-center pb-2">
            <button className="text-slate-500 font-semibold text-sm hover:text-[#0046ad] transition-colors py-2 px-4 rounded-full hover:bg-white hover:shadow-sm">
              Resume an existing application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
