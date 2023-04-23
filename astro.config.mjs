import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  // markdown: {
  //   shikiConfig: {
  //     // theme: 'github-dark',
  //     // theme: 'github-light',
  //   },
  // },
  site: 'https://ifpb.github.io',
  base: '/lm',
});
