import { useMDXComponents as getDocsComponents } from 'nextra-theme-docs';

export const useMDXComponents = (components: Record<string, any> = {}) => ({
  ...getDocsComponents(),
  ...components,
});
