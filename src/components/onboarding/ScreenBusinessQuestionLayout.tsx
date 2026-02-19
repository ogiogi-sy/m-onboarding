import { ReactNode } from 'react';
import { StickyFooter } from './StickyFooter';
import { Sparkles } from 'lucide-react';

interface ScreenBusinessQuestionLayoutProps {
  title: string;
  subtitle?: string;
  onNext: () => void;
  onSaveExit: () => void;
  children: ReactNode;
  isValid: boolean;
  isLastQuestion?: boolean;
  prefilled?: boolean;
}

export function ScreenBusinessQuestionLayout({ 
  title, 
  subtitle, 
  onNext, 
  onSaveExit, 
  children,
  isValid,
  isLastQuestion = false,
  prefilled = false
}: ScreenBusinessQuestionLayoutProps) {
  return (
    <div className="flex flex-col h-full min-h-[60vh]">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-brand-navy">{title}</h2>
          {prefilled && (
            <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-left-2 duration-500">
              <Sparkles size={12} className="fill-green-700" />
              <span>Prefilled</span>
            </div>
          )}
        </div>
        {subtitle && <p className="text-text-secondary">{subtitle}</p>}
      </div>

      <div className="flex-1">
        {children}
      </div>

      <StickyFooter>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`
            w-full h-[48px] rounded-full font-bold text-[16px] transition-all shadow-lg
            ${isValid 
              ? 'bg-brand-navy text-white hover:opacity-90' 
              : 'bg-divider text-text-secondary cursor-not-allowed shadow-none'}
          `}
        >
          {isLastQuestion ? 'Review Application →' : 'Next →'}
        </button>
      </StickyFooter>
    </div>
  );
}
