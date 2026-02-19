import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';
import { Check } from 'lucide-react';

interface ScreenQuestionPaymentTypesProps {
  onNext: (value: string[]) => void;
  onSaveExit: () => void;
  prefilled?: boolean;
}

const OPTIONS = [
  'Supplier payments',
  'Payroll',
  'Tax payments',
  'Card payments',
  'Cash',
  'International'
];

export function ScreenQuestionPaymentTypes({ onNext, onSaveExit, prefilled = false }: ScreenQuestionPaymentTypesProps) {
  const [selected, setSelected] = useState<string[]>(prefilled ? [OPTIONS[0], OPTIONS[2]] : []);

  const toggle = (option: string) => {
    setSelected(prev => 
      prev.includes(option) 
        ? prev.filter(p => p !== option)
        : [...prev, option]
    );
  };

  return (
    <ScreenBusinessQuestionLayout
      title="Payment Types"
      subtitle="What kind of payments will you make from this account? Select all that apply."
      onNext={() => onNext(selected)}
      onSaveExit={onSaveExit}
      isValid={selected.length > 0}
      prefilled={prefilled}
    >
      <div className="grid grid-cols-1 gap-3">
        {OPTIONS.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`
                p-4 rounded-[16px] border text-left flex items-center justify-between transition-all
                ${isSelected 
                  ? 'border-brand-blue bg-[#E5ECF5] shadow-sm' 
                  : 'border-divider bg-white hover:border-brand-blue/50'}
              `}
            >
              <span className={`font-bold text-base ${isSelected ? 'text-brand-navy' : 'text-text-secondary'}`}>
                {option}
              </span>
              {isSelected && (
                <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                  <Check size={12} className="text-white stroke-[3px]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </ScreenBusinessQuestionLayout>
  );
}
