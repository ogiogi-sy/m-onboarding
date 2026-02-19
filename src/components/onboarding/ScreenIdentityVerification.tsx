import { useState } from 'react';
import { Camera, Upload, Check, Smartphone, ShieldCheck } from 'lucide-react';

interface ScreenIdentityVerificationProps {
  onVerified: () => void;
}

import { StickyFooter } from './StickyFooter';

export function ScreenIdentityVerification({ onVerified }: ScreenIdentityVerificationProps) {
  const [status, setStatus] = useState<'select' | 'scanning' | 'verified'>('select');
  const [selectedType, setSelectedType] = useState<'passport' | 'license' | null>(null);

  const handleStartScan = (type: 'passport' | 'license') => {
    setSelectedType(type);
    setStatus('scanning');
    // Simulate scanning process
    setTimeout(() => {
      setStatus('verified');
    }, 2500);
  };

  if (status === 'scanning') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
        <div className="relative w-24 h-24">
           <div className="absolute inset-0 rounded-full border-4 border-brand-blue/30 animate-pulse"></div>
           <div className="absolute inset-0 rounded-full border-t-4 border-brand-blue animate-spin"></div>
           <Camera className="absolute inset-0 m-auto text-brand-blue" size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-brand-navy mb-2">Verifying document...</h3>
          <p className="text-text-secondary">Please hold steady</p>
        </div>
      </div>
    );
  }

  if (status === 'verified') {
    return (
      <div className="space-y-6 text-center pt-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={40} strokeWidth={3} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Identity Verified</h2>
          <p className="text-text-secondary">We've confirmed your identity successfully.</p>
        </div>
        <StickyFooter>
          <button
            onClick={onVerified}
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
        <h2 className="text-2xl font-bold text-brand-navy">Verify your identity</h2>
        <p className="text-text-secondary">We need to check that you are who you say you are.</p>
      </div>

      <div className="bg-blue-50/50 rounded-[20px] p-4 border border-blue-100 flex items-start gap-3">
        <ShieldCheck className="text-brand-blue shrink-0 mt-0.5" size={20} />
        <div>
          <p className="font-bold text-brand-navy text-sm">Secure Verification</p>
          <p className="text-text-secondary text-sm">Your data is encrypted and deleted after verification.</p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handleStartScan('passport')}
          className="w-full bg-white p-5 rounded-[20px] shadow-sm border border-divider hover:border-brand-blue text-left flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-offwhite-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Camera className="text-brand-navy group-hover:text-brand-blue transition-colors" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-brand-navy">Passport</h3>
              <p className="text-text-secondary text-sm">Scan the photo page</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-divider group-hover:border-brand-blue flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>

        <button
          onClick={() => handleStartScan('license')}
          className="w-full bg-white p-5 rounded-[20px] shadow-sm border border-divider hover:border-brand-blue text-left flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-offwhite-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Smartphone className="text-brand-navy group-hover:text-brand-blue transition-colors" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-brand-navy">Driving Licence</h3>
              <p className="text-text-secondary text-sm">Scan the front of your card</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-divider group-hover:border-brand-blue flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>

      <div className="text-center pt-4">
        <button className="text-text-secondary font-medium text-sm hover:text-brand-navy underline">
          I don't have these documents
        </button>
      </div>
    </div>
  );
}
