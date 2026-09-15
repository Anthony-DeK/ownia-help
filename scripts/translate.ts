// One-time/occasional dev tool -- NOT part of the site build.
//
// Bulk-translates:
//  1. UI chrome strings (src/i18n/ui-keys.ts) -> src/i18n/ui.generated.ts
//  2. English articles (src/content/help/en/*.md) -> src/content/help/{locale}/*.md
//
// via the already-deployed translate-content Supabase edge function (same
// mechanism ownia-app's scripts/generate-ui-strings.ts uses) -- no local
// DEEPL_API_KEY needed, the edge function holds it.
//
// Run: npx tsx scripts/translate.ts
//   requires SUPABASE_ANON_KEY in the environment (the publishable/anon key,
//   not the service role key -- see VITE_SUPABASE_ANON_KEY in ownia-app's .env).
//
// Article bodies are translated block-by-block (headings / list items /
// paragraphs), with inline **bold**, [links](url), and `code` spans
// extracted and translated as their own separate pieces, because the
// translate-content edge function sends plain text to DeepL with no
// tag_handling -- feeding it a whole raw Markdown blob risks the MT
// reordering or mangling `**`/`[]()`/`#` syntax. See the block/run parser
// below.
//
// Output is machine-translated, not reviewed by a native speaker -- spot
// check headings and short phrases especially (see this repo's plan doc /
// ownia-app's CLAUDE.md for the recurring "bare word translated into the
// wrong sense" failure class).
import { writeFileSync, readFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { UI_KEYS } from '../src/i18n/ui-keys';
import { LOCALES } from '../src/i18n/locales';

const TRANSLATE_FN_URL = 'https://icnormjpvqsscbuykdnf.supabase.co/functions/v1/translate-content';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
if (!SUPABASE_ANON_KEY) {
  console.error('SUPABASE_ANON_KEY environment variable is required (the anon/publishable key, not the service role key).');
  process.exit(1);
}

const TARGET_LOCALES = LOCALES.filter((l) => l !== 'en');
const rootDir = fileURLToPath(new URL('..', import.meta.url));

// Team-role names must read exactly like the actual backoffice UI (Settings
// -> Team) or a reader following this article sees a different word for the
// role than the button/dropdown they're looking at. Pulled verbatim from
// ownia-app's src/constants/adminUiStrings.ts. Also guards against DeepL
// translating the *same* English word inconsistently across two different
// blocks of the same article (each block is a separate translation call
// with no shared document context) -- happened for "Viewer" in testing.
// Bare, context-free UI strings where DeepL picked the wrong sense (the
// exact failure class documented at length in ownia-app's CLAUDE.md/
// generate-ui-strings.ts -- a single word with no surrounding sentence to
// disambiguate). "No" as a helpfulness-vote button came back as the
// preposition "of/from" (fr "De", de "Von", it "Da", pt "De") in every
// locale except Spanish, where the two senses share a spelling.
// "Start for free" reuses ownia-site's own signup-CTA copy verbatim (see
// src/i18n/content.ts's `signup`/`signupCta` keys there) rather than a fresh
// DeepL pass, so the button reads identically to the rest of the product
// instead of introducing a second, DeepL-invented phrasing for the same
// action -- a generic MT pass of "Sign up" also came back as "Anmelden" in
// German, which is actually this product's own *Log in* label (content.ts's
// `login` key), not sign-up.
const UI_KEY_OVERRIDES: Record<string, Partial<Record<string, string>>> = {
  No: { fr: 'Non', es: 'No', de: 'Nein', it: 'No', pt: 'Não' },
  'Start for free': {
    fr: 'Commencer gratuitement',
    es: 'Empieza gratis',
    de: 'Kostenlos starten',
    it: 'Inizia gratis',
    pt: 'Comece grátis',
  },
};

// Every recurring bolded UI-element name in the articles (button/tab/field
// labels a reader is told to click), pulled verbatim from ownia-app's own
// live src/constants/adminUiStrings.ts -- so "click **Web Store**" points at
// the word actually printed on that nav item in every locale, not whatever
// DeepL invents per-block (confirmed inconsistent in testing: "Web Store"
// came back as three different translations, and once left untranslated, in
// the same article; "Properties" the same way).
//
// Two entries deliberately do NOT match adminUiStrings.ts: that dictionary's
// own "Add Property"/"Create property" German strings translate "Property"
// as "Eigenschaft" (attribute/characteristic, not real estate) -- the exact
// bug CLAUDE.md documents as already fixed for the *guest*-facing dictionary
// (property/properties -> Unterkunft/Unterkünfte) but evidently not for this
// admin one. Rather than ship the same known-wrong string here, these two
// use the corrected noun, consistent with "Properties" elsewhere in this
// same table. Worth flagging back to fix in adminUiStrings.ts itself.
const TERM_OVERRIDES: Record<string, Partial<Record<string, string>>> = {
  Admin: { fr: 'Admin', de: 'Admin', es: 'Admin', it: 'Amministratore', pt: 'Admin' },
  Manager: { fr: 'Responsable', de: 'Manager', es: 'Gerente', it: 'Responsabile', pt: 'Gerente' },
  Viewer: { fr: 'Lecteur', de: 'Betrachter', es: 'Lector', it: 'Lettore', pt: 'Leitor' },
  Properties: { fr: 'Propriétés', de: 'Unterkünfte', es: 'Propiedades', it: 'Proprietà', pt: 'Propriedades' },
  'Web Store': { fr: 'Boutique en ligne', de: 'Webshop', es: 'Tienda online', it: 'Negozio online', pt: 'Loja online' },
  Payments: { fr: 'Paiements', de: 'Zahlungen', es: 'Pagos', it: 'Pagamenti', pt: 'Pagamentos' },
  Settings: { fr: 'Paramètres', de: 'Einstellungen', es: 'Configuración', it: 'Impostazioni', pt: 'Definições' },
  Team: { fr: 'Équipe', de: 'Team', es: 'Equipo', it: 'Squadra', pt: 'Equipa' },
  'Stripe Connect': { fr: 'Stripe Connect', de: 'Stripe Connect', es: 'Stripe Connect', it: 'Stripe Connect', pt: 'Stripe Connect' },
  'Connect Stripe': { fr: 'Connecter Stripe', de: 'Stripe verbinden', es: 'Conectar Stripe', it: 'Collega Stripe', pt: 'Ligar o Stripe' },
  'Resume setup': { fr: 'Reprendre la configuration', de: 'Einrichtung fortsetzen', es: 'Reanudar la configuración', it: 'Riprendi la configurazione', pt: 'Retomar a configuração' },
  'Manage payouts on Stripe': { fr: 'Gérer les paiements sur Stripe', de: 'Auszahlungen über Stripe verwalten', es: 'Gestionar los pagos en Stripe', it: 'Gestisci i pagamenti su Stripe', pt: 'Gerir pagamentos no Stripe' },
  'Security deposit': { fr: 'Caution', de: 'Kaution', es: 'Fianza', it: 'Deposito cauzionale', pt: 'Caução' },
  'Deposit amount': { fr: 'Montant du dépôt', de: 'Einzahlungsbetrag', es: 'Importe del depósito', it: 'Importo del deposito', pt: 'Montante do depósito' },
  'Cancellation policy': { fr: "Conditions d'annulation", de: 'Stornierungsbedingungen', es: 'Política de cancelación', it: 'Condizioni di cancellazione', pt: 'Política de cancelamento' },
  'Online Booking': { fr: 'Réservation en ligne', de: 'Online-Buchung', es: 'Reservas en línea', it: 'Prenotazione online', pt: 'Reservas online' },
  'Online Booking Settings': { fr: 'Paramètres de réservation en ligne', de: 'Einstellungen für die Online-Buchung', es: 'Configuración de reservas en línea', it: 'Impostazioni per la prenotazione online', pt: 'Definições de reservas online' },
  'Custom domain': { fr: 'Domaine personnalisé', de: 'Benutzerdefinierte Domain', es: 'Dominio personalizado', it: 'Dominio personalizzato', pt: 'Domínio personalizado' },
  'Store Settings': { fr: 'Paramètres de la boutique', de: 'Shop-Einstellungen', es: 'Configuración de la tienda', it: 'Impostazioni del negozio', pt: 'Definições da loja' },
  Configure: { fr: 'Configurer', de: 'Konfigurieren', es: 'Configurar', it: 'Configura', pt: 'Configurar' },
  'Check now': { fr: 'Vérifiez dès maintenant', de: 'Jetzt prüfen', es: 'Compruébalo ahora', it: 'Controlla subito', pt: 'Verifique agora' },
  'New Property': { fr: 'Nouveau bien immobilier', de: 'Neue Immobilie', es: 'Inmueble nuevo', it: 'Nuovo immobile', pt: 'Novo imóvel' },
  'Add Property': { fr: 'Ajouter un bien immobilier', de: 'Unterkunft hinzufügen', es: 'Añadir propiedad', it: 'Aggiungi proprietà', pt: 'Adicionar imóvel' },
  'Create property': { fr: 'Créer une propriété', de: 'Unterkunft erstellen', es: 'Crear propiedad', it: 'Crea proprietà', pt: 'Criar propriedade' },
  'Create from scratch': { fr: 'Créer à partir de zéro', de: 'Von Grund auf neu erstellen', es: 'Crear desde cero', it: 'Creare da zero', pt: 'Criar do zero' },
  'Import from listing URL': { fr: "Importer à partir de l'URL de l'annonce", de: 'Aus der Angebots-URL importieren', es: 'Importar desde la URL del anuncio', it: "Importa dall'URL dell'annuncio", pt: 'Importar a partir do URL do anúncio' },
  'Import Results': { fr: 'Importer les résultats', de: 'Ergebnisse importieren', es: 'Resultados de la importación', it: 'Importa risultati', pt: 'Resultados da importação' },
  'Export your calendar': { fr: 'Exporter votre agenda', de: 'Kalender exportieren', es: 'Exporta tu calendario', it: 'Esporta il tuo calendario', pt: 'Exportar o seu calendário' },
  'Import external calendars': { fr: 'Importer des calendriers externes', de: 'Externe Kalender importieren', es: 'Importar calendarios externos', it: 'Importa calendari esterni', pt: 'Importar calendários externos' },
  'Send Invitation': { fr: 'Envoyer une invitation', de: 'Einladung versenden', es: 'Enviar invitación', it: 'Invia invito', pt: 'Enviar convite' },
};


// ---------------------------------------------------------------------------
// translate-content client
// ---------------------------------------------------------------------------

interface TranslateItem {
  sourceId: string;
  fieldName: string;
  text: string;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Chunk by both item count (edge function caps at 40) and total character
// count (capped at 20000) -- a handful of long paragraphs can blow the char
// cap well before hitting 40 items.
function chunkForRequest(items: TranslateItem[]): TranslateItem[][] {
  const out: TranslateItem[][] = [];
  let current: TranslateItem[] = [];
  let currentChars = 0;
  for (const item of items) {
    if (current.length >= 30 || currentChars + item.text.length > 15000) {
      out.push(current);
      current = [];
      currentChars = 0;
    }
    current.push(item);
    currentChars += item.text.length;
  }
  if (current.length) out.push(current);
  return out;
}

async function translateItems(sourceTable: string, items: TranslateItem[], targetLocale: string): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const batch of chunkForRequest(items)) {
    const res = await fetch(TRANSLATE_FN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY!,
      },
      body: JSON.stringify({
        targetLocale,
        items: batch.map((i) => ({ sourceTable, sourceId: i.sourceId, fieldName: i.fieldName, text: i.text })),
      }),
    });
    if (!res.ok) throw new Error(`translate-content error ${res.status}: ${await res.text()}`);
    const data = (await res.json()) as { translations: Record<string, string> };
    for (const item of batch) {
      const key = `${sourceTable}:${item.sourceId}:${item.fieldName}`;
      const text = data.translations[key];
      if (text) out[`${item.sourceId}::${item.fieldName}`] = text;
      else console.warn(`  missing translation for ${targetLocale} / ${key}`);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// 1. UI chrome strings
// ---------------------------------------------------------------------------

async function translateUiStrings() {
  console.log(`\nTranslating ${UI_KEYS.length} UI strings...`);
  const items: TranslateItem[] = UI_KEYS.map((key) => ({ sourceId: 'global', fieldName: key, text: key }));

  const result: Record<string, Partial<Record<string, string>>> = {};
  for (const locale of TARGET_LOCALES) {
    console.log(`  -> ${locale}`);
    const translated = await translateItems('help_ui_string', items, locale);
    for (const key of UI_KEYS) {
      const text = translated[`global::${key}`];
      if (text) {
        result[key] ||= {};
        result[key][locale] = text;
      }
    }
  }

  for (const [key, overrides] of Object.entries(UI_KEY_OVERRIDES)) {
    result[key] ||= {};
    Object.assign(result[key], overrides);
  }

  const lines: string[] = [];
  lines.push("import type { UiKey } from './ui-keys';");
  lines.push("import type { Locale } from './locales';");
  lines.push('');
  lines.push('// Generated by scripts/translate.ts -- do not hand-edit. Re-run the script');
  lines.push('// after adding a new key to ui-keys.ts.');
  lines.push('export const UI_STRINGS: Record<UiKey, Partial<Record<Exclude<Locale, "en">, string>>> = {');
  for (const key of UI_KEYS) {
    lines.push(`  ${JSON.stringify(key)}: {`);
    for (const locale of TARGET_LOCALES) {
      const text = result[key]?.[locale];
      if (text) lines.push(`    ${locale}: ${JSON.stringify(text)},`);
    }
    lines.push('  },');
  }
  lines.push('};');
  lines.push('');

  const outPath = `${rootDir}src/i18n/ui.generated.ts`;
  writeFileSync(outPath, lines.join('\n'));
  console.log(`Wrote ${outPath}`);
}

// ---------------------------------------------------------------------------
// 2. Article bodies -- Markdown-aware block/run parser
// ---------------------------------------------------------------------------

type Block =
  | { kind: 'heading'; level: number; text: string }
  | { kind: 'list'; ordered: boolean; items: string[] }
  | { kind: 'paragraph'; text: string };

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split('\n');
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') {
      i++;
      continue;
    }
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({ kind: 'heading', level: headingMatch[1].length, text: headingMatch[2] });
      i++;
      continue;
    }
    const bulletMatch = line.match(/^[-*]\s+(.*)$/);
    const numberedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (bulletMatch || numberedMatch) {
      const ordered = !!numberedMatch;
      const items: string[] = [];
      while (i < lines.length) {
        const l = lines[i];
        const bm = l.match(/^[-*]\s+(.*)$/);
        const nm = l.match(/^\d+\.\s+(.*)$/);
        if (ordered && nm) {
          items.push(nm[1]);
          i++;
        } else if (!ordered && bm) {
          items.push(bm[1]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ kind: 'list', ordered, items });
      continue;
    }
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '') {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ kind: 'paragraph', text: paraLines.join(' ') });
  }
  return blocks;
}

