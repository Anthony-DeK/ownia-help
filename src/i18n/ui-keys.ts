// Static UI chrome (nav, footer, buttons) -- the English source strings.
// Translated by scripts/translate.ts into src/i18n/ui.generated.ts via the
// same translate-content edge function used for article bodies. Kept as a
// flat list (not scanned from component code, unlike the ownia-app admin
// dictionary) since this site has a small, fixed amount of chrome text.
export const UI_KEYS = [
  'Help Center',
  'Search articles',
  'Back to Help Center',
  'Table of contents',
  'Was this article helpful?',
  'Yes',
  'No',
  'Read this article in another language',
  'Last updated',
  'Try Ownia free',
  'Still need help?',
  'Contact support',
  'All articles',
  'Explore Ownia',
  'Product',
  'Pricing',
  'Start for free',
] as const;

export type UiKey = (typeof UI_KEYS)[number];
