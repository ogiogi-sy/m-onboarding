import { Company, Director } from './types';
import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2, Building2, User, Plus } from 'lucide-react';

interface ScreenAboutYouProps {
  company: Company;
  directors: Director[]; // Should be pre-fetched or passed in
  onContinue: (updatedDirectors: Director[]) => void;
  onBack: () => void;
}

export function ScreenAboutYou({ company, directors: initialDirectors, onContinue, onBack }: ScreenAboutYouProps) {
  const [directors, setDirectors] = useState<Director[]>(initialDirectors);

  // Mock fetching directors if empty
  useEffect(() => {
    if (directors.length === 0) {
      setDirectors([
        { id: '1', name: 'RANGNEKAR, Akshay Ajit', role: 'Director', isPsc: true, selected: false },
        { id: '2', name: 'SMITH, Sarah Jane', role: 'Director', isPsc: false, selected: false }
      ]);
    }
  }, []);

  const handleSelectDirector = (id: string) => {
    setDirectors(prev => prev.map(d => ({
      ...d,
      selected: d.id === id,
      // Reset others
      email: d.id === id ? d.email : undefined,
      phone: d.id === id ? d.phone : undefined
    })));
  };

  const handleUpdateContact = (id: string, field: 'email' | 'phone' | 'name', value: string) => {
    setDirectors(prev => prev.map(d => 
      d.id === id ? { ...d, [field]: value } : d
    ));
  };

  const handleAddDirector = () => {
    const newId = Date.now().toString(); // Use timestamp for unique ID
    setDirectors(prev => [
      ...prev.map(d => ({ ...d, selected: false })), // Deselect others
      {
        id: newId,
        name: '', // Start empty for typing
        role: 'Director',
        isPsc: false,
        selected: true, // Auto-expand
        isManual: true
      }
    ]);
  };

  const selectedDirector = directors.find(d => d.selected);
  const canContinue = selectedDirector && selectedDirector.email && selectedDirector.phone;

  return (
    <div className="space-y-8 pb-24 md:pb-0">
      {/* Section A - Company Card */}
      <div className="bg-white rounded-[20px] p-5 border border-divider shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-brand-blue">
            <Building2 size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-brand-navy truncate">{company.name}</h3>
            <p className="text-sm text-text-secondary font-mono mt-0.5">{company.number}</p>
            <p className="text-sm text-text-secondary mt-1 truncate">{company.address}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-md tracking-wider">
                Active
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-divider">
          <button onClick={onBack} className="text-sm font-semibold text-brand-blue hover:underline">
            Not your company?
          </button>
        </div>
      </div>

      {/* Section B - Who's applying */}
      <div>
        <h3 className="text-lg font-bold text-brand-navy mb-4">Who's applying today?</h3>
        <div className="space-y-3">
          {directors.map((director) => (
            <div 
              key={director.id}
              onClick={() => handleSelectDirector(director.id)}
              className={`bg-white rounded-[20px] p-4 border transition-all cursor-pointer ${
                director.selected 
                  ? 'border-brand-blue ring-1 ring-brand-blue shadow-md' 
                  : 'border-divider hover:border-brand-blue/50 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  director.selected ? 'border-brand-blue bg-brand-blue' : 'border-divider'
                }`}>
                  {director.selected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">
                    {director.name || 'New Director'}
                  </h4>
                  <p className="text-xs text-text-secondary">{director.role}</p>
                </div>
              </div>

              {director.selected && (
                <div className="mt-4 pt-4 border-t border-divider space-y-3 animate-in fade-in slide-in-from-top-1">
                  {director.isManual && (
                    <div>
                      <label className="text-xs font-bold text-text-secondary uppercase mb-1 block">Full name</label>
                      <input
                        type="text"
                        autoFocus
                        placeholder="e.g. John Doe"
                        value={director.name}
                        onChange={(e) => handleUpdateContact(director.id, 'name', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full px-3 py-2.5 rounded-[8px] border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm"
                      />
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase mb-1 block">Email address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={director.email || ''}
                      onChange={(e) => handleUpdateContact(director.id, 'email', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-2.5 rounded-[8px] border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase mb-1 block">Mobile number</label>
                    <input
                      type="tel"
                      placeholder="07700 900000"
                      value={director.phone || ''}
                      onChange={(e) => handleUpdateContact(director.id, 'phone', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-2.5 rounded-[8px] border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm"
                    />
                  </div>
                  <p className="text-xs text-text-muted">We'll verify your identity next.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={handleAddDirector}
          className="mt-4 w-full py-3 rounded-full border-2 border-brand-blue text-brand-blue font-bold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={18} strokeWidth={2.5} />
          Add another director
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-divider md:static md:bg-transparent md:border-t-0 md:p-0 md:mt-8">
        <button
          onClick={() => canContinue && onContinue(directors)}
          disabled={!canContinue}
          className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
