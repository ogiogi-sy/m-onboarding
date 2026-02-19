import { Director } from './types';
import { User, Mail, Phone, Plus, Send, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface DirectorCheckProps {
  directors: Director[];
  onConfirm: (updatedDirectors: Director[]) => void;
  onSaveExit: () => void;
}

export function DirectorCheck({ directors: initialDirectors, onConfirm, onSaveExit }: DirectorCheckProps) {
  const [directors, setDirectors] = useState<Director[]>(initialDirectors);

  // Mock initial directors if empty
  if (directors.length === 0) {
    setDirectors([
      { 
        id: '1', 
        name: 'RANGNEKAR, Akshay Ajit', 
        role: 'Director', 
        isPsc: true, 
        selected: true 
      }
    ]);
  }

  const handleUpdateDirector = (id: string, field: keyof Director, value: string) => {
    setDirectors(prev => prev.map(d => 
      d.id === id ? { ...d, [field]: value } : d
    ));
  };

  const toggleMe = (id: string) => {
     // Logic to mark a director as "Me" (current user) could go here
     console.log('Toggled me for', id);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">Who's involved with this account?</h2>
        <p className="text-text-secondary">We've pre-filled from Companies House. Review and add contact details.</p>
      </div>

      <div className="space-y-4">
        {directors.map((director) => (
          <div key={director.id} className="bg-white rounded-[20px] p-5 shadow-sm border border-divider">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue font-semibold text-lg">
                  {director.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base">{director.name}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-offwhite-50 text-text-secondary text-[10px] uppercase font-bold rounded tracking-wider">
                      {director.role}
                    </span>
                    {director.isPsc && (
                      <span className="px-2 py-0.5 bg-offwhite-50 text-text-secondary text-[10px] uppercase font-bold rounded tracking-wider">
                        PSC
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-muted mt-1">From Companies House</p>
                </div>
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded border border-divider flex items-center justify-center">
                  {/* Simplified checkbox for UI demo */}
                </div>
                <span className="text-sm text-text-secondary">Me</span>
              </label>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary">Contact details</h4>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-brand-blue text-brand-blue font-medium text-sm hover:bg-blue-50 transition-colors"
                  onClick={() => {/* Open modal */}}
                >
                  <Mail size={16} />
                  {director.email ? 'Edit email' : 'Add email'}
                </button>
                <button 
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-brand-blue text-brand-blue font-medium text-sm hover:bg-blue-50 transition-colors"
                  onClick={() => {/* Open modal */}}
                >
                  <Phone size={16} />
                  {director.phone ? 'Edit phone' : 'Add phone'}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button className="w-full py-3 border border-brand-blue text-brand-blue rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
          <Plus size={20} />
          Add another person
        </button>
      </div>

      {/* Info Card */}
      <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 flex gap-3">
        <Send className="text-brand-blue flex-shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-sm font-semibold text-text-primary">What happens next</p>
          <p className="text-xs text-text-secondary mt-1 leading-relaxed">
            We'll send secure verification links to all Directors, PSCs, and Key Authorised Parties for identity verification.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button 
          onClick={onSaveExit}
          className="flex-1 py-3 px-6 rounded-full border border-brand-navy text-brand-navy font-semibold hover:bg-offwhite-50 transition-colors"
        >
          Save & Exit
        </button>
        <button 
          onClick={() => onConfirm(directors)}
          className="flex-1 py-3 px-6 rounded-full bg-brand-navy text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20"
        >
          Continue
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
