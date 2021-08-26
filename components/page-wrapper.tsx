import { FC } from 'react';
import AppNavBar from '@components/shared/navbar';
import AppFooter from '@components/shared/footer';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import PageWrapperStyles from '@styles/page-wrapper.module.sass';

type PageWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Generates a document wrapper (w/ navbar and footer) for an specific routed page
 */
const PageWrapper: FC<PageWrapperProps> = ({ children, ...standardProps }) => {
  return (
    <div {...standardProps} className={PageWrapperStyles.bodyWrapper}>
      <AppNavBar />
      <div className={PageWrapperStyles.subWrapper}>
        {children}
      </div>
      <AppFooter />
    </div>
  );
}

export default PageWrapper;
