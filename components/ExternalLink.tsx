import {FunctionComponent, PropsWithChildren} from "react";
import cn from 'classnames';

export const ExternalLink: FunctionComponent<PropsWithChildren<{ href: string; className?: string; }>> = ({ href, className, children }) => {
    return <a
            href={href}
            className={cn(className, "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50")}
            rel="noopener"
            target="_blank"
        >{children}</a>
}
