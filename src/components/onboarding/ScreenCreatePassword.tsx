import { useState, useEffect } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenCreatePasswordProps {
  onContinue: (password: string) => void;
}

export function ScreenCreatePassword({ onContinue }: ScreenCreatePasswordProps) {
  // Pre-filled valid password
  const [password, setPassword] = useState('MetroBank2024!');
  const [confirmPassword, setConfirmPassword] = useState('MetroBank2024!');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(true);

  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  useEffect(() => {
    setValidations({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    });
  }, [password]);

  const allValid = Object.values(validations).every(Boolean);
  const passwordsMatch = password === confirmPassword && password.length > 0;
  const canContinue = allValid && passwordsMatch;

  const ValidationItem = ({ valid, label }: { valid: boolean; label: string }) => (
    <div className={`flex items-center gap-2 text-sm transition-colors ${
      valid ? 'text-emerald-600' : touched ? 'text-text-secondary' : 'text-text-secondary'
    }`}>
      <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
        valid ? 'bg-emerald-100 border-emerald-200' : 'bg-offwhite-50 border-divider'
      }`}>
        {valid && <Check size={10} className="text-emerald-600" strokeWidth={3} />}
      </div>
      <span className={valid ? 'font-medium' : ''}>{label}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Create a password</h2>
        <p className="text-text-secondary">Secure your account with a strong password.</p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-bold text-brand-navy mb-1.5">Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setTouched(true);
            }}
            className="w-full h-12 px-4 rounded-xl border border-divider bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            placeholder="Enter password"
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[38px] text-text-muted hover:text-brand-navy"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Validation Rules */}
        <div className="bg-white p-4 rounded-xl border border-divider space-y-2">
          <p className="text-xs font-bold text-brand-navy uppercase tracking-wide mb-2">Password requirements:</p>
          <ValidationItem valid={validations.length} label="8+ characters" />
          <ValidationItem valid={validations.uppercase} label="Uppercase letter" />
          <ValidationItem valid={validations.lowercase} label="Lowercase letter" />
          <ValidationItem valid={validations.number} label="Number" />
          <ValidationItem valid={validations.special} label="Special character" />
        </div>

        <div>
          <label className="block text-sm font-bold text-brand-navy mb-1.5">Confirm Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full h-12 px-4 rounded-xl border bg-white outline-none transition-all ${
              confirmPassword && !passwordsMatch 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                : 'border-divider focus:border-brand-blue focus:ring-brand-blue/20'
            }`}
            placeholder="Re-enter password"
          />
          {confirmPassword && !passwordsMatch && (
            <p className="text-red-500 text-xs mt-1 font-medium">Passwords do not match</p>
          )}
        </div>
      </div>

      <StickyFooter>
        <button
          onClick={() => onContinue(password)}
          disabled={!canContinue}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-900/10"
        >
          Create Password
        </button>
      </StickyFooter>
    </div>
  );
}
