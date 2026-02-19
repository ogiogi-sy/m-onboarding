import { User, Plus, Mail, Phone, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Director } from './types';
import { StickyFooter } from './StickyFooter';

interface ScreenDirectorsListProps {
  directors: Director[];
  onAdd: () => void;
  onContinue: (updatedDirectors: Director[], applicantId: string) => void;
}

export function ScreenDirectorsList({ directors, onAdd, onContinue }: ScreenDirectorsListProps) {
  // Who is the primary applicant (It's me)
  const [applicantId, setApplicantId] = useState<string | null>(
    directors.find(d => d.isPrimaryHolder)?.id || null
  );

  // Which card is currently expanded for editing
  const [expandedId, setExpandedId] = useState<string | null>(
    directors.find(d => d.isPrimaryHolder)?.id || directors[0]?.id || null
  );
  
  // Form state
  const [formData, setFormData] = useState<Record<string, { email: string; phone: string }>>(() => {
    const initial: Record<string, { email: string; phone: string }> = {};
    directors.forEach(d => {
      initial[d.id] = { email: d.email || '', phone: d.phone || '' };
    });
    return initial;
  });

  const handleInputChange = (id: string, field: 'email' | 'phone', value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const toggleExpand = (id: string) => {
    setExpandedId(current => current === id ? null : id);
  };

  const handleContinue = () => {
    // Validate again just in case
    if (!applicantId) return;
    const allHaveInfo = directors.every(d => {
       const data = formData[d.id];
       return data?.email?.trim() && data?.phone?.trim();
    });
    if (!allHaveInfo) return;
    
    const updatedDirectors = directors.map(d => ({
      ...d,
      isPrimaryHolder: d.id === applicantId,
      email: formData[d.id]?.email,
      phone: formData[d.id]?.phone
    }));

    onContinue(updatedDirectors, applicantId);
  };

  // Check if a director has data entered
  const hasData = (id: string) => {
    const data = formData[id];
    return data?.email && data?.phone;
  };

  // Validation for the main button
  const isFormValid = applicantId !== null && directors.every(d => {
     const data = formData[d.id];
     return data?.email?.trim().length > 0 && data?.phone?.trim().length > 0;
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-navy">Who's involved?</h2>
        <p className="text-text-secondary">Add contact details for everyone, then select which one is you.</p>
      </div>

      <div className="space-y-4">
        {directors.map((director) => {
          const isExpanded = expandedId === director.id;
          const isMe = applicantId === director.id;
          const data = formData[director.id];
          const dataEntered = hasData(director.id);
          
          return (
            <div 
              key={director.id}
              className={`
                rounded-[20px] bg-white transition-all duration-300 overflow-hidden
                ${isExpanded || isMe 
                  ? 'border-2 border-brand-blue shadow-md' 
                  : 'border border-divider shadow-sm'}
              `}
            >
              {/* Card Header */}
              <div 
                className="p-5 flex items-start justify-between cursor-pointer"
                onClick={() => toggleExpand(director.id)}
              >
                <div className="flex gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                    ${isMe ? 'bg-brand-blue text-white' : 'bg-offwhite-50 text-brand-navy'}
                  `}>
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-lg leading-tight">
                      {director.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-text-secondary text-xs font-bold uppercase tracking-wider">
                        {director.role}
                      </span>
                      {director.isPsc && (
                        <>
                          <span className="text-divider text-[8px]">•</span>
                          <span className="text-text-secondary text-xs font-bold uppercase tracking-wider">
                            PSC
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {isExpanded ? (
                  <ChevronUp className="text-text-secondary shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-text-secondary shrink-0" size={24} />
                )}
              </div>

              {/* Expanded Content */}
              {isExpanded ? (
                <div className="px-5 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="w-full h-px bg-divider/50 mb-5" />
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1">Email address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                        <input
                          type="email"
                          value={data.email}
                          onChange={(e) => handleInputChange(director.id, 'email', e.target.value)}
                          className="w-full h-12 pl-12 pr-4 rounded-[12px] bg-offwhite-50 border border-transparent focus:bg-white focus:border-brand-blue outline-none transition-all"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1">Mobile number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                        <input
                          type="tel"
                          value={data.phone}
                          onChange={(e) => handleInputChange(director.id, 'phone', e.target.value)}
                          className="w-full h-12 pl-12 pr-4 rounded-[12px] bg-offwhite-50 border border-transparent focus:bg-white focus:border-brand-blue outline-none transition-all"
                          placeholder="07700 900000"
                        />
                      </div>
                    </div>

                    {/* "It's Me" Toggle - Moved to bottom */}
                    <div className="pt-2">
                      <label 
                        className={`
                          flex items-center justify-between p-4 rounded-[12px] border cursor-pointer transition-all
                          ${isMe 
                            ? 'bg-blue-50/50 border-brand-blue' 
                            : 'bg-white border-divider hover:border-brand-blue/50'}
                        `}
                        onClick={(e) => {
                          // Prevent triggering if clicking inputs inside label (though unlikely here)
                          e.stopPropagation();
                        }}
                      >
                        <div className="flex items-center gap-3">
                           <div className={`
                             w-5 h-5 rounded-full border flex items-center justify-center transition-all
                             ${isMe ? 'bg-brand-blue border-brand-blue' : 'bg-white border-text-secondary'}
                           `}>
                             {isMe && <Check size={12} className="text-white stroke-[3px]" />}
                           </div>
                           <span className={`font-bold text-sm ${isMe ? 'text-brand-navy' : 'text-text-secondary'}`}>
                             I am this person
                           </span>
                        </div>
                        {/* Hidden checkbox for semantic correctness */}
                        <input 
                          type="checkbox" 
                          className="sr-only"
                          checked={isMe}
                          onChange={() => setApplicantId(isMe ? null : director.id)}
                        />
                      </label>
                    </div>

                  </div>
                </div>
              ) : (
                /* Collapsed Action Area */
                <div className="px-5 pb-5">
                   {!dataEntered ? (
                     <button 
                       onClick={() => setExpandedId(director.id)}
                       className="w-full py-3 bg-blue-50 text-brand-blue rounded-[12px] font-bold text-sm hover:bg-blue-100 transition-colors"
                     >
                       Choose & add details
                     </button>
                   ) : (
                     <div className="flex items-center gap-2 text-sm text-text-secondary pl-1">
                        <Check size={16} className="text-green-500 stroke-[3px]" />
                        <span>Details added</span>
                        {isMe && (
                          <>
                            <span className="text-divider">•</span>
                            <span className="font-bold text-brand-navy">Applying</span>
                          </>
                        )}
                     </div>
                   )}
                </div>
              )}
            </div>
          );
        })}

        {/* Add Manual Director Button */}
        <button 
          onClick={onAdd}
          className="w-full py-4 flex items-center justify-center gap-2 rounded-full border border-brand-navy text-brand-navy font-bold hover:bg-offwhite-50 transition-all"
        >
          <Plus size={20} />
          <span>Add director manually</span>
        </button>
      </div>

      <StickyFooter>
        <button
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`
            w-full h-[48px] rounded-full font-bold text-[16px] transition-all shadow-lg flex items-center justify-center gap-2
            ${isFormValid 
              ? 'bg-brand-navy text-white hover:opacity-90 hover:scale-[1.01]' 
              : 'bg-divider text-text-secondary cursor-not-allowed shadow-none'}
          `}
        >
          <span>Continue</span>
          {!isFormValid && (
             // Optional: Tooltip or indicator why it's disabled? 
             // For now, keeping it clean as per standard patterns.
             <span className="hidden">Complete all fields</span>
          )}
        </button>
      </StickyFooter>
    </div>
  );
}
