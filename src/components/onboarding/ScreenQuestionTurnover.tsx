import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';
import { Check } from 'lucide-react';

interface ScreenQuestionTurnoverProps {
  onNext: (value: string) => void;
  onSaveExit: () => void;
  prefilled?: boolean;
}

const OPTIONS = ['£0 – £250k', '£250k – £1M', '£1M – £5M', '£5M+'];

export function ScreenQuestionTurnover({ onNext, onSaveExit, prefilled = false }: ScreenQuestionTurnoverProps) {
  const [selected, setSelected] = useState<string>(prefilled ? OPTIONS[0] : '');

  return (
    <ScreenBusinessQuestionLayout
      title="Annual Turnover"
      subtitle="What is your expected annual turnover for the next 12 months?"
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
