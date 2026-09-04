## Contexto do projeto (leia isso primeiro)

Site do blog **Caminho da Luz** — conteúdo de esoterismo/espiritualidade em
posts de cauda longa (ex: "como fazer limpeza energética com sal grosso"),
com o objetivo de gerar tráfego orgânico (SEO) e converter leitores em
clientes da loja da dona no **TikTok Shop** (perfil `@caminhodaluz_11`,
TikTok e Instagram).

Quem está por trás do projeto não é dev — é Analista de Monitoramento CFTV,
iniciante em programação (ver perfil completo no `~/.claude/CLAUDE.md`
global da máquina onde isso foi criado). Explicar comandos antes de rodar,
respostas em português.

**Decisões já tomadas** (não repetir perguntas sobre isso):

- Domínio `ocaminhodaluz.com.br` já registrado e pago (registro.br, ~R$40/ano).
- Usuário no GitHub: `ocaminhodaluz`. Repo pensado como `ocaminhodaluz.github.io`
  (Pages de usuário, serve na raiz do domínio custom via `public/CNAME`).
- Hospedagem: **GitHub Pages**, grátis, deploy via GitHub Actions
  (`.github/workflows/deploy.yml`).
- E-mail próprio (`contato@ocaminhodaluz.com.br`) foi **deixado de lado por
  enquanto**, decisão consciente — não sugerir configurar isso de novo sem
  o usuário pedir. Zoho Mail não tem mais plano grátis viável (mínimo
  ~R$60/ano); alternativa gratuita seria encaminhamento pro Gmail pessoal.
- **Fluxo de publicação escolhido**: o usuário revisa e aprova vários posts
  de uma vez (não posta um por um manualmente). Cada post tem `pubDate` no
  frontmatter; `src/lib/posts.ts` (`getPublishedPosts`) só retorna posts
  com `pubDate <= hoje`, e é isso que é usado em toda listagem/build
  (`blog/index.astro`, `blog/[...slug].astro`, `rss.xml.js`, `index.astro`).
  Um post com data futura fica no repositório mas não gera página até o
  dia chegar.
- O GitHub Actions (`deploy.yml`) roda o build automaticamente todo dia às
  **12:00 UTC (9h de Brasília)** via `schedule: cron`, além de rodar a
  cada `push` na branch `main`. É esse cron que "libera" o próximo post da
  fila sem o usuário precisar fazer nada no dia — ele só precisa aprovar e
  dar `git push` quando quiser adicionar posts novos à fila.
- Cada post tem `category` (obrigatório) e `tiktokShopLink` (opcional —
  link específico de produto; se ausente, usa `TIKTOK_SHOP_URL` de
  `src/consts.ts`). O componente `src/components/TikTokShopCTA.astro` é
  inserido automaticamente no fim de todo post (via `BlogPost.astro`) e
  também pode ser inserido manualmente no meio do conteúdo em posts `.mdx`
  (é assim que o usuário pediu: "no meio do assunto inserir link").
- Paleta de cores trocada pra tons roxo/dourado (`--accent`, `--accent-dark`,
  `--gold` em `src/styles/global.css`) — tema esotérico, não é o azul
  padrão do template Astro.

**Próximos passos pendentes** (verificar se já foram feitos antes de
sugerir repetir):

- Criar o repositório `ocaminhodaluz.github.io` no GitHub e dar push neste
  código.
- Ativar GitHub Pages nas configurações do repo (Settings → Pages → Source:
  GitHub Actions).
- Configurar DNS do domínio no painel do registro.br apontando pro GitHub
  Pages (registros A + CNAME `www`).
- Revisão visual do site pelo usuário (ele pediu pra ver com calma depois
  — não estava bloqueando o andamento).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
