import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TradingAddressProps {
  registeredAddress: string;
  onConfirm: (type: 'registered' | 'custom', customAddress?: string) => void;
  onSaveExit: () => void;
}

export function TradingAddress({ registeredAddress, onConfirm, onSaveExit }: TradingAddressProps) {
  const [selection, setSelection] = useState<'registered' | 'custom'>('registered');
  const [customAddress, setCustomAddress] = useState('');

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Where should we send your correspondence?</h2>
        <p className="text-text-secondary">This is where we'll send important letters and documents</p>
      </div>

      <div className="pt-4">
        <label className="text-xs font-bold text-text-primary uppercase tracking-wide mb-4 block">
          Choose your correspondence address
        </label>
        
        <div className="space-y-4">
          {/* Registered Address Option */}
          <button
            onClick={() => setSelection('registered')}
            className={`w-full p-4 rounded-xl text-left border transition-all flex items-start gap-4 group ${
              selection === 'registered'
                ? 'bg-blue-50 border-brand-blue ring-1 ring-brand-blue'
                : 'bg-white border-divider hover:shadow-md'
            }`}
          >
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
              selection === 'registered' ? 'border-brand-blue bg-brand-blue' : 'border-text-muted'
            }`}>
              {selection === 'registered' && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div>
              <p className={`font-semibold ${selection === 'registered' ? 'text-brand-navy' : 'text-text-primary'}`}>
                Use registered company address
              </p>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                {registeredAddress}
              </p>
            </div>
          </button>

          {/* Different Address Option */}
          <button
            onClick={() => setSelection('custom')}
            className={`w-full p-4 rounded-xl text-left border transition-all flex items-start gap-4 group ${
              selection === 'custom'
                ? 'bg-blue-50 border-brand-blue ring-1 ring-brand-blue'
                : 'bg-white border-divider hover:shadow-md'
            }`}
          >
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
              selection === 'custom' ? 'border-brand-blue bg-brand-blue' : 'border-text-muted'
            }`}>
              {selection === 'custom' && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div>
              <p className={`font-semibold ${selection === 'custom' ? 'text-brand-navy' : 'text-text-primary'}`}>
                Use a different address
              </p>
              <p className="text-sm text-text-secondary mt-1">
                Enter a custom correspondence address
              </p>
            </div>
          </button>

          {/* Custom Address Input */}
          {selection === 'custom' && (
            <div className="pl-9 animate-in fade-in slide-in-from-top-2">
              <input
                type="text"
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                placeholder="Start typing your address..."
                className="w-full px-4 py-3 rounded-xl border border-divider bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 pt-8">
        <button 
          onClick={onSaveExit}
          className="flex-1 py-3 px-6 rounded-full border border-brand-navy text-brand-navy font-semibold hover:bg-offwhite-50 transition-colors"
        >
          Save & Exit
        </button>
        <button 
          onClick={() => onConfirm(selection, selection === 'custom' ? customAddress : undefined)}
          disabled={selection === 'custom' && !customAddress}
          className="flex-1 py-3 px-6 rounded-full bg-brand-navy text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
