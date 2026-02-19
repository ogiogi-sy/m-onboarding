import { useState } from 'react';
import { OnboardingState } from './types';
import { ChevronRight, Edit2, FileText, Building2, User, MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface ReviewSubmitProps {
  state: OnboardingState;
  onSubmit: () => void;
  onBack: () => void;
  onEditStep: (step: number) => void;
}

export function ReviewSubmit({ state, onSubmit, onBack, onEditStep }: ReviewSubmitProps) {
  const [agreed, setAgreed] = useState(false);

  const Section = ({ 
    title, 
    step, 
    icon: Icon,
    children 
  }: { 
    title: string; 
    step: number; 
    icon: any;
    children: React.ReactNode 
  }) => (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-divider">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-brand-navy">
          <Icon size={20} />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <button 
          onClick={() => onEditStep(step)}
          className="text-brand-blue text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <Edit2 size={14} />
          Edit
        </button>
      </div>
      <div className="space-y-2 text-sm text-text-secondary">
        {children}
      </div>
    </div>
  );

  const applicant = state.directors.find(d => d.selected);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Review your details</h2>
        <p className="text-text-secondary">Please check everything is correct before submitting.</p>
      </div>

      <div className="space-y-4">
        {/* Company Details */}
        <Section title="Company Details" step={1} icon={Building2}>
          {state.selectedCompany ? (
            <>
              <p><span className="font-medium text-text-primary">Name:</span> {state.selectedCompany.name}</p>
              <p><span className="font-medium text-text-primary">Number:</span> {state.selectedCompany.number}</p>
              <p><span className="font-medium text-text-primary">Registered Address:</span> {state.selectedCompany.address}</p>
            </>
          ) : (
            <p className="text-brand-red">No company selected</p>
          )}
        </Section>

        {/* Applicant Details */}
        <Section title="Applicant" step={3} icon={User}>
          {applicant ? (
            <>
              <p><span className="font-medium text-text-primary">Name:</span> {applicant.name}</p>
              <p><span className="font-medium text-text-primary">Role:</span> {applicant.role}</p>
              <p><span className="font-medium text-text-primary">Email:</span> {applicant.email || 'Not provided'}</p>
            </>
          ) : (
            <p className="text-brand-red">No applicant selected</p>
          )}
        </Section>

        {/* Branch Details */}
        <Section title="Selected Branch" step={6} icon={MapPin}>
          {state.selectedBranch ? (
            <>
              <p><span className="font-medium text-text-primary">Branch:</span> {state.selectedBranch.name}</p>
              <p><span className="font-medium text-text-primary">Address:</span> {state.selectedBranch.address}</p>
            </>
          ) : (
            <p className="text-brand-red">No branch selected</p>
          )}
        </Section>

        {/* Business Details */}
        <Section title="Business Profile" step={7} icon={FileText}>
          {state.businessDetails ? (
            <div className="grid grid-cols-2 gap-y-2">
              <div>
                <span className="block font-medium text-text-primary">Turnover</span>
                {state.businessDetails.turnover}
              </div>
              <div>
                <span className="block font-medium text-text-primary">Employees</span>
                {state.businessDetails.employees}
              </div>
              <div>
                <span className="block font-medium text-text-primary">Monthly Payments</span>
                {state.businessDetails.paymentVolume}
              </div>
              <div>
                <span className="block font-medium text-text-primary">Cash Handling</span>
                {state.businessDetails.cashHandling}
              </div>
            </div>
          ) : (
            <p className="text-brand-red">Details incomplete</p>
          )}
        </Section>
      </div>

      {/* Terms */}
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
        <label className="flex items-start gap-3 cursor-pointer">
          <div className="pt-0.5">
            <input 
              type="checkbox" 
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
            />
          </div>
          <div className="text-sm">
            <span className="font-semibold text-brand-navy">I agree to the Terms & Conditions</span>
            <p className="text-text-secondary mt-1">
              By submitting this application, I confirm that the information provided is true and accurate. I understand that a credit check may be performed.
            </p>
          </div>
        </label>
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-2">
        <button 
          onClick={onBack}
          className="px-6 py-3 rounded-full border border-gray-300 text-text-secondary font-semibold hover:bg-gray-50"
        >
          Back
        </button>
        <button 
          onClick={() => {
            if (!agreed) {
              toast.error('Please agree to the terms to continue');
              return;
            }
            onSubmit();
          }}
          className={`flex-1 py-3 px-6 rounded-full bg-brand-navy text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20 ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Submit Application
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
