import { useState, useRef, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenVerifyProps {
  email: string;
  onVerified: () => void;
  onResend: () => void;
  onChangeEmail: () => void;
}

export function ScreenVerify({ email, onVerified, onResend, onChangeEmail }: ScreenVerifyProps) {
  // Pre-filled code
  const [code, setCode] = useState(['1', '2', '3', '4', '5', '6']);
  const [countdown, setCountdown] = useState(30);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const val = value.slice(-1); // Take last char if multiple
    
    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    // Auto advance
    if (val && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = code.every(c => c !== '');

  return (
    <div className="space-y-8">
      <div className="flex justify-center pt-8">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
          <ShieldCheck size={40} strokeWidth={1.5} />
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-text-secondary">
          We sent a 6-digit code to <span className="font-semibold text-text-primary">{email}</span>
        </p>
      </div>

      <div className="py-6">
        <div className="flex gap-2 justify-center mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputs.current[index] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 bg-white text-center text-2xl font-bold border border-divider focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all rounded-[8px]"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={() => {
              if (countdown === 0) {
                onResend();
                setCountdown(30);
              }
            }}
            disabled={countdown > 0}
            className={`font-semibold text-sm ${countdown > 0 ? 'text-text-muted' : 'text-brand-blue hover:underline'}`}
          >
            Resend code {countdown > 0 && `(${countdown}s)`}
          </button>
          
          <button 
            onClick={onChangeEmail}
            className="text-xs font-semibold text-text-secondary hover:text-brand-blue"
          >
            Change email
          </button>
        </div>
      </div>

      <StickyFooter>
        <button
          onClick={onVerified}
          disabled={!isComplete}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Verify & Continue
        </button>
      </StickyFooter>
    </div>
  );
}
