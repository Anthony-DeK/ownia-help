import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/locales';

export type HelpArticle = CollectionEntry<'help'>;

// Entries are loaded with id `<locale>/<slug>` (glob loader, relative to
// src/content/help). Slug is everything after the first "/".
export function slugFor(entry: HelpArticle): string {
  return entry.id.slice(entry.id.indexOf('/') + 1);
}

export async function getArticlesForLocale(locale: Locale): Promise<HelpArticle[]> {
  const all = await getCollection('help');
  return all
    .filter((e) => e.data.locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getArticle(locale: Locale, slug: string): Promise<HelpArticle | undefined> {
  const all = await getCollection('help');
  return all.find((e) => e.data.locale === locale && slugFor(e) === slug);
}

// For a given article, the map of every locale it's available in to that
// locale's slug -- used by the language switcher to link directly to the
// equivalent translated article rather than just that locale's homepage.
export async function getTranslationLocales(articleId: string): Promise<Partial<Record<Locale, string>>> {
  const all = await getCollection('help');
  const map: Partial<Record<Locale, string>> = {};
  for (const entry of all) {
    if (entry.data.articleId === articleId) {
      map[entry.data.locale] = slugFor(entry);
    }
  }
  return map;
}
