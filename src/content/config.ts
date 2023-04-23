import { z, defineCollection } from 'astro:content';

const classnotes = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  classnotes,
};
