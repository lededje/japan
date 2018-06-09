import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html:
            `if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker
                .register('/static/service-worker.js', { scope: '/' })
              });
            }`
          }}></script>
          <link rel="stylesheet" href="/static/normalize.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
