import { useState } from 'react';
import { ScreenBusinessQuestionLayout } from './ScreenBusinessQuestionLayout';
import { Globe } from 'lucide-react';

interface ScreenQuestionWebsiteProps {
  onNext: (value: string) => void;
  onSaveExit: () => void;
}

export function ScreenQuestionWebsite({ onNext, onSaveExit }: ScreenQuestionWebsiteProps) {
  const [website, setWebsite] = useState('');

  return (
    <ScreenBusinessQuestionLayout
      title="Company Website"
      subtitle="Does your business have a website? If not, leave blank."
      onNext={() => onNext(website || 'No website')}
      onSaveExit={onSaveExit}
      isValid={true} // Optional
    >
      <div className="pt-2">
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1 mb-2 block">
          Website URL
        </label>
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-[16px] border-2 border-divider bg-white focus:border-brand-blue outline-none transition-all text-lg"
            placeholder="www.example.com"
          />
        </div>
      </div>
    </ScreenBusinessQuestionLayout>
  );
}
