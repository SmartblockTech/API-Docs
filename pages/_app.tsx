import '@styles/global.sass';
import { FC, Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import { bootstrapExternalLinks, bootstrapHeadersWithId, configProgressBar } from '@helpers/template-modifier';
import Head from 'next/head';

configProgressBar();

const SmartblockDocumentation: FC<AppProps> = ({ Component, pageProps }) => {

  useEffect(() => {
    bootstrapHeadersWithId();
    bootstrapExternalLinks();
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        <title>Smartblock Docs</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default SmartblockDocumentation;
