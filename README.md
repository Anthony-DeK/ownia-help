# Ownia Help Center

Public help center for Ownia, deployed at `help.ownia.co`. Static Astro site (no backend), covering Ownia's most complex features for SEO/GEO discovery and backlink potential.

## Stack

Astro (static output) + TypeScript + Tailwind CSS v4. Content lives in `astro:content` collections, not a CMS.

## Structure

```
src/
  content/help/<locale>/<slug>.md   One Markdown file per article per locale (en/fr/es/de/it/pt)
  content.config.ts                 Content collection schema (Zod)
  layouts/                          BaseLayout (head/meta/hreflang/JSON-LD), ArticleLayout
  components/                       Header, Footer
  i18n/                             locales.ts, categories.ts, ui-keys.ts + ui.ts (t() lookup)
  i18n/ui.generated.ts              GENERATED -- do not hand-edit, see scripts/translate.ts
  lib/articles.ts                   Content-collection query helpers
  pages/[locale]/index.astro        Per-locale category/article index (homepage)
  pages/[locale]/[slug].astro       Per-locale article page
  pages/llms.txt.ts                 Generated article index for AI crawlers
scripts/translate.ts                Bulk machine-translation via the translate-content edge function
```

## Adding a new article

1. Write it in English under `src/content/help/en/<slug>.md`. Frontmatter: `title`, `description`, `category` (one of `getting-started`/`payments`/`calendar`/`growth`/`team`), `articleId` (unique, links translations together), `order` (position within its category), `updatedDate`, `locale: "en"`.
2. Run `SUPABASE_ANON_KEY=<anon key> npx tsx scripts/translate.ts` to machine-translate it (and re-translate every other English article + UI string -- cheap/fast, results are cached server-side by content hash) into fr/es/de/it/pt.
3. **Spot-check the new locale files** before shipping -- see the failure classes documented at the top of `scripts/translate.ts` (bare short words losing their intended sense, UI-element names drifting from the actual product's own wording). `scripts/translate.ts`'s `TERM_OVERRIDES` table pins translations for recurring UI-element names (buttons/tabs/fields the reader is told to click) to match `ownia-app/src/constants/adminUiStrings.ts` exactly -- add a new UI-element name there if an article references one not already covered.

## Commands

```bash
npm run dev      # Astro dev server (localhost:4321)
npm run build    # Static build to dist/
npx astro check  # Typecheck
```

## Deployment

Third Railway service alongside `ownia-app`/`ownia-site`, same pattern: Railway runs `npm run build` then serves `dist/` statically (`serve -s dist`). No in-repo deploy config. Custom domain `help.ownia.co` is a CNAME pointed at the Railway service, set up outside this repo.
