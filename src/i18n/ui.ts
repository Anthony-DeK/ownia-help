import type { Locale } from './locales';
import { UI_STRINGS } from './ui.generated';
import type { UiKey } from './ui-keys';

// Plain synchronous lookup, same shape as ownia-app's admin t(): the key
// IS the English source text, doubling as the fallback for any locale
// that's missing a translation (never crashes, never shows a raw key).
export function t(key: UiKey, locale: Locale): string {
  if (locale === 'en') return key;
  return UI_STRINGS[key]?.[locale] ?? key;
}
