const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
});

const isGhPages = process.env.GHPAGES === '1';
const repoName = 'tonconsole-docs';

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  experimental: {
    largePageDataBytes: 161 * 1000,
  },
  ...(isGhPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),
});