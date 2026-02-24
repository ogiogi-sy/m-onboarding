import { useState } from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { ScreenStart } from './ScreenStart';
import { ScreenJourneySelection } from './ScreenJourneySelection';
import { ScreenWelcomeOptimised } from './ScreenWelcomeOptimised';
import { ScreenCompanySearchOptimised } from './ScreenCompanySearchOptimised';
import { ScreenDirectorsList } from './ScreenDirectorsList';
import { ScreenDirectorEdit } from './ScreenDirectorEdit';
import { ScreenIdentityVerification } from './ScreenIdentityVerification';
import { ScreenCreatePassword } from './ScreenCreatePassword';
import { ScreenTradingAddressOptimised } from './ScreenTradingAddressOptimised';
import { ScreenOpenBanking } from './ScreenOpenBanking';
import { ScreenReviewOptimised } from './ScreenReviewOptimised';
import { ScreenDashboard } from './ScreenDashboard';
import { ScreenVerify } from './ScreenVerify';
import { ScreenAboutYou } from './ScreenAboutYou';
import { ScreenLocation } from './ScreenLocation';
import { ScreenBusinessDetails } from './ScreenBusinessDetails';
import { ScreenConnectBank } from './ScreenConnectBank';
import { ScreenReview } from './ScreenReview';
import { ScreenSuccess } from './ScreenSuccess';
import { ScreenTermination } from './ScreenTermination';

// Ideal Flow Screens
import { ScreenWelcomeIdeal } from './ScreenWelcomeIdeal';
import { ScreenCreatePasskey } from './ScreenCreatePasskey';
import { ScreenReviewIdeal } from './ScreenReviewIdeal';

// Business Question Screens (Optimised Flow)
import { ScreenQuestionTurnover } from './ScreenQuestionTurnover';
import { ScreenQuestionEmployees } from './ScreenQuestionEmployees';
import { ScreenQuestionIntlPayments } from './ScreenQuestionIntlPayments';
import { ScreenQuestionRevenue } from './ScreenQuestionRevenue';
import { ScreenQuestionWebsite } from './ScreenQuestionWebsite';
import { ScreenQuestionMonthlyIncome } from './ScreenQuestionMonthlyIncome';
import { ScreenQuestionPaymentTypes } from './ScreenQuestionPaymentTypes';
import { ScreenQuestionCashDeposits } from './ScreenQuestionCashDeposits';

import { OnboardingState, TerminationReason } from './types';
import { toast } from 'sonner';

