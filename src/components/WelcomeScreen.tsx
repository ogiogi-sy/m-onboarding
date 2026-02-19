import { useState } from 'react';
import { Sparkles } from 'lucide-react';

/**
 * WelcomeScreen Component
 * 
 * A simple welcome/login screen demonstrating:
 * - Hero section pattern (navy background)
 * - Form input styling
 * - Primary button (navy pill)
 * - Proper spacing and typography
 * 
 * This is a template - replace with your actual authentication logic.
 */

interface WelcomeScreenProps {
  onLogin: () => void;
}

export function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
  const [username, setUsername] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Navy Background */}
      <div className="bg-brand-navy px-6 pt-16 pb-12">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
          <Sparkles className="text-white" size={32} />
        </div>

        {/* Title - Uses default h1 styling from globals.css */}
        <h1 className="text-white">Welcome to Your App</h1>
        
        {/* Subtitle */}
        <p className="text-white/70 text-sm mt-2">
          Built with the Cashflow Coach Style design system
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 py-8">
        <div className="bg-white rounded-2xl p-6 shadow-[--shadow-card-sm]">
          <h2 className="mb-6">Get Started</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Input Field - Shows proper form styling */}
            <div className="space-y-2">
              <label className="block">Enter your name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-white text-text-primary focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
            </div>

            {/* Primary Button - Navy pill, full width */}
            <button
              type="submit"
              className="w-full bg-brand-navy text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={!username.trim()}
            >
              Continue
            </button>
          </form>

          {/* Helper Text */}
          <p className="text-text-muted text-sm text-center mt-6">
            This is a template. Replace with your actual login flow.
          </p>
        </div>

        {/* Info Card - Shows card pattern with left border */}
        <div className="bg-white rounded-2xl p-5 border-l-4 border-blue-300 shadow-[--shadow-card-sm] mt-6">
          <h3 className="font-semibold text-brand-blue mb-2">
            👋 New to this project?
          </h3>
          <p className="text-sm text-text-secondary">
            Read the documentation in README.md to understand the design system and component patterns.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-8">
        <p className="text-text-muted text-xs text-center">
          Cashflow Coach Style Design System v1.0
        </p>
      </div>
    </div>
  );
}
