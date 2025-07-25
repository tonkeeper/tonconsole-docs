import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { TelegramIcon, ExternalLink } from './components';
import { LINKS } from './constants';
import { useRouter } from 'next/router';
import { TonApiIcon } from './components/TonApiIcon';

const config: DocsThemeConfig = {
  logo: (
    <div className="nx-flex nx-items-center max-[500px]:gap-2 min-[500px]:gap-3">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14L4 14L14 4L14 14Z" fill="currentColor" />
        <path opacity="0.8" d="M14 14L4 28L4 14L14 14Z" fill="currentColor" />
        <path opacity="0.8" d="M28 4L14 4L14 14L28 4Z" fill="currentColor" />
        <path opacity="0.4" d="M14 14L28 28L4 28L14 14Z" fill="currentColor" />
        <path opacity="0.6" d="M28 28L28 4L14 14L28 28Z" fill="currentColor" />
      </svg>
      <span className="nx-font-bold max-[500px]:text-lg min-[500px]:text-2xl">Documentation</span>
    </div>
  ),
  head: () => {
    const { title } = useConfig();
    const { route } = useRouter();

    return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta data-cd-check="1cb6adb6d4b631b9" />
        <title>{title && route !== '/' ? title + ' – Console Docs' : 'Console Docs'}</title>

        {/*indexing*/}
        <meta name="fragment" content="”!”" />
        <meta name="robots" content="index,follow" />
        <meta name="audience" content="all" />
        {/*indexing*/}

        {/*description*/}
        <meta
          name="description"
          content="Knowledge base for Ton Console users and partners: manage dapps, tokens and payments in one place with powerful API and deep commercial integrations"
        />
        <meta
          name="keywords"
          content="tonconsole, tonapi, documentation, dapps, business, TON, API, blockchain, Web3, console, B2B, development"
        />
        {/*description*/}

        {/*Open Graph meta*/}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://docs.tonconsole.com" />
        <meta property="og:site_name" content="Documentation" />
        <meta property="og:title" content="Console Docs" />
        <meta property="og:image" content="https://docs.tonconsole.com/og-image.png" />
        <meta
          property="og:description"
          content="Knowledge base for Ton Console users and partners: manage dapps, tokens and payments in one place with powerful API and deep commercial integrations"
        />
        {/*Open Graph meta*/}

        {/*Twitter meta*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tonappshq" />
        <meta property="twitter:url" content="https://docs.tonconsole.com" />
        <meta name="twitter:title" content="Console Docs" />
        <meta
          name="twitter:description"
          content="Service with business tools for TON blockchain. All to easy launching Web3 apps, API calls and transactions control in few clicks"
        />
        {/*Twitter meta*/}

        {/*favicon*/}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/*favicon*/}

        {/* Yandex.Metrika */}
        <>
          {/* @ts-ignore */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(99489400, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });
      `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/99489400"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        </>
        {/* Yandex.Metrika */}
      </>
    );
  },
  project: {
    link: LINKS.GITHUB,
  },
  chat: {
    icon: <TelegramIcon />,
    link: LINKS.TELEGRAM_CHANNEL,
  },
  toc: {
    float: true,
    extraContent: (
      <div>
        <hr className='my-6 dark:nx-border-neutral-800' />
        <a
          href={LINKS.TONAPI_TECH_CHAT}
          target="_blank"
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-[10px] rounded-xl shadow-sm w-full max-w-md">
          <div className="flex flex-col text-left">
            <span className="nx-font-semibold nx-tracking-tight">TonAPI Tech chat</span>
            <span className="text-sm text-gray-500">Get help and answers here</span>
          </div>
          <svg
            className="ml-auto w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    ),
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    useLink: () => 'https://github.com/tonkeeper/tonconsole-docs/issues',
  },
  docsRepositoryBase: 'https://github.com/tonkeeper/tonconsole-docs/tree/master',
  footer: {
    component: (
      <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
        <hr className="dark:nx-border-neutral-800" />
        <div className="nx-mx-auto nx-flex gap-8 flex-wrap justify-between nx-max-w-[90rem] py-5 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
          <ExternalLink variant="secondary" href={LINKS.TERMS}>
            Terms
          </ExternalLink>
          {/* <ExternalLink variant="secondary" href={LINKS.PRIVACY}>Privacy</ExternalLink> */}
          <ExternalLink variant="secondary" href={LINKS.SUPPORT}>
            Support
          </ExternalLink>
          <ExternalLink variant="secondary" href={LINKS.CONTACT}>
            Contact us
          </ExternalLink>
          <div className="flex flex-1 justify-end">
            <ExternalLink variant="secondary" href={LINKS.CONSOLE}>
              tonconsole.com
            </ExternalLink>
          </div>
        </div>
      </footer>
    ),
  },
};

export default config;
