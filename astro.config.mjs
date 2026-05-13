// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://desmoinesseptic.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
