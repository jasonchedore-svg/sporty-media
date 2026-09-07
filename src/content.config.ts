import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(["Education", "Board notes", "Style"]),
    tags: z.array(z.string()).default([]),
    heroKicker: z.string().optional(),
  }),
});

export const collections = { posts };
