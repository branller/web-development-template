\# Design system



\## Source of truth

\- Use the existing shadcn/ui components and the design tokens in `src/app/globals.css`.

\- If a token or component does not exist, propose a consistent addition instead of introducing an unrelated style.



\## Colors

\- Use semantic tokens such as `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, and `ring`.

\- Do not hardcode colors in components when a suitable token exists.

\- Keep text readable against its background.



\## Typography

\- Use the fonts and text styles already configured in the project.

\- Keep heading levels and body text consistent across pages.

\- Avoid adding one-off font sizes without a clear need.



\## Layout and spacing

\- Follow the spacing, content width, and responsive patterns used by existing pages.

\- Use consistent alignment and spacing between related elements.

\- Ensure pages work on mobile, tablet, and desktop.



\## Components and interaction

\- Prefer existing shadcn/ui components and project components.

\- Keep buttons, forms, cards, dialogs, and navigation consistent.

\- Include visible hover, focus, disabled, loading, and error states where relevant.

\- Use accessible labels and keyboard-friendly controls.



\## Before finishing UI work

\- Compare the result with existing screens and this guide.

\- Check responsive layouts and interaction states.

\- Update this document when the project adopts a new design rule.

