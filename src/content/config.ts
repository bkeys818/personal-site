import { defineCollection, z } from 'astro:content'

export const collections = {
  blog: defineCollection({
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
