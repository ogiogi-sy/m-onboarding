import { Building, Info } from 'lucide-react';
import { Company } from './types';
import { StickyFooter } from './StickyFooter';

interface ScreenConfirmCompanyProps {
  company: Company;
  onConfirm: () => void;
  onBack: () => void;
}

export function ScreenConfirmCompany({ company, onConfirm, onBack }: ScreenConfirmCompanyProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">Confirm your company</h2>
      </div>

      <div className="bg-white rounded-[20px] p-6 shadow-sm border border-divider">
        <div className="w-12 h-12 rounded-full bg-offwhite-50 flex items-center justify-center mb-4">
          <Building className="text-brand-navy" size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-brand-navy mb-6">{company.name}</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">
              Company Number
            </label>
            <p className="text-brand-navy font-medium font-mono">{company.number}</p>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">
              Registered Address
            </label>
            <p className="text-brand-navy font-medium">{company.address}</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">
              Incorporated
            </label>
            <p className="text-brand-navy font-medium">15 March 2020</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">
              Company Type
            </label>
            <p className="text-brand-navy font-medium">Private Limited Company</p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-[16px] border border-blue-100">
        <Info className="text-brand-blue shrink-0 mt-0.5" size={20} />
        <p className="text-sm text-brand-navy">
          Information pulled from <span className="font-bold">Companies House</span>
        </p>
      </div>

      <StickyFooter>
        <div className="space-y-4">
          <button
            onClick={onConfirm}
            className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity"
          >
            Confirm & Continue
          </button>

          <button
            onClick={onBack}
            className="w-full text-brand-navy font-bold text-[16px] border border-divider hover:bg-offwhite-50 h-[48px] rounded-full transition-colors"
          >
            This isn't my company
          </button>
        </div>
      </StickyFooter>
    </div>
  );
}
