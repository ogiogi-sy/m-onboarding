import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { StickyFooter } from './StickyFooter';

interface ScreenBusinessDetailsOptimisedProps {
  onContinue: (data: any) => void;
  prefilled?: boolean; // If came from Open Banking
}

export function ScreenBusinessDetailsOptimised({ onContinue, prefilled = false }: ScreenBusinessDetailsOptimisedProps) {
  // Pre-fill defaults for quick testing
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      turnover: prefilled ? "150000" : "50000",
      employees: "2-5",
      industry: "Technology",
      cashHandling: "no"
    }
  });
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">About your business</h2>
        <p className="text-text-secondary">
          {prefilled 
            ? "We've pre-filled this from your bank data. Please confirm." 
            : "Tell us a bit more about how you trade."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onContinue)} className="space-y-6">
        
        {/* Turnover */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
            Annual Turnover
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">£</span>
            <input
              {...register("turnover", { required: true })}
              type="number"
              className={`w-full h-12 pl-8 pr-4 rounded-[12px] bg-white border outline-none focus:border-brand-blue ${
                prefilled ? 'border-green-500/50 bg-green-50/10' : 'border-divider'
              }`}
              placeholder="0.00"
            />
            {prefilled && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                Verified
              </span>
            )}
          </div>
        </div>

        {/* Employees */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
            Number of Employees
          </label>
          <select
             {...register("employees", { required: true })}
             className="w-full h-12 px-4 rounded-[12px] bg-white border border-divider outline-none focus:border-brand-blue appearance-none"
          >
            <option value="0-1">0-1 (Sole trader)</option>
            <option value="2-5">2-5</option>
            <option value="6-10">6-10</option>
            <option value="11-50">11-50</option>
            <option value="50+">50+</option>
          </select>
        </div>

        {/* Industry - Often tricky, simple text for now */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
            What does your business do?
          </label>
          <input
            {...register("industry", { required: true })}
             type="text"
             className="w-full h-12 px-4 rounded-[12px] bg-white border border-divider outline-none focus:border-brand-blue"
             placeholder="e.g. Software Development"
          />
        </div>

        {/* Cash Handling */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
            Do you handle cash?
          </label>
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input type="radio" value="yes" {...register("cashHandling")} className="peer sr-only" />
              <div className="h-12 rounded-[12px] border border-divider peer-checked:border-brand-blue peer-checked:bg-blue-50 flex items-center justify-center font-bold text-text-secondary peer-checked:text-brand-blue transition-all">
                Yes
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input type="radio" value="no" {...register("cashHandling")} className="peer sr-only" />
              <div className="h-12 rounded-[12px] border border-divider peer-checked:border-brand-blue peer-checked:bg-blue-50 flex items-center justify-center font-bold text-text-secondary peer-checked:text-brand-blue transition-all">
                No
              </div>
            </label>
          </div>
        </div>

        <StickyFooter>
          <button
            type="submit"
            className="w-full bg-brand-navy text-white h-[48px] rounded-full font-bold text-[16px] hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </StickyFooter>
      </form>
    </div>
  );
}
