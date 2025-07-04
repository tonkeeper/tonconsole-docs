import '../styles.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GoogleAnalytics gaId="G-4WLHEM257G" />
        <Layout pageMap={pageMap}>{children}</Layout>
      </body>
    </html>
  );
}
