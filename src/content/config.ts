import { defineCollection, z } from "astro:content";

const LearnCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    update: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
  }),
});

export const collections = {
  learn: LearnCollection,
};
