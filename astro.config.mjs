import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://github.com/hankvega/curacavi-patrimonial',
  output: 'static',
  // base: '/nombre-repo/', // descomenta si usas GitHub Pages en subruta
});
