const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
    images: {
        unoptimized: true
    },
    experimental: {
        transpilePackages: ['react-syntax-highlighter', 'swagger-client', 'swagger-ui-react'],
    }
});
