import { useState } from 'react';
import { StickyFooter } from './StickyFooter';

interface ScreenJourneySelectionProps {
  onSelect: (journey: 'optimised' | 'ideal') => void;
}

export function ScreenJourneySelection({ onSelect }: ScreenJourneySelectionProps) {
  const [selected, setSelected] = useState<'optimised' | 'ideal'>('optimised');

  return (
    <div className="min-h-screen bg-offwhite-50 flex flex-col">
      {/* Header */}
      <header className="bg-brand-navy py-4 px-6">
        <div className="text-white font-bold text-xl tracking-tight">
          Metro Bank
        </div>
      </header>

      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full flex flex-col">
        <h1 className="text-brand-navy font-bold text-3xl mb-2 text-[28px]">Create Account</h1>
        <p className="text-text-secondary text-lg mb-8">Welcome to Metro Bank</p>

        <div className="space-y-4 mb-8">
          <label className="text-text-secondary font-medium text-sm">Select Journey</label>
          
          {/* Optimised Card */}
          <button
            onClick={() => setSelected('optimised')}
            className={`w-full text-left p-5 rounded-[20px] shadow-sm border-2 transition-all relative ${
              selected === 'optimised'
                ? 'bg-white border-brand-blue'
                : 'bg-white border-transparent hover:border-brand-blue/30'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Business Account</h3>
                <span className="inline-block px-2 py-0.5 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                  Optimised
                </span>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  Faster setup with Open Banking. We'll securely connect to your bank to pre-fill your details. ~10 minutes.
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                selected === 'optimised' 
                  ? 'border-brand-blue bg-brand-blue' 
                  : 'border-gray-300'
              }`}>
                {selected === 'optimised' && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
            </div>
          </button>

          {/* Ideal Card */}
          <button
            onClick={() => setSelected('ideal')}
            className={`w-full text-left p-5 rounded-[20px] shadow-sm border-2 transition-all relative ${
              selected === 'ideal'
                ? 'bg-white border-brand-blue'
                : 'bg-white border-transparent hover:border-brand-blue/30'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Business Account</h3>
                <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
                  Ideal
                </span>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  Our fastest application. Sign in with passkey, connect via Open Banking, and skip the paperwork. ~5 minutes.
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                selected === 'ideal' 
                  ? 'border-brand-blue bg-brand-blue' 
                  : 'border-gray-300'
              }`}>
                {selected === 'ideal' && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
            </div>
          </button>
        </div>

        <StickyFooter>
          <div className="space-y-4">
            <button
              onClick={() => onSelect(selected)}
              className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity"
            >
              Next
            </button>

            <div className="text-center">
              <p className="text-text-secondary text-sm">
                Already have an account?{' '}
                <button className="text-brand-navy font-bold hover:underline">
                  Log in
                </button>
              </p>
            </div>
          </div>
        </StickyFooter>
      </main>
    </div>
  );
}
