import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Dicas de energia: como preencher em docs/dicas.md. */
const dicas = defineCollection({
  loader: glob({ base: "./src/content/dicas", pattern: "**/*.md" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    tema: z.enum(["Como funciona", "Economia de energia"]),
    ordem: z.number(),
    atualizadoEm: z.coerce.date(),
    fontes: z.array(z.object({ nome: z.string(), url: z.url() })).default([]),
  }),
});

export const collections = { dicas };
