import { getCollection } from 'astro:content';

/**
 * Retorna só os posts cuja data de publicação (pubDate) já chegou,
 * ordenados do mais recente pro mais antigo.
 *
 * Isso é o que permite o fluxo de "revisar tudo de uma vez": posts com
 * pubDate no futuro ficam no repositório mas não aparecem no site até o
 * dia deles chegar e o build diário (GitHub Actions) rodar de novo.
 */
export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => {
		return data.pubDate.valueOf() <= Date.now();
	});
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