function renderBlocks(blocks: Block[]): string {
  return blocks
    .map((b) => {
      if (b.kind === 'heading') return `${'#'.repeat(b.level)} ${b.text}`;
      if (b.kind === 'list') return b.items.map((item, i) => (b.ordered ? `${i + 1}. ${item}` : `- ${item}`)).join('\n');
      return b.text;
    })
    .join('\n\n');
}

// DeepL, given a full sentence containing `[text](/some/url/)`, doesn't just
// translate the link text -- it also "translates" the URL itself (dashed
// words inside a URL read as natural language to it), silently producing a
// dead link. Swap every URL for an opaque token before sending, and put the
// real URL back afterward -- the link *text* still gets translated in full
// sentence context (that's the whole reason blocks aren't split into runs).
function protectUrls(text: string): { text: string; urls: string[] } {
  const urls: string[] = [];
  const protectedText = text.replace(/\]\(([^)]+)\)/g, (_m, url) => {
    urls.push(url);
    return `](§URL${urls.length - 1}§)`;
  });
  return { text: protectedText, urls };
}

function restoreUrls(text: string, urls: string[]): string {
  return text.replace(/§URL(\d+)§/g, (_m, i) => urls[Number(i)] ?? '');
}

// Swap every bolded UI-element name in TERM_OVERRIDES for an opaque token
// before sending, for the same reason as URLs: DeepL can't be trusted to
// preserve a specific fixed-vocabulary term consistently across separate
// block-level calls (confirmed in testing -- both "Viewer" and "Web Store"
// came back as multiple different translations, or untranslated, within the
// same article). The token is restored with the exact canonical translation
// instead of whatever DeepL would have produced. Longest terms first, so
// e.g. "Add Property" matches whole rather than leaving "Add " stranded
// around a separately-matched "Property".
const TERM_NAMES = Object.keys(TERM_OVERRIDES).sort((a, b) => b.length - a.length);
const TERM_RE = new RegExp(`\\*\\*(${TERM_NAMES.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\*\\*`, 'g');

