import { useState } from 'react';
import { Director } from './types';
import { StickyFooter } from './StickyFooter';

interface ScreenDirectorEditProps {
  director: Director | null; // null if adding new
  onSave: (data: Partial<Director>) => void;
  onRemove: (id?: string) => void;
}

const ROLES = ['Director', 'Secretary', 'PSC', 'Authorized Signatory'];

export function ScreenDirectorEdit({ director, onSave, onRemove }: ScreenDirectorEditProps) {
  // Pre-filled defaults for new directors
  const defaultNewDirector = {
    name: 'Sarah Jones',
    role: 'Director',
    email: 'sarah.jones@example.com',
    phone: '7700900123'
  };

  const [name, setName] = useState(director?.name || defaultNewDirector.name);
  const [role, setRole] = useState(director?.role || defaultNewDirector.role);
  const [email, setEmail] = useState(director?.email || defaultNewDirector.email);
  const [phone, setPhone] = useState(director?.phone || defaultNewDirector.phone);
  const [isPrimary, setIsPrimary] = useState(director?.isPrimaryHolder || false);

  // Validation
  const isValid = name.trim().length > 0 && 
                  email.trim().length > 0 && 
                  phone.trim().length > 0;

  const handleSave = () => {
    if (!isValid) return;
    onSave({
      name,
      role,
      email,
      phone,
      isPrimaryHolder: isPrimary
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">
          {director ? 'Edit person' : 'Add a person'}
        </h2>
        <p className="text-text-secondary">
          {director ? 'Update details for this director.' : 'Enter details for the new director.'}
        </p>
      </div>

      <div className="space-y-5">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-secondary">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 rounded-[12px] bg-white border border-divider focus:border-brand-blue outline-none transition-all"
            placeholder="e.g. John Smith"
          />
        </div>

        {/* Role Selection - Tag/Chip Style */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-text-secondary">Role</label>
          <div className="flex flex-wrap gap-2.5">
            {ROLES.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`
                  px-4 py-2.5 rounded-full text-sm font-bold border transition-all
                  ${role === r 
                    ? 'bg-brand-navy text-white border-brand-navy shadow-sm' 
                    : 'bg-white text-text-secondary border-divider hover:border-brand-navy/30'
                  }
                `}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-secondary">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded-[12px] bg-white border border-divider focus:border-brand-blue outline-none transition-all"
            placeholder="name@company.com"
          />
        </div>

        {/* Mobile Input */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-secondary">Mobile</label>
          <div className="flex gap-2">
            <div className="w-20 h-12 flex items-center justify-center bg-offwhite-50 border border-divider rounded-[12px] text-text-secondary font-bold">
              +44
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 px-4 rounded-[12px] bg-white border border-divider focus:border-brand-blue outline-none transition-all"
              placeholder="7123 456 789"
            />
          </div>
        </div>

        {/* Checkbox - Clean Style */}
        <label className="flex items-start gap-3 cursor-pointer group mt-2 pt-2">
          <div className="relative flex items-center mt-0.5">
            <input
              type="checkbox"
              checked={isPrimary}
              onChange={(e) => setIsPrimary(e.target.checked)}
              className="peer h-6 w-6 cursor-pointer appearance-none rounded-[6px] border border-gray-300 shadow-sm checked:border-brand-blue checked:bg-brand-blue transition-all"
            />
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="14"
              height="14"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="text-sm text-brand-navy leading-tight pt-1">
            This person will be the <span className="font-bold">primary account holder</span>
          </span>
        </label>
      </div>

      <StickyFooter>
        <div className="space-y-3 w-full">
          <button
            onClick={handleSave}
            disabled={!isValid}
            className={`
              w-full h-[48px] rounded-full font-bold text-[16px] transition-all
              ${isValid 
                ? 'bg-brand-navy text-white hover:opacity-90 shadow-md' 
                : 'bg-divider text-text-secondary cursor-not-allowed'}
            `}
          >
            Save & Continue
          </button>
          
          <button
            onClick={() => onRemove(director?.id)}
            className="w-full h-[48px] rounded-full font-bold text-[16px] text-brand-navy border border-divider hover:bg-offwhite-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </StickyFooter>
    </div>
  );
}
