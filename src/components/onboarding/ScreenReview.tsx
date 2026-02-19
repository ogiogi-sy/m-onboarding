import { Edit2, ShieldCheck, Check } from 'lucide-react';
import { OnboardingState } from './types';
import { useState } from 'react';

interface ScreenReviewProps {
  state: OnboardingState;
  onSubmit: () => void;
  onEditStep: (step: number) => void;
}

export function ScreenReview({ state, onSubmit, onEditStep }: ScreenReviewProps) {
  const [agreed, setAgreed] = useState(false);

  const SummaryCard = ({ 
    title, 
    step,
    children 
  }: { 
    title: string; 
    step: number;
    children: React.ReactNode 
  }) => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-text-primary text-xs uppercase tracking-wider">{title}</h3>
        <button 
          onClick={() => onEditStep(step)}
          className="text-brand-blue hover:bg-blue-50 p-1.5 rounded-lg transition-colors"
        >
          <Edit2 size={18} />
        </button>
      </div>
      <div className="text-base text-text-primary space-y-1">
        {children}
      </div>
    </div>
  );

  const applicant = state.directors.find(d => d.selected);

  return (
    <div className="space-y-6 pb-32 md:pb-0">
      <p className="text-text-secondary">Check everything is correct.</p>
      <div className="space-y-4">
        <SummaryCard title="Company" step={1}>
          <p className="uppercase font-semibold">{state.selectedCompany?.name}</p>
          <p className="text-text-primary">{state.selectedCompany?.number}</p>
          <p className="text-text-primary">{state.selectedCompany?.address}</p>
        </SummaryCard>

        <SummaryCard title="Applicant" step={2}>
          <p className="uppercase font-semibold">{applicant?.name}</p>
          <p className="text-text-primary">{applicant?.email}</p>
          <p className="text-text-primary">{applicant?.phone}</p>
        </SummaryCard>

        <SummaryCard title="Location" step={4}>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">Correspondence</p> 
              <p>{state.tradingAddress === 'registered' ? 'Registered Address' : 'Custom Address'}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">Branch</p> 
              <p>{state.selectedBranch?.name}</p>
            </div>
          </div>
        </SummaryCard>

        <SummaryCard title="Business Profile" step={5}>
          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">Turnover</p>
              <p>{state.businessDetails?.turnover}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">Employees</p>
              <p>{state.businessDetails?.employees}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">Monthly Payments</p>
              <p>{state.businessDetails?.paymentVolume}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">Cash Handling</p>
              <p>{state.businessDetails?.cashHandling}</p>
            </div>
          </div>
        </SummaryCard>
      </div>

      <div className="mt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
            agreed ? 'bg-brand-navy border-brand-navy' : 'bg-white border-divider'
          }`}>
            {agreed && <Check size={14} className="text-white" strokeWidth={3} />}
          </div>
          <input 
            type="checkbox" 
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="sr-only"
          />
          <div className="text-sm">
            <span className="font-bold text-brand-navy">I agree to the Terms & Conditions and Privacy Policy</span>
          </div>
        </label>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-divider space-y-3 md:static md:bg-transparent md:border-t-0 md:p-0 md:mt-8">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-600">
          <ShieldCheck size={14} />
          <span>Secure and encrypted</span>
        </div>
        <button
          onClick={onSubmit}
          disabled={!agreed}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Submit application
        </button>
      </div>
    </div>
  );
}
