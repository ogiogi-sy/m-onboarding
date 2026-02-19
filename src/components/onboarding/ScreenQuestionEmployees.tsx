import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';
import { Check } from 'lucide-react';

interface ScreenQuestionEmployeesProps {
  onNext: (value: string) => void;
  onSaveExit: () => void;
  prefilled?: boolean;
}

const OPTIONS = ['0 – 5', '5 – 10', '10 – 50', '50+'];

export function ScreenQuestionEmployees({ onNext, onSaveExit, prefilled = false }: ScreenQuestionEmployeesProps) {
  const [selected, setSelected] = useState<string>(prefilled ? OPTIONS[1] : '');

  return (
    <ScreenBusinessQuestionLayout
      title="Number of Employees"
      subtitle="How many people does your business employ?"
      onNext={() => onNext(selected)}
      onSaveExit={onSaveExit}
      isValid={!!selected}
      prefilled={prefilled}
    >
      <div className="space-y-3">
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`
              w-full p-5 rounded-[16px] border text-left flex items-center justify-between transition-all
              ${selected === option 
                ? 'border-brand-blue bg-[#E5ECF5] shadow-sm' 
                : 'border-divider bg-white hover:border-brand-blue/50'}
            `}
          >
            <span className={`font-bold text-lg ${selected === option ? 'text-brand-navy' : 'text-text-secondary'}`}>
              {option}
            </span>
            {selected === option && (
               <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                 <Check size={14} className="text-white stroke-[3px]" />
               </div>
            )}
          </button>
        ))}
      </div>
    </ScreenBusinessQuestionLayout>
  );
}
