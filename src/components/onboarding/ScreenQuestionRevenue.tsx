import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';
import { Check } from 'lucide-react';

interface ScreenQuestionRevenueProps {
  onNext: (value: string[]) => void;
  onSaveExit: () => void;
}

const OPTIONS = [
  'Selling goods',
  'Providing services',
  'Invoices',
  'Online marketplace',
  'Subscriptions',
  'Grants',
  'Investments',
  'Other'
];

export function ScreenQuestionRevenue({ onNext, onSaveExit }: ScreenQuestionRevenueProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) => {
    setSelected(prev => 
      prev.includes(option) 
        ? prev.filter(p => p !== option)
        : [...prev, option]
    );
  };

  return (
    <ScreenBusinessQuestionLayout
      title="Revenue Sources"
      subtitle="Where does your business money come from? Select all that apply."
      onNext={() => onNext(selected)}
      onSaveExit={onSaveExit}
      isValid={selected.length > 0}
    >
      <div className="space-y-3">
        {OPTIONS.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`
                w-full p-5 rounded-[16px] border text-left flex items-center justify-between transition-all
                ${isSelected 
                  ? 'border-brand-blue bg-[#E5ECF5] shadow-sm' 
                  : 'border-divider bg-white hover:border-brand-blue/50'}
              `}
            >
              <span className={`font-bold text-lg ${isSelected ? 'text-brand-navy' : 'text-text-secondary'}`}>
                {option}
              </span>
              {isSelected && (
                <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                  <Check size={14} className="text-white stroke-[3px]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </ScreenBusinessQuestionLayout>
  );
}
