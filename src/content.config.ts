import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
      title: z.string(),
      date: z.date().transform(d => new Date(d)),
      desc: z.string(),
      tag: z.enum(['tech', 'programming']),
      img: z.object({
        src: z.string(),
        alt: z.string().optional(),
        bgColor: z.string().optional(),
        contain: z.boolean().optional(),
      }),
    }),
  }),
}
