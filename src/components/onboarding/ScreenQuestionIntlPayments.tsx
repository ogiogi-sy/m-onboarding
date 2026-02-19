import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';

interface ScreenQuestionIntlPaymentsProps {
  onNext: (value: boolean) => void;
  onSaveExit: () => void;
  prefilled?: boolean;
}

export function ScreenQuestionIntlPayments({ onNext, onSaveExit, prefilled = false }: ScreenQuestionIntlPaymentsProps) {
  // Use null for unselected state to force user choice if not prefilled
  const [isYes, setIsYes] = useState<boolean | null>(prefilled ? false : null);

  return (
    <ScreenBusinessQuestionLayout
      title="International Payments"
      subtitle="Does your business send or receive payments from outside the UK?"
      onNext={() => onNext(isYes!)}
      onSaveExit={onSaveExit}
      isValid={isYes !== null}
      prefilled={prefilled}
    >
      <div className="flex gap-4 pt-4">
        <button
          onClick={() => setIsYes(true)}
          className={`
            flex-1 h-32 rounded-[20px] border-2 font-bold text-xl transition-all
            ${isYes === true
              ? 'border-brand-blue bg-[#E5ECF5] text-brand-blue shadow-md' 
              : 'border-divider bg-white text-text-secondary hover:border-brand-blue/50'}
          `}
        >
          Yes
        </button>
        
        <button
          onClick={() => setIsYes(false)}
          className={`
            flex-1 h-32 rounded-[20px] border-2 font-bold text-xl transition-all
            ${isYes === false
              ? 'border-brand-blue bg-[#E5ECF5] text-brand-blue shadow-md' 
              : 'border-divider bg-white text-text-secondary hover:border-brand-blue/50'}
          `}
        >
          No
        </button>
      </div>
    </ScreenBusinessQuestionLayout>
  );
}
