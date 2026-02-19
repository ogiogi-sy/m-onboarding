import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';
import { Check } from 'lucide-react';

interface ScreenQuestionCashDepositsProps {
  onNext: (value: string) => void;
  onSaveExit: () => void;
  prefilled?: boolean;
}

const OPTIONS = [
  'No',
  'Yes (small amounts)',
  'Yes (>£10k/month)'
];

export function ScreenQuestionCashDeposits({ onNext, onSaveExit, prefilled = false }: ScreenQuestionCashDepositsProps) {
  const [selected, setSelected] = useState<string>(prefilled ? OPTIONS[0] : '');

  return (
    <ScreenBusinessQuestionLayout
      title="Cash Deposits"
      subtitle="Will you be depositing cash into this account?"
      onNext={() => onNext(selected)}
      onSaveExit={onSaveExit}
      isValid={!!selected}
      isLastQuestion={true}
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
