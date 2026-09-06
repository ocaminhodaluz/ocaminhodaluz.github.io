import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Categoria do post (ex: "limpeza energética", "cristais", "tarot")
			category: z.string(),
			// Link específico do TikTok Shop pra esse post (produto relacionado ao assunto).
			// Se não informado, o componente <TikTokShopCTA /> usa o link padrão da loja.
			tiktokShopLink: z.string().url().optional(),
			// Link de afiliado Shopee específico pra esse post (categoria/produto diferente).
			// Se não informado, o componente <ShopeeCTA /> usa o link padrão (SHOPEE_URL).
			shopeeLink: z.string().url().optional(),
		}),
});

export const collections = { blog };
