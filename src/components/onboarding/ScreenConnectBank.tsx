import { Landmark, Check, Lock, ArrowRight } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenConnectBankProps {
  onConnect: () => void;
  onSkip: () => void;
}

export function ScreenConnectBank({ onConnect, onSkip }: ScreenConnectBankProps) {
  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-140px)] md:min-h-0">
      <div className="flex-1 space-y-8">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center shadow-lg shadow-brand-navy/20">
          <Landmark size={32} className="text-white" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight text-brand-navy">
            Connect business bank account
          </h1>
          <p className="text-text-secondary leading-relaxed text-lg">
            Connect your existing business account to speed up your application and verify your business details automatically.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <div className="space-y-4">
            <FeatureRow text="Auto-fill business details" />
            <FeatureRow text="Verify turnover & activity" />
            <FeatureRow text="Instant identity check" />
          </div>
        </div>
      </div>

      <div className="mt-auto pt-12">
        <div className="flex items-center gap-2 text-xs text-text-muted font-medium mb-4 justify-center md:justify-start">
          <Lock size={12} />
          <span>Secure Open Banking connection</span>
        </div>

        <StickyFooter>
          <div className="space-y-4">
            <button
              onClick={onConnect}
              className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20 group"
            >
              Connect securely
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onSkip}
              className="w-full text-brand-navy font-bold text-[14px] hover:text-brand-blue transition-colors py-2"
            >
              I don't have a business account
            </button>
          </div>
        </StickyFooter>
      </div>
    </div>
  );
}

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
        <Check size={14} className="text-green-500" strokeWidth={3} />
      </div>
      <span className="font-bold text-lg text-brand-navy">{text}</span>
    </div>
  );
}
