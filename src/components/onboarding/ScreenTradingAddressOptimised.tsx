import { useState } from 'react';
import { Check, UploadCloud, ChevronDown, ChevronUp, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenTradingAddressOptimisedProps {
  registeredAddress: string;
  tradingName: string;
  onContinue: (type: 'registered' | 'custom' | 'document', value: string) => void;
}

export function ScreenTradingAddressOptimised({ registeredAddress, tradingName, onContinue }: ScreenTradingAddressOptimisedProps) {
  const [selectedType, setSelectedType] = useState<'registered' | 'custom' | 'document'>('custom'); // Pre-selected manual
  const [customAddress, setCustomAddress] = useState('123 High Street, London, EC1 4AB'); // Pre-filled
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Helper to expand custom input
  const isCustomExpanded = selectedType === 'custom';

  const getCurrentAddress = () => {
    if (selectedType === 'registered') return registeredAddress;
    if (selectedType === 'custom') return customAddress;
    if (selectedType === 'document') return uploadedFile ? uploadedFile.name : '';
    return '';
  };

  const canContinue =
    (selectedType === 'registered') ||
    (selectedType === 'custom' && customAddress.length >= 5) ||
    (selectedType === 'document' && !!uploadedFile);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Trading Address</h2>
        <p className="text-text-secondary">Where does your business operate from?</p>
      </div>

      <div className="bg-white rounded-[20px] border border-divider overflow-hidden shadow-sm">
        {/* Option 1: Registered Address */}
        <button
          onClick={() => setSelectedType('registered')}
          className="w-full p-5 text-left flex items-start gap-4 hover:bg-offwhite-50 transition-colors border-b border-divider"
        >
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
            selectedType === 'registered' ? 'border-brand-blue bg-brand-blue' : 'border-divider'
          }`}>
            {selectedType === 'registered' && <Check size={14} className="text-white" strokeWidth={3} />}
          </div>
          <div>
            <span className="font-bold text-brand-navy block mb-1">Use registered address</span>
            <p className="text-sm text-text-secondary flex items-start gap-1.5">
              <Building2 size={14} className="mt-0.5 shrink-0" />
              {registeredAddress}
            </p>
          </div>
        </button>

        {/* Option 2: Different Address */}
        <div className="border-b border-divider">
          <button
            onClick={() => setSelectedType('custom')}
            className="w-full p-5 text-left flex items-center justify-between group hover:bg-offwhite-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                selectedType === 'custom' ? 'border-brand-blue bg-brand-blue' : 'border-divider'
              }`}>
                {selectedType === 'custom' && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
              <span className="font-bold text-brand-navy">Enter a different address</span>
            </div>
          </button>

          {isCustomExpanded && (
            <div className="px-5 pb-5 pl-[60px] animate-in fade-in slide-in-from-top-2">
              <textarea
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                placeholder="Enter full trading address..."
                className="w-full p-3 rounded-xl border border-divider bg-offwhite-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all text-sm min-h-[80px] resize-none"
              />
            </div>
          )}
        </div>

        {/* Option 3: Upload Document */}
        <div className="p-5">
           <button
            onClick={() => setSelectedType('document')}
            className="w-full text-left flex items-center gap-4 hover:bg-offwhite-50 transition-colors rounded-lg -ml-2 p-2"
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              selectedType === 'document' ? 'border-brand-blue bg-brand-blue' : 'border-divider'
            }`}>
              {selectedType === 'document' && <Check size={14} className="text-white" strokeWidth={3} />}
            </div>
            <div className="flex-1">
              <span className="font-bold text-brand-navy block mb-0.5">Upload proof of address</span>
              <p className="text-xs text-text-secondary">Utility bill or bank statement (last 3 months)</p>
            </div>
          </button>

          {selectedType === 'document' && (
            <div className="mt-4 ml-[52px] animate-in fade-in">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-divider rounded-xl hover:bg-offwhite-50 cursor-pointer transition-colors bg-offwhite-50/30">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud className="w-8 h-8 text-brand-blue mb-2" />
                  <p className="mb-1 text-sm text-brand-navy font-semibold">
                    {uploadedFile ? uploadedFile.name : 'Click to upload'}
                  </p>
                  <p className="text-xs text-text-secondary">PDF, JPG or PNG</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setUploadedFile(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Inline summary — replaces the separate ScreenReviewDetails */}
      {canContinue && (
        <div className="bg-blue-50/50 p-4 rounded-[16px] flex gap-3 items-start border border-blue-100">
          <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-brand-navy">
            <span className="font-bold">{tradingName}</span> will use this address for account setup and correspondence.
          </p>
        </div>
      )}

      <StickyFooter>
        <button
          onClick={() => {
            const value = getCurrentAddress();
            onContinue(selectedType, value);
          }}
          disabled={!canContinue}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-900/10"
        >
          Continue
        </button>
      </StickyFooter>
    </div>
  );
}
