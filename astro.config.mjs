// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://help.ownia.co',

  i18n: {
    locales: ['en', 'fr', 'es', 'de', 'it', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  redirects: {
    '/': '/en/',
  },
});
