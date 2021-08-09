import AppNavBar from '@shared/navbar';
import AppFooter from '@shared/footer';
import { useEffect } from 'react';

/**
 * Generates a document wrapper (w/ navbar and footer) for an specific routed page
 */
const PageWrapper = (props) => {

  useEffect(() => {
    if (props.pageTitle)
      document.title = props.pageTitle.trim() + ' - Smartblock Docs';
    else
      document.title = 'Smartblock Docs';
  }, [props.pageTitle]);

  return (
    <div>
      <AppNavBar />
      <div>
        {props.children}
      </div>
      <AppFooter />
    </div>
  );
}

export default PageWrapper;
