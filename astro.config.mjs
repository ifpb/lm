import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkShikiTwoslash from 'remark-shiki-twoslash';

// https://astro.build/config
export default defineConfig({
  site: 'https://ifpb.github.io',
  base: '/lm',
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [
        [
          remarkShikiTwoslash.default,
          { themes: ['github-light', 'github-dark'] },
        ],
      ],
    }),
  ],
});
