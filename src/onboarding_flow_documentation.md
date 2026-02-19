# MetroBank Mobile Business Onboarding Flow

**Goal**: A stateful, resumable journey that guides users through company search, director verification, and account setup. This flow is designed as a "Standard" onboarding journey (~10 min).

---

## Screen-by-Screen Breakdown

### 1. Welcome Screen (Step 0)
**Component**: `OnboardingWelcome.tsx`
**Purpose**: Sets expectations and lists requirements before starting.

**Content**:
- **Header**: "Open a Business Current Account"
- **Requirements List** (What you'll need):
  - Company details (Reg number or name)
  - Director details (Names, contact info)
  - Proof of ID (Passport/Driving Licence)
  - Proof of address (Utility bill/Bank statement)
  - Bank details (Optional)
- **Time Estimate**: "Takes about 10-15 minutes"
- **Actions**:
  - `Start Application` (Primary CTA)
  - `Resume application` (Secondary link)

### 2. Company Search (Step 1)
**Component**: `CompanySearch.tsx`
**Purpose**: Identify the business using Companies House data.

**Fields/Inputs**:
- **Search Input**: "Company name or number"
- **Logic**: Search triggers after 3 characters.
- **Results**: Displays a list of matching companies with:
  - Company Name
  - Registration Number
  - Status (Active/Dissolved)
  - Address

**Actions**:
- User selects a company from the list to proceed.

### 3. Company Confirmation (Step 2)
**Component**: `CompanyConfirmation.tsx`
**Purpose**: Confirm the selected entity is correct.

**Display Data**:
- Company Name
- Company Number
- Registered Address
- Incorporation Date
- Status

**Actions**:
- `Confirm & Continue` -> Proceed to next step.
- `Not your company? Go back` -> Return to search.

### 4. Who's Involved (Step 3)
**Component**: `DirectorCheck.tsx`
**Purpose**: Identify directors/PSCs and select the applicant.

**Features**:
- **List of Directors**: Pre-filled from Companies House.
- **"Me" Selection**: User identifies themselves among the directors.
- **Contact Details**:
  - Email input
  - Phone input
- **Add Person**: Ability to manually add another director.

**Actions**:
- `Continue` -> Proceed to verification.
- `Save & Exit`.

### 5. Verify Contact Details (Step 4)
**Component**: `ContactVerification.tsx`
**Purpose**: Verify the applicant's contact method (OTP).

**Fields**:
- **6-digit OTP Input**: Numeric keypad entry.
- **Email Display**: Shows where the code was sent.

**Actions**:
- `Verify and continue` -> Validates code.
- `Resend code`.

### 6. Correspondence Address (Step 5)
**Component**: `TradingAddress.tsx`
**Purpose**: Determine where mail should be sent.

**Options**:
- **Use registered company address**: (Pre-filled from Step 2)
- **Use a different address**: Allows manual text entry.

**Actions**:
- `Continue`.
- `Save & Exit`.

### 7. Branch Selector (Step 6)
**Component**: `BranchSelector.tsx`
**Purpose**: Assign a local branch for support.

**Flow**:
1. **Search**: Input postcode or location.
2. **Select**: Choose from a list (currently mocks a specific result).
3. **Confirm**: Displays selected branch details (Name, Address, Distance).

**Actions**:
- `Search branches`.
- `Continue` (after selection).
- `Save & Exit`.

### 8. Business Details (Step 7)
**Component**: `BusinessDetails.tsx`
**Purpose**: Collect KYC/AML data for banking suitability.

**Questions**:
1. **Annual Turnover**: (e.g., £0–£250K, £250K–£1M...)
2. **Number of Employees**: (e.g., 0–2, 3–10...)
3. **Expected Monthly Payment Volume**: (e.g., < £10K, £10K–£50K...)
4. **Cash Handling Frequency**: (Daily, Weekly, Monthly, Rarely/Never)

**Actions**:
- `Continue` (Enabled only when all fields are selected).
- `Save & Exit`.

### 9. Review & Submit (Step 8)
**Component**: `ReviewSubmit.tsx`
**Purpose**: Final check of all data before API submission.

**Sections**:
- **Company Details**: Name, Number, Address.
- **Applicant**: Name, Role, Email.
- **Selected Branch**: Name, Address.
- **Business Profile**: Summary of turnover, employees, etc.

**Features**:
- **Edit Buttons**: Deep link back to specific steps to change data.
- **Terms & Conditions**: Checkbox to accept T&Cs.

**Actions**:
- `Submit Application` (Primary).
- `Back`.

### 10. Completion (Step 9)
**Component**: Inline in `OnboardingFlow.tsx`
**Purpose**: Success state.

**Content**:
- Success Icon
- "Application Submitted!" message.
- "Go to Dashboard" button.

---

## Technical Context
- **Orchestrator**: `OnboardingFlow.tsx` manages the `step` state (0-9).
- **State Management**: React `useState` holds the entire application object.
- **Persistence**: "Save & Exit" functionality is mocked with `sonner` toasts.
- **Validation**: Each step validates its own data before allowing the "Continue" action.
