const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  redirects: () => [
    {
      source: '/tonapi/api-v2',
      destination: '/tonapi/rest-api',
      permanent: true,
    },
    {
      source: '/tonapi/recipes',
      destination: '/tonapi/cookbook',
      permanent: true,
    },
  ],
});
