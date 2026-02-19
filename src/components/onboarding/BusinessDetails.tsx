import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface BusinessDetailsProps {
  onConfirm: (details: { 
    turnover: string; 
    employees: string;
    paymentVolume: string;
    cashHandling: string;
  }) => void;
  onSaveExit: () => void;
}

export function BusinessDetails({ onConfirm, onSaveExit }: BusinessDetailsProps) {
  const [turnover, setTurnover] = useState<string | null>(null);
  const [employees, setEmployees] = useState<string | null>(null);
  const [paymentVolume, setPaymentVolume] = useState<string | null>(null);
  const [cashHandling, setCashHandling] = useState<string | null>(null);

  const turnoverOptions = ['£0 – £250K', '£250K – £1M', '£1M – £5M', '£5M+'];
  const employeeOptions = ['0 – 2', '3 – 10', '11 – 50', '50+'];
  const paymentVolumeOptions = ['< £10K', '£10K – £50K', '£50K – £250K', '£250K+'];
  const cashHandlingOptions = ['Daily', 'Weekly', 'Monthly', 'Rarely/Never'];

  const isValid = turnover && employees && paymentVolume && cashHandling;

  const renderOptions = (
    options: string[], 
    selected: string | null, 
    onSelect: (val: string) => void
  ) => (
    <div className="space-y-3">
      {options.map(option => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`w-full p-4 rounded-xl text-left border transition-all font-medium ${
            selected === option
              ? 'bg-blue-50 border-brand-blue text-brand-blue ring-1 ring-brand-blue'
              : 'bg-offwhite-50 border-transparent text-text-primary hover:bg-white hover:shadow-sm'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Tell us about your business</h2>
        <p className="text-text-secondary">This helps us tailor the right banking services for you</p>
      </div>

      {/* Turnover */}
      <div>
        <label className="text-xs font-bold text-text-primary uppercase tracking-wide mb-4 block">
          Annual Turnover
        </label>
        {renderOptions(turnoverOptions, turnover, setTurnover)}
      </div>

      {/* Employees */}
      <div>
        <label className="text-xs font-bold text-text-primary uppercase tracking-wide mb-4 block">
          Number of Employees
        </label>
        {renderOptions(employeeOptions, employees, setEmployees)}
      </div>

      {/* Payment Volume */}
      <div>
        <label className="text-xs font-bold text-text-primary uppercase tracking-wide mb-4 block">
          Expected Monthly Payment Volume
        </label>
        {renderOptions(paymentVolumeOptions, paymentVolume, setPaymentVolume)}
      </div>

      {/* Cash Handling */}
      <div>
        <label className="text-xs font-bold text-text-primary uppercase tracking-wide mb-4 block">
          Cash Handling Frequency
        </label>
        {renderOptions(cashHandlingOptions, cashHandling, setCashHandling)}
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button 
          onClick={onSaveExit}
          className="flex-1 py-3 px-6 rounded-full border border-brand-navy text-brand-navy font-semibold hover:bg-offwhite-50 transition-colors"
        >
          Save & Exit
        </button>
        <button 
          onClick={() => isValid && onConfirm({ 
            turnover: turnover!, 
            employees: employees!,
            paymentVolume: paymentVolume!,
            cashHandling: cashHandling!
          })}
          disabled={!isValid}
          className="flex-1 py-3 px-6 rounded-full bg-brand-navy text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