function protectTerms(text: string): { text: string; terms: string[] } {
  const terms: string[] = [];
  const protectedText = text.replace(TERM_RE, (_m, term) => {
    terms.push(term);
    return `**§TERM${terms.length - 1}§**`;
  });
  return { text: protectedText, terms };
}

function restoreTerms(text: string, terms: string[], targetLocale: string): string {
  return text.replace(/§TERM(\d+)§/g, (_m, i) => {
    const term = terms[Number(i)];
    return TERM_OVERRIDES[term]?.[targetLocale] ?? term;
  });
}

// Every internal cross-article link in the English source points at
// /en/<slug>/ -- slugs are identical across locales (see content.config.ts),
// so once a URL is restored the only fix-up needed is repointing the locale
// segment, never re-deriving the slug itself.
function relocalizeLinks(text: string, targetLocale: string): string {
  return text.replace(/\]\(\/en\//g, `](/${targetLocale}/`);
}

// Locale-specific fixes for a documented systemic DeepL weakness that a
// whole-phrase TERM_OVERRIDES entry can't reach, because it recurs
// mid-sentence in ordinary prose, differently worded every time, not just in
// isolated bolded UI labels. German: DeepL renders "property"/"properties"
// (real estate) as "Eigenschaft(en)" (attribute/characteristic) throughout
// free-flowing text -- the identical bug CLAUDE.md documents as already
// fixed for ownia-app's *guest*-facing dictionary (property -> Unterkunft).
// This corpus never uses "Eigenschaft" in the attribute sense, and both
// words are feminine with identical singular case endings, so a blanket
// whole-word swap is grammatically safe here.
const POST_PROCESS: Partial<Record<string, Array<[RegExp, string]>>> = {
  de: [
    [/\bEigenschaften\b/g, 'Unterkünfte'],
    [/\bEigenschaft\b/g, 'Unterkunft'],
  ],
};

function applyPostProcess(text: string, targetLocale: string): string {
  const rules = POST_PROCESS[targetLocale];
  if (!rules) return text;
  return rules.reduce((out, [re, replacement]) => out.replace(re, replacement), text);
}

interface Frontmatter {
  title: string;
  description: string;
  category: string;
  articleId: string;
  order: number;
  updatedDate: string;
}

function parseMarkdownFile(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('Could not parse frontmatter');
  const [, fm, body] = match;
  const get = (key: string) => {
    const m2 = fm.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, 'm'));
    return m2 ? m2[1] : '';
  };
  return {
    frontmatter: {
      title: get('title'),
      description: get('description'),
      category: get('category'),
      articleId: get('articleId'),
      order: Number(get('order')),
      updatedDate: get('updatedDate'),
    },
    body: body.trim(),
  };
}

