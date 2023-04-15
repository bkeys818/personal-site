import { defineCollection, z } from 'astro:content'

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date().transform(d => new Date(d)),
      desc: z.string(),
      tags: z.array(z.enum(['some tag', 'programming'])).refine(
        (arr) => arr.length === new Set(arr).size,
        "Tags must be unique"
      ),
      imgSrc: z.string().optional(),
      imgAlt: z.string().optional(),
    }),
  }),
}
