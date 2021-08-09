import '@styles/global.scss';
import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import favicon from '@images/favicon.ico'

class SmartblockAPIDocsApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel='shortcut icon' type='image/x-icon' href={favicon} />
          <title>Smartblock Docs</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
};

export default SmartblockAPIDocsApp;