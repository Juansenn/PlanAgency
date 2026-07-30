import { defineCollection, z } from 'astro:content';
// Importamos el loader 'glob' que ahora es obligatorio
import { glob } from 'astro/loaders';

const portfolioCollection = defineCollection({
  // Le indicamos a Astro dónde buscar y qué tipo de archivos cargar
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    technologies: z.array(z.string()),
    publishDate: z.date(),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
};