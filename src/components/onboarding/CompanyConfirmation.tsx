import { Company } from './types';
import { Building, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface CompanyConfirmationProps {
  company: Company;
  onConfirm: () => void;
  onBack: () => void;
}

export function CompanyConfirmation({ company, onConfirm, onBack }: CompanyConfirmationProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Confirm your company</h2>
        <p className="text-text-secondary">Please check these details are correct</p>
      </div>

      <div className="bg-white rounded-[20px] p-6 shadow-sm border border-divider/50">
        <h3 className="text-xl font-bold text-text-primary mb-6">{company.name}</h3>

        <div className="space-y-6">
          {/* Company Number */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Building className="text-brand-blue" size={24} />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-medium tracking-wide">Company Number</p>
              <p className="text-text-primary font-semibold mt-0.5">{company.number}</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-brand-blue" size={24} />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-medium tracking-wide">Registered Address</p>
              <p className="text-text-primary font-semibold mt-0.5 text-sm leading-relaxed">
                {company.address}
              </p>
            </div>
          </div>

          {/* Incorporation */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Calendar className="text-brand-blue" size={24} />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-medium tracking-wide">Incorporated</p>
              <p className="text-text-primary font-semibold mt-0.5">{company.incorporationDate}</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="text-emerald-600" size={24} />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-medium tracking-wide">Status</p>
              <p className="text-emerald-600 font-semibold mt-0.5">{company.status}</p>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={onBack}
        className="w-full text-brand-blue font-medium text-sm hover:underline"
      >
        Not your company? Go back
      </button>

      {/* Next Steps Info */}
      <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 flex gap-3">
        <CheckCircle2 className="text-brand-blue flex-shrink-0" size={20} />
        <div>
          <p className="text-sm font-semibold text-text-primary">What happens next:</p>
          <p className="text-xs text-text-secondary mt-1 leading-relaxed">
            We'll pre-fill your application with this information. You can review and edit any details in the next step.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4">
        <button
          onClick={onConfirm}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Confirm & Continue
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
