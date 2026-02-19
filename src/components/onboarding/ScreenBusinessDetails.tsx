import { useState } from 'react';

interface ScreenBusinessDetailsProps {
  onContinue: (details: {
    turnover: string;
    employees: string;
    paymentVolume: string;
    cashHandling: string;
  }) => void;
}

export function ScreenBusinessDetails({ onContinue }: ScreenBusinessDetailsProps) {
  const [turnover, setTurnover] = useState<string | null>(null);
  const [employees, setEmployees] = useState<string | null>(null);
  const [paymentVolume, setPaymentVolume] = useState<string | null>(null);
  const [cashHandling, setCashHandling] = useState<string | null>(null);

  const isComplete = turnover && employees && paymentVolume && cashHandling;

  const QuestionCard = ({ 
    title, 
    options, 
    selected, 
    onSelect 
  }: { 
    title: string; 
    options: string[]; 
    selected: string | null; 
    onSelect: (val: string) => void;
  }) => (
    <div className="bg-white rounded-[20px] p-5 shadow-sm">
      <h3 className="font-bold text-brand-navy mb-4 text-lg">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all border-2 ${
              selected === option
                ? 'bg-brand-navy text-white border-brand-navy shadow-lg shadow-brand-navy/20'
                : 'bg-white text-text-primary border-divider hover:border-brand-blue/50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pb-24 md:pb-0">
      <p className="text-text-secondary">Just a few quick questions to help us serve you better.</p>
      <div className="space-y-4">
        <QuestionCard
          title="What's your annual turnover?"
          options={['£0–250k', '£250k–1M', '£1M–5M', '£5M+']}
          selected={turnover}
          onSelect={setTurnover}
        />

        <QuestionCard
          title="How many people work with you?"
          options={['Just me', '2–10', '11–50', '50+']}
          selected={employees}
          onSelect={setEmployees}
        />

        <QuestionCard
          title="Roughly how much do you move each month?"
          options={['< £10k', '£10–50k', '£50–250k', '£250k+']}
          selected={paymentVolume}
          onSelect={setPaymentVolume}
        />

        <QuestionCard
          title="Do you deal with cash?"
          options={['Rarely', 'Monthly', 'Weekly', 'Daily']}
          selected={cashHandling}
          onSelect={setCashHandling}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-divider md:static md:bg-transparent md:border-t-0 md:p-0 md:mt-8">
        <button
          onClick={() => isComplete && onContinue({
            turnover: turnover!,
            employees: employees!,
            paymentVolume: paymentVolume!,
            cashHandling: cashHandling!
          })}
          disabled={!isComplete}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
