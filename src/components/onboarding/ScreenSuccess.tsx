import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export function ScreenSuccess() {
  return (
    <div className="flex flex-col h-full max-w-md mx-auto w-full">
      <div className="flex-1 flex flex-col items-center text-center justify-center">
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
          <CheckCircle2 className="text-emerald-600" size={48} strokeWidth={2} />
        </div>
        
        <h1 className="text-3xl font-bold text-brand-navy mb-3">Application submitted</h1>
        <p className="text-text-secondary font-medium">Most applications are approved within 2 hours.</p>

        <div className="w-full bg-white rounded-2xl p-6 border border-divider shadow-sm mt-8 text-left">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">Application Reference</p>
          <p className="text-xl font-mono font-bold text-brand-navy mb-6">MB-8829-XJ4</p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-brand-navy text-sm">What happens next?</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5" />
                We'll review your details
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5" />
                You'll receive an email with the outcome
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5" />
                Your card will arrive in 3-5 days
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-4 pt-6">
        <button className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2">
          Go to dashboard
          <ArrowRight size={20} />
        </button>
        
        <button className="w-full text-brand-blue font-semibold text-sm hover:underline flex items-center justify-center gap-1">
          Add another director
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
}
