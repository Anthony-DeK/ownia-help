import type { Locale } from './locales';

export const CATEGORIES = ['getting-started', 'payments', 'calendar', 'growth', 'team'] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, Record<Locale, string>> = {
  'getting-started': {
    en: 'Getting Started',
    fr: 'Premiers pas',
    es: 'Primeros pasos',
    de: 'Erste Schritte',
    it: 'Per iniziare',
    pt: 'Primeiros passos',
  },
  payments: {
    en: 'Payments',
    fr: 'Paiements',
    es: 'Pagos',
    de: 'Zahlungen',
    it: 'Pagamenti',
    pt: 'Pagamentos',
  },
  calendar: {
    en: 'Calendar',
    fr: 'Calendrier',
    es: 'Calendario',
    de: 'Kalender',
    it: 'Calendario',
    pt: 'Calendário',
  },
  growth: {
    en: 'Growing Direct Bookings',
    fr: 'Développer les réservations directes',
    es: 'Aumentar las reservas directas',
    de: 'Direktbuchungen steigern',
    it: 'Aumentare le prenotazioni dirette',
    pt: 'Aumentar as reservas diretas',
  },
  team: {
    en: 'Team & Account',
    fr: 'Équipe et compte',
    es: 'Equipo y cuenta',
    de: 'Team und Konto',
    it: 'Team e account',
    pt: 'Equipa e conta',
  },
};
