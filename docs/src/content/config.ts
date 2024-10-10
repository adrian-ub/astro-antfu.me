import { defineCollection, z } from 'astro:content'
import { i18nSchema, pagesSchema } from 'astro-vitesse/schema'

export const collections = {
  pages: defineCollection({ schema: pagesSchema() }),
  i18n: defineCollection({
    type: 'data',
    schema: i18nSchema({
      extend: z.object({
        'sponsor.thanks': z.string().optional(),
        'sponsor.to-suport': z.string().optional(),
      }),
    }),
  }),
}
