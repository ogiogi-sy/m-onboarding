import { useState } from 'react';
import { MapPin, Check, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Branch } from './types';

interface ScreenLocationProps {
  registeredAddress: string;
  onContinue: (addressType: 'registered' | 'custom', customAddress: string | undefined, branch: Branch) => void;
}

export function ScreenLocation({ registeredAddress, onContinue }: ScreenLocationProps) {
  const [addressType, setAddressType] = useState<'registered' | 'custom'>('registered');
  const [customAddress, setCustomAddress] = useState('');
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);
  
  const [branch, setBranch] = useState<Branch>({
    id: 'bham',
    name: 'Birmingham High St',
    address: '85-88 High Street, Birmingham, B4 7TE',
    distance: '0.8 miles'
  });
  const [isBranchSearching, setIsBranchSearching] = useState(false);

  return (
    <div className="space-y-6 pb-24 md:pb-0">
      <p className="text-text-secondary">We'll use this for mail and local support.</p>
      {/* Card 1: Correspondence Address */}
      <div className="bg-white rounded-[20px] border border-divider overflow-hidden shadow-sm">
        <div className="p-5 border-b border-divider bg-offwhite-50/50">
          <h3 className="font-bold text-brand-navy text-sm uppercase tracking-wide">Correspondence Address</h3>
        </div>
        
        {/* Option: Registered */}
        <button 
          onClick={() => {
            setAddressType('registered');
            setIsAddressExpanded(false);
          }}
          className="w-full p-5 text-left flex items-start gap-4 hover:bg-offwhite-50 transition-colors"
        >
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
            addressType === 'registered' ? 'border-brand-blue bg-brand-blue' : 'border-divider'
          }`}>
            {addressType === 'registered' && <Check size={14} className="text-white" strokeWidth={3} />}
          </div>
          <div>
            <span className="font-bold text-brand-navy block mb-1">Use registered address</span>
            <p className="text-sm text-text-secondary">{registeredAddress}</p>
          </div>
        </button>

        <div className="h-px bg-divider mx-5" />

        {/* Option: Custom */}
        <div className="p-5">
          <button 
            onClick={() => {
              setAddressType('custom');
              setIsAddressExpanded(!isAddressExpanded);
            }}
            className="w-full text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                addressType === 'custom' ? 'border-brand-blue bg-brand-blue' : 'border-divider'
              }`}>
                {addressType === 'custom' && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
              <span className="font-bold text-brand-navy">Use a different address</span>
            </div>
            {isAddressExpanded ? <ChevronUp size={20} className="text-text-muted" /> : <ChevronDown size={20} className="text-text-muted" />}
          </button>

          {(isAddressExpanded || addressType === 'custom') && (
             <div className="mt-4 pl-10 animate-in fade-in slide-in-from-top-2">
               <input
                 type="text"
                 value={customAddress}
                 onChange={(e) => {
                   setCustomAddress(e.target.value);
                   setAddressType('custom');
                 }}
                 placeholder="Start typing your address..."
                 className="w-full px-3 py-2.5 rounded-[8px] border border-gray-300 bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm"
               />
             </div>
          )}
        </div>
      </div>

      {/* Card 2: Local Branch */}
      <div className="bg-white rounded-[20px] border border-divider overflow-hidden shadow-sm">
        <div className="p-5 border-b border-divider bg-offwhite-50/50">
          <h3 className="font-bold text-brand-navy text-sm uppercase tracking-wide">Your Local Branch</h3>
        </div>

        {!isBranchSearching ? (
          <div className="p-5">
            <div className="flex gap-3">
              {/* Icon - removed container for tighter layout */}
              <div className="flex-shrink-0 pt-1">
                <MapPin className="text-[#D40000]" size={28} strokeWidth={2} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-brand-navy text-base leading-snug truncate pr-2">
                    {branch.name}
                  </h4>
                  <span className="text-xs font-bold bg-blue-50 text-brand-blue px-2 py-1 rounded flex-shrink-0">
                    {branch.distance}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {branch.address}
                </p>
                
                <button 
                  onClick={() => setIsBranchSearching(true)}
                  className="mt-4 text-sm font-bold text-brand-blue hover:underline"
                >
                  Change branch
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 animate-in fade-in">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Enter postcode or town"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-divider bg-offwhite-50 focus:bg-white focus:border-brand-blue outline-none transition-all text-sm"
                autoFocus
              />
            </div>
            <button 
              onClick={() => setIsBranchSearching(false)} // Mock cancel
              className="text-sm font-semibold text-text-secondary hover:text-brand-navy"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-divider md:static md:bg-transparent md:border-t-0 md:p-0 md:mt-8">
        <button
          onClick={() => onContinue(addressType, customAddress, branch)}
          disabled={addressType === 'custom' && customAddress.length < 5}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
