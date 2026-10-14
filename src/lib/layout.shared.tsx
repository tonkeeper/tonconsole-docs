import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M14 14L4 14L14 4L14 14Z" fill="currentColor" />
            <path opacity="0.8" d="M14 14L4 28L4 14L14 14Z" fill="currentColor" />
            <path opacity="0.8" d="M28 4L14 4L14 14L28 4Z" fill="currentColor" />
            <path opacity="0.4" d="M14 14L28 28L4 28L14 14Z" fill="currentColor" />
            <path opacity="0.6" d="M28 28L28 4L14 14L28 28Z" fill="currentColor" />
          </svg>
          {appName}
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: 'Tonconsole', url: 'https://tonconsole.com', external: true },
      { text: 'Support', url: 'https://t.me/ton_console_bot', external: true },
    ],
  };
}
