import { Pencil, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenReviewDetailsProps {
  tradingName: string;
  tradingAddress: string;
  onContinue: () => void;
  onEdit: () => void;
}

export function ScreenReviewDetails({ tradingName, tradingAddress, onContinue, onEdit }: ScreenReviewDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Review your details</h2>
        <p className="text-text-secondary">Please confirm your business information is correct.</p>
      </div>

      <div className="bg-white rounded-[20px] border border-divider overflow-hidden shadow-sm">
        {/* Trading Name */}
        <div className="p-5 border-b border-divider">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wide">Trading Name</h3>
            <button onClick={onEdit} className="text-brand-blue hover:bg-blue-50 p-1.5 rounded-full transition-colors">
              <Pencil size={16} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
              <Building2 size={20} />
            </div>
            <p className="font-bold text-brand-navy text-lg">{tradingName}</p>
          </div>
        </div>

        {/* Trading Address */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wide">Correspondence Address</h3>
            <button onClick={onEdit} className="text-brand-blue hover:bg-blue-50 p-1.5 rounded-full transition-colors">
              <Pencil size={16} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
              <MapPin size={20} />
            </div>
            <p className="font-medium text-brand-navy leading-relaxed">{tradingAddress}</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50/50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
        <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={20} />
        <p className="text-sm text-brand-navy">
          These details will be used for your account setup and all official correspondence.
        </p>
      </div>

      <StickyFooter>
        <button
          onClick={onContinue}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-blue-900/10"
        >
          Confirm & Continue
        </button>
      </StickyFooter>
    </div>
  );
}
