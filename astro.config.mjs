// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://portfolio-anas-boulif.vercel.app',
  integrations: [sitemap()],
});
