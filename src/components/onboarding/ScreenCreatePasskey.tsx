import { useState } from 'react';
import { Fingerprint, ScanFace, Zap, ShieldCheck, Lock } from 'lucide-react';
import { StickyFooter } from './StickyFooter';
import { toast } from 'sonner';

interface ScreenCreatePasskeyProps {
  onContinue: () => void;
  onFallback: () => void;
}

export function ScreenCreatePasskey({ onContinue, onFallback }: ScreenCreatePasskeyProps) {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePasskey = async () => {
    setIsCreating(true);
    // Simulate passkey creation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsCreating(false);
    toast.success('Passkey created successfully');
    onContinue();
  };

  return (
    <div className="flex flex-col h-full relative">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Create your passkey</h2>
          <p className="text-text-secondary leading-relaxed">
            Securely sign in without a password using your device's biometrics.
          </p>
        </div>

        {/* Hero Icon */}
        <div className="flex justify-center py-6">
           <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20" />
              <Fingerprint className="text-brand-blue w-12 h-12" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-sm border border-divider">
                <ShieldCheck className="w-5 h-5 text-green-500" />
              </div>
           </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 bg-white rounded-[20px] p-5 border border-divider shadow-sm">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-offwhite-50 flex items-center justify-center shrink-0">
               <ScanFace className="text-brand-navy" size={20} />
             </div>
             <div>
               <h4 className="font-bold text-brand-navy text-sm">Use your fingerprint or face</h4>
               <p className="text-xs text-text-secondary">Works with Touch ID and Face ID</p>
             </div>
          </div>
          
          <div className="w-full h-px bg-divider" />

          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-offwhite-50 flex items-center justify-center shrink-0">
               <Lock className="text-brand-navy" size={20} />
             </div>
             <div>
               <h4 className="font-bold text-brand-navy text-sm">No password to remember</h4>
               <p className="text-xs text-text-secondary">Safer than a traditional password</p>
             </div>
          </div>

          <div className="w-full h-px bg-divider" />

          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-offwhite-50 flex items-center justify-center shrink-0">
               <Zap className="text-brand-navy" size={20} />
             </div>
             <div>
               <h4 className="font-bold text-brand-navy text-sm">Quick & easy process</h4>
               <p className="text-xs text-text-secondary">Log in in seconds</p>
             </div>
          </div>
        </div>
      </div>

      <StickyFooter>
        <div className="space-y-3">
          <button
            onClick={handleCreatePasskey}
            disabled={isCreating}
            className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-all shadow-lg shadow-brand-navy/20 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isCreating ? 'Creating passkey...' : 'Create passkey'}
          </button>

          <button
            onClick={onFallback}
            className="w-full text-brand-navy font-bold text-[14px] hover:underline py-2"
          >
            Use password instead
          </button>
        </div>
      </StickyFooter>
    </div>
  );
}
