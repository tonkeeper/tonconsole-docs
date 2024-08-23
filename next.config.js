const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
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
  ],
});
