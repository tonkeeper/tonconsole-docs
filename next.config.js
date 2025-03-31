const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
});

const repo = 'tonconsole-docs';

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  experimental: {
    largePageDataBytes: 161 * 1000,
  },
});
