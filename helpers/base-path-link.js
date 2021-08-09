import Link from 'next/link';;
import PropTypes from 'prop-types';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';
const basePathEndsWithSlash = basePath.endsWith('/');

const BasePathLink = ({ href, children, ...props }) => {

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

BasePathLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default BasePathLink;

