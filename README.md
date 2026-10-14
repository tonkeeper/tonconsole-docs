# Tonconsole Docs

Tonconsole documentation built with Next.js and the standard Fumadocs UI.

## Development

```bash
npm install
npm run dev
```

## Static export

```bash
npm run build
```

Deploy the generated `out/` directory to a static host. Page URLs retain the original paths (for example, `/tonapi/rest-api/accounts/`); configure the host to serve directory `index.html` files and `404.html` for missing pages. Search runs in the browser using the exported `/api/search` index. No Next.js server is needed.

## Content

All 55 articles from `tonconsole-docs/pages` are in `content/docs`. `meta.json` files define sidebar order and exclude the original hidden articles from navigation. Images, video, and Tonconsole icons are in `public/`.

Tabs, callouts, cards, steps, and accordions use Fumadocs components. Imported code examples are included directly in the articles. REST API operation lists were migrated from the original project's exported OpenAPI data into Markdown, so building documentation does not require fetching the API specification.

`src/lib/source.ts` defines the Fumadocs MDX collection. `src/lib/layout.shared.tsx` configures the standard docs layout; `src/app/layout.tsx` and article metadata define Tonconsole SEO and social previews.

## Validation

```bash
npm run types:check
npm run build
```