export function OnboardingFlow() {
  const [state, setState] = useState<OnboardingState>({
    step: 0,
    journeyType: 'ideal',
    companySearchQuery: '',
    selectedCompany: null,
    directors: [],
    verificationCode: '',
    tradingAddress: null,
    selectedBranch: null,
    businessDetails: null,
    bankConnected: false,
    idVerification: null,
    passkeyCreated: false,
    passwordCreated: false,
    openBanking: null,
    selectedBank: null,
    termination: undefined,
  });

  // Ideal: 9 steps (was 10 — removed ConfirmCompany)
  // Optimised: 18 steps (was 20 — removed ConfirmCompany & ReviewDetails)
  const totalSteps = state.journeyType === 'optimised' ? 18 : (state.journeyType === 'ideal' ? 9 : 8);

  const getTitles = () => {
    if (state.journeyType === 'optimised') {
      return [
        "Welcome",
        "Find Business",          // Search + inline confirm (merged)
        "Directors",
        "Verify Contact",
        "Create Password",
        "Identity Verification",
        "Trading Address",         // Now includes summary
        "Open Banking",
        "Turnover",
        "Employees",
        "Intl. Payments",
        "Revenue Sources",
        "Website",
        "Monthly Income",
        "Payment Types",
        "Cash Deposits",
        "Review & Submit",
        "Complete"
      ];
    }
    if (state.journeyType === 'ideal') {
      return [
        "Welcome",
        "Find Business",          // Search + inline confirm (merged)
        "Directors",
        "Create Passkey",
        "Verify Identity",
        "Connect Bank",
        "Select Bank",
        "Review Application",
        "Complete"
      ];
    }
    return [
      "Start",
      "About You",
      "Verify You",
      "Your Location",
      "About Your Business",
      "Connect Bank",
      "Review & Submit",
      "You're In"
    ];
  };

  const titles = getTitles();

  const handleSaveExit = () => {
    toast.success('Progress saved', {
      description: 'You can resume your application later.'
    });
  };

  const nextStep = () => {
    if (state.isEditing) {
      // Return to Review screen
      // Optimised: 17, Ideal: 8
      const reviewStep = state.journeyType === 'optimised' ? 17 : (state.journeyType === 'ideal' ? 8 : 6);
      setState(prev => ({ ...prev, step: reviewStep, isEditing: false }));
    } else {
      setState(prev => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const prevStep = () => {
    if (state.editingDirectorId) {
      setState(prev => ({ ...prev, editingDirectorId: null }));
    } else {
      setState(prev => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const goToStep = (step: number) => setState(prev => ({ ...prev, step, isEditing: true }));

  // Termination Helper
  const terminateJourney = (reason: TerminationReason, customTitle?: string, customDesc?: string) => {
    setState(prev => ({
      ...prev,
      termination: {
        isTerminated: true,
        reason,
        title: customTitle,
        description: customDesc
      }
    }));
  };

  // Helper to update business details
  const updateBusinessDetails = (key: string, value: any) => {
    setState(prev => ({
      ...prev,
      businessDetails: {
        ...prev.businessDetails,
        [key]: value
      }
    }));
    nextStep();
  };

  // 0. Intercept for Termination
  if (state.termination?.isTerminated) {
    return (
      <ScreenTermination
        termination={state.termination}
        onPrimaryAction={() => {
           toast.info('Redirecting to branch locator...');
        }}
        onSecondaryAction={() => {
           window.location.reload();
        }}
      />
    );
  }

  // Step 0: Journey Selection
  if (state.step === 0) {
    return (
      <ScreenJourneySelection
        onSelect={(journey) => {
          setState(prev => ({ ...prev, journeyType: journey }));
          nextStep();
        }}
      />
    );
  }

  // --- IDEAL FLOW (9 Steps, was 10) ---
  // Removed: ConfirmCompany (step 3) — now inline in search
  // Removed: ID Verified success screen — auto-advances with toast
  if (state.journeyType === 'ideal') {
    // Step 1: Welcome
    if (state.step === 1) return <OnboardingLayout currentStep={1} totalSteps={totalSteps} title={titles[0]} onSaveExit={handleSaveExit}><ScreenWelcomeIdeal onStart={nextStep} onResume={() => toast.info('Resume feature coming soon')} /></OnboardingLayout>;

    // Step 2: Find & Confirm Business (merged — search shows inline confirm)
    if (state.step === 2) return <OnboardingLayout currentStep={2} totalSteps={totalSteps} title={titles[1]} onSaveExit={handleSaveExit}><ScreenCompanySearchOptimised onSelect={(c) => { const mockDirectors = [{ id: '1', name: 'JOHN SMITH', role: 'Director', isPsc: true, appointmentDate: 'Jan 2020', selected: true, email: 'john.smith@metrobank.com', phone: '07700900000', isPrimaryHolder: true }, { id: '2', name: 'JANE DOE', role: 'Director', isPsc: false, appointmentDate: 'Mar 2021', selected: false, email: 'jane.doe@metrobank.com', phone: '07700900001' }]; setState(prev => ({ ...prev, selectedCompany: c, directors: mockDirectors })); nextStep(); }} /></OnboardingLayout>;

    // Step 3: Directors
    if (state.step === 3) return <OnboardingLayout currentStep={3} totalSteps={totalSteps} title={titles[2]} onSaveExit={handleSaveExit} onBack={state.editingDirectorId ? prevStep : undefined}>{state.editingDirectorId === 'new' ? <ScreenDirectorEdit director={null} onSave={(d) => { const newDirector = { id: Math.random().toString(36).substr(2, 9), name: 'NEW PERSON', ...d, selected: true, isManual: true, isPsc: false } as any; setState(prev => ({ ...prev, directors: [...prev.directors, newDirector], editingDirectorId: null })); toast.success('Person added'); }} onRemove={() => setState(prev => ({ ...prev, editingDirectorId: null }))} /> : <ScreenDirectorsList directors={state.directors} onAdd={() => setState(prev => ({ ...prev, editingDirectorId: 'new' }))} onContinue={(d) => { setState(prev => ({ ...prev, directors: d })); nextStep(); }} />}</OnboardingLayout>;

    // Step 4: Create Passkey
    if (state.step === 4) return <OnboardingLayout currentStep={4} totalSteps={totalSteps} title={titles[3]} onSaveExit={handleSaveExit}><ScreenCreatePasskey onContinue={() => { setState(prev => ({ ...prev, passkeyCreated: true })); nextStep(); }} onFallback={() => toast.info('Password fallback flow')} /></OnboardingLayout>;

    // Step 5: Verify Identity (auto-advances after scan — no success screen)
    if (state.step === 5) return <OnboardingLayout currentStep={5} totalSteps={totalSteps} title={titles[4]} onSaveExit={handleSaveExit}><ScreenIdentityVerification onVerified={() => { setState(prev => ({ ...prev, idVerification: { type: 'passport', status: 'verified' } })); toast.success('Identity verified', { description: 'Your identity has been confirmed.' }); nextStep(); }} /></OnboardingLayout>;

    // Step 6: Connect Bank Intro
    if (state.step === 6) return <OnboardingLayout currentStep={6} totalSteps={totalSteps} title={titles[5]} onSaveExit={handleSaveExit}><ScreenConnectBank onConnect={nextStep} onSkip={() => { setState(prev => ({ ...prev, step: 8 })); }} /></OnboardingLayout>;

    // Step 7: Select Bank List
    if (state.step === 7) return <OnboardingLayout currentStep={7} totalSteps={totalSteps} title={titles[6]} onSaveExit={handleSaveExit}><ScreenOpenBanking onConnect={(provider) => { setState(prev => ({ ...prev, selectedBank: provider, openBanking: { provider, connected: true } })); nextStep(); }} onSkip={() => nextStep()} /></OnboardingLayout>;

    // Step 8: Review
    if (state.step === 8) return <OnboardingLayout currentStep={8} totalSteps={totalSteps} title={titles[7]} onSaveExit={handleSaveExit}><ScreenReviewIdeal state={state} onSubmit={() => setTimeout(() => nextStep(), 1500)} onEdit={goToStep} /></OnboardingLayout>;

    // Step 9: Complete
    if (state.step === 9) return <div className="fixed inset-0 bg-offwhite-50 z-50 overflow-y-auto"><ScreenDashboard /></div>;
  }

  // --- OPTIMISED FLOW (18 Steps, was 20) ---
  // Removed: ConfirmCompany (old step 3) — now inline in search
  // Removed: ScreenReviewDetails (old step 9) — folded into trading address
  if (state.journeyType === 'optimised') {

    // Step 1: Welcome
    if (state.step === 1) return <OnboardingLayout currentStep={1} totalSteps={totalSteps} title={titles[0]} onSaveExit={handleSaveExit}><ScreenWelcomeOptimised onStart={nextStep} onResume={() => toast.info('Resume feature coming soon')} /></OnboardingLayout>;

    // Step 2: Find & Confirm Business (merged)
    if (state.step === 2) return <OnboardingLayout currentStep={2} totalSteps={totalSteps} title={titles[1]} onSaveExit={handleSaveExit}><ScreenCompanySearchOptimised onSelect={(c) => { const mockDirectors = [{ id: '1', name: 'JOHN SMITH', role: 'Director', isPsc: true, appointmentDate: 'Jan 2020', selected: true, email: 'john.smith@metrobank.com', phone: '07700900000', isPrimaryHolder: true }, { id: '2', name: 'JANE DOE', role: 'Director', isPsc: false, appointmentDate: 'Mar 2021', selected: false, email: 'jane.doe@metrobank.com', phone: '07700900001' }]; setState(prev => ({ ...prev, selectedCompany: c, directors: mockDirectors })); nextStep(); }} /></OnboardingLayout>;

    // Step 3: Directors
    if (state.step === 3) return <OnboardingLayout currentStep={3} totalSteps={totalSteps} title={titles[2]} onSaveExit={handleSaveExit} onBack={state.editingDirectorId ? prevStep : undefined}>{state.editingDirectorId === 'new' ? <ScreenDirectorEdit director={null} onSave={(d) => { const newDirector = { id: Math.random().toString(36).substr(2, 9), name: 'NEW PERSON', ...d, selected: true, isManual: true, isPsc: false } as any; setState(prev => ({ ...prev, directors: [...prev.directors, newDirector], editingDirectorId: null })); toast.success('Person added'); }} onRemove={() => setState(prev => ({ ...prev, editingDirectorId: null }))} /> : <ScreenDirectorsList directors={state.directors} onAdd={() => setState(prev => ({ ...prev, editingDirectorId: 'new' }))} onContinue={(d) => { setState(prev => ({ ...prev, directors: d })); nextStep(); }} />}</OnboardingLayout>;

    // Step 4: Verify Contact
    if (state.step === 4) return <OnboardingLayout currentStep={4} totalSteps={totalSteps} title={titles[3]} onSaveExit={handleSaveExit}><ScreenVerify email={state.directors.find(d => d.selected)?.email || 'email@example.com'} onVerified={() => { toast.success('Email verified'); nextStep(); }} onResend={() => toast.info('Code resent')} onChangeEmail={() => toast.info('Change email flow')} /></OnboardingLayout>;

    // Step 5: Create Password
    if (state.step === 5) return <OnboardingLayout currentStep={5} totalSteps={totalSteps} title={titles[4]} onSaveExit={handleSaveExit}><ScreenCreatePassword onContinue={() => { setState(prev => ({ ...prev, passwordCreated: true })); nextStep(); }} /></OnboardingLayout>;

    // Step 6: Verify Identity (auto-advances — no success screen)
    if (state.step === 6) return <OnboardingLayout currentStep={6} totalSteps={totalSteps} title={titles[5]} onSaveExit={handleSaveExit}><ScreenIdentityVerification onVerified={() => { setState(prev => ({ ...prev, idVerification: { type: 'passport', status: 'verified' } })); toast.success('Identity verified', { description: 'Your identity has been confirmed.' }); nextStep(); }} /></OnboardingLayout>;

    // Step 7: Trading Address (now includes inline summary — replaces old steps 8+9)
    if (state.step === 7) return <OnboardingLayout currentStep={7} totalSteps={totalSteps} title={titles[6]} onSaveExit={handleSaveExit}><ScreenTradingAddressOptimised registeredAddress={state.selectedCompany?.address || '123 Business Rd, London'} tradingName={state.selectedCompany?.name || 'My Company Ltd'} onContinue={(type, value) => { setState(prev => ({ ...prev, tradingAddress: { type, value } })); nextStep(); }} /></OnboardingLayout>;

    // Step 8: Open Banking
    if (state.step === 8) {
      return (
        <OnboardingLayout currentStep={8} totalSteps={totalSteps} title={titles[7]} onSaveExit={handleSaveExit}>
          <ScreenOpenBanking
            onConnect={(provider) => {
              setState(prev => ({
                ...prev,
                openBanking: { provider, connected: true },
                selectedBank: provider,
                step: 9
              }));
            }}
            onSkip={() => {
              setState(prev => ({
                ...prev,
                openBanking: { provider: '', connected: false },
                step: 9
              }));
            }}
          />
        </OnboardingLayout>
      );
    }

    // --- BUSINESS QUESTIONS (Steps 9-16) ---
    const isOBConnected = !!state.openBanking?.connected;

    if (state.step === 9) {
      return (
        <OnboardingLayout currentStep={9} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}>
          <ScreenQuestionTurnover
            onNext={(val) => {
              if (val === '£5M+') {
                terminateJourney('high_turnover');
              } else {
                updateBusinessDetails('turnover', val);
              }
            }}
            onSaveExit={handleSaveExit}
            prefilled={isOBConnected}
          />
        </OnboardingLayout>
      );
    }

    if (state.step === 10) return <OnboardingLayout currentStep={10} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionEmployees onNext={(val) => updateBusinessDetails('employees', val)} onSaveExit={handleSaveExit} prefilled={isOBConnected} /></OnboardingLayout>;

    if (state.step === 11) return <OnboardingLayout currentStep={11} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionIntlPayments onNext={(val) => updateBusinessDetails('internationalPayments', val)} onSaveExit={handleSaveExit} prefilled={isOBConnected} /></OnboardingLayout>;

    if (state.step === 12) return <OnboardingLayout currentStep={12} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionRevenue onNext={(val) => updateBusinessDetails('revenueSources', val)} onSaveExit={handleSaveExit} /></OnboardingLayout>;

    if (state.step === 13) return <OnboardingLayout currentStep={13} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionWebsite onNext={(val) => updateBusinessDetails('website', val)} onSaveExit={handleSaveExit} /></OnboardingLayout>;

    if (state.step === 14) return <OnboardingLayout currentStep={14} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionMonthlyIncome onNext={(val) => updateBusinessDetails('monthlyIncome', val)} onSaveExit={handleSaveExit} prefilled={isOBConnected} /></OnboardingLayout>;

    if (state.step === 15) return <OnboardingLayout currentStep={15} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionPaymentTypes onNext={(val) => updateBusinessDetails('paymentTypes', val)} onSaveExit={handleSaveExit} prefilled={isOBConnected} /></OnboardingLayout>;

    if (state.step === 16) return <OnboardingLayout currentStep={16} totalSteps={totalSteps} title="Business Activity" onSaveExit={handleSaveExit}><ScreenQuestionCashDeposits onNext={(val) => updateBusinessDetails('cashDeposits', val)} onSaveExit={handleSaveExit} prefilled={isOBConnected} /></OnboardingLayout>;

    // Step 17: Review & Submit
    if (state.step === 17) return <OnboardingLayout currentStep={17} totalSteps={totalSteps} title="Review & Submit" onSaveExit={handleSaveExit}><ScreenReviewOptimised state={state} onSubmit={() => setTimeout(() => nextStep(), 1500)} onEdit={goToStep} /></OnboardingLayout>;

    // Step 18: Complete
    if (state.step === 18) return <div className="fixed inset-0 bg-offwhite-50 z-50 overflow-y-auto"><ScreenDashboard /></div>;
  }

  // Legacy/Standard Flow
  if (state.step === 1 && state.journeyType === 'standard') {
    return <ScreenStart onCompanySelect={(c) => { setState(prev => ({ ...prev, selectedCompany: c })); nextStep(); }} />;
  }

  if (state.journeyType === 'standard') {
    return (
      <OnboardingLayout currentStep={state.step} totalSteps={8} title="Standard" onSaveExit={handleSaveExit}>
         <div className="p-8 text-center">Standard Flow (Steps 2-8) would go here.</div>
      </OnboardingLayout>
    );
  }

  return null;
}
