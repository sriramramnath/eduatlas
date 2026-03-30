// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkTikz from './src/utils/remarkTikz.mjs';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://eduosatlas.vercel.app',
  markdown: {
    remarkPlugins: [remarkTikz],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
