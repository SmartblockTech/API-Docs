import Link, { LinkProps } from 'next/link';;
import getConfig from 'next/config';
import { FC } from 'react';

type BasePathLinkProps = LinkProps & {
  href: string;
};

const BasePathLink: FC<BasePathLinkProps> = ({ href, children, ...props }) => {

  const { publicRuntimeConfig } = getConfig();
  const basePath: string = publicRuntimeConfig?.basePath ?? '';
  const basePathEndsWithSlash = basePath.endsWith('/');

  const finalHref = basePathEndsWithSlash || href.startsWith('/')
    ? `${basePath}${href}`
    : `${basePath}/${href}`;

  return (
    <Link 
      href={href}
      as={finalHref}
      {...props}>
      {children}
    </Link>
  );
}

export default BasePathLink;
