import { FileText, Users, Smartphone, FileCheck, Landmark, Clock, ArrowRight } from 'lucide-react';

interface OnboardingWelcomeProps {
  onStart: () => void;
  onResume: () => void;
}

export function OnboardingWelcome({ onStart, onResume }: OnboardingWelcomeProps) {
  return (
    <div className="min-h-screen bg-offwhite-50 p-6 flex flex-col">
      {/* Header Content */}
      <div className="pt-8 pb-6">
        <h1 className="text-3xl font-bold text-brand-navy mb-3">
          Open a Business Current Account
        </h1>
        <p className="text-text-secondary leading-relaxed">
          Get started in minutes. You can pause and resume this application at any time.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-sm flex-1 flex flex-col mb-6">
        <h2 className="text-lg font-semibold text-brand-navy mb-6">
          What you'll need
        </h2>

        <div className="space-y-6 flex-1">
          {/* Item 1 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <FileText className="text-brand-red" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy text-sm">Company details</h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Registration number or company name
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <Users className="text-brand-red" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy text-sm">Director details</h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Names and contact info for all directors
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <Smartphone className="text-brand-red" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy text-sm">Proof of ID</h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Photo ID (Passport or Driving Licence) for all applicants
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <FileCheck className="text-brand-red" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy text-sm">Proof of address</h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Utility bill or bank statement (last 3 months)
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <Landmark className="text-brand-red" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy text-sm">Bank details (Optional)</h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Existing account info for faster checks
              </p>
            </div>
          </div>
        </div>

        {/* Time Estimate */}
        <div className="mt-8 pt-6 border-t border-divider flex items-center gap-2 text-text-secondary">
          <Clock size={18} />
          <span className="text-sm font-medium">Takes about 10-15 minutes</span>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="mt-auto space-y-4">
        <button
          onClick={onStart}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
        >
          Start Application
        </button>
        
        <button 
          onClick={onResume}
          className="w-full text-brand-blue font-semibold text-sm hover:underline"
        >
          Already started? <span className="underline">Resume application</span>
        </button>
      </div>
    </div>
  );
}
