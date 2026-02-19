import { Info, Clock, ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface OnboardingLayoutProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  children: ReactNode;
  onSaveExit: () => void;
  onBack?: () => void;
  sheetClassName?: string;
}

export function OnboardingLayout({ 
  currentStep, 
  totalSteps, 
  title, 
  children,
  onSaveExit,
  onBack,
  sheetClassName = "bg-[#f1f5f9]"
}: OnboardingLayoutProps) {
  // Calculate percentage
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);
  
  // Adjusted time calculation: ~0.4 minutes (24 seconds) per step to be less scary
  // 20 steps * 0.4 = ~8 mins max
  const timeRemaining = Math.max(1, Math.ceil((totalSteps - currentStep) * 0.4)); 

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0046ad] to-[#000c45] flex flex-col md:flex-row">
      {/* Left Sidebar (Header Content on Mobile) */}
      <div className="pt-12 px-6 pb-8 md:w-5/12 lg:w-1/3 md:h-screen md:pt-16 md:px-12 md:pb-12 md:flex md:flex-col md:justify-between relative overflow-hidden shrink-0">
        
        <div className="relative z-10 w-full">
          {/* Nav Bar */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div className="flex items-center gap-3">
               {onBack && (
                 <button onClick={onBack} className="text-white hover:bg-white/10 p-1 rounded-full transition-colors">
                   <ChevronLeft size={24} />
                 </button>
               )}
              <h1 className="text-white text-base font-bold tracking-wide">{title}</h1>
            </div>
            <button 
              onClick={onSaveExit}
              className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
            >
              <Info size={20} />
            </button>
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-white md:text-sm">
              {/* Left Side: Percentage */}
              <span>{progressPercentage}% Completed</span>
              
              {/* Right Side: Time */}
              <div className="flex items-center gap-1.5 bg-blue-900/30 px-2 py-1 rounded-md border border-white/10 text-blue-100 font-medium">
                <Clock size={12} className="md:w-3.5 md:h-3.5" />
                <span>~{timeRemaining} min left</span>
              </div>
            </div>

            {/* Continuous Progress Bar */}
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-700 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Only Footer Info */}
        <div className="hidden md:block relative z-10 text-white/80 text-sm font-medium leading-relaxed max-w-xs">
          <p>Need help? Call our business support line on <span className="text-white font-bold">0345 08 08 500</span></p>
        </div>
      </div>

      {/* Main Content Sheet / Right Panel */}
      <div className={`flex-1 rounded-t-[32px] md:rounded-none px-6 py-8 md:pb-12 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:shadow-none relative overflow-y-auto md:h-screen md:flex md:flex-col md:items-center ${sheetClassName}`}>
        <div className="w-full max-w-xl mx-auto md:py-8 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
