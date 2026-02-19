import { Toaster } from "./components/ui/sonner";
import { OnboardingFlow } from "./components/onboarding/OnboardingFlow";

/**
 * Main Application Component
 *
 * DIRECT ENTRY POINT: Business Onboarding Flow
 */

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite-50">
      {/* Full screen container for responsive layout */}
      <div className="min-h-screen w-full">
        <OnboardingFlow />
      </div>

      {/* Toast notifications - available globally */}
      <Toaster />
    </div>
  );
}