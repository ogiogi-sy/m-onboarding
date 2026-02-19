import { CircleAlert, ArrowRight, ExternalLink } from 'lucide-react';
import { StickyFooter } from './StickyFooter';
import { TerminationState } from './types';

interface ScreenTerminationProps {
  termination: TerminationState;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export function ScreenTermination({ termination, onPrimaryAction, onSecondaryAction }: ScreenTerminationProps) {
  const getDefaultContent = () => {
    switch (termination.reason) {
      case 'high_turnover':
        return {
          title: "We can't proceed with your application online",
          description: "Based on the turnover you provided, your business requires a specialized account setup. Our branch team can help you with this.",
          primary: "Find nearest branch",
          secondary: "Back to home"
        };
      case 'identity_failed':
        return {
          title: "Identity verification failed",
          description: "We couldn't verify your identity with the documents provided. Please visit a branch to complete your application in person.",
          primary: "Find nearest branch",
          secondary: "Try again"
        };
      case 'risk_flag':
        return {
          title: "Application Declined",
          description: "Unfortunately, we are unable to offer you a business account at this time based on our internal risk assessment criteria.",
          primary: "Close application",
          secondary: "Learn more about eligibility"
        };
      default:
        return {
          title: "We can't proceed with your application",
          description: "Something went wrong and we cannot continue with your application at this time.",
          primary: "Close",
          secondary: "Contact support"
        };
    }
  };

  const content = getDefaultContent();
  const title = termination.title || content.title;
  const description = termination.description || content.description;
  const primaryLabel = termination.primaryActionLabel || content.primary;
  const secondaryLabel = termination.secondaryActionLabel || content.secondary;

  return (
    <div className="flex flex-col h-full bg-offwhite-50">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full">
        
        {/* Red Icon Container */}
        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-8 animate-in zoom-in duration-300">
          <CircleAlert size={40} className="text-brand-red" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
          {title}
        </h1>

        <p className="text-text-secondary text-lg leading-relaxed mb-8">
          {description}
        </p>

        <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm w-full text-left flex items-start gap-3 mb-8">
           <div className="mt-0.5">
             <CircleAlert size={16} className="text-brand-red" />
           </div>
           <div className="text-sm text-text-secondary">
             Reference: <span className="font-mono font-medium text-brand-navy">APP-{Math.floor(Math.random() * 100000)}</span>
           </div>
        </div>
      </div>

      <StickyFooter>
        <div className="space-y-3">
          <button
            onClick={onPrimaryAction}
            className="w-full bg-brand-red text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/10"
          >
            {primaryLabel}
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onSecondaryAction}
            className="w-full text-brand-navy font-bold text-[14px] hover:bg-gray-100 h-[48px] rounded-full transition-colors flex items-center justify-center gap-2"
          >
            {secondaryLabel}
            {secondaryLabel.toLowerCase().includes('learn') && <ExternalLink size={16} />}
          </button>
        </div>
      </StickyFooter>
    </div>
  );
}
