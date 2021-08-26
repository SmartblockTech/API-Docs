import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8'/>
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

export default CustomDocument;
