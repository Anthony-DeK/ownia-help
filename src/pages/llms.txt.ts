import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { slugFor } from '../lib/articles';
import { CATEGORIES, CATEGORY_LABELS } from '../i18n/categories';

// Generated from the content collection (rather than hand-maintained) so it
// can never drift out of sync with what's actually published. Grouped by
// category, same as the homepage, rather than a flat list -- `order` is
// only meaningful within a category, so sorting the whole set by it alone
// produces an arbitrary-looking sequence across categories.
export const GET: APIRoute = async ({ site }) => {
  const base = site!.toString().replace(/\/$/, '');
  const all = await getCollection('help');
  const en = all.filter((e) => e.data.locale === 'en');

  const lines = [
    '# Ownia Help Center',
    '',
    '> Guides and answers for running a short-term rental business on Ownia, a direct-booking website builder for vacation rental owners.',
    '',
  ];

  for (const category of CATEGORIES) {
    const articles = en.filter((e) => e.data.category === category).sort((a, b) => a.data.order - b.data.order);
    if (!articles.length) continue;
    lines.push(`## ${CATEGORY_LABELS[category].en}`);
    for (const e of articles) {
      lines.push(`- [${e.data.title}](${base}/en/${slugFor(e)}/): ${e.data.description}`);
    }
    lines.push('');
  }

  lines.push('## Also available in');
  lines.push('- French (/fr/), Spanish (/es/), German (/de/), Italian (/it/), Portuguese (/pt/)');

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
