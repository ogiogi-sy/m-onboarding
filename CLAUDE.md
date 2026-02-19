# Onboarding Prototype — Instructions

## How to Preview
Open `index.html` in your browser. That's it. No server, no install.

This is a single self-contained HTML/CSS prototype of the full onboarding flow. It's the primary prototype for look-and-feel validation and Figma Make input.

## Approach
Plain HTML/CSS prototype that can be previewed directly in a browser and whose code can be copied into **Figma Make** to generate Figma components.

## File Structure
```
prototype/
├── index.html                  ← THE PROTOTYPE — open this in browser
├── CLAUDE.md                   ← This file
├── styles/
│   └── metro-tokens.css        ← Shared CSS variables (tokens reference)
└── src/                        ← Design documentation & React reference
    ├── COMPONENT_PATTERNS.md
    ├── DESIGN_PRINCIPLES.md
    ├── DESIGN_SYSTEM_GUIDE.md
    ├── GETTING_STARTED.md
    ├── index.css               ← Full CSS reference
    ├── components/             ← React component reference
    └── ...
```

## Design References
- **Design tokens:** `styles/metro-tokens.css` (CSS variables reference)
- **Component patterns:** `src/COMPONENT_PATTERNS.md`
- **Design principles:** `src/DESIGN_PRINCIPLES.md`
- **Design system guide:** `src/DESIGN_SYSTEM_GUIDE.md`
- **Figma screen spec:** `../research/FIGMA_SCREEN_SPEC.md`
- **Full design system:** `../../_project-context/design-system.md`
- **Brand guidelines:** `../../_project-context/brand-guidelines.md`

## Conventions

### HTML
- Semantic markup: `<main>`, `<nav>`, `<form>`, `<fieldset>`, `<label>`
- WCAG 2.2 AA: proper `aria-` attributes, focus indicators, keyboard navigation
- Mobile-first: designed at 375px, responsive with media queries

### CSS
- Design tokens via CSS custom properties
- No frameworks — plain CSS
- Use token variables, not raw hex values
- Mobile-first media queries: base styles are mobile, `@media (min-width: 768px)` for tablet/desktop

### JavaScript (Minimal)
- Only for interactions: showing/hiding states, basic form feedback, navigation between screens
- No frameworks, no build step
- Keep it simple — the point is the look and feel, not the logic

### Figma Make Compatibility
- Keep HTML clean and well-structured
- Use descriptive class names
- Avoid deeply nested structures where possible
- Include all states in the file (default, hover, active, error, success) using class toggles

## Screen States
Each screen should include these states where applicable:
- **Default** — initial state
- **Filled** — form fields populated
- **Error** — validation failures with clear messages
- **Loading** — for async operations (simulated)
- **Success** — confirmation states
