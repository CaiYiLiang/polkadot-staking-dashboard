import Document, { Html, Head, Main, NextScript } from 'next/document';

// @ts-ignore Some typing issue with NextJS Document, waiting for release to stable: https://github.com/vercel/next.js/pull/32117
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
