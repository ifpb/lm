import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { prettyCodeOptions } from './plugins/rehype-pretty-code-config';
import { rehypeAutolinkHeadingsOptions } from './plugins/rehype-autolink-headings-config';

const markdownConfig = {
  rehypePlugins: [
    rehypeSlug,
    [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    [rehypePrettyCode, prettyCodeOptions],
  ],
  syntaxHighlight: false,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://ifpb.github.io',
  base: '/lm',
  markdown: markdownConfig,
  integrations: [react(), tailwind(), mdx()],
});
