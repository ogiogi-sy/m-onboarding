import { useState } from 'react';
import { Search, Building, Check, ArrowRight } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenOpenBankingProps {
  onConnect: (provider: string) => void;
  onSkip: () => void;
}

export function ScreenOpenBanking({ onConnect, onSkip }: ScreenOpenBankingProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [customBankName, setCustomBankName] = useState('');

  const banks = [
    { name: 'Barclays', color: 'bg-[#00AEEF]', initial: 'B' },
    { name: 'HSBC', color: 'bg-[#DB0011]', initial: 'H' },
    { name: 'Lloyds', color: 'bg-[#006A4D]', initial: 'L' },
    { name: 'NatWest', color: 'bg-[#5A287D]', initial: 'N' },
    { name: 'Santander', color: 'bg-[#EC0000]', initial: 'S' },
    { name: 'Monzo', color: 'bg-[#14233C]', initial: 'M' },
    { name: 'Revolut', color: 'bg-[#0075EB]', initial: 'R' },
    { name: 'Starling', color: 'bg-[#6935D3]', initial: 'S' },
    { name: 'Halifax', color: 'bg-[#005EB8]', initial: 'H' },
    { name: 'RBS', color: 'bg-[#002D64]', initial: 'R' },
    { name: 'TSB', color: 'bg-[#183981]', initial: 'T' },
    { name: 'Virgin', color: 'bg-[#E10A0A]', initial: 'V' },
  ];

  const handleConnectClick = () => {
    const bankToConnect = selectedBank === 'Other' ? customBankName : selectedBank;
    if (!bankToConnect) return;

    setIsConnecting(true);
    // Simulate connection
    setTimeout(() => {
      onConnect(bankToConnect);
    }, 2000);
  };

  if (isConnecting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 animate-in fade-in duration-500">
        <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
        <div>
          <h3 className="text-xl font-bold text-brand-navy mb-2">Connecting to {selectedBank === 'Other' ? customBankName : selectedBank}...</h3>
          <p className="text-text-secondary">Please wait while we verify your details</p>
        </div>
      </div>
    );
  }

  const isConnectDisabled = !selectedBank || (selectedBank === 'Other' && !customBankName.trim());

  return (
    <div className="flex flex-col h-full relative">
      <div className="space-y-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Connect your bank</h2>
          <p className="text-text-secondary">Select your provider to auto-fill your application.</p>
        </div>
      </div>

      {/* Scrollable List Area */}
      <div className="flex-1 overflow-y-auto -mx-2 px-2 pb-32 no-scrollbar space-y-3"> 
        {banks.map((bank) => {
          const isSelected = selectedBank === bank.name;
          return (
            <button
              key={bank.name}
              onClick={() => {
                setSelectedBank(bank.name);
                setCustomBankName('');
              }}
              className={`w-full flex items-center p-4 border rounded-[16px] transition-all group ${
                isSelected 
                  ? 'border-brand-blue bg-[#E5ECF5] shadow-sm' 
                  : 'border-divider bg-white hover:border-brand-blue/50'
              }`}
            >
              <div className={`w-10 h-10 rounded-full ${bank.color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm mr-4`}>
                {bank.initial}
              </div>
              <span className={`font-bold text-lg flex-1 text-left ${isSelected ? 'text-brand-navy' : 'text-brand-navy'}`}>
                {bank.name}
              </span>
              {isSelected && (
                <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                  <Check size={14} className="text-white stroke-[3px]" />
                </div>
              )}
            </button>
          );
        })}

        {/* Other Option */}
        <div className={`space-y-3 transition-all ${selectedBank === 'Other' ? 'bg-offwhite-50 p-4 rounded-[16px] border border-brand-blue/20' : ''}`}>
           <button
            onClick={() => setSelectedBank('Other')}
            className={`w-full flex items-center p-4 border rounded-[16px] transition-all ${
              selectedBank === 'Other'
                ? 'border-brand-blue bg-[#E5ECF5] shadow-sm' 
                : 'border-divider bg-white hover:border-brand-blue/50'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg shrink-0 shadow-sm mr-4">
              <Building size={20} />
            </div>
            <span className={`font-bold text-lg flex-1 text-left ${selectedBank === 'Other' ? 'text-brand-navy' : 'text-brand-navy'}`}>
              Other bank
            </span>
            {selectedBank === 'Other' && (
              <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                <Check size={14} className="text-white stroke-[3px]" />
              </div>
            )}
          </button>

          {selectedBank === 'Other' && (
            <div className="animate-in fade-in slide-in-from-top-2 pt-2">
              <label className="block text-sm font-medium text-text-secondary mb-1.5 ml-1">
                Enter your bank's name
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input
                  type="text"
                  value={customBankName}
                  onChange={(e) => setCustomBankName(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-divider focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none bg-white transition-all"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <StickyFooter>
        <div className="space-y-4">
            <button
              onClick={handleConnectClick}
              disabled={isConnectDisabled}
              className="w-full h-[48px] rounded-full font-bold text-[16px] bg-brand-navy text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow-lg shadow-brand-navy/20 disabled:shadow-none flex items-center justify-center gap-2 group"
            >
              Connect bank account
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </StickyFooter>
    </div>
  );
}
