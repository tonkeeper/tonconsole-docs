import nextra from 'nextra';

const withNextra = nextra({});

const isGhPages = process.env.GHPAGES === '1';
const repoName = 'tonconsole-docs';

const nextConfig = {
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
  output: 'export',
};

export default withNextra(nextConfig);
