import { defineCollection, z } from 'astro:content'

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date().transform(d => new Date(d)),
      desc: z.string(),
      tag: z.enum(['some tag', 'programming']),
      img: z.object({
        src: z.string(),
        alt: z.string().optional(),
        bgColor: z
          .string()
          .regex(/[a-f\d]{6}|[a-f\d]{3}/)
          .optional(),
        contain: z.boolean().optional()
      }),
    }),
  }),
}
