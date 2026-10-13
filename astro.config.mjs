import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beginbhv.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
