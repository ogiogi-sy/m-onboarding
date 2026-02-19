import { useState } from 'react';
import { Fingerprint, Smartphone, Check } from 'lucide-react';

interface ScreenPasskeyProps {
  onCreated: () => void;
  onSkip: () => void;
}

import { StickyFooter } from './StickyFooter';

export function ScreenPasskey({ onCreated, onSkip }: ScreenPasskeyProps) {
  const [status, setStatus] = useState<'intro' | 'creating' | 'success'>('intro');

  const handleCreate = () => {
    setStatus('creating');
    // Simulate OS passkey dialog
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'creating') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
        <div className="relative w-24 h-24 bg-offwhite-50 rounded-full flex items-center justify-center animate-pulse">
           <Fingerprint className="text-brand-blue" size={48} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-brand-navy mb-2">Creating Passkey...</h3>
          <p className="text-text-secondary">Follow the instructions on your device</p>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="space-y-6 text-center pt-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={40} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Passkey Created</h2>
          <p className="text-text-secondary">You can now log in securely with Face ID or Touch ID.</p>
        </div>
        <StickyFooter>
          <button
            onClick={onCreated}
            className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </StickyFooter>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">Secure your account</h2>
        <p className="text-text-secondary">Create a passkey for faster, safer login without passwords.</p>
      </div>

      <div className="bg-white rounded-[20px] p-8 border border-divider shadow-sm text-center space-y-6">
        <div className="flex justify-center gap-6">
           <div className="w-16 h-16 rounded-2xl bg-offwhite-50 flex items-center justify-center">
             <Smartphone className="text-brand-navy" size={32} />
           </div>
           <div className="flex items-center text-divider">
             <div className="w-2 h-2 rounded-full bg-brand-blue" />
             <div className="w-8 h-0.5 bg-brand-blue/30" />
             <div className="w-2 h-2 rounded-full bg-brand-blue" />
           </div>
           <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center border-2 border-brand-blue">
             <Fingerprint className="text-brand-blue" size={32} />
           </div>
        </div>

        <div className="text-left space-y-4">
           <div className="flex gap-3">
             <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
               <Check size={14} className="text-green-600 stroke-[3px]" />
             </div>
             <div>
               <h4 className="font-bold text-brand-navy text-sm">No passwords to remember</h4>
               <p className="text-text-secondary text-sm">Use Face ID, Touch ID, or your device PIN.</p>
             </div>
           </div>
           <div className="flex gap-3">
             <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
               <Check size={14} className="text-green-600 stroke-[3px]" />
             </div>
             <div>
               <h4 className="font-bold text-brand-navy text-sm">Phishing resistant</h4>
               <p className="text-text-secondary text-sm">Passkeys can't be guessed or stolen.</p>
             </div>
           </div>
        </div>
      </div>

      <StickyFooter>
        <button
          onClick={handleCreate}
          className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity"
        >
          Create Passkey
        </button>

        <button
          onClick={onSkip}
          className="w-full text-text-secondary font-bold text-[16px] hover:text-brand-navy transition-colors"
        >
          I'll do this later
        </button>
      </StickyFooter>
    </div>
  );
}
