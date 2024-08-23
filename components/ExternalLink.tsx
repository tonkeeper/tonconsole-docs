import { FunctionComponent, PropsWithChildren } from 'react';
import cn from 'classnames';

export const ExternalLink: FunctionComponent<
  PropsWithChildren<{ href: string; className?: string; variant?: 'primary' | 'secondary' }>
> = ({ href, className, variant, children }) => {
  const cls =
    variant === 'secondary'
      ? cn(
          className,
          'nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50',
        )
      : cn(
          className,
          'nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]',
        );

  return (
    <a href={href} className={cls} rel="noopener" target="_blank">
      {children}
    </a>
  );
};
