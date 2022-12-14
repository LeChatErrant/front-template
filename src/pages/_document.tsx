import createEmotionServer from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import createEmotionCache from '@utils/emotionCache'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="/favicon/favicon-32x32.png" rel="icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <meta name="emotion-insertion-point" content="" />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) =>
            sheet.collectStyles(<App emotionCache={cache} {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      // This is important. It prevents Emotion to render invalid HTML.
      // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
      const emotionStyles = extractCriticalToChunks(initialProps.html)
      const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ))

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        emotionStyleTags,
      }
    } finally {
      sheet.seal()
    }
  }
}
