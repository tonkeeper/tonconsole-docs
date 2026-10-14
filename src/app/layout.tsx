import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import 'katex/dist/katex.min.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { appName, siteDescription, siteUrl } from '@/lib/shared';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: appName, template: `%s – ${appName}` },
  description: siteDescription,
  applicationName: appName,
  keywords: ['tonconsole', 'tonapi', 'documentation', 'dapps', 'TON', 'API', 'blockchain', 'Web3', 'development'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: appName,
    title: appName,
    description: siteDescription,
    images: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonappshq',
    title: appName,
    description: siteDescription,
    images: '/og-image.png',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: { 'data-cd-check': '1cb6adb6d4b631b9' },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ options: { type: 'static', api: '/api/search' } }}>{children}</RootProvider>
      </body>
    </html>
  );
}
