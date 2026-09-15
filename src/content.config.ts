import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { LOCALES } from './i18n/locales';

// One Markdown file per locale per article, under src/content/help/<locale>/<slug>.md.
// `articleId` links translated copies of the same article together (used by
// the language switcher to jump to the equivalent article in another
// locale) -- kept separate from the file slug so the slug itself is free to
// differ per language if that ever becomes useful (it doesn't today; slugs
// are kept identical across locales for simplicity).
const help = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'payments', 'calendar', 'growth', 'team']),
    articleId: z.string(),
    order: z.number(),
    updatedDate: z.date(),
    locale: z.enum(LOCALES),
  }),
});

export const collections = { help };
