import { Building2, ShieldCheck, Clock, CheckCircle2, ArrowRight, CreditCard } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

interface ScreenWelcomeIdealProps {
  onStart: () => void;
  onResume: () => void;
}

export function ScreenWelcomeIdeal({ onStart, onResume }: ScreenWelcomeIdealProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-brand-navy tracking-tight leading-tight">
          Business banking, <br />
          <span className="text-brand-blue">simplified.</span>
        </h1>
        <p className="text-text-secondary leading-relaxed text-base">
          Open your account in minutes. No paperwork, just a streamlined digital flow.
        </p>
      </div>

      {/* What you'll need Section */}
      <div className="space-y-4">
        <h3 className="font-bold text-brand-navy text-xl">What you'll need</h3>
        <div className="space-y-3">
          <ListCard 
            icon={<Building2 size={24} className="text-[#3B82F6]" />}
            iconBg="bg-[#EFF6FF]"
            title="Company details"
            subtitle="Registration number"
          />
          <ListCard 
            icon={<ShieldCheck size={24} className="text-[#6366F1]" />}
            iconBg="bg-[#EEF2FF]"
            title="Director & ID"
            subtitle="Passport or UK Driving Licence"
          />
           <ListCard 
            icon={<CreditCard size={24} className="text-purple-600" />}
            iconBg="bg-purple-50"
            title="Current Bank"
            subtitle="Existing UK bank account"
          />
          <ListCard 
            icon={<Clock size={24} className="text-[#F97316]" />}
            iconBg="bg-[#FFF7ED]"
            title="~5 minutes"
            subtitle="To complete the application"
          />
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="space-y-4 pt-2">
        <h3 className="font-bold text-brand-navy text-xl">Eligibility</h3>
        <div className="space-y-3">
          <EligibilityItem text="Registered UK Limited Company" />
          <EligibilityItem text="Active and trading (or ready to trade)" />
        </div>
      </div>

      <StickyFooter>
        <div className="space-y-4">
          <button
            onClick={onStart}
            className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-navy/20"
          >
            Start Application
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onResume}
            className="w-full text-brand-navy font-bold text-[16px] border border-divider hover:bg-offwhite-50 h-[48px] rounded-full transition-colors"
          >
            Resume saved application
          </button>
        </div>
      </StickyFooter>
    </div>
  );
}

function ListCard({ icon, iconBg, title, subtitle }: { icon: React.ReactNode, iconBg: string, title: string, subtitle: string }) {
  return (
    <div className="bg-white rounded-[20px] p-4 flex items-center gap-4 border border-transparent hover:border-brand-blue/20 transition-colors">
      <div className={`w-12 h-12 rounded-[12px] ${iconBg} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-brand-navy text-[15px]">{title}</div>
        <div className="text-sm text-text-secondary">{subtitle}</div>
      </div>
    </div>
  );
}

function EligibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-white">
         <CheckCircle2 size={22} className="text-[#22C55E]" />
      </div>
      <span className="text-[15px] text-brand-navy font-medium">{text}</span>
    </div>
  );
}
