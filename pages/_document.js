import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    const meta = {
      title: 'Thoughts by Lee.',
      description: 'tu ne cede malis, sed contra audentior ito..',
    }

    return (
      <Html lang="en" className="bg-yellow-50 text-gray-700 antialiased">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
