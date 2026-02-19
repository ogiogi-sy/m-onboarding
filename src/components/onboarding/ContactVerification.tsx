import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ChevronRight, Delete } from 'lucide-react';

interface ContactVerificationProps {
  email: string;
  onVerified: () => void;
  onResend: () => void;
}

export function ContactVerification({ email, onVerified, onResend }: ContactVerificationProps) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0]; // Only first char
    if (!/^\d*$/.test(value)) return; // Only numbers

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto focus next
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // Simulate verification on completion
  useEffect(() => {
    if (code.every(c => c !== '')) {
      // Mock API call
      setTimeout(onVerified, 1000);
    }
  }, [code, onVerified]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Verify your contact details</h2>
        <p className="text-text-secondary">Enter the verification code we sent to confirm your details.</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 items-center">
        <CheckCircle2 className="text-brand-blue flex-shrink-0" size={24} />
        <div>
          <p className="font-semibold text-text-primary text-sm">Verification code sent</p>
          <p className="text-xs text-text-secondary">Email: {email}</p>
        </div>
      </div>

      <div className="pt-4">
        <label className="text-xs font-bold text-text-primary uppercase tracking-wide mb-4 block">
          Email Verification Code *
        </label>
        
        <div className="grid grid-cols-6 gap-2 sm:gap-4 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputs.current[index] = el}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-full aspect-square bg-white text-center text-2xl font-bold rounded-xl border border-divider focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            />
          ))}
        </div>

        <button 
          onClick={onResend}
          className="w-full text-brand-blue font-medium text-sm hover:underline"
        >
          Resend code
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-divider">
        <button
          onClick={onVerified}
          disabled={!code.every(c => c !== '')}
          className="w-full max-w-md mx-auto bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verify and continue
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
