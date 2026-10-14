import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Tonconsole Docs';
export const siteUrl = 'https://docs.tonconsole.com';
export const siteDescription =
  'Knowledge base for Tonconsole users and partners: manage dapps, tokens and payments in one place with powerful API and deep commercial integrations';
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export function getPageCanonicalUrl(page: { url: string }) {
  const path = page.url.endsWith('/') ? page.url : `${page.url}/`;
  return new URL(path, siteUrl).toString();
}

export const gitConfig = {
  user: 'tonkeeper',
  repo: 'tonconsole-docs',
  branch: 'master',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