async function translateArticle(slug: string, raw: string, targetLocale: string) {
  const { frontmatter, body } = parseMarkdownFile(raw);
  const blocks = parseBlocks(body);

  // Each block (a heading, a whole paragraph, or one list item) is sent to
  // DeepL as a single string, inline **bold**/[link](url) markup included
  // verbatim -- translating a whole sentence/paragraph at once gives DeepL
  // real grammatical context (needed for correct word order in French/German
  // etc.), which an earlier per-fragment-run approach lost, producing
  // broken word order and mistranslated short bold fragments (e.g. "Resume
  // setup" -> "CV" instead of "continuer"). The trade-off is DeepL is only
  // ~mostly~ reliable at leaving markdown punctuation untouched -- spot
  // check output for mangled `**`/`[]()` syntax before shipping.
  const items: TranslateItem[] = [];
  const urlsByField = new Map<string, string[]>();
  const termsByField = new Map<string, string[]>();
  items.push({ sourceId: slug, fieldName: 'title', text: frontmatter.title });
  items.push({ sourceId: slug, fieldName: 'description', text: frontmatter.description });

  function addItem(fieldName: string, rawText: string) {
    const urlPass = protectUrls(rawText);
    if (urlPass.urls.length) urlsByField.set(fieldName, urlPass.urls);
    const termPass = protectTerms(urlPass.text);
    if (termPass.terms.length) termsByField.set(fieldName, termPass.terms);
    items.push({ sourceId: slug, fieldName, text: termPass.text });
  }

  blocks.forEach((block, blockIndex) => {
    if (block.kind === 'paragraph' || block.kind === 'heading') {
      addItem(`b${blockIndex}`, block.text);
    } else {
      block.items.forEach((itemText, itemIndex) => addItem(`b${blockIndex}.i${itemIndex}`, itemText));
    }
  });

  const translated = await translateItems('help_article', items, targetLocale);
  const get = (fieldName: string, fallback: string) => {
    let text = translated[`${slug}::${fieldName}`] ?? fallback;
    const urls = urlsByField.get(fieldName);
    if (urls) text = restoreUrls(text, urls);
    const terms = termsByField.get(fieldName);
    if (terms) text = restoreTerms(text, terms, targetLocale);
    text = relocalizeLinks(text, targetLocale);
    return applyPostProcess(text, targetLocale);
  };

  const newTitle = get('title', frontmatter.title);
  const newDescription = get('description', frontmatter.description);

  const newBlocks: Block[] = blocks.map((block, blockIndex) => {
    if (block.kind === 'paragraph' || block.kind === 'heading') {
      const text = get(`b${blockIndex}`, block.text);
      return block.kind === 'heading' ? { kind: 'heading', level: block.level, text } : { kind: 'paragraph', text };
    }
    const newItems = block.items.map((itemText, itemIndex) => get(`b${blockIndex}.i${itemIndex}`, itemText));
    return { kind: 'list', ordered: block.ordered, items: newItems };
  });

  const newBody = renderBlocks(newBlocks);

  return [
    '---',
    `title: ${JSON.stringify(newTitle)}`,
    `description: ${JSON.stringify(newDescription)}`,
    `category: ${JSON.stringify(frontmatter.category)}`,
    `articleId: ${JSON.stringify(frontmatter.articleId)}`,
    `order: ${frontmatter.order}`,
    `updatedDate: ${frontmatter.updatedDate}`,
    `locale: ${JSON.stringify(targetLocale)}`,
    '---',
    '',
    newBody,
    '',
  ].join('\n');
}

async function translateArticles() {
  const enDir = `${rootDir}src/content/help/en`;
  const files = readdirSync(enDir).filter((f) => f.endsWith('.md'));
  console.log(`\nTranslating ${files.length} articles into ${TARGET_LOCALES.length} locales...`);

  for (const locale of TARGET_LOCALES) {
    const outDir = `${rootDir}src/content/help/${locale}`;
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      console.log(`  ${locale}/${slug}`);
      const raw = readFileSync(`${enDir}/${file}`, 'utf-8');
      const translated = await translateArticle(slug, raw, locale);
      writeFileSync(`${outDir}/${file}`, translated);
    }
  }
}

async function main() {
  await translateUiStrings();
  await translateArticles();
  console.log('\nDone. Spot-check headings, buttons, and short phrases before shipping.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
