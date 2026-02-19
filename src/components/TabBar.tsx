import { Home, PieChart, MessageSquare, User } from 'lucide-react';

interface TabBarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function TabBar({ activeTab = 'home', onTabChange }: TabBarProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'budget', icon: PieChart, label: 'Budget' },
    { id: 'coach', icon: MessageSquare, label: 'Coach' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-divider px-6 py-3 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`flex flex-col items-center gap-1 transition-colors w-16 ${
                isActive 
                  ? 'text-brand-blue' 
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
