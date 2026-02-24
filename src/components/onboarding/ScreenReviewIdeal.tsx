import { Check, Pencil, CheckCircle2 } from 'lucide-react';
import { OnboardingState } from './types';
import { StickyFooter } from './StickyFooter';
import { useState } from 'react';

interface ScreenReviewIdealProps {
  state: OnboardingState;
  onSubmit: () => void;
  onEdit: (step: number) => void;
}

export function ScreenReviewIdeal({ state, onSubmit, onEdit }: ScreenReviewIdealProps) {
  const [agreed, setAgreed] = useState(false);

  const sections = [
    {
      id: 'company',
      title: 'Company Details',
      step: 2, // Search + Confirm (merged)
      content: (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary font-medium">Name</span>
            <span className="font-bold text-brand-navy">{state.selectedCompany?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary font-medium">Number</span>
            <span className="font-bold text-brand-navy">{state.selectedCompany?.number}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary font-medium">Registered Address</span>
            <span className="font-bold text-brand-navy text-right max-w-[200px]">{state.selectedCompany?.address}</span>
          </div>
        </div>
      )
    },
    {
      id: 'people',
      title: 'Directors & Shareholders',
      step: 3, // Director List step
      content: (
        <div className="space-y-3">
          {state.directors.map(d => (
            <div key={d.id} className="text-sm border-b border-divider last:border-0 pb-3 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                   <p className="font-bold text-brand-navy">{d.name}</p>
                   <p className="text-text-secondary text-xs">{d.role}</p>
                </div>
                {/* Verification Badge */}
                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Check size={10} strokeWidth={4} />
                  Verified
                </div>
              </div>
            </div>
          ))}
          <div className="pt-2 border-t border-divider">
             <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
               <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 <Check size={12} strokeWidth={3} />
               </div>
               ID Verified (Passport)
             </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">Review your application</h2>
        <p className="text-text-secondary">Make sure everything is correct before submitting.</p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div 
            key={section.id}
            className="bg-white rounded-[20px] shadow-sm border border-divider overflow-hidden"
          >
            <div className="flex items-center justify-between p-5 border-b border-divider">
              <h3 className="font-bold text-brand-navy">{section.title}</h3>
              <button 
                onClick={() => onEdit(section.step)}
                className="text-brand-blue hover:bg-blue-50 p-2 rounded-full transition-colors"
                aria-label={`Edit ${section.title}`}
              >
                <Pencil size={20} />
              </button>
            </div>
            
            <div className="p-5">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Legal Terms Checkbox */}
      <div className="bg-white rounded-[20px] p-5 border border-divider shadow-sm">
        <label className="flex items-start gap-3 cursor-pointer">
          <div className="relative flex items-center mt-0.5">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="peer h-6 w-6 cursor-pointer appearance-none rounded-[6px] border border-gray-300 shadow-sm checked:border-brand-blue checked:bg-brand-blue transition-all"
            />
            <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={16} strokeWidth={3} />
          </div>
          <div className="text-sm text-text-secondary leading-relaxed">
            I confirm that the information provided is accurate and I agree to the <a href="#" className="text-brand-blue font-bold hover:underline">Terms & Conditions</a> and <a href="#" className="text-brand-blue font-bold hover:underline">Privacy Policy</a>.
          </div>
        </label>
      </div>

      <StickyFooter>
        <button
          onClick={onSubmit}
          disabled={!agreed}
          className={`
            w-full h-[48px] rounded-full font-bold text-[16px] transition-all shadow-lg
            ${agreed 
              ? 'bg-brand-navy text-white hover:opacity-90' 
              : 'bg-divider text-text-secondary cursor-not-allowed shadow-none'}
          `}
        >
          Submit Application
        </button>
      </StickyFooter>
    </div>
  );
}
