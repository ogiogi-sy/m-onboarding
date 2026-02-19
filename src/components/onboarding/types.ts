export type TerminationReason = 'high_turnover' | 'identity_failed' | 'risk_flag' | 'otp_failed' | 'generic';

export interface TerminationState {
  isTerminated: boolean;
  reason: TerminationReason;
  title?: string;
  description?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
}

export interface OnboardingState {
  step: number;
  companySearchQuery: string;
  selectedCompany: Company | null;
  directors: Director[];
  verificationCode: string;
  
  tradingAddress: {
    type: 'registered' | 'custom' | 'document';
    value: string;
  } | null;
  
  selectedBranch: Branch | null;
  
  // Refactored Business Details
  businessDetails: {
    turnover?: string;
    employees?: string;
    internationalPayments?: boolean;
    revenueSources?: string[];
    website?: string;
    monthlyIncome?: string;
    paymentTypes?: string[];
    cashDeposits?: string;
    industry?: string; // Legacy field, might keep for compatibility
    cashHandling?: string; // Legacy field
    paymentVolume?: string; // Legacy
  } | null;
  
  bankConnected: boolean; // Legacy?
  
  journeyType: 'optimised' | 'standard' | 'ideal';
  
  idVerification: {
    type: 'passport' | 'license';
    status: 'pending' | 'verified';
  } | null;
  
  passkeyCreated: boolean;
  passwordCreated: boolean;
  
  openBanking: {
    provider: string;
    connected: boolean;
  } | null;
  
  selectedBank: string | null;
  
  isEditing?: boolean;
  editingDirectorId?: string | 'new' | null;
  
  customAddressStr?: string; 
  
  termination?: TerminationState;
}

export interface Company {
  name: string;
  number: string;
  address: string;
  status: 'Active' | 'Dissolved' | 'Liquidation';
  incorporationDate: string;
}

export interface Director {
  id: string;
  name: string;
  role: string;
  isPsc: boolean;
  email?: string;
  phone?: string;
  selected: boolean;
  isManual?: boolean;
  isPrimaryHolder?: boolean;
  appointmentDate?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  distance: string;
}
